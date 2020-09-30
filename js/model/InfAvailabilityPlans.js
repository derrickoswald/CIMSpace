define
(
    ["model/base", "model/Core"],
    /**
     * Contains the planned schedules for equipment availability, primarily intended for future studies.
     *
     */
    function (base, Core)
    {
        class EquipmentUnavailabilitySchedule extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.EquipmentUnavailabilitySchedule;
                if (null == bucket)
                   cim_data.EquipmentUnavailabilitySchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquipmentUnavailabilitySchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentUnavailabilitySchedule";
                let bucket = context.parsed.EquipmentUnavailabilitySchedule;
                if (null == bucket)
                   context.parsed.EquipmentUnavailabilitySchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EquipmentUnavailabilitySchedule_collapse" aria-expanded="true" aria-controls="EquipmentUnavailabilitySchedule_collapse" style="margin-left: 10px;">EquipmentUnavailabilitySchedule</a></legend>
                    <div id="EquipmentUnavailabilitySchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EquipmentUnavailabilitySchedule_collapse" aria-expanded="true" aria-controls="{{id}}_EquipmentUnavailabilitySchedule_collapse" style="margin-left: 10px;">EquipmentUnavailabilitySchedule</a></legend>
                    <div id="{{id}}_EquipmentUnavailabilitySchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "EquipmentUnavailabilitySchedule" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Relevant switching action for supporting the availability (or unavailability) plans.
         *
         * This could open or close a switch that is not directly connected to the unavailable equipment .
         *
         */
        class UnavailabilitySwitchAction extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UnavailabilitySwitchAction;
                if (null == bucket)
                   cim_data.UnavailabilitySwitchAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnavailabilitySwitchAction[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UnavailabilitySwitchAction";
                base.parse_element (/<cim:UnavailabilitySwitchAction.open>([\s\S]*?)<\/cim:UnavailabilitySwitchAction.open>/g, obj, "open", base.to_boolean, sub, context);
                let bucket = context.parsed.UnavailabilitySwitchAction;
                if (null == bucket)
                   context.parsed.UnavailabilitySwitchAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "UnavailabilitySwitchAction", "open", "open",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnavailabilitySwitchAction_collapse" aria-expanded="true" aria-controls="UnavailabilitySwitchAction_collapse" style="margin-left: 10px;">UnavailabilitySwitchAction</a></legend>
                    <div id="UnavailabilitySwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#open}}<div><b>open</b>: {{open}}</div>{{/open}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnavailabilitySwitchAction_collapse" aria-expanded="true" aria-controls="{{id}}_UnavailabilitySwitchAction_collapse" style="margin-left: 10px;">UnavailabilitySwitchAction</a></legend>
                    <div id="{{id}}_UnavailabilitySwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_open'>open: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_open' class='form-check-input' type='checkbox'{{#open}} checked{{/open}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UnavailabilitySwitchAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_open").checked; if (temp) obj["open"] = true;

                return (obj);
            }
        }

        /**
         * A schedule of unavailability for one or more specified equipment that need to follow the same scheduling periods.
         *
         */
        class UnavailablitySchedule extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UnavailablitySchedule;
                if (null == bucket)
                   cim_data.UnavailablitySchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnavailablitySchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UnavailablitySchedule";
                base.parse_attributes (/<cim:UnavailablitySchedule.DependsOn\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DependsOn", sub, context);
                base.parse_attributes (/<cim:UnavailablitySchedule.Impacts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Impacts", sub, context);
                let bucket = context.parsed.UnavailablitySchedule;
                if (null == bucket)
                   context.parsed.UnavailablitySchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "UnavailablitySchedule", "DependsOn", "DependsOn", fields);
                base.export_attributes (obj, "UnavailablitySchedule", "Impacts", "Impacts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnavailablitySchedule_collapse" aria-expanded="true" aria-controls="UnavailablitySchedule_collapse" style="margin-left: 10px;">UnavailablitySchedule</a></legend>
                    <div id="UnavailablitySchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DependsOn}}<div><b>DependsOn</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DependsOn}}
                    {{#Impacts}}<div><b>Impacts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Impacts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DependsOn"]) obj["DependsOn_string"] = obj["DependsOn"].join ();
                if (obj["Impacts"]) obj["Impacts_string"] = obj["Impacts"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DependsOn_string"];
                delete obj["Impacts_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnavailablitySchedule_collapse" aria-expanded="true" aria-controls="{{id}}_UnavailablitySchedule_collapse" style="margin-left: 10px;">UnavailablitySchedule</a></legend>
                    <div id="{{id}}_UnavailablitySchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "UnavailablitySchedule" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DependsOn", "0..*", "1", "UnavailabilityScheduleDependency", "UnavailabilityScheduleImpacts"],
                            ["Impacts", "0..*", "1", "UnavailabilityScheduleDependency", "UnavailabilityScheduleDependsOn"]
                        ]
                    )
                );
            }
        }

        class UnavailabilityScheduleDependency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.UnavailabilityScheduleDependency;
                if (null == bucket)
                   cim_data.UnavailabilityScheduleDependency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.UnavailabilityScheduleDependency[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "UnavailabilityScheduleDependency";
                base.parse_attribute (/<cim:UnavailabilityScheduleDependency.UnavailabilityScheduleImpacts\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UnavailabilityScheduleImpacts", sub, context);
                base.parse_attribute (/<cim:UnavailabilityScheduleDependency.UnavailabilityScheduleDependsOn\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UnavailabilityScheduleDependsOn", sub, context);
                let bucket = context.parsed.UnavailabilityScheduleDependency;
                if (null == bucket)
                   context.parsed.UnavailabilityScheduleDependency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "UnavailabilityScheduleDependency", "UnavailabilityScheduleImpacts", "UnavailabilityScheduleImpacts", fields);
                base.export_attribute (obj, "UnavailabilityScheduleDependency", "UnavailabilityScheduleDependsOn", "UnavailabilityScheduleDependsOn", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#UnavailabilityScheduleDependency_collapse" aria-expanded="true" aria-controls="UnavailabilityScheduleDependency_collapse" style="margin-left: 10px;">UnavailabilityScheduleDependency</a></legend>
                    <div id="UnavailabilityScheduleDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#UnavailabilityScheduleImpacts}}<div><b>UnavailabilityScheduleImpacts</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{UnavailabilityScheduleImpacts}}");}); return false;'>{{UnavailabilityScheduleImpacts}}</a></div>{{/UnavailabilityScheduleImpacts}}
                    {{#UnavailabilityScheduleDependsOn}}<div><b>UnavailabilityScheduleDependsOn</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{UnavailabilityScheduleDependsOn}}");}); return false;'>{{UnavailabilityScheduleDependsOn}}</a></div>{{/UnavailabilityScheduleDependsOn}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_UnavailabilityScheduleDependency_collapse" aria-expanded="true" aria-controls="{{id}}_UnavailabilityScheduleDependency_collapse" style="margin-left: 10px;">UnavailabilityScheduleDependency</a></legend>
                    <div id="{{id}}_UnavailabilityScheduleDependency_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UnavailabilityScheduleImpacts'>UnavailabilityScheduleImpacts: </label><div class='col-sm-8'><input id='{{id}}_UnavailabilityScheduleImpacts' class='form-control' type='text'{{#UnavailabilityScheduleImpacts}} value='{{UnavailabilityScheduleImpacts}}'{{/UnavailabilityScheduleImpacts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UnavailabilityScheduleDependsOn'>UnavailabilityScheduleDependsOn: </label><div class='col-sm-8'><input id='{{id}}_UnavailabilityScheduleDependsOn' class='form-control' type='text'{{#UnavailabilityScheduleDependsOn}} value='{{UnavailabilityScheduleDependsOn}}'{{/UnavailabilityScheduleDependsOn}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "UnavailabilityScheduleDependency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_UnavailabilityScheduleImpacts").value; if ("" !== temp) obj["UnavailabilityScheduleImpacts"] = temp;
                temp = document.getElementById (id + "_UnavailabilityScheduleDependsOn").value; if ("" !== temp) obj["UnavailabilityScheduleDependsOn"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UnavailabilityScheduleImpacts", "1", "0..*", "UnavailablitySchedule", "DependsOn"],
                            ["UnavailabilityScheduleDependsOn", "1", "0..*", "UnavailablitySchedule", "Impacts"]
                        ]
                    )
                );
            }
        }

        /**
         * The collection of all the availability schedules for a given time range.
         *
         * Only one availability plan shall be valid for the same period.
         *
         */
        class AvailablityPlan extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.AvailablityPlan;
                if (null == bucket)
                   cim_data.AvailablityPlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AvailablityPlan[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "AvailablityPlan";
                base.parse_attribute (/<cim:AvailablityPlan.validPeriod\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "validPeriod", sub, context);
                let bucket = context.parsed.AvailablityPlan;
                if (null == bucket)
                   context.parsed.AvailablityPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AvailablityPlan", "validPeriod", "validPeriod", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AvailablityPlan_collapse" aria-expanded="true" aria-controls="AvailablityPlan_collapse" style="margin-left: 10px;">AvailablityPlan</a></legend>
                    <div id="AvailablityPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#validPeriod}}<div><b>validPeriod</b>: {{validPeriod}}</div>{{/validPeriod}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AvailablityPlan_collapse" aria-expanded="true" aria-controls="{{id}}_AvailablityPlan_collapse" style="margin-left: 10px;">AvailablityPlan</a></legend>
                    <div id="{{id}}_AvailablityPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_validPeriod'>validPeriod: </label><div class='col-sm-8'><input id='{{id}}_validPeriod' class='form-control' type='text'{{#validPeriod}} value='{{validPeriod}}'{{/validPeriod}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "AvailablityPlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_validPeriod").value; if ("" !== temp) obj["validPeriod"] = temp;

                return (obj);
            }
        }

        return (
            {
                UnavailablitySchedule: UnavailablitySchedule,
                AvailablityPlan: AvailablityPlan,
                EquipmentUnavailabilitySchedule: EquipmentUnavailabilitySchedule,
                UnavailabilityScheduleDependency: UnavailabilityScheduleDependency,
                UnavailabilitySwitchAction: UnavailabilitySwitchAction
            }
        );
    }
);