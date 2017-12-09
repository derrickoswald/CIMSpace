define
(
    ["model/base", "model/Core"],
    /**
     * The package describe faults that may happen to conducting equipment, e.g. tree falling on a power line.
     *
     */
    function (base, Core)
    {

        /**
         * The type of fault connection among phases.
         *
         */
        var PhaseConnectedFaultKind =
        {
            lineToGround: "lineToGround",
            lineToLine: "lineToLine",
            lineToLineToGround: "lineToLineToGround"
        };
        Object.freeze (PhaseConnectedFaultKind);

        /**
         * Type of cause of the fault.
         *
         */
        class FaultCauseType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultCauseType;
                if (null == bucket)
                   cim_data.FaultCauseType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultCauseType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FaultCauseType";
                base.parse_attributes (/<cim:FaultCauseType.Faults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Faults", sub, context);
                var bucket = context.parsed.FaultCauseType;
                if (null == bucket)
                   context.parsed.FaultCauseType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "FaultCauseType", "Faults", "Faults", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultCauseType_collapse" aria-expanded="true" aria-controls="FaultCauseType_collapse" style="margin-left: 10px;">FaultCauseType</a></legend>
                    <div id="FaultCauseType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/Faults}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Faults) obj.Faults_string = obj.Faults.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Faults_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultCauseType_collapse" aria-expanded="true" aria-controls="FaultCauseType_collapse" style="margin-left: 10px;">FaultCauseType</a></legend>
                    <div id="FaultCauseType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Faults'>Faults: </label><div class='col-sm-8'><input id='Faults' class='form-control' type='text'{{#Faults}} value='{{Faults}}_string'{{/Faults}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "FaultCauseType" };
                super.submit (obj);
                temp = document.getElementById ("Faults").value; if ("" != temp) obj.Faults = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Faults", "Fault", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * Impedance description for the fault.
         *
         */
        class FaultImpedance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultImpedance;
                if (null == bucket)
                   cim_data.FaultImpedance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultImpedance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FaultImpedance";
                base.parse_element (/<cim:FaultImpedance.rGround>([\s\S]*?)<\/cim:FaultImpedance.rGround>/g, obj, "rGround", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.rLineToLine>([\s\S]*?)<\/cim:FaultImpedance.rLineToLine>/g, obj, "rLineToLine", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.xGround>([\s\S]*?)<\/cim:FaultImpedance.xGround>/g, obj, "xGround", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.xLineToLine>([\s\S]*?)<\/cim:FaultImpedance.xLineToLine>/g, obj, "xLineToLine", base.to_string, sub, context);
                var bucket = context.parsed.FaultImpedance;
                if (null == bucket)
                   context.parsed.FaultImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FaultImpedance", "rGround", "rGround",  base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "rLineToLine", "rLineToLine",  base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "xGround", "xGround",  base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "xLineToLine", "xLineToLine",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultImpedance_collapse" aria-expanded="true" aria-controls="FaultImpedance_collapse" style="margin-left: 10px;">FaultImpedance</a></legend>
                    <div id="FaultImpedance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#rGround}}<div><b>rGround</b>: {{rGround}}</div>{{/rGround}}
                    {{#rLineToLine}}<div><b>rLineToLine</b>: {{rLineToLine}}</div>{{/rLineToLine}}
                    {{#xGround}}<div><b>xGround</b>: {{xGround}}</div>{{/xGround}}
                    {{#xLineToLine}}<div><b>xLineToLine</b>: {{xLineToLine}}</div>{{/xLineToLine}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FaultImpedance_collapse" aria-expanded="true" aria-controls="FaultImpedance_collapse" style="margin-left: 10px;">FaultImpedance</a></legend>
                    <div id="FaultImpedance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rGround'>rGround: </label><div class='col-sm-8'><input id='rGround' class='form-control' type='text'{{#rGround}} value='{{rGround}}'{{/rGround}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rLineToLine'>rLineToLine: </label><div class='col-sm-8'><input id='rLineToLine' class='form-control' type='text'{{#rLineToLine}} value='{{rLineToLine}}'{{/rLineToLine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xGround'>xGround: </label><div class='col-sm-8'><input id='xGround' class='form-control' type='text'{{#xGround}} value='{{xGround}}'{{/xGround}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xLineToLine'>xLineToLine: </label><div class='col-sm-8'><input id='xLineToLine' class='form-control' type='text'{{#xLineToLine}} value='{{xLineToLine}}'{{/xLineToLine}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "FaultImpedance" };
                super.submit (obj);
                temp = document.getElementById ("rGround").value; if ("" != temp) obj.rGround = temp;
                temp = document.getElementById ("rLineToLine").value; if ("" != temp) obj.rLineToLine = temp;
                temp = document.getElementById ("xGround").value; if ("" != temp) obj.xGround = temp;
                temp = document.getElementById ("xLineToLine").value; if ("" != temp) obj.xLineToLine = temp;

                return (obj);
            }
        }

        /**
         * Abnormal condition causing current flow through conducting equipment, such as caused by equipment failure or short circuits from objects not typically modeled (for example, a tree falling on a line).
         *
         */
        class Fault extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Fault;
                if (null == bucket)
                   cim_data.Fault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Fault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Fault";
                base.parse_attribute (/<cim:Fault.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_element (/<cim:Fault.phases>([\s\S]*?)<\/cim:Fault.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_element (/<cim:Fault.impedance>([\s\S]*?)<\/cim:Fault.impedance>/g, obj, "impedance", base.to_string, sub, context);
                base.parse_attribute (/<cim:Fault.FaultyEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FaultyEquipment", sub, context);
                base.parse_attributes (/<cim:Fault.FaultCauseTypes\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FaultCauseTypes", sub, context);
                base.parse_attribute (/<cim:Fault.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                var bucket = context.parsed.Fault;
                if (null == bucket)
                   context.parsed.Fault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "Fault", "kind", "kind",  base.from_string, fields);
                base.export_element (obj, "Fault", "phases", "phases",  base.from_string, fields);
                base.export_element (obj, "Fault", "impedance", "impedance",  base.from_string, fields);
                base.export_attribute (obj, "Fault", "FaultyEquipment", "FaultyEquipment", fields);
                base.export_attributes (obj, "Fault", "FaultCauseTypes", "FaultCauseTypes", fields);
                base.export_attribute (obj, "Fault", "Outage", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Fault_collapse" aria-expanded="true" aria-controls="Fault_collapse" style="margin-left: 10px;">Fault</a></legend>
                    <div id="Fault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#impedance}}<div><b>impedance</b>: {{impedance}}</div>{{/impedance}}
                    {{#FaultyEquipment}}<div><b>FaultyEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FaultyEquipment}}&quot;);})'>{{FaultyEquipment}}</a></div>{{/FaultyEquipment}}
                    {{#FaultCauseTypes}}<div><b>FaultCauseTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/FaultCauseTypes}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);})'>{{Outage}}</a></div>{{/Outage}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PhaseConnectedFaultKind = []; if (!obj.kind) obj.PhaseConnectedFaultKind.push ({ id: '', selected: true}); for (var property in PhaseConnectedFaultKind) obj.PhaseConnectedFaultKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                if (obj.FaultCauseTypes) obj.FaultCauseTypes_string = obj.FaultCauseTypes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseConnectedFaultKind;
                delete obj.FaultCauseTypes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Fault_collapse" aria-expanded="true" aria-controls="Fault_collapse" style="margin-left: 10px;">Fault</a></legend>
                    <div id="Fault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='kind'>kind: </label><div class='col-sm-8'><select id='kind' class='form-control'>{{#PhaseConnectedFaultKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PhaseConnectedFaultKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='phases'>phases: </label><div class='col-sm-8'><input id='phases' class='form-control' type='text'{{#phases}} value='{{phases}}'{{/phases}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='impedance'>impedance: </label><div class='col-sm-8'><input id='impedance' class='form-control' type='text'{{#impedance}} value='{{impedance}}'{{/impedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FaultyEquipment'>FaultyEquipment: </label><div class='col-sm-8'><input id='FaultyEquipment' class='form-control' type='text'{{#FaultyEquipment}} value='{{FaultyEquipment}}'{{/FaultyEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='FaultCauseTypes'>FaultCauseTypes: </label><div class='col-sm-8'><input id='FaultCauseTypes' class='form-control' type='text'{{#FaultCauseTypes}} value='{{FaultCauseTypes}}_string'{{/FaultCauseTypes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Outage'>Outage: </label><div class='col-sm-8'><input id='Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "Fault" };
                super.submit (obj);
                temp = document.getElementById ("kind").value; if ("" != temp) { temp = PhaseConnectedFaultKind[temp]; if ("undefined" != typeof (temp)) obj.kind = "#http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseConnectedFaultKind." + temp; }
                temp = document.getElementById ("phases").value; if ("" != temp) obj.phases = temp;
                temp = document.getElementById ("impedance").value; if ("" != temp) obj.impedance = temp;
                temp = document.getElementById ("FaultyEquipment").value; if ("" != temp) obj.FaultyEquipment = temp;
                temp = document.getElementById ("FaultCauseTypes").value; if ("" != temp) obj.FaultCauseTypes = temp.split (",");
                temp = document.getElementById ("Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["FaultyEquipment", "Equipment", "0..1", "0..*"],
                        ["FaultCauseTypes", "FaultCauseType", "0..*", "0..*"],
                        ["Outage", "Outage", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A fault that occurs on an AC line segment at some point along the length.
         *
         */
        class LineFault extends Fault
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LineFault;
                if (null == bucket)
                   cim_data.LineFault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LineFault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Fault.prototype.parse.call (this, context, sub);
                obj.cls = "LineFault";
                base.parse_element (/<cim:LineFault.lengthFromTerminal1>([\s\S]*?)<\/cim:LineFault.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
                base.parse_attribute (/<cim:LineFault.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
                var bucket = context.parsed.LineFault;
                if (null == bucket)
                   context.parsed.LineFault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Fault.prototype.export.call (this, obj, false);

                base.export_element (obj, "LineFault", "lengthFromTerminal1", "lengthFromTerminal1",  base.from_string, fields);
                base.export_attribute (obj, "LineFault", "ACLineSegment", "ACLineSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LineFault_collapse" aria-expanded="true" aria-controls="LineFault_collapse" style="margin-left: 10px;">LineFault</a></legend>
                    <div id="LineFault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Fault.prototype.template.call (this) +
                    `
                    {{#lengthFromTerminal1}}<div><b>lengthFromTerminal1</b>: {{lengthFromTerminal1}}</div>{{/lengthFromTerminal1}}
                    {{#ACLineSegment}}<div><b>ACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ACLineSegment}}&quot;);})'>{{ACLineSegment}}</a></div>{{/ACLineSegment}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#LineFault_collapse" aria-expanded="true" aria-controls="LineFault_collapse" style="margin-left: 10px;">LineFault</a></legend>
                    <div id="LineFault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Fault.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lengthFromTerminal1'>lengthFromTerminal1: </label><div class='col-sm-8'><input id='lengthFromTerminal1' class='form-control' type='text'{{#lengthFromTerminal1}} value='{{lengthFromTerminal1}}'{{/lengthFromTerminal1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ACLineSegment'>ACLineSegment: </label><div class='col-sm-8'><input id='ACLineSegment' class='form-control' type='text'{{#ACLineSegment}} value='{{ACLineSegment}}'{{/ACLineSegment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "LineFault" };
                super.submit (obj);
                temp = document.getElementById ("lengthFromTerminal1").value; if ("" != temp) obj.lengthFromTerminal1 = temp;
                temp = document.getElementById ("ACLineSegment").value; if ("" != temp) obj.ACLineSegment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ACLineSegment", "ACLineSegment", "0..1", "0..*"]
                    ]
                );
            }
        }

        /**
         * A fault applied at the terminal, external to the equipment.
         *
         * This class is not used to specify faults internal to the equipment.
         *
         */
        class EquipmentFault extends Fault
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquipmentFault;
                if (null == bucket)
                   cim_data.EquipmentFault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquipmentFault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Fault.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentFault";
                base.parse_attribute (/<cim:EquipmentFault.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                var bucket = context.parsed.EquipmentFault;
                if (null == bucket)
                   context.parsed.EquipmentFault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Fault.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "EquipmentFault", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentFault_collapse" aria-expanded="true" aria-controls="EquipmentFault_collapse" style="margin-left: 10px;">EquipmentFault</a></legend>
                    <div id="EquipmentFault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Fault.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#EquipmentFault_collapse" aria-expanded="true" aria-controls="EquipmentFault_collapse" style="margin-left: 10px;">EquipmentFault</a></legend>
                    <div id="EquipmentFault_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Fault.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='Terminal'>Terminal: </label><div class='col-sm-8'><input id='Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "EquipmentFault" };
                super.submit (obj);
                temp = document.getElementById ("Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["Terminal", "Terminal", "0..1", "0..*"]
                    ]
                );
            }
        }

        return (
            {
                LineFault: LineFault,
                FaultCauseType: FaultCauseType,
                Fault: Fault,
                FaultImpedance: FaultImpedance,
                EquipmentFault: EquipmentFault
            }
        );
    }
);