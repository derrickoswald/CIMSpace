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

                var bucket = context.parsed.SynchronousMachineDynamics;
                if (null == bucket)
                   context.parsed.SynchronousMachineDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.RotatingMachineDynamics.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SynchronousMachineDynamics", "MechanicalLoadDynamics", fields);
                base.export_attribute (obj, "SynchronousMachineDynamics", "ExcitationSystemDynamics", fields);
                base.export_attribute (obj, "SynchronousMachineDynamics", "SynchronousMachine", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Type of rotor on physical machine.
         *
         */
        class RotorKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RotorKind;
                if (null == bucket)
                   cim_data.RotorKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RotorKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RotorKind";
                base.parse_element (/<cim:RotorKind.roundRotor>([\s\S]*?)<\/cim:RotorKind.roundRotor>/g, obj, "roundRotor", base.to_string, sub, context);
                base.parse_element (/<cim:RotorKind.salientPole>([\s\S]*?)<\/cim:RotorKind.salientPole>/g, obj, "salientPole", base.to_string, sub, context);

                var bucket = context.parsed.RotorKind;
                if (null == bucket)
                   context.parsed.RotorKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RotorKind", "roundRotor", base.from_string, fields);
                base.export_element (obj, "RotorKind", "salientPole", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Type of synchronous machine model used in Dynamic simulation applications.
         *
         */
        class SynchronousMachineModelKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SynchronousMachineModelKind;
                if (null == bucket)
                   cim_data.SynchronousMachineModelKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchronousMachineModelKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SynchronousMachineModelKind";
                base.parse_element (/<cim:SynchronousMachineModelKind.subtransient>([\s\S]*?)<\/cim:SynchronousMachineModelKind.subtransient>/g, obj, "subtransient", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineModelKind.subtransientTypeF>([\s\S]*?)<\/cim:SynchronousMachineModelKind.subtransientTypeF>/g, obj, "subtransientTypeF", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineModelKind.subtransientTypeJ>([\s\S]*?)<\/cim:SynchronousMachineModelKind.subtransientTypeJ>/g, obj, "subtransientTypeJ", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineModelKind.subtransientSimplified>([\s\S]*?)<\/cim:SynchronousMachineModelKind.subtransientSimplified>/g, obj, "subtransientSimplified", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineModelKind.subtransientSimplifiedDirectAxis>([\s\S]*?)<\/cim:SynchronousMachineModelKind.subtransientSimplifiedDirectAxis>/g, obj, "subtransientSimplifiedDirectAxis", base.to_string, sub, context);

                var bucket = context.parsed.SynchronousMachineModelKind;
                if (null == bucket)
                   context.parsed.SynchronousMachineModelKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SynchronousMachineModelKind", "subtransient", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineModelKind", "subtransientTypeF", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineModelKind", "subtransientTypeJ", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineModelKind", "subtransientSimplified", base.from_string, fields);
                base.export_element (obj, "SynchronousMachineModelKind", "subtransientSimplifiedDirectAxis", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Excitation base system mode.
         *
         */
        class IfdBaseKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IfdBaseKind;
                if (null == bucket)
                   cim_data.IfdBaseKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IfdBaseKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IfdBaseKind";
                base.parse_element (/<cim:IfdBaseKind.ifag>([\s\S]*?)<\/cim:IfdBaseKind.ifag>/g, obj, "ifag", base.to_string, sub, context);
                base.parse_element (/<cim:IfdBaseKind.ifnl>([\s\S]*?)<\/cim:IfdBaseKind.ifnl>/g, obj, "ifnl", base.to_string, sub, context);
                base.parse_element (/<cim:IfdBaseKind.iffl>([\s\S]*?)<\/cim:IfdBaseKind.iffl>/g, obj, "iffl", base.to_string, sub, context);

                var bucket = context.parsed.IfdBaseKind;
                if (null == bucket)
                   context.parsed.IfdBaseKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IfdBaseKind", "ifag", base.from_string, fields);
                base.export_element (obj, "IfdBaseKind", "ifnl", base.from_string, fields);
                base.export_element (obj, "IfdBaseKind", "iffl", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
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
                base.parse_element (/<cim:SynchronousMachineDetailed.ifdBaseType>([\s\S]*?)<\/cim:SynchronousMachineDetailed.ifdBaseType>/g, obj, "ifdBaseType", base.to_string, sub, context);
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
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.modelType>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.modelType>/g, obj, "modelType", base.to_string, sub, context);
                base.parse_element (/<cim:SynchronousMachineTimeConstantReactance.rotorType>([\s\S]*?)<\/cim:SynchronousMachineTimeConstantReactance.rotorType>/g, obj, "rotorType", base.to_string, sub, context);
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
        }

        return (
            {
                SynchronousMachineModelKind: SynchronousMachineModelKind,
                SynchronousMachineDynamics: SynchronousMachineDynamics,
                SynchronousMachineSimplified: SynchronousMachineSimplified,
                RotorKind: RotorKind,
                IfdBaseKind: IfdBaseKind,
                SynchronousMachineDetailed: SynchronousMachineDetailed,
                SynchronousMachineTimeConstantReactance: SynchronousMachineTimeConstantReactance,
                SynchronousMachineEquivalentCircuit: SynchronousMachineEquivalentCircuit
            }
        );
    }
);