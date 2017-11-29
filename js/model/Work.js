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
        class WorkStatusKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkStatusKind;
                if (null == bucket)
                   cim_data.WorkStatusKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkStatusKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkStatusKind";
                base.parse_element (/<cim:WorkStatusKind.waitingOnApproval>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnApproval>/g, obj, "waitingOnApproval", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.approved>([\s\S]*?)<\/cim:WorkStatusKind.approved>/g, obj, "approved", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.cancelled>([\s\S]*?)<\/cim:WorkStatusKind.cancelled>/g, obj, "cancelled", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.waitingToBeScheduled>([\s\S]*?)<\/cim:WorkStatusKind.waitingToBeScheduled>/g, obj, "waitingToBeScheduled", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.scheduled>([\s\S]*?)<\/cim:WorkStatusKind.scheduled>/g, obj, "scheduled", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.waitingOnMaterial>([\s\S]*?)<\/cim:WorkStatusKind.waitingOnMaterial>/g, obj, "waitingOnMaterial", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.inProgress>([\s\S]*?)<\/cim:WorkStatusKind.inProgress>/g, obj, "inProgress", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.completed>([\s\S]*?)<\/cim:WorkStatusKind.completed>/g, obj, "completed", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.closed>([\s\S]*?)<\/cim:WorkStatusKind.closed>/g, obj, "closed", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.dispatched>([\s\S]*?)<\/cim:WorkStatusKind.dispatched>/g, obj, "dispatched", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.enroute>([\s\S]*?)<\/cim:WorkStatusKind.enroute>/g, obj, "enroute", base.to_string, sub, context);
                base.parse_element (/<cim:WorkStatusKind.onSite>([\s\S]*?)<\/cim:WorkStatusKind.onSite>/g, obj, "onSite", base.to_string, sub, context);

                var bucket = context.parsed.WorkStatusKind;
                if (null == bucket)
                   context.parsed.WorkStatusKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WorkStatusKind", "waitingOnApproval", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "approved", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "cancelled", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "waitingToBeScheduled", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "scheduled", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "waitingOnMaterial", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "inProgress", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "completed", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "closed", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "dispatched", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "enroute", base.from_string, fields);
                base.export_element (obj, "WorkStatusKind", "onSite", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WorkStatusKind_collapse" aria-expanded="true" aria-controls="WorkStatusKind_collapse">WorkStatusKind</a>
<div id="WorkStatusKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#waitingOnApproval}}<div><b>waitingOnApproval</b>: {{waitingOnApproval}}</div>{{/waitingOnApproval}}
{{#approved}}<div><b>approved</b>: {{approved}}</div>{{/approved}}
{{#cancelled}}<div><b>cancelled</b>: {{cancelled}}</div>{{/cancelled}}
{{#waitingToBeScheduled}}<div><b>waitingToBeScheduled</b>: {{waitingToBeScheduled}}</div>{{/waitingToBeScheduled}}
{{#scheduled}}<div><b>scheduled</b>: {{scheduled}}</div>{{/scheduled}}
{{#waitingOnMaterial}}<div><b>waitingOnMaterial</b>: {{waitingOnMaterial}}</div>{{/waitingOnMaterial}}
{{#inProgress}}<div><b>inProgress</b>: {{inProgress}}</div>{{/inProgress}}
{{#completed}}<div><b>completed</b>: {{completed}}</div>{{/completed}}
{{#closed}}<div><b>closed</b>: {{closed}}</div>{{/closed}}
{{#dispatched}}<div><b>dispatched</b>: {{dispatched}}</div>{{/dispatched}}
{{#enroute}}<div><b>enroute</b>: {{enroute}}</div>{{/enroute}}
{{#onSite}}<div><b>onSite</b>: {{onSite}}</div>{{/onSite}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:WorkTimeSchedule.kind>([\s\S]*?)<\/cim:WorkTimeSchedule.kind>/g, obj, "kind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#WorkTimeSchedule_collapse" aria-expanded="true" aria-controls="WorkTimeSchedule_collapse">WorkTimeSchedule</a>
<div id="WorkTimeSchedule_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.TimeSchedule.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#BaseWork}}<div><b>BaseWork</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseWork}}&quot;);})'>{{BaseWork}}</a></div>{{/BaseWork}}
</div>
`
                );
           }        }

        /**
         * Kind of work schedule.
         *
         */
        class WorkTimeScheduleKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkTimeScheduleKind;
                if (null == bucket)
                   cim_data.WorkTimeScheduleKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkTimeScheduleKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTimeScheduleKind";
                base.parse_element (/<cim:WorkTimeScheduleKind.estimate>([\s\S]*?)<\/cim:WorkTimeScheduleKind.estimate>/g, obj, "estimate", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTimeScheduleKind.request>([\s\S]*?)<\/cim:WorkTimeScheduleKind.request>/g, obj, "request", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTimeScheduleKind.actual>([\s\S]*?)<\/cim:WorkTimeScheduleKind.actual>/g, obj, "actual", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTimeScheduleKind.earliest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.earliest>/g, obj, "earliest", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTimeScheduleKind.latest>([\s\S]*?)<\/cim:WorkTimeScheduleKind.latest>/g, obj, "latest", base.to_string, sub, context);

                var bucket = context.parsed.WorkTimeScheduleKind;
                if (null == bucket)
                   context.parsed.WorkTimeScheduleKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WorkTimeScheduleKind", "estimate", base.from_string, fields);
                base.export_element (obj, "WorkTimeScheduleKind", "request", base.from_string, fields);
                base.export_element (obj, "WorkTimeScheduleKind", "actual", base.from_string, fields);
                base.export_element (obj, "WorkTimeScheduleKind", "earliest", base.from_string, fields);
                base.export_element (obj, "WorkTimeScheduleKind", "latest", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WorkTimeScheduleKind_collapse" aria-expanded="true" aria-controls="WorkTimeScheduleKind_collapse">WorkTimeScheduleKind</a>
<div id="WorkTimeScheduleKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#estimate}}<div><b>estimate</b>: {{estimate}}</div>{{/estimate}}
{{#request}}<div><b>request</b>: {{request}}</div>{{/request}}
{{#actual}}<div><b>actual</b>: {{actual}}</div>{{/actual}}
{{#earliest}}<div><b>earliest</b>: {{earliest}}</div>{{/earliest}}
{{#latest}}<div><b>latest</b>: {{latest}}</div>{{/latest}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:BaseWork.kind>([\s\S]*?)<\/cim:BaseWork.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:BaseWork.priority>([\s\S]*?)<\/cim:BaseWork.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_element (/<cim:BaseWork.statusKind>([\s\S]*?)<\/cim:BaseWork.statusKind>/g, obj, "statusKind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#BaseWork_collapse" aria-expanded="true" aria-controls="BaseWork_collapse">BaseWork</a>
<div id="BaseWork_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Document.prototype.template.call (this) +
`
{{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
{{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
{{#statusKind}}<div><b>statusKind</b>: {{statusKind}}</div>{{/statusKind}}
{{#WorkLocation}}<div><b>WorkLocation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkLocation}}&quot;);})'>{{WorkLocation}}</a></div>{{/WorkLocation}}
</div>
`
                );
           }        }

        class WorkTaskKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkTaskKind;
                if (null == bucket)
                   cim_data.WorkTaskKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkTaskKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkTaskKind";
                base.parse_element (/<cim:WorkTaskKind.install>([\s\S]*?)<\/cim:WorkTaskKind.install>/g, obj, "install", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTaskKind.remove>([\s\S]*?)<\/cim:WorkTaskKind.remove>/g, obj, "remove", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTaskKind.exchange>([\s\S]*?)<\/cim:WorkTaskKind.exchange>/g, obj, "exchange", base.to_string, sub, context);
                base.parse_element (/<cim:WorkTaskKind.investigate>([\s\S]*?)<\/cim:WorkTaskKind.investigate>/g, obj, "investigate", base.to_string, sub, context);

                var bucket = context.parsed.WorkTaskKind;
                if (null == bucket)
                   context.parsed.WorkTaskKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WorkTaskKind", "install", base.from_string, fields);
                base.export_element (obj, "WorkTaskKind", "remove", base.from_string, fields);
                base.export_element (obj, "WorkTaskKind", "exchange", base.from_string, fields);
                base.export_element (obj, "WorkTaskKind", "investigate", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WorkTaskKind_collapse" aria-expanded="true" aria-controls="WorkTaskKind_collapse">WorkTaskKind</a>
<div id="WorkTaskKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#install}}<div><b>install</b>: {{install}}</div>{{/install}}
{{#remove}}<div><b>remove</b>: {{remove}}</div>{{/remove}}
{{#exchange}}<div><b>exchange</b>: {{exchange}}</div>{{/exchange}}
{{#investigate}}<div><b>investigate</b>: {{investigate}}</div>{{/investigate}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#WorkLocation_collapse" aria-expanded="true" aria-controls="WorkLocation_collapse">WorkLocation</a>
<div id="WorkLocation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Location.prototype.template.call (this) +
`
{{#OneCallRequest}}<div><b>OneCallRequest</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OneCallRequest}}&quot;);})'>{{OneCallRequest}}</a></div>{{/OneCallRequest}}
</div>
`
                );
           }        }

        /**
         * Kind of work.
         *
         */
        class WorkKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WorkKind;
                if (null == bucket)
                   cim_data.WorkKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WorkKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WorkKind";
                base.parse_element (/<cim:WorkKind.construction>([\s\S]*?)<\/cim:WorkKind.construction>/g, obj, "construction", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.inspection>([\s\S]*?)<\/cim:WorkKind.inspection>/g, obj, "inspection", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.maintenance>([\s\S]*?)<\/cim:WorkKind.maintenance>/g, obj, "maintenance", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.repair>([\s\S]*?)<\/cim:WorkKind.repair>/g, obj, "repair", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.test>([\s\S]*?)<\/cim:WorkKind.test>/g, obj, "test", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.service>([\s\S]*?)<\/cim:WorkKind.service>/g, obj, "service", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.disconnect>([\s\S]*?)<\/cim:WorkKind.disconnect>/g, obj, "disconnect", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.reconnect>([\s\S]*?)<\/cim:WorkKind.reconnect>/g, obj, "reconnect", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.connect>([\s\S]*?)<\/cim:WorkKind.connect>/g, obj, "connect", base.to_string, sub, context);
                base.parse_element (/<cim:WorkKind.other>([\s\S]*?)<\/cim:WorkKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.WorkKind;
                if (null == bucket)
                   context.parsed.WorkKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WorkKind", "construction", base.from_string, fields);
                base.export_element (obj, "WorkKind", "inspection", base.from_string, fields);
                base.export_element (obj, "WorkKind", "maintenance", base.from_string, fields);
                base.export_element (obj, "WorkKind", "repair", base.from_string, fields);
                base.export_element (obj, "WorkKind", "test", base.from_string, fields);
                base.export_element (obj, "WorkKind", "service", base.from_string, fields);
                base.export_element (obj, "WorkKind", "disconnect", base.from_string, fields);
                base.export_element (obj, "WorkKind", "reconnect", base.from_string, fields);
                base.export_element (obj, "WorkKind", "connect", base.from_string, fields);
                base.export_element (obj, "WorkKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#WorkKind_collapse" aria-expanded="true" aria-controls="WorkKind_collapse">WorkKind</a>
<div id="WorkKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#construction}}<div><b>construction</b>: {{construction}}</div>{{/construction}}
{{#inspection}}<div><b>inspection</b>: {{inspection}}</div>{{/inspection}}
{{#maintenance}}<div><b>maintenance</b>: {{maintenance}}</div>{{/maintenance}}
{{#repair}}<div><b>repair</b>: {{repair}}</div>{{/repair}}
{{#test}}<div><b>test</b>: {{test}}</div>{{/test}}
{{#service}}<div><b>service</b>: {{service}}</div>{{/service}}
{{#disconnect}}<div><b>disconnect</b>: {{disconnect}}</div>{{/disconnect}}
{{#reconnect}}<div><b>reconnect</b>: {{reconnect}}</div>{{/reconnect}}
{{#connect}}<div><b>connect</b>: {{connect}}</div>{{/connect}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#MaterialItem_collapse" aria-expanded="true" aria-controls="MaterialItem_collapse">MaterialItem</a>
<div id="MaterialItem_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#quantity}}<div><b>quantity</b>: {{quantity}}</div>{{/quantity}}
{{#TypeMaterial}}<div><b>TypeMaterial</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TypeMaterial}}&quot;);})'>{{TypeMaterial}}</a></div>{{/TypeMaterial}}
{{#WorkTask}}<div><b>WorkTask</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WorkTask}}&quot;);})'>{{WorkTask}}</a></div>{{/WorkTask}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#WorkAsset_collapse" aria-expanded="true" aria-controls="WorkAsset_collapse">WorkAsset</a>
<div id="WorkAsset_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Assets.Asset.prototype.template.call (this) +
`
{{#Crew}}<div><b>Crew</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Crew}}&quot;);})'>{{Crew}}</a></div>{{/Crew}}
</div>
`
                );
           }        }

        /**
         * Usage of a vehicle.
         *
         */
        class VehicleUsageKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VehicleUsageKind;
                if (null == bucket)
                   cim_data.VehicleUsageKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VehicleUsageKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VehicleUsageKind";
                base.parse_element (/<cim:VehicleUsageKind.crew>([\s\S]*?)<\/cim:VehicleUsageKind.crew>/g, obj, "crew", base.to_string, sub, context);
                base.parse_element (/<cim:VehicleUsageKind.user>([\s\S]*?)<\/cim:VehicleUsageKind.user>/g, obj, "user", base.to_string, sub, context);
                base.parse_element (/<cim:VehicleUsageKind.contractor>([\s\S]*?)<\/cim:VehicleUsageKind.contractor>/g, obj, "contractor", base.to_string, sub, context);
                base.parse_element (/<cim:VehicleUsageKind.other>([\s\S]*?)<\/cim:VehicleUsageKind.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.VehicleUsageKind;
                if (null == bucket)
                   context.parsed.VehicleUsageKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "VehicleUsageKind", "crew", base.from_string, fields);
                base.export_element (obj, "VehicleUsageKind", "user", base.from_string, fields);
                base.export_element (obj, "VehicleUsageKind", "contractor", base.from_string, fields);
                base.export_element (obj, "VehicleUsageKind", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#VehicleUsageKind_collapse" aria-expanded="true" aria-controls="VehicleUsageKind_collapse">VehicleUsageKind</a>
<div id="VehicleUsageKind_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#crew}}<div><b>crew</b>: {{crew}}</div>{{/crew}}
{{#user}}<div><b>user</b>: {{user}}</div>{{/user}}
{{#contractor}}<div><b>contractor</b>: {{contractor}}</div>{{/contractor}}
{{#other}}<div><b>other</b>: {{other}}</div>{{/other}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:WorkTask.taskKind>([\s\S]*?)<\/cim:WorkTask.taskKind>/g, obj, "taskKind", base.to_string, sub, context);
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
<a data-toggle="collapse" href="#WorkTask_collapse" aria-expanded="true" aria-controls="WorkTask_collapse">WorkTask</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#Work_collapse" aria-expanded="true" aria-controls="Work_collapse">Work</a>
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
`
                );
           }        }

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
<a data-toggle="collapse" href="#MaintenanceLocation_collapse" aria-expanded="true" aria-controls="MaintenanceLocation_collapse">MaintenanceLocation</a>
<div id="MaintenanceLocation_collapse" class="collapse in" style="margin-left: 10px;">
`
      + WorkLocation.prototype.template.call (this) +
`
{{#block}}<div><b>block</b>: {{block}}</div>{{/block}}
{{#lot}}<div><b>lot</b>: {{lot}}</div>{{/lot}}
{{#nearestIntersection}}<div><b>nearestIntersection</b>: {{nearestIntersection}}</div>{{/nearestIntersection}}
{{#subdivision}}<div><b>subdivision</b>: {{subdivision}}</div>{{/subdivision}}
</div>
`
                );
           }        }

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
                base.parse_element (/<cim:Vehicle.usageKind>([\s\S]*?)<\/cim:Vehicle.usageKind>/g, obj, "usageKind", base.to_string, sub, context);

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
<a data-toggle="collapse" href="#Vehicle_collapse" aria-expanded="true" aria-controls="Vehicle_collapse">Vehicle</a>
<div id="Vehicle_collapse" class="collapse in" style="margin-left: 10px;">
`
      + WorkAsset.prototype.template.call (this) +
`
{{#odometerReadDateTime}}<div><b>odometerReadDateTime</b>: {{odometerReadDateTime}}</div>{{/odometerReadDateTime}}
{{#odometerReading}}<div><b>odometerReading</b>: {{odometerReading}}</div>{{/odometerReading}}
{{#usageKind}}<div><b>usageKind</b>: {{usageKind}}</div>{{/usageKind}}
</div>
`
                );
           }        }

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
<a data-toggle="collapse" href="#Tool_collapse" aria-expanded="true" aria-controls="Tool_collapse">Tool</a>
<div id="Tool_collapse" class="collapse in" style="margin-left: 10px;">
`
      + WorkAsset.prototype.template.call (this) +
`
{{#lastCalibrationDate}}<div><b>lastCalibrationDate</b>: {{lastCalibrationDate}}</div>{{/lastCalibrationDate}}
</div>
`
                );
           }        }

        return (
            {
                Tool: Tool,
                WorkAsset: WorkAsset,
                Vehicle: Vehicle,
                MaterialItem: MaterialItem,
                VehicleUsageKind: VehicleUsageKind,
                WorkTask: WorkTask,
                BaseWork: BaseWork,
                WorkTimeScheduleKind: WorkTimeScheduleKind,
                WorkStatusKind: WorkStatusKind,
                Work: Work,
                WorkKind: WorkKind,
                WorkTimeSchedule: WorkTimeSchedule,
                MaintenanceLocation: MaintenanceLocation,
                WorkLocation: WorkLocation,
                WorkTaskKind: WorkTaskKind
            }
        );
    }
);