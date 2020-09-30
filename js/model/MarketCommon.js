define
(
    ["model/base", "model/Common", "model/Core", "model/Domain", "model/MktDomain", "model/Production"],
    /**
     * This package contains the common objects shared by MarketManagement, MarketOperations and Environmental packages.
     *
     */
    function (base, Common, Core, Domain, MktDomain, Production)
    {
        /**
         * This class model the various capacities of a resource.
         *
         * A resource may have numbers of capacities related to operating, ancillary services, energy trade and so forth. Capacities may be defined for active power or reactive power.
         *
         */
        class ResourceCapacity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ResourceCapacity;
                if (null == bucket)
                   cim_data.ResourceCapacity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResourceCapacity[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceCapacity";
                base.parse_attribute (/<cim:ResourceCapacity.capacityType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "capacityType", sub, context);
                base.parse_element (/<cim:ResourceCapacity.defaultCapacity>([\s\S]*?)<\/cim:ResourceCapacity.defaultCapacity>/g, obj, "defaultCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCapacity.maximumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.maximumCapacity>/g, obj, "maximumCapacity", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceCapacity.minimumCapacity>([\s\S]*?)<\/cim:ResourceCapacity.minimumCapacity>/g, obj, "minimumCapacity", base.to_string, sub, context);
                base.parse_attribute (/<cim:ResourceCapacity.unitSymbol\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "unitSymbol", sub, context);
                base.parse_attributes (/<cim:ResourceCapacity.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                let bucket = context.parsed.ResourceCapacity;
                if (null == bucket)
                   context.parsed.ResourceCapacity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "ResourceCapacity", "capacityType", "capacityType", fields);
                base.export_element (obj, "ResourceCapacity", "defaultCapacity", "defaultCapacity",  base.from_string, fields);
                base.export_element (obj, "ResourceCapacity", "maximumCapacity", "maximumCapacity",  base.from_string, fields);
                base.export_element (obj, "ResourceCapacity", "minimumCapacity", "minimumCapacity",  base.from_string, fields);
                base.export_attribute (obj, "ResourceCapacity", "unitSymbol", "unitSymbol", fields);
                base.export_attributes (obj, "ResourceCapacity", "RegisteredResource", "RegisteredResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ResourceCapacity_collapse" aria-expanded="true" aria-controls="ResourceCapacity_collapse" style="margin-left: 10px;">ResourceCapacity</a></legend>
                    <div id="ResourceCapacity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#capacityType}}<div><b>capacityType</b>: {{capacityType}}</div>{{/capacityType}}
                    {{#defaultCapacity}}<div><b>defaultCapacity</b>: {{defaultCapacity}}</div>{{/defaultCapacity}}
                    {{#maximumCapacity}}<div><b>maximumCapacity</b>: {{maximumCapacity}}</div>{{/maximumCapacity}}
                    {{#minimumCapacity}}<div><b>minimumCapacity</b>: {{minimumCapacity}}</div>{{/minimumCapacity}}
                    {{#unitSymbol}}<div><b>unitSymbol</b>: {{unitSymbol}}</div>{{/unitSymbol}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["capacityTypeResourceCapacityType"] = [{ id: '', selected: (!obj["capacityType"])}]; for (let property in MktDomain.ResourceCapacityType) obj["capacityTypeResourceCapacityType"].push ({ id: property, selected: obj["capacityType"] && obj["capacityType"].endsWith ('.' + property)});
                obj["unitSymbolUnitSymbol"] = [{ id: '', selected: (!obj["unitSymbol"])}]; for (let property in Domain.UnitSymbol) obj["unitSymbolUnitSymbol"].push ({ id: property, selected: obj["unitSymbol"] && obj["unitSymbol"].endsWith ('.' + property)});
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["capacityTypeResourceCapacityType"];
                delete obj["unitSymbolUnitSymbol"];
                delete obj["RegisteredResource_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ResourceCapacity_collapse" aria-expanded="true" aria-controls="{{id}}_ResourceCapacity_collapse" style="margin-left: 10px;">ResourceCapacity</a></legend>
                    <div id="{{id}}_ResourceCapacity_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacityType'>capacityType: </label><div class='col-sm-8'><select id='{{id}}_capacityType' class='form-control custom-select'>{{#capacityTypeResourceCapacityType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/capacityTypeResourceCapacityType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_defaultCapacity'>defaultCapacity: </label><div class='col-sm-8'><input id='{{id}}_defaultCapacity' class='form-control' type='text'{{#defaultCapacity}} value='{{defaultCapacity}}'{{/defaultCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumCapacity'>maximumCapacity: </label><div class='col-sm-8'><input id='{{id}}_maximumCapacity' class='form-control' type='text'{{#maximumCapacity}} value='{{maximumCapacity}}'{{/maximumCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumCapacity'>minimumCapacity: </label><div class='col-sm-8'><input id='{{id}}_minimumCapacity' class='form-control' type='text'{{#minimumCapacity}} value='{{minimumCapacity}}'{{/minimumCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unitSymbol'>unitSymbol: </label><div class='col-sm-8'><select id='{{id}}_unitSymbol' class='form-control custom-select'>{{#unitSymbolUnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/unitSymbolUnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegisteredResource'>RegisteredResource: </label><div class='col-sm-8'><input id='{{id}}_RegisteredResource' class='form-control' type='text'{{#RegisteredResource}} value='{{RegisteredResource_string}}'{{/RegisteredResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ResourceCapacity" };
                super.submit (id, obj);
                temp = MktDomain.ResourceCapacityType[document.getElementById (id + "_capacityType").value]; if (temp) obj["capacityType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ResourceCapacityType." + temp; else delete obj["capacityType"];
                temp = document.getElementById (id + "_defaultCapacity").value; if ("" !== temp) obj["defaultCapacity"] = temp;
                temp = document.getElementById (id + "_maximumCapacity").value; if ("" !== temp) obj["maximumCapacity"] = temp;
                temp = document.getElementById (id + "_minimumCapacity").value; if ("" !== temp) obj["minimumCapacity"] = temp;
                temp = Domain.UnitSymbol[document.getElementById (id + "_unitSymbol").value]; if (temp) obj["unitSymbol"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#UnitSymbol." + temp; else delete obj["unitSymbol"];
                temp = document.getElementById (id + "_RegisteredResource").value; if ("" !== temp) obj["RegisteredResource"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegisteredResource", "0..*", "0..*", "RegisteredResource", "ResourceCapacity"]
                        ]
                    )
                );
            }
        }

        /**
         * An environmental monitoring station, examples of which could be a weather station or a seismic monitoring station.
         *
         */
        class EnvironmentalMonitoringStation extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EnvironmentalMonitoringStation;
                if (null == bucket)
                   cim_data.EnvironmentalMonitoringStation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnvironmentalMonitoringStation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalMonitoringStation";
                base.parse_element (/<cim:EnvironmentalMonitoringStation.dstObserved>([\s\S]*?)<\/cim:EnvironmentalMonitoringStation.dstObserved>/g, obj, "dstObserved", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnvironmentalMonitoringStation.isNetworked>([\s\S]*?)<\/cim:EnvironmentalMonitoringStation.isNetworked>/g, obj, "isNetworked", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnvironmentalMonitoringStation.timeZoneOffset>([\s\S]*?)<\/cim:EnvironmentalMonitoringStation.timeZoneOffset>/g, obj, "timeZoneOffset", base.to_string, sub, context);
                base.parse_attributes (/<cim:EnvironmentalMonitoringStation.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:EnvironmentalMonitoringStation.UsagePoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoint", sub, context);
                base.parse_attributes (/<cim:EnvironmentalMonitoringStation.ReportingCapability\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingCapability", sub, context);
                base.parse_attributes (/<cim:EnvironmentalMonitoringStation.EnvironmentalAnalog\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnvironmentalAnalog", sub, context);
                base.parse_attribute (/<cim:EnvironmentalMonitoringStation.Location\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Location", sub, context);
                let bucket = context.parsed.EnvironmentalMonitoringStation;
                if (null == bucket)
                   context.parsed.EnvironmentalMonitoringStation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnvironmentalMonitoringStation", "dstObserved", "dstObserved",  base.from_boolean, fields);
                base.export_element (obj, "EnvironmentalMonitoringStation", "isNetworked", "isNetworked",  base.from_boolean, fields);
                base.export_element (obj, "EnvironmentalMonitoringStation", "timeZoneOffset", "timeZoneOffset",  base.from_string, fields);
                base.export_attributes (obj, "EnvironmentalMonitoringStation", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "EnvironmentalMonitoringStation", "UsagePoint", "UsagePoint", fields);
                base.export_attributes (obj, "EnvironmentalMonitoringStation", "ReportingCapability", "ReportingCapability", fields);
                base.export_attributes (obj, "EnvironmentalMonitoringStation", "EnvironmentalAnalog", "EnvironmentalAnalog", fields);
                base.export_attribute (obj, "EnvironmentalMonitoringStation", "Location", "Location", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnvironmentalMonitoringStation_collapse" aria-expanded="true" aria-controls="EnvironmentalMonitoringStation_collapse" style="margin-left: 10px;">EnvironmentalMonitoringStation</a></legend>
                    <div id="EnvironmentalMonitoringStation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dstObserved}}<div><b>dstObserved</b>: {{dstObserved}}</div>{{/dstObserved}}
                    {{#isNetworked}}<div><b>isNetworked</b>: {{isNetworked}}</div>{{/isNetworked}}
                    {{#timeZoneOffset}}<div><b>timeZoneOffset</b>: {{timeZoneOffset}}</div>{{/timeZoneOffset}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#UsagePoint}}<div><b>UsagePoint</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/UsagePoint}}
                    {{#ReportingCapability}}<div><b>ReportingCapability</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ReportingCapability}}
                    {{#EnvironmentalAnalog}}<div><b>EnvironmentalAnalog</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnvironmentalAnalog}}
                    {{#Location}}<div><b>Location</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Location}}");}); return false;'>{{Location}}</a></div>{{/Location}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["UsagePoint"]) obj["UsagePoint_string"] = obj["UsagePoint"].join ();
                if (obj["ReportingCapability"]) obj["ReportingCapability_string"] = obj["ReportingCapability"].join ();
                if (obj["EnvironmentalAnalog"]) obj["EnvironmentalAnalog_string"] = obj["EnvironmentalAnalog"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TimeSeries_string"];
                delete obj["UsagePoint_string"];
                delete obj["ReportingCapability_string"];
                delete obj["EnvironmentalAnalog_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnvironmentalMonitoringStation_collapse" aria-expanded="true" aria-controls="{{id}}_EnvironmentalMonitoringStation_collapse" style="margin-left: 10px;">EnvironmentalMonitoringStation</a></legend>
                    <div id="{{id}}_EnvironmentalMonitoringStation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_dstObserved'>dstObserved: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_dstObserved' class='form-check-input' type='checkbox'{{#dstObserved}} checked{{/dstObserved}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isNetworked'>isNetworked: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isNetworked' class='form-check-input' type='checkbox'{{#isNetworked}} checked{{/isNetworked}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_timeZoneOffset'>timeZoneOffset: </label><div class='col-sm-8'><input id='{{id}}_timeZoneOffset' class='form-control' type='text'{{#timeZoneOffset}} value='{{timeZoneOffset}}'{{/timeZoneOffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Location'>Location: </label><div class='col-sm-8'><input id='{{id}}_Location' class='form-control' type='text'{{#Location}} value='{{Location}}'{{/Location}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "EnvironmentalMonitoringStation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dstObserved").checked; if (temp) obj["dstObserved"] = true;
                temp = document.getElementById (id + "_isNetworked").checked; if (temp) obj["isNetworked"] = true;
                temp = document.getElementById (id + "_timeZoneOffset").value; if ("" !== temp) obj["timeZoneOffset"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_Location").value; if ("" !== temp) obj["Location"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "EnvironmentalMonitoringStation"],
                            ["UsagePoint", "0..*", "0..1", "UsagePoint", "EnvironmentalMonitoringStation"],
                            ["ReportingCapability", "0..*", "1", "ReportingCapability", "EnvironmentalMonitoringStation"],
                            ["EnvironmentalAnalog", "0..*", "0..1", "EnvironmentalAnalog", "EnvironmentalMonitoringStation"],
                            ["Location", "0..1", "0..*", "Location", "EnvironmentalMonitoringStation"]
                        ]
                    )
                );
            }
        }

        /**
         * An identification of a party acting in a electricity market business process.
         *
         * This class is used to identify organizations that can participate in market management and/or market operations.
         *
         */
        class MarketParticipant extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketParticipant;
                if (null == bucket)
                   cim_data.MarketParticipant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketParticipant[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "MarketParticipant";
                base.parse_attributes (/<cim:MarketParticipant.SchedulingCoordinator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SchedulingCoordinator", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.MarketPerson\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketPerson", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.MarketDocument\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketDocument", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.RegisteredResource\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RegisteredResource", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.MarketRole\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketRole", sub, context);
                base.parse_attributes (/<cim:MarketParticipant.Bid\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Bid", sub, context);
                let bucket = context.parsed.MarketParticipant;
                if (null == bucket)
                   context.parsed.MarketParticipant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MarketParticipant", "SchedulingCoordinator", "SchedulingCoordinator", fields);
                base.export_attributes (obj, "MarketParticipant", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "MarketParticipant", "MarketPerson", "MarketPerson", fields);
                base.export_attributes (obj, "MarketParticipant", "MarketDocument", "MarketDocument", fields);
                base.export_attributes (obj, "MarketParticipant", "RegisteredResource", "RegisteredResource", fields);
                base.export_attributes (obj, "MarketParticipant", "MarketRole", "MarketRole", fields);
                base.export_attributes (obj, "MarketParticipant", "Bid", "Bid", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketParticipant_collapse" aria-expanded="true" aria-controls="MarketParticipant_collapse" style="margin-left: 10px;">MarketParticipant</a></legend>
                    <div id="MarketParticipant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#SchedulingCoordinator}}<div><b>SchedulingCoordinator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SchedulingCoordinator}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#MarketPerson}}<div><b>MarketPerson</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketPerson}}
                    {{#MarketDocument}}<div><b>MarketDocument</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketDocument}}
                    {{#RegisteredResource}}<div><b>RegisteredResource</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RegisteredResource}}
                    {{#MarketRole}}<div><b>MarketRole</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketRole}}
                    {{#Bid}}<div><b>Bid</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Bid}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["SchedulingCoordinator"]) obj["SchedulingCoordinator_string"] = obj["SchedulingCoordinator"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["MarketPerson"]) obj["MarketPerson_string"] = obj["MarketPerson"].join ();
                if (obj["MarketDocument"]) obj["MarketDocument_string"] = obj["MarketDocument"].join ();
                if (obj["RegisteredResource"]) obj["RegisteredResource_string"] = obj["RegisteredResource"].join ();
                if (obj["MarketRole"]) obj["MarketRole_string"] = obj["MarketRole"].join ();
                if (obj["Bid"]) obj["Bid_string"] = obj["Bid"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["SchedulingCoordinator_string"];
                delete obj["TimeSeries_string"];
                delete obj["MarketPerson_string"];
                delete obj["MarketDocument_string"];
                delete obj["RegisteredResource_string"];
                delete obj["MarketRole_string"];
                delete obj["Bid_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketParticipant_collapse" aria-expanded="true" aria-controls="{{id}}_MarketParticipant_collapse" style="margin-left: 10px;">MarketParticipant</a></legend>
                    <div id="{{id}}_MarketParticipant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketPerson'>MarketPerson: </label><div class='col-sm-8'><input id='{{id}}_MarketPerson' class='form-control' type='text'{{#MarketPerson}} value='{{MarketPerson_string}}'{{/MarketPerson}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketDocument'>MarketDocument: </label><div class='col-sm-8'><input id='{{id}}_MarketDocument' class='form-control' type='text'{{#MarketDocument}} value='{{MarketDocument_string}}'{{/MarketDocument}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketRole'>MarketRole: </label><div class='col-sm-8'><input id='{{id}}_MarketRole' class='form-control' type='text'{{#MarketRole}} value='{{MarketRole_string}}'{{/MarketRole}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketParticipant" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_MarketPerson").value; if ("" !== temp) obj["MarketPerson"] = temp.split (",");
                temp = document.getElementById (id + "_MarketDocument").value; if ("" !== temp) obj["MarketDocument"] = temp.split (",");
                temp = document.getElementById (id + "_MarketRole").value; if ("" !== temp) obj["MarketRole"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SchedulingCoordinator", "0..*", "0..1", "SchedulingCoordinator", "MarketParticipant"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "MarketParticipant"],
                            ["MarketPerson", "0..*", "0..*", "MarketPerson", "MarketParticipant"],
                            ["MarketDocument", "0..*", "0..*", "MarketDocument", "MarketParticipant"],
                            ["RegisteredResource", "0..*", "0..1", "RegisteredResource", "MarketParticipant"],
                            ["MarketRole", "0..*", "0..*", "MarketRole", "MarketParticipant"],
                            ["Bid", "0..*", "0..1", "Bid", "MarketParticipant"]
                        ]
                    )
                );
            }
        }

        /**
         * Subclass of IEC61970:Production:GeneratingUnit.
         *
         */
        class MktGeneratingUnit extends Production.GeneratingUnit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MktGeneratingUnit;
                if (null == bucket)
                   cim_data.MktGeneratingUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MktGeneratingUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = Production.GeneratingUnit.prototype.parse.call (this, context, sub);
                obj.cls = "MktGeneratingUnit";
                base.parse_attributes (/<cim:MktGeneratingUnit.GeneratingUnitDynamicValues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnitDynamicValues", sub, context);
                let bucket = context.parsed.MktGeneratingUnit;
                if (null == bucket)
                   context.parsed.MktGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Production.GeneratingUnit.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "MktGeneratingUnit", "GeneratingUnitDynamicValues", "GeneratingUnitDynamicValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MktGeneratingUnit_collapse" aria-expanded="true" aria-controls="MktGeneratingUnit_collapse" style="margin-left: 10px;">MktGeneratingUnit</a></legend>
                    <div id="MktGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.GeneratingUnit.prototype.template.call (this) +
                    `
                    {{#GeneratingUnitDynamicValues}}<div><b>GeneratingUnitDynamicValues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/GeneratingUnitDynamicValues}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["GeneratingUnitDynamicValues"]) obj["GeneratingUnitDynamicValues_string"] = obj["GeneratingUnitDynamicValues"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["GeneratingUnitDynamicValues_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MktGeneratingUnit_collapse" aria-expanded="true" aria-controls="{{id}}_MktGeneratingUnit_collapse" style="margin-left: 10px;">MktGeneratingUnit</a></legend>
                    <div id="{{id}}_MktGeneratingUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Production.GeneratingUnit.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "MktGeneratingUnit" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnitDynamicValues", "0..*", "1", "GeneratingUnitDynamicValues", "MktGeneratingUnit"]
                        ]
                    )
                );
            }
        }

        /**
         * The external intended behavior played by a party within the electricity market.
         *
         */
        class MarketRole extends Common.OrganisationRole
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MarketRole;
                if (null == bucket)
                   cim_data.MarketRole = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MarketRole[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.OrganisationRole.prototype.parse.call (this, context, sub);
                obj.cls = "MarketRole";
                base.parse_element (/<cim:MarketRole.type>([\s\S]*?)<\/cim:MarketRole.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attributes (/<cim:MarketRole.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                let bucket = context.parsed.MarketRole;
                if (null == bucket)
                   context.parsed.MarketRole = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.OrganisationRole.prototype.export.call (this, obj, false);

                base.export_element (obj, "MarketRole", "type", "type",  base.from_string, fields);
                base.export_attributes (obj, "MarketRole", "MarketParticipant", "MarketParticipant", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MarketRole_collapse" aria-expanded="true" aria-controls="MarketRole_collapse" style="margin-left: 10px;">MarketRole</a></legend>
                    <div id="MarketRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketParticipant}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["MarketParticipant"]) obj["MarketParticipant_string"] = obj["MarketParticipant"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["MarketParticipant_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MarketRole_collapse" aria-expanded="true" aria-controls="{{id}}_MarketRole_collapse" style="margin-left: 10px;">MarketRole</a></legend>
                    <div id="{{id}}_MarketRole_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.OrganisationRole.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><input id='{{id}}_type' class='form-control' type='text'{{#type}} value='{{type}}'{{/type}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant_string}}'{{/MarketParticipant}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MarketRole" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" !== temp) obj["type"] = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MarketParticipant", "0..*", "0..*", "MarketParticipant", "MarketRole"]
                        ]
                    )
                );
            }
        }

        /**
         * A resource that is registered through the market participant registration system.
         *
         * Examples include generating unit, load, and non-physical generator or load.
         *
         */
        class RegisteredResource extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredResource;
                if (null == bucket)
                   cim_data.RegisteredResource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredResource[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredResource";
                base.parse_attribute (/<cim:RegisteredResource.ACAFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ACAFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.ASSPOptimizationFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ASSPOptimizationFlag", sub, context);
                base.parse_element (/<cim:RegisteredResource.commercialOpDate>([\s\S]*?)<\/cim:RegisteredResource.commercialOpDate>/g, obj, "commercialOpDate", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:RegisteredResource.contingencyAvailFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "contingencyAvailFlag", sub, context);
                base.parse_element (/<cim:RegisteredResource.dispatchable>([\s\S]*?)<\/cim:RegisteredResource.dispatchable>/g, obj, "dispatchable", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RegisteredResource.ECAFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ECAFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.flexibleOfferFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "flexibleOfferFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.hourlyPredispatch\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "hourlyPredispatch", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.isAggregatedRes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "isAggregatedRes", sub, context);
                base.parse_element (/<cim:RegisteredResource.lastModified>([\s\S]*?)<\/cim:RegisteredResource.lastModified>/g, obj, "lastModified", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:RegisteredResource.LMPMFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LMPMFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.marketParticipationFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "marketParticipationFlag", sub, context);
                base.parse_element (/<cim:RegisteredResource.maxBaseSelfSchedQty >([\s\S]*?)<\/cim:RegisteredResource.maxBaseSelfSchedQty >/g, obj, "maxBaseSelfSchedQty ", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.maxOnTime>([\s\S]*?)<\/cim:RegisteredResource.maxOnTime>/g, obj, "maxOnTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.minDispatchTime>([\s\S]*?)<\/cim:RegisteredResource.minDispatchTime>/g, obj, "minDispatchTime", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredResource.minOffTime>([\s\S]*?)<\/cim:RegisteredResource.minOffTime>/g, obj, "minOffTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredResource.minOnTime>([\s\S]*?)<\/cim:RegisteredResource.minOnTime>/g, obj, "minOnTime", base.to_float, sub, context);
                base.parse_attribute (/<cim:RegisteredResource.mustOfferFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "mustOfferFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.nonMarket\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "nonMarket", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.pointOfDeliveryFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "pointOfDeliveryFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.priceSetFlagDA\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "priceSetFlagDA", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.priceSetFlagRT\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "priceSetFlagRT", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.registrationStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "registrationStatus", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.resourceAdequacyFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "resourceAdequacyFlag", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.SMPMFlag\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SMPMFlag", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Reason\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Reason", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.SubControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubControlArea", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ContractDistributionFactor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ContractDistributionFactor", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RMROperatorInput\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RMROperatorInput", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.MarketObjectStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketObjectStatus", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.ResourceVerifiableCosts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceVerifiableCosts", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceGroups\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroups", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RUCAwardInstruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RUCAwardInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceCertification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceCertification", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.Pnode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pnode", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.AggregateNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AggregateNode", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.OrgResOwnership\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OrgResOwnership", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.DefaultBid\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DefaultBid", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.LoadFollowingOperatorInput\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadFollowingOperatorInput", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MktConnectivityNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MktConnectivityNode", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DispatchInstReply\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DispatchInstReply", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ExpectedEnergyValues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExpectedEnergyValues", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.SubstitutionResourceList\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SubstitutionResourceList", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ControlAreaDesignation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaDesignation", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ExPostResourceResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExPostResourceResults", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.IntermittentResourceEligibility\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IntermittentResourceEligibility", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.RampRateCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RampRateCurve", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Domain\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Domain", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ForbiddenRegion\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ForbiddenRegion", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.MPMResourceStatus\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMResourceStatus", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceCapacity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceCapacity", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DotInstruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DotInstruction", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.AdjacentCASet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AdjacentCASet", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceAncillaryServiceQualification\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAncillaryServiceQualification", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Commitments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Commitments", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.AllocationResultValues\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AllocationResultValues", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceAwardInstruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceAwardInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.Instructions\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Instructions", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.FormerReference\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "FormerReference", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceLoadFollowingInst\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceLoadFollowingInst", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.MarketParticipant\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MarketParticipant", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.TimeSeries\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSeries", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.EnergyMarkets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergyMarkets", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.InterTie\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "InterTie", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.LoadFollowingInst\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadFollowingInst", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.ResourceDispatchResults\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ResourceDispatchResults", sub, context);
                base.parse_attribute (/<cim:RegisteredResource.HostControlArea\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "HostControlArea", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.DopInstruction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DopInstruction", sub, context);
                base.parse_attributes (/<cim:RegisteredResource.MPMTestThreshold\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MPMTestThreshold", sub, context);
                let bucket = context.parsed.RegisteredResource;
                if (null == bucket)
                   context.parsed.RegisteredResource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RegisteredResource", "ACAFlag", "ACAFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "ASSPOptimizationFlag", "ASSPOptimizationFlag", fields);
                base.export_element (obj, "RegisteredResource", "commercialOpDate", "commercialOpDate",  base.from_datetime, fields);
                base.export_attribute (obj, "RegisteredResource", "contingencyAvailFlag", "contingencyAvailFlag", fields);
                base.export_element (obj, "RegisteredResource", "dispatchable", "dispatchable",  base.from_boolean, fields);
                base.export_attribute (obj, "RegisteredResource", "ECAFlag", "ECAFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "flexibleOfferFlag", "flexibleOfferFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "hourlyPredispatch", "hourlyPredispatch", fields);
                base.export_attribute (obj, "RegisteredResource", "isAggregatedRes", "isAggregatedRes", fields);
                base.export_element (obj, "RegisteredResource", "lastModified", "lastModified",  base.from_datetime, fields);
                base.export_attribute (obj, "RegisteredResource", "LMPMFlag", "LMPMFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "marketParticipationFlag", "marketParticipationFlag", fields);
                base.export_element (obj, "RegisteredResource", "maxBaseSelfSchedQty ", "maxBaseSelfSchedQty ",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "maxOnTime", "maxOnTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minDispatchTime", "minDispatchTime",  base.from_string, fields);
                base.export_element (obj, "RegisteredResource", "minOffTime", "minOffTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredResource", "minOnTime", "minOnTime",  base.from_float, fields);
                base.export_attribute (obj, "RegisteredResource", "mustOfferFlag", "mustOfferFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "nonMarket", "nonMarket", fields);
                base.export_attribute (obj, "RegisteredResource", "pointOfDeliveryFlag", "pointOfDeliveryFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "priceSetFlagDA", "priceSetFlagDA", fields);
                base.export_attribute (obj, "RegisteredResource", "priceSetFlagRT", "priceSetFlagRT", fields);
                base.export_attribute (obj, "RegisteredResource", "registrationStatus", "registrationStatus", fields);
                base.export_attribute (obj, "RegisteredResource", "resourceAdequacyFlag", "resourceAdequacyFlag", fields);
                base.export_attribute (obj, "RegisteredResource", "SMPMFlag", "SMPMFlag", fields);
                base.export_attributes (obj, "RegisteredResource", "Reason", "Reason", fields);
                base.export_attributes (obj, "RegisteredResource", "SubControlArea", "SubControlArea", fields);
                base.export_attributes (obj, "RegisteredResource", "ContractDistributionFactor", "ContractDistributionFactor", fields);
                base.export_attributes (obj, "RegisteredResource", "RMROperatorInput", "RMROperatorInput", fields);
                base.export_attributes (obj, "RegisteredResource", "MarketObjectStatus", "MarketObjectStatus", fields);
                base.export_attribute (obj, "RegisteredResource", "ResourceVerifiableCosts", "ResourceVerifiableCosts", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceGroups", "ResourceGroups", fields);
                base.export_attributes (obj, "RegisteredResource", "RUCAwardInstruction", "RUCAwardInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceCertification", "ResourceCertification", fields);
                base.export_attribute (obj, "RegisteredResource", "Pnode", "Pnode", fields);
                base.export_attribute (obj, "RegisteredResource", "AggregateNode", "AggregateNode", fields);
                base.export_attributes (obj, "RegisteredResource", "OrgResOwnership", "OrgResOwnership", fields);
                base.export_attribute (obj, "RegisteredResource", "DefaultBid", "DefaultBid", fields);
                base.export_attributes (obj, "RegisteredResource", "LoadFollowingOperatorInput", "LoadFollowingOperatorInput", fields);
                base.export_attribute (obj, "RegisteredResource", "MktConnectivityNode", "MktConnectivityNode", fields);
                base.export_attributes (obj, "RegisteredResource", "DispatchInstReply", "DispatchInstReply", fields);
                base.export_attributes (obj, "RegisteredResource", "ExpectedEnergyValues", "ExpectedEnergyValues", fields);
                base.export_attributes (obj, "RegisteredResource", "SubstitutionResourceList", "SubstitutionResourceList", fields);
                base.export_attributes (obj, "RegisteredResource", "ControlAreaDesignation", "ControlAreaDesignation", fields);
                base.export_attributes (obj, "RegisteredResource", "ExPostResourceResults", "ExPostResourceResults", fields);
                base.export_attributes (obj, "RegisteredResource", "IntermittentResourceEligibility", "IntermittentResourceEligibility", fields);
                base.export_attributes (obj, "RegisteredResource", "RampRateCurve", "RampRateCurve", fields);
                base.export_attributes (obj, "RegisteredResource", "Domain", "Domain", fields);
                base.export_attributes (obj, "RegisteredResource", "ForbiddenRegion", "ForbiddenRegion", fields);
                base.export_attributes (obj, "RegisteredResource", "MPMResourceStatus", "MPMResourceStatus", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceCapacity", "ResourceCapacity", fields);
                base.export_attributes (obj, "RegisteredResource", "DotInstruction", "DotInstruction", fields);
                base.export_attribute (obj, "RegisteredResource", "AdjacentCASet", "AdjacentCASet", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceAncillaryServiceQualification", "ResourceAncillaryServiceQualification", fields);
                base.export_attributes (obj, "RegisteredResource", "Commitments", "Commitments", fields);
                base.export_attributes (obj, "RegisteredResource", "AllocationResultValues", "AllocationResultValues", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceAwardInstruction", "ResourceAwardInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "Instructions", "Instructions", fields);
                base.export_attributes (obj, "RegisteredResource", "FormerReference", "FormerReference", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceLoadFollowingInst", "ResourceLoadFollowingInst", fields);
                base.export_attribute (obj, "RegisteredResource", "MarketParticipant", "MarketParticipant", fields);
                base.export_attributes (obj, "RegisteredResource", "TimeSeries", "TimeSeries", fields);
                base.export_attributes (obj, "RegisteredResource", "EnergyMarkets", "EnergyMarkets", fields);
                base.export_attributes (obj, "RegisteredResource", "InterTie", "InterTie", fields);
                base.export_attributes (obj, "RegisteredResource", "LoadFollowingInst", "LoadFollowingInst", fields);
                base.export_attributes (obj, "RegisteredResource", "ResourceDispatchResults", "ResourceDispatchResults", fields);
                base.export_attribute (obj, "RegisteredResource", "HostControlArea", "HostControlArea", fields);
                base.export_attributes (obj, "RegisteredResource", "DopInstruction", "DopInstruction", fields);
                base.export_attributes (obj, "RegisteredResource", "MPMTestThreshold", "MPMTestThreshold", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredResource_collapse" aria-expanded="true" aria-controls="RegisteredResource_collapse" style="margin-left: 10px;">RegisteredResource</a></legend>
                    <div id="RegisteredResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#ACAFlag}}<div><b>ACAFlag</b>: {{ACAFlag}}</div>{{/ACAFlag}}
                    {{#ASSPOptimizationFlag}}<div><b>ASSPOptimizationFlag</b>: {{ASSPOptimizationFlag}}</div>{{/ASSPOptimizationFlag}}
                    {{#commercialOpDate}}<div><b>commercialOpDate</b>: {{commercialOpDate}}</div>{{/commercialOpDate}}
                    {{#contingencyAvailFlag}}<div><b>contingencyAvailFlag</b>: {{contingencyAvailFlag}}</div>{{/contingencyAvailFlag}}
                    {{#dispatchable}}<div><b>dispatchable</b>: {{dispatchable}}</div>{{/dispatchable}}
                    {{#ECAFlag}}<div><b>ECAFlag</b>: {{ECAFlag}}</div>{{/ECAFlag}}
                    {{#flexibleOfferFlag}}<div><b>flexibleOfferFlag</b>: {{flexibleOfferFlag}}</div>{{/flexibleOfferFlag}}
                    {{#hourlyPredispatch}}<div><b>hourlyPredispatch</b>: {{hourlyPredispatch}}</div>{{/hourlyPredispatch}}
                    {{#isAggregatedRes}}<div><b>isAggregatedRes</b>: {{isAggregatedRes}}</div>{{/isAggregatedRes}}
                    {{#lastModified}}<div><b>lastModified</b>: {{lastModified}}</div>{{/lastModified}}
                    {{#LMPMFlag}}<div><b>LMPMFlag</b>: {{LMPMFlag}}</div>{{/LMPMFlag}}
                    {{#marketParticipationFlag}}<div><b>marketParticipationFlag</b>: {{marketParticipationFlag}}</div>{{/marketParticipationFlag}}
                    {{#maxBaseSelfSchedQty }}<div><b>maxBaseSelfSchedQty </b>: {{maxBaseSelfSchedQty }}</div>{{/maxBaseSelfSchedQty }}
                    {{#maxOnTime}}<div><b>maxOnTime</b>: {{maxOnTime}}</div>{{/maxOnTime}}
                    {{#minDispatchTime}}<div><b>minDispatchTime</b>: {{minDispatchTime}}</div>{{/minDispatchTime}}
                    {{#minOffTime}}<div><b>minOffTime</b>: {{minOffTime}}</div>{{/minOffTime}}
                    {{#minOnTime}}<div><b>minOnTime</b>: {{minOnTime}}</div>{{/minOnTime}}
                    {{#mustOfferFlag}}<div><b>mustOfferFlag</b>: {{mustOfferFlag}}</div>{{/mustOfferFlag}}
                    {{#nonMarket}}<div><b>nonMarket</b>: {{nonMarket}}</div>{{/nonMarket}}
                    {{#pointOfDeliveryFlag}}<div><b>pointOfDeliveryFlag</b>: {{pointOfDeliveryFlag}}</div>{{/pointOfDeliveryFlag}}
                    {{#priceSetFlagDA}}<div><b>priceSetFlagDA</b>: {{priceSetFlagDA}}</div>{{/priceSetFlagDA}}
                    {{#priceSetFlagRT}}<div><b>priceSetFlagRT</b>: {{priceSetFlagRT}}</div>{{/priceSetFlagRT}}
                    {{#registrationStatus}}<div><b>registrationStatus</b>: {{registrationStatus}}</div>{{/registrationStatus}}
                    {{#resourceAdequacyFlag}}<div><b>resourceAdequacyFlag</b>: {{resourceAdequacyFlag}}</div>{{/resourceAdequacyFlag}}
                    {{#SMPMFlag}}<div><b>SMPMFlag</b>: {{SMPMFlag}}</div>{{/SMPMFlag}}
                    {{#Reason}}<div><b>Reason</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Reason}}
                    {{#SubControlArea}}<div><b>SubControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubControlArea}}
                    {{#ContractDistributionFactor}}<div><b>ContractDistributionFactor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ContractDistributionFactor}}
                    {{#RMROperatorInput}}<div><b>RMROperatorInput</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RMROperatorInput}}
                    {{#MarketObjectStatus}}<div><b>MarketObjectStatus</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MarketObjectStatus}}
                    {{#ResourceVerifiableCosts}}<div><b>ResourceVerifiableCosts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ResourceVerifiableCosts}}");}); return false;'>{{ResourceVerifiableCosts}}</a></div>{{/ResourceVerifiableCosts}}
                    {{#ResourceGroups}}<div><b>ResourceGroups</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceGroups}}
                    {{#RUCAwardInstruction}}<div><b>RUCAwardInstruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RUCAwardInstruction}}
                    {{#ResourceCertification}}<div><b>ResourceCertification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceCertification}}
                    {{#Pnode}}<div><b>Pnode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pnode}}");}); return false;'>{{Pnode}}</a></div>{{/Pnode}}
                    {{#AggregateNode}}<div><b>AggregateNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AggregateNode}}");}); return false;'>{{AggregateNode}}</a></div>{{/AggregateNode}}
                    {{#OrgResOwnership}}<div><b>OrgResOwnership</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OrgResOwnership}}
                    {{#DefaultBid}}<div><b>DefaultBid</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DefaultBid}}");}); return false;'>{{DefaultBid}}</a></div>{{/DefaultBid}}
                    {{#LoadFollowingOperatorInput}}<div><b>LoadFollowingOperatorInput</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LoadFollowingOperatorInput}}
                    {{#MktConnectivityNode}}<div><b>MktConnectivityNode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MktConnectivityNode}}");}); return false;'>{{MktConnectivityNode}}</a></div>{{/MktConnectivityNode}}
                    {{#DispatchInstReply}}<div><b>DispatchInstReply</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DispatchInstReply}}
                    {{#ExpectedEnergyValues}}<div><b>ExpectedEnergyValues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ExpectedEnergyValues}}
                    {{#SubstitutionResourceList}}<div><b>SubstitutionResourceList</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/SubstitutionResourceList}}
                    {{#ControlAreaDesignation}}<div><b>ControlAreaDesignation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ControlAreaDesignation}}
                    {{#ExPostResourceResults}}<div><b>ExPostResourceResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ExPostResourceResults}}
                    {{#IntermittentResourceEligibility}}<div><b>IntermittentResourceEligibility</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/IntermittentResourceEligibility}}
                    {{#RampRateCurve}}<div><b>RampRateCurve</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RampRateCurve}}
                    {{#Domain}}<div><b>Domain</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Domain}}
                    {{#ForbiddenRegion}}<div><b>ForbiddenRegion</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ForbiddenRegion}}
                    {{#MPMResourceStatus}}<div><b>MPMResourceStatus</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMResourceStatus}}
                    {{#ResourceCapacity}}<div><b>ResourceCapacity</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceCapacity}}
                    {{#DotInstruction}}<div><b>DotInstruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DotInstruction}}
                    {{#AdjacentCASet}}<div><b>AdjacentCASet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{AdjacentCASet}}");}); return false;'>{{AdjacentCASet}}</a></div>{{/AdjacentCASet}}
                    {{#ResourceAncillaryServiceQualification}}<div><b>ResourceAncillaryServiceQualification</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceAncillaryServiceQualification}}
                    {{#Commitments}}<div><b>Commitments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Commitments}}
                    {{#AllocationResultValues}}<div><b>AllocationResultValues</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/AllocationResultValues}}
                    {{#ResourceAwardInstruction}}<div><b>ResourceAwardInstruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceAwardInstruction}}
                    {{#Instructions}}<div><b>Instructions</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Instructions}}
                    {{#FormerReference}}<div><b>FormerReference</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/FormerReference}}
                    {{#ResourceLoadFollowingInst}}<div><b>ResourceLoadFollowingInst</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceLoadFollowingInst}}
                    {{#MarketParticipant}}<div><b>MarketParticipant</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{MarketParticipant}}");}); return false;'>{{MarketParticipant}}</a></div>{{/MarketParticipant}}
                    {{#TimeSeries}}<div><b>TimeSeries</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSeries}}
                    {{#EnergyMarkets}}<div><b>EnergyMarkets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergyMarkets}}
                    {{#InterTie}}<div><b>InterTie</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/InterTie}}
                    {{#LoadFollowingInst}}<div><b>LoadFollowingInst</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/LoadFollowingInst}}
                    {{#ResourceDispatchResults}}<div><b>ResourceDispatchResults</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ResourceDispatchResults}}
                    {{#HostControlArea}}<div><b>HostControlArea</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{HostControlArea}}");}); return false;'>{{HostControlArea}}</a></div>{{/HostControlArea}}
                    {{#DopInstruction}}<div><b>DopInstruction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DopInstruction}}
                    {{#MPMTestThreshold}}<div><b>MPMTestThreshold</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MPMTestThreshold}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["ACAFlagYesNo"] = [{ id: '', selected: (!obj["ACAFlag"])}]; for (let property in MktDomain.YesNo) obj["ACAFlagYesNo"].push ({ id: property, selected: obj["ACAFlag"] && obj["ACAFlag"].endsWith ('.' + property)});
                obj["ASSPOptimizationFlagYesNo"] = [{ id: '', selected: (!obj["ASSPOptimizationFlag"])}]; for (let property in MktDomain.YesNo) obj["ASSPOptimizationFlagYesNo"].push ({ id: property, selected: obj["ASSPOptimizationFlag"] && obj["ASSPOptimizationFlag"].endsWith ('.' + property)});
                obj["contingencyAvailFlagYesNo"] = [{ id: '', selected: (!obj["contingencyAvailFlag"])}]; for (let property in MktDomain.YesNo) obj["contingencyAvailFlagYesNo"].push ({ id: property, selected: obj["contingencyAvailFlag"] && obj["contingencyAvailFlag"].endsWith ('.' + property)});
                obj["ECAFlagYesNo"] = [{ id: '', selected: (!obj["ECAFlag"])}]; for (let property in MktDomain.YesNo) obj["ECAFlagYesNo"].push ({ id: property, selected: obj["ECAFlag"] && obj["ECAFlag"].endsWith ('.' + property)});
                obj["flexibleOfferFlagYesNo"] = [{ id: '', selected: (!obj["flexibleOfferFlag"])}]; for (let property in MktDomain.YesNo) obj["flexibleOfferFlagYesNo"].push ({ id: property, selected: obj["flexibleOfferFlag"] && obj["flexibleOfferFlag"].endsWith ('.' + property)});
                obj["hourlyPredispatchYesNo"] = [{ id: '', selected: (!obj["hourlyPredispatch"])}]; for (let property in MktDomain.YesNo) obj["hourlyPredispatchYesNo"].push ({ id: property, selected: obj["hourlyPredispatch"] && obj["hourlyPredispatch"].endsWith ('.' + property)});
                obj["isAggregatedResYesNo"] = [{ id: '', selected: (!obj["isAggregatedRes"])}]; for (let property in MktDomain.YesNo) obj["isAggregatedResYesNo"].push ({ id: property, selected: obj["isAggregatedRes"] && obj["isAggregatedRes"].endsWith ('.' + property)});
                obj["LMPMFlagYesNo"] = [{ id: '', selected: (!obj["LMPMFlag"])}]; for (let property in MktDomain.YesNo) obj["LMPMFlagYesNo"].push ({ id: property, selected: obj["LMPMFlag"] && obj["LMPMFlag"].endsWith ('.' + property)});
                obj["marketParticipationFlagYesNo"] = [{ id: '', selected: (!obj["marketParticipationFlag"])}]; for (let property in MktDomain.YesNo) obj["marketParticipationFlagYesNo"].push ({ id: property, selected: obj["marketParticipationFlag"] && obj["marketParticipationFlag"].endsWith ('.' + property)});
                obj["mustOfferFlagYesNo"] = [{ id: '', selected: (!obj["mustOfferFlag"])}]; for (let property in MktDomain.YesNo) obj["mustOfferFlagYesNo"].push ({ id: property, selected: obj["mustOfferFlag"] && obj["mustOfferFlag"].endsWith ('.' + property)});
                obj["nonMarketYesNo"] = [{ id: '', selected: (!obj["nonMarket"])}]; for (let property in MktDomain.YesNo) obj["nonMarketYesNo"].push ({ id: property, selected: obj["nonMarket"] && obj["nonMarket"].endsWith ('.' + property)});
                obj["pointOfDeliveryFlagYesNo"] = [{ id: '', selected: (!obj["pointOfDeliveryFlag"])}]; for (let property in MktDomain.YesNo) obj["pointOfDeliveryFlagYesNo"].push ({ id: property, selected: obj["pointOfDeliveryFlag"] && obj["pointOfDeliveryFlag"].endsWith ('.' + property)});
                obj["priceSetFlagDAYesNo"] = [{ id: '', selected: (!obj["priceSetFlagDA"])}]; for (let property in MktDomain.YesNo) obj["priceSetFlagDAYesNo"].push ({ id: property, selected: obj["priceSetFlagDA"] && obj["priceSetFlagDA"].endsWith ('.' + property)});
                obj["priceSetFlagRTYesNo"] = [{ id: '', selected: (!obj["priceSetFlagRT"])}]; for (let property in MktDomain.YesNo) obj["priceSetFlagRTYesNo"].push ({ id: property, selected: obj["priceSetFlagRT"] && obj["priceSetFlagRT"].endsWith ('.' + property)});
                obj["registrationStatusResourceRegistrationStatus"] = [{ id: '', selected: (!obj["registrationStatus"])}]; for (let property in MktDomain.ResourceRegistrationStatus) obj["registrationStatusResourceRegistrationStatus"].push ({ id: property, selected: obj["registrationStatus"] && obj["registrationStatus"].endsWith ('.' + property)});
                obj["resourceAdequacyFlagYesNo"] = [{ id: '', selected: (!obj["resourceAdequacyFlag"])}]; for (let property in MktDomain.YesNo) obj["resourceAdequacyFlagYesNo"].push ({ id: property, selected: obj["resourceAdequacyFlag"] && obj["resourceAdequacyFlag"].endsWith ('.' + property)});
                obj["SMPMFlagYesNo"] = [{ id: '', selected: (!obj["SMPMFlag"])}]; for (let property in MktDomain.YesNo) obj["SMPMFlagYesNo"].push ({ id: property, selected: obj["SMPMFlag"] && obj["SMPMFlag"].endsWith ('.' + property)});
                if (obj["Reason"]) obj["Reason_string"] = obj["Reason"].join ();
                if (obj["SubControlArea"]) obj["SubControlArea_string"] = obj["SubControlArea"].join ();
                if (obj["ContractDistributionFactor"]) obj["ContractDistributionFactor_string"] = obj["ContractDistributionFactor"].join ();
                if (obj["RMROperatorInput"]) obj["RMROperatorInput_string"] = obj["RMROperatorInput"].join ();
                if (obj["MarketObjectStatus"]) obj["MarketObjectStatus_string"] = obj["MarketObjectStatus"].join ();
                if (obj["ResourceGroups"]) obj["ResourceGroups_string"] = obj["ResourceGroups"].join ();
                if (obj["RUCAwardInstruction"]) obj["RUCAwardInstruction_string"] = obj["RUCAwardInstruction"].join ();
                if (obj["ResourceCertification"]) obj["ResourceCertification_string"] = obj["ResourceCertification"].join ();
                if (obj["OrgResOwnership"]) obj["OrgResOwnership_string"] = obj["OrgResOwnership"].join ();
                if (obj["LoadFollowingOperatorInput"]) obj["LoadFollowingOperatorInput_string"] = obj["LoadFollowingOperatorInput"].join ();
                if (obj["DispatchInstReply"]) obj["DispatchInstReply_string"] = obj["DispatchInstReply"].join ();
                if (obj["ExpectedEnergyValues"]) obj["ExpectedEnergyValues_string"] = obj["ExpectedEnergyValues"].join ();
                if (obj["SubstitutionResourceList"]) obj["SubstitutionResourceList_string"] = obj["SubstitutionResourceList"].join ();
                if (obj["ControlAreaDesignation"]) obj["ControlAreaDesignation_string"] = obj["ControlAreaDesignation"].join ();
                if (obj["ExPostResourceResults"]) obj["ExPostResourceResults_string"] = obj["ExPostResourceResults"].join ();
                if (obj["IntermittentResourceEligibility"]) obj["IntermittentResourceEligibility_string"] = obj["IntermittentResourceEligibility"].join ();
                if (obj["RampRateCurve"]) obj["RampRateCurve_string"] = obj["RampRateCurve"].join ();
                if (obj["Domain"]) obj["Domain_string"] = obj["Domain"].join ();
                if (obj["ForbiddenRegion"]) obj["ForbiddenRegion_string"] = obj["ForbiddenRegion"].join ();
                if (obj["MPMResourceStatus"]) obj["MPMResourceStatus_string"] = obj["MPMResourceStatus"].join ();
                if (obj["ResourceCapacity"]) obj["ResourceCapacity_string"] = obj["ResourceCapacity"].join ();
                if (obj["DotInstruction"]) obj["DotInstruction_string"] = obj["DotInstruction"].join ();
                if (obj["ResourceAncillaryServiceQualification"]) obj["ResourceAncillaryServiceQualification_string"] = obj["ResourceAncillaryServiceQualification"].join ();
                if (obj["Commitments"]) obj["Commitments_string"] = obj["Commitments"].join ();
                if (obj["AllocationResultValues"]) obj["AllocationResultValues_string"] = obj["AllocationResultValues"].join ();
                if (obj["ResourceAwardInstruction"]) obj["ResourceAwardInstruction_string"] = obj["ResourceAwardInstruction"].join ();
                if (obj["Instructions"]) obj["Instructions_string"] = obj["Instructions"].join ();
                if (obj["FormerReference"]) obj["FormerReference_string"] = obj["FormerReference"].join ();
                if (obj["ResourceLoadFollowingInst"]) obj["ResourceLoadFollowingInst_string"] = obj["ResourceLoadFollowingInst"].join ();
                if (obj["TimeSeries"]) obj["TimeSeries_string"] = obj["TimeSeries"].join ();
                if (obj["EnergyMarkets"]) obj["EnergyMarkets_string"] = obj["EnergyMarkets"].join ();
                if (obj["InterTie"]) obj["InterTie_string"] = obj["InterTie"].join ();
                if (obj["LoadFollowingInst"]) obj["LoadFollowingInst_string"] = obj["LoadFollowingInst"].join ();
                if (obj["ResourceDispatchResults"]) obj["ResourceDispatchResults_string"] = obj["ResourceDispatchResults"].join ();
                if (obj["DopInstruction"]) obj["DopInstruction_string"] = obj["DopInstruction"].join ();
                if (obj["MPMTestThreshold"]) obj["MPMTestThreshold_string"] = obj["MPMTestThreshold"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ACAFlagYesNo"];
                delete obj["ASSPOptimizationFlagYesNo"];
                delete obj["contingencyAvailFlagYesNo"];
                delete obj["ECAFlagYesNo"];
                delete obj["flexibleOfferFlagYesNo"];
                delete obj["hourlyPredispatchYesNo"];
                delete obj["isAggregatedResYesNo"];
                delete obj["LMPMFlagYesNo"];
                delete obj["marketParticipationFlagYesNo"];
                delete obj["mustOfferFlagYesNo"];
                delete obj["nonMarketYesNo"];
                delete obj["pointOfDeliveryFlagYesNo"];
                delete obj["priceSetFlagDAYesNo"];
                delete obj["priceSetFlagRTYesNo"];
                delete obj["registrationStatusResourceRegistrationStatus"];
                delete obj["resourceAdequacyFlagYesNo"];
                delete obj["SMPMFlagYesNo"];
                delete obj["Reason_string"];
                delete obj["SubControlArea_string"];
                delete obj["ContractDistributionFactor_string"];
                delete obj["RMROperatorInput_string"];
                delete obj["MarketObjectStatus_string"];
                delete obj["ResourceGroups_string"];
                delete obj["RUCAwardInstruction_string"];
                delete obj["ResourceCertification_string"];
                delete obj["OrgResOwnership_string"];
                delete obj["LoadFollowingOperatorInput_string"];
                delete obj["DispatchInstReply_string"];
                delete obj["ExpectedEnergyValues_string"];
                delete obj["SubstitutionResourceList_string"];
                delete obj["ControlAreaDesignation_string"];
                delete obj["ExPostResourceResults_string"];
                delete obj["IntermittentResourceEligibility_string"];
                delete obj["RampRateCurve_string"];
                delete obj["Domain_string"];
                delete obj["ForbiddenRegion_string"];
                delete obj["MPMResourceStatus_string"];
                delete obj["ResourceCapacity_string"];
                delete obj["DotInstruction_string"];
                delete obj["ResourceAncillaryServiceQualification_string"];
                delete obj["Commitments_string"];
                delete obj["AllocationResultValues_string"];
                delete obj["ResourceAwardInstruction_string"];
                delete obj["Instructions_string"];
                delete obj["FormerReference_string"];
                delete obj["ResourceLoadFollowingInst_string"];
                delete obj["TimeSeries_string"];
                delete obj["EnergyMarkets_string"];
                delete obj["InterTie_string"];
                delete obj["LoadFollowingInst_string"];
                delete obj["ResourceDispatchResults_string"];
                delete obj["DopInstruction_string"];
                delete obj["MPMTestThreshold_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredResource_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredResource_collapse" style="margin-left: 10px;">RegisteredResource</a></legend>
                    <div id="{{id}}_RegisteredResource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACAFlag'>ACAFlag: </label><div class='col-sm-8'><select id='{{id}}_ACAFlag' class='form-control custom-select'>{{#ACAFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ACAFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ASSPOptimizationFlag'>ASSPOptimizationFlag: </label><div class='col-sm-8'><select id='{{id}}_ASSPOptimizationFlag' class='form-control custom-select'>{{#ASSPOptimizationFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ASSPOptimizationFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_commercialOpDate'>commercialOpDate: </label><div class='col-sm-8'><input id='{{id}}_commercialOpDate' class='form-control' type='text'{{#commercialOpDate}} value='{{commercialOpDate}}'{{/commercialOpDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contingencyAvailFlag'>contingencyAvailFlag: </label><div class='col-sm-8'><select id='{{id}}_contingencyAvailFlag' class='form-control custom-select'>{{#contingencyAvailFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/contingencyAvailFlagYesNo}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_dispatchable'>dispatchable: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_dispatchable' class='form-check-input' type='checkbox'{{#dispatchable}} checked{{/dispatchable}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ECAFlag'>ECAFlag: </label><div class='col-sm-8'><select id='{{id}}_ECAFlag' class='form-control custom-select'>{{#ECAFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ECAFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flexibleOfferFlag'>flexibleOfferFlag: </label><div class='col-sm-8'><select id='{{id}}_flexibleOfferFlag' class='form-control custom-select'>{{#flexibleOfferFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/flexibleOfferFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hourlyPredispatch'>hourlyPredispatch: </label><div class='col-sm-8'><select id='{{id}}_hourlyPredispatch' class='form-control custom-select'>{{#hourlyPredispatchYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/hourlyPredispatchYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_isAggregatedRes'>isAggregatedRes: </label><div class='col-sm-8'><select id='{{id}}_isAggregatedRes' class='form-control custom-select'>{{#isAggregatedResYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/isAggregatedResYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastModified'>lastModified: </label><div class='col-sm-8'><input id='{{id}}_lastModified' class='form-control' type='text'{{#lastModified}} value='{{lastModified}}'{{/lastModified}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LMPMFlag'>LMPMFlag: </label><div class='col-sm-8'><select id='{{id}}_LMPMFlag' class='form-control custom-select'>{{#LMPMFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/LMPMFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_marketParticipationFlag'>marketParticipationFlag: </label><div class='col-sm-8'><select id='{{id}}_marketParticipationFlag' class='form-control custom-select'>{{#marketParticipationFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/marketParticipationFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxBaseSelfSchedQty '>maxBaseSelfSchedQty : </label><div class='col-sm-8'><input id='{{id}}_maxBaseSelfSchedQty ' class='form-control' type='text'{{#maxBaseSelfSchedQty }} value='{{maxBaseSelfSchedQty }}'{{/maxBaseSelfSchedQty }}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxOnTime'>maxOnTime: </label><div class='col-sm-8'><input id='{{id}}_maxOnTime' class='form-control' type='text'{{#maxOnTime}} value='{{maxOnTime}}'{{/maxOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minDispatchTime'>minDispatchTime: </label><div class='col-sm-8'><input id='{{id}}_minDispatchTime' class='form-control' type='text'{{#minDispatchTime}} value='{{minDispatchTime}}'{{/minDispatchTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minOffTime'>minOffTime: </label><div class='col-sm-8'><input id='{{id}}_minOffTime' class='form-control' type='text'{{#minOffTime}} value='{{minOffTime}}'{{/minOffTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minOnTime'>minOnTime: </label><div class='col-sm-8'><input id='{{id}}_minOnTime' class='form-control' type='text'{{#minOnTime}} value='{{minOnTime}}'{{/minOnTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mustOfferFlag'>mustOfferFlag: </label><div class='col-sm-8'><select id='{{id}}_mustOfferFlag' class='form-control custom-select'>{{#mustOfferFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/mustOfferFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nonMarket'>nonMarket: </label><div class='col-sm-8'><select id='{{id}}_nonMarket' class='form-control custom-select'>{{#nonMarketYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/nonMarketYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pointOfDeliveryFlag'>pointOfDeliveryFlag: </label><div class='col-sm-8'><select id='{{id}}_pointOfDeliveryFlag' class='form-control custom-select'>{{#pointOfDeliveryFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/pointOfDeliveryFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceSetFlagDA'>priceSetFlagDA: </label><div class='col-sm-8'><select id='{{id}}_priceSetFlagDA' class='form-control custom-select'>{{#priceSetFlagDAYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/priceSetFlagDAYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priceSetFlagRT'>priceSetFlagRT: </label><div class='col-sm-8'><select id='{{id}}_priceSetFlagRT' class='form-control custom-select'>{{#priceSetFlagRTYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/priceSetFlagRTYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_registrationStatus'>registrationStatus: </label><div class='col-sm-8'><select id='{{id}}_registrationStatus' class='form-control custom-select'>{{#registrationStatusResourceRegistrationStatus}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/registrationStatusResourceRegistrationStatus}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resourceAdequacyFlag'>resourceAdequacyFlag: </label><div class='col-sm-8'><select id='{{id}}_resourceAdequacyFlag' class='form-control custom-select'>{{#resourceAdequacyFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/resourceAdequacyFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SMPMFlag'>SMPMFlag: </label><div class='col-sm-8'><select id='{{id}}_SMPMFlag' class='form-control custom-select'>{{#SMPMFlagYesNo}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SMPMFlagYesNo}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Reason'>Reason: </label><div class='col-sm-8'><input id='{{id}}_Reason' class='form-control' type='text'{{#Reason}} value='{{Reason_string}}'{{/Reason}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubControlArea'>SubControlArea: </label><div class='col-sm-8'><input id='{{id}}_SubControlArea' class='form-control' type='text'{{#SubControlArea}} value='{{SubControlArea_string}}'{{/SubControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketObjectStatus'>MarketObjectStatus: </label><div class='col-sm-8'><input id='{{id}}_MarketObjectStatus' class='form-control' type='text'{{#MarketObjectStatus}} value='{{MarketObjectStatus_string}}'{{/MarketObjectStatus}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceVerifiableCosts'>ResourceVerifiableCosts: </label><div class='col-sm-8'><input id='{{id}}_ResourceVerifiableCosts' class='form-control' type='text'{{#ResourceVerifiableCosts}} value='{{ResourceVerifiableCosts}}'{{/ResourceVerifiableCosts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceGroups'>ResourceGroups: </label><div class='col-sm-8'><input id='{{id}}_ResourceGroups' class='form-control' type='text'{{#ResourceGroups}} value='{{ResourceGroups_string}}'{{/ResourceGroups}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceCertification'>ResourceCertification: </label><div class='col-sm-8'><input id='{{id}}_ResourceCertification' class='form-control' type='text'{{#ResourceCertification}} value='{{ResourceCertification_string}}'{{/ResourceCertification}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pnode'>Pnode: </label><div class='col-sm-8'><input id='{{id}}_Pnode' class='form-control' type='text'{{#Pnode}} value='{{Pnode}}'{{/Pnode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AggregateNode'>AggregateNode: </label><div class='col-sm-8'><input id='{{id}}_AggregateNode' class='form-control' type='text'{{#AggregateNode}} value='{{AggregateNode}}'{{/AggregateNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DefaultBid'>DefaultBid: </label><div class='col-sm-8'><input id='{{id}}_DefaultBid' class='form-control' type='text'{{#DefaultBid}} value='{{DefaultBid}}'{{/DefaultBid}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktConnectivityNode'>MktConnectivityNode: </label><div class='col-sm-8'><input id='{{id}}_MktConnectivityNode' class='form-control' type='text'{{#MktConnectivityNode}} value='{{MktConnectivityNode}}'{{/MktConnectivityNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlAreaDesignation'>ControlAreaDesignation: </label><div class='col-sm-8'><input id='{{id}}_ControlAreaDesignation' class='form-control' type='text'{{#ControlAreaDesignation}} value='{{ControlAreaDesignation_string}}'{{/ControlAreaDesignation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RampRateCurve'>RampRateCurve: </label><div class='col-sm-8'><input id='{{id}}_RampRateCurve' class='form-control' type='text'{{#RampRateCurve}} value='{{RampRateCurve_string}}'{{/RampRateCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Domain'>Domain: </label><div class='col-sm-8'><input id='{{id}}_Domain' class='form-control' type='text'{{#Domain}} value='{{Domain_string}}'{{/Domain}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ForbiddenRegion'>ForbiddenRegion: </label><div class='col-sm-8'><input id='{{id}}_ForbiddenRegion' class='form-control' type='text'{{#ForbiddenRegion}} value='{{ForbiddenRegion_string}}'{{/ForbiddenRegion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ResourceCapacity'>ResourceCapacity: </label><div class='col-sm-8'><input id='{{id}}_ResourceCapacity' class='form-control' type='text'{{#ResourceCapacity}} value='{{ResourceCapacity_string}}'{{/ResourceCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AdjacentCASet'>AdjacentCASet: </label><div class='col-sm-8'><input id='{{id}}_AdjacentCASet' class='form-control' type='text'{{#AdjacentCASet}} value='{{AdjacentCASet}}'{{/AdjacentCASet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MarketParticipant'>MarketParticipant: </label><div class='col-sm-8'><input id='{{id}}_MarketParticipant' class='form-control' type='text'{{#MarketParticipant}} value='{{MarketParticipant}}'{{/MarketParticipant}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TimeSeries'>TimeSeries: </label><div class='col-sm-8'><input id='{{id}}_TimeSeries' class='form-control' type='text'{{#TimeSeries}} value='{{TimeSeries_string}}'{{/TimeSeries}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyMarkets'>EnergyMarkets: </label><div class='col-sm-8'><input id='{{id}}_EnergyMarkets' class='form-control' type='text'{{#EnergyMarkets}} value='{{EnergyMarkets_string}}'{{/EnergyMarkets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InterTie'>InterTie: </label><div class='col-sm-8'><input id='{{id}}_InterTie' class='form-control' type='text'{{#InterTie}} value='{{InterTie_string}}'{{/InterTie}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HostControlArea'>HostControlArea: </label><div class='col-sm-8'><input id='{{id}}_HostControlArea' class='form-control' type='text'{{#HostControlArea}} value='{{HostControlArea}}'{{/HostControlArea}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MPMTestThreshold'>MPMTestThreshold: </label><div class='col-sm-8'><input id='{{id}}_MPMTestThreshold' class='form-control' type='text'{{#MPMTestThreshold}} value='{{MPMTestThreshold_string}}'{{/MPMTestThreshold}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredResource" };
                super.submit (id, obj);
                temp = MktDomain.YesNo[document.getElementById (id + "_ACAFlag").value]; if (temp) obj["ACAFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ACAFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_ASSPOptimizationFlag").value]; if (temp) obj["ASSPOptimizationFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ASSPOptimizationFlag"];
                temp = document.getElementById (id + "_commercialOpDate").value; if ("" !== temp) obj["commercialOpDate"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_contingencyAvailFlag").value]; if (temp) obj["contingencyAvailFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["contingencyAvailFlag"];
                temp = document.getElementById (id + "_dispatchable").checked; if (temp) obj["dispatchable"] = true;
                temp = MktDomain.YesNo[document.getElementById (id + "_ECAFlag").value]; if (temp) obj["ECAFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["ECAFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_flexibleOfferFlag").value]; if (temp) obj["flexibleOfferFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["flexibleOfferFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_hourlyPredispatch").value]; if (temp) obj["hourlyPredispatch"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["hourlyPredispatch"];
                temp = MktDomain.YesNo[document.getElementById (id + "_isAggregatedRes").value]; if (temp) obj["isAggregatedRes"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["isAggregatedRes"];
                temp = document.getElementById (id + "_lastModified").value; if ("" !== temp) obj["lastModified"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_LMPMFlag").value]; if (temp) obj["LMPMFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["LMPMFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_marketParticipationFlag").value]; if (temp) obj["marketParticipationFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["marketParticipationFlag"];
                temp = document.getElementById (id + "_maxBaseSelfSchedQty ").value; if ("" !== temp) obj["maxBaseSelfSchedQty "] = temp;
                temp = document.getElementById (id + "_maxOnTime").value; if ("" !== temp) obj["maxOnTime"] = temp;
                temp = document.getElementById (id + "_minDispatchTime").value; if ("" !== temp) obj["minDispatchTime"] = temp;
                temp = document.getElementById (id + "_minOffTime").value; if ("" !== temp) obj["minOffTime"] = temp;
                temp = document.getElementById (id + "_minOnTime").value; if ("" !== temp) obj["minOnTime"] = temp;
                temp = MktDomain.YesNo[document.getElementById (id + "_mustOfferFlag").value]; if (temp) obj["mustOfferFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["mustOfferFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_nonMarket").value]; if (temp) obj["nonMarket"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["nonMarket"];
                temp = MktDomain.YesNo[document.getElementById (id + "_pointOfDeliveryFlag").value]; if (temp) obj["pointOfDeliveryFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["pointOfDeliveryFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_priceSetFlagDA").value]; if (temp) obj["priceSetFlagDA"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["priceSetFlagDA"];
                temp = MktDomain.YesNo[document.getElementById (id + "_priceSetFlagRT").value]; if (temp) obj["priceSetFlagRT"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["priceSetFlagRT"];
                temp = MktDomain.ResourceRegistrationStatus[document.getElementById (id + "_registrationStatus").value]; if (temp) obj["registrationStatus"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#ResourceRegistrationStatus." + temp; else delete obj["registrationStatus"];
                temp = MktDomain.YesNo[document.getElementById (id + "_resourceAdequacyFlag").value]; if (temp) obj["resourceAdequacyFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["resourceAdequacyFlag"];
                temp = MktDomain.YesNo[document.getElementById (id + "_SMPMFlag").value]; if (temp) obj["SMPMFlag"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#YesNo." + temp; else delete obj["SMPMFlag"];
                temp = document.getElementById (id + "_Reason").value; if ("" !== temp) obj["Reason"] = temp.split (",");
                temp = document.getElementById (id + "_SubControlArea").value; if ("" !== temp) obj["SubControlArea"] = temp.split (",");
                temp = document.getElementById (id + "_MarketObjectStatus").value; if ("" !== temp) obj["MarketObjectStatus"] = temp.split (",");
                temp = document.getElementById (id + "_ResourceVerifiableCosts").value; if ("" !== temp) obj["ResourceVerifiableCosts"] = temp;
                temp = document.getElementById (id + "_ResourceGroups").value; if ("" !== temp) obj["ResourceGroups"] = temp.split (",");
                temp = document.getElementById (id + "_ResourceCertification").value; if ("" !== temp) obj["ResourceCertification"] = temp.split (",");
                temp = document.getElementById (id + "_Pnode").value; if ("" !== temp) obj["Pnode"] = temp;
                temp = document.getElementById (id + "_AggregateNode").value; if ("" !== temp) obj["AggregateNode"] = temp;
                temp = document.getElementById (id + "_DefaultBid").value; if ("" !== temp) obj["DefaultBid"] = temp;
                temp = document.getElementById (id + "_MktConnectivityNode").value; if ("" !== temp) obj["MktConnectivityNode"] = temp;
                temp = document.getElementById (id + "_ControlAreaDesignation").value; if ("" !== temp) obj["ControlAreaDesignation"] = temp.split (",");
                temp = document.getElementById (id + "_RampRateCurve").value; if ("" !== temp) obj["RampRateCurve"] = temp.split (",");
                temp = document.getElementById (id + "_Domain").value; if ("" !== temp) obj["Domain"] = temp.split (",");
                temp = document.getElementById (id + "_ForbiddenRegion").value; if ("" !== temp) obj["ForbiddenRegion"] = temp.split (",");
                temp = document.getElementById (id + "_ResourceCapacity").value; if ("" !== temp) obj["ResourceCapacity"] = temp.split (",");
                temp = document.getElementById (id + "_AdjacentCASet").value; if ("" !== temp) obj["AdjacentCASet"] = temp;
                temp = document.getElementById (id + "_MarketParticipant").value; if ("" !== temp) obj["MarketParticipant"] = temp;
                temp = document.getElementById (id + "_TimeSeries").value; if ("" !== temp) obj["TimeSeries"] = temp.split (",");
                temp = document.getElementById (id + "_EnergyMarkets").value; if ("" !== temp) obj["EnergyMarkets"] = temp.split (",");
                temp = document.getElementById (id + "_InterTie").value; if ("" !== temp) obj["InterTie"] = temp.split (",");
                temp = document.getElementById (id + "_HostControlArea").value; if ("" !== temp) obj["HostControlArea"] = temp;
                temp = document.getElementById (id + "_MPMTestThreshold").value; if ("" !== temp) obj["MPMTestThreshold"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Reason", "0..*", "0..*", "Reason", "RegisteredResource"],
                            ["SubControlArea", "0..*", "0..*", "SubControlArea", "RegisteredResource"],
                            ["ContractDistributionFactor", "0..*", "0..1", "ContractDistributionFactor", "RegisteredResource"],
                            ["RMROperatorInput", "0..*", "0..1", "RMROperatorInput", "RegisteredResource"],
                            ["MarketObjectStatus", "0..*", "0..*", "MarketObjectStatus", "RegisteredResource"],
                            ["ResourceVerifiableCosts", "0..1", "1", "ResourceVerifiableCosts", "RegisteredResource"],
                            ["ResourceGroups", "0..*", "1..*", "ResourceGroup", "RegisteredResources"],
                            ["RUCAwardInstruction", "0..*", "0..1", "RUCAwardInstruction", "RegisteredResource"],
                            ["ResourceCertification", "0..*", "0..*", "ResourceCertification2", "RegisteredResource"],
                            ["Pnode", "0..1", "0..*", "Pnode", "RegisteredResources"],
                            ["AggregateNode", "0..1", "0..*", "AggregateNode", "RegisteredResource"],
                            ["OrgResOwnership", "0..*", "1", "OrgResOwnership", "RegisteredResource"],
                            ["DefaultBid", "0..1", "1", "DefaultBid", "RegisteredResource"],
                            ["LoadFollowingOperatorInput", "0..*", "0..1", "LoadFollowingOperatorInput", "RegisteredResource"],
                            ["MktConnectivityNode", "0..1", "0..*", "MktConnectivityNode", "RegisteredResource"],
                            ["DispatchInstReply", "0..*", "1", "DispatchInstReply", "RegisteredResource"],
                            ["ExpectedEnergyValues", "0..*", "0..1", "ExpectedEnergyValues", "RegisteredResource"],
                            ["SubstitutionResourceList", "0..*", "0..1", "SubstitutionResourceList", "RegisteredResource"],
                            ["ControlAreaDesignation", "0..*", "0..*", "ControlAreaDesignation", "RegisteredResource"],
                            ["ExPostResourceResults", "0..*", "0..1", "ExPostResourceResults", "RegisteredResource"],
                            ["IntermittentResourceEligibility", "0..*", "1", "IntermittentResourceEligibility", "RegisteredResource"],
                            ["RampRateCurve", "0..*", "0..*", "RampRateCurve", "RegisteredResource"],
                            ["Domain", "0..*", "0..*", "Domain", "RegisteredResource"],
                            ["ForbiddenRegion", "0..*", "0..*", "ForbiddenRegion", "RegisteredResource"],
                            ["MPMResourceStatus", "0..*", "0..1", "MPMResourceStatus", "RegisteredResource"],
                            ["ResourceCapacity", "0..*", "0..*", "ResourceCapacity", "RegisteredResource"],
                            ["DotInstruction", "0..*", "0..1", "DotInstruction", "RegisteredResource"],
                            ["AdjacentCASet", "0..1", "0..*", "AdjacentCASet", "RegisteredResource"],
                            ["ResourceAncillaryServiceQualification", "0..*", "1", "ResourceCertification", "RegisteredResource"],
                            ["Commitments", "0..*", "1", "Commitments", "RegisteredResource"],
                            ["AllocationResultValues", "0..*", "0..1", "AllocationResultValues", "RegisteredResource"],
                            ["ResourceAwardInstruction", "0..*", "0..1", "ResourceAwardInstruction", "RegisteredResource"],
                            ["Instructions", "0..*", "1", "Instructions", "RegisteredResource"],
                            ["FormerReference", "0..*", "1", "FormerReference", "RegisteredResource"],
                            ["ResourceLoadFollowingInst", "0..*", "0..1", "ResourceLoadFollowingInst", "RegisteredResource"],
                            ["MarketParticipant", "0..1", "0..*", "MarketParticipant", "RegisteredResource"],
                            ["TimeSeries", "0..*", "0..*", "TimeSeries", "RegisteredResource"],
                            ["EnergyMarkets", "0..*", "0..*", "EnergyMarket", "RegisteredResources"],
                            ["InterTie", "0..*", "0..*", "SchedulingPoint", "RegisteredResource"],
                            ["LoadFollowingInst", "0..*", "1", "LoadFollowingInst", "RegisteredResource"],
                            ["ResourceDispatchResults", "0..*", "0..1", "ResourceDispatchResults", "RegisteredResource"],
                            ["HostControlArea", "0..1", "0..*", "HostControlArea", "RegisteredResource"],
                            ["DopInstruction", "0..*", "0..1", "DopInstruction", "RegisteredResouce"],
                            ["MPMTestThreshold", "0..*", "0..*", "MPMTestThreshold", "RegisteredResource"]
                        ]
                    )
                );
            }
        }

        return (
            {
                RegisteredResource: RegisteredResource,
                ResourceCapacity: ResourceCapacity,
                MarketRole: MarketRole,
                MktGeneratingUnit: MktGeneratingUnit,
                MarketParticipant: MarketParticipant,
                EnvironmentalMonitoringStation: EnvironmentalMonitoringStation
            }
        );
    }
);