define
(
    ["model/base", "model/StandardModels"],
    /**
     * An asynchronous machine model represents a (induction) generator or motor with no external connection to the rotor windings, e.g., squirrel-cage induction machine.
     *
     * The interconnection with the electrical network equations may differ among simulation tools.  The program only needs to know the terminal to which this asynchronous machine is connected in order to establish the correct interconnection.  The interconnection with motor�s equipment could also differ due to input and output signals required by standard models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Asynchronous machine whose behaviour is described by reference to a standard model expressed in either time constant reactance form or equivalent circuit form <font color="#0f0f0f">or by definition of a user-defined model.</font>
         * 
         * <b>Parameter Notes:</b>
         * <ol>
         * <li>Asynchronous machine parameters such as <b>Xl, Xs</b> etc. are actually used as inductances (L) in the model, but are commonly referred to as reactances since, at nominal frequency, the per unit values are the same.
         *
         * However, some references use the symbol L instead of X. </li>
         *
         */
        class AsynchronousMachineDynamics extends StandardModels.RotatingMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AsynchronousMachineDynamics;
                if (null == bucket)
                   cim_data.AsynchronousMachineDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AsynchronousMachineDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.RotatingMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "AsynchronousMachineDynamics";
                base.parse_attribute (/<cim:AsynchronousMachineDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context);
                base.parse_attribute (/<cim:AsynchronousMachineDynamics.AsynchronousMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachine", sub, context);
                base.parse_attribute (/<cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context);
                base.parse_attribute (/<cim:AsynchronousMachineDynamics.MechanicalLoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadDynamics", sub, context);
                var bucket = context.parsed.AsynchronousMachineDynamics;
                if (null == bucket)
                   context.parsed.AsynchronousMachineDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.RotatingMachineDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "AsynchronousMachineDynamics", "TurbineGovernorDynamics", "TurbineGovernorDynamics", fields);
                base.export_attribute (obj, "AsynchronousMachineDynamics", "AsynchronousMachine", "AsynchronousMachine", fields);
                base.export_attribute (obj, "AsynchronousMachineDynamics", "WindTurbineType1or2Dynamics", "WindTurbineType1or2Dynamics", fields);
                base.export_attribute (obj, "AsynchronousMachineDynamics", "MechanicalLoadDynamics", "MechanicalLoadDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AsynchronousMachineDynamics_collapse" aria-expanded="true" aria-controls="AsynchronousMachineDynamics_collapse" style="margin-left: 10px;">AsynchronousMachineDynamics</a></legend>
                    <div id="AsynchronousMachineDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.RotatingMachineDynamics.prototype.template.call (this) +
                    `
                    {{#TurbineGovernorDynamics}}<div><b>TurbineGovernorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TurbineGovernorDynamics}}&quot;);}); return false;'>{{TurbineGovernorDynamics}}</a></div>{{/TurbineGovernorDynamics}}
                    {{#AsynchronousMachine}}<div><b>AsynchronousMachine</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachine}}&quot;);}); return false;'>{{AsynchronousMachine}}</a></div>{{/AsynchronousMachine}}
                    {{#WindTurbineType1or2Dynamics}}<div><b>WindTurbineType1or2Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType1or2Dynamics}}&quot;);}); return false;'>{{WindTurbineType1or2Dynamics}}</a></div>{{/WindTurbineType1or2Dynamics}}
                    {{#MechanicalLoadDynamics}}<div><b>MechanicalLoadDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{MechanicalLoadDynamics}}&quot;);}); return false;'>{{MechanicalLoadDynamics}}</a></div>{{/MechanicalLoadDynamics}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AsynchronousMachineDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_AsynchronousMachineDynamics_collapse" style="margin-left: 10px;">AsynchronousMachineDynamics</a></legend>
                    <div id="{{id}}_AsynchronousMachineDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.RotatingMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TurbineGovernorDynamics'>TurbineGovernorDynamics: </label><div class='col-sm-8'><input id='{{id}}_TurbineGovernorDynamics' class='form-control' type='text'{{#TurbineGovernorDynamics}} value='{{TurbineGovernorDynamics}}'{{/TurbineGovernorDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AsynchronousMachine'>AsynchronousMachine: </label><div class='col-sm-8'><input id='{{id}}_AsynchronousMachine' class='form-control' type='text'{{#AsynchronousMachine}} value='{{AsynchronousMachine}}'{{/AsynchronousMachine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType1or2Dynamics'>WindTurbineType1or2Dynamics: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType1or2Dynamics' class='form-control' type='text'{{#WindTurbineType1or2Dynamics}} value='{{WindTurbineType1or2Dynamics}}'{{/WindTurbineType1or2Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MechanicalLoadDynamics'>MechanicalLoadDynamics: </label><div class='col-sm-8'><input id='{{id}}_MechanicalLoadDynamics' class='form-control' type='text'{{#MechanicalLoadDynamics}} value='{{MechanicalLoadDynamics}}'{{/MechanicalLoadDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AsynchronousMachineDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TurbineGovernorDynamics").value; if ("" != temp) obj.TurbineGovernorDynamics = temp;
                temp = document.getElementById (id + "_AsynchronousMachine").value; if ("" != temp) obj.AsynchronousMachine = temp;
                temp = document.getElementById (id + "_WindTurbineType1or2Dynamics").value; if ("" != temp) obj.WindTurbineType1or2Dynamics = temp;
                temp = document.getElementById (id + "_MechanicalLoadDynamics").value; if ("" != temp) obj.MechanicalLoadDynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TurbineGovernorDynamics", "0..1", "0..1", "TurbineGovernorDynamics", "AsynchronousMachineDynamics"],
                            ["AsynchronousMachine", "1", "0..1", "AsynchronousMachine", "AsynchronousMachineDynamics"],
                            ["WindTurbineType1or2Dynamics", "0..1", "1", "WindTurbineType1or2Dynamics", "AsynchronousMachineDynamics"],
                            ["MechanicalLoadDynamics", "0..1", "0..1", "MechanicalLoadDynamics", "AsynchronousMachineDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * The electrical equations of all variations of the asynchronous model are based on the AsynchronousEquivalentCircuit diagram for the direct and quadrature axes, with two equivalent rotor windings in each axis.
         * 
         * <b>Equations for conversion between Equivalent Circuit and Time Constant Reactance forms:</b>
         * <b>Xs</b> = <b>Xm</b> + <b>Xl</b>
         * <b>X'</b> = <b>Xl</b> + <b>Xm</b> * <b>Xlr1</b> / (<b>Xm</b> + <b>Xlr1</b>)
         * <b>X''</b> = <b>Xl</b> + <b>Xm</b> * <b>Xlr1</b>* <b>Xlr2</b> / (<b>Xm</b> * <b>Xlr1</b> + <b>Xm</b> * <b>Xlr2</b> + <b>Xlr1</b> * <b>Xlr2</b>)
         * <b>T'o</b> = (<b>Xm</b> + <b>Xlr1</b>) / (<b>omega</b><b><sub>0</sub></b> * <b>Rr1</b>)
         * <b>T''o</b> = (<b>Xm</b> * <b>Xlr1</b> + <b>Xm</b> * <b>Xlr2</b> + <b>Xlr1</b> * <b>Xlr2</b>) / (<b>omega</b><b><sub>0</sub></b> * <b>Rr2</b> * (<b>Xm </b>+ <b>Xlr1</b>)
         * <b>
         * </b>Same equations using CIM attributes from AsynchronousMachineTimeConstantReactance class on left of = sign and AsynchronousMachineEquivalentCircuit class on right (except as noted):
         * xs = xm + RotatingMachineDynamics.statorLeakageReactance
         * xp = RotatingMachineDynamics.statorLeakageReactance + xm * xlr1 / (xm + xlr1)
         * xpp = RotatingMachineDynamics.statorLeakageReactance + xm * xlr1* xlr2 / (xm * xlr1 + xm * xlr2 + xlr1 * xlr2)
         * tpo = (xm + xlr1) / (2*pi*nominal frequency * rr1)
         *
         * tppo = (xm * xlr1 + xm * xlr2 + xlr1 * xlr2) / (2*pi*nominal frequency * rr2 * (xm + xlr1).
         *
         */
        class AsynchronousMachineEquivalentCircuit extends AsynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AsynchronousMachineEquivalentCircuit;
                if (null == bucket)
                   cim_data.AsynchronousMachineEquivalentCircuit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AsynchronousMachineEquivalentCircuit[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AsynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "AsynchronousMachineEquivalentCircuit";
                base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.rr1>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.rr1>/g, obj, "rr1", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.rr2>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.rr2>/g, obj, "rr2", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xlr1>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xlr1>/g, obj, "xlr1", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xlr2>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xlr2>/g, obj, "xlr2", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xm>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xm>/g, obj, "xm", base.to_string, sub, context);
                var bucket = context.parsed.AsynchronousMachineEquivalentCircuit;
                if (null == bucket)
                   context.parsed.AsynchronousMachineEquivalentCircuit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AsynchronousMachineDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "rr1", "rr1",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "rr2", "rr2",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xlr1", "xlr1",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xlr2", "xlr2",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xm", "xm",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AsynchronousMachineEquivalentCircuit_collapse" aria-expanded="true" aria-controls="AsynchronousMachineEquivalentCircuit_collapse" style="margin-left: 10px;">AsynchronousMachineEquivalentCircuit</a></legend>
                    <div id="AsynchronousMachineEquivalentCircuit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.prototype.template.call (this) +
                    `
                    {{#rr1}}<div><b>rr1</b>: {{rr1}}</div>{{/rr1}}
                    {{#rr2}}<div><b>rr2</b>: {{rr2}}</div>{{/rr2}}
                    {{#xlr1}}<div><b>xlr1</b>: {{xlr1}}</div>{{/xlr1}}
                    {{#xlr2}}<div><b>xlr2</b>: {{xlr2}}</div>{{/xlr2}}
                    {{#xm}}<div><b>xm</b>: {{xm}}</div>{{/xm}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AsynchronousMachineEquivalentCircuit_collapse" aria-expanded="true" aria-controls="{{id}}_AsynchronousMachineEquivalentCircuit_collapse" style="margin-left: 10px;">AsynchronousMachineEquivalentCircuit</a></legend>
                    <div id="{{id}}_AsynchronousMachineEquivalentCircuit_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rr1'>rr1: </label><div class='col-sm-8'><input id='{{id}}_rr1' class='form-control' type='text'{{#rr1}} value='{{rr1}}'{{/rr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rr2'>rr2: </label><div class='col-sm-8'><input id='{{id}}_rr2' class='form-control' type='text'{{#rr2}} value='{{rr2}}'{{/rr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xlr1'>xlr1: </label><div class='col-sm-8'><input id='{{id}}_xlr1' class='form-control' type='text'{{#xlr1}} value='{{xlr1}}'{{/xlr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xlr2'>xlr2: </label><div class='col-sm-8'><input id='{{id}}_xlr2' class='form-control' type='text'{{#xlr2}} value='{{xlr2}}'{{/xlr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xm'>xm: </label><div class='col-sm-8'><input id='{{id}}_xm' class='form-control' type='text'{{#xm}} value='{{xm}}'{{/xm}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AsynchronousMachineEquivalentCircuit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_rr1").value; if ("" != temp) obj.rr1 = temp;
                temp = document.getElementById (id + "_rr2").value; if ("" != temp) obj.rr2 = temp;
                temp = document.getElementById (id + "_xlr1").value; if ("" != temp) obj.xlr1 = temp;
                temp = document.getElementById (id + "_xlr2").value; if ("" != temp) obj.xlr2 = temp;
                temp = document.getElementById (id + "_xm").value; if ("" != temp) obj.xm = temp;

                return (obj);
            }
        }

        /**
         * <b>Parameter Notes:</b>
         * <ol>
         * <li>If <b>X''</b> = <b>X'</b>, a single cage (one equivalent rotor winding per axis) is modelled.</li>
         * <li>The �p� in the attribute names is a substitution for a �prime� in the usual parameter notation, e.g. tpo refers to T'o.</li>
         * </ol>
         * 
         * The parameters used for models expressed in time constant reactance form include:
         * <ul>
         * <li>RotatingMachine.ratedS (MVAbase)</li>
         * <li>RotatingMachineDynamics.damping (D)</li>
         * <li>RotatingMachineDynamics.inertia (H)</li>
         * <li>RotatingMachineDynamics.saturationFactor (S1)</li>
         * <li>RotatingMachineDynamics.saturationFactor120 (S12)</li>
         * <li>RotatingMachineDynamics.statorLeakageReactance (Xl)</li>
         * <li>RotatingMachineDynamics.statorResistance (Rs)</li>
         * <li>.xs (Xs)</li>
         * <li>.xp (X')</li>
         * <li>.xpp (X'')</li>
         * <li>.tpo (T'o)</li>
         * <li>.tppo (T''o).</li>
         *
         * </ul>
         *
         */
        class AsynchronousMachineTimeConstantReactance extends AsynchronousMachineDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AsynchronousMachineTimeConstantReactance;
                if (null == bucket)
                   cim_data.AsynchronousMachineTimeConstantReactance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AsynchronousMachineTimeConstantReactance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = AsynchronousMachineDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "AsynchronousMachineTimeConstantReactance";
                base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.tpo>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.tpo>/g, obj, "tpo", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.tppo>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.tppo>/g, obj, "tppo", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xp>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xp>/g, obj, "xp", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xpp>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xpp>/g, obj, "xpp", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xs>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xs>/g, obj, "xs", base.to_string, sub, context);
                var bucket = context.parsed.AsynchronousMachineTimeConstantReactance;
                if (null == bucket)
                   context.parsed.AsynchronousMachineTimeConstantReactance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = AsynchronousMachineDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "tpo", "tpo",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "tppo", "tppo",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xp", "xp",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xpp", "xpp",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xs", "xs",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AsynchronousMachineTimeConstantReactance_collapse" aria-expanded="true" aria-controls="AsynchronousMachineTimeConstantReactance_collapse" style="margin-left: 10px;">AsynchronousMachineTimeConstantReactance</a></legend>
                    <div id="AsynchronousMachineTimeConstantReactance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.prototype.template.call (this) +
                    `
                    {{#tpo}}<div><b>tpo</b>: {{tpo}}</div>{{/tpo}}
                    {{#tppo}}<div><b>tppo</b>: {{tppo}}</div>{{/tppo}}
                    {{#xp}}<div><b>xp</b>: {{xp}}</div>{{/xp}}
                    {{#xpp}}<div><b>xpp</b>: {{xpp}}</div>{{/xpp}}
                    {{#xs}}<div><b>xs</b>: {{xs}}</div>{{/xs}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AsynchronousMachineTimeConstantReactance_collapse" aria-expanded="true" aria-controls="{{id}}_AsynchronousMachineTimeConstantReactance_collapse" style="margin-left: 10px;">AsynchronousMachineTimeConstantReactance</a></legend>
                    <div id="{{id}}_AsynchronousMachineTimeConstantReactance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + AsynchronousMachineDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpo'>tpo: </label><div class='col-sm-8'><input id='{{id}}_tpo' class='form-control' type='text'{{#tpo}} value='{{tpo}}'{{/tpo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tppo'>tppo: </label><div class='col-sm-8'><input id='{{id}}_tppo' class='form-control' type='text'{{#tppo}} value='{{tppo}}'{{/tppo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xp'>xp: </label><div class='col-sm-8'><input id='{{id}}_xp' class='form-control' type='text'{{#xp}} value='{{xp}}'{{/xp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xpp'>xpp: </label><div class='col-sm-8'><input id='{{id}}_xpp' class='form-control' type='text'{{#xpp}} value='{{xpp}}'{{/xpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xs'>xs: </label><div class='col-sm-8'><input id='{{id}}_xs' class='form-control' type='text'{{#xs}} value='{{xs}}'{{/xs}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AsynchronousMachineTimeConstantReactance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tpo").value; if ("" != temp) obj.tpo = temp;
                temp = document.getElementById (id + "_tppo").value; if ("" != temp) obj.tppo = temp;
                temp = document.getElementById (id + "_xp").value; if ("" != temp) obj.xp = temp;
                temp = document.getElementById (id + "_xpp").value; if ("" != temp) obj.xpp = temp;
                temp = document.getElementById (id + "_xs").value; if ("" != temp) obj.xs = temp;

                return (obj);
            }
        }

        return (
            {
                AsynchronousMachineDynamics: AsynchronousMachineDynamics,
                AsynchronousMachineEquivalentCircuit: AsynchronousMachineEquivalentCircuit,
                AsynchronousMachineTimeConstantReactance: AsynchronousMachineTimeConstantReactance
            }
        );
    }
);