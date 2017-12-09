define
(
    ["model/base", "model/Core"],
    /**
     * The description of computed or dynamic limits.
     *
     * These classes would likely go into the OperationalLimits package.
     *
     */
    function (base, Core)
    {

        /**
         * A point on a table of limit verses temperature.
         *
         */
        class TemperatureDependentLimitPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperatureDependentLimitPoint;
                if (null == bucket)
                   cim_data.TemperatureDependentLimitPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperatureDependentLimitPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TemperatureDependentLimitPoint";
                base.parse_element (/<cim:TemperatureDependentLimitPoint.limitPercent>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.limitPercent>/g, obj, "limitPercent", base.to_string, sub, context);
                base.parse_element (/<cim:TemperatureDependentLimitPoint.temperature>([\s\S]*?)<\/cim:TemperatureDependentLimitPoint.temperature>/g, obj, "temperature", base.to_string, sub, context);
                base.parse_attribute (/<cim:TemperatureDependentLimitPoint.TemperatureDependentLimitTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TemperatureDependentLimitTable", sub, context);
                var bucket = context.parsed.TemperatureDependentLimitPoint;
                if (null == bucket)
                   context.parsed.TemperatureDependentLimitPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TemperatureDependentLimitPoint", "limitPercent", "limitPercent",  base.from_string, fields);
                base.export_element (obj, "TemperatureDependentLimitPoint", "temperature", "temperature",  base.from_string, fields);
                base.export_attribute (obj, "TemperatureDependentLimitPoint", "TemperatureDependentLimitTable", "TemperatureDependentLimitTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperatureDependentLimitPoint_collapse" aria-expanded="true" aria-controls="TemperatureDependentLimitPoint_collapse" style="margin-left: 10px;">TemperatureDependentLimitPoint</a></legend>
                    <div id="TemperatureDependentLimitPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#limitPercent}}<div><b>limitPercent</b>: {{limitPercent}}</div>{{/limitPercent}}
                    {{#temperature}}<div><b>temperature</b>: {{temperature}}</div>{{/temperature}}
                    {{#TemperatureDependentLimitTable}}<div><b>TemperatureDependentLimitTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TemperatureDependentLimitTable}}&quot;);})'>{{TemperatureDependentLimitTable}}</a></div>{{/TemperatureDependentLimitTable}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperatureDependentLimitPoint_collapse" aria-expanded="true" aria-controls="TemperatureDependentLimitPoint_collapse" style="margin-left: 10px;">TemperatureDependentLimitPoint</a></legend>
                    <div id="TemperatureDependentLimitPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitPercent'>limitPercent: </label><div class='col-sm-8'><input id='limitPercent' class='form-control' type='text'{{#limitPercent}} value='{{limitPercent}}'{{/limitPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='temperature'>temperature: </label><div class='col-sm-8'><input id='temperature' class='form-control' type='text'{{#temperature}} value='{{temperature}}'{{/temperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TemperatureDependentLimitTable'>TemperatureDependentLimitTable: </label><div class='col-sm-8'><input id='TemperatureDependentLimitTable' class='form-control' type='text'{{#TemperatureDependentLimitTable}} value='{{TemperatureDependentLimitTable}}'{{/TemperatureDependentLimitTable}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TemperatureDependentLimitPoint" };
                super.submit (obj);
                temp = document.getElementById ("limitPercent").value; if ("" != temp) obj.limitPercent = temp;
                temp = document.getElementById ("temperature").value; if ("" != temp) obj.temperature = temp;
                temp = document.getElementById ("TemperatureDependentLimitTable").value; if ("" != temp) obj.TemperatureDependentLimitTable = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TemperatureDependentLimitTable", "TemperatureDependentLimitTable", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * One operational limit type scales values of another operational limit type when under the same operational limit set.
         *
         * This applies to any operational limit assigned to the target operational limit type and without other limit dependency models.
         *
         */
        class OperatonalLimitTypeScaling extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperatonalLimitTypeScaling;
                if (null == bucket)
                   cim_data.OperatonalLimitTypeScaling = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperatonalLimitTypeScaling[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OperatonalLimitTypeScaling";
                base.parse_element (/<cim:OperatonalLimitTypeScaling.scalingPercent>([\s\S]*?)<\/cim:OperatonalLimitTypeScaling.scalingPercent>/g, obj, "scalingPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperatonalLimitTypeScaling.SourceOperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimitType", sub, context);
                base.parse_attribute (/<cim:OperatonalLimitTypeScaling.TargetOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetOperationalLimit", sub, context);
                var bucket = context.parsed.OperatonalLimitTypeScaling;
                if (null == bucket)
                   context.parsed.OperatonalLimitTypeScaling = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "OperatonalLimitTypeScaling", "scalingPercent", "scalingPercent",  base.from_string, fields);
                base.export_attribute (obj, "OperatonalLimitTypeScaling", "SourceOperationalLimitType", "SourceOperationalLimitType", fields);
                base.export_attribute (obj, "OperatonalLimitTypeScaling", "TargetOperationalLimit", "TargetOperationalLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatonalLimitTypeScaling_collapse" aria-expanded="true" aria-controls="OperatonalLimitTypeScaling_collapse" style="margin-left: 10px;">OperatonalLimitTypeScaling</a></legend>
                    <div id="OperatonalLimitTypeScaling_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#scalingPercent}}<div><b>scalingPercent</b>: {{scalingPercent}}</div>{{/scalingPercent}}
                    {{#SourceOperationalLimitType}}<div><b>SourceOperationalLimitType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SourceOperationalLimitType}}&quot;);})'>{{SourceOperationalLimitType}}</a></div>{{/SourceOperationalLimitType}}
                    {{#TargetOperationalLimit}}<div><b>TargetOperationalLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TargetOperationalLimit}}&quot;);})'>{{TargetOperationalLimit}}</a></div>{{/TargetOperationalLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperatonalLimitTypeScaling_collapse" aria-expanded="true" aria-controls="OperatonalLimitTypeScaling_collapse" style="margin-left: 10px;">OperatonalLimitTypeScaling</a></legend>
                    <div id="OperatonalLimitTypeScaling_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scalingPercent'>scalingPercent: </label><div class='col-sm-8'><input id='scalingPercent' class='form-control' type='text'{{#scalingPercent}} value='{{scalingPercent}}'{{/scalingPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SourceOperationalLimitType'>SourceOperationalLimitType: </label><div class='col-sm-8'><input id='SourceOperationalLimitType' class='form-control' type='text'{{#SourceOperationalLimitType}} value='{{SourceOperationalLimitType}}'{{/SourceOperationalLimitType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TargetOperationalLimit'>TargetOperationalLimit: </label><div class='col-sm-8'><input id='TargetOperationalLimit' class='form-control' type='text'{{#TargetOperationalLimit}} value='{{TargetOperationalLimit}}'{{/TargetOperationalLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "OperatonalLimitTypeScaling" };
                super.submit (obj);
                temp = document.getElementById ("scalingPercent").value; if ("" != temp) obj.scalingPercent = temp;
                temp = document.getElementById ("SourceOperationalLimitType").value; if ("" != temp) obj.SourceOperationalLimitType = temp;
                temp = document.getElementById ("TargetOperationalLimit").value; if ("" != temp) obj.TargetOperationalLimit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SourceOperationalLimitType", "OperationalLimitType", "0..1", "0..*"],
                        ["TargetOperationalLimit", "OperationalLimitType", "1", "0..1"]
                    ]
                );
            }
        }

        /**
         * A limit that is applicable during a scheduled time period.
         *
         */
        class ScheduledLimitValue extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledLimitValue;
                if (null == bucket)
                   cim_data.ScheduledLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledLimitValue";
                base.parse_attribute (/<cim:ScheduledLimitValue.Season\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Season", sub, context);
                base.parse_attribute (/<cim:ScheduledLimitValue.ScheduledLimitDependency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledLimitDependency", sub, context);
                var bucket = context.parsed.ScheduledLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ScheduledLimitValue", "Season", "Season", fields);
                base.export_attribute (obj, "ScheduledLimitValue", "ScheduledLimitDependency", "ScheduledLimitDependency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledLimitValue_collapse" style="margin-left: 10px;">ScheduledLimitValue</a></legend>
                    <div id="ScheduledLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Season}}<div><b>Season</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Season}}&quot;);})'>{{Season}}</a></div>{{/Season}}
                    {{#ScheduledLimitDependency}}<div><b>ScheduledLimitDependency</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ScheduledLimitDependency}}&quot;);})'>{{ScheduledLimitDependency}}</a></div>{{/ScheduledLimitDependency}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledLimitValue_collapse" style="margin-left: 10px;">ScheduledLimitValue</a></legend>
                    <div id="ScheduledLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Season'>Season: </label><div class='col-sm-8'><input id='Season' class='form-control' type='text'{{#Season}} value='{{Season}}'{{/Season}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ScheduledLimitDependency'>ScheduledLimitDependency: </label><div class='col-sm-8'><input id='ScheduledLimitDependency' class='form-control' type='text'{{#ScheduledLimitDependency}} value='{{ScheduledLimitDependency}}'{{/ScheduledLimitDependency}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledLimitValue" };
                super.submit (obj);
                temp = document.getElementById ("Season").value; if ("" != temp) obj.Season = temp;
                temp = document.getElementById ("ScheduledLimitDependency").value; if ("" != temp) obj.ScheduledLimitDependency = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Season", "Season", "0..1", "0..*"],
                        ["ScheduledLimitDependency", "ScheduledLimitDependency", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * This represents a source of ambient temperature.
         *
         */
        class WeatherStation extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WeatherStation;
                if (null == bucket)
                   cim_data.WeatherStation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WeatherStation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "WeatherStation";
                base.parse_attributes (/<cim:WeatherStation.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                var bucket = context.parsed.WeatherStation;
                if (null == bucket)
                   context.parsed.WeatherStation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "WeatherStation", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WeatherStation_collapse" aria-expanded="true" aria-controls="WeatherStation_collapse" style="margin-left: 10px;">WeatherStation</a></legend>
                    <div id="WeatherStation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Equipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Equipment) obj.Equipment_string = obj.Equipment.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Equipment_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WeatherStation_collapse" aria-expanded="true" aria-controls="WeatherStation_collapse" style="margin-left: 10px;">WeatherStation</a></legend>
                    <div id="WeatherStation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}_string'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "WeatherStation" };
                super.submit (obj);
                temp = document.getElementById ("Equipment").value; if ("" != temp) obj.Equipment = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Equipment", "Equipment", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A limit calculation model used to compute an operational limit based on external input such as temperature.
         *
         * These are intended to be shared among operational limits with the same calculation form that apply to a piece of equipment..
         *
         */
        class LimitDependency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LimitDependency;
                if (null == bucket)
                   cim_data.LimitDependency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LimitDependency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LimitDependency";
                base.parse_attribute (/<cim:LimitDependency.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                base.parse_attributes (/<cim:LimitDependency.OperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimit", sub, context);
                var bucket = context.parsed.LimitDependency;
                if (null == bucket)
                   context.parsed.LimitDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LimitDependency", "Equipment", "Equipment", fields);
                base.export_attributes (obj, "LimitDependency", "OperationalLimit", "OperationalLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LimitDependency_collapse" aria-expanded="true" aria-controls="LimitDependency_collapse" style="margin-left: 10px;">LimitDependency</a></legend>
                    <div id="LimitDependency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
                    {{#OperationalLimit}}<div><b>OperationalLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OperationalLimit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.OperationalLimit) obj.OperationalLimit_string = obj.OperationalLimit.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OperationalLimit_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LimitDependency_collapse" aria-expanded="true" aria-controls="LimitDependency_collapse" style="margin-left: 10px;">LimitDependency</a></legend>
                    <div id="LimitDependency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperationalLimit'>OperationalLimit: </label><div class='col-sm-8'><input id='OperationalLimit' class='form-control' type='text'{{#OperationalLimit}} value='{{OperationalLimit}}_string'{{/OperationalLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LimitDependency" };
                super.submit (obj);
                temp = document.getElementById ("Equipment").value; if ("" != temp) obj.Equipment = temp;
                temp = document.getElementById ("OperationalLimit").value; if ("" != temp) obj.OperationalLimit = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Equipment", "Equipment", "0..1", "0..*"],
                        ["OperationalLimit", "OperationalLimit", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * This represents one instance of an equipment that contributes to the calculation of an operational limit.
         *
         */
        class EquipmentLimitSeriesComponent extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquipmentLimitSeriesComponent;
                if (null == bucket)
                   cim_data.EquipmentLimitSeriesComponent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquipmentLimitSeriesComponent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentLimitSeriesComponent";
                base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.SeriesEquipmentDependentLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SeriesEquipmentDependentLimit", sub, context);
                base.parse_attribute (/<cim:EquipmentLimitSeriesComponent.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
                var bucket = context.parsed.EquipmentLimitSeriesComponent;
                if (null == bucket)
                   context.parsed.EquipmentLimitSeriesComponent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EquipmentLimitSeriesComponent", "SeriesEquipmentDependentLimit", "SeriesEquipmentDependentLimit", fields);
                base.export_attribute (obj, "EquipmentLimitSeriesComponent", "Equipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentLimitSeriesComponent_collapse" aria-expanded="true" aria-controls="EquipmentLimitSeriesComponent_collapse" style="margin-left: 10px;">EquipmentLimitSeriesComponent</a></legend>
                    <div id="EquipmentLimitSeriesComponent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#SeriesEquipmentDependentLimit}}<div><b>SeriesEquipmentDependentLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SeriesEquipmentDependentLimit}}&quot;);})'>{{SeriesEquipmentDependentLimit}}</a></div>{{/SeriesEquipmentDependentLimit}}
                    {{#Equipment}}<div><b>Equipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Equipment}}&quot;);})'>{{Equipment}}</a></div>{{/Equipment}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentLimitSeriesComponent_collapse" aria-expanded="true" aria-controls="EquipmentLimitSeriesComponent_collapse" style="margin-left: 10px;">EquipmentLimitSeriesComponent</a></legend>
                    <div id="EquipmentLimitSeriesComponent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SeriesEquipmentDependentLimit'>SeriesEquipmentDependentLimit: </label><div class='col-sm-8'><input id='SeriesEquipmentDependentLimit' class='form-control' type='text'{{#SeriesEquipmentDependentLimit}} value='{{SeriesEquipmentDependentLimit}}'{{/SeriesEquipmentDependentLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "EquipmentLimitSeriesComponent" };
                super.submit (obj);
                temp = document.getElementById ("SeriesEquipmentDependentLimit").value; if ("" != temp) obj.SeriesEquipmentDependentLimit = temp;
                temp = document.getElementById ("Equipment").value; if ("" != temp) obj.Equipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SeriesEquipmentDependentLimit", "SeriesEquipmentDependentLimit", "1", "0..*"],
                        ["Equipment", "Equipment", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A current limit that is scheduled.
         *
         */
        class ScheduledCurrentLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledCurrentLimitValue;
                if (null == bucket)
                   cim_data.ScheduledCurrentLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledCurrentLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledCurrentLimitValue";
                base.parse_element (/<cim:ScheduledCurrentLimitValue.value>([\s\S]*?)<\/cim:ScheduledCurrentLimitValue.value>/g, obj, "value", base.to_string, sub, context);
                var bucket = context.parsed.ScheduledCurrentLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledCurrentLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledCurrentLimitValue", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledCurrentLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledCurrentLimitValue_collapse" style="margin-left: 10px;">ScheduledCurrentLimitValue</a></legend>
                    <div id="ScheduledCurrentLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledCurrentLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledCurrentLimitValue_collapse" style="margin-left: 10px;">ScheduledCurrentLimitValue</a></legend>
                    <div id="ScheduledCurrentLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledCurrentLimitValue" };
                super.submit (obj);
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        /**
         * A voltage limit value for a scheduled time.
         *
         */
        class ScheduledVoltageLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledVoltageLimitValue;
                if (null == bucket)
                   cim_data.ScheduledVoltageLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledVoltageLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledVoltageLimitValue";
                base.parse_element (/<cim:ScheduledVoltageLimitValue.value>([\s\S]*?)<\/cim:ScheduledVoltageLimitValue.value>/g, obj, "value", base.to_string, sub, context);
                var bucket = context.parsed.ScheduledVoltageLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledVoltageLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledVoltageLimitValue", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledVoltageLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledVoltageLimitValue_collapse" style="margin-left: 10px;">ScheduledVoltageLimitValue</a></legend>
                    <div id="ScheduledVoltageLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledVoltageLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledVoltageLimitValue_collapse" style="margin-left: 10px;">ScheduledVoltageLimitValue</a></legend>
                    <div id="ScheduledVoltageLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledVoltageLimitValue" };
                super.submit (obj);
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        class ScheduledActivePowerLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledActivePowerLimitValue;
                if (null == bucket)
                   cim_data.ScheduledActivePowerLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledActivePowerLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledActivePowerLimitValue";
                base.parse_element (/<cim:ScheduledActivePowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledActivePowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);
                var bucket = context.parsed.ScheduledActivePowerLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledActivePowerLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledActivePowerLimitValue", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledActivePowerLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledActivePowerLimitValue_collapse" style="margin-left: 10px;">ScheduledActivePowerLimitValue</a></legend>
                    <div id="ScheduledActivePowerLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledActivePowerLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledActivePowerLimitValue_collapse" style="margin-left: 10px;">ScheduledActivePowerLimitValue</a></legend>
                    <div id="ScheduledActivePowerLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledActivePowerLimitValue" };
                super.submit (obj);
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        /**
         * A time scheduled value for apparent power limit.
         *
         */
        class ScheduledApparentPowerLimitValue extends ScheduledLimitValue
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledApparentPowerLimitValue;
                if (null == bucket)
                   cim_data.ScheduledApparentPowerLimitValue = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledApparentPowerLimitValue[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ScheduledLimitValue.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledApparentPowerLimitValue";
                base.parse_element (/<cim:ScheduledApparentPowerLimitValue.value>([\s\S]*?)<\/cim:ScheduledApparentPowerLimitValue.value>/g, obj, "value", base.to_string, sub, context);
                var bucket = context.parsed.ScheduledApparentPowerLimitValue;
                if (null == bucket)
                   context.parsed.ScheduledApparentPowerLimitValue = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ScheduledLimitValue.prototype.export.call (this, obj, false);

                base.export_element (obj, "ScheduledApparentPowerLimitValue", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledApparentPowerLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledApparentPowerLimitValue_collapse" style="margin-left: 10px;">ScheduledApparentPowerLimitValue</a></legend>
                    <div id="ScheduledApparentPowerLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledApparentPowerLimitValue_collapse" aria-expanded="true" aria-controls="ScheduledApparentPowerLimitValue_collapse" style="margin-left: 10px;">ScheduledApparentPowerLimitValue</a></legend>
                    <div id="ScheduledApparentPowerLimitValue_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ScheduledLimitValue.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ScheduledApparentPowerLimitValue" };
                super.submit (obj);
                temp = document.getElementById ("value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        /**
         * Specifies an operational  limit is calculated by scaling another operational limit.
         *
         */
        class LimitScalingLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LimitScalingLimit;
                if (null == bucket)
                   cim_data.LimitScalingLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LimitScalingLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "LimitScalingLimit";
                base.parse_element (/<cim:LimitScalingLimit.limitScalingPercent>([\s\S]*?)<\/cim:LimitScalingLimit.limitScalingPercent>/g, obj, "limitScalingPercent", base.to_string, sub, context);
                base.parse_attribute (/<cim:LimitScalingLimit.SourceOperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimit", sub, context);
                var bucket = context.parsed.LimitScalingLimit;
                if (null == bucket)
                   context.parsed.LimitScalingLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                base.export_element (obj, "LimitScalingLimit", "limitScalingPercent", "limitScalingPercent",  base.from_string, fields);
                base.export_attribute (obj, "LimitScalingLimit", "SourceOperationalLimit", "SourceOperationalLimit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LimitScalingLimit_collapse" aria-expanded="true" aria-controls="LimitScalingLimit_collapse" style="margin-left: 10px;">LimitScalingLimit</a></legend>
                    <div id="LimitScalingLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.template.call (this) +
                    `
                    {{#limitScalingPercent}}<div><b>limitScalingPercent</b>: {{limitScalingPercent}}</div>{{/limitScalingPercent}}
                    {{#SourceOperationalLimit}}<div><b>SourceOperationalLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SourceOperationalLimit}}&quot;);})'>{{SourceOperationalLimit}}</a></div>{{/SourceOperationalLimit}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LimitScalingLimit_collapse" aria-expanded="true" aria-controls="LimitScalingLimit_collapse" style="margin-left: 10px;">LimitScalingLimit</a></legend>
                    <div id="LimitScalingLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='limitScalingPercent'>limitScalingPercent: </label><div class='col-sm-8'><input id='limitScalingPercent' class='form-control' type='text'{{#limitScalingPercent}} value='{{limitScalingPercent}}'{{/limitScalingPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SourceOperationalLimit'>SourceOperationalLimit: </label><div class='col-sm-8'><input id='SourceOperationalLimit' class='form-control' type='text'{{#SourceOperationalLimit}} value='{{SourceOperationalLimit}}'{{/SourceOperationalLimit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LimitScalingLimit" };
                super.submit (obj);
                temp = document.getElementById ("limitScalingPercent").value; if ("" != temp) obj.limitScalingPercent = temp;
                temp = document.getElementById ("SourceOperationalLimit").value; if ("" != temp) obj.SourceOperationalLimit = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["SourceOperationalLimit", "OperationalLimit", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * This is a environmental based limit dependency model for calculating operational limits.
         *
         */
        class EnvironmentalDependentLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EnvironmentalDependentLimit;
                if (null == bucket)
                   cim_data.EnvironmentalDependentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EnvironmentalDependentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "EnvironmentalDependentLimit";
                var bucket = context.parsed.EnvironmentalDependentLimit;
                if (null == bucket)
                   context.parsed.EnvironmentalDependentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnvironmentalDependentLimit_collapse" aria-expanded="true" aria-controls="EnvironmentalDependentLimit_collapse" style="margin-left: 10px;">EnvironmentalDependentLimit</a></legend>
                    <div id="EnvironmentalDependentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EnvironmentalDependentLimit_collapse" aria-expanded="true" aria-controls="EnvironmentalDependentLimit_collapse" style="margin-left: 10px;">EnvironmentalDependentLimit</a></legend>
                    <div id="EnvironmentalDependentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "EnvironmentalDependentLimit" };
                super.submit (obj);

                return (obj);
            }
        }

        class ScheduledLimitDependency extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ScheduledLimitDependency;
                if (null == bucket)
                   cim_data.ScheduledLimitDependency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ScheduledLimitDependency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "ScheduledLimitDependency";
                base.parse_attributes (/<cim:ScheduledLimitDependency.ScheduledLimitValues\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ScheduledLimitValues", sub, context);
                var bucket = context.parsed.ScheduledLimitDependency;
                if (null == bucket)
                   context.parsed.ScheduledLimitDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "ScheduledLimitDependency", "ScheduledLimitValues", "ScheduledLimitValues", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledLimitDependency_collapse" aria-expanded="true" aria-controls="ScheduledLimitDependency_collapse" style="margin-left: 10px;">ScheduledLimitDependency</a></legend>
                    <div id="ScheduledLimitDependency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.template.call (this) +
                    `
                    {{#ScheduledLimitValues}}<div><b>ScheduledLimitValues</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ScheduledLimitValues}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ScheduledLimitValues) obj.ScheduledLimitValues_string = obj.ScheduledLimitValues.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ScheduledLimitValues_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ScheduledLimitDependency_collapse" aria-expanded="true" aria-controls="ScheduledLimitDependency_collapse" style="margin-left: 10px;">ScheduledLimitDependency</a></legend>
                    <div id="ScheduledLimitDependency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "ScheduledLimitDependency" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ScheduledLimitValues", "ScheduledLimitValue", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * Limit based on most restrictive series equipment limit.
         *
         * A specification of  of equipment that determines the calculated operational limit values based upon other equipment and their ratings.  The most restrictive limit connected in series within the group is used.   The physical connection based on switch status for example may also impact which elements in the group are considered. Any equipment in the group that are presently connected in series with the equipment of the directly associated operational limit are used.   This provides a means to indicate which potentially series equipment limits are considered for a computed operational limit. The operational limit of the same operational limit type is assumed to be used from the grouped equipment.   It is also possible to make assumptions or calculations regarding how flow might split if the equipment is not simply in series.
         *
         */
        class SeriesEquipmentDependentLimit extends LimitDependency
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SeriesEquipmentDependentLimit;
                if (null == bucket)
                   cim_data.SeriesEquipmentDependentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SeriesEquipmentDependentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LimitDependency.prototype.parse.call (this, context, sub);
                obj.cls = "SeriesEquipmentDependentLimit";
                base.parse_attributes (/<cim:SeriesEquipmentDependentLimit.EquipmentLimitSeriesComponent\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquipmentLimitSeriesComponent", sub, context);
                var bucket = context.parsed.SeriesEquipmentDependentLimit;
                if (null == bucket)
                   context.parsed.SeriesEquipmentDependentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LimitDependency.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "SeriesEquipmentDependentLimit", "EquipmentLimitSeriesComponent", "EquipmentLimitSeriesComponent", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SeriesEquipmentDependentLimit_collapse" aria-expanded="true" aria-controls="SeriesEquipmentDependentLimit_collapse" style="margin-left: 10px;">SeriesEquipmentDependentLimit</a></legend>
                    <div id="SeriesEquipmentDependentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.template.call (this) +
                    `
                    {{#EquipmentLimitSeriesComponent}}<div><b>EquipmentLimitSeriesComponent</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/EquipmentLimitSeriesComponent}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EquipmentLimitSeriesComponent) obj.EquipmentLimitSeriesComponent_string = obj.EquipmentLimitSeriesComponent.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EquipmentLimitSeriesComponent_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SeriesEquipmentDependentLimit_collapse" aria-expanded="true" aria-controls="SeriesEquipmentDependentLimit_collapse" style="margin-left: 10px;">SeriesEquipmentDependentLimit</a></legend>
                    <div id="SeriesEquipmentDependentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + LimitDependency.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "SeriesEquipmentDependentLimit" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["EquipmentLimitSeriesComponent", "EquipmentLimitSeriesComponent", "0..*", "1"]
                    ]
                );
            }
        }

        /**
         * This describes the coefficients of a polynomial function that has temperature as input and calculates limit values as output.
         *
         */
        class TemperaturePolynomialLimit extends EnvironmentalDependentLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperaturePolynomialLimit;
                if (null == bucket)
                   cim_data.TemperaturePolynomialLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperaturePolynomialLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnvironmentalDependentLimit.prototype.parse.call (this, context, sub);
                obj.cls = "TemperaturePolynomialLimit";
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient0>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient0>/g, obj, "coefficient0", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient1>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient1>/g, obj, "coefficient1", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient2>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient2>/g, obj, "coefficient2", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient3>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient3>/g, obj, "coefficient3", base.to_float, sub, context);
                base.parse_element (/<cim:TemperaturePolynomialLimit.coefficient4>([\s\S]*?)<\/cim:TemperaturePolynomialLimit.coefficient4>/g, obj, "coefficient4", base.to_float, sub, context);
                var bucket = context.parsed.TemperaturePolynomialLimit;
                if (null == bucket)
                   context.parsed.TemperaturePolynomialLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnvironmentalDependentLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient0", "coefficient0",  base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient1", "coefficient1",  base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient2", "coefficient2",  base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient3", "coefficient3",  base.from_float, fields);
                base.export_element (obj, "TemperaturePolynomialLimit", "coefficient4", "coefficient4",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperaturePolynomialLimit_collapse" aria-expanded="true" aria-controls="TemperaturePolynomialLimit_collapse" style="margin-left: 10px;">TemperaturePolynomialLimit</a></legend>
                    <div id="TemperaturePolynomialLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnvironmentalDependentLimit.prototype.template.call (this) +
                    `
                    {{#coefficient0}}<div><b>coefficient0</b>: {{coefficient0}}</div>{{/coefficient0}}
                    {{#coefficient1}}<div><b>coefficient1</b>: {{coefficient1}}</div>{{/coefficient1}}
                    {{#coefficient2}}<div><b>coefficient2</b>: {{coefficient2}}</div>{{/coefficient2}}
                    {{#coefficient3}}<div><b>coefficient3</b>: {{coefficient3}}</div>{{/coefficient3}}
                    {{#coefficient4}}<div><b>coefficient4</b>: {{coefficient4}}</div>{{/coefficient4}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperaturePolynomialLimit_collapse" aria-expanded="true" aria-controls="TemperaturePolynomialLimit_collapse" style="margin-left: 10px;">TemperaturePolynomialLimit</a></legend>
                    <div id="TemperaturePolynomialLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnvironmentalDependentLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coefficient0'>coefficient0: </label><div class='col-sm-8'><input id='coefficient0' class='form-control' type='text'{{#coefficient0}} value='{{coefficient0}}'{{/coefficient0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coefficient1'>coefficient1: </label><div class='col-sm-8'><input id='coefficient1' class='form-control' type='text'{{#coefficient1}} value='{{coefficient1}}'{{/coefficient1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coefficient2'>coefficient2: </label><div class='col-sm-8'><input id='coefficient2' class='form-control' type='text'{{#coefficient2}} value='{{coefficient2}}'{{/coefficient2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coefficient3'>coefficient3: </label><div class='col-sm-8'><input id='coefficient3' class='form-control' type='text'{{#coefficient3}} value='{{coefficient3}}'{{/coefficient3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='coefficient4'>coefficient4: </label><div class='col-sm-8'><input id='coefficient4' class='form-control' type='text'{{#coefficient4}} value='{{coefficient4}}'{{/coefficient4}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TemperaturePolynomialLimit" };
                super.submit (obj);
                temp = document.getElementById ("coefficient0").value; if ("" != temp) obj.coefficient0 = temp;
                temp = document.getElementById ("coefficient1").value; if ("" != temp) obj.coefficient1 = temp;
                temp = document.getElementById ("coefficient2").value; if ("" != temp) obj.coefficient2 = temp;
                temp = document.getElementById ("coefficient3").value; if ("" != temp) obj.coefficient3 = temp;
                temp = document.getElementById ("coefficient4").value; if ("" != temp) obj.coefficient4 = temp;

                return (obj);
            }
        }

        /**
         * This is a table lookup that provides limit values corresponding to a temperature input.
         *
         */
        class TemperatureDependentLimitTable extends EnvironmentalDependentLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TemperatureDependentLimitTable;
                if (null == bucket)
                   cim_data.TemperatureDependentLimitTable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TemperatureDependentLimitTable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EnvironmentalDependentLimit.prototype.parse.call (this, context, sub);
                obj.cls = "TemperatureDependentLimitTable";
                base.parse_attributes (/<cim:TemperatureDependentLimitTable.TemperatureLimitTablePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TemperatureLimitTablePoint", sub, context);
                var bucket = context.parsed.TemperatureDependentLimitTable;
                if (null == bucket)
                   context.parsed.TemperatureDependentLimitTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EnvironmentalDependentLimit.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TemperatureDependentLimitTable", "TemperatureLimitTablePoint", "TemperatureLimitTablePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperatureDependentLimitTable_collapse" aria-expanded="true" aria-controls="TemperatureDependentLimitTable_collapse" style="margin-left: 10px;">TemperatureDependentLimitTable</a></legend>
                    <div id="TemperatureDependentLimitTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnvironmentalDependentLimit.prototype.template.call (this) +
                    `
                    {{#TemperatureLimitTablePoint}}<div><b>TemperatureLimitTablePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TemperatureLimitTablePoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TemperatureLimitTablePoint) obj.TemperatureLimitTablePoint_string = obj.TemperatureLimitTablePoint.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TemperatureLimitTablePoint_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TemperatureDependentLimitTable_collapse" aria-expanded="true" aria-controls="TemperatureDependentLimitTable_collapse" style="margin-left: 10px;">TemperatureDependentLimitTable</a></legend>
                    <div id="TemperatureDependentLimitTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + EnvironmentalDependentLimit.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var obj = obj || { cls: "TemperatureDependentLimitTable" };
                super.submit (obj);

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["TemperatureLimitTablePoint", "TemperatureDependentLimitPoint", "0..*", "1"]
                    ]
                );
            }
        }

        return (
            {
                ScheduledVoltageLimitValue: ScheduledVoltageLimitValue,
                TemperatureDependentLimitTable: TemperatureDependentLimitTable,
                ScheduledLimitDependency: ScheduledLimitDependency,
                TemperaturePolynomialLimit: TemperaturePolynomialLimit,
                ScheduledActivePowerLimitValue: ScheduledActivePowerLimitValue,
                WeatherStation: WeatherStation,
                LimitScalingLimit: LimitScalingLimit,
                EquipmentLimitSeriesComponent: EquipmentLimitSeriesComponent,
                SeriesEquipmentDependentLimit: SeriesEquipmentDependentLimit,
                ScheduledLimitValue: ScheduledLimitValue,
                EnvironmentalDependentLimit: EnvironmentalDependentLimit,
                LimitDependency: LimitDependency,
                ScheduledApparentPowerLimitValue: ScheduledApparentPowerLimitValue,
                TemperatureDependentLimitPoint: TemperatureDependentLimitPoint,
                OperatonalLimitTypeScaling: OperatonalLimitTypeScaling,
                ScheduledCurrentLimitValue: ScheduledCurrentLimitValue
            }
        );
    }
);