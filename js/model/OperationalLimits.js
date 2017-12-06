define
(
    ["model/base", "model/Core"],
    /**
     * This package models a specification of limits associated with equipment and other operational entities.
     *
     */
    function (base, Core)
    {

        /**
         * The direction attribute describes the side of  a limit that is a violation.
         *
         */
        var OperationalLimitDirectionKind =
        {
            high: "high",
            low: "low",
            absoluteValue: "absoluteValue"
        };
        Object.freeze (OperationalLimitDirectionKind);

        /**
         * A set of limits associated with equipment.
         *
         * Sets of limits might apply to a specific temperature, or season for example. A set of limits may contain different severities of limit levels that would apply to the same equipment. The set may contain limits of different types such as apparent power and current limits or high and low voltage limits  that are logically applied together as a set.
         *
         */
        class OperationalLimitSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimitSet;
                if (null == bucket)
                   cim_data.OperationalLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitSet";
                base.parse_attribute (/<cim:OperationalLimitSet.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:OperationalLimitSet.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);

                var bucket = context.parsed.OperationalLimitSet;
                if (null == bucket)
                   context.parsed.OperationalLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalLimitSet", "Terminal", fields);
                base.export_attribute (obj, "OperationalLimitSet", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimitSet_collapse" aria-expanded="true" aria-controls="OperationalLimitSet_collapse" style="margin-left: 10px;">OperationalLimitSet</a></legend>
                    <div id="OperationalLimitSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimitSet_collapse" aria-expanded="true" aria-controls="OperationalLimitSet_collapse" style="margin-left: 10px;">OperationalLimitSet</a></legend>
                    <div id="OperationalLimitSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Equipment'>Equipment: </label><div class='col-sm-8'><input id='Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A value associated with a specific kind of limit.
         *
         * The sub class value attribute shall be positive.
         *
         */
        class OperationalLimit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimit;
                if (null == bucket)
                   cim_data.OperationalLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimit";
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitSet", sub, context);
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitType", sub, context);

                var bucket = context.parsed.OperationalLimit;
                if (null == bucket)
                   context.parsed.OperationalLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalLimit", "OperationalLimitSet", fields);
                base.export_attribute (obj, "OperationalLimit", "OperationalLimitType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimit_collapse" aria-expanded="true" aria-controls="OperationalLimit_collapse" style="margin-left: 10px;">OperationalLimit</a></legend>
                    <div id="OperationalLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#OperationalLimitSet}}<div><b>OperationalLimitSet</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperationalLimitSet}}&quot;);})'>{{OperationalLimitSet}}</a></div>{{/OperationalLimitSet}}
                    {{#OperationalLimitType}}<div><b>OperationalLimitType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OperationalLimitType}}&quot;);})'>{{OperationalLimitType}}</a></div>{{/OperationalLimitType}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimit_collapse" aria-expanded="true" aria-controls="OperationalLimit_collapse" style="margin-left: 10px;">OperationalLimit</a></legend>
                    <div id="OperationalLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperationalLimitSet'>OperationalLimitSet: </label><div class='col-sm-8'><input id='OperationalLimitSet' class='form-control' type='text'{{#OperationalLimitSet}} value='{{OperationalLimitSet}}'{{/OperationalLimitSet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='OperationalLimitType'>OperationalLimitType: </label><div class='col-sm-8'><input id='OperationalLimitType' class='form-control' type='text'{{#OperationalLimitType}} value='{{OperationalLimitType}}'{{/OperationalLimitType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A specific directed terminal flow for a branch group.
         *
         */
        class BranchGroupTerminal extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchGroupTerminal;
                if (null == bucket)
                   cim_data.BranchGroupTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchGroupTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BranchGroupTerminal";
                base.parse_element (/<cim:BranchGroupTerminal.positiveFlowIn>([\s\S]*?)<\/cim:BranchGroupTerminal.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:BranchGroupTerminal.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context);
                base.parse_attribute (/<cim:BranchGroupTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);

                var bucket = context.parsed.BranchGroupTerminal;
                if (null == bucket)
                   context.parsed.BranchGroupTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "BranchGroupTerminal", "positiveFlowIn", base.from_boolean, fields);
                base.export_attribute (obj, "BranchGroupTerminal", "BranchGroup", fields);
                base.export_attribute (obj, "BranchGroupTerminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchGroupTerminal_collapse" aria-expanded="true" aria-controls="BranchGroupTerminal_collapse" style="margin-left: 10px;">BranchGroupTerminal</a></legend>
                    <div id="BranchGroupTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#positiveFlowIn}}<div><b>positiveFlowIn</b>: {{positiveFlowIn}}</div>{{/positiveFlowIn}}
                    {{#BranchGroup}}<div><b>BranchGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BranchGroup}}&quot;);})'>{{BranchGroup}}</a></div>{{/BranchGroup}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);})'>{{Terminal}}</a></div>{{/Terminal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchGroupTerminal_collapse" aria-expanded="true" aria-controls="BranchGroupTerminal_collapse" style="margin-left: 10px;">BranchGroupTerminal</a></legend>
                    <div id="BranchGroupTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='positiveFlowIn'>positiveFlowIn: </label><div class='col-sm-8'><input id='positiveFlowIn' class='form-check-input' type='checkbox'{{#positiveFlowIn}} checked{{/positiveFlowIn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BranchGroup'>BranchGroup: </label><div class='col-sm-8'><input id='BranchGroup' class='form-control' type='text'{{#BranchGroup}} value='{{BranchGroup}}'{{/BranchGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * A group of branch terminals whose directed flow summation is to be monitored.
         *
         * A branch group need not form a cutset of the network.
         *
         */
        class BranchGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchGroup;
                if (null == bucket)
                   cim_data.BranchGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BranchGroup";
                base.parse_element (/<cim:BranchGroup.maximumActivePower>([\s\S]*?)<\/cim:BranchGroup.maximumActivePower>/g, obj, "maximumActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.maximumReactivePower>([\s\S]*?)<\/cim:BranchGroup.maximumReactivePower>/g, obj, "maximumReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.minimumActivePower>([\s\S]*?)<\/cim:BranchGroup.minimumActivePower>/g, obj, "minimumActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.minimumReactivePower>([\s\S]*?)<\/cim:BranchGroup.minimumReactivePower>/g, obj, "minimumReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.monitorActivePower>([\s\S]*?)<\/cim:BranchGroup.monitorActivePower>/g, obj, "monitorActivePower", base.to_boolean, sub, context);
                base.parse_element (/<cim:BranchGroup.monitorReactivePower>([\s\S]*?)<\/cim:BranchGroup.monitorReactivePower>/g, obj, "monitorReactivePower", base.to_boolean, sub, context);

                var bucket = context.parsed.BranchGroup;
                if (null == bucket)
                   context.parsed.BranchGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BranchGroup", "maximumActivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "maximumReactivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumActivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumReactivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "monitorActivePower", base.from_boolean, fields);
                base.export_element (obj, "BranchGroup", "monitorReactivePower", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchGroup_collapse" aria-expanded="true" aria-controls="BranchGroup_collapse" style="margin-left: 10px;">BranchGroup</a></legend>
                    <div id="BranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#maximumActivePower}}<div><b>maximumActivePower</b>: {{maximumActivePower}}</div>{{/maximumActivePower}}
                    {{#maximumReactivePower}}<div><b>maximumReactivePower</b>: {{maximumReactivePower}}</div>{{/maximumReactivePower}}
                    {{#minimumActivePower}}<div><b>minimumActivePower</b>: {{minimumActivePower}}</div>{{/minimumActivePower}}
                    {{#minimumReactivePower}}<div><b>minimumReactivePower</b>: {{minimumReactivePower}}</div>{{/minimumReactivePower}}
                    {{#monitorActivePower}}<div><b>monitorActivePower</b>: {{monitorActivePower}}</div>{{/monitorActivePower}}
                    {{#monitorReactivePower}}<div><b>monitorReactivePower</b>: {{monitorReactivePower}}</div>{{/monitorReactivePower}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BranchGroup_collapse" aria-expanded="true" aria-controls="BranchGroup_collapse" style="margin-left: 10px;">BranchGroup</a></legend>
                    <div id="BranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumActivePower'>maximumActivePower: </label><div class='col-sm-8'><input id='maximumActivePower' class='form-control' type='text'{{#maximumActivePower}} value='{{maximumActivePower}}'{{/maximumActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maximumReactivePower'>maximumReactivePower: </label><div class='col-sm-8'><input id='maximumReactivePower' class='form-control' type='text'{{#maximumReactivePower}} value='{{maximumReactivePower}}'{{/maximumReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumActivePower'>minimumActivePower: </label><div class='col-sm-8'><input id='minimumActivePower' class='form-control' type='text'{{#minimumActivePower}} value='{{minimumActivePower}}'{{/minimumActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='minimumReactivePower'>minimumReactivePower: </label><div class='col-sm-8'><input id='minimumReactivePower' class='form-control' type='text'{{#minimumReactivePower}} value='{{minimumReactivePower}}'{{/minimumReactivePower}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='monitorActivePower'>monitorActivePower: </label><div class='col-sm-8'><input id='monitorActivePower' class='form-check-input' type='checkbox'{{#monitorActivePower}} checked{{/monitorActivePower}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='monitorReactivePower'>monitorReactivePower: </label><div class='col-sm-8'><input id='monitorReactivePower' class='form-check-input' type='checkbox'{{#monitorReactivePower}} checked{{/monitorReactivePower}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * The operational meaning of a category of limits.
         *
         */
        class OperationalLimitType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimitType;
                if (null == bucket)
                   cim_data.OperationalLimitType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimitType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitType";
                base.parse_element (/<cim:OperationalLimitType.acceptableDuration>([\s\S]*?)<\/cim:OperationalLimitType.acceptableDuration>/g, obj, "acceptableDuration", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalLimitType.direction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "direction", sub, context);
                base.parse_attribute (/<cim:OperationalLimitType.TargetOperationalLimitmTypeScaling\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetOperationalLimitmTypeScaling", sub, context);

                var bucket = context.parsed.OperationalLimitType;
                if (null == bucket)
                   context.parsed.OperationalLimitType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "OperationalLimitType", "acceptableDuration", base.from_string, fields);
                base.export_element (obj, "OperationalLimitType", "direction", base.from_string, fields);
                base.export_attribute (obj, "OperationalLimitType", "TargetOperationalLimitmTypeScaling", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimitType_collapse" aria-expanded="true" aria-controls="OperationalLimitType_collapse" style="margin-left: 10px;">OperationalLimitType</a></legend>
                    <div id="OperationalLimitType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#acceptableDuration}}<div><b>acceptableDuration</b>: {{acceptableDuration}}</div>{{/acceptableDuration}}
                    {{#direction}}<div><b>direction</b>: {{direction}}</div>{{/direction}}
                    {{#TargetOperationalLimitmTypeScaling}}<div><b>TargetOperationalLimitmTypeScaling</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TargetOperationalLimitmTypeScaling}}&quot;);})'>{{TargetOperationalLimitmTypeScaling}}</a></div>{{/TargetOperationalLimitmTypeScaling}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.OperationalLimitDirectionKind = []; if (!obj.direction) obj.OperationalLimitDirectionKind.push ({ id: '', selected: true}); for (var property in OperationalLimitDirectionKind) obj.OperationalLimitDirectionKind.push ({ id: property, selected: obj.direction && obj.direction.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OperationalLimitDirectionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#OperationalLimitType_collapse" aria-expanded="true" aria-controls="OperationalLimitType_collapse" style="margin-left: 10px;">OperationalLimitType</a></legend>
                    <div id="OperationalLimitType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='acceptableDuration'>acceptableDuration: </label><div class='col-sm-8'><input id='acceptableDuration' class='form-control' type='text'{{#acceptableDuration}} value='{{acceptableDuration}}'{{/acceptableDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='direction'>direction: </label><div class='col-sm-8'><select id='direction' class='form-control'>{{#OperationalLimitDirectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/OperationalLimitDirectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TargetOperationalLimitmTypeScaling'>TargetOperationalLimitmTypeScaling: </label><div class='col-sm-8'><input id='TargetOperationalLimitmTypeScaling' class='form-control' type='text'{{#TargetOperationalLimitmTypeScaling}} value='{{TargetOperationalLimitmTypeScaling}}'{{/TargetOperationalLimitmTypeScaling}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Operational limit on current.
         *
         */
        class CurrentLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentLimit;
                if (null == bucket)
                   cim_data.CurrentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentLimit";
                base.parse_element (/<cim:CurrentLimit.value>([\s\S]*?)<\/cim:CurrentLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.CurrentLimit;
                if (null == bucket)
                   context.parsed.CurrentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "CurrentLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentLimit_collapse" aria-expanded="true" aria-controls="CurrentLimit_collapse" style="margin-left: 10px;">CurrentLimit</a></legend>
                    <div id="CurrentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentLimit_collapse" aria-expanded="true" aria-controls="CurrentLimit_collapse" style="margin-left: 10px;">CurrentLimit</a></legend>
                    <div id="CurrentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Apparent power limit.
         *
         */
        class ApparentPowerLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ApparentPowerLimit;
                if (null == bucket)
                   cim_data.ApparentPowerLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ApparentPowerLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "ApparentPowerLimit";
                base.parse_element (/<cim:ApparentPowerLimit.value>([\s\S]*?)<\/cim:ApparentPowerLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ApparentPowerLimit;
                if (null == bucket)
                   context.parsed.ApparentPowerLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ApparentPowerLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ApparentPowerLimit_collapse" aria-expanded="true" aria-controls="ApparentPowerLimit_collapse" style="margin-left: 10px;">ApparentPowerLimit</a></legend>
                    <div id="ApparentPowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ApparentPowerLimit_collapse" aria-expanded="true" aria-controls="ApparentPowerLimit_collapse" style="margin-left: 10px;">ApparentPowerLimit</a></legend>
                    <div id="ApparentPowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Operational limit applied to voltage.
         *
         */
        class VoltageLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VoltageLimit;
                if (null == bucket)
                   cim_data.VoltageLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VoltageLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageLimit";
                base.parse_element (/<cim:VoltageLimit.value>([\s\S]*?)<\/cim:VoltageLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.VoltageLimit;
                if (null == bucket)
                   context.parsed.VoltageLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "VoltageLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageLimit_collapse" aria-expanded="true" aria-controls="VoltageLimit_collapse" style="margin-left: 10px;">VoltageLimit</a></legend>
                    <div id="VoltageLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltageLimit_collapse" aria-expanded="true" aria-controls="VoltageLimit_collapse" style="margin-left: 10px;">VoltageLimit</a></legend>
                    <div id="VoltageLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        /**
         * Limit on active power flow.
         *
         */
        class ActivePowerLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePowerLimit;
                if (null == bucket)
                   cim_data.ActivePowerLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePowerLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerLimit";
                base.parse_element (/<cim:ActivePowerLimit.value>([\s\S]*?)<\/cim:ActivePowerLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ActivePowerLimit;
                if (null == bucket)
                   context.parsed.ActivePowerLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = OperationalLimit.prototype.export.call (this, obj, false);

                base.export_element (obj, "ActivePowerLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePowerLimit_collapse" aria-expanded="true" aria-controls="ActivePowerLimit_collapse" style="margin-left: 10px;">ActivePowerLimit</a></legend>
                    <div id="ActivePowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePowerLimit_collapse" aria-expanded="true" aria-controls="ActivePowerLimit_collapse" style="margin-left: 10px;">ActivePowerLimit</a></legend>
                    <div id="ActivePowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                OperationalLimit: OperationalLimit,
                BranchGroup: BranchGroup,
                OperationalLimitType: OperationalLimitType,
                ActivePowerLimit: ActivePowerLimit,
                OperationalLimitSet: OperationalLimitSet,
                BranchGroupTerminal: BranchGroupTerminal,
                ApparentPowerLimit: ApparentPowerLimit,
                CurrentLimit: CurrentLimit,
                VoltageLimit: VoltageLimit
            }
        );
    }
);