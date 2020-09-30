define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {
        /**
         * This is the cureve that describes the load reduction time.
         *
         * Relationship between time (Y1-axis) vs. MW (X-axis).
         *
         */
        class LoadReductionTimeCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadReductionTimeCurve;
                if (null == bucket)
                   cim_data.LoadReductionTimeCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadReductionTimeCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "LoadReductionTimeCurve";
                base.parse_element (/<cim:LoadReductionTimeCurve.loadReductionTimeCurveType>([\s\S]*?)<\/cim:LoadReductionTimeCurve.loadReductionTimeCurveType>/g, obj, "loadReductionTimeCurveType", base.to_string, sub, context);
                let bucket = context.parsed.LoadReductionTimeCurve;
                if (null == bucket)
                   context.parsed.LoadReductionTimeCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadReductionTimeCurve", "loadReductionTimeCurveType", "loadReductionTimeCurveType",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadReductionTimeCurve_collapse" aria-expanded="true" aria-controls="LoadReductionTimeCurve_collapse" style="margin-left: 10px;">LoadReductionTimeCurve</a></legend>
                    <div id="LoadReductionTimeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#loadReductionTimeCurveType}}<div><b>loadReductionTimeCurveType</b>: {{loadReductionTimeCurveType}}</div>{{/loadReductionTimeCurveType}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadReductionTimeCurve_collapse" aria-expanded="true" aria-controls="{{id}}_LoadReductionTimeCurve_collapse" style="margin-left: 10px;">LoadReductionTimeCurve</a></legend>
                    <div id="{{id}}_LoadReductionTimeCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_loadReductionTimeCurveType'>loadReductionTimeCurveType: </label><div class='col-sm-8'><input id='{{id}}_loadReductionTimeCurveType' class='form-control' type='text'{{#loadReductionTimeCurveType}} value='{{loadReductionTimeCurveType}}'{{/loadReductionTimeCurveType}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadReductionTimeCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_loadReductionTimeCurveType").value; if ("" !== temp) obj["loadReductionTimeCurveType"] = temp;

                return (obj);
            }
        }

        /**
         * Temporary holding for load reduction attributes removed from RegisteredLoad.
         *
         * Use for future use case when developing the RegisteredDistributedResource specialized classes.
         *
         */
        class RegisteredControllableLoad extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RegisteredControllableLoad;
                if (null == bucket)
                   cim_data.RegisteredControllableLoad = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegisteredControllableLoad[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RegisteredControllableLoad";
                base.parse_element (/<cim:RegisteredControllableLoad.maxBaseLoad>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxBaseLoad>/g, obj, "maxBaseLoad", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.maxDeploymentTime>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxDeploymentTime>/g, obj, "maxDeploymentTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.maxLoadRedTimesPerDay>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxLoadRedTimesPerDay>/g, obj, "maxLoadRedTimesPerDay", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.maxLoadReduction>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxLoadReduction>/g, obj, "maxLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.maxReductionTime>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxReductionTime>/g, obj, "maxReductionTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.maxWeeklyDeployment>([\s\S]*?)<\/cim:RegisteredControllableLoad.maxWeeklyDeployment>/g, obj, "maxWeeklyDeployment", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.minLoadReduction>([\s\S]*?)<\/cim:RegisteredControllableLoad.minLoadReduction>/g, obj, "minLoadReduction", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.minLoadReductionCost>([\s\S]*?)<\/cim:RegisteredControllableLoad.minLoadReductionCost>/g, obj, "minLoadReductionCost", base.to_string, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.minLoadReductionInterval>([\s\S]*?)<\/cim:RegisteredControllableLoad.minLoadReductionInterval>/g, obj, "minLoadReductionInterval", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.minReductionTime>([\s\S]*?)<\/cim:RegisteredControllableLoad.minReductionTime>/g, obj, "minReductionTime", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.minTimeBetLoadRed>([\s\S]*?)<\/cim:RegisteredControllableLoad.minTimeBetLoadRed>/g, obj, "minTimeBetLoadRed", base.to_float, sub, context);
                base.parse_element (/<cim:RegisteredControllableLoad.reqNoticeTime>([\s\S]*?)<\/cim:RegisteredControllableLoad.reqNoticeTime>/g, obj, "reqNoticeTime", base.to_float, sub, context);
                let bucket = context.parsed.RegisteredControllableLoad;
                if (null == bucket)
                   context.parsed.RegisteredControllableLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "RegisteredControllableLoad", "maxBaseLoad", "maxBaseLoad",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "maxDeploymentTime", "maxDeploymentTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredControllableLoad", "maxLoadRedTimesPerDay", "maxLoadRedTimesPerDay",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "maxLoadReduction", "maxLoadReduction",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "maxReductionTime", "maxReductionTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredControllableLoad", "maxWeeklyDeployment", "maxWeeklyDeployment",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "minLoadReduction", "minLoadReduction",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "minLoadReductionCost", "minLoadReductionCost",  base.from_string, fields);
                base.export_element (obj, "RegisteredControllableLoad", "minLoadReductionInterval", "minLoadReductionInterval",  base.from_float, fields);
                base.export_element (obj, "RegisteredControllableLoad", "minReductionTime", "minReductionTime",  base.from_float, fields);
                base.export_element (obj, "RegisteredControllableLoad", "minTimeBetLoadRed", "minTimeBetLoadRed",  base.from_float, fields);
                base.export_element (obj, "RegisteredControllableLoad", "reqNoticeTime", "reqNoticeTime",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegisteredControllableLoad_collapse" aria-expanded="true" aria-controls="RegisteredControllableLoad_collapse" style="margin-left: 10px;">RegisteredControllableLoad</a></legend>
                    <div id="RegisteredControllableLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#maxBaseLoad}}<div><b>maxBaseLoad</b>: {{maxBaseLoad}}</div>{{/maxBaseLoad}}
                    {{#maxDeploymentTime}}<div><b>maxDeploymentTime</b>: {{maxDeploymentTime}}</div>{{/maxDeploymentTime}}
                    {{#maxLoadRedTimesPerDay}}<div><b>maxLoadRedTimesPerDay</b>: {{maxLoadRedTimesPerDay}}</div>{{/maxLoadRedTimesPerDay}}
                    {{#maxLoadReduction}}<div><b>maxLoadReduction</b>: {{maxLoadReduction}}</div>{{/maxLoadReduction}}
                    {{#maxReductionTime}}<div><b>maxReductionTime</b>: {{maxReductionTime}}</div>{{/maxReductionTime}}
                    {{#maxWeeklyDeployment}}<div><b>maxWeeklyDeployment</b>: {{maxWeeklyDeployment}}</div>{{/maxWeeklyDeployment}}
                    {{#minLoadReduction}}<div><b>minLoadReduction</b>: {{minLoadReduction}}</div>{{/minLoadReduction}}
                    {{#minLoadReductionCost}}<div><b>minLoadReductionCost</b>: {{minLoadReductionCost}}</div>{{/minLoadReductionCost}}
                    {{#minLoadReductionInterval}}<div><b>minLoadReductionInterval</b>: {{minLoadReductionInterval}}</div>{{/minLoadReductionInterval}}
                    {{#minReductionTime}}<div><b>minReductionTime</b>: {{minReductionTime}}</div>{{/minReductionTime}}
                    {{#minTimeBetLoadRed}}<div><b>minTimeBetLoadRed</b>: {{minTimeBetLoadRed}}</div>{{/minTimeBetLoadRed}}
                    {{#reqNoticeTime}}<div><b>reqNoticeTime</b>: {{reqNoticeTime}}</div>{{/reqNoticeTime}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegisteredControllableLoad_collapse" aria-expanded="true" aria-controls="{{id}}_RegisteredControllableLoad_collapse" style="margin-left: 10px;">RegisteredControllableLoad</a></legend>
                    <div id="{{id}}_RegisteredControllableLoad_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxBaseLoad'>maxBaseLoad: </label><div class='col-sm-8'><input id='{{id}}_maxBaseLoad' class='form-control' type='text'{{#maxBaseLoad}} value='{{maxBaseLoad}}'{{/maxBaseLoad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxDeploymentTime'>maxDeploymentTime: </label><div class='col-sm-8'><input id='{{id}}_maxDeploymentTime' class='form-control' type='text'{{#maxDeploymentTime}} value='{{maxDeploymentTime}}'{{/maxDeploymentTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxLoadRedTimesPerDay'>maxLoadRedTimesPerDay: </label><div class='col-sm-8'><input id='{{id}}_maxLoadRedTimesPerDay' class='form-control' type='text'{{#maxLoadRedTimesPerDay}} value='{{maxLoadRedTimesPerDay}}'{{/maxLoadRedTimesPerDay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxLoadReduction'>maxLoadReduction: </label><div class='col-sm-8'><input id='{{id}}_maxLoadReduction' class='form-control' type='text'{{#maxLoadReduction}} value='{{maxLoadReduction}}'{{/maxLoadReduction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxReductionTime'>maxReductionTime: </label><div class='col-sm-8'><input id='{{id}}_maxReductionTime' class='form-control' type='text'{{#maxReductionTime}} value='{{maxReductionTime}}'{{/maxReductionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxWeeklyDeployment'>maxWeeklyDeployment: </label><div class='col-sm-8'><input id='{{id}}_maxWeeklyDeployment' class='form-control' type='text'{{#maxWeeklyDeployment}} value='{{maxWeeklyDeployment}}'{{/maxWeeklyDeployment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLoadReduction'>minLoadReduction: </label><div class='col-sm-8'><input id='{{id}}_minLoadReduction' class='form-control' type='text'{{#minLoadReduction}} value='{{minLoadReduction}}'{{/minLoadReduction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLoadReductionCost'>minLoadReductionCost: </label><div class='col-sm-8'><input id='{{id}}_minLoadReductionCost' class='form-control' type='text'{{#minLoadReductionCost}} value='{{minLoadReductionCost}}'{{/minLoadReductionCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minLoadReductionInterval'>minLoadReductionInterval: </label><div class='col-sm-8'><input id='{{id}}_minLoadReductionInterval' class='form-control' type='text'{{#minLoadReductionInterval}} value='{{minLoadReductionInterval}}'{{/minLoadReductionInterval}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minReductionTime'>minReductionTime: </label><div class='col-sm-8'><input id='{{id}}_minReductionTime' class='form-control' type='text'{{#minReductionTime}} value='{{minReductionTime}}'{{/minReductionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minTimeBetLoadRed'>minTimeBetLoadRed: </label><div class='col-sm-8'><input id='{{id}}_minTimeBetLoadRed' class='form-control' type='text'{{#minTimeBetLoadRed}} value='{{minTimeBetLoadRed}}'{{/minTimeBetLoadRed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reqNoticeTime'>reqNoticeTime: </label><div class='col-sm-8'><input id='{{id}}_reqNoticeTime' class='form-control' type='text'{{#reqNoticeTime}} value='{{reqNoticeTime}}'{{/reqNoticeTime}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RegisteredControllableLoad" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxBaseLoad").value; if ("" !== temp) obj["maxBaseLoad"] = temp;
                temp = document.getElementById (id + "_maxDeploymentTime").value; if ("" !== temp) obj["maxDeploymentTime"] = temp;
                temp = document.getElementById (id + "_maxLoadRedTimesPerDay").value; if ("" !== temp) obj["maxLoadRedTimesPerDay"] = temp;
                temp = document.getElementById (id + "_maxLoadReduction").value; if ("" !== temp) obj["maxLoadReduction"] = temp;
                temp = document.getElementById (id + "_maxReductionTime").value; if ("" !== temp) obj["maxReductionTime"] = temp;
                temp = document.getElementById (id + "_maxWeeklyDeployment").value; if ("" !== temp) obj["maxWeeklyDeployment"] = temp;
                temp = document.getElementById (id + "_minLoadReduction").value; if ("" !== temp) obj["minLoadReduction"] = temp;
                temp = document.getElementById (id + "_minLoadReductionCost").value; if ("" !== temp) obj["minLoadReductionCost"] = temp;
                temp = document.getElementById (id + "_minLoadReductionInterval").value; if ("" !== temp) obj["minLoadReductionInterval"] = temp;
                temp = document.getElementById (id + "_minReductionTime").value; if ("" !== temp) obj["minReductionTime"] = temp;
                temp = document.getElementById (id + "_minTimeBetLoadRed").value; if ("" !== temp) obj["minTimeBetLoadRed"] = temp;
                temp = document.getElementById (id + "_reqNoticeTime").value; if ("" !== temp) obj["reqNoticeTime"] = temp;

                return (obj);
            }
        }

        return (
            {
                LoadReductionTimeCurve: LoadReductionTimeCurve,
                RegisteredControllableLoad: RegisteredControllableLoad
            }
        );
    }
);