define
(
    ["model/base", "model/StandardModels"],
    /**
     * The power system stabilizer (PSS) model provides an input (<i>Vs</i>) to the excitation system model to improve damping of system oscillations.
     *
     * A variety of input signals can be used depending on the particular design.
     *
     */
    function (base, StandardModels)
    {
        /**
         * Types of input signals.
         *
         * In dynamics modelling, commonly represented by the <i>j</i> parameter.
         *
         */
        let InputSignalKind =
        {
            "rotorSpeed": "rotorSpeed",
            "rotorAngularFrequencyDeviation": "rotorAngularFrequencyDeviation",
            "busFrequency": "busFrequency",
            "busFrequencyDeviation": "busFrequencyDeviation",
            "generatorElectricalPower": "generatorElectricalPower",
            "generatorAcceleratingPower": "generatorAcceleratingPower",
            "busVoltage": "busVoltage",
            "busVoltageDerivative": "busVoltageDerivative",
            "branchCurrent": "branchCurrent",
            "fieldCurrent": "fieldCurrent",
            "generatorMechanicalPower": "generatorMechanicalPower"
        };
        Object.freeze (InputSignalKind);

        /**
         * Power system stabilizer function block whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class PowerSystemStabilizerDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PowerSystemStabilizerDynamics;
                if (null == bucket)
                   cim_data.PowerSystemStabilizerDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerSystemStabilizerDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "PowerSystemStabilizerDynamics";
                base.parse_attributes (/<cim:PowerSystemStabilizerDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                base.parse_attribute (/<cim:PowerSystemStabilizerDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                let bucket = context.parsed.PowerSystemStabilizerDynamics;
                if (null == bucket)
                   context.parsed.PowerSystemStabilizerDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PowerSystemStabilizerDynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                base.export_attribute (obj, "PowerSystemStabilizerDynamics", "ExcitationSystemDynamics", "ExcitationSystemDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerSystemStabilizerDynamics_collapse" aria-expanded="true" aria-controls="PowerSystemStabilizerDynamics_collapse" style="margin-left: 10px;">PowerSystemStabilizerDynamics</a></legend>
                    <div id="PowerSystemStabilizerDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/RemoteInputSignal}}
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{ExcitationSystemDynamics}}");}); return false;'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["RemoteInputSignal"]) obj["RemoteInputSignal_string"] = obj["RemoteInputSignal"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["RemoteInputSignal_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerSystemStabilizerDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_PowerSystemStabilizerDynamics_collapse" style="margin-left: 10px;">PowerSystemStabilizerDynamics</a></legend>
                    <div id="{{id}}_PowerSystemStabilizerDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='{{id}}_ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PowerSystemStabilizerDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ExcitationSystemDynamics").value; if ("" !== temp) obj["ExcitationSystemDynamics"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemoteInputSignal", "0..*", "0..1", "RemoteInputSignal", "PowerSystemStabilizerDynamics"],
                            ["ExcitationSystemDynamics", "1", "0..1", "ExcitationSystemDynamics", "PowerSystemStabilizerDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Detailed Italian PSS.
         *
         */
        class Pss5 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pss5;
                if (null == bucket)
                   cim_data.Pss5 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pss5[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "Pss5";
                base.parse_element (/<cim:Pss5.ctw2>([\s\S]*?)<\/cim:Pss5.ctw2>/g, obj, "ctw2", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pss5.deadband>([\s\S]*?)<\/cim:Pss5.deadband>/g, obj, "deadband", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.isfreq>([\s\S]*?)<\/cim:Pss5.isfreq>/g, obj, "isfreq", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pss5.kf>([\s\S]*?)<\/cim:Pss5.kf>/g, obj, "kf", base.to_float, sub, context);
                base.parse_element (/<cim:Pss5.kpe>([\s\S]*?)<\/cim:Pss5.kpe>/g, obj, "kpe", base.to_float, sub, context);
                base.parse_element (/<cim:Pss5.kpss>([\s\S]*?)<\/cim:Pss5.kpss>/g, obj, "kpss", base.to_float, sub, context);
                base.parse_element (/<cim:Pss5.pmin>([\s\S]*?)<\/cim:Pss5.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tl1>([\s\S]*?)<\/cim:Pss5.tl1>/g, obj, "tl1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tl2>([\s\S]*?)<\/cim:Pss5.tl2>/g, obj, "tl2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tl3>([\s\S]*?)<\/cim:Pss5.tl3>/g, obj, "tl3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tl4>([\s\S]*?)<\/cim:Pss5.tl4>/g, obj, "tl4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tpe>([\s\S]*?)<\/cim:Pss5.tpe>/g, obj, "tpe", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tw1>([\s\S]*?)<\/cim:Pss5.tw1>/g, obj, "tw1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.tw2>([\s\S]*?)<\/cim:Pss5.tw2>/g, obj, "tw2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.vadat>([\s\S]*?)<\/cim:Pss5.vadat>/g, obj, "vadat", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pss5.vsmn>([\s\S]*?)<\/cim:Pss5.vsmn>/g, obj, "vsmn", base.to_string, sub, context);
                base.parse_element (/<cim:Pss5.vsmx>([\s\S]*?)<\/cim:Pss5.vsmx>/g, obj, "vsmx", base.to_string, sub, context);
                let bucket = context.parsed.Pss5;
                if (null == bucket)
                   context.parsed.Pss5 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pss5", "ctw2", "ctw2",  base.from_boolean, fields);
                base.export_element (obj, "Pss5", "deadband", "deadband",  base.from_string, fields);
                base.export_element (obj, "Pss5", "isfreq", "isfreq",  base.from_boolean, fields);
                base.export_element (obj, "Pss5", "kf", "kf",  base.from_float, fields);
                base.export_element (obj, "Pss5", "kpe", "kpe",  base.from_float, fields);
                base.export_element (obj, "Pss5", "kpss", "kpss",  base.from_float, fields);
                base.export_element (obj, "Pss5", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tl1", "tl1",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tl2", "tl2",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tl3", "tl3",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tl4", "tl4",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tpe", "tpe",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tw1", "tw1",  base.from_string, fields);
                base.export_element (obj, "Pss5", "tw2", "tw2",  base.from_string, fields);
                base.export_element (obj, "Pss5", "vadat", "vadat",  base.from_boolean, fields);
                base.export_element (obj, "Pss5", "vsmn", "vsmn",  base.from_string, fields);
                base.export_element (obj, "Pss5", "vsmx", "vsmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pss5_collapse" aria-expanded="true" aria-controls="Pss5_collapse" style="margin-left: 10px;">Pss5</a></legend>
                    <div id="Pss5_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#ctw2}}<div><b>ctw2</b>: {{ctw2}}</div>{{/ctw2}}
                    {{#deadband}}<div><b>deadband</b>: {{deadband}}</div>{{/deadband}}
                    {{#isfreq}}<div><b>isfreq</b>: {{isfreq}}</div>{{/isfreq}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kpe}}<div><b>kpe</b>: {{kpe}}</div>{{/kpe}}
                    {{#kpss}}<div><b>kpss</b>: {{kpss}}</div>{{/kpss}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#tl1}}<div><b>tl1</b>: {{tl1}}</div>{{/tl1}}
                    {{#tl2}}<div><b>tl2</b>: {{tl2}}</div>{{/tl2}}
                    {{#tl3}}<div><b>tl3</b>: {{tl3}}</div>{{/tl3}}
                    {{#tl4}}<div><b>tl4</b>: {{tl4}}</div>{{/tl4}}
                    {{#tpe}}<div><b>tpe</b>: {{tpe}}</div>{{/tpe}}
                    {{#tw1}}<div><b>tw1</b>: {{tw1}}</div>{{/tw1}}
                    {{#tw2}}<div><b>tw2</b>: {{tw2}}</div>{{/tw2}}
                    {{#vadat}}<div><b>vadat</b>: {{vadat}}</div>{{/vadat}}
                    {{#vsmn}}<div><b>vsmn</b>: {{vsmn}}</div>{{/vsmn}}
                    {{#vsmx}}<div><b>vsmx</b>: {{vsmx}}</div>{{/vsmx}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pss5_collapse" aria-expanded="true" aria-controls="{{id}}_Pss5_collapse" style="margin-left: 10px;">Pss5</a></legend>
                    <div id="{{id}}_Pss5_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ctw2'>ctw2: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ctw2' class='form-check-input' type='checkbox'{{#ctw2}} checked{{/ctw2}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deadband'>deadband: </label><div class='col-sm-8'><input id='{{id}}_deadband' class='form-control' type='text'{{#deadband}} value='{{deadband}}'{{/deadband}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isfreq'>isfreq: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isfreq' class='form-check-input' type='checkbox'{{#isfreq}} checked{{/isfreq}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpe'>kpe: </label><div class='col-sm-8'><input id='{{id}}_kpe' class='form-control' type='text'{{#kpe}} value='{{kpe}}'{{/kpe}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpss'>kpss: </label><div class='col-sm-8'><input id='{{id}}_kpss' class='form-control' type='text'{{#kpss}} value='{{kpss}}'{{/kpss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl1'>tl1: </label><div class='col-sm-8'><input id='{{id}}_tl1' class='form-control' type='text'{{#tl1}} value='{{tl1}}'{{/tl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl2'>tl2: </label><div class='col-sm-8'><input id='{{id}}_tl2' class='form-control' type='text'{{#tl2}} value='{{tl2}}'{{/tl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl3'>tl3: </label><div class='col-sm-8'><input id='{{id}}_tl3' class='form-control' type='text'{{#tl3}} value='{{tl3}}'{{/tl3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl4'>tl4: </label><div class='col-sm-8'><input id='{{id}}_tl4' class='form-control' type='text'{{#tl4}} value='{{tl4}}'{{/tl4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpe'>tpe: </label><div class='col-sm-8'><input id='{{id}}_tpe' class='form-control' type='text'{{#tpe}} value='{{tpe}}'{{/tpe}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw1'>tw1: </label><div class='col-sm-8'><input id='{{id}}_tw1' class='form-control' type='text'{{#tw1}} value='{{tw1}}'{{/tw1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw2'>tw2: </label><div class='col-sm-8'><input id='{{id}}_tw2' class='form-control' type='text'{{#tw2}} value='{{tw2}}'{{/tw2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vadat'>vadat: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vadat' class='form-check-input' type='checkbox'{{#vadat}} checked{{/vadat}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmn'>vsmn: </label><div class='col-sm-8'><input id='{{id}}_vsmn' class='form-control' type='text'{{#vsmn}} value='{{vsmn}}'{{/vsmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmx'>vsmx: </label><div class='col-sm-8'><input id='{{id}}_vsmx' class='form-control' type='text'{{#vsmx}} value='{{vsmx}}'{{/vsmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pss5" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ctw2").checked; if (temp) obj["ctw2"] = true;
                temp = document.getElementById (id + "_deadband").value; if ("" !== temp) obj["deadband"] = temp;
                temp = document.getElementById (id + "_isfreq").checked; if (temp) obj["isfreq"] = true;
                temp = document.getElementById (id + "_kf").value; if ("" !== temp) obj["kf"] = temp;
                temp = document.getElementById (id + "_kpe").value; if ("" !== temp) obj["kpe"] = temp;
                temp = document.getElementById (id + "_kpss").value; if ("" !== temp) obj["kpss"] = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" !== temp) obj["pmin"] = temp;
                temp = document.getElementById (id + "_tl1").value; if ("" !== temp) obj["tl1"] = temp;
                temp = document.getElementById (id + "_tl2").value; if ("" !== temp) obj["tl2"] = temp;
                temp = document.getElementById (id + "_tl3").value; if ("" !== temp) obj["tl3"] = temp;
                temp = document.getElementById (id + "_tl4").value; if ("" !== temp) obj["tl4"] = temp;
                temp = document.getElementById (id + "_tpe").value; if ("" !== temp) obj["tpe"] = temp;
                temp = document.getElementById (id + "_tw1").value; if ("" !== temp) obj["tw1"] = temp;
                temp = document.getElementById (id + "_tw2").value; if ("" !== temp) obj["tw2"] = temp;
                temp = document.getElementById (id + "_vadat").checked; if (temp) obj["vadat"] = true;
                temp = document.getElementById (id + "_vsmn").value; if ("" !== temp) obj["vsmn"] = temp;
                temp = document.getElementById (id + "_vsmx").value; if ("" !== temp) obj["vsmx"] = temp;

                return (obj);
            }
        }

        /**
         * Power sensitive stabilizer model.
         *
         */
        class PssSB4 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssSB4;
                if (null == bucket)
                   cim_data.PssSB4 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssSB4[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssSB4";
                base.parse_element (/<cim:PssSB4.kx>([\s\S]*?)<\/cim:PssSB4.kx>/g, obj, "kx", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.ta>([\s\S]*?)<\/cim:PssSB4.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.tb>([\s\S]*?)<\/cim:PssSB4.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.tc>([\s\S]*?)<\/cim:PssSB4.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.td>([\s\S]*?)<\/cim:PssSB4.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.te>([\s\S]*?)<\/cim:PssSB4.te>/g, obj, "te", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.tt>([\s\S]*?)<\/cim:PssSB4.tt>/g, obj, "tt", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.tx1>([\s\S]*?)<\/cim:PssSB4.tx1>/g, obj, "tx1", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.tx2>([\s\S]*?)<\/cim:PssSB4.tx2>/g, obj, "tx2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.vsmax>([\s\S]*?)<\/cim:PssSB4.vsmax>/g, obj, "vsmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssSB4.vsmin>([\s\S]*?)<\/cim:PssSB4.vsmin>/g, obj, "vsmin", base.to_string, sub, context);
                let bucket = context.parsed.PssSB4;
                if (null == bucket)
                   context.parsed.PssSB4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssSB4", "kx", "kx",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "td", "td",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "te", "te",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "tt", "tt",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "tx1", "tx1",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "tx2", "tx2",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "vsmax", "vsmax",  base.from_string, fields);
                base.export_element (obj, "PssSB4", "vsmin", "vsmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssSB4_collapse" aria-expanded="true" aria-controls="PssSB4_collapse" style="margin-left: 10px;">PssSB4</a></legend>
                    <div id="PssSB4_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#kx}}<div><b>kx</b>: {{kx}}</div>{{/kx}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tt}}<div><b>tt</b>: {{tt}}</div>{{/tt}}
                    {{#tx1}}<div><b>tx1</b>: {{tx1}}</div>{{/tx1}}
                    {{#tx2}}<div><b>tx2</b>: {{tx2}}</div>{{/tx2}}
                    {{#vsmax}}<div><b>vsmax</b>: {{vsmax}}</div>{{/vsmax}}
                    {{#vsmin}}<div><b>vsmin</b>: {{vsmin}}</div>{{/vsmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssSB4_collapse" aria-expanded="true" aria-controls="{{id}}_PssSB4_collapse" style="margin-left: 10px;">PssSB4</a></legend>
                    <div id="{{id}}_PssSB4_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kx'>kx: </label><div class='col-sm-8'><input id='{{id}}_kx' class='form-control' type='text'{{#kx}} value='{{kx}}'{{/kx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tt'>tt: </label><div class='col-sm-8'><input id='{{id}}_tt' class='form-control' type='text'{{#tt}} value='{{tt}}'{{/tt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tx1'>tx1: </label><div class='col-sm-8'><input id='{{id}}_tx1' class='form-control' type='text'{{#tx1}} value='{{tx1}}'{{/tx1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tx2'>tx2: </label><div class='col-sm-8'><input id='{{id}}_tx2' class='form-control' type='text'{{#tx2}} value='{{tx2}}'{{/tx2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmax'>vsmax: </label><div class='col-sm-8'><input id='{{id}}_vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmin'>vsmin: </label><div class='col-sm-8'><input id='{{id}}_vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssSB4" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kx").value; if ("" !== temp) obj["kx"] = temp;
                temp = document.getElementById (id + "_ta").value; if ("" !== temp) obj["ta"] = temp;
                temp = document.getElementById (id + "_tb").value; if ("" !== temp) obj["tb"] = temp;
                temp = document.getElementById (id + "_tc").value; if ("" !== temp) obj["tc"] = temp;
                temp = document.getElementById (id + "_td").value; if ("" !== temp) obj["td"] = temp;
                temp = document.getElementById (id + "_te").value; if ("" !== temp) obj["te"] = temp;
                temp = document.getElementById (id + "_tt").value; if ("" !== temp) obj["tt"] = temp;
                temp = document.getElementById (id + "_tx1").value; if ("" !== temp) obj["tx1"] = temp;
                temp = document.getElementById (id + "_tx2").value; if ("" !== temp) obj["tx2"] = temp;
                temp = document.getElementById (id + "_vsmax").value; if ("" !== temp) obj["vsmax"] = temp;
                temp = document.getElementById (id + "_vsmin").value; if ("" !== temp) obj["vsmin"] = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE PSS2B.
         *
         * Extra lead/lag (or rate) block added at end (up to 4 lead/lags total).
         *
         */
        class Pss2B extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pss2B;
                if (null == bucket)
                   cim_data.Pss2B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pss2B[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "Pss2B";
                base.parse_element (/<cim:Pss2B.a>([\s\S]*?)<\/cim:Pss2B.a>/g, obj, "a", base.to_float, sub, context);
                base.parse_element (/<cim:Pss2B.ks1>([\s\S]*?)<\/cim:Pss2B.ks1>/g, obj, "ks1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.ks2>([\s\S]*?)<\/cim:Pss2B.ks2>/g, obj, "ks2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.ks3>([\s\S]*?)<\/cim:Pss2B.ks3>/g, obj, "ks3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.ks4>([\s\S]*?)<\/cim:Pss2B.ks4>/g, obj, "ks4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.m>([\s\S]*?)<\/cim:Pss2B.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.n>([\s\S]*?)<\/cim:Pss2B.n>/g, obj, "n", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t1>([\s\S]*?)<\/cim:Pss2B.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t10>([\s\S]*?)<\/cim:Pss2B.t10>/g, obj, "t10", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t11>([\s\S]*?)<\/cim:Pss2B.t11>/g, obj, "t11", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t2>([\s\S]*?)<\/cim:Pss2B.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t3>([\s\S]*?)<\/cim:Pss2B.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t4>([\s\S]*?)<\/cim:Pss2B.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t6>([\s\S]*?)<\/cim:Pss2B.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t7>([\s\S]*?)<\/cim:Pss2B.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t8>([\s\S]*?)<\/cim:Pss2B.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.t9>([\s\S]*?)<\/cim:Pss2B.t9>/g, obj, "t9", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.ta>([\s\S]*?)<\/cim:Pss2B.ta>/g, obj, "ta", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.tb>([\s\S]*?)<\/cim:Pss2B.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.tw1>([\s\S]*?)<\/cim:Pss2B.tw1>/g, obj, "tw1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.tw2>([\s\S]*?)<\/cim:Pss2B.tw2>/g, obj, "tw2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.tw3>([\s\S]*?)<\/cim:Pss2B.tw3>/g, obj, "tw3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.tw4>([\s\S]*?)<\/cim:Pss2B.tw4>/g, obj, "tw4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vsi1max>([\s\S]*?)<\/cim:Pss2B.vsi1max>/g, obj, "vsi1max", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vsi1min>([\s\S]*?)<\/cim:Pss2B.vsi1min>/g, obj, "vsi1min", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vsi2max>([\s\S]*?)<\/cim:Pss2B.vsi2max>/g, obj, "vsi2max", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vsi2min>([\s\S]*?)<\/cim:Pss2B.vsi2min>/g, obj, "vsi2min", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vstmax>([\s\S]*?)<\/cim:Pss2B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2B.vstmin>([\s\S]*?)<\/cim:Pss2B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);
                let bucket = context.parsed.Pss2B;
                if (null == bucket)
                   context.parsed.Pss2B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pss2B", "a", "a",  base.from_float, fields);
                base.export_element (obj, "Pss2B", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "ks2", "ks2",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "ks3", "ks3",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "ks4", "ks4",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "m", "m",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "n", "n",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t10", "t10",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t11", "t11",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "t9", "t9",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "tw1", "tw1",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "tw2", "tw2",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "tw3", "tw3",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "tw4", "tw4",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vsi1max", "vsi1max",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vsi1min", "vsi1min",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vsi2max", "vsi2max",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vsi2min", "vsi2min",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vstmax", "vstmax",  base.from_string, fields);
                base.export_element (obj, "Pss2B", "vstmin", "vstmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pss2B_collapse" aria-expanded="true" aria-controls="Pss2B_collapse" style="margin-left: 10px;">Pss2B</a></legend>
                    <div id="Pss2B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#ks2}}<div><b>ks2</b>: {{ks2}}</div>{{/ks2}}
                    {{#ks3}}<div><b>ks3</b>: {{ks3}}</div>{{/ks3}}
                    {{#ks4}}<div><b>ks4</b>: {{ks4}}</div>{{/ks4}}
                    {{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
                    {{#n}}<div><b>n</b>: {{n}}</div>{{/n}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t10}}<div><b>t10</b>: {{t10}}</div>{{/t10}}
                    {{#t11}}<div><b>t11</b>: {{t11}}</div>{{/t11}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#t9}}<div><b>t9</b>: {{t9}}</div>{{/t9}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tw1}}<div><b>tw1</b>: {{tw1}}</div>{{/tw1}}
                    {{#tw2}}<div><b>tw2</b>: {{tw2}}</div>{{/tw2}}
                    {{#tw3}}<div><b>tw3</b>: {{tw3}}</div>{{/tw3}}
                    {{#tw4}}<div><b>tw4</b>: {{tw4}}</div>{{/tw4}}
                    {{#vsi1max}}<div><b>vsi1max</b>: {{vsi1max}}</div>{{/vsi1max}}
                    {{#vsi1min}}<div><b>vsi1min</b>: {{vsi1min}}</div>{{/vsi1min}}
                    {{#vsi2max}}<div><b>vsi2max</b>: {{vsi2max}}</div>{{/vsi2max}}
                    {{#vsi2min}}<div><b>vsi2min</b>: {{vsi2min}}</div>{{/vsi2min}}
                    {{#vstmax}}<div><b>vstmax</b>: {{vstmax}}</div>{{/vstmax}}
                    {{#vstmin}}<div><b>vstmin</b>: {{vstmin}}</div>{{/vstmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pss2B_collapse" aria-expanded="true" aria-controls="{{id}}_Pss2B_collapse" style="margin-left: 10px;">Pss2B</a></legend>
                    <div id="{{id}}_Pss2B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks2'>ks2: </label><div class='col-sm-8'><input id='{{id}}_ks2' class='form-control' type='text'{{#ks2}} value='{{ks2}}'{{/ks2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks3'>ks3: </label><div class='col-sm-8'><input id='{{id}}_ks3' class='form-control' type='text'{{#ks3}} value='{{ks3}}'{{/ks3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks4'>ks4: </label><div class='col-sm-8'><input id='{{id}}_ks4' class='form-control' type='text'{{#ks4}} value='{{ks4}}'{{/ks4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_m'>m: </label><div class='col-sm-8'><input id='{{id}}_m' class='form-control' type='text'{{#m}} value='{{m}}'{{/m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_n'>n: </label><div class='col-sm-8'><input id='{{id}}_n' class='form-control' type='text'{{#n}} value='{{n}}'{{/n}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t10'>t10: </label><div class='col-sm-8'><input id='{{id}}_t10' class='form-control' type='text'{{#t10}} value='{{t10}}'{{/t10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t11'>t11: </label><div class='col-sm-8'><input id='{{id}}_t11' class='form-control' type='text'{{#t11}} value='{{t11}}'{{/t11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t9'>t9: </label><div class='col-sm-8'><input id='{{id}}_t9' class='form-control' type='text'{{#t9}} value='{{t9}}'{{/t9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw1'>tw1: </label><div class='col-sm-8'><input id='{{id}}_tw1' class='form-control' type='text'{{#tw1}} value='{{tw1}}'{{/tw1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw2'>tw2: </label><div class='col-sm-8'><input id='{{id}}_tw2' class='form-control' type='text'{{#tw2}} value='{{tw2}}'{{/tw2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw3'>tw3: </label><div class='col-sm-8'><input id='{{id}}_tw3' class='form-control' type='text'{{#tw3}} value='{{tw3}}'{{/tw3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw4'>tw4: </label><div class='col-sm-8'><input id='{{id}}_tw4' class='form-control' type='text'{{#tw4}} value='{{tw4}}'{{/tw4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi1max'>vsi1max: </label><div class='col-sm-8'><input id='{{id}}_vsi1max' class='form-control' type='text'{{#vsi1max}} value='{{vsi1max}}'{{/vsi1max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi1min'>vsi1min: </label><div class='col-sm-8'><input id='{{id}}_vsi1min' class='form-control' type='text'{{#vsi1min}} value='{{vsi1min}}'{{/vsi1min}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi2max'>vsi2max: </label><div class='col-sm-8'><input id='{{id}}_vsi2max' class='form-control' type='text'{{#vsi2max}} value='{{vsi2max}}'{{/vsi2max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi2min'>vsi2min: </label><div class='col-sm-8'><input id='{{id}}_vsi2min' class='form-control' type='text'{{#vsi2min}} value='{{vsi2min}}'{{/vsi2min}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmax'>vstmax: </label><div class='col-sm-8'><input id='{{id}}_vstmax' class='form-control' type='text'{{#vstmax}} value='{{vstmax}}'{{/vstmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmin'>vstmin: </label><div class='col-sm-8'><input id='{{id}}_vstmin' class='form-control' type='text'{{#vstmin}} value='{{vstmin}}'{{/vstmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pss2B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" !== temp) obj["a"] = temp;
                temp = document.getElementById (id + "_ks1").value; if ("" !== temp) obj["ks1"] = temp;
                temp = document.getElementById (id + "_ks2").value; if ("" !== temp) obj["ks2"] = temp;
                temp = document.getElementById (id + "_ks3").value; if ("" !== temp) obj["ks3"] = temp;
                temp = document.getElementById (id + "_ks4").value; if ("" !== temp) obj["ks4"] = temp;
                temp = document.getElementById (id + "_m").value; if ("" !== temp) obj["m"] = temp;
                temp = document.getElementById (id + "_n").value; if ("" !== temp) obj["n"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t10").value; if ("" !== temp) obj["t10"] = temp;
                temp = document.getElementById (id + "_t11").value; if ("" !== temp) obj["t11"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_t7").value; if ("" !== temp) obj["t7"] = temp;
                temp = document.getElementById (id + "_t8").value; if ("" !== temp) obj["t8"] = temp;
                temp = document.getElementById (id + "_t9").value; if ("" !== temp) obj["t9"] = temp;
                temp = document.getElementById (id + "_ta").value; if ("" !== temp) obj["ta"] = temp;
                temp = document.getElementById (id + "_tb").value; if ("" !== temp) obj["tb"] = temp;
                temp = document.getElementById (id + "_tw1").value; if ("" !== temp) obj["tw1"] = temp;
                temp = document.getElementById (id + "_tw2").value; if ("" !== temp) obj["tw2"] = temp;
                temp = document.getElementById (id + "_tw3").value; if ("" !== temp) obj["tw3"] = temp;
                temp = document.getElementById (id + "_tw4").value; if ("" !== temp) obj["tw4"] = temp;
                temp = document.getElementById (id + "_vsi1max").value; if ("" !== temp) obj["vsi1max"] = temp;
                temp = document.getElementById (id + "_vsi1min").value; if ("" !== temp) obj["vsi1min"] = temp;
                temp = document.getElementById (id + "_vsi2max").value; if ("" !== temp) obj["vsi2max"] = temp;
                temp = document.getElementById (id + "_vsi2min").value; if ("" !== temp) obj["vsi2min"] = temp;
                temp = document.getElementById (id + "_vstmax").value; if ("" !== temp) obj["vstmax"] = temp;
                temp = document.getElementById (id + "_vstmin").value; if ("" !== temp) obj["vstmin"] = temp;

                return (obj);
            }
        }

        /**
         * Dual input power system stabilizer, based on IEEE type 2, with modified output limiter defined by WECC (Western Electricity Coordinating Council, USA).
         *
         */
        class PssWECC extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssWECC;
                if (null == bucket)
                   cim_data.PssWECC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssWECC[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssWECC";
                base.parse_attribute (/<cim:PssWECC.inputSignal1Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal1Type", sub, context);
                base.parse_attribute (/<cim:PssWECC.inputSignal2Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal2Type", sub, context);
                base.parse_element (/<cim:PssWECC.k1>([\s\S]*?)<\/cim:PssWECC.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.k2>([\s\S]*?)<\/cim:PssWECC.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t1>([\s\S]*?)<\/cim:PssWECC.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t10>([\s\S]*?)<\/cim:PssWECC.t10>/g, obj, "t10", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t2>([\s\S]*?)<\/cim:PssWECC.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t3>([\s\S]*?)<\/cim:PssWECC.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t4>([\s\S]*?)<\/cim:PssWECC.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t5>([\s\S]*?)<\/cim:PssWECC.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t6>([\s\S]*?)<\/cim:PssWECC.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t7>([\s\S]*?)<\/cim:PssWECC.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t8>([\s\S]*?)<\/cim:PssWECC.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.t9>([\s\S]*?)<\/cim:PssWECC.t9>/g, obj, "t9", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.vcl>([\s\S]*?)<\/cim:PssWECC.vcl>/g, obj, "vcl", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.vcu>([\s\S]*?)<\/cim:PssWECC.vcu>/g, obj, "vcu", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.vsmax>([\s\S]*?)<\/cim:PssWECC.vsmax>/g, obj, "vsmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssWECC.vsmin>([\s\S]*?)<\/cim:PssWECC.vsmin>/g, obj, "vsmin", base.to_string, sub, context);
                let bucket = context.parsed.PssWECC;
                if (null == bucket)
                   context.parsed.PssWECC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PssWECC", "inputSignal1Type", "inputSignal1Type", fields);
                base.export_attribute (obj, "PssWECC", "inputSignal2Type", "inputSignal2Type", fields);
                base.export_element (obj, "PssWECC", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t10", "t10",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "t9", "t9",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "vcl", "vcl",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "vcu", "vcu",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "vsmax", "vsmax",  base.from_string, fields);
                base.export_element (obj, "PssWECC", "vsmin", "vsmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssWECC_collapse" aria-expanded="true" aria-controls="PssWECC_collapse" style="margin-left: 10px;">PssWECC</a></legend>
                    <div id="PssWECC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#inputSignal1Type}}<div><b>inputSignal1Type</b>: {{inputSignal1Type}}</div>{{/inputSignal1Type}}
                    {{#inputSignal2Type}}<div><b>inputSignal2Type</b>: {{inputSignal2Type}}</div>{{/inputSignal2Type}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t10}}<div><b>t10</b>: {{t10}}</div>{{/t10}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#t9}}<div><b>t9</b>: {{t9}}</div>{{/t9}}
                    {{#vcl}}<div><b>vcl</b>: {{vcl}}</div>{{/vcl}}
                    {{#vcu}}<div><b>vcu</b>: {{vcu}}</div>{{/vcu}}
                    {{#vsmax}}<div><b>vsmax</b>: {{vsmax}}</div>{{/vsmax}}
                    {{#vsmin}}<div><b>vsmin</b>: {{vsmin}}</div>{{/vsmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["inputSignal1TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal1Type"])}]; for (let property in InputSignalKind) obj["inputSignal1TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal1Type"] && obj["inputSignal1Type"].endsWith ('.' + property)});
                obj["inputSignal2TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal2Type"])}]; for (let property in InputSignalKind) obj["inputSignal2TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal2Type"] && obj["inputSignal2Type"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["inputSignal1TypeInputSignalKind"];
                delete obj["inputSignal2TypeInputSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssWECC_collapse" aria-expanded="true" aria-controls="{{id}}_PssWECC_collapse" style="margin-left: 10px;">PssWECC</a></legend>
                    <div id="{{id}}_PssWECC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal1Type'>inputSignal1Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal1Type' class='form-control custom-select'>{{#inputSignal1TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal1TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal2Type'>inputSignal2Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal2Type' class='form-control custom-select'>{{#inputSignal2TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal2TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t10'>t10: </label><div class='col-sm-8'><input id='{{id}}_t10' class='form-control' type='text'{{#t10}} value='{{t10}}'{{/t10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t9'>t9: </label><div class='col-sm-8'><input id='{{id}}_t9' class='form-control' type='text'{{#t9}} value='{{t9}}'{{/t9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcl'>vcl: </label><div class='col-sm-8'><input id='{{id}}_vcl' class='form-control' type='text'{{#vcl}} value='{{vcl}}'{{/vcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcu'>vcu: </label><div class='col-sm-8'><input id='{{id}}_vcu' class='form-control' type='text'{{#vcu}} value='{{vcu}}'{{/vcu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmax'>vsmax: </label><div class='col-sm-8'><input id='{{id}}_vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmin'>vsmin: </label><div class='col-sm-8'><input id='{{id}}_vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssWECC" };
                super.submit (id, obj);
                temp = InputSignalKind[document.getElementById (id + "_inputSignal1Type").value]; if (temp) obj["inputSignal1Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal1Type"];
                temp = InputSignalKind[document.getElementById (id + "_inputSignal2Type").value]; if (temp) obj["inputSignal2Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal2Type"];
                temp = document.getElementById (id + "_k1").value; if ("" !== temp) obj["k1"] = temp;
                temp = document.getElementById (id + "_k2").value; if ("" !== temp) obj["k2"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t10").value; if ("" !== temp) obj["t10"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_t7").value; if ("" !== temp) obj["t7"] = temp;
                temp = document.getElementById (id + "_t8").value; if ("" !== temp) obj["t8"] = temp;
                temp = document.getElementById (id + "_t9").value; if ("" !== temp) obj["t9"] = temp;
                temp = document.getElementById (id + "_vcl").value; if ("" !== temp) obj["vcl"] = temp;
                temp = document.getElementById (id + "_vcu").value; if ("" !== temp) obj["vcu"] = temp;
                temp = document.getElementById (id + "_vsmax").value; if ("" !== temp) obj["vsmax"] = temp;
                temp = document.getElementById (id + "_vsmin").value; if ("" !== temp) obj["vsmin"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE 421.5-2005 type PSS1A power system stabilizer model.
         *
         * PSS1A is the generalized form of a PSS with a single input signal.
         * Reference: IEEE 1A 421.5-2005, 8.1.
         *
         */
        class PssIEEE1A extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssIEEE1A;
                if (null == bucket)
                   cim_data.PssIEEE1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssIEEE1A[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssIEEE1A";
                base.parse_element (/<cim:PssIEEE1A.a1>([\s\S]*?)<\/cim:PssIEEE1A.a1>/g, obj, "a1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.a2>([\s\S]*?)<\/cim:PssIEEE1A.a2>/g, obj, "a2", base.to_string, sub, context);
                base.parse_attribute (/<cim:PssIEEE1A.inputSignalType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignalType", sub, context);
                base.parse_element (/<cim:PssIEEE1A.ks>([\s\S]*?)<\/cim:PssIEEE1A.ks>/g, obj, "ks", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t1>([\s\S]*?)<\/cim:PssIEEE1A.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t2>([\s\S]*?)<\/cim:PssIEEE1A.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t3>([\s\S]*?)<\/cim:PssIEEE1A.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t4>([\s\S]*?)<\/cim:PssIEEE1A.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t5>([\s\S]*?)<\/cim:PssIEEE1A.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.t6>([\s\S]*?)<\/cim:PssIEEE1A.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.vrmax>([\s\S]*?)<\/cim:PssIEEE1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE1A.vrmin>([\s\S]*?)<\/cim:PssIEEE1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                let bucket = context.parsed.PssIEEE1A;
                if (null == bucket)
                   context.parsed.PssIEEE1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssIEEE1A", "a1", "a1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "a2", "a2",  base.from_string, fields);
                base.export_attribute (obj, "PssIEEE1A", "inputSignalType", "inputSignalType", fields);
                base.export_element (obj, "PssIEEE1A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssIEEE1A_collapse" aria-expanded="true" aria-controls="PssIEEE1A_collapse" style="margin-left: 10px;">PssIEEE1A</a></legend>
                    <div id="PssIEEE1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#a1}}<div><b>a1</b>: {{a1}}</div>{{/a1}}
                    {{#a2}}<div><b>a2</b>: {{a2}}</div>{{/a2}}
                    {{#inputSignalType}}<div><b>inputSignalType</b>: {{inputSignalType}}</div>{{/inputSignalType}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["inputSignalTypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignalType"])}]; for (let property in InputSignalKind) obj["inputSignalTypeInputSignalKind"].push ({ id: property, selected: obj["inputSignalType"] && obj["inputSignalType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["inputSignalTypeInputSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssIEEE1A_collapse" aria-expanded="true" aria-controls="{{id}}_PssIEEE1A_collapse" style="margin-left: 10px;">PssIEEE1A</a></legend>
                    <div id="{{id}}_PssIEEE1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a1'>a1: </label><div class='col-sm-8'><input id='{{id}}_a1' class='form-control' type='text'{{#a1}} value='{{a1}}'{{/a1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a2'>a2: </label><div class='col-sm-8'><input id='{{id}}_a2' class='form-control' type='text'{{#a2}} value='{{a2}}'{{/a2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignalType'>inputSignalType: </label><div class='col-sm-8'><select id='{{id}}_inputSignalType' class='form-control custom-select'>{{#inputSignalTypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignalTypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssIEEE1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a1").value; if ("" !== temp) obj["a1"] = temp;
                temp = document.getElementById (id + "_a2").value; if ("" !== temp) obj["a2"] = temp;
                temp = InputSignalKind[document.getElementById (id + "_inputSignalType").value]; if (temp) obj["inputSignalType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignalType"];
                temp = document.getElementById (id + "_ks").value; if ("" !== temp) obj["ks"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" !== temp) obj["vrmax"] = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" !== temp) obj["vrmin"] = temp;

                return (obj);
            }
        }

        /**
         * Slovakian PSS with three inputs.
         *
         */
        class PssSK extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssSK;
                if (null == bucket)
                   cim_data.PssSK = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssSK[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssSK";
                base.parse_element (/<cim:PssSK.k1>([\s\S]*?)<\/cim:PssSK.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.k2>([\s\S]*?)<\/cim:PssSK.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.k3>([\s\S]*?)<\/cim:PssSK.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t1>([\s\S]*?)<\/cim:PssSK.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t2>([\s\S]*?)<\/cim:PssSK.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t3>([\s\S]*?)<\/cim:PssSK.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t4>([\s\S]*?)<\/cim:PssSK.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t5>([\s\S]*?)<\/cim:PssSK.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.t6>([\s\S]*?)<\/cim:PssSK.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.vsmax>([\s\S]*?)<\/cim:PssSK.vsmax>/g, obj, "vsmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssSK.vsmin>([\s\S]*?)<\/cim:PssSK.vsmin>/g, obj, "vsmin", base.to_string, sub, context);
                let bucket = context.parsed.PssSK;
                if (null == bucket)
                   context.parsed.PssSK = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssSK", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "PssSK", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "PssSK", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "PssSK", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "PssSK", "vsmax", "vsmax",  base.from_string, fields);
                base.export_element (obj, "PssSK", "vsmin", "vsmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssSK_collapse" aria-expanded="true" aria-controls="PssSK_collapse" style="margin-left: 10px;">PssSK</a></legend>
                    <div id="PssSK_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#vsmax}}<div><b>vsmax</b>: {{vsmax}}</div>{{/vsmax}}
                    {{#vsmin}}<div><b>vsmin</b>: {{vsmin}}</div>{{/vsmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssSK_collapse" aria-expanded="true" aria-controls="{{id}}_PssSK_collapse" style="margin-left: 10px;">PssSK</a></legend>
                    <div id="{{id}}_PssSK_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmax'>vsmax: </label><div class='col-sm-8'><input id='{{id}}_vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmin'>vsmin: </label><div class='col-sm-8'><input id='{{id}}_vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssSK" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k1").value; if ("" !== temp) obj["k1"] = temp;
                temp = document.getElementById (id + "_k2").value; if ("" !== temp) obj["k2"] = temp;
                temp = document.getElementById (id + "_k3").value; if ("" !== temp) obj["k3"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_vsmax").value; if ("" !== temp) obj["vsmax"] = temp;
                temp = document.getElementById (id + "_vsmin").value; if ("" !== temp) obj["vsmin"] = temp;

                return (obj);
            }
        }

        /**
         * Italian PSS with three inputs (speed, frequency, power).
         *
         */
        class Pss1 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pss1;
                if (null == bucket)
                   cim_data.Pss1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pss1[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "Pss1";
                base.parse_element (/<cim:Pss1.kf>([\s\S]*?)<\/cim:Pss1.kf>/g, obj, "kf", base.to_float, sub, context);
                base.parse_element (/<cim:Pss1.komega>([\s\S]*?)<\/cim:Pss1.komega>/g, obj, "komega", base.to_float, sub, context);
                base.parse_element (/<cim:Pss1.kpe>([\s\S]*?)<\/cim:Pss1.kpe>/g, obj, "kpe", base.to_float, sub, context);
                base.parse_element (/<cim:Pss1.ks>([\s\S]*?)<\/cim:Pss1.ks>/g, obj, "ks", base.to_float, sub, context);
                base.parse_element (/<cim:Pss1.pmin>([\s\S]*?)<\/cim:Pss1.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t10>([\s\S]*?)<\/cim:Pss1.t10>/g, obj, "t10", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t5>([\s\S]*?)<\/cim:Pss1.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t6>([\s\S]*?)<\/cim:Pss1.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t7>([\s\S]*?)<\/cim:Pss1.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t8>([\s\S]*?)<\/cim:Pss1.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.t9>([\s\S]*?)<\/cim:Pss1.t9>/g, obj, "t9", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.tpe>([\s\S]*?)<\/cim:Pss1.tpe>/g, obj, "tpe", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.vadat>([\s\S]*?)<\/cim:Pss1.vadat>/g, obj, "vadat", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pss1.vsmn>([\s\S]*?)<\/cim:Pss1.vsmn>/g, obj, "vsmn", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1.vsmx>([\s\S]*?)<\/cim:Pss1.vsmx>/g, obj, "vsmx", base.to_string, sub, context);
                let bucket = context.parsed.Pss1;
                if (null == bucket)
                   context.parsed.Pss1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pss1", "kf", "kf",  base.from_float, fields);
                base.export_element (obj, "Pss1", "komega", "komega",  base.from_float, fields);
                base.export_element (obj, "Pss1", "kpe", "kpe",  base.from_float, fields);
                base.export_element (obj, "Pss1", "ks", "ks",  base.from_float, fields);
                base.export_element (obj, "Pss1", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t10", "t10",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "Pss1", "t9", "t9",  base.from_string, fields);
                base.export_element (obj, "Pss1", "tpe", "tpe",  base.from_string, fields);
                base.export_element (obj, "Pss1", "vadat", "vadat",  base.from_boolean, fields);
                base.export_element (obj, "Pss1", "vsmn", "vsmn",  base.from_string, fields);
                base.export_element (obj, "Pss1", "vsmx", "vsmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pss1_collapse" aria-expanded="true" aria-controls="Pss1_collapse" style="margin-left: 10px;">Pss1</a></legend>
                    <div id="Pss1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#komega}}<div><b>komega</b>: {{komega}}</div>{{/komega}}
                    {{#kpe}}<div><b>kpe</b>: {{kpe}}</div>{{/kpe}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t10}}<div><b>t10</b>: {{t10}}</div>{{/t10}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#t9}}<div><b>t9</b>: {{t9}}</div>{{/t9}}
                    {{#tpe}}<div><b>tpe</b>: {{tpe}}</div>{{/tpe}}
                    {{#vadat}}<div><b>vadat</b>: {{vadat}}</div>{{/vadat}}
                    {{#vsmn}}<div><b>vsmn</b>: {{vsmn}}</div>{{/vsmn}}
                    {{#vsmx}}<div><b>vsmx</b>: {{vsmx}}</div>{{/vsmx}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pss1_collapse" aria-expanded="true" aria-controls="{{id}}_Pss1_collapse" style="margin-left: 10px;">Pss1</a></legend>
                    <div id="{{id}}_Pss1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_komega'>komega: </label><div class='col-sm-8'><input id='{{id}}_komega' class='form-control' type='text'{{#komega}} value='{{komega}}'{{/komega}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpe'>kpe: </label><div class='col-sm-8'><input id='{{id}}_kpe' class='form-control' type='text'{{#kpe}} value='{{kpe}}'{{/kpe}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t10'>t10: </label><div class='col-sm-8'><input id='{{id}}_t10' class='form-control' type='text'{{#t10}} value='{{t10}}'{{/t10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t9'>t9: </label><div class='col-sm-8'><input id='{{id}}_t9' class='form-control' type='text'{{#t9}} value='{{t9}}'{{/t9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpe'>tpe: </label><div class='col-sm-8'><input id='{{id}}_tpe' class='form-control' type='text'{{#tpe}} value='{{tpe}}'{{/tpe}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vadat'>vadat: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vadat' class='form-check-input' type='checkbox'{{#vadat}} checked{{/vadat}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmn'>vsmn: </label><div class='col-sm-8'><input id='{{id}}_vsmn' class='form-control' type='text'{{#vsmn}} value='{{vsmn}}'{{/vsmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmx'>vsmx: </label><div class='col-sm-8'><input id='{{id}}_vsmx' class='form-control' type='text'{{#vsmx}} value='{{vsmx}}'{{/vsmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pss1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kf").value; if ("" !== temp) obj["kf"] = temp;
                temp = document.getElementById (id + "_komega").value; if ("" !== temp) obj["komega"] = temp;
                temp = document.getElementById (id + "_kpe").value; if ("" !== temp) obj["kpe"] = temp;
                temp = document.getElementById (id + "_ks").value; if ("" !== temp) obj["ks"] = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" !== temp) obj["pmin"] = temp;
                temp = document.getElementById (id + "_t10").value; if ("" !== temp) obj["t10"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_t7").value; if ("" !== temp) obj["t7"] = temp;
                temp = document.getElementById (id + "_t8").value; if ("" !== temp) obj["t8"] = temp;
                temp = document.getElementById (id + "_t9").value; if ("" !== temp) obj["t9"] = temp;
                temp = document.getElementById (id + "_tpe").value; if ("" !== temp) obj["tpe"] = temp;
                temp = document.getElementById (id + "_vadat").checked; if (temp) obj["vadat"] = true;
                temp = document.getElementById (id + "_vsmn").value; if ("" !== temp) obj["vsmn"] = temp;
                temp = document.getElementById (id + "_vsmx").value; if ("" !== temp) obj["vsmx"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE 421.5-2005 type PSS2B power system stabilizer model.
         *
         * This stabilizer model is designed to represent a variety of dual-input stabilizers, which normally use combinations of power and speed or frequency to derive the stabilizing signal.
         * Reference: IEEE 2B 421.5-2005, 8.2.
         *
         */
        class PssIEEE2B extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssIEEE2B;
                if (null == bucket)
                   cim_data.PssIEEE2B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssIEEE2B[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssIEEE2B";
                base.parse_attribute (/<cim:PssIEEE2B.inputSignal1Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal1Type", sub, context);
                base.parse_attribute (/<cim:PssIEEE2B.inputSignal2Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal2Type", sub, context);
                base.parse_element (/<cim:PssIEEE2B.ks1>([\s\S]*?)<\/cim:PssIEEE2B.ks1>/g, obj, "ks1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.ks2>([\s\S]*?)<\/cim:PssIEEE2B.ks2>/g, obj, "ks2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.ks3>([\s\S]*?)<\/cim:PssIEEE2B.ks3>/g, obj, "ks3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.m>([\s\S]*?)<\/cim:PssIEEE2B.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.n>([\s\S]*?)<\/cim:PssIEEE2B.n>/g, obj, "n", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t1>([\s\S]*?)<\/cim:PssIEEE2B.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t10>([\s\S]*?)<\/cim:PssIEEE2B.t10>/g, obj, "t10", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t11>([\s\S]*?)<\/cim:PssIEEE2B.t11>/g, obj, "t11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t2>([\s\S]*?)<\/cim:PssIEEE2B.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t3>([\s\S]*?)<\/cim:PssIEEE2B.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t4>([\s\S]*?)<\/cim:PssIEEE2B.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t6>([\s\S]*?)<\/cim:PssIEEE2B.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t7>([\s\S]*?)<\/cim:PssIEEE2B.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t8>([\s\S]*?)<\/cim:PssIEEE2B.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.t9>([\s\S]*?)<\/cim:PssIEEE2B.t9>/g, obj, "t9", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.tw1>([\s\S]*?)<\/cim:PssIEEE2B.tw1>/g, obj, "tw1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.tw2>([\s\S]*?)<\/cim:PssIEEE2B.tw2>/g, obj, "tw2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.tw3>([\s\S]*?)<\/cim:PssIEEE2B.tw3>/g, obj, "tw3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.tw4>([\s\S]*?)<\/cim:PssIEEE2B.tw4>/g, obj, "tw4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vsi1max>([\s\S]*?)<\/cim:PssIEEE2B.vsi1max>/g, obj, "vsi1max", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vsi1min>([\s\S]*?)<\/cim:PssIEEE2B.vsi1min>/g, obj, "vsi1min", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vsi2max>([\s\S]*?)<\/cim:PssIEEE2B.vsi2max>/g, obj, "vsi2max", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vsi2min>([\s\S]*?)<\/cim:PssIEEE2B.vsi2min>/g, obj, "vsi2min", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vstmax>([\s\S]*?)<\/cim:PssIEEE2B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE2B.vstmin>([\s\S]*?)<\/cim:PssIEEE2B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);
                let bucket = context.parsed.PssIEEE2B;
                if (null == bucket)
                   context.parsed.PssIEEE2B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PssIEEE2B", "inputSignal1Type", "inputSignal1Type", fields);
                base.export_attribute (obj, "PssIEEE2B", "inputSignal2Type", "inputSignal2Type", fields);
                base.export_element (obj, "PssIEEE2B", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "ks2", "ks2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "ks3", "ks3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "m", "m",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "n", "n",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t10", "t10",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t11", "t11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "t9", "t9",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "tw1", "tw1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "tw2", "tw2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "tw3", "tw3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "tw4", "tw4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vsi1max", "vsi1max",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vsi1min", "vsi1min",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vsi2max", "vsi2max",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vsi2min", "vsi2min",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vstmax", "vstmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE2B", "vstmin", "vstmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssIEEE2B_collapse" aria-expanded="true" aria-controls="PssIEEE2B_collapse" style="margin-left: 10px;">PssIEEE2B</a></legend>
                    <div id="PssIEEE2B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#inputSignal1Type}}<div><b>inputSignal1Type</b>: {{inputSignal1Type}}</div>{{/inputSignal1Type}}
                    {{#inputSignal2Type}}<div><b>inputSignal2Type</b>: {{inputSignal2Type}}</div>{{/inputSignal2Type}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#ks2}}<div><b>ks2</b>: {{ks2}}</div>{{/ks2}}
                    {{#ks3}}<div><b>ks3</b>: {{ks3}}</div>{{/ks3}}
                    {{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
                    {{#n}}<div><b>n</b>: {{n}}</div>{{/n}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t10}}<div><b>t10</b>: {{t10}}</div>{{/t10}}
                    {{#t11}}<div><b>t11</b>: {{t11}}</div>{{/t11}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#t9}}<div><b>t9</b>: {{t9}}</div>{{/t9}}
                    {{#tw1}}<div><b>tw1</b>: {{tw1}}</div>{{/tw1}}
                    {{#tw2}}<div><b>tw2</b>: {{tw2}}</div>{{/tw2}}
                    {{#tw3}}<div><b>tw3</b>: {{tw3}}</div>{{/tw3}}
                    {{#tw4}}<div><b>tw4</b>: {{tw4}}</div>{{/tw4}}
                    {{#vsi1max}}<div><b>vsi1max</b>: {{vsi1max}}</div>{{/vsi1max}}
                    {{#vsi1min}}<div><b>vsi1min</b>: {{vsi1min}}</div>{{/vsi1min}}
                    {{#vsi2max}}<div><b>vsi2max</b>: {{vsi2max}}</div>{{/vsi2max}}
                    {{#vsi2min}}<div><b>vsi2min</b>: {{vsi2min}}</div>{{/vsi2min}}
                    {{#vstmax}}<div><b>vstmax</b>: {{vstmax}}</div>{{/vstmax}}
                    {{#vstmin}}<div><b>vstmin</b>: {{vstmin}}</div>{{/vstmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["inputSignal1TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal1Type"])}]; for (let property in InputSignalKind) obj["inputSignal1TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal1Type"] && obj["inputSignal1Type"].endsWith ('.' + property)});
                obj["inputSignal2TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal2Type"])}]; for (let property in InputSignalKind) obj["inputSignal2TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal2Type"] && obj["inputSignal2Type"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["inputSignal1TypeInputSignalKind"];
                delete obj["inputSignal2TypeInputSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssIEEE2B_collapse" aria-expanded="true" aria-controls="{{id}}_PssIEEE2B_collapse" style="margin-left: 10px;">PssIEEE2B</a></legend>
                    <div id="{{id}}_PssIEEE2B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal1Type'>inputSignal1Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal1Type' class='form-control custom-select'>{{#inputSignal1TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal1TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal2Type'>inputSignal2Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal2Type' class='form-control custom-select'>{{#inputSignal2TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal2TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks2'>ks2: </label><div class='col-sm-8'><input id='{{id}}_ks2' class='form-control' type='text'{{#ks2}} value='{{ks2}}'{{/ks2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks3'>ks3: </label><div class='col-sm-8'><input id='{{id}}_ks3' class='form-control' type='text'{{#ks3}} value='{{ks3}}'{{/ks3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_m'>m: </label><div class='col-sm-8'><input id='{{id}}_m' class='form-control' type='text'{{#m}} value='{{m}}'{{/m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_n'>n: </label><div class='col-sm-8'><input id='{{id}}_n' class='form-control' type='text'{{#n}} value='{{n}}'{{/n}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t10'>t10: </label><div class='col-sm-8'><input id='{{id}}_t10' class='form-control' type='text'{{#t10}} value='{{t10}}'{{/t10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t11'>t11: </label><div class='col-sm-8'><input id='{{id}}_t11' class='form-control' type='text'{{#t11}} value='{{t11}}'{{/t11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t9'>t9: </label><div class='col-sm-8'><input id='{{id}}_t9' class='form-control' type='text'{{#t9}} value='{{t9}}'{{/t9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw1'>tw1: </label><div class='col-sm-8'><input id='{{id}}_tw1' class='form-control' type='text'{{#tw1}} value='{{tw1}}'{{/tw1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw2'>tw2: </label><div class='col-sm-8'><input id='{{id}}_tw2' class='form-control' type='text'{{#tw2}} value='{{tw2}}'{{/tw2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw3'>tw3: </label><div class='col-sm-8'><input id='{{id}}_tw3' class='form-control' type='text'{{#tw3}} value='{{tw3}}'{{/tw3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw4'>tw4: </label><div class='col-sm-8'><input id='{{id}}_tw4' class='form-control' type='text'{{#tw4}} value='{{tw4}}'{{/tw4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi1max'>vsi1max: </label><div class='col-sm-8'><input id='{{id}}_vsi1max' class='form-control' type='text'{{#vsi1max}} value='{{vsi1max}}'{{/vsi1max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi1min'>vsi1min: </label><div class='col-sm-8'><input id='{{id}}_vsi1min' class='form-control' type='text'{{#vsi1min}} value='{{vsi1min}}'{{/vsi1min}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi2max'>vsi2max: </label><div class='col-sm-8'><input id='{{id}}_vsi2max' class='form-control' type='text'{{#vsi2max}} value='{{vsi2max}}'{{/vsi2max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsi2min'>vsi2min: </label><div class='col-sm-8'><input id='{{id}}_vsi2min' class='form-control' type='text'{{#vsi2min}} value='{{vsi2min}}'{{/vsi2min}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmax'>vstmax: </label><div class='col-sm-8'><input id='{{id}}_vstmax' class='form-control' type='text'{{#vstmax}} value='{{vstmax}}'{{/vstmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmin'>vstmin: </label><div class='col-sm-8'><input id='{{id}}_vstmin' class='form-control' type='text'{{#vstmin}} value='{{vstmin}}'{{/vstmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssIEEE2B" };
                super.submit (id, obj);
                temp = InputSignalKind[document.getElementById (id + "_inputSignal1Type").value]; if (temp) obj["inputSignal1Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal1Type"];
                temp = InputSignalKind[document.getElementById (id + "_inputSignal2Type").value]; if (temp) obj["inputSignal2Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal2Type"];
                temp = document.getElementById (id + "_ks1").value; if ("" !== temp) obj["ks1"] = temp;
                temp = document.getElementById (id + "_ks2").value; if ("" !== temp) obj["ks2"] = temp;
                temp = document.getElementById (id + "_ks3").value; if ("" !== temp) obj["ks3"] = temp;
                temp = document.getElementById (id + "_m").value; if ("" !== temp) obj["m"] = temp;
                temp = document.getElementById (id + "_n").value; if ("" !== temp) obj["n"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t10").value; if ("" !== temp) obj["t10"] = temp;
                temp = document.getElementById (id + "_t11").value; if ("" !== temp) obj["t11"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_t7").value; if ("" !== temp) obj["t7"] = temp;
                temp = document.getElementById (id + "_t8").value; if ("" !== temp) obj["t8"] = temp;
                temp = document.getElementById (id + "_t9").value; if ("" !== temp) obj["t9"] = temp;
                temp = document.getElementById (id + "_tw1").value; if ("" !== temp) obj["tw1"] = temp;
                temp = document.getElementById (id + "_tw2").value; if ("" !== temp) obj["tw2"] = temp;
                temp = document.getElementById (id + "_tw3").value; if ("" !== temp) obj["tw3"] = temp;
                temp = document.getElementById (id + "_tw4").value; if ("" !== temp) obj["tw4"] = temp;
                temp = document.getElementById (id + "_vsi1max").value; if ("" !== temp) obj["vsi1max"] = temp;
                temp = document.getElementById (id + "_vsi1min").value; if ("" !== temp) obj["vsi1min"] = temp;
                temp = document.getElementById (id + "_vsi2max").value; if ("" !== temp) obj["vsi2max"] = temp;
                temp = document.getElementById (id + "_vsi2min").value; if ("" !== temp) obj["vsi2min"] = temp;
                temp = document.getElementById (id + "_vstmax").value; if ("" !== temp) obj["vstmax"] = temp;
                temp = document.getElementById (id + "_vstmin").value; if ("" !== temp) obj["vstmin"] = temp;

                return (obj);
            }
        }

        /**
         * PTI microprocessor-based stabilizer type 1.
         *
         */
        class PssPTIST1 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssPTIST1;
                if (null == bucket)
                   cim_data.PssPTIST1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssPTIST1[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssPTIST1";
                base.parse_element (/<cim:PssPTIST1.dtc>([\s\S]*?)<\/cim:PssPTIST1.dtc>/g, obj, "dtc", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.dtf>([\s\S]*?)<\/cim:PssPTIST1.dtf>/g, obj, "dtf", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.dtp>([\s\S]*?)<\/cim:PssPTIST1.dtp>/g, obj, "dtp", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.k>([\s\S]*?)<\/cim:PssPTIST1.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.m>([\s\S]*?)<\/cim:PssPTIST1.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.t1>([\s\S]*?)<\/cim:PssPTIST1.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.t2>([\s\S]*?)<\/cim:PssPTIST1.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.t3>([\s\S]*?)<\/cim:PssPTIST1.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.t4>([\s\S]*?)<\/cim:PssPTIST1.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.tf>([\s\S]*?)<\/cim:PssPTIST1.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST1.tp>([\s\S]*?)<\/cim:PssPTIST1.tp>/g, obj, "tp", base.to_string, sub, context);
                let bucket = context.parsed.PssPTIST1;
                if (null == bucket)
                   context.parsed.PssPTIST1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssPTIST1", "dtc", "dtc",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "dtf", "dtf",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "dtp", "dtp",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "k", "k",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "m", "m",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "PssPTIST1", "tp", "tp",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssPTIST1_collapse" aria-expanded="true" aria-controls="PssPTIST1_collapse" style="margin-left: 10px;">PssPTIST1</a></legend>
                    <div id="PssPTIST1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#dtc}}<div><b>dtc</b>: {{dtc}}</div>{{/dtc}}
                    {{#dtf}}<div><b>dtf</b>: {{dtf}}</div>{{/dtf}}
                    {{#dtp}}<div><b>dtp</b>: {{dtp}}</div>{{/dtp}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssPTIST1_collapse" aria-expanded="true" aria-controls="{{id}}_PssPTIST1_collapse" style="margin-left: 10px;">PssPTIST1</a></legend>
                    <div id="{{id}}_PssPTIST1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtc'>dtc: </label><div class='col-sm-8'><input id='{{id}}_dtc' class='form-control' type='text'{{#dtc}} value='{{dtc}}'{{/dtc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtf'>dtf: </label><div class='col-sm-8'><input id='{{id}}_dtf' class='form-control' type='text'{{#dtf}} value='{{dtf}}'{{/dtf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtp'>dtp: </label><div class='col-sm-8'><input id='{{id}}_dtp' class='form-control' type='text'{{#dtp}} value='{{dtp}}'{{/dtp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_m'>m: </label><div class='col-sm-8'><input id='{{id}}_m' class='form-control' type='text'{{#m}} value='{{m}}'{{/m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssPTIST1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dtc").value; if ("" !== temp) obj["dtc"] = temp;
                temp = document.getElementById (id + "_dtf").value; if ("" !== temp) obj["dtf"] = temp;
                temp = document.getElementById (id + "_dtp").value; if ("" !== temp) obj["dtp"] = temp;
                temp = document.getElementById (id + "_k").value; if ("" !== temp) obj["k"] = temp;
                temp = document.getElementById (id + "_m").value; if ("" !== temp) obj["m"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_tf").value; if ("" !== temp) obj["tf"] = temp;
                temp = document.getElementById (id + "_tp").value; if ("" !== temp) obj["tp"] = temp;

                return (obj);
            }
        }

        /**
         * PTI microprocessor-based stabilizer type 1.
         *
         */
        class Pss2ST extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pss2ST;
                if (null == bucket)
                   cim_data.Pss2ST = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pss2ST[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "Pss2ST";
                base.parse_attribute (/<cim:Pss2ST.inputSignal1Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal1Type", sub, context);
                base.parse_attribute (/<cim:Pss2ST.inputSignal2Type\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignal2Type", sub, context);
                base.parse_element (/<cim:Pss2ST.k1>([\s\S]*?)<\/cim:Pss2ST.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.k2>([\s\S]*?)<\/cim:Pss2ST.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.lsmax>([\s\S]*?)<\/cim:Pss2ST.lsmax>/g, obj, "lsmax", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.lsmin>([\s\S]*?)<\/cim:Pss2ST.lsmin>/g, obj, "lsmin", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t1>([\s\S]*?)<\/cim:Pss2ST.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t10>([\s\S]*?)<\/cim:Pss2ST.t10>/g, obj, "t10", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t2>([\s\S]*?)<\/cim:Pss2ST.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t3>([\s\S]*?)<\/cim:Pss2ST.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t4>([\s\S]*?)<\/cim:Pss2ST.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t5>([\s\S]*?)<\/cim:Pss2ST.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t6>([\s\S]*?)<\/cim:Pss2ST.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t7>([\s\S]*?)<\/cim:Pss2ST.t7>/g, obj, "t7", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t8>([\s\S]*?)<\/cim:Pss2ST.t8>/g, obj, "t8", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.t9>([\s\S]*?)<\/cim:Pss2ST.t9>/g, obj, "t9", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.vcl>([\s\S]*?)<\/cim:Pss2ST.vcl>/g, obj, "vcl", base.to_string, sub, context);
                base.parse_element (/<cim:Pss2ST.vcu>([\s\S]*?)<\/cim:Pss2ST.vcu>/g, obj, "vcu", base.to_string, sub, context);
                let bucket = context.parsed.Pss2ST;
                if (null == bucket)
                   context.parsed.Pss2ST = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Pss2ST", "inputSignal1Type", "inputSignal1Type", fields);
                base.export_attribute (obj, "Pss2ST", "inputSignal2Type", "inputSignal2Type", fields);
                base.export_element (obj, "Pss2ST", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "lsmax", "lsmax",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "lsmin", "lsmin",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t10", "t10",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t7", "t7",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t8", "t8",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "t9", "t9",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "vcl", "vcl",  base.from_string, fields);
                base.export_element (obj, "Pss2ST", "vcu", "vcu",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pss2ST_collapse" aria-expanded="true" aria-controls="Pss2ST_collapse" style="margin-left: 10px;">Pss2ST</a></legend>
                    <div id="Pss2ST_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#inputSignal1Type}}<div><b>inputSignal1Type</b>: {{inputSignal1Type}}</div>{{/inputSignal1Type}}
                    {{#inputSignal2Type}}<div><b>inputSignal2Type</b>: {{inputSignal2Type}}</div>{{/inputSignal2Type}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#lsmax}}<div><b>lsmax</b>: {{lsmax}}</div>{{/lsmax}}
                    {{#lsmin}}<div><b>lsmin</b>: {{lsmin}}</div>{{/lsmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t10}}<div><b>t10</b>: {{t10}}</div>{{/t10}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#t7}}<div><b>t7</b>: {{t7}}</div>{{/t7}}
                    {{#t8}}<div><b>t8</b>: {{t8}}</div>{{/t8}}
                    {{#t9}}<div><b>t9</b>: {{t9}}</div>{{/t9}}
                    {{#vcl}}<div><b>vcl</b>: {{vcl}}</div>{{/vcl}}
                    {{#vcu}}<div><b>vcu</b>: {{vcu}}</div>{{/vcu}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["inputSignal1TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal1Type"])}]; for (let property in InputSignalKind) obj["inputSignal1TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal1Type"] && obj["inputSignal1Type"].endsWith ('.' + property)});
                obj["inputSignal2TypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignal2Type"])}]; for (let property in InputSignalKind) obj["inputSignal2TypeInputSignalKind"].push ({ id: property, selected: obj["inputSignal2Type"] && obj["inputSignal2Type"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["inputSignal1TypeInputSignalKind"];
                delete obj["inputSignal2TypeInputSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pss2ST_collapse" aria-expanded="true" aria-controls="{{id}}_Pss2ST_collapse" style="margin-left: 10px;">Pss2ST</a></legend>
                    <div id="{{id}}_Pss2ST_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal1Type'>inputSignal1Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal1Type' class='form-control custom-select'>{{#inputSignal1TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal1TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignal2Type'>inputSignal2Type: </label><div class='col-sm-8'><select id='{{id}}_inputSignal2Type' class='form-control custom-select'>{{#inputSignal2TypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignal2TypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lsmax'>lsmax: </label><div class='col-sm-8'><input id='{{id}}_lsmax' class='form-control' type='text'{{#lsmax}} value='{{lsmax}}'{{/lsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lsmin'>lsmin: </label><div class='col-sm-8'><input id='{{id}}_lsmin' class='form-control' type='text'{{#lsmin}} value='{{lsmin}}'{{/lsmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t10'>t10: </label><div class='col-sm-8'><input id='{{id}}_t10' class='form-control' type='text'{{#t10}} value='{{t10}}'{{/t10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t7'>t7: </label><div class='col-sm-8'><input id='{{id}}_t7' class='form-control' type='text'{{#t7}} value='{{t7}}'{{/t7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t8'>t8: </label><div class='col-sm-8'><input id='{{id}}_t8' class='form-control' type='text'{{#t8}} value='{{t8}}'{{/t8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t9'>t9: </label><div class='col-sm-8'><input id='{{id}}_t9' class='form-control' type='text'{{#t9}} value='{{t9}}'{{/t9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcl'>vcl: </label><div class='col-sm-8'><input id='{{id}}_vcl' class='form-control' type='text'{{#vcl}} value='{{vcl}}'{{/vcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcu'>vcu: </label><div class='col-sm-8'><input id='{{id}}_vcu' class='form-control' type='text'{{#vcu}} value='{{vcu}}'{{/vcu}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pss2ST" };
                super.submit (id, obj);
                temp = InputSignalKind[document.getElementById (id + "_inputSignal1Type").value]; if (temp) obj["inputSignal1Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal1Type"];
                temp = InputSignalKind[document.getElementById (id + "_inputSignal2Type").value]; if (temp) obj["inputSignal2Type"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignal2Type"];
                temp = document.getElementById (id + "_k1").value; if ("" !== temp) obj["k1"] = temp;
                temp = document.getElementById (id + "_k2").value; if ("" !== temp) obj["k2"] = temp;
                temp = document.getElementById (id + "_lsmax").value; if ("" !== temp) obj["lsmax"] = temp;
                temp = document.getElementById (id + "_lsmin").value; if ("" !== temp) obj["lsmin"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t10").value; if ("" !== temp) obj["t10"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_t7").value; if ("" !== temp) obj["t7"] = temp;
                temp = document.getElementById (id + "_t8").value; if ("" !== temp) obj["t8"] = temp;
                temp = document.getElementById (id + "_t9").value; if ("" !== temp) obj["t9"] = temp;
                temp = document.getElementById (id + "_vcl").value; if ("" !== temp) obj["vcl"] = temp;
                temp = document.getElementById (id + "_vcu").value; if ("" !== temp) obj["vcu"] = temp;

                return (obj);
            }
        }

        /**
         * Power system stabilizer type RQB.
         *
         * This power system stabilizer is intended to be used together with excitation system type ExcRQB, which is primarily used in nuclear or thermal generating units.
         *
         */
        class PssRQB extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssRQB;
                if (null == bucket)
                   cim_data.PssRQB = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssRQB[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssRQB";
                base.parse_element (/<cim:PssRQB.kdpm>([\s\S]*?)<\/cim:PssRQB.kdpm>/g, obj, "kdpm", base.to_float, sub, context);
                base.parse_element (/<cim:PssRQB.ki2>([\s\S]*?)<\/cim:PssRQB.ki2>/g, obj, "ki2", base.to_float, sub, context);
                base.parse_element (/<cim:PssRQB.ki3>([\s\S]*?)<\/cim:PssRQB.ki3>/g, obj, "ki3", base.to_float, sub, context);
                base.parse_element (/<cim:PssRQB.ki4>([\s\S]*?)<\/cim:PssRQB.ki4>/g, obj, "ki4", base.to_float, sub, context);
                base.parse_element (/<cim:PssRQB.sibv>([\s\S]*?)<\/cim:PssRQB.sibv>/g, obj, "sibv", base.to_string, sub, context);
                base.parse_element (/<cim:PssRQB.t4f>([\s\S]*?)<\/cim:PssRQB.t4f>/g, obj, "t4f", base.to_string, sub, context);
                base.parse_element (/<cim:PssRQB.t4m>([\s\S]*?)<\/cim:PssRQB.t4m>/g, obj, "t4m", base.to_string, sub, context);
                base.parse_element (/<cim:PssRQB.t4mom>([\s\S]*?)<\/cim:PssRQB.t4mom>/g, obj, "t4mom", base.to_string, sub, context);
                base.parse_element (/<cim:PssRQB.tomd>([\s\S]*?)<\/cim:PssRQB.tomd>/g, obj, "tomd", base.to_string, sub, context);
                base.parse_element (/<cim:PssRQB.tomsl>([\s\S]*?)<\/cim:PssRQB.tomsl>/g, obj, "tomsl", base.to_string, sub, context);
                let bucket = context.parsed.PssRQB;
                if (null == bucket)
                   context.parsed.PssRQB = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssRQB", "kdpm", "kdpm",  base.from_float, fields);
                base.export_element (obj, "PssRQB", "ki2", "ki2",  base.from_float, fields);
                base.export_element (obj, "PssRQB", "ki3", "ki3",  base.from_float, fields);
                base.export_element (obj, "PssRQB", "ki4", "ki4",  base.from_float, fields);
                base.export_element (obj, "PssRQB", "sibv", "sibv",  base.from_string, fields);
                base.export_element (obj, "PssRQB", "t4f", "t4f",  base.from_string, fields);
                base.export_element (obj, "PssRQB", "t4m", "t4m",  base.from_string, fields);
                base.export_element (obj, "PssRQB", "t4mom", "t4mom",  base.from_string, fields);
                base.export_element (obj, "PssRQB", "tomd", "tomd",  base.from_string, fields);
                base.export_element (obj, "PssRQB", "tomsl", "tomsl",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssRQB_collapse" aria-expanded="true" aria-controls="PssRQB_collapse" style="margin-left: 10px;">PssRQB</a></legend>
                    <div id="PssRQB_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#kdpm}}<div><b>kdpm</b>: {{kdpm}}</div>{{/kdpm}}
                    {{#ki2}}<div><b>ki2</b>: {{ki2}}</div>{{/ki2}}
                    {{#ki3}}<div><b>ki3</b>: {{ki3}}</div>{{/ki3}}
                    {{#ki4}}<div><b>ki4</b>: {{ki4}}</div>{{/ki4}}
                    {{#sibv}}<div><b>sibv</b>: {{sibv}}</div>{{/sibv}}
                    {{#t4f}}<div><b>t4f</b>: {{t4f}}</div>{{/t4f}}
                    {{#t4m}}<div><b>t4m</b>: {{t4m}}</div>{{/t4m}}
                    {{#t4mom}}<div><b>t4mom</b>: {{t4mom}}</div>{{/t4mom}}
                    {{#tomd}}<div><b>tomd</b>: {{tomd}}</div>{{/tomd}}
                    {{#tomsl}}<div><b>tomsl</b>: {{tomsl}}</div>{{/tomsl}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssRQB_collapse" aria-expanded="true" aria-controls="{{id}}_PssRQB_collapse" style="margin-left: 10px;">PssRQB</a></legend>
                    <div id="{{id}}_PssRQB_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdpm'>kdpm: </label><div class='col-sm-8'><input id='{{id}}_kdpm' class='form-control' type='text'{{#kdpm}} value='{{kdpm}}'{{/kdpm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki2'>ki2: </label><div class='col-sm-8'><input id='{{id}}_ki2' class='form-control' type='text'{{#ki2}} value='{{ki2}}'{{/ki2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki3'>ki3: </label><div class='col-sm-8'><input id='{{id}}_ki3' class='form-control' type='text'{{#ki3}} value='{{ki3}}'{{/ki3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki4'>ki4: </label><div class='col-sm-8'><input id='{{id}}_ki4' class='form-control' type='text'{{#ki4}} value='{{ki4}}'{{/ki4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sibv'>sibv: </label><div class='col-sm-8'><input id='{{id}}_sibv' class='form-control' type='text'{{#sibv}} value='{{sibv}}'{{/sibv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4f'>t4f: </label><div class='col-sm-8'><input id='{{id}}_t4f' class='form-control' type='text'{{#t4f}} value='{{t4f}}'{{/t4f}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4m'>t4m: </label><div class='col-sm-8'><input id='{{id}}_t4m' class='form-control' type='text'{{#t4m}} value='{{t4m}}'{{/t4m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4mom'>t4mom: </label><div class='col-sm-8'><input id='{{id}}_t4mom' class='form-control' type='text'{{#t4mom}} value='{{t4mom}}'{{/t4mom}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tomd'>tomd: </label><div class='col-sm-8'><input id='{{id}}_tomd' class='form-control' type='text'{{#tomd}} value='{{tomd}}'{{/tomd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tomsl'>tomsl: </label><div class='col-sm-8'><input id='{{id}}_tomsl' class='form-control' type='text'{{#tomsl}} value='{{tomsl}}'{{/tomsl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssRQB" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kdpm").value; if ("" !== temp) obj["kdpm"] = temp;
                temp = document.getElementById (id + "_ki2").value; if ("" !== temp) obj["ki2"] = temp;
                temp = document.getElementById (id + "_ki3").value; if ("" !== temp) obj["ki3"] = temp;
                temp = document.getElementById (id + "_ki4").value; if ("" !== temp) obj["ki4"] = temp;
                temp = document.getElementById (id + "_sibv").value; if ("" !== temp) obj["sibv"] = temp;
                temp = document.getElementById (id + "_t4f").value; if ("" !== temp) obj["t4f"] = temp;
                temp = document.getElementById (id + "_t4m").value; if ("" !== temp) obj["t4m"] = temp;
                temp = document.getElementById (id + "_t4mom").value; if ("" !== temp) obj["t4mom"] = temp;
                temp = document.getElementById (id + "_tomd").value; if ("" !== temp) obj["tomd"] = temp;
                temp = document.getElementById (id + "_tomsl").value; if ("" !== temp) obj["tomsl"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE 421.5-2005 type PSS3B power system stabilizer model.
         *
         * The PSS model PSS3B has dual inputs of electrical power and rotor angular frequency deviation. The signals are used to derive an equivalent mechanical power signal.
         * This model has 2 input signals. They have the following fixed types (expressed in terms of InputSignalKind values): the first one is of rotorAngleFrequencyDeviation type and the second one is of generatorElectricalPower type.
         * Reference: IEEE 3B 421.5-2005, 8.3.
         *
         */
        class PssIEEE3B extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssIEEE3B;
                if (null == bucket)
                   cim_data.PssIEEE3B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssIEEE3B[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssIEEE3B";
                base.parse_element (/<cim:PssIEEE3B.a1>([\s\S]*?)<\/cim:PssIEEE3B.a1>/g, obj, "a1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a2>([\s\S]*?)<\/cim:PssIEEE3B.a2>/g, obj, "a2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a3>([\s\S]*?)<\/cim:PssIEEE3B.a3>/g, obj, "a3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a4>([\s\S]*?)<\/cim:PssIEEE3B.a4>/g, obj, "a4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a5>([\s\S]*?)<\/cim:PssIEEE3B.a5>/g, obj, "a5", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a6>([\s\S]*?)<\/cim:PssIEEE3B.a6>/g, obj, "a6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a7>([\s\S]*?)<\/cim:PssIEEE3B.a7>/g, obj, "a7", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.a8>([\s\S]*?)<\/cim:PssIEEE3B.a8>/g, obj, "a8", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.ks1>([\s\S]*?)<\/cim:PssIEEE3B.ks1>/g, obj, "ks1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.ks2>([\s\S]*?)<\/cim:PssIEEE3B.ks2>/g, obj, "ks2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.t1>([\s\S]*?)<\/cim:PssIEEE3B.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.t2>([\s\S]*?)<\/cim:PssIEEE3B.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.tw1>([\s\S]*?)<\/cim:PssIEEE3B.tw1>/g, obj, "tw1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.tw2>([\s\S]*?)<\/cim:PssIEEE3B.tw2>/g, obj, "tw2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.tw3>([\s\S]*?)<\/cim:PssIEEE3B.tw3>/g, obj, "tw3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.vstmax>([\s\S]*?)<\/cim:PssIEEE3B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE3B.vstmin>([\s\S]*?)<\/cim:PssIEEE3B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);
                let bucket = context.parsed.PssIEEE3B;
                if (null == bucket)
                   context.parsed.PssIEEE3B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssIEEE3B", "a1", "a1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a2", "a2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a3", "a3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a4", "a4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a5", "a5",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a6", "a6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a7", "a7",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "a8", "a8",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "ks2", "ks2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "tw1", "tw1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "tw2", "tw2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "tw3", "tw3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "vstmax", "vstmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE3B", "vstmin", "vstmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssIEEE3B_collapse" aria-expanded="true" aria-controls="PssIEEE3B_collapse" style="margin-left: 10px;">PssIEEE3B</a></legend>
                    <div id="PssIEEE3B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#a1}}<div><b>a1</b>: {{a1}}</div>{{/a1}}
                    {{#a2}}<div><b>a2</b>: {{a2}}</div>{{/a2}}
                    {{#a3}}<div><b>a3</b>: {{a3}}</div>{{/a3}}
                    {{#a4}}<div><b>a4</b>: {{a4}}</div>{{/a4}}
                    {{#a5}}<div><b>a5</b>: {{a5}}</div>{{/a5}}
                    {{#a6}}<div><b>a6</b>: {{a6}}</div>{{/a6}}
                    {{#a7}}<div><b>a7</b>: {{a7}}</div>{{/a7}}
                    {{#a8}}<div><b>a8</b>: {{a8}}</div>{{/a8}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#ks2}}<div><b>ks2</b>: {{ks2}}</div>{{/ks2}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#tw1}}<div><b>tw1</b>: {{tw1}}</div>{{/tw1}}
                    {{#tw2}}<div><b>tw2</b>: {{tw2}}</div>{{/tw2}}
                    {{#tw3}}<div><b>tw3</b>: {{tw3}}</div>{{/tw3}}
                    {{#vstmax}}<div><b>vstmax</b>: {{vstmax}}</div>{{/vstmax}}
                    {{#vstmin}}<div><b>vstmin</b>: {{vstmin}}</div>{{/vstmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssIEEE3B_collapse" aria-expanded="true" aria-controls="{{id}}_PssIEEE3B_collapse" style="margin-left: 10px;">PssIEEE3B</a></legend>
                    <div id="{{id}}_PssIEEE3B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a1'>a1: </label><div class='col-sm-8'><input id='{{id}}_a1' class='form-control' type='text'{{#a1}} value='{{a1}}'{{/a1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a2'>a2: </label><div class='col-sm-8'><input id='{{id}}_a2' class='form-control' type='text'{{#a2}} value='{{a2}}'{{/a2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a3'>a3: </label><div class='col-sm-8'><input id='{{id}}_a3' class='form-control' type='text'{{#a3}} value='{{a3}}'{{/a3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a4'>a4: </label><div class='col-sm-8'><input id='{{id}}_a4' class='form-control' type='text'{{#a4}} value='{{a4}}'{{/a4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a5'>a5: </label><div class='col-sm-8'><input id='{{id}}_a5' class='form-control' type='text'{{#a5}} value='{{a5}}'{{/a5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a6'>a6: </label><div class='col-sm-8'><input id='{{id}}_a6' class='form-control' type='text'{{#a6}} value='{{a6}}'{{/a6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a7'>a7: </label><div class='col-sm-8'><input id='{{id}}_a7' class='form-control' type='text'{{#a7}} value='{{a7}}'{{/a7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a8'>a8: </label><div class='col-sm-8'><input id='{{id}}_a8' class='form-control' type='text'{{#a8}} value='{{a8}}'{{/a8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks2'>ks2: </label><div class='col-sm-8'><input id='{{id}}_ks2' class='form-control' type='text'{{#ks2}} value='{{ks2}}'{{/ks2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw1'>tw1: </label><div class='col-sm-8'><input id='{{id}}_tw1' class='form-control' type='text'{{#tw1}} value='{{tw1}}'{{/tw1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw2'>tw2: </label><div class='col-sm-8'><input id='{{id}}_tw2' class='form-control' type='text'{{#tw2}} value='{{tw2}}'{{/tw2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tw3'>tw3: </label><div class='col-sm-8'><input id='{{id}}_tw3' class='form-control' type='text'{{#tw3}} value='{{tw3}}'{{/tw3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmax'>vstmax: </label><div class='col-sm-8'><input id='{{id}}_vstmax' class='form-control' type='text'{{#vstmax}} value='{{vstmax}}'{{/vstmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmin'>vstmin: </label><div class='col-sm-8'><input id='{{id}}_vstmin' class='form-control' type='text'{{#vstmin}} value='{{vstmin}}'{{/vstmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssIEEE3B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a1").value; if ("" !== temp) obj["a1"] = temp;
                temp = document.getElementById (id + "_a2").value; if ("" !== temp) obj["a2"] = temp;
                temp = document.getElementById (id + "_a3").value; if ("" !== temp) obj["a3"] = temp;
                temp = document.getElementById (id + "_a4").value; if ("" !== temp) obj["a4"] = temp;
                temp = document.getElementById (id + "_a5").value; if ("" !== temp) obj["a5"] = temp;
                temp = document.getElementById (id + "_a6").value; if ("" !== temp) obj["a6"] = temp;
                temp = document.getElementById (id + "_a7").value; if ("" !== temp) obj["a7"] = temp;
                temp = document.getElementById (id + "_a8").value; if ("" !== temp) obj["a8"] = temp;
                temp = document.getElementById (id + "_ks1").value; if ("" !== temp) obj["ks1"] = temp;
                temp = document.getElementById (id + "_ks2").value; if ("" !== temp) obj["ks2"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_tw1").value; if ("" !== temp) obj["tw1"] = temp;
                temp = document.getElementById (id + "_tw2").value; if ("" !== temp) obj["tw2"] = temp;
                temp = document.getElementById (id + "_tw3").value; if ("" !== temp) obj["tw3"] = temp;
                temp = document.getElementById (id + "_vstmax").value; if ("" !== temp) obj["vstmax"] = temp;
                temp = document.getElementById (id + "_vstmin").value; if ("" !== temp) obj["vstmin"] = temp;

                return (obj);
            }
        }

        /**
         * Single input power system stabilizer.
         *
         * It is a modified version in order to allow representation of various vendors' implementations on PSS type 1A.
         *
         */
        class Pss1A extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.Pss1A;
                if (null == bucket)
                   cim_data.Pss1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pss1A[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "Pss1A";
                base.parse_element (/<cim:Pss1A.a1>([\s\S]*?)<\/cim:Pss1A.a1>/g, obj, "a1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a2>([\s\S]*?)<\/cim:Pss1A.a2>/g, obj, "a2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a3>([\s\S]*?)<\/cim:Pss1A.a3>/g, obj, "a3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a4>([\s\S]*?)<\/cim:Pss1A.a4>/g, obj, "a4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a5>([\s\S]*?)<\/cim:Pss1A.a5>/g, obj, "a5", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a6>([\s\S]*?)<\/cim:Pss1A.a6>/g, obj, "a6", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a7>([\s\S]*?)<\/cim:Pss1A.a7>/g, obj, "a7", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.a8>([\s\S]*?)<\/cim:Pss1A.a8>/g, obj, "a8", base.to_string, sub, context);
                base.parse_attribute (/<cim:Pss1A.inputSignalType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "inputSignalType", sub, context);
                base.parse_element (/<cim:Pss1A.kd>([\s\S]*?)<\/cim:Pss1A.kd>/g, obj, "kd", base.to_boolean, sub, context);
                base.parse_element (/<cim:Pss1A.ks>([\s\S]*?)<\/cim:Pss1A.ks>/g, obj, "ks", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t1>([\s\S]*?)<\/cim:Pss1A.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t2>([\s\S]*?)<\/cim:Pss1A.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t3>([\s\S]*?)<\/cim:Pss1A.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t4>([\s\S]*?)<\/cim:Pss1A.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t5>([\s\S]*?)<\/cim:Pss1A.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.t6>([\s\S]*?)<\/cim:Pss1A.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.tdelay>([\s\S]*?)<\/cim:Pss1A.tdelay>/g, obj, "tdelay", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.vcl>([\s\S]*?)<\/cim:Pss1A.vcl>/g, obj, "vcl", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.vcu>([\s\S]*?)<\/cim:Pss1A.vcu>/g, obj, "vcu", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.vrmax>([\s\S]*?)<\/cim:Pss1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:Pss1A.vrmin>([\s\S]*?)<\/cim:Pss1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                let bucket = context.parsed.Pss1A;
                if (null == bucket)
                   context.parsed.Pss1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "Pss1A", "a1", "a1",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a2", "a2",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a3", "a3",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a4", "a4",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a5", "a5",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a6", "a6",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a7", "a7",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "a8", "a8",  base.from_string, fields);
                base.export_attribute (obj, "Pss1A", "inputSignalType", "inputSignalType", fields);
                base.export_element (obj, "Pss1A", "kd", "kd",  base.from_boolean, fields);
                base.export_element (obj, "Pss1A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "tdelay", "tdelay",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "vcl", "vcl",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "vcu", "vcu",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "Pss1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Pss1A_collapse" aria-expanded="true" aria-controls="Pss1A_collapse" style="margin-left: 10px;">Pss1A</a></legend>
                    <div id="Pss1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#a1}}<div><b>a1</b>: {{a1}}</div>{{/a1}}
                    {{#a2}}<div><b>a2</b>: {{a2}}</div>{{/a2}}
                    {{#a3}}<div><b>a3</b>: {{a3}}</div>{{/a3}}
                    {{#a4}}<div><b>a4</b>: {{a4}}</div>{{/a4}}
                    {{#a5}}<div><b>a5</b>: {{a5}}</div>{{/a5}}
                    {{#a6}}<div><b>a6</b>: {{a6}}</div>{{/a6}}
                    {{#a7}}<div><b>a7</b>: {{a7}}</div>{{/a7}}
                    {{#a8}}<div><b>a8</b>: {{a8}}</div>{{/a8}}
                    {{#inputSignalType}}<div><b>inputSignalType</b>: {{inputSignalType}}</div>{{/inputSignalType}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#tdelay}}<div><b>tdelay</b>: {{tdelay}}</div>{{/tdelay}}
                    {{#vcl}}<div><b>vcl</b>: {{vcl}}</div>{{/vcl}}
                    {{#vcu}}<div><b>vcu</b>: {{vcu}}</div>{{/vcu}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["inputSignalTypeInputSignalKind"] = [{ id: '', selected: (!obj["inputSignalType"])}]; for (let property in InputSignalKind) obj["inputSignalTypeInputSignalKind"].push ({ id: property, selected: obj["inputSignalType"] && obj["inputSignalType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["inputSignalTypeInputSignalKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Pss1A_collapse" aria-expanded="true" aria-controls="{{id}}_Pss1A_collapse" style="margin-left: 10px;">Pss1A</a></legend>
                    <div id="{{id}}_Pss1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a1'>a1: </label><div class='col-sm-8'><input id='{{id}}_a1' class='form-control' type='text'{{#a1}} value='{{a1}}'{{/a1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a2'>a2: </label><div class='col-sm-8'><input id='{{id}}_a2' class='form-control' type='text'{{#a2}} value='{{a2}}'{{/a2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a3'>a3: </label><div class='col-sm-8'><input id='{{id}}_a3' class='form-control' type='text'{{#a3}} value='{{a3}}'{{/a3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a4'>a4: </label><div class='col-sm-8'><input id='{{id}}_a4' class='form-control' type='text'{{#a4}} value='{{a4}}'{{/a4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a5'>a5: </label><div class='col-sm-8'><input id='{{id}}_a5' class='form-control' type='text'{{#a5}} value='{{a5}}'{{/a5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a6'>a6: </label><div class='col-sm-8'><input id='{{id}}_a6' class='form-control' type='text'{{#a6}} value='{{a6}}'{{/a6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a7'>a7: </label><div class='col-sm-8'><input id='{{id}}_a7' class='form-control' type='text'{{#a7}} value='{{a7}}'{{/a7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a8'>a8: </label><div class='col-sm-8'><input id='{{id}}_a8' class='form-control' type='text'{{#a8}} value='{{a8}}'{{/a8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inputSignalType'>inputSignalType: </label><div class='col-sm-8'><select id='{{id}}_inputSignalType' class='form-control custom-select'>{{#inputSignalTypeInputSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/inputSignalTypeInputSignalKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_kd'>kd: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_kd' class='form-check-input' type='checkbox'{{#kd}} checked{{/kd}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdelay'>tdelay: </label><div class='col-sm-8'><input id='{{id}}_tdelay' class='form-control' type='text'{{#tdelay}} value='{{tdelay}}'{{/tdelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcl'>vcl: </label><div class='col-sm-8'><input id='{{id}}_vcl' class='form-control' type='text'{{#vcl}} value='{{vcl}}'{{/vcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcu'>vcu: </label><div class='col-sm-8'><input id='{{id}}_vcu' class='form-control' type='text'{{#vcu}} value='{{vcu}}'{{/vcu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "Pss1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a1").value; if ("" !== temp) obj["a1"] = temp;
                temp = document.getElementById (id + "_a2").value; if ("" !== temp) obj["a2"] = temp;
                temp = document.getElementById (id + "_a3").value; if ("" !== temp) obj["a3"] = temp;
                temp = document.getElementById (id + "_a4").value; if ("" !== temp) obj["a4"] = temp;
                temp = document.getElementById (id + "_a5").value; if ("" !== temp) obj["a5"] = temp;
                temp = document.getElementById (id + "_a6").value; if ("" !== temp) obj["a6"] = temp;
                temp = document.getElementById (id + "_a7").value; if ("" !== temp) obj["a7"] = temp;
                temp = document.getElementById (id + "_a8").value; if ("" !== temp) obj["a8"] = temp;
                temp = InputSignalKind[document.getElementById (id + "_inputSignalType").value]; if (temp) obj["inputSignalType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#InputSignalKind." + temp; else delete obj["inputSignalType"];
                temp = document.getElementById (id + "_kd").checked; if (temp) obj["kd"] = true;
                temp = document.getElementById (id + "_ks").value; if ("" !== temp) obj["ks"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_tdelay").value; if ("" !== temp) obj["tdelay"] = temp;
                temp = document.getElementById (id + "_vcl").value; if ("" !== temp) obj["vcl"] = temp;
                temp = document.getElementById (id + "_vcu").value; if ("" !== temp) obj["vcu"] = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" !== temp) obj["vrmax"] = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" !== temp) obj["vrmin"] = temp;

                return (obj);
            }
        }

        /**
         * Power system stabilizer part of an ABB excitation system.
         * [Footnote: ABB excitation systems are an example of suitable products available commercially.
         *
         * This information is given for the convenience of users of this document and does not constitute an endorsement by IEC of these products.]
         *
         */
        class PssSTAB2A extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssSTAB2A;
                if (null == bucket)
                   cim_data.PssSTAB2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssSTAB2A[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssSTAB2A";
                base.parse_element (/<cim:PssSTAB2A.hlim>([\s\S]*?)<\/cim:PssSTAB2A.hlim>/g, obj, "hlim", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.k2>([\s\S]*?)<\/cim:PssSTAB2A.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.k3>([\s\S]*?)<\/cim:PssSTAB2A.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.k4>([\s\S]*?)<\/cim:PssSTAB2A.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.k5>([\s\S]*?)<\/cim:PssSTAB2A.k5>/g, obj, "k5", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.t2>([\s\S]*?)<\/cim:PssSTAB2A.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.t3>([\s\S]*?)<\/cim:PssSTAB2A.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSTAB2A.t5>([\s\S]*?)<\/cim:PssSTAB2A.t5>/g, obj, "t5", base.to_string, sub, context);
                let bucket = context.parsed.PssSTAB2A;
                if (null == bucket)
                   context.parsed.PssSTAB2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssSTAB2A", "hlim", "hlim",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "k4", "k4",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "k5", "k5",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssSTAB2A", "t5", "t5",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssSTAB2A_collapse" aria-expanded="true" aria-controls="PssSTAB2A_collapse" style="margin-left: 10px;">PssSTAB2A</a></legend>
                    <div id="PssSTAB2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#hlim}}<div><b>hlim</b>: {{hlim}}</div>{{/hlim}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssSTAB2A_collapse" aria-expanded="true" aria-controls="{{id}}_PssSTAB2A_collapse" style="margin-left: 10px;">PssSTAB2A</a></legend>
                    <div id="{{id}}_PssSTAB2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hlim'>hlim: </label><div class='col-sm-8'><input id='{{id}}_hlim' class='form-control' type='text'{{#hlim}} value='{{hlim}}'{{/hlim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssSTAB2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_hlim").value; if ("" !== temp) obj["hlim"] = temp;
                temp = document.getElementById (id + "_k2").value; if ("" !== temp) obj["k2"] = temp;
                temp = document.getElementById (id + "_k3").value; if ("" !== temp) obj["k3"] = temp;
                temp = document.getElementById (id + "_k4").value; if ("" !== temp) obj["k4"] = temp;
                temp = document.getElementById (id + "_k5").value; if ("" !== temp) obj["k5"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;

                return (obj);
            }
        }

        /**
         * Siemens<sup>TM</sup> “H infinity” power system stabilizer with generator electrical power input.
         * [Footnote: Siemens "H infinity" power system stabilizers are an example of suitable products available commercially.
         *
         * This information is given for the convenience of users of this document and does not constitute an endorsement by IEC of these products.]
         *
         */
        class PssSH extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssSH;
                if (null == bucket)
                   cim_data.PssSH = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssSH[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssSH";
                base.parse_element (/<cim:PssSH.k>([\s\S]*?)<\/cim:PssSH.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.k0>([\s\S]*?)<\/cim:PssSH.k0>/g, obj, "k0", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.k1>([\s\S]*?)<\/cim:PssSH.k1>/g, obj, "k1", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.k2>([\s\S]*?)<\/cim:PssSH.k2>/g, obj, "k2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.k3>([\s\S]*?)<\/cim:PssSH.k3>/g, obj, "k3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.k4>([\s\S]*?)<\/cim:PssSH.k4>/g, obj, "k4", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.t1>([\s\S]*?)<\/cim:PssSH.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.t2>([\s\S]*?)<\/cim:PssSH.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.t3>([\s\S]*?)<\/cim:PssSH.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.t4>([\s\S]*?)<\/cim:PssSH.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.td>([\s\S]*?)<\/cim:PssSH.td>/g, obj, "td", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.vsmax>([\s\S]*?)<\/cim:PssSH.vsmax>/g, obj, "vsmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssSH.vsmin>([\s\S]*?)<\/cim:PssSH.vsmin>/g, obj, "vsmin", base.to_string, sub, context);
                let bucket = context.parsed.PssSH;
                if (null == bucket)
                   context.parsed.PssSH = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssSH", "k", "k",  base.from_string, fields);
                base.export_element (obj, "PssSH", "k0", "k0",  base.from_string, fields);
                base.export_element (obj, "PssSH", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "PssSH", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "PssSH", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "PssSH", "k4", "k4",  base.from_string, fields);
                base.export_element (obj, "PssSH", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssSH", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssSH", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssSH", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssSH", "td", "td",  base.from_string, fields);
                base.export_element (obj, "PssSH", "vsmax", "vsmax",  base.from_string, fields);
                base.export_element (obj, "PssSH", "vsmin", "vsmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssSH_collapse" aria-expanded="true" aria-controls="PssSH_collapse" style="margin-left: 10px;">PssSH</a></legend>
                    <div id="PssSH_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#k0}}<div><b>k0</b>: {{k0}}</div>{{/k0}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#vsmax}}<div><b>vsmax</b>: {{vsmax}}</div>{{/vsmax}}
                    {{#vsmin}}<div><b>vsmin</b>: {{vsmin}}</div>{{/vsmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssSH_collapse" aria-expanded="true" aria-controls="{{id}}_PssSH_collapse" style="margin-left: 10px;">PssSH</a></legend>
                    <div id="{{id}}_PssSH_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k0'>k0: </label><div class='col-sm-8'><input id='{{id}}_k0' class='form-control' type='text'{{#k0}} value='{{k0}}'{{/k0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmax'>vsmax: </label><div class='col-sm-8'><input id='{{id}}_vsmax' class='form-control' type='text'{{#vsmax}} value='{{vsmax}}'{{/vsmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vsmin'>vsmin: </label><div class='col-sm-8'><input id='{{id}}_vsmin' class='form-control' type='text'{{#vsmin}} value='{{vsmin}}'{{/vsmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssSH" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_k").value; if ("" !== temp) obj["k"] = temp;
                temp = document.getElementById (id + "_k0").value; if ("" !== temp) obj["k0"] = temp;
                temp = document.getElementById (id + "_k1").value; if ("" !== temp) obj["k1"] = temp;
                temp = document.getElementById (id + "_k2").value; if ("" !== temp) obj["k2"] = temp;
                temp = document.getElementById (id + "_k3").value; if ("" !== temp) obj["k3"] = temp;
                temp = document.getElementById (id + "_k4").value; if ("" !== temp) obj["k4"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_td").value; if ("" !== temp) obj["td"] = temp;
                temp = document.getElementById (id + "_vsmax").value; if ("" !== temp) obj["vsmax"] = temp;
                temp = document.getElementById (id + "_vsmin").value; if ("" !== temp) obj["vsmin"] = temp;

                return (obj);
            }
        }

        /**
         * Power system stabilizer typically associated with ExcELIN2 (though PssIEEE2B or Pss2B can also be used).
         *
         */
        class PssELIN2 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssELIN2;
                if (null == bucket)
                   cim_data.PssELIN2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssELIN2[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssELIN2";
                base.parse_element (/<cim:PssELIN2.apss>([\s\S]*?)<\/cim:PssELIN2.apss>/g, obj, "apss", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ks1>([\s\S]*?)<\/cim:PssELIN2.ks1>/g, obj, "ks1", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ks2>([\s\S]*?)<\/cim:PssELIN2.ks2>/g, obj, "ks2", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ppss>([\s\S]*?)<\/cim:PssELIN2.ppss>/g, obj, "ppss", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.psslim>([\s\S]*?)<\/cim:PssELIN2.psslim>/g, obj, "psslim", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts1>([\s\S]*?)<\/cim:PssELIN2.ts1>/g, obj, "ts1", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts2>([\s\S]*?)<\/cim:PssELIN2.ts2>/g, obj, "ts2", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts3>([\s\S]*?)<\/cim:PssELIN2.ts3>/g, obj, "ts3", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts4>([\s\S]*?)<\/cim:PssELIN2.ts4>/g, obj, "ts4", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts5>([\s\S]*?)<\/cim:PssELIN2.ts5>/g, obj, "ts5", base.to_string, sub, context);
                base.parse_element (/<cim:PssELIN2.ts6>([\s\S]*?)<\/cim:PssELIN2.ts6>/g, obj, "ts6", base.to_string, sub, context);
                let bucket = context.parsed.PssELIN2;
                if (null == bucket)
                   context.parsed.PssELIN2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssELIN2", "apss", "apss",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ks2", "ks2",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ppss", "ppss",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "psslim", "psslim",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts1", "ts1",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts2", "ts2",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts3", "ts3",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts4", "ts4",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts5", "ts5",  base.from_string, fields);
                base.export_element (obj, "PssELIN2", "ts6", "ts6",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssELIN2_collapse" aria-expanded="true" aria-controls="PssELIN2_collapse" style="margin-left: 10px;">PssELIN2</a></legend>
                    <div id="PssELIN2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#apss}}<div><b>apss</b>: {{apss}}</div>{{/apss}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#ks2}}<div><b>ks2</b>: {{ks2}}</div>{{/ks2}}
                    {{#ppss}}<div><b>ppss</b>: {{ppss}}</div>{{/ppss}}
                    {{#psslim}}<div><b>psslim</b>: {{psslim}}</div>{{/psslim}}
                    {{#ts1}}<div><b>ts1</b>: {{ts1}}</div>{{/ts1}}
                    {{#ts2}}<div><b>ts2</b>: {{ts2}}</div>{{/ts2}}
                    {{#ts3}}<div><b>ts3</b>: {{ts3}}</div>{{/ts3}}
                    {{#ts4}}<div><b>ts4</b>: {{ts4}}</div>{{/ts4}}
                    {{#ts5}}<div><b>ts5</b>: {{ts5}}</div>{{/ts5}}
                    {{#ts6}}<div><b>ts6</b>: {{ts6}}</div>{{/ts6}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssELIN2_collapse" aria-expanded="true" aria-controls="{{id}}_PssELIN2_collapse" style="margin-left: 10px;">PssELIN2</a></legend>
                    <div id="{{id}}_PssELIN2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_apss'>apss: </label><div class='col-sm-8'><input id='{{id}}_apss' class='form-control' type='text'{{#apss}} value='{{apss}}'{{/apss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks2'>ks2: </label><div class='col-sm-8'><input id='{{id}}_ks2' class='form-control' type='text'{{#ks2}} value='{{ks2}}'{{/ks2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ppss'>ppss: </label><div class='col-sm-8'><input id='{{id}}_ppss' class='form-control' type='text'{{#ppss}} value='{{ppss}}'{{/ppss}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_psslim'>psslim: </label><div class='col-sm-8'><input id='{{id}}_psslim' class='form-control' type='text'{{#psslim}} value='{{psslim}}'{{/psslim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts1'>ts1: </label><div class='col-sm-8'><input id='{{id}}_ts1' class='form-control' type='text'{{#ts1}} value='{{ts1}}'{{/ts1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts2'>ts2: </label><div class='col-sm-8'><input id='{{id}}_ts2' class='form-control' type='text'{{#ts2}} value='{{ts2}}'{{/ts2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts3'>ts3: </label><div class='col-sm-8'><input id='{{id}}_ts3' class='form-control' type='text'{{#ts3}} value='{{ts3}}'{{/ts3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts4'>ts4: </label><div class='col-sm-8'><input id='{{id}}_ts4' class='form-control' type='text'{{#ts4}} value='{{ts4}}'{{/ts4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts5'>ts5: </label><div class='col-sm-8'><input id='{{id}}_ts5' class='form-control' type='text'{{#ts5}} value='{{ts5}}'{{/ts5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts6'>ts6: </label><div class='col-sm-8'><input id='{{id}}_ts6' class='form-control' type='text'{{#ts6}} value='{{ts6}}'{{/ts6}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssELIN2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_apss").value; if ("" !== temp) obj["apss"] = temp;
                temp = document.getElementById (id + "_ks1").value; if ("" !== temp) obj["ks1"] = temp;
                temp = document.getElementById (id + "_ks2").value; if ("" !== temp) obj["ks2"] = temp;
                temp = document.getElementById (id + "_ppss").value; if ("" !== temp) obj["ppss"] = temp;
                temp = document.getElementById (id + "_psslim").value; if ("" !== temp) obj["psslim"] = temp;
                temp = document.getElementById (id + "_ts1").value; if ("" !== temp) obj["ts1"] = temp;
                temp = document.getElementById (id + "_ts2").value; if ("" !== temp) obj["ts2"] = temp;
                temp = document.getElementById (id + "_ts3").value; if ("" !== temp) obj["ts3"] = temp;
                temp = document.getElementById (id + "_ts4").value; if ("" !== temp) obj["ts4"] = temp;
                temp = document.getElementById (id + "_ts5").value; if ("" !== temp) obj["ts5"] = temp;
                temp = document.getElementById (id + "_ts6").value; if ("" !== temp) obj["ts6"] = temp;

                return (obj);
            }
        }

        /**
         * IEEE 421.5-2005 type PSS4B power system stabilizer.
         *
         * The PSS4B model represents a structure based on multiple working frequency bands. Three separate bands, respectively dedicated to the low-, intermediate- and high-frequency modes of oscillations, are used in this delta omega (speed input) PSS.
         * There is an error in the in IEEE 421.5-2005 PSS4B model: the <i>Pe</i> input should read –<i>Pe</i>. This implies that the input <i>Pe</i> needs to be multiplied by -1.
         * Reference: IEEE 4B 421.5-2005, 8.4.
         * Parameter details:
         * This model has 2 input signals. They have the following fixed types (expressed in terms of InputSignalKind values): the first one is of rotorAngleFrequencyDeviation type and the second one is of generatorElectricalPower type.
         *
         */
        class PssIEEE4B extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssIEEE4B;
                if (null == bucket)
                   cim_data.PssIEEE4B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssIEEE4B[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssIEEE4B";
                base.parse_element (/<cim:PssIEEE4B.bwh1>([\s\S]*?)<\/cim:PssIEEE4B.bwh1>/g, obj, "bwh1", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.bwh2>([\s\S]*?)<\/cim:PssIEEE4B.bwh2>/g, obj, "bwh2", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.bwl1>([\s\S]*?)<\/cim:PssIEEE4B.bwl1>/g, obj, "bwl1", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.bwl2>([\s\S]*?)<\/cim:PssIEEE4B.bwl2>/g, obj, "bwl2", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kh>([\s\S]*?)<\/cim:PssIEEE4B.kh>/g, obj, "kh", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kh1>([\s\S]*?)<\/cim:PssIEEE4B.kh1>/g, obj, "kh1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kh11>([\s\S]*?)<\/cim:PssIEEE4B.kh11>/g, obj, "kh11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kh17>([\s\S]*?)<\/cim:PssIEEE4B.kh17>/g, obj, "kh17", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kh2>([\s\S]*?)<\/cim:PssIEEE4B.kh2>/g, obj, "kh2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ki>([\s\S]*?)<\/cim:PssIEEE4B.ki>/g, obj, "ki", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ki1>([\s\S]*?)<\/cim:PssIEEE4B.ki1>/g, obj, "ki1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ki11>([\s\S]*?)<\/cim:PssIEEE4B.ki11>/g, obj, "ki11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ki17>([\s\S]*?)<\/cim:PssIEEE4B.ki17>/g, obj, "ki17", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ki2>([\s\S]*?)<\/cim:PssIEEE4B.ki2>/g, obj, "ki2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kl>([\s\S]*?)<\/cim:PssIEEE4B.kl>/g, obj, "kl", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kl1>([\s\S]*?)<\/cim:PssIEEE4B.kl1>/g, obj, "kl1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kl11>([\s\S]*?)<\/cim:PssIEEE4B.kl11>/g, obj, "kl11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kl17>([\s\S]*?)<\/cim:PssIEEE4B.kl17>/g, obj, "kl17", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.kl2>([\s\S]*?)<\/cim:PssIEEE4B.kl2>/g, obj, "kl2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.omeganh1>([\s\S]*?)<\/cim:PssIEEE4B.omeganh1>/g, obj, "omeganh1", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.omeganh2>([\s\S]*?)<\/cim:PssIEEE4B.omeganh2>/g, obj, "omeganh2", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.omeganl1>([\s\S]*?)<\/cim:PssIEEE4B.omeganl1>/g, obj, "omeganl1", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.omeganl2>([\s\S]*?)<\/cim:PssIEEE4B.omeganl2>/g, obj, "omeganl2", base.to_float, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th1>([\s\S]*?)<\/cim:PssIEEE4B.th1>/g, obj, "th1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th10>([\s\S]*?)<\/cim:PssIEEE4B.th10>/g, obj, "th10", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th11>([\s\S]*?)<\/cim:PssIEEE4B.th11>/g, obj, "th11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th12>([\s\S]*?)<\/cim:PssIEEE4B.th12>/g, obj, "th12", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th2>([\s\S]*?)<\/cim:PssIEEE4B.th2>/g, obj, "th2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th3>([\s\S]*?)<\/cim:PssIEEE4B.th3>/g, obj, "th3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th4>([\s\S]*?)<\/cim:PssIEEE4B.th4>/g, obj, "th4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th5>([\s\S]*?)<\/cim:PssIEEE4B.th5>/g, obj, "th5", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th6>([\s\S]*?)<\/cim:PssIEEE4B.th6>/g, obj, "th6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th7>([\s\S]*?)<\/cim:PssIEEE4B.th7>/g, obj, "th7", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th8>([\s\S]*?)<\/cim:PssIEEE4B.th8>/g, obj, "th8", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.th9>([\s\S]*?)<\/cim:PssIEEE4B.th9>/g, obj, "th9", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti1>([\s\S]*?)<\/cim:PssIEEE4B.ti1>/g, obj, "ti1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti10>([\s\S]*?)<\/cim:PssIEEE4B.ti10>/g, obj, "ti10", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti11>([\s\S]*?)<\/cim:PssIEEE4B.ti11>/g, obj, "ti11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti12>([\s\S]*?)<\/cim:PssIEEE4B.ti12>/g, obj, "ti12", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti2>([\s\S]*?)<\/cim:PssIEEE4B.ti2>/g, obj, "ti2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti3>([\s\S]*?)<\/cim:PssIEEE4B.ti3>/g, obj, "ti3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti4>([\s\S]*?)<\/cim:PssIEEE4B.ti4>/g, obj, "ti4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti5>([\s\S]*?)<\/cim:PssIEEE4B.ti5>/g, obj, "ti5", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti6>([\s\S]*?)<\/cim:PssIEEE4B.ti6>/g, obj, "ti6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti7>([\s\S]*?)<\/cim:PssIEEE4B.ti7>/g, obj, "ti7", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti8>([\s\S]*?)<\/cim:PssIEEE4B.ti8>/g, obj, "ti8", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.ti9>([\s\S]*?)<\/cim:PssIEEE4B.ti9>/g, obj, "ti9", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl1>([\s\S]*?)<\/cim:PssIEEE4B.tl1>/g, obj, "tl1", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl10>([\s\S]*?)<\/cim:PssIEEE4B.tl10>/g, obj, "tl10", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl11>([\s\S]*?)<\/cim:PssIEEE4B.tl11>/g, obj, "tl11", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl12>([\s\S]*?)<\/cim:PssIEEE4B.tl12>/g, obj, "tl12", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl2>([\s\S]*?)<\/cim:PssIEEE4B.tl2>/g, obj, "tl2", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl3>([\s\S]*?)<\/cim:PssIEEE4B.tl3>/g, obj, "tl3", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl4>([\s\S]*?)<\/cim:PssIEEE4B.tl4>/g, obj, "tl4", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl5>([\s\S]*?)<\/cim:PssIEEE4B.tl5>/g, obj, "tl5", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl6>([\s\S]*?)<\/cim:PssIEEE4B.tl6>/g, obj, "tl6", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl7>([\s\S]*?)<\/cim:PssIEEE4B.tl7>/g, obj, "tl7", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl8>([\s\S]*?)<\/cim:PssIEEE4B.tl8>/g, obj, "tl8", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.tl9>([\s\S]*?)<\/cim:PssIEEE4B.tl9>/g, obj, "tl9", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vhmax>([\s\S]*?)<\/cim:PssIEEE4B.vhmax>/g, obj, "vhmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vhmin>([\s\S]*?)<\/cim:PssIEEE4B.vhmin>/g, obj, "vhmin", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vimax>([\s\S]*?)<\/cim:PssIEEE4B.vimax>/g, obj, "vimax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vimin>([\s\S]*?)<\/cim:PssIEEE4B.vimin>/g, obj, "vimin", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vlmax>([\s\S]*?)<\/cim:PssIEEE4B.vlmax>/g, obj, "vlmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vlmin>([\s\S]*?)<\/cim:PssIEEE4B.vlmin>/g, obj, "vlmin", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vstmax>([\s\S]*?)<\/cim:PssIEEE4B.vstmax>/g, obj, "vstmax", base.to_string, sub, context);
                base.parse_element (/<cim:PssIEEE4B.vstmin>([\s\S]*?)<\/cim:PssIEEE4B.vstmin>/g, obj, "vstmin", base.to_string, sub, context);
                let bucket = context.parsed.PssIEEE4B;
                if (null == bucket)
                   context.parsed.PssIEEE4B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssIEEE4B", "bwh1", "bwh1",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "bwh2", "bwh2",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "bwl1", "bwl1",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "bwl2", "bwl2",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kh1", "kh1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kh11", "kh11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kh17", "kh17",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kh2", "kh2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ki1", "ki1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ki11", "ki11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ki17", "ki17",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ki2", "ki2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kl", "kl",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kl1", "kl1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kl11", "kl11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kl17", "kl17",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "kl2", "kl2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "omeganh1", "omeganh1",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "omeganh2", "omeganh2",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "omeganl1", "omeganl1",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "omeganl2", "omeganl2",  base.from_float, fields);
                base.export_element (obj, "PssIEEE4B", "th1", "th1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th10", "th10",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th11", "th11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th12", "th12",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th2", "th2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th3", "th3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th4", "th4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th5", "th5",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th6", "th6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th7", "th7",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th8", "th8",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "th9", "th9",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti1", "ti1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti10", "ti10",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti11", "ti11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti12", "ti12",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti2", "ti2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti3", "ti3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti4", "ti4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti5", "ti5",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti6", "ti6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti7", "ti7",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti8", "ti8",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "ti9", "ti9",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl1", "tl1",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl10", "tl10",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl11", "tl11",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl12", "tl12",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl2", "tl2",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl3", "tl3",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl4", "tl4",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl5", "tl5",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl6", "tl6",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl7", "tl7",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl8", "tl8",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "tl9", "tl9",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vhmax", "vhmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vhmin", "vhmin",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vlmax", "vlmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vlmin", "vlmin",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vstmax", "vstmax",  base.from_string, fields);
                base.export_element (obj, "PssIEEE4B", "vstmin", "vstmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssIEEE4B_collapse" aria-expanded="true" aria-controls="PssIEEE4B_collapse" style="margin-left: 10px;">PssIEEE4B</a></legend>
                    <div id="PssIEEE4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#bwh1}}<div><b>bwh1</b>: {{bwh1}}</div>{{/bwh1}}
                    {{#bwh2}}<div><b>bwh2</b>: {{bwh2}}</div>{{/bwh2}}
                    {{#bwl1}}<div><b>bwl1</b>: {{bwl1}}</div>{{/bwl1}}
                    {{#bwl2}}<div><b>bwl2</b>: {{bwl2}}</div>{{/bwl2}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#kh1}}<div><b>kh1</b>: {{kh1}}</div>{{/kh1}}
                    {{#kh11}}<div><b>kh11</b>: {{kh11}}</div>{{/kh11}}
                    {{#kh17}}<div><b>kh17</b>: {{kh17}}</div>{{/kh17}}
                    {{#kh2}}<div><b>kh2</b>: {{kh2}}</div>{{/kh2}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#ki1}}<div><b>ki1</b>: {{ki1}}</div>{{/ki1}}
                    {{#ki11}}<div><b>ki11</b>: {{ki11}}</div>{{/ki11}}
                    {{#ki17}}<div><b>ki17</b>: {{ki17}}</div>{{/ki17}}
                    {{#ki2}}<div><b>ki2</b>: {{ki2}}</div>{{/ki2}}
                    {{#kl}}<div><b>kl</b>: {{kl}}</div>{{/kl}}
                    {{#kl1}}<div><b>kl1</b>: {{kl1}}</div>{{/kl1}}
                    {{#kl11}}<div><b>kl11</b>: {{kl11}}</div>{{/kl11}}
                    {{#kl17}}<div><b>kl17</b>: {{kl17}}</div>{{/kl17}}
                    {{#kl2}}<div><b>kl2</b>: {{kl2}}</div>{{/kl2}}
                    {{#omeganh1}}<div><b>omeganh1</b>: {{omeganh1}}</div>{{/omeganh1}}
                    {{#omeganh2}}<div><b>omeganh2</b>: {{omeganh2}}</div>{{/omeganh2}}
                    {{#omeganl1}}<div><b>omeganl1</b>: {{omeganl1}}</div>{{/omeganl1}}
                    {{#omeganl2}}<div><b>omeganl2</b>: {{omeganl2}}</div>{{/omeganl2}}
                    {{#th1}}<div><b>th1</b>: {{th1}}</div>{{/th1}}
                    {{#th10}}<div><b>th10</b>: {{th10}}</div>{{/th10}}
                    {{#th11}}<div><b>th11</b>: {{th11}}</div>{{/th11}}
                    {{#th12}}<div><b>th12</b>: {{th12}}</div>{{/th12}}
                    {{#th2}}<div><b>th2</b>: {{th2}}</div>{{/th2}}
                    {{#th3}}<div><b>th3</b>: {{th3}}</div>{{/th3}}
                    {{#th4}}<div><b>th4</b>: {{th4}}</div>{{/th4}}
                    {{#th5}}<div><b>th5</b>: {{th5}}</div>{{/th5}}
                    {{#th6}}<div><b>th6</b>: {{th6}}</div>{{/th6}}
                    {{#th7}}<div><b>th7</b>: {{th7}}</div>{{/th7}}
                    {{#th8}}<div><b>th8</b>: {{th8}}</div>{{/th8}}
                    {{#th9}}<div><b>th9</b>: {{th9}}</div>{{/th9}}
                    {{#ti1}}<div><b>ti1</b>: {{ti1}}</div>{{/ti1}}
                    {{#ti10}}<div><b>ti10</b>: {{ti10}}</div>{{/ti10}}
                    {{#ti11}}<div><b>ti11</b>: {{ti11}}</div>{{/ti11}}
                    {{#ti12}}<div><b>ti12</b>: {{ti12}}</div>{{/ti12}}
                    {{#ti2}}<div><b>ti2</b>: {{ti2}}</div>{{/ti2}}
                    {{#ti3}}<div><b>ti3</b>: {{ti3}}</div>{{/ti3}}
                    {{#ti4}}<div><b>ti4</b>: {{ti4}}</div>{{/ti4}}
                    {{#ti5}}<div><b>ti5</b>: {{ti5}}</div>{{/ti5}}
                    {{#ti6}}<div><b>ti6</b>: {{ti6}}</div>{{/ti6}}
                    {{#ti7}}<div><b>ti7</b>: {{ti7}}</div>{{/ti7}}
                    {{#ti8}}<div><b>ti8</b>: {{ti8}}</div>{{/ti8}}
                    {{#ti9}}<div><b>ti9</b>: {{ti9}}</div>{{/ti9}}
                    {{#tl1}}<div><b>tl1</b>: {{tl1}}</div>{{/tl1}}
                    {{#tl10}}<div><b>tl10</b>: {{tl10}}</div>{{/tl10}}
                    {{#tl11}}<div><b>tl11</b>: {{tl11}}</div>{{/tl11}}
                    {{#tl12}}<div><b>tl12</b>: {{tl12}}</div>{{/tl12}}
                    {{#tl2}}<div><b>tl2</b>: {{tl2}}</div>{{/tl2}}
                    {{#tl3}}<div><b>tl3</b>: {{tl3}}</div>{{/tl3}}
                    {{#tl4}}<div><b>tl4</b>: {{tl4}}</div>{{/tl4}}
                    {{#tl5}}<div><b>tl5</b>: {{tl5}}</div>{{/tl5}}
                    {{#tl6}}<div><b>tl6</b>: {{tl6}}</div>{{/tl6}}
                    {{#tl7}}<div><b>tl7</b>: {{tl7}}</div>{{/tl7}}
                    {{#tl8}}<div><b>tl8</b>: {{tl8}}</div>{{/tl8}}
                    {{#tl9}}<div><b>tl9</b>: {{tl9}}</div>{{/tl9}}
                    {{#vhmax}}<div><b>vhmax</b>: {{vhmax}}</div>{{/vhmax}}
                    {{#vhmin}}<div><b>vhmin</b>: {{vhmin}}</div>{{/vhmin}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vlmax}}<div><b>vlmax</b>: {{vlmax}}</div>{{/vlmax}}
                    {{#vlmin}}<div><b>vlmin</b>: {{vlmin}}</div>{{/vlmin}}
                    {{#vstmax}}<div><b>vstmax</b>: {{vstmax}}</div>{{/vstmax}}
                    {{#vstmin}}<div><b>vstmin</b>: {{vstmin}}</div>{{/vstmin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssIEEE4B_collapse" aria-expanded="true" aria-controls="{{id}}_PssIEEE4B_collapse" style="margin-left: 10px;">PssIEEE4B</a></legend>
                    <div id="{{id}}_PssIEEE4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bwh1'>bwh1: </label><div class='col-sm-8'><input id='{{id}}_bwh1' class='form-control' type='text'{{#bwh1}} value='{{bwh1}}'{{/bwh1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bwh2'>bwh2: </label><div class='col-sm-8'><input id='{{id}}_bwh2' class='form-control' type='text'{{#bwh2}} value='{{bwh2}}'{{/bwh2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bwl1'>bwl1: </label><div class='col-sm-8'><input id='{{id}}_bwl1' class='form-control' type='text'{{#bwl1}} value='{{bwl1}}'{{/bwl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bwl2'>bwl2: </label><div class='col-sm-8'><input id='{{id}}_bwl2' class='form-control' type='text'{{#bwl2}} value='{{bwl2}}'{{/bwl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh1'>kh1: </label><div class='col-sm-8'><input id='{{id}}_kh1' class='form-control' type='text'{{#kh1}} value='{{kh1}}'{{/kh1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh11'>kh11: </label><div class='col-sm-8'><input id='{{id}}_kh11' class='form-control' type='text'{{#kh11}} value='{{kh11}}'{{/kh11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh17'>kh17: </label><div class='col-sm-8'><input id='{{id}}_kh17' class='form-control' type='text'{{#kh17}} value='{{kh17}}'{{/kh17}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh2'>kh2: </label><div class='col-sm-8'><input id='{{id}}_kh2' class='form-control' type='text'{{#kh2}} value='{{kh2}}'{{/kh2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki1'>ki1: </label><div class='col-sm-8'><input id='{{id}}_ki1' class='form-control' type='text'{{#ki1}} value='{{ki1}}'{{/ki1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki11'>ki11: </label><div class='col-sm-8'><input id='{{id}}_ki11' class='form-control' type='text'{{#ki11}} value='{{ki11}}'{{/ki11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki17'>ki17: </label><div class='col-sm-8'><input id='{{id}}_ki17' class='form-control' type='text'{{#ki17}} value='{{ki17}}'{{/ki17}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki2'>ki2: </label><div class='col-sm-8'><input id='{{id}}_ki2' class='form-control' type='text'{{#ki2}} value='{{ki2}}'{{/ki2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl'>kl: </label><div class='col-sm-8'><input id='{{id}}_kl' class='form-control' type='text'{{#kl}} value='{{kl}}'{{/kl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl1'>kl1: </label><div class='col-sm-8'><input id='{{id}}_kl1' class='form-control' type='text'{{#kl1}} value='{{kl1}}'{{/kl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl11'>kl11: </label><div class='col-sm-8'><input id='{{id}}_kl11' class='form-control' type='text'{{#kl11}} value='{{kl11}}'{{/kl11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl17'>kl17: </label><div class='col-sm-8'><input id='{{id}}_kl17' class='form-control' type='text'{{#kl17}} value='{{kl17}}'{{/kl17}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl2'>kl2: </label><div class='col-sm-8'><input id='{{id}}_kl2' class='form-control' type='text'{{#kl2}} value='{{kl2}}'{{/kl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omeganh1'>omeganh1: </label><div class='col-sm-8'><input id='{{id}}_omeganh1' class='form-control' type='text'{{#omeganh1}} value='{{omeganh1}}'{{/omeganh1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omeganh2'>omeganh2: </label><div class='col-sm-8'><input id='{{id}}_omeganh2' class='form-control' type='text'{{#omeganh2}} value='{{omeganh2}}'{{/omeganh2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omeganl1'>omeganl1: </label><div class='col-sm-8'><input id='{{id}}_omeganl1' class='form-control' type='text'{{#omeganl1}} value='{{omeganl1}}'{{/omeganl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omeganl2'>omeganl2: </label><div class='col-sm-8'><input id='{{id}}_omeganl2' class='form-control' type='text'{{#omeganl2}} value='{{omeganl2}}'{{/omeganl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th1'>th1: </label><div class='col-sm-8'><input id='{{id}}_th1' class='form-control' type='text'{{#th1}} value='{{th1}}'{{/th1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th10'>th10: </label><div class='col-sm-8'><input id='{{id}}_th10' class='form-control' type='text'{{#th10}} value='{{th10}}'{{/th10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th11'>th11: </label><div class='col-sm-8'><input id='{{id}}_th11' class='form-control' type='text'{{#th11}} value='{{th11}}'{{/th11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th12'>th12: </label><div class='col-sm-8'><input id='{{id}}_th12' class='form-control' type='text'{{#th12}} value='{{th12}}'{{/th12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th2'>th2: </label><div class='col-sm-8'><input id='{{id}}_th2' class='form-control' type='text'{{#th2}} value='{{th2}}'{{/th2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th3'>th3: </label><div class='col-sm-8'><input id='{{id}}_th3' class='form-control' type='text'{{#th3}} value='{{th3}}'{{/th3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th4'>th4: </label><div class='col-sm-8'><input id='{{id}}_th4' class='form-control' type='text'{{#th4}} value='{{th4}}'{{/th4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th5'>th5: </label><div class='col-sm-8'><input id='{{id}}_th5' class='form-control' type='text'{{#th5}} value='{{th5}}'{{/th5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th6'>th6: </label><div class='col-sm-8'><input id='{{id}}_th6' class='form-control' type='text'{{#th6}} value='{{th6}}'{{/th6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th7'>th7: </label><div class='col-sm-8'><input id='{{id}}_th7' class='form-control' type='text'{{#th7}} value='{{th7}}'{{/th7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th8'>th8: </label><div class='col-sm-8'><input id='{{id}}_th8' class='form-control' type='text'{{#th8}} value='{{th8}}'{{/th8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th9'>th9: </label><div class='col-sm-8'><input id='{{id}}_th9' class='form-control' type='text'{{#th9}} value='{{th9}}'{{/th9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti1'>ti1: </label><div class='col-sm-8'><input id='{{id}}_ti1' class='form-control' type='text'{{#ti1}} value='{{ti1}}'{{/ti1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti10'>ti10: </label><div class='col-sm-8'><input id='{{id}}_ti10' class='form-control' type='text'{{#ti10}} value='{{ti10}}'{{/ti10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti11'>ti11: </label><div class='col-sm-8'><input id='{{id}}_ti11' class='form-control' type='text'{{#ti11}} value='{{ti11}}'{{/ti11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti12'>ti12: </label><div class='col-sm-8'><input id='{{id}}_ti12' class='form-control' type='text'{{#ti12}} value='{{ti12}}'{{/ti12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti2'>ti2: </label><div class='col-sm-8'><input id='{{id}}_ti2' class='form-control' type='text'{{#ti2}} value='{{ti2}}'{{/ti2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti3'>ti3: </label><div class='col-sm-8'><input id='{{id}}_ti3' class='form-control' type='text'{{#ti3}} value='{{ti3}}'{{/ti3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti4'>ti4: </label><div class='col-sm-8'><input id='{{id}}_ti4' class='form-control' type='text'{{#ti4}} value='{{ti4}}'{{/ti4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti5'>ti5: </label><div class='col-sm-8'><input id='{{id}}_ti5' class='form-control' type='text'{{#ti5}} value='{{ti5}}'{{/ti5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti6'>ti6: </label><div class='col-sm-8'><input id='{{id}}_ti6' class='form-control' type='text'{{#ti6}} value='{{ti6}}'{{/ti6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti7'>ti7: </label><div class='col-sm-8'><input id='{{id}}_ti7' class='form-control' type='text'{{#ti7}} value='{{ti7}}'{{/ti7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti8'>ti8: </label><div class='col-sm-8'><input id='{{id}}_ti8' class='form-control' type='text'{{#ti8}} value='{{ti8}}'{{/ti8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti9'>ti9: </label><div class='col-sm-8'><input id='{{id}}_ti9' class='form-control' type='text'{{#ti9}} value='{{ti9}}'{{/ti9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl1'>tl1: </label><div class='col-sm-8'><input id='{{id}}_tl1' class='form-control' type='text'{{#tl1}} value='{{tl1}}'{{/tl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl10'>tl10: </label><div class='col-sm-8'><input id='{{id}}_tl10' class='form-control' type='text'{{#tl10}} value='{{tl10}}'{{/tl10}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl11'>tl11: </label><div class='col-sm-8'><input id='{{id}}_tl11' class='form-control' type='text'{{#tl11}} value='{{tl11}}'{{/tl11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl12'>tl12: </label><div class='col-sm-8'><input id='{{id}}_tl12' class='form-control' type='text'{{#tl12}} value='{{tl12}}'{{/tl12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl2'>tl2: </label><div class='col-sm-8'><input id='{{id}}_tl2' class='form-control' type='text'{{#tl2}} value='{{tl2}}'{{/tl2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl3'>tl3: </label><div class='col-sm-8'><input id='{{id}}_tl3' class='form-control' type='text'{{#tl3}} value='{{tl3}}'{{/tl3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl4'>tl4: </label><div class='col-sm-8'><input id='{{id}}_tl4' class='form-control' type='text'{{#tl4}} value='{{tl4}}'{{/tl4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl5'>tl5: </label><div class='col-sm-8'><input id='{{id}}_tl5' class='form-control' type='text'{{#tl5}} value='{{tl5}}'{{/tl5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl6'>tl6: </label><div class='col-sm-8'><input id='{{id}}_tl6' class='form-control' type='text'{{#tl6}} value='{{tl6}}'{{/tl6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl7'>tl7: </label><div class='col-sm-8'><input id='{{id}}_tl7' class='form-control' type='text'{{#tl7}} value='{{tl7}}'{{/tl7}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl8'>tl8: </label><div class='col-sm-8'><input id='{{id}}_tl8' class='form-control' type='text'{{#tl8}} value='{{tl8}}'{{/tl8}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tl9'>tl9: </label><div class='col-sm-8'><input id='{{id}}_tl9' class='form-control' type='text'{{#tl9}} value='{{tl9}}'{{/tl9}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vhmax'>vhmax: </label><div class='col-sm-8'><input id='{{id}}_vhmax' class='form-control' type='text'{{#vhmax}} value='{{vhmax}}'{{/vhmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vhmin'>vhmin: </label><div class='col-sm-8'><input id='{{id}}_vhmin' class='form-control' type='text'{{#vhmin}} value='{{vhmin}}'{{/vhmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vlmax'>vlmax: </label><div class='col-sm-8'><input id='{{id}}_vlmax' class='form-control' type='text'{{#vlmax}} value='{{vlmax}}'{{/vlmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vlmin'>vlmin: </label><div class='col-sm-8'><input id='{{id}}_vlmin' class='form-control' type='text'{{#vlmin}} value='{{vlmin}}'{{/vlmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmax'>vstmax: </label><div class='col-sm-8'><input id='{{id}}_vstmax' class='form-control' type='text'{{#vstmax}} value='{{vstmax}}'{{/vstmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vstmin'>vstmin: </label><div class='col-sm-8'><input id='{{id}}_vstmin' class='form-control' type='text'{{#vstmin}} value='{{vstmin}}'{{/vstmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssIEEE4B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bwh1").value; if ("" !== temp) obj["bwh1"] = temp;
                temp = document.getElementById (id + "_bwh2").value; if ("" !== temp) obj["bwh2"] = temp;
                temp = document.getElementById (id + "_bwl1").value; if ("" !== temp) obj["bwl1"] = temp;
                temp = document.getElementById (id + "_bwl2").value; if ("" !== temp) obj["bwl2"] = temp;
                temp = document.getElementById (id + "_kh").value; if ("" !== temp) obj["kh"] = temp;
                temp = document.getElementById (id + "_kh1").value; if ("" !== temp) obj["kh1"] = temp;
                temp = document.getElementById (id + "_kh11").value; if ("" !== temp) obj["kh11"] = temp;
                temp = document.getElementById (id + "_kh17").value; if ("" !== temp) obj["kh17"] = temp;
                temp = document.getElementById (id + "_kh2").value; if ("" !== temp) obj["kh2"] = temp;
                temp = document.getElementById (id + "_ki").value; if ("" !== temp) obj["ki"] = temp;
                temp = document.getElementById (id + "_ki1").value; if ("" !== temp) obj["ki1"] = temp;
                temp = document.getElementById (id + "_ki11").value; if ("" !== temp) obj["ki11"] = temp;
                temp = document.getElementById (id + "_ki17").value; if ("" !== temp) obj["ki17"] = temp;
                temp = document.getElementById (id + "_ki2").value; if ("" !== temp) obj["ki2"] = temp;
                temp = document.getElementById (id + "_kl").value; if ("" !== temp) obj["kl"] = temp;
                temp = document.getElementById (id + "_kl1").value; if ("" !== temp) obj["kl1"] = temp;
                temp = document.getElementById (id + "_kl11").value; if ("" !== temp) obj["kl11"] = temp;
                temp = document.getElementById (id + "_kl17").value; if ("" !== temp) obj["kl17"] = temp;
                temp = document.getElementById (id + "_kl2").value; if ("" !== temp) obj["kl2"] = temp;
                temp = document.getElementById (id + "_omeganh1").value; if ("" !== temp) obj["omeganh1"] = temp;
                temp = document.getElementById (id + "_omeganh2").value; if ("" !== temp) obj["omeganh2"] = temp;
                temp = document.getElementById (id + "_omeganl1").value; if ("" !== temp) obj["omeganl1"] = temp;
                temp = document.getElementById (id + "_omeganl2").value; if ("" !== temp) obj["omeganl2"] = temp;
                temp = document.getElementById (id + "_th1").value; if ("" !== temp) obj["th1"] = temp;
                temp = document.getElementById (id + "_th10").value; if ("" !== temp) obj["th10"] = temp;
                temp = document.getElementById (id + "_th11").value; if ("" !== temp) obj["th11"] = temp;
                temp = document.getElementById (id + "_th12").value; if ("" !== temp) obj["th12"] = temp;
                temp = document.getElementById (id + "_th2").value; if ("" !== temp) obj["th2"] = temp;
                temp = document.getElementById (id + "_th3").value; if ("" !== temp) obj["th3"] = temp;
                temp = document.getElementById (id + "_th4").value; if ("" !== temp) obj["th4"] = temp;
                temp = document.getElementById (id + "_th5").value; if ("" !== temp) obj["th5"] = temp;
                temp = document.getElementById (id + "_th6").value; if ("" !== temp) obj["th6"] = temp;
                temp = document.getElementById (id + "_th7").value; if ("" !== temp) obj["th7"] = temp;
                temp = document.getElementById (id + "_th8").value; if ("" !== temp) obj["th8"] = temp;
                temp = document.getElementById (id + "_th9").value; if ("" !== temp) obj["th9"] = temp;
                temp = document.getElementById (id + "_ti1").value; if ("" !== temp) obj["ti1"] = temp;
                temp = document.getElementById (id + "_ti10").value; if ("" !== temp) obj["ti10"] = temp;
                temp = document.getElementById (id + "_ti11").value; if ("" !== temp) obj["ti11"] = temp;
                temp = document.getElementById (id + "_ti12").value; if ("" !== temp) obj["ti12"] = temp;
                temp = document.getElementById (id + "_ti2").value; if ("" !== temp) obj["ti2"] = temp;
                temp = document.getElementById (id + "_ti3").value; if ("" !== temp) obj["ti3"] = temp;
                temp = document.getElementById (id + "_ti4").value; if ("" !== temp) obj["ti4"] = temp;
                temp = document.getElementById (id + "_ti5").value; if ("" !== temp) obj["ti5"] = temp;
                temp = document.getElementById (id + "_ti6").value; if ("" !== temp) obj["ti6"] = temp;
                temp = document.getElementById (id + "_ti7").value; if ("" !== temp) obj["ti7"] = temp;
                temp = document.getElementById (id + "_ti8").value; if ("" !== temp) obj["ti8"] = temp;
                temp = document.getElementById (id + "_ti9").value; if ("" !== temp) obj["ti9"] = temp;
                temp = document.getElementById (id + "_tl1").value; if ("" !== temp) obj["tl1"] = temp;
                temp = document.getElementById (id + "_tl10").value; if ("" !== temp) obj["tl10"] = temp;
                temp = document.getElementById (id + "_tl11").value; if ("" !== temp) obj["tl11"] = temp;
                temp = document.getElementById (id + "_tl12").value; if ("" !== temp) obj["tl12"] = temp;
                temp = document.getElementById (id + "_tl2").value; if ("" !== temp) obj["tl2"] = temp;
                temp = document.getElementById (id + "_tl3").value; if ("" !== temp) obj["tl3"] = temp;
                temp = document.getElementById (id + "_tl4").value; if ("" !== temp) obj["tl4"] = temp;
                temp = document.getElementById (id + "_tl5").value; if ("" !== temp) obj["tl5"] = temp;
                temp = document.getElementById (id + "_tl6").value; if ("" !== temp) obj["tl6"] = temp;
                temp = document.getElementById (id + "_tl7").value; if ("" !== temp) obj["tl7"] = temp;
                temp = document.getElementById (id + "_tl8").value; if ("" !== temp) obj["tl8"] = temp;
                temp = document.getElementById (id + "_tl9").value; if ("" !== temp) obj["tl9"] = temp;
                temp = document.getElementById (id + "_vhmax").value; if ("" !== temp) obj["vhmax"] = temp;
                temp = document.getElementById (id + "_vhmin").value; if ("" !== temp) obj["vhmin"] = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" !== temp) obj["vimax"] = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" !== temp) obj["vimin"] = temp;
                temp = document.getElementById (id + "_vlmax").value; if ("" !== temp) obj["vlmax"] = temp;
                temp = document.getElementById (id + "_vlmin").value; if ("" !== temp) obj["vlmin"] = temp;
                temp = document.getElementById (id + "_vstmax").value; if ("" !== temp) obj["vstmax"] = temp;
                temp = document.getElementById (id + "_vstmin").value; if ("" !== temp) obj["vstmin"] = temp;

                return (obj);
            }
        }

        /**
         * PTI microprocessor-based stabilizer type 3.
         *
         */
        class PssPTIST3 extends PowerSystemStabilizerDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PssPTIST3;
                if (null == bucket)
                   cim_data.PssPTIST3 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PssPTIST3[obj.id];
            }

            parse (context, sub)
            {
                let obj = PowerSystemStabilizerDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "PssPTIST3";
                base.parse_element (/<cim:PssPTIST3.a0>([\s\S]*?)<\/cim:PssPTIST3.a0>/g, obj, "a0", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.a1>([\s\S]*?)<\/cim:PssPTIST3.a1>/g, obj, "a1", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.a2>([\s\S]*?)<\/cim:PssPTIST3.a2>/g, obj, "a2", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.a3>([\s\S]*?)<\/cim:PssPTIST3.a3>/g, obj, "a3", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.a4>([\s\S]*?)<\/cim:PssPTIST3.a4>/g, obj, "a4", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.a5>([\s\S]*?)<\/cim:PssPTIST3.a5>/g, obj, "a5", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.al>([\s\S]*?)<\/cim:PssPTIST3.al>/g, obj, "al", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.athres>([\s\S]*?)<\/cim:PssPTIST3.athres>/g, obj, "athres", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b0>([\s\S]*?)<\/cim:PssPTIST3.b0>/g, obj, "b0", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b1>([\s\S]*?)<\/cim:PssPTIST3.b1>/g, obj, "b1", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b2>([\s\S]*?)<\/cim:PssPTIST3.b2>/g, obj, "b2", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b3>([\s\S]*?)<\/cim:PssPTIST3.b3>/g, obj, "b3", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b4>([\s\S]*?)<\/cim:PssPTIST3.b4>/g, obj, "b4", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.b5>([\s\S]*?)<\/cim:PssPTIST3.b5>/g, obj, "b5", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.dl>([\s\S]*?)<\/cim:PssPTIST3.dl>/g, obj, "dl", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.dtc>([\s\S]*?)<\/cim:PssPTIST3.dtc>/g, obj, "dtc", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.dtf>([\s\S]*?)<\/cim:PssPTIST3.dtf>/g, obj, "dtf", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.dtp>([\s\S]*?)<\/cim:PssPTIST3.dtp>/g, obj, "dtp", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.isw>([\s\S]*?)<\/cim:PssPTIST3.isw>/g, obj, "isw", base.to_boolean, sub, context);
                base.parse_element (/<cim:PssPTIST3.k>([\s\S]*?)<\/cim:PssPTIST3.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.lthres>([\s\S]*?)<\/cim:PssPTIST3.lthres>/g, obj, "lthres", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.m>([\s\S]*?)<\/cim:PssPTIST3.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.nav>([\s\S]*?)<\/cim:PssPTIST3.nav>/g, obj, "nav", base.to_float, sub, context);
                base.parse_element (/<cim:PssPTIST3.ncl>([\s\S]*?)<\/cim:PssPTIST3.ncl>/g, obj, "ncl", base.to_float, sub, context);
                base.parse_element (/<cim:PssPTIST3.ncr>([\s\S]*?)<\/cim:PssPTIST3.ncr>/g, obj, "ncr", base.to_float, sub, context);
                base.parse_element (/<cim:PssPTIST3.pmin>([\s\S]*?)<\/cim:PssPTIST3.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t1>([\s\S]*?)<\/cim:PssPTIST3.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t2>([\s\S]*?)<\/cim:PssPTIST3.t2>/g, obj, "t2", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t3>([\s\S]*?)<\/cim:PssPTIST3.t3>/g, obj, "t3", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t4>([\s\S]*?)<\/cim:PssPTIST3.t4>/g, obj, "t4", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t5>([\s\S]*?)<\/cim:PssPTIST3.t5>/g, obj, "t5", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.t6>([\s\S]*?)<\/cim:PssPTIST3.t6>/g, obj, "t6", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.tf>([\s\S]*?)<\/cim:PssPTIST3.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:PssPTIST3.tp>([\s\S]*?)<\/cim:PssPTIST3.tp>/g, obj, "tp", base.to_string, sub, context);
                let bucket = context.parsed.PssPTIST3;
                if (null == bucket)
                   context.parsed.PssPTIST3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = PowerSystemStabilizerDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "PssPTIST3", "a0", "a0",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "a1", "a1",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "a2", "a2",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "a3", "a3",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "a4", "a4",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "a5", "a5",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "al", "al",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "athres", "athres",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b0", "b0",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b1", "b1",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b2", "b2",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b3", "b3",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b4", "b4",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "b5", "b5",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "dl", "dl",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "dtc", "dtc",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "dtf", "dtf",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "dtp", "dtp",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "isw", "isw",  base.from_boolean, fields);
                base.export_element (obj, "PssPTIST3", "k", "k",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "lthres", "lthres",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "m", "m",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "nav", "nav",  base.from_float, fields);
                base.export_element (obj, "PssPTIST3", "ncl", "ncl",  base.from_float, fields);
                base.export_element (obj, "PssPTIST3", "ncr", "ncr",  base.from_float, fields);
                base.export_element (obj, "PssPTIST3", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "PssPTIST3", "tp", "tp",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PssPTIST3_collapse" aria-expanded="true" aria-controls="PssPTIST3_collapse" style="margin-left: 10px;">PssPTIST3</a></legend>
                    <div id="PssPTIST3_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.template.call (this) +
                    `
                    {{#a0}}<div><b>a0</b>: {{a0}}</div>{{/a0}}
                    {{#a1}}<div><b>a1</b>: {{a1}}</div>{{/a1}}
                    {{#a2}}<div><b>a2</b>: {{a2}}</div>{{/a2}}
                    {{#a3}}<div><b>a3</b>: {{a3}}</div>{{/a3}}
                    {{#a4}}<div><b>a4</b>: {{a4}}</div>{{/a4}}
                    {{#a5}}<div><b>a5</b>: {{a5}}</div>{{/a5}}
                    {{#al}}<div><b>al</b>: {{al}}</div>{{/al}}
                    {{#athres}}<div><b>athres</b>: {{athres}}</div>{{/athres}}
                    {{#b0}}<div><b>b0</b>: {{b0}}</div>{{/b0}}
                    {{#b1}}<div><b>b1</b>: {{b1}}</div>{{/b1}}
                    {{#b2}}<div><b>b2</b>: {{b2}}</div>{{/b2}}
                    {{#b3}}<div><b>b3</b>: {{b3}}</div>{{/b3}}
                    {{#b4}}<div><b>b4</b>: {{b4}}</div>{{/b4}}
                    {{#b5}}<div><b>b5</b>: {{b5}}</div>{{/b5}}
                    {{#dl}}<div><b>dl</b>: {{dl}}</div>{{/dl}}
                    {{#dtc}}<div><b>dtc</b>: {{dtc}}</div>{{/dtc}}
                    {{#dtf}}<div><b>dtf</b>: {{dtf}}</div>{{/dtf}}
                    {{#dtp}}<div><b>dtp</b>: {{dtp}}</div>{{/dtp}}
                    {{#isw}}<div><b>isw</b>: {{isw}}</div>{{/isw}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#lthres}}<div><b>lthres</b>: {{lthres}}</div>{{/lthres}}
                    {{#m}}<div><b>m</b>: {{m}}</div>{{/m}}
                    {{#nav}}<div><b>nav</b>: {{nav}}</div>{{/nav}}
                    {{#ncl}}<div><b>ncl</b>: {{ncl}}</div>{{/ncl}}
                    {{#ncr}}<div><b>ncr</b>: {{ncr}}</div>{{/ncr}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PssPTIST3_collapse" aria-expanded="true" aria-controls="{{id}}_PssPTIST3_collapse" style="margin-left: 10px;">PssPTIST3</a></legend>
                    <div id="{{id}}_PssPTIST3_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PowerSystemStabilizerDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a0'>a0: </label><div class='col-sm-8'><input id='{{id}}_a0' class='form-control' type='text'{{#a0}} value='{{a0}}'{{/a0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a1'>a1: </label><div class='col-sm-8'><input id='{{id}}_a1' class='form-control' type='text'{{#a1}} value='{{a1}}'{{/a1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a2'>a2: </label><div class='col-sm-8'><input id='{{id}}_a2' class='form-control' type='text'{{#a2}} value='{{a2}}'{{/a2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a3'>a3: </label><div class='col-sm-8'><input id='{{id}}_a3' class='form-control' type='text'{{#a3}} value='{{a3}}'{{/a3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a4'>a4: </label><div class='col-sm-8'><input id='{{id}}_a4' class='form-control' type='text'{{#a4}} value='{{a4}}'{{/a4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a5'>a5: </label><div class='col-sm-8'><input id='{{id}}_a5' class='form-control' type='text'{{#a5}} value='{{a5}}'{{/a5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_al'>al: </label><div class='col-sm-8'><input id='{{id}}_al' class='form-control' type='text'{{#al}} value='{{al}}'{{/al}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_athres'>athres: </label><div class='col-sm-8'><input id='{{id}}_athres' class='form-control' type='text'{{#athres}} value='{{athres}}'{{/athres}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0'>b0: </label><div class='col-sm-8'><input id='{{id}}_b0' class='form-control' type='text'{{#b0}} value='{{b0}}'{{/b0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b1'>b1: </label><div class='col-sm-8'><input id='{{id}}_b1' class='form-control' type='text'{{#b1}} value='{{b1}}'{{/b1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b2'>b2: </label><div class='col-sm-8'><input id='{{id}}_b2' class='form-control' type='text'{{#b2}} value='{{b2}}'{{/b2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b3'>b3: </label><div class='col-sm-8'><input id='{{id}}_b3' class='form-control' type='text'{{#b3}} value='{{b3}}'{{/b3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b4'>b4: </label><div class='col-sm-8'><input id='{{id}}_b4' class='form-control' type='text'{{#b4}} value='{{b4}}'{{/b4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b5'>b5: </label><div class='col-sm-8'><input id='{{id}}_b5' class='form-control' type='text'{{#b5}} value='{{b5}}'{{/b5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dl'>dl: </label><div class='col-sm-8'><input id='{{id}}_dl' class='form-control' type='text'{{#dl}} value='{{dl}}'{{/dl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtc'>dtc: </label><div class='col-sm-8'><input id='{{id}}_dtc' class='form-control' type='text'{{#dtc}} value='{{dtc}}'{{/dtc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtf'>dtf: </label><div class='col-sm-8'><input id='{{id}}_dtf' class='form-control' type='text'{{#dtf}} value='{{dtf}}'{{/dtf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dtp'>dtp: </label><div class='col-sm-8'><input id='{{id}}_dtp' class='form-control' type='text'{{#dtp}} value='{{dtp}}'{{/dtp}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isw'>isw: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isw' class='form-check-input' type='checkbox'{{#isw}} checked{{/isw}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lthres'>lthres: </label><div class='col-sm-8'><input id='{{id}}_lthres' class='form-control' type='text'{{#lthres}} value='{{lthres}}'{{/lthres}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_m'>m: </label><div class='col-sm-8'><input id='{{id}}_m' class='form-control' type='text'{{#m}} value='{{m}}'{{/m}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nav'>nav: </label><div class='col-sm-8'><input id='{{id}}_nav' class='form-control' type='text'{{#nav}} value='{{nav}}'{{/nav}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ncl'>ncl: </label><div class='col-sm-8'><input id='{{id}}_ncl' class='form-control' type='text'{{#ncl}} value='{{ncl}}'{{/ncl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ncr'>ncr: </label><div class='col-sm-8'><input id='{{id}}_ncr' class='form-control' type='text'{{#ncr}} value='{{ncr}}'{{/ncr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PssPTIST3" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a0").value; if ("" !== temp) obj["a0"] = temp;
                temp = document.getElementById (id + "_a1").value; if ("" !== temp) obj["a1"] = temp;
                temp = document.getElementById (id + "_a2").value; if ("" !== temp) obj["a2"] = temp;
                temp = document.getElementById (id + "_a3").value; if ("" !== temp) obj["a3"] = temp;
                temp = document.getElementById (id + "_a4").value; if ("" !== temp) obj["a4"] = temp;
                temp = document.getElementById (id + "_a5").value; if ("" !== temp) obj["a5"] = temp;
                temp = document.getElementById (id + "_al").value; if ("" !== temp) obj["al"] = temp;
                temp = document.getElementById (id + "_athres").value; if ("" !== temp) obj["athres"] = temp;
                temp = document.getElementById (id + "_b0").value; if ("" !== temp) obj["b0"] = temp;
                temp = document.getElementById (id + "_b1").value; if ("" !== temp) obj["b1"] = temp;
                temp = document.getElementById (id + "_b2").value; if ("" !== temp) obj["b2"] = temp;
                temp = document.getElementById (id + "_b3").value; if ("" !== temp) obj["b3"] = temp;
                temp = document.getElementById (id + "_b4").value; if ("" !== temp) obj["b4"] = temp;
                temp = document.getElementById (id + "_b5").value; if ("" !== temp) obj["b5"] = temp;
                temp = document.getElementById (id + "_dl").value; if ("" !== temp) obj["dl"] = temp;
                temp = document.getElementById (id + "_dtc").value; if ("" !== temp) obj["dtc"] = temp;
                temp = document.getElementById (id + "_dtf").value; if ("" !== temp) obj["dtf"] = temp;
                temp = document.getElementById (id + "_dtp").value; if ("" !== temp) obj["dtp"] = temp;
                temp = document.getElementById (id + "_isw").checked; if (temp) obj["isw"] = true;
                temp = document.getElementById (id + "_k").value; if ("" !== temp) obj["k"] = temp;
                temp = document.getElementById (id + "_lthres").value; if ("" !== temp) obj["lthres"] = temp;
                temp = document.getElementById (id + "_m").value; if ("" !== temp) obj["m"] = temp;
                temp = document.getElementById (id + "_nav").value; if ("" !== temp) obj["nav"] = temp;
                temp = document.getElementById (id + "_ncl").value; if ("" !== temp) obj["ncl"] = temp;
                temp = document.getElementById (id + "_ncr").value; if ("" !== temp) obj["ncr"] = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" !== temp) obj["pmin"] = temp;
                temp = document.getElementById (id + "_t1").value; if ("" !== temp) obj["t1"] = temp;
                temp = document.getElementById (id + "_t2").value; if ("" !== temp) obj["t2"] = temp;
                temp = document.getElementById (id + "_t3").value; if ("" !== temp) obj["t3"] = temp;
                temp = document.getElementById (id + "_t4").value; if ("" !== temp) obj["t4"] = temp;
                temp = document.getElementById (id + "_t5").value; if ("" !== temp) obj["t5"] = temp;
                temp = document.getElementById (id + "_t6").value; if ("" !== temp) obj["t6"] = temp;
                temp = document.getElementById (id + "_tf").value; if ("" !== temp) obj["tf"] = temp;
                temp = document.getElementById (id + "_tp").value; if ("" !== temp) obj["tp"] = temp;

                return (obj);
            }
        }

        return (
            {
                PssSTAB2A: PssSTAB2A,
                PssPTIST3: PssPTIST3,
                PssELIN2: PssELIN2,
                PowerSystemStabilizerDynamics: PowerSystemStabilizerDynamics,
                PssSK: PssSK,
                PssIEEE1A: PssIEEE1A,
                PssSH: PssSH,
                PssIEEE4B: PssIEEE4B,
                PssSB4: PssSB4,
                Pss1A: Pss1A,
                InputSignalKind: InputSignalKind,
                PssIEEE3B: PssIEEE3B,
                PssPTIST1: PssPTIST1,
                Pss1: Pss1,
                PssWECC: PssWECC,
                Pss2B: Pss2B,
                Pss5: Pss5,
                Pss2ST: Pss2ST,
                PssIEEE2B: PssIEEE2B,
                PssRQB: PssRQB
            }
        );
    }
);