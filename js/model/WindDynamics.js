define
(
    ["model/base", "model/Core", "model/StandardModels"],
    /**
     * Wind turbines are generally divided into 4 types, which are currently significant in power systems.
     *
     * The 4 types have the following characteristics:
     *
     */
    function (base, Core, StandardModels)
    {

        /**
         * General wind turbine Q control modes <i>M</i><sub>qG</sub>.
         *
         */
        var WindQcontrolModeKind =
        {
            voltage: "voltage",
            reactivePower: "reactivePower",
            openLoopReactivePower: "openLoopReactivePower",
            powerFactor: "powerFactor",
            openLooppowerFactor: "openLooppowerFactor"
        };
        Object.freeze (WindQcontrolModeKind);

        /**
         * Reactive power/voltage controller mode.
         *
         */
        var WindPlantQcontrolModeKind =
        {
            reactivePower: "reactivePower",
            powerFactor: "powerFactor",
            uqStatic: "uqStatic",
            voltageControl: "voltageControl"
        };
        Object.freeze (WindPlantQcontrolModeKind);

        /**
         * Function of the lookup table.
         *
         */
        var WindLookupTableFunctionKind =
        {
            prr: "prr",
            omegap: "omegap",
            ipmax: "ipmax",
            iqmax: "iqmax",
            pwp: "pwp",
            tcwdu: "tcwdu",
            tduwt: "tduwt",
            qmaxp: "qmaxp",
            qminp: "qminp",
            qmaxu: "qmaxu",
            qminu: "qminu",
            tuover: "tuover",
            tuunder: "tuunder",
            tfover: "tfover",
            tfunder: "tfunder",
            qwp: "qwp"
        };
        Object.freeze (WindLookupTableFunctionKind);

        /**
         * UVRT Q control modes <i>M</i><sub>qUVRT</sub>.
         *
         */
        var WindUVRTQcontrolModeKind =
        {
            mode0: "mode0",
            mode1: "mode1",
            mode2: "mode2"
        };
        Object.freeze (WindUVRTQcontrolModeKind);

        /**
         * Pitch angle control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.2.
         *
         */
        class WindContPitchAngleIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContPitchAngleIEC;
                if (null == bucket)
                   cim_data.WindContPitchAngleIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContPitchAngleIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPitchAngleIEC";
                base.parse_element (/<cim:WindContPitchAngleIEC.dthetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamax>/g, obj, "dthetamax", base.to_float, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.dthetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamin>/g, obj, "dthetamin", base.to_float, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kic>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kic>/g, obj, "kic", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kiomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kiomega>/g, obj, "kiomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpc>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpc>/g, obj, "kpc", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpomega>/g, obj, "kpomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpx>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpx>/g, obj, "kpx", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.thetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamax>/g, obj, "thetamax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.thetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamin>/g, obj, "thetamin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.ttheta>([\s\S]*?)<\/cim:WindContPitchAngleIEC.ttheta>/g, obj, "ttheta", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPitchAngleIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                var bucket = context.parsed.WindContPitchAngleIEC;
                if (null == bucket)
                   context.parsed.WindContPitchAngleIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContPitchAngleIEC", "dthetamax", "dthetamax",  base.from_float, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "dthetamin", "dthetamin",  base.from_float, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kic", "kic",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kiomega", "kiomega",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpc", "kpc",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpomega", "kpomega",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpx", "kpx",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "thetamax", "thetamax",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "thetamin", "thetamin",  base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "ttheta", "ttheta",  base.from_string, fields);
                base.export_attribute (obj, "WindContPitchAngleIEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContPitchAngleIEC_collapse" aria-expanded="true" aria-controls="WindContPitchAngleIEC_collapse" style="margin-left: 10px;">WindContPitchAngleIEC</a></legend>
                    <div id="WindContPitchAngleIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dthetamax}}<div><b>dthetamax</b>: {{dthetamax}}</div>{{/dthetamax}}
                    {{#dthetamin}}<div><b>dthetamin</b>: {{dthetamin}}</div>{{/dthetamin}}
                    {{#kic}}<div><b>kic</b>: {{kic}}</div>{{/kic}}
                    {{#kiomega}}<div><b>kiomega</b>: {{kiomega}}</div>{{/kiomega}}
                    {{#kpc}}<div><b>kpc</b>: {{kpc}}</div>{{/kpc}}
                    {{#kpomega}}<div><b>kpomega</b>: {{kpomega}}</div>{{/kpomega}}
                    {{#kpx}}<div><b>kpx</b>: {{kpx}}</div>{{/kpx}}
                    {{#thetamax}}<div><b>thetamax</b>: {{thetamax}}</div>{{/thetamax}}
                    {{#thetamin}}<div><b>thetamin</b>: {{thetamin}}</div>{{/thetamin}}
                    {{#ttheta}}<div><b>ttheta</b>: {{ttheta}}</div>{{/ttheta}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContPitchAngleIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContPitchAngleIEC_collapse" style="margin-left: 10px;">WindContPitchAngleIEC</a></legend>
                    <div id="{{id}}_WindContPitchAngleIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dthetamax'>dthetamax: </label><div class='col-sm-8'><input id='{{id}}_dthetamax' class='form-control' type='text'{{#dthetamax}} value='{{dthetamax}}'{{/dthetamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dthetamin'>dthetamin: </label><div class='col-sm-8'><input id='{{id}}_dthetamin' class='form-control' type='text'{{#dthetamin}} value='{{dthetamin}}'{{/dthetamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kic'>kic: </label><div class='col-sm-8'><input id='{{id}}_kic' class='form-control' type='text'{{#kic}} value='{{kic}}'{{/kic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiomega'>kiomega: </label><div class='col-sm-8'><input id='{{id}}_kiomega' class='form-control' type='text'{{#kiomega}} value='{{kiomega}}'{{/kiomega}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpc'>kpc: </label><div class='col-sm-8'><input id='{{id}}_kpc' class='form-control' type='text'{{#kpc}} value='{{kpc}}'{{/kpc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpomega'>kpomega: </label><div class='col-sm-8'><input id='{{id}}_kpomega' class='form-control' type='text'{{#kpomega}} value='{{kpomega}}'{{/kpomega}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpx'>kpx: </label><div class='col-sm-8'><input id='{{id}}_kpx' class='form-control' type='text'{{#kpx}} value='{{kpx}}'{{/kpx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetamax'>thetamax: </label><div class='col-sm-8'><input id='{{id}}_thetamax' class='form-control' type='text'{{#thetamax}} value='{{thetamax}}'{{/thetamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetamin'>thetamin: </label><div class='col-sm-8'><input id='{{id}}_thetamin' class='form-control' type='text'{{#thetamin}} value='{{thetamin}}'{{/thetamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ttheta'>ttheta: </label><div class='col-sm-8'><input id='{{id}}_ttheta' class='form-control' type='text'{{#ttheta}} value='{{ttheta}}'{{/ttheta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContPitchAngleIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dthetamax").value; if ("" != temp) obj.dthetamax = temp;
                temp = document.getElementById (id + "_dthetamin").value; if ("" != temp) obj.dthetamin = temp;
                temp = document.getElementById (id + "_kic").value; if ("" != temp) obj.kic = temp;
                temp = document.getElementById (id + "_kiomega").value; if ("" != temp) obj.kiomega = temp;
                temp = document.getElementById (id + "_kpc").value; if ("" != temp) obj.kpc = temp;
                temp = document.getElementById (id + "_kpomega").value; if ("" != temp) obj.kpomega = temp;
                temp = document.getElementById (id + "_kpx").value; if ("" != temp) obj.kpx = temp;
                temp = document.getElementById (id + "_thetamax").value; if ("" != temp) obj.thetamax = temp;
                temp = document.getElementById (id + "_thetamin").value; if ("" != temp) obj.thetamin = temp;
                temp = document.getElementById (id + "_ttheta").value; if ("" != temp) obj.ttheta = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3IEC", "1", "1", "WindTurbineType3IEC", "WindContPitchAngleIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Pitch control power model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.1.
         *
         */
        class WindPitchContPowerIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPitchContPowerIEC;
                if (null == bucket)
                   cim_data.WindPitchContPowerIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPitchContPowerIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPitchContPowerIEC";
                base.parse_element (/<cim:WindPitchContPowerIEC.dpmax>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.dpmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmin>/g, obj, "dpmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.pmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.pset>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pset>/g, obj, "pset", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.t1>([\s\S]*?)<\/cim:WindPitchContPowerIEC.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.tr>([\s\S]*?)<\/cim:WindPitchContPowerIEC.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.uuvrt>([\s\S]*?)<\/cim:WindPitchContPowerIEC.uuvrt>/g, obj, "uuvrt", base.to_string, sub, context);
                base.parse_attributes (/<cim:WindPitchContPowerIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType1bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1bIEC", sub, context);
                base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context);
                var bucket = context.parsed.WindPitchContPowerIEC;
                if (null == bucket)
                   context.parsed.WindPitchContPowerIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindPitchContPowerIEC", "dpmax", "dpmax",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "dpmin", "dpmin",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "pmin", "pmin",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "pset", "pset",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "uuvrt", "uuvrt",  base.from_string, fields);
                base.export_attributes (obj, "WindPitchContPowerIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                base.export_attribute (obj, "WindPitchContPowerIEC", "WindGenTurbineType1bIEC", "WindGenTurbineType1bIEC", fields);
                base.export_attribute (obj, "WindPitchContPowerIEC", "WindGenTurbineType2IEC", "WindGenTurbineType2IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPitchContPowerIEC_collapse" aria-expanded="true" aria-controls="WindPitchContPowerIEC_collapse" style="margin-left: 10px;">WindPitchContPowerIEC</a></legend>
                    <div id="WindPitchContPowerIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dpmax}}<div><b>dpmax</b>: {{dpmax}}</div>{{/dpmax}}
                    {{#dpmin}}<div><b>dpmin</b>: {{dpmin}}</div>{{/dpmin}}
                    {{#pmin}}<div><b>pmin</b>: {{pmin}}</div>{{/pmin}}
                    {{#pset}}<div><b>pset</b>: {{pset}}</div>{{/pset}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#uuvrt}}<div><b>uuvrt</b>: {{uuvrt}}</div>{{/uuvrt}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    {{#WindGenTurbineType1bIEC}}<div><b>WindGenTurbineType1bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenTurbineType1bIEC}}&quot;);})'>{{WindGenTurbineType1bIEC}}</a></div>{{/WindGenTurbineType1bIEC}}
                    {{#WindGenTurbineType2IEC}}<div><b>WindGenTurbineType2IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenTurbineType2IEC}}&quot;);})'>{{WindGenTurbineType2IEC}}</a></div>{{/WindGenTurbineType2IEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindPitchContPowerIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindPitchContPowerIEC_collapse" style="margin-left: 10px;">WindPitchContPowerIEC</a></legend>
                    <div id="{{id}}_WindPitchContPowerIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpmax'>dpmax: </label><div class='col-sm-8'><input id='{{id}}_dpmax' class='form-control' type='text'{{#dpmax}} value='{{dpmax}}'{{/dpmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpmin'>dpmin: </label><div class='col-sm-8'><input id='{{id}}_dpmin' class='form-control' type='text'{{#dpmin}} value='{{dpmin}}'{{/dpmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pmin'>pmin: </label><div class='col-sm-8'><input id='{{id}}_pmin' class='form-control' type='text'{{#pmin}} value='{{pmin}}'{{/pmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pset'>pset: </label><div class='col-sm-8'><input id='{{id}}_pset' class='form-control' type='text'{{#pset}} value='{{pset}}'{{/pset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uuvrt'>uuvrt: </label><div class='col-sm-8'><input id='{{id}}_uuvrt' class='form-control' type='text'{{#uuvrt}} value='{{uuvrt}}'{{/uuvrt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenTurbineType1bIEC'>WindGenTurbineType1bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenTurbineType1bIEC' class='form-control' type='text'{{#WindGenTurbineType1bIEC}} value='{{WindGenTurbineType1bIEC}}'{{/WindGenTurbineType1bIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenTurbineType2IEC'>WindGenTurbineType2IEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenTurbineType2IEC' class='form-control' type='text'{{#WindGenTurbineType2IEC}} value='{{WindGenTurbineType2IEC}}'{{/WindGenTurbineType2IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindPitchContPowerIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpmax").value; if ("" != temp) obj.dpmax = temp;
                temp = document.getElementById (id + "_dpmin").value; if ("" != temp) obj.dpmin = temp;
                temp = document.getElementById (id + "_pmin").value; if ("" != temp) obj.pmin = temp;
                temp = document.getElementById (id + "_pset").value; if ("" != temp) obj.pset = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_uuvrt").value; if ("" != temp) obj.uuvrt = temp;
                temp = document.getElementById (id + "_WindGenTurbineType1bIEC").value; if ("" != temp) obj.WindGenTurbineType1bIEC = temp;
                temp = document.getElementById (id + "_WindGenTurbineType2IEC").value; if ("" != temp) obj.WindGenTurbineType2IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindPitchContPowerIEC"],
                            ["WindGenTurbineType1bIEC", "0..1", "1", "WindGenTurbineType1bIEC", "WindPitchContPowerIEC"],
                            ["WindGenTurbineType2IEC", "0..1", "1", "WindGenTurbineType2IEC", "WindPitchContPowerIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * IEC Type 4 generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.4.
         *
         */
        class WindGenType4IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenType4IEC;
                if (null == bucket)
                   cim_data.WindGenType4IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenType4IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType4IEC";
                base.parse_element (/<cim:WindGenType4IEC.dipmax>([\s\S]*?)<\/cim:WindGenType4IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.diqmax>([\s\S]*?)<\/cim:WindGenType4IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.diqmin>([\s\S]*?)<\/cim:WindGenType4IEC.diqmin>/g, obj, "diqmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.tg>([\s\S]*?)<\/cim:WindGenType4IEC.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context);
                base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);
                var bucket = context.parsed.WindGenType4IEC;
                if (null == bucket)
                   context.parsed.WindGenType4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindGenType4IEC", "dipmax", "dipmax",  base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "diqmax", "diqmax",  base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "diqmin", "diqmin",  base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "tg", "tg",  base.from_string, fields);
                base.export_attribute (obj, "WindGenType4IEC", "WindTurbineType4aIEC", "WindTurbineType4aIEC", fields);
                base.export_attribute (obj, "WindGenType4IEC", "WindTurbineType4bIEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenType4IEC_collapse" aria-expanded="true" aria-controls="WindGenType4IEC_collapse" style="margin-left: 10px;">WindGenType4IEC</a></legend>
                    <div id="WindGenType4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dipmax}}<div><b>dipmax</b>: {{dipmax}}</div>{{/dipmax}}
                    {{#diqmax}}<div><b>diqmax</b>: {{diqmax}}</div>{{/diqmax}}
                    {{#diqmin}}<div><b>diqmin</b>: {{diqmin}}</div>{{/diqmin}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#WindTurbineType4aIEC}}<div><b>WindTurbineType4aIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4aIEC}}&quot;);})'>{{WindTurbineType4aIEC}}</a></div>{{/WindTurbineType4aIEC}}
                    {{#WindTurbineType4bIEC}}<div><b>WindTurbineType4bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4bIEC}}&quot;);})'>{{WindTurbineType4bIEC}}</a></div>{{/WindTurbineType4bIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenType4IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenType4IEC_collapse" style="margin-left: 10px;">WindGenType4IEC</a></legend>
                    <div id="{{id}}_WindGenType4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dipmax'>dipmax: </label><div class='col-sm-8'><input id='{{id}}_dipmax' class='form-control' type='text'{{#dipmax}} value='{{dipmax}}'{{/dipmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diqmax'>diqmax: </label><div class='col-sm-8'><input id='{{id}}_diqmax' class='form-control' type='text'{{#diqmax}} value='{{diqmax}}'{{/diqmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diqmin'>diqmin: </label><div class='col-sm-8'><input id='{{id}}_diqmin' class='form-control' type='text'{{#diqmin}} value='{{diqmin}}'{{/diqmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4aIEC'>WindTurbineType4aIEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4aIEC' class='form-control' type='text'{{#WindTurbineType4aIEC}} value='{{WindTurbineType4aIEC}}'{{/WindTurbineType4aIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4bIEC'>WindTurbineType4bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4bIEC' class='form-control' type='text'{{#WindTurbineType4bIEC}} value='{{WindTurbineType4bIEC}}'{{/WindTurbineType4bIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenType4IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dipmax").value; if ("" != temp) obj.dipmax = temp;
                temp = document.getElementById (id + "_diqmax").value; if ("" != temp) obj.diqmax = temp;
                temp = document.getElementById (id + "_diqmin").value; if ("" != temp) obj.diqmin = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_WindTurbineType4aIEC").value; if ("" != temp) obj.WindTurbineType4aIEC = temp;
                temp = document.getElementById (id + "_WindTurbineType4bIEC").value; if ("" != temp) obj.WindTurbineType4bIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType4aIEC", "0..1", "0..1", "WindTurbineType4aIEC", "WindGenType4IEC"],
                            ["WindTurbineType4bIEC", "0..1", "0..1", "WindTurbineType4bIEC", "WindGenType4IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Simplified plant voltage and reactive power control model for use with type 3 and type 4 wind turbine models.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        class WindPlantReactiveControlIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPlantReactiveControlIEC;
                if (null == bucket)
                   cim_data.WindPlantReactiveControlIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPlantReactiveControlIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantReactiveControlIEC";
                base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmax>/g, obj, "dxrefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmin>/g, obj, "dxrefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpx>/g, obj, "kiwpx", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmax>/g, obj, "kiwpxmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmin>/g, obj, "kiwpxmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kpwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kpwpx>/g, obj, "kpwpx", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqref>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqref>/g, obj, "kwpqref", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqu>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqu>/g, obj, "kwpqu", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.tuqfilt>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.tuqfilt>/g, obj, "tuqfilt", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twppfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twppfiltq>/g, obj, "twppfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twpqfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpqfiltq>/g, obj, "twpqfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twpufiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpufiltq>/g, obj, "twpufiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.txft>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txft>/g, obj, "txft", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.txfv>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txfv>/g, obj, "txfv", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.uwpqdip>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.uwpqdip>/g, obj, "uwpqdip", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "windPlantQcontrolModesType", sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmax>/g, obj, "xrefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmin>/g, obj, "xrefmin", base.to_string, sub, context);
                base.parse_attributes (/<cim:WindPlantReactiveControlIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                base.parse_attribute (/<cim:WindPlantReactiveControlIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context);
                var bucket = context.parsed.WindPlantReactiveControlIEC;
                if (null == bucket)
                   context.parsed.WindPlantReactiveControlIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindPlantReactiveControlIEC", "dxrefmax", "dxrefmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "dxrefmin", "dxrefmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpx", "kiwpx",  base.from_float, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpxmax", "kiwpxmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpxmin", "kiwpxmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kpwpx", "kpwpx",  base.from_float, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kwpqref", "kwpqref",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kwpqu", "kwpqu",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "tuqfilt", "tuqfilt",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twppfiltq", "twppfiltq",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twpqfiltq", "twpqfiltq",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twpufiltq", "twpufiltq",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "txft", "txft",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "txfv", "txfv",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "uwpqdip", "uwpqdip",  base.from_string, fields);
                base.export_attribute (obj, "WindPlantReactiveControlIEC", "windPlantQcontrolModesType", "windPlantQcontrolModesType", fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "xrefmax", "xrefmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "xrefmin", "xrefmin",  base.from_string, fields);
                base.export_attributes (obj, "WindPlantReactiveControlIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                base.export_attribute (obj, "WindPlantReactiveControlIEC", "WindPlantIEC", "WindPlantIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantReactiveControlIEC_collapse" aria-expanded="true" aria-controls="WindPlantReactiveControlIEC_collapse" style="margin-left: 10px;">WindPlantReactiveControlIEC</a></legend>
                    <div id="WindPlantReactiveControlIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dxrefmax}}<div><b>dxrefmax</b>: {{dxrefmax}}</div>{{/dxrefmax}}
                    {{#dxrefmin}}<div><b>dxrefmin</b>: {{dxrefmin}}</div>{{/dxrefmin}}
                    {{#kiwpx}}<div><b>kiwpx</b>: {{kiwpx}}</div>{{/kiwpx}}
                    {{#kiwpxmax}}<div><b>kiwpxmax</b>: {{kiwpxmax}}</div>{{/kiwpxmax}}
                    {{#kiwpxmin}}<div><b>kiwpxmin</b>: {{kiwpxmin}}</div>{{/kiwpxmin}}
                    {{#kpwpx}}<div><b>kpwpx</b>: {{kpwpx}}</div>{{/kpwpx}}
                    {{#kwpqref}}<div><b>kwpqref</b>: {{kwpqref}}</div>{{/kwpqref}}
                    {{#kwpqu}}<div><b>kwpqu</b>: {{kwpqu}}</div>{{/kwpqu}}
                    {{#tuqfilt}}<div><b>tuqfilt</b>: {{tuqfilt}}</div>{{/tuqfilt}}
                    {{#twppfiltq}}<div><b>twppfiltq</b>: {{twppfiltq}}</div>{{/twppfiltq}}
                    {{#twpqfiltq}}<div><b>twpqfiltq</b>: {{twpqfiltq}}</div>{{/twpqfiltq}}
                    {{#twpufiltq}}<div><b>twpufiltq</b>: {{twpufiltq}}</div>{{/twpufiltq}}
                    {{#txft}}<div><b>txft</b>: {{txft}}</div>{{/txft}}
                    {{#txfv}}<div><b>txfv</b>: {{txfv}}</div>{{/txfv}}
                    {{#uwpqdip}}<div><b>uwpqdip</b>: {{uwpqdip}}</div>{{/uwpqdip}}
                    {{#windPlantQcontrolModesType}}<div><b>windPlantQcontrolModesType</b>: {{windPlantQcontrolModesType}}</div>{{/windPlantQcontrolModesType}}
                    {{#xrefmax}}<div><b>xrefmax</b>: {{xrefmax}}</div>{{/xrefmax}}
                    {{#xrefmin}}<div><b>xrefmin</b>: {{xrefmin}}</div>{{/xrefmin}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    {{#WindPlantIEC}}<div><b>WindPlantIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantIEC}}&quot;);})'>{{WindPlantIEC}}</a></div>{{/WindPlantIEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindPlantQcontrolModeKind = []; if (!obj.windPlantQcontrolModesType) obj.WindPlantQcontrolModeKind.push ({ id: '', selected: true}); for (var property in WindPlantQcontrolModeKind) obj.WindPlantQcontrolModeKind.push ({ id: property, selected: obj.windPlantQcontrolModesType && obj.windPlantQcontrolModesType.endsWith ('.' + property)});
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindPlantQcontrolModeKind;
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindPlantReactiveControlIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindPlantReactiveControlIEC_collapse" style="margin-left: 10px;">WindPlantReactiveControlIEC</a></legend>
                    <div id="{{id}}_WindPlantReactiveControlIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dxrefmax'>dxrefmax: </label><div class='col-sm-8'><input id='{{id}}_dxrefmax' class='form-control' type='text'{{#dxrefmax}} value='{{dxrefmax}}'{{/dxrefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dxrefmin'>dxrefmin: </label><div class='col-sm-8'><input id='{{id}}_dxrefmin' class='form-control' type='text'{{#dxrefmin}} value='{{dxrefmin}}'{{/dxrefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwpx'>kiwpx: </label><div class='col-sm-8'><input id='{{id}}_kiwpx' class='form-control' type='text'{{#kiwpx}} value='{{kiwpx}}'{{/kiwpx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwpxmax'>kiwpxmax: </label><div class='col-sm-8'><input id='{{id}}_kiwpxmax' class='form-control' type='text'{{#kiwpxmax}} value='{{kiwpxmax}}'{{/kiwpxmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwpxmin'>kiwpxmin: </label><div class='col-sm-8'><input id='{{id}}_kiwpxmin' class='form-control' type='text'{{#kiwpxmin}} value='{{kiwpxmin}}'{{/kiwpxmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpwpx'>kpwpx: </label><div class='col-sm-8'><input id='{{id}}_kpwpx' class='form-control' type='text'{{#kpwpx}} value='{{kpwpx}}'{{/kpwpx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kwpqref'>kwpqref: </label><div class='col-sm-8'><input id='{{id}}_kwpqref' class='form-control' type='text'{{#kwpqref}} value='{{kwpqref}}'{{/kwpqref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kwpqu'>kwpqu: </label><div class='col-sm-8'><input id='{{id}}_kwpqu' class='form-control' type='text'{{#kwpqu}} value='{{kwpqu}}'{{/kwpqu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tuqfilt'>tuqfilt: </label><div class='col-sm-8'><input id='{{id}}_tuqfilt' class='form-control' type='text'{{#tuqfilt}} value='{{tuqfilt}}'{{/tuqfilt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twppfiltq'>twppfiltq: </label><div class='col-sm-8'><input id='{{id}}_twppfiltq' class='form-control' type='text'{{#twppfiltq}} value='{{twppfiltq}}'{{/twppfiltq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twpqfiltq'>twpqfiltq: </label><div class='col-sm-8'><input id='{{id}}_twpqfiltq' class='form-control' type='text'{{#twpqfiltq}} value='{{twpqfiltq}}'{{/twpqfiltq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twpufiltq'>twpufiltq: </label><div class='col-sm-8'><input id='{{id}}_twpufiltq' class='form-control' type='text'{{#twpufiltq}} value='{{twpufiltq}}'{{/twpufiltq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_txft'>txft: </label><div class='col-sm-8'><input id='{{id}}_txft' class='form-control' type='text'{{#txft}} value='{{txft}}'{{/txft}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_txfv'>txfv: </label><div class='col-sm-8'><input id='{{id}}_txfv' class='form-control' type='text'{{#txfv}} value='{{txfv}}'{{/txfv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uwpqdip'>uwpqdip: </label><div class='col-sm-8'><input id='{{id}}_uwpqdip' class='form-control' type='text'{{#uwpqdip}} value='{{uwpqdip}}'{{/uwpqdip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windPlantQcontrolModesType'>windPlantQcontrolModesType: </label><div class='col-sm-8'><select id='{{id}}_windPlantQcontrolModesType' class='form-control'>{{#WindPlantQcontrolModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindPlantQcontrolModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xrefmax'>xrefmax: </label><div class='col-sm-8'><input id='{{id}}_xrefmax' class='form-control' type='text'{{#xrefmax}} value='{{xrefmax}}'{{/xrefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xrefmin'>xrefmin: </label><div class='col-sm-8'><input id='{{id}}_xrefmin' class='form-control' type='text'{{#xrefmin}} value='{{xrefmin}}'{{/xrefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantIEC'>WindPlantIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantIEC' class='form-control' type='text'{{#WindPlantIEC}} value='{{WindPlantIEC}}'{{/WindPlantIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindPlantReactiveControlIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dxrefmax").value; if ("" != temp) obj.dxrefmax = temp;
                temp = document.getElementById (id + "_dxrefmin").value; if ("" != temp) obj.dxrefmin = temp;
                temp = document.getElementById (id + "_kiwpx").value; if ("" != temp) obj.kiwpx = temp;
                temp = document.getElementById (id + "_kiwpxmax").value; if ("" != temp) obj.kiwpxmax = temp;
                temp = document.getElementById (id + "_kiwpxmin").value; if ("" != temp) obj.kiwpxmin = temp;
                temp = document.getElementById (id + "_kpwpx").value; if ("" != temp) obj.kpwpx = temp;
                temp = document.getElementById (id + "_kwpqref").value; if ("" != temp) obj.kwpqref = temp;
                temp = document.getElementById (id + "_kwpqu").value; if ("" != temp) obj.kwpqu = temp;
                temp = document.getElementById (id + "_tuqfilt").value; if ("" != temp) obj.tuqfilt = temp;
                temp = document.getElementById (id + "_twppfiltq").value; if ("" != temp) obj.twppfiltq = temp;
                temp = document.getElementById (id + "_twpqfiltq").value; if ("" != temp) obj.twpqfiltq = temp;
                temp = document.getElementById (id + "_twpufiltq").value; if ("" != temp) obj.twpufiltq = temp;
                temp = document.getElementById (id + "_txft").value; if ("" != temp) obj.txft = temp;
                temp = document.getElementById (id + "_txfv").value; if ("" != temp) obj.txfv = temp;
                temp = document.getElementById (id + "_uwpqdip").value; if ("" != temp) obj.uwpqdip = temp;
                temp = document.getElementById (id + "_windPlantQcontrolModesType").value; if ("" != temp) { temp = WindPlantQcontrolModeKind[temp]; if ("undefined" != typeof (temp)) obj.windPlantQcontrolModesType = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WindPlantQcontrolModeKind." + temp; }
                temp = document.getElementById (id + "_xrefmax").value; if ("" != temp) obj.xrefmax = temp;
                temp = document.getElementById (id + "_xrefmin").value; if ("" != temp) obj.xrefmin = temp;
                temp = document.getElementById (id + "_WindPlantIEC").value; if ("" != temp) obj.WindPlantIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindPlantReactiveControlIEC"],
                            ["WindPlantIEC", "1", "1", "WindPlantIEC", "WindPlantReactiveControlIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * P control model Type 3.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.4.
         *
         */
        class WindContPType3IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContPType3IEC;
                if (null == bucket)
                   cim_data.WindContPType3IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContPType3IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType3IEC";
                base.parse_element (/<cim:WindContPType3IEC.dpmax>([\s\S]*?)<\/cim:WindContPType3IEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dprefmax>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dprefmin>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dthetamax>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamax>/g, obj, "dthetamax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dthetamaxuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamaxuvrt>/g, obj, "dthetamaxuvrt", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kdtd>([\s\S]*?)<\/cim:WindContPType3IEC.kdtd>/g, obj, "kdtd", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kip>([\s\S]*?)<\/cim:WindContPType3IEC.kip>/g, obj, "kip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kpp>([\s\S]*?)<\/cim:WindContPType3IEC.kpp>/g, obj, "kpp", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.mpuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.mpuvrt>/g, obj, "mpuvrt", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.omegaoffset>([\s\S]*?)<\/cim:WindContPType3IEC.omegaoffset>/g, obj, "omegaoffset", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.pdtdmax>([\s\S]*?)<\/cim:WindContPType3IEC.pdtdmax>/g, obj, "pdtdmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tdvs>([\s\S]*?)<\/cim:WindContPType3IEC.tdvs>/g, obj, "tdvs", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.thetaemin>([\s\S]*?)<\/cim:WindContPType3IEC.thetaemin>/g, obj, "thetaemin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.thetauscale>([\s\S]*?)<\/cim:WindContPType3IEC.thetauscale>/g, obj, "thetauscale", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tomegafiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tomegafiltp3>/g, obj, "tomegafiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tpfiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tpfiltp3>/g, obj, "tpfiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tpord>([\s\S]*?)<\/cim:WindContPType3IEC.tpord>/g, obj, "tpord", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tufiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tufiltp3>/g, obj, "tufiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.twref>([\s\S]*?)<\/cim:WindContPType3IEC.twref>/g, obj, "twref", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.udvs>([\s\S]*?)<\/cim:WindContPType3IEC.udvs>/g, obj, "udvs", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.updip>([\s\S]*?)<\/cim:WindContPType3IEC.updip>/g, obj, "updip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.wdtd>([\s\S]*?)<\/cim:WindContPType3IEC.wdtd>/g, obj, "wdtd", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.zeta>([\s\S]*?)<\/cim:WindContPType3IEC.zeta>/g, obj, "zeta", base.to_float, sub, context);
                base.parse_attribute (/<cim:WindContPType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                base.parse_attributes (/<cim:WindContPType3IEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                var bucket = context.parsed.WindContPType3IEC;
                if (null == bucket)
                   context.parsed.WindContPType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContPType3IEC", "dpmax", "dpmax",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dprefmax", "dprefmax",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dprefmin", "dprefmin",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dthetamax", "dthetamax",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dthetamaxuvrt", "dthetamaxuvrt",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kdtd", "kdtd",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kip", "kip",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kpp", "kpp",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "mpuvrt", "mpuvrt",  base.from_boolean, fields);
                base.export_element (obj, "WindContPType3IEC", "omegaoffset", "omegaoffset",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "pdtdmax", "pdtdmax",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tdvs", "tdvs",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "thetaemin", "thetaemin",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "thetauscale", "thetauscale",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tomegafiltp3", "tomegafiltp3",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tpfiltp3", "tpfiltp3",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tpord", "tpord",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tufiltp3", "tufiltp3",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "twref", "twref",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "udvs", "udvs",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "updip", "updip",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "wdtd", "wdtd",  base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "zeta", "zeta",  base.from_float, fields);
                base.export_attribute (obj, "WindContPType3IEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                base.export_attributes (obj, "WindContPType3IEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContPType3IEC_collapse" aria-expanded="true" aria-controls="WindContPType3IEC_collapse" style="margin-left: 10px;">WindContPType3IEC</a></legend>
                    <div id="WindContPType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dpmax}}<div><b>dpmax</b>: {{dpmax}}</div>{{/dpmax}}
                    {{#dprefmax}}<div><b>dprefmax</b>: {{dprefmax}}</div>{{/dprefmax}}
                    {{#dprefmin}}<div><b>dprefmin</b>: {{dprefmin}}</div>{{/dprefmin}}
                    {{#dthetamax}}<div><b>dthetamax</b>: {{dthetamax}}</div>{{/dthetamax}}
                    {{#dthetamaxuvrt}}<div><b>dthetamaxuvrt</b>: {{dthetamaxuvrt}}</div>{{/dthetamaxuvrt}}
                    {{#kdtd}}<div><b>kdtd</b>: {{kdtd}}</div>{{/kdtd}}
                    {{#kip}}<div><b>kip</b>: {{kip}}</div>{{/kip}}
                    {{#kpp}}<div><b>kpp</b>: {{kpp}}</div>{{/kpp}}
                    {{#mpuvrt}}<div><b>mpuvrt</b>: {{mpuvrt}}</div>{{/mpuvrt}}
                    {{#omegaoffset}}<div><b>omegaoffset</b>: {{omegaoffset}}</div>{{/omegaoffset}}
                    {{#pdtdmax}}<div><b>pdtdmax</b>: {{pdtdmax}}</div>{{/pdtdmax}}
                    {{#tdvs}}<div><b>tdvs</b>: {{tdvs}}</div>{{/tdvs}}
                    {{#thetaemin}}<div><b>thetaemin</b>: {{thetaemin}}</div>{{/thetaemin}}
                    {{#thetauscale}}<div><b>thetauscale</b>: {{thetauscale}}</div>{{/thetauscale}}
                    {{#tomegafiltp3}}<div><b>tomegafiltp3</b>: {{tomegafiltp3}}</div>{{/tomegafiltp3}}
                    {{#tpfiltp3}}<div><b>tpfiltp3</b>: {{tpfiltp3}}</div>{{/tpfiltp3}}
                    {{#tpord}}<div><b>tpord</b>: {{tpord}}</div>{{/tpord}}
                    {{#tufiltp3}}<div><b>tufiltp3</b>: {{tufiltp3}}</div>{{/tufiltp3}}
                    {{#twref}}<div><b>twref</b>: {{twref}}</div>{{/twref}}
                    {{#udvs}}<div><b>udvs</b>: {{udvs}}</div>{{/udvs}}
                    {{#updip}}<div><b>updip</b>: {{updip}}</div>{{/updip}}
                    {{#wdtd}}<div><b>wdtd</b>: {{wdtd}}</div>{{/wdtd}}
                    {{#zeta}}<div><b>zeta</b>: {{zeta}}</div>{{/zeta}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContPType3IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContPType3IEC_collapse" style="margin-left: 10px;">WindContPType3IEC</a></legend>
                    <div id="{{id}}_WindContPType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpmax'>dpmax: </label><div class='col-sm-8'><input id='{{id}}_dpmax' class='form-control' type='text'{{#dpmax}} value='{{dpmax}}'{{/dpmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dprefmax'>dprefmax: </label><div class='col-sm-8'><input id='{{id}}_dprefmax' class='form-control' type='text'{{#dprefmax}} value='{{dprefmax}}'{{/dprefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dprefmin'>dprefmin: </label><div class='col-sm-8'><input id='{{id}}_dprefmin' class='form-control' type='text'{{#dprefmin}} value='{{dprefmin}}'{{/dprefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dthetamax'>dthetamax: </label><div class='col-sm-8'><input id='{{id}}_dthetamax' class='form-control' type='text'{{#dthetamax}} value='{{dthetamax}}'{{/dthetamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dthetamaxuvrt'>dthetamaxuvrt: </label><div class='col-sm-8'><input id='{{id}}_dthetamaxuvrt' class='form-control' type='text'{{#dthetamaxuvrt}} value='{{dthetamaxuvrt}}'{{/dthetamaxuvrt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdtd'>kdtd: </label><div class='col-sm-8'><input id='{{id}}_kdtd' class='form-control' type='text'{{#kdtd}} value='{{kdtd}}'{{/kdtd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kip'>kip: </label><div class='col-sm-8'><input id='{{id}}_kip' class='form-control' type='text'{{#kip}} value='{{kip}}'{{/kip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpp'>kpp: </label><div class='col-sm-8'><input id='{{id}}_kpp' class='form-control' type='text'{{#kpp}} value='{{kpp}}'{{/kpp}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_mpuvrt'>mpuvrt: </label><div class='col-sm-8'><input id='{{id}}_mpuvrt' class='form-check-input' type='checkbox'{{#mpuvrt}} checked{{/mpuvrt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omegaoffset'>omegaoffset: </label><div class='col-sm-8'><input id='{{id}}_omegaoffset' class='form-control' type='text'{{#omegaoffset}} value='{{omegaoffset}}'{{/omegaoffset}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pdtdmax'>pdtdmax: </label><div class='col-sm-8'><input id='{{id}}_pdtdmax' class='form-control' type='text'{{#pdtdmax}} value='{{pdtdmax}}'{{/pdtdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdvs'>tdvs: </label><div class='col-sm-8'><input id='{{id}}_tdvs' class='form-control' type='text'{{#tdvs}} value='{{tdvs}}'{{/tdvs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetaemin'>thetaemin: </label><div class='col-sm-8'><input id='{{id}}_thetaemin' class='form-control' type='text'{{#thetaemin}} value='{{thetaemin}}'{{/thetaemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetauscale'>thetauscale: </label><div class='col-sm-8'><input id='{{id}}_thetauscale' class='form-control' type='text'{{#thetauscale}} value='{{thetauscale}}'{{/thetauscale}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tomegafiltp3'>tomegafiltp3: </label><div class='col-sm-8'><input id='{{id}}_tomegafiltp3' class='form-control' type='text'{{#tomegafiltp3}} value='{{tomegafiltp3}}'{{/tomegafiltp3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpfiltp3'>tpfiltp3: </label><div class='col-sm-8'><input id='{{id}}_tpfiltp3' class='form-control' type='text'{{#tpfiltp3}} value='{{tpfiltp3}}'{{/tpfiltp3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpord'>tpord: </label><div class='col-sm-8'><input id='{{id}}_tpord' class='form-control' type='text'{{#tpord}} value='{{tpord}}'{{/tpord}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltp3'>tufiltp3: </label><div class='col-sm-8'><input id='{{id}}_tufiltp3' class='form-control' type='text'{{#tufiltp3}} value='{{tufiltp3}}'{{/tufiltp3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twref'>twref: </label><div class='col-sm-8'><input id='{{id}}_twref' class='form-control' type='text'{{#twref}} value='{{twref}}'{{/twref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_udvs'>udvs: </label><div class='col-sm-8'><input id='{{id}}_udvs' class='form-control' type='text'{{#udvs}} value='{{udvs}}'{{/udvs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_updip'>updip: </label><div class='col-sm-8'><input id='{{id}}_updip' class='form-control' type='text'{{#updip}} value='{{updip}}'{{/updip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_wdtd'>wdtd: </label><div class='col-sm-8'><input id='{{id}}_wdtd' class='form-control' type='text'{{#wdtd}} value='{{wdtd}}'{{/wdtd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_zeta'>zeta: </label><div class='col-sm-8'><input id='{{id}}_zeta' class='form-control' type='text'{{#zeta}} value='{{zeta}}'{{/zeta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContPType3IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpmax").value; if ("" != temp) obj.dpmax = temp;
                temp = document.getElementById (id + "_dprefmax").value; if ("" != temp) obj.dprefmax = temp;
                temp = document.getElementById (id + "_dprefmin").value; if ("" != temp) obj.dprefmin = temp;
                temp = document.getElementById (id + "_dthetamax").value; if ("" != temp) obj.dthetamax = temp;
                temp = document.getElementById (id + "_dthetamaxuvrt").value; if ("" != temp) obj.dthetamaxuvrt = temp;
                temp = document.getElementById (id + "_kdtd").value; if ("" != temp) obj.kdtd = temp;
                temp = document.getElementById (id + "_kip").value; if ("" != temp) obj.kip = temp;
                temp = document.getElementById (id + "_kpp").value; if ("" != temp) obj.kpp = temp;
                temp = document.getElementById (id + "_mpuvrt").checked; if (temp) obj.mpuvrt = true;
                temp = document.getElementById (id + "_omegaoffset").value; if ("" != temp) obj.omegaoffset = temp;
                temp = document.getElementById (id + "_pdtdmax").value; if ("" != temp) obj.pdtdmax = temp;
                temp = document.getElementById (id + "_tdvs").value; if ("" != temp) obj.tdvs = temp;
                temp = document.getElementById (id + "_thetaemin").value; if ("" != temp) obj.thetaemin = temp;
                temp = document.getElementById (id + "_thetauscale").value; if ("" != temp) obj.thetauscale = temp;
                temp = document.getElementById (id + "_tomegafiltp3").value; if ("" != temp) obj.tomegafiltp3 = temp;
                temp = document.getElementById (id + "_tpfiltp3").value; if ("" != temp) obj.tpfiltp3 = temp;
                temp = document.getElementById (id + "_tpord").value; if ("" != temp) obj.tpord = temp;
                temp = document.getElementById (id + "_tufiltp3").value; if ("" != temp) obj.tufiltp3 = temp;
                temp = document.getElementById (id + "_twref").value; if ("" != temp) obj.twref = temp;
                temp = document.getElementById (id + "_udvs").value; if ("" != temp) obj.udvs = temp;
                temp = document.getElementById (id + "_updip").value; if ("" != temp) obj.updip = temp;
                temp = document.getElementById (id + "_wdtd").value; if ("" != temp) obj.wdtd = temp;
                temp = document.getElementById (id + "_zeta").value; if ("" != temp) obj.zeta = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3IEC", "1", "1", "WindTurbineType3IEC", "WindContPType3IEC"],
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindContPType3IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Q control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.7.
         *
         */
        class WindContQIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContQIEC;
                if (null == bucket)
                   cim_data.WindContQIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContQIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQIEC";
                base.parse_element (/<cim:WindContQIEC.iqh1>([\s\S]*?)<\/cim:WindContQIEC.iqh1>/g, obj, "iqh1", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqmax>([\s\S]*?)<\/cim:WindContQIEC.iqmax>/g, obj, "iqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqmin>([\s\S]*?)<\/cim:WindContQIEC.iqmin>/g, obj, "iqmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqpost>([\s\S]*?)<\/cim:WindContQIEC.iqpost>/g, obj, "iqpost", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kiq>([\s\S]*?)<\/cim:WindContQIEC.kiq>/g, obj, "kiq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kiu>([\s\S]*?)<\/cim:WindContQIEC.kiu>/g, obj, "kiu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kpq>([\s\S]*?)<\/cim:WindContQIEC.kpq>/g, obj, "kpq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kpu>([\s\S]*?)<\/cim:WindContQIEC.kpu>/g, obj, "kpu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kqv>([\s\S]*?)<\/cim:WindContQIEC.kqv>/g, obj, "kqv", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.rdroop>([\s\S]*?)<\/cim:WindContQIEC.rdroop>/g, obj, "rdroop", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tpfiltq>([\s\S]*?)<\/cim:WindContQIEC.tpfiltq>/g, obj, "tpfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tpost>([\s\S]*?)<\/cim:WindContQIEC.tpost>/g, obj, "tpost", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tqord>([\s\S]*?)<\/cim:WindContQIEC.tqord>/g, obj, "tqord", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tufiltq>([\s\S]*?)<\/cim:WindContQIEC.tufiltq>/g, obj, "tufiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.udb1>([\s\S]*?)<\/cim:WindContQIEC.udb1>/g, obj, "udb1", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.udb2>([\s\S]*?)<\/cim:WindContQIEC.udb2>/g, obj, "udb2", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.umax>([\s\S]*?)<\/cim:WindContQIEC.umax>/g, obj, "umax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.umin>([\s\S]*?)<\/cim:WindContQIEC.umin>/g, obj, "umin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.uqdip>([\s\S]*?)<\/cim:WindContQIEC.uqdip>/g, obj, "uqdip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.uref0>([\s\S]*?)<\/cim:WindContQIEC.uref0>/g, obj, "uref0", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQIEC.windQcontrolModesType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "windQcontrolModesType", sub, context);
                base.parse_attribute (/<cim:WindContQIEC.windUVRTQcontrolModesType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "windUVRTQcontrolModesType", sub, context);
                base.parse_element (/<cim:WindContQIEC.xdroop>([\s\S]*?)<\/cim:WindContQIEC.xdroop>/g, obj, "xdroop", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                var bucket = context.parsed.WindContQIEC;
                if (null == bucket)
                   context.parsed.WindContQIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContQIEC", "iqh1", "iqh1",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqmax", "iqmax",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqmin", "iqmin",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqpost", "iqpost",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kiq", "kiq",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kiu", "kiu",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kpq", "kpq",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kpu", "kpu",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kqv", "kqv",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "rdroop", "rdroop",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tpfiltq", "tpfiltq",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tpost", "tpost",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tqord", "tqord",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tufiltq", "tufiltq",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "udb1", "udb1",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "udb2", "udb2",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "umax", "umax",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "umin", "umin",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "uqdip", "uqdip",  base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "uref0", "uref0",  base.from_string, fields);
                base.export_attribute (obj, "WindContQIEC", "windQcontrolModesType", "windQcontrolModesType", fields);
                base.export_attribute (obj, "WindContQIEC", "windUVRTQcontrolModesType", "windUVRTQcontrolModesType", fields);
                base.export_element (obj, "WindContQIEC", "xdroop", "xdroop",  base.from_string, fields);
                base.export_attribute (obj, "WindContQIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContQIEC_collapse" aria-expanded="true" aria-controls="WindContQIEC_collapse" style="margin-left: 10px;">WindContQIEC</a></legend>
                    <div id="WindContQIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#iqh1}}<div><b>iqh1</b>: {{iqh1}}</div>{{/iqh1}}
                    {{#iqmax}}<div><b>iqmax</b>: {{iqmax}}</div>{{/iqmax}}
                    {{#iqmin}}<div><b>iqmin</b>: {{iqmin}}</div>{{/iqmin}}
                    {{#iqpost}}<div><b>iqpost</b>: {{iqpost}}</div>{{/iqpost}}
                    {{#kiq}}<div><b>kiq</b>: {{kiq}}</div>{{/kiq}}
                    {{#kiu}}<div><b>kiu</b>: {{kiu}}</div>{{/kiu}}
                    {{#kpq}}<div><b>kpq</b>: {{kpq}}</div>{{/kpq}}
                    {{#kpu}}<div><b>kpu</b>: {{kpu}}</div>{{/kpu}}
                    {{#kqv}}<div><b>kqv</b>: {{kqv}}</div>{{/kqv}}
                    {{#rdroop}}<div><b>rdroop</b>: {{rdroop}}</div>{{/rdroop}}
                    {{#tpfiltq}}<div><b>tpfiltq</b>: {{tpfiltq}}</div>{{/tpfiltq}}
                    {{#tpost}}<div><b>tpost</b>: {{tpost}}</div>{{/tpost}}
                    {{#tqord}}<div><b>tqord</b>: {{tqord}}</div>{{/tqord}}
                    {{#tufiltq}}<div><b>tufiltq</b>: {{tufiltq}}</div>{{/tufiltq}}
                    {{#udb1}}<div><b>udb1</b>: {{udb1}}</div>{{/udb1}}
                    {{#udb2}}<div><b>udb2</b>: {{udb2}}</div>{{/udb2}}
                    {{#umax}}<div><b>umax</b>: {{umax}}</div>{{/umax}}
                    {{#umin}}<div><b>umin</b>: {{umin}}</div>{{/umin}}
                    {{#uqdip}}<div><b>uqdip</b>: {{uqdip}}</div>{{/uqdip}}
                    {{#uref0}}<div><b>uref0</b>: {{uref0}}</div>{{/uref0}}
                    {{#windQcontrolModesType}}<div><b>windQcontrolModesType</b>: {{windQcontrolModesType}}</div>{{/windQcontrolModesType}}
                    {{#windUVRTQcontrolModesType}}<div><b>windUVRTQcontrolModesType</b>: {{windUVRTQcontrolModesType}}</div>{{/windUVRTQcontrolModesType}}
                    {{#xdroop}}<div><b>xdroop</b>: {{xdroop}}</div>{{/xdroop}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindQcontrolModeKind = []; if (!obj.windQcontrolModesType) obj.WindQcontrolModeKind.push ({ id: '', selected: true}); for (var property in WindQcontrolModeKind) obj.WindQcontrolModeKind.push ({ id: property, selected: obj.windQcontrolModesType && obj.windQcontrolModesType.endsWith ('.' + property)});
                obj.WindUVRTQcontrolModeKind = []; if (!obj.windUVRTQcontrolModesType) obj.WindUVRTQcontrolModeKind.push ({ id: '', selected: true}); for (var property in WindUVRTQcontrolModeKind) obj.WindUVRTQcontrolModeKind.push ({ id: property, selected: obj.windUVRTQcontrolModesType && obj.windUVRTQcontrolModesType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindQcontrolModeKind;
                delete obj.WindUVRTQcontrolModeKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContQIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContQIEC_collapse" style="margin-left: 10px;">WindContQIEC</a></legend>
                    <div id="{{id}}_WindContQIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iqh1'>iqh1: </label><div class='col-sm-8'><input id='{{id}}_iqh1' class='form-control' type='text'{{#iqh1}} value='{{iqh1}}'{{/iqh1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iqmax'>iqmax: </label><div class='col-sm-8'><input id='{{id}}_iqmax' class='form-control' type='text'{{#iqmax}} value='{{iqmax}}'{{/iqmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iqmin'>iqmin: </label><div class='col-sm-8'><input id='{{id}}_iqmin' class='form-control' type='text'{{#iqmin}} value='{{iqmin}}'{{/iqmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iqpost'>iqpost: </label><div class='col-sm-8'><input id='{{id}}_iqpost' class='form-control' type='text'{{#iqpost}} value='{{iqpost}}'{{/iqpost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiq'>kiq: </label><div class='col-sm-8'><input id='{{id}}_kiq' class='form-control' type='text'{{#kiq}} value='{{kiq}}'{{/kiq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiu'>kiu: </label><div class='col-sm-8'><input id='{{id}}_kiu' class='form-control' type='text'{{#kiu}} value='{{kiu}}'{{/kiu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpq'>kpq: </label><div class='col-sm-8'><input id='{{id}}_kpq' class='form-control' type='text'{{#kpq}} value='{{kpq}}'{{/kpq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpu'>kpu: </label><div class='col-sm-8'><input id='{{id}}_kpu' class='form-control' type='text'{{#kpu}} value='{{kpu}}'{{/kpu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kqv'>kqv: </label><div class='col-sm-8'><input id='{{id}}_kqv' class='form-control' type='text'{{#kqv}} value='{{kqv}}'{{/kqv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rdroop'>rdroop: </label><div class='col-sm-8'><input id='{{id}}_rdroop' class='form-control' type='text'{{#rdroop}} value='{{rdroop}}'{{/rdroop}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpfiltq'>tpfiltq: </label><div class='col-sm-8'><input id='{{id}}_tpfiltq' class='form-control' type='text'{{#tpfiltq}} value='{{tpfiltq}}'{{/tpfiltq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpost'>tpost: </label><div class='col-sm-8'><input id='{{id}}_tpost' class='form-control' type='text'{{#tpost}} value='{{tpost}}'{{/tpost}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tqord'>tqord: </label><div class='col-sm-8'><input id='{{id}}_tqord' class='form-control' type='text'{{#tqord}} value='{{tqord}}'{{/tqord}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltq'>tufiltq: </label><div class='col-sm-8'><input id='{{id}}_tufiltq' class='form-control' type='text'{{#tufiltq}} value='{{tufiltq}}'{{/tufiltq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_udb1'>udb1: </label><div class='col-sm-8'><input id='{{id}}_udb1' class='form-control' type='text'{{#udb1}} value='{{udb1}}'{{/udb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_udb2'>udb2: </label><div class='col-sm-8'><input id='{{id}}_udb2' class='form-control' type='text'{{#udb2}} value='{{udb2}}'{{/udb2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_umax'>umax: </label><div class='col-sm-8'><input id='{{id}}_umax' class='form-control' type='text'{{#umax}} value='{{umax}}'{{/umax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_umin'>umin: </label><div class='col-sm-8'><input id='{{id}}_umin' class='form-control' type='text'{{#umin}} value='{{umin}}'{{/umin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uqdip'>uqdip: </label><div class='col-sm-8'><input id='{{id}}_uqdip' class='form-control' type='text'{{#uqdip}} value='{{uqdip}}'{{/uqdip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uref0'>uref0: </label><div class='col-sm-8'><input id='{{id}}_uref0' class='form-control' type='text'{{#uref0}} value='{{uref0}}'{{/uref0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windQcontrolModesType'>windQcontrolModesType: </label><div class='col-sm-8'><select id='{{id}}_windQcontrolModesType' class='form-control'>{{#WindQcontrolModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindQcontrolModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windUVRTQcontrolModesType'>windUVRTQcontrolModesType: </label><div class='col-sm-8'><select id='{{id}}_windUVRTQcontrolModesType' class='form-control'>{{#WindUVRTQcontrolModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindUVRTQcontrolModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xdroop'>xdroop: </label><div class='col-sm-8'><input id='{{id}}_xdroop' class='form-control' type='text'{{#xdroop}} value='{{xdroop}}'{{/xdroop}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContQIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_iqh1").value; if ("" != temp) obj.iqh1 = temp;
                temp = document.getElementById (id + "_iqmax").value; if ("" != temp) obj.iqmax = temp;
                temp = document.getElementById (id + "_iqmin").value; if ("" != temp) obj.iqmin = temp;
                temp = document.getElementById (id + "_iqpost").value; if ("" != temp) obj.iqpost = temp;
                temp = document.getElementById (id + "_kiq").value; if ("" != temp) obj.kiq = temp;
                temp = document.getElementById (id + "_kiu").value; if ("" != temp) obj.kiu = temp;
                temp = document.getElementById (id + "_kpq").value; if ("" != temp) obj.kpq = temp;
                temp = document.getElementById (id + "_kpu").value; if ("" != temp) obj.kpu = temp;
                temp = document.getElementById (id + "_kqv").value; if ("" != temp) obj.kqv = temp;
                temp = document.getElementById (id + "_rdroop").value; if ("" != temp) obj.rdroop = temp;
                temp = document.getElementById (id + "_tpfiltq").value; if ("" != temp) obj.tpfiltq = temp;
                temp = document.getElementById (id + "_tpost").value; if ("" != temp) obj.tpost = temp;
                temp = document.getElementById (id + "_tqord").value; if ("" != temp) obj.tqord = temp;
                temp = document.getElementById (id + "_tufiltq").value; if ("" != temp) obj.tufiltq = temp;
                temp = document.getElementById (id + "_udb1").value; if ("" != temp) obj.udb1 = temp;
                temp = document.getElementById (id + "_udb2").value; if ("" != temp) obj.udb2 = temp;
                temp = document.getElementById (id + "_umax").value; if ("" != temp) obj.umax = temp;
                temp = document.getElementById (id + "_umin").value; if ("" != temp) obj.umin = temp;
                temp = document.getElementById (id + "_uqdip").value; if ("" != temp) obj.uqdip = temp;
                temp = document.getElementById (id + "_uref0").value; if ("" != temp) obj.uref0 = temp;
                temp = document.getElementById (id + "_windQcontrolModesType").value; if ("" != temp) { temp = WindQcontrolModeKind[temp]; if ("undefined" != typeof (temp)) obj.windQcontrolModesType = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WindQcontrolModeKind." + temp; }
                temp = document.getElementById (id + "_windUVRTQcontrolModesType").value; if ("" != temp) { temp = WindUVRTQcontrolModeKind[temp]; if ("undefined" != typeof (temp)) obj.windUVRTQcontrolModesType = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WindUVRTQcontrolModeKind." + temp; }
                temp = document.getElementById (id + "_xdroop").value; if ("" != temp) obj.xdroop = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4IEC", "1", "1", "WindTurbineType3or4IEC", "WIndContQIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * The constant aerodynamic torque model assumes that the aerodynamic torque is constant.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.1.1.
         *
         */
        class WindAeroConstIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindAeroConstIEC;
                if (null == bucket)
                   cim_data.WindAeroConstIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindAeroConstIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroConstIEC";
                base.parse_attribute (/<cim:WindAeroConstIEC.WindGenTurbineType1aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1aIEC", sub, context);
                var bucket = context.parsed.WindAeroConstIEC;
                if (null == bucket)
                   context.parsed.WindAeroConstIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindAeroConstIEC", "WindGenTurbineType1aIEC", "WindGenTurbineType1aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindAeroConstIEC_collapse" aria-expanded="true" aria-controls="WindAeroConstIEC_collapse" style="margin-left: 10px;">WindAeroConstIEC</a></legend>
                    <div id="WindAeroConstIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#WindGenTurbineType1aIEC}}<div><b>WindGenTurbineType1aIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenTurbineType1aIEC}}&quot;);})'>{{WindGenTurbineType1aIEC}}</a></div>{{/WindGenTurbineType1aIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindAeroConstIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindAeroConstIEC_collapse" style="margin-left: 10px;">WindAeroConstIEC</a></legend>
                    <div id="{{id}}_WindAeroConstIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenTurbineType1aIEC'>WindGenTurbineType1aIEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenTurbineType1aIEC' class='form-control' type='text'{{#WindGenTurbineType1aIEC}} value='{{WindGenTurbineType1aIEC}}'{{/WindGenTurbineType1aIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindAeroConstIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindGenTurbineType1aIEC").value; if ("" != temp) obj.WindGenTurbineType1aIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindGenTurbineType1aIEC", "1", "1", "WindGenTurbineType1aIEC", "WindAeroConstIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant including their control models.
         *
         */
        class WindTurbineType3or4Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType3or4Dynamics;
                if (null == bucket)
                   cim_data.WindTurbineType3or4Dynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType3or4Dynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3or4Dynamics";
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                var bucket = context.parsed.WindTurbineType3or4Dynamics;
                if (null == bucket)
                   context.parsed.WindTurbineType3or4Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "EnergySource", "EnergySource", fields);
                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "WindPlantDynamics", "WindPlantDynamics", fields);
                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType3or4Dynamics_collapse" aria-expanded="true" aria-controls="WindTurbineType3or4Dynamics_collapse" style="margin-left: 10px;">WindTurbineType3or4Dynamics</a></legend>
                    <div id="WindTurbineType3or4Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#EnergySource}}<div><b>EnergySource</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergySource}}&quot;);})'>{{EnergySource}}</a></div>{{/EnergySource}}
                    {{#WindPlantDynamics}}<div><b>WindPlantDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantDynamics}}&quot;);})'>{{WindPlantDynamics}}</a></div>{{/WindPlantDynamics}}
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType3or4Dynamics_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType3or4Dynamics_collapse" style="margin-left: 10px;">WindTurbineType3or4Dynamics</a></legend>
                    <div id="{{id}}_WindTurbineType3or4Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergySource'>EnergySource: </label><div class='col-sm-8'><input id='{{id}}_EnergySource' class='form-control' type='text'{{#EnergySource}} value='{{EnergySource}}'{{/EnergySource}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantDynamics'>WindPlantDynamics: </label><div class='col-sm-8'><input id='{{id}}_WindPlantDynamics' class='form-control' type='text'{{#WindPlantDynamics}} value='{{WindPlantDynamics}}'{{/WindPlantDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='{{id}}_RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType3or4Dynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_EnergySource").value; if ("" != temp) obj.EnergySource = temp;
                temp = document.getElementById (id + "_WindPlantDynamics").value; if ("" != temp) obj.WindPlantDynamics = temp;
                temp = document.getElementById (id + "_RemoteInputSignal").value; if ("" != temp) obj.RemoteInputSignal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergySource", "1", "0..1", "EnergySource", "WindTurbineType3or4Dynamics"],
                            ["WindPlantDynamics", "0..1", "1..*", "WindPlantDynamics", "WindTurbineType3or4Dynamics"],
                            ["RemoteInputSignal", "0..1", "0..1", "RemoteInputSignal", "WindTurbineType3or4Dynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * QP and QU limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.10.
         *
         */
        class WindContQPQULimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContQPQULimIEC;
                if (null == bucket)
                   cim_data.WindContQPQULimIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContQPQULimIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQPQULimIEC";
                base.parse_element (/<cim:WindContQPQULimIEC.tpfiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tpfiltql>/g, obj, "tpfiltql", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQPQULimIEC.tufiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tufiltql>/g, obj, "tufiltql", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQPQULimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                base.parse_attributes (/<cim:WindContQPQULimIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                var bucket = context.parsed.WindContQPQULimIEC;
                if (null == bucket)
                   context.parsed.WindContQPQULimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContQPQULimIEC", "tpfiltql", "tpfiltql",  base.from_string, fields);
                base.export_element (obj, "WindContQPQULimIEC", "tufiltql", "tufiltql",  base.from_string, fields);
                base.export_attribute (obj, "WindContQPQULimIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                base.export_attributes (obj, "WindContQPQULimIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContQPQULimIEC_collapse" aria-expanded="true" aria-controls="WindContQPQULimIEC_collapse" style="margin-left: 10px;">WindContQPQULimIEC</a></legend>
                    <div id="WindContQPQULimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#tpfiltql}}<div><b>tpfiltql</b>: {{tpfiltql}}</div>{{/tpfiltql}}
                    {{#tufiltql}}<div><b>tufiltql</b>: {{tufiltql}}</div>{{/tufiltql}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContQPQULimIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContQPQULimIEC_collapse" style="margin-left: 10px;">WindContQPQULimIEC</a></legend>
                    <div id="{{id}}_WindContQPQULimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpfiltql'>tpfiltql: </label><div class='col-sm-8'><input id='{{id}}_tpfiltql' class='form-control' type='text'{{#tpfiltql}} value='{{tpfiltql}}'{{/tpfiltql}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltql'>tufiltql: </label><div class='col-sm-8'><input id='{{id}}_tufiltql' class='form-control' type='text'{{#tufiltql}} value='{{tufiltql}}'{{/tufiltql}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContQPQULimIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tpfiltql").value; if ("" != temp) obj.tpfiltql = temp;
                temp = document.getElementById (id + "_tufiltql").value; if ("" != temp) obj.tufiltql = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4IEC", "0..1", "0..1", "WindTurbineType3or4IEC", "WindContQPQULimIEC"],
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindContQPQULimIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Two mass model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.2.1.
         *
         */
        class WindMechIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindMechIEC;
                if (null == bucket)
                   cim_data.WindMechIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindMechIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindMechIEC";
                base.parse_element (/<cim:WindMechIEC.cdrt>([\s\S]*?)<\/cim:WindMechIEC.cdrt>/g, obj, "cdrt", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.hgen>([\s\S]*?)<\/cim:WindMechIEC.hgen>/g, obj, "hgen", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.hwtr>([\s\S]*?)<\/cim:WindMechIEC.hwtr>/g, obj, "hwtr", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.kdrt>([\s\S]*?)<\/cim:WindMechIEC.kdrt>/g, obj, "kdrt", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);
                var bucket = context.parsed.WindMechIEC;
                if (null == bucket)
                   context.parsed.WindMechIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindMechIEC", "cdrt", "cdrt",  base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "hgen", "hgen",  base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "hwtr", "hwtr",  base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "kdrt", "kdrt",  base.from_string, fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType1or2IEC", "WindTurbineType1or2IEC", fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType4bIEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindMechIEC_collapse" aria-expanded="true" aria-controls="WindMechIEC_collapse" style="margin-left: 10px;">WindMechIEC</a></legend>
                    <div id="WindMechIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#cdrt}}<div><b>cdrt</b>: {{cdrt}}</div>{{/cdrt}}
                    {{#hgen}}<div><b>hgen</b>: {{hgen}}</div>{{/hgen}}
                    {{#hwtr}}<div><b>hwtr</b>: {{hwtr}}</div>{{/hwtr}}
                    {{#kdrt}}<div><b>kdrt</b>: {{kdrt}}</div>{{/kdrt}}
                    {{#WindTurbineType1or2IEC}}<div><b>WindTurbineType1or2IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType1or2IEC}}&quot;);})'>{{WindTurbineType1or2IEC}}</a></div>{{/WindTurbineType1or2IEC}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
                    {{#WindTurbineType4bIEC}}<div><b>WindTurbineType4bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4bIEC}}&quot;);})'>{{WindTurbineType4bIEC}}</a></div>{{/WindTurbineType4bIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindMechIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindMechIEC_collapse" style="margin-left: 10px;">WindMechIEC</a></legend>
                    <div id="{{id}}_WindMechIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cdrt'>cdrt: </label><div class='col-sm-8'><input id='{{id}}_cdrt' class='form-control' type='text'{{#cdrt}} value='{{cdrt}}'{{/cdrt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hgen'>hgen: </label><div class='col-sm-8'><input id='{{id}}_hgen' class='form-control' type='text'{{#hgen}} value='{{hgen}}'{{/hgen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hwtr'>hwtr: </label><div class='col-sm-8'><input id='{{id}}_hwtr' class='form-control' type='text'{{#hwtr}} value='{{hwtr}}'{{/hwtr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdrt'>kdrt: </label><div class='col-sm-8'><input id='{{id}}_kdrt' class='form-control' type='text'{{#kdrt}} value='{{kdrt}}'{{/kdrt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType1or2IEC'>WindTurbineType1or2IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType1or2IEC' class='form-control' type='text'{{#WindTurbineType1or2IEC}} value='{{WindTurbineType1or2IEC}}'{{/WindTurbineType1or2IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4bIEC'>WindTurbineType4bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4bIEC' class='form-control' type='text'{{#WindTurbineType4bIEC}} value='{{WindTurbineType4bIEC}}'{{/WindTurbineType4bIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindMechIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cdrt").value; if ("" != temp) obj.cdrt = temp;
                temp = document.getElementById (id + "_hgen").value; if ("" != temp) obj.hgen = temp;
                temp = document.getElementById (id + "_hwtr").value; if ("" != temp) obj.hwtr = temp;
                temp = document.getElementById (id + "_kdrt").value; if ("" != temp) obj.kdrt = temp;
                temp = document.getElementById (id + "_WindTurbineType1or2IEC").value; if ("" != temp) obj.WindTurbineType1or2IEC = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;
                temp = document.getElementById (id + "_WindTurbineType4bIEC").value; if ("" != temp) obj.WindTurbineType4bIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType1or2IEC", "0..1", "1", "WindTurbineType1or2IEC", "WindMechIEC"],
                            ["WindTurbineType3IEC", "0..1", "1", "WindTurbineType3IEC", "WindMechIEC"],
                            ["WindTurbineType4bIEC", "0..1", "1", "WindTurbineType4bIEC", "WindMechIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Two-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.3.
         *
         */
        class WindAeroTwoDimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindAeroTwoDimIEC;
                if (null == bucket)
                   cim_data.WindAeroTwoDimIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindAeroTwoDimIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroTwoDimIEC";
                base.parse_element (/<cim:WindAeroTwoDimIEC.dpomega>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpomega>/g, obj, "dpomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.dptheta>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dptheta>/g, obj, "dptheta", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.dpv1>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpv1>/g, obj, "dpv1", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.omegazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.omegazero>/g, obj, "omegazero", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.pavail>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.pavail>/g, obj, "pavail", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.thetav2>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetav2>/g, obj, "thetav2", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.thetazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetazero>/g, obj, "thetazero", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindAeroTwoDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                var bucket = context.parsed.WindAeroTwoDimIEC;
                if (null == bucket)
                   context.parsed.WindAeroTwoDimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindAeroTwoDimIEC", "dpomega", "dpomega",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "dptheta", "dptheta",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "dpv1", "dpv1",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "omegazero", "omegazero",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "pavail", "pavail",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "thetav2", "thetav2",  base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "thetazero", "thetazero",  base.from_string, fields);
                base.export_attribute (obj, "WindAeroTwoDimIEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindAeroTwoDimIEC_collapse" aria-expanded="true" aria-controls="WindAeroTwoDimIEC_collapse" style="margin-left: 10px;">WindAeroTwoDimIEC</a></legend>
                    <div id="WindAeroTwoDimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dpomega}}<div><b>dpomega</b>: {{dpomega}}</div>{{/dpomega}}
                    {{#dptheta}}<div><b>dptheta</b>: {{dptheta}}</div>{{/dptheta}}
                    {{#dpv1}}<div><b>dpv1</b>: {{dpv1}}</div>{{/dpv1}}
                    {{#omegazero}}<div><b>omegazero</b>: {{omegazero}}</div>{{/omegazero}}
                    {{#pavail}}<div><b>pavail</b>: {{pavail}}</div>{{/pavail}}
                    {{#thetav2}}<div><b>thetav2</b>: {{thetav2}}</div>{{/thetav2}}
                    {{#thetazero}}<div><b>thetazero</b>: {{thetazero}}</div>{{/thetazero}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindAeroTwoDimIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindAeroTwoDimIEC_collapse" style="margin-left: 10px;">WindAeroTwoDimIEC</a></legend>
                    <div id="{{id}}_WindAeroTwoDimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpomega'>dpomega: </label><div class='col-sm-8'><input id='{{id}}_dpomega' class='form-control' type='text'{{#dpomega}} value='{{dpomega}}'{{/dpomega}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dptheta'>dptheta: </label><div class='col-sm-8'><input id='{{id}}_dptheta' class='form-control' type='text'{{#dptheta}} value='{{dptheta}}'{{/dptheta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpv1'>dpv1: </label><div class='col-sm-8'><input id='{{id}}_dpv1' class='form-control' type='text'{{#dpv1}} value='{{dpv1}}'{{/dpv1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_omegazero'>omegazero: </label><div class='col-sm-8'><input id='{{id}}_omegazero' class='form-control' type='text'{{#omegazero}} value='{{omegazero}}'{{/omegazero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pavail'>pavail: </label><div class='col-sm-8'><input id='{{id}}_pavail' class='form-control' type='text'{{#pavail}} value='{{pavail}}'{{/pavail}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetav2'>thetav2: </label><div class='col-sm-8'><input id='{{id}}_thetav2' class='form-control' type='text'{{#thetav2}} value='{{thetav2}}'{{/thetav2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetazero'>thetazero: </label><div class='col-sm-8'><input id='{{id}}_thetazero' class='form-control' type='text'{{#thetazero}} value='{{thetazero}}'{{/thetazero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindAeroTwoDimIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpomega").value; if ("" != temp) obj.dpomega = temp;
                temp = document.getElementById (id + "_dptheta").value; if ("" != temp) obj.dptheta = temp;
                temp = document.getElementById (id + "_dpv1").value; if ("" != temp) obj.dpv1 = temp;
                temp = document.getElementById (id + "_omegazero").value; if ("" != temp) obj.omegazero = temp;
                temp = document.getElementById (id + "_pavail").value; if ("" != temp) obj.pavail = temp;
                temp = document.getElementById (id + "_thetav2").value; if ("" != temp) obj.thetav2 = temp;
                temp = document.getElementById (id + "_thetazero").value; if ("" != temp) obj.thetazero = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3IEC", "1", "0..1", "WindTurbineType3IEC", "WindAeroTwoDimIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Constant Q limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.9.
         *
         */
        class WindContQLimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContQLimIEC;
                if (null == bucket)
                   cim_data.WindContQLimIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContQLimIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQLimIEC";
                base.parse_element (/<cim:WindContQLimIEC.qmax>([\s\S]*?)<\/cim:WindContQLimIEC.qmax>/g, obj, "qmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQLimIEC.qmin>([\s\S]*?)<\/cim:WindContQLimIEC.qmin>/g, obj, "qmin", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                var bucket = context.parsed.WindContQLimIEC;
                if (null == bucket)
                   context.parsed.WindContQLimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContQLimIEC", "qmax", "qmax",  base.from_string, fields);
                base.export_element (obj, "WindContQLimIEC", "qmin", "qmin",  base.from_string, fields);
                base.export_attribute (obj, "WindContQLimIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContQLimIEC_collapse" aria-expanded="true" aria-controls="WindContQLimIEC_collapse" style="margin-left: 10px;">WindContQLimIEC</a></legend>
                    <div id="WindContQLimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#qmax}}<div><b>qmax</b>: {{qmax}}</div>{{/qmax}}
                    {{#qmin}}<div><b>qmin</b>: {{qmin}}</div>{{/qmin}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContQLimIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContQLimIEC_collapse" style="margin-left: 10px;">WindContQLimIEC</a></legend>
                    <div id="{{id}}_WindContQLimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qmax'>qmax: </label><div class='col-sm-8'><input id='{{id}}_qmax' class='form-control' type='text'{{#qmax}} value='{{qmax}}'{{/qmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qmin'>qmin: </label><div class='col-sm-8'><input id='{{id}}_qmin' class='form-control' type='text'{{#qmin}} value='{{qmin}}'{{/qmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContQLimIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_qmax").value; if ("" != temp) obj.qmax = temp;
                temp = document.getElementById (id + "_qmin").value; if ("" != temp) obj.qmin = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4IEC", "0..1", "0..1", "WindTurbineType3or4IEC", "WindContQLimIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 generator models of IEC type 3A and 3B.
         *
         */
        class WindGenType3IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenType3IEC;
                if (null == bucket)
                   cim_data.WindGenType3IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenType3IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3IEC";
                base.parse_element (/<cim:WindGenType3IEC.dipmax>([\s\S]*?)<\/cim:WindGenType3IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3IEC.diqmax>([\s\S]*?)<\/cim:WindGenType3IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3IEC.xs>([\s\S]*?)<\/cim:WindGenType3IEC.xs>/g, obj, "xs", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                var bucket = context.parsed.WindGenType3IEC;
                if (null == bucket)
                   context.parsed.WindGenType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindGenType3IEC", "dipmax", "dipmax",  base.from_string, fields);
                base.export_element (obj, "WindGenType3IEC", "diqmax", "diqmax",  base.from_string, fields);
                base.export_element (obj, "WindGenType3IEC", "xs", "xs",  base.from_string, fields);
                base.export_attribute (obj, "WindGenType3IEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenType3IEC_collapse" aria-expanded="true" aria-controls="WindGenType3IEC_collapse" style="margin-left: 10px;">WindGenType3IEC</a></legend>
                    <div id="WindGenType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dipmax}}<div><b>dipmax</b>: {{dipmax}}</div>{{/dipmax}}
                    {{#diqmax}}<div><b>diqmax</b>: {{diqmax}}</div>{{/diqmax}}
                    {{#xs}}<div><b>xs</b>: {{xs}}</div>{{/xs}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenType3IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenType3IEC_collapse" style="margin-left: 10px;">WindGenType3IEC</a></legend>
                    <div id="{{id}}_WindGenType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dipmax'>dipmax: </label><div class='col-sm-8'><input id='{{id}}_dipmax' class='form-control' type='text'{{#dipmax}} value='{{dipmax}}'{{/dipmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_diqmax'>diqmax: </label><div class='col-sm-8'><input id='{{id}}_diqmax' class='form-control' type='text'{{#diqmax}} value='{{diqmax}}'{{/diqmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xs'>xs: </label><div class='col-sm-8'><input id='{{id}}_xs' class='form-control' type='text'{{#xs}} value='{{xs}}'{{/xs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenType3IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dipmax").value; if ("" != temp) obj.dipmax = temp;
                temp = document.getElementById (id + "_diqmax").value; if ("" != temp) obj.diqmax = temp;
                temp = document.getElementById (id + "_xs").value; if ("" != temp) obj.xs = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3IEC", "0..1", "0..1", "WindTurbineType3IEC", "WindGenType3IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * The grid protection model includes protection against over and under voltage, and against over and under frequency.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.6.
         *
         */
        class WindProtectionIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindProtectionIEC;
                if (null == bucket)
                   cim_data.WindProtectionIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindProtectionIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindProtectionIEC";
                base.parse_element (/<cim:WindProtectionIEC.dfimax>([\s\S]*?)<\/cim:WindProtectionIEC.dfimax>/g, obj, "dfimax", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.fover>([\s\S]*?)<\/cim:WindProtectionIEC.fover>/g, obj, "fover", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.funder>([\s\S]*?)<\/cim:WindProtectionIEC.funder>/g, obj, "funder", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.mzc>([\s\S]*?)<\/cim:WindProtectionIEC.mzc>/g, obj, "mzc", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.tfma>([\s\S]*?)<\/cim:WindProtectionIEC.tfma>/g, obj, "tfma", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.uover>([\s\S]*?)<\/cim:WindProtectionIEC.uover>/g, obj, "uover", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.uunder>([\s\S]*?)<\/cim:WindProtectionIEC.uunder>/g, obj, "uunder", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context);
                base.parse_attributes (/<cim:WindProtectionIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                var bucket = context.parsed.WindProtectionIEC;
                if (null == bucket)
                   context.parsed.WindProtectionIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindProtectionIEC", "dfimax", "dfimax",  base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "fover", "fover",  base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "funder", "funder",  base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "mzc", "mzc",  base.from_boolean, fields);
                base.export_element (obj, "WindProtectionIEC", "tfma", "tfma",  base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "uover", "uover",  base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "uunder", "uunder",  base.from_string, fields);
                base.export_attribute (obj, "WindProtectionIEC", "WindTurbineType1or2IEC", "WindTurbineType1or2IEC", fields);
                base.export_attributes (obj, "WindProtectionIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                base.export_attribute (obj, "WindProtectionIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindProtectionIEC_collapse" aria-expanded="true" aria-controls="WindProtectionIEC_collapse" style="margin-left: 10px;">WindProtectionIEC</a></legend>
                    <div id="WindProtectionIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dfimax}}<div><b>dfimax</b>: {{dfimax}}</div>{{/dfimax}}
                    {{#fover}}<div><b>fover</b>: {{fover}}</div>{{/fover}}
                    {{#funder}}<div><b>funder</b>: {{funder}}</div>{{/funder}}
                    {{#mzc}}<div><b>mzc</b>: {{mzc}}</div>{{/mzc}}
                    {{#tfma}}<div><b>tfma</b>: {{tfma}}</div>{{/tfma}}
                    {{#uover}}<div><b>uover</b>: {{uover}}</div>{{/uover}}
                    {{#uunder}}<div><b>uunder</b>: {{uunder}}</div>{{/uunder}}
                    {{#WindTurbineType1or2IEC}}<div><b>WindTurbineType1or2IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType1or2IEC}}&quot;);})'>{{WindTurbineType1or2IEC}}</a></div>{{/WindTurbineType1or2IEC}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindProtectionIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindProtectionIEC_collapse" style="margin-left: 10px;">WindProtectionIEC</a></legend>
                    <div id="{{id}}_WindProtectionIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dfimax'>dfimax: </label><div class='col-sm-8'><input id='{{id}}_dfimax' class='form-control' type='text'{{#dfimax}} value='{{dfimax}}'{{/dfimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fover'>fover: </label><div class='col-sm-8'><input id='{{id}}_fover' class='form-control' type='text'{{#fover}} value='{{fover}}'{{/fover}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_funder'>funder: </label><div class='col-sm-8'><input id='{{id}}_funder' class='form-control' type='text'{{#funder}} value='{{funder}}'{{/funder}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_mzc'>mzc: </label><div class='col-sm-8'><input id='{{id}}_mzc' class='form-check-input' type='checkbox'{{#mzc}} checked{{/mzc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfma'>tfma: </label><div class='col-sm-8'><input id='{{id}}_tfma' class='form-control' type='text'{{#tfma}} value='{{tfma}}'{{/tfma}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uover'>uover: </label><div class='col-sm-8'><input id='{{id}}_uover' class='form-control' type='text'{{#uover}} value='{{uover}}'{{/uover}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uunder'>uunder: </label><div class='col-sm-8'><input id='{{id}}_uunder' class='form-control' type='text'{{#uunder}} value='{{uunder}}'{{/uunder}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType1or2IEC'>WindTurbineType1or2IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType1or2IEC' class='form-control' type='text'{{#WindTurbineType1or2IEC}} value='{{WindTurbineType1or2IEC}}'{{/WindTurbineType1or2IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindProtectionIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dfimax").value; if ("" != temp) obj.dfimax = temp;
                temp = document.getElementById (id + "_fover").value; if ("" != temp) obj.fover = temp;
                temp = document.getElementById (id + "_funder").value; if ("" != temp) obj.funder = temp;
                temp = document.getElementById (id + "_mzc").checked; if (temp) obj.mzc = true;
                temp = document.getElementById (id + "_tfma").value; if ("" != temp) obj.tfma = temp;
                temp = document.getElementById (id + "_uover").value; if ("" != temp) obj.uover = temp;
                temp = document.getElementById (id + "_uunder").value; if ("" != temp) obj.uunder = temp;
                temp = document.getElementById (id + "_WindTurbineType1or2IEC").value; if ("" != temp) obj.WindTurbineType1or2IEC = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType1or2IEC", "0..1", "1", "WindTurbineType1or2IEC", "WindProtectionIEC"],
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindProtectionIEC"],
                            ["WindTurbineType3or4IEC", "0..1", "1", "WindTurbineType3or4IEC", "WindProtectionIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Rotor resistance control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.3.
         *
         */
        class WindContRotorRIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContRotorRIEC;
                if (null == bucket)
                   cim_data.WindContRotorRIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContRotorRIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContRotorRIEC";
                base.parse_element (/<cim:WindContRotorRIEC.kirr>([\s\S]*?)<\/cim:WindContRotorRIEC.kirr>/g, obj, "kirr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.komegafilt>([\s\S]*?)<\/cim:WindContRotorRIEC.komegafilt>/g, obj, "komegafilt", base.to_float, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.kpfilt>([\s\S]*?)<\/cim:WindContRotorRIEC.kpfilt>/g, obj, "kpfilt", base.to_float, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.kprr>([\s\S]*?)<\/cim:WindContRotorRIEC.kprr>/g, obj, "kprr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.rmax>([\s\S]*?)<\/cim:WindContRotorRIEC.rmax>/g, obj, "rmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.rmin>([\s\S]*?)<\/cim:WindContRotorRIEC.rmin>/g, obj, "rmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.tomegafiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tomegafiltrr>/g, obj, "tomegafiltrr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.tpfiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tpfiltrr>/g, obj, "tpfiltrr", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContRotorRIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context);
                base.parse_attributes (/<cim:WindContRotorRIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                var bucket = context.parsed.WindContRotorRIEC;
                if (null == bucket)
                   context.parsed.WindContRotorRIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContRotorRIEC", "kirr", "kirr",  base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "komegafilt", "komegafilt",  base.from_float, fields);
                base.export_element (obj, "WindContRotorRIEC", "kpfilt", "kpfilt",  base.from_float, fields);
                base.export_element (obj, "WindContRotorRIEC", "kprr", "kprr",  base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "rmax", "rmax",  base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "rmin", "rmin",  base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "tomegafiltrr", "tomegafiltrr",  base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "tpfiltrr", "tpfiltrr",  base.from_string, fields);
                base.export_attribute (obj, "WindContRotorRIEC", "WindGenTurbineType2IEC", "WindGenTurbineType2IEC", fields);
                base.export_attributes (obj, "WindContRotorRIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContRotorRIEC_collapse" aria-expanded="true" aria-controls="WindContRotorRIEC_collapse" style="margin-left: 10px;">WindContRotorRIEC</a></legend>
                    <div id="WindContRotorRIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#kirr}}<div><b>kirr</b>: {{kirr}}</div>{{/kirr}}
                    {{#komegafilt}}<div><b>komegafilt</b>: {{komegafilt}}</div>{{/komegafilt}}
                    {{#kpfilt}}<div><b>kpfilt</b>: {{kpfilt}}</div>{{/kpfilt}}
                    {{#kprr}}<div><b>kprr</b>: {{kprr}}</div>{{/kprr}}
                    {{#rmax}}<div><b>rmax</b>: {{rmax}}</div>{{/rmax}}
                    {{#rmin}}<div><b>rmin</b>: {{rmin}}</div>{{/rmin}}
                    {{#tomegafiltrr}}<div><b>tomegafiltrr</b>: {{tomegafiltrr}}</div>{{/tomegafiltrr}}
                    {{#tpfiltrr}}<div><b>tpfiltrr</b>: {{tpfiltrr}}</div>{{/tpfiltrr}}
                    {{#WindGenTurbineType2IEC}}<div><b>WindGenTurbineType2IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenTurbineType2IEC}}&quot;);})'>{{WindGenTurbineType2IEC}}</a></div>{{/WindGenTurbineType2IEC}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContRotorRIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContRotorRIEC_collapse" style="margin-left: 10px;">WindContRotorRIEC</a></legend>
                    <div id="{{id}}_WindContRotorRIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kirr'>kirr: </label><div class='col-sm-8'><input id='{{id}}_kirr' class='form-control' type='text'{{#kirr}} value='{{kirr}}'{{/kirr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_komegafilt'>komegafilt: </label><div class='col-sm-8'><input id='{{id}}_komegafilt' class='form-control' type='text'{{#komegafilt}} value='{{komegafilt}}'{{/komegafilt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpfilt'>kpfilt: </label><div class='col-sm-8'><input id='{{id}}_kpfilt' class='form-control' type='text'{{#kpfilt}} value='{{kpfilt}}'{{/kpfilt}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kprr'>kprr: </label><div class='col-sm-8'><input id='{{id}}_kprr' class='form-control' type='text'{{#kprr}} value='{{kprr}}'{{/kprr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rmax'>rmax: </label><div class='col-sm-8'><input id='{{id}}_rmax' class='form-control' type='text'{{#rmax}} value='{{rmax}}'{{/rmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rmin'>rmin: </label><div class='col-sm-8'><input id='{{id}}_rmin' class='form-control' type='text'{{#rmin}} value='{{rmin}}'{{/rmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tomegafiltrr'>tomegafiltrr: </label><div class='col-sm-8'><input id='{{id}}_tomegafiltrr' class='form-control' type='text'{{#tomegafiltrr}} value='{{tomegafiltrr}}'{{/tomegafiltrr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpfiltrr'>tpfiltrr: </label><div class='col-sm-8'><input id='{{id}}_tpfiltrr' class='form-control' type='text'{{#tpfiltrr}} value='{{tpfiltrr}}'{{/tpfiltrr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenTurbineType2IEC'>WindGenTurbineType2IEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenTurbineType2IEC' class='form-control' type='text'{{#WindGenTurbineType2IEC}} value='{{WindGenTurbineType2IEC}}'{{/WindGenTurbineType2IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContRotorRIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kirr").value; if ("" != temp) obj.kirr = temp;
                temp = document.getElementById (id + "_komegafilt").value; if ("" != temp) obj.komegafilt = temp;
                temp = document.getElementById (id + "_kpfilt").value; if ("" != temp) obj.kpfilt = temp;
                temp = document.getElementById (id + "_kprr").value; if ("" != temp) obj.kprr = temp;
                temp = document.getElementById (id + "_rmax").value; if ("" != temp) obj.rmax = temp;
                temp = document.getElementById (id + "_rmin").value; if ("" != temp) obj.rmin = temp;
                temp = document.getElementById (id + "_tomegafiltrr").value; if ("" != temp) obj.tomegafiltrr = temp;
                temp = document.getElementById (id + "_tpfiltrr").value; if ("" != temp) obj.tpfiltrr = temp;
                temp = document.getElementById (id + "_WindGenTurbineType2IEC").value; if ("" != temp) obj.WindGenTurbineType2IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindGenTurbineType2IEC", "1", "1", "WindGenTurbineType2IEC", "WindContRotorRIEC"],
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindContRotorRIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * P control model Type 4B.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.6.
         *
         */
        class WindContPType4bIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContPType4bIEC;
                if (null == bucket)
                   cim_data.WindContPType4bIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContPType4bIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType4bIEC";
                base.parse_element (/<cim:WindContPType4bIEC.dpmaxp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.dpmaxp4b>/g, obj, "dpmaxp4b", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tpaero>([\s\S]*?)<\/cim:WindContPType4bIEC.tpaero>/g, obj, "tpaero", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tpordp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tpordp4b>/g, obj, "tpordp4b", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tufiltp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tufiltp4b>/g, obj, "tufiltp4b", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPType4bIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);
                var bucket = context.parsed.WindContPType4bIEC;
                if (null == bucket)
                   context.parsed.WindContPType4bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContPType4bIEC", "dpmaxp4b", "dpmaxp4b",  base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tpaero", "tpaero",  base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tpordp4b", "tpordp4b",  base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tufiltp4b", "tufiltp4b",  base.from_string, fields);
                base.export_attribute (obj, "WindContPType4bIEC", "WindTurbineType4bIEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContPType4bIEC_collapse" aria-expanded="true" aria-controls="WindContPType4bIEC_collapse" style="margin-left: 10px;">WindContPType4bIEC</a></legend>
                    <div id="WindContPType4bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dpmaxp4b}}<div><b>dpmaxp4b</b>: {{dpmaxp4b}}</div>{{/dpmaxp4b}}
                    {{#tpaero}}<div><b>tpaero</b>: {{tpaero}}</div>{{/tpaero}}
                    {{#tpordp4b}}<div><b>tpordp4b</b>: {{tpordp4b}}</div>{{/tpordp4b}}
                    {{#tufiltp4b}}<div><b>tufiltp4b</b>: {{tufiltp4b}}</div>{{/tufiltp4b}}
                    {{#WindTurbineType4bIEC}}<div><b>WindTurbineType4bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4bIEC}}&quot;);})'>{{WindTurbineType4bIEC}}</a></div>{{/WindTurbineType4bIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContPType4bIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContPType4bIEC_collapse" style="margin-left: 10px;">WindContPType4bIEC</a></legend>
                    <div id="{{id}}_WindContPType4bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpmaxp4b'>dpmaxp4b: </label><div class='col-sm-8'><input id='{{id}}_dpmaxp4b' class='form-control' type='text'{{#dpmaxp4b}} value='{{dpmaxp4b}}'{{/dpmaxp4b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpaero'>tpaero: </label><div class='col-sm-8'><input id='{{id}}_tpaero' class='form-control' type='text'{{#tpaero}} value='{{tpaero}}'{{/tpaero}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpordp4b'>tpordp4b: </label><div class='col-sm-8'><input id='{{id}}_tpordp4b' class='form-control' type='text'{{#tpordp4b}} value='{{tpordp4b}}'{{/tpordp4b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltp4b'>tufiltp4b: </label><div class='col-sm-8'><input id='{{id}}_tufiltp4b' class='form-control' type='text'{{#tufiltp4b}} value='{{tufiltp4b}}'{{/tufiltp4b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4bIEC'>WindTurbineType4bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4bIEC' class='form-control' type='text'{{#WindTurbineType4bIEC}} value='{{WindTurbineType4bIEC}}'{{/WindTurbineType4bIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContPType4bIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpmaxp4b").value; if ("" != temp) obj.dpmaxp4b = temp;
                temp = document.getElementById (id + "_tpaero").value; if ("" != temp) obj.tpaero = temp;
                temp = document.getElementById (id + "_tpordp4b").value; if ("" != temp) obj.tpordp4b = temp;
                temp = document.getElementById (id + "_tufiltp4b").value; if ("" != temp) obj.tufiltp4b = temp;
                temp = document.getElementById (id + "_WindTurbineType4bIEC").value; if ("" != temp) obj.WindTurbineType4bIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType4bIEC", "1", "1", "WindTurbineType4bIEC", "WindContPType4bIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Reference frame rotation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.5.
         *
         */
        class WindRefFrameRotIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindRefFrameRotIEC;
                if (null == bucket)
                   cim_data.WindRefFrameRotIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindRefFrameRotIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindRefFrameRotIEC";
                base.parse_element (/<cim:WindRefFrameRotIEC.tpll>([\s\S]*?)<\/cim:WindRefFrameRotIEC.tpll>/g, obj, "tpll", base.to_string, sub, context);
                base.parse_element (/<cim:WindRefFrameRotIEC.upll1>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll1>/g, obj, "upll1", base.to_string, sub, context);
                base.parse_element (/<cim:WindRefFrameRotIEC.upll2>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll2>/g, obj, "upll2", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindRefFrameRotIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                var bucket = context.parsed.WindRefFrameRotIEC;
                if (null == bucket)
                   context.parsed.WindRefFrameRotIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindRefFrameRotIEC", "tpll", "tpll",  base.from_string, fields);
                base.export_element (obj, "WindRefFrameRotIEC", "upll1", "upll1",  base.from_string, fields);
                base.export_element (obj, "WindRefFrameRotIEC", "upll2", "upll2",  base.from_string, fields);
                base.export_attribute (obj, "WindRefFrameRotIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindRefFrameRotIEC_collapse" aria-expanded="true" aria-controls="WindRefFrameRotIEC_collapse" style="margin-left: 10px;">WindRefFrameRotIEC</a></legend>
                    <div id="WindRefFrameRotIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#tpll}}<div><b>tpll</b>: {{tpll}}</div>{{/tpll}}
                    {{#upll1}}<div><b>upll1</b>: {{upll1}}</div>{{/upll1}}
                    {{#upll2}}<div><b>upll2</b>: {{upll2}}</div>{{/upll2}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindRefFrameRotIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindRefFrameRotIEC_collapse" style="margin-left: 10px;">WindRefFrameRotIEC</a></legend>
                    <div id="{{id}}_WindRefFrameRotIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpll'>tpll: </label><div class='col-sm-8'><input id='{{id}}_tpll' class='form-control' type='text'{{#tpll}} value='{{tpll}}'{{/tpll}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upll1'>upll1: </label><div class='col-sm-8'><input id='{{id}}_upll1' class='form-control' type='text'{{#upll1}} value='{{upll1}}'{{/upll1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upll2'>upll2: </label><div class='col-sm-8'><input id='{{id}}_upll2' class='form-control' type='text'{{#upll2}} value='{{upll2}}'{{/upll2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindRefFrameRotIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tpll").value; if ("" != temp) obj.tpll = temp;
                temp = document.getElementById (id + "_upll1").value; if ("" != temp) obj.upll1 = temp;
                temp = document.getElementById (id + "_upll2").value; if ("" != temp) obj.upll2 = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4IEC", "1", "1", "WindTurbineType3or4IEC", "WindRefFrameRotIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * The class models a look up table for the purpose of wind standard models.
         *
         */
        class WindDynamicsLookupTable extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindDynamicsLookupTable;
                if (null == bucket)
                   cim_data.WindDynamicsLookupTable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindDynamicsLookupTable[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindDynamicsLookupTable";
                base.parse_element (/<cim:WindDynamicsLookupTable.input>([\s\S]*?)<\/cim:WindDynamicsLookupTable.input>/g, obj, "input", base.to_float, sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.lookupTableFunctionType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "lookupTableFunctionType", sub, context);
                base.parse_element (/<cim:WindDynamicsLookupTable.output>([\s\S]*?)<\/cim:WindDynamicsLookupTable.output>/g, obj, "output", base.to_float, sub, context);
                base.parse_element (/<cim:WindDynamicsLookupTable.sequence>([\s\S]*?)<\/cim:WindDynamicsLookupTable.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindGenType3bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3bIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context);
                var bucket = context.parsed.WindDynamicsLookupTable;
                if (null == bucket)
                   context.parsed.WindDynamicsLookupTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindDynamicsLookupTable", "input", "input",  base.from_float, fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "lookupTableFunctionType", "lookupTableFunctionType", fields);
                base.export_element (obj, "WindDynamicsLookupTable", "output", "output",  base.from_float, fields);
                base.export_element (obj, "WindDynamicsLookupTable", "sequence", "sequence",  base.from_string, fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPitchContPowerIEC", "WindPitchContPowerIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPlantFreqPcontrolIEC", "WindPlantFreqPcontrolIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContQPQULimIEC", "WindContQPQULimIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindGenType3bIEC", "WindGenType3bIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContPType3IEC", "WindContPType3IEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPlantReactiveControlIEC", "WindPlantReactiveControlIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindProtectionIEC", "WindProtectionIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContCurrLimIEC", "WindContCurrLimIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContRotorRIEC", "WindContRotorRIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindDynamicsLookupTable_collapse" aria-expanded="true" aria-controls="WindDynamicsLookupTable_collapse" style="margin-left: 10px;">WindDynamicsLookupTable</a></legend>
                    <div id="WindDynamicsLookupTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#input}}<div><b>input</b>: {{input}}</div>{{/input}}
                    {{#lookupTableFunctionType}}<div><b>lookupTableFunctionType</b>: {{lookupTableFunctionType}}</div>{{/lookupTableFunctionType}}
                    {{#output}}<div><b>output</b>: {{output}}</div>{{/output}}
                    {{#sequence}}<div><b>sequence</b>: {{sequence}}</div>{{/sequence}}
                    {{#WindPitchContPowerIEC}}<div><b>WindPitchContPowerIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPitchContPowerIEC}}&quot;);})'>{{WindPitchContPowerIEC}}</a></div>{{/WindPitchContPowerIEC}}
                    {{#WindPlantFreqPcontrolIEC}}<div><b>WindPlantFreqPcontrolIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantFreqPcontrolIEC}}&quot;);})'>{{WindPlantFreqPcontrolIEC}}</a></div>{{/WindPlantFreqPcontrolIEC}}
                    {{#WindContQPQULimIEC}}<div><b>WindContQPQULimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContQPQULimIEC}}&quot;);})'>{{WindContQPQULimIEC}}</a></div>{{/WindContQPQULimIEC}}
                    {{#WindGenType3bIEC}}<div><b>WindGenType3bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenType3bIEC}}&quot;);})'>{{WindGenType3bIEC}}</a></div>{{/WindGenType3bIEC}}
                    {{#WindContPType3IEC}}<div><b>WindContPType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContPType3IEC}}&quot;);})'>{{WindContPType3IEC}}</a></div>{{/WindContPType3IEC}}
                    {{#WindPlantReactiveControlIEC}}<div><b>WindPlantReactiveControlIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantReactiveControlIEC}}&quot;);})'>{{WindPlantReactiveControlIEC}}</a></div>{{/WindPlantReactiveControlIEC}}
                    {{#WindProtectionIEC}}<div><b>WindProtectionIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindProtectionIEC}}&quot;);})'>{{WindProtectionIEC}}</a></div>{{/WindProtectionIEC}}
                    {{#WindContCurrLimIEC}}<div><b>WindContCurrLimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContCurrLimIEC}}&quot;);})'>{{WindContCurrLimIEC}}</a></div>{{/WindContCurrLimIEC}}
                    {{#WindContRotorRIEC}}<div><b>WindContRotorRIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContRotorRIEC}}&quot;);})'>{{WindContRotorRIEC}}</a></div>{{/WindContRotorRIEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindLookupTableFunctionKind = []; if (!obj.lookupTableFunctionType) obj.WindLookupTableFunctionKind.push ({ id: '', selected: true}); for (var property in WindLookupTableFunctionKind) obj.WindLookupTableFunctionKind.push ({ id: property, selected: obj.lookupTableFunctionType && obj.lookupTableFunctionType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindLookupTableFunctionKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindDynamicsLookupTable_collapse" aria-expanded="true" aria-controls="{{id}}_WindDynamicsLookupTable_collapse" style="margin-left: 10px;">WindDynamicsLookupTable</a></legend>
                    <div id="{{id}}_WindDynamicsLookupTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_input'>input: </label><div class='col-sm-8'><input id='{{id}}_input' class='form-control' type='text'{{#input}} value='{{input}}'{{/input}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lookupTableFunctionType'>lookupTableFunctionType: </label><div class='col-sm-8'><select id='{{id}}_lookupTableFunctionType' class='form-control'>{{#WindLookupTableFunctionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindLookupTableFunctionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_output'>output: </label><div class='col-sm-8'><input id='{{id}}_output' class='form-control' type='text'{{#output}} value='{{output}}'{{/output}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequence'>sequence: </label><div class='col-sm-8'><input id='{{id}}_sequence' class='form-control' type='text'{{#sequence}} value='{{sequence}}'{{/sequence}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPitchContPowerIEC'>WindPitchContPowerIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPitchContPowerIEC' class='form-control' type='text'{{#WindPitchContPowerIEC}} value='{{WindPitchContPowerIEC}}'{{/WindPitchContPowerIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantFreqPcontrolIEC'>WindPlantFreqPcontrolIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantFreqPcontrolIEC' class='form-control' type='text'{{#WindPlantFreqPcontrolIEC}} value='{{WindPlantFreqPcontrolIEC}}'{{/WindPlantFreqPcontrolIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContQPQULimIEC'>WindContQPQULimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContQPQULimIEC' class='form-control' type='text'{{#WindContQPQULimIEC}} value='{{WindContQPQULimIEC}}'{{/WindContQPQULimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenType3bIEC'>WindGenType3bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenType3bIEC' class='form-control' type='text'{{#WindGenType3bIEC}} value='{{WindGenType3bIEC}}'{{/WindGenType3bIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContPType3IEC'>WindContPType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindContPType3IEC' class='form-control' type='text'{{#WindContPType3IEC}} value='{{WindContPType3IEC}}'{{/WindContPType3IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantReactiveControlIEC'>WindPlantReactiveControlIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantReactiveControlIEC' class='form-control' type='text'{{#WindPlantReactiveControlIEC}} value='{{WindPlantReactiveControlIEC}}'{{/WindPlantReactiveControlIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindProtectionIEC'>WindProtectionIEC: </label><div class='col-sm-8'><input id='{{id}}_WindProtectionIEC' class='form-control' type='text'{{#WindProtectionIEC}} value='{{WindProtectionIEC}}'{{/WindProtectionIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContCurrLimIEC'>WindContCurrLimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContCurrLimIEC' class='form-control' type='text'{{#WindContCurrLimIEC}} value='{{WindContCurrLimIEC}}'{{/WindContCurrLimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContRotorRIEC'>WindContRotorRIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContRotorRIEC' class='form-control' type='text'{{#WindContRotorRIEC}} value='{{WindContRotorRIEC}}'{{/WindContRotorRIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindDynamicsLookupTable" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_input").value; if ("" != temp) obj.input = temp;
                temp = document.getElementById (id + "_lookupTableFunctionType").value; if ("" != temp) { temp = WindLookupTableFunctionKind[temp]; if ("undefined" != typeof (temp)) obj.lookupTableFunctionType = "#http://iec.ch/TC57/2013/CIM-schema-cim16#WindLookupTableFunctionKind." + temp; }
                temp = document.getElementById (id + "_output").value; if ("" != temp) obj.output = temp;
                temp = document.getElementById (id + "_sequence").value; if ("" != temp) obj.sequence = temp;
                temp = document.getElementById (id + "_WindPitchContPowerIEC").value; if ("" != temp) obj.WindPitchContPowerIEC = temp;
                temp = document.getElementById (id + "_WindPlantFreqPcontrolIEC").value; if ("" != temp) obj.WindPlantFreqPcontrolIEC = temp;
                temp = document.getElementById (id + "_WindContQPQULimIEC").value; if ("" != temp) obj.WindContQPQULimIEC = temp;
                temp = document.getElementById (id + "_WindGenType3bIEC").value; if ("" != temp) obj.WindGenType3bIEC = temp;
                temp = document.getElementById (id + "_WindContPType3IEC").value; if ("" != temp) obj.WindContPType3IEC = temp;
                temp = document.getElementById (id + "_WindPlantReactiveControlIEC").value; if ("" != temp) obj.WindPlantReactiveControlIEC = temp;
                temp = document.getElementById (id + "_WindProtectionIEC").value; if ("" != temp) obj.WindProtectionIEC = temp;
                temp = document.getElementById (id + "_WindContCurrLimIEC").value; if ("" != temp) obj.WindContCurrLimIEC = temp;
                temp = document.getElementById (id + "_WindContRotorRIEC").value; if ("" != temp) obj.WindContRotorRIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindPitchContPowerIEC", "0..1", "1..*", "WindPitchContPowerIEC", "WindDynamicsLookupTable"],
                            ["WindPlantFreqPcontrolIEC", "0..1", "1..*", "WindPlantFreqPcontrolIEC", "WindDynamicsLookupTable"],
                            ["WindContQPQULimIEC", "0..1", "1..*", "WindContQPQULimIEC", "WindDynamicsLookupTable"],
                            ["WindGenType3bIEC", "0..1", "1..*", "WindGenType3bIEC", "WindDynamicsLookupTable"],
                            ["WindContPType3IEC", "0..1", "1..*", "WindContPType3IEC", "WindDynamicsLookupTable"],
                            ["WindPlantReactiveControlIEC", "0..1", "1..*", "WindPlantReactiveControlIEC", "WindDynamicsLookupTable"],
                            ["WindProtectionIEC", "0..1", "1..*", "WindProtectionIEC", "WindDynamicsLookupTable"],
                            ["WindContCurrLimIEC", "0..1", "1..*", "WindContCurrLimIEC", "WindDynamicsLookupTable"],
                            ["WindContRotorRIEC", "0..1", "1..*", "WindContRotorRIEC", "WindDynamicsLookupTable"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 1 and 2 and their control models.
         *
         */
        class WindTurbineType1or2Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType1or2Dynamics;
                if (null == bucket)
                   cim_data.WindTurbineType1or2Dynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType1or2Dynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType1or2Dynamics";
                base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                var bucket = context.parsed.WindTurbineType1or2Dynamics;
                if (null == bucket)
                   context.parsed.WindTurbineType1or2Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType1or2Dynamics", "AsynchronousMachineDynamics", "AsynchronousMachineDynamics", fields);
                base.export_attribute (obj, "WindTurbineType1or2Dynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType1or2Dynamics_collapse" aria-expanded="true" aria-controls="WindTurbineType1or2Dynamics_collapse" style="margin-left: 10px;">WindTurbineType1or2Dynamics</a></legend>
                    <div id="WindTurbineType1or2Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineDynamics}}&quot;);})'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType1or2Dynamics_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType1or2Dynamics_collapse" style="margin-left: 10px;">WindTurbineType1or2Dynamics</a></legend>
                    <div id="{{id}}_WindTurbineType1or2Dynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AsynchronousMachineDynamics'>AsynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_AsynchronousMachineDynamics' class='form-control' type='text'{{#AsynchronousMachineDynamics}} value='{{AsynchronousMachineDynamics}}'{{/AsynchronousMachineDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='{{id}}_RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType1or2Dynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_AsynchronousMachineDynamics").value; if ("" != temp) obj.AsynchronousMachineDynamics = temp;
                temp = document.getElementById (id + "_RemoteInputSignal").value; if ("" != temp) obj.RemoteInputSignal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AsynchronousMachineDynamics", "1", "0..1", "AsynchronousMachineDynamics", "WindTurbineType1or2Dynamics"],
                            ["RemoteInputSignal", "0..1", "0..1", "RemoteInputSignal", "WindTurbineType1or2Dynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Frequency and active power controller model.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        class WindPlantFreqPcontrolIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPlantFreqPcontrolIEC;
                if (null == bucket)
                   cim_data.WindPlantFreqPcontrolIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPlantFreqPcontrolIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantFreqPcontrolIEC";
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmax>/g, obj, "dpwprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmin>/g, obj, "dpwprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwpp>/g, obj, "kiwpp", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmax>/g, obj, "kiwppmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmin>/g, obj, "kiwppmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kpwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kpwpp>/g, obj, "kpwpp", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kwppref>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kwppref>/g, obj, "kwppref", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmax>/g, obj, "prefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmin>/g, obj, "prefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpft>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpft>/g, obj, "tpft", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpfv>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpfv>/g, obj, "tpfv", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twpffiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twpffiltp>/g, obj, "twpffiltp", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twppfiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twppfiltp>/g, obj, "twppfiltp", base.to_string, sub, context);
                base.parse_attributes (/<cim:WindPlantFreqPcontrolIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                base.parse_attribute (/<cim:WindPlantFreqPcontrolIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context);
                var bucket = context.parsed.WindPlantFreqPcontrolIEC;
                if (null == bucket)
                   context.parsed.WindPlantFreqPcontrolIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dprefmax", "dprefmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dprefmin", "dprefmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dpwprefmax", "dpwprefmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dpwprefmin", "dpwprefmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwpp", "kiwpp",  base.from_float, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwppmax", "kiwppmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwppmin", "kiwppmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kpwpp", "kpwpp",  base.from_float, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kwppref", "kwppref",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "prefmax", "prefmax",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "prefmin", "prefmin",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "tpft", "tpft",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "tpfv", "tpfv",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "twpffiltp", "twpffiltp",  base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "twppfiltp", "twppfiltp",  base.from_string, fields);
                base.export_attributes (obj, "WindPlantFreqPcontrolIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                base.export_attribute (obj, "WindPlantFreqPcontrolIEC", "WindPlantIEC", "WindPlantIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantFreqPcontrolIEC_collapse" aria-expanded="true" aria-controls="WindPlantFreqPcontrolIEC_collapse" style="margin-left: 10px;">WindPlantFreqPcontrolIEC</a></legend>
                    <div id="WindPlantFreqPcontrolIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dprefmax}}<div><b>dprefmax</b>: {{dprefmax}}</div>{{/dprefmax}}
                    {{#dprefmin}}<div><b>dprefmin</b>: {{dprefmin}}</div>{{/dprefmin}}
                    {{#dpwprefmax}}<div><b>dpwprefmax</b>: {{dpwprefmax}}</div>{{/dpwprefmax}}
                    {{#dpwprefmin}}<div><b>dpwprefmin</b>: {{dpwprefmin}}</div>{{/dpwprefmin}}
                    {{#kiwpp}}<div><b>kiwpp</b>: {{kiwpp}}</div>{{/kiwpp}}
                    {{#kiwppmax}}<div><b>kiwppmax</b>: {{kiwppmax}}</div>{{/kiwppmax}}
                    {{#kiwppmin}}<div><b>kiwppmin</b>: {{kiwppmin}}</div>{{/kiwppmin}}
                    {{#kpwpp}}<div><b>kpwpp</b>: {{kpwpp}}</div>{{/kpwpp}}
                    {{#kwppref}}<div><b>kwppref</b>: {{kwppref}}</div>{{/kwppref}}
                    {{#prefmax}}<div><b>prefmax</b>: {{prefmax}}</div>{{/prefmax}}
                    {{#prefmin}}<div><b>prefmin</b>: {{prefmin}}</div>{{/prefmin}}
                    {{#tpft}}<div><b>tpft</b>: {{tpft}}</div>{{/tpft}}
                    {{#tpfv}}<div><b>tpfv</b>: {{tpfv}}</div>{{/tpfv}}
                    {{#twpffiltp}}<div><b>twpffiltp</b>: {{twpffiltp}}</div>{{/twpffiltp}}
                    {{#twppfiltp}}<div><b>twppfiltp</b>: {{twppfiltp}}</div>{{/twppfiltp}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    {{#WindPlantIEC}}<div><b>WindPlantIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantIEC}}&quot;);})'>{{WindPlantIEC}}</a></div>{{/WindPlantIEC}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindPlantFreqPcontrolIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindPlantFreqPcontrolIEC_collapse" style="margin-left: 10px;">WindPlantFreqPcontrolIEC</a></legend>
                    <div id="{{id}}_WindPlantFreqPcontrolIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dprefmax'>dprefmax: </label><div class='col-sm-8'><input id='{{id}}_dprefmax' class='form-control' type='text'{{#dprefmax}} value='{{dprefmax}}'{{/dprefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dprefmin'>dprefmin: </label><div class='col-sm-8'><input id='{{id}}_dprefmin' class='form-control' type='text'{{#dprefmin}} value='{{dprefmin}}'{{/dprefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpwprefmax'>dpwprefmax: </label><div class='col-sm-8'><input id='{{id}}_dpwprefmax' class='form-control' type='text'{{#dpwprefmax}} value='{{dpwprefmax}}'{{/dpwprefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpwprefmin'>dpwprefmin: </label><div class='col-sm-8'><input id='{{id}}_dpwprefmin' class='form-control' type='text'{{#dpwprefmin}} value='{{dpwprefmin}}'{{/dpwprefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwpp'>kiwpp: </label><div class='col-sm-8'><input id='{{id}}_kiwpp' class='form-control' type='text'{{#kiwpp}} value='{{kiwpp}}'{{/kiwpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwppmax'>kiwppmax: </label><div class='col-sm-8'><input id='{{id}}_kiwppmax' class='form-control' type='text'{{#kiwppmax}} value='{{kiwppmax}}'{{/kiwppmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kiwppmin'>kiwppmin: </label><div class='col-sm-8'><input id='{{id}}_kiwppmin' class='form-control' type='text'{{#kiwppmin}} value='{{kiwppmin}}'{{/kiwppmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpwpp'>kpwpp: </label><div class='col-sm-8'><input id='{{id}}_kpwpp' class='form-control' type='text'{{#kpwpp}} value='{{kpwpp}}'{{/kpwpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kwppref'>kwppref: </label><div class='col-sm-8'><input id='{{id}}_kwppref' class='form-control' type='text'{{#kwppref}} value='{{kwppref}}'{{/kwppref}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prefmax'>prefmax: </label><div class='col-sm-8'><input id='{{id}}_prefmax' class='form-control' type='text'{{#prefmax}} value='{{prefmax}}'{{/prefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_prefmin'>prefmin: </label><div class='col-sm-8'><input id='{{id}}_prefmin' class='form-control' type='text'{{#prefmin}} value='{{prefmin}}'{{/prefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpft'>tpft: </label><div class='col-sm-8'><input id='{{id}}_tpft' class='form-control' type='text'{{#tpft}} value='{{tpft}}'{{/tpft}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpfv'>tpfv: </label><div class='col-sm-8'><input id='{{id}}_tpfv' class='form-control' type='text'{{#tpfv}} value='{{tpfv}}'{{/tpfv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twpffiltp'>twpffiltp: </label><div class='col-sm-8'><input id='{{id}}_twpffiltp' class='form-control' type='text'{{#twpffiltp}} value='{{twpffiltp}}'{{/twpffiltp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_twppfiltp'>twppfiltp: </label><div class='col-sm-8'><input id='{{id}}_twppfiltp' class='form-control' type='text'{{#twppfiltp}} value='{{twppfiltp}}'{{/twppfiltp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantIEC'>WindPlantIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantIEC' class='form-control' type='text'{{#WindPlantIEC}} value='{{WindPlantIEC}}'{{/WindPlantIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindPlantFreqPcontrolIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dprefmax").value; if ("" != temp) obj.dprefmax = temp;
                temp = document.getElementById (id + "_dprefmin").value; if ("" != temp) obj.dprefmin = temp;
                temp = document.getElementById (id + "_dpwprefmax").value; if ("" != temp) obj.dpwprefmax = temp;
                temp = document.getElementById (id + "_dpwprefmin").value; if ("" != temp) obj.dpwprefmin = temp;
                temp = document.getElementById (id + "_kiwpp").value; if ("" != temp) obj.kiwpp = temp;
                temp = document.getElementById (id + "_kiwppmax").value; if ("" != temp) obj.kiwppmax = temp;
                temp = document.getElementById (id + "_kiwppmin").value; if ("" != temp) obj.kiwppmin = temp;
                temp = document.getElementById (id + "_kpwpp").value; if ("" != temp) obj.kpwpp = temp;
                temp = document.getElementById (id + "_kwppref").value; if ("" != temp) obj.kwppref = temp;
                temp = document.getElementById (id + "_prefmax").value; if ("" != temp) obj.prefmax = temp;
                temp = document.getElementById (id + "_prefmin").value; if ("" != temp) obj.prefmin = temp;
                temp = document.getElementById (id + "_tpft").value; if ("" != temp) obj.tpft = temp;
                temp = document.getElementById (id + "_tpfv").value; if ("" != temp) obj.tpfv = temp;
                temp = document.getElementById (id + "_twpffiltp").value; if ("" != temp) obj.twpffiltp = temp;
                temp = document.getElementById (id + "_twppfiltp").value; if ("" != temp) obj.twppfiltp = temp;
                temp = document.getElementById (id + "_WindPlantIEC").value; if ("" != temp) obj.WindPlantIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindPlantFreqPcontrolIEC"],
                            ["WindPlantIEC", "1", "1", "WindPlantIEC", "WindPlantFreqPcontrolIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * P control model Type 4A.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.5.
         *
         */
        class WindContPType4aIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContPType4aIEC;
                if (null == bucket)
                   cim_data.WindContPType4aIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContPType4aIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType4aIEC";
                base.parse_element (/<cim:WindContPType4aIEC.dpmaxp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.dpmaxp4a>/g, obj, "dpmaxp4a", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4aIEC.tpordp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tpordp4a>/g, obj, "tpordp4a", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4aIEC.tufiltp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tufiltp4a>/g, obj, "tufiltp4a", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPType4aIEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context);
                var bucket = context.parsed.WindContPType4aIEC;
                if (null == bucket)
                   context.parsed.WindContPType4aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContPType4aIEC", "dpmaxp4a", "dpmaxp4a",  base.from_string, fields);
                base.export_element (obj, "WindContPType4aIEC", "tpordp4a", "tpordp4a",  base.from_string, fields);
                base.export_element (obj, "WindContPType4aIEC", "tufiltp4a", "tufiltp4a",  base.from_string, fields);
                base.export_attribute (obj, "WindContPType4aIEC", "WindTurbineType4aIEC", "WindTurbineType4aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContPType4aIEC_collapse" aria-expanded="true" aria-controls="WindContPType4aIEC_collapse" style="margin-left: 10px;">WindContPType4aIEC</a></legend>
                    <div id="WindContPType4aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#dpmaxp4a}}<div><b>dpmaxp4a</b>: {{dpmaxp4a}}</div>{{/dpmaxp4a}}
                    {{#tpordp4a}}<div><b>tpordp4a</b>: {{tpordp4a}}</div>{{/tpordp4a}}
                    {{#tufiltp4a}}<div><b>tufiltp4a</b>: {{tufiltp4a}}</div>{{/tufiltp4a}}
                    {{#WindTurbineType4aIEC}}<div><b>WindTurbineType4aIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4aIEC}}&quot;);})'>{{WindTurbineType4aIEC}}</a></div>{{/WindTurbineType4aIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContPType4aIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContPType4aIEC_collapse" style="margin-left: 10px;">WindContPType4aIEC</a></legend>
                    <div id="{{id}}_WindContPType4aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpmaxp4a'>dpmaxp4a: </label><div class='col-sm-8'><input id='{{id}}_dpmaxp4a' class='form-control' type='text'{{#dpmaxp4a}} value='{{dpmaxp4a}}'{{/dpmaxp4a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpordp4a'>tpordp4a: </label><div class='col-sm-8'><input id='{{id}}_tpordp4a' class='form-control' type='text'{{#tpordp4a}} value='{{tpordp4a}}'{{/tpordp4a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltp4a'>tufiltp4a: </label><div class='col-sm-8'><input id='{{id}}_tufiltp4a' class='form-control' type='text'{{#tufiltp4a}} value='{{tufiltp4a}}'{{/tufiltp4a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4aIEC'>WindTurbineType4aIEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4aIEC' class='form-control' type='text'{{#WindTurbineType4aIEC}} value='{{WindTurbineType4aIEC}}'{{/WindTurbineType4aIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContPType4aIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpmaxp4a").value; if ("" != temp) obj.dpmaxp4a = temp;
                temp = document.getElementById (id + "_tpordp4a").value; if ("" != temp) obj.tpordp4a = temp;
                temp = document.getElementById (id + "_tufiltp4a").value; if ("" != temp) obj.tufiltp4a = temp;
                temp = document.getElementById (id + "_WindTurbineType4aIEC").value; if ("" != temp) obj.WindTurbineType4aIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType4aIEC", "1", "1", "WindTurbineType4aIEC", "WindContPType4aIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Current limitation model.
         *
         * The current limitation model combines the physical limits and the control limits.
         *
         */
        class WindContCurrLimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindContCurrLimIEC;
                if (null == bucket)
                   cim_data.WindContCurrLimIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindContCurrLimIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContCurrLimIEC";
                base.parse_element (/<cim:WindContCurrLimIEC.imax>([\s\S]*?)<\/cim:WindContCurrLimIEC.imax>/g, obj, "imax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.imaxdip>([\s\S]*?)<\/cim:WindContCurrLimIEC.imaxdip>/g, obj, "imaxdip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.kpqu>([\s\S]*?)<\/cim:WindContCurrLimIEC.kpqu>/g, obj, "kpqu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.mdfslim>([\s\S]*?)<\/cim:WindContCurrLimIEC.mdfslim>/g, obj, "mdfslim", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.mqpri>([\s\S]*?)<\/cim:WindContCurrLimIEC.mqpri>/g, obj, "mqpri", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.tufiltcl>([\s\S]*?)<\/cim:WindContCurrLimIEC.tufiltcl>/g, obj, "tufiltcl", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.upqumax>([\s\S]*?)<\/cim:WindContCurrLimIEC.upqumax>/g, obj, "upqumax", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContCurrLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);
                base.parse_attributes (/<cim:WindContCurrLimIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                var bucket = context.parsed.WindContCurrLimIEC;
                if (null == bucket)
                   context.parsed.WindContCurrLimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindContCurrLimIEC", "imax", "imax",  base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "imaxdip", "imaxdip",  base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "kpqu", "kpqu",  base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "mdfslim", "mdfslim",  base.from_boolean, fields);
                base.export_element (obj, "WindContCurrLimIEC", "mqpri", "mqpri",  base.from_boolean, fields);
                base.export_element (obj, "WindContCurrLimIEC", "tufiltcl", "tufiltcl",  base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "upqumax", "upqumax",  base.from_string, fields);
                base.export_attribute (obj, "WindContCurrLimIEC", "WindTurbineType3or4IEC", "WindTurbineType3or4IEC", fields);
                base.export_attributes (obj, "WindContCurrLimIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindContCurrLimIEC_collapse" aria-expanded="true" aria-controls="WindContCurrLimIEC_collapse" style="margin-left: 10px;">WindContCurrLimIEC</a></legend>
                    <div id="WindContCurrLimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#imax}}<div><b>imax</b>: {{imax}}</div>{{/imax}}
                    {{#imaxdip}}<div><b>imaxdip</b>: {{imaxdip}}</div>{{/imaxdip}}
                    {{#kpqu}}<div><b>kpqu</b>: {{kpqu}}</div>{{/kpqu}}
                    {{#mdfslim}}<div><b>mdfslim</b>: {{mdfslim}}</div>{{/mdfslim}}
                    {{#mqpri}}<div><b>mqpri</b>: {{mqpri}}</div>{{/mqpri}}
                    {{#tufiltcl}}<div><b>tufiltcl</b>: {{tufiltcl}}</div>{{/tufiltcl}}
                    {{#upqumax}}<div><b>upqumax</b>: {{upqumax}}</div>{{/upqumax}}
                    {{#WindTurbineType3or4IEC}}<div><b>WindTurbineType3or4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4IEC}}&quot;);})'>{{WindTurbineType3or4IEC}}</a></div>{{/WindTurbineType3or4IEC}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindContCurrLimIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindContCurrLimIEC_collapse" style="margin-left: 10px;">WindContCurrLimIEC</a></legend>
                    <div id="{{id}}_WindContCurrLimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_imax'>imax: </label><div class='col-sm-8'><input id='{{id}}_imax' class='form-control' type='text'{{#imax}} value='{{imax}}'{{/imax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_imaxdip'>imaxdip: </label><div class='col-sm-8'><input id='{{id}}_imaxdip' class='form-control' type='text'{{#imaxdip}} value='{{imaxdip}}'{{/imaxdip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpqu'>kpqu: </label><div class='col-sm-8'><input id='{{id}}_kpqu' class='form-control' type='text'{{#kpqu}} value='{{kpqu}}'{{/kpqu}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_mdfslim'>mdfslim: </label><div class='col-sm-8'><input id='{{id}}_mdfslim' class='form-check-input' type='checkbox'{{#mdfslim}} checked{{/mdfslim}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_mqpri'>mqpri: </label><div class='col-sm-8'><input id='{{id}}_mqpri' class='form-check-input' type='checkbox'{{#mqpri}} checked{{/mqpri}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tufiltcl'>tufiltcl: </label><div class='col-sm-8'><input id='{{id}}_tufiltcl' class='form-control' type='text'{{#tufiltcl}} value='{{tufiltcl}}'{{/tufiltcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upqumax'>upqumax: </label><div class='col-sm-8'><input id='{{id}}_upqumax' class='form-control' type='text'{{#upqumax}} value='{{upqumax}}'{{/upqumax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4IEC'>WindTurbineType3or4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4IEC' class='form-control' type='text'{{#WindTurbineType3or4IEC}} value='{{WindTurbineType3or4IEC}}'{{/WindTurbineType3or4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindContCurrLimIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_imax").value; if ("" != temp) obj.imax = temp;
                temp = document.getElementById (id + "_imaxdip").value; if ("" != temp) obj.imaxdip = temp;
                temp = document.getElementById (id + "_kpqu").value; if ("" != temp) obj.kpqu = temp;
                temp = document.getElementById (id + "_mdfslim").checked; if (temp) obj.mdfslim = true;
                temp = document.getElementById (id + "_mqpri").checked; if (temp) obj.mqpri = true;
                temp = document.getElementById (id + "_tufiltcl").value; if ("" != temp) obj.tufiltcl = temp;
                temp = document.getElementById (id + "_upqumax").value; if ("" != temp) obj.upqumax = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4IEC").value; if ("" != temp) obj.WindTurbineType3or4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4IEC", "1", "1", "WindTurbineType3or4IEC", "WindContCurrLimIEC"],
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindContCurrLimIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * One-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.2.
         *
         */
        class WindAeroOneDimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindAeroOneDimIEC;
                if (null == bucket)
                   cim_data.WindAeroOneDimIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindAeroOneDimIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroOneDimIEC";
                base.parse_element (/<cim:WindAeroOneDimIEC.ka>([\s\S]*?)<\/cim:WindAeroOneDimIEC.ka>/g, obj, "ka", base.to_float, sub, context);
                base.parse_element (/<cim:WindAeroOneDimIEC.thetaomega>([\s\S]*?)<\/cim:WindAeroOneDimIEC.thetaomega>/g, obj, "thetaomega", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindAeroOneDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                var bucket = context.parsed.WindAeroOneDimIEC;
                if (null == bucket)
                   context.parsed.WindAeroOneDimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindAeroOneDimIEC", "ka", "ka",  base.from_float, fields);
                base.export_element (obj, "WindAeroOneDimIEC", "thetaomega", "thetaomega",  base.from_string, fields);
                base.export_attribute (obj, "WindAeroOneDimIEC", "WindTurbineType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindAeroOneDimIEC_collapse" aria-expanded="true" aria-controls="WindAeroOneDimIEC_collapse" style="margin-left: 10px;">WindAeroOneDimIEC</a></legend>
                    <div id="WindAeroOneDimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#thetaomega}}<div><b>thetaomega</b>: {{thetaomega}}</div>{{/thetaomega}}
                    {{#WindTurbineType3IEC}}<div><b>WindTurbineType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3IEC}}&quot;);})'>{{WindTurbineType3IEC}}</a></div>{{/WindTurbineType3IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindAeroOneDimIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindAeroOneDimIEC_collapse" style="margin-left: 10px;">WindAeroOneDimIEC</a></legend>
                    <div id="{{id}}_WindAeroOneDimIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetaomega'>thetaomega: </label><div class='col-sm-8'><input id='{{id}}_thetaomega' class='form-control' type='text'{{#thetaomega}} value='{{thetaomega}}'{{/thetaomega}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3IEC'>WindTurbineType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3IEC' class='form-control' type='text'{{#WindTurbineType3IEC}} value='{{WindTurbineType3IEC}}'{{/WindTurbineType3IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindAeroOneDimIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_thetaomega").value; if ("" != temp) obj.thetaomega = temp;
                temp = document.getElementById (id + "_WindTurbineType3IEC").value; if ("" != temp) obj.WindTurbineType3IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3IEC", "1", "0..1", "WindTurbineType3IEC", "WindAeroOneDimIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant IEC and user defined wind plants including their control models.
         *
         */
        class WindPlantDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPlantDynamics;
                if (null == bucket)
                   cim_data.WindPlantDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPlantDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantDynamics";
                base.parse_attribute (/<cim:WindPlantDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);
                base.parse_attributes (/<cim:WindPlantDynamics.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
                var bucket = context.parsed.WindPlantDynamics;
                if (null == bucket)
                   context.parsed.WindPlantDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindPlantDynamics", "RemoteInputSignal", "RemoteInputSignal", fields);
                base.export_attributes (obj, "WindPlantDynamics", "WindTurbineType3or4Dynamics", "WindTurbineType3or4Dynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantDynamics_collapse" aria-expanded="true" aria-controls="WindPlantDynamics_collapse" style="margin-left: 10px;">WindPlantDynamics</a></legend>
                    <div id="WindPlantDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#RemoteInputSignal}}<div><b>RemoteInputSignal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RemoteInputSignal}}&quot;);})'>{{RemoteInputSignal}}</a></div>{{/RemoteInputSignal}}
                    {{#WindTurbineType3or4Dynamics}}<div><b>WindTurbineType3or4Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindTurbineType3or4Dynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindTurbineType3or4Dynamics) obj.WindTurbineType3or4Dynamics_string = obj.WindTurbineType3or4Dynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindTurbineType3or4Dynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindPlantDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_WindPlantDynamics_collapse" style="margin-left: 10px;">WindPlantDynamics</a></legend>
                    <div id="{{id}}_WindPlantDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RemoteInputSignal'>RemoteInputSignal: </label><div class='col-sm-8'><input id='{{id}}_RemoteInputSignal' class='form-control' type='text'{{#RemoteInputSignal}} value='{{RemoteInputSignal}}'{{/RemoteInputSignal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindPlantDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RemoteInputSignal").value; if ("" != temp) obj.RemoteInputSignal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RemoteInputSignal", "0..1", "0..1", "RemoteInputSignal", "WindPlantDynamics"],
                            ["WindTurbineType3or4Dynamics", "1..*", "0..1", "WindTurbineType3or4Dynamics", "WindPlantDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 and 4 including their control models.
         *
         */
        class WindTurbineType3or4IEC extends WindTurbineType3or4Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType3or4IEC;
                if (null == bucket)
                   cim_data.WindTurbineType3or4IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType3or4IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3or4IEC";
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindRefFrameRotIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindRefFrameRotIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WIndContQIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WIndContQIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQLimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);
                var bucket = context.parsed.WindTurbineType3or4IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType3or4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType3or4Dynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindRefFrameRotIEC", "WindRefFrameRotIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContQPQULimIEC", "WindContQPQULimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContCurrLimIEC", "WindContCurrLimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WIndContQIEC", "WIndContQIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContQLimIEC", "WindContQLimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindProtectionIEC", "WindProtectionIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType3or4IEC_collapse" aria-expanded="true" aria-controls="WindTurbineType3or4IEC_collapse" style="margin-left: 10px;">WindTurbineType3or4IEC</a></legend>
                    <div id="WindTurbineType3or4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4Dynamics.prototype.template.call (this) +
                    `
                    {{#WindRefFrameRotIEC}}<div><b>WindRefFrameRotIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindRefFrameRotIEC}}&quot;);})'>{{WindRefFrameRotIEC}}</a></div>{{/WindRefFrameRotIEC}}
                    {{#WindContQPQULimIEC}}<div><b>WindContQPQULimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContQPQULimIEC}}&quot;);})'>{{WindContQPQULimIEC}}</a></div>{{/WindContQPQULimIEC}}
                    {{#WindContCurrLimIEC}}<div><b>WindContCurrLimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContCurrLimIEC}}&quot;);})'>{{WindContCurrLimIEC}}</a></div>{{/WindContCurrLimIEC}}
                    {{#WIndContQIEC}}<div><b>WIndContQIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WIndContQIEC}}&quot;);})'>{{WIndContQIEC}}</a></div>{{/WIndContQIEC}}
                    {{#WindContQLimIEC}}<div><b>WindContQLimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContQLimIEC}}&quot;);})'>{{WindContQLimIEC}}</a></div>{{/WindContQLimIEC}}
                    {{#WindProtectionIEC}}<div><b>WindProtectionIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindProtectionIEC}}&quot;);})'>{{WindProtectionIEC}}</a></div>{{/WindProtectionIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType3or4IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType3or4IEC_collapse" style="margin-left: 10px;">WindTurbineType3or4IEC</a></legend>
                    <div id="{{id}}_WindTurbineType3or4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindRefFrameRotIEC'>WindRefFrameRotIEC: </label><div class='col-sm-8'><input id='{{id}}_WindRefFrameRotIEC' class='form-control' type='text'{{#WindRefFrameRotIEC}} value='{{WindRefFrameRotIEC}}'{{/WindRefFrameRotIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContQPQULimIEC'>WindContQPQULimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContQPQULimIEC' class='form-control' type='text'{{#WindContQPQULimIEC}} value='{{WindContQPQULimIEC}}'{{/WindContQPQULimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContCurrLimIEC'>WindContCurrLimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContCurrLimIEC' class='form-control' type='text'{{#WindContCurrLimIEC}} value='{{WindContCurrLimIEC}}'{{/WindContCurrLimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WIndContQIEC'>WIndContQIEC: </label><div class='col-sm-8'><input id='{{id}}_WIndContQIEC' class='form-control' type='text'{{#WIndContQIEC}} value='{{WIndContQIEC}}'{{/WIndContQIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContQLimIEC'>WindContQLimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContQLimIEC' class='form-control' type='text'{{#WindContQLimIEC}} value='{{WindContQLimIEC}}'{{/WindContQLimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindProtectionIEC'>WindProtectionIEC: </label><div class='col-sm-8'><input id='{{id}}_WindProtectionIEC' class='form-control' type='text'{{#WindProtectionIEC}} value='{{WindProtectionIEC}}'{{/WindProtectionIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType3or4IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindRefFrameRotIEC").value; if ("" != temp) obj.WindRefFrameRotIEC = temp;
                temp = document.getElementById (id + "_WindContQPQULimIEC").value; if ("" != temp) obj.WindContQPQULimIEC = temp;
                temp = document.getElementById (id + "_WindContCurrLimIEC").value; if ("" != temp) obj.WindContCurrLimIEC = temp;
                temp = document.getElementById (id + "_WIndContQIEC").value; if ("" != temp) obj.WIndContQIEC = temp;
                temp = document.getElementById (id + "_WindContQLimIEC").value; if ("" != temp) obj.WindContQLimIEC = temp;
                temp = document.getElementById (id + "_WindProtectionIEC").value; if ("" != temp) obj.WindProtectionIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindRefFrameRotIEC", "1", "1", "WindRefFrameRotIEC", "WindTurbineType3or4IEC"],
                            ["WindContQPQULimIEC", "0..1", "0..1", "WindContQPQULimIEC", "WindTurbineType3or4IEC"],
                            ["WindContCurrLimIEC", "1", "1", "WindContCurrLimIEC", "WindTurbineType3or4IEC"],
                            ["WIndContQIEC", "1", "1", "WindContQIEC", "WindTurbineType3or4IEC"],
                            ["WindContQLimIEC", "0..1", "0..1", "WindContQLimIEC", "WindTurbineType3or4IEC"],
                            ["WindProtectionIEC", "1", "0..1", "WindProtectionIEC", "WindTurbineType3or4IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 4 including their control models.
         *
         */
        class WindTurbineType4IEC extends WindTurbineType3or4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType4IEC;
                if (null == bucket)
                   cim_data.WindTurbineType4IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType4IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4IEC";
                base.parse_attribute (/<cim:WindTurbineType4IEC.WindGenType3aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3aIEC", sub, context);
                var bucket = context.parsed.WindTurbineType4IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType3or4IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType4IEC", "WindGenType3aIEC", "WindGenType3aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType4IEC_collapse" aria-expanded="true" aria-controls="WindTurbineType4IEC_collapse" style="margin-left: 10px;">WindTurbineType4IEC</a></legend>
                    <div id="WindTurbineType4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4IEC.prototype.template.call (this) +
                    `
                    {{#WindGenType3aIEC}}<div><b>WindGenType3aIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenType3aIEC}}&quot;);})'>{{WindGenType3aIEC}}</a></div>{{/WindGenType3aIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType4IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType4IEC_collapse" style="margin-left: 10px;">WindTurbineType4IEC</a></legend>
                    <div id="{{id}}_WindTurbineType4IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenType3aIEC'>WindGenType3aIEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenType3aIEC' class='form-control' type='text'{{#WindGenType3aIEC}} value='{{WindGenType3aIEC}}'{{/WindGenType3aIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType4IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindGenType3aIEC").value; if ("" != temp) obj.WindGenType3aIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindGenType3aIEC", "0..1", "0..1", "WindGenType3aIEC", "WindTurbineType4IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 including their control models.
         *
         */
        class WindTurbineType3IEC extends WindTurbineType3or4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType3IEC;
                if (null == bucket)
                   cim_data.WindTurbineType3IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType3IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3IEC";
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindGenType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPitchAngleIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPitchAngleIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroTwoDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroTwoDimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroOneDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroOneDimIEC", sub, context);
                var bucket = context.parsed.WindTurbineType3IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType3or4IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType3IEC", "WindGenType3IEC", "WindGenType3IEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindContPitchAngleIEC", "WindContPitchAngleIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindContPType3IEC", "WindContPType3IEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindAeroTwoDimIEC", "WindAeroTwoDimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindMechIEC", "WindMechIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindAeroOneDimIEC", "WindAeroOneDimIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType3IEC_collapse" aria-expanded="true" aria-controls="WindTurbineType3IEC_collapse" style="margin-left: 10px;">WindTurbineType3IEC</a></legend>
                    <div id="WindTurbineType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4IEC.prototype.template.call (this) +
                    `
                    {{#WindGenType3IEC}}<div><b>WindGenType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenType3IEC}}&quot;);})'>{{WindGenType3IEC}}</a></div>{{/WindGenType3IEC}}
                    {{#WindContPitchAngleIEC}}<div><b>WindContPitchAngleIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContPitchAngleIEC}}&quot;);})'>{{WindContPitchAngleIEC}}</a></div>{{/WindContPitchAngleIEC}}
                    {{#WindContPType3IEC}}<div><b>WindContPType3IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContPType3IEC}}&quot;);})'>{{WindContPType3IEC}}</a></div>{{/WindContPType3IEC}}
                    {{#WindAeroTwoDimIEC}}<div><b>WindAeroTwoDimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindAeroTwoDimIEC}}&quot;);})'>{{WindAeroTwoDimIEC}}</a></div>{{/WindAeroTwoDimIEC}}
                    {{#WindMechIEC}}<div><b>WindMechIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindMechIEC}}&quot;);})'>{{WindMechIEC}}</a></div>{{/WindMechIEC}}
                    {{#WindAeroOneDimIEC}}<div><b>WindAeroOneDimIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindAeroOneDimIEC}}&quot;);})'>{{WindAeroOneDimIEC}}</a></div>{{/WindAeroOneDimIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType3IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType3IEC_collapse" style="margin-left: 10px;">WindTurbineType3IEC</a></legend>
                    <div id="{{id}}_WindTurbineType3IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType3or4IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenType3IEC'>WindGenType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenType3IEC' class='form-control' type='text'{{#WindGenType3IEC}} value='{{WindGenType3IEC}}'{{/WindGenType3IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContPitchAngleIEC'>WindContPitchAngleIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContPitchAngleIEC' class='form-control' type='text'{{#WindContPitchAngleIEC}} value='{{WindContPitchAngleIEC}}'{{/WindContPitchAngleIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContPType3IEC'>WindContPType3IEC: </label><div class='col-sm-8'><input id='{{id}}_WindContPType3IEC' class='form-control' type='text'{{#WindContPType3IEC}} value='{{WindContPType3IEC}}'{{/WindContPType3IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindAeroTwoDimIEC'>WindAeroTwoDimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindAeroTwoDimIEC' class='form-control' type='text'{{#WindAeroTwoDimIEC}} value='{{WindAeroTwoDimIEC}}'{{/WindAeroTwoDimIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindMechIEC'>WindMechIEC: </label><div class='col-sm-8'><input id='{{id}}_WindMechIEC' class='form-control' type='text'{{#WindMechIEC}} value='{{WindMechIEC}}'{{/WindMechIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindAeroOneDimIEC'>WindAeroOneDimIEC: </label><div class='col-sm-8'><input id='{{id}}_WindAeroOneDimIEC' class='form-control' type='text'{{#WindAeroOneDimIEC}} value='{{WindAeroOneDimIEC}}'{{/WindAeroOneDimIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType3IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindGenType3IEC").value; if ("" != temp) obj.WindGenType3IEC = temp;
                temp = document.getElementById (id + "_WindContPitchAngleIEC").value; if ("" != temp) obj.WindContPitchAngleIEC = temp;
                temp = document.getElementById (id + "_WindContPType3IEC").value; if ("" != temp) obj.WindContPType3IEC = temp;
                temp = document.getElementById (id + "_WindAeroTwoDimIEC").value; if ("" != temp) obj.WindAeroTwoDimIEC = temp;
                temp = document.getElementById (id + "_WindMechIEC").value; if ("" != temp) obj.WindMechIEC = temp;
                temp = document.getElementById (id + "_WindAeroOneDimIEC").value; if ("" != temp) obj.WindAeroOneDimIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindGenType3IEC", "0..1", "0..1", "WindGenType3IEC", "WindTurbineType3IEC"],
                            ["WindContPitchAngleIEC", "1", "1", "WindContPitchAngleIEC", "WindTurbineType3IEC"],
                            ["WindContPType3IEC", "1", "1", "WindContPType3IEC", "WindTurbineType3IEC"],
                            ["WindAeroTwoDimIEC", "0..1", "1", "WindAeroTwoDimIEC", "WindTurbineType3IEC"],
                            ["WindMechIEC", "1", "0..1", "WindMechIEC", "WindTurbineType3IEC"],
                            ["WindAeroOneDimIEC", "0..1", "1", "WindAeroOneDimIEC", "WindTurbineType3IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.3.
         *
         */
        class WindTurbineType4aIEC extends WindTurbineType4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType4aIEC;
                if (null == bucket)
                   cim_data.WindTurbineType4aIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType4aIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4aIEC";
                base.parse_attribute (/<cim:WindTurbineType4aIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4aIEC.WindContPType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4aIEC", sub, context);
                var bucket = context.parsed.WindTurbineType4aIEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType4IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType4aIEC", "WindGenType4IEC", "WindGenType4IEC", fields);
                base.export_attribute (obj, "WindTurbineType4aIEC", "WindContPType4aIEC", "WindContPType4aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType4aIEC_collapse" aria-expanded="true" aria-controls="WindTurbineType4aIEC_collapse" style="margin-left: 10px;">WindTurbineType4aIEC</a></legend>
                    <div id="WindTurbineType4aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType4IEC.prototype.template.call (this) +
                    `
                    {{#WindGenType4IEC}}<div><b>WindGenType4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenType4IEC}}&quot;);})'>{{WindGenType4IEC}}</a></div>{{/WindGenType4IEC}}
                    {{#WindContPType4aIEC}}<div><b>WindContPType4aIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContPType4aIEC}}&quot;);})'>{{WindContPType4aIEC}}</a></div>{{/WindContPType4aIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType4aIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType4aIEC_collapse" style="margin-left: 10px;">WindTurbineType4aIEC</a></legend>
                    <div id="{{id}}_WindTurbineType4aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType4IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenType4IEC'>WindGenType4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenType4IEC' class='form-control' type='text'{{#WindGenType4IEC}} value='{{WindGenType4IEC}}'{{/WindGenType4IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContPType4aIEC'>WindContPType4aIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContPType4aIEC' class='form-control' type='text'{{#WindContPType4aIEC}} value='{{WindContPType4aIEC}}'{{/WindContPType4aIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType4aIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindGenType4IEC").value; if ("" != temp) obj.WindGenType4IEC = temp;
                temp = document.getElementById (id + "_WindContPType4aIEC").value; if ("" != temp) obj.WindContPType4aIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindGenType4IEC", "0..1", "0..1", "WindGenType4IEC", "WindTurbineType4aIEC"],
                            ["WindContPType4aIEC", "1", "1", "WindContPType4aIEC", "WindTurbineType4aIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.2.
         *
         */
        class WindTurbineType4bIEC extends WindTurbineType4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType4bIEC;
                if (null == bucket)
                   cim_data.WindTurbineType4bIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType4bIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4bIEC";
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindContPType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4bIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);
                var bucket = context.parsed.WindTurbineType4bIEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType4IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType4bIEC", "WindContPType4bIEC", "WindContPType4bIEC", fields);
                base.export_attribute (obj, "WindTurbineType4bIEC", "WindGenType4IEC", "WindGenType4IEC", fields);
                base.export_attribute (obj, "WindTurbineType4bIEC", "WindMechIEC", "WindMechIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType4bIEC_collapse" aria-expanded="true" aria-controls="WindTurbineType4bIEC_collapse" style="margin-left: 10px;">WindTurbineType4bIEC</a></legend>
                    <div id="WindTurbineType4bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType4IEC.prototype.template.call (this) +
                    `
                    {{#WindContPType4bIEC}}<div><b>WindContPType4bIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContPType4bIEC}}&quot;);})'>{{WindContPType4bIEC}}</a></div>{{/WindContPType4bIEC}}
                    {{#WindGenType4IEC}}<div><b>WindGenType4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindGenType4IEC}}&quot;);})'>{{WindGenType4IEC}}</a></div>{{/WindGenType4IEC}}
                    {{#WindMechIEC}}<div><b>WindMechIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindMechIEC}}&quot;);})'>{{WindMechIEC}}</a></div>{{/WindMechIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType4bIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType4bIEC_collapse" style="margin-left: 10px;">WindTurbineType4bIEC</a></legend>
                    <div id="{{id}}_WindTurbineType4bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType4IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContPType4bIEC'>WindContPType4bIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContPType4bIEC' class='form-control' type='text'{{#WindContPType4bIEC}} value='{{WindContPType4bIEC}}'{{/WindContPType4bIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindGenType4IEC'>WindGenType4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindGenType4IEC' class='form-control' type='text'{{#WindGenType4IEC}} value='{{WindGenType4IEC}}'{{/WindGenType4IEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindMechIEC'>WindMechIEC: </label><div class='col-sm-8'><input id='{{id}}_WindMechIEC' class='form-control' type='text'{{#WindMechIEC}} value='{{WindMechIEC}}'{{/WindMechIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType4bIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindContPType4bIEC").value; if ("" != temp) obj.WindContPType4bIEC = temp;
                temp = document.getElementById (id + "_WindGenType4IEC").value; if ("" != temp) obj.WindGenType4IEC = temp;
                temp = document.getElementById (id + "_WindMechIEC").value; if ("" != temp) obj.WindMechIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindContPType4bIEC", "1", "1", "WindContPType4bIEC", "WindTurbineType4bIEC"],
                            ["WindGenType4IEC", "0..1", "0..1", "WindGenType4IEC", "WindTurbineType4bIEC"],
                            ["WindMechIEC", "1", "0..1", "WindMechIEC", "WindTurbineType4bIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * IEC Type 3A generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.2.
         *
         */
        class WindGenType3aIEC extends WindGenType3IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenType3aIEC;
                if (null == bucket)
                   cim_data.WindGenType3aIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenType3aIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindGenType3IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3aIEC";
                base.parse_element (/<cim:WindGenType3aIEC.kpc>([\s\S]*?)<\/cim:WindGenType3aIEC.kpc>/g, obj, "kpc", base.to_float, sub, context);
                base.parse_element (/<cim:WindGenType3aIEC.tic>([\s\S]*?)<\/cim:WindGenType3aIEC.tic>/g, obj, "tic", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType3aIEC.WindTurbineType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4IEC", sub, context);
                var bucket = context.parsed.WindGenType3aIEC;
                if (null == bucket)
                   context.parsed.WindGenType3aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindGenType3IEC.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindGenType3aIEC", "kpc", "kpc",  base.from_float, fields);
                base.export_element (obj, "WindGenType3aIEC", "tic", "tic",  base.from_string, fields);
                base.export_attribute (obj, "WindGenType3aIEC", "WindTurbineType4IEC", "WindTurbineType4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenType3aIEC_collapse" aria-expanded="true" aria-controls="WindGenType3aIEC_collapse" style="margin-left: 10px;">WindGenType3aIEC</a></legend>
                    <div id="WindGenType3aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindGenType3IEC.prototype.template.call (this) +
                    `
                    {{#kpc}}<div><b>kpc</b>: {{kpc}}</div>{{/kpc}}
                    {{#tic}}<div><b>tic</b>: {{tic}}</div>{{/tic}}
                    {{#WindTurbineType4IEC}}<div><b>WindTurbineType4IEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType4IEC}}&quot;);})'>{{WindTurbineType4IEC}}</a></div>{{/WindTurbineType4IEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenType3aIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenType3aIEC_collapse" style="margin-left: 10px;">WindGenType3aIEC</a></legend>
                    <div id="{{id}}_WindGenType3aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindGenType3IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpc'>kpc: </label><div class='col-sm-8'><input id='{{id}}_kpc' class='form-control' type='text'{{#kpc}} value='{{kpc}}'{{/kpc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tic'>tic: </label><div class='col-sm-8'><input id='{{id}}_tic' class='form-control' type='text'{{#tic}} value='{{tic}}'{{/tic}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType4IEC'>WindTurbineType4IEC: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType4IEC' class='form-control' type='text'{{#WindTurbineType4IEC}} value='{{WindTurbineType4IEC}}'{{/WindTurbineType4IEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenType3aIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kpc").value; if ("" != temp) obj.kpc = temp;
                temp = document.getElementById (id + "_tic").value; if ("" != temp) obj.tic = temp;
                temp = document.getElementById (id + "_WindTurbineType4IEC").value; if ("" != temp) obj.WindTurbineType4IEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType4IEC", "0..1", "0..1", "WindTurbineType4IEC", "WindGenType3aIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * IEC Type 3B generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.3.
         *
         */
        class WindGenType3bIEC extends WindGenType3IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenType3bIEC;
                if (null == bucket)
                   cim_data.WindGenType3bIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenType3bIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindGenType3IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3bIEC";
                base.parse_element (/<cim:WindGenType3bIEC.mwtcwp>([\s\S]*?)<\/cim:WindGenType3bIEC.mwtcwp>/g, obj, "mwtcwp", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindGenType3bIEC.tg>([\s\S]*?)<\/cim:WindGenType3bIEC.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3bIEC.two>([\s\S]*?)<\/cim:WindGenType3bIEC.two>/g, obj, "two", base.to_string, sub, context);
                base.parse_attributes (/<cim:WindGenType3bIEC.WindDynamicsLookupTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindDynamicsLookupTable", sub, context);
                var bucket = context.parsed.WindGenType3bIEC;
                if (null == bucket)
                   context.parsed.WindGenType3bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindGenType3IEC.prototype.export.call (this, obj, false);

                base.export_element (obj, "WindGenType3bIEC", "mwtcwp", "mwtcwp",  base.from_boolean, fields);
                base.export_element (obj, "WindGenType3bIEC", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "WindGenType3bIEC", "two", "two",  base.from_string, fields);
                base.export_attributes (obj, "WindGenType3bIEC", "WindDynamicsLookupTable", "WindDynamicsLookupTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenType3bIEC_collapse" aria-expanded="true" aria-controls="WindGenType3bIEC_collapse" style="margin-left: 10px;">WindGenType3bIEC</a></legend>
                    <div id="WindGenType3bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindGenType3IEC.prototype.template.call (this) +
                    `
                    {{#mwtcwp}}<div><b>mwtcwp</b>: {{mwtcwp}}</div>{{/mwtcwp}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#two}}<div><b>two</b>: {{two}}</div>{{/two}}
                    {{#WindDynamicsLookupTable}}<div><b>WindDynamicsLookupTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/WindDynamicsLookupTable}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WindDynamicsLookupTable) obj.WindDynamicsLookupTable_string = obj.WindDynamicsLookupTable.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindDynamicsLookupTable_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenType3bIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenType3bIEC_collapse" style="margin-left: 10px;">WindGenType3bIEC</a></legend>
                    <div id="{{id}}_WindGenType3bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindGenType3IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_mwtcwp'>mwtcwp: </label><div class='col-sm-8'><input id='{{id}}_mwtcwp' class='form-check-input' type='checkbox'{{#mwtcwp}} checked{{/mwtcwp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_two'>two: </label><div class='col-sm-8'><input id='{{id}}_two' class='form-control' type='text'{{#two}} value='{{two}}'{{/two}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenType3bIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mwtcwp").checked; if (temp) obj.mwtcwp = true;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_two").value; if ("" != temp) obj.two = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindDynamicsLookupTable", "1..*", "0..1", "WindDynamicsLookupTable", "WindGenType3bIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 1 and 2 including their control models.
         *
         * Generator model for wind turbine of IEC Type 1 or Type 2 is a standard asynchronous generator model.
         *
         */
        class WindTurbineType1or2IEC extends WindTurbineType1or2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindTurbineType1or2IEC;
                if (null == bucket)
                   cim_data.WindTurbineType1or2IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindTurbineType1or2IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType1or2IEC";
                base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);
                var bucket = context.parsed.WindTurbineType1or2IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType1or2IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType1or2Dynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindTurbineType1or2IEC", "WindProtectionIEC", "WindProtectionIEC", fields);
                base.export_attribute (obj, "WindTurbineType1or2IEC", "WindMechIEC", "WindMechIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindTurbineType1or2IEC_collapse" aria-expanded="true" aria-controls="WindTurbineType1or2IEC_collapse" style="margin-left: 10px;">WindTurbineType1or2IEC</a></legend>
                    <div id="WindTurbineType1or2IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2Dynamics.prototype.template.call (this) +
                    `
                    {{#WindProtectionIEC}}<div><b>WindProtectionIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindProtectionIEC}}&quot;);})'>{{WindProtectionIEC}}</a></div>{{/WindProtectionIEC}}
                    {{#WindMechIEC}}<div><b>WindMechIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindMechIEC}}&quot;);})'>{{WindMechIEC}}</a></div>{{/WindMechIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindTurbineType1or2IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindTurbineType1or2IEC_collapse" style="margin-left: 10px;">WindTurbineType1or2IEC</a></legend>
                    <div id="{{id}}_WindTurbineType1or2IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2Dynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindProtectionIEC'>WindProtectionIEC: </label><div class='col-sm-8'><input id='{{id}}_WindProtectionIEC' class='form-control' type='text'{{#WindProtectionIEC}} value='{{WindProtectionIEC}}'{{/WindProtectionIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindMechIEC'>WindMechIEC: </label><div class='col-sm-8'><input id='{{id}}_WindMechIEC' class='form-control' type='text'{{#WindMechIEC}} value='{{WindMechIEC}}'{{/WindMechIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindTurbineType1or2IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindProtectionIEC").value; if ("" != temp) obj.WindProtectionIEC = temp;
                temp = document.getElementById (id + "_WindMechIEC").value; if ("" != temp) obj.WindMechIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindProtectionIEC", "1", "0..1", "WindProtectionIEC", "WindTurbineType1or2IEC"],
                            ["WindMechIEC", "1", "0..1", "WindMechIEC", "WindTurbineType1or2IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Wind turbine IEC Type 1B.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.3.
         *
         */
        class WindGenTurbineType1bIEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenTurbineType1bIEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType1bIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenTurbineType1bIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType1bIEC";
                base.parse_attribute (/<cim:WindGenTurbineType1bIEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);
                var bucket = context.parsed.WindGenTurbineType1bIEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType1bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType1or2IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindGenTurbineType1bIEC", "WindPitchContPowerIEC", "WindPitchContPowerIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenTurbineType1bIEC_collapse" aria-expanded="true" aria-controls="WindGenTurbineType1bIEC_collapse" style="margin-left: 10px;">WindGenTurbineType1bIEC</a></legend>
                    <div id="WindGenTurbineType1bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.template.call (this) +
                    `
                    {{#WindPitchContPowerIEC}}<div><b>WindPitchContPowerIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPitchContPowerIEC}}&quot;);})'>{{WindPitchContPowerIEC}}</a></div>{{/WindPitchContPowerIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenTurbineType1bIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenTurbineType1bIEC_collapse" style="margin-left: 10px;">WindGenTurbineType1bIEC</a></legend>
                    <div id="{{id}}_WindGenTurbineType1bIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPitchContPowerIEC'>WindPitchContPowerIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPitchContPowerIEC' class='form-control' type='text'{{#WindPitchContPowerIEC}} value='{{WindPitchContPowerIEC}}'{{/WindPitchContPowerIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenTurbineType1bIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindPitchContPowerIEC").value; if ("" != temp) obj.WindPitchContPowerIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindPitchContPowerIEC", "1", "0..1", "WindPitchContPowerIEC", "WindGenTurbineType1bIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Wind turbine IEC Type 1A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.2.
         *
         */
        class WindGenTurbineType1aIEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenTurbineType1aIEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType1aIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenTurbineType1aIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType1aIEC";
                base.parse_attribute (/<cim:WindGenTurbineType1aIEC.WindAeroConstIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroConstIEC", sub, context);
                var bucket = context.parsed.WindGenTurbineType1aIEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType1aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType1or2IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindGenTurbineType1aIEC", "WindAeroConstIEC", "WindAeroConstIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenTurbineType1aIEC_collapse" aria-expanded="true" aria-controls="WindGenTurbineType1aIEC_collapse" style="margin-left: 10px;">WindGenTurbineType1aIEC</a></legend>
                    <div id="WindGenTurbineType1aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.template.call (this) +
                    `
                    {{#WindAeroConstIEC}}<div><b>WindAeroConstIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindAeroConstIEC}}&quot;);})'>{{WindAeroConstIEC}}</a></div>{{/WindAeroConstIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenTurbineType1aIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenTurbineType1aIEC_collapse" style="margin-left: 10px;">WindGenTurbineType1aIEC</a></legend>
                    <div id="{{id}}_WindGenTurbineType1aIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindAeroConstIEC'>WindAeroConstIEC: </label><div class='col-sm-8'><input id='{{id}}_WindAeroConstIEC' class='form-control' type='text'{{#WindAeroConstIEC}} value='{{WindAeroConstIEC}}'{{/WindAeroConstIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenTurbineType1aIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindAeroConstIEC").value; if ("" != temp) obj.WindAeroConstIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindAeroConstIEC", "1", "1", "WindAeroConstIEC", "WindGenTurbineType1aIEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Wind turbine IEC Type 2.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.3.
         *
         */
        class WindGenTurbineType2IEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindGenTurbineType2IEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType2IEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindGenTurbineType2IEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType2IEC";
                base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context);
                base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);
                var bucket = context.parsed.WindGenTurbineType2IEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType2IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindTurbineType1or2IEC.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindGenTurbineType2IEC", "WindContRotorRIEC", "WindContRotorRIEC", fields);
                base.export_attribute (obj, "WindGenTurbineType2IEC", "WindPitchContPowerIEC", "WindPitchContPowerIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindGenTurbineType2IEC_collapse" aria-expanded="true" aria-controls="WindGenTurbineType2IEC_collapse" style="margin-left: 10px;">WindGenTurbineType2IEC</a></legend>
                    <div id="WindGenTurbineType2IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.template.call (this) +
                    `
                    {{#WindContRotorRIEC}}<div><b>WindContRotorRIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindContRotorRIEC}}&quot;);})'>{{WindContRotorRIEC}}</a></div>{{/WindContRotorRIEC}}
                    {{#WindPitchContPowerIEC}}<div><b>WindPitchContPowerIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPitchContPowerIEC}}&quot;);})'>{{WindPitchContPowerIEC}}</a></div>{{/WindPitchContPowerIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindGenTurbineType2IEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindGenTurbineType2IEC_collapse" style="margin-left: 10px;">WindGenTurbineType2IEC</a></legend>
                    <div id="{{id}}_WindGenTurbineType2IEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindTurbineType1or2IEC.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindContRotorRIEC'>WindContRotorRIEC: </label><div class='col-sm-8'><input id='{{id}}_WindContRotorRIEC' class='form-control' type='text'{{#WindContRotorRIEC}} value='{{WindContRotorRIEC}}'{{/WindContRotorRIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPitchContPowerIEC'>WindPitchContPowerIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPitchContPowerIEC' class='form-control' type='text'{{#WindPitchContPowerIEC}} value='{{WindPitchContPowerIEC}}'{{/WindPitchContPowerIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindGenTurbineType2IEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindContRotorRIEC").value; if ("" != temp) obj.WindContRotorRIEC = temp;
                temp = document.getElementById (id + "_WindPitchContPowerIEC").value; if ("" != temp) obj.WindPitchContPowerIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindContRotorRIEC", "1", "1", "WindContRotorRIEC", "WindGenTurbineType2IEC"],
                            ["WindPitchContPowerIEC", "1", "0..1", "WindPitchContPowerIEC", "WindGenTurbineType2IEC"]
                        ]
                    )
                );
            }
        }

        /**
         * Simplified IEC type plant level model.
         *
         * Reference: IEC 61400-27-1, Annex D.
         *
         */
        class WindPlantIEC extends WindPlantDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.WindPlantIEC;
                if (null == bucket)
                   cim_data.WindPlantIEC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WindPlantIEC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindPlantDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantIEC";
                base.parse_attribute (/<cim:WindPlantIEC.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context);
                base.parse_attribute (/<cim:WindPlantIEC.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context);
                var bucket = context.parsed.WindPlantIEC;
                if (null == bucket)
                   context.parsed.WindPlantIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = WindPlantDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "WindPlantIEC", "WindPlantReactiveControlIEC", "WindPlantReactiveControlIEC", fields);
                base.export_attribute (obj, "WindPlantIEC", "WindPlantFreqPcontrolIEC", "WindPlantFreqPcontrolIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WindPlantIEC_collapse" aria-expanded="true" aria-controls="WindPlantIEC_collapse" style="margin-left: 10px;">WindPlantIEC</a></legend>
                    <div id="WindPlantIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindPlantDynamics.prototype.template.call (this) +
                    `
                    {{#WindPlantReactiveControlIEC}}<div><b>WindPlantReactiveControlIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantReactiveControlIEC}}&quot;);})'>{{WindPlantReactiveControlIEC}}</a></div>{{/WindPlantReactiveControlIEC}}
                    {{#WindPlantFreqPcontrolIEC}}<div><b>WindPlantFreqPcontrolIEC</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindPlantFreqPcontrolIEC}}&quot;);})'>{{WindPlantFreqPcontrolIEC}}</a></div>{{/WindPlantFreqPcontrolIEC}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WindPlantIEC_collapse" aria-expanded="true" aria-controls="{{id}}_WindPlantIEC_collapse" style="margin-left: 10px;">WindPlantIEC</a></legend>
                    <div id="{{id}}_WindPlantIEC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + WindPlantDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantReactiveControlIEC'>WindPlantReactiveControlIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantReactiveControlIEC' class='form-control' type='text'{{#WindPlantReactiveControlIEC}} value='{{WindPlantReactiveControlIEC}}'{{/WindPlantReactiveControlIEC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindPlantFreqPcontrolIEC'>WindPlantFreqPcontrolIEC: </label><div class='col-sm-8'><input id='{{id}}_WindPlantFreqPcontrolIEC' class='form-control' type='text'{{#WindPlantFreqPcontrolIEC}} value='{{WindPlantFreqPcontrolIEC}}'{{/WindPlantFreqPcontrolIEC}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WindPlantIEC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WindPlantReactiveControlIEC").value; if ("" != temp) obj.WindPlantReactiveControlIEC = temp;
                temp = document.getElementById (id + "_WindPlantFreqPcontrolIEC").value; if ("" != temp) obj.WindPlantFreqPcontrolIEC = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindPlantReactiveControlIEC", "1", "1", "WindPlantReactiveControlIEC", "WindPlantIEC"],
                            ["WindPlantFreqPcontrolIEC", "1", "1", "WindPlantFreqPcontrolIEC", "WindPlantIEC"]
                        ]
                    )
                );
            }
        }

        return (
            {
                WindTurbineType4IEC: WindTurbineType4IEC,
                WindGenTurbineType1bIEC: WindGenTurbineType1bIEC,
                WindTurbineType3or4Dynamics: WindTurbineType3or4Dynamics,
                WindTurbineType1or2IEC: WindTurbineType1or2IEC,
                WindGenTurbineType2IEC: WindGenTurbineType2IEC,
                WindPlantIEC: WindPlantIEC,
                WindAeroConstIEC: WindAeroConstIEC,
                WindTurbineType4aIEC: WindTurbineType4aIEC,
                WindContRotorRIEC: WindContRotorRIEC,
                WindGenTurbineType1aIEC: WindGenTurbineType1aIEC,
                WindContCurrLimIEC: WindContCurrLimIEC,
                WindGenType4IEC: WindGenType4IEC,
                WindTurbineType4bIEC: WindTurbineType4bIEC,
                WindTurbineType3IEC: WindTurbineType3IEC,
                WindContQLimIEC: WindContQLimIEC,
                WindContQIEC: WindContQIEC,
                WindContPType3IEC: WindContPType3IEC,
                WindGenType3aIEC: WindGenType3aIEC,
                WindPlantReactiveControlIEC: WindPlantReactiveControlIEC,
                WindPlantDynamics: WindPlantDynamics,
                WindMechIEC: WindMechIEC,
                WindGenType3bIEC: WindGenType3bIEC,
                WindContPType4bIEC: WindContPType4bIEC,
                WindTurbineType1or2Dynamics: WindTurbineType1or2Dynamics,
                WindContQPQULimIEC: WindContQPQULimIEC,
                WindContPitchAngleIEC: WindContPitchAngleIEC,
                WindRefFrameRotIEC: WindRefFrameRotIEC,
                WindContPType4aIEC: WindContPType4aIEC,
                WindAeroOneDimIEC: WindAeroOneDimIEC,
                WindPitchContPowerIEC: WindPitchContPowerIEC,
                WindProtectionIEC: WindProtectionIEC,
                WindDynamicsLookupTable: WindDynamicsLookupTable,
                WindTurbineType3or4IEC: WindTurbineType3or4IEC,
                WindAeroTwoDimIEC: WindAeroTwoDimIEC,
                WindPlantFreqPcontrolIEC: WindPlantFreqPcontrolIEC,
                WindGenType3IEC: WindGenType3IEC
            }
        );
    }
);