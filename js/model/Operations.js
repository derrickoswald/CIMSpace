define
(
    ["model/base", "model/Common", "model/Domain"],
    /**
     * This package contains the core information classes that support operations and outage management applications.
     *
     */
    function (base, Common, Domain)
    {

        /**
         * Kind of action on switch.
         *
         */
        var SwitchActionKind =
        {
            open: "open",
            close: "close",
            disableReclosing: "disableReclosing",
            enableReclosing: "enableReclosing"
        };
        Object.freeze (SwitchActionKind);

        /**
         * Kind of action on temporary equipment (such as cut, jumper, ground, energy source).
         *
         */
        var TempEquipActionKind =
        {
            place: "place",
            remove: "remove"
        };
        Object.freeze (TempEquipActionKind);

        /**
         * Type of clearance action.
         *
         */
        var ClearanceActionKind =
        {
            issue: "issue",
            update: "update",
            release: "release"
        };
        Object.freeze (ClearanceActionKind);

        /**
         * Kind of power system resource event.
         *
         */
        var PSREventKind =
        {
            inService: "inService",
            outOfService: "outOfService",
            pendingAdd: "pendingAdd",
            pendingRemove: "pendingRemove",
            pendingReplace: "pendingReplace",
            other: "other",
            unknown: "unknown"
        };
        Object.freeze (PSREventKind);

        /**
         * Kind of action on tag.
         *
         */
        var TagActionKind =
        {
            place: "place",
            remove: "remove",
            verify: "verify"
        };
        Object.freeze (TagActionKind);

        /**
         * A logical step, grouping atomic switching steps that are important to distinguish when they may change topology (e.g. placing a jumper between two cuts).
         *
         */
        class SwitchingStepGroup extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingStepGroup;
                if (null == bucket)
                   cim_data.SwitchingStepGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingStepGroup[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStepGroup";
                base.parse_element (/<cim:SwitchingStepGroup.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStepGroup.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStepGroup.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStepGroup.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.CutActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CutActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.ClearanceActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.GenericActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenericActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.EnergySourceActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySourceActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.TagActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.JumperActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumperActions", sub, context);
                base.parse_attribute (/<cim:SwitchingStepGroup.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.SwitchActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchActions", sub, context);
                base.parse_attributes (/<cim:SwitchingStepGroup.GroundActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundActions", sub, context);
                var bucket = context.parsed.SwitchingStepGroup;
                if (null == bucket)
                   context.parsed.SwitchingStepGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingStepGroup", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingStepGroup", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attributes (obj, "SwitchingStepGroup", "CutActions", "CutActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "ClearanceActions", "ClearanceActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "GenericActions", "GenericActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "EnergySourceActions", "EnergySourceActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "TagActions", "TagActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "JumperActions", "JumperActions", fields);
                base.export_attribute (obj, "SwitchingStepGroup", "SwitchingPlan", "SwitchingPlan", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "SwitchActions", "SwitchActions", fields);
                base.export_attributes (obj, "SwitchingStepGroup", "GroundActions", "GroundActions", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="SwitchingStepGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#CutActions}}<div><b>CutActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CutActions}}
                    {{#ClearanceActions}}<div><b>ClearanceActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ClearanceActions}}
                    {{#GenericActions}}<div><b>GenericActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/GenericActions}}
                    {{#EnergySourceActions}}<div><b>EnergySourceActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/EnergySourceActions}}
                    {{#TagActions}}<div><b>TagActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TagActions}}
                    {{#JumperActions}}<div><b>JumperActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/JumperActions}}
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
                    {{#SwitchActions}}<div><b>SwitchActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchActions}}
                    {{#GroundActions}}<div><b>GroundActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/GroundActions}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CutActions) obj.CutActions_string = obj.CutActions.join ();
                if (obj.ClearanceActions) obj.ClearanceActions_string = obj.ClearanceActions.join ();
                if (obj.GenericActions) obj.GenericActions_string = obj.GenericActions.join ();
                if (obj.EnergySourceActions) obj.EnergySourceActions_string = obj.EnergySourceActions.join ();
                if (obj.TagActions) obj.TagActions_string = obj.TagActions.join ();
                if (obj.JumperActions) obj.JumperActions_string = obj.JumperActions.join ();
                if (obj.SwitchActions) obj.SwitchActions_string = obj.SwitchActions.join ();
                if (obj.GroundActions) obj.GroundActions_string = obj.GroundActions.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CutActions_string;
                delete obj.ClearanceActions_string;
                delete obj.GenericActions_string;
                delete obj.EnergySourceActions_string;
                delete obj.TagActions_string;
                delete obj.JumperActions_string;
                delete obj.SwitchActions_string;
                delete obj.GroundActions_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingStepGroup_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingStepGroup_collapse" style="margin-left: 10px;">SwitchingStepGroup</a></legend>
                    <div id="{{id}}_SwitchingStepGroup_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isFreeSequence'>isFreeSequence: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchingStepGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_isFreeSequence").checked; if (temp) obj.isFreeSequence = true;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" != temp) obj.SwitchingPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CutActions", "0..*", "0..1", "CutAction", "SwitchingStepGroup"],
                            ["ClearanceActions", "0..*", "0..1", "ClearanceAction", "SwitchingStepGroup"],
                            ["GenericActions", "0..*", "0..1", "GenericAction", "SwitchingStepGroup"],
                            ["EnergySourceActions", "0..*", "0..1", "EnergySourceAction", "SwitchingStepGroup"],
                            ["TagActions", "0..*", "0..1", "TagAction", "SwitchingStepGroup"],
                            ["JumperActions", "0..*", "0..1", "JumperAction", "SwitchingStepGroup"],
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "SwitchingStepGroups"],
                            ["SwitchActions", "0..*", "0..1", "SwitchAction", "SwitchingStepGroup"],
                            ["GroundActions", "0..*", "0..1", "GroundAction", "SwitchingStepGroup"]
                        ]
                    )
                );
            }
        }

        class OperationTag extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OperationTag;
                if (null == bucket)
                   cim_data.OperationTag = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationTag[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationTag";
                base.parse_attribute (/<cim:OperationTag.Asset\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Asset", sub, context);
                base.parse_attribute (/<cim:OperationTag.TagAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TagAction", sub, context);
                base.parse_attribute (/<cim:OperationTag.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                var bucket = context.parsed.OperationTag;
                if (null == bucket)
                   context.parsed.OperationTag = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationTag", "Asset", "Asset", fields);
                base.export_attribute (obj, "OperationTag", "TagAction", "TagAction", fields);
                base.export_attribute (obj, "OperationTag", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationTag_collapse" aria-expanded="true" aria-controls="OperationTag_collapse" style="margin-left: 10px;">OperationTag</a></legend>
                    <div id="OperationTag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#Asset}}<div><b>Asset</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Asset}}&quot;);}); return false;'>{{Asset}}</a></div>{{/Asset}}
                    {{#TagAction}}<div><b>TagAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TagAction}}&quot;);}); return false;'>{{TagAction}}</a></div>{{/TagAction}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationTag_collapse" aria-expanded="true" aria-controls="{{id}}_OperationTag_collapse" style="margin-left: 10px;">OperationTag</a></legend>
                    <div id="{{id}}_OperationTag_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Asset'>Asset: </label><div class='col-sm-8'><input id='{{id}}_Asset' class='form-control' type='text'{{#Asset}} value='{{Asset}}'{{/Asset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TagAction'>TagAction: </label><div class='col-sm-8'><input id='{{id}}_TagAction' class='form-control' type='text'{{#TagAction}} value='{{TagAction}}'{{/TagAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationTag" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Asset").value; if ("" != temp) obj.Asset = temp;
                temp = document.getElementById (id + "_TagAction").value; if ("" != temp) obj.TagAction = temp;
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" != temp) obj.PowerSystemResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Asset", "0..1", "0..*", "Asset", "OperationTags"],
                            ["TagAction", "0..1", "0..1", "TagAction", "OperationTag"],
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "OperationTags"]
                        ]
                    )
                );
            }
        }

        /**
         * Event recording the change in operational status of a power system resource; may be for an event that has already occurred or for a planned activity.
         *
         */
        class PSREvent extends Common.ActivityRecord
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PSREvent;
                if (null == bucket)
                   cim_data.PSREvent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PSREvent[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.ActivityRecord.prototype.parse.call (this, context, sub);
                obj.cls = "PSREvent";
                base.parse_attribute (/<cim:PSREvent.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:PSREvent.PowerSystemResource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemResource", sub, context);
                var bucket = context.parsed.PSREvent;
                if (null == bucket)
                   context.parsed.PSREvent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.ActivityRecord.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PSREvent", "kind", "kind", fields);
                base.export_attribute (obj, "PSREvent", "PowerSystemResource", "PowerSystemResource", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PSREvent_collapse" aria-expanded="true" aria-controls="PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="PSREvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#PowerSystemResource}}<div><b>PowerSystemResource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemResource}}&quot;);}); return false;'>{{PowerSystemResource}}</a></div>{{/PowerSystemResource}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindPSREventKind = [{ id: '', selected: (!obj.kind)}]; for (var property in PSREventKind) obj.kindPSREventKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindPSREventKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PSREvent_collapse" aria-expanded="true" aria-controls="{{id}}_PSREvent_collapse" style="margin-left: 10px;">PSREvent</a></legend>
                    <div id="{{id}}_PSREvent_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.ActivityRecord.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPSREventKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPSREventKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemResource'>PowerSystemResource: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemResource' class='form-control' type='text'{{#PowerSystemResource}} value='{{PowerSystemResource}}'{{/PowerSystemResource}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PSREvent" };
                super.submit (id, obj);
                temp = PSREventKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#PSREventKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_PowerSystemResource").value; if ("" != temp) obj.PowerSystemResource = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemResource", "0..1", "0..*", "PowerSystemResource", "PSREvents"]
                        ]
                    )
                );
            }
        }

        /**
         * Document describing details of an active or planned outage in a part of the electrical network.
         *
         * A non-planned outage may be created upon:
         *
         */
        class Outage extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Outage;
                if (null == bucket)
                   cim_data.Outage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Outage[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Outage";
                base.parse_element (/<cim:Outage.cause>([\s\S]*?)<\/cim:Outage.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attribute (/<cim:Outage.estimatedPeriod\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "estimatedPeriod", sub, context);
                base.parse_element (/<cim:Outage.isPlanned>([\s\S]*?)<\/cim:Outage.isPlanned>/g, obj, "isPlanned", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Outage.actualPeriod\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "actualPeriod", sub, context);
                base.parse_attribute (/<cim:Outage.summary\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "summary", sub, context);
                base.parse_element (/<cim:Outage.cancelledDateTime>([\s\S]*?)<\/cim:Outage.cancelledDateTime>/g, obj, "cancelledDateTime", base.to_datetime, sub, context);
                base.parse_attribute (/<cim:Outage.OutageSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OutageSchedule", sub, context);
                base.parse_attributes (/<cim:Outage.PlannedSwitchActions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedSwitchActions", sub, context);
                base.parse_attributes (/<cim:Outage.Equipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attributes (/<cim:Outage.OpenedSwitches\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OpenedSwitches", sub, context);
                base.parse_attributes (/<cim:Outage.Faults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Faults", sub, context);
                base.parse_attributes (/<cim:Outage.SwitchingPlans\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlans", sub, context);
                base.parse_attributes (/<cim:Outage.UpdatedRatings\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UpdatedRatings", sub, context);
                base.parse_attributes (/<cim:Outage.UsagePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UsagePoints", sub, context);
                base.parse_attribute (/<cim:Outage.Incident\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Incident", sub, context);
                var bucket = context.parsed.Outage;
                if (null == bucket)
                   context.parsed.Outage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Outage", "cause", "cause",  base.from_string, fields);
                base.export_attribute (obj, "Outage", "estimatedPeriod", "estimatedPeriod", fields);
                base.export_element (obj, "Outage", "isPlanned", "isPlanned",  base.from_boolean, fields);
                base.export_attribute (obj, "Outage", "actualPeriod", "actualPeriod", fields);
                base.export_attribute (obj, "Outage", "summary", "summary", fields);
                base.export_element (obj, "Outage", "cancelledDateTime", "cancelledDateTime",  base.from_datetime, fields);
                base.export_attribute (obj, "Outage", "OutageSchedule", "OutageSchedule", fields);
                base.export_attributes (obj, "Outage", "PlannedSwitchActions", "PlannedSwitchActions", fields);
                base.export_attributes (obj, "Outage", "Equipments", "Equipments", fields);
                base.export_attributes (obj, "Outage", "OpenedSwitches", "OpenedSwitches", fields);
                base.export_attributes (obj, "Outage", "Faults", "Faults", fields);
                base.export_attributes (obj, "Outage", "SwitchingPlans", "SwitchingPlans", fields);
                base.export_attributes (obj, "Outage", "UpdatedRatings", "UpdatedRatings", fields);
                base.export_attributes (obj, "Outage", "UsagePoints", "UsagePoints", fields);
                base.export_attribute (obj, "Outage", "Incident", "Incident", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Outage_collapse" aria-expanded="true" aria-controls="Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="Outage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#estimatedPeriod}}<div><b>estimatedPeriod</b>: {{estimatedPeriod}}</div>{{/estimatedPeriod}}
                    {{#isPlanned}}<div><b>isPlanned</b>: {{isPlanned}}</div>{{/isPlanned}}
                    {{#actualPeriod}}<div><b>actualPeriod</b>: {{actualPeriod}}</div>{{/actualPeriod}}
                    {{#summary}}<div><b>summary</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{summary}}&quot;);}); return false;'>{{summary}}</a></div>{{/summary}}\n                    {{#cancelledDateTime}}<div><b>cancelledDateTime</b>: {{cancelledDateTime}}</div>{{/cancelledDateTime}}
                    {{#OutageSchedule}}<div><b>OutageSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OutageSchedule}}&quot;);}); return false;'>{{OutageSchedule}}</a></div>{{/OutageSchedule}}
                    {{#PlannedSwitchActions}}<div><b>PlannedSwitchActions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PlannedSwitchActions}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Equipments}}
                    {{#OpenedSwitches}}<div><b>OpenedSwitches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/OpenedSwitches}}
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Faults}}
                    {{#SwitchingPlans}}<div><b>SwitchingPlans</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchingPlans}}
                    {{#UpdatedRatings}}<div><b>UpdatedRatings</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UpdatedRatings}}
                    {{#UsagePoints}}<div><b>UsagePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UsagePoints}}
                    {{#Incident}}<div><b>Incident</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Incident}}&quot;);}); return false;'>{{Incident}}</a></div>{{/Incident}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.estimatedPeriodDateTimeInterval = [{ id: '', selected: (!obj.estimatedPeriod)}]; for (var property in Domain.DateTimeInterval) obj.estimatedPeriodDateTimeInterval.push ({ id: property, selected: obj.estimatedPeriod && obj.estimatedPeriod.endsWith ('.' + property)});
                obj.actualPeriodDateTimeInterval = [{ id: '', selected: (!obj.actualPeriod)}]; for (var property in Domain.DateTimeInterval) obj.actualPeriodDateTimeInterval.push ({ id: property, selected: obj.actualPeriod && obj.actualPeriod.endsWith ('.' + property)});
                obj.summaryServicePointOutageSummary = [{ id: '', selected: (!obj.summary)}]; for (var property in ServicePointOutageSummary) obj.summaryServicePointOutageSummary.push ({ id: property, selected: obj.summary && obj.summary.endsWith ('.' + property)});
                if (obj.PlannedSwitchActions) obj.PlannedSwitchActions_string = obj.PlannedSwitchActions.join ();
                if (obj.Equipments) obj.Equipments_string = obj.Equipments.join ();
                if (obj.OpenedSwitches) obj.OpenedSwitches_string = obj.OpenedSwitches.join ();
                if (obj.Faults) obj.Faults_string = obj.Faults.join ();
                if (obj.SwitchingPlans) obj.SwitchingPlans_string = obj.SwitchingPlans.join ();
                if (obj.UpdatedRatings) obj.UpdatedRatings_string = obj.UpdatedRatings.join ();
                if (obj.UsagePoints) obj.UsagePoints_string = obj.UsagePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.estimatedPeriodDateTimeInterval;
                delete obj.actualPeriodDateTimeInterval;
                delete obj.summaryServicePointOutageSummary;
                delete obj.PlannedSwitchActions_string;
                delete obj.Equipments_string;
                delete obj.OpenedSwitches_string;
                delete obj.Faults_string;
                delete obj.SwitchingPlans_string;
                delete obj.UpdatedRatings_string;
                delete obj.UsagePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Outage_collapse" aria-expanded="true" aria-controls="{{id}}_Outage_collapse" style="margin-left: 10px;">Outage</a></legend>
                    <div id="{{id}}_Outage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cause'>cause: </label><div class='col-sm-8'><input id='{{id}}_cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_estimatedPeriod'>estimatedPeriod: </label><div class='col-sm-8'><select id='{{id}}_estimatedPeriod' class='form-control custom-select'>{{#estimatedPeriodDateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/estimatedPeriodDateTimeInterval}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isPlanned'>isPlanned: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isPlanned' class='form-check-input' type='checkbox'{{#isPlanned}} checked{{/isPlanned}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_actualPeriod'>actualPeriod: </label><div class='col-sm-8'><select id='{{id}}_actualPeriod' class='form-control custom-select'>{{#actualPeriodDateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/actualPeriodDateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_summary'>summary: </label><div class='col-sm-8'><select id='{{id}}_summary' class='form-control custom-select'>{{#summaryServicePointOutageSummary}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/summaryServicePointOutageSummary}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cancelledDateTime'>cancelledDateTime: </label><div class='col-sm-8'><input id='{{id}}_cancelledDateTime' class='form-control' type='text'{{#cancelledDateTime}} value='{{cancelledDateTime}}'{{/cancelledDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OutageSchedule'>OutageSchedule: </label><div class='col-sm-8'><input id='{{id}}_OutageSchedule' class='form-control' type='text'{{#OutageSchedule}} value='{{OutageSchedule}}'{{/OutageSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipments'>Equipments: </label><div class='col-sm-8'><input id='{{id}}_Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments_string}}'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UsagePoints'>UsagePoints: </label><div class='col-sm-8'><input id='{{id}}_UsagePoints' class='form-control' type='text'{{#UsagePoints}} value='{{UsagePoints_string}}'{{/UsagePoints}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Incident'>Incident: </label><div class='col-sm-8'><input id='{{id}}_Incident' class='form-control' type='text'{{#Incident}} value='{{Incident}}'{{/Incident}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Outage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cause").value; if ("" != temp) obj.cause = temp;
                temp = Domain.DateTimeInterval[document.getElementById (id + "_estimatedPeriod").value]; if (temp) obj.estimatedPeriod = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; else delete obj.estimatedPeriod;
                temp = document.getElementById (id + "_isPlanned").checked; if (temp) obj.isPlanned = true;
                temp = Domain.DateTimeInterval[document.getElementById (id + "_actualPeriod").value]; if (temp) obj.actualPeriod = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; else delete obj.actualPeriod;
                temp = ServicePointOutageSummary[document.getElementById (id + "_summary").value]; if (temp) obj.summary = "http://iec.ch/TC57/2013/CIM-schema-cim16#ServicePointOutageSummary." + temp; else delete obj.summary;
                temp = document.getElementById (id + "_cancelledDateTime").value; if ("" != temp) obj.cancelledDateTime = temp;
                temp = document.getElementById (id + "_OutageSchedule").value; if ("" != temp) obj.OutageSchedule = temp;
                temp = document.getElementById (id + "_Equipments").value; if ("" != temp) obj.Equipments = temp.split (",");
                temp = document.getElementById (id + "_UsagePoints").value; if ("" != temp) obj.UsagePoints = temp.split (",");
                temp = document.getElementById (id + "_Incident").value; if ("" != temp) obj.Incident = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OutageSchedule", "0..1", "0..*", "OutageSchedule", "PlannedOutages"],
                            ["PlannedSwitchActions", "0..*", "0..1", "SwitchAction", "PlannedOutage"],
                            ["Equipments", "0..*", "0..*", "Equipment", "Outages"],
                            ["OpenedSwitches", "0..*", "0..1", "Switch", "Outage"],
                            ["Faults", "0..*", "0..1", "Fault", "Outage"],
                            ["SwitchingPlans", "0..*", "0..1", "SwitchingPlan", "Outage"],
                            ["UpdatedRatings", "0..*", "1", "OperationalUpdatedRating", "PlannedOutage"],
                            ["UsagePoints", "0..*", "0..*", "UsagePoint", "Outages"],
                            ["Incident", "0..1", "0..1", "Incident", "Outage"]
                        ]
                    )
                );
            }
        }

        /**
         * Description of a problem in the field that may be reported in a trouble ticket or come from another source.
         *
         * It may have to do with an outage.
         *
         */
        class Incident extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Incident;
                if (null == bucket)
                   cim_data.Incident = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Incident[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "Incident";
                base.parse_element (/<cim:Incident.cause>([\s\S]*?)<\/cim:Incident.cause>/g, obj, "cause", base.to_string, sub, context);
                base.parse_attributes (/<cim:Incident.Hazards\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Hazards", sub, context);
                base.parse_attribute (/<cim:Incident.Owner\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Owner", sub, context);
                base.parse_attributes (/<cim:Incident.TroubleTickets\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TroubleTickets", sub, context);
                base.parse_attributes (/<cim:Incident.Works\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Works", sub, context);
                base.parse_attributes (/<cim:Incident.CustomerNotifications\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustomerNotifications", sub, context);
                base.parse_attribute (/<cim:Incident.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                var bucket = context.parsed.Incident;
                if (null == bucket)
                   context.parsed.Incident = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_element (obj, "Incident", "cause", "cause",  base.from_string, fields);
                base.export_attributes (obj, "Incident", "Hazards", "Hazards", fields);
                base.export_attribute (obj, "Incident", "Owner", "Owner", fields);
                base.export_attributes (obj, "Incident", "TroubleTickets", "TroubleTickets", fields);
                base.export_attributes (obj, "Incident", "Works", "Works", fields);
                base.export_attributes (obj, "Incident", "CustomerNotifications", "CustomerNotifications", fields);
                base.export_attribute (obj, "Incident", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Incident_collapse" aria-expanded="true" aria-controls="Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="Incident_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#cause}}<div><b>cause</b>: {{cause}}</div>{{/cause}}
                    {{#Hazards}}<div><b>Hazards</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Hazards}}
                    {{#Owner}}<div><b>Owner</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Owner}}&quot;);}); return false;'>{{Owner}}</a></div>{{/Owner}}
                    {{#TroubleTickets}}<div><b>TroubleTickets</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TroubleTickets}}
                    {{#Works}}<div><b>Works</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Works}}
                    {{#CustomerNotifications}}<div><b>CustomerNotifications</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CustomerNotifications}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Hazards) obj.Hazards_string = obj.Hazards.join ();
                if (obj.TroubleTickets) obj.TroubleTickets_string = obj.TroubleTickets.join ();
                if (obj.Works) obj.Works_string = obj.Works.join ();
                if (obj.CustomerNotifications) obj.CustomerNotifications_string = obj.CustomerNotifications.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Hazards_string;
                delete obj.TroubleTickets_string;
                delete obj.Works_string;
                delete obj.CustomerNotifications_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Incident_collapse" aria-expanded="true" aria-controls="{{id}}_Incident_collapse" style="margin-left: 10px;">Incident</a></legend>
                    <div id="{{id}}_Incident_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cause'>cause: </label><div class='col-sm-8'><input id='{{id}}_cause' class='form-control' type='text'{{#cause}} value='{{cause}}'{{/cause}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Owner'>Owner: </label><div class='col-sm-8'><input id='{{id}}_Owner' class='form-control' type='text'{{#Owner}} value='{{Owner}}'{{/Owner}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Works'>Works: </label><div class='col-sm-8'><input id='{{id}}_Works' class='form-control' type='text'{{#Works}} value='{{Works_string}}'{{/Works}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Incident" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cause").value; if ("" != temp) obj.cause = temp;
                temp = document.getElementById (id + "_Owner").value; if ("" != temp) obj.Owner = temp;
                temp = document.getElementById (id + "_Works").value; if ("" != temp) obj.Works = temp.split (",");
                temp = document.getElementById (id + "_Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Hazards", "0..*", "0..1", "IncidentHazard", "Incident"],
                            ["Owner", "0..1", "0..*", "Operator", "Incidents"],
                            ["TroubleTickets", "0..*", "0..1", "TroubleTicket", "Incident"],
                            ["Works", "0..*", "0..*", "Work", "Incidents"],
                            ["CustomerNotifications", "0..*", "0..1", "CustomerNotification", "Incident"],
                            ["Outage", "0..1", "0..1", "Outage", "Incident"]
                        ]
                    )
                );
            }
        }

        /**
         * A document that can be associated with equipment to describe any sort of restrictions compared with the original manufacturer's specification or with the usual operational practice e.g. temporary maximum loadings, maximum switching current, do not operate if bus couplers are open, etc.
         *
         * In the UK, for example, if a breaker or switch ever mal-operates, this is reported centrally and utilities use their asset systems to identify all the installed devices of the same manufacturer's type. They then apply operational restrictions in the operational systems to warn operators of potential problems. After appropriate inspection and maintenance, the operational restrictions may be removed.
         *
         */
        class OperationalRestriction extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OperationalRestriction;
                if (null == bucket)
                   cim_data.OperationalRestriction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalRestriction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalRestriction";
                base.parse_attribute (/<cim:OperationalRestriction.activePeriod\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "activePeriod", sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.restrictedValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "restrictedValue", sub, context);
                base.parse_attributes (/<cim:OperationalRestriction.Equipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipments", sub, context);
                base.parse_attribute (/<cim:OperationalRestriction.ProductAssetModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProductAssetModel", sub, context);
                var bucket = context.parsed.OperationalRestriction;
                if (null == bucket)
                   context.parsed.OperationalRestriction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalRestriction", "activePeriod", "activePeriod", fields);
                base.export_attribute (obj, "OperationalRestriction", "restrictedValue", "restrictedValue", fields);
                base.export_attributes (obj, "OperationalRestriction", "Equipments", "Equipments", fields);
                base.export_attribute (obj, "OperationalRestriction", "ProductAssetModel", "ProductAssetModel", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationalRestriction_collapse" aria-expanded="true" aria-controls="OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="OperationalRestriction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#activePeriod}}<div><b>activePeriod</b>: {{activePeriod}}</div>{{/activePeriod}}
                    {{#restrictedValue}}<div><b>restrictedValue</b>: {{restrictedValue}}</div>{{/restrictedValue}}
                    {{#Equipments}}<div><b>Equipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Equipments}}
                    {{#ProductAssetModel}}<div><b>ProductAssetModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProductAssetModel}}&quot;);}); return false;'>{{ProductAssetModel}}</a></div>{{/ProductAssetModel}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.activePeriodDateTimeInterval = [{ id: '', selected: (!obj.activePeriod)}]; for (var property in Domain.DateTimeInterval) obj.activePeriodDateTimeInterval.push ({ id: property, selected: obj.activePeriod && obj.activePeriod.endsWith ('.' + property)});
                obj.restrictedValueFloatQuantity = [{ id: '', selected: (!obj.restrictedValue)}]; for (var property in Domain.FloatQuantity) obj.restrictedValueFloatQuantity.push ({ id: property, selected: obj.restrictedValue && obj.restrictedValue.endsWith ('.' + property)});
                if (obj.Equipments) obj.Equipments_string = obj.Equipments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.activePeriodDateTimeInterval;
                delete obj.restrictedValueFloatQuantity;
                delete obj.Equipments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationalRestriction_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalRestriction_collapse" style="margin-left: 10px;">OperationalRestriction</a></legend>
                    <div id="{{id}}_OperationalRestriction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activePeriod'>activePeriod: </label><div class='col-sm-8'><select id='{{id}}_activePeriod' class='form-control custom-select'>{{#activePeriodDateTimeInterval}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/activePeriodDateTimeInterval}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_restrictedValue'>restrictedValue: </label><div class='col-sm-8'><select id='{{id}}_restrictedValue' class='form-control custom-select'>{{#restrictedValueFloatQuantity}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/restrictedValueFloatQuantity}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipments'>Equipments: </label><div class='col-sm-8'><input id='{{id}}_Equipments' class='form-control' type='text'{{#Equipments}} value='{{Equipments_string}}'{{/Equipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ProductAssetModel'>ProductAssetModel: </label><div class='col-sm-8'><input id='{{id}}_ProductAssetModel' class='form-control' type='text'{{#ProductAssetModel}} value='{{ProductAssetModel}}'{{/ProductAssetModel}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationalRestriction" };
                super.submit (id, obj);
                temp = Domain.DateTimeInterval[document.getElementById (id + "_activePeriod").value]; if (temp) obj.activePeriod = "http://iec.ch/TC57/2013/CIM-schema-cim16#DateTimeInterval." + temp; else delete obj.activePeriod;
                temp = Domain.FloatQuantity[document.getElementById (id + "_restrictedValue").value]; if (temp) obj.restrictedValue = "http://iec.ch/TC57/2013/CIM-schema-cim16#FloatQuantity." + temp; else delete obj.restrictedValue;
                temp = document.getElementById (id + "_Equipments").value; if ("" != temp) obj.Equipments = temp.split (",");
                temp = document.getElementById (id + "_ProductAssetModel").value; if ("" != temp) obj.ProductAssetModel = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Equipments", "0..*", "0..*", "Equipment", "OperationalRestrictions"],
                            ["ProductAssetModel", "0..1", "0..*", "ProductAssetModel", "OperationalRestrictions"]
                        ]
                    )
                );
            }
        }

        /**
         * Document restricting or authorising works on electrical equipment (for example a permit to work, sanction for test, limitation of access, or certificate of isolation), defined based upon organisational practices.
         *
         */
        class SafetyDocument extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SafetyDocument;
                if (null == bucket)
                   cim_data.SafetyDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SafetyDocument[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "SafetyDocument";
                base.parse_attribute (/<cim:SafetyDocument.SwitchingPlan\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingPlan", sub, context);
                var bucket = context.parsed.SafetyDocument;
                if (null == bucket)
                   context.parsed.SafetyDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SafetyDocument", "SwitchingPlan", "SwitchingPlan", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SafetyDocument_collapse" aria-expanded="true" aria-controls="SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="SafetyDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#SwitchingPlan}}<div><b>SwitchingPlan</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingPlan}}&quot;);}); return false;'>{{SwitchingPlan}}</a></div>{{/SwitchingPlan}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SafetyDocument_collapse" aria-expanded="true" aria-controls="{{id}}_SafetyDocument_collapse" style="margin-left: 10px;">SafetyDocument</a></legend>
                    <div id="{{id}}_SafetyDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingPlan'>SwitchingPlan: </label><div class='col-sm-8'><input id='{{id}}_SwitchingPlan' class='form-control' type='text'{{#SwitchingPlan}} value='{{SwitchingPlan}}'{{/SwitchingPlan}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SafetyDocument" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SwitchingPlan").value; if ("" != temp) obj.SwitchingPlan = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingPlan", "0..1", "0..*", "SwitchingPlan", "SafetyDocuments"]
                        ]
                    )
                );
            }
        }

        /**
         * Summary counts of service points affected by an outage.
         *
         * These counts are sometimes referred to as total and critical customer count.
         *
         */
        class ServicePointOutageSummary extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ServicePointOutageSummary;
                if (null == bucket)
                   cim_data.ServicePointOutageSummary = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ServicePointOutageSummary[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ServicePointOutageSummary";
                base.parse_element (/<cim:ServicePointOutageSummary.criticalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.criticalCount>/g, obj, "criticalCount", base.to_string, sub, context);
                base.parse_element (/<cim:ServicePointOutageSummary.totalCount>([\s\S]*?)<\/cim:ServicePointOutageSummary.totalCount>/g, obj, "totalCount", base.to_string, sub, context);
                var bucket = context.parsed.ServicePointOutageSummary;
                if (null == bucket)
                   context.parsed.ServicePointOutageSummary = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ServicePointOutageSummary", "criticalCount", "criticalCount",  base.from_string, fields);
                base.export_element (obj, "ServicePointOutageSummary", "totalCount", "totalCount",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="ServicePointOutageSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#criticalCount}}<div><b>criticalCount</b>: {{criticalCount}}</div>{{/criticalCount}}
                    {{#totalCount}}<div><b>totalCount</b>: {{totalCount}}</div>{{/totalCount}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ServicePointOutageSummary_collapse" aria-expanded="true" aria-controls="{{id}}_ServicePointOutageSummary_collapse" style="margin-left: 10px;">ServicePointOutageSummary</a></legend>
                    <div id="{{id}}_ServicePointOutageSummary_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_criticalCount'>criticalCount: </label><div class='col-sm-8'><input id='{{id}}_criticalCount' class='form-control' type='text'{{#criticalCount}} value='{{criticalCount}}'{{/criticalCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_totalCount'>totalCount: </label><div class='col-sm-8'><input id='{{id}}_totalCount' class='form-control' type='text'{{#totalCount}} value='{{totalCount}}'{{/totalCount}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ServicePointOutageSummary" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_criticalCount").value; if ("" != temp) obj.criticalCount = temp;
                temp = document.getElementById (id + "_totalCount").value; if ("" != temp) obj.totalCount = temp;

                return (obj);
            }
        }

        /**
         * Document containing the definition of planned outages of equipment and/or service (delivery) points (sometimes referred to as customers).
         *
         * It is used as specification for producing switching plans.
         *
         */
        class OutageSchedule extends Common.Document
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OutageSchedule;
                if (null == bucket)
                   cim_data.OutageSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OutageSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Document.prototype.parse.call (this, context, sub);
                obj.cls = "OutageSchedule";
                base.parse_attributes (/<cim:OutageSchedule.PlannedOutages\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutages", sub, context);
                var bucket = context.parsed.OutageSchedule;
                if (null == bucket)
                   context.parsed.OutageSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Document.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "OutageSchedule", "PlannedOutages", "PlannedOutages", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OutageSchedule_collapse" aria-expanded="true" aria-controls="OutageSchedule_collapse" style="margin-left: 10px;">OutageSchedule</a></legend>
                    <div id="OutageSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.template.call (this) +
                    `
                    {{#PlannedOutages}}<div><b>PlannedOutages</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PlannedOutages}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PlannedOutages) obj.PlannedOutages_string = obj.PlannedOutages.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PlannedOutages_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OutageSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_OutageSchedule_collapse" style="margin-left: 10px;">OutageSchedule</a></legend>
                    <div id="{{id}}_OutageSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Document.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "OutageSchedule" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedOutages", "0..*", "0..1", "Outage", "OutageSchedule"]
                        ]
                    )
                );
            }
        }

        /**
         * Atomic switching step; can be part of a switching step group, or of the switching plan.
         *
         */
        class SwitchingStep extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingStep;
                if (null == bucket)
                   cim_data.SwitchingStep = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingStep[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingStep";
                base.parse_element (/<cim:SwitchingStep.executedDateTime>([\s\S]*?)<\/cim:SwitchingStep.executedDateTime>/g, obj, "executedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.plannedDateTime>([\s\S]*?)<\/cim:SwitchingStep.plannedDateTime>/g, obj, "plannedDateTime", base.to_datetime, sub, context);
                base.parse_element (/<cim:SwitchingStep.description>([\s\S]*?)<\/cim:SwitchingStep.description>/g, obj, "description", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingStep.isFreeSequence>([\s\S]*?)<\/cim:SwitchingStep.isFreeSequence>/g, obj, "isFreeSequence", base.to_boolean, sub, context);
                base.parse_element (/<cim:SwitchingStep.sequenceNumber>([\s\S]*?)<\/cim:SwitchingStep.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:SwitchingStep.CrewMember\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CrewMember", sub, context);
                base.parse_attribute (/<cim:SwitchingStep.Operator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Operator", sub, context);
                var bucket = context.parsed.SwitchingStep;
                if (null == bucket)
                   context.parsed.SwitchingStep = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SwitchingStep", "executedDateTime", "executedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingStep", "plannedDateTime", "plannedDateTime",  base.from_datetime, fields);
                base.export_element (obj, "SwitchingStep", "description", "description",  base.from_string, fields);
                base.export_element (obj, "SwitchingStep", "isFreeSequence", "isFreeSequence",  base.from_boolean, fields);
                base.export_element (obj, "SwitchingStep", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_attribute (obj, "SwitchingStep", "CrewMember", "CrewMember", fields);
                base.export_attribute (obj, "SwitchingStep", "Operator", "Operator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingStep_collapse" aria-expanded="true" aria-controls="SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="SwitchingStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#executedDateTime}}<div><b>executedDateTime</b>: {{executedDateTime}}</div>{{/executedDateTime}}
                    {{#plannedDateTime}}<div><b>plannedDateTime</b>: {{plannedDateTime}}</div>{{/plannedDateTime}}
                    {{#description}}<div><b>description</b>: {{description}}</div>{{/description}}
                    {{#isFreeSequence}}<div><b>isFreeSequence</b>: {{isFreeSequence}}</div>{{/isFreeSequence}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#CrewMember}}<div><b>CrewMember</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CrewMember}}&quot;);}); return false;'>{{CrewMember}}</a></div>{{/CrewMember}}
                    {{#Operator}}<div><b>Operator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Operator}}&quot;);}); return false;'>{{Operator}}</a></div>{{/Operator}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingStep_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingStep_collapse" style="margin-left: 10px;">SwitchingStep</a></legend>
                    <div id="{{id}}_SwitchingStep_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_executedDateTime'>executedDateTime: </label><div class='col-sm-8'><input id='{{id}}_executedDateTime' class='form-control' type='text'{{#executedDateTime}} value='{{executedDateTime}}'{{/executedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_plannedDateTime'>plannedDateTime: </label><div class='col-sm-8'><input id='{{id}}_plannedDateTime' class='form-control' type='text'{{#plannedDateTime}} value='{{plannedDateTime}}'{{/plannedDateTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_description'>description: </label><div class='col-sm-8'><input id='{{id}}_description' class='form-control' type='text'{{#description}} value='{{description}}'{{/description}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isFreeSequence'>isFreeSequence: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isFreeSequence' class='form-check-input' type='checkbox'{{#isFreeSequence}} checked{{/isFreeSequence}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CrewMember'>CrewMember: </label><div class='col-sm-8'><input id='{{id}}_CrewMember' class='form-control' type='text'{{#CrewMember}} value='{{CrewMember}}'{{/CrewMember}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Operator'>Operator: </label><div class='col-sm-8'><input id='{{id}}_Operator' class='form-control' type='text'{{#Operator}} value='{{Operator}}'{{/Operator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchingStep" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_executedDateTime").value; if ("" != temp) obj.executedDateTime = temp;
                temp = document.getElementById (id + "_plannedDateTime").value; if ("" != temp) obj.plannedDateTime = temp;
                temp = document.getElementById (id + "_description").value; if ("" != temp) obj.description = temp;
                temp = document.getElementById (id + "_isFreeSequence").checked; if (temp) obj.isFreeSequence = true;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_CrewMember").value; if ("" != temp) obj.CrewMember = temp;
                temp = document.getElementById (id + "_Operator").value; if ("" != temp) obj.Operator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CrewMember", "0..1", "0..*", "CrewMember", "SwitchingSteps"],
                            ["Operator", "0..1", "0..*", "Operator", "SwitchingSteps"]
                        ]
                    )
                );
            }
        }

        /**
         * A sequence of grouped or atomic steps intended to:
         * - de-energise equipment or part of the network for safe work, and/or
         *
         * - bring back in service previously de-energised equipment or part of the network.
         *
         */
        class SwitchingPlan extends SwitchingStepGroup
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchingPlan;
                if (null == bucket)
                   cim_data.SwitchingPlan = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchingPlan[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStepGroup.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchingPlan";
                base.parse_element (/<cim:SwitchingPlan.rank>([\s\S]*?)<\/cim:SwitchingPlan.rank>/g, obj, "rank", base.to_string, sub, context);
                base.parse_element (/<cim:SwitchingPlan.purpose>([\s\S]*?)<\/cim:SwitchingPlan.purpose>/g, obj, "purpose", base.to_string, sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SafetyDocuments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SafetyDocuments", sub, context);
                base.parse_attribute (/<cim:SwitchingPlan.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.SwitchingStepGroups\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroups", sub, context);
                base.parse_attributes (/<cim:SwitchingPlan.WorkTasks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WorkTasks", sub, context);
                var bucket = context.parsed.SwitchingPlan;
                if (null == bucket)
                   context.parsed.SwitchingPlan = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStepGroup.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchingPlan", "rank", "rank",  base.from_string, fields);
                base.export_element (obj, "SwitchingPlan", "purpose", "purpose",  base.from_string, fields);
                base.export_attributes (obj, "SwitchingPlan", "SafetyDocuments", "SafetyDocuments", fields);
                base.export_attribute (obj, "SwitchingPlan", "Outage", "Outage", fields);
                base.export_attributes (obj, "SwitchingPlan", "SwitchingStepGroups", "SwitchingStepGroups", fields);
                base.export_attributes (obj, "SwitchingPlan", "WorkTasks", "WorkTasks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchingPlan_collapse" aria-expanded="true" aria-controls="SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="SwitchingPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStepGroup.prototype.template.call (this) +
                    `
                    {{#rank}}<div><b>rank</b>: {{rank}}</div>{{/rank}}
                    {{#purpose}}<div><b>purpose</b>: {{purpose}}</div>{{/purpose}}
                    {{#SafetyDocuments}}<div><b>SafetyDocuments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SafetyDocuments}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    {{#SwitchingStepGroups}}<div><b>SwitchingStepGroups</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchingStepGroups}}
                    {{#WorkTasks}}<div><b>WorkTasks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WorkTasks}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.SafetyDocuments) obj.SafetyDocuments_string = obj.SafetyDocuments.join ();
                if (obj.SwitchingStepGroups) obj.SwitchingStepGroups_string = obj.SwitchingStepGroups.join ();
                if (obj.WorkTasks) obj.WorkTasks_string = obj.WorkTasks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SafetyDocuments_string;
                delete obj.SwitchingStepGroups_string;
                delete obj.WorkTasks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchingPlan_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchingPlan_collapse" style="margin-left: 10px;">SwitchingPlan</a></legend>
                    <div id="{{id}}_SwitchingPlan_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStepGroup.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rank'>rank: </label><div class='col-sm-8'><input id='{{id}}_rank' class='form-control' type='text'{{#rank}} value='{{rank}}'{{/rank}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_purpose'>purpose: </label><div class='col-sm-8'><input id='{{id}}_purpose' class='form-control' type='text'{{#purpose}} value='{{purpose}}'{{/purpose}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchingPlan" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rank").value; if ("" != temp) obj.rank = temp;
                temp = document.getElementById (id + "_purpose").value; if ("" != temp) obj.purpose = temp;
                temp = document.getElementById (id + "_Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SafetyDocuments", "0..*", "0..1", "SafetyDocument", "SwitchingPlan"],
                            ["Outage", "0..1", "0..*", "Outage", "SwitchingPlans"],
                            ["SwitchingStepGroups", "0..*", "0..1", "SwitchingStepGroup", "SwitchingPlan"],
                            ["WorkTasks", "0..*", "0..1", "WorkTask", "SwitchingPlan"]
                        ]
                    )
                );
            }
        }

        /**
         * Lowered capability because of deterioration or inadequacy (sometimes referred to as derating or partial outage) or other kind of operational rating change.
         *
         */
        class OperationalUpdatedRating extends OperationalRestriction
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OperationalUpdatedRating;
                if (null == bucket)
                   cim_data.OperationalUpdatedRating = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalUpdatedRating[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalRestriction.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalUpdatedRating";
                base.parse_element (/<cim:OperationalUpdatedRating.changeType>([\s\S]*?)<\/cim:OperationalUpdatedRating.changeType>/g, obj, "changeType", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalUpdatedRating.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                var bucket = context.parsed.OperationalUpdatedRating;
                if (null == bucket)
                   context.parsed.OperationalUpdatedRating = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalRestriction.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperationalUpdatedRating", "changeType", "changeType",  base.from_string, fields);
                base.export_attribute (obj, "OperationalUpdatedRating", "PlannedOutage", "PlannedOutage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="OperationalUpdatedRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.template.call (this) +
                    `
                    {{#changeType}}<div><b>changeType</b>: {{changeType}}</div>{{/changeType}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedOutage}}&quot;);}); return false;'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OperationalUpdatedRating_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalUpdatedRating_collapse" style="margin-left: 10px;">OperationalUpdatedRating</a></legend>
                    <div id="{{id}}_OperationalUpdatedRating_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + OperationalRestriction.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_changeType'>changeType: </label><div class='col-sm-8'><input id='{{id}}_changeType' class='form-control' type='text'{{#changeType}} value='{{changeType}}'{{/changeType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationalUpdatedRating" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_changeType").value; if ("" != temp) obj.changeType = temp;
                temp = document.getElementById (id + "_PlannedOutage").value; if ("" != temp) obj.PlannedOutage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedOutage", "1", "0..*", "Outage", "UpdatedRatings"]
                        ]
                    )
                );
            }
        }

        /**
         * Safety document used to authorise work on conducting equipment in the field.
         *
         * Tagged equipment is not allowed to be operated.
         *
         */
        class ClearanceDocument extends SafetyDocument
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ClearanceDocument;
                if (null == bucket)
                   cim_data.ClearanceDocument = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ClearanceDocument[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SafetyDocument.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceDocument";
                base.parse_element (/<cim:ClearanceDocument.mustBeDeenergised>([\s\S]*?)<\/cim:ClearanceDocument.mustBeDeenergised>/g, obj, "mustBeDeenergised", base.to_boolean, sub, context);
                base.parse_element (/<cim:ClearanceDocument.mustBeGrounded>([\s\S]*?)<\/cim:ClearanceDocument.mustBeGrounded>/g, obj, "mustBeGrounded", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:ClearanceDocument.TaggedPSRs\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TaggedPSRs", sub, context);
                base.parse_attribute (/<cim:ClearanceDocument.ClearanceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ClearanceAction", sub, context);
                var bucket = context.parsed.ClearanceDocument;
                if (null == bucket)
                   context.parsed.ClearanceDocument = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SafetyDocument.prototype.export.call (this, obj, false);

                base.export_element (obj, "ClearanceDocument", "mustBeDeenergised", "mustBeDeenergised",  base.from_boolean, fields);
                base.export_element (obj, "ClearanceDocument", "mustBeGrounded", "mustBeGrounded",  base.from_boolean, fields);
                base.export_attributes (obj, "ClearanceDocument", "TaggedPSRs", "TaggedPSRs", fields);
                base.export_attribute (obj, "ClearanceDocument", "ClearanceAction", "ClearanceAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ClearanceDocument_collapse" aria-expanded="true" aria-controls="ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="ClearanceDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.template.call (this) +
                    `
                    {{#mustBeDeenergised}}<div><b>mustBeDeenergised</b>: {{mustBeDeenergised}}</div>{{/mustBeDeenergised}}
                    {{#mustBeGrounded}}<div><b>mustBeGrounded</b>: {{mustBeGrounded}}</div>{{/mustBeGrounded}}
                    {{#TaggedPSRs}}<div><b>TaggedPSRs</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TaggedPSRs}}
                    {{#ClearanceAction}}<div><b>ClearanceAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ClearanceAction}}&quot;);}); return false;'>{{ClearanceAction}}</a></div>{{/ClearanceAction}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TaggedPSRs) obj.TaggedPSRs_string = obj.TaggedPSRs.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TaggedPSRs_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ClearanceDocument_collapse" aria-expanded="true" aria-controls="{{id}}_ClearanceDocument_collapse" style="margin-left: 10px;">ClearanceDocument</a></legend>
                    <div id="{{id}}_ClearanceDocument_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SafetyDocument.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_mustBeDeenergised'>mustBeDeenergised: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_mustBeDeenergised' class='form-check-input' type='checkbox'{{#mustBeDeenergised}} checked{{/mustBeDeenergised}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_mustBeGrounded'>mustBeGrounded: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_mustBeGrounded' class='form-check-input' type='checkbox'{{#mustBeGrounded}} checked{{/mustBeGrounded}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TaggedPSRs'>TaggedPSRs: </label><div class='col-sm-8'><input id='{{id}}_TaggedPSRs' class='form-control' type='text'{{#TaggedPSRs}} value='{{TaggedPSRs_string}}'{{/TaggedPSRs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ClearanceAction'>ClearanceAction: </label><div class='col-sm-8'><input id='{{id}}_ClearanceAction' class='form-control' type='text'{{#ClearanceAction}} value='{{ClearanceAction}}'{{/ClearanceAction}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ClearanceDocument" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mustBeDeenergised").checked; if (temp) obj.mustBeDeenergised = true;
                temp = document.getElementById (id + "_mustBeGrounded").checked; if (temp) obj.mustBeGrounded = true;
                temp = document.getElementById (id + "_TaggedPSRs").value; if ("" != temp) obj.TaggedPSRs = temp.split (",");
                temp = document.getElementById (id + "_ClearanceAction").value; if ("" != temp) obj.ClearanceAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TaggedPSRs", "0..*", "0..*", "PowerSystemResource", "Clearances"],
                            ["ClearanceAction", "0..1", "0..1", "ClearanceAction", "Clearance"]
                        ]
                    )
                );
            }
        }

        /**
         * An arbitrary switching step.
         *
         */
        class GenericAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GenericAction;
                if (null == bucket)
                   cim_data.GenericAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenericAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GenericAction";
                base.parse_attribute (/<cim:GenericAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.GenericAction;
                if (null == bucket)
                   context.parsed.GenericAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GenericAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenericAction_collapse" aria-expanded="true" aria-controls="GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="GenericAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenericAction_collapse" aria-expanded="true" aria-controls="{{id}}_GenericAction_collapse" style="margin-left: 10px;">GenericAction</a></legend>
                    <div id="{{id}}_GenericAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GenericAction" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "GenericActions"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on clearance document as a switching step.
         *
         */
        class ClearanceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ClearanceAction;
                if (null == bucket)
                   cim_data.ClearanceAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ClearanceAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "ClearanceAction";
                base.parse_attribute (/<cim:ClearanceAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.Clearance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Clearance", sub, context);
                base.parse_attribute (/<cim:ClearanceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.ClearanceAction;
                if (null == bucket)
                   context.parsed.ClearanceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ClearanceAction", "kind", "kind", fields);
                base.export_attribute (obj, "ClearanceAction", "Clearance", "Clearance", fields);
                base.export_attribute (obj, "ClearanceAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ClearanceAction_collapse" aria-expanded="true" aria-controls="ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="ClearanceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Clearance}}<div><b>Clearance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Clearance}}&quot;);}); return false;'>{{Clearance}}</a></div>{{/Clearance}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindClearanceActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in ClearanceActionKind) obj.kindClearanceActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindClearanceActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ClearanceAction_collapse" aria-expanded="true" aria-controls="{{id}}_ClearanceAction_collapse" style="margin-left: 10px;">ClearanceAction</a></legend>
                    <div id="{{id}}_ClearanceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindClearanceActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindClearanceActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Clearance'>Clearance: </label><div class='col-sm-8'><input id='{{id}}_Clearance' class='form-control' type='text'{{#Clearance}} value='{{Clearance}}'{{/Clearance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ClearanceAction" };
                super.submit (id, obj);
                temp = ClearanceActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#ClearanceActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_Clearance").value; if ("" != temp) obj.Clearance = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Clearance", "0..1", "0..1", "ClearanceDocument", "ClearanceAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "ClearanceActions"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on ground as a switching step.
         *
         */
        class GroundAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GroundAction;
                if (null == bucket)
                   cim_data.GroundAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GroundAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "GroundAction";
                base.parse_attribute (/<cim:GroundAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:GroundAction.Ground\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Ground", sub, context);
                base.parse_attribute (/<cim:GroundAction.AlongACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegment", sub, context);
                base.parse_attribute (/<cim:GroundAction.GroundedEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundedEquipment", sub, context);
                base.parse_attribute (/<cim:GroundAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.GroundAction;
                if (null == bucket)
                   context.parsed.GroundAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "GroundAction", "kind", "kind", fields);
                base.export_attribute (obj, "GroundAction", "Ground", "Ground", fields);
                base.export_attribute (obj, "GroundAction", "AlongACLineSegment", "AlongACLineSegment", fields);
                base.export_attribute (obj, "GroundAction", "GroundedEquipment", "GroundedEquipment", fields);
                base.export_attribute (obj, "GroundAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GroundAction_collapse" aria-expanded="true" aria-controls="GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="GroundAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#Ground}}<div><b>Ground</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Ground}}&quot;);}); return false;'>{{Ground}}</a></div>{{/Ground}}
                    {{#AlongACLineSegment}}<div><b>AlongACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AlongACLineSegment}}&quot;);}); return false;'>{{AlongACLineSegment}}</a></div>{{/AlongACLineSegment}}
                    {{#GroundedEquipment}}<div><b>GroundedEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GroundedEquipment}}&quot;);}); return false;'>{{GroundedEquipment}}</a></div>{{/GroundedEquipment}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindTempEquipActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in TempEquipActionKind) obj.kindTempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindTempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GroundAction_collapse" aria-expanded="true" aria-controls="{{id}}_GroundAction_collapse" style="margin-left: 10px;">GroundAction</a></legend>
                    <div id="{{id}}_GroundAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Ground'>Ground: </label><div class='col-sm-8'><input id='{{id}}_Ground' class='form-control' type='text'{{#Ground}} value='{{Ground}}'{{/Ground}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AlongACLineSegment'>AlongACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_AlongACLineSegment' class='form-control' type='text'{{#AlongACLineSegment}} value='{{AlongACLineSegment}}'{{/AlongACLineSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundedEquipment'>GroundedEquipment: </label><div class='col-sm-8'><input id='{{id}}_GroundedEquipment' class='form-control' type='text'{{#GroundedEquipment}} value='{{GroundedEquipment}}'{{/GroundedEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GroundAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_Ground").value; if ("" != temp) obj.Ground = temp;
                temp = document.getElementById (id + "_AlongACLineSegment").value; if ("" != temp) obj.AlongACLineSegment = temp;
                temp = document.getElementById (id + "_GroundedEquipment").value; if ("" != temp) obj.GroundedEquipment = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Ground", "0..1", "0..1", "Ground", "GroundAction"],
                            ["AlongACLineSegment", "0..1", "0..1", "ACLineSegment", "LineGroundingAction"],
                            ["GroundedEquipment", "0..1", "0..1", "ConductingEquipment", "GroundingAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "GroundActions"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on cut as a switching step.
         *
         */
        class CutAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CutAction;
                if (null == bucket)
                   cim_data.CutAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CutAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "CutAction";
                base.parse_attribute (/<cim:CutAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:CutAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                base.parse_attribute (/<cim:CutAction.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);
                var bucket = context.parsed.CutAction;
                if (null == bucket)
                   context.parsed.CutAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "CutAction", "kind", "kind", fields);
                base.export_attribute (obj, "CutAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                base.export_attribute (obj, "CutAction", "Cut", "Cut", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CutAction_collapse" aria-expanded="true" aria-controls="CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="CutAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    {{#Cut}}<div><b>Cut</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Cut}}&quot;);}); return false;'>{{Cut}}</a></div>{{/Cut}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindTempEquipActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in TempEquipActionKind) obj.kindTempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindTempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CutAction_collapse" aria-expanded="true" aria-controls="{{id}}_CutAction_collapse" style="margin-left: 10px;">CutAction</a></legend>
                    <div id="{{id}}_CutAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Cut'>Cut: </label><div class='col-sm-8'><input id='{{id}}_Cut' class='form-control' type='text'{{#Cut}} value='{{Cut}}'{{/Cut}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CutAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;
                temp = document.getElementById (id + "_Cut").value; if ("" != temp) obj.Cut = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "CutActions"],
                            ["Cut", "0..1", "0..1", "Cut", "CutAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on switch as a switching step.
         *
         */
        class SwitchAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchAction;
                if (null == bucket)
                   cim_data.SwitchAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchAction";
                base.parse_attribute (/<cim:SwitchAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:SwitchAction.PlannedOutage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PlannedOutage", sub, context);
                base.parse_attribute (/<cim:SwitchAction.OperatedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatedSwitch", sub, context);
                base.parse_attribute (/<cim:SwitchAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.SwitchAction;
                if (null == bucket)
                   context.parsed.SwitchAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchAction", "kind", "kind", fields);
                base.export_attribute (obj, "SwitchAction", "PlannedOutage", "PlannedOutage", fields);
                base.export_attribute (obj, "SwitchAction", "OperatedSwitch", "OperatedSwitch", fields);
                base.export_attribute (obj, "SwitchAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchAction_collapse" aria-expanded="true" aria-controls="SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="SwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#PlannedOutage}}<div><b>PlannedOutage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PlannedOutage}}&quot;);}); return false;'>{{PlannedOutage}}</a></div>{{/PlannedOutage}}
                    {{#OperatedSwitch}}<div><b>OperatedSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperatedSwitch}}&quot;);}); return false;'>{{OperatedSwitch}}</a></div>{{/OperatedSwitch}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindSwitchActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in SwitchActionKind) obj.kindSwitchActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindSwitchActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchAction_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchAction_collapse" style="margin-left: 10px;">SwitchAction</a></legend>
                    <div id="{{id}}_SwitchAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindSwitchActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindSwitchActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PlannedOutage'>PlannedOutage: </label><div class='col-sm-8'><input id='{{id}}_PlannedOutage' class='form-control' type='text'{{#PlannedOutage}} value='{{PlannedOutage}}'{{/PlannedOutage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperatedSwitch'>OperatedSwitch: </label><div class='col-sm-8'><input id='{{id}}_OperatedSwitch' class='form-control' type='text'{{#OperatedSwitch}} value='{{OperatedSwitch}}'{{/OperatedSwitch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchAction" };
                super.submit (id, obj);
                temp = SwitchActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#SwitchActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_PlannedOutage").value; if ("" != temp) obj.PlannedOutage = temp;
                temp = document.getElementById (id + "_OperatedSwitch").value; if ("" != temp) obj.OperatedSwitch = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PlannedOutage", "0..1", "0..*", "Outage", "PlannedSwitchActions"],
                            ["OperatedSwitch", "0..1", "0..1", "Switch", "SwitchAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "SwitchActions"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on jumper as a switching step.
         *
         */
        class JumperAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.JumperAction;
                if (null == bucket)
                   cim_data.JumperAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.JumperAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "JumperAction";
                base.parse_attribute (/<cim:JumperAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attributes (/<cim:JumperAction.AlongACLineSegments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AlongACLineSegments", sub, context);
                base.parse_attribute (/<cim:JumperAction.Jumper\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Jumper", sub, context);
                base.parse_attribute (/<cim:JumperAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                base.parse_attributes (/<cim:JumperAction.JumpedEquipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumpedEquipments", sub, context);
                var bucket = context.parsed.JumperAction;
                if (null == bucket)
                   context.parsed.JumperAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "JumperAction", "kind", "kind", fields);
                base.export_attributes (obj, "JumperAction", "AlongACLineSegments", "AlongACLineSegments", fields);
                base.export_attribute (obj, "JumperAction", "Jumper", "Jumper", fields);
                base.export_attribute (obj, "JumperAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                base.export_attributes (obj, "JumperAction", "JumpedEquipments", "JumpedEquipments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#JumperAction_collapse" aria-expanded="true" aria-controls="JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="JumperAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#AlongACLineSegments}}<div><b>AlongACLineSegments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/AlongACLineSegments}}
                    {{#Jumper}}<div><b>Jumper</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Jumper}}&quot;);}); return false;'>{{Jumper}}</a></div>{{/Jumper}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    {{#JumpedEquipments}}<div><b>JumpedEquipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/JumpedEquipments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindTempEquipActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in TempEquipActionKind) obj.kindTempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.AlongACLineSegments) obj.AlongACLineSegments_string = obj.AlongACLineSegments.join ();
                if (obj.JumpedEquipments) obj.JumpedEquipments_string = obj.JumpedEquipments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindTempEquipActionKind;
                delete obj.AlongACLineSegments_string;
                delete obj.JumpedEquipments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_JumperAction_collapse" aria-expanded="true" aria-controls="{{id}}_JumperAction_collapse" style="margin-left: 10px;">JumperAction</a></legend>
                    <div id="{{id}}_JumperAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Jumper'>Jumper: </label><div class='col-sm-8'><input id='{{id}}_Jumper' class='form-control' type='text'{{#Jumper}} value='{{Jumper}}'{{/Jumper}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "JumperAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_Jumper").value; if ("" != temp) obj.Jumper = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AlongACLineSegments", "0..*", "0..1", "ACLineSegment", "LineJumpingAction"],
                            ["Jumper", "0..1", "0..1", "Jumper", "JumperAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "JumperActions"],
                            ["JumpedEquipments", "0..*", "0..1", "ConductingEquipment", "JumpingAction"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on operation tag as a switching step.
         *
         */
        class TagAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TagAction;
                if (null == bucket)
                   cim_data.TagAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TagAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "TagAction";
                base.parse_attribute (/<cim:TagAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:TagAction.OperationTag\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationTag", sub, context);
                base.parse_attribute (/<cim:TagAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.TagAction;
                if (null == bucket)
                   context.parsed.TagAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TagAction", "kind", "kind", fields);
                base.export_attribute (obj, "TagAction", "OperationTag", "OperationTag", fields);
                base.export_attribute (obj, "TagAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TagAction_collapse" aria-expanded="true" aria-controls="TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="TagAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#OperationTag}}<div><b>OperationTag</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperationTag}}&quot;);}); return false;'>{{OperationTag}}</a></div>{{/OperationTag}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindTagActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in TagActionKind) obj.kindTagActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindTagActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TagAction_collapse" aria-expanded="true" aria-controls="{{id}}_TagAction_collapse" style="margin-left: 10px;">TagAction</a></legend>
                    <div id="{{id}}_TagAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTagActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTagActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationTag'>OperationTag: </label><div class='col-sm-8'><input id='{{id}}_OperationTag' class='form-control' type='text'{{#OperationTag}} value='{{OperationTag}}'{{/OperationTag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TagAction" };
                super.submit (id, obj);
                temp = TagActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TagActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_OperationTag").value; if ("" != temp) obj.OperationTag = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationTag", "0..1", "0..1", "OperationTag", "TagAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "TagActions"]
                        ]
                    )
                );
            }
        }

        /**
         * Action on energy source as a switching step.
         *
         */
        class EnergySourceAction extends SwitchingStep
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergySourceAction;
                if (null == bucket)
                   cim_data.EnergySourceAction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergySourceAction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SwitchingStep.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySourceAction";
                base.parse_attribute (/<cim:EnergySourceAction.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                base.parse_attribute (/<cim:EnergySourceAction.SwitchingStepGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchingStepGroup", sub, context);
                var bucket = context.parsed.EnergySourceAction;
                if (null == bucket)
                   context.parsed.EnergySourceAction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SwitchingStep.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EnergySourceAction", "kind", "kind", fields);
                base.export_attribute (obj, "EnergySourceAction", "EnergySource", "EnergySource", fields);
                base.export_attribute (obj, "EnergySourceAction", "SwitchingStepGroup", "SwitchingStepGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergySourceAction_collapse" aria-expanded="true" aria-controls="EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="EnergySourceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#EnergySource}}<div><b>EnergySource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergySource}}&quot;);}); return false;'>{{EnergySource}}</a></div>{{/EnergySource}}
                    {{#SwitchingStepGroup}}<div><b>SwitchingStepGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchingStepGroup}}&quot;);}); return false;'>{{SwitchingStepGroup}}</a></div>{{/SwitchingStepGroup}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindTempEquipActionKind = [{ id: '', selected: (!obj.kind)}]; for (var property in TempEquipActionKind) obj.kindTempEquipActionKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindTempEquipActionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergySourceAction_collapse" aria-expanded="true" aria-controls="{{id}}_EnergySourceAction_collapse" style="margin-left: 10px;">EnergySourceAction</a></legend>
                    <div id="{{id}}_EnergySourceAction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SwitchingStep.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindTempEquipActionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindTempEquipActionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergySource'>EnergySource: </label><div class='col-sm-8'><input id='{{id}}_EnergySource' class='form-control' type='text'{{#EnergySource}} value='{{EnergySource}}'{{/EnergySource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchingStepGroup'>SwitchingStepGroup: </label><div class='col-sm-8'><input id='{{id}}_SwitchingStepGroup' class='form-control' type='text'{{#SwitchingStepGroup}} value='{{SwitchingStepGroup}}'{{/SwitchingStepGroup}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergySourceAction" };
                super.submit (id, obj);
                temp = TempEquipActionKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#TempEquipActionKind." + temp; else delete obj.kind;
                temp = document.getElementById (id + "_EnergySource").value; if ("" != temp) obj.EnergySource = temp;
                temp = document.getElementById (id + "_SwitchingStepGroup").value; if ("" != temp) obj.SwitchingStepGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergySource", "0..1", "0..1", "EnergySource", "EnergySourceAction"],
                            ["SwitchingStepGroup", "0..1", "0..*", "SwitchingStepGroup", "EnergySourceActions"]
                        ]
                    )
                );
            }
        }

        return (
            {
                ClearanceAction: ClearanceAction,
                Outage: Outage,
                PSREvent: PSREvent,
                SafetyDocument: SafetyDocument,
                SwitchingPlan: SwitchingPlan,
                JumperAction: JumperAction,
                ClearanceDocument: ClearanceDocument,
                SwitchingStepGroup: SwitchingStepGroup,
                TempEquipActionKind: TempEquipActionKind,
                SwitchActionKind: SwitchActionKind,
                OperationalUpdatedRating: OperationalUpdatedRating,
                SwitchAction: SwitchAction,
                CutAction: CutAction,
                OperationTag: OperationTag,
                PSREventKind: PSREventKind,
                OperationalRestriction: OperationalRestriction,
                ServicePointOutageSummary: ServicePointOutageSummary,
                ClearanceActionKind: ClearanceActionKind,
                GenericAction: GenericAction,
                GroundAction: GroundAction,
                SwitchingStep: SwitchingStep,
                OutageSchedule: OutageSchedule,
                TagAction: TagAction,
                EnergySourceAction: EnergySourceAction,
                Incident: Incident,
                TagActionKind: TagActionKind
            }
        );
    }
);