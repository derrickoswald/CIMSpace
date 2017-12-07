define
(
    ["model/base", "model/StandardModels"],
    /**
     * For conventional power generating units (e.g., thermal, hydro, combustion turbine), a synchronous machine model represents the electrical characteristics of the generator and the mechanical characteristics of the turbine-generator rotational inertia.
     *
     * Large industrial motors or groups of similar motors may be represented by individual motor models which are represented as <b>generators with negative active power</b> in the static (power flow) data.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Type of rotor on physical machine.
         *
         */
        var RotorKind =
        {
            roundRotor: "roundRotor",
            salientPole: "salientPole"
        };
        Object.freeze (RotorKind);

        /**
         * Type of synchronous machine model used in Dynamic simulation applications.
         *
         */
        var SynchronousMachineModelKind =
        {
            subtransient: "subtransient",
            subtransientTypeF: "subtransientTypeF",
            subtransientTypeJ: "subtransientTypeJ",
            subtransientSimplified: "subtransientSimplified",
            subtransientSimplifiedDirectAxis: "subtransientSimplifiedDirectAxis"
        };
        Object.freeze (SynchronousMachineModelKind);

        /**
         * Excitation base system mode.
         *
         */
        var IfdBaseKind =
        {
            ifag: "ifag",
            ifnl: "ifnl",
            iffl: "iffl"
        };
        Object.freeze (IfdBaseKind);

        /**
         * Synchronous machine whose behaviour is described by reference to a standard model expressed in one of the following forms:
         * <ul>
         * <li>simplified (or classical), where a group of generators or motors is not modelled in detail</li>
         * </ul>
         * <ul>
         * <li>detailed, in equivalent circuit form</li>
         * <li>detailed, in time constant reactance form</li>
         * </ul>
         * <font color="#0f0f0f">or by definition of a user-defined model.</font>
         * <font color="#0f0f0f">
         * </font><font color="#0f0f0f"><b>Note:</b>  It is a common practice to represent small generators by a negative load rather than by a dynamic generator model when performing dynamics simulations.
         *
         * In this case a SynchronousMachine in the static model is not represented by anything in the dynamics model, instead it is treated as ordinary load.</font>
         *
         */
        class SynchronousMachineDynamics extends StandardModels.RotatingMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineDynamics;
                if (null == bucket)
                   cim_data.SynchronousMachineDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.RotatingMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineDynamics";
                base.parse_attribute (/<cim:SynchronousMachineDynamics.MechanicalLoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadDynamics", sub, context);
                base.parse_attribute (/<cim:SynchronousMachineDynamics.ExcitationSystemDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ExcitationSystemDynamics", sub, context);
                base.parse_attribute (/<cim:SynchronousMachineDynamics.SynchronousMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachine", sub, context);
                base.parse_attributes (/<cim:SynchronousMachineDynamics.GenICompensationForGenJ\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GenICompensationForGenJ", sub, context);
                base.parse_attributes (/<cim:SynchronousMachineDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context);
                var bucket = context.parsed.SynchronousMachineDynamics;
                if (null == bucket)
                   context.parsed.SynchronousMachineDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.RotatingMachineDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "export_attribute", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "export_attribute", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "export_attribute", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "export_attributes", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "export_attributes", "SynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineDynamics_collapse" aria-expanded="true" aria-controls="SynchronousMachineDynamics_collapse" style="margin-left: 10px;">SynchronousMachineDynamics</a></legend>
                    <div id="SynchronousMachineDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.RotatingMachineDynamics.prototype.template.call (this) +
                    `
                    {{#MechanicalLoadDynamics}}<div><b>MechanicalLoadDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MechanicalLoadDynamics}}&quot;);})'>{{MechanicalLoadDynamics}}</a></div>{{/MechanicalLoadDynamics}}
                    {{#ExcitationSystemDynamics}}<div><b>ExcitationSystemDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ExcitationSystemDynamics}}&quot;);})'>{{ExcitationSystemDynamics}}</a></div>{{/ExcitationSystemDynamics}}
                    {{#SynchronousMachine}}<div><b>SynchronousMachine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachine}}&quot;);})'>{{SynchronousMachine}}</a></div>{{/SynchronousMachine}}
                    {{#GenICompensationForGenJ}}<div><b>GenICompensationForGenJ</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/GenICompensationForGenJ}}
                    {{#TurbineGovernorDynamics}}<div><b>TurbineGovernorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/TurbineGovernorDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.GenICompensationForGenJ) obj.GenICompensationForGenJ_string = obj.GenICompensationForGenJ.join ();
                if (obj.TurbineGovernorDynamics) obj.TurbineGovernorDynamics_string = obj.TurbineGovernorDynamics.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.GenICompensationForGenJ_string;
                delete obj.TurbineGovernorDynamics_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineDynamics_collapse" aria-expanded="true" aria-controls="SynchronousMachineDynamics_collapse" style="margin-left: 10px;">SynchronousMachineDynamics</a></legend>
                    <div id="SynchronousMachineDynamics_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + StandardModels.RotatingMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='MechanicalLoadDynamics'>MechanicalLoadDynamics: </label><div class='col-sm-8'><input id='MechanicalLoadDynamics' class='form-control' type='text'{{#MechanicalLoadDynamics}} value='{{MechanicalLoadDynamics}}'{{/MechanicalLoadDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ExcitationSystemDynamics'>ExcitationSystemDynamics: </label><div class='col-sm-8'><input id='ExcitationSystemDynamics' class='form-control' type='text'{{#ExcitationSystemDynamics}} value='{{ExcitationSystemDynamics}}'{{/ExcitationSystemDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='SynchronousMachine'>SynchronousMachine: </label><div class='col-sm-8'><input id='SynchronousMachine' class='form-control' type='text'{{#SynchronousMachine}} value='{{SynchronousMachine}}'{{/SynchronousMachine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='TurbineGovernorDynamics'>TurbineGovernorDynamics: </label><div class='col-sm-8'><input id='TurbineGovernorDynamics' class='form-control' type='text'{{#TurbineGovernorDynamics}} value='{{TurbineGovernorDynamics}}_string'{{/TurbineGovernorDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            relations ()
            {
                return (
                    [
                        ["MechanicalLoadDynamics", "MechanicalLoadDynamics", "0..1", "0..1"],
                        ["ExcitationSystemDynamics", "ExcitationSystemDynamics", "0..1", "1"],
                        ["SynchronousMachine", "SynchronousMachine", "1", "0..1"],
                        ["GenICompensationForGenJ", "GenICompensationForGenJ", "0..*", "1"],
                        ["TurbineGovernorDynamics", "TurbineGovernorDynamics", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * All synchronous machine detailed types use a subset of the same data parameters and input/output variables.
         *
         * The several variations differ in the following ways:
         *
         */
        class SynchronousMachineDetailed extends SynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineDetailed;
                if (null == bucket)
                   cim_data.SynchronousMachineDetailed = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineDetailed[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineDetailed";
                base.parse_element (/<cim:SynchronousMachineDetailed.efdBaseRatio>([\s\S]*?)<\/cim:SynchronousMachineDetailed.efdBaseRatio>/g, obj, "efdBaseRatio", base.to_float, sub, context);
                base.parse_attribute (/<cim:SynchronousMachineDetailed.ifdBaseType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ifdBaseType", sub, context);
                base.parse_element (/<cim:SynchronousMachineDetailed.saturationFactor120QAxis>([\s\S]*?)<\/cim:SynchronousMachineDetailed.saturationFactor120QAxis>/g, obj, "saturationFactor120QAxis", base.to_float, sub, context);
                base.parse_element (/<cim:SynchronousMachineDetailed.saturationFactorQAxis>([\s\S]*?)<\/cim:SynchronousMachineDetailed.saturationFactorQAxis>/g, obj, "saturationFactorQAxis", base.to_float, sub, context);
                var bucket = context.parsed.SynchronousMachineDetailed;
                if (null == bucket)
                   context.parsed.SynchronousMachineDetailed = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SynchronousMachineDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchronousMachineDetailed", "efdBaseRatio", base.from_float, fields);
                base.export_element (obj, "SynchronousMachineDetailed", "ifdBaseType", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineDetailed", "saturationFactor120QAxis", base.from_float, fields);
                base.export_element (obj, "SynchronousMachineDetailed", "saturationFactorQAxis", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineDetailed_collapse" aria-expanded="true" aria-controls="SynchronousMachineDetailed_collapse" style="margin-left: 10px;">SynchronousMachineDetailed</a></legend>
                    <div id="SynchronousMachineDetailed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.prototype.template.call (this) +
                    `
                    {{#efdBaseRatio}}<div><b>efdBaseRatio</b>: {{efdBaseRatio}}</div>{{/efdBaseRatio}}
                    {{#ifdBaseType}}<div><b>ifdBaseType</b>: {{ifdBaseType}}</div>{{/ifdBaseType}}
                    {{#saturationFactor120QAxis}}<div><b>saturationFactor120QAxis</b>: {{saturationFactor120QAxis}}</div>{{/saturationFactor120QAxis}}
                    {{#saturationFactorQAxis}}<div><b>saturationFactorQAxis</b>: {{saturationFactorQAxis}}</div>{{/saturationFactorQAxis}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.IfdBaseKind = []; if (!obj.ifdBaseType) obj.IfdBaseKind.push ({ id: '', selected: true}); for (var property in IfdBaseKind) obj.IfdBaseKind.push ({ id: property, selected: obj.ifdBaseType && obj.ifdBaseType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.IfdBaseKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineDetailed_collapse" aria-expanded="true" aria-controls="SynchronousMachineDetailed_collapse" style="margin-left: 10px;">SynchronousMachineDetailed</a></legend>
                    <div id="SynchronousMachineDetailed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='efdBaseRatio'>efdBaseRatio: </label><div class='col-sm-8'><input id='efdBaseRatio' class='form-control' type='text'{{#efdBaseRatio}} value='{{efdBaseRatio}}'{{/efdBaseRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ifdBaseType'>ifdBaseType: </label><div class='col-sm-8'><select id='ifdBaseType' class='form-control'>{{#IfdBaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/IfdBaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='saturationFactor120QAxis'>saturationFactor120QAxis: </label><div class='col-sm-8'><input id='saturationFactor120QAxis' class='form-control' type='text'{{#saturationFactor120QAxis}} value='{{saturationFactor120QAxis}}'{{/saturationFactor120QAxis}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='saturationFactorQAxis'>saturationFactorQAxis: </label><div class='col-sm-8'><input id='saturationFactorQAxis' class='form-control' type='text'{{#saturationFactorQAxis}} value='{{saturationFactorQAxis}}'{{/saturationFactorQAxis}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The electrical equations for all variations of the synchronous models are based on the SynchronousEquivalentCircuit diagram for the direct and quadrature axes.
         * 
         * <b>Equations for conversion between Equivalent Circuit and Time Constant Reactance forms:</b>
         * <b>Xd</b> = <b>Xad</b> + <b>Xl</b>
         * <b>X�d</b> = <b>Xl</b> + <b>Xad</b> * <b>Xfd</b> / (<b>Xad</b> + <b>Xfd</b>)
         * <b>X�d</b> = <b>Xl</b> + <b>Xad</b> * <b>Xfd </b>* <b>X1d</b> / (<b>Xad</b> * <b>Xfd</b> + <b>Xad</b> * <b>X1d</b> + <b>Xfd</b> * <b>X1d</b>)
         * <b>Xq</b> = <b>Xaq</b> + <b>Xl</b>
         * <b>X�q</b> = <b>Xl</b> + <b>Xaq</b> * <b>X1q</b> / (<b>Xaq</b>+ <b>X1q</b>)
         * <b>X�q</b> = <b>Xl</b> + <b>Xaq</b> *<b> X1q</b>* <b>X2q</b> / (<b>Xaq</b> * <b>X1q</b> + <b>Xaq</b> * <b>X2q</b> + <b>X1q</b> * <b>X2q</b>)
         * <b>T�do</b> = (<b>Xad</b> + <b>Xfd</b>) / (<b>omega</b><b><sub>0</sub></b> * <b>Rfd</b>)
         * <b>T�do</b> = (<b>Xad</b> * <b>Xfd</b> + <b>Xad</b> * <b>X1d</b> + <b>Xfd</b> * <b>X1d</b>) / (<b>omega</b><b><sub>0</sub></b> * <b>R1d</b> * (<b>Xad</b> + <b>Xfd</b>)
         * <b>T�qo</b> = (<b>Xaq</b> + <b>X1q</b>) / (<b>omega</b><b><sub>0</sub></b> * <b>R1q</b>)
         * <b>T�qo</b> = (<b>Xaq</b> * <b>X1q</b> + <b>Xaq</b> * <b>X2q</b> + <b>X1q</b> * <b>X2q</b>)/ (<b>omega</b><b><sub>0</sub></b> * <b>R2q</b> * (<b>Xaq</b> + <b>X1q</b>)
         * <b>
         * </b>Same equations using CIM attributes from SynchronousMachineTimeConstantReactance class on left of = sign and SynchronousMachineEquivalentCircuit class on right (except as noted):
         * xDirectSync = xad + RotatingMachineDynamics.statorLeakageReactance
         * xDirectTrans = RotatingMachineDynamics.statorLeakageReactance + xad * xfd / (xad + xfd)
         * xDirectSubtrans = RotatingMachineDynamics.statorLeakageReactance + xad * xfd * x1d / (xad * xfd + xad * x1d + xfd * x1d)
         * xQuadSync = xaq + RotatingMachineDynamics.statorLeakageReactance
         * xQuadTrans = RotatingMachineDynamics.statorLeakageReactance + xaq * x1q / (xaq+ x1q)
         * xQuadSubtrans = RotatingMachineDynamics.statorLeakageReactance + xaq * x1q* x2q / (xaq * x1q + xaq * x2q + x1q * x2q)
         * tpdo = (xad + xfd) / (2*pi*nominal frequency * rfd)
         * tppdo = (xad * xfd + xad * x1d + xfd * x1d) / (2*pi*nominal frequency * r1d * (xad + xfd)
         * tpqo = (xaq + x1q) / (2*pi*nominal frequency * r1q)
         * tppqo = (xaq * x1q + xaq * x2q + x1q * x2q)/ (2*pi*nominal frequency * r2q * (xaq + x1q).
         *
         * Are only valid for a simplified model where "Canay" reactance is zero.
         *
         */
        class SynchronousMachineEquivalentCircuit extends SynchronousMachineDetailed
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineEquivalentCircuit;
                if (null == bucket)
                   cim_data.SynchronousMachineEquivalentCircuit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineEquivalentCircuit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SynchronousMachineDetailed.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineEquivalentCircuit";
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.r1d>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.r1d>/g, obj, "r1d", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.r1q>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.r1q>/g, obj, "r1q", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.r2q>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.r2q>/g, obj, "r2q", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.rfd>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.rfd>/g, obj, "rfd", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.x1d>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.x1d>/g, obj, "x1d", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.x1q>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.x1q>/g, obj, "x1q", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.x2q>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.x2q>/g, obj, "x2q", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.xad>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.xad>/g, obj, "xad", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.xaq>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.xaq>/g, obj, "xaq", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.xf1d>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.xf1d>/g, obj, "xf1d", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineEquivalentCircuit.xfd>([\s\S]*?)<\/cim:SynchronousMachineEquivalentCircuit.xfd>/g, obj, "xfd", base.to_string, sub, context);
                var bucket = context.parsed.SynchronousMachineEquivalentCircuit;
                if (null == bucket)
                   context.parsed.SynchronousMachineEquivalentCircuit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SynchronousMachineDetailed.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "r1d", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "r1q", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "r2q", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "rfd", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "x1d", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "x1q", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "x2q", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "xad", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "xaq", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "xf1d", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineEquivalentCircuit", "xfd", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineEquivalentCircuit_collapse" aria-expanded="true" aria-controls="SynchronousMachineEquivalentCircuit_collapse" style="margin-left: 10px;">SynchronousMachineEquivalentCircuit</a></legend>
                    <div id="SynchronousMachineEquivalentCircuit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDetailed.prototype.template.call (this) +
                    `
                    {{#r1d}}<div><b>r1d</b>: {{r1d}}</div>{{/r1d}}
                    {{#r1q}}<div><b>r1q</b>: {{r1q}}</div>{{/r1q}}
                    {{#r2q}}<div><b>r2q</b>: {{r2q}}</div>{{/r2q}}
                    {{#rfd}}<div><b>rfd</b>: {{rfd}}</div>{{/rfd}}
                    {{#x1d}}<div><b>x1d</b>: {{x1d}}</div>{{/x1d}}
                    {{#x1q}}<div><b>x1q</b>: {{x1q}}</div>{{/x1q}}
                    {{#x2q}}<div><b>x2q</b>: {{x2q}}</div>{{/x2q}}
                    {{#xad}}<div><b>xad</b>: {{xad}}</div>{{/xad}}
                    {{#xaq}}<div><b>xaq</b>: {{xaq}}</div>{{/xaq}}
                    {{#xf1d}}<div><b>xf1d</b>: {{xf1d}}</div>{{/xf1d}}
                    {{#xfd}}<div><b>xfd</b>: {{xfd}}</div>{{/xfd}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineEquivalentCircuit_collapse" aria-expanded="true" aria-controls="SynchronousMachineEquivalentCircuit_collapse" style="margin-left: 10px;">SynchronousMachineEquivalentCircuit</a></legend>
                    <div id="SynchronousMachineEquivalentCircuit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDetailed.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='r1d'>r1d: </label><div class='col-sm-8'><input id='r1d' class='form-control' type='text'{{#r1d}} value='{{r1d}}'{{/r1d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='r1q'>r1q: </label><div class='col-sm-8'><input id='r1q' class='form-control' type='text'{{#r1q}} value='{{r1q}}'{{/r1q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='r2q'>r2q: </label><div class='col-sm-8'><input id='r2q' class='form-control' type='text'{{#r2q}} value='{{r2q}}'{{/r2q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rfd'>rfd: </label><div class='col-sm-8'><input id='rfd' class='form-control' type='text'{{#rfd}} value='{{rfd}}'{{/rfd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='x1d'>x1d: </label><div class='col-sm-8'><input id='x1d' class='form-control' type='text'{{#x1d}} value='{{x1d}}'{{/x1d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='x1q'>x1q: </label><div class='col-sm-8'><input id='x1q' class='form-control' type='text'{{#x1q}} value='{{x1q}}'{{/x1q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='x2q'>x2q: </label><div class='col-sm-8'><input id='x2q' class='form-control' type='text'{{#x2q}} value='{{x2q}}'{{/x2q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xad'>xad: </label><div class='col-sm-8'><input id='xad' class='form-control' type='text'{{#xad}} value='{{xad}}'{{/xad}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xaq'>xaq: </label><div class='col-sm-8'><input id='xaq' class='form-control' type='text'{{#xaq}} value='{{xaq}}'{{/xaq}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xf1d'>xf1d: </label><div class='col-sm-8'><input id='xf1d' class='form-control' type='text'{{#xf1d}} value='{{xf1d}}'{{/xf1d}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xfd'>xfd: </label><div class='col-sm-8'><input id='xfd' class='form-control' type='text'{{#xfd}} value='{{xfd}}'{{/xfd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * The simplified model represents a synchronous generator as a constant internal voltage behind an impedance (<b>Rs</b> + <b>jXp</b>) as shown in the Simplified diagram.
         *
         * Since internal voltage is held constant, there is no <b>Efd</b> input and any excitation system model will be ignored.  There is also no <b>Ifd</b> output.
         *
         */
        class SynchronousMachineSimplified extends SynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineSimplified;
                if (null == bucket)
                   cim_data.SynchronousMachineSimplified = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineSimplified[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineSimplified";
                var bucket = context.parsed.SynchronousMachineSimplified;
                if (null == bucket)
                   context.parsed.SynchronousMachineSimplified = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SynchronousMachineDynamics.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineSimplified_collapse" aria-expanded="true" aria-controls="SynchronousMachineSimplified_collapse" style="margin-left: 10px;">SynchronousMachineSimplified</a></legend>
                    <div id="SynchronousMachineSimplified_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineSimplified_collapse" aria-expanded="true" aria-controls="SynchronousMachineSimplified_collapse" style="margin-left: 10px;">SynchronousMachineSimplified</a></legend>
                    <div id="SynchronousMachineSimplified_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        /**
         * Synchronous machine detailed modelling types are defined by the combination of the attributes SynchronousMachineTimeConstantReactance.modelType and SynchronousMachineTimeConstantReactance.rotorType.
         * <b>
         * </b><b>Parameter notes:</b>
         * <ol>
         * <li>The �p� in the time-related attribute names is a substitution for a �prime� in the usual parameter notation, e.g. tpdo refers to <b>T'do</b>.</li>
         * </ol>
         * <b>
         * </b>The parameters used for models expressed in time constant reactance form include:
         * <ul>
         * <li>RotatingMachine.ratedS (MVAbase)</li>
         * <li>RotatingMachineDynamics.damping (D)</li>
         * <li>RotatingMachineDynamics.inertia (H)</li>
         * <li>RotatingMachineDynamics.saturationFactor (S1)</li>
         * <li>RotatingMachineDynamics.saturationFactor120 (S12)</li>
         * <li>RotatingMachineDynamics.statorLeakageReactance (Xl)</li>
         * <li>RotatingMachineDynamics.statorResistance (Rs)</li>
         * <li>SynchronousMachineTimeConstantReactance.ks (Ks)</li>
         * <li>SynchronousMachineDetailed.saturationFactorQAxis (S1q)</li>
         * <li>SynchronousMachineDetailed.saturationFactor120QAxis (S12q)</li>
         * <li>SynchronousMachineDetailed.efdBaseRatio</li>
         * <li>SynchronousMachineDetailed.ifdBaseType</li>
         * <li>SynchronousMachineDetailed.ifdBaseValue, if present</li>
         * <li>.xDirectSync (Xd)</li>
         * <li>.xDirectTrans (X'd)</li>
         * <li>.xDirectSubtrans (X''d)</li>
         * <li>.xQuadSync (Xq)</li>
         * <li>.xQuadTrans (X'q)</li>
         * <li>.xQuadSubtrans (X''q)</li>
         * <li>.tpdo (T'do)</li>
         * <li>.tppdo (T''do)</li>
         * <li>.tpqo (T'qo)</li>
         * <li>.tppqo (T''qo)</li>
         * <li>.tc.</li>
         *
         * </ul>
         *
         */
        class SynchronousMachineTimeConstantReactance extends SynchronousMachineDetailed
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineTimeConstantReactance;
                if (null == bucket)
                   cim_data.SynchronousMachineTimeConstantReactance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineTimeConstantReactance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = SynchronousMachineDetailed.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineTimeConstantReactance";
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.ks>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.ks>/g, obj, "ks", base.to_float, sub, context);
                base.parse_attribute (/<cim:SynchronousMachineTimeConstantReactance.modelType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "modelType", sub, context);
                base.parse_attribute (/<cim:SynchronousMachineTimeConstantReactance.rotorType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "rotorType", sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.tc>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.tpdo>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.tpdo>/g, obj, "tpdo", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.tppdo>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.tppdo>/g, obj, "tppdo", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.tppqo>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.tppqo>/g, obj, "tppqo", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.tpqo>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.tpqo>/g, obj, "tpqo", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xDirectSubtrans>/g, obj, "xDirectSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xDirectSync>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xDirectSync>/g, obj, "xDirectSync", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xDirectTrans>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xDirectTrans>/g, obj, "xDirectTrans", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xQuadSubtrans>/g, obj, "xQuadSubtrans", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xQuadSync>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xQuadSync>/g, obj, "xQuadSync", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.xQuadTrans>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.xQuadTrans>/g, obj, "xQuadTrans", base.to_string, sub, context);
                var bucket = context.parsed.SynchronousMachineTimeConstantReactance;
                if (null == bucket)
                   context.parsed.SynchronousMachineTimeConstantReactance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = SynchronousMachineDetailed.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "ks", base.from_float, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "modelType", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "rotorType", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "tc", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "tpdo", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "tppdo", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "tppqo", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "tpqo", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xDirectSubtrans", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xDirectSync", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xDirectTrans", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xQuadSubtrans", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xQuadSync", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineTimeConstantReactance", "xQuadTrans", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineTimeConstantReactance_collapse" aria-expanded="true" aria-controls="SynchronousMachineTimeConstantReactance_collapse" style="margin-left: 10px;">SynchronousMachineTimeConstantReactance</a></legend>
                    <div id="SynchronousMachineTimeConstantReactance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDetailed.prototype.template.call (this) +
                    `
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#modelType}}<div><b>modelType</b>: {{modelType}}</div>{{/modelType}}
                    {{#rotorType}}<div><b>rotorType</b>: {{rotorType}}</div>{{/rotorType}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tpdo}}<div><b>tpdo</b>: {{tpdo}}</div>{{/tpdo}}
                    {{#tppdo}}<div><b>tppdo</b>: {{tppdo}}</div>{{/tppdo}}
                    {{#tppqo}}<div><b>tppqo</b>: {{tppqo}}</div>{{/tppqo}}
                    {{#tpqo}}<div><b>tpqo</b>: {{tpqo}}</div>{{/tpqo}}
                    {{#xDirectSubtrans}}<div><b>xDirectSubtrans</b>: {{xDirectSubtrans}}</div>{{/xDirectSubtrans}}
                    {{#xDirectSync}}<div><b>xDirectSync</b>: {{xDirectSync}}</div>{{/xDirectSync}}
                    {{#xDirectTrans}}<div><b>xDirectTrans</b>: {{xDirectTrans}}</div>{{/xDirectTrans}}
                    {{#xQuadSubtrans}}<div><b>xQuadSubtrans</b>: {{xQuadSubtrans}}</div>{{/xQuadSubtrans}}
                    {{#xQuadSync}}<div><b>xQuadSync</b>: {{xQuadSync}}</div>{{/xQuadSync}}
                    {{#xQuadTrans}}<div><b>xQuadTrans</b>: {{xQuadTrans}}</div>{{/xQuadTrans}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SynchronousMachineModelKind = []; if (!obj.modelType) obj.SynchronousMachineModelKind.push ({ id: '', selected: true}); for (var property in SynchronousMachineModelKind) obj.SynchronousMachineModelKind.push ({ id: property, selected: obj.modelType && obj.modelType.endsWith ('.' + property)});
                obj.RotorKind = []; if (!obj.rotorType) obj.RotorKind.push ({ id: '', selected: true}); for (var property in RotorKind) obj.RotorKind.push ({ id: property, selected: obj.rotorType && obj.rotorType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SynchronousMachineModelKind;
                delete obj.RotorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchronousMachineTimeConstantReactance_collapse" aria-expanded="true" aria-controls="SynchronousMachineTimeConstantReactance_collapse" style="margin-left: 10px;">SynchronousMachineTimeConstantReactance</a></legend>
                    <div id="SynchronousMachineTimeConstantReactance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + SynchronousMachineDetailed.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ks'>ks: </label><div class='col-sm-8'><input id='ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='modelType'>modelType: </label><div class='col-sm-8'><select id='modelType' class='form-control'>{{#SynchronousMachineModelKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SynchronousMachineModelKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='rotorType'>rotorType: </label><div class='col-sm-8'><select id='rotorType' class='form-control'>{{#RotorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RotorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tc'>tc: </label><div class='col-sm-8'><input id='tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tpdo'>tpdo: </label><div class='col-sm-8'><input id='tpdo' class='form-control' type='text'{{#tpdo}} value='{{tpdo}}'{{/tpdo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tppdo'>tppdo: </label><div class='col-sm-8'><input id='tppdo' class='form-control' type='text'{{#tppdo}} value='{{tppdo}}'{{/tppdo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tppqo'>tppqo: </label><div class='col-sm-8'><input id='tppqo' class='form-control' type='text'{{#tppqo}} value='{{tppqo}}'{{/tppqo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tpqo'>tpqo: </label><div class='col-sm-8'><input id='tpqo' class='form-control' type='text'{{#tpqo}} value='{{tpqo}}'{{/tpqo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectSubtrans'>xDirectSubtrans: </label><div class='col-sm-8'><input id='xDirectSubtrans' class='form-control' type='text'{{#xDirectSubtrans}} value='{{xDirectSubtrans}}'{{/xDirectSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectSync'>xDirectSync: </label><div class='col-sm-8'><input id='xDirectSync' class='form-control' type='text'{{#xDirectSync}} value='{{xDirectSync}}'{{/xDirectSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xDirectTrans'>xDirectTrans: </label><div class='col-sm-8'><input id='xDirectTrans' class='form-control' type='text'{{#xDirectTrans}} value='{{xDirectTrans}}'{{/xDirectTrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadSubtrans'>xQuadSubtrans: </label><div class='col-sm-8'><input id='xQuadSubtrans' class='form-control' type='text'{{#xQuadSubtrans}} value='{{xQuadSubtrans}}'{{/xQuadSubtrans}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadSync'>xQuadSync: </label><div class='col-sm-8'><input id='xQuadSync' class='form-control' type='text'{{#xQuadSync}} value='{{xQuadSync}}'{{/xQuadSync}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='xQuadTrans'>xQuadTrans: </label><div class='col-sm-8'><input id='xQuadTrans' class='form-control' type='text'{{#xQuadTrans}} value='{{xQuadTrans}}'{{/xQuadTrans}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }
        }

        return (
            {
                SynchronousMachineDynamics: SynchronousMachineDynamics,
                SynchronousMachineSimplified: SynchronousMachineSimplified,
                SynchronousMachineDetailed: SynchronousMachineDetailed,
                SynchronousMachineTimeConstantReactance: SynchronousMachineTimeConstantReactance,
                SynchronousMachineEquivalentCircuit: SynchronousMachineEquivalentCircuit
            }
        );
    }
);