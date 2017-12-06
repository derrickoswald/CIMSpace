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
        var WorkStatusKind =
        {
            waitingOnApproval: "waitingOnApproval",
            approved: "approved",
            cancelled: "cancelled",
            waitingToBeScheduled: "waitingToBeScheduled",
            scheduled: "scheduled",
            waitingOnMaterial: "waitingOnMaterial",
            inProgress: "inProgress",
            completed: "completed",
            closed: "closed",
            dispatched: "dispatched",
            enroute: "enroute",
            onSite: "onSite"
        };
        Object.freeze (WorkStatusKind);

        /**
         * Kind of work schedule.
         *
         */
        var WorkTimeScheduleKind =
        {
            estimate: "estimate",
            request: "request",
            actual: "actual",
            earliest: "earliest",
            latest: "latest"
        };
        Object.freeze (WorkTimeScheduleKind);

        var WorkTaskKind =
        {
            install: "install",
            remove: "remove",
            exchange: "exchange",
            investigate: "investigate"
        };
        Object.freeze (WorkTaskKind);

        /**
         * Kind of work.
         *
         */
        var WorkKind =
        {
            construction: "construction",
            inspection: "inspection",
            maintenance: "maintenance",
            repair: "repair",
            test: "test",
            service: "service",
            disconnect: "disconnect",
            reconnect: "reconnect",
            connect: "connect",
            other: "other"
        };
        Object.freeze (WorkKind);

        /**
         * Usage of a vehicle.
         *
         */
        var VehicleUsageKind =
        {
            crew: "crew",
            user: "user",
            contractor: "contractor",
            other: "other"
        };
        Object.freeze (VehicleUsageKind);

        /**
         * Time schedule specific to work.
         *
         */
        class WorkTimeSchedule extends Common.TimeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkTimeSchedule;
                if (null == bucket)
                   cim_data.WorkTimeSchedule = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkTimeSchedule[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.TimeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTimeSchedule";
                base.parse_attribute (/<cim:WorkTimeSchedule.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:WorkTimeSchedule.BaseWork\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseWork", sub, context);

                var bucket = context.parsed.WorkTimeSchedule;
                if (null == bucket)
                   context.parsed.WorkTimeSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.TimeSchedule.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkTimeSchedule", "kind", base.from_string, fields);
                base.export_attribute (obj, "WorkTimeSchedule", "BaseWork", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="WorkTimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#BaseWork}}<div><b>BaseWork</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseWork}}&quot;);})'>{{BaseWork}}</a></div>{{/BaseWork}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkTimeScheduleKind = []; if (!obj.kind) obj.WorkTimeScheduleKind.push ({ id: '', selected: true}); for (var property in WorkTimeScheduleKind) obj.WorkTimeScheduleKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTimeScheduleKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="WorkTimeSchedule_collapse" style="margin-left: 10px;">WorkTimeSchedule</a></legend>
                    <div id="WorkTimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.TimeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#WorkTimeScheduleKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkTimeScheduleKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BaseWork'>BaseWork: </label><div class='col-sm-8'><input id='BaseWork' class='form-control' type='text'{{#BaseWork}} value='{{BaseWork}}'{{/BaseWork}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.BaseWork;
                if (null == bucket)
                   cim_data.BaseWork = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BaseWork[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "BaseWork";
                base.parse_attribute (/<cim:BaseWork.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:BaseWork.priority>([\s\S]*?)<\/cim:BaseWork.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:BaseWork.statusKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "statusKind", sub, context);
                base.parse_attribute (/<cim:BaseWork.WorkLocation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkLocation", sub, context);

                var bucket = context.parsed.BaseWork;
                if (null == bucket)
                   context.parsed.BaseWork = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "BaseWork", "kind", base.from_string, fields);
                base.export_element (obj, "BaseWork", "priority", base.from_string, fields);
                base.export_element (obj, "BaseWork", "statusKind", base.from_string, fields);
                base.export_attribute (obj, "BaseWork", "WorkLocation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseWork_collapse" aria-expanded="true" aria-controls="BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="BaseWork_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#statusKind}}<div><b>statusKind</b>: {{statusKind}}</div>{{/statusKind}}
                    {{#WorkLocation}}<div><b>WorkLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkLocation}}&quot;);})'>{{WorkLocation}}</a></div>{{/WorkLocation}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkKind = []; if (!obj.kind) obj.WorkKind.push ({ id: '', selected: true}); for (var property in WorkKind) obj.WorkKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                obj.WorkStatusKind = []; if (!obj.statusKind) obj.WorkStatusKind.push ({ id: '', selected: true}); for (var property in WorkStatusKind) obj.WorkStatusKind.push ({ id: property, selected: obj.statusKind && obj.statusKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkKind;
                delete obj.WorkStatusKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BaseWork_collapse" aria-expanded="true" aria-controls="BaseWork_collapse" style="margin-left: 10px;">BaseWork</a></legend>
                    <div id="BaseWork_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#WorkKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='statusKind'>statusKind: </label><div class='col-sm-8'><select id='statusKind' class='form-control'>{{#WorkStatusKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkStatusKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkLocation'>WorkLocation: </label><div class='col-sm-8'><input id='WorkLocation' class='form-control' type='text'{{#WorkLocation}} value='{{WorkLocation}}'{{/WorkLocation}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.WorkLocation;
                if (null == bucket)
                   cim_data.WorkLocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkLocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Location.prototype.parse.call (this, context, sub);
                obj.cls = "WorkLocation";
                base.parse_attribute (/<cim:WorkLocation.OneCallRequest\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OneCallRequest", sub, context);

                var bucket = context.parsed.WorkLocation;
                if (null == bucket)
                   context.parsed.WorkLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Location.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkLocation", "OneCallRequest", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkLocation_collapse" aria-expanded="true" aria-controls="WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="WorkLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.template.call (this) +
                    `
                    {{#OneCallRequest}}<div><b>OneCallRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OneCallRequest}}&quot;);})'>{{OneCallRequest}}</a></div>{{/OneCallRequest}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkLocation_collapse" aria-expanded="true" aria-controls="WorkLocation_collapse" style="margin-left: 10px;">WorkLocation</a></legend>
                    <div id="WorkLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Common.Location.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OneCallRequest'>OneCallRequest: </label><div class='col-sm-8'><input id='OneCallRequest' class='form-control' type='text'{{#OneCallRequest}} value='{{OneCallRequest}}'{{/OneCallRequest}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MaterialItem;
                if (null == bucket)
                   cim_data.MaterialItem = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MaterialItem[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MaterialItem";
                base.parse_element (/<cim:MaterialItem.quantity>([\s\S]*?)<\/cim:MaterialItem.quantity>/g, obj, "quantity", base.to_string, sub, context);
                base.parse_attribute (/<cim:MaterialItem.TypeMaterial\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TypeMaterial", sub, context);
                base.parse_attribute (/<cim:MaterialItem.WorkTask\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTask", sub, context);

                var bucket = context.parsed.MaterialItem;
                if (null == bucket)
                   context.parsed.MaterialItem = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaterialItem", "quantity", base.from_string, fields);
                base.export_attribute (obj, "MaterialItem", "TypeMaterial", fields);
                base.export_attribute (obj, "MaterialItem", "WorkTask", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaterialItem_collapse" aria-expanded="true" aria-controls="MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="MaterialItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
                    {{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);})'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
                    {{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaterialItem_collapse" aria-expanded="true" aria-controls="MaterialItem_collapse" style="margin-left: 10px;">MaterialItem</a></legend>
                    <div id="MaterialItem_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='quantity'>quantity: </label><div class='col-sm-8'><input id='quantity' class='form-control' type='text'{{#quantity}} value='{{quantity}}'{{/quantity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TypeMaterial'>TypeMaterial: </label><div class='col-sm-8'><input id='TypeMaterial' class='form-control' type='text'{{#TypeMaterial}} value='{{TypeMaterial}}'{{/TypeMaterial}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkTask'>WorkTask: </label><div class='col-sm-8'><input id='WorkTask' class='form-control' type='text'{{#WorkTask}} value='{{WorkTask}}'{{/WorkTask}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.WorkAsset;
                if (null == bucket)
                   cim_data.WorkAsset = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkAsset[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Assets.Asset.prototype.parse.call (this, context, sub);
                obj.cls = "WorkAsset";
                base.parse_attribute (/<cim:WorkAsset.Crew\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Crew", sub, context);

                var bucket = context.parsed.WorkAsset;
                if (null == bucket)
                   context.parsed.WorkAsset = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Assets.Asset.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WorkAsset", "Crew", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkAsset_collapse" aria-expanded="true" aria-controls="WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="WorkAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.template.call (this) +
                    `
                    {{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);})'>{{Crew}}</a></div>{{/Crew}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkAsset_collapse" aria-expanded="true" aria-controls="WorkAsset_collapse" style="margin-left: 10px;">WorkAsset</a></legend>
                    <div id="WorkAsset_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Assets.Asset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Crew'>Crew: </label><div class='col-sm-8'><input id='Crew' class='form-control' type='text'{{#Crew}} value='{{Crew}}'{{/Crew}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        class WorkTask extends BaseWork
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkTask;
                if (null == bucket)
                   cim_data.WorkTask = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkTask[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTask";
                base.parse_element (/<cim:WorkTask.instruction>([\s\S]*?)<\/cim:WorkTask.instruction>/g, obj, "instruction", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTask.schedOverride>([\s\S]*?)<\/cim:WorkTask.schedOverride>/g, obj, "schedOverride", base.to_string, sub, context);
                base.parse_attribute (/<cim:WorkTask.taskKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "taskKind", sub, context);
                base.parse_element (/<cim:WorkTask.crewETA>([\s\S]*?)<\/cim:WorkTask.crewETA>/g, obj, "crewETA", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:WorkTask.Work\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Work", sub, context);
                base.parse_attribute (/<cim:WorkTask.OldAsset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OldAsset", sub, context);
                base.parse_attribute (/<cim:WorkTask.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);

                var bucket = context.parsed.WorkTask;
                if (null == bucket)
                   context.parsed.WorkTask = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "WorkTask", "instruction", base.from_string, fields);
                base.export_element (obj, "WorkTask", "schedOverride", base.from_string, fields);
                base.export_element (obj, "WorkTask", "taskKind", base.from_string, fields);
                base.export_element (obj, "WorkTask", "crewETA", base.from_datetime, fields);
                base.export_attribute (obj, "WorkTask", "Work", fields);
                base.export_attribute (obj, "WorkTask", "OldAsset", fields);
                base.export_attribute (obj, "WorkTask", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkTask_collapse" aria-expanded="true" aria-controls="WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="WorkTask_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#instruction}}<div><b>instruction</b>: {{instruction}}</div>{{/instruction}}
                    {{#schedOverride}}<div><b>schedOverride</b>: {{schedOverride}}</div>{{/schedOverride}}
                    {{#taskKind}}<div><b>taskKind</b>: {{taskKind}}</div>{{/taskKind}}
                    {{#crewETA}}<div><b>crewETA</b>: {{crewETA}}</div>{{/crewETA}}
                    {{#Work}}<div><b>Work</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Work}}&quot;);})'>{{Work}}</a></div>{{/Work}}
                    {{#OldAsset}}<div><b>OldAsset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OldAsset}}&quot;);})'>{{OldAsset}}</a></div>{{/OldAsset}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);})'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WorkTaskKind = []; if (!obj.taskKind) obj.WorkTaskKind.push ({ id: '', selected: true}); for (var property in WorkTaskKind) obj.WorkTaskKind.push ({ id: property, selected: obj.taskKind && obj.taskKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WorkTaskKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WorkTask_collapse" aria-expanded="true" aria-controls="WorkTask_collapse" style="margin-left: 10px;">WorkTask</a></legend>
                    <div id="WorkTask_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='instruction'>instruction: </label><div class='col-sm-8'><input id='instruction' class='form-control' type='text'{{#instruction}} value='{{instruction}}'{{/instruction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='schedOverride'>schedOverride: </label><div class='col-sm-8'><input id='schedOverride' class='form-control' type='text'{{#schedOverride}} value='{{schedOverride}}'{{/schedOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='taskKind'>taskKind: </label><div class='col-sm-8'><select id='taskKind' class='form-control'>{{#WorkTaskKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WorkTaskKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='crewETA'>crewETA: </label><div class='col-sm-8'><input id='crewETA' class='form-control' type='text'{{#crewETA}} value='{{crewETA}}'{{/crewETA}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Work'>Work: </label><div class='col-sm-8'><input id='Work' class='form-control' type='text'{{#Work}} value='{{Work}}'{{/Work}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OldAsset'>OldAsset: </label><div class='col-sm-8'><input id='OldAsset' class='form-control' type='text'{{#OldAsset}} value='{{OldAsset}}'{{/OldAsset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Work;
                if (null == bucket)
                   cim_data.Work = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Work[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = BaseWork.prototype.parse.call (this, context, sub);
                obj.cls = "Work";
                base.parse_element (/<cim:Work.requestDateTime>([\s\S]*?)<\/cim:Work.requestDateTime>/g, obj, "requestDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Work.WorkBillingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkBillingInfo", sub, context);
                base.parse_attribute (/<cim:Work.Project\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Project", sub, context);
                base.parse_attribute (/<cim:Work.BusinessCase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusinessCase", sub, context);
                base.parse_attribute (/<cim:Work.ErpProjectAccounting\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ErpProjectAccounting", sub, context);

                var bucket = context.parsed.Work;
                if (null == bucket)
                   context.parsed.Work = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = BaseWork.prototype.export.call (this, obj, false);

                base.export_element (obj, "Work", "requestDateTime", base.from_datetime, fields);
                base.export_attribute (obj, "Work", "WorkBillingInfo", fields);
                base.export_attribute (obj, "Work", "Project", fields);
                base.export_attribute (obj, "Work", "BusinessCase", fields);
                base.export_attribute (obj, "Work", "ErpProjectAccounting", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Work_collapse" aria-expanded="true" aria-controls="Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="Work_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.template.call (this) +
                    `
                    {{#requestDateTime}}<div><b>requestDateTime</b>: {{requestDateTime}}</div>{{/requestDateTime}}
                    {{#WorkBillingInfo}}<div><b>WorkBillingInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkBillingInfo}}&quot;);})'>{{WorkBillingInfo}}</a></div>{{/WorkBillingInfo}}
                    {{#Project}}<div><b>Project</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Project}}&quot;);})'>{{Project}}</a></div>{{/Project}}
                    {{#BusinessCase}}<div><b>BusinessCase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusinessCase}}&quot;);})'>{{BusinessCase}}</a></div>{{/BusinessCase}}
                    {{#ErpProjectAccounting}}<div><b>ErpProjectAccounting</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ErpProjectAccounting}}&quot;);})'>{{ErpProjectAccounting}}</a></div>{{/ErpProjectAccounting}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Work_collapse" aria-expanded="true" aria-controls="Work_collapse" style="margin-left: 10px;">Work</a></legend>
                    <div id="Work_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + BaseWork.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='requestDateTime'>requestDateTime: </label><div class='col-sm-8'><input id='requestDateTime' class='form-control' type='text'{{#requestDateTime}} value='{{requestDateTime}}'{{/requestDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='WorkBillingInfo'>WorkBillingInfo: </label><div class='col-sm-8'><input id='WorkBillingInfo' class='form-control' type='text'{{#WorkBillingInfo}} value='{{WorkBillingInfo}}'{{/WorkBillingInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Project'>Project: </label><div class='col-sm-8'><input id='Project' class='form-control' type='text'{{#Project}} value='{{Project}}'{{/Project}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BusinessCase'>BusinessCase: </label><div class='col-sm-8'><input id='BusinessCase' class='form-control' type='text'{{#BusinessCase}} value='{{BusinessCase}}'{{/BusinessCase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ErpProjectAccounting'>ErpProjectAccounting: </label><div class='col-sm-8'><input id='ErpProjectAccounting' class='form-control' type='text'{{#ErpProjectAccounting}} value='{{ErpProjectAccounting}}'{{/ErpProjectAccounting}}></div></div>
                    </div>
                    <fieldset>
                    `
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
                this._id = template.id;
                var bucket = cim_data.MaintenanceLocation;
                if (null == bucket)
                   cim_data.MaintenanceLocation = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MaintenanceLocation[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkLocation.prototype.parse.call (this, context, sub);
                obj.cls = "MaintenanceLocation";
                base.parse_element (/<cim:MaintenanceLocation.block>([\s\S]*?)<\/cim:MaintenanceLocation.block>/g, obj, "block", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.lot>([\s\S]*?)<\/cim:MaintenanceLocation.lot>/g, obj, "lot", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.nearestIntersection>([\s\S]*?)<\/cim:MaintenanceLocation.nearestIntersection>/g, obj, "nearestIntersection", base.to_string, sub, context);
                base.parse_element (/<cim:MaintenanceLocation.subdivision>([\s\S]*?)<\/cim:MaintenanceLocation.subdivision>/g, obj, "subdivision", base.to_string, sub, context);

                var bucket = context.parsed.MaintenanceLocation;
                if (null == bucket)
                   context.parsed.MaintenanceLocation = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkLocation.prototype.export.call (this, obj, false);

                base.export_element (obj, "MaintenanceLocation", "block", base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "lot", base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "nearestIntersection", base.from_string, fields);
                base.export_element (obj, "MaintenanceLocation", "subdivision", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaintenanceLocation_collapse" aria-expanded="true" aria-controls="MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="MaintenanceLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.template.call (this) +
                    `
                    {{#block}}<div><b>block</b>: {{block}}</div>{{/block}}
                    {{#lot}}<div><b>lot</b>: {{lot}}</div>{{/lot}}
                    {{#nearestIntersection}}<div><b>nearestIntersection</b>: {{nearestIntersection}}</div>{{/nearestIntersection}}
                    {{#subdivision}}<div><b>subdivision</b>: {{subdivision}}</div>{{/subdivision}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MaintenanceLocation_collapse" aria-expanded="true" aria-controls="MaintenanceLocation_collapse" style="margin-left: 10px;">MaintenanceLocation</a></legend>
                    <div id="MaintenanceLocation_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkLocation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='block'>block: </label><div class='col-sm-8'><input id='block' class='form-control' type='text'{{#block}} value='{{block}}'{{/block}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lot'>lot: </label><div class='col-sm-8'><input id='lot' class='form-control' type='text'{{#lot}} value='{{lot}}'{{/lot}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nearestIntersection'>nearestIntersection: </label><div class='col-sm-8'><input id='nearestIntersection' class='form-control' type='text'{{#nearestIntersection}} value='{{nearestIntersection}}'{{/nearestIntersection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subdivision'>subdivision: </label><div class='col-sm-8'><input id='subdivision' class='form-control' type='text'{{#subdivision}} value='{{subdivision}}'{{/subdivision}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Vehicle;
                if (null == bucket)
                   cim_data.Vehicle = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Vehicle[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Vehicle";
                base.parse_element (/<cim:Vehicle.odometerReadDateTime>([\s\S]*?)<\/cim:Vehicle.odometerReadDateTime>/g, obj, "odometerReadDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:Vehicle.odometerReading>([\s\S]*?)<\/cim:Vehicle.odometerReading>/g, obj, "odometerReading", base.to_string, sub, context);
                base.parse_attribute (/<cim:Vehicle.usageKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "usageKind", sub, context);

                var bucket = context.parsed.Vehicle;
                if (null == bucket)
                   context.parsed.Vehicle = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Vehicle", "odometerReadDateTime", base.from_datetime, fields);
                base.export_element (obj, "Vehicle", "odometerReading", base.from_string, fields);
                base.export_element (obj, "Vehicle", "usageKind", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Vehicle_collapse" aria-expanded="true" aria-controls="Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="Vehicle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#odometerReadDateTime}}<div><b>odometerReadDateTime</b>: {{odometerReadDateTime}}</div>{{/odometerReadDateTime}}
                    {{#odometerReading}}<div><b>odometerReading</b>: {{odometerReading}}</div>{{/odometerReading}}
                    {{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.VehicleUsageKind = []; if (!obj.usageKind) obj.VehicleUsageKind.push ({ id: '', selected: true}); for (var property in VehicleUsageKind) obj.VehicleUsageKind.push ({ id: property, selected: obj.usageKind && obj.usageKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.VehicleUsageKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Vehicle_collapse" aria-expanded="true" aria-controls="Vehicle_collapse" style="margin-left: 10px;">Vehicle</a></legend>
                    <div id="Vehicle_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='odometerReadDateTime'>odometerReadDateTime: </label><div class='col-sm-8'><input id='odometerReadDateTime' class='form-control' type='text'{{#odometerReadDateTime}} value='{{odometerReadDateTime}}'{{/odometerReadDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='odometerReading'>odometerReading: </label><div class='col-sm-8'><input id='odometerReading' class='form-control' type='text'{{#odometerReading}} value='{{odometerReading}}'{{/odometerReading}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='usageKind'>usageKind: </label><div class='col-sm-8'><select id='usageKind' class='form-control'>{{#VehicleUsageKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/VehicleUsageKind}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                this._id = template.id;
                var bucket = cim_data.Tool;
                if (null == bucket)
                   cim_data.Tool = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Tool[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WorkAsset.prototype.parse.call (this, context, sub);
                obj.cls = "Tool";
                base.parse_element (/<cim:Tool.lastCalibrationDate>([\s\S]*?)<\/cim:Tool.lastCalibrationDate>/g, obj, "lastCalibrationDate", base.to_string, sub, context);

                var bucket = context.parsed.Tool;
                if (null == bucket)
                   context.parsed.Tool = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WorkAsset.prototype.export.call (this, obj, false);

                base.export_element (obj, "Tool", "lastCalibrationDate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tool_collapse" aria-expanded="true" aria-controls="Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="Tool_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.template.call (this) +
                    `
                    {{#lastCalibrationDate}}<div><b>lastCalibrationDate</b>: {{lastCalibrationDate}}</div>{{/lastCalibrationDate}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Tool_collapse" aria-expanded="true" aria-controls="Tool_collapse" style="margin-left: 10px;">Tool</a></legend>
                    <div id="Tool_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WorkAsset.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lastCalibrationDate'>lastCalibrationDate: </label><div class='col-sm-8'><input id='lastCalibrationDate' class='form-control' type='text'{{#lastCalibrationDate}} value='{{lastCalibrationDate}}'{{/lastCalibrationDate}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                Tool: Tool,
                Work: Work,
                Vehicle: Vehicle,
                WorkAsset: WorkAsset,
                WorkTimeSchedule: WorkTimeSchedule,
                MaintenanceLocation: MaintenanceLocation,
                WorkLocation: WorkLocation,
                MaterialItem: MaterialItem,
                WorkTask: WorkTask,
                BaseWork: BaseWork
            }
        );
    }
);