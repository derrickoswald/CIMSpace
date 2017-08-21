define
(
    ["model/base", "model/Core"],
    /**
     * This section contains standard dynamic model specifications grouped into packages by standard function block (type of equipment being modelled).
     *
     * In the CIM, standard dynamic models are expressed by means of a class named with the standard model name and attributes reflecting each of the parameters necessary to describe the behaviour of an instance of the standard model.
     *
     */
    function (base, Core)
    {

        /**
         * Abstract parent class for all synchronous and asynchronous machine standard models.
         *
         */
        function parse_RotatingMachineDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "RotatingMachineDynamics";
            /**
             * Damping torque coefficient (D).
             *
             * A proportionality constant that, when multiplied by the angular velocity of the rotor poles with respect to the magnetic field (frequency), results in the damping torque.  This value is often zero when the sources of damping torques (generator damper windings, load damping effects, etc.) are modelled in detail.  Typical Value = 0.
             *
             */
            obj["damping"] = base.to_float (base.parse_element (/<cim:RotatingMachineDynamics.damping>([\s\S]*?)<\/cim:RotatingMachineDynamics.damping>/g, sub, context, true));
            /**
             * Inertia constant of generator or motor and mechanical load (H) (&gt;0).
             *
             * This is the specification for the stored energy in the rotating mass when operating at rated speed.  For a generator, this includes the generator plus all other elements (turbine, exciter) on the same shaft and has units of MW*sec.  For a motor, it includes the motor plus its mechanical load. Conventional units are per unit on the generator MVA base, usually expressed as MW*second/MVA or just second.   This value is used in the accelerating power reference frame for operator training simulator solutions.  Typical Value = 3.
             *
             */
            obj["inertia"] = base.parse_element (/<cim:RotatingMachineDynamics.inertia>([\s\S]*?)<\/cim:RotatingMachineDynamics.inertia>/g, sub, context, true);
            /**
             * Saturation factor at rated terminal voltage (S1) (&gt; or =0).
             *
             * Not used by simplified model.  Defined by defined by S(E1) in the SynchronousMachineSaturationParameters diagram.  Typical Value = 0.02.
             *
             */
            obj["saturationFactor"] = base.to_float (base.parse_element (/<cim:RotatingMachineDynamics.saturationFactor>([\s\S]*?)<\/cim:RotatingMachineDynamics.saturationFactor>/g, sub, context, true));
            /**
             * Saturation factor at 120% of rated terminal voltage (S12) (&gt; or =S1).
             *
             * Not used by the simplified model, defined by S(E2) in the SynchronousMachineSaturationParameters diagram.  Typical Value = 0.12.
             *
             */
            obj["saturationFactor120"] = base.to_float (base.parse_element (/<cim:RotatingMachineDynamics.saturationFactor120>([\s\S]*?)<\/cim:RotatingMachineDynamics.saturationFactor120>/g, sub, context, true));
            /**
             * Stator leakage reactance (Xl) (&gt; or =0).
             *
             * Typical Value = 0.15.
             *
             */
            obj["statorLeakageReactance"] = base.parse_element (/<cim:RotatingMachineDynamics.statorLeakageReactance>([\s\S]*?)<\/cim:RotatingMachineDynamics.statorLeakageReactance>/g, sub, context, true);
            /**
             * Stator (armature) resistance (Rs) (&gt; or =0).
             *
             * Typical Value = 0.005.
             *
             */
            obj["statorResistance"] = base.parse_element (/<cim:RotatingMachineDynamics.statorResistance>([\s\S]*?)<\/cim:RotatingMachineDynamics.statorResistance>/g, sub, context, true);
            bucket = context.parsed.RotatingMachineDynamics;
            if (null == bucket)
                context.parsed.RotatingMachineDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Abstract parent class for all Dynamics function blocks.
         *
         */
        function parse_DynamicsFunctionBlock (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "DynamicsFunctionBlock";
            /**
             * Function block used indicator.
             * true = use of function block is enabled
             *
             * false = use of function block is disabled.
             *
             */
            obj["enabled"] = base.to_boolean (base.parse_element (/<cim:DynamicsFunctionBlock.enabled>([\s\S]*?)<\/cim:DynamicsFunctionBlock.enabled>/g, sub, context, true));
            bucket = context.parsed.DynamicsFunctionBlock;
            if (null == bucket)
                context.parsed.DynamicsFunctionBlock = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_RotatingMachineDynamics: parse_RotatingMachineDynamics,
                parse_DynamicsFunctionBlock: parse_DynamicsFunctionBlock
            }
        );
    }
);