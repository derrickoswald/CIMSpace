define
(
    ["model/base", "model/Assets", "model/Common", "model/Core"],
    /**
     * This package contains the core information classes that support work management and network extension planning applications.
     *
     */
    function (base, Assets, Common, Core)
    {
        /**
         * Kind of status, specific to work.
         *
         */
        let WorkStatusKind =
        {
            "waitingOnApproval": "waitingOnApproval",
            "approved": "approved",
            "cancelled": "cancelled",
            "waitingToBeScheduled": "waitingToBeScheduled",
            "scheduled": "scheduled",
            "waitingOnMaterial": "waitingOnMaterial",
            "inProgress": "inProgress",
            "completed": "completed",
            "closed": "closed",
            "dispatched": "dispatched",
            "enroute": "enroute",
            "onSite": "onSite"
        };
        Object.freeze (WorkStatusKind);

        /**
         * Usage of a vehicle.
         *
         */
        let VehicleUsageKind =
        {
            "crew": "crew",
            "user": "user",
            "contractor": "contractor",
            "other": "other"
        };
        Object.freeze (VehicleUsageKind);

        /**
         * Kinds of work.
         *
         */
        let WorkKind =
        {
            "construction": "construction",
            "inspection": "inspection",
            "maintenance": "maintenance",
            "repair": "repair",
            "test": "test",
            "service": "service",
            "disconnect": "disconnect",
            "reconnect": "reconnect",
            "connect": "connect",
            "other": "other",
            "refurbishment": "refurbishment"
        };
        Object.freeze (WorkKind);

        /**
         * Possible types of breaker maintenance work.
         *
         */
        let BreakerMaintenanceKind =
        {
            "externalOutOfService": "externalOutOfService",
            "internalOutOfService": "internalOutOfService",
            "interrupterOverhaul": "interrupterOverhaul"
        };
        Object.freeze (BreakerMaintenanceKind);

        /**
         * Transformer components and problem areas which can be the focus of a repair work task.
         *
         * WorkTimeScheduleKind enumeration
         * Kind of work schedule.
         *
         */
        let TransformerRepairItemKind =
        {

        };
        Object.freeze (TransformerRepairItemKind);

        /**
         * Breaker components and problem areas which can be the focus of a repair work task.
         *
         */
        let BreakerRepairItemKind =
        {
            "airCompressor": "airCompressor",
            "auxiliarySwitchAndLinkage": "auxiliarySwitchAndLinkage",
            "busConnection": "busConnection",
            "checkValve": "checkValve",
            "closeCoil": "closeCoil",
            "contactor": "contactor",
            "controlCircuit": "controlCircuit",
            "corrosion": "corrosion",
            "gasDensitySupervision": "gasDensitySupervision",
            "heaterOrThermostat": "heaterOrThermostat",
            "hydraulicFluidLeak": "hydraulicFluidLeak",
            "interrupterAssembly": "interrupterAssembly",
            "positionIndicator": "positionIndicator",
            "pressureSwitch": "pressureSwitch",
            "pumpOrMotor": "pumpOrMotor",
            "relay": "relay",
            "SF6GasLeak": "SF6GasLeak",
            "storedEnergySystem": "storedEnergySystem",
            "tripCoil": "tripCoil",
            "tripControlValve": "tripControlValve",
            "wiring": "wiring",
            "other": "other"
        };
        Object.freeze (BreakerRepairItemKind);

        /**
         * Kinds of transformer maintenance.
         *
         * BreakerMaintenanceKind enumeration
         * Possible types of breaker maintenance work.
         *
         */
        let TransformerMaintenanceKind =
        {

        };
        Object.freeze (TransformerMaintenanceKind);

        /**
         * Kinds of work tasks.
         *
         */
        let WorkTaskKind =
        {
            "install": "install",
            "remove": "remove",
            "exchange": "exchange",
            "investigate": "investigate"
        };
        Object.freeze (WorkTaskKind);

        /**
         * Time schedule specific to work.
         *
         */
        class WorkTimeSchedule extends Common.TimeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkTimeSchedule;
                if (null == bucket)
                   cim_data.WorkTimeSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkTimeSchedule[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.TimeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTimeSchedule";
                base.parse_attribute (/<cim:WorkTimeSchedule.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:WorkTimeSchedule.BaseWork\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseWork", sub, context);
                let bucket = context.parsed.WorkTimeSchedule;
                if (null == bucket)
                   context.parsed.WorkTimeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.TimeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkTimeSchedule", "kind", "kind", fields);
                base.export_attribute (obj, "WorkTimeSchedule", "BaseWork", "BaseWork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="WorkTimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{kind}}");}); return false;'>{{kind}}</a></div>{{/kind}}
                    {{#BaseWork}}<div><b>BaseWork</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BaseWork}}");}); return false;'>{{BaseWork}}</a></div>{{/BaseWork}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="{{id}}_WorkTimeSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><input id='{{id}}_kind' class='form-control' type='text'{{#kind}} value='{{kind}}'{{/kind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseWork'>BaseWork: </label><div class='col-sm-8'><input id='{{id}}_BaseWork' class='form-control' type='text'{{#BaseWork}} value='{{BaseWork}}'{{/BaseWork}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkTimeSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kind").value; if ("" !== temp) obj["kind"] = temp;
                temp = document.getElementById (id + "_BaseWork").value; if ("" !== temp) obj["BaseWork"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BaseWork", "0..1", "0..*", "BaseWork", "TimeSchedules"]
                        ]
                    )
                );
            }
        }

        /**
         * Asset used to perform work.
         *
         */
        class WorkAsset extends Assets.Asset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkAsset;
                if (null == bucket)
                   cim_data.WorkAsset = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkAsset[obj.id];
            }

            parse (context, sub)
            {
                let obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "WorkAsset";
                base.parse_attribute (/<cim:WorkAsset.CUWorkEquipmentAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CUWorkEquipmentAsset", sub, context);
                base.parse_attribute (/<cim:WorkAsset.Crew\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);
                let bucket = context.parsed.WorkAsset;
                if (null == bucket)
                   context.parsed.WorkAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkAsset", "CUWorkEquipmentAsset", "CUWorkEquipmentAsset", fields);
                base.export_attribute (obj, "WorkAsset", "Crew", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkAsset_collapse" aria-expanded="true" aria-controls="WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="WorkAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#CUWorkEquipmentAsset}}<div><b>CUWorkEquipmentAsset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{CUWorkEquipmentAsset}}");}); return false;'>{{CUWorkEquipmentAsset}}</a></div>{{/CUWorkEquipmentAsset}}
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Crew}}");}); return false;'>{{Crew}}</a></div>{{/Crew}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkAsset_collapse" aria-expanded="true" aria-controls="{{id}}_WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="{{id}}_WorkAsset_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CUWorkEquipmentAsset'>CUWorkEquipmentAsset: </label><div class='col-sm-8'><input id='{{id}}_CUWorkEquipmentAsset' class='form-control' type='text'{{#CUWorkEquipmentAsset}} value='{{CUWorkEquipmentAsset}}'{{/CUWorkEquipmentAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crew'>Crew: </label><div class='col-sm-8'><input id='{{id}}_Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkAsset" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_CUWorkEquipmentAsset").value; if ("" !== temp) obj["CUWorkEquipmentAsset"] = temp;
                temp = document.getElementById (id + "_Crew").value; if ("" !== temp) obj["Crew"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CUWorkEquipmentAsset", "0..1", "0..1", "CUWorkEquipmentItem", "TypeAsset"],
                            ["Crew", "0..1", "0..*", "Crew", "WorkAssets"]
                        ]
                    )
                );
            }
        }

        /**
         * Records information about the status of work or work task at a point in time.
         *
         */
        class WorkActivityRecord extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkActivityRecord;
                if (null == bucket)
                   cim_data.WorkActivityRecord = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkActivityRecord[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "WorkActivityRecord";
                base.parse_element (/<cim:WorkActivityRecord.percentComplete>([\s\S]*?)<\/cim:WorkActivityRecord.percentComplete>/g, obj, "percentComplete", base.to_string, sub, context);
                base.parse_attribute (/<cim:WorkActivityRecord.BaseWork\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseWork", sub, context);
                let bucket = context.parsed.WorkActivityRecord;
                if (null == bucket)
                   context.parsed.WorkActivityRecord = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkActivityRecord", "percentComplete", "percentComplete",  base.from_string, fields);
                base.export_attribute (obj, "WorkActivityRecord", "BaseWork", "BaseWork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkActivityRecord_collapse" aria-expanded="true" aria-controls="WorkActivityRecord_collapse" style="margin-left: 10px;">WorkActivityRecord</a></legend>
                    <div id="WorkActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#percentComplete}}<div><b>percentComplete</b>: {{percentComplete}}</div>{{/percentComplete}}
                    {{#BaseWork}}<div><b>BaseWork</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BaseWork}}");}); return false;'>{{BaseWork}}</a></div>{{/BaseWork}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkActivityRecord_collapse" aria-expanded="true" aria-controls="{{id}}_WorkActivityRecord_collapse" style="margin-left: 10px;">WorkActivityRecord</a></legend>
                    <div id="{{id}}_WorkActivityRecord_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_percentComplete'>percentComplete: </label><div class='col-sm-8'><input id='{{id}}_percentComplete' class='form-control' type='text'{{#percentComplete}} value='{{percentComplete}}'{{/percentComplete}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseWork'>BaseWork: </label><div class='col-sm-8'><input id='{{id}}_BaseWork' class='form-control' type='text'{{#BaseWork}} value='{{BaseWork}}'{{/BaseWork}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkActivityRecord" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_percentComplete").value; if ("" !== temp) obj["percentComplete"] = temp;
                temp = document.getElementById (id + "_BaseWork").value; if ("" !== temp) obj["BaseWork"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BaseWork", "0..1", "0..*", "BaseWork", "WorkActivityRecords"]
                        ]
                    )
                );
            }
        }

        /**
         * The physical consumable supply used for work and other purposes.
         *
         * It includes items such as nuts, bolts, brackets, glue, etc.
         *
         */
        class MaterialItem extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MaterialItem;
                if (null == bucket)
                   cim_data.MaterialItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaterialItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MaterialItem";
                base.parse_attribute (/<cim:MaterialItem.quantity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "quantity", sub, context);
                base.parse_attribute (/<cim:MaterialItem.WorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);
                base.parse_attribute (/<cim:MaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                let bucket = context.parsed.MaterialItem;
                if (null == bucket)
                   context.parsed.MaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MaterialItem", "quantity", "quantity", fields);
                base.export_attribute (obj, "MaterialItem", "WorkTask", "WorkTask", fields);
                base.export_attribute (obj, "MaterialItem", "TypeMaterial", "TypeMaterial", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaterialItem_collapse" aria-expanded="true" aria-controls="MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="MaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkTask}}");}); return false;'>{{WorkTask}}</a></div>{{/WorkTask}}
                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TypeMaterial}}");}); return false;'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaterialItem_collapse" aria-expanded="true" aria-controls="{{id}}_MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="{{id}}_MaterialItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_quantity'>quantity: </label><div class='col-sm-8'><input id='{{id}}_quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='{{id}}_WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='{{id}}_TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MaterialItem" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_quantity").value; if ("" !== temp) obj["quantity"] = temp;
                temp = document.getElementById (id + "_WorkTask").value; if ("" !== temp) obj["WorkTask"] = temp;
                temp = document.getElementById (id + "_TypeMaterial").value; if ("" !== temp) obj["TypeMaterial"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkTask", "0..1", "0..*", "WorkTask", "MaterialItems"],
                            ["TypeMaterial", "0..1", "0..*", "TypeMaterial", "MaterialItems"]
                        ]
                    )
                );
            }
        }

        /**
         * Common representation for work and work tasks.
         *
         */
        class BaseWork extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BaseWork;
                if (null == bucket)
                   cim_data.BaseWork = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BaseWork[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BaseWork";
                base.parse_attribute (/<cim:BaseWork.kind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:BaseWork.priority\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "priority", sub, context);
                base.parse_attribute (/<cim:BaseWork.statusKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "statusKind", sub, context);
                base.parse_attribute (/<cim:BaseWork.WorkLocation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocation", sub, context);
                base.parse_attributes (/<cim:BaseWork.TimeSchedules\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TimeSchedules", sub, context);
                base.parse_attributes (/<cim:BaseWork.WorkActivityRecords\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkActivityRecords", sub, context);
                let bucket = context.parsed.BaseWork;
                if (null == bucket)
                   context.parsed.BaseWork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BaseWork", "kind", "kind", fields);
                base.export_attribute (obj, "BaseWork", "priority", "priority", fields);
                base.export_attribute (obj, "BaseWork", "statusKind", "statusKind", fields);
                base.export_attribute (obj, "BaseWork", "WorkLocation", "WorkLocation", fields);
                base.export_attributes (obj, "BaseWork", "TimeSchedules", "TimeSchedules", fields);
                base.export_attributes (obj, "BaseWork", "WorkActivityRecords", "WorkActivityRecords", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BaseWork_collapse" aria-expanded="true" aria-controls="BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="BaseWork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#priority}}<div><b>priority</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{priority}}");}); return false;'>{{priority}}</a></div>{{/priority}}
                    {{#statusKind}}<div><b>statusKind</b>: {{statusKind}}</div>{{/statusKind}}
                    {{#WorkLocation}}<div><b>WorkLocation</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkLocation}}");}); return false;'>{{WorkLocation}}</a></div>{{/WorkLocation}}
                    {{#TimeSchedules}}<div><b>TimeSchedules</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/TimeSchedules}}
                    {{#WorkActivityRecords}}<div><b>WorkActivityRecords</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkActivityRecords}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["kindWorkKind"] = [{ id: '', selected: (!obj["kind"])}]; for (let property in WorkKind) obj["kindWorkKind"].push ({ id: property, selected: obj["kind"] && obj["kind"].endsWith ('.' + property)});
                obj["statusKindWorkStatusKind"] = [{ id: '', selected: (!obj["statusKind"])}]; for (let property in WorkStatusKind) obj["statusKindWorkStatusKind"].push ({ id: property, selected: obj["statusKind"] && obj["statusKind"].endsWith ('.' + property)});
                if (obj["TimeSchedules"]) obj["TimeSchedules_string"] = obj["TimeSchedules"].join ();
                if (obj["WorkActivityRecords"]) obj["WorkActivityRecords_string"] = obj["WorkActivityRecords"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["kindWorkKind"];
                delete obj["statusKindWorkStatusKind"];
                delete obj["TimeSchedules_string"];
                delete obj["WorkActivityRecords_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BaseWork_collapse" aria-expanded="true" aria-controls="{{id}}_BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="{{id}}_BaseWork_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindWorkKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindWorkKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_statusKind'>statusKind: </label><div class='col-sm-8'><select id='{{id}}_statusKind' class='form-control custom-select'>{{#statusKindWorkStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/statusKindWorkStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkLocation'>WorkLocation: </label><div class='col-sm-8'><input id='{{id}}_WorkLocation' class='form-control' type='text'{{#WorkLocation}} value='{{WorkLocation}}'{{/WorkLocation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BaseWork" };
                super.submit (id, obj);
                temp = WorkKind[document.getElementById (id + "_kind").value]; if (temp) obj["kind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#WorkKind." + temp; else delete obj["kind"];
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = WorkStatusKind[document.getElementById (id + "_statusKind").value]; if (temp) obj["statusKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#WorkStatusKind." + temp; else delete obj["statusKind"];
                temp = document.getElementById (id + "_WorkLocation").value; if ("" !== temp) obj["WorkLocation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WorkLocation", "0..1", "0..*", "WorkLocation", "BaseWorks"],
                            ["TimeSchedules", "0..*", "0..1", "WorkTimeSchedule", "BaseWork"],
                            ["WorkActivityRecords", "0..*", "0..1", "WorkActivityRecord", "BaseWork"]
                        ]
                    )
                );
            }
        }

        /**
         * Information about a particular location for various forms of work.
         *
         */
        class WorkLocation extends Common.Location
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkLocation;
                if (null == bucket)
                   cim_data.WorkLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkLocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "WorkLocation";
                base.parse_attributes (/<cim:WorkLocation.BaseWorks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseWorks", sub, context);
                base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OneCallRequest", sub, context);
                base.parse_attributes (/<cim:WorkLocation.DesignLocations\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DesignLocations", sub, context);
                let bucket = context.parsed.WorkLocation;
                if (null == bucket)
                   context.parsed.WorkLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "WorkLocation", "BaseWorks", "BaseWorks", fields);
                base.export_attribute (obj, "WorkLocation", "OneCallRequest", "OneCallRequest", fields);
                base.export_attributes (obj, "WorkLocation", "DesignLocations", "DesignLocations", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkLocation_collapse" aria-expanded="true" aria-controls="WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="WorkLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#BaseWorks}}<div><b>BaseWorks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BaseWorks}}
                    {{#OneCallRequest}}<div><b>OneCallRequest</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{OneCallRequest}}");}); return false;'>{{OneCallRequest}}</a></div>{{/OneCallRequest}}
                    {{#DesignLocations}}<div><b>DesignLocations</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/DesignLocations}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["BaseWorks"]) obj["BaseWorks_string"] = obj["BaseWorks"].join ();
                if (obj["DesignLocations"]) obj["DesignLocations_string"] = obj["DesignLocations"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["BaseWorks_string"];
                delete obj["DesignLocations_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkLocation_collapse" aria-expanded="true" aria-controls="{{id}}_WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="{{id}}_WorkLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OneCallRequest'>OneCallRequest: </label><div class='col-sm-8'><input id='{{id}}_OneCallRequest' class='form-control' type='text'{{#OneCallRequest}} value='{{OneCallRequest}}'{{/OneCallRequest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DesignLocations'>DesignLocations: </label><div class='col-sm-8'><input id='{{id}}_DesignLocations' class='form-control' type='text'{{#DesignLocations}} value='{{DesignLocations_string}}'{{/DesignLocations}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OneCallRequest").value; if ("" !== temp) obj["OneCallRequest"] = temp;
                temp = document.getElementById (id + "_DesignLocations").value; if ("" !== temp) obj["DesignLocations"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BaseWorks", "0..*", "0..1", "BaseWork", "WorkLocation"],
                            ["OneCallRequest", "0..1", "0..*", "OneCallRequest", "WorkLocations"],
                            ["DesignLocations", "0..*", "1..*", "DesignLocation", "WorkLocations"]
                        ]
                    )
                );
            }
        }

        /**
         * Asset component to be repaired or problem area to be corrected.
         *
         */
        class RepairItem extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RepairItem;
                if (null == bucket)
                   cim_data.RepairItem = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RepairItem[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RepairItem";
                base.parse_attribute (/<cim:RepairItem.breakerRepairItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "breakerRepairItem", sub, context);
                base.parse_attribute (/<cim:RepairItem.transformerRepairItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transformerRepairItem", sub, context);
                base.parse_attributes (/<cim:RepairItem.RepairWorkTask\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RepairWorkTask", sub, context);
                let bucket = context.parsed.RepairItem;
                if (null == bucket)
                   context.parsed.RepairItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "RepairItem", "breakerRepairItem", "breakerRepairItem", fields);
                base.export_attribute (obj, "RepairItem", "transformerRepairItem", "transformerRepairItem", fields);
                base.export_attributes (obj, "RepairItem", "RepairWorkTask", "RepairWorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RepairItem_collapse" aria-expanded="true" aria-controls="RepairItem_collapse" style="margin-left: 10px;">RepairItem</a></legend>
                    <div id="RepairItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#breakerRepairItem}}<div><b>breakerRepairItem</b>: {{breakerRepairItem}}</div>{{/breakerRepairItem}}
                    {{#transformerRepairItem}}<div><b>transformerRepairItem</b>: {{transformerRepairItem}}</div>{{/transformerRepairItem}}
                    {{#RepairWorkTask}}<div><b>RepairWorkTask</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RepairWorkTask}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["breakerRepairItemBreakerRepairItemKind"] = [{ id: '', selected: (!obj["breakerRepairItem"])}]; for (let property in BreakerRepairItemKind) obj["breakerRepairItemBreakerRepairItemKind"].push ({ id: property, selected: obj["breakerRepairItem"] && obj["breakerRepairItem"].endsWith ('.' + property)});
                obj["transformerRepairItemTransformerRepairItemKind"] = [{ id: '', selected: (!obj["transformerRepairItem"])}]; for (let property in TransformerRepairItemKind) obj["transformerRepairItemTransformerRepairItemKind"].push ({ id: property, selected: obj["transformerRepairItem"] && obj["transformerRepairItem"].endsWith ('.' + property)});
                if (obj["RepairWorkTask"]) obj["RepairWorkTask_string"] = obj["RepairWorkTask"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["breakerRepairItemBreakerRepairItemKind"];
                delete obj["transformerRepairItemTransformerRepairItemKind"];
                delete obj["RepairWorkTask_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RepairItem_collapse" aria-expanded="true" aria-controls="{{id}}_RepairItem_collapse" style="margin-left: 10px;">RepairItem</a></legend>
                    <div id="{{id}}_RepairItem_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakerRepairItem'>breakerRepairItem: </label><div class='col-sm-8'><select id='{{id}}_breakerRepairItem' class='form-control custom-select'>{{#breakerRepairItemBreakerRepairItemKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/breakerRepairItemBreakerRepairItemKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transformerRepairItem'>transformerRepairItem: </label><div class='col-sm-8'><select id='{{id}}_transformerRepairItem' class='form-control custom-select'>{{#transformerRepairItemTransformerRepairItemKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/transformerRepairItemTransformerRepairItemKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RepairWorkTask'>RepairWorkTask: </label><div class='col-sm-8'><input id='{{id}}_RepairWorkTask' class='form-control' type='text'{{#RepairWorkTask}} value='{{RepairWorkTask_string}}'{{/RepairWorkTask}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RepairItem" };
                super.submit (id, obj);
                temp = BreakerRepairItemKind[document.getElementById (id + "_breakerRepairItem").value]; if (temp) obj["breakerRepairItem"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#BreakerRepairItemKind." + temp; else delete obj["breakerRepairItem"];
                temp = TransformerRepairItemKind[document.getElementById (id + "_transformerRepairItem").value]; if (temp) obj["transformerRepairItem"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TransformerRepairItemKind." + temp; else delete obj["transformerRepairItem"];
                temp = document.getElementById (id + "_RepairWorkTask").value; if ("" !== temp) obj["RepairWorkTask"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RepairWorkTask", "0..*", "0..*", "RepairWorkTask", "BreakerRepairItem"]
                        ]
                    )
                );
            }
        }

        /**
         * Kind of work schedule.
         *
         */
        class WorkTimeScheduleKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkTimeScheduleKind;
                if (null == bucket)
                   cim_data.WorkTimeScheduleKind = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkTimeScheduleKind[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTimeScheduleKind";
                base.parse_attribute (/<cim:WorkTimeScheduleKind.actual\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "actual", sub, context);
                base.parse_attribute (/<cim:WorkTimeScheduleKind.earliest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "earliest", sub, context);
                base.parse_attribute (/<cim:WorkTimeScheduleKind.estimate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "estimate", sub, context);
                base.parse_attribute (/<cim:WorkTimeScheduleKind.immediate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "immediate", sub, context);
                base.parse_attribute (/<cim:WorkTimeScheduleKind.latest\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "latest", sub, context);
                base.parse_attribute (/<cim:WorkTimeScheduleKind.request\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "request", sub, context);
                let bucket = context.parsed.WorkTimeScheduleKind;
                if (null == bucket)
                   context.parsed.WorkTimeScheduleKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_attribute (obj, "WorkTimeScheduleKind", "actual", "actual", fields);
                base.export_attribute (obj, "WorkTimeScheduleKind", "earliest", "earliest", fields);
                base.export_attribute (obj, "WorkTimeScheduleKind", "estimate", "estimate", fields);
                base.export_attribute (obj, "WorkTimeScheduleKind", "immediate", "immediate", fields);
                base.export_attribute (obj, "WorkTimeScheduleKind", "latest", "latest", fields);
                base.export_attribute (obj, "WorkTimeScheduleKind", "request", "request", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkTimeScheduleKind_collapse" aria-expanded="true" aria-controls="WorkTimeScheduleKind_collapse" style="margin-left: 10px;">WorkTimeScheduleKind</a></legend>
                    <div id="WorkTimeScheduleKind_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#actual}}<div><b>actual</b>: {{actual}}</div>{{/actual}}
                    {{#earliest}}<div><b>earliest</b>: {{earliest}}</div>{{/earliest}}
                    {{#estimate}}<div><b>estimate</b>: {{estimate}}</div>{{/estimate}}
                    {{#immediate}}<div><b>immediate</b>: {{immediate}}</div>{{/immediate}}
                    {{#latest}}<div><b>latest</b>: {{latest}}</div>{{/latest}}
                    {{#request}}<div><b>request</b>: {{request}}</div>{{/request}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkTimeScheduleKind_collapse" aria-expanded="true" aria-controls="{{id}}_WorkTimeScheduleKind_collapse" style="margin-left: 10px;">WorkTimeScheduleKind</a></legend>
                    <div id="{{id}}_WorkTimeScheduleKind_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actual'>actual: </label><div class='col-sm-8'><input id='{{id}}_actual' class='form-control' type='text'{{#actual}} value='{{actual}}'{{/actual}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_earliest'>earliest: </label><div class='col-sm-8'><input id='{{id}}_earliest' class='form-control' type='text'{{#earliest}} value='{{earliest}}'{{/earliest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimate'>estimate: </label><div class='col-sm-8'><input id='{{id}}_estimate' class='form-control' type='text'{{#estimate}} value='{{estimate}}'{{/estimate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_immediate'>immediate: </label><div class='col-sm-8'><input id='{{id}}_immediate' class='form-control' type='text'{{#immediate}} value='{{immediate}}'{{/immediate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_latest'>latest: </label><div class='col-sm-8'><input id='{{id}}_latest' class='form-control' type='text'{{#latest}} value='{{latest}}'{{/latest}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_request'>request: </label><div class='col-sm-8'><input id='{{id}}_request' class='form-control' type='text'{{#request}} value='{{request}}'{{/request}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkTimeScheduleKind" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_actual").value; if ("" !== temp) obj["actual"] = temp;
                temp = document.getElementById (id + "_earliest").value; if ("" !== temp) obj["earliest"] = temp;
                temp = document.getElementById (id + "_estimate").value; if ("" !== temp) obj["estimate"] = temp;
                temp = document.getElementById (id + "_immediate").value; if ("" !== temp) obj["immediate"] = temp;
                temp = document.getElementById (id + "_latest").value; if ("" !== temp) obj["latest"] = temp;
                temp = document.getElementById (id + "_request").value; if ("" !== temp) obj["request"] = temp;

                return (obj);
            }
        }

        /**
         * Tool asset.
         *
         */
        class Tool extends WorkAsset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Tool;
                if (null == bucket)
                   cim_data.Tool = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Tool[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Tool";
                base.parse_element (/<cim:Tool.lastCalibrationDate>([\s\S]*?)<\/cim:Tool.lastCalibrationDate>/g, obj, "lastCalibrationDate", base.to_string, sub, context);
                let bucket = context.parsed.Tool;
                if (null == bucket)
                   context.parsed.Tool = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tool", "lastCalibrationDate", "lastCalibrationDate",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Tool_collapse" aria-expanded="true" aria-controls="Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="Tool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#lastCalibrationDate}}<div><b>lastCalibrationDate</b>: {{lastCalibrationDate}}</div>{{/lastCalibrationDate}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Tool_collapse" aria-expanded="true" aria-controls="{{id}}_Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="{{id}}_Tool_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lastCalibrationDate'>lastCalibrationDate: </label><div class='col-sm-8'><input id='{{id}}_lastCalibrationDate' class='form-control' type='text'{{#lastCalibrationDate}} value='{{lastCalibrationDate}}'{{/lastCalibrationDate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Tool" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lastCalibrationDate").value; if ("" !== temp) obj["lastCalibrationDate"] = temp;

                return (obj);
            }
        }

        /**
         * Vehicle asset.
         *
         */
        class Vehicle extends WorkAsset
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Vehicle;
                if (null == bucket)
                   cim_data.Vehicle = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Vehicle[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Vehicle";
                base.parse_element (/<cim:Vehicle.odometerReadDateTime>([\s\S]*?)<\/cim:Vehicle.odometerReadDateTime>/g, obj, "odometerReadDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Vehicle.odometerReading>([\s\S]*?)<\/cim:Vehicle.odometerReading>/g, obj, "odometerReading", base.to_string, sub, context);
                base.parse_attribute (/<cim:Vehicle.usageKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "usageKind", sub, context);
                let bucket = context.parsed.Vehicle;
                if (null == bucket)
                   context.parsed.Vehicle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Vehicle", "odometerReadDateTime", "odometerReadDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Vehicle", "odometerReading", "odometerReading",  base.from_string, fields);
                base.export_attribute (obj, "Vehicle", "usageKind", "usageKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Vehicle_collapse" aria-expanded="true" aria-controls="Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="Vehicle_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#odometerReadDateTime}}<div><b>odometerReadDateTime</b>: {{odometerReadDateTime}}</div>{{/odometerReadDateTime}}
                    {{#odometerReading}}<div><b>odometerReading</b>: {{odometerReading}}</div>{{/odometerReading}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["usageKindVehicleUsageKind"] = [{ id: '', selected: (!obj["usageKind"])}]; for (let property in VehicleUsageKind) obj["usageKindVehicleUsageKind"].push ({ id: property, selected: obj["usageKind"] && obj["usageKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["usageKindVehicleUsageKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Vehicle_collapse" aria-expanded="true" aria-controls="{{id}}_Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="{{id}}_Vehicle_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_odometerReadDateTime'>odometerReadDateTime: </label><div class='col-sm-8'><input id='{{id}}_odometerReadDateTime' class='form-control' type='text'{{#odometerReadDateTime}} value='{{odometerReadDateTime}}'{{/odometerReadDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_odometerReading'>odometerReading: </label><div class='col-sm-8'><input id='{{id}}_odometerReading' class='form-control' type='text'{{#odometerReading}} value='{{odometerReading}}'{{/odometerReading}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_usageKind'>usageKind: </label><div class='col-sm-8'><select id='{{id}}_usageKind' class='form-control custom-select'>{{#usageKindVehicleUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/usageKindVehicleUsageKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Vehicle" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_odometerReadDateTime").value; if ("" !== temp) obj["odometerReadDateTime"] = temp;
                temp = document.getElementById (id + "_odometerReading").value; if ("" !== temp) obj["odometerReading"] = temp;
                temp = VehicleUsageKind[document.getElementById (id + "_usageKind").value]; if (temp) obj["usageKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#VehicleUsageKind." + temp; else delete obj["usageKind"];

                return (obj);
            }
        }

        /**
         * Document used to request, initiate, track and record work.
         *
         */
        class Work extends BaseWork
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Work;
                if (null == bucket)
                   cim_data.Work = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Work[obj.id];
            }

            parse (context, sub)
            {
                let obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "Work";
                base.parse_element (/<cim:Work.requestDateTime>([\s\S]*?)<\/cim:Work.requestDateTime>/g, obj, "requestDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Work.workOrderNumber>([\s\S]*?)<\/cim:Work.workOrderNumber>/g, obj, "workOrderNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:Work.Project\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                base.parse_attribute (/<cim:Work.ErpProjectAccounting\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);
                base.parse_attributes (/<cim:Work.WorkFlowSteps\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkFlowSteps", sub, context);
                base.parse_attributes (/<cim:Work.Customers\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Customers", sub, context);
                base.parse_attributes (/<cim:Work.WorkCostDetails\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkCostDetails", sub, context);
                base.parse_attributes (/<cim:Work.Incidents\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Incidents", sub, context);
                base.parse_attributes (/<cim:Work.Designs\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Designs", sub, context);
                base.parse_attributes (/<cim:Work.Appointments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Appointments", sub, context);
                base.parse_attribute (/<cim:Work.WorkBillingInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfo", sub, context);
                base.parse_attributes (/<cim:Work.WorkTasks\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                base.parse_attribute (/<cim:Work.BusinessCase\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                let bucket = context.parsed.Work;
                if (null == bucket)
                   context.parsed.Work = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "Work", "requestDateTime", "requestDateTime",  base.from_datetime, fields);
                base.export_element (obj, "Work", "workOrderNumber", "workOrderNumber",  base.from_string, fields);
                base.export_attribute (obj, "Work", "Project", "Project", fields);
                base.export_attribute (obj, "Work", "ErpProjectAccounting", "ErpProjectAccounting", fields);
                base.export_attributes (obj, "Work", "WorkFlowSteps", "WorkFlowSteps", fields);
                base.export_attributes (obj, "Work", "Customers", "Customers", fields);
                base.export_attributes (obj, "Work", "WorkCostDetails", "WorkCostDetails", fields);
                base.export_attributes (obj, "Work", "Incidents", "Incidents", fields);
                base.export_attributes (obj, "Work", "Designs", "Designs", fields);
                base.export_attributes (obj, "Work", "Appointments", "Appointments", fields);
                base.export_attribute (obj, "Work", "WorkBillingInfo", "WorkBillingInfo", fields);
                base.export_attributes (obj, "Work", "WorkTasks", "WorkTasks", fields);
                base.export_attribute (obj, "Work", "BusinessCase", "BusinessCase", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Work_collapse" aria-expanded="true" aria-controls="Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="Work_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#requestDateTime}}<div><b>requestDateTime</b>: {{requestDateTime}}</div>{{/requestDateTime}}
                    {{#workOrderNumber}}<div><b>workOrderNumber</b>: {{workOrderNumber}}</div>{{/workOrderNumber}}
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Project}}");}); return false;'>{{Project}}</a></div>{{/Project}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ErpProjectAccounting}}");}); return false;'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
                    {{#WorkFlowSteps}}<div><b>WorkFlowSteps</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkFlowSteps}}
                    {{#Customers}}<div><b>Customers</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Customers}}
                    {{#WorkCostDetails}}<div><b>WorkCostDetails</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkCostDetails}}
                    {{#Incidents}}<div><b>Incidents</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Incidents}}
                    {{#Designs}}<div><b>Designs</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Designs}}
                    {{#Appointments}}<div><b>Appointments</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Appointments}}
                    {{#WorkBillingInfo}}<div><b>WorkBillingInfo</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{WorkBillingInfo}}");}); return false;'>{{WorkBillingInfo}}</a></div>{{/WorkBillingInfo}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    {{#BusinessCase}}<div><b>BusinessCase</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BusinessCase}}");}); return false;'>{{BusinessCase}}</a></div>{{/BusinessCase}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["WorkFlowSteps"]) obj["WorkFlowSteps_string"] = obj["WorkFlowSteps"].join ();
                if (obj["Customers"]) obj["Customers_string"] = obj["Customers"].join ();
                if (obj["WorkCostDetails"]) obj["WorkCostDetails_string"] = obj["WorkCostDetails"].join ();
                if (obj["Incidents"]) obj["Incidents_string"] = obj["Incidents"].join ();
                if (obj["Designs"]) obj["Designs_string"] = obj["Designs"].join ();
                if (obj["Appointments"]) obj["Appointments_string"] = obj["Appointments"].join ();
                if (obj["WorkTasks"]) obj["WorkTasks_string"] = obj["WorkTasks"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["WorkFlowSteps_string"];
                delete obj["Customers_string"];
                delete obj["WorkCostDetails_string"];
                delete obj["Incidents_string"];
                delete obj["Designs_string"];
                delete obj["Appointments_string"];
                delete obj["WorkTasks_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Work_collapse" aria-expanded="true" aria-controls="{{id}}_Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="{{id}}_Work_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_requestDateTime'>requestDateTime: </label><div class='col-sm-8'><input id='{{id}}_requestDateTime' class='form-control' type='text'{{#requestDateTime}} value='{{requestDateTime}}'{{/requestDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_workOrderNumber'>workOrderNumber: </label><div class='col-sm-8'><input id='{{id}}_workOrderNumber' class='form-control' type='text'{{#workOrderNumber}} value='{{workOrderNumber}}'{{/workOrderNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Project'>Project: </label><div class='col-sm-8'><input id='{{id}}_Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='{{id}}_ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Customers'>Customers: </label><div class='col-sm-8'><input id='{{id}}_Customers' class='form-control' type='text'{{#Customers}} value='{{Customers_string}}'{{/Customers}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkCostDetails'>WorkCostDetails: </label><div class='col-sm-8'><input id='{{id}}_WorkCostDetails' class='form-control' type='text'{{#WorkCostDetails}} value='{{WorkCostDetails_string}}'{{/WorkCostDetails}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incidents'>Incidents: </label><div class='col-sm-8'><input id='{{id}}_Incidents' class='form-control' type='text'{{#Incidents}} value='{{Incidents_string}}'{{/Incidents}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Appointments'>Appointments: </label><div class='col-sm-8'><input id='{{id}}_Appointments' class='form-control' type='text'{{#Appointments}} value='{{Appointments_string}}'{{/Appointments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WorkBillingInfo'>WorkBillingInfo: </label><div class='col-sm-8'><input id='{{id}}_WorkBillingInfo' class='form-control' type='text'{{#WorkBillingInfo}} value='{{WorkBillingInfo}}'{{/WorkBillingInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BusinessCase'>BusinessCase: </label><div class='col-sm-8'><input id='{{id}}_BusinessCase' class='form-control' type='text'{{#BusinessCase}} value='{{BusinessCase}}'{{/BusinessCase}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Work" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_requestDateTime").value; if ("" !== temp) obj["requestDateTime"] = temp;
                temp = document.getElementById (id + "_workOrderNumber").value; if ("" !== temp) obj["workOrderNumber"] = temp;
                temp = document.getElementById (id + "_Project").value; if ("" !== temp) obj["Project"] = temp;
                temp = document.getElementById (id + "_ErpProjectAccounting").value; if ("" !== temp) obj["ErpProjectAccounting"] = temp;
                temp = document.getElementById (id + "_Customers").value; if ("" !== temp) obj["Customers"] = temp.split (",");
                temp = document.getElementById (id + "_WorkCostDetails").value; if ("" !== temp) obj["WorkCostDetails"] = temp.split (",");
                temp = document.getElementById (id + "_Incidents").value; if ("" !== temp) obj["Incidents"] = temp.split (",");
                temp = document.getElementById (id + "_Appointments").value; if ("" !== temp) obj["Appointments"] = temp.split (",");
                temp = document.getElementById (id + "_WorkBillingInfo").value; if ("" !== temp) obj["WorkBillingInfo"] = temp;
                temp = document.getElementById (id + "_BusinessCase").value; if ("" !== temp) obj["BusinessCase"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Project", "0..1", "0..*", "Project", "Works"],
                            ["ErpProjectAccounting", "0..1", "0..*", "ErpProjectAccounting", "Works"],
                            ["WorkFlowSteps", "0..*", "0..1", "WorkFlowStep", "Work"],
                            ["Customers", "0..*", "0..*", "Customer", "Works"],
                            ["WorkCostDetails", "0..*", "0..*", "WorkCostDetail", "Works"],
                            ["Incidents", "0..*", "0..*", "Incident", "Works"],
                            ["Designs", "0..*", "0..1", "Design", "Work"],
                            ["Appointments", "0..*", "0..*", "Appointment", "Works"],
                            ["WorkBillingInfo", "0..1", "0..*", "WorkBillingInfo", "Works"],
                            ["WorkTasks", "0..*", "1", "WorkTask", "Work"],
                            ["BusinessCase", "0..1", "0..*", "BusinessCase", "Works"]
                        ]
                    )
                );
            }
        }

        /**
         * A task within a set of work.
         *
         */
        class WorkTask extends BaseWork
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.WorkTask;
                if (null == bucket)
                   cim_data.WorkTask = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WorkTask[obj.id];
            }

            parse (context, sub)
            {
                let obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTask";
                base.parse_element (/<cim:WorkTask.completedDateTime>([\s\S]*?)<\/cim:WorkTask.completedDateTime>/g, obj, "completedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkTask.contractorCost>([\s\S]*?)<\/cim:WorkTask.contractorCost>/g, obj, "contractorCost", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.crewETA>([\s\S]*?)<\/cim:WorkTask.crewETA>/g, obj, "crewETA", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkTask.estimatedCompletionTime>([\s\S]*?)<\/cim:WorkTask.estimatedCompletionTime>/g, obj, "estimatedCompletionTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:WorkTask.instruction>([\s\S]*?)<\/cim:WorkTask.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.laborCost>([\s\S]*?)<\/cim:WorkTask.laborCost>/g, obj, "laborCost", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.laborHours>([\s\S]*?)<\/cim:WorkTask.laborHours>/g, obj, "laborHours", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.materiallCost>([\s\S]*?)<\/cim:WorkTask.materiallCost>/g, obj, "materiallCost", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.schedOverride>([\s\S]*?)<\/cim:WorkTask.schedOverride>/g, obj, "schedOverride", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.startedDateTime>([\s\S]*?)<\/cim:WorkTask.startedDateTime>/g, obj, "startedDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:WorkTask.taskKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "taskKind", sub, context);
                base.parse_element (/<cim:WorkTask.toolCost>([\s\S]*?)<\/cim:WorkTask.toolCost>/g, obj, "toolCost", base.to_string, sub, context);
                base.parse_attributes (/<cim:WorkTask.Crews\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Crews", sub, context);
                base.parse_attributes (/<cim:WorkTask.ProcedureDataSet\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProcedureDataSet", sub, context);
                base.parse_attribute (/<cim:WorkTask.SwitchingPlan\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attribute (/<cim:WorkTask.TroubleOrder\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TroubleOrder", sub, context);
                base.parse_attributes (/<cim:WorkTask.OldAsset\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "OldAsset", sub, context);
                base.parse_attributes (/<cim:WorkTask.MaterialItems\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "MaterialItems", sub, context);
                base.parse_attributes (/<cim:WorkTask.Assets\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Assets", sub, context);
                base.parse_attribute (/<cim:WorkTask.Work\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                let bucket = context.parsed.WorkTask;
                if (null == bucket)
                   context.parsed.WorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkTask", "completedDateTime", "completedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "WorkTask", "contractorCost", "contractorCost",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "crewETA", "crewETA",  base.from_datetime, fields);
                base.export_element (obj, "WorkTask", "estimatedCompletionTime", "estimatedCompletionTime",  base.from_datetime, fields);
                base.export_element (obj, "WorkTask", "instruction", "instruction",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "laborCost", "laborCost",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "laborHours", "laborHours",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "materiallCost", "materiallCost",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "schedOverride", "schedOverride",  base.from_string, fields);
                base.export_element (obj, "WorkTask", "startedDateTime", "startedDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "WorkTask", "taskKind", "taskKind", fields);
                base.export_element (obj, "WorkTask", "toolCost", "toolCost",  base.from_string, fields);
                base.export_attributes (obj, "WorkTask", "Crews", "Crews", fields);
                base.export_attributes (obj, "WorkTask", "ProcedureDataSet", "ProcedureDataSet", fields);
                base.export_attribute (obj, "WorkTask", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attribute (obj, "WorkTask", "TroubleOrder", "TroubleOrder", fields);
                base.export_attributes (obj, "WorkTask", "OldAsset", "OldAsset", fields);
                base.export_attributes (obj, "WorkTask", "MaterialItems", "MaterialItems", fields);
                base.export_attributes (obj, "WorkTask", "Assets", "Assets", fields);
                base.export_attribute (obj, "WorkTask", "Work", "Work", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#WorkTask_collapse" aria-expanded="true" aria-controls="WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="WorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#completedDateTime}}<div><b>completedDateTime</b>: {{completedDateTime}}</div>{{/completedDateTime}}
                    {{#contractorCost}}<div><b>contractorCost</b>: {{contractorCost}}</div>{{/contractorCost}}
                    {{#crewETA}}<div><b>crewETA</b>: {{crewETA}}</div>{{/crewETA}}
                    {{#estimatedCompletionTime}}<div><b>estimatedCompletionTime</b>: {{estimatedCompletionTime}}</div>{{/estimatedCompletionTime}}
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#laborCost}}<div><b>laborCost</b>: {{laborCost}}</div>{{/laborCost}}
                    {{#laborHours}}<div><b>laborHours</b>: {{laborHours}}</div>{{/laborHours}}
                    {{#materiallCost}}<div><b>materiallCost</b>: {{materiallCost}}</div>{{/materiallCost}}
                    {{#schedOverride}}<div><b>schedOverride</b>: {{schedOverride}}</div>{{/schedOverride}}
                    {{#startedDateTime}}<div><b>startedDateTime</b>: {{startedDateTime}}</div>{{/startedDateTime}}
                    {{#taskKind}}<div><b>taskKind</b>: {{taskKind}}</div>{{/taskKind}}
                    {{#toolCost}}<div><b>toolCost</b>: {{toolCost}}</div>{{/toolCost}}
                    {{#Crews}}<div><b>Crews</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Crews}}
                    {{#ProcedureDataSet}}<div><b>ProcedureDataSet</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/ProcedureDataSet}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{SwitchingPlan}}");}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#TroubleOrder}}<div><b>TroubleOrder</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{TroubleOrder}}");}); return false;'>{{TroubleOrder}}</a></div>{{/TroubleOrder}}
                    {{#OldAsset}}<div><b>OldAsset</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/OldAsset}}
                    {{#MaterialItems}}<div><b>MaterialItems</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/MaterialItems}}
                    {{#Assets}}<div><b>Assets</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/Assets}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Work}}");}); return false;'>{{Work}}</a></div>{{/Work}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["taskKindWorkTaskKind"] = [{ id: '', selected: (!obj["taskKind"])}]; for (let property in WorkTaskKind) obj["taskKindWorkTaskKind"].push ({ id: property, selected: obj["taskKind"] && obj["taskKind"].endsWith ('.' + property)});
                if (obj["Crews"]) obj["Crews_string"] = obj["Crews"].join ();
                if (obj["ProcedureDataSet"]) obj["ProcedureDataSet_string"] = obj["ProcedureDataSet"].join ();
                if (obj["OldAsset"]) obj["OldAsset_string"] = obj["OldAsset"].join ();
                if (obj["MaterialItems"]) obj["MaterialItems_string"] = obj["MaterialItems"].join ();
                if (obj["Assets"]) obj["Assets_string"] = obj["Assets"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["taskKindWorkTaskKind"];
                delete obj["Crews_string"];
                delete obj["ProcedureDataSet_string"];
                delete obj["OldAsset_string"];
                delete obj["MaterialItems_string"];
                delete obj["Assets_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_WorkTask_collapse" aria-expanded="true" aria-controls="{{id}}_WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="{{id}}_WorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_completedDateTime'>completedDateTime: </label><div class='col-sm-8'><input id='{{id}}_completedDateTime' class='form-control' type='text'{{#completedDateTime}} value='{{completedDateTime}}'{{/completedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_contractorCost'>contractorCost: </label><div class='col-sm-8'><input id='{{id}}_contractorCost' class='form-control' type='text'{{#contractorCost}} value='{{contractorCost}}'{{/contractorCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_crewETA'>crewETA: </label><div class='col-sm-8'><input id='{{id}}_crewETA' class='form-control' type='text'{{#crewETA}} value='{{crewETA}}'{{/crewETA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedCompletionTime'>estimatedCompletionTime: </label><div class='col-sm-8'><input id='{{id}}_estimatedCompletionTime' class='form-control' type='text'{{#estimatedCompletionTime}} value='{{estimatedCompletionTime}}'{{/estimatedCompletionTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_instruction'>instruction: </label><div class='col-sm-8'><input id='{{id}}_instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborCost'>laborCost: </label><div class='col-sm-8'><input id='{{id}}_laborCost' class='form-control' type='text'{{#laborCost}} value='{{laborCost}}'{{/laborCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_laborHours'>laborHours: </label><div class='col-sm-8'><input id='{{id}}_laborHours' class='form-control' type='text'{{#laborHours}} value='{{laborHours}}'{{/laborHours}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_materiallCost'>materiallCost: </label><div class='col-sm-8'><input id='{{id}}_materiallCost' class='form-control' type='text'{{#materiallCost}} value='{{materiallCost}}'{{/materiallCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_schedOverride'>schedOverride: </label><div class='col-sm-8'><input id='{{id}}_schedOverride' class='form-control' type='text'{{#schedOverride}} value='{{schedOverride}}'{{/schedOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_startedDateTime'>startedDateTime: </label><div class='col-sm-8'><input id='{{id}}_startedDateTime' class='form-control' type='text'{{#startedDateTime}} value='{{startedDateTime}}'{{/startedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_taskKind'>taskKind: </label><div class='col-sm-8'><select id='{{id}}_taskKind' class='form-control custom-select'>{{#taskKindWorkTaskKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/taskKindWorkTaskKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_toolCost'>toolCost: </label><div class='col-sm-8'><input id='{{id}}_toolCost' class='form-control' type='text'{{#toolCost}} value='{{toolCost}}'{{/toolCost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Crews'>Crews: </label><div class='col-sm-8'><input id='{{id}}_Crews' class='form-control' type='text'{{#Crews}} value='{{Crews_string}}'{{/Crews}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TroubleOrder'>TroubleOrder: </label><div class='col-sm-8'><input id='{{id}}_TroubleOrder' class='form-control' type='text'{{#TroubleOrder}} value='{{TroubleOrder}}'{{/TroubleOrder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OldAsset'>OldAsset: </label><div class='col-sm-8'><input id='{{id}}_OldAsset' class='form-control' type='text'{{#OldAsset}} value='{{OldAsset_string}}'{{/OldAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Assets'>Assets: </label><div class='col-sm-8'><input id='{{id}}_Assets' class='form-control' type='text'{{#Assets}} value='{{Assets_string}}'{{/Assets}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Work'>Work: </label><div class='col-sm-8'><input id='{{id}}_Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "WorkTask" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_completedDateTime").value; if ("" !== temp) obj["completedDateTime"] = temp;
                temp = document.getElementById (id + "_contractorCost").value; if ("" !== temp) obj["contractorCost"] = temp;
                temp = document.getElementById (id + "_crewETA").value; if ("" !== temp) obj["crewETA"] = temp;
                temp = document.getElementById (id + "_estimatedCompletionTime").value; if ("" !== temp) obj["estimatedCompletionTime"] = temp;
                temp = document.getElementById (id + "_instruction").value; if ("" !== temp) obj["instruction"] = temp;
                temp = document.getElementById (id + "_laborCost").value; if ("" !== temp) obj["laborCost"] = temp;
                temp = document.getElementById (id + "_laborHours").value; if ("" !== temp) obj["laborHours"] = temp;
                temp = document.getElementById (id + "_materiallCost").value; if ("" !== temp) obj["materiallCost"] = temp;
                temp = document.getElementById (id + "_schedOverride").value; if ("" !== temp) obj["schedOverride"] = temp;
                temp = document.getElementById (id + "_startedDateTime").value; if ("" !== temp) obj["startedDateTime"] = temp;
                temp = WorkTaskKind[document.getElementById (id + "_taskKind").value]; if (temp) obj["taskKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#WorkTaskKind." + temp; else delete obj["taskKind"];
                temp = document.getElementById (id + "_toolCost").value; if ("" !== temp) obj["toolCost"] = temp;
                temp = document.getElementById (id + "_Crews").value; if ("" !== temp) obj["Crews"] = temp.split (",");
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" !== temp) obj["SwitchingPlan"] = temp;
                temp = document.getElementById (id + "_TroubleOrder").value; if ("" !== temp) obj["TroubleOrder"] = temp;
                temp = document.getElementById (id + "_OldAsset").value; if ("" !== temp) obj["OldAsset"] = temp.split (",");
                temp = document.getElementById (id + "_Assets").value; if ("" !== temp) obj["Assets"] = temp.split (",");
                temp = document.getElementById (id + "_Work").value; if ("" !== temp) obj["Work"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Crews", "0..*", "0..*", "Crew", "WorkTasks"],
                            ["ProcedureDataSet", "0..*", "0..1", "ProcedureDataSet", "WorkTask"],
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "WorkTasks"],
                            ["TroubleOrder", "0..1", "0..*", "TroubleOrder", "WorkTask"],
                            ["OldAsset", "0..*", "0..*", "Asset", "ReplacementWorkTasks"],
                            ["MaterialItems", "0..*", "0..1", "MaterialItem", "WorkTask"],
                            ["Assets", "0..*", "0..*", "Asset", "WorkTasks"],
                            ["Work", "1", "0..*", "Work", "WorkTasks"]
                        ]
                    )
                );
            }
        }

        /**
         * Maintenance work task.
         *
         * Costs associated with this are considered preventive maintenance (PM) costs.
         *
         */
        class MaintenanceWorkTask extends WorkTask
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MaintenanceWorkTask;
                if (null == bucket)
                   cim_data.MaintenanceWorkTask = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaintenanceWorkTask[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkTask.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceWorkTask";
                base.parse_attribute (/<cim:MaintenanceWorkTask.breakerMaintenanceKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "breakerMaintenanceKind", sub, context);
                base.parse_attribute (/<cim:MaintenanceWorkTask.transformerMaintenanceKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "transformerMaintenanceKind", sub, context);
                let bucket = context.parsed.MaintenanceWorkTask;
                if (null == bucket)
                   context.parsed.MaintenanceWorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkTask.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "MaintenanceWorkTask", "breakerMaintenanceKind", "breakerMaintenanceKind", fields);
                base.export_attribute (obj, "MaintenanceWorkTask", "transformerMaintenanceKind", "transformerMaintenanceKind", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaintenanceWorkTask_collapse" aria-expanded="true" aria-controls="MaintenanceWorkTask_collapse" style="margin-left: 10px;">MaintenanceWorkTask</a></legend>
                    <div id="MaintenanceWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkTask.prototype.template.call (this) +
                    `
                    {{#breakerMaintenanceKind}}<div><b>breakerMaintenanceKind</b>: {{breakerMaintenanceKind}}</div>{{/breakerMaintenanceKind}}
                    {{#transformerMaintenanceKind}}<div><b>transformerMaintenanceKind</b>: {{transformerMaintenanceKind}}</div>{{/transformerMaintenanceKind}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["breakerMaintenanceKindBreakerMaintenanceKind"] = [{ id: '', selected: (!obj["breakerMaintenanceKind"])}]; for (let property in BreakerMaintenanceKind) obj["breakerMaintenanceKindBreakerMaintenanceKind"].push ({ id: property, selected: obj["breakerMaintenanceKind"] && obj["breakerMaintenanceKind"].endsWith ('.' + property)});
                obj["transformerMaintenanceKindTransformerMaintenanceKind"] = [{ id: '', selected: (!obj["transformerMaintenanceKind"])}]; for (let property in TransformerMaintenanceKind) obj["transformerMaintenanceKindTransformerMaintenanceKind"].push ({ id: property, selected: obj["transformerMaintenanceKind"] && obj["transformerMaintenanceKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["breakerMaintenanceKindBreakerMaintenanceKind"];
                delete obj["transformerMaintenanceKindTransformerMaintenanceKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaintenanceWorkTask_collapse" aria-expanded="true" aria-controls="{{id}}_MaintenanceWorkTask_collapse" style="margin-left: 10px;">MaintenanceWorkTask</a></legend>
                    <div id="{{id}}_MaintenanceWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkTask.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakerMaintenanceKind'>breakerMaintenanceKind: </label><div class='col-sm-8'><select id='{{id}}_breakerMaintenanceKind' class='form-control custom-select'>{{#breakerMaintenanceKindBreakerMaintenanceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/breakerMaintenanceKindBreakerMaintenanceKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transformerMaintenanceKind'>transformerMaintenanceKind: </label><div class='col-sm-8'><select id='{{id}}_transformerMaintenanceKind' class='form-control custom-select'>{{#transformerMaintenanceKindTransformerMaintenanceKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/transformerMaintenanceKindTransformerMaintenanceKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MaintenanceWorkTask" };
                super.submit (id, obj);
                temp = BreakerMaintenanceKind[document.getElementById (id + "_breakerMaintenanceKind").value]; if (temp) obj["breakerMaintenanceKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#BreakerMaintenanceKind." + temp; else delete obj["breakerMaintenanceKind"];
                temp = TransformerMaintenanceKind[document.getElementById (id + "_transformerMaintenanceKind").value]; if (temp) obj["transformerMaintenanceKind"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#TransformerMaintenanceKind." + temp; else delete obj["transformerMaintenanceKind"];

                return (obj);
            }
        }

        /**
         * Work task for asset repair.
         *
         * Costs associated with this are considered corrective maintenance (CM) costs.
         *
         */
        class RepairWorkTask extends WorkTask
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.RepairWorkTask;
                if (null == bucket)
                   cim_data.RepairWorkTask = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RepairWorkTask[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkTask.prototype.parse.call (this, context, sub);
                obj.cls = "RepairWorkTask";
                base.parse_element (/<cim:RepairWorkTask.emergency>([\s\S]*?)<\/cim:RepairWorkTask.emergency>/g, obj, "emergency", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:RepairWorkTask.BreakerRepairItem\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BreakerRepairItem", sub, context);
                let bucket = context.parsed.RepairWorkTask;
                if (null == bucket)
                   context.parsed.RepairWorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkTask.prototype.export.call (this, obj, false);

                base.export_element (obj, "RepairWorkTask", "emergency", "emergency",  base.from_boolean, fields);
                base.export_attributes (obj, "RepairWorkTask", "BreakerRepairItem", "BreakerRepairItem", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RepairWorkTask_collapse" aria-expanded="true" aria-controls="RepairWorkTask_collapse" style="margin-left: 10px;">RepairWorkTask</a></legend>
                    <div id="RepairWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkTask.prototype.template.call (this) +
                    `
                    {{#emergency}}<div><b>emergency</b>: {{emergency}}</div>{{/emergency}}
                    {{#BreakerRepairItem}}<div><b>BreakerRepairItem</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/BreakerRepairItem}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["BreakerRepairItem"]) obj["BreakerRepairItem_string"] = obj["BreakerRepairItem"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["BreakerRepairItem_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RepairWorkTask_collapse" aria-expanded="true" aria-controls="{{id}}_RepairWorkTask_collapse" style="margin-left: 10px;">RepairWorkTask</a></legend>
                    <div id="{{id}}_RepairWorkTask_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkTask.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_emergency'>emergency: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_emergency' class='form-check-input' type='checkbox'{{#emergency}} checked{{/emergency}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BreakerRepairItem'>BreakerRepairItem: </label><div class='col-sm-8'><input id='{{id}}_BreakerRepairItem' class='form-control' type='text'{{#BreakerRepairItem}} value='{{BreakerRepairItem_string}}'{{/BreakerRepairItem}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "RepairWorkTask" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_emergency").checked; if (temp) obj["emergency"] = true;
                temp = document.getElementById (id + "_BreakerRepairItem").value; if ("" !== temp) obj["BreakerRepairItem"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BreakerRepairItem", "0..*", "0..*", "RepairItem", "RepairWorkTask"]
                        ]
                    )
                );
            }
        }

        /**
         * Location where to perform maintenance work.
         *
         */
        class MaintenanceLocation extends WorkLocation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.MaintenanceLocation;
                if (null == bucket)
                   cim_data.MaintenanceLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MaintenanceLocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceLocation";
                base.parse_element (/<cim:MaintenanceLocation.block>([\s\S]*?)<\/cim:MaintenanceLocation.block>/g, obj, "block", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.lot>([\s\S]*?)<\/cim:MaintenanceLocation.lot>/g, obj, "lot", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.nearestIntersection>([\s\S]*?)<\/cim:MaintenanceLocation.nearestIntersection>/g, obj, "nearestIntersection", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.subdivision>([\s\S]*?)<\/cim:MaintenanceLocation.subdivision>/g, obj, "subdivision", base.to_string, sub, context);
                let bucket = context.parsed.MaintenanceLocation;
                if (null == bucket)
                   context.parsed.MaintenanceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaintenanceLocation", "block", "block",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "lot", "lot",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "nearestIntersection", "nearestIntersection",  base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "subdivision", "subdivision",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MaintenanceLocation_collapse" aria-expanded="true" aria-controls="MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="MaintenanceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.template.call (this) +
                    `
                    {{#block}}<div><b>block</b>: {{block}}</div>{{/block}}
                    {{#lot}}<div><b>lot</b>: {{lot}}</div>{{/lot}}
                    {{#nearestIntersection}}<div><b>nearestIntersection</b>: {{nearestIntersection}}</div>{{/nearestIntersection}}
                    {{#subdivision}}<div><b>subdivision</b>: {{subdivision}}</div>{{/subdivision}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MaintenanceLocation_collapse" aria-expanded="true" aria-controls="{{id}}_MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="{{id}}_MaintenanceLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_block'>block: </label><div class='col-sm-8'><input id='{{id}}_block' class='form-control' type='text'{{#block}} value='{{block}}'{{/block}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lot'>lot: </label><div class='col-sm-8'><input id='{{id}}_lot' class='form-control' type='text'{{#lot}} value='{{lot}}'{{/lot}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nearestIntersection'>nearestIntersection: </label><div class='col-sm-8'><input id='{{id}}_nearestIntersection' class='form-control' type='text'{{#nearestIntersection}} value='{{nearestIntersection}}'{{/nearestIntersection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subdivision'>subdivision: </label><div class='col-sm-8'><input id='{{id}}_subdivision' class='form-control' type='text'{{#subdivision}} value='{{subdivision}}'{{/subdivision}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "MaintenanceLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_block").value; if ("" !== temp) obj["block"] = temp;
                temp = document.getElementById (id + "_lot").value; if ("" !== temp) obj["lot"] = temp;
                temp = document.getElementById (id + "_nearestIntersection").value; if ("" !== temp) obj["nearestIntersection"] = temp;
                temp = document.getElementById (id + "_subdivision").value; if ("" !== temp) obj["subdivision"] = temp;

                return (obj);
            }
        }

        /**
         * Description of location internal to a building.
         *
         */
        class InternalLocation extends WorkLocation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.InternalLocation;
                if (null == bucket)
                   cim_data.InternalLocation = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InternalLocation[obj.id];
            }

            parse (context, sub)
            {
                let obj = WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "InternalLocation";
                base.parse_element (/<cim:InternalLocation.buildingName>([\s\S]*?)<\/cim:InternalLocation.buildingName>/g, obj, "buildingName", base.to_string, sub, context);
                base.parse_element (/<cim:InternalLocation.buildingNumber>([\s\S]*?)<\/cim:InternalLocation.buildingNumber>/g, obj, "buildingNumber", base.to_string, sub, context);
                base.parse_element (/<cim:InternalLocation.floor>([\s\S]*?)<\/cim:InternalLocation.floor>/g, obj, "floor", base.to_string, sub, context);
                base.parse_element (/<cim:InternalLocation.roomNumber>([\s\S]*?)<\/cim:InternalLocation.roomNumber>/g, obj, "roomNumber", base.to_string, sub, context);
                let bucket = context.parsed.InternalLocation;
                if (null == bucket)
                   context.parsed.InternalLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "InternalLocation", "buildingName", "buildingName",  base.from_string, fields);
                base.export_element (obj, "InternalLocation", "buildingNumber", "buildingNumber",  base.from_string, fields);
                base.export_element (obj, "InternalLocation", "floor", "floor",  base.from_string, fields);
                base.export_element (obj, "InternalLocation", "roomNumber", "roomNumber",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#InternalLocation_collapse" aria-expanded="true" aria-controls="InternalLocation_collapse" style="margin-left: 10px;">InternalLocation</a></legend>
                    <div id="InternalLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.template.call (this) +
                    `
                    {{#buildingName}}<div><b>buildingName</b>: {{buildingName}}</div>{{/buildingName}}
                    {{#buildingNumber}}<div><b>buildingNumber</b>: {{buildingNumber}}</div>{{/buildingNumber}}
                    {{#floor}}<div><b>floor</b>: {{floor}}</div>{{/floor}}
                    {{#roomNumber}}<div><b>roomNumber</b>: {{roomNumber}}</div>{{/roomNumber}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_InternalLocation_collapse" aria-expanded="true" aria-controls="{{id}}_InternalLocation_collapse" style="margin-left: 10px;">InternalLocation</a></legend>
                    <div id="{{id}}_InternalLocation_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_buildingName'>buildingName: </label><div class='col-sm-8'><input id='{{id}}_buildingName' class='form-control' type='text'{{#buildingName}} value='{{buildingName}}'{{/buildingName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_buildingNumber'>buildingNumber: </label><div class='col-sm-8'><input id='{{id}}_buildingNumber' class='form-control' type='text'{{#buildingNumber}} value='{{buildingNumber}}'{{/buildingNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_floor'>floor: </label><div class='col-sm-8'><input id='{{id}}_floor' class='form-control' type='text'{{#floor}} value='{{floor}}'{{/floor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_roomNumber'>roomNumber: </label><div class='col-sm-8'><input id='{{id}}_roomNumber' class='form-control' type='text'{{#roomNumber}} value='{{roomNumber}}'{{/roomNumber}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "InternalLocation" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_buildingName").value; if ("" !== temp) obj["buildingName"] = temp;
                temp = document.getElementById (id + "_buildingNumber").value; if ("" !== temp) obj["buildingNumber"] = temp;
                temp = document.getElementById (id + "_floor").value; if ("" !== temp) obj["floor"] = temp;
                temp = document.getElementById (id + "_roomNumber").value; if ("" !== temp) obj["roomNumber"] = temp;

                return (obj);
            }
        }

        return (
            {
                Tool: Tool,
                Vehicle: Vehicle,
                WorkAsset: WorkAsset,
                MaterialItem: MaterialItem,
                WorkTask: WorkTask,
                RepairWorkTask: RepairWorkTask,
                VehicleUsageKind: VehicleUsageKind,
                WorkActivityRecord: WorkActivityRecord,
                BaseWork: BaseWork,
                WorkTimeScheduleKind: WorkTimeScheduleKind,
                MaintenanceWorkTask: MaintenanceWorkTask,
                BreakerMaintenanceKind: BreakerMaintenanceKind,
                WorkStatusKind: WorkStatusKind,
                InternalLocation: InternalLocation,
                Work: Work,
                BreakerRepairItemKind: BreakerRepairItemKind,
                WorkKind: WorkKind,
                WorkTimeSchedule: WorkTimeSchedule,
                MaintenanceLocation: MaintenanceLocation,
                WorkLocation: WorkLocation,
                TransformerRepairItemKind: TransformerRepairItemKind,
                TransformerMaintenanceKind: TransformerMaintenanceKind,
                WorkTaskKind: WorkTaskKind,
                RepairItem: RepairItem
            }
        );
    }
);