define
(
    ["model/base", "model/Core"],
    /**
     * An extension to the Core Package that in association with the Terminal class models Connectivity, that is the physical definition of how equipment is connected together.
     *
     * In addition it models Topology, that is the logical definition of how equipment is connected via closed switches. The Topology definition is independent of the other electrical characteristics.
     *
     */
    function (base, Core)
    {

        /**
         * Used to apply user standard names to topology buses.
         *
         * Typically used for "bus/branch" case generation. Associated with one or more terminals that are normally connected with the bus name.    The associated terminals are normally connected by non-retained switches. For a ring bus station configuration, all busbar terminals in the ring are typically associated.   For a breaker and a half scheme, both busbars would normally be associated.  For a ring bus, all busbars would normally be associated.  For a "straight" busbar configuration, normally only the main terminal at the busbar would be associated.
         *
         */
        class BusNameMarker extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BusNameMarker;
                if (null == bucket)
                   cim_data.BusNameMarker = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusNameMarker[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BusNameMarker";
                base.parse_element (/<cim:BusNameMarker.priority>([\s\S]*?)<\/cim:BusNameMarker.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attributes (/<cim:BusNameMarker.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:BusNameMarker.ReportingGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                var bucket = context.parsed.BusNameMarker;
                if (null == bucket)
                   context.parsed.BusNameMarker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusNameMarker", "priority", "priority",  base.from_string, fields);
                base.export_attributes (obj, "BusNameMarker", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "BusNameMarker", "ReportingGroup", "ReportingGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusNameMarker_collapse" aria-expanded="true" aria-controls="BusNameMarker_collapse" style="margin-left: 10px;">BusNameMarker</a></legend>
                    <div id="BusNameMarker_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Terminal}}
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingGroup}}&quot;);})'>{{ReportingGroup}}</a></div>{{/ReportingGroup}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Terminal) obj.Terminal_string = obj.Terminal.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Terminal_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#BusNameMarker_collapse" aria-expanded="true" aria-controls="BusNameMarker_collapse" style="margin-left: 10px;">BusNameMarker</a></legend>
                    <div id="BusNameMarker_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='priority'>priority: </label><div class='col-sm-8'><input id='priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReportingGroup'>ReportingGroup: </label><div class='col-sm-8'><input id='ReportingGroup' class='form-control' type='text'{{#ReportingGroup}} value='{{ReportingGroup}}'{{/ReportingGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "BusNameMarker" };
                super.submit (obj);
                temp = document.getElementById ("priority").value; if ("" != temp) obj.priority = temp;
                temp = document.getElementById ("ReportingGroup").value; if ("" != temp) obj.ReportingGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Terminal", "ACDCTerminal", "1..*", "0..1"],
                        ["ReportingGroup", "ReportingGroup", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * DC bus.
         *
         */
        class DCTopologicalNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DCTopologicalNode;
                if (null == bucket)
                   cim_data.DCTopologicalNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCTopologicalNode[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCTopologicalNode";
                base.parse_attributes (/<cim:DCTopologicalNode.DCNodes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCNodes", sub, context);
                base.parse_attribute (/<cim:DCTopologicalNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCEquipmentContainer", sub, context);
                base.parse_attributes (/<cim:DCTopologicalNode.DCTerminals\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCTerminals", sub, context);
                base.parse_attribute (/<cim:DCTopologicalNode.DCTopologicalIsland\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalIsland", sub, context);
                var bucket = context.parsed.DCTopologicalNode;
                if (null == bucket)
                   context.parsed.DCTopologicalNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DCTopologicalNode", "DCNodes", "DCNodes", fields);
                base.export_attribute (obj, "DCTopologicalNode", "DCEquipmentContainer", "DCEquipmentContainer", fields);
                base.export_attributes (obj, "DCTopologicalNode", "DCTerminals", "DCTerminals", fields);
                base.export_attribute (obj, "DCTopologicalNode", "DCTopologicalIsland", "DCTopologicalIsland", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DCTopologicalNode_collapse" aria-expanded="true" aria-controls="DCTopologicalNode_collapse" style="margin-left: 10px;">DCTopologicalNode</a></legend>
                    <div id="DCTopologicalNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DCNodes}}<div><b>DCNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DCNodes}}
                    {{#DCEquipmentContainer}}<div><b>DCEquipmentContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCEquipmentContainer}}&quot;);})'>{{DCEquipmentContainer}}</a></div>{{/DCEquipmentContainer}}
                    {{#DCTerminals}}<div><b>DCTerminals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/DCTerminals}}
                    {{#DCTopologicalIsland}}<div><b>DCTopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCTopologicalIsland}}&quot;);})'>{{DCTopologicalIsland}}</a></div>{{/DCTopologicalIsland}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.DCNodes) obj.DCNodes_string = obj.DCNodes.join ();
                if (obj.DCTerminals) obj.DCTerminals_string = obj.DCTerminals.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.DCNodes_string;
                delete obj.DCTerminals_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DCTopologicalNode_collapse" aria-expanded="true" aria-controls="DCTopologicalNode_collapse" style="margin-left: 10px;">DCTopologicalNode</a></legend>
                    <div id="DCTopologicalNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DCEquipmentContainer'>DCEquipmentContainer: </label><div class='col-sm-8'><input id='DCEquipmentContainer' class='form-control' type='text'{{#DCEquipmentContainer}} value='{{DCEquipmentContainer}}'{{/DCEquipmentContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='DCTopologicalIsland'>DCTopologicalIsland: </label><div class='col-sm-8'><input id='DCTopologicalIsland' class='form-control' type='text'{{#DCTopologicalIsland}} value='{{DCTopologicalIsland}}'{{/DCTopologicalIsland}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "DCTopologicalNode" };
                super.submit (obj);
                temp = document.getElementById ("DCEquipmentContainer").value; if ("" != temp) obj.DCEquipmentContainer = temp;
                temp = document.getElementById ("DCTopologicalIsland").value; if ("" != temp) obj.DCTopologicalIsland = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["DCNodes", "DCNode", "0..*", "0..1"],
                        ["DCEquipmentContainer", "DCEquipmentContainer", "0..1", "0..*"],
                        ["DCTerminals", "DCBaseTerminal", "0..*", "0..1"],
                        ["DCTopologicalIsland", "DCTopologicalIsland", "0..1", "1..*"]
                    ]
                );
            }
        }

        /**
         * For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers.
         *
         * Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state).
         *
         */
        class TopologicalNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TopologicalNode;
                if (null == bucket)
                   cim_data.TopologicalNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TopologicalNode[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TopologicalNode";
                base.parse_element (/<cim:TopologicalNode.pInjection>([\s\S]*?)<\/cim:TopologicalNode.pInjection>/g, obj, "pInjection", base.to_string, sub, context);
                base.parse_element (/<cim:TopologicalNode.qInjection>([\s\S]*?)<\/cim:TopologicalNode.qInjection>/g, obj, "qInjection", base.to_string, sub, context);
                base.parse_attribute (/<cim:TopologicalNode.AngleRefTopologicalIsland\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AngleRefTopologicalIsland", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.SvVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvVoltage", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.ReportingGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.SvInjection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvInjection", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.ConnectivityNodes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodes", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.TopologicalIsland\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalIsland", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodeContainer", sub, context);
                var bucket = context.parsed.TopologicalNode;
                if (null == bucket)
                   context.parsed.TopologicalNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TopologicalNode", "pInjection", "pInjection",  base.from_string, fields);
                base.export_element (obj, "TopologicalNode", "qInjection", "qInjection",  base.from_string, fields);
                base.export_attribute (obj, "TopologicalNode", "AngleRefTopologicalIsland", "AngleRefTopologicalIsland", fields);
                base.export_attribute (obj, "TopologicalNode", "SvVoltage", "SvVoltage", fields);
                base.export_attribute (obj, "TopologicalNode", "ReportingGroup", "ReportingGroup", fields);
                base.export_attribute (obj, "TopologicalNode", "SvInjection", "SvInjection", fields);
                base.export_attributes (obj, "TopologicalNode", "ConnectivityNodes", "ConnectivityNodes", fields);
                base.export_attribute (obj, "TopologicalNode", "BaseVoltage", "BaseVoltage", fields);
                base.export_attributes (obj, "TopologicalNode", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "TopologicalNode", "TopologicalIsland", "TopologicalIsland", fields);
                base.export_attribute (obj, "TopologicalNode", "ConnectivityNodeContainer", "ConnectivityNodeContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TopologicalNode_collapse" aria-expanded="true" aria-controls="TopologicalNode_collapse" style="margin-left: 10px;">TopologicalNode</a></legend>
                    <div id="TopologicalNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#pInjection}}<div><b>pInjection</b>: {{pInjection}}</div>{{/pInjection}}
                    {{#qInjection}}<div><b>qInjection</b>: {{qInjection}}</div>{{/qInjection}}
                    {{#AngleRefTopologicalIsland}}<div><b>AngleRefTopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AngleRefTopologicalIsland}}&quot;);})'>{{AngleRefTopologicalIsland}}</a></div>{{/AngleRefTopologicalIsland}}
                    {{#SvVoltage}}<div><b>SvVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvVoltage}}&quot;);})'>{{SvVoltage}}</a></div>{{/SvVoltage}}
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingGroup}}&quot;);})'>{{ReportingGroup}}</a></div>{{/ReportingGroup}}
                    {{#SvInjection}}<div><b>SvInjection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvInjection}}&quot;);})'>{{SvInjection}}</a></div>{{/SvInjection}}
                    {{#ConnectivityNodes}}<div><b>ConnectivityNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConnectivityNodes}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);})'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Terminal}}
                    {{#TopologicalIsland}}<div><b>TopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalIsland}}&quot;);})'>{{TopologicalIsland}}</a></div>{{/TopologicalIsland}}
                    {{#ConnectivityNodeContainer}}<div><b>ConnectivityNodeContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNodeContainer}}&quot;);})'>{{ConnectivityNodeContainer}}</a></div>{{/ConnectivityNodeContainer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConnectivityNodes) obj.ConnectivityNodes_string = obj.ConnectivityNodes.join ();
                if (obj.Terminal) obj.Terminal_string = obj.Terminal.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConnectivityNodes_string;
                delete obj.Terminal_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TopologicalNode_collapse" aria-expanded="true" aria-controls="TopologicalNode_collapse" style="margin-left: 10px;">TopologicalNode</a></legend>
                    <div id="TopologicalNode_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='pInjection'>pInjection: </label><div class='col-sm-8'><input id='pInjection' class='form-control' type='text'{{#pInjection}} value='{{pInjection}}'{{/pInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='qInjection'>qInjection: </label><div class='col-sm-8'><input id='qInjection' class='form-control' type='text'{{#qInjection}} value='{{qInjection}}'{{/qInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AngleRefTopologicalIsland'>AngleRefTopologicalIsland: </label><div class='col-sm-8'><input id='AngleRefTopologicalIsland' class='form-control' type='text'{{#AngleRefTopologicalIsland}} value='{{AngleRefTopologicalIsland}}'{{/AngleRefTopologicalIsland}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SvVoltage'>SvVoltage: </label><div class='col-sm-8'><input id='SvVoltage' class='form-control' type='text'{{#SvVoltage}} value='{{SvVoltage}}'{{/SvVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ReportingGroup'>ReportingGroup: </label><div class='col-sm-8'><input id='ReportingGroup' class='form-control' type='text'{{#ReportingGroup}} value='{{ReportingGroup}}'{{/ReportingGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SvInjection'>SvInjection: </label><div class='col-sm-8'><input id='SvInjection' class='form-control' type='text'{{#SvInjection}} value='{{SvInjection}}'{{/SvInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TopologicalIsland'>TopologicalIsland: </label><div class='col-sm-8'><input id='TopologicalIsland' class='form-control' type='text'{{#TopologicalIsland}} value='{{TopologicalIsland}}'{{/TopologicalIsland}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConnectivityNodeContainer'>ConnectivityNodeContainer: </label><div class='col-sm-8'><input id='ConnectivityNodeContainer' class='form-control' type='text'{{#ConnectivityNodeContainer}} value='{{ConnectivityNodeContainer}}'{{/ConnectivityNodeContainer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TopologicalNode" };
                super.submit (obj);
                temp = document.getElementById ("pInjection").value; if ("" != temp) obj.pInjection = temp;
                temp = document.getElementById ("qInjection").value; if ("" != temp) obj.qInjection = temp;
                temp = document.getElementById ("AngleRefTopologicalIsland").value; if ("" != temp) obj.AngleRefTopologicalIsland = temp;
                temp = document.getElementById ("SvVoltage").value; if ("" != temp) obj.SvVoltage = temp;
                temp = document.getElementById ("ReportingGroup").value; if ("" != temp) obj.ReportingGroup = temp;
                temp = document.getElementById ("SvInjection").value; if ("" != temp) obj.SvInjection = temp;
                temp = document.getElementById ("BaseVoltage").value; if ("" != temp) obj.BaseVoltage = temp;
                temp = document.getElementById ("TopologicalIsland").value; if ("" != temp) obj.TopologicalIsland = temp;
                temp = document.getElementById ("ConnectivityNodeContainer").value; if ("" != temp) obj.ConnectivityNodeContainer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AngleRefTopologicalIsland", "TopologicalIsland", "0..1", "0..1"],
                        ["SvVoltage", "SvVoltage", "0..1", "1"],
                        ["ReportingGroup", "ReportingGroup", "0..1", "0..*"],
                        ["SvInjection", "SvInjection", "0..1", "1"],
                        ["ConnectivityNodes", "ConnectivityNode", "0..*", "0..1"],
                        ["BaseVoltage", "BaseVoltage", "0..1", "0..*"],
                        ["Terminal", "Terminal", "0..*", "0..1"],
                        ["TopologicalIsland", "TopologicalIsland", "0..1", "1..*"],
                        ["ConnectivityNodeContainer", "ConnectivityNodeContainer", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * An electrically connected subset of the network.
         *
         * Topological islands can change as the current network state changes: e.g. due to
         *
         */
        class TopologicalIsland extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TopologicalIsland;
                if (null == bucket)
                   cim_data.TopologicalIsland = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TopologicalIsland[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TopologicalIsland";
                base.parse_attribute (/<cim:TopologicalIsland.AngleRefTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AngleRefTopologicalNode", sub, context);
                base.parse_attributes (/<cim:TopologicalIsland.TopologicalNodes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNodes", sub, context);
                var bucket = context.parsed.TopologicalIsland;
                if (null == bucket)
                   context.parsed.TopologicalIsland = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TopologicalIsland", "AngleRefTopologicalNode", "AngleRefTopologicalNode", fields);
                base.export_attributes (obj, "TopologicalIsland", "TopologicalNodes", "TopologicalNodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TopologicalIsland_collapse" aria-expanded="true" aria-controls="TopologicalIsland_collapse" style="margin-left: 10px;">TopologicalIsland</a></legend>
                    <div id="TopologicalIsland_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AngleRefTopologicalNode}}<div><b>AngleRefTopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AngleRefTopologicalNode}}&quot;);})'>{{AngleRefTopologicalNode}}</a></div>{{/AngleRefTopologicalNode}}
                    {{#TopologicalNodes}}<div><b>TopologicalNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TopologicalNodes}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TopologicalNodes) obj.TopologicalNodes_string = obj.TopologicalNodes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TopologicalNodes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TopologicalIsland_collapse" aria-expanded="true" aria-controls="TopologicalIsland_collapse" style="margin-left: 10px;">TopologicalIsland</a></legend>
                    <div id="TopologicalIsland_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='AngleRefTopologicalNode'>AngleRefTopologicalNode: </label><div class='col-sm-8'><input id='AngleRefTopologicalNode' class='form-control' type='text'{{#AngleRefTopologicalNode}} value='{{AngleRefTopologicalNode}}'{{/AngleRefTopologicalNode}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "TopologicalIsland" };
                super.submit (obj);
                temp = document.getElementById ("AngleRefTopologicalNode").value; if ("" != temp) obj.AngleRefTopologicalNode = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["AngleRefTopologicalNode", "TopologicalNode", "0..1", "0..1"],
                        ["TopologicalNodes", "TopologicalNode", "1..*", "0..1"]
                    ]
                );
            }
        }

        return (
            {
                DCTopologicalNode: DCTopologicalNode,
                TopologicalNode: TopologicalNode,
                TopologicalIsland: TopologicalIsland,
                BusNameMarker: BusNameMarker
            }
        );
    }
);