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
                var bucket = cim_data.FaultCauseType;
                if (null == bucket)
                   cim_data.FaultCauseType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FaultCauseType[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FaultCauseType_collapse" aria-expanded="true" aria-controls="FaultCauseType_collapse" style="margin-left: 10px;">FaultCauseType</a></legend>
                    <div id="FaultCauseType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Faults}}<div><b>Faults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Faults}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FaultCauseType_collapse" aria-expanded="true" aria-controls="{{id}}_FaultCauseType_collapse" style="margin-left: 10px;">FaultCauseType</a></legend>
                    <div id="{{id}}_FaultCauseType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Faults'>Faults: </label><div class='col-sm-8'><input id='{{id}}_Faults' class='form-control' type='text'{{#Faults}} value='{{Faults_string}}'{{/Faults}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FaultCauseType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Faults").value; if ("" != temp) obj.Faults = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Faults", "0..*", "0..*", "Fault", "FaultCauseTypes"]
                        ]
                    )
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
                var bucket = cim_data.FaultImpedance;
                if (null == bucket)
                   cim_data.FaultImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FaultImpedance[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FaultImpedance_collapse" aria-expanded="true" aria-controls="FaultImpedance_collapse" style="margin-left: 10px;">FaultImpedance</a></legend>
                    <div id="FaultImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#rGround}}<div><b>rGround</b>: {{rGround}}</div>{{/rGround}}
                    {{#rLineToLine}}<div><b>rLineToLine</b>: {{rLineToLine}}</div>{{/rLineToLine}}
                    {{#xGround}}<div><b>xGround</b>: {{xGround}}</div>{{/xGround}}
                    {{#xLineToLine}}<div><b>xLineToLine</b>: {{xLineToLine}}</div>{{/xLineToLine}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FaultImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_FaultImpedance_collapse" style="margin-left: 10px;">FaultImpedance</a></legend>
                    <div id="{{id}}_FaultImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rGround'>rGround: </label><div class='col-sm-8'><input id='{{id}}_rGround' class='form-control' type='text'{{#rGround}} value='{{rGround}}'{{/rGround}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rLineToLine'>rLineToLine: </label><div class='col-sm-8'><input id='{{id}}_rLineToLine' class='form-control' type='text'{{#rLineToLine}} value='{{rLineToLine}}'{{/rLineToLine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xGround'>xGround: </label><div class='col-sm-8'><input id='{{id}}_xGround' class='form-control' type='text'{{#xGround}} value='{{xGround}}'{{/xGround}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xLineToLine'>xLineToLine: </label><div class='col-sm-8'><input id='{{id}}_xLineToLine' class='form-control' type='text'{{#xLineToLine}} value='{{xLineToLine}}'{{/xLineToLine}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FaultImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rGround").value; if ("" != temp) obj.rGround = temp;
                temp = document.getElementById (id + "_rLineToLine").value; if ("" != temp) obj.rLineToLine = temp;
                temp = document.getElementById (id + "_xGround").value; if ("" != temp) obj.xGround = temp;
                temp = document.getElementById (id + "_xLineToLine").value; if ("" != temp) obj.xLineToLine = temp;

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
                var bucket = cim_data.Fault;
                if (null == bucket)
                   cim_data.Fault = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Fault[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Fault";
                base.parse_attribute (/<cim:Fault.kind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "kind", sub, context);
                base.parse_attribute (/<cim:Fault.phases\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phases", sub, context);
                base.parse_attribute (/<cim:Fault.impedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "impedance", sub, context);
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

                base.export_attribute (obj, "Fault", "kind", "kind", fields);
                base.export_attribute (obj, "Fault", "phases", "phases", fields);
                base.export_attribute (obj, "Fault", "impedance", "impedance", fields);
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Fault_collapse" aria-expanded="true" aria-controls="Fault_collapse" style="margin-left: 10px;">Fault</a></legend>
                    <div id="Fault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kind}}<div><b>kind</b>: {{kind}}</div>{{/kind}}
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#impedance}}<div><b>impedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{impedance}}&quot;);}); return false;'>{{impedance}}</a></div>{{/impedance}}\n                    {{#FaultyEquipment}}<div><b>FaultyEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FaultyEquipment}}&quot;);}); return false;'>{{FaultyEquipment}}</a></div>{{/FaultyEquipment}}
                    {{#FaultCauseTypes}}<div><b>FaultCauseTypes</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/FaultCauseTypes}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.kindPhaseConnectedFaultKind = [{ id: '', selected: (!obj.kind)}]; for (var property in PhaseConnectedFaultKind) obj.kindPhaseConnectedFaultKind.push ({ id: property, selected: obj.kind && obj.kind.endsWith ('.' + property)});
                obj.phasesPhaseCode = [{ id: '', selected: (!obj.phases)}]; for (var property in Core.PhaseCode) obj.phasesPhaseCode.push ({ id: property, selected: obj.phases && obj.phases.endsWith ('.' + property)});
                obj.impedanceFaultImpedance = [{ id: '', selected: (!obj.impedance)}]; for (var property in FaultImpedance) obj.impedanceFaultImpedance.push ({ id: property, selected: obj.impedance && obj.impedance.endsWith ('.' + property)});
                if (obj.FaultCauseTypes) obj.FaultCauseTypes_string = obj.FaultCauseTypes.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.kindPhaseConnectedFaultKind;
                delete obj.phasesPhaseCode;
                delete obj.impedanceFaultImpedance;
                delete obj.FaultCauseTypes_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Fault_collapse" aria-expanded="true" aria-controls="{{id}}_Fault_collapse" style="margin-left: 10px;">Fault</a></legend>
                    <div id="{{id}}_Fault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kind'>kind: </label><div class='col-sm-8'><select id='{{id}}_kind' class='form-control custom-select'>{{#kindPhaseConnectedFaultKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/kindPhaseConnectedFaultKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phases'>phases: </label><div class='col-sm-8'><select id='{{id}}_phases' class='form-control custom-select'>{{#phasesPhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/phasesPhaseCode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_impedance'>impedance: </label><div class='col-sm-8'><select id='{{id}}_impedance' class='form-control custom-select'>{{#impedanceFaultImpedance}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/impedanceFaultImpedance}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FaultyEquipment'>FaultyEquipment: </label><div class='col-sm-8'><input id='{{id}}_FaultyEquipment' class='form-control' type='text'{{#FaultyEquipment}} value='{{FaultyEquipment}}'{{/FaultyEquipment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FaultCauseTypes'>FaultCauseTypes: </label><div class='col-sm-8'><input id='{{id}}_FaultCauseTypes' class='form-control' type='text'{{#FaultCauseTypes}} value='{{FaultCauseTypes_string}}'{{/FaultCauseTypes}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Fault" };
                super.submit (id, obj);
                temp = PhaseConnectedFaultKind[document.getElementById (id + "_kind").value]; if (temp) obj.kind = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseConnectedFaultKind." + temp; else delete obj.kind;
                temp = Core.PhaseCode[document.getElementById (id + "_phases").value]; if (temp) obj.phases = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode." + temp; else delete obj.phases;
                temp = FaultImpedance[document.getElementById (id + "_impedance").value]; if (temp) obj.impedance = "http://iec.ch/TC57/2013/CIM-schema-cim16#FaultImpedance." + temp; else delete obj.impedance;
                temp = document.getElementById (id + "_FaultyEquipment").value; if ("" != temp) obj.FaultyEquipment = temp;
                temp = document.getElementById (id + "_FaultCauseTypes").value; if ("" != temp) obj.FaultCauseTypes = temp.split (",");
                temp = document.getElementById (id + "_Outage").value; if ("" != temp) obj.Outage = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["FaultyEquipment", "0..1", "0..*", "Equipment", "Faults"],
                            ["FaultCauseTypes", "0..*", "0..*", "FaultCauseType", "Faults"],
                            ["Outage", "0..1", "0..*", "Outage", "Faults"]
                        ]
                    )
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
                var bucket = cim_data.LineFault;
                if (null == bucket)
                   cim_data.LineFault = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LineFault[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LineFault_collapse" aria-expanded="true" aria-controls="LineFault_collapse" style="margin-left: 10px;">LineFault</a></legend>
                    <div id="LineFault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Fault.prototype.template.call (this) +
                    `
                    {{#lengthFromTerminal1}}<div><b>lengthFromTerminal1</b>: {{lengthFromTerminal1}}</div>{{/lengthFromTerminal1}}
                    {{#ACLineSegment}}<div><b>ACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ACLineSegment}}&quot;);}); return false;'>{{ACLineSegment}}</a></div>{{/ACLineSegment}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LineFault_collapse" aria-expanded="true" aria-controls="{{id}}_LineFault_collapse" style="margin-left: 10px;">LineFault</a></legend>
                    <div id="{{id}}_LineFault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Fault.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lengthFromTerminal1'>lengthFromTerminal1: </label><div class='col-sm-8'><input id='{{id}}_lengthFromTerminal1' class='form-control' type='text'{{#lengthFromTerminal1}} value='{{lengthFromTerminal1}}'{{/lengthFromTerminal1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACLineSegment'>ACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_ACLineSegment' class='form-control' type='text'{{#ACLineSegment}} value='{{ACLineSegment}}'{{/ACLineSegment}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LineFault" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lengthFromTerminal1").value; if ("" != temp) obj.lengthFromTerminal1 = temp;
                temp = document.getElementById (id + "_ACLineSegment").value; if ("" != temp) obj.ACLineSegment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ACLineSegment", "0..1", "0..*", "ACLineSegment", "LineFaults"]
                        ]
                    )
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
                var bucket = cim_data.EquipmentFault;
                if (null == bucket)
                   cim_data.EquipmentFault = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EquipmentFault[obj.id];
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EquipmentFault_collapse" aria-expanded="true" aria-controls="EquipmentFault_collapse" style="margin-left: 10px;">EquipmentFault</a></legend>
                    <div id="EquipmentFault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Fault.prototype.template.call (this) +
                    `
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EquipmentFault_collapse" aria-expanded="true" aria-controls="{{id}}_EquipmentFault_collapse" style="margin-left: 10px;">EquipmentFault</a></legend>
                    <div id="{{id}}_EquipmentFault_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Fault.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EquipmentFault" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Terminal", "0..1", "0..*", "Terminal", "EquipmentFaults"]
                        ]
                    )
                );
            }
        }

        return (
            {
                LineFault: LineFault,
                FaultCauseType: FaultCauseType,
                Fault: Fault,
                PhaseConnectedFaultKind: PhaseConnectedFaultKind,
                FaultImpedance: FaultImpedance,
                EquipmentFault: EquipmentFault
            }
        );
    }
);