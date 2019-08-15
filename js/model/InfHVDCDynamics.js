define
(
    ["model/base"],
    function (base)
    {

        let LookUpTableFunctionKind =
        {
            "additionalQcurrent": "additionalQcurrent",
            "vdcol": "vdcol"
        };
        Object.freeze (LookUpTableFunctionKind);

        class HVDCLookUpTable extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.HVDCLookUpTable;
                if (null == bucket)
                   cim_data.HVDCLookUpTable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.HVDCLookUpTable[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "HVDCLookUpTable";
                base.parse_element (/<cim:HVDCLookUpTable.input>([\s\S]*?)<\/cim:HVDCLookUpTable.input>/g, obj, "input", base.to_float, sub, context);
                base.parse_element (/<cim:HVDCLookUpTable.output>([\s\S]*?)<\/cim:HVDCLookUpTable.output>/g, obj, "output", base.to_float, sub, context);
                base.parse_element (/<cim:HVDCLookUpTable.sequence>([\s\S]*?)<\/cim:HVDCLookUpTable.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_attribute (/<cim:HVDCLookUpTable.functionKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "functionKind", sub, context);
                base.parse_attribute (/<cim:HVDCLookUpTable.Qregulator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qregulator", sub, context);
                let bucket = context.parsed.HVDCLookUpTable;
                if (null == bucket)
                   context.parsed.HVDCLookUpTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "HVDCLookUpTable", "input", "input",  base.from_float, fields);
                base.export_element (obj, "HVDCLookUpTable", "output", "output",  base.from_float, fields);
                base.export_element (obj, "HVDCLookUpTable", "sequence", "sequence",  base.from_string, fields);
                base.export_attribute (obj, "HVDCLookUpTable", "functionKind", "functionKind", fields);
                base.export_attribute (obj, "HVDCLookUpTable", "Qregulator", "Qregulator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#HVDCLookUpTable_collapse" aria-expanded="true" aria-controls="HVDCLookUpTable_collapse" style="margin-left: 10px;">HVDCLookUpTable</a></legend>
                    <div id="HVDCLookUpTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#input}}<div><b>input</b>: {{input}}</div>{{/input}}
                    {{#output}}<div><b>output</b>: {{output}}</div>{{/output}}
                    {{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
                    {{#functionKind}}<div><b>functionKind</b>: {{functionKind}}</div>{{/functionKind}}
                    {{#Qregulator}}<div><b>Qregulator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qregulator}}");}); return false;'>{{Qregulator}}</a></div>{{/Qregulator}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["functionKindLookUpTableFunctionKind"] = [{ id: '', selected: (!obj["functionKind"])}]; for (let property in LookUpTableFunctionKind) obj["functionKindLookUpTableFunctionKind"].push ({ id: property, selected: obj["functionKind"] && obj["functionKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["functionKindLookUpTableFunctionKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_HVDCLookUpTable_collapse" aria-expanded="true" aria-controls="{{id}}_HVDCLookUpTable_collapse" style="margin-left: 10px;">HVDCLookUpTable</a></legend>
                    <div id="{{id}}_HVDCLookUpTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_input'>input: </label><div class='col-sm-8'><input id='{{id}}_input' class='form-control' type='text'{{#input}} value='{{input}}'{{/input}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_output'>output: </label><div class='col-sm-8'><input id='{{id}}_output' class='form-control' type='text'{{#output}} value='{{output}}'{{/output}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequence'>sequence: </label><div class='col-sm-8'><input id='{{id}}_sequence' class='form-control' type='text'{{#sequence}} value='{{sequence}}'{{/sequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_functionKind'>functionKind: </label><div class='col-sm-8'><select id='{{id}}_functionKind' class='form-control custom-select'>{{#functionKindLookUpTableFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/functionKindLookUpTableFunctionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qregulator'>Qregulator: </label><div class='col-sm-8'><input id='{{id}}_Qregulator' class='form-control' type='text'{{#Qregulator}} value='{{Qregulator}}'{{/Qregulator}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "HVDCLookUpTable" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_input").value; if ("" !== temp) obj["input"] = temp;
                temp = document.getElementById (id + "_output").value; if ("" !== temp) obj["output"] = temp;
                temp = document.getElementById (id + "_sequence").value; if ("" !== temp) obj["sequence"] = temp;
                temp = LookUpTableFunctionKind[document.getElementById (id + "_functionKind").value]; if (temp) obj["functionKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#LookUpTableFunctionKind." + temp; else delete obj["functionKind"];
                temp = document.getElementById (id + "_Qregulator").value; if ("" !== temp) obj["Qregulator"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Qregulator", "0..1", "1..*", "Qregulator", "HVDClookUpTable"]
                        ]
                    )
                );
            }
        }

        /**
         * All the measurements are filtered by a first lag element with a time constant TM.
         *
         */
        class Delay extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Delay;
                if (null == bucket)
                   cim_data.Delay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Delay[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Delay";
                base.parse_element (/<cim:Delay.tm>([\s\S]*?)<\/cim:Delay.tm>/g, obj, "tm", base.to_string, sub, context);
                base.parse_attribute (/<cim:Delay.Umode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Umode", sub, context);
                base.parse_attribute (/<cim:Delay.Qregulator\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qregulator", sub, context);
                base.parse_attribute (/<cim:Delay.Qlimiter\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qlimiter", sub, context);
                base.parse_attribute (/<cim:Delay.Qmode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Qmode", sub, context);
                base.parse_attribute (/<cim:Delay.PFmode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PFmode", sub, context);
                base.parse_attribute (/<cim:Delay.DCvoltageControl\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "DCvoltageControl", sub, context);
                base.parse_attribute (/<cim:Delay.BlockingFunction\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BlockingFunction", sub, context);
                base.parse_attribute (/<cim:Delay.Pcontrol\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Pcontrol", sub, context);
                let bucket = context.parsed.Delay;
                if (null == bucket)
                   context.parsed.Delay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "Delay", "tm", "tm",  base.from_string, fields);
                base.export_attribute (obj, "Delay", "Umode", "Umode", fields);
                base.export_attribute (obj, "Delay", "Qregulator", "Qregulator", fields);
                base.export_attribute (obj, "Delay", "Qlimiter", "Qlimiter", fields);
                base.export_attribute (obj, "Delay", "Qmode", "Qmode", fields);
                base.export_attribute (obj, "Delay", "PFmode", "PFmode", fields);
                base.export_attribute (obj, "Delay", "DCvoltageControl", "DCvoltageControl", fields);
                base.export_attribute (obj, "Delay", "BlockingFunction", "BlockingFunction", fields);
                base.export_attribute (obj, "Delay", "Pcontrol", "Pcontrol", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Delay_collapse" aria-expanded="true" aria-controls="Delay_collapse" style="margin-left: 10px;">Delay</a></legend>
                    <div id="Delay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
                    {{#Umode}}<div><b>Umode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Umode}}");}); return false;'>{{Umode}}</a></div>{{/Umode}}
                    {{#Qregulator}}<div><b>Qregulator</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qregulator}}");}); return false;'>{{Qregulator}}</a></div>{{/Qregulator}}
                    {{#Qlimiter}}<div><b>Qlimiter</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qlimiter}}");}); return false;'>{{Qlimiter}}</a></div>{{/Qlimiter}}
                    {{#Qmode}}<div><b>Qmode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Qmode}}");}); return false;'>{{Qmode}}</a></div>{{/Qmode}}
                    {{#PFmode}}<div><b>PFmode</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{PFmode}}");}); return false;'>{{PFmode}}</a></div>{{/PFmode}}
                    {{#DCvoltageControl}}<div><b>DCvoltageControl</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{DCvoltageControl}}");}); return false;'>{{DCvoltageControl}}</a></div>{{/DCvoltageControl}}
                    {{#BlockingFunction}}<div><b>BlockingFunction</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{BlockingFunction}}");}); return false;'>{{BlockingFunction}}</a></div>{{/BlockingFunction}}
                    {{#Pcontrol}}<div><b>Pcontrol</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{Pcontrol}}");}); return false;'>{{Pcontrol}}</a></div>{{/Pcontrol}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Delay_collapse" aria-expanded="true" aria-controls="{{id}}_Delay_collapse" style="margin-left: 10px;">Delay</a></legend>
                    <div id="{{id}}_Delay_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tm'>tm: </label><div class='col-sm-8'><input id='{{id}}_tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Umode'>Umode: </label><div class='col-sm-8'><input id='{{id}}_Umode' class='form-control' type='text'{{#Umode}} value='{{Umode}}'{{/Umode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qregulator'>Qregulator: </label><div class='col-sm-8'><input id='{{id}}_Qregulator' class='form-control' type='text'{{#Qregulator}} value='{{Qregulator}}'{{/Qregulator}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qlimiter'>Qlimiter: </label><div class='col-sm-8'><input id='{{id}}_Qlimiter' class='form-control' type='text'{{#Qlimiter}} value='{{Qlimiter}}'{{/Qlimiter}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Qmode'>Qmode: </label><div class='col-sm-8'><input id='{{id}}_Qmode' class='form-control' type='text'{{#Qmode}} value='{{Qmode}}'{{/Qmode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PFmode'>PFmode: </label><div class='col-sm-8'><input id='{{id}}_PFmode' class='form-control' type='text'{{#PFmode}} value='{{PFmode}}'{{/PFmode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DCvoltageControl'>DCvoltageControl: </label><div class='col-sm-8'><input id='{{id}}_DCvoltageControl' class='form-control' type='text'{{#DCvoltageControl}} value='{{DCvoltageControl}}'{{/DCvoltageControl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BlockingFunction'>BlockingFunction: </label><div class='col-sm-8'><input id='{{id}}_BlockingFunction' class='form-control' type='text'{{#BlockingFunction}} value='{{BlockingFunction}}'{{/BlockingFunction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Pcontrol'>Pcontrol: </label><div class='col-sm-8'><input id='{{id}}_Pcontrol' class='form-control' type='text'{{#Pcontrol}} value='{{Pcontrol}}'{{/Pcontrol}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Delay" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tm").value; if ("" !== temp) obj["tm"] = temp;
                temp = document.getElementById (id + "_Umode").value; if ("" !== temp) obj["Umode"] = temp;
                temp = document.getElementById (id + "_Qregulator").value; if ("" !== temp) obj["Qregulator"] = temp;
                temp = document.getElementById (id + "_Qlimiter").value; if ("" !== temp) obj["Qlimiter"] = temp;
                temp = document.getElementById (id + "_Qmode").value; if ("" !== temp) obj["Qmode"] = temp;
                temp = document.getElementById (id + "_PFmode").value; if ("" !== temp) obj["PFmode"] = temp;
                temp = document.getElementById (id + "_DCvoltageControl").value; if ("" !== temp) obj["DCvoltageControl"] = temp;
                temp = document.getElementById (id + "_BlockingFunction").value; if ("" !== temp) obj["BlockingFunction"] = temp;
                temp = document.getElementById (id + "_Pcontrol").value; if ("" !== temp) obj["Pcontrol"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Umode", "0..1", "1", "Umode", "Delay"],
                            ["Qregulator", "0..1", "1", "Qregulator", "Delay"],
                            ["Qlimiter", "0..1", "1", "Qlimiter", "Delay"],
                            ["Qmode", "0..1", "1", "Qmode", "Delay"],
                            ["PFmode", "0..1", "1", "PFmode", "Delay"],
                            ["DCvoltageControl", "0..1", "1", "DCvoltageControl", "Delay"],
                            ["BlockingFunction", "0..1", "1", "BlockingFunction", "Delay"],
                            ["Pcontrol", "0..1", "1", "Pcontrol", "Delay"]
                        ]
                    )
                );
            }
        }

        return (
            {
                HVDCLookUpTable: HVDCLookUpTable,
                Delay: Delay,
                LookUpTableFunctionKind: LookUpTableFunctionKind
            }
        );
    }
);