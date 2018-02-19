define
(
    ["model/base", "model/Core", "model/LoadModel"],
    /**
     * An extension to the Core and Topology package that models information on the electrical characteristics of Transmission and Distribution networks.
     *
     * This package is used by network applications such as State Estimation, Load Flow and Optimal Power Flow.
     *
     */
    function (base, Core, LoadModel)
    {

        /**
         * The mode of operation for a Petersen coil.
         *
         */
        var PetersenCoilModeKind =
        {
            fixed: "fixed",
            manual: "manual",
            automaticPositioning: "automaticPositioning"
        };
        Object.freeze (PetersenCoilModeKind);

        /**
         * Control modes for a transformer.
         *
         */
        var TransformerControlMode =
        {
            volt: "volt",
            reactive: "reactive"
        };
        Object.freeze (TransformerControlMode);

        /**
         * Kind of Asynchronous Machine.
         *
         */
        var AsynchronousMachineKind =
        {
            generator: "generator",
            motor: "motor"
        };
        Object.freeze (AsynchronousMachineKind);

        /**
         * Type of rotor, used by short circuit applications.
         *
         */
        var ShortCircuitRotorKind =
        {
            salientPole1: "salientPole1",
            salientPole2: "salientPole2",
            turboSeries1: "turboSeries1",
            turboSeries2: "turboSeries2"
        };
        Object.freeze (ShortCircuitRotorKind);

        /**
         * Synchronous machine type.
         *
         */
        var SynchronousMachineKind =
        {
            generator: "generator",
            condenser: "condenser",
            generatorOrCondenser: "generatorOrCondenser",
            motor: "motor",
            generatorOrMotor: "generatorOrMotor",
            motorOrCondenser: "motorOrCondenser",
            generatorOrCondenserOrMotor: "generatorOrCondenserOrMotor"
        };
        Object.freeze (SynchronousMachineKind);

        /**
         * The configuration of phase connections for a single terminal device such as a load or capactitor.
         *
         */
        var PhaseShuntConnectionKind =
        {
            D: "D",
            Y: "Y",
            Yn: "Yn",
            I: "I"
        };
        Object.freeze (PhaseShuntConnectionKind);

        /**
         * Static VAr Compensator control mode.
         *
         */
        var SVCControlMode =
        {
            reactivePower: "reactivePower",
            voltage: "voltage"
        };
        Object.freeze (SVCControlMode);

        /**
         * Enumeration of single phase identifiers.
         *
         * Allows designation of single phases for both transmission and distribution equipment, circuits and loads.
         *
         */
        var SinglePhaseKind =
        {
            A: "A",
            B: "B",
            C: "C",
            N: "N",
            s1: "s1",
            s2: "s2"
        };
        Object.freeze (SinglePhaseKind);

        /**
         * Winding connection type.
         *
         */
        var WindingConnection =
        {
            D: "D",
            Y: "Y",
            Z: "Z",
            Yn: "Yn",
            Zn: "Zn",
            A: "A",
            I: "I"
        };
        Object.freeze (WindingConnection);

        /**
         * Method of cooling a machine.
         *
         */
        var CoolantType =
        {
            air: "air",
            hydrogenGas: "hydrogenGas",
            water: "water"
        };
        Object.freeze (CoolantType);

        /**
         * Synchronous machine operating mode.
         *
         */
        var SynchronousMachineOperatingMode =
        {
            generator: "generator",
            condenser: "condenser",
            motor: "motor"
        };
        Object.freeze (SynchronousMachineOperatingMode);

        /**
         * The kind of regulation model.
         *
         * For example regulating voltage, reactive power, active power, etc.
         *
         */
        var RegulatingControlModeKind =
        {
            voltage: "voltage",
            activePower: "activePower",
            reactivePower: "reactivePower",
            currentFlow: "currentFlow",
            admittance: "admittance",
            timeScheduled: "timeScheduled",
            temperature: "temperature",
            powerFactor: "powerFactor"
        };
        Object.freeze (RegulatingControlModeKind);

        /**
         * Transformer star impedance (Pi-model) that accurately reflects impedance for transformers with 2 or 3 windings.
         *
         * For transformers with 4 or more windings, you must use TransformerMeshImpedance class.
         *
         */
        class TransformerStarImpedance extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerStarImpedance;
                if (null == bucket)
                   cim_data.TransformerStarImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerStarImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerStarImpedance";
                base.parse_element (/<cim:TransformerStarImpedance.r>([\s\S]*?)<\/cim:TransformerStarImpedance.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerStarImpedance.r0>([\s\S]*?)<\/cim:TransformerStarImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerStarImpedance.x>([\s\S]*?)<\/cim:TransformerStarImpedance.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerStarImpedance.x0>([\s\S]*?)<\/cim:TransformerStarImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransformerStarImpedance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEndInfo", sub, context);
                base.parse_attributes (/<cim:TransformerStarImpedance.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
                var bucket = context.parsed.TransformerStarImpedance;
                if (null == bucket)
                   context.parsed.TransformerStarImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerStarImpedance", "r", "r",  base.from_string, fields);
                base.export_element (obj, "TransformerStarImpedance", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "TransformerStarImpedance", "x", "x",  base.from_string, fields);
                base.export_element (obj, "TransformerStarImpedance", "x0", "x0",  base.from_string, fields);
                base.export_attribute (obj, "TransformerStarImpedance", "TransformerEndInfo", "TransformerEndInfo", fields);
                base.export_attributes (obj, "TransformerStarImpedance", "TransformerEnd", "TransformerEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerStarImpedance_collapse" aria-expanded="true" aria-controls="TransformerStarImpedance_collapse" style="margin-left: 10px;">TransformerStarImpedance</a></legend>
                    <div id="TransformerStarImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#TransformerEndInfo}}<div><b>TransformerEndInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerEndInfo}}&quot;);}); return false;'>{{TransformerEndInfo}}</a></div>{{/TransformerEndInfo}}
                    {{#TransformerEnd}}<div><b>TransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerEnd}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransformerEnd) obj.TransformerEnd_string = obj.TransformerEnd.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerEnd_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerStarImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerStarImpedance_collapse" style="margin-left: 10px;">TransformerStarImpedance</a></legend>
                    <div id="{{id}}_TransformerStarImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerEndInfo'>TransformerEndInfo: </label><div class='col-sm-8'><input id='{{id}}_TransformerEndInfo' class='form-control' type='text'{{#TransformerEndInfo}} value='{{TransformerEndInfo}}'{{/TransformerEndInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerStarImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_TransformerEndInfo").value; if ("" != temp) obj.TransformerEndInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerEndInfo", "0..1", "0..1", "TransformerEndInfo", "TransformerStarImpedance"],
                            ["TransformerEnd", "0..*", "0..1", "TransformerEnd", "StarImpedance"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents the zero sequence line mutual coupling.
         *
         */
        class MutualCoupling extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.MutualCoupling;
                if (null == bucket)
                   cim_data.MutualCoupling = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MutualCoupling[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "MutualCoupling";
                base.parse_element (/<cim:MutualCoupling.b0ch>([\s\S]*?)<\/cim:MutualCoupling.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.distance11>([\s\S]*?)<\/cim:MutualCoupling.distance11>/g, obj, "distance11", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.distance12>([\s\S]*?)<\/cim:MutualCoupling.distance12>/g, obj, "distance12", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.distance21>([\s\S]*?)<\/cim:MutualCoupling.distance21>/g, obj, "distance21", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.distance22>([\s\S]*?)<\/cim:MutualCoupling.distance22>/g, obj, "distance22", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.g0ch>([\s\S]*?)<\/cim:MutualCoupling.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.r0>([\s\S]*?)<\/cim:MutualCoupling.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:MutualCoupling.x0>([\s\S]*?)<\/cim:MutualCoupling.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_attribute (/<cim:MutualCoupling.Second_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Second_Terminal", sub, context);
                base.parse_attribute (/<cim:MutualCoupling.First_Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "First_Terminal", sub, context);
                var bucket = context.parsed.MutualCoupling;
                if (null == bucket)
                   context.parsed.MutualCoupling = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "MutualCoupling", "b0ch", "b0ch",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "distance11", "distance11",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "distance12", "distance12",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "distance21", "distance21",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "distance22", "distance22",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "g0ch", "g0ch",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "MutualCoupling", "x0", "x0",  base.from_string, fields);
                base.export_attribute (obj, "MutualCoupling", "Second_Terminal", "Second_Terminal", fields);
                base.export_attribute (obj, "MutualCoupling", "First_Terminal", "First_Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#MutualCoupling_collapse" aria-expanded="true" aria-controls="MutualCoupling_collapse" style="margin-left: 10px;">MutualCoupling</a></legend>
                    <div id="MutualCoupling_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#b0ch}}<div><b>b0ch</b>: {{b0ch}}</div>{{/b0ch}}
                    {{#distance11}}<div><b>distance11</b>: {{distance11}}</div>{{/distance11}}
                    {{#distance12}}<div><b>distance12</b>: {{distance12}}</div>{{/distance12}}
                    {{#distance21}}<div><b>distance21</b>: {{distance21}}</div>{{/distance21}}
                    {{#distance22}}<div><b>distance22</b>: {{distance22}}</div>{{/distance22}}
                    {{#g0ch}}<div><b>g0ch</b>: {{g0ch}}</div>{{/g0ch}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#Second_Terminal}}<div><b>Second_Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Second_Terminal}}&quot;);}); return false;'>{{Second_Terminal}}</a></div>{{/Second_Terminal}}
                    {{#First_Terminal}}<div><b>First_Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{First_Terminal}}&quot;);}); return false;'>{{First_Terminal}}</a></div>{{/First_Terminal}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_MutualCoupling_collapse" aria-expanded="true" aria-controls="{{id}}_MutualCoupling_collapse" style="margin-left: 10px;">MutualCoupling</a></legend>
                    <div id="{{id}}_MutualCoupling_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0ch'>b0ch: </label><div class='col-sm-8'><input id='{{id}}_b0ch' class='form-control' type='text'{{#b0ch}} value='{{b0ch}}'{{/b0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distance11'>distance11: </label><div class='col-sm-8'><input id='{{id}}_distance11' class='form-control' type='text'{{#distance11}} value='{{distance11}}'{{/distance11}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distance12'>distance12: </label><div class='col-sm-8'><input id='{{id}}_distance12' class='form-control' type='text'{{#distance12}} value='{{distance12}}'{{/distance12}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distance21'>distance21: </label><div class='col-sm-8'><input id='{{id}}_distance21' class='form-control' type='text'{{#distance21}} value='{{distance21}}'{{/distance21}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_distance22'>distance22: </label><div class='col-sm-8'><input id='{{id}}_distance22' class='form-control' type='text'{{#distance22}} value='{{distance22}}'{{/distance22}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0ch'>g0ch: </label><div class='col-sm-8'><input id='{{id}}_g0ch' class='form-control' type='text'{{#g0ch}} value='{{g0ch}}'{{/g0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Second_Terminal'>Second_Terminal: </label><div class='col-sm-8'><input id='{{id}}_Second_Terminal' class='form-control' type='text'{{#Second_Terminal}} value='{{Second_Terminal}}'{{/Second_Terminal}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_First_Terminal'>First_Terminal: </label><div class='col-sm-8'><input id='{{id}}_First_Terminal' class='form-control' type='text'{{#First_Terminal}} value='{{First_Terminal}}'{{/First_Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MutualCoupling" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b0ch").value; if ("" != temp) obj.b0ch = temp;
                temp = document.getElementById (id + "_distance11").value; if ("" != temp) obj.distance11 = temp;
                temp = document.getElementById (id + "_distance12").value; if ("" != temp) obj.distance12 = temp;
                temp = document.getElementById (id + "_distance21").value; if ("" != temp) obj.distance21 = temp;
                temp = document.getElementById (id + "_distance22").value; if ("" != temp) obj.distance22 = temp;
                temp = document.getElementById (id + "_g0ch").value; if ("" != temp) obj.g0ch = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_Second_Terminal").value; if ("" != temp) obj.Second_Terminal = temp;
                temp = document.getElementById (id + "_First_Terminal").value; if ("" != temp) obj.First_Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Second_Terminal", "1", "0..*", "Terminal", "HasSecondMutualCoupling"],
                            ["First_Terminal", "1", "0..*", "Terminal", "HasFirstMutualCoupling"]
                        ]
                    )
                );
            }
        }

        /**
         * Generic user of energy - a  point of consumption on the power system model.
         *
         */
        class EnergyConsumer extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergyConsumer;
                if (null == bucket)
                   cim_data.EnergyConsumer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyConsumer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyConsumer";
                base.parse_element (/<cim:EnergyConsumer.customerCount>([\s\S]*?)<\/cim:EnergyConsumer.customerCount>/g, obj, "customerCount", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumer.grounded>([\s\S]*?)<\/cim:EnergyConsumer.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
                base.parse_element (/<cim:EnergyConsumer.pfixed>([\s\S]*?)<\/cim:EnergyConsumer.pfixed>/g, obj, "pfixed", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumer.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.pfixedPct>/g, obj, "pfixedPct", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyConsumer.phaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phaseConnection", sub, context);
                base.parse_element (/<cim:EnergyConsumer.qfixed>([\s\S]*?)<\/cim:EnergyConsumer.qfixed>/g, obj, "qfixed", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumer.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumer.qfixedPct>/g, obj, "qfixedPct", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumer.p>([\s\S]*?)<\/cim:EnergyConsumer.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumer.q>([\s\S]*?)<\/cim:EnergyConsumer.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyConsumer.PowerCutZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerCutZone", sub, context);
                base.parse_attributes (/<cim:EnergyConsumer.EnergyConsumerPhase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumerPhase", sub, context);
                base.parse_attribute (/<cim:EnergyConsumer.LoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadDynamics", sub, context);
                base.parse_attribute (/<cim:EnergyConsumer.LoadResponse\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadResponse", sub, context);
                var bucket = context.parsed.EnergyConsumer;
                if (null == bucket)
                   context.parsed.EnergyConsumer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyConsumer", "customerCount", "customerCount",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumer", "grounded", "grounded",  base.from_boolean, fields);
                base.export_element (obj, "EnergyConsumer", "pfixed", "pfixed",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumer", "pfixedPct", "pfixedPct",  base.from_string, fields);
                base.export_attribute (obj, "EnergyConsumer", "phaseConnection", "phaseConnection", fields);
                base.export_element (obj, "EnergyConsumer", "qfixed", "qfixed",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumer", "qfixedPct", "qfixedPct",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumer", "p", "p",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumer", "q", "q",  base.from_string, fields);
                base.export_attribute (obj, "EnergyConsumer", "PowerCutZone", "PowerCutZone", fields);
                base.export_attributes (obj, "EnergyConsumer", "EnergyConsumerPhase", "EnergyConsumerPhase", fields);
                base.export_attribute (obj, "EnergyConsumer", "LoadDynamics", "LoadDynamics", fields);
                base.export_attribute (obj, "EnergyConsumer", "LoadResponse", "LoadResponse", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyConsumer_collapse" aria-expanded="true" aria-controls="EnergyConsumer_collapse" style="margin-left: 10px;">EnergyConsumer</a></legend>
                    <div id="EnergyConsumer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#customerCount}}<div><b>customerCount</b>: {{customerCount}}</div>{{/customerCount}}
                    {{#grounded}}<div><b>grounded</b>: {{grounded}}</div>{{/grounded}}
                    {{#pfixed}}<div><b>pfixed</b>: {{pfixed}}</div>{{/pfixed}}
                    {{#pfixedPct}}<div><b>pfixedPct</b>: {{pfixedPct}}</div>{{/pfixedPct}}
                    {{#phaseConnection}}<div><b>phaseConnection</b>: {{phaseConnection}}</div>{{/phaseConnection}}
                    {{#qfixed}}<div><b>qfixed</b>: {{qfixed}}</div>{{/qfixed}}
                    {{#qfixedPct}}<div><b>qfixedPct</b>: {{qfixedPct}}</div>{{/qfixedPct}}
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
                    {{#PowerCutZone}}<div><b>PowerCutZone</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerCutZone}}&quot;);}); return false;'>{{PowerCutZone}}</a></div>{{/PowerCutZone}}
                    {{#EnergyConsumerPhase}}<div><b>EnergyConsumerPhase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/EnergyConsumerPhase}}
                    {{#LoadDynamics}}<div><b>LoadDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadDynamics}}&quot;);}); return false;'>{{LoadDynamics}}</a></div>{{/LoadDynamics}}
                    {{#LoadResponse}}<div><b>LoadResponse</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LoadResponse}}&quot;);}); return false;'>{{LoadResponse}}</a></div>{{/LoadResponse}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PhaseShuntConnectionKind = []; if (!obj.phaseConnection) obj.PhaseShuntConnectionKind.push ({ id: '', selected: true}); for (var property in PhaseShuntConnectionKind) obj.PhaseShuntConnectionKind.push ({ id: property, selected: obj.phaseConnection && obj.phaseConnection.endsWith ('.' + property)});
                if (obj.EnergyConsumerPhase) obj.EnergyConsumerPhase_string = obj.EnergyConsumerPhase.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseShuntConnectionKind;
                delete obj.EnergyConsumerPhase_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyConsumer_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyConsumer_collapse" style="margin-left: 10px;">EnergyConsumer</a></legend>
                    <div id="{{id}}_EnergyConsumer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_customerCount'>customerCount: </label><div class='col-sm-8'><input id='{{id}}_customerCount' class='form-control' type='text'{{#customerCount}} value='{{customerCount}}'{{/customerCount}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_grounded'>grounded: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_grounded' class='form-check-input' type='checkbox'{{#grounded}} checked{{/grounded}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfixed'>pfixed: </label><div class='col-sm-8'><input id='{{id}}_pfixed' class='form-control' type='text'{{#pfixed}} value='{{pfixed}}'{{/pfixed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfixedPct'>pfixedPct: </label><div class='col-sm-8'><input id='{{id}}_pfixedPct' class='form-control' type='text'{{#pfixedPct}} value='{{pfixedPct}}'{{/pfixedPct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseConnection'>phaseConnection: </label><div class='col-sm-8'><select id='{{id}}_phaseConnection' class='form-control custom-select'>{{#PhaseShuntConnectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PhaseShuntConnectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qfixed'>qfixed: </label><div class='col-sm-8'><input id='{{id}}_qfixed' class='form-control' type='text'{{#qfixed}} value='{{qfixed}}'{{/qfixed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qfixedPct'>qfixedPct: </label><div class='col-sm-8'><input id='{{id}}_qfixedPct' class='form-control' type='text'{{#qfixedPct}} value='{{qfixedPct}}'{{/qfixedPct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerCutZone'>PowerCutZone: </label><div class='col-sm-8'><input id='{{id}}_PowerCutZone' class='form-control' type='text'{{#PowerCutZone}} value='{{PowerCutZone}}'{{/PowerCutZone}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadDynamics'>LoadDynamics: </label><div class='col-sm-8'><input id='{{id}}_LoadDynamics' class='form-control' type='text'{{#LoadDynamics}} value='{{LoadDynamics}}'{{/LoadDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LoadResponse'>LoadResponse: </label><div class='col-sm-8'><input id='{{id}}_LoadResponse' class='form-control' type='text'{{#LoadResponse}} value='{{LoadResponse}}'{{/LoadResponse}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyConsumer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_customerCount").value; if ("" != temp) obj.customerCount = temp;
                temp = document.getElementById (id + "_grounded").checked; if (temp) obj.grounded = true;
                temp = document.getElementById (id + "_pfixed").value; if ("" != temp) obj.pfixed = temp;
                temp = document.getElementById (id + "_pfixedPct").value; if ("" != temp) obj.pfixedPct = temp;
                temp = document.getElementById (id + "_phaseConnection").value; if ("" != temp) { temp = PhaseShuntConnectionKind[temp]; if ("undefined" != typeof (temp)) obj.phaseConnection = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind." + temp; }
                temp = document.getElementById (id + "_qfixed").value; if ("" != temp) obj.qfixed = temp;
                temp = document.getElementById (id + "_qfixedPct").value; if ("" != temp) obj.qfixedPct = temp;
                temp = document.getElementById (id + "_p").value; if ("" != temp) obj.p = temp;
                temp = document.getElementById (id + "_q").value; if ("" != temp) obj.q = temp;
                temp = document.getElementById (id + "_PowerCutZone").value; if ("" != temp) obj.PowerCutZone = temp;
                temp = document.getElementById (id + "_LoadDynamics").value; if ("" != temp) obj.LoadDynamics = temp;
                temp = document.getElementById (id + "_LoadResponse").value; if ("" != temp) obj.LoadResponse = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerCutZone", "0..1", "1..*", "PowerCutZone", "EnergyConsumers"],
                            ["EnergyConsumerPhase", "0..*", "1", "EnergyConsumerPhase", "EnergyConsumer"],
                            ["LoadDynamics", "0..1", "0..*", "LoadDynamics", "EnergyConsumer"],
                            ["LoadResponse", "0..1", "0..*", "LoadResponseCharacteristic", "EnergyConsumer"]
                        ]
                    )
                );
            }
        }

        /**
         * A Series Compensator is a series capacitor or reactor or an AC transmission line without charging susceptance.
         *
         * It is a two terminal device.
         *
         */
        class SeriesCompensator extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SeriesCompensator;
                if (null == bucket)
                   cim_data.SeriesCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SeriesCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "SeriesCompensator";
                base.parse_element (/<cim:SeriesCompensator.r>([\s\S]*?)<\/cim:SeriesCompensator.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:SeriesCompensator.r0>([\s\S]*?)<\/cim:SeriesCompensator.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:SeriesCompensator.x>([\s\S]*?)<\/cim:SeriesCompensator.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:SeriesCompensator.x0>([\s\S]*?)<\/cim:SeriesCompensator.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_element (/<cim:SeriesCompensator.varistorPresent>([\s\S]*?)<\/cim:SeriesCompensator.varistorPresent>/g, obj, "varistorPresent", base.to_boolean, sub, context);
                base.parse_element (/<cim:SeriesCompensator.varistorRatedCurrent>([\s\S]*?)<\/cim:SeriesCompensator.varistorRatedCurrent>/g, obj, "varistorRatedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:SeriesCompensator.varistorVoltageThreshold>([\s\S]*?)<\/cim:SeriesCompensator.varistorVoltageThreshold>/g, obj, "varistorVoltageThreshold", base.to_string, sub, context);
                var bucket = context.parsed.SeriesCompensator;
                if (null == bucket)
                   context.parsed.SeriesCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "SeriesCompensator", "r", "r",  base.from_string, fields);
                base.export_element (obj, "SeriesCompensator", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "SeriesCompensator", "x", "x",  base.from_string, fields);
                base.export_element (obj, "SeriesCompensator", "x0", "x0",  base.from_string, fields);
                base.export_element (obj, "SeriesCompensator", "varistorPresent", "varistorPresent",  base.from_boolean, fields);
                base.export_element (obj, "SeriesCompensator", "varistorRatedCurrent", "varistorRatedCurrent",  base.from_string, fields);
                base.export_element (obj, "SeriesCompensator", "varistorVoltageThreshold", "varistorVoltageThreshold",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SeriesCompensator_collapse" aria-expanded="true" aria-controls="SeriesCompensator_collapse" style="margin-left: 10px;">SeriesCompensator</a></legend>
                    <div id="SeriesCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#varistorPresent}}<div><b>varistorPresent</b>: {{varistorPresent}}</div>{{/varistorPresent}}
                    {{#varistorRatedCurrent}}<div><b>varistorRatedCurrent</b>: {{varistorRatedCurrent}}</div>{{/varistorRatedCurrent}}
                    {{#varistorVoltageThreshold}}<div><b>varistorVoltageThreshold</b>: {{varistorVoltageThreshold}}</div>{{/varistorVoltageThreshold}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SeriesCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_SeriesCompensator_collapse" style="margin-left: 10px;">SeriesCompensator</a></legend>
                    <div id="{{id}}_SeriesCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_varistorPresent'>varistorPresent: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_varistorPresent' class='form-check-input' type='checkbox'{{#varistorPresent}} checked{{/varistorPresent}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_varistorRatedCurrent'>varistorRatedCurrent: </label><div class='col-sm-8'><input id='{{id}}_varistorRatedCurrent' class='form-control' type='text'{{#varistorRatedCurrent}} value='{{varistorRatedCurrent}}'{{/varistorRatedCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_varistorVoltageThreshold'>varistorVoltageThreshold: </label><div class='col-sm-8'><input id='{{id}}_varistorVoltageThreshold' class='form-control' type='text'{{#varistorVoltageThreshold}} value='{{varistorVoltageThreshold}}'{{/varistorVoltageThreshold}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SeriesCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_varistorPresent").checked; if (temp) obj.varistorPresent = true;
                temp = document.getElementById (id + "_varistorRatedCurrent").value; if ("" != temp) obj.varistorRatedCurrent = temp;
                temp = document.getElementById (id + "_varistorVoltageThreshold").value; if ("" != temp) obj.varistorVoltageThreshold = temp;

                return (obj);
            }
        }

        /**
         * A generic device designed to close, or open, or both, one or more electric circuits.
         *
         * All switches are two terminal devices including grounding switches.
         *
         */
        class Switch extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Switch;
                if (null == bucket)
                   cim_data.Switch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Switch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Switch";
                base.parse_element (/<cim:Switch.normalOpen>([\s\S]*?)<\/cim:Switch.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
                base.parse_element (/<cim:Switch.ratedCurrent>([\s\S]*?)<\/cim:Switch.ratedCurrent>/g, obj, "ratedCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:Switch.retained>([\s\S]*?)<\/cim:Switch.retained>/g, obj, "retained", base.to_boolean, sub, context);
                base.parse_element (/<cim:Switch.switchOnCount>([\s\S]*?)<\/cim:Switch.switchOnCount>/g, obj, "switchOnCount", base.to_string, sub, context);
                base.parse_element (/<cim:Switch.switchOnDate>([\s\S]*?)<\/cim:Switch.switchOnDate>/g, obj, "switchOnDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:Switch.open>([\s\S]*?)<\/cim:Switch.open>/g, obj, "open", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:Switch.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);
                base.parse_attribute (/<cim:Switch.CompositeSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CompositeSwitch", sub, context);
                base.parse_attributes (/<cim:Switch.ConnectDisconnectFunctions\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConnectDisconnectFunctions", sub, context);
                base.parse_attribute (/<cim:Switch.SwitchAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchAction", sub, context);
                base.parse_attributes (/<cim:Switch.SwitchSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchSchedules", sub, context);
                base.parse_attributes (/<cim:Switch.SwitchPhase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SwitchPhase", sub, context);
                var bucket = context.parsed.Switch;
                if (null == bucket)
                   context.parsed.Switch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "Switch", "normalOpen", "normalOpen",  base.from_boolean, fields);
                base.export_element (obj, "Switch", "ratedCurrent", "ratedCurrent",  base.from_string, fields);
                base.export_element (obj, "Switch", "retained", "retained",  base.from_boolean, fields);
                base.export_element (obj, "Switch", "switchOnCount", "switchOnCount",  base.from_string, fields);
                base.export_element (obj, "Switch", "switchOnDate", "switchOnDate",  base.from_datetime, fields);
                base.export_element (obj, "Switch", "open", "open",  base.from_boolean, fields);
                base.export_attribute (obj, "Switch", "Outage", "Outage", fields);
                base.export_attribute (obj, "Switch", "CompositeSwitch", "CompositeSwitch", fields);
                base.export_attributes (obj, "Switch", "ConnectDisconnectFunctions", "ConnectDisconnectFunctions", fields);
                base.export_attribute (obj, "Switch", "SwitchAction", "SwitchAction", fields);
                base.export_attributes (obj, "Switch", "SwitchSchedules", "SwitchSchedules", fields);
                base.export_attributes (obj, "Switch", "SwitchPhase", "SwitchPhase", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Switch_collapse" aria-expanded="true" aria-controls="Switch_collapse" style="margin-left: 10px;">Switch</a></legend>
                    <div id="Switch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#normalOpen}}<div><b>normalOpen</b>: {{normalOpen}}</div>{{/normalOpen}}
                    {{#ratedCurrent}}<div><b>ratedCurrent</b>: {{ratedCurrent}}</div>{{/ratedCurrent}}
                    {{#retained}}<div><b>retained</b>: {{retained}}</div>{{/retained}}
                    {{#switchOnCount}}<div><b>switchOnCount</b>: {{switchOnCount}}</div>{{/switchOnCount}}
                    {{#switchOnDate}}<div><b>switchOnDate</b>: {{switchOnDate}}</div>{{/switchOnDate}}
                    {{#open}}<div><b>open</b>: {{open}}</div>{{/open}}
                    {{#Outage}}<div><b>Outage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Outage}}&quot;);}); return false;'>{{Outage}}</a></div>{{/Outage}}
                    {{#CompositeSwitch}}<div><b>CompositeSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CompositeSwitch}}&quot;);}); return false;'>{{CompositeSwitch}}</a></div>{{/CompositeSwitch}}
                    {{#ConnectDisconnectFunctions}}<div><b>ConnectDisconnectFunctions</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConnectDisconnectFunctions}}
                    {{#SwitchAction}}<div><b>SwitchAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SwitchAction}}&quot;);}); return false;'>{{SwitchAction}}</a></div>{{/SwitchAction}}
                    {{#SwitchSchedules}}<div><b>SwitchSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchSchedules}}
                    {{#SwitchPhase}}<div><b>SwitchPhase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SwitchPhase}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ConnectDisconnectFunctions) obj.ConnectDisconnectFunctions_string = obj.ConnectDisconnectFunctions.join ();
                if (obj.SwitchSchedules) obj.SwitchSchedules_string = obj.SwitchSchedules.join ();
                if (obj.SwitchPhase) obj.SwitchPhase_string = obj.SwitchPhase.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ConnectDisconnectFunctions_string;
                delete obj.SwitchSchedules_string;
                delete obj.SwitchPhase_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Switch_collapse" aria-expanded="true" aria-controls="{{id}}_Switch_collapse" style="margin-left: 10px;">Switch</a></legend>
                    <div id="{{id}}_Switch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalOpen'>normalOpen: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalOpen' class='form-check-input' type='checkbox'{{#normalOpen}} checked{{/normalOpen}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedCurrent'>ratedCurrent: </label><div class='col-sm-8'><input id='{{id}}_ratedCurrent' class='form-control' type='text'{{#ratedCurrent}} value='{{ratedCurrent}}'{{/ratedCurrent}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_retained'>retained: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_retained' class='form-check-input' type='checkbox'{{#retained}} checked{{/retained}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOnCount'>switchOnCount: </label><div class='col-sm-8'><input id='{{id}}_switchOnCount' class='form-control' type='text'{{#switchOnCount}} value='{{switchOnCount}}'{{/switchOnCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOnDate'>switchOnDate: </label><div class='col-sm-8'><input id='{{id}}_switchOnDate' class='form-control' type='text'{{#switchOnDate}} value='{{switchOnDate}}'{{/switchOnDate}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_open'>open: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_open' class='form-check-input' type='checkbox'{{#open}} checked{{/open}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Outage'>Outage: </label><div class='col-sm-8'><input id='{{id}}_Outage' class='form-control' type='text'{{#Outage}} value='{{Outage}}'{{/Outage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CompositeSwitch'>CompositeSwitch: </label><div class='col-sm-8'><input id='{{id}}_CompositeSwitch' class='form-control' type='text'{{#CompositeSwitch}} value='{{CompositeSwitch}}'{{/CompositeSwitch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ConnectDisconnectFunctions'>ConnectDisconnectFunctions: </label><div class='col-sm-8'><input id='{{id}}_ConnectDisconnectFunctions' class='form-control' type='text'{{#ConnectDisconnectFunctions}} value='{{ConnectDisconnectFunctions_string}}'{{/ConnectDisconnectFunctions}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SwitchAction'>SwitchAction: </label><div class='col-sm-8'><input id='{{id}}_SwitchAction' class='form-control' type='text'{{#SwitchAction}} value='{{SwitchAction}}'{{/SwitchAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Switch" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_normalOpen").checked; if (temp) obj.normalOpen = true;
                temp = document.getElementById (id + "_ratedCurrent").value; if ("" != temp) obj.ratedCurrent = temp;
                temp = document.getElementById (id + "_retained").checked; if (temp) obj.retained = true;
                temp = document.getElementById (id + "_switchOnCount").value; if ("" != temp) obj.switchOnCount = temp;
                temp = document.getElementById (id + "_switchOnDate").value; if ("" != temp) obj.switchOnDate = temp;
                temp = document.getElementById (id + "_open").checked; if (temp) obj.open = true;
                temp = document.getElementById (id + "_Outage").value; if ("" != temp) obj.Outage = temp;
                temp = document.getElementById (id + "_CompositeSwitch").value; if ("" != temp) obj.CompositeSwitch = temp;
                temp = document.getElementById (id + "_ConnectDisconnectFunctions").value; if ("" != temp) obj.ConnectDisconnectFunctions = temp.split (",");
                temp = document.getElementById (id + "_SwitchAction").value; if ("" != temp) obj.SwitchAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Outage", "0..1", "0..*", "Outage", "OpenedSwitches"],
                            ["CompositeSwitch", "0..1", "0..*", "CompositeSwitch", "Switches"],
                            ["ConnectDisconnectFunctions", "0..*", "0..*", "ConnectDisconnectFunction", "Switches"],
                            ["SwitchAction", "0..1", "0..1", "SwitchAction", "OperatedSwitch"],
                            ["SwitchSchedules", "0..*", "1", "SwitchSchedule", "Switch"],
                            ["SwitchPhase", "0..*", "1", "SwitchPhase", "Switch"]
                        ]
                    )
                );
            }
        }

        /**
         * The transformer core admittance.
         *
         * Used to specify the core admittance of a transformer in a manner that can be shared among power transformers.
         *
         */
        class TransformerCoreAdmittance extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerCoreAdmittance;
                if (null == bucket)
                   cim_data.TransformerCoreAdmittance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerCoreAdmittance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerCoreAdmittance";
                base.parse_element (/<cim:TransformerCoreAdmittance.b>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerCoreAdmittance.b0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.b0>/g, obj, "b0", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerCoreAdmittance.g>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerCoreAdmittance.g0>([\s\S]*?)<\/cim:TransformerCoreAdmittance.g0>/g, obj, "g0", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransformerCoreAdmittance.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
                base.parse_attribute (/<cim:TransformerCoreAdmittance.TransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEndInfo", sub, context);
                var bucket = context.parsed.TransformerCoreAdmittance;
                if (null == bucket)
                   context.parsed.TransformerCoreAdmittance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerCoreAdmittance", "b", "b",  base.from_string, fields);
                base.export_element (obj, "TransformerCoreAdmittance", "b0", "b0",  base.from_string, fields);
                base.export_element (obj, "TransformerCoreAdmittance", "g", "g",  base.from_string, fields);
                base.export_element (obj, "TransformerCoreAdmittance", "g0", "g0",  base.from_string, fields);
                base.export_attributes (obj, "TransformerCoreAdmittance", "TransformerEnd", "TransformerEnd", fields);
                base.export_attribute (obj, "TransformerCoreAdmittance", "TransformerEndInfo", "TransformerEndInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerCoreAdmittance_collapse" aria-expanded="true" aria-controls="TransformerCoreAdmittance_collapse" style="margin-left: 10px;">TransformerCoreAdmittance</a></legend>
                    <div id="TransformerCoreAdmittance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#b0}}<div><b>b0</b>: {{b0}}</div>{{/b0}}
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
                    {{#g0}}<div><b>g0</b>: {{g0}}</div>{{/g0}}
                    {{#TransformerEnd}}<div><b>TransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerEnd}}
                    {{#TransformerEndInfo}}<div><b>TransformerEndInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerEndInfo}}&quot;);}); return false;'>{{TransformerEndInfo}}</a></div>{{/TransformerEndInfo}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransformerEnd) obj.TransformerEnd_string = obj.TransformerEnd.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerEnd_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerCoreAdmittance_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerCoreAdmittance_collapse" style="margin-left: 10px;">TransformerCoreAdmittance</a></legend>
                    <div id="{{id}}_TransformerCoreAdmittance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0'>b0: </label><div class='col-sm-8'><input id='{{id}}_b0' class='form-control' type='text'{{#b0}} value='{{b0}}'{{/b0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0'>g0: </label><div class='col-sm-8'><input id='{{id}}_g0' class='form-control' type='text'{{#g0}} value='{{g0}}'{{/g0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerEndInfo'>TransformerEndInfo: </label><div class='col-sm-8'><input id='{{id}}_TransformerEndInfo' class='form-control' type='text'{{#TransformerEndInfo}} value='{{TransformerEndInfo}}'{{/TransformerEndInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerCoreAdmittance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_b0").value; if ("" != temp) obj.b0 = temp;
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;
                temp = document.getElementById (id + "_g0").value; if ("" != temp) obj.g0 = temp;
                temp = document.getElementById (id + "_TransformerEndInfo").value; if ("" != temp) obj.TransformerEndInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerEnd", "0..*", "0..1", "TransformerEnd", "CoreAdmittance"],
                            ["TransformerEndInfo", "0..1", "0..1", "TransformerEndInfo", "CoreAdmittance"]
                        ]
                    )
                );
            }
        }

        /**
         * An area of the power system network which is defined for secondary voltage control purposes.
         *
         * A voltage control zone consists of a collection of substations with a designated bus bar section whose voltage will be controlled.
         *
         */
        class VoltageControlZone extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.VoltageControlZone;
                if (null == bucket)
                   cim_data.VoltageControlZone = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltageControlZone[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageControlZone";
                base.parse_attribute (/<cim:VoltageControlZone.RegulationSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulationSchedule", sub, context);
                base.parse_attribute (/<cim:VoltageControlZone.BusbarSection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BusbarSection", sub, context);
                var bucket = context.parsed.VoltageControlZone;
                if (null == bucket)
                   context.parsed.VoltageControlZone = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "VoltageControlZone", "RegulationSchedule", "RegulationSchedule", fields);
                base.export_attribute (obj, "VoltageControlZone", "BusbarSection", "BusbarSection", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#VoltageControlZone_collapse" aria-expanded="true" aria-controls="VoltageControlZone_collapse" style="margin-left: 10px;">VoltageControlZone</a></legend>
                    <div id="VoltageControlZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#RegulationSchedule}}<div><b>RegulationSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulationSchedule}}&quot;);}); return false;'>{{RegulationSchedule}}</a></div>{{/RegulationSchedule}}
                    {{#BusbarSection}}<div><b>BusbarSection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BusbarSection}}&quot;);}); return false;'>{{BusbarSection}}</a></div>{{/BusbarSection}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_VoltageControlZone_collapse" aria-expanded="true" aria-controls="{{id}}_VoltageControlZone_collapse" style="margin-left: 10px;">VoltageControlZone</a></legend>
                    <div id="{{id}}_VoltageControlZone_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegulationSchedule'>RegulationSchedule: </label><div class='col-sm-8'><input id='{{id}}_RegulationSchedule' class='form-control' type='text'{{#RegulationSchedule}} value='{{RegulationSchedule}}'{{/RegulationSchedule}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BusbarSection'>BusbarSection: </label><div class='col-sm-8'><input id='{{id}}_BusbarSection' class='form-control' type='text'{{#BusbarSection}} value='{{BusbarSection}}'{{/BusbarSection}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VoltageControlZone" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegulationSchedule").value; if ("" != temp) obj.RegulationSchedule = temp;
                temp = document.getElementById (id + "_BusbarSection").value; if ("" != temp) obj.BusbarSection = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegulationSchedule", "0..1", "0..*", "RegulationSchedule", "VoltageControlZones"],
                            ["BusbarSection", "1", "0..1", "BusbarSection", "VoltageControlZone"]
                        ]
                    )
                );
            }
        }

        /**
         * Transformer mesh impedance (Delta-model) between transformer ends.
         *
         * The typical case is that this class describes the impedance between two transformer ends pair-wise, i.e. the cardinalities at both tranformer end associations are 1. But in cases where two or more transformer ends are modeled the cardinalities are larger than 1.
         *
         */
        class TransformerMeshImpedance extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerMeshImpedance;
                if (null == bucket)
                   cim_data.TransformerMeshImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerMeshImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerMeshImpedance";
                base.parse_element (/<cim:TransformerMeshImpedance.r>([\s\S]*?)<\/cim:TransformerMeshImpedance.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerMeshImpedance.r0>([\s\S]*?)<\/cim:TransformerMeshImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerMeshImpedance.x>([\s\S]*?)<\/cim:TransformerMeshImpedance.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerMeshImpedance.x0>([\s\S]*?)<\/cim:TransformerMeshImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransformerMeshImpedance.ToTransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToTransformerEnd", sub, context);
                base.parse_attributes (/<cim:TransformerMeshImpedance.ToTransformerEndInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToTransformerEndInfos", sub, context);
                base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEndInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromTransformerEndInfo", sub, context);
                base.parse_attribute (/<cim:TransformerMeshImpedance.FromTransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromTransformerEnd", sub, context);
                var bucket = context.parsed.TransformerMeshImpedance;
                if (null == bucket)
                   context.parsed.TransformerMeshImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerMeshImpedance", "r", "r",  base.from_string, fields);
                base.export_element (obj, "TransformerMeshImpedance", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "TransformerMeshImpedance", "x", "x",  base.from_string, fields);
                base.export_element (obj, "TransformerMeshImpedance", "x0", "x0",  base.from_string, fields);
                base.export_attributes (obj, "TransformerMeshImpedance", "ToTransformerEnd", "ToTransformerEnd", fields);
                base.export_attributes (obj, "TransformerMeshImpedance", "ToTransformerEndInfos", "ToTransformerEndInfos", fields);
                base.export_attribute (obj, "TransformerMeshImpedance", "FromTransformerEndInfo", "FromTransformerEndInfo", fields);
                base.export_attribute (obj, "TransformerMeshImpedance", "FromTransformerEnd", "FromTransformerEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerMeshImpedance_collapse" aria-expanded="true" aria-controls="TransformerMeshImpedance_collapse" style="margin-left: 10px;">TransformerMeshImpedance</a></legend>
                    <div id="TransformerMeshImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#ToTransformerEnd}}<div><b>ToTransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ToTransformerEnd}}
                    {{#ToTransformerEndInfos}}<div><b>ToTransformerEndInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ToTransformerEndInfos}}
                    {{#FromTransformerEndInfo}}<div><b>FromTransformerEndInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FromTransformerEndInfo}}&quot;);}); return false;'>{{FromTransformerEndInfo}}</a></div>{{/FromTransformerEndInfo}}
                    {{#FromTransformerEnd}}<div><b>FromTransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{FromTransformerEnd}}&quot;);}); return false;'>{{FromTransformerEnd}}</a></div>{{/FromTransformerEnd}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ToTransformerEnd) obj.ToTransformerEnd_string = obj.ToTransformerEnd.join ();
                if (obj.ToTransformerEndInfos) obj.ToTransformerEndInfos_string = obj.ToTransformerEndInfos.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ToTransformerEnd_string;
                delete obj.ToTransformerEndInfos_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerMeshImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerMeshImpedance_collapse" style="margin-left: 10px;">TransformerMeshImpedance</a></legend>
                    <div id="{{id}}_TransformerMeshImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToTransformerEnd'>ToTransformerEnd: </label><div class='col-sm-8'><input id='{{id}}_ToTransformerEnd' class='form-control' type='text'{{#ToTransformerEnd}} value='{{ToTransformerEnd_string}}'{{/ToTransformerEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToTransformerEndInfos'>ToTransformerEndInfos: </label><div class='col-sm-8'><input id='{{id}}_ToTransformerEndInfos' class='form-control' type='text'{{#ToTransformerEndInfos}} value='{{ToTransformerEndInfos_string}}'{{/ToTransformerEndInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FromTransformerEndInfo'>FromTransformerEndInfo: </label><div class='col-sm-8'><input id='{{id}}_FromTransformerEndInfo' class='form-control' type='text'{{#FromTransformerEndInfo}} value='{{FromTransformerEndInfo}}'{{/FromTransformerEndInfo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_FromTransformerEnd'>FromTransformerEnd: </label><div class='col-sm-8'><input id='{{id}}_FromTransformerEnd' class='form-control' type='text'{{#FromTransformerEnd}} value='{{FromTransformerEnd}}'{{/FromTransformerEnd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerMeshImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_ToTransformerEnd").value; if ("" != temp) obj.ToTransformerEnd = temp.split (",");
                temp = document.getElementById (id + "_ToTransformerEndInfos").value; if ("" != temp) obj.ToTransformerEndInfos = temp.split (",");
                temp = document.getElementById (id + "_FromTransformerEndInfo").value; if ("" != temp) obj.FromTransformerEndInfo = temp;
                temp = document.getElementById (id + "_FromTransformerEnd").value; if ("" != temp) obj.FromTransformerEnd = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ToTransformerEnd", "1..*", "0..*", "TransformerEnd", "ToMeshImpedance"],
                            ["ToTransformerEndInfos", "0..*", "0..*", "TransformerEndInfo", "ToMeshImpedances"],
                            ["FromTransformerEndInfo", "0..1", "0..*", "TransformerEndInfo", "FromMeshImpedances"],
                            ["FromTransformerEnd", "1", "0..*", "TransformerEnd", "FromMeshImpedance"]
                        ]
                    )
                );
            }
        }

        /**
         * A non linear shunt compensator bank or section admittance value.
         *
         */
        class NonlinearShuntCompensatorPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonlinearShuntCompensatorPoint;
                if (null == bucket)
                   cim_data.NonlinearShuntCompensatorPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonlinearShuntCompensatorPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NonlinearShuntCompensatorPoint";
                base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b0>/g, obj, "b0", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPoint.g0>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.g0>/g, obj, "g0", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPoint.sectionNumber>/g, obj, "sectionNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:NonlinearShuntCompensatorPoint.NonlinearShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensator", sub, context);
                var bucket = context.parsed.NonlinearShuntCompensatorPoint;
                if (null == bucket)
                   context.parsed.NonlinearShuntCompensatorPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "NonlinearShuntCompensatorPoint", "g", "g",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPoint", "b0", "b0",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPoint", "b", "b",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPoint", "g0", "g0",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPoint", "sectionNumber", "sectionNumber",  base.from_string, fields);
                base.export_attribute (obj, "NonlinearShuntCompensatorPoint", "NonlinearShuntCompensator", "NonlinearShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonlinearShuntCompensatorPoint_collapse" aria-expanded="true" aria-controls="NonlinearShuntCompensatorPoint_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPoint</a></legend>
                    <div id="NonlinearShuntCompensatorPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
                    {{#b0}}<div><b>b0</b>: {{b0}}</div>{{/b0}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#g0}}<div><b>g0</b>: {{g0}}</div>{{/g0}}
                    {{#sectionNumber}}<div><b>sectionNumber</b>: {{sectionNumber}}</div>{{/sectionNumber}}
                    {{#NonlinearShuntCompensator}}<div><b>NonlinearShuntCompensator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NonlinearShuntCompensator}}&quot;);}); return false;'>{{NonlinearShuntCompensator}}</a></div>{{/NonlinearShuntCompensator}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonlinearShuntCompensatorPoint_collapse" aria-expanded="true" aria-controls="{{id}}_NonlinearShuntCompensatorPoint_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPoint</a></legend>
                    <div id="{{id}}_NonlinearShuntCompensatorPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0'>b0: </label><div class='col-sm-8'><input id='{{id}}_b0' class='form-control' type='text'{{#b0}} value='{{b0}}'{{/b0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0'>g0: </label><div class='col-sm-8'><input id='{{id}}_g0' class='form-control' type='text'{{#g0}} value='{{g0}}'{{/g0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sectionNumber'>sectionNumber: </label><div class='col-sm-8'><input id='{{id}}_sectionNumber' class='form-control' type='text'{{#sectionNumber}} value='{{sectionNumber}}'{{/sectionNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NonlinearShuntCompensator'>NonlinearShuntCompensator: </label><div class='col-sm-8'><input id='{{id}}_NonlinearShuntCompensator' class='form-control' type='text'{{#NonlinearShuntCompensator}} value='{{NonlinearShuntCompensator}}'{{/NonlinearShuntCompensator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "NonlinearShuntCompensatorPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;
                temp = document.getElementById (id + "_b0").value; if ("" != temp) obj.b0 = temp;
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_g0").value; if ("" != temp) obj.g0 = temp;
                temp = document.getElementById (id + "_sectionNumber").value; if ("" != temp) obj.sectionNumber = temp;
                temp = document.getElementById (id + "_NonlinearShuntCompensator").value; if ("" != temp) obj.NonlinearShuntCompensator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NonlinearShuntCompensator", "1", "1..*", "NonlinearShuntCompensator", "NonlinearShuntCompensatorPoints"]
                        ]
                    )
                );
            }
        }

        /**
         * A per phase non linear shunt compensator bank or section admittance value.
         *
         */
        class NonlinearShuntCompensatorPhasePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonlinearShuntCompensatorPhasePoint;
                if (null == bucket)
                   cim_data.NonlinearShuntCompensatorPhasePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonlinearShuntCompensatorPhasePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "NonlinearShuntCompensatorPhasePoint";
                base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.sectionNumber>/g, obj, "sectionNumber", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.b>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:NonlinearShuntCompensatorPhasePoint.g>([\s\S]*?)<\/cim:NonlinearShuntCompensatorPhasePoint.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_attribute (/<cim:NonlinearShuntCompensatorPhasePoint.NonlinearShuntCompensatorPhase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensatorPhase", sub, context);
                var bucket = context.parsed.NonlinearShuntCompensatorPhasePoint;
                if (null == bucket)
                   context.parsed.NonlinearShuntCompensatorPhasePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "sectionNumber", "sectionNumber",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "b", "b",  base.from_string, fields);
                base.export_element (obj, "NonlinearShuntCompensatorPhasePoint", "g", "g",  base.from_string, fields);
                base.export_attribute (obj, "NonlinearShuntCompensatorPhasePoint", "NonlinearShuntCompensatorPhase", "NonlinearShuntCompensatorPhase", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonlinearShuntCompensatorPhasePoint_collapse" aria-expanded="true" aria-controls="NonlinearShuntCompensatorPhasePoint_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPhasePoint</a></legend>
                    <div id="NonlinearShuntCompensatorPhasePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#sectionNumber}}<div><b>sectionNumber</b>: {{sectionNumber}}</div>{{/sectionNumber}}
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
                    {{#NonlinearShuntCompensatorPhase}}<div><b>NonlinearShuntCompensatorPhase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{NonlinearShuntCompensatorPhase}}&quot;);}); return false;'>{{NonlinearShuntCompensatorPhase}}</a></div>{{/NonlinearShuntCompensatorPhase}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonlinearShuntCompensatorPhasePoint_collapse" aria-expanded="true" aria-controls="{{id}}_NonlinearShuntCompensatorPhasePoint_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPhasePoint</a></legend>
                    <div id="{{id}}_NonlinearShuntCompensatorPhasePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sectionNumber'>sectionNumber: </label><div class='col-sm-8'><input id='{{id}}_sectionNumber' class='form-control' type='text'{{#sectionNumber}} value='{{sectionNumber}}'{{/sectionNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_NonlinearShuntCompensatorPhase'>NonlinearShuntCompensatorPhase: </label><div class='col-sm-8'><input id='{{id}}_NonlinearShuntCompensatorPhase' class='form-control' type='text'{{#NonlinearShuntCompensatorPhase}} value='{{NonlinearShuntCompensatorPhase}}'{{/NonlinearShuntCompensatorPhase}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "NonlinearShuntCompensatorPhasePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_sectionNumber").value; if ("" != temp) obj.sectionNumber = temp;
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;
                temp = document.getElementById (id + "_NonlinearShuntCompensatorPhase").value; if ("" != temp) obj.NonlinearShuntCompensatorPhase = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NonlinearShuntCompensatorPhase", "1", "1..*", "NonlinearShuntCompensatorPhase", "NonlinearShuntCompensatorPhasePoints"]
                        ]
                    )
                );
            }
        }

        class TapChangerTablePoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TapChangerTablePoint;
                if (null == bucket)
                   cim_data.TapChangerTablePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapChangerTablePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TapChangerTablePoint";
                base.parse_element (/<cim:TapChangerTablePoint.b>([\s\S]*?)<\/cim:TapChangerTablePoint.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerTablePoint.g>([\s\S]*?)<\/cim:TapChangerTablePoint.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerTablePoint.r>([\s\S]*?)<\/cim:TapChangerTablePoint.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerTablePoint.ratio>([\s\S]*?)<\/cim:TapChangerTablePoint.ratio>/g, obj, "ratio", base.to_float, sub, context);
                base.parse_element (/<cim:TapChangerTablePoint.step>([\s\S]*?)<\/cim:TapChangerTablePoint.step>/g, obj, "step", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerTablePoint.x>([\s\S]*?)<\/cim:TapChangerTablePoint.x>/g, obj, "x", base.to_string, sub, context);
                var bucket = context.parsed.TapChangerTablePoint;
                if (null == bucket)
                   context.parsed.TapChangerTablePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TapChangerTablePoint", "b", "b",  base.from_string, fields);
                base.export_element (obj, "TapChangerTablePoint", "g", "g",  base.from_string, fields);
                base.export_element (obj, "TapChangerTablePoint", "r", "r",  base.from_string, fields);
                base.export_element (obj, "TapChangerTablePoint", "ratio", "ratio",  base.from_float, fields);
                base.export_element (obj, "TapChangerTablePoint", "step", "step",  base.from_string, fields);
                base.export_element (obj, "TapChangerTablePoint", "x", "x",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapChangerTablePoint_collapse" aria-expanded="true" aria-controls="TapChangerTablePoint_collapse" style="margin-left: 10px;">TapChangerTablePoint</a></legend>
                    <div id="TapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#ratio}}<div><b>ratio</b>: {{ratio}}</div>{{/ratio}}
                    {{#step}}<div><b>step</b>: {{step}}</div>{{/step}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapChangerTablePoint_collapse" aria-expanded="true" aria-controls="{{id}}_TapChangerTablePoint_collapse" style="margin-left: 10px;">TapChangerTablePoint</a></legend>
                    <div id="{{id}}_TapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratio'>ratio: </label><div class='col-sm-8'><input id='{{id}}_ratio' class='form-control' type='text'{{#ratio}} value='{{ratio}}'{{/ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_step'>step: </label><div class='col-sm-8'><input id='{{id}}_step' class='form-control' type='text'{{#step}} value='{{step}}'{{/step}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TapChangerTablePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_ratio").value; if ("" != temp) obj.ratio = temp;
                temp = document.getElementById (id + "_step").value; if ("" != temp) obj.step = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;

                return (obj);
            }
        }

        /**
         * Reactive power rating envelope versus the synchronous machine's active power, in both the generating and motoring modes.
         *
         * For each active power value there is a corresponding high and low reactive power limit  value. Typically there will be a separate curve for each coolant condition, such as hydrogen pressure.  The Y1 axis values represent reactive minimum and the Y2 axis values represent reactive maximum.
         *
         */
        class ReactiveCapabilityCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ReactiveCapabilityCurve;
                if (null == bucket)
                   cim_data.ReactiveCapabilityCurve = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReactiveCapabilityCurve[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReactiveCapabilityCurve";
                base.parse_element (/<cim:ReactiveCapabilityCurve.coolantTemperature>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.coolantTemperature>/g, obj, "coolantTemperature", base.to_string, sub, context);
                base.parse_element (/<cim:ReactiveCapabilityCurve.hydrogenPressure>([\s\S]*?)<\/cim:ReactiveCapabilityCurve.hydrogenPressure>/g, obj, "hydrogenPressure", base.to_string, sub, context);
                base.parse_attributes (/<cim:ReactiveCapabilityCurve.EquivalentInjection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EquivalentInjection", sub, context);
                base.parse_attributes (/<cim:ReactiveCapabilityCurve.InitiallyUsedBySynchronousMachines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InitiallyUsedBySynchronousMachines", sub, context);
                base.parse_attributes (/<cim:ReactiveCapabilityCurve.SynchronousMachines\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachines", sub, context);
                var bucket = context.parsed.ReactiveCapabilityCurve;
                if (null == bucket)
                   context.parsed.ReactiveCapabilityCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_element (obj, "ReactiveCapabilityCurve", "coolantTemperature", "coolantTemperature",  base.from_string, fields);
                base.export_element (obj, "ReactiveCapabilityCurve", "hydrogenPressure", "hydrogenPressure",  base.from_string, fields);
                base.export_attributes (obj, "ReactiveCapabilityCurve", "EquivalentInjection", "EquivalentInjection", fields);
                base.export_attributes (obj, "ReactiveCapabilityCurve", "InitiallyUsedBySynchronousMachines", "InitiallyUsedBySynchronousMachines", fields);
                base.export_attributes (obj, "ReactiveCapabilityCurve", "SynchronousMachines", "SynchronousMachines", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ReactiveCapabilityCurve_collapse" aria-expanded="true" aria-controls="ReactiveCapabilityCurve_collapse" style="margin-left: 10px;">ReactiveCapabilityCurve</a></legend>
                    <div id="ReactiveCapabilityCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.template.call (this) +
                    `
                    {{#coolantTemperature}}<div><b>coolantTemperature</b>: {{coolantTemperature}}</div>{{/coolantTemperature}}
                    {{#hydrogenPressure}}<div><b>hydrogenPressure</b>: {{hydrogenPressure}}</div>{{/hydrogenPressure}}
                    {{#EquivalentInjection}}<div><b>EquivalentInjection</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/EquivalentInjection}}
                    {{#InitiallyUsedBySynchronousMachines}}<div><b>InitiallyUsedBySynchronousMachines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/InitiallyUsedBySynchronousMachines}}
                    {{#SynchronousMachines}}<div><b>SynchronousMachines</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/SynchronousMachines}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.EquivalentInjection) obj.EquivalentInjection_string = obj.EquivalentInjection.join ();
                if (obj.InitiallyUsedBySynchronousMachines) obj.InitiallyUsedBySynchronousMachines_string = obj.InitiallyUsedBySynchronousMachines.join ();
                if (obj.SynchronousMachines) obj.SynchronousMachines_string = obj.SynchronousMachines.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.EquivalentInjection_string;
                delete obj.InitiallyUsedBySynchronousMachines_string;
                delete obj.SynchronousMachines_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ReactiveCapabilityCurve_collapse" aria-expanded="true" aria-controls="{{id}}_ReactiveCapabilityCurve_collapse" style="margin-left: 10px;">ReactiveCapabilityCurve</a></legend>
                    <div id="{{id}}_ReactiveCapabilityCurve_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Curve.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolantTemperature'>coolantTemperature: </label><div class='col-sm-8'><input id='{{id}}_coolantTemperature' class='form-control' type='text'{{#coolantTemperature}} value='{{coolantTemperature}}'{{/coolantTemperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_hydrogenPressure'>hydrogenPressure: </label><div class='col-sm-8'><input id='{{id}}_hydrogenPressure' class='form-control' type='text'{{#hydrogenPressure}} value='{{hydrogenPressure}}'{{/hydrogenPressure}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachines'>SynchronousMachines: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachines' class='form-control' type='text'{{#SynchronousMachines}} value='{{SynchronousMachines_string}}'{{/SynchronousMachines}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReactiveCapabilityCurve" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_coolantTemperature").value; if ("" != temp) obj.coolantTemperature = temp;
                temp = document.getElementById (id + "_hydrogenPressure").value; if ("" != temp) obj.hydrogenPressure = temp;
                temp = document.getElementById (id + "_SynchronousMachines").value; if ("" != temp) obj.SynchronousMachines = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EquivalentInjection", "0..*", "0..1", "EquivalentInjection", "ReactiveCapabilityCurve"],
                            ["InitiallyUsedBySynchronousMachines", "1..*", "0..1", "SynchronousMachine", "InitialReactiveCapabilityCurve"],
                            ["SynchronousMachines", "1..*", "0..*", "SynchronousMachine", "ReactiveCapabilityCurves"]
                        ]
                    )
                );
            }
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation and are modelled with a single logical terminal.
         *
         */
        class Connector extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Connector;
                if (null == bucket)
                   cim_data.Connector = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Connector[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Connector";
                var bucket = context.parsed.Connector;
                if (null == bucket)
                   context.parsed.Connector = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Connector_collapse" aria-expanded="true" aria-controls="Connector_collapse" style="margin-left: 10px;">Connector</a></legend>
                    <div id="Connector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Connector_collapse" aria-expanded="true" aria-controls="{{id}}_Connector_collapse" style="margin-left: 10px;">Connector</a></legend>
                    <div id="{{id}}_Connector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Connector" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Describes a curve for how the voltage magnitude and impedance varies with the tap step.
         *
         */
        class RatioTapChangerTable extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RatioTapChangerTable;
                if (null == bucket)
                   cim_data.RatioTapChangerTable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RatioTapChangerTable[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RatioTapChangerTable";
                base.parse_attributes (/<cim:RatioTapChangerTable.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChanger", sub, context);
                base.parse_attributes (/<cim:RatioTapChangerTable.RatioTapChangerTablePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChangerTablePoint", sub, context);
                var bucket = context.parsed.RatioTapChangerTable;
                if (null == bucket)
                   context.parsed.RatioTapChangerTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "RatioTapChangerTable", "RatioTapChanger", "RatioTapChanger", fields);
                base.export_attributes (obj, "RatioTapChangerTable", "RatioTapChangerTablePoint", "RatioTapChangerTablePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RatioTapChangerTable_collapse" aria-expanded="true" aria-controls="RatioTapChangerTable_collapse" style="margin-left: 10px;">RatioTapChangerTable</a></legend>
                    <div id="RatioTapChangerTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#RatioTapChanger}}<div><b>RatioTapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RatioTapChanger}}
                    {{#RatioTapChangerTablePoint}}<div><b>RatioTapChangerTablePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RatioTapChangerTablePoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RatioTapChanger) obj.RatioTapChanger_string = obj.RatioTapChanger.join ();
                if (obj.RatioTapChangerTablePoint) obj.RatioTapChangerTablePoint_string = obj.RatioTapChangerTablePoint.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RatioTapChanger_string;
                delete obj.RatioTapChangerTablePoint_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RatioTapChangerTable_collapse" aria-expanded="true" aria-controls="{{id}}_RatioTapChangerTable_collapse" style="margin-left: 10px;">RatioTapChangerTable</a></legend>
                    <div id="{{id}}_RatioTapChangerTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "RatioTapChangerTable" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RatioTapChanger", "0..*", "0..1", "RatioTapChanger", "RatioTapChangerTable"],
                            ["RatioTapChangerTablePoint", "1..*", "1", "RatioTapChangerTablePoint", "RatioTapChangerTable"]
                        ]
                    )
                );
            }
        }

        /**
         * An electrical device consisting of  two or more coupled windings, with or without a magnetic core, for introducing mutual coupling between electric circuits.
         *
         * Transformers can be used to control voltage and phase shift (active power flow).
         *
         */
        class PowerTransformer extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerTransformer;
                if (null == bucket)
                   cim_data.PowerTransformer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerTransformer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "PowerTransformer";
                base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingCurrent>/g, obj, "beforeShCircuitHighestOperatingCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>([\s\S]*?)<\/cim:PowerTransformer.beforeShCircuitHighestOperatingVoltage>/g, obj, "beforeShCircuitHighestOperatingVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformer.beforeShortCircuitAnglePf>([\s\S]*?)<\/cim:PowerTransformer.beforeShortCircuitAnglePf>/g, obj, "beforeShortCircuitAnglePf", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformer.highSideMinOperatingU>([\s\S]*?)<\/cim:PowerTransformer.highSideMinOperatingU>/g, obj, "highSideMinOperatingU", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformer.isPartOfGeneratorUnit>([\s\S]*?)<\/cim:PowerTransformer.isPartOfGeneratorUnit>/g, obj, "isPartOfGeneratorUnit", base.to_boolean, sub, context);
                base.parse_element (/<cim:PowerTransformer.operationalValuesConsidered>([\s\S]*?)<\/cim:PowerTransformer.operationalValuesConsidered>/g, obj, "operationalValuesConsidered", base.to_boolean, sub, context);
                base.parse_element (/<cim:PowerTransformer.vectorGroup>([\s\S]*?)<\/cim:PowerTransformer.vectorGroup>/g, obj, "vectorGroup", base.to_string, sub, context);
                base.parse_attributes (/<cim:PowerTransformer.PowerTransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformerEnd", sub, context);
                base.parse_attributes (/<cim:PowerTransformer.TransformerTanks\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTanks", sub, context);
                var bucket = context.parsed.PowerTransformer;
                if (null == bucket)
                   context.parsed.PowerTransformer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerTransformer", "beforeShCircuitHighestOperatingCurrent", "beforeShCircuitHighestOperatingCurrent",  base.from_string, fields);
                base.export_element (obj, "PowerTransformer", "beforeShCircuitHighestOperatingVoltage", "beforeShCircuitHighestOperatingVoltage",  base.from_string, fields);
                base.export_element (obj, "PowerTransformer", "beforeShortCircuitAnglePf", "beforeShortCircuitAnglePf",  base.from_string, fields);
                base.export_element (obj, "PowerTransformer", "highSideMinOperatingU", "highSideMinOperatingU",  base.from_string, fields);
                base.export_element (obj, "PowerTransformer", "isPartOfGeneratorUnit", "isPartOfGeneratorUnit",  base.from_boolean, fields);
                base.export_element (obj, "PowerTransformer", "operationalValuesConsidered", "operationalValuesConsidered",  base.from_boolean, fields);
                base.export_element (obj, "PowerTransformer", "vectorGroup", "vectorGroup",  base.from_string, fields);
                base.export_attributes (obj, "PowerTransformer", "PowerTransformerEnd", "PowerTransformerEnd", fields);
                base.export_attributes (obj, "PowerTransformer", "TransformerTanks", "TransformerTanks", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerTransformer_collapse" aria-expanded="true" aria-controls="PowerTransformer_collapse" style="margin-left: 10px;">PowerTransformer</a></legend>
                    <div id="PowerTransformer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#beforeShCircuitHighestOperatingCurrent}}<div><b>beforeShCircuitHighestOperatingCurrent</b>: {{beforeShCircuitHighestOperatingCurrent}}</div>{{/beforeShCircuitHighestOperatingCurrent}}
                    {{#beforeShCircuitHighestOperatingVoltage}}<div><b>beforeShCircuitHighestOperatingVoltage</b>: {{beforeShCircuitHighestOperatingVoltage}}</div>{{/beforeShCircuitHighestOperatingVoltage}}
                    {{#beforeShortCircuitAnglePf}}<div><b>beforeShortCircuitAnglePf</b>: {{beforeShortCircuitAnglePf}}</div>{{/beforeShortCircuitAnglePf}}
                    {{#highSideMinOperatingU}}<div><b>highSideMinOperatingU</b>: {{highSideMinOperatingU}}</div>{{/highSideMinOperatingU}}
                    {{#isPartOfGeneratorUnit}}<div><b>isPartOfGeneratorUnit</b>: {{isPartOfGeneratorUnit}}</div>{{/isPartOfGeneratorUnit}}
                    {{#operationalValuesConsidered}}<div><b>operationalValuesConsidered</b>: {{operationalValuesConsidered}}</div>{{/operationalValuesConsidered}}
                    {{#vectorGroup}}<div><b>vectorGroup</b>: {{vectorGroup}}</div>{{/vectorGroup}}
                    {{#PowerTransformerEnd}}<div><b>PowerTransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PowerTransformerEnd}}
                    {{#TransformerTanks}}<div><b>TransformerTanks</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerTanks}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PowerTransformerEnd) obj.PowerTransformerEnd_string = obj.PowerTransformerEnd.join ();
                if (obj.TransformerTanks) obj.TransformerTanks_string = obj.TransformerTanks.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PowerTransformerEnd_string;
                delete obj.TransformerTanks_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerTransformer_collapse" aria-expanded="true" aria-controls="{{id}}_PowerTransformer_collapse" style="margin-left: 10px;">PowerTransformer</a></legend>
                    <div id="{{id}}_PowerTransformer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_beforeShCircuitHighestOperatingCurrent'>beforeShCircuitHighestOperatingCurrent: </label><div class='col-sm-8'><input id='{{id}}_beforeShCircuitHighestOperatingCurrent' class='form-control' type='text'{{#beforeShCircuitHighestOperatingCurrent}} value='{{beforeShCircuitHighestOperatingCurrent}}'{{/beforeShCircuitHighestOperatingCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_beforeShCircuitHighestOperatingVoltage'>beforeShCircuitHighestOperatingVoltage: </label><div class='col-sm-8'><input id='{{id}}_beforeShCircuitHighestOperatingVoltage' class='form-control' type='text'{{#beforeShCircuitHighestOperatingVoltage}} value='{{beforeShCircuitHighestOperatingVoltage}}'{{/beforeShCircuitHighestOperatingVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_beforeShortCircuitAnglePf'>beforeShortCircuitAnglePf: </label><div class='col-sm-8'><input id='{{id}}_beforeShortCircuitAnglePf' class='form-control' type='text'{{#beforeShortCircuitAnglePf}} value='{{beforeShortCircuitAnglePf}}'{{/beforeShortCircuitAnglePf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highSideMinOperatingU'>highSideMinOperatingU: </label><div class='col-sm-8'><input id='{{id}}_highSideMinOperatingU' class='form-control' type='text'{{#highSideMinOperatingU}} value='{{highSideMinOperatingU}}'{{/highSideMinOperatingU}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_isPartOfGeneratorUnit'>isPartOfGeneratorUnit: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_isPartOfGeneratorUnit' class='form-check-input' type='checkbox'{{#isPartOfGeneratorUnit}} checked{{/isPartOfGeneratorUnit}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_operationalValuesConsidered'>operationalValuesConsidered: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_operationalValuesConsidered' class='form-check-input' type='checkbox'{{#operationalValuesConsidered}} checked{{/operationalValuesConsidered}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vectorGroup'>vectorGroup: </label><div class='col-sm-8'><input id='{{id}}_vectorGroup' class='form-control' type='text'{{#vectorGroup}} value='{{vectorGroup}}'{{/vectorGroup}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerTransformer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_beforeShCircuitHighestOperatingCurrent").value; if ("" != temp) obj.beforeShCircuitHighestOperatingCurrent = temp;
                temp = document.getElementById (id + "_beforeShCircuitHighestOperatingVoltage").value; if ("" != temp) obj.beforeShCircuitHighestOperatingVoltage = temp;
                temp = document.getElementById (id + "_beforeShortCircuitAnglePf").value; if ("" != temp) obj.beforeShortCircuitAnglePf = temp;
                temp = document.getElementById (id + "_highSideMinOperatingU").value; if ("" != temp) obj.highSideMinOperatingU = temp;
                temp = document.getElementById (id + "_isPartOfGeneratorUnit").checked; if (temp) obj.isPartOfGeneratorUnit = true;
                temp = document.getElementById (id + "_operationalValuesConsidered").checked; if (temp) obj.operationalValuesConsidered = true;
                temp = document.getElementById (id + "_vectorGroup").value; if ("" != temp) obj.vectorGroup = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerTransformerEnd", "0..*", "0..1", "PowerTransformerEnd", "PowerTransformer"],
                            ["TransformerTanks", "0..*", "0..1", "TransformerTank", "PowerTransformer"]
                        ]
                    )
                );
            }
        }

        /**
         * A single phase of an energy consumer.
         *
         */
        class EnergyConsumerPhase extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergyConsumerPhase;
                if (null == bucket)
                   cim_data.EnergyConsumerPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergyConsumerPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "EnergyConsumerPhase";
                base.parse_element (/<cim:EnergyConsumerPhase.pfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixed>/g, obj, "pfixed", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumerPhase.pfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.pfixedPct>/g, obj, "pfixedPct", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyConsumerPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phase", sub, context);
                base.parse_element (/<cim:EnergyConsumerPhase.qfixed>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixed>/g, obj, "qfixed", base.to_string, sub, context);
                base.parse_element (/<cim:EnergyConsumerPhase.qfixedPct>([\s\S]*?)<\/cim:EnergyConsumerPhase.qfixedPct>/g, obj, "qfixedPct", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergyConsumerPhase.EnergyConsumer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyConsumer", sub, context);
                var bucket = context.parsed.EnergyConsumerPhase;
                if (null == bucket)
                   context.parsed.EnergyConsumerPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergyConsumerPhase", "pfixed", "pfixed",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumerPhase", "pfixedPct", "pfixedPct",  base.from_string, fields);
                base.export_attribute (obj, "EnergyConsumerPhase", "phase", "phase", fields);
                base.export_element (obj, "EnergyConsumerPhase", "qfixed", "qfixed",  base.from_string, fields);
                base.export_element (obj, "EnergyConsumerPhase", "qfixedPct", "qfixedPct",  base.from_string, fields);
                base.export_attribute (obj, "EnergyConsumerPhase", "EnergyConsumer", "EnergyConsumer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergyConsumerPhase_collapse" aria-expanded="true" aria-controls="EnergyConsumerPhase_collapse" style="margin-left: 10px;">EnergyConsumerPhase</a></legend>
                    <div id="EnergyConsumerPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#pfixed}}<div><b>pfixed</b>: {{pfixed}}</div>{{/pfixed}}
                    {{#pfixedPct}}<div><b>pfixedPct</b>: {{pfixedPct}}</div>{{/pfixedPct}}
                    {{#phase}}<div><b>phase</b>: {{phase}}</div>{{/phase}}
                    {{#qfixed}}<div><b>qfixed</b>: {{qfixed}}</div>{{/qfixed}}
                    {{#qfixedPct}}<div><b>qfixedPct</b>: {{qfixedPct}}</div>{{/qfixedPct}}
                    {{#EnergyConsumer}}<div><b>EnergyConsumer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergyConsumer}}&quot;);}); return false;'>{{EnergyConsumer}}</a></div>{{/EnergyConsumer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SinglePhaseKind = []; if (!obj.phase) obj.SinglePhaseKind.push ({ id: '', selected: true}); for (var property in SinglePhaseKind) obj.SinglePhaseKind.push ({ id: property, selected: obj.phase && obj.phase.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SinglePhaseKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergyConsumerPhase_collapse" aria-expanded="true" aria-controls="{{id}}_EnergyConsumerPhase_collapse" style="margin-left: 10px;">EnergyConsumerPhase</a></legend>
                    <div id="{{id}}_EnergyConsumerPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfixed'>pfixed: </label><div class='col-sm-8'><input id='{{id}}_pfixed' class='form-control' type='text'{{#pfixed}} value='{{pfixed}}'{{/pfixed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pfixedPct'>pfixedPct: </label><div class='col-sm-8'><input id='{{id}}_pfixedPct' class='form-control' type='text'{{#pfixedPct}} value='{{pfixedPct}}'{{/pfixedPct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phase'>phase: </label><div class='col-sm-8'><select id='{{id}}_phase' class='form-control custom-select'>{{#SinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qfixed'>qfixed: </label><div class='col-sm-8'><input id='{{id}}_qfixed' class='form-control' type='text'{{#qfixed}} value='{{qfixed}}'{{/qfixed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qfixedPct'>qfixedPct: </label><div class='col-sm-8'><input id='{{id}}_qfixedPct' class='form-control' type='text'{{#qfixedPct}} value='{{qfixedPct}}'{{/qfixedPct}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergyConsumer'>EnergyConsumer: </label><div class='col-sm-8'><input id='{{id}}_EnergyConsumer' class='form-control' type='text'{{#EnergyConsumer}} value='{{EnergyConsumer}}'{{/EnergyConsumer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergyConsumerPhase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_pfixed").value; if ("" != temp) obj.pfixed = temp;
                temp = document.getElementById (id + "_pfixedPct").value; if ("" != temp) obj.pfixedPct = temp;
                temp = document.getElementById (id + "_phase").value; if ("" != temp) { temp = SinglePhaseKind[temp]; if ("undefined" != typeof (temp)) obj.phase = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; }
                temp = document.getElementById (id + "_qfixed").value; if ("" != temp) obj.qfixed = temp;
                temp = document.getElementById (id + "_qfixedPct").value; if ("" != temp) obj.qfixedPct = temp;
                temp = document.getElementById (id + "_EnergyConsumer").value; if ("" != temp) obj.EnergyConsumer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["EnergyConsumer", "1", "0..*", "EnergyConsumer", "EnergyConsumerPhase"]
                        ]
                    )
                );
            }
        }

        /**
         * Common type for per-length electrical catalogues describing line parameters.
         *
         */
        class PerLengthLineParameter extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PerLengthLineParameter;
                if (null == bucket)
                   cim_data.PerLengthLineParameter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerLengthLineParameter[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthLineParameter";
                base.parse_attributes (/<cim:PerLengthLineParameter.WireInfos\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireInfos", sub, context);
                base.parse_attribute (/<cim:PerLengthLineParameter.WireSpacingInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WireSpacingInfo", sub, context);
                var bucket = context.parsed.PerLengthLineParameter;
                if (null == bucket)
                   context.parsed.PerLengthLineParameter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PerLengthLineParameter", "WireInfos", "WireInfos", fields);
                base.export_attribute (obj, "PerLengthLineParameter", "WireSpacingInfo", "WireSpacingInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PerLengthLineParameter_collapse" aria-expanded="true" aria-controls="PerLengthLineParameter_collapse" style="margin-left: 10px;">PerLengthLineParameter</a></legend>
                    <div id="PerLengthLineParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#WireInfos}}<div><b>WireInfos</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/WireInfos}}
                    {{#WireSpacingInfo}}<div><b>WireSpacingInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WireSpacingInfo}}&quot;);}); return false;'>{{WireSpacingInfo}}</a></div>{{/WireSpacingInfo}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.WireInfos) obj.WireInfos_string = obj.WireInfos.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WireInfos_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PerLengthLineParameter_collapse" aria-expanded="true" aria-controls="{{id}}_PerLengthLineParameter_collapse" style="margin-left: 10px;">PerLengthLineParameter</a></legend>
                    <div id="{{id}}_PerLengthLineParameter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireInfos'>WireInfos: </label><div class='col-sm-8'><input id='{{id}}_WireInfos' class='form-control' type='text'{{#WireInfos}} value='{{WireInfos_string}}'{{/WireInfos}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WireSpacingInfo'>WireSpacingInfo: </label><div class='col-sm-8'><input id='{{id}}_WireSpacingInfo' class='form-control' type='text'{{#WireSpacingInfo}} value='{{WireSpacingInfo}}'{{/WireSpacingInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PerLengthLineParameter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_WireInfos").value; if ("" != temp) obj.WireInfos = temp.split (",");
                temp = document.getElementById (id + "_WireSpacingInfo").value; if ("" != temp) obj.WireSpacingInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WireInfos", "0..*", "0..*", "WireInfo", "PerLengthParameters"],
                            ["WireSpacingInfo", "0..1", "0..*", "WireSpacingInfo", "PerLengthParameters"]
                        ]
                    )
                );
            }
        }

        /**
         * Triplet of resistance, reactance, and susceptance matrix element values.
         *
         */
        class PhaseImpedanceData extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseImpedanceData;
                if (null == bucket)
                   cim_data.PhaseImpedanceData = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseImpedanceData[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseImpedanceData";
                base.parse_element (/<cim:PhaseImpedanceData.b>([\s\S]*?)<\/cim:PhaseImpedanceData.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseImpedanceData.r>([\s\S]*?)<\/cim:PhaseImpedanceData.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseImpedanceData.sequenceNumber>([\s\S]*?)<\/cim:PhaseImpedanceData.sequenceNumber>/g, obj, "sequenceNumber", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseImpedanceData.x>([\s\S]*?)<\/cim:PhaseImpedanceData.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_attribute (/<cim:PhaseImpedanceData.PhaseImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseImpedance", sub, context);
                var bucket = context.parsed.PhaseImpedanceData;
                if (null == bucket)
                   context.parsed.PhaseImpedanceData = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PhaseImpedanceData", "b", "b",  base.from_string, fields);
                base.export_element (obj, "PhaseImpedanceData", "r", "r",  base.from_string, fields);
                base.export_element (obj, "PhaseImpedanceData", "sequenceNumber", "sequenceNumber",  base.from_string, fields);
                base.export_element (obj, "PhaseImpedanceData", "x", "x",  base.from_string, fields);
                base.export_attribute (obj, "PhaseImpedanceData", "PhaseImpedance", "PhaseImpedance", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseImpedanceData_collapse" aria-expanded="true" aria-controls="PhaseImpedanceData_collapse" style="margin-left: 10px;">PhaseImpedanceData</a></legend>
                    <div id="PhaseImpedanceData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#sequenceNumber}}<div><b>sequenceNumber</b>: {{sequenceNumber}}</div>{{/sequenceNumber}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#PhaseImpedance}}<div><b>PhaseImpedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PhaseImpedance}}&quot;);}); return false;'>{{PhaseImpedance}}</a></div>{{/PhaseImpedance}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseImpedanceData_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseImpedanceData_collapse" style="margin-left: 10px;">PhaseImpedanceData</a></legend>
                    <div id="{{id}}_PhaseImpedanceData_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sequenceNumber'>sequenceNumber: </label><div class='col-sm-8'><input id='{{id}}_sequenceNumber' class='form-control' type='text'{{#sequenceNumber}} value='{{sequenceNumber}}'{{/sequenceNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhaseImpedance'>PhaseImpedance: </label><div class='col-sm-8'><input id='{{id}}_PhaseImpedance' class='form-control' type='text'{{#PhaseImpedance}} value='{{PhaseImpedance}}'{{/PhaseImpedance}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseImpedanceData" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_sequenceNumber").value; if ("" != temp) obj.sequenceNumber = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_PhaseImpedance").value; if ("" != temp) obj.PhaseImpedance = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhaseImpedance", "1", "1..*", "PerLengthPhaseImpedance", "PhaseImpedanceData"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes a tabular curve for how the phase angle difference and impedance varies with the tap step.
         *
         */
        class PhaseTapChangerTable extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerTable;
                if (null == bucket)
                   cim_data.PhaseTapChangerTable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerTable[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerTable";
                base.parse_attributes (/<cim:PhaseTapChangerTable.PhaseTapChangerTabular\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTabular", sub, context);
                base.parse_attributes (/<cim:PhaseTapChangerTable.PhaseTapChangerTablePoint\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTablePoint", sub, context);
                var bucket = context.parsed.PhaseTapChangerTable;
                if (null == bucket)
                   context.parsed.PhaseTapChangerTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PhaseTapChangerTable", "PhaseTapChangerTabular", "PhaseTapChangerTabular", fields);
                base.export_attributes (obj, "PhaseTapChangerTable", "PhaseTapChangerTablePoint", "PhaseTapChangerTablePoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerTable_collapse" aria-expanded="true" aria-controls="PhaseTapChangerTable_collapse" style="margin-left: 10px;">PhaseTapChangerTable</a></legend>
                    <div id="PhaseTapChangerTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#PhaseTapChangerTabular}}<div><b>PhaseTapChangerTabular</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PhaseTapChangerTabular}}
                    {{#PhaseTapChangerTablePoint}}<div><b>PhaseTapChangerTablePoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PhaseTapChangerTablePoint}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PhaseTapChangerTabular) obj.PhaseTapChangerTabular_string = obj.PhaseTapChangerTabular.join ();
                if (obj.PhaseTapChangerTablePoint) obj.PhaseTapChangerTablePoint_string = obj.PhaseTapChangerTablePoint.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseTapChangerTabular_string;
                delete obj.PhaseTapChangerTablePoint_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerTable_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerTable_collapse" style="margin-left: 10px;">PhaseTapChangerTable</a></legend>
                    <div id="{{id}}_PhaseTapChangerTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "PhaseTapChangerTable" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhaseTapChangerTabular", "0..*", "0..1", "PhaseTapChangerTabular", "PhaseTapChangerTable"],
                            ["PhaseTapChangerTablePoint", "1..*", "1", "PhaseTapChangerTablePoint", "PhaseTapChangerTable"]
                        ]
                    )
                );
            }
        }

        /**
         * Contains equipment beyond a substation belonging to a power transmission line.
         *
         */
        class Line extends Core.EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Line;
                if (null == bucket)
                   cim_data.Line = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Line[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Line";
                base.parse_attribute (/<cim:Line.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);
                var bucket = context.parsed.Line;
                if (null == bucket)
                   context.parsed.Line = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.EquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Line", "Region", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Line_collapse" aria-expanded="true" aria-controls="Line_collapse" style="margin-left: 10px;">Line</a></legend>
                    <div id="Line_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.template.call (this) +
                    `
                    {{#Region}}<div><b>Region</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Region}}&quot;);}); return false;'>{{Region}}</a></div>{{/Region}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Line_collapse" aria-expanded="true" aria-controls="{{id}}_Line_collapse" style="margin-left: 10px;">Line</a></legend>
                    <div id="{{id}}_Line_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Region'>Region: </label><div class='col-sm-8'><input id='{{id}}_Region' class='form-control' type='text'{{#Region}} value='{{Region}}'{{/Region}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Line" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Region").value; if ("" != temp) obj.Region = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Region", "0..1", "0..*", "SubGeographicalRegion", "Lines"]
                        ]
                    )
                );
            }
        }

        /**
         * An assembly of two or more coupled windings that transform electrical power between voltage levels.
         *
         * These windings are bound on a common core and place in the same tank. Transformer tank can be used to model both single-phase and 3-phase transformers.
         *
         */
        class TransformerTank extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerTank;
                if (null == bucket)
                   cim_data.TransformerTank = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerTank[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerTank";
                base.parse_attributes (/<cim:TransformerTank.TransformerTankEnds\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTankEnds", sub, context);
                base.parse_attributes (/<cim:TransformerTank.TransformerObservations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerObservations", sub, context);
                base.parse_attribute (/<cim:TransformerTank.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformer", sub, context);
                var bucket = context.parsed.TransformerTank;
                if (null == bucket)
                   context.parsed.TransformerTank = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransformerTank", "TransformerTankEnds", "TransformerTankEnds", fields);
                base.export_attributes (obj, "TransformerTank", "TransformerObservations", "TransformerObservations", fields);
                base.export_attribute (obj, "TransformerTank", "PowerTransformer", "PowerTransformer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerTank_collapse" aria-expanded="true" aria-controls="TransformerTank_collapse" style="margin-left: 10px;">TransformerTank</a></legend>
                    <div id="TransformerTank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#TransformerTankEnds}}<div><b>TransformerTankEnds</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerTankEnds}}
                    {{#TransformerObservations}}<div><b>TransformerObservations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransformerObservations}}
                    {{#PowerTransformer}}<div><b>PowerTransformer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerTransformer}}&quot;);}); return false;'>{{PowerTransformer}}</a></div>{{/PowerTransformer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TransformerTankEnds) obj.TransformerTankEnds_string = obj.TransformerTankEnds.join ();
                if (obj.TransformerObservations) obj.TransformerObservations_string = obj.TransformerObservations.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerTankEnds_string;
                delete obj.TransformerObservations_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerTank_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerTank_collapse" style="margin-left: 10px;">TransformerTank</a></legend>
                    <div id="{{id}}_TransformerTank_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerTransformer'>PowerTransformer: </label><div class='col-sm-8'><input id='{{id}}_PowerTransformer' class='form-control' type='text'{{#PowerTransformer}} value='{{PowerTransformer}}'{{/PowerTransformer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerTank" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerTransformer").value; if ("" != temp) obj.PowerTransformer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerTankEnds", "1..*", "0..1", "TransformerTankEnd", "TransformerTank"],
                            ["TransformerObservations", "0..*", "0..1", "TransformerObservation", "Transformer"],
                            ["PowerTransformer", "0..1", "0..*", "PowerTransformer", "TransformerTanks"]
                        ]
                    )
                );
            }
        }

        /**
         * A pre-established pattern over time for a tap step.
         *
         */
        class TapSchedule extends LoadModel.SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TapSchedule;
                if (null == bucket)
                   cim_data.TapSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadModel.SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "TapSchedule";
                base.parse_attribute (/<cim:TapSchedule.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context);
                var bucket = context.parsed.TapSchedule;
                if (null == bucket)
                   context.parsed.TapSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadModel.SeasonDayTypeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "TapSchedule", "TapChanger", "TapChanger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapSchedule_collapse" aria-expanded="true" aria-controls="TapSchedule_collapse" style="margin-left: 10px;">TapSchedule</a></legend>
                    <div id="TapSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.template.call (this) +
                    `
                    {{#TapChanger}}<div><b>TapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TapChanger}}&quot;);}); return false;'>{{TapChanger}}</a></div>{{/TapChanger}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_TapSchedule_collapse" style="margin-left: 10px;">TapSchedule</a></legend>
                    <div id="{{id}}_TapSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TapChanger'>TapChanger: </label><div class='col-sm-8'><input id='{{id}}_TapChanger' class='form-control' type='text'{{#TapChanger}} value='{{TapChanger}}'{{/TapChanger}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TapSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TapChanger").value; if ("" != temp) obj.TapChanger = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TapChanger", "1", "0..*", "TapChanger", "TapSchedules"]
                        ]
                    )
                );
            }
        }

        /**
         * A conducting equipment used to represent a connection to ground which is typically used to compensate earth faults..
         *
         * An earth fault compensator device modeled with a single terminal implies a second terminal solidly connected to ground.  If two terminals are modeled, the ground is not assumed and normal connection rules apply.
         *
         */
        class EarthFaultCompensator extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EarthFaultCompensator;
                if (null == bucket)
                   cim_data.EarthFaultCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EarthFaultCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EarthFaultCompensator";
                base.parse_element (/<cim:EarthFaultCompensator.r>([\s\S]*?)<\/cim:EarthFaultCompensator.r>/g, obj, "r", base.to_string, sub, context);
                var bucket = context.parsed.EarthFaultCompensator;
                if (null == bucket)
                   context.parsed.EarthFaultCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EarthFaultCompensator", "r", "r",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EarthFaultCompensator_collapse" aria-expanded="true" aria-controls="EarthFaultCompensator_collapse" style="margin-left: 10px;">EarthFaultCompensator</a></legend>
                    <div id="EarthFaultCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EarthFaultCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_EarthFaultCompensator_collapse" style="margin-left: 10px;">EarthFaultCompensator</a></legend>
                    <div id="{{id}}_EarthFaultCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EarthFaultCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;

                return (obj);
            }
        }

        /**
         * A Clamp is a galvanic connection at a line segment where other equipment is connected.
         *
         * A Clamp does not cut the line segment.
         *
         */
        class Clamp extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Clamp;
                if (null == bucket)
                   cim_data.Clamp = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Clamp[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Clamp";
                base.parse_element (/<cim:Clamp.lengthFromTerminal1>([\s\S]*?)<\/cim:Clamp.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
                base.parse_attribute (/<cim:Clamp.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
                var bucket = context.parsed.Clamp;
                if (null == bucket)
                   context.parsed.Clamp = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "Clamp", "lengthFromTerminal1", "lengthFromTerminal1",  base.from_string, fields);
                base.export_attribute (obj, "Clamp", "ACLineSegment", "ACLineSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Clamp_collapse" aria-expanded="true" aria-controls="Clamp_collapse" style="margin-left: 10px;">Clamp</a></legend>
                    <div id="Clamp_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#lengthFromTerminal1}}<div><b>lengthFromTerminal1</b>: {{lengthFromTerminal1}}</div>{{/lengthFromTerminal1}}
                    {{#ACLineSegment}}<div><b>ACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ACLineSegment}}&quot;);}); return false;'>{{ACLineSegment}}</a></div>{{/ACLineSegment}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Clamp_collapse" aria-expanded="true" aria-controls="{{id}}_Clamp_collapse" style="margin-left: 10px;">Clamp</a></legend>
                    <div id="{{id}}_Clamp_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lengthFromTerminal1'>lengthFromTerminal1: </label><div class='col-sm-8'><input id='{{id}}_lengthFromTerminal1' class='form-control' type='text'{{#lengthFromTerminal1}} value='{{lengthFromTerminal1}}'{{/lengthFromTerminal1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACLineSegment'>ACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_ACLineSegment' class='form-control' type='text'{{#ACLineSegment}} value='{{ACLineSegment}}'{{/ACLineSegment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Clamp" };
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
                            ["ACLineSegment", "1", "0..*", "ACLineSegment", "Clamp"]
                        ]
                    )
                );
            }
        }

        /**
         * A pre-established pattern over time for a controlled variable, e.g., busbar voltage.
         *
         */
        class RegulationSchedule extends LoadModel.SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RegulationSchedule;
                if (null == bucket)
                   cim_data.RegulationSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegulationSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadModel.SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "RegulationSchedule";
                base.parse_attributes (/<cim:RegulationSchedule.VoltageControlZones\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageControlZones", sub, context);
                base.parse_attribute (/<cim:RegulationSchedule.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
                var bucket = context.parsed.RegulationSchedule;
                if (null == bucket)
                   context.parsed.RegulationSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadModel.SeasonDayTypeSchedule.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "RegulationSchedule", "VoltageControlZones", "VoltageControlZones", fields);
                base.export_attribute (obj, "RegulationSchedule", "RegulatingControl", "RegulatingControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegulationSchedule_collapse" aria-expanded="true" aria-controls="RegulationSchedule_collapse" style="margin-left: 10px;">RegulationSchedule</a></legend>
                    <div id="RegulationSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.template.call (this) +
                    `
                    {{#VoltageControlZones}}<div><b>VoltageControlZones</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/VoltageControlZones}}
                    {{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulatingControl}}&quot;);}); return false;'>{{RegulatingControl}}</a></div>{{/RegulatingControl}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.VoltageControlZones) obj.VoltageControlZones_string = obj.VoltageControlZones.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.VoltageControlZones_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegulationSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_RegulationSchedule_collapse" style="margin-left: 10px;">RegulationSchedule</a></legend>
                    <div id="{{id}}_RegulationSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegulatingControl'>RegulatingControl: </label><div class='col-sm-8'><input id='{{id}}_RegulatingControl' class='form-control' type='text'{{#RegulatingControl}} value='{{RegulatingControl}}'{{/RegulatingControl}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RegulationSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RegulatingControl").value; if ("" != temp) obj.RegulatingControl = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VoltageControlZones", "0..*", "0..1", "VoltageControlZone", "RegulationSchedule"],
                            ["RegulatingControl", "1", "0..*", "RegulatingControl", "RegulationSchedule"]
                        ]
                    )
                );
            }
        }

        /**
         * Represents a single wire of an alternating current line segment.
         *
         */
        class ACLineSegmentPhase extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ACLineSegmentPhase;
                if (null == bucket)
                   cim_data.ACLineSegmentPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ACLineSegmentPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ACLineSegmentPhase";
                base.parse_attribute (/<cim:ACLineSegmentPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phase", sub, context);
                base.parse_attribute (/<cim:ACLineSegmentPhase.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
                var bucket = context.parsed.ACLineSegmentPhase;
                if (null == bucket)
                   context.parsed.ACLineSegmentPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ACLineSegmentPhase", "phase", "phase", fields);
                base.export_attribute (obj, "ACLineSegmentPhase", "ACLineSegment", "ACLineSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ACLineSegmentPhase_collapse" aria-expanded="true" aria-controls="ACLineSegmentPhase_collapse" style="margin-left: 10px;">ACLineSegmentPhase</a></legend>
                    <div id="ACLineSegmentPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#phase}}<div><b>phase</b>: {{phase}}</div>{{/phase}}
                    {{#ACLineSegment}}<div><b>ACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ACLineSegment}}&quot;);}); return false;'>{{ACLineSegment}}</a></div>{{/ACLineSegment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SinglePhaseKind = []; if (!obj.phase) obj.SinglePhaseKind.push ({ id: '', selected: true}); for (var property in SinglePhaseKind) obj.SinglePhaseKind.push ({ id: property, selected: obj.phase && obj.phase.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SinglePhaseKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ACLineSegmentPhase_collapse" aria-expanded="true" aria-controls="{{id}}_ACLineSegmentPhase_collapse" style="margin-left: 10px;">ACLineSegmentPhase</a></legend>
                    <div id="{{id}}_ACLineSegmentPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phase'>phase: </label><div class='col-sm-8'><select id='{{id}}_phase' class='form-control custom-select'>{{#SinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACLineSegment'>ACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_ACLineSegment' class='form-control' type='text'{{#ACLineSegment}} value='{{ACLineSegment}}'{{/ACLineSegment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ACLineSegmentPhase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_phase").value; if ("" != temp) { temp = SinglePhaseKind[temp]; if ("undefined" != typeof (temp)) obj.phase = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; }
                temp = document.getElementById (id + "_ACLineSegment").value; if ("" != temp) obj.ACLineSegment = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ACLineSegment", "1", "0..*", "ACLineSegment", "ACLineSegmentPhases"]
                        ]
                    )
                );
            }
        }

        /**
         * A conducting connection point of a power transformer.
         *
         * It corresponds to a physical transformer winding terminal.  In earlier CIM versions, the TransformerWinding class served a similar purpose, but this class is more flexible because it associates to terminal but is not a specialization of ConductingEquipment.
         *
         */
        class TransformerEnd extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerEnd;
                if (null == bucket)
                   cim_data.TransformerEnd = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerEnd[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerEnd";
                base.parse_element (/<cim:TransformerEnd.bmagSat>([\s\S]*?)<\/cim:TransformerEnd.bmagSat>/g, obj, "bmagSat", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEnd.endNumber>([\s\S]*?)<\/cim:TransformerEnd.endNumber>/g, obj, "endNumber", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEnd.grounded>([\s\S]*?)<\/cim:TransformerEnd.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
                base.parse_element (/<cim:TransformerEnd.magBaseU>([\s\S]*?)<\/cim:TransformerEnd.magBaseU>/g, obj, "magBaseU", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEnd.magSatFlux>([\s\S]*?)<\/cim:TransformerEnd.magSatFlux>/g, obj, "magSatFlux", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEnd.rground>([\s\S]*?)<\/cim:TransformerEnd.rground>/g, obj, "rground", base.to_string, sub, context);
                base.parse_element (/<cim:TransformerEnd.xground>([\s\S]*?)<\/cim:TransformerEnd.xground>/g, obj, "xground", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransformerEnd.ToMeshImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToMeshImpedance", sub, context);
                base.parse_attributes (/<cim:TransformerEnd.ToWindingInsulations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ToWindingInsulations", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.CoreAdmittance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CoreAdmittance", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.PhaseTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChanger", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.BaseVoltage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BaseVoltage", sub, context);
                base.parse_attributes (/<cim:TransformerEnd.FromWindingInsulations\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromWindingInsulations", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.RatioTapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChanger", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.StarImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "StarImpedance", sub, context);
                base.parse_attributes (/<cim:TransformerEnd.FromMeshImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FromMeshImpedance", sub, context);
                base.parse_attribute (/<cim:TransformerEnd.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                var bucket = context.parsed.TransformerEnd;
                if (null == bucket)
                   context.parsed.TransformerEnd = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerEnd", "bmagSat", "bmagSat",  base.from_string, fields);
                base.export_element (obj, "TransformerEnd", "endNumber", "endNumber",  base.from_string, fields);
                base.export_element (obj, "TransformerEnd", "grounded", "grounded",  base.from_boolean, fields);
                base.export_element (obj, "TransformerEnd", "magBaseU", "magBaseU",  base.from_string, fields);
                base.export_element (obj, "TransformerEnd", "magSatFlux", "magSatFlux",  base.from_string, fields);
                base.export_element (obj, "TransformerEnd", "rground", "rground",  base.from_string, fields);
                base.export_element (obj, "TransformerEnd", "xground", "xground",  base.from_string, fields);
                base.export_attributes (obj, "TransformerEnd", "ToMeshImpedance", "ToMeshImpedance", fields);
                base.export_attributes (obj, "TransformerEnd", "ToWindingInsulations", "ToWindingInsulations", fields);
                base.export_attribute (obj, "TransformerEnd", "CoreAdmittance", "CoreAdmittance", fields);
                base.export_attribute (obj, "TransformerEnd", "PhaseTapChanger", "PhaseTapChanger", fields);
                base.export_attribute (obj, "TransformerEnd", "BaseVoltage", "BaseVoltage", fields);
                base.export_attributes (obj, "TransformerEnd", "FromWindingInsulations", "FromWindingInsulations", fields);
                base.export_attribute (obj, "TransformerEnd", "RatioTapChanger", "RatioTapChanger", fields);
                base.export_attribute (obj, "TransformerEnd", "StarImpedance", "StarImpedance", fields);
                base.export_attributes (obj, "TransformerEnd", "FromMeshImpedance", "FromMeshImpedance", fields);
                base.export_attribute (obj, "TransformerEnd", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerEnd_collapse" aria-expanded="true" aria-controls="TransformerEnd_collapse" style="margin-left: 10px;">TransformerEnd</a></legend>
                    <div id="TransformerEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#bmagSat}}<div><b>bmagSat</b>: {{bmagSat}}</div>{{/bmagSat}}
                    {{#endNumber}}<div><b>endNumber</b>: {{endNumber}}</div>{{/endNumber}}
                    {{#grounded}}<div><b>grounded</b>: {{grounded}}</div>{{/grounded}}
                    {{#magBaseU}}<div><b>magBaseU</b>: {{magBaseU}}</div>{{/magBaseU}}
                    {{#magSatFlux}}<div><b>magSatFlux</b>: {{magSatFlux}}</div>{{/magSatFlux}}
                    {{#rground}}<div><b>rground</b>: {{rground}}</div>{{/rground}}
                    {{#xground}}<div><b>xground</b>: {{xground}}</div>{{/xground}}
                    {{#ToMeshImpedance}}<div><b>ToMeshImpedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ToMeshImpedance}}
                    {{#ToWindingInsulations}}<div><b>ToWindingInsulations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ToWindingInsulations}}
                    {{#CoreAdmittance}}<div><b>CoreAdmittance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CoreAdmittance}}&quot;);}); return false;'>{{CoreAdmittance}}</a></div>{{/CoreAdmittance}}
                    {{#PhaseTapChanger}}<div><b>PhaseTapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PhaseTapChanger}}&quot;);}); return false;'>{{PhaseTapChanger}}</a></div>{{/PhaseTapChanger}}
                    {{#BaseVoltage}}<div><b>BaseVoltage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BaseVoltage}}&quot;);}); return false;'>{{BaseVoltage}}</a></div>{{/BaseVoltage}}
                    {{#FromWindingInsulations}}<div><b>FromWindingInsulations</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/FromWindingInsulations}}
                    {{#RatioTapChanger}}<div><b>RatioTapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatioTapChanger}}&quot;);}); return false;'>{{RatioTapChanger}}</a></div>{{/RatioTapChanger}}
                    {{#StarImpedance}}<div><b>StarImpedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{StarImpedance}}&quot;);}); return false;'>{{StarImpedance}}</a></div>{{/StarImpedance}}
                    {{#FromMeshImpedance}}<div><b>FromMeshImpedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/FromMeshImpedance}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ToMeshImpedance) obj.ToMeshImpedance_string = obj.ToMeshImpedance.join ();
                if (obj.ToWindingInsulations) obj.ToWindingInsulations_string = obj.ToWindingInsulations.join ();
                if (obj.FromWindingInsulations) obj.FromWindingInsulations_string = obj.FromWindingInsulations.join ();
                if (obj.FromMeshImpedance) obj.FromMeshImpedance_string = obj.FromMeshImpedance.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ToMeshImpedance_string;
                delete obj.ToWindingInsulations_string;
                delete obj.FromWindingInsulations_string;
                delete obj.FromMeshImpedance_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerEnd_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerEnd_collapse" style="margin-left: 10px;">TransformerEnd</a></legend>
                    <div id="{{id}}_TransformerEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bmagSat'>bmagSat: </label><div class='col-sm-8'><input id='{{id}}_bmagSat' class='form-control' type='text'{{#bmagSat}} value='{{bmagSat}}'{{/bmagSat}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_endNumber'>endNumber: </label><div class='col-sm-8'><input id='{{id}}_endNumber' class='form-control' type='text'{{#endNumber}} value='{{endNumber}}'{{/endNumber}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_grounded'>grounded: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_grounded' class='form-check-input' type='checkbox'{{#grounded}} checked{{/grounded}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_magBaseU'>magBaseU: </label><div class='col-sm-8'><input id='{{id}}_magBaseU' class='form-control' type='text'{{#magBaseU}} value='{{magBaseU}}'{{/magBaseU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_magSatFlux'>magSatFlux: </label><div class='col-sm-8'><input id='{{id}}_magSatFlux' class='form-control' type='text'{{#magSatFlux}} value='{{magSatFlux}}'{{/magSatFlux}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rground'>rground: </label><div class='col-sm-8'><input id='{{id}}_rground' class='form-control' type='text'{{#rground}} value='{{rground}}'{{/rground}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xground'>xground: </label><div class='col-sm-8'><input id='{{id}}_xground' class='form-control' type='text'{{#xground}} value='{{xground}}'{{/xground}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ToMeshImpedance'>ToMeshImpedance: </label><div class='col-sm-8'><input id='{{id}}_ToMeshImpedance' class='form-control' type='text'{{#ToMeshImpedance}} value='{{ToMeshImpedance_string}}'{{/ToMeshImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CoreAdmittance'>CoreAdmittance: </label><div class='col-sm-8'><input id='{{id}}_CoreAdmittance' class='form-control' type='text'{{#CoreAdmittance}} value='{{CoreAdmittance}}'{{/CoreAdmittance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhaseTapChanger'>PhaseTapChanger: </label><div class='col-sm-8'><input id='{{id}}_PhaseTapChanger' class='form-control' type='text'{{#PhaseTapChanger}} value='{{PhaseTapChanger}}'{{/PhaseTapChanger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BaseVoltage'>BaseVoltage: </label><div class='col-sm-8'><input id='{{id}}_BaseVoltage' class='form-control' type='text'{{#BaseVoltage}} value='{{BaseVoltage}}'{{/BaseVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RatioTapChanger'>RatioTapChanger: </label><div class='col-sm-8'><input id='{{id}}_RatioTapChanger' class='form-control' type='text'{{#RatioTapChanger}} value='{{RatioTapChanger}}'{{/RatioTapChanger}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_StarImpedance'>StarImpedance: </label><div class='col-sm-8'><input id='{{id}}_StarImpedance' class='form-control' type='text'{{#StarImpedance}} value='{{StarImpedance}}'{{/StarImpedance}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerEnd" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bmagSat").value; if ("" != temp) obj.bmagSat = temp;
                temp = document.getElementById (id + "_endNumber").value; if ("" != temp) obj.endNumber = temp;
                temp = document.getElementById (id + "_grounded").checked; if (temp) obj.grounded = true;
                temp = document.getElementById (id + "_magBaseU").value; if ("" != temp) obj.magBaseU = temp;
                temp = document.getElementById (id + "_magSatFlux").value; if ("" != temp) obj.magSatFlux = temp;
                temp = document.getElementById (id + "_rground").value; if ("" != temp) obj.rground = temp;
                temp = document.getElementById (id + "_xground").value; if ("" != temp) obj.xground = temp;
                temp = document.getElementById (id + "_ToMeshImpedance").value; if ("" != temp) obj.ToMeshImpedance = temp.split (",");
                temp = document.getElementById (id + "_CoreAdmittance").value; if ("" != temp) obj.CoreAdmittance = temp;
                temp = document.getElementById (id + "_PhaseTapChanger").value; if ("" != temp) obj.PhaseTapChanger = temp;
                temp = document.getElementById (id + "_BaseVoltage").value; if ("" != temp) obj.BaseVoltage = temp;
                temp = document.getElementById (id + "_RatioTapChanger").value; if ("" != temp) obj.RatioTapChanger = temp;
                temp = document.getElementById (id + "_StarImpedance").value; if ("" != temp) obj.StarImpedance = temp;
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ToMeshImpedance", "0..*", "1..*", "TransformerMeshImpedance", "ToTransformerEnd"],
                            ["ToWindingInsulations", "0..*", "1", "WindingInsulation", "ToWinding"],
                            ["CoreAdmittance", "0..1", "0..*", "TransformerCoreAdmittance", "TransformerEnd"],
                            ["PhaseTapChanger", "0..1", "1", "PhaseTapChanger", "TransformerEnd"],
                            ["BaseVoltage", "0..1", "0..*", "BaseVoltage", "TransformerEnds"],
                            ["FromWindingInsulations", "0..*", "1", "WindingInsulation", "FromWinding"],
                            ["RatioTapChanger", "0..1", "1", "RatioTapChanger", "TransformerEnd"],
                            ["StarImpedance", "0..1", "0..*", "TransformerStarImpedance", "TransformerEnd"],
                            ["FromMeshImpedance", "0..*", "1", "TransformerMeshImpedance", "FromTransformerEnd"],
                            ["Terminal", "0..1", "0..*", "Terminal", "TransformerEnd"]
                        ]
                    )
                );
            }
        }

        /**
         * A schedule of switch positions.
         *
         * If RegularTimePoint.value1 is 0, the switch is open.  If 1, the switch is closed.
         *
         */
        class SwitchSchedule extends LoadModel.SeasonDayTypeSchedule
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchSchedule;
                if (null == bucket)
                   cim_data.SwitchSchedule = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchSchedule[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = LoadModel.SeasonDayTypeSchedule.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchSchedule";
                base.parse_attribute (/<cim:SwitchSchedule.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switch", sub, context);
                var bucket = context.parsed.SwitchSchedule;
                if (null == bucket)
                   context.parsed.SwitchSchedule = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = LoadModel.SeasonDayTypeSchedule.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SwitchSchedule", "Switch", "Switch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchSchedule_collapse" aria-expanded="true" aria-controls="SwitchSchedule_collapse" style="margin-left: 10px;">SwitchSchedule</a></legend>
                    <div id="SwitchSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.template.call (this) +
                    `
                    {{#Switch}}<div><b>Switch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Switch}}&quot;);}); return false;'>{{Switch}}</a></div>{{/Switch}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchSchedule_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchSchedule_collapse" style="margin-left: 10px;">SwitchSchedule</a></legend>
                    <div id="{{id}}_SwitchSchedule_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + LoadModel.SeasonDayTypeSchedule.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Switch'>Switch: </label><div class='col-sm-8'><input id='{{id}}_Switch' class='form-control' type='text'{{#Switch}} value='{{Switch}}'{{/Switch}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchSchedule" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Switch").value; if ("" != temp) obj.Switch = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Switch", "1", "0..*", "Switch", "SwitchSchedules"]
                        ]
                    )
                );
            }
        }

        /**
         * Specifies a set of equipment that works together to control a power system quantity such as voltage or flow.
         *
         * Remote bus voltage control is possible by specifying the controlled terminal located at some place remote from the controlling equipment.
         *
         */
        class RegulatingControl extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RegulatingControl;
                if (null == bucket)
                   cim_data.RegulatingControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegulatingControl[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "RegulatingControl";
                base.parse_element (/<cim:RegulatingControl.discrete>([\s\S]*?)<\/cim:RegulatingControl.discrete>/g, obj, "discrete", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RegulatingControl.mode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "mode", sub, context);
                base.parse_element (/<cim:RegulatingControl.monitoredPhase>([\s\S]*?)<\/cim:RegulatingControl.monitoredPhase>/g, obj, "monitoredPhase", base.to_string, sub, context);
                base.parse_element (/<cim:RegulatingControl.targetDeadband>([\s\S]*?)<\/cim:RegulatingControl.targetDeadband>/g, obj, "targetDeadband", base.to_float, sub, context);
                base.parse_element (/<cim:RegulatingControl.targetValue>([\s\S]*?)<\/cim:RegulatingControl.targetValue>/g, obj, "targetValue", base.to_float, sub, context);
                base.parse_element (/<cim:RegulatingControl.targetValueUnitMultiplier>([\s\S]*?)<\/cim:RegulatingControl.targetValueUnitMultiplier>/g, obj, "targetValueUnitMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:RegulatingControl.enabled>([\s\S]*?)<\/cim:RegulatingControl.enabled>/g, obj, "enabled", base.to_boolean, sub, context);
                base.parse_attributes (/<cim:RegulatingControl.ProtectiveActionRegulation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveActionRegulation", sub, context);
                base.parse_attributes (/<cim:RegulatingControl.RegulationSchedule\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulationSchedule", sub, context);
                base.parse_attributes (/<cim:RegulatingControl.RegulatingCondEq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingCondEq", sub, context);
                base.parse_attribute (/<cim:RegulatingControl.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                var bucket = context.parsed.RegulatingControl;
                if (null == bucket)
                   context.parsed.RegulatingControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegulatingControl", "discrete", "discrete",  base.from_boolean, fields);
                base.export_attribute (obj, "RegulatingControl", "mode", "mode", fields);
                base.export_element (obj, "RegulatingControl", "monitoredPhase", "monitoredPhase",  base.from_string, fields);
                base.export_element (obj, "RegulatingControl", "targetDeadband", "targetDeadband",  base.from_float, fields);
                base.export_element (obj, "RegulatingControl", "targetValue", "targetValue",  base.from_float, fields);
                base.export_element (obj, "RegulatingControl", "targetValueUnitMultiplier", "targetValueUnitMultiplier",  base.from_string, fields);
                base.export_element (obj, "RegulatingControl", "enabled", "enabled",  base.from_boolean, fields);
                base.export_attributes (obj, "RegulatingControl", "ProtectiveActionRegulation", "ProtectiveActionRegulation", fields);
                base.export_attributes (obj, "RegulatingControl", "RegulationSchedule", "RegulationSchedule", fields);
                base.export_attributes (obj, "RegulatingControl", "RegulatingCondEq", "RegulatingCondEq", fields);
                base.export_attribute (obj, "RegulatingControl", "Terminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegulatingControl_collapse" aria-expanded="true" aria-controls="RegulatingControl_collapse" style="margin-left: 10px;">RegulatingControl</a></legend>
                    <div id="RegulatingControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#discrete}}<div><b>discrete</b>: {{discrete}}</div>{{/discrete}}
                    {{#mode}}<div><b>mode</b>: {{mode}}</div>{{/mode}}
                    {{#monitoredPhase}}<div><b>monitoredPhase</b>: {{monitoredPhase}}</div>{{/monitoredPhase}}
                    {{#targetDeadband}}<div><b>targetDeadband</b>: {{targetDeadband}}</div>{{/targetDeadband}}
                    {{#targetValue}}<div><b>targetValue</b>: {{targetValue}}</div>{{/targetValue}}
                    {{#targetValueUnitMultiplier}}<div><b>targetValueUnitMultiplier</b>: {{targetValueUnitMultiplier}}</div>{{/targetValueUnitMultiplier}}
                    {{#enabled}}<div><b>enabled</b>: {{enabled}}</div>{{/enabled}}
                    {{#ProtectiveActionRegulation}}<div><b>ProtectiveActionRegulation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProtectiveActionRegulation}}
                    {{#RegulationSchedule}}<div><b>RegulationSchedule</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RegulationSchedule}}
                    {{#RegulatingCondEq}}<div><b>RegulatingCondEq</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RegulatingCondEq}}
                    {{#Terminal}}<div><b>Terminal</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Terminal}}&quot;);}); return false;'>{{Terminal}}</a></div>{{/Terminal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.RegulatingControlModeKind = []; if (!obj.mode) obj.RegulatingControlModeKind.push ({ id: '', selected: true}); for (var property in RegulatingControlModeKind) obj.RegulatingControlModeKind.push ({ id: property, selected: obj.mode && obj.mode.endsWith ('.' + property)});
                if (obj.ProtectiveActionRegulation) obj.ProtectiveActionRegulation_string = obj.ProtectiveActionRegulation.join ();
                if (obj.RegulationSchedule) obj.RegulationSchedule_string = obj.RegulationSchedule.join ();
                if (obj.RegulatingCondEq) obj.RegulatingCondEq_string = obj.RegulatingCondEq.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RegulatingControlModeKind;
                delete obj.ProtectiveActionRegulation_string;
                delete obj.RegulationSchedule_string;
                delete obj.RegulatingCondEq_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegulatingControl_collapse" aria-expanded="true" aria-controls="{{id}}_RegulatingControl_collapse" style="margin-left: 10px;">RegulatingControl</a></legend>
                    <div id="{{id}}_RegulatingControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_discrete'>discrete: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_discrete' class='form-check-input' type='checkbox'{{#discrete}} checked{{/discrete}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mode'>mode: </label><div class='col-sm-8'><select id='{{id}}_mode' class='form-control custom-select'>{{#RegulatingControlModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/RegulatingControlModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_monitoredPhase'>monitoredPhase: </label><div class='col-sm-8'><input id='{{id}}_monitoredPhase' class='form-control' type='text'{{#monitoredPhase}} value='{{monitoredPhase}}'{{/monitoredPhase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetDeadband'>targetDeadband: </label><div class='col-sm-8'><input id='{{id}}_targetDeadband' class='form-control' type='text'{{#targetDeadband}} value='{{targetDeadband}}'{{/targetDeadband}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetValue'>targetValue: </label><div class='col-sm-8'><input id='{{id}}_targetValue' class='form-control' type='text'{{#targetValue}} value='{{targetValue}}'{{/targetValue}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_targetValueUnitMultiplier'>targetValueUnitMultiplier: </label><div class='col-sm-8'><input id='{{id}}_targetValueUnitMultiplier' class='form-control' type='text'{{#targetValueUnitMultiplier}} value='{{targetValueUnitMultiplier}}'{{/targetValueUnitMultiplier}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_enabled'>enabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_enabled' class='form-check-input' type='checkbox'{{#enabled}} checked{{/enabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Terminal'>Terminal: </label><div class='col-sm-8'><input id='{{id}}_Terminal' class='form-control' type='text'{{#Terminal}} value='{{Terminal}}'{{/Terminal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RegulatingControl" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_discrete").checked; if (temp) obj.discrete = true;
                temp = document.getElementById (id + "_mode").value; if ("" != temp) { temp = RegulatingControlModeKind[temp]; if ("undefined" != typeof (temp)) obj.mode = "http://iec.ch/TC57/2013/CIM-schema-cim16#RegulatingControlModeKind." + temp; }
                temp = document.getElementById (id + "_monitoredPhase").value; if ("" != temp) obj.monitoredPhase = temp;
                temp = document.getElementById (id + "_targetDeadband").value; if ("" != temp) obj.targetDeadband = temp;
                temp = document.getElementById (id + "_targetValue").value; if ("" != temp) obj.targetValue = temp;
                temp = document.getElementById (id + "_targetValueUnitMultiplier").value; if ("" != temp) obj.targetValueUnitMultiplier = temp;
                temp = document.getElementById (id + "_enabled").checked; if (temp) obj.enabled = true;
                temp = document.getElementById (id + "_Terminal").value; if ("" != temp) obj.Terminal = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProtectiveActionRegulation", "0..*", "1", "ProtectiveActionRegulation", "RegulatingControl"],
                            ["RegulationSchedule", "0..*", "1", "RegulationSchedule", "RegulatingControl"],
                            ["RegulatingCondEq", "0..*", "0..1", "RegulatingCondEq", "RegulatingControl"],
                            ["Terminal", "0..1", "0..*", "Terminal", "RegulatingControl"]
                        ]
                    )
                );
            }
        }

        /**
         * Mechanism for changing transformer winding tap positions.
         *
         */
        class TapChanger extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TapChanger;
                if (null == bucket)
                   cim_data.TapChanger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapChanger[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "TapChanger";
                base.parse_element (/<cim:TapChanger.highStep>([\s\S]*?)<\/cim:TapChanger.highStep>/g, obj, "highStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.initialDelay>([\s\S]*?)<\/cim:TapChanger.initialDelay>/g, obj, "initialDelay", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.lowStep>([\s\S]*?)<\/cim:TapChanger.lowStep>/g, obj, "lowStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.ltcFlag>([\s\S]*?)<\/cim:TapChanger.ltcFlag>/g, obj, "ltcFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChanger.neutralStep>([\s\S]*?)<\/cim:TapChanger.neutralStep>/g, obj, "neutralStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.neutralU>([\s\S]*?)<\/cim:TapChanger.neutralU>/g, obj, "neutralU", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.normalStep>([\s\S]*?)<\/cim:TapChanger.normalStep>/g, obj, "normalStep", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.subsequentDelay>([\s\S]*?)<\/cim:TapChanger.subsequentDelay>/g, obj, "subsequentDelay", base.to_string, sub, context);
                base.parse_element (/<cim:TapChanger.controlEnabled>([\s\S]*?)<\/cim:TapChanger.controlEnabled>/g, obj, "controlEnabled", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChanger.step>([\s\S]*?)<\/cim:TapChanger.step>/g, obj, "step", base.to_float, sub, context);
                base.parse_attributes (/<cim:TapChanger.TapSchedules\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapSchedules", sub, context);
                base.parse_attribute (/<cim:TapChanger.TapChangerControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChangerControl", sub, context);
                base.parse_attribute (/<cim:TapChanger.SvTapStep\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvTapStep", sub, context);
                var bucket = context.parsed.TapChanger;
                if (null == bucket)
                   context.parsed.TapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "TapChanger", "highStep", "highStep",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "initialDelay", "initialDelay",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "lowStep", "lowStep",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "ltcFlag", "ltcFlag",  base.from_boolean, fields);
                base.export_element (obj, "TapChanger", "neutralStep", "neutralStep",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "neutralU", "neutralU",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "normalStep", "normalStep",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "subsequentDelay", "subsequentDelay",  base.from_string, fields);
                base.export_element (obj, "TapChanger", "controlEnabled", "controlEnabled",  base.from_boolean, fields);
                base.export_element (obj, "TapChanger", "step", "step",  base.from_float, fields);
                base.export_attributes (obj, "TapChanger", "TapSchedules", "TapSchedules", fields);
                base.export_attribute (obj, "TapChanger", "TapChangerControl", "TapChangerControl", fields);
                base.export_attribute (obj, "TapChanger", "SvTapStep", "SvTapStep", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapChanger_collapse" aria-expanded="true" aria-controls="TapChanger_collapse" style="margin-left: 10px;">TapChanger</a></legend>
                    <div id="TapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#highStep}}<div><b>highStep</b>: {{highStep}}</div>{{/highStep}}
                    {{#initialDelay}}<div><b>initialDelay</b>: {{initialDelay}}</div>{{/initialDelay}}
                    {{#lowStep}}<div><b>lowStep</b>: {{lowStep}}</div>{{/lowStep}}
                    {{#ltcFlag}}<div><b>ltcFlag</b>: {{ltcFlag}}</div>{{/ltcFlag}}
                    {{#neutralStep}}<div><b>neutralStep</b>: {{neutralStep}}</div>{{/neutralStep}}
                    {{#neutralU}}<div><b>neutralU</b>: {{neutralU}}</div>{{/neutralU}}
                    {{#normalStep}}<div><b>normalStep</b>: {{normalStep}}</div>{{/normalStep}}
                    {{#subsequentDelay}}<div><b>subsequentDelay</b>: {{subsequentDelay}}</div>{{/subsequentDelay}}
                    {{#controlEnabled}}<div><b>controlEnabled</b>: {{controlEnabled}}</div>{{/controlEnabled}}
                    {{#step}}<div><b>step</b>: {{step}}</div>{{/step}}
                    {{#TapSchedules}}<div><b>TapSchedules</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TapSchedules}}
                    {{#TapChangerControl}}<div><b>TapChangerControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TapChangerControl}}&quot;);}); return false;'>{{TapChangerControl}}</a></div>{{/TapChangerControl}}
                    {{#SvTapStep}}<div><b>SvTapStep</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvTapStep}}&quot;);}); return false;'>{{SvTapStep}}</a></div>{{/SvTapStep}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TapSchedules) obj.TapSchedules_string = obj.TapSchedules.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TapSchedules_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapChanger_collapse" aria-expanded="true" aria-controls="{{id}}_TapChanger_collapse" style="margin-left: 10px;">TapChanger</a></legend>
                    <div id="{{id}}_TapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highStep'>highStep: </label><div class='col-sm-8'><input id='{{id}}_highStep' class='form-control' type='text'{{#highStep}} value='{{highStep}}'{{/highStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_initialDelay'>initialDelay: </label><div class='col-sm-8'><input id='{{id}}_initialDelay' class='form-control' type='text'{{#initialDelay}} value='{{initialDelay}}'{{/initialDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowStep'>lowStep: </label><div class='col-sm-8'><input id='{{id}}_lowStep' class='form-control' type='text'{{#lowStep}} value='{{lowStep}}'{{/lowStep}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ltcFlag'>ltcFlag: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ltcFlag' class='form-check-input' type='checkbox'{{#ltcFlag}} checked{{/ltcFlag}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralStep'>neutralStep: </label><div class='col-sm-8'><input id='{{id}}_neutralStep' class='form-control' type='text'{{#neutralStep}} value='{{neutralStep}}'{{/neutralStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_neutralU'>neutralU: </label><div class='col-sm-8'><input id='{{id}}_neutralU' class='form-control' type='text'{{#neutralU}} value='{{neutralU}}'{{/neutralU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalStep'>normalStep: </label><div class='col-sm-8'><input id='{{id}}_normalStep' class='form-control' type='text'{{#normalStep}} value='{{normalStep}}'{{/normalStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subsequentDelay'>subsequentDelay: </label><div class='col-sm-8'><input id='{{id}}_subsequentDelay' class='form-control' type='text'{{#subsequentDelay}} value='{{subsequentDelay}}'{{/subsequentDelay}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_controlEnabled'>controlEnabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_controlEnabled' class='form-check-input' type='checkbox'{{#controlEnabled}} checked{{/controlEnabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_step'>step: </label><div class='col-sm-8'><input id='{{id}}_step' class='form-control' type='text'{{#step}} value='{{step}}'{{/step}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TapChangerControl'>TapChangerControl: </label><div class='col-sm-8'><input id='{{id}}_TapChangerControl' class='form-control' type='text'{{#TapChangerControl}} value='{{TapChangerControl}}'{{/TapChangerControl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SvTapStep'>SvTapStep: </label><div class='col-sm-8'><input id='{{id}}_SvTapStep' class='form-control' type='text'{{#SvTapStep}} value='{{SvTapStep}}'{{/SvTapStep}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TapChanger" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_highStep").value; if ("" != temp) obj.highStep = temp;
                temp = document.getElementById (id + "_initialDelay").value; if ("" != temp) obj.initialDelay = temp;
                temp = document.getElementById (id + "_lowStep").value; if ("" != temp) obj.lowStep = temp;
                temp = document.getElementById (id + "_ltcFlag").checked; if (temp) obj.ltcFlag = true;
                temp = document.getElementById (id + "_neutralStep").value; if ("" != temp) obj.neutralStep = temp;
                temp = document.getElementById (id + "_neutralU").value; if ("" != temp) obj.neutralU = temp;
                temp = document.getElementById (id + "_normalStep").value; if ("" != temp) obj.normalStep = temp;
                temp = document.getElementById (id + "_subsequentDelay").value; if ("" != temp) obj.subsequentDelay = temp;
                temp = document.getElementById (id + "_controlEnabled").checked; if (temp) obj.controlEnabled = true;
                temp = document.getElementById (id + "_step").value; if ("" != temp) obj.step = temp;
                temp = document.getElementById (id + "_TapChangerControl").value; if ("" != temp) obj.TapChangerControl = temp;
                temp = document.getElementById (id + "_SvTapStep").value; if ("" != temp) obj.SvTapStep = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TapSchedules", "0..*", "1", "TapSchedule", "TapChanger"],
                            ["TapChangerControl", "0..1", "0..*", "TapChangerControl", "TapChanger"],
                            ["SvTapStep", "0..1", "1", "SvTapStep", "TapChanger"]
                        ]
                    )
                );
            }
        }

        /**
         * A generic equivalent for an energy supplier on a transmission or distribution voltage level.
         *
         */
        class EnergySource extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.EnergySource;
                if (null == bucket)
                   cim_data.EnergySource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.EnergySource[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "EnergySource";
                base.parse_element (/<cim:EnergySource.activePower>([\s\S]*?)<\/cim:EnergySource.activePower>/g, obj, "activePower", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.nominalVoltage>([\s\S]*?)<\/cim:EnergySource.nominalVoltage>/g, obj, "nominalVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.r>([\s\S]*?)<\/cim:EnergySource.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.r0>([\s\S]*?)<\/cim:EnergySource.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.rn>([\s\S]*?)<\/cim:EnergySource.rn>/g, obj, "rn", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.voltageAngle>([\s\S]*?)<\/cim:EnergySource.voltageAngle>/g, obj, "voltageAngle", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.voltageMagnitude>([\s\S]*?)<\/cim:EnergySource.voltageMagnitude>/g, obj, "voltageMagnitude", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.x>([\s\S]*?)<\/cim:EnergySource.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.x0>([\s\S]*?)<\/cim:EnergySource.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.xn>([\s\S]*?)<\/cim:EnergySource.xn>/g, obj, "xn", base.to_string, sub, context);
                base.parse_element (/<cim:EnergySource.reactivePower>([\s\S]*?)<\/cim:EnergySource.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
                base.parse_attribute (/<cim:EnergySource.WindTurbineType3or4Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4Dynamics", sub, context);
                base.parse_attribute (/<cim:EnergySource.EnergySourceAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySourceAction", sub, context);
                base.parse_attribute (/<cim:EnergySource.EnergySchedulingType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySchedulingType", sub, context);
                var bucket = context.parsed.EnergySource;
                if (null == bucket)
                   context.parsed.EnergySource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "EnergySource", "activePower", "activePower",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "nominalVoltage", "nominalVoltage",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "r", "r",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "rn", "rn",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "voltageAngle", "voltageAngle",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "voltageMagnitude", "voltageMagnitude",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "x", "x",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "x0", "x0",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "xn", "xn",  base.from_string, fields);
                base.export_element (obj, "EnergySource", "reactivePower", "reactivePower",  base.from_string, fields);
                base.export_attribute (obj, "EnergySource", "WindTurbineType3or4Dynamics", "WindTurbineType3or4Dynamics", fields);
                base.export_attribute (obj, "EnergySource", "EnergySourceAction", "EnergySourceAction", fields);
                base.export_attribute (obj, "EnergySource", "EnergySchedulingType", "EnergySchedulingType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#EnergySource_collapse" aria-expanded="true" aria-controls="EnergySource_collapse" style="margin-left: 10px;">EnergySource</a></legend>
                    <div id="EnergySource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#activePower}}<div><b>activePower</b>: {{activePower}}</div>{{/activePower}}
                    {{#nominalVoltage}}<div><b>nominalVoltage</b>: {{nominalVoltage}}</div>{{/nominalVoltage}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#rn}}<div><b>rn</b>: {{rn}}</div>{{/rn}}
                    {{#voltageAngle}}<div><b>voltageAngle</b>: {{voltageAngle}}</div>{{/voltageAngle}}
                    {{#voltageMagnitude}}<div><b>voltageMagnitude</b>: {{voltageMagnitude}}</div>{{/voltageMagnitude}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#xn}}<div><b>xn</b>: {{xn}}</div>{{/xn}}
                    {{#reactivePower}}<div><b>reactivePower</b>: {{reactivePower}}</div>{{/reactivePower}}
                    {{#WindTurbineType3or4Dynamics}}<div><b>WindTurbineType3or4Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{WindTurbineType3or4Dynamics}}&quot;);}); return false;'>{{WindTurbineType3or4Dynamics}}</a></div>{{/WindTurbineType3or4Dynamics}}
                    {{#EnergySourceAction}}<div><b>EnergySourceAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergySourceAction}}&quot;);}); return false;'>{{EnergySourceAction}}</a></div>{{/EnergySourceAction}}
                    {{#EnergySchedulingType}}<div><b>EnergySchedulingType</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{EnergySchedulingType}}&quot;);}); return false;'>{{EnergySchedulingType}}</a></div>{{/EnergySchedulingType}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_EnergySource_collapse" aria-expanded="true" aria-controls="{{id}}_EnergySource_collapse" style="margin-left: 10px;">EnergySource</a></legend>
                    <div id="{{id}}_EnergySource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_activePower'>activePower: </label><div class='col-sm-8'><input id='{{id}}_activePower' class='form-control' type='text'{{#activePower}} value='{{activePower}}'{{/activePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalVoltage'>nominalVoltage: </label><div class='col-sm-8'><input id='{{id}}_nominalVoltage' class='form-control' type='text'{{#nominalVoltage}} value='{{nominalVoltage}}'{{/nominalVoltage}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rn'>rn: </label><div class='col-sm-8'><input id='{{id}}_rn' class='form-control' type='text'{{#rn}} value='{{rn}}'{{/rn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageAngle'>voltageAngle: </label><div class='col-sm-8'><input id='{{id}}_voltageAngle' class='form-control' type='text'{{#voltageAngle}} value='{{voltageAngle}}'{{/voltageAngle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageMagnitude'>voltageMagnitude: </label><div class='col-sm-8'><input id='{{id}}_voltageMagnitude' class='form-control' type='text'{{#voltageMagnitude}} value='{{voltageMagnitude}}'{{/voltageMagnitude}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xn'>xn: </label><div class='col-sm-8'><input id='{{id}}_xn' class='form-control' type='text'{{#xn}} value='{{xn}}'{{/xn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reactivePower'>reactivePower: </label><div class='col-sm-8'><input id='{{id}}_reactivePower' class='form-control' type='text'{{#reactivePower}} value='{{reactivePower}}'{{/reactivePower}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_WindTurbineType3or4Dynamics'>WindTurbineType3or4Dynamics: </label><div class='col-sm-8'><input id='{{id}}_WindTurbineType3or4Dynamics' class='form-control' type='text'{{#WindTurbineType3or4Dynamics}} value='{{WindTurbineType3or4Dynamics}}'{{/WindTurbineType3or4Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergySourceAction'>EnergySourceAction: </label><div class='col-sm-8'><input id='{{id}}_EnergySourceAction' class='form-control' type='text'{{#EnergySourceAction}} value='{{EnergySourceAction}}'{{/EnergySourceAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_EnergySchedulingType'>EnergySchedulingType: </label><div class='col-sm-8'><input id='{{id}}_EnergySchedulingType' class='form-control' type='text'{{#EnergySchedulingType}} value='{{EnergySchedulingType}}'{{/EnergySchedulingType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "EnergySource" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_activePower").value; if ("" != temp) obj.activePower = temp;
                temp = document.getElementById (id + "_nominalVoltage").value; if ("" != temp) obj.nominalVoltage = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_rn").value; if ("" != temp) obj.rn = temp;
                temp = document.getElementById (id + "_voltageAngle").value; if ("" != temp) obj.voltageAngle = temp;
                temp = document.getElementById (id + "_voltageMagnitude").value; if ("" != temp) obj.voltageMagnitude = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_xn").value; if ("" != temp) obj.xn = temp;
                temp = document.getElementById (id + "_reactivePower").value; if ("" != temp) obj.reactivePower = temp;
                temp = document.getElementById (id + "_WindTurbineType3or4Dynamics").value; if ("" != temp) obj.WindTurbineType3or4Dynamics = temp;
                temp = document.getElementById (id + "_EnergySourceAction").value; if ("" != temp) obj.EnergySourceAction = temp;
                temp = document.getElementById (id + "_EnergySchedulingType").value; if ("" != temp) obj.EnergySchedulingType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["WindTurbineType3or4Dynamics", "0..1", "1", "WindTurbineType3or4Dynamics", "EnergySource"],
                            ["EnergySourceAction", "0..1", "0..1", "EnergySourceAction", "EnergySource"],
                            ["EnergySchedulingType", "0..1", "0..*", "EnergySchedulingType", "EnergySource"]
                        ]
                    )
                );
            }
        }

        /**
         * Single phase of a multi-phase shunt compensator when its attributes might be different per phase.
         *
         */
        class ShuntCompensatorPhase extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ShuntCompensatorPhase;
                if (null == bucket)
                   cim_data.ShuntCompensatorPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShuntCompensatorPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorPhase";
                base.parse_element (/<cim:ShuntCompensatorPhase.maximumSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.maximumSections>/g, obj, "maximumSections", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorPhase.normalSections>([\s\S]*?)<\/cim:ShuntCompensatorPhase.normalSections>/g, obj, "normalSections", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorPhase.phase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phase", sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorPhase.ShuntCompensator\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensator", sub, context);
                var bucket = context.parsed.ShuntCompensatorPhase;
                if (null == bucket)
                   context.parsed.ShuntCompensatorPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShuntCompensatorPhase", "maximumSections", "maximumSections",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorPhase", "normalSections", "normalSections",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorPhase", "phase", "phase", fields);
                base.export_attribute (obj, "ShuntCompensatorPhase", "ShuntCompensator", "ShuntCompensator", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="ShuntCompensatorPhase_collapse" style="margin-left: 10px;">ShuntCompensatorPhase</a></legend>
                    <div id="ShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#maximumSections}}<div><b>maximumSections</b>: {{maximumSections}}</div>{{/maximumSections}}
                    {{#normalSections}}<div><b>normalSections</b>: {{normalSections}}</div>{{/normalSections}}
                    {{#phase}}<div><b>phase</b>: {{phase}}</div>{{/phase}}
                    {{#ShuntCompensator}}<div><b>ShuntCompensator</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ShuntCompensator}}&quot;);}); return false;'>{{ShuntCompensator}}</a></div>{{/ShuntCompensator}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SinglePhaseKind = []; if (!obj.phase) obj.SinglePhaseKind.push ({ id: '', selected: true}); for (var property in SinglePhaseKind) obj.SinglePhaseKind.push ({ id: property, selected: obj.phase && obj.phase.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SinglePhaseKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensatorPhase_collapse" style="margin-left: 10px;">ShuntCompensatorPhase</a></legend>
                    <div id="{{id}}_ShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumSections'>maximumSections: </label><div class='col-sm-8'><input id='{{id}}_maximumSections' class='form-control' type='text'{{#maximumSections}} value='{{maximumSections}}'{{/maximumSections}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalSections'>normalSections: </label><div class='col-sm-8'><input id='{{id}}_normalSections' class='form-control' type='text'{{#normalSections}} value='{{normalSections}}'{{/normalSections}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phase'>phase: </label><div class='col-sm-8'><select id='{{id}}_phase' class='form-control custom-select'>{{#SinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShuntCompensator'>ShuntCompensator: </label><div class='col-sm-8'><input id='{{id}}_ShuntCompensator' class='form-control' type='text'{{#ShuntCompensator}} value='{{ShuntCompensator}}'{{/ShuntCompensator}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ShuntCompensatorPhase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_maximumSections").value; if ("" != temp) obj.maximumSections = temp;
                temp = document.getElementById (id + "_normalSections").value; if ("" != temp) obj.normalSections = temp;
                temp = document.getElementById (id + "_phase").value; if ("" != temp) { temp = SinglePhaseKind[temp]; if ("undefined" != typeof (temp)) obj.phase = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; }
                temp = document.getElementById (id + "_ShuntCompensator").value; if ("" != temp) obj.ShuntCompensator = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ShuntCompensator", "1", "0..*", "ShuntCompensator", "ShuntCompensatorPhase"]
                        ]
                    )
                );
            }
        }

        /**
         * Single phase of a multi-phase switch when its attributes might be different per phase.
         *
         */
        class SwitchPhase extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SwitchPhase;
                if (null == bucket)
                   cim_data.SwitchPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SwitchPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "SwitchPhase";
                base.parse_element (/<cim:SwitchPhase.normalOpen>([\s\S]*?)<\/cim:SwitchPhase.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:SwitchPhase.phaseSide1\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phaseSide1", sub, context);
                base.parse_attribute (/<cim:SwitchPhase.phaseSide2\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phaseSide2", sub, context);
                base.parse_element (/<cim:SwitchPhase.closed>([\s\S]*?)<\/cim:SwitchPhase.closed>/g, obj, "closed", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:SwitchPhase.Switch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switch", sub, context);
                var bucket = context.parsed.SwitchPhase;
                if (null == bucket)
                   context.parsed.SwitchPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "SwitchPhase", "normalOpen", "normalOpen",  base.from_boolean, fields);
                base.export_attribute (obj, "SwitchPhase", "phaseSide1", "phaseSide1", fields);
                base.export_attribute (obj, "SwitchPhase", "phaseSide2", "phaseSide2", fields);
                base.export_element (obj, "SwitchPhase", "closed", "closed",  base.from_boolean, fields);
                base.export_attribute (obj, "SwitchPhase", "Switch", "Switch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SwitchPhase_collapse" aria-expanded="true" aria-controls="SwitchPhase_collapse" style="margin-left: 10px;">SwitchPhase</a></legend>
                    <div id="SwitchPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.template.call (this) +
                    `
                    {{#normalOpen}}<div><b>normalOpen</b>: {{normalOpen}}</div>{{/normalOpen}}
                    {{#phaseSide1}}<div><b>phaseSide1</b>: {{phaseSide1}}</div>{{/phaseSide1}}
                    {{#phaseSide2}}<div><b>phaseSide2</b>: {{phaseSide2}}</div>{{/phaseSide2}}
                    {{#closed}}<div><b>closed</b>: {{closed}}</div>{{/closed}}
                    {{#Switch}}<div><b>Switch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Switch}}&quot;);}); return false;'>{{Switch}}</a></div>{{/Switch}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SinglePhaseKind = []; if (!obj.phaseSide1) obj.SinglePhaseKind.push ({ id: '', selected: true}); for (var property in SinglePhaseKind) obj.SinglePhaseKind.push ({ id: property, selected: obj.phaseSide1 && obj.phaseSide1.endsWith ('.' + property)});
                obj.SinglePhaseKind = []; if (!obj.phaseSide2) obj.SinglePhaseKind.push ({ id: '', selected: true}); for (var property in SinglePhaseKind) obj.SinglePhaseKind.push ({ id: property, selected: obj.phaseSide2 && obj.phaseSide2.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SinglePhaseKind;
                delete obj.SinglePhaseKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SwitchPhase_collapse" aria-expanded="true" aria-controls="{{id}}_SwitchPhase_collapse" style="margin-left: 10px;">SwitchPhase</a></legend>
                    <div id="{{id}}_SwitchPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.PowerSystemResource.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalOpen'>normalOpen: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalOpen' class='form-check-input' type='checkbox'{{#normalOpen}} checked{{/normalOpen}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseSide1'>phaseSide1: </label><div class='col-sm-8'><select id='{{id}}_phaseSide1' class='form-control custom-select'>{{#SinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseSide2'>phaseSide2: </label><div class='col-sm-8'><select id='{{id}}_phaseSide2' class='form-control custom-select'>{{#SinglePhaseKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SinglePhaseKind}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_closed'>closed: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_closed' class='form-check-input' type='checkbox'{{#closed}} checked{{/closed}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Switch'>Switch: </label><div class='col-sm-8'><input id='{{id}}_Switch' class='form-control' type='text'{{#Switch}} value='{{Switch}}'{{/Switch}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SwitchPhase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_normalOpen").checked; if (temp) obj.normalOpen = true;
                temp = document.getElementById (id + "_phaseSide1").value; if ("" != temp) { temp = SinglePhaseKind[temp]; if ("undefined" != typeof (temp)) obj.phaseSide1 = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; }
                temp = document.getElementById (id + "_phaseSide2").value; if ("" != temp) { temp = SinglePhaseKind[temp]; if ("undefined" != typeof (temp)) obj.phaseSide2 = "http://iec.ch/TC57/2013/CIM-schema-cim16#SinglePhaseKind." + temp; }
                temp = document.getElementById (id + "_closed").checked; if (temp) obj.closed = true;
                temp = document.getElementById (id + "_Switch").value; if ("" != temp) obj.Switch = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Switch", "1", "0..*", "Switch", "SwitchPhase"]
                        ]
                    )
                );
            }
        }

        /**
         * A model of a set of individual Switches normally enclosed within the same cabinet and possibly with interlocks that restrict the combination of switch positions.
         *
         * These are typically found in medium voltage distribution networks.
         *
         */
        class CompositeSwitch extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CompositeSwitch;
                if (null == bucket)
                   cim_data.CompositeSwitch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CompositeSwitch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "CompositeSwitch";
                base.parse_element (/<cim:CompositeSwitch.compositeSwitchType>([\s\S]*?)<\/cim:CompositeSwitch.compositeSwitchType>/g, obj, "compositeSwitchType", base.to_string, sub, context);
                base.parse_attributes (/<cim:CompositeSwitch.Switches\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Switches", sub, context);
                var bucket = context.parsed.CompositeSwitch;
                if (null == bucket)
                   context.parsed.CompositeSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "CompositeSwitch", "compositeSwitchType", "compositeSwitchType",  base.from_string, fields);
                base.export_attributes (obj, "CompositeSwitch", "Switches", "Switches", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CompositeSwitch_collapse" aria-expanded="true" aria-controls="CompositeSwitch_collapse" style="margin-left: 10px;">CompositeSwitch</a></legend>
                    <div id="CompositeSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#compositeSwitchType}}<div><b>compositeSwitchType</b>: {{compositeSwitchType}}</div>{{/compositeSwitchType}}
                    {{#Switches}}<div><b>Switches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Switches}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Switches) obj.Switches_string = obj.Switches.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Switches_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CompositeSwitch_collapse" aria-expanded="true" aria-controls="{{id}}_CompositeSwitch_collapse" style="margin-left: 10px;">CompositeSwitch</a></legend>
                    <div id="{{id}}_CompositeSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_compositeSwitchType'>compositeSwitchType: </label><div class='col-sm-8'><input id='{{id}}_compositeSwitchType' class='form-control' type='text'{{#compositeSwitchType}} value='{{compositeSwitchType}}'{{/compositeSwitchType}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CompositeSwitch" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_compositeSwitchType").value; if ("" != temp) obj.compositeSwitchType = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Switches", "0..*", "0..1", "Switch", "CompositeSwitch"]
                        ]
                    )
                );
            }
        }

        /**
         * A type of conducting equipment that can regulate a quantity (i.e. voltage or flow) at a specific point in the network.
         *
         */
        class RegulatingCondEq extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RegulatingCondEq;
                if (null == bucket)
                   cim_data.RegulatingCondEq = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RegulatingCondEq[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "RegulatingCondEq";
                base.parse_element (/<cim:RegulatingCondEq.controlEnabled>([\s\S]*?)<\/cim:RegulatingCondEq.controlEnabled>/g, obj, "controlEnabled", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:RegulatingCondEq.RegulatingControl\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RegulatingControl", sub, context);
                var bucket = context.parsed.RegulatingCondEq;
                if (null == bucket)
                   context.parsed.RegulatingCondEq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "RegulatingCondEq", "controlEnabled", "controlEnabled",  base.from_boolean, fields);
                base.export_attribute (obj, "RegulatingCondEq", "RegulatingControl", "RegulatingControl", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RegulatingCondEq_collapse" aria-expanded="true" aria-controls="RegulatingCondEq_collapse" style="margin-left: 10px;">RegulatingCondEq</a></legend>
                    <div id="RegulatingCondEq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#controlEnabled}}<div><b>controlEnabled</b>: {{controlEnabled}}</div>{{/controlEnabled}}
                    {{#RegulatingControl}}<div><b>RegulatingControl</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RegulatingControl}}&quot;);}); return false;'>{{RegulatingControl}}</a></div>{{/RegulatingControl}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RegulatingCondEq_collapse" aria-expanded="true" aria-controls="{{id}}_RegulatingCondEq_collapse" style="margin-left: 10px;">RegulatingCondEq</a></legend>
                    <div id="{{id}}_RegulatingCondEq_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_controlEnabled'>controlEnabled: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_controlEnabled' class='form-check-input' type='checkbox'{{#controlEnabled}} checked{{/controlEnabled}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RegulatingControl'>RegulatingControl: </label><div class='col-sm-8'><input id='{{id}}_RegulatingControl' class='form-control' type='text'{{#RegulatingControl}} value='{{RegulatingControl}}'{{/RegulatingControl}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RegulatingCondEq" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_controlEnabled").checked; if (temp) obj.controlEnabled = true;
                temp = document.getElementById (id + "_RegulatingControl").value; if ("" != temp) obj.RegulatingControl = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RegulatingControl", "0..1", "0..*", "RegulatingControl", "RegulatingCondEq"]
                        ]
                    )
                );
            }
        }

        /**
         * A point where the system is grounded used for connecting conducting equipment to ground.
         *
         * The power system model can have any number of grounds.
         *
         */
        class Ground extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Ground;
                if (null == bucket)
                   cim_data.Ground = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Ground[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Ground";
                base.parse_attribute (/<cim:Ground.GroundAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GroundAction", sub, context);
                var bucket = context.parsed.Ground;
                if (null == bucket)
                   context.parsed.Ground = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Ground", "GroundAction", "GroundAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Ground_collapse" aria-expanded="true" aria-controls="Ground_collapse" style="margin-left: 10px;">Ground</a></legend>
                    <div id="Ground_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#GroundAction}}<div><b>GroundAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GroundAction}}&quot;);}); return false;'>{{GroundAction}}</a></div>{{/GroundAction}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Ground_collapse" aria-expanded="true" aria-controls="{{id}}_Ground_collapse" style="margin-left: 10px;">Ground</a></legend>
                    <div id="{{id}}_Ground_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GroundAction'>GroundAction: </label><div class='col-sm-8'><input id='{{id}}_GroundAction' class='form-control' type='text'{{#GroundAction}} value='{{GroundAction}}'{{/GroundAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Ground" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_GroundAction").value; if ("" != temp) obj.GroundAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GroundAction", "0..1", "0..1", "GroundAction", "Ground"]
                        ]
                    )
                );
            }
        }

        /**
         * Combination of conducting material with consistent electrical characteristics, building a single electrical system, used to carry current between points in the power system.
         *
         */
        class Conductor extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Conductor;
                if (null == bucket)
                   cim_data.Conductor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Conductor[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "Conductor";
                base.parse_element (/<cim:Conductor.length>([\s\S]*?)<\/cim:Conductor.length>/g, obj, "length", base.to_string, sub, context);
                var bucket = context.parsed.Conductor;
                if (null == bucket)
                   context.parsed.Conductor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "Conductor", "length", "length",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Conductor_collapse" aria-expanded="true" aria-controls="Conductor_collapse" style="margin-left: 10px;">Conductor</a></legend>
                    <div id="Conductor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.template.call (this) +
                    `
                    {{#length}}<div><b>length</b>: {{length}}</div>{{/length}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Conductor_collapse" aria-expanded="true" aria-controls="{{id}}_Conductor_collapse" style="margin-left: 10px;">Conductor</a></legend>
                    <div id="{{id}}_Conductor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.ConductingEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_length'>length: </label><div class='col-sm-8'><input id='{{id}}_length' class='form-control' type='text'{{#length}} value='{{length}}'{{/length}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Conductor" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_length").value; if ("" != temp) obj.length = temp;

                return (obj);
            }
        }

        /**
         * A Plant is a collection of equipment for purposes of generation.
         *
         */
        class Plant extends Core.EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Plant;
                if (null == bucket)
                   cim_data.Plant = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Plant[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "Plant";
                var bucket = context.parsed.Plant;
                if (null == bucket)
                   context.parsed.Plant = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.EquipmentContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Plant_collapse" aria-expanded="true" aria-controls="Plant_collapse" style="margin-left: 10px;">Plant</a></legend>
                    <div id="Plant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Plant_collapse" aria-expanded="true" aria-controls="{{id}}_Plant_collapse" style="margin-left: 10px;">Plant</a></legend>
                    <div id="{{id}}_Plant_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.EquipmentContainer.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Plant" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Automatic switch that will lock open to isolate a faulted section.
         *
         * It may, or may not, have load breaking capability. Its primary purpose is to provide fault sectionalising at locations where the fault current is either too high, or too low, for proper coordination of fuses.
         *
         */
        class Sectionaliser extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Sectionaliser;
                if (null == bucket)
                   cim_data.Sectionaliser = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Sectionaliser[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "Sectionaliser";
                var bucket = context.parsed.Sectionaliser;
                if (null == bucket)
                   context.parsed.Sectionaliser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Sectionaliser_collapse" aria-expanded="true" aria-controls="Sectionaliser_collapse" style="margin-left: 10px;">Sectionaliser</a></legend>
                    <div id="Sectionaliser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Sectionaliser_collapse" aria-expanded="true" aria-controls="{{id}}_Sectionaliser_collapse" style="margin-left: 10px;">Sectionaliser</a></legend>
                    <div id="{{id}}_Sectionaliser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Sectionaliser" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * An overcurrent protective device with a circuit opening fusible part that is heated and severed by the passage of overcurrent through it.
         *
         * A fuse is considered a switching device because it breaks current.
         *
         */
        class Fuse extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Fuse;
                if (null == bucket)
                   cim_data.Fuse = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Fuse[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "Fuse";
                var bucket = context.parsed.Fuse;
                if (null == bucket)
                   context.parsed.Fuse = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Fuse_collapse" aria-expanded="true" aria-controls="Fuse_collapse" style="margin-left: 10px;">Fuse</a></legend>
                    <div id="Fuse_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Fuse_collapse" aria-expanded="true" aria-controls="{{id}}_Fuse_collapse" style="margin-left: 10px;">Fuse</a></legend>
                    <div id="{{id}}_Fuse_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Fuse" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A manually operated or motor operated mechanical switching device used for isolating a circuit or equipment from ground.
         *
         */
        class GroundDisconnector extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GroundDisconnector;
                if (null == bucket)
                   cim_data.GroundDisconnector = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GroundDisconnector[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "GroundDisconnector";
                var bucket = context.parsed.GroundDisconnector;
                if (null == bucket)
                   context.parsed.GroundDisconnector = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GroundDisconnector_collapse" aria-expanded="true" aria-controls="GroundDisconnector_collapse" style="margin-left: 10px;">GroundDisconnector</a></legend>
                    <div id="GroundDisconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GroundDisconnector_collapse" aria-expanded="true" aria-controls="{{id}}_GroundDisconnector_collapse" style="margin-left: 10px;">GroundDisconnector</a></legend>
                    <div id="{{id}}_GroundDisconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "GroundDisconnector" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A ProtectedSwitch is a switching device that can be operated by ProtectionEquipment.
         *
         */
        class ProtectedSwitch extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectedSwitch;
                if (null == bucket)
                   cim_data.ProtectedSwitch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectedSwitch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectedSwitch";
                base.parse_element (/<cim:ProtectedSwitch.breakingCapacity>([\s\S]*?)<\/cim:ProtectedSwitch.breakingCapacity>/g, obj, "breakingCapacity", base.to_string, sub, context);
                base.parse_attributes (/<cim:ProtectedSwitch.RecloseSequences\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RecloseSequences", sub, context);
                base.parse_attributes (/<cim:ProtectedSwitch.OperatedByProtectionEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperatedByProtectionEquipment", sub, context);
                var bucket = context.parsed.ProtectedSwitch;
                if (null == bucket)
                   context.parsed.ProtectedSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectedSwitch", "breakingCapacity", "breakingCapacity",  base.from_string, fields);
                base.export_attributes (obj, "ProtectedSwitch", "RecloseSequences", "RecloseSequences", fields);
                base.export_attributes (obj, "ProtectedSwitch", "OperatedByProtectionEquipment", "OperatedByProtectionEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProtectedSwitch_collapse" aria-expanded="true" aria-controls="ProtectedSwitch_collapse" style="margin-left: 10px;">ProtectedSwitch</a></legend>
                    <div id="ProtectedSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
                    `
                    {{#breakingCapacity}}<div><b>breakingCapacity</b>: {{breakingCapacity}}</div>{{/breakingCapacity}}
                    {{#RecloseSequences}}<div><b>RecloseSequences</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/RecloseSequences}}
                    {{#OperatedByProtectionEquipment}}<div><b>OperatedByProtectionEquipment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/OperatedByProtectionEquipment}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.RecloseSequences) obj.RecloseSequences_string = obj.RecloseSequences.join ();
                if (obj.OperatedByProtectionEquipment) obj.OperatedByProtectionEquipment_string = obj.OperatedByProtectionEquipment.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.RecloseSequences_string;
                delete obj.OperatedByProtectionEquipment_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProtectedSwitch_collapse" aria-expanded="true" aria-controls="{{id}}_ProtectedSwitch_collapse" style="margin-left: 10px;">ProtectedSwitch</a></legend>
                    <div id="{{id}}_ProtectedSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_breakingCapacity'>breakingCapacity: </label><div class='col-sm-8'><input id='{{id}}_breakingCapacity' class='form-control' type='text'{{#breakingCapacity}} value='{{breakingCapacity}}'{{/breakingCapacity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OperatedByProtectionEquipment'>OperatedByProtectionEquipment: </label><div class='col-sm-8'><input id='{{id}}_OperatedByProtectionEquipment' class='form-control' type='text'{{#OperatedByProtectionEquipment}} value='{{OperatedByProtectionEquipment_string}}'{{/OperatedByProtectionEquipment}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ProtectedSwitch" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_breakingCapacity").value; if ("" != temp) obj.breakingCapacity = temp;
                temp = document.getElementById (id + "_OperatedByProtectionEquipment").value; if ("" != temp) obj.OperatedByProtectionEquipment = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RecloseSequences", "0..*", "1", "RecloseSequence", "ProtectedSwitch"],
                            ["OperatedByProtectionEquipment", "0..*", "0..*", "ProtectionEquipment", "ProtectedSwitches"]
                        ]
                    )
                );
            }
        }

        /**
         * A cut separates a line segment into two parts.
         *
         * The cut appears as a switch inserted between these two parts and connects them together. As the cut is normally open there is no galvanic connection between the two line segment parts. But it is possible to close the cut to get galvanic connection.
         *
         */
        class Cut extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Cut;
                if (null == bucket)
                   cim_data.Cut = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Cut[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "Cut";
                base.parse_element (/<cim:Cut.lengthFromTerminal1>([\s\S]*?)<\/cim:Cut.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
                base.parse_attribute (/<cim:Cut.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);
                base.parse_attribute (/<cim:Cut.CutAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CutAction", sub, context);
                var bucket = context.parsed.Cut;
                if (null == bucket)
                   context.parsed.Cut = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                base.export_element (obj, "Cut", "lengthFromTerminal1", "lengthFromTerminal1",  base.from_string, fields);
                base.export_attribute (obj, "Cut", "ACLineSegment", "ACLineSegment", fields);
                base.export_attribute (obj, "Cut", "CutAction", "CutAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Cut_collapse" aria-expanded="true" aria-controls="Cut_collapse" style="margin-left: 10px;">Cut</a></legend>
                    <div id="Cut_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
                    `
                    {{#lengthFromTerminal1}}<div><b>lengthFromTerminal1</b>: {{lengthFromTerminal1}}</div>{{/lengthFromTerminal1}}
                    {{#ACLineSegment}}<div><b>ACLineSegment</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ACLineSegment}}&quot;);}); return false;'>{{ACLineSegment}}</a></div>{{/ACLineSegment}}
                    {{#CutAction}}<div><b>CutAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{CutAction}}&quot;);}); return false;'>{{CutAction}}</a></div>{{/CutAction}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Cut_collapse" aria-expanded="true" aria-controls="{{id}}_Cut_collapse" style="margin-left: 10px;">Cut</a></legend>
                    <div id="{{id}}_Cut_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lengthFromTerminal1'>lengthFromTerminal1: </label><div class='col-sm-8'><input id='{{id}}_lengthFromTerminal1' class='form-control' type='text'{{#lengthFromTerminal1}} value='{{lengthFromTerminal1}}'{{/lengthFromTerminal1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ACLineSegment'>ACLineSegment: </label><div class='col-sm-8'><input id='{{id}}_ACLineSegment' class='form-control' type='text'{{#ACLineSegment}} value='{{ACLineSegment}}'{{/ACLineSegment}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CutAction'>CutAction: </label><div class='col-sm-8'><input id='{{id}}_CutAction' class='form-control' type='text'{{#CutAction}} value='{{CutAction}}'{{/CutAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Cut" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_lengthFromTerminal1").value; if ("" != temp) obj.lengthFromTerminal1 = temp;
                temp = document.getElementById (id + "_ACLineSegment").value; if ("" != temp) obj.ACLineSegment = temp;
                temp = document.getElementById (id + "_CutAction").value; if ("" != temp) obj.CutAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ACLineSegment", "1", "0..*", "ACLineSegment", "Cut"],
                            ["CutAction", "0..1", "0..1", "CutAction", "Cut"]
                        ]
                    )
                );
            }
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal circuit conditions and also making, carrying for a specified time, and breaking currents under specified abnormal circuit conditions e.g.  those of short circuit.
         *
         */
        class Breaker extends ProtectedSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Breaker;
                if (null == bucket)
                   cim_data.Breaker = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Breaker[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectedSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "Breaker";
                base.parse_element (/<cim:Breaker.inTransitTime>([\s\S]*?)<\/cim:Breaker.inTransitTime>/g, obj, "inTransitTime", base.to_string, sub, context);
                var bucket = context.parsed.Breaker;
                if (null == bucket)
                   context.parsed.Breaker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectedSwitch.prototype.export.call (this, obj, false);

                base.export_element (obj, "Breaker", "inTransitTime", "inTransitTime",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Breaker_collapse" aria-expanded="true" aria-controls="Breaker_collapse" style="margin-left: 10px;">Breaker</a></legend>
                    <div id="Breaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.template.call (this) +
                    `
                    {{#inTransitTime}}<div><b>inTransitTime</b>: {{inTransitTime}}</div>{{/inTransitTime}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Breaker_collapse" aria-expanded="true" aria-controls="{{id}}_Breaker_collapse" style="margin-left: 10px;">Breaker</a></legend>
                    <div id="{{id}}_Breaker_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inTransitTime'>inTransitTime: </label><div class='col-sm-8'><input id='{{id}}_inTransitTime' class='form-control' type='text'{{#inTransitTime}} value='{{inTransitTime}}'{{/inTransitTime}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Breaker" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_inTransitTime").value; if ("" != temp) obj.inTransitTime = temp;

                return (obj);
            }
        }

        /**
         * A short section of conductor with negligible impedance which can be manually removed and replaced if the circuit is de-energized.
         *
         * Note that zero-impedance branches can potentially be modeled by other equipment types.
         *
         */
        class Jumper extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Jumper;
                if (null == bucket)
                   cim_data.Jumper = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Jumper[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "Jumper";
                base.parse_attribute (/<cim:Jumper.JumperAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "JumperAction", sub, context);
                var bucket = context.parsed.Jumper;
                if (null == bucket)
                   context.parsed.Jumper = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "Jumper", "JumperAction", "JumperAction", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Jumper_collapse" aria-expanded="true" aria-controls="Jumper_collapse" style="margin-left: 10px;">Jumper</a></legend>
                    <div id="Jumper_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
                    `
                    {{#JumperAction}}<div><b>JumperAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{JumperAction}}&quot;);}); return false;'>{{JumperAction}}</a></div>{{/JumperAction}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Jumper_collapse" aria-expanded="true" aria-controls="{{id}}_Jumper_collapse" style="margin-left: 10px;">Jumper</a></legend>
                    <div id="{{id}}_Jumper_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_JumperAction'>JumperAction: </label><div class='col-sm-8'><input id='{{id}}_JumperAction' class='form-control' type='text'{{#JumperAction}} value='{{JumperAction}}'{{/JumperAction}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Jumper" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_JumperAction").value; if ("" != temp) obj.JumperAction = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["JumperAction", "0..1", "0..1", "JumperAction", "Jumper"]
                        ]
                    )
                );
            }
        }

        /**
         * Pole-mounted fault interrupter with built-in phase and ground relays, current transformer (CT), and supplemental controls.
         *
         */
        class Recloser extends ProtectedSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Recloser;
                if (null == bucket)
                   cim_data.Recloser = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Recloser[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectedSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "Recloser";
                var bucket = context.parsed.Recloser;
                if (null == bucket)
                   context.parsed.Recloser = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectedSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Recloser_collapse" aria-expanded="true" aria-controls="Recloser_collapse" style="margin-left: 10px;">Recloser</a></legend>
                    <div id="Recloser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Recloser_collapse" aria-expanded="true" aria-controls="{{id}}_Recloser_collapse" style="margin-left: 10px;">Recloser</a></legend>
                    <div id="{{id}}_Recloser_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Recloser" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A manually operated or motor operated mechanical switching device used for changing the connections in a circuit, or for isolating a circuit or equipment from a source of power.
         *
         * It is required to open or close circuits when negligible current is broken or made.
         *
         */
        class Disconnector extends Switch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Disconnector;
                if (null == bucket)
                   cim_data.Disconnector = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Disconnector[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Switch.prototype.parse.call (this, context, sub);
                obj.cls = "Disconnector";
                var bucket = context.parsed.Disconnector;
                if (null == bucket)
                   context.parsed.Disconnector = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Switch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Disconnector_collapse" aria-expanded="true" aria-controls="Disconnector_collapse" style="margin-left: 10px;">Disconnector</a></legend>
                    <div id="Disconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Disconnector_collapse" aria-expanded="true" aria-controls="{{id}}_Disconnector_collapse" style="margin-left: 10px;">Disconnector</a></legend>
                    <div id="{{id}}_Disconnector_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Switch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Disconnector" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A mechanical switching device capable of making, carrying, and breaking currents under normal operating conditions.
         *
         */
        class LoadBreakSwitch extends ProtectedSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LoadBreakSwitch;
                if (null == bucket)
                   cim_data.LoadBreakSwitch = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LoadBreakSwitch[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectedSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "LoadBreakSwitch";
                var bucket = context.parsed.LoadBreakSwitch;
                if (null == bucket)
                   context.parsed.LoadBreakSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectedSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LoadBreakSwitch_collapse" aria-expanded="true" aria-controls="LoadBreakSwitch_collapse" style="margin-left: 10px;">LoadBreakSwitch</a></legend>
                    <div id="LoadBreakSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LoadBreakSwitch_collapse" aria-expanded="true" aria-controls="{{id}}_LoadBreakSwitch_collapse" style="margin-left: 10px;">LoadBreakSwitch</a></legend>
                    <div id="{{id}}_LoadBreakSwitch_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProtectedSwitch.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "LoadBreakSwitch" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * Describes each tap step in the phase tap changer tabular curve.
         *
         */
        class PhaseTapChangerTablePoint extends TapChangerTablePoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerTablePoint;
                if (null == bucket)
                   cim_data.PhaseTapChangerTablePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerTablePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TapChangerTablePoint.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerTablePoint";
                base.parse_element (/<cim:PhaseTapChangerTablePoint.angle>([\s\S]*?)<\/cim:PhaseTapChangerTablePoint.angle>/g, obj, "angle", base.to_string, sub, context);
                base.parse_attribute (/<cim:PhaseTapChangerTablePoint.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTable", sub, context);
                var bucket = context.parsed.PhaseTapChangerTablePoint;
                if (null == bucket)
                   context.parsed.PhaseTapChangerTablePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TapChangerTablePoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "PhaseTapChangerTablePoint", "angle", "angle",  base.from_string, fields);
                base.export_attribute (obj, "PhaseTapChangerTablePoint", "PhaseTapChangerTable", "PhaseTapChangerTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerTablePoint_collapse" aria-expanded="true" aria-controls="PhaseTapChangerTablePoint_collapse" style="margin-left: 10px;">PhaseTapChangerTablePoint</a></legend>
                    <div id="PhaseTapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChangerTablePoint.prototype.template.call (this) +
                    `
                    {{#angle}}<div><b>angle</b>: {{angle}}</div>{{/angle}}
                    {{#PhaseTapChangerTable}}<div><b>PhaseTapChangerTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PhaseTapChangerTable}}&quot;);}); return false;'>{{PhaseTapChangerTable}}</a></div>{{/PhaseTapChangerTable}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerTablePoint_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerTablePoint_collapse" style="margin-left: 10px;">PhaseTapChangerTablePoint</a></legend>
                    <div id="{{id}}_PhaseTapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChangerTablePoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_angle'>angle: </label><div class='col-sm-8'><input id='{{id}}_angle' class='form-control' type='text'{{#angle}} value='{{angle}}'{{/angle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhaseTapChangerTable'>PhaseTapChangerTable: </label><div class='col-sm-8'><input id='{{id}}_PhaseTapChangerTable' class='form-control' type='text'{{#PhaseTapChangerTable}} value='{{PhaseTapChangerTable}}'{{/PhaseTapChangerTable}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChangerTablePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_angle").value; if ("" != temp) obj.angle = temp;
                temp = document.getElementById (id + "_PhaseTapChangerTable").value; if ("" != temp) obj.PhaseTapChangerTable = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhaseTapChangerTable", "1", "1..*", "PhaseTapChangerTable", "PhaseTapChangerTablePoint"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes each tap step in the ratio tap changer tabular curve.
         *
         */
        class RatioTapChangerTablePoint extends TapChangerTablePoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RatioTapChangerTablePoint;
                if (null == bucket)
                   cim_data.RatioTapChangerTablePoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RatioTapChangerTablePoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TapChangerTablePoint.prototype.parse.call (this, context, sub);
                obj.cls = "RatioTapChangerTablePoint";
                base.parse_attribute (/<cim:RatioTapChangerTablePoint.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChangerTable", sub, context);
                var bucket = context.parsed.RatioTapChangerTablePoint;
                if (null == bucket)
                   context.parsed.RatioTapChangerTablePoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TapChangerTablePoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "RatioTapChangerTablePoint", "RatioTapChangerTable", "RatioTapChangerTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RatioTapChangerTablePoint_collapse" aria-expanded="true" aria-controls="RatioTapChangerTablePoint_collapse" style="margin-left: 10px;">RatioTapChangerTablePoint</a></legend>
                    <div id="RatioTapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChangerTablePoint.prototype.template.call (this) +
                    `
                    {{#RatioTapChangerTable}}<div><b>RatioTapChangerTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatioTapChangerTable}}&quot;);}); return false;'>{{RatioTapChangerTable}}</a></div>{{/RatioTapChangerTable}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RatioTapChangerTablePoint_collapse" aria-expanded="true" aria-controls="{{id}}_RatioTapChangerTablePoint_collapse" style="margin-left: 10px;">RatioTapChangerTablePoint</a></legend>
                    <div id="{{id}}_RatioTapChangerTablePoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChangerTablePoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RatioTapChangerTable'>RatioTapChangerTable: </label><div class='col-sm-8'><input id='{{id}}_RatioTapChangerTable' class='form-control' type='text'{{#RatioTapChangerTable}} value='{{RatioTapChangerTable}}'{{/RatioTapChangerTable}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RatioTapChangerTablePoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_RatioTapChangerTable").value; if ("" != temp) obj.RatioTapChangerTable = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RatioTapChangerTable", "1", "1..*", "RatioTapChangerTable", "RatioTapChangerTablePoint"]
                        ]
                    )
                );
            }
        }

        /**
         * A point where one or more conducting equipments are connected with zero resistance.
         *
         */
        class Junction extends Connector
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Junction;
                if (null == bucket)
                   cim_data.Junction = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Junction[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Connector.prototype.parse.call (this, context, sub);
                obj.cls = "Junction";
                var bucket = context.parsed.Junction;
                if (null == bucket)
                   context.parsed.Junction = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Connector.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Junction_collapse" aria-expanded="true" aria-controls="Junction_collapse" style="margin-left: 10px;">Junction</a></legend>
                    <div id="Junction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Connector.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Junction_collapse" aria-expanded="true" aria-controls="{{id}}_Junction_collapse" style="margin-left: 10px;">Junction</a></legend>
                    <div id="{{id}}_Junction_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Connector.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Junction" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A conductor, or group of conductors, with negligible impedance, that serve to connect other conducting equipment within a single substation.
         *
         * Voltage measurements are typically obtained from VoltageTransformers that are connected to busbar sections. A bus bar section may have many physical terminals but for analysis is modelled with exactly one logical terminal.
         *
         */
        class BusbarSection extends Connector
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.BusbarSection;
                if (null == bucket)
                   cim_data.BusbarSection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BusbarSection[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Connector.prototype.parse.call (this, context, sub);
                obj.cls = "BusbarSection";
                base.parse_element (/<cim:BusbarSection.ipMax>([\s\S]*?)<\/cim:BusbarSection.ipMax>/g, obj, "ipMax", base.to_string, sub, context);
                base.parse_attribute (/<cim:BusbarSection.VoltageControlZone\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageControlZone", sub, context);
                var bucket = context.parsed.BusbarSection;
                if (null == bucket)
                   context.parsed.BusbarSection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Connector.prototype.export.call (this, obj, false);

                base.export_element (obj, "BusbarSection", "ipMax", "ipMax",  base.from_string, fields);
                base.export_attribute (obj, "BusbarSection", "VoltageControlZone", "VoltageControlZone", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BusbarSection_collapse" aria-expanded="true" aria-controls="BusbarSection_collapse" style="margin-left: 10px;">BusbarSection</a></legend>
                    <div id="BusbarSection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Connector.prototype.template.call (this) +
                    `
                    {{#ipMax}}<div><b>ipMax</b>: {{ipMax}}</div>{{/ipMax}}
                    {{#VoltageControlZone}}<div><b>VoltageControlZone</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageControlZone}}&quot;);}); return false;'>{{VoltageControlZone}}</a></div>{{/VoltageControlZone}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BusbarSection_collapse" aria-expanded="true" aria-controls="{{id}}_BusbarSection_collapse" style="margin-left: 10px;">BusbarSection</a></legend>
                    <div id="{{id}}_BusbarSection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Connector.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ipMax'>ipMax: </label><div class='col-sm-8'><input id='{{id}}_ipMax' class='form-control' type='text'{{#ipMax}} value='{{ipMax}}'{{/ipMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VoltageControlZone'>VoltageControlZone: </label><div class='col-sm-8'><input id='{{id}}_VoltageControlZone' class='form-control' type='text'{{#VoltageControlZone}} value='{{VoltageControlZone}}'{{/VoltageControlZone}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "BusbarSection" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ipMax").value; if ("" != temp) obj.ipMax = temp;
                temp = document.getElementById (id + "_VoltageControlZone").value; if ("" != temp) obj.VoltageControlZone = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["VoltageControlZone", "0..1", "1", "VoltageControlZone", "BusbarSection"]
                        ]
                    )
                );
            }
        }

        /**
         * Common type for per-length impedance electrical catalogues.
         *
         */
        class PerLengthImpedance extends PerLengthLineParameter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PerLengthImpedance;
                if (null == bucket)
                   cim_data.PerLengthImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerLengthImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PerLengthLineParameter.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthImpedance";
                base.parse_attributes (/<cim:PerLengthImpedance.ACLineSegments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegments", sub, context);
                var bucket = context.parsed.PerLengthImpedance;
                if (null == bucket)
                   context.parsed.PerLengthImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PerLengthLineParameter.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "PerLengthImpedance", "ACLineSegments", "ACLineSegments", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PerLengthImpedance_collapse" aria-expanded="true" aria-controls="PerLengthImpedance_collapse" style="margin-left: 10px;">PerLengthImpedance</a></legend>
                    <div id="PerLengthImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthLineParameter.prototype.template.call (this) +
                    `
                    {{#ACLineSegments}}<div><b>ACLineSegments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ACLineSegments}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ACLineSegments) obj.ACLineSegments_string = obj.ACLineSegments.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ACLineSegments_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PerLengthImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_PerLengthImpedance_collapse" style="margin-left: 10px;">PerLengthImpedance</a></legend>
                    <div id="{{id}}_PerLengthImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthLineParameter.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "PerLengthImpedance" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ACLineSegments", "0..*", "0..1", "ACLineSegment", "PerLengthImpedance"]
                        ]
                    )
                );
            }
        }

        /**
         * Impedance and admittance parameters per unit length for n-wire unbalanced lines, in matrix form.
         *
         */
        class PerLengthPhaseImpedance extends PerLengthImpedance
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PerLengthPhaseImpedance;
                if (null == bucket)
                   cim_data.PerLengthPhaseImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerLengthPhaseImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PerLengthImpedance.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthPhaseImpedance";
                base.parse_element (/<cim:PerLengthPhaseImpedance.conductorCount>([\s\S]*?)<\/cim:PerLengthPhaseImpedance.conductorCount>/g, obj, "conductorCount", base.to_string, sub, context);
                base.parse_attributes (/<cim:PerLengthPhaseImpedance.PhaseImpedanceData\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseImpedanceData", sub, context);
                var bucket = context.parsed.PerLengthPhaseImpedance;
                if (null == bucket)
                   context.parsed.PerLengthPhaseImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PerLengthImpedance.prototype.export.call (this, obj, false);

                base.export_element (obj, "PerLengthPhaseImpedance", "conductorCount", "conductorCount",  base.from_string, fields);
                base.export_attributes (obj, "PerLengthPhaseImpedance", "PhaseImpedanceData", "PhaseImpedanceData", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PerLengthPhaseImpedance_collapse" aria-expanded="true" aria-controls="PerLengthPhaseImpedance_collapse" style="margin-left: 10px;">PerLengthPhaseImpedance</a></legend>
                    <div id="PerLengthPhaseImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthImpedance.prototype.template.call (this) +
                    `
                    {{#conductorCount}}<div><b>conductorCount</b>: {{conductorCount}}</div>{{/conductorCount}}
                    {{#PhaseImpedanceData}}<div><b>PhaseImpedanceData</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PhaseImpedanceData}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.PhaseImpedanceData) obj.PhaseImpedanceData_string = obj.PhaseImpedanceData.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseImpedanceData_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PerLengthPhaseImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_PerLengthPhaseImpedance_collapse" style="margin-left: 10px;">PerLengthPhaseImpedance</a></legend>
                    <div id="{{id}}_PerLengthPhaseImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthImpedance.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_conductorCount'>conductorCount: </label><div class='col-sm-8'><input id='{{id}}_conductorCount' class='form-control' type='text'{{#conductorCount}} value='{{conductorCount}}'{{/conductorCount}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PerLengthPhaseImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_conductorCount").value; if ("" != temp) obj.conductorCount = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhaseImpedanceData", "1..*", "1", "PhaseImpedanceData", "PhaseImpedance"]
                        ]
                    )
                );
            }
        }

        /**
         * Sequence impedance and admittance parameters per unit length, for transposed lines of 1, 2, or 3 phases.
         *
         * For 1-phase lines, define x=x0=xself. For 2-phase lines, define x=xs-xm and x0=xs+xm.
         *
         */
        class PerLengthSequenceImpedance extends PerLengthImpedance
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PerLengthSequenceImpedance;
                if (null == bucket)
                   cim_data.PerLengthSequenceImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerLengthSequenceImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PerLengthImpedance.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthSequenceImpedance";
                base.parse_element (/<cim:PerLengthSequenceImpedance.b0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.bch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.bch>/g, obj, "bch", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.g0ch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.gch>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.gch>/g, obj, "gch", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.r>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.r0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.x>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthSequenceImpedance.x0>([\s\S]*?)<\/cim:PerLengthSequenceImpedance.x0>/g, obj, "x0", base.to_string, sub, context);
                var bucket = context.parsed.PerLengthSequenceImpedance;
                if (null == bucket)
                   context.parsed.PerLengthSequenceImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PerLengthImpedance.prototype.export.call (this, obj, false);

                base.export_element (obj, "PerLengthSequenceImpedance", "b0ch", "b0ch",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "bch", "bch",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "g0ch", "g0ch",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "gch", "gch",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "r", "r",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "x", "x",  base.from_string, fields);
                base.export_element (obj, "PerLengthSequenceImpedance", "x0", "x0",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PerLengthSequenceImpedance_collapse" aria-expanded="true" aria-controls="PerLengthSequenceImpedance_collapse" style="margin-left: 10px;">PerLengthSequenceImpedance</a></legend>
                    <div id="PerLengthSequenceImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthImpedance.prototype.template.call (this) +
                    `
                    {{#b0ch}}<div><b>b0ch</b>: {{b0ch}}</div>{{/b0ch}}
                    {{#bch}}<div><b>bch</b>: {{bch}}</div>{{/bch}}
                    {{#g0ch}}<div><b>g0ch</b>: {{g0ch}}</div>{{/g0ch}}
                    {{#gch}}<div><b>gch</b>: {{gch}}</div>{{/gch}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PerLengthSequenceImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_PerLengthSequenceImpedance_collapse" style="margin-left: 10px;">PerLengthSequenceImpedance</a></legend>
                    <div id="{{id}}_PerLengthSequenceImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PerLengthImpedance.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0ch'>b0ch: </label><div class='col-sm-8'><input id='{{id}}_b0ch' class='form-control' type='text'{{#b0ch}} value='{{b0ch}}'{{/b0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bch'>bch: </label><div class='col-sm-8'><input id='{{id}}_bch' class='form-control' type='text'{{#bch}} value='{{bch}}'{{/bch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0ch'>g0ch: </label><div class='col-sm-8'><input id='{{id}}_g0ch' class='form-control' type='text'{{#g0ch}} value='{{g0ch}}'{{/g0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gch'>gch: </label><div class='col-sm-8'><input id='{{id}}_gch' class='form-control' type='text'{{#gch}} value='{{gch}}'{{/gch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PerLengthSequenceImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b0ch").value; if ("" != temp) obj.b0ch = temp;
                temp = document.getElementById (id + "_bch").value; if ("" != temp) obj.bch = temp;
                temp = document.getElementById (id + "_g0ch").value; if ("" != temp) obj.g0ch = temp;
                temp = document.getElementById (id + "_gch").value; if ("" != temp) obj.gch = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;

                return (obj);
            }
        }

        /**
         * A tunable impedance device normally used to offset line charging during single line faults in an ungrounded section of network.
         *
         */
        class PetersenCoil extends EarthFaultCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PetersenCoil;
                if (null == bucket)
                   cim_data.PetersenCoil = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PetersenCoil[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EarthFaultCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "PetersenCoil";
                base.parse_attribute (/<cim:PetersenCoil.mode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "mode", sub, context);
                base.parse_element (/<cim:PetersenCoil.nominalU>([\s\S]*?)<\/cim:PetersenCoil.nominalU>/g, obj, "nominalU", base.to_string, sub, context);
                base.parse_element (/<cim:PetersenCoil.offsetCurrent>([\s\S]*?)<\/cim:PetersenCoil.offsetCurrent>/g, obj, "offsetCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:PetersenCoil.positionCurrent>([\s\S]*?)<\/cim:PetersenCoil.positionCurrent>/g, obj, "positionCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:PetersenCoil.xGroundMax>([\s\S]*?)<\/cim:PetersenCoil.xGroundMax>/g, obj, "xGroundMax", base.to_string, sub, context);
                base.parse_element (/<cim:PetersenCoil.xGroundMin>([\s\S]*?)<\/cim:PetersenCoil.xGroundMin>/g, obj, "xGroundMin", base.to_string, sub, context);
                base.parse_element (/<cim:PetersenCoil.xGroundNominal>([\s\S]*?)<\/cim:PetersenCoil.xGroundNominal>/g, obj, "xGroundNominal", base.to_string, sub, context);
                var bucket = context.parsed.PetersenCoil;
                if (null == bucket)
                   context.parsed.PetersenCoil = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EarthFaultCompensator.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PetersenCoil", "mode", "mode", fields);
                base.export_element (obj, "PetersenCoil", "nominalU", "nominalU",  base.from_string, fields);
                base.export_element (obj, "PetersenCoil", "offsetCurrent", "offsetCurrent",  base.from_string, fields);
                base.export_element (obj, "PetersenCoil", "positionCurrent", "positionCurrent",  base.from_string, fields);
                base.export_element (obj, "PetersenCoil", "xGroundMax", "xGroundMax",  base.from_string, fields);
                base.export_element (obj, "PetersenCoil", "xGroundMin", "xGroundMin",  base.from_string, fields);
                base.export_element (obj, "PetersenCoil", "xGroundNominal", "xGroundNominal",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PetersenCoil_collapse" aria-expanded="true" aria-controls="PetersenCoil_collapse" style="margin-left: 10px;">PetersenCoil</a></legend>
                    <div id="PetersenCoil_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EarthFaultCompensator.prototype.template.call (this) +
                    `
                    {{#mode}}<div><b>mode</b>: {{mode}}</div>{{/mode}}
                    {{#nominalU}}<div><b>nominalU</b>: {{nominalU}}</div>{{/nominalU}}
                    {{#offsetCurrent}}<div><b>offsetCurrent</b>: {{offsetCurrent}}</div>{{/offsetCurrent}}
                    {{#positionCurrent}}<div><b>positionCurrent</b>: {{positionCurrent}}</div>{{/positionCurrent}}
                    {{#xGroundMax}}<div><b>xGroundMax</b>: {{xGroundMax}}</div>{{/xGroundMax}}
                    {{#xGroundMin}}<div><b>xGroundMin</b>: {{xGroundMin}}</div>{{/xGroundMin}}
                    {{#xGroundNominal}}<div><b>xGroundNominal</b>: {{xGroundNominal}}</div>{{/xGroundNominal}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PetersenCoilModeKind = []; if (!obj.mode) obj.PetersenCoilModeKind.push ({ id: '', selected: true}); for (var property in PetersenCoilModeKind) obj.PetersenCoilModeKind.push ({ id: property, selected: obj.mode && obj.mode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PetersenCoilModeKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PetersenCoil_collapse" aria-expanded="true" aria-controls="{{id}}_PetersenCoil_collapse" style="margin-left: 10px;">PetersenCoil</a></legend>
                    <div id="{{id}}_PetersenCoil_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EarthFaultCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mode'>mode: </label><div class='col-sm-8'><select id='{{id}}_mode' class='form-control custom-select'>{{#PetersenCoilModeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PetersenCoilModeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalU'>nominalU: </label><div class='col-sm-8'><input id='{{id}}_nominalU' class='form-control' type='text'{{#nominalU}} value='{{nominalU}}'{{/nominalU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_offsetCurrent'>offsetCurrent: </label><div class='col-sm-8'><input id='{{id}}_offsetCurrent' class='form-control' type='text'{{#offsetCurrent}} value='{{offsetCurrent}}'{{/offsetCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_positionCurrent'>positionCurrent: </label><div class='col-sm-8'><input id='{{id}}_positionCurrent' class='form-control' type='text'{{#positionCurrent}} value='{{positionCurrent}}'{{/positionCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xGroundMax'>xGroundMax: </label><div class='col-sm-8'><input id='{{id}}_xGroundMax' class='form-control' type='text'{{#xGroundMax}} value='{{xGroundMax}}'{{/xGroundMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xGroundMin'>xGroundMin: </label><div class='col-sm-8'><input id='{{id}}_xGroundMin' class='form-control' type='text'{{#xGroundMin}} value='{{xGroundMin}}'{{/xGroundMin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xGroundNominal'>xGroundNominal: </label><div class='col-sm-8'><input id='{{id}}_xGroundNominal' class='form-control' type='text'{{#xGroundNominal}} value='{{xGroundNominal}}'{{/xGroundNominal}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PetersenCoil" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_mode").value; if ("" != temp) { temp = PetersenCoilModeKind[temp]; if ("undefined" != typeof (temp)) obj.mode = "http://iec.ch/TC57/2013/CIM-schema-cim16#PetersenCoilModeKind." + temp; }
                temp = document.getElementById (id + "_nominalU").value; if ("" != temp) obj.nominalU = temp;
                temp = document.getElementById (id + "_offsetCurrent").value; if ("" != temp) obj.offsetCurrent = temp;
                temp = document.getElementById (id + "_positionCurrent").value; if ("" != temp) obj.positionCurrent = temp;
                temp = document.getElementById (id + "_xGroundMax").value; if ("" != temp) obj.xGroundMax = temp;
                temp = document.getElementById (id + "_xGroundMin").value; if ("" != temp) obj.xGroundMin = temp;
                temp = document.getElementById (id + "_xGroundNominal").value; if ("" != temp) obj.xGroundNominal = temp;

                return (obj);
            }
        }

        /**
         * A fixed impedance device used for grounding.
         *
         */
        class GroundingImpedance extends EarthFaultCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GroundingImpedance;
                if (null == bucket)
                   cim_data.GroundingImpedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GroundingImpedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = EarthFaultCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "GroundingImpedance";
                base.parse_element (/<cim:GroundingImpedance.x>([\s\S]*?)<\/cim:GroundingImpedance.x>/g, obj, "x", base.to_string, sub, context);
                var bucket = context.parsed.GroundingImpedance;
                if (null == bucket)
                   context.parsed.GroundingImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = EarthFaultCompensator.prototype.export.call (this, obj, false);

                base.export_element (obj, "GroundingImpedance", "x", "x",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GroundingImpedance_collapse" aria-expanded="true" aria-controls="GroundingImpedance_collapse" style="margin-left: 10px;">GroundingImpedance</a></legend>
                    <div id="GroundingImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EarthFaultCompensator.prototype.template.call (this) +
                    `
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GroundingImpedance_collapse" aria-expanded="true" aria-controls="{{id}}_GroundingImpedance_collapse" style="margin-left: 10px;">GroundingImpedance</a></legend>
                    <div id="{{id}}_GroundingImpedance_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + EarthFaultCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "GroundingImpedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;

                return (obj);
            }
        }

        /**
         * A PowerTransformerEnd is associated with each Terminal of a PowerTransformer.
         *
         * The impedance values r, r0, x, and x0 of a PowerTransformerEnd represents a star equivalent as follows
         *
         */
        class PowerTransformerEnd extends TransformerEnd
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PowerTransformerEnd;
                if (null == bucket)
                   cim_data.PowerTransformerEnd = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PowerTransformerEnd[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TransformerEnd.prototype.parse.call (this, context, sub);
                obj.cls = "PowerTransformerEnd";
                base.parse_element (/<cim:PowerTransformerEnd.b>([\s\S]*?)<\/cim:PowerTransformerEnd.b>/g, obj, "b", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.b0>([\s\S]*?)<\/cim:PowerTransformerEnd.b0>/g, obj, "b0", base.to_string, sub, context);
                base.parse_attribute (/<cim:PowerTransformerEnd.connectionKind\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "connectionKind", sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.g>([\s\S]*?)<\/cim:PowerTransformerEnd.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.g0>([\s\S]*?)<\/cim:PowerTransformerEnd.g0>/g, obj, "g0", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.phaseAngleClock>([\s\S]*?)<\/cim:PowerTransformerEnd.phaseAngleClock>/g, obj, "phaseAngleClock", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.r>([\s\S]*?)<\/cim:PowerTransformerEnd.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.r0>([\s\S]*?)<\/cim:PowerTransformerEnd.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.ratedS>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.ratedU>([\s\S]*?)<\/cim:PowerTransformerEnd.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.x>([\s\S]*?)<\/cim:PowerTransformerEnd.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:PowerTransformerEnd.x0>([\s\S]*?)<\/cim:PowerTransformerEnd.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_attribute (/<cim:PowerTransformerEnd.PowerTransformer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerTransformer", sub, context);
                var bucket = context.parsed.PowerTransformerEnd;
                if (null == bucket)
                   context.parsed.PowerTransformerEnd = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TransformerEnd.prototype.export.call (this, obj, false);

                base.export_element (obj, "PowerTransformerEnd", "b", "b",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "b0", "b0",  base.from_string, fields);
                base.export_attribute (obj, "PowerTransformerEnd", "connectionKind", "connectionKind", fields);
                base.export_element (obj, "PowerTransformerEnd", "g", "g",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "g0", "g0",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "phaseAngleClock", "phaseAngleClock",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "r", "r",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "ratedS", "ratedS",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "ratedU", "ratedU",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "x", "x",  base.from_string, fields);
                base.export_element (obj, "PowerTransformerEnd", "x0", "x0",  base.from_string, fields);
                base.export_attribute (obj, "PowerTransformerEnd", "PowerTransformer", "PowerTransformer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PowerTransformerEnd_collapse" aria-expanded="true" aria-controls="PowerTransformerEnd_collapse" style="margin-left: 10px;">PowerTransformerEnd</a></legend>
                    <div id="PowerTransformerEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerEnd.prototype.template.call (this) +
                    `
                    {{#b}}<div><b>b</b>: {{b}}</div>{{/b}}
                    {{#b0}}<div><b>b0</b>: {{b0}}</div>{{/b0}}
                    {{#connectionKind}}<div><b>connectionKind</b>: {{connectionKind}}</div>{{/connectionKind}}
                    {{#g}}<div><b>g</b>: {{g}}</div>{{/g}}
                    {{#g0}}<div><b>g0</b>: {{g0}}</div>{{/g0}}
                    {{#phaseAngleClock}}<div><b>phaseAngleClock</b>: {{phaseAngleClock}}</div>{{/phaseAngleClock}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#ratedS}}<div><b>ratedS</b>: {{ratedS}}</div>{{/ratedS}}
                    {{#ratedU}}<div><b>ratedU</b>: {{ratedU}}</div>{{/ratedU}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#PowerTransformer}}<div><b>PowerTransformer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerTransformer}}&quot;);}); return false;'>{{PowerTransformer}}</a></div>{{/PowerTransformer}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.WindingConnection = []; if (!obj.connectionKind) obj.WindingConnection.push ({ id: '', selected: true}); for (var property in WindingConnection) obj.WindingConnection.push ({ id: property, selected: obj.connectionKind && obj.connectionKind.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.WindingConnection;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PowerTransformerEnd_collapse" aria-expanded="true" aria-controls="{{id}}_PowerTransformerEnd_collapse" style="margin-left: 10px;">PowerTransformerEnd</a></legend>
                    <div id="{{id}}_PowerTransformerEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerEnd.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b'>b: </label><div class='col-sm-8'><input id='{{id}}_b' class='form-control' type='text'{{#b}} value='{{b}}'{{/b}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0'>b0: </label><div class='col-sm-8'><input id='{{id}}_b0' class='form-control' type='text'{{#b0}} value='{{b0}}'{{/b0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_connectionKind'>connectionKind: </label><div class='col-sm-8'><select id='{{id}}_connectionKind' class='form-control custom-select'>{{#WindingConnection}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/WindingConnection}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g'>g: </label><div class='col-sm-8'><input id='{{id}}_g' class='form-control' type='text'{{#g}} value='{{g}}'{{/g}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0'>g0: </label><div class='col-sm-8'><input id='{{id}}_g0' class='form-control' type='text'{{#g0}} value='{{g0}}'{{/g0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseAngleClock'>phaseAngleClock: </label><div class='col-sm-8'><input id='{{id}}_phaseAngleClock' class='form-control' type='text'{{#phaseAngleClock}} value='{{phaseAngleClock}}'{{/phaseAngleClock}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedS'>ratedS: </label><div class='col-sm-8'><input id='{{id}}_ratedS' class='form-control' type='text'{{#ratedS}} value='{{ratedS}}'{{/ratedS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedU'>ratedU: </label><div class='col-sm-8'><input id='{{id}}_ratedU' class='form-control' type='text'{{#ratedU}} value='{{ratedU}}'{{/ratedU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerTransformer'>PowerTransformer: </label><div class='col-sm-8'><input id='{{id}}_PowerTransformer' class='form-control' type='text'{{#PowerTransformer}} value='{{PowerTransformer}}'{{/PowerTransformer}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PowerTransformerEnd" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b").value; if ("" != temp) obj.b = temp;
                temp = document.getElementById (id + "_b0").value; if ("" != temp) obj.b0 = temp;
                temp = document.getElementById (id + "_connectionKind").value; if ("" != temp) { temp = WindingConnection[temp]; if ("undefined" != typeof (temp)) obj.connectionKind = "http://iec.ch/TC57/2013/CIM-schema-cim16#WindingConnection." + temp; }
                temp = document.getElementById (id + "_g").value; if ("" != temp) obj.g = temp;
                temp = document.getElementById (id + "_g0").value; if ("" != temp) obj.g0 = temp;
                temp = document.getElementById (id + "_phaseAngleClock").value; if ("" != temp) obj.phaseAngleClock = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_ratedS").value; if ("" != temp) obj.ratedS = temp;
                temp = document.getElementById (id + "_ratedU").value; if ("" != temp) obj.ratedU = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_PowerTransformer").value; if ("" != temp) obj.PowerTransformer = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerTransformer", "0..1", "0..*", "PowerTransformer", "PowerTransformerEnd"]
                        ]
                    )
                );
            }
        }

        /**
         * Transformer tank end represents an individual winding for unbalanced models or for transformer tanks connected into a bank (and bank is modelled with the PowerTransformer).
         *
         */
        class TransformerTankEnd extends TransformerEnd
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransformerTankEnd;
                if (null == bucket)
                   cim_data.TransformerTankEnd = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransformerTankEnd[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TransformerEnd.prototype.parse.call (this, context, sub);
                obj.cls = "TransformerTankEnd";
                base.parse_element (/<cim:TransformerTankEnd.phases>([\s\S]*?)<\/cim:TransformerTankEnd.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_attribute (/<cim:TransformerTankEnd.TransformerTank\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerTank", sub, context);
                var bucket = context.parsed.TransformerTankEnd;
                if (null == bucket)
                   context.parsed.TransformerTankEnd = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TransformerEnd.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransformerTankEnd", "phases", "phases",  base.from_string, fields);
                base.export_attribute (obj, "TransformerTankEnd", "TransformerTank", "TransformerTank", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransformerTankEnd_collapse" aria-expanded="true" aria-controls="TransformerTankEnd_collapse" style="margin-left: 10px;">TransformerTankEnd</a></legend>
                    <div id="TransformerTankEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerEnd.prototype.template.call (this) +
                    `
                    {{#phases}}<div><b>phases</b>: {{phases}}</div>{{/phases}}
                    {{#TransformerTank}}<div><b>TransformerTank</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerTank}}&quot;);}); return false;'>{{TransformerTank}}</a></div>{{/TransformerTank}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransformerTankEnd_collapse" aria-expanded="true" aria-controls="{{id}}_TransformerTankEnd_collapse" style="margin-left: 10px;">TransformerTankEnd</a></legend>
                    <div id="{{id}}_TransformerTankEnd_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TransformerEnd.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phases'>phases: </label><div class='col-sm-8'><input id='{{id}}_phases' class='form-control' type='text'{{#phases}} value='{{phases}}'{{/phases}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerTank'>TransformerTank: </label><div class='col-sm-8'><input id='{{id}}_TransformerTank' class='form-control' type='text'{{#TransformerTank}} value='{{TransformerTank}}'{{/TransformerTank}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransformerTankEnd" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_phases").value; if ("" != temp) obj.phases = temp;
                temp = document.getElementById (id + "_TransformerTank").value; if ("" != temp) obj.TransformerTank = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerTank", "0..1", "1..*", "TransformerTank", "TransformerTankEnds"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes behavior specific to tap changers, e.g. how the voltage at the end of a line varies with the load level and compensation of the voltage drop by tap adjustment.
         *
         */
        class TapChangerControl extends RegulatingControl
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TapChangerControl;
                if (null == bucket)
                   cim_data.TapChangerControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TapChangerControl[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingControl.prototype.parse.call (this, context, sub);
                obj.cls = "TapChangerControl";
                base.parse_element (/<cim:TapChangerControl.limitVoltage>([\s\S]*?)<\/cim:TapChangerControl.limitVoltage>/g, obj, "limitVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerControl.lineDropCompensation>([\s\S]*?)<\/cim:TapChangerControl.lineDropCompensation>/g, obj, "lineDropCompensation", base.to_boolean, sub, context);
                base.parse_element (/<cim:TapChangerControl.lineDropR>([\s\S]*?)<\/cim:TapChangerControl.lineDropR>/g, obj, "lineDropR", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerControl.lineDropX>([\s\S]*?)<\/cim:TapChangerControl.lineDropX>/g, obj, "lineDropX", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerControl.reverseLineDropR>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropR>/g, obj, "reverseLineDropR", base.to_string, sub, context);
                base.parse_element (/<cim:TapChangerControl.reverseLineDropX>([\s\S]*?)<\/cim:TapChangerControl.reverseLineDropX>/g, obj, "reverseLineDropX", base.to_string, sub, context);
                base.parse_attributes (/<cim:TapChangerControl.TapChanger\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TapChanger", sub, context);
                var bucket = context.parsed.TapChangerControl;
                if (null == bucket)
                   context.parsed.TapChangerControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingControl.prototype.export.call (this, obj, false);

                base.export_element (obj, "TapChangerControl", "limitVoltage", "limitVoltage",  base.from_string, fields);
                base.export_element (obj, "TapChangerControl", "lineDropCompensation", "lineDropCompensation",  base.from_boolean, fields);
                base.export_element (obj, "TapChangerControl", "lineDropR", "lineDropR",  base.from_string, fields);
                base.export_element (obj, "TapChangerControl", "lineDropX", "lineDropX",  base.from_string, fields);
                base.export_element (obj, "TapChangerControl", "reverseLineDropR", "reverseLineDropR",  base.from_string, fields);
                base.export_element (obj, "TapChangerControl", "reverseLineDropX", "reverseLineDropX",  base.from_string, fields);
                base.export_attributes (obj, "TapChangerControl", "TapChanger", "TapChanger", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TapChangerControl_collapse" aria-expanded="true" aria-controls="TapChangerControl_collapse" style="margin-left: 10px;">TapChangerControl</a></legend>
                    <div id="TapChangerControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingControl.prototype.template.call (this) +
                    `
                    {{#limitVoltage}}<div><b>limitVoltage</b>: {{limitVoltage}}</div>{{/limitVoltage}}
                    {{#lineDropCompensation}}<div><b>lineDropCompensation</b>: {{lineDropCompensation}}</div>{{/lineDropCompensation}}
                    {{#lineDropR}}<div><b>lineDropR</b>: {{lineDropR}}</div>{{/lineDropR}}
                    {{#lineDropX}}<div><b>lineDropX</b>: {{lineDropX}}</div>{{/lineDropX}}
                    {{#reverseLineDropR}}<div><b>reverseLineDropR</b>: {{reverseLineDropR}}</div>{{/reverseLineDropR}}
                    {{#reverseLineDropX}}<div><b>reverseLineDropX</b>: {{reverseLineDropX}}</div>{{/reverseLineDropX}}
                    {{#TapChanger}}<div><b>TapChanger</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TapChanger}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.TapChanger) obj.TapChanger_string = obj.TapChanger.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TapChanger_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TapChangerControl_collapse" aria-expanded="true" aria-controls="{{id}}_TapChangerControl_collapse" style="margin-left: 10px;">TapChangerControl</a></legend>
                    <div id="{{id}}_TapChangerControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingControl.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_limitVoltage'>limitVoltage: </label><div class='col-sm-8'><input id='{{id}}_limitVoltage' class='form-control' type='text'{{#limitVoltage}} value='{{limitVoltage}}'{{/limitVoltage}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_lineDropCompensation'>lineDropCompensation: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_lineDropCompensation' class='form-check-input' type='checkbox'{{#lineDropCompensation}} checked{{/lineDropCompensation}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineDropR'>lineDropR: </label><div class='col-sm-8'><input id='{{id}}_lineDropR' class='form-control' type='text'{{#lineDropR}} value='{{lineDropR}}'{{/lineDropR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lineDropX'>lineDropX: </label><div class='col-sm-8'><input id='{{id}}_lineDropX' class='form-control' type='text'{{#lineDropX}} value='{{lineDropX}}'{{/lineDropX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reverseLineDropR'>reverseLineDropR: </label><div class='col-sm-8'><input id='{{id}}_reverseLineDropR' class='form-control' type='text'{{#reverseLineDropR}} value='{{reverseLineDropR}}'{{/reverseLineDropR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_reverseLineDropX'>reverseLineDropX: </label><div class='col-sm-8'><input id='{{id}}_reverseLineDropX' class='form-control' type='text'{{#reverseLineDropX}} value='{{reverseLineDropX}}'{{/reverseLineDropX}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TapChangerControl" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_limitVoltage").value; if ("" != temp) obj.limitVoltage = temp;
                temp = document.getElementById (id + "_lineDropCompensation").checked; if (temp) obj.lineDropCompensation = true;
                temp = document.getElementById (id + "_lineDropR").value; if ("" != temp) obj.lineDropR = temp;
                temp = document.getElementById (id + "_lineDropX").value; if ("" != temp) obj.lineDropX = temp;
                temp = document.getElementById (id + "_reverseLineDropR").value; if ("" != temp) obj.reverseLineDropR = temp;
                temp = document.getElementById (id + "_reverseLineDropX").value; if ("" != temp) obj.reverseLineDropX = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TapChanger", "0..*", "0..1", "TapChanger", "TapChangerControl"]
                        ]
                    )
                );
            }
        }

        /**
         * A transformer phase shifting tap model that controls the phase angle difference across the power transformer and potentially the active power flow through the power transformer.
         *
         * This phase tap model may also impact the voltage magnitude.
         *
         */
        class PhaseTapChanger extends TapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChanger;
                if (null == bucket)
                   cim_data.PhaseTapChanger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChanger[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChanger";
                base.parse_attribute (/<cim:PhaseTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
                var bucket = context.parsed.PhaseTapChanger;
                if (null == bucket)
                   context.parsed.PhaseTapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TapChanger.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PhaseTapChanger", "TransformerEnd", "TransformerEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChanger_collapse" aria-expanded="true" aria-controls="PhaseTapChanger_collapse" style="margin-left: 10px;">PhaseTapChanger</a></legend>
                    <div id="PhaseTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChanger.prototype.template.call (this) +
                    `
                    {{#TransformerEnd}}<div><b>TransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerEnd}}&quot;);}); return false;'>{{TransformerEnd}}</a></div>{{/TransformerEnd}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChanger_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChanger_collapse" style="margin-left: 10px;">PhaseTapChanger</a></legend>
                    <div id="{{id}}_PhaseTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChanger.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerEnd'>TransformerEnd: </label><div class='col-sm-8'><input id='{{id}}_TransformerEnd' class='form-control' type='text'{{#TransformerEnd}} value='{{TransformerEnd}}'{{/TransformerEnd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChanger" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_TransformerEnd").value; if ("" != temp) obj.TransformerEnd = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TransformerEnd", "1", "0..1", "TransformerEnd", "PhaseTapChanger"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes a tap changer with a linear relation between the tap step and the phase angle difference across the transformer.
         *
         * This is a mathematical model that is an approximation of a real phase tap changer.
         *
         */
        class PhaseTapChangerLinear extends PhaseTapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerLinear;
                if (null == bucket)
                   cim_data.PhaseTapChangerLinear = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerLinear[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PhaseTapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerLinear";
                base.parse_element (/<cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>([\s\S]*?)<\/cim:PhaseTapChangerLinear.stepPhaseShiftIncrement>/g, obj, "stepPhaseShiftIncrement", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseTapChangerLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMax>/g, obj, "xMax", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseTapChangerLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerLinear.xMin>/g, obj, "xMin", base.to_string, sub, context);
                var bucket = context.parsed.PhaseTapChangerLinear;
                if (null == bucket)
                   context.parsed.PhaseTapChangerLinear = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PhaseTapChanger.prototype.export.call (this, obj, false);

                base.export_element (obj, "PhaseTapChangerLinear", "stepPhaseShiftIncrement", "stepPhaseShiftIncrement",  base.from_string, fields);
                base.export_element (obj, "PhaseTapChangerLinear", "xMax", "xMax",  base.from_string, fields);
                base.export_element (obj, "PhaseTapChangerLinear", "xMin", "xMin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerLinear_collapse" aria-expanded="true" aria-controls="PhaseTapChangerLinear_collapse" style="margin-left: 10px;">PhaseTapChangerLinear</a></legend>
                    <div id="PhaseTapChangerLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.template.call (this) +
                    `
                    {{#stepPhaseShiftIncrement}}<div><b>stepPhaseShiftIncrement</b>: {{stepPhaseShiftIncrement}}</div>{{/stepPhaseShiftIncrement}}
                    {{#xMax}}<div><b>xMax</b>: {{xMax}}</div>{{/xMax}}
                    {{#xMin}}<div><b>xMin</b>: {{xMin}}</div>{{/xMin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerLinear_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerLinear_collapse" style="margin-left: 10px;">PhaseTapChangerLinear</a></legend>
                    <div id="{{id}}_PhaseTapChangerLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepPhaseShiftIncrement'>stepPhaseShiftIncrement: </label><div class='col-sm-8'><input id='{{id}}_stepPhaseShiftIncrement' class='form-control' type='text'{{#stepPhaseShiftIncrement}} value='{{stepPhaseShiftIncrement}}'{{/stepPhaseShiftIncrement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xMax'>xMax: </label><div class='col-sm-8'><input id='{{id}}_xMax' class='form-control' type='text'{{#xMax}} value='{{xMax}}'{{/xMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xMin'>xMin: </label><div class='col-sm-8'><input id='{{id}}_xMin' class='form-control' type='text'{{#xMin}} value='{{xMin}}'{{/xMin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChangerLinear" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_stepPhaseShiftIncrement").value; if ("" != temp) obj.stepPhaseShiftIncrement = temp;
                temp = document.getElementById (id + "_xMax").value; if ("" != temp) obj.xMax = temp;
                temp = document.getElementById (id + "_xMin").value; if ("" != temp) obj.xMin = temp;

                return (obj);
            }
        }

        /**
         * A tap changer that changes the voltage ratio impacting the voltage magnitude but not the phase angle across the transformer.
         *
         */
        class RatioTapChanger extends TapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RatioTapChanger;
                if (null == bucket)
                   cim_data.RatioTapChanger = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RatioTapChanger[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "RatioTapChanger";
                base.parse_element (/<cim:RatioTapChanger.stepVoltageIncrement>([\s\S]*?)<\/cim:RatioTapChanger.stepVoltageIncrement>/g, obj, "stepVoltageIncrement", base.to_string, sub, context);
                base.parse_attribute (/<cim:RatioTapChanger.tculControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "tculControlMode", sub, context);
                base.parse_attribute (/<cim:RatioTapChanger.RatioTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RatioTapChangerTable", sub, context);
                base.parse_attribute (/<cim:RatioTapChanger.TransformerEnd\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransformerEnd", sub, context);
                var bucket = context.parsed.RatioTapChanger;
                if (null == bucket)
                   context.parsed.RatioTapChanger = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TapChanger.prototype.export.call (this, obj, false);

                base.export_element (obj, "RatioTapChanger", "stepVoltageIncrement", "stepVoltageIncrement",  base.from_string, fields);
                base.export_attribute (obj, "RatioTapChanger", "tculControlMode", "tculControlMode", fields);
                base.export_attribute (obj, "RatioTapChanger", "RatioTapChangerTable", "RatioTapChangerTable", fields);
                base.export_attribute (obj, "RatioTapChanger", "TransformerEnd", "TransformerEnd", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RatioTapChanger_collapse" aria-expanded="true" aria-controls="RatioTapChanger_collapse" style="margin-left: 10px;">RatioTapChanger</a></legend>
                    <div id="RatioTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChanger.prototype.template.call (this) +
                    `
                    {{#stepVoltageIncrement}}<div><b>stepVoltageIncrement</b>: {{stepVoltageIncrement}}</div>{{/stepVoltageIncrement}}
                    {{#tculControlMode}}<div><b>tculControlMode</b>: {{tculControlMode}}</div>{{/tculControlMode}}
                    {{#RatioTapChangerTable}}<div><b>RatioTapChangerTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{RatioTapChangerTable}}&quot;);}); return false;'>{{RatioTapChangerTable}}</a></div>{{/RatioTapChangerTable}}
                    {{#TransformerEnd}}<div><b>TransformerEnd</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransformerEnd}}&quot;);}); return false;'>{{TransformerEnd}}</a></div>{{/TransformerEnd}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.TransformerControlMode = []; if (!obj.tculControlMode) obj.TransformerControlMode.push ({ id: '', selected: true}); for (var property in TransformerControlMode) obj.TransformerControlMode.push ({ id: property, selected: obj.tculControlMode && obj.tculControlMode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.TransformerControlMode;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RatioTapChanger_collapse" aria-expanded="true" aria-controls="{{id}}_RatioTapChanger_collapse" style="margin-left: 10px;">RatioTapChanger</a></legend>
                    <div id="{{id}}_RatioTapChanger_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TapChanger.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_stepVoltageIncrement'>stepVoltageIncrement: </label><div class='col-sm-8'><input id='{{id}}_stepVoltageIncrement' class='form-control' type='text'{{#stepVoltageIncrement}} value='{{stepVoltageIncrement}}'{{/stepVoltageIncrement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tculControlMode'>tculControlMode: </label><div class='col-sm-8'><select id='{{id}}_tculControlMode' class='form-control custom-select'>{{#TransformerControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/TransformerControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_RatioTapChangerTable'>RatioTapChangerTable: </label><div class='col-sm-8'><input id='{{id}}_RatioTapChangerTable' class='form-control' type='text'{{#RatioTapChangerTable}} value='{{RatioTapChangerTable}}'{{/RatioTapChangerTable}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransformerEnd'>TransformerEnd: </label><div class='col-sm-8'><input id='{{id}}_TransformerEnd' class='form-control' type='text'{{#TransformerEnd}} value='{{TransformerEnd}}'{{/TransformerEnd}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RatioTapChanger" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_stepVoltageIncrement").value; if ("" != temp) obj.stepVoltageIncrement = temp;
                temp = document.getElementById (id + "_tculControlMode").value; if ("" != temp) { temp = TransformerControlMode[temp]; if ("undefined" != typeof (temp)) obj.tculControlMode = "http://iec.ch/TC57/2013/CIM-schema-cim16#TransformerControlMode." + temp; }
                temp = document.getElementById (id + "_RatioTapChangerTable").value; if ("" != temp) obj.RatioTapChangerTable = temp;
                temp = document.getElementById (id + "_TransformerEnd").value; if ("" != temp) obj.TransformerEnd = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["RatioTapChangerTable", "0..1", "0..*", "RatioTapChangerTable", "RatioTapChanger"],
                            ["TransformerEnd", "1", "0..1", "TransformerEnd", "RatioTapChanger"]
                        ]
                    )
                );
            }
        }

        /**
         * The non-linear phase tap changer describes the non-linear behavior of a phase tap changer.
         *
         * This is a base class for the symmetrical and asymmetrical phase tap changer models. The details of these models can be found in the IEC 61970-301 document.
         *
         */
        class PhaseTapChangerNonLinear extends PhaseTapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerNonLinear;
                if (null == bucket)
                   cim_data.PhaseTapChangerNonLinear = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerNonLinear[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PhaseTapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerNonLinear";
                base.parse_element (/<cim:PhaseTapChangerNonLinear.voltageStepIncrement>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.voltageStepIncrement>/g, obj, "voltageStepIncrement", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseTapChangerNonLinear.xMax>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMax>/g, obj, "xMax", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseTapChangerNonLinear.xMin>([\s\S]*?)<\/cim:PhaseTapChangerNonLinear.xMin>/g, obj, "xMin", base.to_string, sub, context);
                var bucket = context.parsed.PhaseTapChangerNonLinear;
                if (null == bucket)
                   context.parsed.PhaseTapChangerNonLinear = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PhaseTapChanger.prototype.export.call (this, obj, false);

                base.export_element (obj, "PhaseTapChangerNonLinear", "voltageStepIncrement", "voltageStepIncrement",  base.from_string, fields);
                base.export_element (obj, "PhaseTapChangerNonLinear", "xMax", "xMax",  base.from_string, fields);
                base.export_element (obj, "PhaseTapChangerNonLinear", "xMin", "xMin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerNonLinear_collapse" aria-expanded="true" aria-controls="PhaseTapChangerNonLinear_collapse" style="margin-left: 10px;">PhaseTapChangerNonLinear</a></legend>
                    <div id="PhaseTapChangerNonLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.template.call (this) +
                    `
                    {{#voltageStepIncrement}}<div><b>voltageStepIncrement</b>: {{voltageStepIncrement}}</div>{{/voltageStepIncrement}}
                    {{#xMax}}<div><b>xMax</b>: {{xMax}}</div>{{/xMax}}
                    {{#xMin}}<div><b>xMin</b>: {{xMin}}</div>{{/xMin}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerNonLinear_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerNonLinear_collapse" style="margin-left: 10px;">PhaseTapChangerNonLinear</a></legend>
                    <div id="{{id}}_PhaseTapChangerNonLinear_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageStepIncrement'>voltageStepIncrement: </label><div class='col-sm-8'><input id='{{id}}_voltageStepIncrement' class='form-control' type='text'{{#voltageStepIncrement}} value='{{voltageStepIncrement}}'{{/voltageStepIncrement}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xMax'>xMax: </label><div class='col-sm-8'><input id='{{id}}_xMax' class='form-control' type='text'{{#xMax}} value='{{xMax}}'{{/xMax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xMin'>xMin: </label><div class='col-sm-8'><input id='{{id}}_xMin' class='form-control' type='text'{{#xMin}} value='{{xMin}}'{{/xMin}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChangerNonLinear" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_voltageStepIncrement").value; if ("" != temp) obj.voltageStepIncrement = temp;
                temp = document.getElementById (id + "_xMax").value; if ("" != temp) obj.xMax = temp;
                temp = document.getElementById (id + "_xMin").value; if ("" != temp) obj.xMin = temp;

                return (obj);
            }
        }

        class PhaseTapChangerTabular extends PhaseTapChanger
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerTabular;
                if (null == bucket)
                   cim_data.PhaseTapChangerTabular = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerTabular[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PhaseTapChanger.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerTabular";
                base.parse_attribute (/<cim:PhaseTapChangerTabular.PhaseTapChangerTable\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PhaseTapChangerTable", sub, context);
                var bucket = context.parsed.PhaseTapChangerTabular;
                if (null == bucket)
                   context.parsed.PhaseTapChangerTabular = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PhaseTapChanger.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "PhaseTapChangerTabular", "PhaseTapChangerTable", "PhaseTapChangerTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerTabular_collapse" aria-expanded="true" aria-controls="PhaseTapChangerTabular_collapse" style="margin-left: 10px;">PhaseTapChangerTabular</a></legend>
                    <div id="PhaseTapChangerTabular_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.template.call (this) +
                    `
                    {{#PhaseTapChangerTable}}<div><b>PhaseTapChangerTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PhaseTapChangerTable}}&quot;);}); return false;'>{{PhaseTapChangerTable}}</a></div>{{/PhaseTapChangerTable}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerTabular_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerTabular_collapse" style="margin-left: 10px;">PhaseTapChangerTabular</a></legend>
                    <div id="{{id}}_PhaseTapChangerTabular_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChanger.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PhaseTapChangerTable'>PhaseTapChangerTable: </label><div class='col-sm-8'><input id='{{id}}_PhaseTapChangerTable' class='form-control' type='text'{{#PhaseTapChangerTable}} value='{{PhaseTapChangerTable}}'{{/PhaseTapChangerTable}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChangerTabular" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PhaseTapChangerTable").value; if ("" != temp) obj.PhaseTapChangerTable = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PhaseTapChangerTable", "0..1", "0..*", "PhaseTapChangerTable", "PhaseTapChangerTabular"]
                        ]
                    )
                );
            }
        }

        /**
         * Describes the tap model for an asymmetrical phase shifting transformer in which the difference voltage vector adds to the primary side voltage.
         *
         * The angle between the primary side voltage and the difference voltage is named the winding connection angle. The phase shift depends on both the difference voltage magnitude and the winding connection angle.
         *
         */
        class PhaseTapChangerAsymmetrical extends PhaseTapChangerNonLinear
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerAsymmetrical;
                if (null == bucket)
                   cim_data.PhaseTapChangerAsymmetrical = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerAsymmetrical[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PhaseTapChangerNonLinear.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerAsymmetrical";
                base.parse_element (/<cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>([\s\S]*?)<\/cim:PhaseTapChangerAsymmetrical.windingConnectionAngle>/g, obj, "windingConnectionAngle", base.to_string, sub, context);
                var bucket = context.parsed.PhaseTapChangerAsymmetrical;
                if (null == bucket)
                   context.parsed.PhaseTapChangerAsymmetrical = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PhaseTapChangerNonLinear.prototype.export.call (this, obj, false);

                base.export_element (obj, "PhaseTapChangerAsymmetrical", "windingConnectionAngle", "windingConnectionAngle",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerAsymmetrical_collapse" aria-expanded="true" aria-controls="PhaseTapChangerAsymmetrical_collapse" style="margin-left: 10px;">PhaseTapChangerAsymmetrical</a></legend>
                    <div id="PhaseTapChangerAsymmetrical_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChangerNonLinear.prototype.template.call (this) +
                    `
                    {{#windingConnectionAngle}}<div><b>windingConnectionAngle</b>: {{windingConnectionAngle}}</div>{{/windingConnectionAngle}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerAsymmetrical_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerAsymmetrical_collapse" style="margin-left: 10px;">PhaseTapChangerAsymmetrical</a></legend>
                    <div id="{{id}}_PhaseTapChangerAsymmetrical_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChangerNonLinear.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_windingConnectionAngle'>windingConnectionAngle: </label><div class='col-sm-8'><input id='{{id}}_windingConnectionAngle' class='form-control' type='text'{{#windingConnectionAngle}} value='{{windingConnectionAngle}}'{{/windingConnectionAngle}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PhaseTapChangerAsymmetrical" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_windingConnectionAngle").value; if ("" != temp) obj.windingConnectionAngle = temp;

                return (obj);
            }
        }

        /**
         * Describes a symmetrical phase shifting transformer tap model in which the secondary side voltage magnitude is the same as at the primary side.
         *
         * The difference voltage magnitude is the base in an equal-sided triangle where the sides corresponds to the primary and secondary voltages. The phase angle difference corresponds to the top angle and can be expressed as twice the arctangent of half the total difference voltage.
         *
         */
        class PhaseTapChangerSymmetrical extends PhaseTapChangerNonLinear
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.PhaseTapChangerSymmetrical;
                if (null == bucket)
                   cim_data.PhaseTapChangerSymmetrical = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PhaseTapChangerSymmetrical[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = PhaseTapChangerNonLinear.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseTapChangerSymmetrical";
                var bucket = context.parsed.PhaseTapChangerSymmetrical;
                if (null == bucket)
                   context.parsed.PhaseTapChangerSymmetrical = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = PhaseTapChangerNonLinear.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PhaseTapChangerSymmetrical_collapse" aria-expanded="true" aria-controls="PhaseTapChangerSymmetrical_collapse" style="margin-left: 10px;">PhaseTapChangerSymmetrical</a></legend>
                    <div id="PhaseTapChangerSymmetrical_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChangerNonLinear.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PhaseTapChangerSymmetrical_collapse" aria-expanded="true" aria-controls="{{id}}_PhaseTapChangerSymmetrical_collapse" style="margin-left: 10px;">PhaseTapChangerSymmetrical</a></legend>
                    <div id="{{id}}_PhaseTapChangerSymmetrical_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + PhaseTapChangerNonLinear.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "PhaseTapChangerSymmetrical" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * A per phase linear shunt compensator has banks or sections with equal admittance values.
         *
         */
        class LinearShuntCompensatorPhase extends ShuntCompensatorPhase
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LinearShuntCompensatorPhase;
                if (null == bucket)
                   cim_data.LinearShuntCompensatorPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LinearShuntCompensatorPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ShuntCompensatorPhase.prototype.parse.call (this, context, sub);
                obj.cls = "LinearShuntCompensatorPhase";
                base.parse_element (/<cim:LinearShuntCompensatorPhase.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.gPerSection>/g, obj, "gPerSection", base.to_string, sub, context);
                base.parse_element (/<cim:LinearShuntCompensatorPhase.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensatorPhase.bPerSection>/g, obj, "bPerSection", base.to_string, sub, context);
                var bucket = context.parsed.LinearShuntCompensatorPhase;
                if (null == bucket)
                   context.parsed.LinearShuntCompensatorPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ShuntCompensatorPhase.prototype.export.call (this, obj, false);

                base.export_element (obj, "LinearShuntCompensatorPhase", "gPerSection", "gPerSection",  base.from_string, fields);
                base.export_element (obj, "LinearShuntCompensatorPhase", "bPerSection", "bPerSection",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LinearShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="LinearShuntCompensatorPhase_collapse" style="margin-left: 10px;">LinearShuntCompensatorPhase</a></legend>
                    <div id="LinearShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensatorPhase.prototype.template.call (this) +
                    `
                    {{#gPerSection}}<div><b>gPerSection</b>: {{gPerSection}}</div>{{/gPerSection}}
                    {{#bPerSection}}<div><b>bPerSection</b>: {{bPerSection}}</div>{{/bPerSection}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LinearShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="{{id}}_LinearShuntCompensatorPhase_collapse" style="margin-left: 10px;">LinearShuntCompensatorPhase</a></legend>
                    <div id="{{id}}_LinearShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensatorPhase.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gPerSection'>gPerSection: </label><div class='col-sm-8'><input id='{{id}}_gPerSection' class='form-control' type='text'{{#gPerSection}} value='{{gPerSection}}'{{/gPerSection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bPerSection'>bPerSection: </label><div class='col-sm-8'><input id='{{id}}_bPerSection' class='form-control' type='text'{{#bPerSection}} value='{{bPerSection}}'{{/bPerSection}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LinearShuntCompensatorPhase" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_gPerSection").value; if ("" != temp) obj.gPerSection = temp;
                temp = document.getElementById (id + "_bPerSection").value; if ("" != temp) obj.bPerSection = temp;

                return (obj);
            }
        }

        /**
         * A per phase non linear shunt compensator has bank or section admittance values that differs.
         *
         */
        class NonlinearShuntCompensatorPhase extends ShuntCompensatorPhase
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonlinearShuntCompensatorPhase;
                if (null == bucket)
                   cim_data.NonlinearShuntCompensatorPhase = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonlinearShuntCompensatorPhase[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ShuntCompensatorPhase.prototype.parse.call (this, context, sub);
                obj.cls = "NonlinearShuntCompensatorPhase";
                base.parse_attributes (/<cim:NonlinearShuntCompensatorPhase.NonlinearShuntCompensatorPhasePoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensatorPhasePoints", sub, context);
                var bucket = context.parsed.NonlinearShuntCompensatorPhase;
                if (null == bucket)
                   context.parsed.NonlinearShuntCompensatorPhase = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ShuntCompensatorPhase.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NonlinearShuntCompensatorPhase", "NonlinearShuntCompensatorPhasePoints", "NonlinearShuntCompensatorPhasePoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonlinearShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="NonlinearShuntCompensatorPhase_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPhase</a></legend>
                    <div id="NonlinearShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensatorPhase.prototype.template.call (this) +
                    `
                    {{#NonlinearShuntCompensatorPhasePoints}}<div><b>NonlinearShuntCompensatorPhasePoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/NonlinearShuntCompensatorPhasePoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.NonlinearShuntCompensatorPhasePoints) obj.NonlinearShuntCompensatorPhasePoints_string = obj.NonlinearShuntCompensatorPhasePoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.NonlinearShuntCompensatorPhasePoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonlinearShuntCompensatorPhase_collapse" aria-expanded="true" aria-controls="{{id}}_NonlinearShuntCompensatorPhase_collapse" style="margin-left: 10px;">NonlinearShuntCompensatorPhase</a></legend>
                    <div id="{{id}}_NonlinearShuntCompensatorPhase_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensatorPhase.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "NonlinearShuntCompensatorPhase" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NonlinearShuntCompensatorPhasePoints", "1..*", "1", "NonlinearShuntCompensatorPhasePoint", "NonlinearShuntCompensatorPhase"]
                        ]
                    )
                );
            }
        }

        /**
         * A shunt capacitor or reactor or switchable bank of shunt capacitors or reactors.
         *
         * A section of a shunt compensator is an individual capacitor or reactor.  A negative value for reactivePerSection indicates that the compensator is a reactor. ShuntCompensator is a single terminal device.  Ground is implied.
         *
         */
        class ShuntCompensator extends RegulatingCondEq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ShuntCompensator;
                if (null == bucket)
                   cim_data.ShuntCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShuntCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingCondEq.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensator";
                base.parse_element (/<cim:ShuntCompensator.aVRDelay>([\s\S]*?)<\/cim:ShuntCompensator.aVRDelay>/g, obj, "aVRDelay", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensator.grounded>([\s\S]*?)<\/cim:ShuntCompensator.grounded>/g, obj, "grounded", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensator.maximumSections>([\s\S]*?)<\/cim:ShuntCompensator.maximumSections>/g, obj, "maximumSections", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensator.nomU>([\s\S]*?)<\/cim:ShuntCompensator.nomU>/g, obj, "nomU", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensator.normalSections>([\s\S]*?)<\/cim:ShuntCompensator.normalSections>/g, obj, "normalSections", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensator.phaseConnection\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "phaseConnection", sub, context);
                base.parse_element (/<cim:ShuntCompensator.switchOnCount>([\s\S]*?)<\/cim:ShuntCompensator.switchOnCount>/g, obj, "switchOnCount", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensator.switchOnDate>([\s\S]*?)<\/cim:ShuntCompensator.switchOnDate>/g, obj, "switchOnDate", base.to_datetime, sub, context);
                base.parse_element (/<cim:ShuntCompensator.voltageSensitivity>([\s\S]*?)<\/cim:ShuntCompensator.voltageSensitivity>/g, obj, "voltageSensitivity", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensator.sections>([\s\S]*?)<\/cim:ShuntCompensator.sections>/g, obj, "sections", base.to_float, sub, context);
                base.parse_attributes (/<cim:ShuntCompensator.ShuntCompensatorPhase\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorPhase", sub, context);
                base.parse_attribute (/<cim:ShuntCompensator.SvShuntCompensatorSections\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SvShuntCompensatorSections", sub, context);
                var bucket = context.parsed.ShuntCompensator;
                if (null == bucket)
                   context.parsed.ShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingCondEq.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShuntCompensator", "aVRDelay", "aVRDelay",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensator", "grounded", "grounded",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensator", "maximumSections", "maximumSections",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensator", "nomU", "nomU",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensator", "normalSections", "normalSections",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensator", "phaseConnection", "phaseConnection", fields);
                base.export_element (obj, "ShuntCompensator", "switchOnCount", "switchOnCount",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensator", "switchOnDate", "switchOnDate",  base.from_datetime, fields);
                base.export_element (obj, "ShuntCompensator", "voltageSensitivity", "voltageSensitivity",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensator", "sections", "sections",  base.from_float, fields);
                base.export_attributes (obj, "ShuntCompensator", "ShuntCompensatorPhase", "ShuntCompensatorPhase", fields);
                base.export_attribute (obj, "ShuntCompensator", "SvShuntCompensatorSections", "SvShuntCompensatorSections", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShuntCompensator_collapse" aria-expanded="true" aria-controls="ShuntCompensator_collapse" style="margin-left: 10px;">ShuntCompensator</a></legend>
                    <div id="ShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.template.call (this) +
                    `
                    {{#aVRDelay}}<div><b>aVRDelay</b>: {{aVRDelay}}</div>{{/aVRDelay}}
                    {{#grounded}}<div><b>grounded</b>: {{grounded}}</div>{{/grounded}}
                    {{#maximumSections}}<div><b>maximumSections</b>: {{maximumSections}}</div>{{/maximumSections}}
                    {{#nomU}}<div><b>nomU</b>: {{nomU}}</div>{{/nomU}}
                    {{#normalSections}}<div><b>normalSections</b>: {{normalSections}}</div>{{/normalSections}}
                    {{#phaseConnection}}<div><b>phaseConnection</b>: {{phaseConnection}}</div>{{/phaseConnection}}
                    {{#switchOnCount}}<div><b>switchOnCount</b>: {{switchOnCount}}</div>{{/switchOnCount}}
                    {{#switchOnDate}}<div><b>switchOnDate</b>: {{switchOnDate}}</div>{{/switchOnDate}}
                    {{#voltageSensitivity}}<div><b>voltageSensitivity</b>: {{voltageSensitivity}}</div>{{/voltageSensitivity}}
                    {{#sections}}<div><b>sections</b>: {{sections}}</div>{{/sections}}
                    {{#ShuntCompensatorPhase}}<div><b>ShuntCompensatorPhase</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ShuntCompensatorPhase}}
                    {{#SvShuntCompensatorSections}}<div><b>SvShuntCompensatorSections</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SvShuntCompensatorSections}}&quot;);}); return false;'>{{SvShuntCompensatorSections}}</a></div>{{/SvShuntCompensatorSections}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.PhaseShuntConnectionKind = []; if (!obj.phaseConnection) obj.PhaseShuntConnectionKind.push ({ id: '', selected: true}); for (var property in PhaseShuntConnectionKind) obj.PhaseShuntConnectionKind.push ({ id: property, selected: obj.phaseConnection && obj.phaseConnection.endsWith ('.' + property)});
                if (obj.ShuntCompensatorPhase) obj.ShuntCompensatorPhase_string = obj.ShuntCompensatorPhase.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.PhaseShuntConnectionKind;
                delete obj.ShuntCompensatorPhase_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShuntCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensator_collapse" style="margin-left: 10px;">ShuntCompensator</a></legend>
                    <div id="{{id}}_ShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aVRDelay'>aVRDelay: </label><div class='col-sm-8'><input id='{{id}}_aVRDelay' class='form-control' type='text'{{#aVRDelay}} value='{{aVRDelay}}'{{/aVRDelay}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_grounded'>grounded: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_grounded' class='form-check-input' type='checkbox'{{#grounded}} checked{{/grounded}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maximumSections'>maximumSections: </label><div class='col-sm-8'><input id='{{id}}_maximumSections' class='form-control' type='text'{{#maximumSections}} value='{{maximumSections}}'{{/maximumSections}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nomU'>nomU: </label><div class='col-sm-8'><input id='{{id}}_nomU' class='form-control' type='text'{{#nomU}} value='{{nomU}}'{{/nomU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_normalSections'>normalSections: </label><div class='col-sm-8'><input id='{{id}}_normalSections' class='form-control' type='text'{{#normalSections}} value='{{normalSections}}'{{/normalSections}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_phaseConnection'>phaseConnection: </label><div class='col-sm-8'><select id='{{id}}_phaseConnection' class='form-control custom-select'>{{#PhaseShuntConnectionKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/PhaseShuntConnectionKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOnCount'>switchOnCount: </label><div class='col-sm-8'><input id='{{id}}_switchOnCount' class='form-control' type='text'{{#switchOnCount}} value='{{switchOnCount}}'{{/switchOnCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOnDate'>switchOnDate: </label><div class='col-sm-8'><input id='{{id}}_switchOnDate' class='form-control' type='text'{{#switchOnDate}} value='{{switchOnDate}}'{{/switchOnDate}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageSensitivity'>voltageSensitivity: </label><div class='col-sm-8'><input id='{{id}}_voltageSensitivity' class='form-control' type='text'{{#voltageSensitivity}} value='{{voltageSensitivity}}'{{/voltageSensitivity}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sections'>sections: </label><div class='col-sm-8'><input id='{{id}}_sections' class='form-control' type='text'{{#sections}} value='{{sections}}'{{/sections}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SvShuntCompensatorSections'>SvShuntCompensatorSections: </label><div class='col-sm-8'><input id='{{id}}_SvShuntCompensatorSections' class='form-control' type='text'{{#SvShuntCompensatorSections}} value='{{SvShuntCompensatorSections}}'{{/SvShuntCompensatorSections}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ShuntCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aVRDelay").value; if ("" != temp) obj.aVRDelay = temp;
                temp = document.getElementById (id + "_grounded").checked; if (temp) obj.grounded = true;
                temp = document.getElementById (id + "_maximumSections").value; if ("" != temp) obj.maximumSections = temp;
                temp = document.getElementById (id + "_nomU").value; if ("" != temp) obj.nomU = temp;
                temp = document.getElementById (id + "_normalSections").value; if ("" != temp) obj.normalSections = temp;
                temp = document.getElementById (id + "_phaseConnection").value; if ("" != temp) { temp = PhaseShuntConnectionKind[temp]; if ("undefined" != typeof (temp)) obj.phaseConnection = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseShuntConnectionKind." + temp; }
                temp = document.getElementById (id + "_switchOnCount").value; if ("" != temp) obj.switchOnCount = temp;
                temp = document.getElementById (id + "_switchOnDate").value; if ("" != temp) obj.switchOnDate = temp;
                temp = document.getElementById (id + "_voltageSensitivity").value; if ("" != temp) obj.voltageSensitivity = temp;
                temp = document.getElementById (id + "_sections").value; if ("" != temp) obj.sections = temp;
                temp = document.getElementById (id + "_SvShuntCompensatorSections").value; if ("" != temp) obj.SvShuntCompensatorSections = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ShuntCompensatorPhase", "0..*", "1", "ShuntCompensatorPhase", "ShuntCompensator"],
                            ["SvShuntCompensatorSections", "0..1", "1", "SvShuntCompensatorSections", "ShuntCompensator"]
                        ]
                    )
                );
            }
        }

        /**
         * A rotating machine which may be used as a generator or motor.
         *
         */
        class RotatingMachine extends RegulatingCondEq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RotatingMachine;
                if (null == bucket)
                   cim_data.RotatingMachine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RotatingMachine[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingCondEq.prototype.parse.call (this, context, sub);
                obj.cls = "RotatingMachine";
                base.parse_element (/<cim:RotatingMachine.ratedPowerFactor>([\s\S]*?)<\/cim:RotatingMachine.ratedPowerFactor>/g, obj, "ratedPowerFactor", base.to_float, sub, context);
                base.parse_element (/<cim:RotatingMachine.ratedS>([\s\S]*?)<\/cim:RotatingMachine.ratedS>/g, obj, "ratedS", base.to_string, sub, context);
                base.parse_element (/<cim:RotatingMachine.ratedU>([\s\S]*?)<\/cim:RotatingMachine.ratedU>/g, obj, "ratedU", base.to_string, sub, context);
                base.parse_element (/<cim:RotatingMachine.p>([\s\S]*?)<\/cim:RotatingMachine.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:RotatingMachine.q>([\s\S]*?)<\/cim:RotatingMachine.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:RotatingMachine.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);
                base.parse_attribute (/<cim:RotatingMachine.HydroPump\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HydroPump", sub, context);
                var bucket = context.parsed.RotatingMachine;
                if (null == bucket)
                   context.parsed.RotatingMachine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingCondEq.prototype.export.call (this, obj, false);

                base.export_element (obj, "RotatingMachine", "ratedPowerFactor", "ratedPowerFactor",  base.from_float, fields);
                base.export_element (obj, "RotatingMachine", "ratedS", "ratedS",  base.from_string, fields);
                base.export_element (obj, "RotatingMachine", "ratedU", "ratedU",  base.from_string, fields);
                base.export_element (obj, "RotatingMachine", "p", "p",  base.from_string, fields);
                base.export_element (obj, "RotatingMachine", "q", "q",  base.from_string, fields);
                base.export_attribute (obj, "RotatingMachine", "GeneratingUnit", "GeneratingUnit", fields);
                base.export_attribute (obj, "RotatingMachine", "HydroPump", "HydroPump", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#RotatingMachine_collapse" aria-expanded="true" aria-controls="RotatingMachine_collapse" style="margin-left: 10px;">RotatingMachine</a></legend>
                    <div id="RotatingMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.template.call (this) +
                    `
                    {{#ratedPowerFactor}}<div><b>ratedPowerFactor</b>: {{ratedPowerFactor}}</div>{{/ratedPowerFactor}}
                    {{#ratedS}}<div><b>ratedS</b>: {{ratedS}}</div>{{/ratedS}}
                    {{#ratedU}}<div><b>ratedU</b>: {{ratedU}}</div>{{/ratedU}}
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
                    {{#GeneratingUnit}}<div><b>GeneratingUnit</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{GeneratingUnit}}&quot;);}); return false;'>{{GeneratingUnit}}</a></div>{{/GeneratingUnit}}
                    {{#HydroPump}}<div><b>HydroPump</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{HydroPump}}&quot;);}); return false;'>{{HydroPump}}</a></div>{{/HydroPump}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_RotatingMachine_collapse" aria-expanded="true" aria-controls="{{id}}_RotatingMachine_collapse" style="margin-left: 10px;">RotatingMachine</a></legend>
                    <div id="{{id}}_RotatingMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedPowerFactor'>ratedPowerFactor: </label><div class='col-sm-8'><input id='{{id}}_ratedPowerFactor' class='form-control' type='text'{{#ratedPowerFactor}} value='{{ratedPowerFactor}}'{{/ratedPowerFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedS'>ratedS: </label><div class='col-sm-8'><input id='{{id}}_ratedS' class='form-control' type='text'{{#ratedS}} value='{{ratedS}}'{{/ratedS}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedU'>ratedU: </label><div class='col-sm-8'><input id='{{id}}_ratedU' class='form-control' type='text'{{#ratedU}} value='{{ratedU}}'{{/ratedU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_GeneratingUnit'>GeneratingUnit: </label><div class='col-sm-8'><input id='{{id}}_GeneratingUnit' class='form-control' type='text'{{#GeneratingUnit}} value='{{GeneratingUnit}}'{{/GeneratingUnit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_HydroPump'>HydroPump: </label><div class='col-sm-8'><input id='{{id}}_HydroPump' class='form-control' type='text'{{#HydroPump}} value='{{HydroPump}}'{{/HydroPump}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RotatingMachine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ratedPowerFactor").value; if ("" != temp) obj.ratedPowerFactor = temp;
                temp = document.getElementById (id + "_ratedS").value; if ("" != temp) obj.ratedS = temp;
                temp = document.getElementById (id + "_ratedU").value; if ("" != temp) obj.ratedU = temp;
                temp = document.getElementById (id + "_p").value; if ("" != temp) obj.p = temp;
                temp = document.getElementById (id + "_q").value; if ("" != temp) obj.q = temp;
                temp = document.getElementById (id + "_GeneratingUnit").value; if ("" != temp) obj.GeneratingUnit = temp;
                temp = document.getElementById (id + "_HydroPump").value; if ("" != temp) obj.HydroPump = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["GeneratingUnit", "0..1", "1..*", "GeneratingUnit", "RotatingMachine"],
                            ["HydroPump", "0..1", "1", "HydroPump", "RotatingMachine"]
                        ]
                    )
                );
            }
        }

        /**
         * A device to convert from one frequency to another (e.g., frequency F1 to F2) comprises a pair of FrequencyConverter instances.
         *
         * One converts from F1 to DC, the other converts the DC to F2.
         *
         */
        class FrequencyConverter extends RegulatingCondEq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.FrequencyConverter;
                if (null == bucket)
                   cim_data.FrequencyConverter = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FrequencyConverter[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingCondEq.prototype.parse.call (this, context, sub);
                obj.cls = "FrequencyConverter";
                base.parse_element (/<cim:FrequencyConverter.frequency>([\s\S]*?)<\/cim:FrequencyConverter.frequency>/g, obj, "frequency", base.to_string, sub, context);
                base.parse_element (/<cim:FrequencyConverter.maxP>([\s\S]*?)<\/cim:FrequencyConverter.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:FrequencyConverter.maxU>([\s\S]*?)<\/cim:FrequencyConverter.maxU>/g, obj, "maxU", base.to_string, sub, context);
                base.parse_element (/<cim:FrequencyConverter.minP>([\s\S]*?)<\/cim:FrequencyConverter.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:FrequencyConverter.minU>([\s\S]*?)<\/cim:FrequencyConverter.minU>/g, obj, "minU", base.to_string, sub, context);
                var bucket = context.parsed.FrequencyConverter;
                if (null == bucket)
                   context.parsed.FrequencyConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingCondEq.prototype.export.call (this, obj, false);

                base.export_element (obj, "FrequencyConverter", "frequency", "frequency",  base.from_string, fields);
                base.export_element (obj, "FrequencyConverter", "maxP", "maxP",  base.from_string, fields);
                base.export_element (obj, "FrequencyConverter", "maxU", "maxU",  base.from_string, fields);
                base.export_element (obj, "FrequencyConverter", "minP", "minP",  base.from_string, fields);
                base.export_element (obj, "FrequencyConverter", "minU", "minU",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#FrequencyConverter_collapse" aria-expanded="true" aria-controls="FrequencyConverter_collapse" style="margin-left: 10px;">FrequencyConverter</a></legend>
                    <div id="FrequencyConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.template.call (this) +
                    `
                    {{#frequency}}<div><b>frequency</b>: {{frequency}}</div>{{/frequency}}
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#maxU}}<div><b>maxU</b>: {{maxU}}</div>{{/maxU}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#minU}}<div><b>minU</b>: {{minU}}</div>{{/minU}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_FrequencyConverter_collapse" aria-expanded="true" aria-controls="{{id}}_FrequencyConverter_collapse" style="margin-left: 10px;">FrequencyConverter</a></legend>
                    <div id="{{id}}_FrequencyConverter_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_frequency'>frequency: </label><div class='col-sm-8'><input id='{{id}}_frequency' class='form-control' type='text'{{#frequency}} value='{{frequency}}'{{/frequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxP'>maxP: </label><div class='col-sm-8'><input id='{{id}}_maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxU'>maxU: </label><div class='col-sm-8'><input id='{{id}}_maxU' class='form-control' type='text'{{#maxU}} value='{{maxU}}'{{/maxU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minP'>minP: </label><div class='col-sm-8'><input id='{{id}}_minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minU'>minU: </label><div class='col-sm-8'><input id='{{id}}_minU' class='form-control' type='text'{{#minU}} value='{{minU}}'{{/minU}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FrequencyConverter" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_frequency").value; if ("" != temp) obj.frequency = temp;
                temp = document.getElementById (id + "_maxP").value; if ("" != temp) obj.maxP = temp;
                temp = document.getElementById (id + "_maxU").value; if ("" != temp) obj.maxU = temp;
                temp = document.getElementById (id + "_minP").value; if ("" != temp) obj.minP = temp;
                temp = document.getElementById (id + "_minU").value; if ("" != temp) obj.minU = temp;

                return (obj);
            }
        }

        /**
         * An electromechanical device that operates with shaft rotating synchronously with the network.
         *
         * It is a single machine operating either as a generator or synchronous condenser or pump.
         *
         */
        class SynchronousMachine extends RotatingMachine
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SynchronousMachine;
                if (null == bucket)
                   cim_data.SynchronousMachine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SynchronousMachine[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RotatingMachine.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachine";
                base.parse_element (/<cim:SynchronousMachine.aVRToManualLag>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLag>/g, obj, "aVRToManualLag", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.aVRToManualLead>([\s\S]*?)<\/cim:SynchronousMachine.aVRToManualLead>/g, obj, "aVRToManualLead", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.baseQ>([\s\S]*?)<\/cim:SynchronousMachine.baseQ>/g, obj, "baseQ", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.condenserP>([\s\S]*?)<\/cim:SynchronousMachine.condenserP>/g, obj, "condenserP", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.coolantCondition>([\s\S]*?)<\/cim:SynchronousMachine.coolantCondition>/g, obj, "coolantCondition", base.to_float, sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.coolantType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "coolantType", sub, context);
                base.parse_element (/<cim:SynchronousMachine.earthing>([\s\S]*?)<\/cim:SynchronousMachine.earthing>/g, obj, "earthing", base.to_boolean, sub, context);
                base.parse_element (/<cim:SynchronousMachine.earthingStarPointR>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointR>/g, obj, "earthingStarPointR", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.earthingStarPointX>([\s\S]*?)<\/cim:SynchronousMachine.earthingStarPointX>/g, obj, "earthingStarPointX", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.ikk>([\s\S]*?)<\/cim:SynchronousMachine.ikk>/g, obj, "ikk", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.manualToAVR>([\s\S]*?)<\/cim:SynchronousMachine.manualToAVR>/g, obj, "manualToAVR", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.maxQ>([\s\S]*?)<\/cim:SynchronousMachine.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.maxU>([\s\S]*?)<\/cim:SynchronousMachine.maxU>/g, obj, "maxU", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.minQ>([\s\S]*?)<\/cim:SynchronousMachine.minQ>/g, obj, "minQ", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.minU>([\s\S]*?)<\/cim:SynchronousMachine.minU>/g, obj, "minU", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.mu>([\s\S]*?)<\/cim:SynchronousMachine.mu>/g, obj, "mu", base.to_float, sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.operatingMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "operatingMode", sub, context);
                base.parse_element (/<cim:SynchronousMachine.qPercent>([\s\S]*?)<\/cim:SynchronousMachine.qPercent>/g, obj, "qPercent", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.r>([\s\S]*?)<\/cim:SynchronousMachine.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.r0>([\s\S]*?)<\/cim:SynchronousMachine.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.r2>([\s\S]*?)<\/cim:SynchronousMachine.r2>/g, obj, "r2", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.referencePriority>([\s\S]*?)<\/cim:SynchronousMachine.referencePriority>/g, obj, "referencePriority", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.satDirectSubtransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSubtransX>/g, obj, "satDirectSubtransX", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.satDirectSyncX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectSyncX>/g, obj, "satDirectSyncX", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.satDirectTransX>([\s\S]*?)<\/cim:SynchronousMachine.satDirectTransX>/g, obj, "satDirectTransX", base.to_string, sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.shortCircuitRotorType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "shortCircuitRotorType", sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
                base.parse_element (/<cim:SynchronousMachine.voltageRegulationRange>([\s\S]*?)<\/cim:SynchronousMachine.voltageRegulationRange>/g, obj, "voltageRegulationRange", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.x0>([\s\S]*?)<\/cim:SynchronousMachine.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachine.x2>([\s\S]*?)<\/cim:SynchronousMachine.x2>/g, obj, "x2", base.to_string, sub, context);
                base.parse_attributes (/<cim:SynchronousMachine.PrimeMovers\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PrimeMovers", sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:SynchronousMachine.InitialReactiveCapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "InitialReactiveCapabilityCurve", sub, context);
                base.parse_attributes (/<cim:SynchronousMachine.ReactiveCapabilityCurves\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReactiveCapabilityCurves", sub, context);
                var bucket = context.parsed.SynchronousMachine;
                if (null == bucket)
                   context.parsed.SynchronousMachine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RotatingMachine.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchronousMachine", "aVRToManualLag", "aVRToManualLag",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "aVRToManualLead", "aVRToManualLead",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "baseQ", "baseQ",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "condenserP", "condenserP",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "coolantCondition", "coolantCondition",  base.from_float, fields);
                base.export_attribute (obj, "SynchronousMachine", "coolantType", "coolantType", fields);
                base.export_element (obj, "SynchronousMachine", "earthing", "earthing",  base.from_boolean, fields);
                base.export_element (obj, "SynchronousMachine", "earthingStarPointR", "earthingStarPointR",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "earthingStarPointX", "earthingStarPointX",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "ikk", "ikk",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "manualToAVR", "manualToAVR",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "maxQ", "maxQ",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "maxU", "maxU",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "minQ", "minQ",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "minU", "minU",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "mu", "mu",  base.from_float, fields);
                base.export_attribute (obj, "SynchronousMachine", "operatingMode", "operatingMode", fields);
                base.export_element (obj, "SynchronousMachine", "qPercent", "qPercent",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "r", "r",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "r2", "r2",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "referencePriority", "referencePriority",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "satDirectSubtransX", "satDirectSubtransX",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "satDirectSyncX", "satDirectSyncX",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "satDirectTransX", "satDirectTransX",  base.from_string, fields);
                base.export_attribute (obj, "SynchronousMachine", "shortCircuitRotorType", "shortCircuitRotorType", fields);
                base.export_attribute (obj, "SynchronousMachine", "type", "type", fields);
                base.export_element (obj, "SynchronousMachine", "voltageRegulationRange", "voltageRegulationRange",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "x0", "x0",  base.from_string, fields);
                base.export_element (obj, "SynchronousMachine", "x2", "x2",  base.from_string, fields);
                base.export_attributes (obj, "SynchronousMachine", "PrimeMovers", "PrimeMovers", fields);
                base.export_attribute (obj, "SynchronousMachine", "SynchronousMachineDynamics", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "SynchronousMachine", "InitialReactiveCapabilityCurve", "InitialReactiveCapabilityCurve", fields);
                base.export_attributes (obj, "SynchronousMachine", "ReactiveCapabilityCurves", "ReactiveCapabilityCurves", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SynchronousMachine_collapse" aria-expanded="true" aria-controls="SynchronousMachine_collapse" style="margin-left: 10px;">SynchronousMachine</a></legend>
                    <div id="SynchronousMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RotatingMachine.prototype.template.call (this) +
                    `
                    {{#aVRToManualLag}}<div><b>aVRToManualLag</b>: {{aVRToManualLag}}</div>{{/aVRToManualLag}}
                    {{#aVRToManualLead}}<div><b>aVRToManualLead</b>: {{aVRToManualLead}}</div>{{/aVRToManualLead}}
                    {{#baseQ}}<div><b>baseQ</b>: {{baseQ}}</div>{{/baseQ}}
                    {{#condenserP}}<div><b>condenserP</b>: {{condenserP}}</div>{{/condenserP}}
                    {{#coolantCondition}}<div><b>coolantCondition</b>: {{coolantCondition}}</div>{{/coolantCondition}}
                    {{#coolantType}}<div><b>coolantType</b>: {{coolantType}}</div>{{/coolantType}}
                    {{#earthing}}<div><b>earthing</b>: {{earthing}}</div>{{/earthing}}
                    {{#earthingStarPointR}}<div><b>earthingStarPointR</b>: {{earthingStarPointR}}</div>{{/earthingStarPointR}}
                    {{#earthingStarPointX}}<div><b>earthingStarPointX</b>: {{earthingStarPointX}}</div>{{/earthingStarPointX}}
                    {{#ikk}}<div><b>ikk</b>: {{ikk}}</div>{{/ikk}}
                    {{#manualToAVR}}<div><b>manualToAVR</b>: {{manualToAVR}}</div>{{/manualToAVR}}
                    {{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
                    {{#maxU}}<div><b>maxU</b>: {{maxU}}</div>{{/maxU}}
                    {{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
                    {{#minU}}<div><b>minU</b>: {{minU}}</div>{{/minU}}
                    {{#mu}}<div><b>mu</b>: {{mu}}</div>{{/mu}}
                    {{#operatingMode}}<div><b>operatingMode</b>: {{operatingMode}}</div>{{/operatingMode}}
                    {{#qPercent}}<div><b>qPercent</b>: {{qPercent}}</div>{{/qPercent}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#r2}}<div><b>r2</b>: {{r2}}</div>{{/r2}}
                    {{#referencePriority}}<div><b>referencePriority</b>: {{referencePriority}}</div>{{/referencePriority}}
                    {{#satDirectSubtransX}}<div><b>satDirectSubtransX</b>: {{satDirectSubtransX}}</div>{{/satDirectSubtransX}}
                    {{#satDirectSyncX}}<div><b>satDirectSyncX</b>: {{satDirectSyncX}}</div>{{/satDirectSyncX}}
                    {{#satDirectTransX}}<div><b>satDirectTransX</b>: {{satDirectTransX}}</div>{{/satDirectTransX}}
                    {{#shortCircuitRotorType}}<div><b>shortCircuitRotorType</b>: {{shortCircuitRotorType}}</div>{{/shortCircuitRotorType}}
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#voltageRegulationRange}}<div><b>voltageRegulationRange</b>: {{voltageRegulationRange}}</div>{{/voltageRegulationRange}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#x2}}<div><b>x2</b>: {{x2}}</div>{{/x2}}
                    {{#PrimeMovers}}<div><b>PrimeMovers</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PrimeMovers}}
                    {{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachineDynamics}}&quot;);}); return false;'>{{SynchronousMachineDynamics}}</a></div>{{/SynchronousMachineDynamics}}
                    {{#InitialReactiveCapabilityCurve}}<div><b>InitialReactiveCapabilityCurve</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{InitialReactiveCapabilityCurve}}&quot;);}); return false;'>{{InitialReactiveCapabilityCurve}}</a></div>{{/InitialReactiveCapabilityCurve}}
                    {{#ReactiveCapabilityCurves}}<div><b>ReactiveCapabilityCurves</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ReactiveCapabilityCurves}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.CoolantType = []; if (!obj.coolantType) obj.CoolantType.push ({ id: '', selected: true}); for (var property in CoolantType) obj.CoolantType.push ({ id: property, selected: obj.coolantType && obj.coolantType.endsWith ('.' + property)});
                obj.SynchronousMachineOperatingMode = []; if (!obj.operatingMode) obj.SynchronousMachineOperatingMode.push ({ id: '', selected: true}); for (var property in SynchronousMachineOperatingMode) obj.SynchronousMachineOperatingMode.push ({ id: property, selected: obj.operatingMode && obj.operatingMode.endsWith ('.' + property)});
                obj.ShortCircuitRotorKind = []; if (!obj.shortCircuitRotorType) obj.ShortCircuitRotorKind.push ({ id: '', selected: true}); for (var property in ShortCircuitRotorKind) obj.ShortCircuitRotorKind.push ({ id: property, selected: obj.shortCircuitRotorType && obj.shortCircuitRotorType.endsWith ('.' + property)});
                obj.SynchronousMachineKind = []; if (!obj.type) obj.SynchronousMachineKind.push ({ id: '', selected: true}); for (var property in SynchronousMachineKind) obj.SynchronousMachineKind.push ({ id: property, selected: obj.type && obj.type.endsWith ('.' + property)});
                if (obj.PrimeMovers) obj.PrimeMovers_string = obj.PrimeMovers.join ();
                if (obj.ReactiveCapabilityCurves) obj.ReactiveCapabilityCurves_string = obj.ReactiveCapabilityCurves.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CoolantType;
                delete obj.SynchronousMachineOperatingMode;
                delete obj.ShortCircuitRotorKind;
                delete obj.SynchronousMachineKind;
                delete obj.PrimeMovers_string;
                delete obj.ReactiveCapabilityCurves_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SynchronousMachine_collapse" aria-expanded="true" aria-controls="{{id}}_SynchronousMachine_collapse" style="margin-left: 10px;">SynchronousMachine</a></legend>
                    <div id="{{id}}_SynchronousMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RotatingMachine.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aVRToManualLag'>aVRToManualLag: </label><div class='col-sm-8'><input id='{{id}}_aVRToManualLag' class='form-control' type='text'{{#aVRToManualLag}} value='{{aVRToManualLag}}'{{/aVRToManualLag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aVRToManualLead'>aVRToManualLead: </label><div class='col-sm-8'><input id='{{id}}_aVRToManualLead' class='form-control' type='text'{{#aVRToManualLead}} value='{{aVRToManualLead}}'{{/aVRToManualLead}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_baseQ'>baseQ: </label><div class='col-sm-8'><input id='{{id}}_baseQ' class='form-control' type='text'{{#baseQ}} value='{{baseQ}}'{{/baseQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_condenserP'>condenserP: </label><div class='col-sm-8'><input id='{{id}}_condenserP' class='form-control' type='text'{{#condenserP}} value='{{condenserP}}'{{/condenserP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolantCondition'>coolantCondition: </label><div class='col-sm-8'><input id='{{id}}_coolantCondition' class='form-control' type='text'{{#coolantCondition}} value='{{coolantCondition}}'{{/coolantCondition}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_coolantType'>coolantType: </label><div class='col-sm-8'><select id='{{id}}_coolantType' class='form-control custom-select'>{{#CoolantType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/CoolantType}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_earthing'>earthing: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_earthing' class='form-check-input' type='checkbox'{{#earthing}} checked{{/earthing}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_earthingStarPointR'>earthingStarPointR: </label><div class='col-sm-8'><input id='{{id}}_earthingStarPointR' class='form-control' type='text'{{#earthingStarPointR}} value='{{earthingStarPointR}}'{{/earthingStarPointR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_earthingStarPointX'>earthingStarPointX: </label><div class='col-sm-8'><input id='{{id}}_earthingStarPointX' class='form-control' type='text'{{#earthingStarPointX}} value='{{earthingStarPointX}}'{{/earthingStarPointX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ikk'>ikk: </label><div class='col-sm-8'><input id='{{id}}_ikk' class='form-control' type='text'{{#ikk}} value='{{ikk}}'{{/ikk}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_manualToAVR'>manualToAVR: </label><div class='col-sm-8'><input id='{{id}}_manualToAVR' class='form-control' type='text'{{#manualToAVR}} value='{{manualToAVR}}'{{/manualToAVR}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxQ'>maxQ: </label><div class='col-sm-8'><input id='{{id}}_maxQ' class='form-control' type='text'{{#maxQ}} value='{{maxQ}}'{{/maxQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxU'>maxU: </label><div class='col-sm-8'><input id='{{id}}_maxU' class='form-control' type='text'{{#maxU}} value='{{maxU}}'{{/maxU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minQ'>minQ: </label><div class='col-sm-8'><input id='{{id}}_minQ' class='form-control' type='text'{{#minQ}} value='{{minQ}}'{{/minQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minU'>minU: </label><div class='col-sm-8'><input id='{{id}}_minU' class='form-control' type='text'{{#minU}} value='{{minU}}'{{/minU}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_mu'>mu: </label><div class='col-sm-8'><input id='{{id}}_mu' class='form-control' type='text'{{#mu}} value='{{mu}}'{{/mu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_operatingMode'>operatingMode: </label><div class='col-sm-8'><select id='{{id}}_operatingMode' class='form-control custom-select'>{{#SynchronousMachineOperatingMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SynchronousMachineOperatingMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qPercent'>qPercent: </label><div class='col-sm-8'><input id='{{id}}_qPercent' class='form-control' type='text'{{#qPercent}} value='{{qPercent}}'{{/qPercent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r2'>r2: </label><div class='col-sm-8'><input id='{{id}}_r2' class='form-control' type='text'{{#r2}} value='{{r2}}'{{/r2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referencePriority'>referencePriority: </label><div class='col-sm-8'><input id='{{id}}_referencePriority' class='form-control' type='text'{{#referencePriority}} value='{{referencePriority}}'{{/referencePriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_satDirectSubtransX'>satDirectSubtransX: </label><div class='col-sm-8'><input id='{{id}}_satDirectSubtransX' class='form-control' type='text'{{#satDirectSubtransX}} value='{{satDirectSubtransX}}'{{/satDirectSubtransX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_satDirectSyncX'>satDirectSyncX: </label><div class='col-sm-8'><input id='{{id}}_satDirectSyncX' class='form-control' type='text'{{#satDirectSyncX}} value='{{satDirectSyncX}}'{{/satDirectSyncX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_satDirectTransX'>satDirectTransX: </label><div class='col-sm-8'><input id='{{id}}_satDirectTransX' class='form-control' type='text'{{#satDirectTransX}} value='{{satDirectTransX}}'{{/satDirectTransX}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shortCircuitRotorType'>shortCircuitRotorType: </label><div class='col-sm-8'><select id='{{id}}_shortCircuitRotorType' class='form-control custom-select'>{{#ShortCircuitRotorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ShortCircuitRotorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><select id='{{id}}_type' class='form-control custom-select'>{{#SynchronousMachineKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SynchronousMachineKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageRegulationRange'>voltageRegulationRange: </label><div class='col-sm-8'><input id='{{id}}_voltageRegulationRange' class='form-control' type='text'{{#voltageRegulationRange}} value='{{voltageRegulationRange}}'{{/voltageRegulationRange}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x2'>x2: </label><div class='col-sm-8'><input id='{{id}}_x2' class='form-control' type='text'{{#x2}} value='{{x2}}'{{/x2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PrimeMovers'>PrimeMovers: </label><div class='col-sm-8'><input id='{{id}}_PrimeMovers' class='form-control' type='text'{{#PrimeMovers}} value='{{PrimeMovers_string}}'{{/PrimeMovers}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachineDynamics'>SynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachineDynamics' class='form-control' type='text'{{#SynchronousMachineDynamics}} value='{{SynchronousMachineDynamics}}'{{/SynchronousMachineDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_InitialReactiveCapabilityCurve'>InitialReactiveCapabilityCurve: </label><div class='col-sm-8'><input id='{{id}}_InitialReactiveCapabilityCurve' class='form-control' type='text'{{#InitialReactiveCapabilityCurve}} value='{{InitialReactiveCapabilityCurve}}'{{/InitialReactiveCapabilityCurve}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ReactiveCapabilityCurves'>ReactiveCapabilityCurves: </label><div class='col-sm-8'><input id='{{id}}_ReactiveCapabilityCurves' class='form-control' type='text'{{#ReactiveCapabilityCurves}} value='{{ReactiveCapabilityCurves_string}}'{{/ReactiveCapabilityCurves}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SynchronousMachine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_aVRToManualLag").value; if ("" != temp) obj.aVRToManualLag = temp;
                temp = document.getElementById (id + "_aVRToManualLead").value; if ("" != temp) obj.aVRToManualLead = temp;
                temp = document.getElementById (id + "_baseQ").value; if ("" != temp) obj.baseQ = temp;
                temp = document.getElementById (id + "_condenserP").value; if ("" != temp) obj.condenserP = temp;
                temp = document.getElementById (id + "_coolantCondition").value; if ("" != temp) obj.coolantCondition = temp;
                temp = document.getElementById (id + "_coolantType").value; if ("" != temp) { temp = CoolantType[temp]; if ("undefined" != typeof (temp)) obj.coolantType = "http://iec.ch/TC57/2013/CIM-schema-cim16#CoolantType." + temp; }
                temp = document.getElementById (id + "_earthing").checked; if (temp) obj.earthing = true;
                temp = document.getElementById (id + "_earthingStarPointR").value; if ("" != temp) obj.earthingStarPointR = temp;
                temp = document.getElementById (id + "_earthingStarPointX").value; if ("" != temp) obj.earthingStarPointX = temp;
                temp = document.getElementById (id + "_ikk").value; if ("" != temp) obj.ikk = temp;
                temp = document.getElementById (id + "_manualToAVR").value; if ("" != temp) obj.manualToAVR = temp;
                temp = document.getElementById (id + "_maxQ").value; if ("" != temp) obj.maxQ = temp;
                temp = document.getElementById (id + "_maxU").value; if ("" != temp) obj.maxU = temp;
                temp = document.getElementById (id + "_minQ").value; if ("" != temp) obj.minQ = temp;
                temp = document.getElementById (id + "_minU").value; if ("" != temp) obj.minU = temp;
                temp = document.getElementById (id + "_mu").value; if ("" != temp) obj.mu = temp;
                temp = document.getElementById (id + "_operatingMode").value; if ("" != temp) { temp = SynchronousMachineOperatingMode[temp]; if ("undefined" != typeof (temp)) obj.operatingMode = "http://iec.ch/TC57/2013/CIM-schema-cim16#SynchronousMachineOperatingMode." + temp; }
                temp = document.getElementById (id + "_qPercent").value; if ("" != temp) obj.qPercent = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_r2").value; if ("" != temp) obj.r2 = temp;
                temp = document.getElementById (id + "_referencePriority").value; if ("" != temp) obj.referencePriority = temp;
                temp = document.getElementById (id + "_satDirectSubtransX").value; if ("" != temp) obj.satDirectSubtransX = temp;
                temp = document.getElementById (id + "_satDirectSyncX").value; if ("" != temp) obj.satDirectSyncX = temp;
                temp = document.getElementById (id + "_satDirectTransX").value; if ("" != temp) obj.satDirectTransX = temp;
                temp = document.getElementById (id + "_shortCircuitRotorType").value; if ("" != temp) { temp = ShortCircuitRotorKind[temp]; if ("undefined" != typeof (temp)) obj.shortCircuitRotorType = "http://iec.ch/TC57/2013/CIM-schema-cim16#ShortCircuitRotorKind." + temp; }
                temp = document.getElementById (id + "_type").value; if ("" != temp) { temp = SynchronousMachineKind[temp]; if ("undefined" != typeof (temp)) obj.type = "http://iec.ch/TC57/2013/CIM-schema-cim16#SynchronousMachineKind." + temp; }
                temp = document.getElementById (id + "_voltageRegulationRange").value; if ("" != temp) obj.voltageRegulationRange = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_x2").value; if ("" != temp) obj.x2 = temp;
                temp = document.getElementById (id + "_PrimeMovers").value; if ("" != temp) obj.PrimeMovers = temp.split (",");
                temp = document.getElementById (id + "_SynchronousMachineDynamics").value; if ("" != temp) obj.SynchronousMachineDynamics = temp;
                temp = document.getElementById (id + "_InitialReactiveCapabilityCurve").value; if ("" != temp) obj.InitialReactiveCapabilityCurve = temp;
                temp = document.getElementById (id + "_ReactiveCapabilityCurves").value; if ("" != temp) obj.ReactiveCapabilityCurves = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PrimeMovers", "0..*", "0..*", "PrimeMover", "SynchronousMachines"],
                            ["SynchronousMachineDynamics", "0..1", "1", "SynchronousMachineDynamics", "SynchronousMachine"],
                            ["InitialReactiveCapabilityCurve", "0..1", "1..*", "ReactiveCapabilityCurve", "InitiallyUsedBySynchronousMachines"],
                            ["ReactiveCapabilityCurves", "0..*", "1..*", "ReactiveCapabilityCurve", "SynchronousMachines"]
                        ]
                    )
                );
            }
        }

        /**
         * A facility for providing variable and controllable shunt reactive power.
         *
         * The SVC typically consists of a stepdown transformer, filter, thyristor-controlled reactor, and thyristor-switched capacitor arms.
         *
         */
        class StaticVarCompensator extends RegulatingCondEq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.StaticVarCompensator;
                if (null == bucket)
                   cim_data.StaticVarCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StaticVarCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingCondEq.prototype.parse.call (this, context, sub);
                obj.cls = "StaticVarCompensator";
                base.parse_element (/<cim:StaticVarCompensator.capacitiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);
                base.parse_element (/<cim:StaticVarCompensator.inductiveRating>([\s\S]*?)<\/cim:StaticVarCompensator.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);
                base.parse_element (/<cim:StaticVarCompensator.slope>([\s\S]*?)<\/cim:StaticVarCompensator.slope>/g, obj, "slope", base.to_string, sub, context);
                base.parse_attribute (/<cim:StaticVarCompensator.sVCControlMode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "sVCControlMode", sub, context);
                base.parse_element (/<cim:StaticVarCompensator.voltageSetPoint>([\s\S]*?)<\/cim:StaticVarCompensator.voltageSetPoint>/g, obj, "voltageSetPoint", base.to_string, sub, context);
                base.parse_element (/<cim:StaticVarCompensator.q>([\s\S]*?)<\/cim:StaticVarCompensator.q>/g, obj, "q", base.to_string, sub, context);
                var bucket = context.parsed.StaticVarCompensator;
                if (null == bucket)
                   context.parsed.StaticVarCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingCondEq.prototype.export.call (this, obj, false);

                base.export_element (obj, "StaticVarCompensator", "capacitiveRating", "capacitiveRating",  base.from_string, fields);
                base.export_element (obj, "StaticVarCompensator", "inductiveRating", "inductiveRating",  base.from_string, fields);
                base.export_element (obj, "StaticVarCompensator", "slope", "slope",  base.from_string, fields);
                base.export_attribute (obj, "StaticVarCompensator", "sVCControlMode", "sVCControlMode", fields);
                base.export_element (obj, "StaticVarCompensator", "voltageSetPoint", "voltageSetPoint",  base.from_string, fields);
                base.export_element (obj, "StaticVarCompensator", "q", "q",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#StaticVarCompensator_collapse" aria-expanded="true" aria-controls="StaticVarCompensator_collapse" style="margin-left: 10px;">StaticVarCompensator</a></legend>
                    <div id="StaticVarCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.template.call (this) +
                    `
                    {{#capacitiveRating}}<div><b>capacitiveRating</b>: {{capacitiveRating}}</div>{{/capacitiveRating}}
                    {{#inductiveRating}}<div><b>inductiveRating</b>: {{inductiveRating}}</div>{{/inductiveRating}}
                    {{#slope}}<div><b>slope</b>: {{slope}}</div>{{/slope}}
                    {{#sVCControlMode}}<div><b>sVCControlMode</b>: {{sVCControlMode}}</div>{{/sVCControlMode}}
                    {{#voltageSetPoint}}<div><b>voltageSetPoint</b>: {{voltageSetPoint}}</div>{{/voltageSetPoint}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.SVCControlMode = []; if (!obj.sVCControlMode) obj.SVCControlMode.push ({ id: '', selected: true}); for (var property in SVCControlMode) obj.SVCControlMode.push ({ id: property, selected: obj.sVCControlMode && obj.sVCControlMode.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.SVCControlMode;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_StaticVarCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_StaticVarCompensator_collapse" style="margin-left: 10px;">StaticVarCompensator</a></legend>
                    <div id="{{id}}_StaticVarCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitiveRating'>capacitiveRating: </label><div class='col-sm-8'><input id='{{id}}_capacitiveRating' class='form-control' type='text'{{#capacitiveRating}} value='{{capacitiveRating}}'{{/capacitiveRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductiveRating'>inductiveRating: </label><div class='col-sm-8'><input id='{{id}}_inductiveRating' class='form-control' type='text'{{#inductiveRating}} value='{{inductiveRating}}'{{/inductiveRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_slope'>slope: </label><div class='col-sm-8'><input id='{{id}}_slope' class='form-control' type='text'{{#slope}} value='{{slope}}'{{/slope}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sVCControlMode'>sVCControlMode: </label><div class='col-sm-8'><select id='{{id}}_sVCControlMode' class='form-control custom-select'>{{#SVCControlMode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/SVCControlMode}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageSetPoint'>voltageSetPoint: </label><div class='col-sm-8'><input id='{{id}}_voltageSetPoint' class='form-control' type='text'{{#voltageSetPoint}} value='{{voltageSetPoint}}'{{/voltageSetPoint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "StaticVarCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacitiveRating").value; if ("" != temp) obj.capacitiveRating = temp;
                temp = document.getElementById (id + "_inductiveRating").value; if ("" != temp) obj.inductiveRating = temp;
                temp = document.getElementById (id + "_slope").value; if ("" != temp) obj.slope = temp;
                temp = document.getElementById (id + "_sVCControlMode").value; if ("" != temp) { temp = SVCControlMode[temp]; if ("undefined" != typeof (temp)) obj.sVCControlMode = "http://iec.ch/TC57/2013/CIM-schema-cim16#SVCControlMode." + temp; }
                temp = document.getElementById (id + "_voltageSetPoint").value; if ("" != temp) obj.voltageSetPoint = temp;
                temp = document.getElementById (id + "_q").value; if ("" != temp) obj.q = temp;

                return (obj);
            }
        }

        /**
         * A non linear shunt compensator has bank or section admittance values that differs.
         *
         */
        class NonlinearShuntCompensator extends ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.NonlinearShuntCompensator;
                if (null == bucket)
                   cim_data.NonlinearShuntCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.NonlinearShuntCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "NonlinearShuntCompensator";
                base.parse_attributes (/<cim:NonlinearShuntCompensator.NonlinearShuntCompensatorPoints\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "NonlinearShuntCompensatorPoints", sub, context);
                var bucket = context.parsed.NonlinearShuntCompensator;
                if (null == bucket)
                   context.parsed.NonlinearShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "NonlinearShuntCompensator", "NonlinearShuntCompensatorPoints", "NonlinearShuntCompensatorPoints", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#NonlinearShuntCompensator_collapse" aria-expanded="true" aria-controls="NonlinearShuntCompensator_collapse" style="margin-left: 10px;">NonlinearShuntCompensator</a></legend>
                    <div id="NonlinearShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensator.prototype.template.call (this) +
                    `
                    {{#NonlinearShuntCompensatorPoints}}<div><b>NonlinearShuntCompensatorPoints</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/NonlinearShuntCompensatorPoints}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.NonlinearShuntCompensatorPoints) obj.NonlinearShuntCompensatorPoints_string = obj.NonlinearShuntCompensatorPoints.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.NonlinearShuntCompensatorPoints_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_NonlinearShuntCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_NonlinearShuntCompensator_collapse" style="margin-left: 10px;">NonlinearShuntCompensator</a></legend>
                    <div id="{{id}}_NonlinearShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "NonlinearShuntCompensator" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["NonlinearShuntCompensatorPoints", "1..*", "1", "NonlinearShuntCompensatorPoint", "NonlinearShuntCompensator"]
                        ]
                    )
                );
            }
        }

        /**
         * This class represents external network and it is used for IEC 60909 calculations.
         *
         */
        class ExternalNetworkInjection extends RegulatingCondEq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExternalNetworkInjection;
                if (null == bucket)
                   cim_data.ExternalNetworkInjection = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExternalNetworkInjection[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RegulatingCondEq.prototype.parse.call (this, context, sub);
                obj.cls = "ExternalNetworkInjection";
                base.parse_element (/<cim:ExternalNetworkInjection.governorSCD>([\s\S]*?)<\/cim:ExternalNetworkInjection.governorSCD>/g, obj, "governorSCD", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.ikSecond>([\s\S]*?)<\/cim:ExternalNetworkInjection.ikSecond>/g, obj, "ikSecond", base.to_boolean, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxInitialSymShCCurrent>/g, obj, "maxInitialSymShCCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxP>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxP>/g, obj, "maxP", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxQ>/g, obj, "maxQ", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR0ToX0Ratio>/g, obj, "maxR0ToX0Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxR1ToX1Ratio>/g, obj, "maxR1ToX1Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.maxZ0ToZ1Ratio>/g, obj, "maxZ0ToZ1Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minInitialSymShCCurrent>([\s\S]*?)<\/cim:ExternalNetworkInjection.minInitialSymShCCurrent>/g, obj, "minInitialSymShCCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minP>([\s\S]*?)<\/cim:ExternalNetworkInjection.minP>/g, obj, "minP", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minQ>([\s\S]*?)<\/cim:ExternalNetworkInjection.minQ>/g, obj, "minQ", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minR0ToX0Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR0ToX0Ratio>/g, obj, "minR0ToX0Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minR1ToX1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minR1ToX1Ratio>/g, obj, "minR1ToX1Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.minZ0ToZ1Ratio>([\s\S]*?)<\/cim:ExternalNetworkInjection.minZ0ToZ1Ratio>/g, obj, "minZ0ToZ1Ratio", base.to_float, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.referencePriority>([\s\S]*?)<\/cim:ExternalNetworkInjection.referencePriority>/g, obj, "referencePriority", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.voltageFactor>([\s\S]*?)<\/cim:ExternalNetworkInjection.voltageFactor>/g, obj, "voltageFactor", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.p>([\s\S]*?)<\/cim:ExternalNetworkInjection.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:ExternalNetworkInjection.q>([\s\S]*?)<\/cim:ExternalNetworkInjection.q>/g, obj, "q", base.to_string, sub, context);
                var bucket = context.parsed.ExternalNetworkInjection;
                if (null == bucket)
                   context.parsed.ExternalNetworkInjection = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RegulatingCondEq.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExternalNetworkInjection", "governorSCD", "governorSCD",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "ikSecond", "ikSecond",  base.from_boolean, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxInitialSymShCCurrent", "maxInitialSymShCCurrent",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxP", "maxP",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxQ", "maxQ",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxR0ToX0Ratio", "maxR0ToX0Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxR1ToX1Ratio", "maxR1ToX1Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "maxZ0ToZ1Ratio", "maxZ0ToZ1Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minInitialSymShCCurrent", "minInitialSymShCCurrent",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minP", "minP",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minQ", "minQ",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minR0ToX0Ratio", "minR0ToX0Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minR1ToX1Ratio", "minR1ToX1Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "minZ0ToZ1Ratio", "minZ0ToZ1Ratio",  base.from_float, fields);
                base.export_element (obj, "ExternalNetworkInjection", "referencePriority", "referencePriority",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "voltageFactor", "voltageFactor",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "p", "p",  base.from_string, fields);
                base.export_element (obj, "ExternalNetworkInjection", "q", "q",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExternalNetworkInjection_collapse" aria-expanded="true" aria-controls="ExternalNetworkInjection_collapse" style="margin-left: 10px;">ExternalNetworkInjection</a></legend>
                    <div id="ExternalNetworkInjection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.template.call (this) +
                    `
                    {{#governorSCD}}<div><b>governorSCD</b>: {{governorSCD}}</div>{{/governorSCD}}
                    {{#ikSecond}}<div><b>ikSecond</b>: {{ikSecond}}</div>{{/ikSecond}}
                    {{#maxInitialSymShCCurrent}}<div><b>maxInitialSymShCCurrent</b>: {{maxInitialSymShCCurrent}}</div>{{/maxInitialSymShCCurrent}}
                    {{#maxP}}<div><b>maxP</b>: {{maxP}}</div>{{/maxP}}
                    {{#maxQ}}<div><b>maxQ</b>: {{maxQ}}</div>{{/maxQ}}
                    {{#maxR0ToX0Ratio}}<div><b>maxR0ToX0Ratio</b>: {{maxR0ToX0Ratio}}</div>{{/maxR0ToX0Ratio}}
                    {{#maxR1ToX1Ratio}}<div><b>maxR1ToX1Ratio</b>: {{maxR1ToX1Ratio}}</div>{{/maxR1ToX1Ratio}}
                    {{#maxZ0ToZ1Ratio}}<div><b>maxZ0ToZ1Ratio</b>: {{maxZ0ToZ1Ratio}}</div>{{/maxZ0ToZ1Ratio}}
                    {{#minInitialSymShCCurrent}}<div><b>minInitialSymShCCurrent</b>: {{minInitialSymShCCurrent}}</div>{{/minInitialSymShCCurrent}}
                    {{#minP}}<div><b>minP</b>: {{minP}}</div>{{/minP}}
                    {{#minQ}}<div><b>minQ</b>: {{minQ}}</div>{{/minQ}}
                    {{#minR0ToX0Ratio}}<div><b>minR0ToX0Ratio</b>: {{minR0ToX0Ratio}}</div>{{/minR0ToX0Ratio}}
                    {{#minR1ToX1Ratio}}<div><b>minR1ToX1Ratio</b>: {{minR1ToX1Ratio}}</div>{{/minR1ToX1Ratio}}
                    {{#minZ0ToZ1Ratio}}<div><b>minZ0ToZ1Ratio</b>: {{minZ0ToZ1Ratio}}</div>{{/minZ0ToZ1Ratio}}
                    {{#referencePriority}}<div><b>referencePriority</b>: {{referencePriority}}</div>{{/referencePriority}}
                    {{#voltageFactor}}<div><b>voltageFactor</b>: {{voltageFactor}}</div>{{/voltageFactor}}
                    {{#p}}<div><b>p</b>: {{p}}</div>{{/p}}
                    {{#q}}<div><b>q</b>: {{q}}</div>{{/q}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExternalNetworkInjection_collapse" aria-expanded="true" aria-controls="{{id}}_ExternalNetworkInjection_collapse" style="margin-left: 10px;">ExternalNetworkInjection</a></legend>
                    <div id="{{id}}_ExternalNetworkInjection_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RegulatingCondEq.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_governorSCD'>governorSCD: </label><div class='col-sm-8'><input id='{{id}}_governorSCD' class='form-control' type='text'{{#governorSCD}} value='{{governorSCD}}'{{/governorSCD}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_ikSecond'>ikSecond: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_ikSecond' class='form-check-input' type='checkbox'{{#ikSecond}} checked{{/ikSecond}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxInitialSymShCCurrent'>maxInitialSymShCCurrent: </label><div class='col-sm-8'><input id='{{id}}_maxInitialSymShCCurrent' class='form-control' type='text'{{#maxInitialSymShCCurrent}} value='{{maxInitialSymShCCurrent}}'{{/maxInitialSymShCCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxP'>maxP: </label><div class='col-sm-8'><input id='{{id}}_maxP' class='form-control' type='text'{{#maxP}} value='{{maxP}}'{{/maxP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxQ'>maxQ: </label><div class='col-sm-8'><input id='{{id}}_maxQ' class='form-control' type='text'{{#maxQ}} value='{{maxQ}}'{{/maxQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxR0ToX0Ratio'>maxR0ToX0Ratio: </label><div class='col-sm-8'><input id='{{id}}_maxR0ToX0Ratio' class='form-control' type='text'{{#maxR0ToX0Ratio}} value='{{maxR0ToX0Ratio}}'{{/maxR0ToX0Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxR1ToX1Ratio'>maxR1ToX1Ratio: </label><div class='col-sm-8'><input id='{{id}}_maxR1ToX1Ratio' class='form-control' type='text'{{#maxR1ToX1Ratio}} value='{{maxR1ToX1Ratio}}'{{/maxR1ToX1Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxZ0ToZ1Ratio'>maxZ0ToZ1Ratio: </label><div class='col-sm-8'><input id='{{id}}_maxZ0ToZ1Ratio' class='form-control' type='text'{{#maxZ0ToZ1Ratio}} value='{{maxZ0ToZ1Ratio}}'{{/maxZ0ToZ1Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minInitialSymShCCurrent'>minInitialSymShCCurrent: </label><div class='col-sm-8'><input id='{{id}}_minInitialSymShCCurrent' class='form-control' type='text'{{#minInitialSymShCCurrent}} value='{{minInitialSymShCCurrent}}'{{/minInitialSymShCCurrent}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minP'>minP: </label><div class='col-sm-8'><input id='{{id}}_minP' class='form-control' type='text'{{#minP}} value='{{minP}}'{{/minP}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minQ'>minQ: </label><div class='col-sm-8'><input id='{{id}}_minQ' class='form-control' type='text'{{#minQ}} value='{{minQ}}'{{/minQ}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minR0ToX0Ratio'>minR0ToX0Ratio: </label><div class='col-sm-8'><input id='{{id}}_minR0ToX0Ratio' class='form-control' type='text'{{#minR0ToX0Ratio}} value='{{minR0ToX0Ratio}}'{{/minR0ToX0Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minR1ToX1Ratio'>minR1ToX1Ratio: </label><div class='col-sm-8'><input id='{{id}}_minR1ToX1Ratio' class='form-control' type='text'{{#minR1ToX1Ratio}} value='{{minR1ToX1Ratio}}'{{/minR1ToX1Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minZ0ToZ1Ratio'>minZ0ToZ1Ratio: </label><div class='col-sm-8'><input id='{{id}}_minZ0ToZ1Ratio' class='form-control' type='text'{{#minZ0ToZ1Ratio}} value='{{minZ0ToZ1Ratio}}'{{/minZ0ToZ1Ratio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_referencePriority'>referencePriority: </label><div class='col-sm-8'><input id='{{id}}_referencePriority' class='form-control' type='text'{{#referencePriority}} value='{{referencePriority}}'{{/referencePriority}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_voltageFactor'>voltageFactor: </label><div class='col-sm-8'><input id='{{id}}_voltageFactor' class='form-control' type='text'{{#voltageFactor}} value='{{voltageFactor}}'{{/voltageFactor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_p'>p: </label><div class='col-sm-8'><input id='{{id}}_p' class='form-control' type='text'{{#p}} value='{{p}}'{{/p}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_q'>q: </label><div class='col-sm-8'><input id='{{id}}_q' class='form-control' type='text'{{#q}} value='{{q}}'{{/q}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExternalNetworkInjection" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_governorSCD").value; if ("" != temp) obj.governorSCD = temp;
                temp = document.getElementById (id + "_ikSecond").checked; if (temp) obj.ikSecond = true;
                temp = document.getElementById (id + "_maxInitialSymShCCurrent").value; if ("" != temp) obj.maxInitialSymShCCurrent = temp;
                temp = document.getElementById (id + "_maxP").value; if ("" != temp) obj.maxP = temp;
                temp = document.getElementById (id + "_maxQ").value; if ("" != temp) obj.maxQ = temp;
                temp = document.getElementById (id + "_maxR0ToX0Ratio").value; if ("" != temp) obj.maxR0ToX0Ratio = temp;
                temp = document.getElementById (id + "_maxR1ToX1Ratio").value; if ("" != temp) obj.maxR1ToX1Ratio = temp;
                temp = document.getElementById (id + "_maxZ0ToZ1Ratio").value; if ("" != temp) obj.maxZ0ToZ1Ratio = temp;
                temp = document.getElementById (id + "_minInitialSymShCCurrent").value; if ("" != temp) obj.minInitialSymShCCurrent = temp;
                temp = document.getElementById (id + "_minP").value; if ("" != temp) obj.minP = temp;
                temp = document.getElementById (id + "_minQ").value; if ("" != temp) obj.minQ = temp;
                temp = document.getElementById (id + "_minR0ToX0Ratio").value; if ("" != temp) obj.minR0ToX0Ratio = temp;
                temp = document.getElementById (id + "_minR1ToX1Ratio").value; if ("" != temp) obj.minR1ToX1Ratio = temp;
                temp = document.getElementById (id + "_minZ0ToZ1Ratio").value; if ("" != temp) obj.minZ0ToZ1Ratio = temp;
                temp = document.getElementById (id + "_referencePriority").value; if ("" != temp) obj.referencePriority = temp;
                temp = document.getElementById (id + "_voltageFactor").value; if ("" != temp) obj.voltageFactor = temp;
                temp = document.getElementById (id + "_p").value; if ("" != temp) obj.p = temp;
                temp = document.getElementById (id + "_q").value; if ("" != temp) obj.q = temp;

                return (obj);
            }
        }

        /**
         * A linear shunt compensator has banks or sections with equal admittance values.
         *
         */
        class LinearShuntCompensator extends ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.LinearShuntCompensator;
                if (null == bucket)
                   cim_data.LinearShuntCompensator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.LinearShuntCompensator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "LinearShuntCompensator";
                base.parse_element (/<cim:LinearShuntCompensator.b0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.b0PerSection>/g, obj, "b0PerSection", base.to_string, sub, context);
                base.parse_element (/<cim:LinearShuntCompensator.bPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.bPerSection>/g, obj, "bPerSection", base.to_string, sub, context);
                base.parse_element (/<cim:LinearShuntCompensator.g0PerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.g0PerSection>/g, obj, "g0PerSection", base.to_string, sub, context);
                base.parse_element (/<cim:LinearShuntCompensator.gPerSection>([\s\S]*?)<\/cim:LinearShuntCompensator.gPerSection>/g, obj, "gPerSection", base.to_string, sub, context);
                var bucket = context.parsed.LinearShuntCompensator;
                if (null == bucket)
                   context.parsed.LinearShuntCompensator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_element (obj, "LinearShuntCompensator", "b0PerSection", "b0PerSection",  base.from_string, fields);
                base.export_element (obj, "LinearShuntCompensator", "bPerSection", "bPerSection",  base.from_string, fields);
                base.export_element (obj, "LinearShuntCompensator", "g0PerSection", "g0PerSection",  base.from_string, fields);
                base.export_element (obj, "LinearShuntCompensator", "gPerSection", "gPerSection",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#LinearShuntCompensator_collapse" aria-expanded="true" aria-controls="LinearShuntCompensator_collapse" style="margin-left: 10px;">LinearShuntCompensator</a></legend>
                    <div id="LinearShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensator.prototype.template.call (this) +
                    `
                    {{#b0PerSection}}<div><b>b0PerSection</b>: {{b0PerSection}}</div>{{/b0PerSection}}
                    {{#bPerSection}}<div><b>bPerSection</b>: {{bPerSection}}</div>{{/bPerSection}}
                    {{#g0PerSection}}<div><b>g0PerSection</b>: {{g0PerSection}}</div>{{/g0PerSection}}
                    {{#gPerSection}}<div><b>gPerSection</b>: {{gPerSection}}</div>{{/gPerSection}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_LinearShuntCompensator_collapse" aria-expanded="true" aria-controls="{{id}}_LinearShuntCompensator_collapse" style="margin-left: 10px;">LinearShuntCompensator</a></legend>
                    <div id="{{id}}_LinearShuntCompensator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0PerSection'>b0PerSection: </label><div class='col-sm-8'><input id='{{id}}_b0PerSection' class='form-control' type='text'{{#b0PerSection}} value='{{b0PerSection}}'{{/b0PerSection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bPerSection'>bPerSection: </label><div class='col-sm-8'><input id='{{id}}_bPerSection' class='form-control' type='text'{{#bPerSection}} value='{{bPerSection}}'{{/bPerSection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0PerSection'>g0PerSection: </label><div class='col-sm-8'><input id='{{id}}_g0PerSection' class='form-control' type='text'{{#g0PerSection}} value='{{g0PerSection}}'{{/g0PerSection}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gPerSection'>gPerSection: </label><div class='col-sm-8'><input id='{{id}}_gPerSection' class='form-control' type='text'{{#gPerSection}} value='{{gPerSection}}'{{/gPerSection}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "LinearShuntCompensator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b0PerSection").value; if ("" != temp) obj.b0PerSection = temp;
                temp = document.getElementById (id + "_bPerSection").value; if ("" != temp) obj.bPerSection = temp;
                temp = document.getElementById (id + "_g0PerSection").value; if ("" != temp) obj.g0PerSection = temp;
                temp = document.getElementById (id + "_gPerSection").value; if ("" != temp) obj.gPerSection = temp;

                return (obj);
            }
        }

        /**
         * A rotating machine whose shaft rotates asynchronously with the electrical field.
         *
         * Also known as an induction machine with no external connection to the rotor windings, e.g squirrel-cage induction machine.
         *
         */
        class AsynchronousMachine extends RotatingMachine
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.AsynchronousMachine;
                if (null == bucket)
                   cim_data.AsynchronousMachine = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AsynchronousMachine[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = RotatingMachine.prototype.parse.call (this, context, sub);
                obj.cls = "AsynchronousMachine";
                base.parse_element (/<cim:AsynchronousMachine.converterFedDrive>([\s\S]*?)<\/cim:AsynchronousMachine.converterFedDrive>/g, obj, "converterFedDrive", base.to_boolean, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.efficiency>([\s\S]*?)<\/cim:AsynchronousMachine.efficiency>/g, obj, "efficiency", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.iaIrRatio>([\s\S]*?)<\/cim:AsynchronousMachine.iaIrRatio>/g, obj, "iaIrRatio", base.to_float, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.nominalFrequency>([\s\S]*?)<\/cim:AsynchronousMachine.nominalFrequency>/g, obj, "nominalFrequency", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.nominalSpeed>([\s\S]*?)<\/cim:AsynchronousMachine.nominalSpeed>/g, obj, "nominalSpeed", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.polePairNumber>([\s\S]*?)<\/cim:AsynchronousMachine.polePairNumber>/g, obj, "polePairNumber", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.ratedMechanicalPower>([\s\S]*?)<\/cim:AsynchronousMachine.ratedMechanicalPower>/g, obj, "ratedMechanicalPower", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.reversible>([\s\S]*?)<\/cim:AsynchronousMachine.reversible>/g, obj, "reversible", base.to_boolean, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.rr1>([\s\S]*?)<\/cim:AsynchronousMachine.rr1>/g, obj, "rr1", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.rr2>([\s\S]*?)<\/cim:AsynchronousMachine.rr2>/g, obj, "rr2", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.rxLockedRotorRatio>([\s\S]*?)<\/cim:AsynchronousMachine.rxLockedRotorRatio>/g, obj, "rxLockedRotorRatio", base.to_float, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.tpo>([\s\S]*?)<\/cim:AsynchronousMachine.tpo>/g, obj, "tpo", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.tppo>([\s\S]*?)<\/cim:AsynchronousMachine.tppo>/g, obj, "tppo", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xlr1>([\s\S]*?)<\/cim:AsynchronousMachine.xlr1>/g, obj, "xlr1", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xlr2>([\s\S]*?)<\/cim:AsynchronousMachine.xlr2>/g, obj, "xlr2", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xm>([\s\S]*?)<\/cim:AsynchronousMachine.xm>/g, obj, "xm", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xp>([\s\S]*?)<\/cim:AsynchronousMachine.xp>/g, obj, "xp", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xpp>([\s\S]*?)<\/cim:AsynchronousMachine.xpp>/g, obj, "xpp", base.to_string, sub, context);
                base.parse_element (/<cim:AsynchronousMachine.xs>([\s\S]*?)<\/cim:AsynchronousMachine.xs>/g, obj, "xs", base.to_string, sub, context);
                base.parse_attribute (/<cim:AsynchronousMachine.asynchronousMachineType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "asynchronousMachineType", sub, context);
                base.parse_attribute (/<cim:AsynchronousMachine.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                var bucket = context.parsed.AsynchronousMachine;
                if (null == bucket)
                   context.parsed.AsynchronousMachine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = RotatingMachine.prototype.export.call (this, obj, false);

                base.export_element (obj, "AsynchronousMachine", "converterFedDrive", "converterFedDrive",  base.from_boolean, fields);
                base.export_element (obj, "AsynchronousMachine", "efficiency", "efficiency",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "iaIrRatio", "iaIrRatio",  base.from_float, fields);
                base.export_element (obj, "AsynchronousMachine", "nominalFrequency", "nominalFrequency",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "nominalSpeed", "nominalSpeed",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "polePairNumber", "polePairNumber",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "ratedMechanicalPower", "ratedMechanicalPower",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "reversible", "reversible",  base.from_boolean, fields);
                base.export_element (obj, "AsynchronousMachine", "rr1", "rr1",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "rr2", "rr2",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "rxLockedRotorRatio", "rxLockedRotorRatio",  base.from_float, fields);
                base.export_element (obj, "AsynchronousMachine", "tpo", "tpo",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "tppo", "tppo",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xlr1", "xlr1",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xlr2", "xlr2",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xm", "xm",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xp", "xp",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xpp", "xpp",  base.from_string, fields);
                base.export_element (obj, "AsynchronousMachine", "xs", "xs",  base.from_string, fields);
                base.export_attribute (obj, "AsynchronousMachine", "asynchronousMachineType", "asynchronousMachineType", fields);
                base.export_attribute (obj, "AsynchronousMachine", "AsynchronousMachineDynamics", "AsynchronousMachineDynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#AsynchronousMachine_collapse" aria-expanded="true" aria-controls="AsynchronousMachine_collapse" style="margin-left: 10px;">AsynchronousMachine</a></legend>
                    <div id="AsynchronousMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RotatingMachine.prototype.template.call (this) +
                    `
                    {{#converterFedDrive}}<div><b>converterFedDrive</b>: {{converterFedDrive}}</div>{{/converterFedDrive}}
                    {{#efficiency}}<div><b>efficiency</b>: {{efficiency}}</div>{{/efficiency}}
                    {{#iaIrRatio}}<div><b>iaIrRatio</b>: {{iaIrRatio}}</div>{{/iaIrRatio}}
                    {{#nominalFrequency}}<div><b>nominalFrequency</b>: {{nominalFrequency}}</div>{{/nominalFrequency}}
                    {{#nominalSpeed}}<div><b>nominalSpeed</b>: {{nominalSpeed}}</div>{{/nominalSpeed}}
                    {{#polePairNumber}}<div><b>polePairNumber</b>: {{polePairNumber}}</div>{{/polePairNumber}}
                    {{#ratedMechanicalPower}}<div><b>ratedMechanicalPower</b>: {{ratedMechanicalPower}}</div>{{/ratedMechanicalPower}}
                    {{#reversible}}<div><b>reversible</b>: {{reversible}}</div>{{/reversible}}
                    {{#rr1}}<div><b>rr1</b>: {{rr1}}</div>{{/rr1}}
                    {{#rr2}}<div><b>rr2</b>: {{rr2}}</div>{{/rr2}}
                    {{#rxLockedRotorRatio}}<div><b>rxLockedRotorRatio</b>: {{rxLockedRotorRatio}}</div>{{/rxLockedRotorRatio}}
                    {{#tpo}}<div><b>tpo</b>: {{tpo}}</div>{{/tpo}}
                    {{#tppo}}<div><b>tppo</b>: {{tppo}}</div>{{/tppo}}
                    {{#xlr1}}<div><b>xlr1</b>: {{xlr1}}</div>{{/xlr1}}
                    {{#xlr2}}<div><b>xlr2</b>: {{xlr2}}</div>{{/xlr2}}
                    {{#xm}}<div><b>xm</b>: {{xm}}</div>{{/xm}}
                    {{#xp}}<div><b>xp</b>: {{xp}}</div>{{/xp}}
                    {{#xpp}}<div><b>xpp</b>: {{xpp}}</div>{{/xpp}}
                    {{#xs}}<div><b>xs</b>: {{xs}}</div>{{/xs}}
                    {{#asynchronousMachineType}}<div><b>asynchronousMachineType</b>: {{asynchronousMachineType}}</div>{{/asynchronousMachineType}}
                    {{#AsynchronousMachineDynamics}}<div><b>AsynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{AsynchronousMachineDynamics}}&quot;);}); return false;'>{{AsynchronousMachineDynamics}}</a></div>{{/AsynchronousMachineDynamics}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.AsynchronousMachineKind = []; if (!obj.asynchronousMachineType) obj.AsynchronousMachineKind.push ({ id: '', selected: true}); for (var property in AsynchronousMachineKind) obj.AsynchronousMachineKind.push ({ id: property, selected: obj.asynchronousMachineType && obj.asynchronousMachineType.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.AsynchronousMachineKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_AsynchronousMachine_collapse" aria-expanded="true" aria-controls="{{id}}_AsynchronousMachine_collapse" style="margin-left: 10px;">AsynchronousMachine</a></legend>
                    <div id="{{id}}_AsynchronousMachine_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + RotatingMachine.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_converterFedDrive'>converterFedDrive: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_converterFedDrive' class='form-check-input' type='checkbox'{{#converterFedDrive}} checked{{/converterFedDrive}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efficiency'>efficiency: </label><div class='col-sm-8'><input id='{{id}}_efficiency' class='form-control' type='text'{{#efficiency}} value='{{efficiency}}'{{/efficiency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iaIrRatio'>iaIrRatio: </label><div class='col-sm-8'><input id='{{id}}_iaIrRatio' class='form-control' type='text'{{#iaIrRatio}} value='{{iaIrRatio}}'{{/iaIrRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalFrequency'>nominalFrequency: </label><div class='col-sm-8'><input id='{{id}}_nominalFrequency' class='form-control' type='text'{{#nominalFrequency}} value='{{nominalFrequency}}'{{/nominalFrequency}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nominalSpeed'>nominalSpeed: </label><div class='col-sm-8'><input id='{{id}}_nominalSpeed' class='form-control' type='text'{{#nominalSpeed}} value='{{nominalSpeed}}'{{/nominalSpeed}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_polePairNumber'>polePairNumber: </label><div class='col-sm-8'><input id='{{id}}_polePairNumber' class='form-control' type='text'{{#polePairNumber}} value='{{polePairNumber}}'{{/polePairNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ratedMechanicalPower'>ratedMechanicalPower: </label><div class='col-sm-8'><input id='{{id}}_ratedMechanicalPower' class='form-control' type='text'{{#ratedMechanicalPower}} value='{{ratedMechanicalPower}}'{{/ratedMechanicalPower}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_reversible'>reversible: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_reversible' class='form-check-input' type='checkbox'{{#reversible}} checked{{/reversible}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rr1'>rr1: </label><div class='col-sm-8'><input id='{{id}}_rr1' class='form-control' type='text'{{#rr1}} value='{{rr1}}'{{/rr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rr2'>rr2: </label><div class='col-sm-8'><input id='{{id}}_rr2' class='form-control' type='text'{{#rr2}} value='{{rr2}}'{{/rr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rxLockedRotorRatio'>rxLockedRotorRatio: </label><div class='col-sm-8'><input id='{{id}}_rxLockedRotorRatio' class='form-control' type='text'{{#rxLockedRotorRatio}} value='{{rxLockedRotorRatio}}'{{/rxLockedRotorRatio}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tpo'>tpo: </label><div class='col-sm-8'><input id='{{id}}_tpo' class='form-control' type='text'{{#tpo}} value='{{tpo}}'{{/tpo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tppo'>tppo: </label><div class='col-sm-8'><input id='{{id}}_tppo' class='form-control' type='text'{{#tppo}} value='{{tppo}}'{{/tppo}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xlr1'>xlr1: </label><div class='col-sm-8'><input id='{{id}}_xlr1' class='form-control' type='text'{{#xlr1}} value='{{xlr1}}'{{/xlr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xlr2'>xlr2: </label><div class='col-sm-8'><input id='{{id}}_xlr2' class='form-control' type='text'{{#xlr2}} value='{{xlr2}}'{{/xlr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xm'>xm: </label><div class='col-sm-8'><input id='{{id}}_xm' class='form-control' type='text'{{#xm}} value='{{xm}}'{{/xm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xp'>xp: </label><div class='col-sm-8'><input id='{{id}}_xp' class='form-control' type='text'{{#xp}} value='{{xp}}'{{/xp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xpp'>xpp: </label><div class='col-sm-8'><input id='{{id}}_xpp' class='form-control' type='text'{{#xpp}} value='{{xpp}}'{{/xpp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xs'>xs: </label><div class='col-sm-8'><input id='{{id}}_xs' class='form-control' type='text'{{#xs}} value='{{xs}}'{{/xs}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_asynchronousMachineType'>asynchronousMachineType: </label><div class='col-sm-8'><select id='{{id}}_asynchronousMachineType' class='form-control custom-select'>{{#AsynchronousMachineKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/AsynchronousMachineKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_AsynchronousMachineDynamics'>AsynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_AsynchronousMachineDynamics' class='form-control' type='text'{{#AsynchronousMachineDynamics}} value='{{AsynchronousMachineDynamics}}'{{/AsynchronousMachineDynamics}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AsynchronousMachine" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_converterFedDrive").checked; if (temp) obj.converterFedDrive = true;
                temp = document.getElementById (id + "_efficiency").value; if ("" != temp) obj.efficiency = temp;
                temp = document.getElementById (id + "_iaIrRatio").value; if ("" != temp) obj.iaIrRatio = temp;
                temp = document.getElementById (id + "_nominalFrequency").value; if ("" != temp) obj.nominalFrequency = temp;
                temp = document.getElementById (id + "_nominalSpeed").value; if ("" != temp) obj.nominalSpeed = temp;
                temp = document.getElementById (id + "_polePairNumber").value; if ("" != temp) obj.polePairNumber = temp;
                temp = document.getElementById (id + "_ratedMechanicalPower").value; if ("" != temp) obj.ratedMechanicalPower = temp;
                temp = document.getElementById (id + "_reversible").checked; if (temp) obj.reversible = true;
                temp = document.getElementById (id + "_rr1").value; if ("" != temp) obj.rr1 = temp;
                temp = document.getElementById (id + "_rr2").value; if ("" != temp) obj.rr2 = temp;
                temp = document.getElementById (id + "_rxLockedRotorRatio").value; if ("" != temp) obj.rxLockedRotorRatio = temp;
                temp = document.getElementById (id + "_tpo").value; if ("" != temp) obj.tpo = temp;
                temp = document.getElementById (id + "_tppo").value; if ("" != temp) obj.tppo = temp;
                temp = document.getElementById (id + "_xlr1").value; if ("" != temp) obj.xlr1 = temp;
                temp = document.getElementById (id + "_xlr2").value; if ("" != temp) obj.xlr2 = temp;
                temp = document.getElementById (id + "_xm").value; if ("" != temp) obj.xm = temp;
                temp = document.getElementById (id + "_xp").value; if ("" != temp) obj.xp = temp;
                temp = document.getElementById (id + "_xpp").value; if ("" != temp) obj.xpp = temp;
                temp = document.getElementById (id + "_xs").value; if ("" != temp) obj.xs = temp;
                temp = document.getElementById (id + "_asynchronousMachineType").value; if ("" != temp) { temp = AsynchronousMachineKind[temp]; if ("undefined" != typeof (temp)) obj.asynchronousMachineType = "http://iec.ch/TC57/2013/CIM-schema-cim16#AsynchronousMachineKind." + temp; }
                temp = document.getElementById (id + "_AsynchronousMachineDynamics").value; if ("" != temp) obj.AsynchronousMachineDynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["AsynchronousMachineDynamics", "0..1", "1", "AsynchronousMachineDynamics", "AsynchronousMachine"]
                        ]
                    )
                );
            }
        }

        /**
         * A wire or combination of wires, with consistent electrical characteristics, building a single electrical system, used to carry alternating current between points in the power system.
         *
         * For symmetrical, transposed 3ph lines, it is sufficient to use  attributes of the line segment, which describe impedances and admittances for the entire length of the segment.  Additionally impedances can be computed by using length and associated per length impedances.
         *
         */
        class ACLineSegment extends Conductor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ACLineSegment;
                if (null == bucket)
                   cim_data.ACLineSegment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ACLineSegment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Conductor.prototype.parse.call (this, context, sub);
                obj.cls = "ACLineSegment";
                base.parse_element (/<cim:ACLineSegment.b0ch>([\s\S]*?)<\/cim:ACLineSegment.b0ch>/g, obj, "b0ch", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.bch>([\s\S]*?)<\/cim:ACLineSegment.bch>/g, obj, "bch", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.g0ch>([\s\S]*?)<\/cim:ACLineSegment.g0ch>/g, obj, "g0ch", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.gch>([\s\S]*?)<\/cim:ACLineSegment.gch>/g, obj, "gch", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.r>([\s\S]*?)<\/cim:ACLineSegment.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.r0>([\s\S]*?)<\/cim:ACLineSegment.r0>/g, obj, "r0", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.shortCircuitEndTemperature>([\s\S]*?)<\/cim:ACLineSegment.shortCircuitEndTemperature>/g, obj, "shortCircuitEndTemperature", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.x>([\s\S]*?)<\/cim:ACLineSegment.x>/g, obj, "x", base.to_string, sub, context);
                base.parse_element (/<cim:ACLineSegment.x0>([\s\S]*?)<\/cim:ACLineSegment.x0>/g, obj, "x0", base.to_string, sub, context);
                base.parse_attribute (/<cim:ACLineSegment.LineGroundingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LineGroundingAction", sub, context);
                base.parse_attributes (/<cim:ACLineSegment.Cut\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Cut", sub, context);
                base.parse_attributes (/<cim:ACLineSegment.LineFaults\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LineFaults", sub, context);
                base.parse_attribute (/<cim:ACLineSegment.LineJumpingAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LineJumpingAction", sub, context);
                base.parse_attributes (/<cim:ACLineSegment.ACLineSegmentPhases\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegmentPhases", sub, context);
                base.parse_attributes (/<cim:ACLineSegment.Clamp\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Clamp", sub, context);
                base.parse_attribute (/<cim:ACLineSegment.PerLengthImpedance\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PerLengthImpedance", sub, context);
                var bucket = context.parsed.ACLineSegment;
                if (null == bucket)
                   context.parsed.ACLineSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Conductor.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACLineSegment", "b0ch", "b0ch",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "bch", "bch",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "g0ch", "g0ch",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "gch", "gch",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "r", "r",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "r0", "r0",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "shortCircuitEndTemperature", "shortCircuitEndTemperature",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "x", "x",  base.from_string, fields);
                base.export_element (obj, "ACLineSegment", "x0", "x0",  base.from_string, fields);
                base.export_attribute (obj, "ACLineSegment", "LineGroundingAction", "LineGroundingAction", fields);
                base.export_attributes (obj, "ACLineSegment", "Cut", "Cut", fields);
                base.export_attributes (obj, "ACLineSegment", "LineFaults", "LineFaults", fields);
                base.export_attribute (obj, "ACLineSegment", "LineJumpingAction", "LineJumpingAction", fields);
                base.export_attributes (obj, "ACLineSegment", "ACLineSegmentPhases", "ACLineSegmentPhases", fields);
                base.export_attributes (obj, "ACLineSegment", "Clamp", "Clamp", fields);
                base.export_attribute (obj, "ACLineSegment", "PerLengthImpedance", "PerLengthImpedance", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ACLineSegment_collapse" aria-expanded="true" aria-controls="ACLineSegment_collapse" style="margin-left: 10px;">ACLineSegment</a></legend>
                    <div id="ACLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Conductor.prototype.template.call (this) +
                    `
                    {{#b0ch}}<div><b>b0ch</b>: {{b0ch}}</div>{{/b0ch}}
                    {{#bch}}<div><b>bch</b>: {{bch}}</div>{{/bch}}
                    {{#g0ch}}<div><b>g0ch</b>: {{g0ch}}</div>{{/g0ch}}
                    {{#gch}}<div><b>gch</b>: {{gch}}</div>{{/gch}}
                    {{#r}}<div><b>r</b>: {{r}}</div>{{/r}}
                    {{#r0}}<div><b>r0</b>: {{r0}}</div>{{/r0}}
                    {{#shortCircuitEndTemperature}}<div><b>shortCircuitEndTemperature</b>: {{shortCircuitEndTemperature}}</div>{{/shortCircuitEndTemperature}}
                    {{#x}}<div><b>x</b>: {{x}}</div>{{/x}}
                    {{#x0}}<div><b>x0</b>: {{x0}}</div>{{/x0}}
                    {{#LineGroundingAction}}<div><b>LineGroundingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LineGroundingAction}}&quot;);}); return false;'>{{LineGroundingAction}}</a></div>{{/LineGroundingAction}}
                    {{#Cut}}<div><b>Cut</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Cut}}
                    {{#LineFaults}}<div><b>LineFaults</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LineFaults}}
                    {{#LineJumpingAction}}<div><b>LineJumpingAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{LineJumpingAction}}&quot;);}); return false;'>{{LineJumpingAction}}</a></div>{{/LineJumpingAction}}
                    {{#ACLineSegmentPhases}}<div><b>ACLineSegmentPhases</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ACLineSegmentPhases}}
                    {{#Clamp}}<div><b>Clamp</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Clamp}}
                    {{#PerLengthImpedance}}<div><b>PerLengthImpedance</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PerLengthImpedance}}&quot;);}); return false;'>{{PerLengthImpedance}}</a></div>{{/PerLengthImpedance}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Cut) obj.Cut_string = obj.Cut.join ();
                if (obj.LineFaults) obj.LineFaults_string = obj.LineFaults.join ();
                if (obj.ACLineSegmentPhases) obj.ACLineSegmentPhases_string = obj.ACLineSegmentPhases.join ();
                if (obj.Clamp) obj.Clamp_string = obj.Clamp.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Cut_string;
                delete obj.LineFaults_string;
                delete obj.ACLineSegmentPhases_string;
                delete obj.Clamp_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ACLineSegment_collapse" aria-expanded="true" aria-controls="{{id}}_ACLineSegment_collapse" style="margin-left: 10px;">ACLineSegment</a></legend>
                    <div id="{{id}}_ACLineSegment_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Conductor.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_b0ch'>b0ch: </label><div class='col-sm-8'><input id='{{id}}_b0ch' class='form-control' type='text'{{#b0ch}} value='{{b0ch}}'{{/b0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bch'>bch: </label><div class='col-sm-8'><input id='{{id}}_bch' class='form-control' type='text'{{#bch}} value='{{bch}}'{{/bch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_g0ch'>g0ch: </label><div class='col-sm-8'><input id='{{id}}_g0ch' class='form-control' type='text'{{#g0ch}} value='{{g0ch}}'{{/g0ch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gch'>gch: </label><div class='col-sm-8'><input id='{{id}}_gch' class='form-control' type='text'{{#gch}} value='{{gch}}'{{/gch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r'>r: </label><div class='col-sm-8'><input id='{{id}}_r' class='form-control' type='text'{{#r}} value='{{r}}'{{/r}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_r0'>r0: </label><div class='col-sm-8'><input id='{{id}}_r0' class='form-control' type='text'{{#r0}} value='{{r0}}'{{/r0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_shortCircuitEndTemperature'>shortCircuitEndTemperature: </label><div class='col-sm-8'><input id='{{id}}_shortCircuitEndTemperature' class='form-control' type='text'{{#shortCircuitEndTemperature}} value='{{shortCircuitEndTemperature}}'{{/shortCircuitEndTemperature}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x'>x: </label><div class='col-sm-8'><input id='{{id}}_x' class='form-control' type='text'{{#x}} value='{{x}}'{{/x}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_x0'>x0: </label><div class='col-sm-8'><input id='{{id}}_x0' class='form-control' type='text'{{#x0}} value='{{x0}}'{{/x0}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LineGroundingAction'>LineGroundingAction: </label><div class='col-sm-8'><input id='{{id}}_LineGroundingAction' class='form-control' type='text'{{#LineGroundingAction}} value='{{LineGroundingAction}}'{{/LineGroundingAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LineJumpingAction'>LineJumpingAction: </label><div class='col-sm-8'><input id='{{id}}_LineJumpingAction' class='form-control' type='text'{{#LineJumpingAction}} value='{{LineJumpingAction}}'{{/LineJumpingAction}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PerLengthImpedance'>PerLengthImpedance: </label><div class='col-sm-8'><input id='{{id}}_PerLengthImpedance' class='form-control' type='text'{{#PerLengthImpedance}} value='{{PerLengthImpedance}}'{{/PerLengthImpedance}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ACLineSegment" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_b0ch").value; if ("" != temp) obj.b0ch = temp;
                temp = document.getElementById (id + "_bch").value; if ("" != temp) obj.bch = temp;
                temp = document.getElementById (id + "_g0ch").value; if ("" != temp) obj.g0ch = temp;
                temp = document.getElementById (id + "_gch").value; if ("" != temp) obj.gch = temp;
                temp = document.getElementById (id + "_r").value; if ("" != temp) obj.r = temp;
                temp = document.getElementById (id + "_r0").value; if ("" != temp) obj.r0 = temp;
                temp = document.getElementById (id + "_shortCircuitEndTemperature").value; if ("" != temp) obj.shortCircuitEndTemperature = temp;
                temp = document.getElementById (id + "_x").value; if ("" != temp) obj.x = temp;
                temp = document.getElementById (id + "_x0").value; if ("" != temp) obj.x0 = temp;
                temp = document.getElementById (id + "_LineGroundingAction").value; if ("" != temp) obj.LineGroundingAction = temp;
                temp = document.getElementById (id + "_LineJumpingAction").value; if ("" != temp) obj.LineJumpingAction = temp;
                temp = document.getElementById (id + "_PerLengthImpedance").value; if ("" != temp) obj.PerLengthImpedance = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LineGroundingAction", "0..1", "0..1", "GroundAction", "AlongACLineSegment"],
                            ["Cut", "0..*", "1", "Cut", "ACLineSegment"],
                            ["LineFaults", "0..*", "0..1", "LineFault", "ACLineSegment"],
                            ["LineJumpingAction", "0..1", "0..*", "JumperAction", "AlongACLineSegments"],
                            ["ACLineSegmentPhases", "0..*", "1", "ACLineSegmentPhase", "ACLineSegment"],
                            ["Clamp", "0..*", "1", "Clamp", "ACLineSegment"],
                            ["PerLengthImpedance", "0..1", "0..*", "PerLengthImpedance", "ACLineSegments"]
                        ]
                    )
                );
            }
        }

        return (
            {
                NonlinearShuntCompensatorPoint: NonlinearShuntCompensatorPoint,
                ShuntCompensatorPhase: ShuntCompensatorPhase,
                ACLineSegment: ACLineSegment,
                RatioTapChangerTablePoint: RatioTapChangerTablePoint,
                ProtectedSwitch: ProtectedSwitch,
                BusbarSection: BusbarSection,
                NonlinearShuntCompensator: NonlinearShuntCompensator,
                RegulatingCondEq: RegulatingCondEq,
                PerLengthImpedance: PerLengthImpedance,
                RatioTapChanger: RatioTapChanger,
                LinearShuntCompensator: LinearShuntCompensator,
                PhaseTapChanger: PhaseTapChanger,
                Fuse: Fuse,
                Switch: Switch,
                Breaker: Breaker,
                TransformerTankEnd: TransformerTankEnd,
                Conductor: Conductor,
                RegulationSchedule: RegulationSchedule,
                PhaseTapChangerTablePoint: PhaseTapChangerTablePoint,
                SwitchPhase: SwitchPhase,
                Jumper: Jumper,
                PowerTransformerEnd: PowerTransformerEnd,
                GroundDisconnector: GroundDisconnector,
                EnergyConsumerPhase: EnergyConsumerPhase,
                TransformerEnd: TransformerEnd,
                PowerTransformer: PowerTransformer,
                LinearShuntCompensatorPhase: LinearShuntCompensatorPhase,
                Cut: Cut,
                Plant: Plant,
                TransformerMeshImpedance: TransformerMeshImpedance,
                ACLineSegmentPhase: ACLineSegmentPhase,
                Junction: Junction,
                TapChangerControl: TapChangerControl,
                PhaseTapChangerLinear: PhaseTapChangerLinear,
                NonlinearShuntCompensatorPhasePoint: NonlinearShuntCompensatorPhasePoint,
                PerLengthPhaseImpedance: PerLengthPhaseImpedance,
                RotatingMachine: RotatingMachine,
                TapChanger: TapChanger,
                Clamp: Clamp,
                Ground: Ground,
                SeriesCompensator: SeriesCompensator,
                Disconnector: Disconnector,
                PhaseTapChangerAsymmetrical: PhaseTapChangerAsymmetrical,
                AsynchronousMachine: AsynchronousMachine,
                ReactiveCapabilityCurve: ReactiveCapabilityCurve,
                MutualCoupling: MutualCoupling,
                PhaseImpedanceData: PhaseImpedanceData,
                ExternalNetworkInjection: ExternalNetworkInjection,
                Recloser: Recloser,
                SwitchSchedule: SwitchSchedule,
                TransformerCoreAdmittance: TransformerCoreAdmittance,
                RatioTapChangerTable: RatioTapChangerTable,
                TransformerTank: TransformerTank,
                TapSchedule: TapSchedule,
                VoltageControlZone: VoltageControlZone,
                PhaseTapChangerTabular: PhaseTapChangerTabular,
                PerLengthLineParameter: PerLengthLineParameter,
                GroundingImpedance: GroundingImpedance,
                RegulatingControl: RegulatingControl,
                FrequencyConverter: FrequencyConverter,
                PetersenCoil: PetersenCoil,
                ShuntCompensator: ShuntCompensator,
                NonlinearShuntCompensatorPhase: NonlinearShuntCompensatorPhase,
                Line: Line,
                TapChangerTablePoint: TapChangerTablePoint,
                PhaseTapChangerSymmetrical: PhaseTapChangerSymmetrical,
                PhaseTapChangerNonLinear: PhaseTapChangerNonLinear,
                PhaseTapChangerTable: PhaseTapChangerTable,
                EarthFaultCompensator: EarthFaultCompensator,
                Connector: Connector,
                StaticVarCompensator: StaticVarCompensator,
                TransformerStarImpedance: TransformerStarImpedance,
                CompositeSwitch: CompositeSwitch,
                EnergyConsumer: EnergyConsumer,
                EnergySource: EnergySource,
                Sectionaliser: Sectionaliser,
                SynchronousMachine: SynchronousMachine,
                LoadBreakSwitch: LoadBreakSwitch,
                PerLengthSequenceImpedance: PerLengthSequenceImpedance
            }
        );
    }
);