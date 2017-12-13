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
                var bucket = cim_data.OperationalLimitSet;
                if (null == bucket)
                   cim_data.OperationalLimitSet = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalLimitSet[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitSet";
                base.parse_attributes (/<cim:OperationalLimitSet.OperationalLimitValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitValue", sub, context);
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

                base.export_attributes (obj, "OperationalLimitSet", "OperationalLimitValue", "OperationalLimitValue", fields);
                base.export_attribute (obj, "OperationalLimitSet", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "OperationalLimitSet", "Equipment", "Equipment", fields);
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
                    {{#OperationalLimitValue}}<div><b>OperationalLimitValue</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OperationalLimitValue}}
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
                if (obj.OperationalLimitValue) obj.OperationalLimitValue_string = obj.OperationalLimitValue.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OperationalLimitValue_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_OperationalLimitSet_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalLimitSet_collapse" style="margin-left: 10px;">OperationalLimitSet</a></legend>
                    <div id="{{id}}_OperationalLimitSet_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Equipment'>Equipment: </label><div class='col-sm-8'><input id='{{id}}_Equipment' class='form-control' type='text'{{#Equipment}} value='{{Equipment}}'{{/Equipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationalLimitSet" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;
                temp = document.getElementById (id + "_Equipment").value; if ("" != temp) obj.Equipment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationalLimitValue", "0..*", "1", "OperationalLimit", "OperationalLimitSet"],
                            ["Terminal", "0..1", "0..*", "ACDCTerminal", "OperationalLimitSet"],
                            ["Equipment", "0..1", "0..*", "Equipment", "OperationalLimitSet"]
                        ]
                    )
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
                var bucket = cim_data.OperationalLimit;
                if (null == bucket)
                   cim_data.OperationalLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalLimit[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimit";
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitSet", sub, context);
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitType", sub, context);
                base.parse_attributes (/<cim:OperationalLimit.LimitScalingLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitScalingLimit", sub, context);
                base.parse_attributes (/<cim:OperationalLimit.LimitDependencyModel\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LimitDependencyModel", sub, context);
                var bucket = context.parsed.OperationalLimit;
                if (null == bucket)
                   context.parsed.OperationalLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "OperationalLimit", "OperationalLimitSet", "OperationalLimitSet", fields);
                base.export_attribute (obj, "OperationalLimit", "OperationalLimitType", "OperationalLimitType", fields);
                base.export_attributes (obj, "OperationalLimit", "LimitScalingLimit", "LimitScalingLimit", fields);
                base.export_attributes (obj, "OperationalLimit", "LimitDependencyModel", "LimitDependencyModel", fields);
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
                    {{#LimitScalingLimit}}<div><b>LimitScalingLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LimitScalingLimit}}
                    {{#LimitDependencyModel}}<div><b>LimitDependencyModel</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/LimitDependencyModel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LimitScalingLimit) obj.LimitScalingLimit_string = obj.LimitScalingLimit.join ();
                if (obj.LimitDependencyModel) obj.LimitDependencyModel_string = obj.LimitDependencyModel.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LimitScalingLimit_string;
                delete obj.LimitDependencyModel_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_OperationalLimit_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalLimit_collapse" style="margin-left: 10px;">OperationalLimit</a></legend>
                    <div id="{{id}}_OperationalLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationalLimitSet'>OperationalLimitSet: </label><div class='col-sm-8'><input id='{{id}}_OperationalLimitSet' class='form-control' type='text'{{#OperationalLimitSet}} value='{{OperationalLimitSet}}'{{/OperationalLimitSet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperationalLimitType'>OperationalLimitType: </label><div class='col-sm-8'><input id='{{id}}_OperationalLimitType' class='form-control' type='text'{{#OperationalLimitType}} value='{{OperationalLimitType}}'{{/OperationalLimitType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LimitDependencyModel'>LimitDependencyModel: </label><div class='col-sm-8'><input id='{{id}}_LimitDependencyModel' class='form-control' type='text'{{#LimitDependencyModel}} value='{{LimitDependencyModel}}_string'{{/LimitDependencyModel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationalLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_OperationalLimitSet").value; if ("" != temp) obj.OperationalLimitSet = temp;
                temp = document.getElementById (id + "_OperationalLimitType").value; if ("" != temp) obj.OperationalLimitType = temp;
                temp = document.getElementById (id + "_LimitDependencyModel").value; if ("" != temp) obj.LimitDependencyModel = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationalLimitSet", "1", "0..*", "OperationalLimitSet", "OperationalLimitValue"],
                            ["OperationalLimitType", "0..1", "0..*", "OperationalLimitType", "OperationalLimit"],
                            ["LimitScalingLimit", "0..*", "1", "LimitScalingLimit", "SourceOperationalLimit"],
                            ["LimitDependencyModel", "0..*", "0..*", "LimitDependency", "OperationalLimit"]
                        ]
                    )
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
                var bucket = cim_data.BranchGroupTerminal;
                if (null == bucket)
                   cim_data.BranchGroupTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BranchGroupTerminal[obj.id];
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

                base.export_element (obj, "BranchGroupTerminal", "positiveFlowIn", "positiveFlowIn",  base.from_boolean, fields);
                base.export_attribute (obj, "BranchGroupTerminal", "BranchGroup", "BranchGroup", fields);
                base.export_attribute (obj, "BranchGroupTerminal", "Terminal", "Terminal", fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_BranchGroupTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_BranchGroupTerminal_collapse" style="margin-left: 10px;">BranchGroupTerminal</a></legend>
                    <div id="{{id}}_BranchGroupTerminal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_positiveFlowIn'>positiveFlowIn: </label><div class='col-sm-8'><input id='{{id}}_positiveFlowIn' class='form-check-input' type='checkbox'{{#positiveFlowIn}} checked{{/positiveFlowIn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BranchGroup'>BranchGroup: </label><div class='col-sm-8'><input id='{{id}}_BranchGroup' class='form-control' type='text'{{#BranchGroup}} value='{{BranchGroup}}'{{/BranchGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BranchGroupTerminal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_positiveFlowIn").checked; if (temp) obj.positiveFlowIn = true;
                temp = document.getElementById (id + "_BranchGroup").value; if ("" != temp) obj.BranchGroup = temp;
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BranchGroup", "1", "0..*", "BranchGroup", "BranchGroupTerminal"],
                            ["Terminal", "1", "0..*", "Terminal", "BranchGroupTerminal"]
                        ]
                    )
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
                var bucket = cim_data.BranchGroup;
                if (null == bucket)
                   cim_data.BranchGroup = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BranchGroup[obj.id];
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
                base.parse_attributes (/<cim:BranchGroup.PinBranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PinBranchGroup", sub, context);
                base.parse_attributes (/<cim:BranchGroup.BranchGroupTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroupTerminal", sub, context);
                var bucket = context.parsed.BranchGroup;
                if (null == bucket)
                   context.parsed.BranchGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BranchGroup", "maximumActivePower", "maximumActivePower",  base.from_string, fields);
                base.export_element (obj, "BranchGroup", "maximumReactivePower", "maximumReactivePower",  base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumActivePower", "minimumActivePower",  base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumReactivePower", "minimumReactivePower",  base.from_string, fields);
                base.export_element (obj, "BranchGroup", "monitorActivePower", "monitorActivePower",  base.from_boolean, fields);
                base.export_element (obj, "BranchGroup", "monitorReactivePower", "monitorReactivePower",  base.from_boolean, fields);
                base.export_attributes (obj, "BranchGroup", "PinBranchGroup", "PinBranchGroup", fields);
                base.export_attributes (obj, "BranchGroup", "BranchGroupTerminal", "BranchGroupTerminal", fields);
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
                    {{#PinBranchGroup}}<div><b>PinBranchGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/PinBranchGroup}}
                    {{#BranchGroupTerminal}}<div><b>BranchGroupTerminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/BranchGroupTerminal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PinBranchGroup) obj.PinBranchGroup_string = obj.PinBranchGroup.join ();
                if (obj.BranchGroupTerminal) obj.BranchGroupTerminal_string = obj.BranchGroupTerminal.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PinBranchGroup_string;
                delete obj.BranchGroupTerminal_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_BranchGroup_collapse" aria-expanded="true" aria-controls="{{id}}_BranchGroup_collapse" style="margin-left: 10px;">BranchGroup</a></legend>
                    <div id="{{id}}_BranchGroup_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumActivePower'>maximumActivePower: </label><div class='col-sm-8'><input id='{{id}}_maximumActivePower' class='form-control' type='text'{{#maximumActivePower}} value='{{maximumActivePower}}'{{/maximumActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumReactivePower'>maximumReactivePower: </label><div class='col-sm-8'><input id='{{id}}_maximumReactivePower' class='form-control' type='text'{{#maximumReactivePower}} value='{{maximumReactivePower}}'{{/maximumReactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumActivePower'>minimumActivePower: </label><div class='col-sm-8'><input id='{{id}}_minimumActivePower' class='form-control' type='text'{{#minimumActivePower}} value='{{minimumActivePower}}'{{/minimumActivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumReactivePower'>minimumReactivePower: </label><div class='col-sm-8'><input id='{{id}}_minimumReactivePower' class='form-control' type='text'{{#minimumReactivePower}} value='{{minimumReactivePower}}'{{/minimumReactivePower}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_monitorActivePower'>monitorActivePower: </label><div class='col-sm-8'><input id='{{id}}_monitorActivePower' class='form-check-input' type='checkbox'{{#monitorActivePower}} checked{{/monitorActivePower}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_monitorReactivePower'>monitorReactivePower: </label><div class='col-sm-8'><input id='{{id}}_monitorReactivePower' class='form-check-input' type='checkbox'{{#monitorReactivePower}} checked{{/monitorReactivePower}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BranchGroup" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maximumActivePower").value; if ("" != temp) obj.maximumActivePower = temp;
                temp = document.getElementById (id + "_maximumReactivePower").value; if ("" != temp) obj.maximumReactivePower = temp;
                temp = document.getElementById (id + "_minimumActivePower").value; if ("" != temp) obj.minimumActivePower = temp;
                temp = document.getElementById (id + "_minimumReactivePower").value; if ("" != temp) obj.minimumReactivePower = temp;
                temp = document.getElementById (id + "_monitorActivePower").checked; if (temp) obj.monitorActivePower = true;
                temp = document.getElementById (id + "_monitorReactivePower").checked; if (temp) obj.monitorReactivePower = true;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PinBranchGroup", "0..*", "1", "PinBranchGroup", "BranchGroup"],
                            ["BranchGroupTerminal", "0..*", "1", "BranchGroupTerminal", "BranchGroup"]
                        ]
                    )
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
                var bucket = cim_data.OperationalLimitType;
                if (null == bucket)
                   cim_data.OperationalLimitType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OperationalLimitType[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitType";
                base.parse_element (/<cim:OperationalLimitType.acceptableDuration>([\s\S]*?)<\/cim:OperationalLimitType.acceptableDuration>/g, obj, "acceptableDuration", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalLimitType.direction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "direction", sub, context);
                base.parse_attributes (/<cim:OperationalLimitType.OperationalLimit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimit", sub, context);
                base.parse_attributes (/<cim:OperationalLimitType.SourceOperationalLimitTypeScaling\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SourceOperationalLimitTypeScaling", sub, context);
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

                base.export_element (obj, "OperationalLimitType", "acceptableDuration", "acceptableDuration",  base.from_string, fields);
                base.export_attribute (obj, "OperationalLimitType", "direction", "direction", fields);
                base.export_attributes (obj, "OperationalLimitType", "OperationalLimit", "OperationalLimit", fields);
                base.export_attributes (obj, "OperationalLimitType", "SourceOperationalLimitTypeScaling", "SourceOperationalLimitTypeScaling", fields);
                base.export_attribute (obj, "OperationalLimitType", "TargetOperationalLimitmTypeScaling", "TargetOperationalLimitmTypeScaling", fields);
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
                    {{#OperationalLimit}}<div><b>OperationalLimit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/OperationalLimit}}
                    {{#SourceOperationalLimitTypeScaling}}<div><b>SourceOperationalLimitTypeScaling</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/SourceOperationalLimitTypeScaling}}
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
                if (obj.OperationalLimit) obj.OperationalLimit_string = obj.OperationalLimit.join ();
                if (obj.SourceOperationalLimitTypeScaling) obj.SourceOperationalLimitTypeScaling_string = obj.SourceOperationalLimitTypeScaling.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.OperationalLimitDirectionKind;
                delete obj.OperationalLimit_string;
                delete obj.SourceOperationalLimitTypeScaling_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_OperationalLimitType_collapse" aria-expanded="true" aria-controls="{{id}}_OperationalLimitType_collapse" style="margin-left: 10px;">OperationalLimitType</a></legend>
                    <div id="{{id}}_OperationalLimitType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_acceptableDuration'>acceptableDuration: </label><div class='col-sm-8'><input id='{{id}}_acceptableDuration' class='form-control' type='text'{{#acceptableDuration}} value='{{acceptableDuration}}'{{/acceptableDuration}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_direction'>direction: </label><div class='col-sm-8'><select id='{{id}}_direction' class='form-control'>{{#OperationalLimitDirectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/OperationalLimitDirectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TargetOperationalLimitmTypeScaling'>TargetOperationalLimitmTypeScaling: </label><div class='col-sm-8'><input id='{{id}}_TargetOperationalLimitmTypeScaling' class='form-control' type='text'{{#TargetOperationalLimitmTypeScaling}} value='{{TargetOperationalLimitmTypeScaling}}'{{/TargetOperationalLimitmTypeScaling}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "OperationalLimitType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_acceptableDuration").value; if ("" != temp) obj.acceptableDuration = temp;
                temp = document.getElementById (id + "_direction").value; if ("" != temp) { temp = OperationalLimitDirectionKind[temp]; if ("undefined" != typeof (temp)) obj.direction = "#http://iec.ch/TC57/2013/CIM-schema-cim16#OperationalLimitDirectionKind." + temp; }
                temp = document.getElementById (id + "_TargetOperationalLimitmTypeScaling").value; if ("" != temp) obj.TargetOperationalLimitmTypeScaling = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["OperationalLimit", "0..*", "0..1", "OperationalLimit", "OperationalLimitType"],
                            ["SourceOperationalLimitTypeScaling", "0..*", "0..1", "OperatonalLimitTypeScaling", "SourceOperationalLimitType"],
                            ["TargetOperationalLimitmTypeScaling", "0..1", "1", "OperatonalLimitTypeScaling", "TargetOperationalLimit"]
                        ]
                    )
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
                var bucket = cim_data.CurrentLimit;
                if (null == bucket)
                   cim_data.CurrentLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentLimit[obj.id];
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

                base.export_element (obj, "CurrentLimit", "value", "value",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CurrentLimit_collapse" aria-expanded="true" aria-controls="{{id}}_CurrentLimit_collapse" style="margin-left: 10px;">CurrentLimit</a></legend>
                    <div id="{{id}}_CurrentLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CurrentLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ApparentPowerLimit;
                if (null == bucket)
                   cim_data.ApparentPowerLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ApparentPowerLimit[obj.id];
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

                base.export_element (obj, "ApparentPowerLimit", "value", "value",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ApparentPowerLimit_collapse" aria-expanded="true" aria-controls="{{id}}_ApparentPowerLimit_collapse" style="margin-left: 10px;">ApparentPowerLimit</a></legend>
                    <div id="{{id}}_ApparentPowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ApparentPowerLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.VoltageLimit;
                if (null == bucket)
                   cim_data.VoltageLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageLimit[obj.id];
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

                base.export_element (obj, "VoltageLimit", "value", "value",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VoltageLimit_collapse" aria-expanded="true" aria-controls="{{id}}_VoltageLimit_collapse" style="margin-left: 10px;">VoltageLimit</a></legend>
                    <div id="{{id}}_VoltageLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VoltageLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ActivePowerLimit;
                if (null == bucket)
                   cim_data.ActivePowerLimit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivePowerLimit[obj.id];
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

                base.export_element (obj, "ActivePowerLimit", "value", "value",  base.from_string, fields);
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ActivePowerLimit_collapse" aria-expanded="true" aria-controls="{{id}}_ActivePowerLimit_collapse" style="margin-left: 10px;">ActivePowerLimit</a></legend>
                    <div id="{{id}}_ActivePowerLimit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + OperationalLimit.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivePowerLimit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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