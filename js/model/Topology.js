define
(
    ["model/base", "model/Core"],
    /**
     * An extension to the Core Package that, in association with the Terminal class, models Connectivity, that is the physical definition of how equipment is connected together.
     *
     * In addition it models Topology, that is the logical definition of how equipment is connected via closed switches. The Topology definition is independent of the other electrical characteristics.
     *
     */
    function (base, Core)
    {

        /**
         * Used to apply user standard names to TopologicalNodes.
         *
         * Associated with one or more terminals that are normally connected with the bus name.    The associated terminals are normally connected by non-retained switches. For a ring bus station configuration, all BusbarSection terminals in the ring are typically associated.   For a breaker and a half scheme, both BusbarSections would normally be associated.  For a ring bus, all BusbarSections would normally be associated.  For a "straight" busbar configuration, normally only the main terminal at the BusbarSection would be associated.
         *
         */
        class BusNameMarker extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BusNameMarker;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BusNameMarker";
                base.parse_element (/<cim:BusNameMarker.priority>([\s\S]*?)<\/cim:BusNameMarker.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:BusNameMarker.ReportingGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                base.parse_attribute (/<cim:BusNameMarker.TopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNode", sub, context);
                base.parse_attributes (/<cim:BusNameMarker.Terminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                let bucket = context.parsed.BusNameMarker;
                if (null == bucket)
                   context.parsed.BusNameMarker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusNameMarker", "priority", "priority",  base.from_string, fields);
                base.export_attribute (obj, "BusNameMarker", "ReportingGroup", "ReportingGroup", fields);
                base.export_attribute (obj, "BusNameMarker", "TopologicalNode", "TopologicalNode", fields);
                base.export_attributes (obj, "BusNameMarker", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusNameMarker_collapse" aria-expanded="true" aria-controls="BusNameMarker_collapse" style="margin-left: 10px;">BusNameMarker</a></legend>
                    <div id="BusNameMarker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#priority}}<div><b>priority</b>: {{priority}}</div>{{/priority}}
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingGroup}}&quot;);}); return false;'>{{ReportingGroup}}</a></div>{{/ReportingGroup}}
                    {{#TopologicalNode}}<div><b>TopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalNode}}&quot;);}); return false;'>{{TopologicalNode}}</a></div>{{/TopologicalNode}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Terminal}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Terminal"]) obj["Terminal_string"] = obj["Terminal"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Terminal_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusNameMarker_collapse" aria-expanded="true" aria-controls="{{id}}_BusNameMarker_collapse" style="margin-left: 10px;">BusNameMarker</a></legend>
                    <div id="{{id}}_BusNameMarker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_priority'>priority: </label><div class='col-sm-8'><input id='{{id}}_priority' class='form-control' type='text'{{#priority}} value='{{priority}}'{{/priority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReportingGroup'>ReportingGroup: </label><div class='col-sm-8'><input id='{{id}}_ReportingGroup' class='form-control' type='text'{{#ReportingGroup}} value='{{ReportingGroup}}'{{/ReportingGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TopologicalNode'>TopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_TopologicalNode' class='form-control' type='text'{{#TopologicalNode}} value='{{TopologicalNode}}'{{/TopologicalNode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BusNameMarker" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_priority").value; if ("" !== temp) obj["priority"] = temp;
                temp = document.getElementById (id + "_ReportingGroup").value; if ("" !== temp) obj["ReportingGroup"] = temp;
                temp = document.getElementById (id + "_TopologicalNode").value; if ("" !== temp) obj["TopologicalNode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ReportingGroup", "0..1", "0..*", "ReportingGroup", "BusNameMarker"],
                            ["TopologicalNode", "0..1", "0..*", "TopologicalNode", "BusNameMarker"],
                            ["Terminal", "1..*", "0..1", "ACDCTerminal", "BusNameMarker"]
                        ]
                    )
                );
            }
        }

        /**
         * For a detailed substation model a topological node is a set of connectivity nodes that, in the current network state, are connected together through any type of closed switches, including  jumpers.
         *
         * Topological nodes change as the current network state changes (i.e., switches, breakers, etc. change state).
         * For a planning model, switch statuses are not used to form topological nodes. Instead they are manually created or deleted in a model builder tool. Topological nodes maintained this way are also called "busses".
         *
         */
        class TopologicalNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TopologicalNode;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TopologicalNode";
                base.parse_element (/<cim:TopologicalNode.pInjection>([\s\S]*?)<\/cim:TopologicalNode.pInjection>/g, obj, "pInjection", base.to_string, sub, context);
                base.parse_element (/<cim:TopologicalNode.qInjection>([\s\S]*?)<\/cim:TopologicalNode.qInjection>/g, obj, "qInjection", base.to_string, sub, context);
                base.parse_attribute (/<cim:TopologicalNode.AngleRefTopologicalIsland\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AngleRefTopologicalIsland", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.TopologicalIsland\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalIsland", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.Terminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.BaseVoltage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.ConnectivityNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodes", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.ReportingGroup\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ReportingGroup", sub, context);
                base.parse_attribute (/<cim:TopologicalNode.ConnectivityNodeContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConnectivityNodeContainer", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.BusNameMarker\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BusNameMarker", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.SvInjection\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SvInjection", sub, context);
                base.parse_attributes (/<cim:TopologicalNode.SvVoltage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "SvVoltage", sub, context);
                let bucket = context.parsed.TopologicalNode;
                if (null == bucket)
                   context.parsed.TopologicalNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TopologicalNode", "pInjection", "pInjection",  base.from_string, fields);
                base.export_element (obj, "TopologicalNode", "qInjection", "qInjection",  base.from_string, fields);
                base.export_attribute (obj, "TopologicalNode", "AngleRefTopologicalIsland", "AngleRefTopologicalIsland", fields);
                base.export_attribute (obj, "TopologicalNode", "TopologicalIsland", "TopologicalIsland", fields);
                base.export_attributes (obj, "TopologicalNode", "Terminal", "Terminal", fields);
                base.export_attribute (obj, "TopologicalNode", "BaseVoltage", "BaseVoltage", fields);
                base.export_attributes (obj, "TopologicalNode", "ConnectivityNodes", "ConnectivityNodes", fields);
                base.export_attribute (obj, "TopologicalNode", "ReportingGroup", "ReportingGroup", fields);
                base.export_attribute (obj, "TopologicalNode", "ConnectivityNodeContainer", "ConnectivityNodeContainer", fields);
                base.export_attributes (obj, "TopologicalNode", "BusNameMarker", "BusNameMarker", fields);
                base.export_attributes (obj, "TopologicalNode", "SvInjection", "SvInjection", fields);
                base.export_attributes (obj, "TopologicalNode", "SvVoltage", "SvVoltage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TopologicalNode_collapse" aria-expanded="true" aria-controls="TopologicalNode_collapse" style="margin-left: 10px;">TopologicalNode</a></legend>
                    <div id="TopologicalNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#pInjection}}<div><b>pInjection</b>: {{pInjection}}</div>{{/pInjection}}
                    {{#qInjection}}<div><b>qInjection</b>: {{qInjection}}</div>{{/qInjection}}
                    {{#AngleRefTopologicalIsland}}<div><b>AngleRefTopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AngleRefTopologicalIsland}}&quot;);}); return false;'>{{AngleRefTopologicalIsland}}</a></div>{{/AngleRefTopologicalIsland}}
                    {{#TopologicalIsland}}<div><b>TopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TopologicalIsland}}&quot;);}); return false;'>{{TopologicalIsland}}</a></div>{{/TopologicalIsland}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Terminal}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);}); return false;'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#ConnectivityNodes}}<div><b>ConnectivityNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConnectivityNodes}}
                    {{#ReportingGroup}}<div><b>ReportingGroup</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ReportingGroup}}&quot;);}); return false;'>{{ReportingGroup}}</a></div>{{/ReportingGroup}}
                    {{#ConnectivityNodeContainer}}<div><b>ConnectivityNodeContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ConnectivityNodeContainer}}&quot;);}); return false;'>{{ConnectivityNodeContainer}}</a></div>{{/ConnectivityNodeContainer}}
                    {{#BusNameMarker}}<div><b>BusNameMarker</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/BusNameMarker}}
                    {{#SvInjection}}<div><b>SvInjection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SvInjection}}
                    {{#SvVoltage}}<div><b>SvVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SvVoltage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["Terminal"]) obj["Terminal_string"] = obj["Terminal"].join ();
                if (obj["ConnectivityNodes"]) obj["ConnectivityNodes_string"] = obj["ConnectivityNodes"].join ();
                if (obj["BusNameMarker"]) obj["BusNameMarker_string"] = obj["BusNameMarker"].join ();
                if (obj["SvInjection"]) obj["SvInjection_string"] = obj["SvInjection"].join ();
                if (obj["SvVoltage"]) obj["SvVoltage_string"] = obj["SvVoltage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["Terminal_string"];
                delete obj["ConnectivityNodes_string"];
                delete obj["BusNameMarker_string"];
                delete obj["SvInjection_string"];
                delete obj["SvVoltage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TopologicalNode_collapse" aria-expanded="true" aria-controls="{{id}}_TopologicalNode_collapse" style="margin-left: 10px;">TopologicalNode</a></legend>
                    <div id="{{id}}_TopologicalNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pInjection'>pInjection: </label><div class='col-sm-8'><input id='{{id}}_pInjection' class='form-control' type='text'{{#pInjection}} value='{{pInjection}}'{{/pInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qInjection'>qInjection: </label><div class='col-sm-8'><input id='{{id}}_qInjection' class='form-control' type='text'{{#qInjection}} value='{{qInjection}}'{{/qInjection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AngleRefTopologicalIsland'>AngleRefTopologicalIsland: </label><div class='col-sm-8'><input id='{{id}}_AngleRefTopologicalIsland' class='form-control' type='text'{{#AngleRefTopologicalIsland}} value='{{AngleRefTopologicalIsland}}'{{/AngleRefTopologicalIsland}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TopologicalIsland'>TopologicalIsland: </label><div class='col-sm-8'><input id='{{id}}_TopologicalIsland' class='form-control' type='text'{{#TopologicalIsland}} value='{{TopologicalIsland}}'{{/TopologicalIsland}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='{{id}}_BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReportingGroup'>ReportingGroup: </label><div class='col-sm-8'><input id='{{id}}_ReportingGroup' class='form-control' type='text'{{#ReportingGroup}} value='{{ReportingGroup}}'{{/ReportingGroup}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConnectivityNodeContainer'>ConnectivityNodeContainer: </label><div class='col-sm-8'><input id='{{id}}_ConnectivityNodeContainer' class='form-control' type='text'{{#ConnectivityNodeContainer}} value='{{ConnectivityNodeContainer}}'{{/ConnectivityNodeContainer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TopologicalNode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_pInjection").value; if ("" !== temp) obj["pInjection"] = temp;
                temp = document.getElementById (id + "_qInjection").value; if ("" !== temp) obj["qInjection"] = temp;
                temp = document.getElementById (id + "_AngleRefTopologicalIsland").value; if ("" !== temp) obj["AngleRefTopologicalIsland"] = temp;
                temp = document.getElementById (id + "_TopologicalIsland").value; if ("" !== temp) obj["TopologicalIsland"] = temp;
                temp = document.getElementById (id + "_BaseVoltage").value; if ("" !== temp) obj["BaseVoltage"] = temp;
                temp = document.getElementById (id + "_ReportingGroup").value; if ("" !== temp) obj["ReportingGroup"] = temp;
                temp = document.getElementById (id + "_ConnectivityNodeContainer").value; if ("" !== temp) obj["ConnectivityNodeContainer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AngleRefTopologicalIsland", "0..1", "0..1", "TopologicalIsland", "AngleRefTopologicalNode"],
                            ["TopologicalIsland", "0..1", "1..*", "TopologicalIsland", "TopologicalNodes"],
                            ["Terminal", "0..*", "0..1", "Terminal", "TopologicalNode"],
                            ["BaseVoltage", "0..1", "0..*", "BaseVoltage", "TopologicalNode"],
                            ["ConnectivityNodes", "0..*", "0..1", "ConnectivityNode", "TopologicalNode"],
                            ["ReportingGroup", "0..1", "0..*", "ReportingGroup", "TopologicalNode"],
                            ["ConnectivityNodeContainer", "0..1", "0..*", "ConnectivityNodeContainer", "TopologicalNode"],
                            ["BusNameMarker", "0..*", "0..1", "BusNameMarker", "TopologicalNode"],
                            ["SvInjection", "0..*", "1", "SvInjection", "TopologicalNode"],
                            ["SvVoltage", "0..*", "1", "SvVoltage", "TopologicalNode"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrically connected subset of the network.
         *
         * Topological islands can change as the current network state changes: e.g. due to
         * - disconnect switches or breakers changing state in a SCADA/EMS.
         * - manual creation, change or deletion of topological nodes in a planning tool.
         *
         */
        class TopologicalIsland extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TopologicalIsland;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TopologicalIsland";
                base.parse_attribute (/<cim:TopologicalIsland.AngleRefTopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "AngleRefTopologicalNode", sub, context);
                base.parse_attributes (/<cim:TopologicalIsland.TopologicalNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TopologicalNodes", sub, context);
                let bucket = context.parsed.TopologicalIsland;
                if (null == bucket)
                   context.parsed.TopologicalIsland = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TopologicalIsland", "AngleRefTopologicalNode", "AngleRefTopologicalNode", fields);
                base.export_attributes (obj, "TopologicalIsland", "TopologicalNodes", "TopologicalNodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TopologicalIsland_collapse" aria-expanded="true" aria-controls="TopologicalIsland_collapse" style="margin-left: 10px;">TopologicalIsland</a></legend>
                    <div id="TopologicalIsland_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#AngleRefTopologicalNode}}<div><b>AngleRefTopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AngleRefTopologicalNode}}&quot;);}); return false;'>{{AngleRefTopologicalNode}}</a></div>{{/AngleRefTopologicalNode}}
                    {{#TopologicalNodes}}<div><b>TopologicalNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TopologicalNodes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["TopologicalNodes"]) obj["TopologicalNodes_string"] = obj["TopologicalNodes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["TopologicalNodes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TopologicalIsland_collapse" aria-expanded="true" aria-controls="{{id}}_TopologicalIsland_collapse" style="margin-left: 10px;">TopologicalIsland</a></legend>
                    <div id="{{id}}_TopologicalIsland_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AngleRefTopologicalNode'>AngleRefTopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_AngleRefTopologicalNode' class='form-control' type='text'{{#AngleRefTopologicalNode}} value='{{AngleRefTopologicalNode}}'{{/AngleRefTopologicalNode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TopologicalIsland" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AngleRefTopologicalNode").value; if ("" !== temp) obj["AngleRefTopologicalNode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AngleRefTopologicalNode", "0..1", "0..1", "TopologicalNode", "AngleRefTopologicalIsland"],
                            ["TopologicalNodes", "1..*", "0..1", "TopologicalNode", "TopologicalIsland"]
                        ]
                    )
                );
            }
        }

        return (
            {
                TopologicalNode: TopologicalNode,
                TopologicalIsland: TopologicalIsland,
                BusNameMarker: BusNameMarker
            }
        );
    }
);