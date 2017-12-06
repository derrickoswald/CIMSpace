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
                this._id = template.id;
                var bucket = cim_data.Season;
                if (null == bucket)
                   cim_data.Season = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Season[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Season";
                base.parse_element (/<cim:Season.endDate>([\s\S]*?)<\/cim:Season.endDate>/g, obj, "endDate", base.to_string, sub, context);
                base.parse_element (/<cim:Season.startDate>([\s\S]*?)<\/cim:Season.startDate>/g, obj, "startDate", base.to_string, sub, context);

                var bucket = context.parsed.Season;
                if (null == bucket)
                   context.parsed.Season = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Season", "endDate", base.from_string, fields);
                base.export_element (obj, "Season", "startDate", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Season_collapse" aria-expanded="true" aria-controls="Season_collapse" style="margin-left: 10px;">Season</a></legend>
                    <div id="Season_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='endDate'>endDate: </label><div class='col-sm-8'><input id='endDate' class='form-control' type='text'{{#endDate}} value='{{endDate}}'{{/endDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='startDate'>startDate: </label><div class='col-sm-8'><input id='startDate' class='form-control' type='text'{{#startDate}} value='{{startDate}}'{{/startDate}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.SeasonDayTypeSchedule;
                if (null == bucket)
                   cim_data.SeasonDayTypeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SeasonDayTypeSchedule[this._id];
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

                base.export_attribute (obj, "SeasonDayTypeSchedule", "Season", fields);
                base.export_attribute (obj, "SeasonDayTypeSchedule", "DayType", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SeasonDayTypeSchedule_collapse" aria-expanded="true" aria-controls="SeasonDayTypeSchedule_collapse" style="margin-left: 10px;">SeasonDayTypeSchedule</a></legend>
                    <div id="SeasonDayTypeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.RegularIntervalSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Season'>Season: </label><div class='col-sm-8'><input id='Season' class='form-control' type='text'{{#Season}} value='{{Season}}'{{/Season}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DayType'>DayType: </label><div class='col-sm-8'><input id='DayType' class='form-control' type='text'{{#DayType}} value='{{DayType}}'{{/DayType}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.LoadGroup;
                if (null == bucket)
                   cim_data.LoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadGroup[this._id];
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

                base.export_attribute (obj, "LoadGroup", "SubLoadArea", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadGroup_collapse" aria-expanded="true" aria-controls="LoadGroup_collapse" style="margin-left: 10px;">LoadGroup</a></legend>
                    <div id="LoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SubLoadArea'>SubLoadArea: </label><div class='col-sm-8'><input id='SubLoadArea' class='form-control' type='text'{{#SubLoadArea}} value='{{SubLoadArea}}'{{/SubLoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.EnergyArea;
                if (null == bucket)
                   cim_data.EnergyArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnergyArea[this._id];
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

                base.export_attribute (obj, "EnergyArea", "ControlArea", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnergyArea_collapse" aria-expanded="true" aria-controls="EnergyArea_collapse" style="margin-left: 10px;">EnergyArea</a></legend>
                    <div id="EnergyArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ControlArea'>ControlArea: </label><div class='col-sm-8'><input id='ControlArea' class='form-control' type='text'{{#ControlArea}} value='{{ControlArea}}'{{/ControlArea}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.DayType;
                if (null == bucket)
                   cim_data.DayType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DayType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DayType";

                var bucket = context.parsed.DayType;
                if (null == bucket)
                   context.parsed.DayType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DayType_collapse" aria-expanded="true" aria-controls="DayType_collapse" style="margin-left: 10px;">DayType</a></legend>
                    <div id="DayType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.LoadResponseCharacteristic;
                if (null == bucket)
                   cim_data.LoadResponseCharacteristic = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadResponseCharacteristic[this._id];
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

                var bucket = context.parsed.LoadResponseCharacteristic;
                if (null == bucket)
                   context.parsed.LoadResponseCharacteristic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadResponseCharacteristic", "exponentModel", base.from_boolean, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantCurrent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantImpedance", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pConstantPower", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pFrequencyExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "pVoltageExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantCurrent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantImpedance", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qConstantPower", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qFrequencyExponent", base.from_float, fields);
                base.export_element (obj, "LoadResponseCharacteristic", "qVoltageExponent", base.from_float, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadResponseCharacteristic_collapse" aria-expanded="true" aria-controls="LoadResponseCharacteristic_collapse" style="margin-left: 10px;">LoadResponseCharacteristic</a></legend>
                    <div id="LoadResponseCharacteristic_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='exponentModel'>exponentModel: </label><div class='col-sm-8'><input id='exponentModel' class='form-check-input' type='checkbox'{{#exponentModel}} checked{{/exponentModel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pConstantCurrent'>pConstantCurrent: </label><div class='col-sm-8'><input id='pConstantCurrent' class='form-control' type='text'{{#pConstantCurrent}} value='{{pConstantCurrent}}'{{/pConstantCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pConstantImpedance'>pConstantImpedance: </label><div class='col-sm-8'><input id='pConstantImpedance' class='form-control' type='text'{{#pConstantImpedance}} value='{{pConstantImpedance}}'{{/pConstantImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pConstantPower'>pConstantPower: </label><div class='col-sm-8'><input id='pConstantPower' class='form-control' type='text'{{#pConstantPower}} value='{{pConstantPower}}'{{/pConstantPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pFrequencyExponent'>pFrequencyExponent: </label><div class='col-sm-8'><input id='pFrequencyExponent' class='form-control' type='text'{{#pFrequencyExponent}} value='{{pFrequencyExponent}}'{{/pFrequencyExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pVoltageExponent'>pVoltageExponent: </label><div class='col-sm-8'><input id='pVoltageExponent' class='form-control' type='text'{{#pVoltageExponent}} value='{{pVoltageExponent}}'{{/pVoltageExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qConstantCurrent'>qConstantCurrent: </label><div class='col-sm-8'><input id='qConstantCurrent' class='form-control' type='text'{{#qConstantCurrent}} value='{{qConstantCurrent}}'{{/qConstantCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qConstantImpedance'>qConstantImpedance: </label><div class='col-sm-8'><input id='qConstantImpedance' class='form-control' type='text'{{#qConstantImpedance}} value='{{qConstantImpedance}}'{{/qConstantImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qConstantPower'>qConstantPower: </label><div class='col-sm-8'><input id='qConstantPower' class='form-control' type='text'{{#qConstantPower}} value='{{qConstantPower}}'{{/qConstantPower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qFrequencyExponent'>qFrequencyExponent: </label><div class='col-sm-8'><input id='qFrequencyExponent' class='form-control' type='text'{{#qFrequencyExponent}} value='{{qFrequencyExponent}}'{{/qFrequencyExponent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qVoltageExponent'>qVoltageExponent: </label><div class='col-sm-8'><input id='qVoltageExponent' class='form-control' type='text'{{#qVoltageExponent}} value='{{qVoltageExponent}}'{{/qVoltageExponent}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.PowerCutZone;
                if (null == bucket)
                   cim_data.PowerCutZone = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PowerCutZone[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "PowerCutZone";
                base.parse_element (/<cim:PowerCutZone.cutLevel1>([\s\S]*?)<\/cim:PowerCutZone.cutLevel1>/g, obj, "cutLevel1", base.to_string, sub, context);
                base.parse_element (/<cim:PowerCutZone.cutLevel2>([\s\S]*?)<\/cim:PowerCutZone.cutLevel2>/g, obj, "cutLevel2", base.to_string, sub, context);

                var bucket = context.parsed.PowerCutZone;
                if (null == bucket)
                   context.parsed.PowerCutZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerCutZone", "cutLevel1", base.from_string, fields);
                base.export_element (obj, "PowerCutZone", "cutLevel2", base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PowerCutZone_collapse" aria-expanded="true" aria-controls="PowerCutZone_collapse" style="margin-left: 10px;">PowerCutZone</a></legend>
                    <div id="PowerCutZone_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cutLevel1'>cutLevel1: </label><div class='col-sm-8'><input id='cutLevel1' class='form-control' type='text'{{#cutLevel1}} value='{{cutLevel1}}'{{/cutLevel1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='cutLevel2'>cutLevel2: </label><div class='col-sm-8'><input id='cutLevel2' class='form-control' type='text'{{#cutLevel2}} value='{{cutLevel2}}'{{/cutLevel2}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.NonConformLoadSchedule;
                if (null == bucket)
                   cim_data.NonConformLoadSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoadSchedule[this._id];
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

                base.export_attribute (obj, "NonConformLoadSchedule", "NonConformLoadGroup", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoadSchedule_collapse" aria-expanded="true" aria-controls="NonConformLoadSchedule_collapse" style="margin-left: 10px;">NonConformLoadSchedule</a></legend>
                    <div id="NonConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='NonConformLoadGroup'>NonConformLoadGroup: </label><div class='col-sm-8'><input id='NonConformLoadGroup' class='form-control' type='text'{{#NonConformLoadGroup}} value='{{NonConformLoadGroup}}'{{/NonConformLoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ConformLoadSchedule;
                if (null == bucket)
                   cim_data.ConformLoadSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoadSchedule[this._id];
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

                base.export_attribute (obj, "ConformLoadSchedule", "ConformLoadGroup", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoadSchedule_collapse" aria-expanded="true" aria-controls="ConformLoadSchedule_collapse" style="margin-left: 10px;">ConformLoadSchedule</a></legend>
                    <div id="ConformLoadSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConformLoadGroup'>ConformLoadGroup: </label><div class='col-sm-8'><input id='ConformLoadGroup' class='form-control' type='text'{{#ConformLoadGroup}} value='{{ConformLoadGroup}}'{{/ConformLoadGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.NonConformLoadGroup;
                if (null == bucket)
                   cim_data.NonConformLoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoadGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoadGroup";

                var bucket = context.parsed.NonConformLoadGroup;
                if (null == bucket)
                   context.parsed.NonConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadGroup.prototype.export.call (this, obj, false);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#NonConformLoadGroup_collapse" aria-expanded="true" aria-controls="NonConformLoadGroup_collapse" style="margin-left: 10px;">NonConformLoadGroup</a></legend>
                    <div id="NonConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.ConformLoadGroup;
                if (null == bucket)
                   cim_data.ConformLoadGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoadGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadGroup.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoadGroup";

                var bucket = context.parsed.ConformLoadGroup;
                if (null == bucket)
                   context.parsed.ConformLoadGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadGroup.prototype.export.call (this, obj, false);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConformLoadGroup_collapse" aria-expanded="true" aria-controls="ConformLoadGroup_collapse" style="margin-left: 10px;">ConformLoadGroup</a></legend>
                    <div id="ConformLoadGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LoadGroup.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.SubLoadArea;
                if (null == bucket)
                   cim_data.SubLoadArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SubLoadArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "SubLoadArea";
                base.parse_attribute (/<cim:SubLoadArea.LoadArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadArea", sub, context);

                var bucket = context.parsed.SubLoadArea;
                if (null == bucket)
                   context.parsed.SubLoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnergyArea.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SubLoadArea", "LoadArea", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SubLoadArea_collapse" aria-expanded="true" aria-controls="SubLoadArea_collapse" style="margin-left: 10px;">SubLoadArea</a></legend>
                    <div id="SubLoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='LoadArea'>LoadArea: </label><div class='col-sm-8'><input id='LoadArea' class='form-control' type='text'{{#LoadArea}} value='{{LoadArea}}'{{/LoadArea}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.LoadArea;
                if (null == bucket)
                   cim_data.LoadArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LoadArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnergyArea.prototype.parse.call (this, context, sub);
                obj.cls = "LoadArea";

                var bucket = context.parsed.LoadArea;
                if (null == bucket)
                   context.parsed.LoadArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnergyArea.prototype.export.call (this, obj, false);

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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LoadArea_collapse" aria-expanded="true" aria-controls="LoadArea_collapse" style="margin-left: 10px;">LoadArea</a></legend>
                    <div id="LoadArea_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnergyArea.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
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