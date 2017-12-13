define
(
    ["model/base", "model/Core"],
    /**
     * This package is responsible for modeling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and daytypes, are also included here.
     *
     */
    function (base, Core)
    {

        /**
         * A specified time period of the year.
         *
         */
        class Season extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Season;
                if (null == bucket)
                   cim_data.Season = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Season[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Season";
                base.parse_element (/<cim:Season.endDate>([\s\S]*?)<\/cim:Season.endDate>/g, obj, "endDate", base.to_string, sub, context);
                base.parse_element (/<cim:Season.startDate>([\s\S]*?)<\/cim:Season.startDate>/g, obj, "startDate", base.to_string, sub, context);
                base.parse_attributes (/<cim:Season.ScheduledLimits\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledLimits", sub, context);
                base.parse_attributes (/<cim:Season.SeasonDayTypeSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SeasonDayTypeSchedules", sub, context);
                var bucket = context.parsed.Season;
                if (null == bucket)
                   context.parsed.Season = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Season", "endDate", "endDate",  base.from_string, fields);
                base.export_element (obj, "Season", "startDate", "startDate",  base.from_string, fields);
                base.export_attributes (obj, "Season", "ScheduledLimits", "ScheduledLimits", fields);
                base.export_attributes (obj, "Season", "SeasonDayTypeSchedules", "SeasonDayTypeSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Season_collapse" aria-expanded="true" aria-controls="Season_collapse" style="margin-left: 10px;">Season</a></legend>
                    <div id="Season_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#endDate}}<div><b>endDate</b>: {{endDate}}</div>{{/endDate}}
                    {{#startDate}}<div><b>startDate</b>: {{startDate}}</div>{{/startDate}}
                    {{#ScheduledLimits}}<div><b>ScheduledLimits</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ScheduledLimits}}
                    {{#SeasonDayTypeSchedules}}<div><b>SeasonDayTypeSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SeasonDayTypeSchedules}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ScheduledLimits) obj.ScheduledLimits_string = obj.ScheduledLimits.join ();
                if (obj.SeasonDayTypeSchedules) obj.SeasonDayTypeSchedules_string = obj.SeasonDayTypeSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ScheduledLimits_string;
                delete obj.SeasonDayTypeSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Season_collapse" aria-expanded="true" aria-controls="{{id}}_Season_collapse" style="margin-left: 10px;">Season</a></legend>
                    <div id="{{id}}_Season_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endDate'>endDate: </label><div class='col-sm-8'><input id='{{id}}_endDate' class='form-control' type='text'{{#endDate}} value='{{endDate}}'{{/endDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startDate'>startDate: </label><div class='col-sm-8'><input id='{{id}}_startDate' class='form-control' type='text'{{#startDate}} value='{{startDate}}'{{/startDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Season" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_endDate").value; if ("" != temp) obj.endDate = temp;
                temp = document.getElementById (id + "_startDate").value; if ("" != temp) obj.startDate = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ScheduledLimits", "ScheduledLimitValue", "0..*", "0..1"],
                        ["SeasonDayTypeSchedules", "SeasonDayTypeSchedule", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * A time schedule covering a 24 hour period, with curve data for a specific type of season and day.
         *
         */
        class SeasonDayTypeSchedule extends Core.RegularIntervalSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SeasonDayTypeSchedule;
                if (null == bucket)
                   cim_data.SeasonDayTypeSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SeasonDayTypeSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.RegularIntervalSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "SeasonDayTypeSchedule";
                base.parse_attribute (/<cim:SeasonDayTypeSchedule.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context);
                base.parse_attribute (/<cim:SeasonDayTypeSchedule.DayType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DayType", sub, context);
                var bucket = context.parsed.SeasonDayTypeSchedule;
                if (null == bucket)
                   context.parsed.SeasonDayTypeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.RegularIntervalSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SeasonDayTypeSchedule", "Season", "Season", fields);
                base.export_attribute (obj, "SeasonDayTypeSchedule", "DayType", "DayType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SeasonDayTypeSchedule_collapse" aria-expanded="true" aria-controls="SeasonDayTypeSchedule_collapse" style="margin-left: 10px;">SeasonDayTypeSchedule</a></legend>
                    <div id="SeasonDayTypeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.template.call (this) +
                    `
                    {{#Season}}<div><b>Season</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Season}}&quot;);})'>{{Season}}</a></div>{{/Season}}
                    {{#DayType}}<div><b>DayType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DayType}}&quot;);})'>{{DayType}}</a></div>{{/DayType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SeasonDayTypeSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_SeasonDayTypeSchedule_collapse" style="margin-left: 10px;">SeasonDayTypeSchedule</a></legend>
                    <div id="{{id}}_SeasonDayTypeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Season'>Season: </label><div class='col-sm-8'><input id='{{id}}_Season' class='form-control' type='text'{{#Season}} value='{{Season}}'{{/Season}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DayType'>DayType: </label><div class='col-sm-8'><input id='{{id}}_DayType' class='form-control' type='text'{{#DayType}} value='{{DayType}}'{{/DayType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SeasonDayTypeSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Season").value; if ("" != temp) obj.Season = temp;
                temp = document.getElementById (id + "_DayType").value; if ("" != temp) obj.DayType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Season", "Season", "0..1", "0..*"],
                        ["DayType", "DayType", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * The class is the third level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class LoadGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadGroup;
                if (null == bucket)
                   cim_data.LoadGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadGroup";
                base.parse_attribute (/<cim:LoadGroup.SubLoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubLoadArea", sub, context);
                var bucket = context.parsed.LoadGroup;
                if (null == bucket)
                   context.parsed.LoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LoadGroup", "SubLoadArea", "SubLoadArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadGroup_collapse" aria-expanded="true" aria-controls="LoadGroup_collapse" style="margin-left: 10px;">LoadGroup</a></legend>
                    <div id="LoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#SubLoadArea}}<div><b>SubLoadArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SubLoadArea}}&quot;);})'>{{SubLoadArea}}</a></div>{{/SubLoadArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_LoadGroup_collapse" aria-expanded="true" aria-controls="{{id}}_LoadGroup_collapse" style="margin-left: 10px;">LoadGroup</a></legend>
                    <div id="{{id}}_LoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SubLoadArea'>SubLoadArea: </label><div class='col-sm-8'><input id='{{id}}_SubLoadArea' class='form-control' type='text'{{#SubLoadArea}} value='{{SubLoadArea}}'{{/SubLoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LoadGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SubLoadArea").value; if ("" != temp) obj.SubLoadArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SubLoadArea", "SubLoadArea", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Describes an area having energy production or consumption.
         *
         * Specializations are intended to support the load allocation function as typically required in energy management systems or planning studies to allocate hypothesized load levels to individual load points for power flow analysis.  Often the energy area can be linked to both measured and forecast load levels.
         *
         */
        class EnergyArea extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergyArea;
                if (null == bucket)
                   cim_data.EnergyArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyArea[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyArea";
                base.parse_attribute (/<cim:EnergyArea.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);
                var bucket = context.parsed.EnergyArea;
                if (null == bucket)
                   context.parsed.EnergyArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergyArea", "ControlArea", "ControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyArea_collapse" aria-expanded="true" aria-controls="EnergyArea_collapse" style="margin-left: 10px;">EnergyArea</a></legend>
                    <div id="EnergyArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ControlArea}}<div><b>ControlArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlArea}}&quot;);})'>{{ControlArea}}</a></div>{{/ControlArea}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_EnergyArea_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyArea_collapse" style="margin-left: 10px;">EnergyArea</a></legend>
                    <div id="{{id}}_EnergyArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='{{id}}_ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ControlArea").value; if ("" != temp) obj.ControlArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ControlArea", "ControlArea", "0..1", "0..1"]
                    ]
                );
            }
        }

        /**
         * Group of similar days.
         *
         * For example it could be used to represent weekdays, weekend, or holidays.
         *
         */
        class DayType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DayType;
                if (null == bucket)
                   cim_data.DayType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DayType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DayType";
                base.parse_attributes (/<cim:DayType.SeasonDayTypeSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SeasonDayTypeSchedules", sub, context);
                var bucket = context.parsed.DayType;
                if (null == bucket)
                   context.parsed.DayType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DayType", "SeasonDayTypeSchedules", "SeasonDayTypeSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DayType_collapse" aria-expanded="true" aria-controls="DayType_collapse" style="margin-left: 10px;">DayType</a></legend>
                    <div id="DayType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#SeasonDayTypeSchedules}}<div><b>SeasonDayTypeSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SeasonDayTypeSchedules}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SeasonDayTypeSchedules) obj.SeasonDayTypeSchedules_string = obj.SeasonDayTypeSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SeasonDayTypeSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DayType_collapse" aria-expanded="true" aria-controls="{{id}}_DayType_collapse" style="margin-left: 10px;">DayType</a></legend>
                    <div id="{{id}}_DayType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "DayType" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SeasonDayTypeSchedules", "SeasonDayTypeSchedule", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * Models the characteristic response of the load demand due to changes in system conditions such as voltage and frequency.
         *
         * This is not related to demand response.
         *
         */
        class LoadResponseCharacteristic extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadResponseCharacteristic;
                if (null == bucket)
                   cim_data.LoadResponseCharacteristic = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadResponseCharacteristic[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadResponseCharacteristic";
                base.parse_element (/<cim:LoadResponseCharacteristic.exponentModel>([\s\S]*?)<\/cim:LoadResponseCharacteristic.exponentModel>/g, obj, "exponentModel", base.to_boolean, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantCurrent>/g, obj, "pConstantCurrent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantImpedance>/g, obj, "pConstantImpedance", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pConstantPower>/g, obj, "pConstantPower", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pFrequencyExponent>/g, obj, "pFrequencyExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.pVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.pVoltageExponent>/g, obj, "pVoltageExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantCurrent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantCurrent>/g, obj, "qConstantCurrent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantImpedance>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantImpedance>/g, obj, "qConstantImpedance", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qConstantPower>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qConstantPower>/g, obj, "qConstantPower", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qFrequencyExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qFrequencyExponent>/g, obj, "qFrequencyExponent", base.to_float, sub, context);
                base.parse_element (/<cim:LoadResponseCharacteristic.qVoltageExponent>([\s\S]*?)<\/cim:LoadResponseCharacteristic.qVoltageExponent>/g, obj, "qVoltageExponent", base.to_float, sub, context);
                base.parse_attributes (/<cim:LoadResponseCharacteristic.EnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumer", sub, context);
                var bucket = context.parsed.LoadResponseCharacteristic;
                if (null == bucket)
                   context.parsed.LoadResponseCharacteristic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadResponseCharacteristic", "exponentModel", "exponentModel",  base.from_boolean, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantCurrent", "pConstantCurrent",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantImpedance", "pConstantImpedance",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantPower", "pConstantPower",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pFrequencyExponent", "pFrequencyExponent",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pVoltageExponent", "pVoltageExponent",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantCurrent", "qConstantCurrent",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantImpedance", "qConstantImpedance",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantPower", "qConstantPower",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qFrequencyExponent", "qFrequencyExponent",  base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qVoltageExponent", "qVoltageExponent",  base.from_float, fields);
                base.export_attributes (obj, "LoadResponseCharacteristic", "EnergyConsumer", "EnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadResponseCharacteristic_collapse" aria-expanded="true" aria-controls="LoadResponseCharacteristic_collapse" style="margin-left: 10px;">LoadResponseCharacteristic</a></legend>
                    <div id="LoadResponseCharacteristic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#exponentModel}}<div><b>exponentModel</b>: {{exponentModel}}</div>{{/exponentModel}}
                    {{#pConstantCurrent}}<div><b>pConstantCurrent</b>: {{pConstantCurrent}}</div>{{/pConstantCurrent}}
                    {{#pConstantImpedance}}<div><b>pConstantImpedance</b>: {{pConstantImpedance}}</div>{{/pConstantImpedance}}
                    {{#pConstantPower}}<div><b>pConstantPower</b>: {{pConstantPower}}</div>{{/pConstantPower}}
                    {{#pFrequencyExponent}}<div><b>pFrequencyExponent</b>: {{pFrequencyExponent}}</div>{{/pFrequencyExponent}}
                    {{#pVoltageExponent}}<div><b>pVoltageExponent</b>: {{pVoltageExponent}}</div>{{/pVoltageExponent}}
                    {{#qConstantCurrent}}<div><b>qConstantCurrent</b>: {{qConstantCurrent}}</div>{{/qConstantCurrent}}
                    {{#qConstantImpedance}}<div><b>qConstantImpedance</b>: {{qConstantImpedance}}</div>{{/qConstantImpedance}}
                    {{#qConstantPower}}<div><b>qConstantPower</b>: {{qConstantPower}}</div>{{/qConstantPower}}
                    {{#qFrequencyExponent}}<div><b>qFrequencyExponent</b>: {{qFrequencyExponent}}</div>{{/qFrequencyExponent}}
                    {{#qVoltageExponent}}<div><b>qVoltageExponent</b>: {{qVoltageExponent}}</div>{{/qVoltageExponent}}
                    {{#EnergyConsumer}}<div><b>EnergyConsumer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyConsumer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyConsumer) obj.EnergyConsumer_string = obj.EnergyConsumer.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyConsumer_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_LoadResponseCharacteristic_collapse" aria-expanded="true" aria-controls="{{id}}_LoadResponseCharacteristic_collapse" style="margin-left: 10px;">LoadResponseCharacteristic</a></legend>
                    <div id="{{id}}_LoadResponseCharacteristic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_exponentModel'>exponentModel: </label><div class='col-sm-8'><input id='{{id}}_exponentModel' class='form-check-input' type='checkbox'{{#exponentModel}} checked{{/exponentModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pConstantCurrent'>pConstantCurrent: </label><div class='col-sm-8'><input id='{{id}}_pConstantCurrent' class='form-control' type='text'{{#pConstantCurrent}} value='{{pConstantCurrent}}'{{/pConstantCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pConstantImpedance'>pConstantImpedance: </label><div class='col-sm-8'><input id='{{id}}_pConstantImpedance' class='form-control' type='text'{{#pConstantImpedance}} value='{{pConstantImpedance}}'{{/pConstantImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pConstantPower'>pConstantPower: </label><div class='col-sm-8'><input id='{{id}}_pConstantPower' class='form-control' type='text'{{#pConstantPower}} value='{{pConstantPower}}'{{/pConstantPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pFrequencyExponent'>pFrequencyExponent: </label><div class='col-sm-8'><input id='{{id}}_pFrequencyExponent' class='form-control' type='text'{{#pFrequencyExponent}} value='{{pFrequencyExponent}}'{{/pFrequencyExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pVoltageExponent'>pVoltageExponent: </label><div class='col-sm-8'><input id='{{id}}_pVoltageExponent' class='form-control' type='text'{{#pVoltageExponent}} value='{{pVoltageExponent}}'{{/pVoltageExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qConstantCurrent'>qConstantCurrent: </label><div class='col-sm-8'><input id='{{id}}_qConstantCurrent' class='form-control' type='text'{{#qConstantCurrent}} value='{{qConstantCurrent}}'{{/qConstantCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qConstantImpedance'>qConstantImpedance: </label><div class='col-sm-8'><input id='{{id}}_qConstantImpedance' class='form-control' type='text'{{#qConstantImpedance}} value='{{qConstantImpedance}}'{{/qConstantImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qConstantPower'>qConstantPower: </label><div class='col-sm-8'><input id='{{id}}_qConstantPower' class='form-control' type='text'{{#qConstantPower}} value='{{qConstantPower}}'{{/qConstantPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qFrequencyExponent'>qFrequencyExponent: </label><div class='col-sm-8'><input id='{{id}}_qFrequencyExponent' class='form-control' type='text'{{#qFrequencyExponent}} value='{{qFrequencyExponent}}'{{/qFrequencyExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qVoltageExponent'>qVoltageExponent: </label><div class='col-sm-8'><input id='{{id}}_qVoltageExponent' class='form-control' type='text'{{#qVoltageExponent}} value='{{qVoltageExponent}}'{{/qVoltageExponent}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LoadResponseCharacteristic" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_exponentModel").checked; if (temp) obj.exponentModel = true;
                temp = document.getElementById (id + "_pConstantCurrent").value; if ("" != temp) obj.pConstantCurrent = temp;
                temp = document.getElementById (id + "_pConstantImpedance").value; if ("" != temp) obj.pConstantImpedance = temp;
                temp = document.getElementById (id + "_pConstantPower").value; if ("" != temp) obj.pConstantPower = temp;
                temp = document.getElementById (id + "_pFrequencyExponent").value; if ("" != temp) obj.pFrequencyExponent = temp;
                temp = document.getElementById (id + "_pVoltageExponent").value; if ("" != temp) obj.pVoltageExponent = temp;
                temp = document.getElementById (id + "_qConstantCurrent").value; if ("" != temp) obj.qConstantCurrent = temp;
                temp = document.getElementById (id + "_qConstantImpedance").value; if ("" != temp) obj.qConstantImpedance = temp;
                temp = document.getElementById (id + "_qConstantPower").value; if ("" != temp) obj.qConstantPower = temp;
                temp = document.getElementById (id + "_qFrequencyExponent").value; if ("" != temp) obj.qFrequencyExponent = temp;
                temp = document.getElementById (id + "_qVoltageExponent").value; if ("" != temp) obj.qVoltageExponent = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyConsumer", "EnergyConsumer", "0..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * An area or zone of the power system which is used for load shedding purposes.
         *
         */
        class PowerCutZone extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerCutZone;
                if (null == bucket)
                   cim_data.PowerCutZone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerCutZone[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "PowerCutZone";
                base.parse_element (/<cim:PowerCutZone.cutLevel1>([\s\S]*?)<\/cim:PowerCutZone.cutLevel1>/g, obj, "cutLevel1", base.to_string, sub, context);
                base.parse_element (/<cim:PowerCutZone.cutLevel2>([\s\S]*?)<\/cim:PowerCutZone.cutLevel2>/g, obj, "cutLevel2", base.to_string, sub, context);
                base.parse_attributes (/<cim:PowerCutZone.EnergyConsumers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumers", sub, context);
                var bucket = context.parsed.PowerCutZone;
                if (null == bucket)
                   context.parsed.PowerCutZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerCutZone", "cutLevel1", "cutLevel1",  base.from_string, fields);
                base.export_element (obj, "PowerCutZone", "cutLevel2", "cutLevel2",  base.from_string, fields);
                base.export_attributes (obj, "PowerCutZone", "EnergyConsumers", "EnergyConsumers", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerCutZone_collapse" aria-expanded="true" aria-controls="PowerCutZone_collapse" style="margin-left: 10px;">PowerCutZone</a></legend>
                    <div id="PowerCutZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#cutLevel1}}<div><b>cutLevel1</b>: {{cutLevel1}}</div>{{/cutLevel1}}
                    {{#cutLevel2}}<div><b>cutLevel2</b>: {{cutLevel2}}</div>{{/cutLevel2}}
                    {{#EnergyConsumers}}<div><b>EnergyConsumers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyConsumers}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyConsumers) obj.EnergyConsumers_string = obj.EnergyConsumers.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyConsumers_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PowerCutZone_collapse" aria-expanded="true" aria-controls="{{id}}_PowerCutZone_collapse" style="margin-left: 10px;">PowerCutZone</a></legend>
                    <div id="{{id}}_PowerCutZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cutLevel1'>cutLevel1: </label><div class='col-sm-8'><input id='{{id}}_cutLevel1' class='form-control' type='text'{{#cutLevel1}} value='{{cutLevel1}}'{{/cutLevel1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cutLevel2'>cutLevel2: </label><div class='col-sm-8'><input id='{{id}}_cutLevel2' class='form-control' type='text'{{#cutLevel2}} value='{{cutLevel2}}'{{/cutLevel2}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerCutZone" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cutLevel1").value; if ("" != temp) obj.cutLevel1 = temp;
                temp = document.getElementById (id + "_cutLevel2").value; if ("" != temp) obj.cutLevel2 = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyConsumers", "EnergyConsumer", "1..*", "0..1"]
                    ]
                );
            }
        }

        /**
         * An active power (Y1-axis) and reactive power (Y2-axis) schedule (curves) versus time (X-axis) for non-conforming loads, e.g., large industrial load or power station service (where modeled).
         *
         */
        class NonConformLoadSchedule extends SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonConformLoadSchedule;
                if (null == bucket)
                   cim_data.NonConformLoadSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonConformLoadSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoadSchedule";
                base.parse_attribute (/<cim:NonConformLoadSchedule.NonConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonConformLoadGroup", sub, context);
                var bucket = context.parsed.NonConformLoadSchedule;
                if (null == bucket)
                   context.parsed.NonConformLoadSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SeasonDayTypeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "NonConformLoadSchedule", "NonConformLoadGroup", "NonConformLoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoadSchedule_collapse" aria-expanded="true" aria-controls="NonConformLoadSchedule_collapse" style="margin-left: 10px;">NonConformLoadSchedule</a></legend>
                    <div id="NonConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.template.call (this) +
                    `
                    {{#NonConformLoadGroup}}<div><b>NonConformLoadGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NonConformLoadGroup}}&quot;);})'>{{NonConformLoadGroup}}</a></div>{{/NonConformLoadGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_NonConformLoadSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_NonConformLoadSchedule_collapse" style="margin-left: 10px;">NonConformLoadSchedule</a></legend>
                    <div id="{{id}}_NonConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NonConformLoadGroup'>NonConformLoadGroup: </label><div class='col-sm-8'><input id='{{id}}_NonConformLoadGroup' class='form-control' type='text'{{#NonConformLoadGroup}} value='{{NonConformLoadGroup}}'{{/NonConformLoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "NonConformLoadSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_NonConformLoadGroup").value; if ("" != temp) obj.NonConformLoadGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["NonConformLoadGroup", "NonConformLoadGroup", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * A curve of load  versus time (X-axis) showing the active power values (Y1-axis) and reactive power (Y2-axis) for each unit of the period covered.
         *
         * This curve represents a typical pattern of load over the time period for a given day type and season.
         *
         */
        class ConformLoadSchedule extends SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ConformLoadSchedule;
                if (null == bucket)
                   cim_data.ConformLoadSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConformLoadSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoadSchedule";
                base.parse_attribute (/<cim:ConformLoadSchedule.ConformLoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConformLoadGroup", sub, context);
                var bucket = context.parsed.ConformLoadSchedule;
                if (null == bucket)
                   context.parsed.ConformLoadSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SeasonDayTypeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ConformLoadSchedule", "ConformLoadGroup", "ConformLoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoadSchedule_collapse" aria-expanded="true" aria-controls="ConformLoadSchedule_collapse" style="margin-left: 10px;">ConformLoadSchedule</a></legend>
                    <div id="ConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.template.call (this) +
                    `
                    {{#ConformLoadGroup}}<div><b>ConformLoadGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConformLoadGroup}}&quot;);})'>{{ConformLoadGroup}}</a></div>{{/ConformLoadGroup}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ConformLoadSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_ConformLoadSchedule_collapse" style="margin-left: 10px;">ConformLoadSchedule</a></legend>
                    <div id="{{id}}_ConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConformLoadGroup'>ConformLoadGroup: </label><div class='col-sm-8'><input id='{{id}}_ConformLoadGroup' class='form-control' type='text'{{#ConformLoadGroup}} value='{{ConformLoadGroup}}'{{/ConformLoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ConformLoadSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ConformLoadGroup").value; if ("" != temp) obj.ConformLoadGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ConformLoadGroup", "ConformLoadGroup", "1", "1..*"]
                    ]
                );
            }
        }

        /**
         * Loads that do not follow a daily and seasonal load variation pattern.
         *
         */
        class NonConformLoadGroup extends LoadGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonConformLoadGroup;
                if (null == bucket)
                   cim_data.NonConformLoadGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonConformLoadGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoadGroup";
                base.parse_attributes (/<cim:NonConformLoadGroup.EnergyConsumers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumers", sub, context);
                base.parse_attributes (/<cim:NonConformLoadGroup.NonConformLoadSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonConformLoadSchedules", sub, context);
                var bucket = context.parsed.NonConformLoadGroup;
                if (null == bucket)
                   context.parsed.NonConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadGroup.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NonConformLoadGroup", "EnergyConsumers", "EnergyConsumers", fields);
                base.export_attributes (obj, "NonConformLoadGroup", "NonConformLoadSchedules", "NonConformLoadSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoadGroup_collapse" aria-expanded="true" aria-controls="NonConformLoadGroup_collapse" style="margin-left: 10px;">NonConformLoadGroup</a></legend>
                    <div id="NonConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.template.call (this) +
                    `
                    {{#EnergyConsumers}}<div><b>EnergyConsumers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyConsumers}}
                    {{#NonConformLoadSchedules}}<div><b>NonConformLoadSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/NonConformLoadSchedules}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyConsumers) obj.EnergyConsumers_string = obj.EnergyConsumers.join ();
                if (obj.NonConformLoadSchedules) obj.NonConformLoadSchedules_string = obj.NonConformLoadSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyConsumers_string;
                delete obj.NonConformLoadSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_NonConformLoadGroup_collapse" aria-expanded="true" aria-controls="{{id}}_NonConformLoadGroup_collapse" style="margin-left: 10px;">NonConformLoadGroup</a></legend>
                    <div id="{{id}}_NonConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "NonConformLoadGroup" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyConsumers", "NonConformLoad", "0..*", "0..1"],
                        ["NonConformLoadSchedules", "NonConformLoadSchedule", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * A group of loads conforming to an allocation pattern.
         *
         */
        class ConformLoadGroup extends LoadGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ConformLoadGroup;
                if (null == bucket)
                   cim_data.ConformLoadGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConformLoadGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoadGroup";
                base.parse_attributes (/<cim:ConformLoadGroup.EnergyConsumers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumers", sub, context);
                base.parse_attributes (/<cim:ConformLoadGroup.ConformLoadSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConformLoadSchedules", sub, context);
                var bucket = context.parsed.ConformLoadGroup;
                if (null == bucket)
                   context.parsed.ConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadGroup.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ConformLoadGroup", "EnergyConsumers", "EnergyConsumers", fields);
                base.export_attributes (obj, "ConformLoadGroup", "ConformLoadSchedules", "ConformLoadSchedules", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoadGroup_collapse" aria-expanded="true" aria-controls="ConformLoadGroup_collapse" style="margin-left: 10px;">ConformLoadGroup</a></legend>
                    <div id="ConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.template.call (this) +
                    `
                    {{#EnergyConsumers}}<div><b>EnergyConsumers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EnergyConsumers}}
                    {{#ConformLoadSchedules}}<div><b>ConformLoadSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConformLoadSchedules}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EnergyConsumers) obj.EnergyConsumers_string = obj.EnergyConsumers.join ();
                if (obj.ConformLoadSchedules) obj.ConformLoadSchedules_string = obj.ConformLoadSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EnergyConsumers_string;
                delete obj.ConformLoadSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ConformLoadGroup_collapse" aria-expanded="true" aria-controls="{{id}}_ConformLoadGroup_collapse" style="margin-left: 10px;">ConformLoadGroup</a></legend>
                    <div id="{{id}}_ConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "ConformLoadGroup" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EnergyConsumers", "ConformLoad", "0..*", "0..1"],
                        ["ConformLoadSchedules", "ConformLoadSchedule", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * The class is the second level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class SubLoadArea extends EnergyArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SubLoadArea;
                if (null == bucket)
                   cim_data.SubLoadArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SubLoadArea[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "SubLoadArea";
                base.parse_attribute (/<cim:SubLoadArea.LoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadArea", sub, context);
                base.parse_attributes (/<cim:SubLoadArea.LoadGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroups", sub, context);
                var bucket = context.parsed.SubLoadArea;
                if (null == bucket)
                   context.parsed.SubLoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnergyArea.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SubLoadArea", "LoadArea", "LoadArea", fields);
                base.export_attributes (obj, "SubLoadArea", "LoadGroups", "LoadGroups", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubLoadArea_collapse" aria-expanded="true" aria-controls="SubLoadArea_collapse" style="margin-left: 10px;">SubLoadArea</a></legend>
                    <div id="SubLoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.template.call (this) +
                    `
                    {{#LoadArea}}<div><b>LoadArea</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadArea}}&quot;);})'>{{LoadArea}}</a></div>{{/LoadArea}}
                    {{#LoadGroups}}<div><b>LoadGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LoadGroups}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LoadGroups) obj.LoadGroups_string = obj.LoadGroups.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LoadGroups_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SubLoadArea_collapse" aria-expanded="true" aria-controls="{{id}}_SubLoadArea_collapse" style="margin-left: 10px;">SubLoadArea</a></legend>
                    <div id="{{id}}_SubLoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadArea'>LoadArea: </label><div class='col-sm-8'><input id='{{id}}_LoadArea' class='form-control' type='text'{{#LoadArea}} value='{{LoadArea}}'{{/LoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SubLoadArea" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LoadArea").value; if ("" != temp) obj.LoadArea = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["LoadArea", "LoadArea", "1", "1..*"],
                        ["LoadGroups", "LoadGroup", "1..*", "1"]
                    ]
                );
            }
        }

        /**
         * The class is the root or first level in a hierarchical structure for grouping of loads for the purpose of load flow load scaling.
         *
         */
        class LoadArea extends EnergyArea
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadArea;
                if (null == bucket)
                   cim_data.LoadArea = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadArea[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "LoadArea";
                base.parse_attributes (/<cim:LoadArea.SubLoadAreas\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SubLoadAreas", sub, context);
                var bucket = context.parsed.LoadArea;
                if (null == bucket)
                   context.parsed.LoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnergyArea.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "LoadArea", "SubLoadAreas", "SubLoadAreas", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadArea_collapse" aria-expanded="true" aria-controls="LoadArea_collapse" style="margin-left: 10px;">LoadArea</a></legend>
                    <div id="LoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.template.call (this) +
                    `
                    {{#SubLoadAreas}}<div><b>SubLoadAreas</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SubLoadAreas}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SubLoadAreas) obj.SubLoadAreas_string = obj.SubLoadAreas.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SubLoadAreas_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_LoadArea_collapse" aria-expanded="true" aria-controls="{{id}}_LoadArea_collapse" style="margin-left: 10px;">LoadArea</a></legend>
                    <div id="{{id}}_LoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "LoadArea" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SubLoadAreas", "SubLoadArea", "1..*", "1"]
                    ]
                );
            }
        }

        return (
            {
                NonConformLoadGroup: NonConformLoadGroup,
                ConformLoadSchedule: ConformLoadSchedule,
                NonConformLoadSchedule: NonConformLoadSchedule,
                ConformLoadGroup: ConformLoadGroup,
                EnergyArea: EnergyArea,
                SeasonDayTypeSchedule: SeasonDayTypeSchedule,
                DayType: DayType,
                Season: Season,
                LoadResponseCharacteristic: LoadResponseCharacteristic,
                LoadGroup: LoadGroup,
                SubLoadArea: SubLoadArea,
                PowerCutZone: PowerCutZone,
                LoadArea: LoadArea
            }
        );
    }
);