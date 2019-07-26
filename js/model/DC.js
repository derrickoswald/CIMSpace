define
(
    ["model/base", "model/Core", "model/Wires"],
    /**
     * This package contains model for direct current equipment and controls.
     *
     */
    function (base, Core, Wires)
    {

        /**
         * Polarity for DC circuits.
         *
         */
        let DCPolarityKind =
        {
            "positive": "positive",
            "middle": "middle",
            "negative": "negative"
        };
        Object.freeze (DCPolarityKind);

        /**
         * Operating mode for HVDC line operating as Current Source Converter.
         *
         */
        let CsOperatingModeKind =
        {
            "inverter": "inverter",
            "rectifier": "rectifier"
        };
        Object.freeze (CsOperatingModeKind);

        /**
         * Types applicable to the control of real power and/or DC voltage by voltage source converter.
         *
         */
        let VsPpccControlKind =
        {
            "pPcc": "pPcc",
            "udc": "udc",
            "pPccAndUdcDroop": "pPccAndUdcDroop",
            "pPccAndUdcDroopWithCompensation": "pPccAndUdcDroopWithCompensation",
            "pPccAndUdcDroopPilot": "pPccAndUdcDroopPilot"
        };
        Object.freeze (VsPpccControlKind);

        /**
         * The operating mode of an HVDC bipole.
         *
         */
        let DCConverterOperatingModeKind =
        {
            "monopolarMetallicReturn": "monopolarMetallicReturn",
            "monopolarGroundReturn": "monopolarGroundReturn",
            "bipolar": "bipolar"
        };
        Object.freeze (DCConverterOperatingModeKind);

        /**
         * Active power control modes for HVDC line operating as Current Source Converter.
         *
         */
        let CsPpccControlKind =
        {
            "activePower": "activePower",
            "dcVoltage": "dcVoltage",
            "dcCurrent": "dcCurrent"
        };
        Object.freeze (CsPpccControlKind);

        /**
         * Kind of reactive power control at point of common coupling for a voltage source converter.
         *
         */
        let VsQpccControlKind =
        {
            "reactivePcc": "reactivePcc",
            "voltagePcc": "voltagePcc",
            "powerFactorPcc": "powerFactorPcc"
        };
        Object.freeze (VsQpccControlKind);

        /**
         * A modelling construct to provide a root class for containment of DC as well as AC equipment.
         *
         * The class differ from the EquipmentContaner for AC in that it may also contain DCNodes. Hence it can contain both AC and DC equipment.
         *
         */
        class DCEquipmentContainer extends Core.EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCEquipmentContainer;
                if (null == bucket)
                   cim_data.DCEquipmentContainer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCEquipmentContainer[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCEquipmentContainer";
                base.parse_attributes (/<cim:DCEquipmentContainer.DCTopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNode", sub, context);
                base.parse_attributes (/<cim:DCEquipmentContainer.DCNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCNodes", sub, context);
                let bucket = context.parsed.DCEquipmentContainer;
                if (null == bucket)
                   context.parsed.DCEquipmentContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DCEquipmentContainer", "DCTopologicalNode", "DCTopologicalNode", fields);
                base.export_attributes (obj, "DCEquipmentContainer", "DCNodes", "DCNodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCEquipmentContainer_collapse" aria-expanded="true" aria-controls="DCEquipmentContainer_collapse" style="margin-left: 10px;">DCEquipmentContainer</a></legend>
                    <div id="DCEquipmentContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#DCTopologicalNode}}<div><b>DCTopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTopologicalNode}}
                    {{#DCNodes}}<div><b>DCNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCNodes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCTopologicalNode"]) obj["DCTopologicalNode_string"] = obj["DCTopologicalNode"].join ();
                if (obj["DCNodes"]) obj["DCNodes_string"] = obj["DCNodes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCTopologicalNode_string"];
                delete obj["DCNodes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCEquipmentContainer_collapse" aria-expanded="true" aria-controls="{{id}}_DCEquipmentContainer_collapse" style="margin-left: 10px;">DCEquipmentContainer</a></legend>
                    <div id="{{id}}_DCEquipmentContainer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCEquipmentContainer" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCTopologicalNode", "0..*", "0..1", "DCTopologicalNode", "DCEquipmentContainer"],
                            ["DCNodes", "0..*", "1", "DCNode", "DCEquipmentContainer"]
                        ]
                    )
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
                let bucket = cim_data.DCTopologicalNode;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCTopologicalNode";
                base.parse_attribute (/<cim:DCTopologicalNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCEquipmentContainer", sub, context);
                base.parse_attributes (/<cim:DCTopologicalNode.DCNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCNodes", sub, context);
                base.parse_attributes (/<cim:DCTopologicalNode.DCTerminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTerminals", sub, context);
                base.parse_attribute (/<cim:DCTopologicalNode.DCTopologicalIsland\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalIsland", sub, context);
                let bucket = context.parsed.DCTopologicalNode;
                if (null == bucket)
                   context.parsed.DCTopologicalNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCTopologicalNode", "DCEquipmentContainer", "DCEquipmentContainer", fields);
                base.export_attributes (obj, "DCTopologicalNode", "DCNodes", "DCNodes", fields);
                base.export_attributes (obj, "DCTopologicalNode", "DCTerminals", "DCTerminals", fields);
                base.export_attribute (obj, "DCTopologicalNode", "DCTopologicalIsland", "DCTopologicalIsland", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCTopologicalNode_collapse" aria-expanded="true" aria-controls="DCTopologicalNode_collapse" style="margin-left: 10px;">DCTopologicalNode</a></legend>
                    <div id="DCTopologicalNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DCEquipmentContainer}}<div><b>DCEquipmentContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCEquipmentContainer}}&quot;);}); return false;'>{{DCEquipmentContainer}}</a></div>{{/DCEquipmentContainer}}
                    {{#DCNodes}}<div><b>DCNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCNodes}}
                    {{#DCTerminals}}<div><b>DCTerminals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTerminals}}
                    {{#DCTopologicalIsland}}<div><b>DCTopologicalIsland</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCTopologicalIsland}}&quot;);}); return false;'>{{DCTopologicalIsland}}</a></div>{{/DCTopologicalIsland}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCNodes"]) obj["DCNodes_string"] = obj["DCNodes"].join ();
                if (obj["DCTerminals"]) obj["DCTerminals_string"] = obj["DCTerminals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCNodes_string"];
                delete obj["DCTerminals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCTopologicalNode_collapse" aria-expanded="true" aria-controls="{{id}}_DCTopologicalNode_collapse" style="margin-left: 10px;">DCTopologicalNode</a></legend>
                    <div id="{{id}}_DCTopologicalNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCEquipmentContainer'>DCEquipmentContainer: </label><div class='col-sm-8'><input id='{{id}}_DCEquipmentContainer' class='form-control' type='text'{{#DCEquipmentContainer}} value='{{DCEquipmentContainer}}'{{/DCEquipmentContainer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCTopologicalIsland'>DCTopologicalIsland: </label><div class='col-sm-8'><input id='{{id}}_DCTopologicalIsland' class='form-control' type='text'{{#DCTopologicalIsland}} value='{{DCTopologicalIsland}}'{{/DCTopologicalIsland}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCTopologicalNode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DCEquipmentContainer").value; if ("" !== temp) obj["DCEquipmentContainer"] = temp;
                temp = document.getElementById (id + "_DCTopologicalIsland").value; if ("" !== temp) obj["DCTopologicalIsland"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCEquipmentContainer", "0..1", "0..*", "DCEquipmentContainer", "DCTopologicalNode"],
                            ["DCNodes", "0..*", "0..1", "DCNode", "DCTopologicalNode"],
                            ["DCTerminals", "0..*", "0..1", "DCBaseTerminal", "DCTopologicalNode"],
                            ["DCTopologicalIsland", "0..1", "1..*", "DCTopologicalIsland", "DCTopologicalNodes"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrical connection point at a piece of DC conducting equipment.
         *
         * DC terminals are connected at one physical DC node that may have multiple DC terminals connected. A DC node is similar to an AC connectivity node. The model requires that DC connections are distinct from AC connections.
         *
         */
        class DCBaseTerminal extends Core.ACDCTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCBaseTerminal;
                if (null == bucket)
                   cim_data.DCBaseTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCBaseTerminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.ACDCTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "DCBaseTerminal";
                base.parse_attribute (/<cim:DCBaseTerminal.DCTopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNode", sub, context);
                base.parse_attribute (/<cim:DCBaseTerminal.DCNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCNode", sub, context);
                let bucket = context.parsed.DCBaseTerminal;
                if (null == bucket)
                   context.parsed.DCBaseTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.ACDCTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCBaseTerminal", "DCTopologicalNode", "DCTopologicalNode", fields);
                base.export_attribute (obj, "DCBaseTerminal", "DCNode", "DCNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCBaseTerminal_collapse" aria-expanded="true" aria-controls="DCBaseTerminal_collapse" style="margin-left: 10px;">DCBaseTerminal</a></legend>
                    <div id="DCBaseTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ACDCTerminal.prototype.template.call (this) +
                    `
                    {{#DCTopologicalNode}}<div><b>DCTopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCTopologicalNode}}&quot;);}); return false;'>{{DCTopologicalNode}}</a></div>{{/DCTopologicalNode}}
                    {{#DCNode}}<div><b>DCNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCNode}}&quot;);}); return false;'>{{DCNode}}</a></div>{{/DCNode}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCBaseTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_DCBaseTerminal_collapse" style="margin-left: 10px;">DCBaseTerminal</a></legend>
                    <div id="{{id}}_DCBaseTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ACDCTerminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCTopologicalNode'>DCTopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_DCTopologicalNode' class='form-control' type='text'{{#DCTopologicalNode}} value='{{DCTopologicalNode}}'{{/DCTopologicalNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCNode'>DCNode: </label><div class='col-sm-8'><input id='{{id}}_DCNode' class='form-control' type='text'{{#DCNode}} value='{{DCNode}}'{{/DCNode}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCBaseTerminal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DCTopologicalNode").value; if ("" !== temp) obj["DCTopologicalNode"] = temp;
                temp = document.getElementById (id + "_DCNode").value; if ("" !== temp) obj["DCNode"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCTopologicalNode", "0..1", "0..*", "DCTopologicalNode", "DCTerminals"],
                            ["DCNode", "0..1", "0..*", "DCNode", "DCTerminals"]
                        ]
                    )
                );
            }
        }

        /**
         * The parts of the DC power system that are designed to carry current or that are conductively connected through DC terminals.
         *
         */
        class DCConductingEquipment extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCConductingEquipment;
                if (null == bucket)
                   cim_data.DCConductingEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCConductingEquipment[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCConductingEquipment";
                base.parse_element (/<cim:DCConductingEquipment.ratedUdc>([\s\S]*?)<\/cim:DCConductingEquipment.ratedUdc>/g, obj, "ratedUdc", base.to_string, sub, context);
                base.parse_attributes (/<cim:DCConductingEquipment.ProtectiveActionAdjustment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionAdjustment", sub, context);
                base.parse_attributes (/<cim:DCConductingEquipment.DCTerminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTerminals", sub, context);
                let bucket = context.parsed.DCConductingEquipment;
                if (null == bucket)
                   context.parsed.DCConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCConductingEquipment", "ratedUdc", "ratedUdc",  base.from_string, fields);
                base.export_attributes (obj, "DCConductingEquipment", "ProtectiveActionAdjustment", "ProtectiveActionAdjustment", fields);
                base.export_attributes (obj, "DCConductingEquipment", "DCTerminals", "DCTerminals", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCConductingEquipment_collapse" aria-expanded="true" aria-controls="DCConductingEquipment_collapse" style="margin-left: 10px;">DCConductingEquipment</a></legend>
                    <div id="DCConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#ratedUdc}}<div><b>ratedUdc</b>: {{ratedUdc}}</div>{{/ratedUdc}}
                    {{#ProtectiveActionAdjustment}}<div><b>ProtectiveActionAdjustment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProtectiveActionAdjustment}}
                    {{#DCTerminals}}<div><b>DCTerminals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTerminals}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ProtectiveActionAdjustment"]) obj["ProtectiveActionAdjustment_string"] = obj["ProtectiveActionAdjustment"].join ();
                if (obj["DCTerminals"]) obj["DCTerminals_string"] = obj["DCTerminals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ProtectiveActionAdjustment_string"];
                delete obj["DCTerminals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCConductingEquipment_collapse" aria-expanded="true" aria-controls="{{id}}_DCConductingEquipment_collapse" style="margin-left: 10px;">DCConductingEquipment</a></legend>
                    <div id="{{id}}_DCConductingEquipment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedUdc'>ratedUdc: </label><div class='col-sm-8'><input id='{{id}}_ratedUdc' class='form-control' type='text'{{#ratedUdc}} value='{{ratedUdc}}'{{/ratedUdc}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCConductingEquipment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedUdc").value; if ("" !== temp) obj["ratedUdc"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProtectiveActionAdjustment", "0..*", "1", "ProtectiveActionAdjustment", "DCConductingEquipment"],
                            ["DCTerminals", "0..*", "1", "DCTerminal", "DCConductingEquipment"]
                        ]
                    )
                );
            }
        }

        /**
         * The P-Q capability curve for a voltage source converter, with P on X-axis and Qmin and Qmax on Y1-axis and Y2-axis.
         *
         */
        class VsCapabilityCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VsCapabilityCurve;
                if (null == bucket)
                   cim_data.VsCapabilityCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VsCapabilityCurve[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "VsCapabilityCurve";
                base.parse_attributes (/<cim:VsCapabilityCurve.VsConverterDCSides\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VsConverterDCSides", sub, context);
                let bucket = context.parsed.VsCapabilityCurve;
                if (null == bucket)
                   context.parsed.VsCapabilityCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "VsCapabilityCurve", "VsConverterDCSides", "VsConverterDCSides", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VsCapabilityCurve_collapse" aria-expanded="true" aria-controls="VsCapabilityCurve_collapse" style="margin-left: 10px;">VsCapabilityCurve</a></legend>
                    <div id="VsCapabilityCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#VsConverterDCSides}}<div><b>VsConverterDCSides</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/VsConverterDCSides}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["VsConverterDCSides"]) obj["VsConverterDCSides_string"] = obj["VsConverterDCSides"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["VsConverterDCSides_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VsCapabilityCurve_collapse" aria-expanded="true" aria-controls="{{id}}_VsCapabilityCurve_collapse" style="margin-left: 10px;">VsCapabilityCurve</a></legend>
                    <div id="{{id}}_VsCapabilityCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "VsCapabilityCurve" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VsConverterDCSides", "0..*", "0..1", "VsConverter", "CapabilityCurve"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrically connected subset of the network.
         *
         * DC topological islands can change as the current network state changes: e.g. due to
         * - disconnect switches or breakers changing state in a SCADA/EMS.
         * - manual creation, change or deletion of topological nodes in a planning tool.
         *
         */
        class DCTopologicalIsland extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCTopologicalIsland;
                if (null == bucket)
                   cim_data.DCTopologicalIsland = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCTopologicalIsland[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCTopologicalIsland";
                base.parse_attributes (/<cim:DCTopologicalIsland.DCTopologicalNodes\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNodes", sub, context);
                let bucket = context.parsed.DCTopologicalIsland;
                if (null == bucket)
                   context.parsed.DCTopologicalIsland = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "DCTopologicalIsland", "DCTopologicalNodes", "DCTopologicalNodes", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCTopologicalIsland_collapse" aria-expanded="true" aria-controls="DCTopologicalIsland_collapse" style="margin-left: 10px;">DCTopologicalIsland</a></legend>
                    <div id="DCTopologicalIsland_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DCTopologicalNodes}}<div><b>DCTopologicalNodes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTopologicalNodes}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCTopologicalNodes"]) obj["DCTopologicalNodes_string"] = obj["DCTopologicalNodes"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCTopologicalNodes_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCTopologicalIsland_collapse" aria-expanded="true" aria-controls="{{id}}_DCTopologicalIsland_collapse" style="margin-left: 10px;">DCTopologicalIsland</a></legend>
                    <div id="{{id}}_DCTopologicalIsland_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "DCTopologicalIsland" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCTopologicalNodes", "1..*", "0..1", "DCTopologicalNode", "DCTopologicalIsland"]
                        ]
                    )
                );
            }
        }

        /**
         * Common type for per-length electrical catalogues describing DC line parameters.
         *
         */
        class PerLengthDCLineParameter extends Wires.PerLengthLineParameter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PerLengthDCLineParameter;
                if (null == bucket)
                   cim_data.PerLengthDCLineParameter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerLengthDCLineParameter[obj.id];
            }

            parse (context, sub)
            {
                let obj = Wires.PerLengthLineParameter.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthDCLineParameter";
                base.parse_element (/<cim:PerLengthDCLineParameter.capacitance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthDCLineParameter.inductance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.inductance>/g, obj, "inductance", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthDCLineParameter.resistance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.resistance>/g, obj, "resistance", base.to_string, sub, context);
                base.parse_attributes (/<cim:PerLengthDCLineParameter.DCLineSegments\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCLineSegments", sub, context);
                let bucket = context.parsed.PerLengthDCLineParameter;
                if (null == bucket)
                   context.parsed.PerLengthDCLineParameter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.PerLengthLineParameter.prototype.export.call (this, obj, false);

                base.export_element (obj, "PerLengthDCLineParameter", "capacitance", "capacitance",  base.from_string, fields);
                base.export_element (obj, "PerLengthDCLineParameter", "inductance", "inductance",  base.from_string, fields);
                base.export_element (obj, "PerLengthDCLineParameter", "resistance", "resistance",  base.from_string, fields);
                base.export_attributes (obj, "PerLengthDCLineParameter", "DCLineSegments", "DCLineSegments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PerLengthDCLineParameter_collapse" aria-expanded="true" aria-controls="PerLengthDCLineParameter_collapse" style="margin-left: 10px;">PerLengthDCLineParameter</a></legend>
                    <div id="PerLengthDCLineParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.PerLengthLineParameter.prototype.template.call (this) +
                    `
                    {{#capacitance}}<div><b>capacitance</b>: {{capacitance}}</div>{{/capacitance}}
                    {{#inductance}}<div><b>inductance</b>: {{inductance}}</div>{{/inductance}}
                    {{#resistance}}<div><b>resistance</b>: {{resistance}}</div>{{/resistance}}
                    {{#DCLineSegments}}<div><b>DCLineSegments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCLineSegments}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCLineSegments"]) obj["DCLineSegments_string"] = obj["DCLineSegments"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCLineSegments_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PerLengthDCLineParameter_collapse" aria-expanded="true" aria-controls="{{id}}_PerLengthDCLineParameter_collapse" style="margin-left: 10px;">PerLengthDCLineParameter</a></legend>
                    <div id="{{id}}_PerLengthDCLineParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.PerLengthLineParameter.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitance'>capacitance: </label><div class='col-sm-8'><input id='{{id}}_capacitance' class='form-control' type='text'{{#capacitance}} value='{{capacitance}}'{{/capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductance'>inductance: </label><div class='col-sm-8'><input id='{{id}}_inductance' class='form-control' type='text'{{#inductance}} value='{{inductance}}'{{/inductance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resistance'>resistance: </label><div class='col-sm-8'><input id='{{id}}_resistance' class='form-control' type='text'{{#resistance}} value='{{resistance}}'{{/resistance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PerLengthDCLineParameter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacitance").value; if ("" !== temp) obj["capacitance"] = temp;
                temp = document.getElementById (id + "_inductance").value; if ("" !== temp) obj["inductance"] = temp;
                temp = document.getElementById (id + "_resistance").value; if ("" !== temp) obj["resistance"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCLineSegments", "0..*", "0..1", "DCLineSegment", "PerLengthParameter"]
                        ]
                    )
                );
            }
        }

        /**
         * DC nodes are points where terminals of DC conducting equipment are connected together with zero impedance.
         *
         */
        class DCNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCNode;
                if (null == bucket)
                   cim_data.DCNode = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCNode[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCNode";
                base.parse_attribute (/<cim:DCNode.DCTopologicalNode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNode", sub, context);
                base.parse_attributes (/<cim:DCNode.DCTerminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTerminals", sub, context);
                base.parse_attribute (/<cim:DCNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCEquipmentContainer", sub, context);
                let bucket = context.parsed.DCNode;
                if (null == bucket)
                   context.parsed.DCNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCNode", "DCTopologicalNode", "DCTopologicalNode", fields);
                base.export_attributes (obj, "DCNode", "DCTerminals", "DCTerminals", fields);
                base.export_attribute (obj, "DCNode", "DCEquipmentContainer", "DCEquipmentContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCNode_collapse" aria-expanded="true" aria-controls="DCNode_collapse" style="margin-left: 10px;">DCNode</a></legend>
                    <div id="DCNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#DCTopologicalNode}}<div><b>DCTopologicalNode</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCTopologicalNode}}&quot;);}); return false;'>{{DCTopologicalNode}}</a></div>{{/DCTopologicalNode}}
                    {{#DCTerminals}}<div><b>DCTerminals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTerminals}}
                    {{#DCEquipmentContainer}}<div><b>DCEquipmentContainer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCEquipmentContainer}}&quot;);}); return false;'>{{DCEquipmentContainer}}</a></div>{{/DCEquipmentContainer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCTerminals"]) obj["DCTerminals_string"] = obj["DCTerminals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCTerminals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCNode_collapse" aria-expanded="true" aria-controls="{{id}}_DCNode_collapse" style="margin-left: 10px;">DCNode</a></legend>
                    <div id="{{id}}_DCNode_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCTopologicalNode'>DCTopologicalNode: </label><div class='col-sm-8'><input id='{{id}}_DCTopologicalNode' class='form-control' type='text'{{#DCTopologicalNode}} value='{{DCTopologicalNode}}'{{/DCTopologicalNode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCEquipmentContainer'>DCEquipmentContainer: </label><div class='col-sm-8'><input id='{{id}}_DCEquipmentContainer' class='form-control' type='text'{{#DCEquipmentContainer}} value='{{DCEquipmentContainer}}'{{/DCEquipmentContainer}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCNode" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DCTopologicalNode").value; if ("" !== temp) obj["DCTopologicalNode"] = temp;
                temp = document.getElementById (id + "_DCEquipmentContainer").value; if ("" !== temp) obj["DCEquipmentContainer"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCTopologicalNode", "0..1", "0..*", "DCTopologicalNode", "DCNodes"],
                            ["DCTerminals", "0..*", "0..1", "DCBaseTerminal", "DCNode"],
                            ["DCEquipmentContainer", "1", "0..*", "DCEquipmentContainer", "DCNodes"]
                        ]
                    )
                );
            }
        }

        /**
         * A unit with valves for three phases, together with unit control equipment, essential protective and switching devices, DC storage capacitors, phase reactors and auxiliaries, if any, used for conversion.
         *
         */
        class ACDCConverter extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ACDCConverter;
                if (null == bucket)
                   cim_data.ACDCConverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ACDCConverter[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCConverter";
                base.parse_element (/<cim:ACDCConverter.baseS>([\s\S]*?)<\/cim:ACDCConverter.baseS>/g, obj, "baseS", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.switchingLoss>([\s\S]*?)<\/cim:ACDCConverter.switchingLoss>/g, obj, "switchingLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.targetPpcc>([\s\S]*?)<\/cim:ACDCConverter.targetPpcc>/g, obj, "targetPpcc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.targetUdc>([\s\S]*?)<\/cim:ACDCConverter.targetUdc>/g, obj, "targetUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.idc>([\s\S]*?)<\/cim:ACDCConverter.idc>/g, obj, "idc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.idleLoss>([\s\S]*?)<\/cim:ACDCConverter.idleLoss>/g, obj, "idleLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.maxUdc>([\s\S]*?)<\/cim:ACDCConverter.maxUdc>/g, obj, "maxUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.minUdc>([\s\S]*?)<\/cim:ACDCConverter.minUdc>/g, obj, "minUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.poleLossP>([\s\S]*?)<\/cim:ACDCConverter.poleLossP>/g, obj, "poleLossP", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.ratedUdc>([\s\S]*?)<\/cim:ACDCConverter.ratedUdc>/g, obj, "ratedUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.resistiveLoss>([\s\S]*?)<\/cim:ACDCConverter.resistiveLoss>/g, obj, "resistiveLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.uc>([\s\S]*?)<\/cim:ACDCConverter.uc>/g, obj, "uc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.udc>([\s\S]*?)<\/cim:ACDCConverter.udc>/g, obj, "udc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.valveU0>([\s\S]*?)<\/cim:ACDCConverter.valveU0>/g, obj, "valveU0", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.numberOfValves>([\s\S]*?)<\/cim:ACDCConverter.numberOfValves>/g, obj, "numberOfValves", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.p>([\s\S]*?)<\/cim:ACDCConverter.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.q>([\s\S]*?)<\/cim:ACDCConverter.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attributes (/<cim:ACDCConverter.DCTerminals\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCTerminals", sub, context);
                base.parse_attribute (/<cim:ACDCConverter.PccTerminal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PccTerminal", sub, context);
                let bucket = context.parsed.ACDCConverter;
                if (null == bucket)
                   context.parsed.ACDCConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACDCConverter", "baseS", "baseS",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "switchingLoss", "switchingLoss",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "targetPpcc", "targetPpcc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "targetUdc", "targetUdc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "idc", "idc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "idleLoss", "idleLoss",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "maxUdc", "maxUdc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "minUdc", "minUdc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "poleLossP", "poleLossP",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "ratedUdc", "ratedUdc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "resistiveLoss", "resistiveLoss",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "uc", "uc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "udc", "udc",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "valveU0", "valveU0",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "numberOfValves", "numberOfValves",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "p", "p",  base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "q", "q",  base.from_string, fields);
                base.export_attributes (obj, "ACDCConverter", "DCTerminals", "DCTerminals", fields);
                base.export_attribute (obj, "ACDCConverter", "PccTerminal", "PccTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ACDCConverter_collapse" aria-expanded="true" aria-controls="ACDCConverter_collapse" style="margin-left: 10px;">ACDCConverter</a></legend>
                    <div id="ACDCConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#baseS}}<div><b>baseS</b>: {{baseS}}</div>{{/baseS}}
                    {{#switchingLoss}}<div><b>switchingLoss</b>: {{switchingLoss}}</div>{{/switchingLoss}}
                    {{#targetPpcc}}<div><b>targetPpcc</b>: {{targetPpcc}}</div>{{/targetPpcc}}
                    {{#targetUdc}}<div><b>targetUdc</b>: {{targetUdc}}</div>{{/targetUdc}}
                    {{#idc}}<div><b>idc</b>: {{idc}}</div>{{/idc}}
                    {{#idleLoss}}<div><b>idleLoss</b>: {{idleLoss}}</div>{{/idleLoss}}
                    {{#maxUdc}}<div><b>maxUdc</b>: {{maxUdc}}</div>{{/maxUdc}}
                    {{#minUdc}}<div><b>minUdc</b>: {{minUdc}}</div>{{/minUdc}}
                    {{#poleLossP}}<div><b>poleLossP</b>: {{poleLossP}}</div>{{/poleLossP}}
                    {{#ratedUdc}}<div><b>ratedUdc</b>: {{ratedUdc}}</div>{{/ratedUdc}}
                    {{#resistiveLoss}}<div><b>resistiveLoss</b>: {{resistiveLoss}}</div>{{/resistiveLoss}}
                    {{#uc}}<div><b>uc</b>: {{uc}}</div>{{/uc}}
                    {{#udc}}<div><b>udc</b>: {{udc}}</div>{{/udc}}
                    {{#valveU0}}<div><b>valveU0</b>: {{valveU0}}</div>{{/valveU0}}
                    {{#numberOfValves}}<div><b>numberOfValves</b>: {{numberOfValves}}</div>{{/numberOfValves}}
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
                    {{#DCTerminals}}<div><b>DCTerminals</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/DCTerminals}}
                    {{#PccTerminal}}<div><b>PccTerminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PccTerminal}}&quot;);}); return false;'>{{PccTerminal}}</a></div>{{/PccTerminal}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["DCTerminals"]) obj["DCTerminals_string"] = obj["DCTerminals"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["DCTerminals_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ACDCConverter_collapse" aria-expanded="true" aria-controls="{{id}}_ACDCConverter_collapse" style="margin-left: 10px;">ACDCConverter</a></legend>
                    <div id="{{id}}_ACDCConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseS'>baseS: </label><div class='col-sm-8'><input id='{{id}}_baseS' class='form-control' type='text'{{#baseS}} value='{{baseS}}'{{/baseS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchingLoss'>switchingLoss: </label><div class='col-sm-8'><input id='{{id}}_switchingLoss' class='form-control' type='text'{{#switchingLoss}} value='{{switchingLoss}}'{{/switchingLoss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetPpcc'>targetPpcc: </label><div class='col-sm-8'><input id='{{id}}_targetPpcc' class='form-control' type='text'{{#targetPpcc}} value='{{targetPpcc}}'{{/targetPpcc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetUdc'>targetUdc: </label><div class='col-sm-8'><input id='{{id}}_targetUdc' class='form-control' type='text'{{#targetUdc}} value='{{targetUdc}}'{{/targetUdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_idc'>idc: </label><div class='col-sm-8'><input id='{{id}}_idc' class='form-control' type='text'{{#idc}} value='{{idc}}'{{/idc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_idleLoss'>idleLoss: </label><div class='col-sm-8'><input id='{{id}}_idleLoss' class='form-control' type='text'{{#idleLoss}} value='{{idleLoss}}'{{/idleLoss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxUdc'>maxUdc: </label><div class='col-sm-8'><input id='{{id}}_maxUdc' class='form-control' type='text'{{#maxUdc}} value='{{maxUdc}}'{{/maxUdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minUdc'>minUdc: </label><div class='col-sm-8'><input id='{{id}}_minUdc' class='form-control' type='text'{{#minUdc}} value='{{minUdc}}'{{/minUdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_poleLossP'>poleLossP: </label><div class='col-sm-8'><input id='{{id}}_poleLossP' class='form-control' type='text'{{#poleLossP}} value='{{poleLossP}}'{{/poleLossP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedUdc'>ratedUdc: </label><div class='col-sm-8'><input id='{{id}}_ratedUdc' class='form-control' type='text'{{#ratedUdc}} value='{{ratedUdc}}'{{/ratedUdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resistiveLoss'>resistiveLoss: </label><div class='col-sm-8'><input id='{{id}}_resistiveLoss' class='form-control' type='text'{{#resistiveLoss}} value='{{resistiveLoss}}'{{/resistiveLoss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uc'>uc: </label><div class='col-sm-8'><input id='{{id}}_uc' class='form-control' type='text'{{#uc}} value='{{uc}}'{{/uc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_udc'>udc: </label><div class='col-sm-8'><input id='{{id}}_udc' class='form-control' type='text'{{#udc}} value='{{udc}}'{{/udc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_valveU0'>valveU0: </label><div class='col-sm-8'><input id='{{id}}_valveU0' class='form-control' type='text'{{#valveU0}} value='{{valveU0}}'{{/valveU0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_numberOfValves'>numberOfValves: </label><div class='col-sm-8'><input id='{{id}}_numberOfValves' class='form-control' type='text'{{#numberOfValves}} value='{{numberOfValves}}'{{/numberOfValves}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PccTerminal'>PccTerminal: </label><div class='col-sm-8'><input id='{{id}}_PccTerminal' class='form-control' type='text'{{#PccTerminal}} value='{{PccTerminal}}'{{/PccTerminal}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ACDCConverter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_baseS").value; if ("" !== temp) obj["baseS"] = temp;
                temp = document.getElementById (id + "_switchingLoss").value; if ("" !== temp) obj["switchingLoss"] = temp;
                temp = document.getElementById (id + "_targetPpcc").value; if ("" !== temp) obj["targetPpcc"] = temp;
                temp = document.getElementById (id + "_targetUdc").value; if ("" !== temp) obj["targetUdc"] = temp;
                temp = document.getElementById (id + "_idc").value; if ("" !== temp) obj["idc"] = temp;
                temp = document.getElementById (id + "_idleLoss").value; if ("" !== temp) obj["idleLoss"] = temp;
                temp = document.getElementById (id + "_maxUdc").value; if ("" !== temp) obj["maxUdc"] = temp;
                temp = document.getElementById (id + "_minUdc").value; if ("" !== temp) obj["minUdc"] = temp;
                temp = document.getElementById (id + "_poleLossP").value; if ("" !== temp) obj["poleLossP"] = temp;
                temp = document.getElementById (id + "_ratedUdc").value; if ("" !== temp) obj["ratedUdc"] = temp;
                temp = document.getElementById (id + "_resistiveLoss").value; if ("" !== temp) obj["resistiveLoss"] = temp;
                temp = document.getElementById (id + "_uc").value; if ("" !== temp) obj["uc"] = temp;
                temp = document.getElementById (id + "_udc").value; if ("" !== temp) obj["udc"] = temp;
                temp = document.getElementById (id + "_valveU0").value; if ("" !== temp) obj["valveU0"] = temp;
                temp = document.getElementById (id + "_numberOfValves").value; if ("" !== temp) obj["numberOfValves"] = temp;
                temp = document.getElementById (id + "_p").value; if ("" !== temp) obj["p"] = temp;
                temp = document.getElementById (id + "_q").value; if ("" !== temp) obj["q"] = temp;
                temp = document.getElementById (id + "_PccTerminal").value; if ("" !== temp) obj["PccTerminal"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCTerminals", "0..*", "1", "ACDCConverterDCTerminal", "DCConductingEquipment"],
                            ["PccTerminal", "0..1", "0..*", "Terminal", "ConverterDCSides"]
                        ]
                    )
                );
            }
        }

        /**
         * Overhead lines and/or cables connecting two or more HVDC substations.
         *
         */
        class DCLine extends DCEquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCLine;
                if (null == bucket)
                   cim_data.DCLine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCLine[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCEquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCLine";
                base.parse_attribute (/<cim:DCLine.Region\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);
                let bucket = context.parsed.DCLine;
                if (null == bucket)
                   context.parsed.DCLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCEquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCLine", "Region", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCLine_collapse" aria-expanded="true" aria-controls="DCLine_collapse" style="margin-left: 10px;">DCLine</a></legend>
                    <div id="DCLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCEquipmentContainer.prototype.template.call (this) +
                    `
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);}); return false;'>{{Region}}</a></div>{{/Region}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCLine_collapse" aria-expanded="true" aria-controls="{{id}}_DCLine_collapse" style="margin-left: 10px;">DCLine</a></legend>
                    <div id="{{id}}_DCLine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCEquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Region'>Region: </label><div class='col-sm-8'><input id='{{id}}_Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCLine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Region").value; if ("" !== temp) obj["Region"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Region", "0..1", "0..*", "SubGeographicalRegion", "DCLines"]
                        ]
                    )
                );
            }
        }

        /**
         * Indivisible operative unit comprising all equipment between the point of common coupling on the AC side and the point of common coupling � DC side, essentially one or more converters, together with one or more converter transformers, converter control equipment, essential protective and switching devices and auxiliaries, if any, used for conversion.
         *
         */
        class DCConverterUnit extends DCEquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCConverterUnit;
                if (null == bucket)
                   cim_data.DCConverterUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCConverterUnit[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCEquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCConverterUnit";
                base.parse_attribute (/<cim:DCConverterUnit.operationMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "operationMode", sub, context);
                base.parse_attribute (/<cim:DCConverterUnit.Substation\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);
                let bucket = context.parsed.DCConverterUnit;
                if (null == bucket)
                   context.parsed.DCConverterUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCEquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCConverterUnit", "operationMode", "operationMode", fields);
                base.export_attribute (obj, "DCConverterUnit", "Substation", "Substation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCConverterUnit_collapse" aria-expanded="true" aria-controls="DCConverterUnit_collapse" style="margin-left: 10px;">DCConverterUnit</a></legend>
                    <div id="DCConverterUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCEquipmentContainer.prototype.template.call (this) +
                    `
                    {{#operationMode}}<div><b>operationMode</b>: {{operationMode}}</div>{{/operationMode}}
                    {{#Substation}}<div><b>Substation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Substation}}&quot;);}); return false;'>{{Substation}}</a></div>{{/Substation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["operationModeDCConverterOperatingModeKind"] = [{ id: '', selected: (!obj["operationMode"])}]; for (let property in DCConverterOperatingModeKind) obj["operationModeDCConverterOperatingModeKind"].push ({ id: property, selected: obj["operationMode"] && obj["operationMode"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["operationModeDCConverterOperatingModeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCConverterUnit_collapse" aria-expanded="true" aria-controls="{{id}}_DCConverterUnit_collapse" style="margin-left: 10px;">DCConverterUnit</a></legend>
                    <div id="{{id}}_DCConverterUnit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCEquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operationMode'>operationMode: </label><div class='col-sm-8'><select id='{{id}}_operationMode' class='form-control custom-select'>{{#operationModeDCConverterOperatingModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/operationModeDCConverterOperatingModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Substation'>Substation: </label><div class='col-sm-8'><input id='{{id}}_Substation' class='form-control' type='text'{{#Substation}} value='{{Substation}}'{{/Substation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCConverterUnit" };
                super.submit (id, obj);
                temp = DCConverterOperatingModeKind[document.getElementById (id + "_operationMode").value]; if (temp) obj["operationMode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DCConverterOperatingModeKind." + temp; else delete obj["operationMode"];
                temp = document.getElementById (id + "_Substation").value; if ("" !== temp) obj["Substation"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Substation", "0..1", "0..*", "Substation", "DCConverterUnit"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrical connection point to generic DC conducting equipment.
         *
         */
        class DCTerminal extends DCBaseTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCTerminal;
                if (null == bucket)
                   cim_data.DCTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCTerminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCBaseTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "DCTerminal";
                base.parse_attribute (/<cim:DCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);
                let bucket = context.parsed.DCTerminal;
                if (null == bucket)
                   context.parsed.DCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCBaseTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCTerminal", "DCConductingEquipment", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCTerminal_collapse" aria-expanded="true" aria-controls="DCTerminal_collapse" style="margin-left: 10px;">DCTerminal</a></legend>
                    <div id="DCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCBaseTerminal.prototype.template.call (this) +
                    `
                    {{#DCConductingEquipment}}<div><b>DCConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCConductingEquipment}}&quot;);}); return false;'>{{DCConductingEquipment}}</a></div>{{/DCConductingEquipment}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_DCTerminal_collapse" style="margin-left: 10px;">DCTerminal</a></legend>
                    <div id="{{id}}_DCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCBaseTerminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCConductingEquipment'>DCConductingEquipment: </label><div class='col-sm-8'><input id='{{id}}_DCConductingEquipment' class='form-control' type='text'{{#DCConductingEquipment}} value='{{DCConductingEquipment}}'{{/DCConductingEquipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCTerminal" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_DCConductingEquipment").value; if ("" !== temp) obj["DCConductingEquipment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCConductingEquipment", "1", "0..*", "DCConductingEquipment", "DCTerminals"]
                        ]
                    )
                );
            }
        }

        /**
         * A DC electrical connection point at the AC/DC converter.
         *
         * The AC/DC converter is electrically connected also to the AC side. The AC connection is inherited from the AC conducting equipment in the same way as any other AC equipment. The AC/DC converter DC terminal is separate from generic DC terminal to restrict the connection with the AC side to AC/DC converter and so that no other DC conducting equipment can be connected to the AC side.
         *
         */
        class ACDCConverterDCTerminal extends DCBaseTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ACDCConverterDCTerminal;
                if (null == bucket)
                   cim_data.ACDCConverterDCTerminal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ACDCConverterDCTerminal[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCBaseTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCConverterDCTerminal";
                base.parse_attribute (/<cim:ACDCConverterDCTerminal.polarity\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "polarity", sub, context);
                base.parse_attribute (/<cim:ACDCConverterDCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);
                let bucket = context.parsed.ACDCConverterDCTerminal;
                if (null == bucket)
                   context.parsed.ACDCConverterDCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCBaseTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ACDCConverterDCTerminal", "polarity", "polarity", fields);
                base.export_attribute (obj, "ACDCConverterDCTerminal", "DCConductingEquipment", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ACDCConverterDCTerminal_collapse" aria-expanded="true" aria-controls="ACDCConverterDCTerminal_collapse" style="margin-left: 10px;">ACDCConverterDCTerminal</a></legend>
                    <div id="ACDCConverterDCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCBaseTerminal.prototype.template.call (this) +
                    `
                    {{#polarity}}<div><b>polarity</b>: {{polarity}}</div>{{/polarity}}
                    {{#DCConductingEquipment}}<div><b>DCConductingEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DCConductingEquipment}}&quot;);}); return false;'>{{DCConductingEquipment}}</a></div>{{/DCConductingEquipment}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["polarityDCPolarityKind"] = [{ id: '', selected: (!obj["polarity"])}]; for (let property in DCPolarityKind) obj["polarityDCPolarityKind"].push ({ id: property, selected: obj["polarity"] && obj["polarity"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["polarityDCPolarityKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ACDCConverterDCTerminal_collapse" aria-expanded="true" aria-controls="{{id}}_ACDCConverterDCTerminal_collapse" style="margin-left: 10px;">ACDCConverterDCTerminal</a></legend>
                    <div id="{{id}}_ACDCConverterDCTerminal_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCBaseTerminal.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_polarity'>polarity: </label><div class='col-sm-8'><select id='{{id}}_polarity' class='form-control custom-select'>{{#polarityDCPolarityKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/polarityDCPolarityKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCConductingEquipment'>DCConductingEquipment: </label><div class='col-sm-8'><input id='{{id}}_DCConductingEquipment' class='form-control' type='text'{{#DCConductingEquipment}} value='{{DCConductingEquipment}}'{{/DCConductingEquipment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ACDCConverterDCTerminal" };
                super.submit (id, obj);
                temp = DCPolarityKind[document.getElementById (id + "_polarity").value]; if (temp) obj["polarity"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#DCPolarityKind." + temp; else delete obj["polarity"];
                temp = document.getElementById (id + "_DCConductingEquipment").value; if ("" !== temp) obj["DCConductingEquipment"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["DCConductingEquipment", "1", "0..*", "ACDCConverter", "DCTerminals"]
                        ]
                    )
                );
            }
        }

        /**
         * A wire or combination of wires not insulated from one another, with consistent electrical characteristics, used to carry direct current between points in the DC region of the power system.
         *
         */
        class DCLineSegment extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCLineSegment;
                if (null == bucket)
                   cim_data.DCLineSegment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCLineSegment[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCLineSegment";
                base.parse_element (/<cim:DCLineSegment.resistance>([\s\S]*?)<\/cim:DCLineSegment.resistance>/g, obj, "resistance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.capacitance>([\s\S]*?)<\/cim:DCLineSegment.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.inductance>([\s\S]*?)<\/cim:DCLineSegment.inductance>/g, obj, "inductance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.length>([\s\S]*?)<\/cim:DCLineSegment.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_attribute (/<cim:DCLineSegment.PerLengthParameter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PerLengthParameter", sub, context);
                let bucket = context.parsed.DCLineSegment;
                if (null == bucket)
                   context.parsed.DCLineSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCLineSegment", "resistance", "resistance",  base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "capacitance", "capacitance",  base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "inductance", "inductance",  base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "length", "length",  base.from_string, fields);
                base.export_attribute (obj, "DCLineSegment", "PerLengthParameter", "PerLengthParameter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCLineSegment_collapse" aria-expanded="true" aria-controls="DCLineSegment_collapse" style="margin-left: 10px;">DCLineSegment</a></legend>
                    <div id="DCLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
                    `
                    {{#resistance}}<div><b>resistance</b>: {{resistance}}</div>{{/resistance}}
                    {{#capacitance}}<div><b>capacitance</b>: {{capacitance}}</div>{{/capacitance}}
                    {{#inductance}}<div><b>inductance</b>: {{inductance}}</div>{{/inductance}}
                    {{#length}}<div><b>length</b>: {{length}}</div>{{/length}}
                    {{#PerLengthParameter}}<div><b>PerLengthParameter</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PerLengthParameter}}&quot;);}); return false;'>{{PerLengthParameter}}</a></div>{{/PerLengthParameter}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCLineSegment_collapse" aria-expanded="true" aria-controls="{{id}}_DCLineSegment_collapse" style="margin-left: 10px;">DCLineSegment</a></legend>
                    <div id="{{id}}_DCLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resistance'>resistance: </label><div class='col-sm-8'><input id='{{id}}_resistance' class='form-control' type='text'{{#resistance}} value='{{resistance}}'{{/resistance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitance'>capacitance: </label><div class='col-sm-8'><input id='{{id}}_capacitance' class='form-control' type='text'{{#capacitance}} value='{{capacitance}}'{{/capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductance'>inductance: </label><div class='col-sm-8'><input id='{{id}}_inductance' class='form-control' type='text'{{#inductance}} value='{{inductance}}'{{/inductance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_length'>length: </label><div class='col-sm-8'><input id='{{id}}_length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PerLengthParameter'>PerLengthParameter: </label><div class='col-sm-8'><input id='{{id}}_PerLengthParameter' class='form-control' type='text'{{#PerLengthParameter}} value='{{PerLengthParameter}}'{{/PerLengthParameter}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCLineSegment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_resistance").value; if ("" !== temp) obj["resistance"] = temp;
                temp = document.getElementById (id + "_capacitance").value; if ("" !== temp) obj["capacitance"] = temp;
                temp = document.getElementById (id + "_inductance").value; if ("" !== temp) obj["inductance"] = temp;
                temp = document.getElementById (id + "_length").value; if ("" !== temp) obj["length"] = temp;
                temp = document.getElementById (id + "_PerLengthParameter").value; if ("" !== temp) obj["PerLengthParameter"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PerLengthParameter", "0..1", "0..*", "PerLengthDCLineParameter", "DCLineSegments"]
                        ]
                    )
                );
            }
        }

        /**
         * Low resistance equipment used in the internal DC circuit to balance voltages.
         *
         * It has typically positive and negative pole terminals and a ground.
         *
         */
        class DCChopper extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCChopper;
                if (null == bucket)
                   cim_data.DCChopper = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCChopper[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCChopper";
                let bucket = context.parsed.DCChopper;
                if (null == bucket)
                   context.parsed.DCChopper = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCChopper_collapse" aria-expanded="true" aria-controls="DCChopper_collapse" style="margin-left: 10px;">DCChopper</a></legend>
                    <div id="DCChopper_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCChopper_collapse" aria-expanded="true" aria-controls="{{id}}_DCChopper_collapse" style="margin-left: 10px;">DCChopper</a></legend>
                    <div id="{{id}}_DCChopper_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCChopper" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A shunt device within the DC system, typically used for filtering.
         *
         * Needed for transient and short circuit studies.
         *
         */
        class DCShunt extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCShunt;
                if (null == bucket)
                   cim_data.DCShunt = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCShunt[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCShunt";
                base.parse_element (/<cim:DCShunt.capacitance>([\s\S]*?)<\/cim:DCShunt.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:DCShunt.resistance>([\s\S]*?)<\/cim:DCShunt.resistance>/g, obj, "resistance", base.to_string, sub, context);
                let bucket = context.parsed.DCShunt;
                if (null == bucket)
                   context.parsed.DCShunt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCShunt", "capacitance", "capacitance",  base.from_string, fields);
                base.export_element (obj, "DCShunt", "resistance", "resistance",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCShunt_collapse" aria-expanded="true" aria-controls="DCShunt_collapse" style="margin-left: 10px;">DCShunt</a></legend>
                    <div id="DCShunt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
                    `
                    {{#capacitance}}<div><b>capacitance</b>: {{capacitance}}</div>{{/capacitance}}
                    {{#resistance}}<div><b>resistance</b>: {{resistance}}</div>{{/resistance}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCShunt_collapse" aria-expanded="true" aria-controls="{{id}}_DCShunt_collapse" style="margin-left: 10px;">DCShunt</a></legend>
                    <div id="{{id}}_DCShunt_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitance'>capacitance: </label><div class='col-sm-8'><input id='{{id}}_capacitance' class='form-control' type='text'{{#capacitance}} value='{{capacitance}}'{{/capacitance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resistance'>resistance: </label><div class='col-sm-8'><input id='{{id}}_resistance' class='form-control' type='text'{{#resistance}} value='{{resistance}}'{{/resistance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCShunt" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacitance").value; if ("" !== temp) obj["capacitance"] = temp;
                temp = document.getElementById (id + "_resistance").value; if ("" !== temp) obj["resistance"] = temp;

                return (obj);
            }
        }

        /**
         * A ground within a DC system.
         *
         */
        class DCGround extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCGround;
                if (null == bucket)
                   cim_data.DCGround = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCGround[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCGround";
                base.parse_element (/<cim:DCGround.r>([\s\S]*?)<\/cim:DCGround.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:DCGround.inductance>([\s\S]*?)<\/cim:DCGround.inductance>/g, obj, "inductance", base.to_string, sub, context);
                let bucket = context.parsed.DCGround;
                if (null == bucket)
                   context.parsed.DCGround = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCGround", "r", "r",  base.from_string, fields);
                base.export_element (obj, "DCGround", "inductance", "inductance",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCGround_collapse" aria-expanded="true" aria-controls="DCGround_collapse" style="margin-left: 10px;">DCGround</a></legend>
                    <div id="DCGround_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
                    `
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#inductance}}<div><b>inductance</b>: {{inductance}}</div>{{/inductance}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCGround_collapse" aria-expanded="true" aria-controls="{{id}}_DCGround_collapse" style="margin-left: 10px;">DCGround</a></legend>
                    <div id="{{id}}_DCGround_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductance'>inductance: </label><div class='col-sm-8'><input id='{{id}}_inductance' class='form-control' type='text'{{#inductance}} value='{{inductance}}'{{/inductance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCGround" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_r").value; if ("" !== temp) obj["r"] = temp;
                temp = document.getElementById (id + "_inductance").value; if ("" !== temp) obj["inductance"] = temp;

                return (obj);
            }
        }

        /**
         * A series device within the DC system, typically a reactor used for filtering or smoothing.
         *
         * Needed for transient and short circuit studies.
         *
         */
        class DCSeriesDevice extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCSeriesDevice;
                if (null == bucket)
                   cim_data.DCSeriesDevice = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCSeriesDevice[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCSeriesDevice";
                base.parse_element (/<cim:DCSeriesDevice.resistance>([\s\S]*?)<\/cim:DCSeriesDevice.resistance>/g, obj, "resistance", base.to_string, sub, context);
                base.parse_element (/<cim:DCSeriesDevice.inductance>([\s\S]*?)<\/cim:DCSeriesDevice.inductance>/g, obj, "inductance", base.to_string, sub, context);
                let bucket = context.parsed.DCSeriesDevice;
                if (null == bucket)
                   context.parsed.DCSeriesDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCSeriesDevice", "resistance", "resistance",  base.from_string, fields);
                base.export_element (obj, "DCSeriesDevice", "inductance", "inductance",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCSeriesDevice_collapse" aria-expanded="true" aria-controls="DCSeriesDevice_collapse" style="margin-left: 10px;">DCSeriesDevice</a></legend>
                    <div id="DCSeriesDevice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
                    `
                    {{#resistance}}<div><b>resistance</b>: {{resistance}}</div>{{/resistance}}
                    {{#inductance}}<div><b>inductance</b>: {{inductance}}</div>{{/inductance}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCSeriesDevice_collapse" aria-expanded="true" aria-controls="{{id}}_DCSeriesDevice_collapse" style="margin-left: 10px;">DCSeriesDevice</a></legend>
                    <div id="{{id}}_DCSeriesDevice_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_resistance'>resistance: </label><div class='col-sm-8'><input id='{{id}}_resistance' class='form-control' type='text'{{#resistance}} value='{{resistance}}'{{/resistance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductance'>inductance: </label><div class='col-sm-8'><input id='{{id}}_inductance' class='form-control' type='text'{{#inductance}} value='{{inductance}}'{{/inductance}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "DCSeriesDevice" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_resistance").value; if ("" !== temp) obj["resistance"] = temp;
                temp = document.getElementById (id + "_inductance").value; if ("" !== temp) obj["inductance"] = temp;

                return (obj);
            }
        }

        /**
         * A busbar within a DC system.
         *
         */
        class DCBusbar extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCBusbar;
                if (null == bucket)
                   cim_data.DCBusbar = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCBusbar[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCBusbar";
                let bucket = context.parsed.DCBusbar;
                if (null == bucket)
                   context.parsed.DCBusbar = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCBusbar_collapse" aria-expanded="true" aria-controls="DCBusbar_collapse" style="margin-left: 10px;">DCBusbar</a></legend>
                    <div id="DCBusbar_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCBusbar_collapse" aria-expanded="true" aria-controls="{{id}}_DCBusbar_collapse" style="margin-left: 10px;">DCBusbar</a></legend>
                    <div id="{{id}}_DCBusbar_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCBusbar" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A switch within the DC system.
         *
         */
        class DCSwitch extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCSwitch;
                if (null == bucket)
                   cim_data.DCSwitch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCSwitch[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCSwitch";
                let bucket = context.parsed.DCSwitch;
                if (null == bucket)
                   context.parsed.DCSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCSwitch_collapse" aria-expanded="true" aria-controls="DCSwitch_collapse" style="margin-left: 10px;">DCSwitch</a></legend>
                    <div id="DCSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCSwitch_collapse" aria-expanded="true" aria-controls="{{id}}_DCSwitch_collapse" style="margin-left: 10px;">DCSwitch</a></legend>
                    <div id="{{id}}_DCSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCSwitch" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A breaker within a DC system.
         *
         */
        class DCBreaker extends DCSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCBreaker;
                if (null == bucket)
                   cim_data.DCBreaker = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCBreaker[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "DCBreaker";
                let bucket = context.parsed.DCBreaker;
                if (null == bucket)
                   context.parsed.DCBreaker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCBreaker_collapse" aria-expanded="true" aria-controls="DCBreaker_collapse" style="margin-left: 10px;">DCBreaker</a></legend>
                    <div id="DCBreaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCSwitch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCBreaker_collapse" aria-expanded="true" aria-controls="{{id}}_DCBreaker_collapse" style="margin-left: 10px;">DCBreaker</a></legend>
                    <div id="{{id}}_DCBreaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCSwitch.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCBreaker" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A disconnector within a DC system.
         *
         */
        class DCDisconnector extends DCSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.DCDisconnector;
                if (null == bucket)
                   cim_data.DCDisconnector = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DCDisconnector[obj.id];
            }

            parse (context, sub)
            {
                let obj = DCSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "DCDisconnector";
                let bucket = context.parsed.DCDisconnector;
                if (null == bucket)
                   context.parsed.DCDisconnector = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = DCSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#DCDisconnector_collapse" aria-expanded="true" aria-controls="DCDisconnector_collapse" style="margin-left: 10px;">DCDisconnector</a></legend>
                    <div id="DCDisconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCSwitch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_DCDisconnector_collapse" aria-expanded="true" aria-controls="{{id}}_DCDisconnector_collapse" style="margin-left: 10px;">DCDisconnector</a></legend>
                    <div id="{{id}}_DCDisconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + DCSwitch.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "DCDisconnector" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * DC side of the current source converter (CSC).
         *
         */
        class CsConverter extends ACDCConverter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.CsConverter;
                if (null == bucket)
                   cim_data.CsConverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CsConverter[obj.id];
            }

            parse (context, sub)
            {
                let obj = ACDCConverter.prototype.parse.call (this, context, sub);
                obj.cls = "CsConverter";
                base.parse_element (/<cim:CsConverter.maxIdc>([\s\S]*?)<\/cim:CsConverter.maxIdc>/g, obj, "maxIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.ratedIdc>([\s\S]*?)<\/cim:CsConverter.ratedIdc>/g, obj, "ratedIdc", base.to_string, sub, context);
                base.parse_attribute (/<cim:CsConverter.pPccControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "pPccControl", sub, context);
                base.parse_element (/<cim:CsConverter.alpha>([\s\S]*?)<\/cim:CsConverter.alpha>/g, obj, "alpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.gamma>([\s\S]*?)<\/cim:CsConverter.gamma>/g, obj, "gamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.maxAlpha>([\s\S]*?)<\/cim:CsConverter.maxAlpha>/g, obj, "maxAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.maxGamma>([\s\S]*?)<\/cim:CsConverter.maxGamma>/g, obj, "maxGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minAlpha>([\s\S]*?)<\/cim:CsConverter.minAlpha>/g, obj, "minAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minGamma>([\s\S]*?)<\/cim:CsConverter.minGamma>/g, obj, "minGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetAlpha>([\s\S]*?)<\/cim:CsConverter.targetAlpha>/g, obj, "targetAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetGamma>([\s\S]*?)<\/cim:CsConverter.targetGamma>/g, obj, "targetGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetIdc>([\s\S]*?)<\/cim:CsConverter.targetIdc>/g, obj, "targetIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minIdc>([\s\S]*?)<\/cim:CsConverter.minIdc>/g, obj, "minIdc", base.to_string, sub, context);
                base.parse_attribute (/<cim:CsConverter.operatingMode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "operatingMode", sub, context);
                base.parse_attribute (/<cim:CsConverter.CSCDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CSCDynamics", sub, context);
                let bucket = context.parsed.CsConverter;
                if (null == bucket)
                   context.parsed.CsConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ACDCConverter.prototype.export.call (this, obj, false);

                base.export_element (obj, "CsConverter", "maxIdc", "maxIdc",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "ratedIdc", "ratedIdc",  base.from_string, fields);
                base.export_attribute (obj, "CsConverter", "pPccControl", "pPccControl", fields);
                base.export_element (obj, "CsConverter", "alpha", "alpha",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "gamma", "gamma",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "maxAlpha", "maxAlpha",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "maxGamma", "maxGamma",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "minAlpha", "minAlpha",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "minGamma", "minGamma",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetAlpha", "targetAlpha",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetGamma", "targetGamma",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetIdc", "targetIdc",  base.from_string, fields);
                base.export_element (obj, "CsConverter", "minIdc", "minIdc",  base.from_string, fields);
                base.export_attribute (obj, "CsConverter", "operatingMode", "operatingMode", fields);
                base.export_attribute (obj, "CsConverter", "CSCDynamics", "CSCDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CsConverter_collapse" aria-expanded="true" aria-controls="CsConverter_collapse" style="margin-left: 10px;">CsConverter</a></legend>
                    <div id="CsConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCConverter.prototype.template.call (this) +
                    `
                    {{#maxIdc}}<div><b>maxIdc</b>: {{maxIdc}}</div>{{/maxIdc}}
                    {{#ratedIdc}}<div><b>ratedIdc</b>: {{ratedIdc}}</div>{{/ratedIdc}}
                    {{#pPccControl}}<div><b>pPccControl</b>: {{pPccControl}}</div>{{/pPccControl}}
                    {{#alpha}}<div><b>alpha</b>: {{alpha}}</div>{{/alpha}}
                    {{#gamma}}<div><b>gamma</b>: {{gamma}}</div>{{/gamma}}
                    {{#maxAlpha}}<div><b>maxAlpha</b>: {{maxAlpha}}</div>{{/maxAlpha}}
                    {{#maxGamma}}<div><b>maxGamma</b>: {{maxGamma}}</div>{{/maxGamma}}
                    {{#minAlpha}}<div><b>minAlpha</b>: {{minAlpha}}</div>{{/minAlpha}}
                    {{#minGamma}}<div><b>minGamma</b>: {{minGamma}}</div>{{/minGamma}}
                    {{#targetAlpha}}<div><b>targetAlpha</b>: {{targetAlpha}}</div>{{/targetAlpha}}
                    {{#targetGamma}}<div><b>targetGamma</b>: {{targetGamma}}</div>{{/targetGamma}}
                    {{#targetIdc}}<div><b>targetIdc</b>: {{targetIdc}}</div>{{/targetIdc}}
                    {{#minIdc}}<div><b>minIdc</b>: {{minIdc}}</div>{{/minIdc}}
                    {{#operatingMode}}<div><b>operatingMode</b>: {{operatingMode}}</div>{{/operatingMode}}
                    {{#CSCDynamics}}<div><b>CSCDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CSCDynamics}}&quot;);}); return false;'>{{CSCDynamics}}</a></div>{{/CSCDynamics}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["pPccControlCsPpccControlKind"] = [{ id: '', selected: (!obj["pPccControl"])}]; for (let property in CsPpccControlKind) obj["pPccControlCsPpccControlKind"].push ({ id: property, selected: obj["pPccControl"] && obj["pPccControl"].endsWith ('.' + property)});
                obj["operatingModeCsOperatingModeKind"] = [{ id: '', selected: (!obj["operatingMode"])}]; for (let property in CsOperatingModeKind) obj["operatingModeCsOperatingModeKind"].push ({ id: property, selected: obj["operatingMode"] && obj["operatingMode"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["pPccControlCsPpccControlKind"];
                delete obj["operatingModeCsOperatingModeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CsConverter_collapse" aria-expanded="true" aria-controls="{{id}}_CsConverter_collapse" style="margin-left: 10px;">CsConverter</a></legend>
                    <div id="{{id}}_CsConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCConverter.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxIdc'>maxIdc: </label><div class='col-sm-8'><input id='{{id}}_maxIdc' class='form-control' type='text'{{#maxIdc}} value='{{maxIdc}}'{{/maxIdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedIdc'>ratedIdc: </label><div class='col-sm-8'><input id='{{id}}_ratedIdc' class='form-control' type='text'{{#ratedIdc}} value='{{ratedIdc}}'{{/ratedIdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pPccControl'>pPccControl: </label><div class='col-sm-8'><select id='{{id}}_pPccControl' class='form-control custom-select'>{{#pPccControlCsPpccControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/pPccControlCsPpccControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_alpha'>alpha: </label><div class='col-sm-8'><input id='{{id}}_alpha' class='form-control' type='text'{{#alpha}} value='{{alpha}}'{{/alpha}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gamma'>gamma: </label><div class='col-sm-8'><input id='{{id}}_gamma' class='form-control' type='text'{{#gamma}} value='{{gamma}}'{{/gamma}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxAlpha'>maxAlpha: </label><div class='col-sm-8'><input id='{{id}}_maxAlpha' class='form-control' type='text'{{#maxAlpha}} value='{{maxAlpha}}'{{/maxAlpha}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxGamma'>maxGamma: </label><div class='col-sm-8'><input id='{{id}}_maxGamma' class='form-control' type='text'{{#maxGamma}} value='{{maxGamma}}'{{/maxGamma}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minAlpha'>minAlpha: </label><div class='col-sm-8'><input id='{{id}}_minAlpha' class='form-control' type='text'{{#minAlpha}} value='{{minAlpha}}'{{/minAlpha}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minGamma'>minGamma: </label><div class='col-sm-8'><input id='{{id}}_minGamma' class='form-control' type='text'{{#minGamma}} value='{{minGamma}}'{{/minGamma}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetAlpha'>targetAlpha: </label><div class='col-sm-8'><input id='{{id}}_targetAlpha' class='form-control' type='text'{{#targetAlpha}} value='{{targetAlpha}}'{{/targetAlpha}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetGamma'>targetGamma: </label><div class='col-sm-8'><input id='{{id}}_targetGamma' class='form-control' type='text'{{#targetGamma}} value='{{targetGamma}}'{{/targetGamma}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetIdc'>targetIdc: </label><div class='col-sm-8'><input id='{{id}}_targetIdc' class='form-control' type='text'{{#targetIdc}} value='{{targetIdc}}'{{/targetIdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minIdc'>minIdc: </label><div class='col-sm-8'><input id='{{id}}_minIdc' class='form-control' type='text'{{#minIdc}} value='{{minIdc}}'{{/minIdc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operatingMode'>operatingMode: </label><div class='col-sm-8'><select id='{{id}}_operatingMode' class='form-control custom-select'>{{#operatingModeCsOperatingModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/operatingModeCsOperatingModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CSCDynamics'>CSCDynamics: </label><div class='col-sm-8'><input id='{{id}}_CSCDynamics' class='form-control' type='text'{{#CSCDynamics}} value='{{CSCDynamics}}'{{/CSCDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "CsConverter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maxIdc").value; if ("" !== temp) obj["maxIdc"] = temp;
                temp = document.getElementById (id + "_ratedIdc").value; if ("" !== temp) obj["ratedIdc"] = temp;
                temp = CsPpccControlKind[document.getElementById (id + "_pPccControl").value]; if (temp) obj["pPccControl"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CsPpccControlKind." + temp; else delete obj["pPccControl"];
                temp = document.getElementById (id + "_alpha").value; if ("" !== temp) obj["alpha"] = temp;
                temp = document.getElementById (id + "_gamma").value; if ("" !== temp) obj["gamma"] = temp;
                temp = document.getElementById (id + "_maxAlpha").value; if ("" !== temp) obj["maxAlpha"] = temp;
                temp = document.getElementById (id + "_maxGamma").value; if ("" !== temp) obj["maxGamma"] = temp;
                temp = document.getElementById (id + "_minAlpha").value; if ("" !== temp) obj["minAlpha"] = temp;
                temp = document.getElementById (id + "_minGamma").value; if ("" !== temp) obj["minGamma"] = temp;
                temp = document.getElementById (id + "_targetAlpha").value; if ("" !== temp) obj["targetAlpha"] = temp;
                temp = document.getElementById (id + "_targetGamma").value; if ("" !== temp) obj["targetGamma"] = temp;
                temp = document.getElementById (id + "_targetIdc").value; if ("" !== temp) obj["targetIdc"] = temp;
                temp = document.getElementById (id + "_minIdc").value; if ("" !== temp) obj["minIdc"] = temp;
                temp = CsOperatingModeKind[document.getElementById (id + "_operatingMode").value]; if (temp) obj["operatingMode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#CsOperatingModeKind." + temp; else delete obj["operatingMode"];
                temp = document.getElementById (id + "_CSCDynamics").value; if ("" !== temp) obj["CSCDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CSCDynamics", "0..1", "1", "CSCDynamics", "CSConverter"]
                        ]
                    )
                );
            }
        }

        /**
         * DC side of the voltage source converter (VSC).
         *
         */
        class VsConverter extends ACDCConverter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.VsConverter;
                if (null == bucket)
                   cim_data.VsConverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VsConverter[obj.id];
            }

            parse (context, sub)
            {
                let obj = ACDCConverter.prototype.parse.call (this, context, sub);
                obj.cls = "VsConverter";
                base.parse_attribute (/<cim:VsConverter.pPccControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "pPccControl", sub, context);
                base.parse_element (/<cim:VsConverter.qShare>([\s\S]*?)<\/cim:VsConverter.qShare>/g, obj, "qShare", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.targetQpcc>([\s\S]*?)<\/cim:VsConverter.targetQpcc>/g, obj, "targetQpcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.targetUpcc>([\s\S]*?)<\/cim:VsConverter.targetUpcc>/g, obj, "targetUpcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.droopCompensation>([\s\S]*?)<\/cim:VsConverter.droopCompensation>/g, obj, "droopCompensation", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.droop>([\s\S]*?)<\/cim:VsConverter.droop>/g, obj, "droop", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.delta>([\s\S]*?)<\/cim:VsConverter.delta>/g, obj, "delta", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.uv>([\s\S]*?)<\/cim:VsConverter.uv>/g, obj, "uv", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.maxValveCurrent>([\s\S]*?)<\/cim:VsConverter.maxValveCurrent>/g, obj, "maxValveCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.maxModulationIndex>([\s\S]*?)<\/cim:VsConverter.maxModulationIndex>/g, obj, "maxModulationIndex", base.to_float, sub, context);
                base.parse_attribute (/<cim:VsConverter.qPccControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "qPccControl", sub, context);
                base.parse_attribute (/<cim:VsConverter.CapabilityCurve\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CapabilityCurve", sub, context);
                base.parse_attribute (/<cim:VsConverter.VSCDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "VSCDynamics", sub, context);
                let bucket = context.parsed.VsConverter;
                if (null == bucket)
                   context.parsed.VsConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ACDCConverter.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "VsConverter", "pPccControl", "pPccControl", fields);
                base.export_element (obj, "VsConverter", "qShare", "qShare",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "targetQpcc", "targetQpcc",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "targetUpcc", "targetUpcc",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "droopCompensation", "droopCompensation",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "droop", "droop",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "delta", "delta",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "uv", "uv",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "maxValveCurrent", "maxValveCurrent",  base.from_string, fields);
                base.export_element (obj, "VsConverter", "maxModulationIndex", "maxModulationIndex",  base.from_float, fields);
                base.export_attribute (obj, "VsConverter", "qPccControl", "qPccControl", fields);
                base.export_attribute (obj, "VsConverter", "CapabilityCurve", "CapabilityCurve", fields);
                base.export_attribute (obj, "VsConverter", "VSCDynamics", "VSCDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VsConverter_collapse" aria-expanded="true" aria-controls="VsConverter_collapse" style="margin-left: 10px;">VsConverter</a></legend>
                    <div id="VsConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCConverter.prototype.template.call (this) +
                    `
                    {{#pPccControl}}<div><b>pPccControl</b>: {{pPccControl}}</div>{{/pPccControl}}
                    {{#qShare}}<div><b>qShare</b>: {{qShare}}</div>{{/qShare}}
                    {{#targetQpcc}}<div><b>targetQpcc</b>: {{targetQpcc}}</div>{{/targetQpcc}}
                    {{#targetUpcc}}<div><b>targetUpcc</b>: {{targetUpcc}}</div>{{/targetUpcc}}
                    {{#droopCompensation}}<div><b>droopCompensation</b>: {{droopCompensation}}</div>{{/droopCompensation}}
                    {{#droop}}<div><b>droop</b>: {{droop}}</div>{{/droop}}
                    {{#delta}}<div><b>delta</b>: {{delta}}</div>{{/delta}}
                    {{#uv}}<div><b>uv</b>: {{uv}}</div>{{/uv}}
                    {{#maxValveCurrent}}<div><b>maxValveCurrent</b>: {{maxValveCurrent}}</div>{{/maxValveCurrent}}
                    {{#maxModulationIndex}}<div><b>maxModulationIndex</b>: {{maxModulationIndex}}</div>{{/maxModulationIndex}}
                    {{#qPccControl}}<div><b>qPccControl</b>: {{qPccControl}}</div>{{/qPccControl}}
                    {{#CapabilityCurve}}<div><b>CapabilityCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CapabilityCurve}}&quot;);}); return false;'>{{CapabilityCurve}}</a></div>{{/CapabilityCurve}}
                    {{#VSCDynamics}}<div><b>VSCDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VSCDynamics}}&quot;);}); return false;'>{{VSCDynamics}}</a></div>{{/VSCDynamics}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["pPccControlVsPpccControlKind"] = [{ id: '', selected: (!obj["pPccControl"])}]; for (let property in VsPpccControlKind) obj["pPccControlVsPpccControlKind"].push ({ id: property, selected: obj["pPccControl"] && obj["pPccControl"].endsWith ('.' + property)});
                obj["qPccControlVsQpccControlKind"] = [{ id: '', selected: (!obj["qPccControl"])}]; for (let property in VsQpccControlKind) obj["qPccControlVsQpccControlKind"].push ({ id: property, selected: obj["qPccControl"] && obj["qPccControl"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["pPccControlVsPpccControlKind"];
                delete obj["qPccControlVsQpccControlKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VsConverter_collapse" aria-expanded="true" aria-controls="{{id}}_VsConverter_collapse" style="margin-left: 10px;">VsConverter</a></legend>
                    <div id="{{id}}_VsConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ACDCConverter.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pPccControl'>pPccControl: </label><div class='col-sm-8'><select id='{{id}}_pPccControl' class='form-control custom-select'>{{#pPccControlVsPpccControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/pPccControlVsPpccControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qShare'>qShare: </label><div class='col-sm-8'><input id='{{id}}_qShare' class='form-control' type='text'{{#qShare}} value='{{qShare}}'{{/qShare}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetQpcc'>targetQpcc: </label><div class='col-sm-8'><input id='{{id}}_targetQpcc' class='form-control' type='text'{{#targetQpcc}} value='{{targetQpcc}}'{{/targetQpcc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetUpcc'>targetUpcc: </label><div class='col-sm-8'><input id='{{id}}_targetUpcc' class='form-control' type='text'{{#targetUpcc}} value='{{targetUpcc}}'{{/targetUpcc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_droopCompensation'>droopCompensation: </label><div class='col-sm-8'><input id='{{id}}_droopCompensation' class='form-control' type='text'{{#droopCompensation}} value='{{droopCompensation}}'{{/droopCompensation}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_droop'>droop: </label><div class='col-sm-8'><input id='{{id}}_droop' class='form-control' type='text'{{#droop}} value='{{droop}}'{{/droop}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_delta'>delta: </label><div class='col-sm-8'><input id='{{id}}_delta' class='form-control' type='text'{{#delta}} value='{{delta}}'{{/delta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uv'>uv: </label><div class='col-sm-8'><input id='{{id}}_uv' class='form-control' type='text'{{#uv}} value='{{uv}}'{{/uv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxValveCurrent'>maxValveCurrent: </label><div class='col-sm-8'><input id='{{id}}_maxValveCurrent' class='form-control' type='text'{{#maxValveCurrent}} value='{{maxValveCurrent}}'{{/maxValveCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxModulationIndex'>maxModulationIndex: </label><div class='col-sm-8'><input id='{{id}}_maxModulationIndex' class='form-control' type='text'{{#maxModulationIndex}} value='{{maxModulationIndex}}'{{/maxModulationIndex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qPccControl'>qPccControl: </label><div class='col-sm-8'><select id='{{id}}_qPccControl' class='form-control custom-select'>{{#qPccControlVsQpccControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/qPccControlVsQpccControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CapabilityCurve'>CapabilityCurve: </label><div class='col-sm-8'><input id='{{id}}_CapabilityCurve' class='form-control' type='text'{{#CapabilityCurve}} value='{{CapabilityCurve}}'{{/CapabilityCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VSCDynamics'>VSCDynamics: </label><div class='col-sm-8'><input id='{{id}}_VSCDynamics' class='form-control' type='text'{{#VSCDynamics}} value='{{VSCDynamics}}'{{/VSCDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "VsConverter" };
                super.submit (id, obj);
                temp = VsPpccControlKind[document.getElementById (id + "_pPccControl").value]; if (temp) obj["pPccControl"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#VsPpccControlKind." + temp; else delete obj["pPccControl"];
                temp = document.getElementById (id + "_qShare").value; if ("" !== temp) obj["qShare"] = temp;
                temp = document.getElementById (id + "_targetQpcc").value; if ("" !== temp) obj["targetQpcc"] = temp;
                temp = document.getElementById (id + "_targetUpcc").value; if ("" !== temp) obj["targetUpcc"] = temp;
                temp = document.getElementById (id + "_droopCompensation").value; if ("" !== temp) obj["droopCompensation"] = temp;
                temp = document.getElementById (id + "_droop").value; if ("" !== temp) obj["droop"] = temp;
                temp = document.getElementById (id + "_delta").value; if ("" !== temp) obj["delta"] = temp;
                temp = document.getElementById (id + "_uv").value; if ("" !== temp) obj["uv"] = temp;
                temp = document.getElementById (id + "_maxValveCurrent").value; if ("" !== temp) obj["maxValveCurrent"] = temp;
                temp = document.getElementById (id + "_maxModulationIndex").value; if ("" !== temp) obj["maxModulationIndex"] = temp;
                temp = VsQpccControlKind[document.getElementById (id + "_qPccControl").value]; if (temp) obj["qPccControl"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#VsQpccControlKind." + temp; else delete obj["qPccControl"];
                temp = document.getElementById (id + "_CapabilityCurve").value; if ("" !== temp) obj["CapabilityCurve"] = temp;
                temp = document.getElementById (id + "_VSCDynamics").value; if ("" !== temp) obj["VSCDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CapabilityCurve", "0..1", "0..*", "VsCapabilityCurve", "VsConverterDCSides"],
                            ["VSCDynamics", "0..1", "1", "VSCDynamics", "VsConverter"]
                        ]
                    )
                );
            }
        }

        return (
            {
                DCShunt: DCShunt,
                DCEquipmentContainer: DCEquipmentContainer,
                VsQpccControlKind: VsQpccControlKind,
                CsPpccControlKind: CsPpccControlKind,
                DCGround: DCGround,
                DCChopper: DCChopper,
                DCConductingEquipment: DCConductingEquipment,
                DCConverterOperatingModeKind: DCConverterOperatingModeKind,
                DCBreaker: DCBreaker,
                PerLengthDCLineParameter: PerLengthDCLineParameter,
                DCBaseTerminal: DCBaseTerminal,
                DCSwitch: DCSwitch,
                DCSeriesDevice: DCSeriesDevice,
                VsPpccControlKind: VsPpccControlKind,
                CsOperatingModeKind: CsOperatingModeKind,
                DCTopologicalIsland: DCTopologicalIsland,
                DCPolarityKind: DCPolarityKind,
                DCDisconnector: DCDisconnector,
                VsConverter: VsConverter,
                DCTopologicalNode: DCTopologicalNode,
                ACDCConverter: ACDCConverter,
                CsConverter: CsConverter,
                DCLineSegment: DCLineSegment,
                VsCapabilityCurve: VsCapabilityCurve,
                DCConverterUnit: DCConverterUnit,
                DCTerminal: DCTerminal,
                DCBusbar: DCBusbar,
                DCLine: DCLine,
                ACDCConverterDCTerminal: ACDCConverterDCTerminal,
                DCNode: DCNode
            }
        );
    }
);