define
(
    ["model/base", "model/Core"],
    /**
     * Dynamic load models are used to represent the dynamic real and reactive load behaviour of a load from the static power flow model.
     *
     * Dynamic load models can be defined as applying either to a single load (energy consumer) or to a group of energy consumers.
     * Large industrial motors or groups of similar motors can be represented by a synchronous machine model (SynchronousMachineDynamics) or an asynchronous machine model (AsynchronousMachineDynamics), which are usually represented as generators with negative active power output in the static (power flow) data.
     *
     */
    function (base, Core)
    {
        /**
         * Type of static load model.
         *
         */
        let StaticLoadModelKind =
        {
            "exponential": "exponential",
            "zIP1": "zIP1",
            "zIP2": "zIP2",
            "constantZ": "constantZ"
        };
        Object.freeze (StaticLoadModelKind);

        /**
         * Type of generic non-linear load model.
         *
         */
        let GenericNonLinearLoadModelKind =
        {
            "exponentialRecovery": "exponentialRecovery",
            "loadAdaptive": "loadAdaptive"
        };
        Object.freeze (GenericNonLinearLoadModelKind);

        /**
         * Load whose behaviour is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         * A standard feature of dynamic load behaviour modelling is the ability to associate the same behaviour to multiple energy consumers by means of a single load definition.
         *
         * The load model is always applied to individual bus loads (energy consumers).
         *
         */
        class LoadDynamics extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadDynamics;
                if (null == bucket)
                   cim_data.LoadDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadDynamics[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadDynamics";
                base.parse_attributes (/<cim:LoadDynamics.EnergyConsumer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumer", sub, context);
                let bucket = context.parsed.LoadDynamics;
                if (null == bucket)
                   context.parsed.LoadDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "LoadDynamics", "EnergyConsumer", "EnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadDynamics_collapse" aria-expanded="true" aria-controls="LoadDynamics_collapse" style="margin-left: 10px;">LoadDynamics</a></legend>
                    <div id="LoadDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#EnergyConsumer}}<div><b>EnergyConsumer</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{.}}");}); return false;'>{{.}}</a></div>{{/EnergyConsumer}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["EnergyConsumer"]) obj["EnergyConsumer_string"] = obj["EnergyConsumer"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["EnergyConsumer_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_LoadDynamics_collapse" style="margin-left: 10px;">LoadDynamics</a></legend>
                    <div id="{{id}}_LoadDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
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
                obj = obj || { id: id, cls: "LoadDynamics" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyConsumer", "0..*", "0..1", "EnergyConsumer", "LoadDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Aggregate induction motor load.
         *
         * This model is used to represent a fraction of an ordinary load as "induction motor load".  It allows a load that is treated as an ordinary constant power in power flow analysis to be represented by an induction motor in dynamic simulation. This model is intended for representation of aggregations of many motors dispersed through a load represented at a high voltage bus but where there is no information on the characteristics of individual motors.
         * Either a "one-cage" or "two-cage" model of the induction machine can be modelled. Magnetic saturation is not modelled.
         * This model treats a fraction of the constant power part of a load as a motor. During initialisation, the initial power drawn by the motor is set equal to <i>Pfrac</i> times the constant <i>P</i> part of the static load.  The remainder of the load is left as a static load.
         * The reactive power demand of the motor is calculated during initialisation as a function of voltage at the load bus. This reactive power demand can be less than or greater than the constant <i>Q</i> component of the load.  If the motor's reactive demand is greater than the constant <i>Q</i> component of the load, the model inserts a shunt capacitor at the terminal of the motor to bring its reactive demand down to equal the constant <i>Q</i> reactive load.
         * If an induction motor load model and a static load model are both present for a load, the motor <i>Pfrac</i> is assumed to be subtracted from the power flow constant <i>P</i> load before the static load model is applied.  The remainder of the load, if any, is then represented by the static load model.
         *
         */
        class LoadMotor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadMotor;
                if (null == bucket)
                   cim_data.LoadMotor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadMotor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadMotor";
                base.parse_element (/<cim:LoadMotor.d>([\s\S]*?)<\/cim:LoadMotor.d>/g, obj, "d", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.h>([\s\S]*?)<\/cim:LoadMotor.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.lfac>([\s\S]*?)<\/cim:LoadMotor.lfac>/g, obj, "lfac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.lp>([\s\S]*?)<\/cim:LoadMotor.lp>/g, obj, "lp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.lpp>([\s\S]*?)<\/cim:LoadMotor.lpp>/g, obj, "lpp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.ls>([\s\S]*?)<\/cim:LoadMotor.ls>/g, obj, "ls", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.pfrac>([\s\S]*?)<\/cim:LoadMotor.pfrac>/g, obj, "pfrac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadMotor.ra>([\s\S]*?)<\/cim:LoadMotor.ra>/g, obj, "ra", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tbkr>([\s\S]*?)<\/cim:LoadMotor.tbkr>/g, obj, "tbkr", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tpo>([\s\S]*?)<\/cim:LoadMotor.tpo>/g, obj, "tpo", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tppo>([\s\S]*?)<\/cim:LoadMotor.tppo>/g, obj, "tppo", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.tv>([\s\S]*?)<\/cim:LoadMotor.tv>/g, obj, "tv", base.to_string, sub, context);
                base.parse_element (/<cim:LoadMotor.vt>([\s\S]*?)<\/cim:LoadMotor.vt>/g, obj, "vt", base.to_string, sub, context);
                base.parse_attribute (/<cim:LoadMotor.LoadAggregate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context);
                let bucket = context.parsed.LoadMotor;
                if (null == bucket)
                   context.parsed.LoadMotor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadMotor", "d", "d",  base.from_float, fields);
                base.export_element (obj, "LoadMotor", "h", "h",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "lfac", "lfac",  base.from_float, fields);
                base.export_element (obj, "LoadMotor", "lp", "lp",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "lpp", "lpp",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "ls", "ls",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "pfrac", "pfrac",  base.from_float, fields);
                base.export_element (obj, "LoadMotor", "ra", "ra",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tbkr", "tbkr",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tpo", "tpo",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tppo", "tppo",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "tv", "tv",  base.from_string, fields);
                base.export_element (obj, "LoadMotor", "vt", "vt",  base.from_string, fields);
                base.export_attribute (obj, "LoadMotor", "LoadAggregate", "LoadAggregate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadMotor_collapse" aria-expanded="true" aria-controls="LoadMotor_collapse" style="margin-left: 10px;">LoadMotor</a></legend>
                    <div id="LoadMotor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#d}}<div><b>d</b>: {{d}}</div>{{/d}}
                    {{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
                    {{#lfac}}<div><b>lfac</b>: {{lfac}}</div>{{/lfac}}
                    {{#lp}}<div><b>lp</b>: {{lp}}</div>{{/lp}}
                    {{#lpp}}<div><b>lpp</b>: {{lpp}}</div>{{/lpp}}
                    {{#ls}}<div><b>ls</b>: {{ls}}</div>{{/ls}}
                    {{#pfrac}}<div><b>pfrac</b>: {{pfrac}}</div>{{/pfrac}}
                    {{#ra}}<div><b>ra</b>: {{ra}}</div>{{/ra}}
                    {{#tbkr}}<div><b>tbkr</b>: {{tbkr}}</div>{{/tbkr}}
                    {{#tpo}}<div><b>tpo</b>: {{tpo}}</div>{{/tpo}}
                    {{#tppo}}<div><b>tppo</b>: {{tppo}}</div>{{/tppo}}
                    {{#tv}}<div><b>tv</b>: {{tv}}</div>{{/tv}}
                    {{#vt}}<div><b>vt</b>: {{vt}}</div>{{/vt}}
                    {{#LoadAggregate}}<div><b>LoadAggregate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadAggregate}}");}); return false;'>{{LoadAggregate}}</a></div>{{/LoadAggregate}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadMotor_collapse" aria-expanded="true" aria-controls="{{id}}_LoadMotor_collapse" style="margin-left: 10px;">LoadMotor</a></legend>
                    <div id="{{id}}_LoadMotor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_d'>d: </label><div class='col-sm-8'><input id='{{id}}_d' class='form-control' type='text'{{#d}} value='{{d}}'{{/d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h'>h: </label><div class='col-sm-8'><input id='{{id}}_h' class='form-control' type='text'{{#h}} value='{{h}}'{{/h}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lfac'>lfac: </label><div class='col-sm-8'><input id='{{id}}_lfac' class='form-control' type='text'{{#lfac}} value='{{lfac}}'{{/lfac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lp'>lp: </label><div class='col-sm-8'><input id='{{id}}_lp' class='form-control' type='text'{{#lp}} value='{{lp}}'{{/lp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lpp'>lpp: </label><div class='col-sm-8'><input id='{{id}}_lpp' class='form-control' type='text'{{#lpp}} value='{{lpp}}'{{/lpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ls'>ls: </label><div class='col-sm-8'><input id='{{id}}_ls' class='form-control' type='text'{{#ls}} value='{{ls}}'{{/ls}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfrac'>pfrac: </label><div class='col-sm-8'><input id='{{id}}_pfrac' class='form-control' type='text'{{#pfrac}} value='{{pfrac}}'{{/pfrac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ra'>ra: </label><div class='col-sm-8'><input id='{{id}}_ra' class='form-control' type='text'{{#ra}} value='{{ra}}'{{/ra}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tbkr'>tbkr: </label><div class='col-sm-8'><input id='{{id}}_tbkr' class='form-control' type='text'{{#tbkr}} value='{{tbkr}}'{{/tbkr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpo'>tpo: </label><div class='col-sm-8'><input id='{{id}}_tpo' class='form-control' type='text'{{#tpo}} value='{{tpo}}'{{/tpo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tppo'>tppo: </label><div class='col-sm-8'><input id='{{id}}_tppo' class='form-control' type='text'{{#tppo}} value='{{tppo}}'{{/tppo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tv'>tv: </label><div class='col-sm-8'><input id='{{id}}_tv' class='form-control' type='text'{{#tv}} value='{{tv}}'{{/tv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vt'>vt: </label><div class='col-sm-8'><input id='{{id}}_vt' class='form-control' type='text'{{#vt}} value='{{vt}}'{{/vt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadAggregate'>LoadAggregate: </label><div class='col-sm-8'><input id='{{id}}_LoadAggregate' class='form-control' type='text'{{#LoadAggregate}} value='{{LoadAggregate}}'{{/LoadAggregate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadMotor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_d").value; if ("" !== temp) obj["d"] = temp;
                temp = document.getElementById (id + "_h").value; if ("" !== temp) obj["h"] = temp;
                temp = document.getElementById (id + "_lfac").value; if ("" !== temp) obj["lfac"] = temp;
                temp = document.getElementById (id + "_lp").value; if ("" !== temp) obj["lp"] = temp;
                temp = document.getElementById (id + "_lpp").value; if ("" !== temp) obj["lpp"] = temp;
                temp = document.getElementById (id + "_ls").value; if ("" !== temp) obj["ls"] = temp;
                temp = document.getElementById (id + "_pfrac").value; if ("" !== temp) obj["pfrac"] = temp;
                temp = document.getElementById (id + "_ra").value; if ("" !== temp) obj["ra"] = temp;
                temp = document.getElementById (id + "_tbkr").value; if ("" !== temp) obj["tbkr"] = temp;
                temp = document.getElementById (id + "_tpo").value; if ("" !== temp) obj["tpo"] = temp;
                temp = document.getElementById (id + "_tppo").value; if ("" !== temp) obj["tppo"] = temp;
                temp = document.getElementById (id + "_tv").value; if ("" !== temp) obj["tv"] = temp;
                temp = document.getElementById (id + "_vt").value; if ("" !== temp) obj["vt"] = temp;
                temp = document.getElementById (id + "_LoadAggregate").value; if ("" !== temp) obj["LoadAggregate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadAggregate", "1", "0..1", "LoadAggregate", "LoadMotor"]
                        ]
                    )
                );
            }
        }

        /**
         * General static load.
         *
         * This model represents the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage.
         *
         */
        class LoadStatic extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadStatic;
                if (null == bucket)
                   cim_data.LoadStatic = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadStatic[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "LoadStatic";
                base.parse_element (/<cim:LoadStatic.ep1>([\s\S]*?)<\/cim:LoadStatic.ep1>/g, obj, "ep1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.ep2>([\s\S]*?)<\/cim:LoadStatic.ep2>/g, obj, "ep2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.ep3>([\s\S]*?)<\/cim:LoadStatic.ep3>/g, obj, "ep3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq1>([\s\S]*?)<\/cim:LoadStatic.eq1>/g, obj, "eq1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq2>([\s\S]*?)<\/cim:LoadStatic.eq2>/g, obj, "eq2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.eq3>([\s\S]*?)<\/cim:LoadStatic.eq3>/g, obj, "eq3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp1>([\s\S]*?)<\/cim:LoadStatic.kp1>/g, obj, "kp1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp2>([\s\S]*?)<\/cim:LoadStatic.kp2>/g, obj, "kp2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp3>([\s\S]*?)<\/cim:LoadStatic.kp3>/g, obj, "kp3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kp4>([\s\S]*?)<\/cim:LoadStatic.kp4>/g, obj, "kp4", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kpf>([\s\S]*?)<\/cim:LoadStatic.kpf>/g, obj, "kpf", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq1>([\s\S]*?)<\/cim:LoadStatic.kq1>/g, obj, "kq1", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq2>([\s\S]*?)<\/cim:LoadStatic.kq2>/g, obj, "kq2", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq3>([\s\S]*?)<\/cim:LoadStatic.kq3>/g, obj, "kq3", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kq4>([\s\S]*?)<\/cim:LoadStatic.kq4>/g, obj, "kq4", base.to_float, sub, context);
                base.parse_element (/<cim:LoadStatic.kqf>([\s\S]*?)<\/cim:LoadStatic.kqf>/g, obj, "kqf", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadStatic.staticLoadModelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "staticLoadModelType", sub, context);
                base.parse_attribute (/<cim:LoadStatic.LoadAggregate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadAggregate", sub, context);
                let bucket = context.parsed.LoadStatic;
                if (null == bucket)
                   context.parsed.LoadStatic = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadStatic", "ep1", "ep1",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "ep2", "ep2",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "ep3", "ep3",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq1", "eq1",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq2", "eq2",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "eq3", "eq3",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp1", "kp1",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp2", "kp2",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp3", "kp3",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kp4", "kp4",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kpf", "kpf",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq1", "kq1",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq2", "kq2",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq3", "kq3",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kq4", "kq4",  base.from_float, fields);
                base.export_element (obj, "LoadStatic", "kqf", "kqf",  base.from_float, fields);
                base.export_attribute (obj, "LoadStatic", "staticLoadModelType", "staticLoadModelType", fields);
                base.export_attribute (obj, "LoadStatic", "LoadAggregate", "LoadAggregate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadStatic_collapse" aria-expanded="true" aria-controls="LoadStatic_collapse" style="margin-left: 10px;">LoadStatic</a></legend>
                    <div id="LoadStatic_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ep1}}<div><b>ep1</b>: {{ep1}}</div>{{/ep1}}
                    {{#ep2}}<div><b>ep2</b>: {{ep2}}</div>{{/ep2}}
                    {{#ep3}}<div><b>ep3</b>: {{ep3}}</div>{{/ep3}}
                    {{#eq1}}<div><b>eq1</b>: {{eq1}}</div>{{/eq1}}
                    {{#eq2}}<div><b>eq2</b>: {{eq2}}</div>{{/eq2}}
                    {{#eq3}}<div><b>eq3</b>: {{eq3}}</div>{{/eq3}}
                    {{#kp1}}<div><b>kp1</b>: {{kp1}}</div>{{/kp1}}
                    {{#kp2}}<div><b>kp2</b>: {{kp2}}</div>{{/kp2}}
                    {{#kp3}}<div><b>kp3</b>: {{kp3}}</div>{{/kp3}}
                    {{#kp4}}<div><b>kp4</b>: {{kp4}}</div>{{/kp4}}
                    {{#kpf}}<div><b>kpf</b>: {{kpf}}</div>{{/kpf}}
                    {{#kq1}}<div><b>kq1</b>: {{kq1}}</div>{{/kq1}}
                    {{#kq2}}<div><b>kq2</b>: {{kq2}}</div>{{/kq2}}
                    {{#kq3}}<div><b>kq3</b>: {{kq3}}</div>{{/kq3}}
                    {{#kq4}}<div><b>kq4</b>: {{kq4}}</div>{{/kq4}}
                    {{#kqf}}<div><b>kqf</b>: {{kqf}}</div>{{/kqf}}
                    {{#staticLoadModelType}}<div><b>staticLoadModelType</b>: {{staticLoadModelType}}</div>{{/staticLoadModelType}}
                    {{#LoadAggregate}}<div><b>LoadAggregate</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadAggregate}}");}); return false;'>{{LoadAggregate}}</a></div>{{/LoadAggregate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["staticLoadModelTypeStaticLoadModelKind"] = [{ id: '', selected: (!obj["staticLoadModelType"])}]; for (let property in StaticLoadModelKind) obj["staticLoadModelTypeStaticLoadModelKind"].push ({ id: property, selected: obj["staticLoadModelType"] && obj["staticLoadModelType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["staticLoadModelTypeStaticLoadModelKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadStatic_collapse" aria-expanded="true" aria-controls="{{id}}_LoadStatic_collapse" style="margin-left: 10px;">LoadStatic</a></legend>
                    <div id="{{id}}_LoadStatic_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ep1'>ep1: </label><div class='col-sm-8'><input id='{{id}}_ep1' class='form-control' type='text'{{#ep1}} value='{{ep1}}'{{/ep1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ep2'>ep2: </label><div class='col-sm-8'><input id='{{id}}_ep2' class='form-control' type='text'{{#ep2}} value='{{ep2}}'{{/ep2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ep3'>ep3: </label><div class='col-sm-8'><input id='{{id}}_ep3' class='form-control' type='text'{{#ep3}} value='{{ep3}}'{{/ep3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eq1'>eq1: </label><div class='col-sm-8'><input id='{{id}}_eq1' class='form-control' type='text'{{#eq1}} value='{{eq1}}'{{/eq1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eq2'>eq2: </label><div class='col-sm-8'><input id='{{id}}_eq2' class='form-control' type='text'{{#eq2}} value='{{eq2}}'{{/eq2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eq3'>eq3: </label><div class='col-sm-8'><input id='{{id}}_eq3' class='form-control' type='text'{{#eq3}} value='{{eq3}}'{{/eq3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp1'>kp1: </label><div class='col-sm-8'><input id='{{id}}_kp1' class='form-control' type='text'{{#kp1}} value='{{kp1}}'{{/kp1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp2'>kp2: </label><div class='col-sm-8'><input id='{{id}}_kp2' class='form-control' type='text'{{#kp2}} value='{{kp2}}'{{/kp2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp3'>kp3: </label><div class='col-sm-8'><input id='{{id}}_kp3' class='form-control' type='text'{{#kp3}} value='{{kp3}}'{{/kp3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp4'>kp4: </label><div class='col-sm-8'><input id='{{id}}_kp4' class='form-control' type='text'{{#kp4}} value='{{kp4}}'{{/kp4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpf'>kpf: </label><div class='col-sm-8'><input id='{{id}}_kpf' class='form-control' type='text'{{#kpf}} value='{{kpf}}'{{/kpf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kq1'>kq1: </label><div class='col-sm-8'><input id='{{id}}_kq1' class='form-control' type='text'{{#kq1}} value='{{kq1}}'{{/kq1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kq2'>kq2: </label><div class='col-sm-8'><input id='{{id}}_kq2' class='form-control' type='text'{{#kq2}} value='{{kq2}}'{{/kq2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kq3'>kq3: </label><div class='col-sm-8'><input id='{{id}}_kq3' class='form-control' type='text'{{#kq3}} value='{{kq3}}'{{/kq3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kq4'>kq4: </label><div class='col-sm-8'><input id='{{id}}_kq4' class='form-control' type='text'{{#kq4}} value='{{kq4}}'{{/kq4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kqf'>kqf: </label><div class='col-sm-8'><input id='{{id}}_kqf' class='form-control' type='text'{{#kqf}} value='{{kqf}}'{{/kqf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_staticLoadModelType'>staticLoadModelType: </label><div class='col-sm-8'><select id='{{id}}_staticLoadModelType' class='form-control custom-select'>{{#staticLoadModelTypeStaticLoadModelKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/staticLoadModelTypeStaticLoadModelKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadAggregate'>LoadAggregate: </label><div class='col-sm-8'><input id='{{id}}_LoadAggregate' class='form-control' type='text'{{#LoadAggregate}} value='{{LoadAggregate}}'{{/LoadAggregate}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadStatic" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ep1").value; if ("" !== temp) obj["ep1"] = temp;
                temp = document.getElementById (id + "_ep2").value; if ("" !== temp) obj["ep2"] = temp;
                temp = document.getElementById (id + "_ep3").value; if ("" !== temp) obj["ep3"] = temp;
                temp = document.getElementById (id + "_eq1").value; if ("" !== temp) obj["eq1"] = temp;
                temp = document.getElementById (id + "_eq2").value; if ("" !== temp) obj["eq2"] = temp;
                temp = document.getElementById (id + "_eq3").value; if ("" !== temp) obj["eq3"] = temp;
                temp = document.getElementById (id + "_kp1").value; if ("" !== temp) obj["kp1"] = temp;
                temp = document.getElementById (id + "_kp2").value; if ("" !== temp) obj["kp2"] = temp;
                temp = document.getElementById (id + "_kp3").value; if ("" !== temp) obj["kp3"] = temp;
                temp = document.getElementById (id + "_kp4").value; if ("" !== temp) obj["kp4"] = temp;
                temp = document.getElementById (id + "_kpf").value; if ("" !== temp) obj["kpf"] = temp;
                temp = document.getElementById (id + "_kq1").value; if ("" !== temp) obj["kq1"] = temp;
                temp = document.getElementById (id + "_kq2").value; if ("" !== temp) obj["kq2"] = temp;
                temp = document.getElementById (id + "_kq3").value; if ("" !== temp) obj["kq3"] = temp;
                temp = document.getElementById (id + "_kq4").value; if ("" !== temp) obj["kq4"] = temp;
                temp = document.getElementById (id + "_kqf").value; if ("" !== temp) obj["kqf"] = temp;
                temp = StaticLoadModelKind[document.getElementById (id + "_staticLoadModelType").value]; if (temp) obj["staticLoadModelType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#StaticLoadModelKind." + temp; else delete obj["staticLoadModelType"];
                temp = document.getElementById (id + "_LoadAggregate").value; if ("" !== temp) obj["LoadAggregate"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadAggregate", "1", "0..1", "LoadAggregate", "LoadStatic"]
                        ]
                    )
                );
            }
        }

        /**
         * Combined static load and induction motor load effects.
         *
         * The dynamics of the motor are simplified by linearizing the induction machine equations.
         *
         */
        class LoadComposite extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadComposite;
                if (null == bucket)
                   cim_data.LoadComposite = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadComposite[obj.id];
            }

            parse (context, sub)
            {
                let obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadComposite";
                base.parse_element (/<cim:LoadComposite.epfd>([\s\S]*?)<\/cim:LoadComposite.epfd>/g, obj, "epfd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epfs>([\s\S]*?)<\/cim:LoadComposite.epfs>/g, obj, "epfs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epvd>([\s\S]*?)<\/cim:LoadComposite.epvd>/g, obj, "epvd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.epvs>([\s\S]*?)<\/cim:LoadComposite.epvs>/g, obj, "epvs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqfd>([\s\S]*?)<\/cim:LoadComposite.eqfd>/g, obj, "eqfd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqfs>([\s\S]*?)<\/cim:LoadComposite.eqfs>/g, obj, "eqfs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqvd>([\s\S]*?)<\/cim:LoadComposite.eqvd>/g, obj, "eqvd", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.eqvs>([\s\S]*?)<\/cim:LoadComposite.eqvs>/g, obj, "eqvs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.h>([\s\S]*?)<\/cim:LoadComposite.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:LoadComposite.lfac>([\s\S]*?)<\/cim:LoadComposite.lfac>/g, obj, "lfac", base.to_float, sub, context);
                base.parse_element (/<cim:LoadComposite.pfrac>([\s\S]*?)<\/cim:LoadComposite.pfrac>/g, obj, "pfrac", base.to_float, sub, context);
                let bucket = context.parsed.LoadComposite;
                if (null == bucket)
                   context.parsed.LoadComposite = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadComposite", "epfd", "epfd",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epfs", "epfs",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epvd", "epvd",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "epvs", "epvs",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqfd", "eqfd",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqfs", "eqfs",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqvd", "eqvd",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "eqvs", "eqvs",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "h", "h",  base.from_string, fields);
                base.export_element (obj, "LoadComposite", "lfac", "lfac",  base.from_float, fields);
                base.export_element (obj, "LoadComposite", "pfrac", "pfrac",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadComposite_collapse" aria-expanded="true" aria-controls="LoadComposite_collapse" style="margin-left: 10px;">LoadComposite</a></legend>
                    <div id="LoadComposite_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.template.call (this) +
                    `
                    {{#epfd}}<div><b>epfd</b>: {{epfd}}</div>{{/epfd}}
                    {{#epfs}}<div><b>epfs</b>: {{epfs}}</div>{{/epfs}}
                    {{#epvd}}<div><b>epvd</b>: {{epvd}}</div>{{/epvd}}
                    {{#epvs}}<div><b>epvs</b>: {{epvs}}</div>{{/epvs}}
                    {{#eqfd}}<div><b>eqfd</b>: {{eqfd}}</div>{{/eqfd}}
                    {{#eqfs}}<div><b>eqfs</b>: {{eqfs}}</div>{{/eqfs}}
                    {{#eqvd}}<div><b>eqvd</b>: {{eqvd}}</div>{{/eqvd}}
                    {{#eqvs}}<div><b>eqvs</b>: {{eqvs}}</div>{{/eqvs}}
                    {{#h}}<div><b>h</b>: {{h}}</div>{{/h}}
                    {{#lfac}}<div><b>lfac</b>: {{lfac}}</div>{{/lfac}}
                    {{#pfrac}}<div><b>pfrac</b>: {{pfrac}}</div>{{/pfrac}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadComposite_collapse" aria-expanded="true" aria-controls="{{id}}_LoadComposite_collapse" style="margin-left: 10px;">LoadComposite</a></legend>
                    <div id="{{id}}_LoadComposite_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_epfd'>epfd: </label><div class='col-sm-8'><input id='{{id}}_epfd' class='form-control' type='text'{{#epfd}} value='{{epfd}}'{{/epfd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_epfs'>epfs: </label><div class='col-sm-8'><input id='{{id}}_epfs' class='form-control' type='text'{{#epfs}} value='{{epfs}}'{{/epfs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_epvd'>epvd: </label><div class='col-sm-8'><input id='{{id}}_epvd' class='form-control' type='text'{{#epvd}} value='{{epvd}}'{{/epvd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_epvs'>epvs: </label><div class='col-sm-8'><input id='{{id}}_epvs' class='form-control' type='text'{{#epvs}} value='{{epvs}}'{{/epvs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eqfd'>eqfd: </label><div class='col-sm-8'><input id='{{id}}_eqfd' class='form-control' type='text'{{#eqfd}} value='{{eqfd}}'{{/eqfd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eqfs'>eqfs: </label><div class='col-sm-8'><input id='{{id}}_eqfs' class='form-control' type='text'{{#eqfs}} value='{{eqfs}}'{{/eqfs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eqvd'>eqvd: </label><div class='col-sm-8'><input id='{{id}}_eqvd' class='form-control' type='text'{{#eqvd}} value='{{eqvd}}'{{/eqvd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_eqvs'>eqvs: </label><div class='col-sm-8'><input id='{{id}}_eqvs' class='form-control' type='text'{{#eqvs}} value='{{eqvs}}'{{/eqvs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_h'>h: </label><div class='col-sm-8'><input id='{{id}}_h' class='form-control' type='text'{{#h}} value='{{h}}'{{/h}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lfac'>lfac: </label><div class='col-sm-8'><input id='{{id}}_lfac' class='form-control' type='text'{{#lfac}} value='{{lfac}}'{{/lfac}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfrac'>pfrac: </label><div class='col-sm-8'><input id='{{id}}_pfrac' class='form-control' type='text'{{#pfrac}} value='{{pfrac}}'{{/pfrac}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadComposite" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_epfd").value; if ("" !== temp) obj["epfd"] = temp;
                temp = document.getElementById (id + "_epfs").value; if ("" !== temp) obj["epfs"] = temp;
                temp = document.getElementById (id + "_epvd").value; if ("" !== temp) obj["epvd"] = temp;
                temp = document.getElementById (id + "_epvs").value; if ("" !== temp) obj["epvs"] = temp;
                temp = document.getElementById (id + "_eqfd").value; if ("" !== temp) obj["eqfd"] = temp;
                temp = document.getElementById (id + "_eqfs").value; if ("" !== temp) obj["eqfs"] = temp;
                temp = document.getElementById (id + "_eqvd").value; if ("" !== temp) obj["eqvd"] = temp;
                temp = document.getElementById (id + "_eqvs").value; if ("" !== temp) obj["eqvs"] = temp;
                temp = document.getElementById (id + "_h").value; if ("" !== temp) obj["h"] = temp;
                temp = document.getElementById (id + "_lfac").value; if ("" !== temp) obj["lfac"] = temp;
                temp = document.getElementById (id + "_pfrac").value; if ("" !== temp) obj["pfrac"] = temp;

                return (obj);
            }
        }

        /**
         * Generic non-linear dynamic (GNLD) load.
         *
         * This model can be used in mid-term and long-term voltage stability simulations (i.e., to study voltage collapse), as it can replace a more detailed representation of aggregate load, including induction motors, thermostatically controlled and static loads.
         *
         */
        class LoadGenericNonLinear extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadGenericNonLinear;
                if (null == bucket)
                   cim_data.LoadGenericNonLinear = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadGenericNonLinear[obj.id];
            }

            parse (context, sub)
            {
                let obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadGenericNonLinear";
                base.parse_element (/<cim:LoadGenericNonLinear.bs>([\s\S]*?)<\/cim:LoadGenericNonLinear.bs>/g, obj, "bs", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.bt>([\s\S]*?)<\/cim:LoadGenericNonLinear.bt>/g, obj, "bt", base.to_float, sub, context);
                base.parse_attribute (/<cim:LoadGenericNonLinear.genericNonLinearLoadModelType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "genericNonLinearLoadModelType", sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.ls>([\s\S]*?)<\/cim:LoadGenericNonLinear.ls>/g, obj, "ls", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.lt>([\s\S]*?)<\/cim:LoadGenericNonLinear.lt>/g, obj, "lt", base.to_float, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.tp>([\s\S]*?)<\/cim:LoadGenericNonLinear.tp>/g, obj, "tp", base.to_string, sub, context);
                base.parse_element (/<cim:LoadGenericNonLinear.tq>([\s\S]*?)<\/cim:LoadGenericNonLinear.tq>/g, obj, "tq", base.to_string, sub, context);
                let bucket = context.parsed.LoadGenericNonLinear;
                if (null == bucket)
                   context.parsed.LoadGenericNonLinear = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "LoadGenericNonLinear", "bs", "bs",  base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "bt", "bt",  base.from_float, fields);
                base.export_attribute (obj, "LoadGenericNonLinear", "genericNonLinearLoadModelType", "genericNonLinearLoadModelType", fields);
                base.export_element (obj, "LoadGenericNonLinear", "ls", "ls",  base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "lt", "lt",  base.from_float, fields);
                base.export_element (obj, "LoadGenericNonLinear", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "LoadGenericNonLinear", "tq", "tq",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadGenericNonLinear_collapse" aria-expanded="true" aria-controls="LoadGenericNonLinear_collapse" style="margin-left: 10px;">LoadGenericNonLinear</a></legend>
                    <div id="LoadGenericNonLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.template.call (this) +
                    `
                    {{#bs}}<div><b>bs</b>: {{bs}}</div>{{/bs}}
                    {{#bt}}<div><b>bt</b>: {{bt}}</div>{{/bt}}
                    {{#genericNonLinearLoadModelType}}<div><b>genericNonLinearLoadModelType</b>: {{genericNonLinearLoadModelType}}</div>{{/genericNonLinearLoadModelType}}
                    {{#ls}}<div><b>ls</b>: {{ls}}</div>{{/ls}}
                    {{#lt}}<div><b>lt</b>: {{lt}}</div>{{/lt}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tq}}<div><b>tq</b>: {{tq}}</div>{{/tq}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["genericNonLinearLoadModelTypeGenericNonLinearLoadModelKind"] = [{ id: '', selected: (!obj["genericNonLinearLoadModelType"])}]; for (let property in GenericNonLinearLoadModelKind) obj["genericNonLinearLoadModelTypeGenericNonLinearLoadModelKind"].push ({ id: property, selected: obj["genericNonLinearLoadModelType"] && obj["genericNonLinearLoadModelType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["genericNonLinearLoadModelTypeGenericNonLinearLoadModelKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadGenericNonLinear_collapse" aria-expanded="true" aria-controls="{{id}}_LoadGenericNonLinear_collapse" style="margin-left: 10px;">LoadGenericNonLinear</a></legend>
                    <div id="{{id}}_LoadGenericNonLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bs'>bs: </label><div class='col-sm-8'><input id='{{id}}_bs' class='form-control' type='text'{{#bs}} value='{{bs}}'{{/bs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bt'>bt: </label><div class='col-sm-8'><input id='{{id}}_bt' class='form-control' type='text'{{#bt}} value='{{bt}}'{{/bt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_genericNonLinearLoadModelType'>genericNonLinearLoadModelType: </label><div class='col-sm-8'><select id='{{id}}_genericNonLinearLoadModelType' class='form-control custom-select'>{{#genericNonLinearLoadModelTypeGenericNonLinearLoadModelKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/genericNonLinearLoadModelTypeGenericNonLinearLoadModelKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ls'>ls: </label><div class='col-sm-8'><input id='{{id}}_ls' class='form-control' type='text'{{#ls}} value='{{ls}}'{{/ls}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lt'>lt: </label><div class='col-sm-8'><input id='{{id}}_lt' class='form-control' type='text'{{#lt}} value='{{lt}}'{{/lt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tq'>tq: </label><div class='col-sm-8'><input id='{{id}}_tq' class='form-control' type='text'{{#tq}} value='{{tq}}'{{/tq}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadGenericNonLinear" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bs").value; if ("" !== temp) obj["bs"] = temp;
                temp = document.getElementById (id + "_bt").value; if ("" !== temp) obj["bt"] = temp;
                temp = GenericNonLinearLoadModelKind[document.getElementById (id + "_genericNonLinearLoadModelType").value]; if (temp) obj["genericNonLinearLoadModelType"] = "http://iec.ch/TC57/2016/CIM-schema-cim17#GenericNonLinearLoadModelKind." + temp; else delete obj["genericNonLinearLoadModelType"];
                temp = document.getElementById (id + "_ls").value; if ("" !== temp) obj["ls"] = temp;
                temp = document.getElementById (id + "_lt").value; if ("" !== temp) obj["lt"] = temp;
                temp = document.getElementById (id + "_tp").value; if ("" !== temp) obj["tp"] = temp;
                temp = document.getElementById (id + "_tq").value; if ("" !== temp) obj["tq"] = temp;

                return (obj);
            }
        }

        /**
         * Aggregate loads are used to represent all or part of the real and reactive load from one or more loads in the static (power flow) data.
         *
         * This load is usually the aggregation of many individual load devices and the load model is an approximate representation of the aggregate response of the load devices to system disturbances.
         * Standard aggregate load model comprised of static and/or dynamic components.  A static load model represents the sensitivity of the real and reactive power consumed by the load to the amplitude and frequency of the bus voltage. A dynamic load model can be used to represent the aggregate response of the motor components of the load.
         *
         */
        class LoadAggregate extends LoadDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.LoadAggregate;
                if (null == bucket)
                   cim_data.LoadAggregate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadAggregate[obj.id];
            }

            parse (context, sub)
            {
                let obj = LoadDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "LoadAggregate";
                base.parse_attribute (/<cim:LoadAggregate.LoadMotor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadMotor", sub, context);
                base.parse_attribute (/<cim:LoadAggregate.LoadStatic\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "LoadStatic", sub, context);
                let bucket = context.parsed.LoadAggregate;
                if (null == bucket)
                   context.parsed.LoadAggregate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = LoadDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "LoadAggregate", "LoadMotor", "LoadMotor", fields);
                base.export_attribute (obj, "LoadAggregate", "LoadStatic", "LoadStatic", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadAggregate_collapse" aria-expanded="true" aria-controls="LoadAggregate_collapse" style="margin-left: 10px;">LoadAggregate</a></legend>
                    <div id="LoadAggregate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.template.call (this) +
                    `
                    {{#LoadMotor}}<div><b>LoadMotor</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadMotor}}");}); return false;'>{{LoadMotor}}</a></div>{{/LoadMotor}}
                    {{#LoadStatic}}<div><b>LoadStatic</b>: <a href='#' onclick='require(["cimmap"], function(cimmap) {cimmap.select ("{{LoadStatic}}");}); return false;'>{{LoadStatic}}</a></div>{{/LoadStatic}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadAggregate_collapse" aria-expanded="true" aria-controls="{{id}}_LoadAggregate_collapse" style="margin-left: 10px;">LoadAggregate</a></legend>
                    <div id="{{id}}_LoadAggregate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadMotor'>LoadMotor: </label><div class='col-sm-8'><input id='{{id}}_LoadMotor' class='form-control' type='text'{{#LoadMotor}} value='{{LoadMotor}}'{{/LoadMotor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadStatic'>LoadStatic: </label><div class='col-sm-8'><input id='{{id}}_LoadStatic' class='form-control' type='text'{{#LoadStatic}} value='{{LoadStatic}}'{{/LoadStatic}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "LoadAggregate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_LoadMotor").value; if ("" !== temp) obj["LoadMotor"] = temp;
                temp = document.getElementById (id + "_LoadStatic").value; if ("" !== temp) obj["LoadStatic"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LoadMotor", "0..1", "1", "LoadMotor", "LoadAggregate"],
                            ["LoadStatic", "0..1", "1", "LoadStatic", "LoadAggregate"]
                        ]
                    )
                );
            }
        }

        return (
            {
                GenericNonLinearLoadModelKind: GenericNonLinearLoadModelKind,
                StaticLoadModelKind: StaticLoadModelKind,
                LoadGenericNonLinear: LoadGenericNonLinear,
                LoadStatic: LoadStatic,
                LoadMotor: LoadMotor,
                LoadAggregate: LoadAggregate,
                LoadComposite: LoadComposite,
                LoadDynamics: LoadDynamics
            }
        );
    }
);