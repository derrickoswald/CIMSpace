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
        function parse_AsynchronousMachineDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_RotatingMachineDynamics (context, sub);
            obj.cls = "AsynchronousMachineDynamics";
            base.parse_attribute (/<cim:AsynchronousMachineDynamics.TurbineGovernorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TurbineGovernorDynamics", sub, context);
            base.parse_attribute (/<cim:AsynchronousMachineDynamics.AsynchronousMachine\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachine", sub, context);
            base.parse_attribute (/<cim:AsynchronousMachineDynamics.WindTurbineType1or2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2Dynamics", sub, context);
            base.parse_attribute (/<cim:AsynchronousMachineDynamics.MechanicalLoadDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MechanicalLoadDynamics", sub, context);
            bucket = context.parsed.AsynchronousMachineDynamics;
            if (null == bucket)
                context.parsed.AsynchronousMachineDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachineDynamics (obj, exporters, full)
        {
            var fields = exporters["RotatingMachineDynamics"](obj, exporters, false);

            base.export_attribute (obj, "AsynchronousMachineDynamics", "TurbineGovernorDynamics", fields);
            base.export_attribute (obj, "AsynchronousMachineDynamics", "AsynchronousMachine", fields);
            base.export_attribute (obj, "AsynchronousMachineDynamics", "WindTurbineType1or2Dynamics", fields);
            base.export_attribute (obj, "AsynchronousMachineDynamics", "MechanicalLoadDynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
        function parse_AsynchronousMachineEquivalentCircuit (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AsynchronousMachineDynamics (context, sub);
            obj.cls = "AsynchronousMachineEquivalentCircuit";
            base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.rr1>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.rr1>/g, obj, "rr1", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.rr2>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.rr2>/g, obj, "rr2", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xlr1>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xlr1>/g, obj, "xlr1", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xlr2>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xlr2>/g, obj, "xlr2", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineEquivalentCircuit.xm>([\s\S]*?)<\/cim:AsynchronousMachineEquivalentCircuit.xm>/g, obj, "xm", base.to_string, sub, context);
            bucket = context.parsed.AsynchronousMachineEquivalentCircuit;
            if (null == bucket)
                context.parsed.AsynchronousMachineEquivalentCircuit = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachineEquivalentCircuit (obj, exporters, full)
        {
            var fields = exporters["AsynchronousMachineDynamics"](obj, exporters, false);

            base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "rr1", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "rr2", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xlr1", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xlr2", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineEquivalentCircuit", "xm", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
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
        function parse_AsynchronousMachineTimeConstantReactance (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_AsynchronousMachineDynamics (context, sub);
            obj.cls = "AsynchronousMachineTimeConstantReactance";
            base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.tpo>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.tpo>/g, obj, "tpo", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.tppo>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.tppo>/g, obj, "tppo", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xp>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xp>/g, obj, "xp", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xpp>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xpp>/g, obj, "xpp", base.to_string, sub, context);
            base.parse_element (/<cim:AsynchronousMachineTimeConstantReactance.xs>([\s\S]*?)<\/cim:AsynchronousMachineTimeConstantReactance.xs>/g, obj, "xs", base.to_string, sub, context);
            bucket = context.parsed.AsynchronousMachineTimeConstantReactance;
            if (null == bucket)
                context.parsed.AsynchronousMachineTimeConstantReactance = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_AsynchronousMachineTimeConstantReactance (obj, exporters, full)
        {
            var fields = exporters["AsynchronousMachineDynamics"](obj, exporters, false);

            base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "tpo", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "tppo", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xp", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xpp", base.from_string, fields);
            base.export_element (obj, "AsynchronousMachineTimeConstantReactance", "xs", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_AsynchronousMachineEquivalentCircuit: export_AsynchronousMachineEquivalentCircuit,
                export_AsynchronousMachineDynamics: export_AsynchronousMachineDynamics,
                parse_AsynchronousMachineEquivalentCircuit: parse_AsynchronousMachineEquivalentCircuit,
                parse_AsynchronousMachineTimeConstantReactance: parse_AsynchronousMachineTimeConstantReactance,
                parse_AsynchronousMachineDynamics: parse_AsynchronousMachineDynamics,
                export_AsynchronousMachineTimeConstantReactance: export_AsynchronousMachineTimeConstantReactance
            }
        );
    }
);