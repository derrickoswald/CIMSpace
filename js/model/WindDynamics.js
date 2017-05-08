define
(
    ["model/base", "model/Core", "model/StandardModels"],
    /**
     * Wind turbines are generally divided into 4 types, which are currently significant in power systems.
     * The 4 types have the following characteristics:
     */
    function (base, Core, StandardModels)
    {

        /**
         * Wind turbine IEC Type 4A.
         * Reference: IEC Standard 61400-27-1, section 5.5.5.2.
         */
        function parse_WindTurbineType4bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType4IEC (context, sub);
            obj.cls = "WindTurbineType4bIEC";
            /**
             * Wind control P type 4B model associated with this wind turbine type 4B model.
             */
            obj["WindContPType4bIEC"] = base.parse_attribute (/<cim:WindTurbineType4bIEC.WindContPType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind generator type 4 model associated with this wind turbine type 4B model.
             */
            obj["WindGenType4IEC"] = base.parse_attribute (/<cim:WindTurbineType4bIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind mechanical model associated with this wind turbine Type 4B model.
             */
            obj["WindMechIEC"] = base.parse_attribute (/<cim:WindTurbineType4bIEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType4bIEC;
            if (null == bucket)
                context.parsed.WindTurbineType4bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 1 and 2 including their control models.
         * Generator model for wind turbine of IEC Type 1 or Type 2 is a standard asynchronous generator model.
         */
        function parse_WindTurbineType1or2IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2Dynamics (context, sub);
            obj.cls = "WindTurbineType1or2IEC";
            /**
             * Wind turbune protection model associated with this wind generator type 1 or 2 model.
             */
            obj["WindProtectionIEC"] = base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind mechanical model associated with this wind generator type 1 or 2 model.
             */
            obj["WindMechIEC"] = base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType1or2IEC;
            if (null == bucket)
                context.parsed.WindTurbineType1or2IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pitch angle control model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.2.
         */
        function parse_WindContPitchAngleIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPitchAngleIEC";
            /**
             * Maximum pitch positive ramp rate (d<i>theta</i><sub>max</sub>).
             * It is type dependent parameter. Unit = degrees/sec.
             */
            obj["dthetamax"] = base.to_float (base.parse_element (/<cim:WindContPitchAngleIEC.dthetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamax>/g, sub, context, true));
            /**
             * Maximum pitch negative ramp rate (d<i>theta</i><sub>min</sub>).
             * It is type dependent parameter. Unit = degrees/sec.
             */
            obj["dthetamin"] = base.to_float (base.parse_element (/<cim:WindContPitchAngleIEC.dthetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamin>/g, sub, context, true));
            /**
             * Power PI controller integration gain (<i>K</i><sub>Ic</sub>).
             * It is type dependent parameter.
             */
            obj["kic"] = base.parse_element (/<cim:WindContPitchAngleIEC.kic>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kic>/g, sub, context, true);
            /**
             * Speed PI controller integration gain (<i>K</i><sub>Iomega</sub>).
             * It is type dependent parameter.
             */
            obj["kiomega"] = base.parse_element (/<cim:WindContPitchAngleIEC.kiomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kiomega>/g, sub, context, true);
            /**
             * Power PI controller proportional gain (<i>K</i><sub>Pc</sub>).
             * It is type dependent parameter.
             */
            obj["kpc"] = base.parse_element (/<cim:WindContPitchAngleIEC.kpc>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpc>/g, sub, context, true);
            /**
             * Speed PI controller proportional gain (<i>K</i><sub>Pomega</sub>).
             * It is type dependent parameter.
             */
            obj["kpomega"] = base.parse_element (/<cim:WindContPitchAngleIEC.kpomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpomega>/g, sub, context, true);
            /**
             * Pitch cross coupling gain (K<sub>PX</sub>).
             * It is type dependent parameter.
             */
            obj["kpx"] = base.parse_element (/<cim:WindContPitchAngleIEC.kpx>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpx>/g, sub, context, true);
            /**
             * Maximum pitch angle (<i>theta</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["thetamax"] = base.parse_element (/<cim:WindContPitchAngleIEC.thetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamax>/g, sub, context, true);
            /**
             * Minimum pitch angle (<i>theta</i><sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["thetamin"] = base.parse_element (/<cim:WindContPitchAngleIEC.thetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamin>/g, sub, context, true);
            /**
             * Pitch time constant (t<i>theta</i>).
             * It is type dependent parameter.
             */
            obj["ttheta"] = base.parse_element (/<cim:WindContPitchAngleIEC.ttheta>([\s\S]*?)<\/cim:WindContPitchAngleIEC.ttheta>/g, sub, context, true);
            /**
             * Wind turbine type 3 model with which this pitch control model is associated.
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindContPitchAngleIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContPitchAngleIEC;
            if (null == bucket)
                context.parsed.WindContPitchAngleIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pitch control power model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.1.
         */
        function parse_WindPitchContPowerIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPitchContPowerIEC";
            /**
             * Rate limit for increasing power (d<i>p</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["dpmax"] = base.parse_element (/<cim:WindPitchContPowerIEC.dpmax>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmax>/g, sub, context, true);
            /**
             * Rate limit for decreasing power (d<i>p</i><sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["dpmin"] = base.parse_element (/<cim:WindPitchContPowerIEC.dpmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmin>/g, sub, context, true);
            /**
             * Minimum power setting (<i>p</i><sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["pmin"] = base.parse_element (/<cim:WindPitchContPowerIEC.pmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pmin>/g, sub, context, true);
            /**
             * If <i>p</i><sub>init </sub>&lt; <i>p</i><sub>set </sub>then power will ne ramped down to <i>p</i><sub>min</sub>.
             * It is (<i>p</i><sub>set</sub>) in the IEC 61400-27-1. It is type dependent parameter.
             */
            obj["pset"] = base.parse_element (/<cim:WindPitchContPowerIEC.pset>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pset>/g, sub, context, true);
            /**
             * Lag time constant (<i>T</i><sub>1</sub>).
             * It is type dependent parameter.
             */
            obj["t1"] = base.parse_element (/<cim:WindPitchContPowerIEC.t1>([\s\S]*?)<\/cim:WindPitchContPowerIEC.t1>/g, sub, context, true);
            /**
             * Voltage measurement time constant (<i>T</i><sub>r</sub>).
             * It is type dependent parameter.
             */
            obj["tr"] = base.parse_element (/<cim:WindPitchContPowerIEC.tr>([\s\S]*?)<\/cim:WindPitchContPowerIEC.tr>/g, sub, context, true);
            /**
             * Dip detection threshold (u<sub>UVRT</sub>).
             * It is type dependent parameter.
             */
            obj["uuvrt"] = base.parse_element (/<cim:WindPitchContPowerIEC.uuvrt>([\s\S]*?)<\/cim:WindPitchContPowerIEC.uuvrt>/g, sub, context, true);
            /**
             * Wind turbine type 1B model with which this Pitch control power model is associated.
             */
            obj["WindGenTurbineType1bIEC"] = base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType1bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbine type 2 model with which this Pitch control power model is associated.
             */
            obj["WindGenTurbineType2IEC"] = base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindPitchContPowerIEC;
            if (null == bucket)
                context.parsed.WindPitchContPowerIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 4 generator set model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.4.
         */
        function parse_WindGenType4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindGenType4IEC";
            /**
             * Maximum active current ramp rate (di<sub>pmax</sub>).
             * It is project dependent parameter.
             */
            obj["dipmax"] = base.parse_element (/<cim:WindGenType4IEC.dipmax>([\s\S]*?)<\/cim:WindGenType4IEC.dipmax>/g, sub, context, true);
            /**
             * Maximum reactive current ramp rate (di<sub>qmax</sub>).
             * It is project dependent parameter.
             */
            obj["diqmax"] = base.parse_element (/<cim:WindGenType4IEC.diqmax>([\s\S]*?)<\/cim:WindGenType4IEC.diqmax>/g, sub, context, true);
            /**
             * Minimum reactive current ramp rate (d<i>i</i><sub>qmin</sub>).
             * It is case dependent parameter.
             */
            obj["diqmin"] = base.parse_element (/<cim:WindGenType4IEC.diqmin>([\s\S]*?)<\/cim:WindGenType4IEC.diqmin>/g, sub, context, true);
            /**
             * Time constant (T<sub>g</sub>).
             * It is type dependent parameter.
             */
            obj["tg"] = base.parse_element (/<cim:WindGenType4IEC.tg>([\s\S]*?)<\/cim:WindGenType4IEC.tg>/g, sub, context, true);
            /**
             * Wind turbine type 4A model with which this wind generator type 4 model is associated.
             */
            obj["WindTurbineType4aIEC"] = base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbine type 4B model with which this wind generator type 4 model is associated.
             */
            obj["WindTurbineType4bIEC"] = base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenType4IEC;
            if (null == bucket)
                context.parsed.WindGenType4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 4 including their control models.
         */
        function parse_WindTurbineType4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4IEC (context, sub);
            obj.cls = "WindTurbineType4IEC";
            /**
             * Wind generator type 3A model associated with this wind turbine type 4 model.
             */
            obj["WindGenType3aIEC"] = base.parse_attribute (/<cim:WindTurbineType4IEC.WindGenType3aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType4IEC;
            if (null == bucket)
                context.parsed.WindTurbineType4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified plant voltage and reactive power control model for use with type 3 and type 4 wind turbine models.
         * Reference: IEC Standard 61400-27-1 Annex D.
         */
        function parse_WindPlantReactiveControlIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPlantReactiveControlIEC";
            /**
             * Maximum positive ramp rate for wind turbine reactive power/voltage reference (<i>dx</i><sub>refmax</sub>).
             * It is project dependent parameter.
             */
            obj["dxrefmax"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmax>/g, sub, context, true);
            /**
             * Maximum negative ramp rate for wind turbine reactive power/voltage reference (<i>dx</i><sub>refmin</sub>).
             * It is project dependent parameter.
             */
            obj["dxrefmin"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmin>/g, sub, context, true);
            /**
             * Plant Q controller integral gain (<i>K</i><sub>IWPx</sub>).
             * It is project dependent parameter.
             */
            obj["kiwpx"] = base.to_float (base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpx>/g, sub, context, true));
            /**
             * Maximum reactive Power/voltage reference from integration (<i>K</i><sub>IWPxmax</sub>).
             * It is project dependent parameter.
             */
            obj["kiwpxmax"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmax>/g, sub, context, true);
            /**
             * Minimum reactive Power/voltage reference from integration (<i>K</i><sub>IWPxmin</sub>).
             * It is project dependent parameter.
             */
            obj["kiwpxmin"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmin>/g, sub, context, true);
            /**
             * Plant Q controller proportional gain (<i>K</i><sub>PWPx</sub>).
             * It is project dependent parameter.
             */
            obj["kpwpx"] = base.to_float (base.parse_element (/<cim:WindPlantReactiveControlIEC.kpwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kpwpx>/g, sub, context, true));
            /**
             * Reactive power reference gain (<i>K</i><sub>WPqref</sub>).
             * It is project dependent parameter.
             */
            obj["kwpqref"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqref>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqref>/g, sub, context, true);
            /**
             * Plant voltage control droop (<i>K</i><sub>WPqu</sub>).
             * It is project dependent parameter.
             */
            obj["kwpqu"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqu>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqu>/g, sub, context, true);
            /**
             * Filter time constant for voltage dependent reactive power (<i>T</i><sub>uqfilt</sub>).
             * It is project dependent parameter.
             */
            obj["tuqfilt"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.tuqfilt>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.tuqfilt>/g, sub, context, true);
            /**
             * Filter time constant for active power measurement (<i>T</i><sub>WPpfiltq</sub>).
             * It is project dependent parameter.
             */
            obj["twppfiltq"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.twppfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twppfiltq>/g, sub, context, true);
            /**
             * Filter time constant for reactive power measurement (<i>T</i><sub>WPqfiltq</sub>).
             * It is project dependent parameter.
             */
            obj["twpqfiltq"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.twpqfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpqfiltq>/g, sub, context, true);
            /**
             * Filter time constant for voltage measurement (<i>T</i><sub>WPufiltq</sub>).
             * It is project dependent parameter.
             */
            obj["twpufiltq"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.twpufiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpufiltq>/g, sub, context, true);
            /**
             * Lead time constant in reference value transfer function (<i>T</i><sub>xft</sub>).
             * It is project dependent parameter.
             */
            obj["txft"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.txft>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txft>/g, sub, context, true);
            /**
             * Lag time constant in reference value transfer function (<i>T</i><sub>xfv</sub>).
             * It is project dependent parameter.
             */
            obj["txfv"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.txfv>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txfv>/g, sub, context, true);
            /**
             * Voltage threshold for UVRT detection in q control (<i>u</i><sub>WPqdip</sub>).
             * It is project dependent parameter.
             */
            obj["uwpqdip"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.uwpqdip>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.uwpqdip>/g, sub, context, true);
            /**
             * Reactive power/voltage controller mode (<i>M</i><sub>WPqmode</sub>).
             * It is case dependent parameter.
             */
            obj["windPlantQcontrolModesType"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>/g, sub, context, true);
            /**
             * Maximum <i>x</i><sub>WTref</sub> (<i>q</i><sub>WTref</sub> or delta <i>u</i><sub>WTref</sub>) request from the plant controller (<i>x</i><sub>refmax</sub>).
             * It is case dependent parameter.
             */
            obj["xrefmax"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmax>/g, sub, context, true);
            /**
             * Minimum <i>x</i><sub>WTref</sub> (<i>q</i><sub>WTref</sub> or delta<i>u</i><sub>WTref</sub>) request from the plant controller (<i>x</i><sub>refmin</sub>).
             * It is project dependent parameter.
             */
            obj["xrefmin"] = base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmin>/g, sub, context, true);
            /**
             * Wind plant reactive control model associated with this wind plant.
             */
            obj["WindPlantIEC"] = base.parse_attribute (/<cim:WindPlantReactiveControlIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindPlantReactiveControlIEC;
            if (null == bucket)
                context.parsed.WindPlantReactiveControlIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 3.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.4.
         */
        function parse_WindContPType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType3IEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["dpmax"] = base.parse_element (/<cim:WindContPType3IEC.dpmax>([\s\S]*?)<\/cim:WindContPType3IEC.dpmax>/g, sub, context, true);
            /**
             * Maximum ramp rate of wind turbine reference power (d<i>p</i><sub>refmax</sub>).
             * It is project dependent parameter.
             */
            obj["dprefmax"] = base.parse_element (/<cim:WindContPType3IEC.dprefmax>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmax>/g, sub, context, true);
            /**
             * Minimum ramp rate of wind turbine reference power (d<i>p</i><sub>refmin</sub>).
             * It is project dependent parameter.
             */
            obj["dprefmin"] = base.parse_element (/<cim:WindContPType3IEC.dprefmin>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmin>/g, sub, context, true);
            /**
             * Ramp limitation of torque, required in some grid codes (d<i>t</i><sub>max</sub>).
             * It is project dependent parameter.
             */
            obj["dthetamax"] = base.parse_element (/<cim:WindContPType3IEC.dthetamax>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamax>/g, sub, context, true);
            /**
             * Limitation of torque rise rate during UVRT (d<i>theta</i><sub>maxUVRT</sub>).
             * It is project dependent parameter.
             */
            obj["dthetamaxuvrt"] = base.parse_element (/<cim:WindContPType3IEC.dthetamaxuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamaxuvrt>/g, sub, context, true);
            /**
             * Gain for active drive train damping (<i>K</i><sub>DTD</sub>).
             * It is type dependent parameter.
             */
            obj["kdtd"] = base.parse_element (/<cim:WindContPType3IEC.kdtd>([\s\S]*?)<\/cim:WindContPType3IEC.kdtd>/g, sub, context, true);
            /**
             * PI controller integration parameter (<i>K</i><sub>Ip</sub>).
             * It is type dependent parameter.
             */
            obj["kip"] = base.parse_element (/<cim:WindContPType3IEC.kip>([\s\S]*?)<\/cim:WindContPType3IEC.kip>/g, sub, context, true);
            /**
             * PI controller proportional gain (<i>K</i><sub>Pp</sub>).
             * It is type dependent parameter.
             */
            obj["kpp"] = base.parse_element (/<cim:WindContPType3IEC.kpp>([\s\S]*?)<\/cim:WindContPType3IEC.kpp>/g, sub, context, true);
            /**
             * Enable UVRT power control mode (M<sub>pUVRT).</sub>
            true = 1: voltage control
            false = 0: reactive power control.
             * It is project dependent parameter.
             */
            obj["mpuvrt"] = base.to_boolean (base.parse_element (/<cim:WindContPType3IEC.mpuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.mpuvrt>/g, sub, context, true));
            /**
             * Offset to reference value that limits controller action during rotor speed changes (omega<sub>offset</sub>).
             * It is case dependent parameter.
             */
            obj["omegaoffset"] = base.parse_element (/<cim:WindContPType3IEC.omegaoffset>([\s\S]*?)<\/cim:WindContPType3IEC.omegaoffset>/g, sub, context, true);
            /**
             * Maximum active drive train damping power (<i>p</i><sub>DTDmax</sub>).
             * It is type dependent parameter.
             */
            obj["pdtdmax"] = base.parse_element (/<cim:WindContPType3IEC.pdtdmax>([\s\S]*?)<\/cim:WindContPType3IEC.pdtdmax>/g, sub, context, true);
            /**
             * Time<sub> </sub>delay after deep voltage sags (T<sub>DVS</sub>).
             * It is project dependent parameter.
             */
            obj["tdvs"] = base.parse_element (/<cim:WindContPType3IEC.tdvs>([\s\S]*?)<\/cim:WindContPType3IEC.tdvs>/g, sub, context, true);
            /**
             * Minimum electrical generator torque (<i>t</i><sub>emin</sub>).
             * It is type dependent parameter.
             */
            obj["thetaemin"] = base.parse_element (/<cim:WindContPType3IEC.thetaemin>([\s\S]*?)<\/cim:WindContPType3IEC.thetaemin>/g, sub, context, true);
            /**
             * Voltage scaling factor of reset-torque (<i>t</i><sub>uscale</sub>).
             * It is project dependent parameter.
             */
            obj["thetauscale"] = base.parse_element (/<cim:WindContPType3IEC.thetauscale>([\s\S]*?)<\/cim:WindContPType3IEC.thetauscale>/g, sub, context, true);
            /**
             * Filter time constant for generator speed measurement (<i>T</i><sub>omegafiltp3</sub>).
             * It is type dependent parameter.
             */
            obj["tomegafiltp3"] = base.parse_element (/<cim:WindContPType3IEC.tomegafiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tomegafiltp3>/g, sub, context, true);
            /**
             * Filter time constant for power measurement (<i>T</i><sub>pfiltp3</sub>).
             * It is type dependent parameter.
             */
            obj["tpfiltp3"] = base.parse_element (/<cim:WindContPType3IEC.tpfiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tpfiltp3>/g, sub, context, true);
            /**
             * Time constant in power order lag (<i>T</i><sub>pord</sub>).
             * It is type dependent parameter.
             */
            obj["tpord"] = base.parse_element (/<cim:WindContPType3IEC.tpord>([\s\S]*?)<\/cim:WindContPType3IEC.tpord>/g, sub, context, true);
            /**
             * Filter time constant for voltage measurement (<i>T</i><sub>ufiltp3</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltp3"] = base.parse_element (/<cim:WindContPType3IEC.tufiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tufiltp3>/g, sub, context, true);
            /**
             * Time constant in speed reference filter (<i>T</i><sub>omega,ref</sub>).
             * It is type dependent parameter.
             */
            obj["twref"] = base.parse_element (/<cim:WindContPType3IEC.twref>([\s\S]*?)<\/cim:WindContPType3IEC.twref>/g, sub, context, true);
            /**
             * Voltage limit for hold UVRT status after deep voltage sags (<i>u</i><i><sub>DVS</sub></i>).
             * It is project dependent parameter.
             */
            obj["udvs"] = base.parse_element (/<cim:WindContPType3IEC.udvs>([\s\S]*?)<\/cim:WindContPType3IEC.udvs>/g, sub, context, true);
            /**
             * Voltage dip threshold for P-control (<i>u</i><sub>Pdip</sub>).
             * Part of turbine control, often different (e.g 0.8) from converter thresholds. It is project dependent parameter.
             */
            obj["updip"] = base.parse_element (/<cim:WindContPType3IEC.updip>([\s\S]*?)<\/cim:WindContPType3IEC.updip>/g, sub, context, true);
            /**
             * Active drive train damping frequency (omega<sub>DTD</sub>).
             * It can be calculated from two mass model parameters. It is type dependent parameter.
             */
            obj["wdtd"] = base.parse_element (/<cim:WindContPType3IEC.wdtd>([\s\S]*?)<\/cim:WindContPType3IEC.wdtd>/g, sub, context, true);
            /**
             * Coefficient for active drive train damping (zeta).
             * It is type dependent parameter.
             */
            obj["zeta"] = base.to_float (base.parse_element (/<cim:WindContPType3IEC.zeta>([\s\S]*?)<\/cim:WindContPType3IEC.zeta>/g, sub, context, true));
            /**
             * Wind turbine type 3 model with which this Wind control P type 3 model is associated.
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindContPType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContPType3IEC;
            if (null == bucket)
                context.parsed.WindContPType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 3B generator set model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.3.
         */
        function parse_WindGenType3bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindGenType3IEC (context, sub);
            obj.cls = "WindGenType3bIEC";
            /**
             * Crowbar control mode (<i>M</i><sub>WTcwp</sub>). 
            <ul>
            	<li>true = 1 in the model</li>
            	<li>false = 0 in the model.</li>
            </ul>
             * The parameter is case dependent parameter.
             */
            obj["mwtcwp"] = base.to_boolean (base.parse_element (/<cim:WindGenType3bIEC.mwtcwp>([\s\S]*?)<\/cim:WindGenType3bIEC.mwtcwp>/g, sub, context, true));
            /**
             * Current generation Time constant (<i>T</i><sub>g</sub>).
             * It is type dependent parameter.
             */
            obj["tg"] = base.parse_element (/<cim:WindGenType3bIEC.tg>([\s\S]*?)<\/cim:WindGenType3bIEC.tg>/g, sub, context, true);
            /**
             * Time constant for crowbar washout filter (<i>T</i><sub>wo</sub>).
             * It is case dependent parameter.
             */
            obj["two"] = base.parse_element (/<cim:WindGenType3bIEC.two>([\s\S]*?)<\/cim:WindGenType3bIEC.two>/g, sub, context, true);
            bucket = context.parsed.WindGenType3bIEC;
            if (null == bucket)
                context.parsed.WindGenType3bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 including their control models.
         */
        function parse_WindTurbineType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4IEC (context, sub);
            obj.cls = "WindTurbineType3IEC";
            /**
             * Wind generator Type 3 model associated with this wind turbine type 3 model.
             */
            obj["WindGenType3IEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindGenType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind control pitch angle model associated with this wind turbine type 3.
             */
            obj["WindContPitchAngleIEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPitchAngleIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind control P type 3 model associated with this wind turbine type 3 model.
             */
            obj["WindContPType3IEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind aerodynamic model associated with this wind turbine type 3 model.
             */
            obj["WindAeroTwoDimIEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroTwoDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind mechanical model associated with this wind turbine Type 3 model.
             */
            obj["WindMechIEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind aerodynamic model associated with this wind generator type 3 model.
             */
            obj["WindAeroOneDimIEC"] = base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroOneDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType3IEC;
            if (null == bucket)
                context.parsed.WindTurbineType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General wind turbine Q control modes <i>M</i><sub>qG</sub>.
         */
        function parse_WindQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindQcontrolModeKind";
            /**
             * Voltage control (<i>M</i><i><sub>q</sub></i><sub>G</sub> equals 0).
             */
            obj["voltage"] = base.parse_element (/<cim:WindQcontrolModeKind.voltage>([\s\S]*?)<\/cim:WindQcontrolModeKind.voltage>/g, sub, context, true);
            /**
             * Reactive power control (<i>M</i><i><sub>q</sub></i><sub>G</sub> equals 1).
             */
            obj["reactivePower"] = base.parse_element (/<cim:WindQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.reactivePower>/g, sub, context, true);
            /**
             * Open loop reactive power control (only used with closed loop at plant level) (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 2).
             */
            obj["openLoopReactivePower"] = base.parse_element (/<cim:WindQcontrolModeKind.openLoopReactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLoopReactivePower>/g, sub, context, true);
            /**
             * Power factor control (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 3).
             */
            obj["powerFactor"] = base.parse_element (/<cim:WindQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.powerFactor>/g, sub, context, true);
            /**
             * Open loop power factor control (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 4).
             */
            obj["openLooppowerFactor"] = base.parse_element (/<cim:WindQcontrolModeKind.openLooppowerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLooppowerFactor>/g, sub, context, true);
            bucket = context.parsed.WindQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Q control model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.7.
         */
        function parse_WindContQIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQIEC";
            /**
             * Maximum reactive current injection during dip (i<sub>qh1</sub>).
             * It is type dependent parameter.
             */
            obj["iqh1"] = base.parse_element (/<cim:WindContQIEC.iqh1>([\s\S]*?)<\/cim:WindContQIEC.iqh1>/g, sub, context, true);
            /**
             * Maximum reactive current injection (i<sub>qmax</sub>).
             * It is type dependent parameter.
             */
            obj["iqmax"] = base.parse_element (/<cim:WindContQIEC.iqmax>([\s\S]*?)<\/cim:WindContQIEC.iqmax>/g, sub, context, true);
            /**
             * Minimum reactive current injection (i<sub>qmin</sub>).
             * It is type dependent parameter.
             */
            obj["iqmin"] = base.parse_element (/<cim:WindContQIEC.iqmin>([\s\S]*?)<\/cim:WindContQIEC.iqmin>/g, sub, context, true);
            /**
             * Post fault reactive current injection (<i>i</i><sub>qpost</sub>).
             * It is project dependent parameter.
             */
            obj["iqpost"] = base.parse_element (/<cim:WindContQIEC.iqpost>([\s\S]*?)<\/cim:WindContQIEC.iqpost>/g, sub, context, true);
            /**
             * Reactive power PI controller integration gain (<i>K</i><sub>I,q</sub>).
             * It is type dependent parameter.
             */
            obj["kiq"] = base.parse_element (/<cim:WindContQIEC.kiq>([\s\S]*?)<\/cim:WindContQIEC.kiq>/g, sub, context, true);
            /**
             * Voltage PI controller integration gain (<i>K</i><sub>I,u</sub>).
             * It is type dependent parameter.
             */
            obj["kiu"] = base.parse_element (/<cim:WindContQIEC.kiu>([\s\S]*?)<\/cim:WindContQIEC.kiu>/g, sub, context, true);
            /**
             * Reactive power PI controller proportional gain (<i>K</i><sub>P,q</sub>).
             * It is type dependent parameter.
             */
            obj["kpq"] = base.parse_element (/<cim:WindContQIEC.kpq>([\s\S]*?)<\/cim:WindContQIEC.kpq>/g, sub, context, true);
            /**
             * Voltage PI controller proportional gain (<i>K</i><sub>P,u</sub>).
             * It is type dependent parameter.
             */
            obj["kpu"] = base.parse_element (/<cim:WindContQIEC.kpu>([\s\S]*?)<\/cim:WindContQIEC.kpu>/g, sub, context, true);
            /**
             * Voltage scaling factor for UVRT current (<i>K</i><sub>qv</sub>).
             * It is project dependent parameter.
             */
            obj["kqv"] = base.parse_element (/<cim:WindContQIEC.kqv>([\s\S]*?)<\/cim:WindContQIEC.kqv>/g, sub, context, true);
            /**
             * Resistive component of voltage drop impedance (<i>r</i><sub>droop</sub>).
             * It is project dependent parameter.
             */
            obj["rdroop"] = base.parse_element (/<cim:WindContQIEC.rdroop>([\s\S]*?)<\/cim:WindContQIEC.rdroop>/g, sub, context, true);
            /**
             * Power measurement filter time constant (<i>T</i><sub>pfiltq</sub>).
             * It is type dependent parameter.
             */
            obj["tpfiltq"] = base.parse_element (/<cim:WindContQIEC.tpfiltq>([\s\S]*?)<\/cim:WindContQIEC.tpfiltq>/g, sub, context, true);
            /**
             * Length of time period where post fault reactive power is injected (<i>T</i><sub>post</sub>).
             * It is project dependent parameter.
             */
            obj["tpost"] = base.parse_element (/<cim:WindContQIEC.tpost>([\s\S]*?)<\/cim:WindContQIEC.tpost>/g, sub, context, true);
            /**
             * Time constant in reactive power order lag (<i>T</i><sub>qord</sub>).
             * It is type dependent parameter.
             */
            obj["tqord"] = base.parse_element (/<cim:WindContQIEC.tqord>([\s\S]*?)<\/cim:WindContQIEC.tqord>/g, sub, context, true);
            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltq</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltq"] = base.parse_element (/<cim:WindContQIEC.tufiltq>([\s\S]*?)<\/cim:WindContQIEC.tufiltq>/g, sub, context, true);
            /**
             * Voltage dead band lower limit (<i>u</i><sub>db1</sub>).
             * It is type dependent parameter.
             */
            obj["udb1"] = base.parse_element (/<cim:WindContQIEC.udb1>([\s\S]*?)<\/cim:WindContQIEC.udb1>/g, sub, context, true);
            /**
             * Voltage dead band upper limit (<i>u</i><sub>db2</sub>).
             * It is type dependent parameter.
             */
            obj["udb2"] = base.parse_element (/<cim:WindContQIEC.udb2>([\s\S]*?)<\/cim:WindContQIEC.udb2>/g, sub, context, true);
            /**
             * Maximum voltage in voltage PI controller integral term (u<sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["umax"] = base.parse_element (/<cim:WindContQIEC.umax>([\s\S]*?)<\/cim:WindContQIEC.umax>/g, sub, context, true);
            /**
             * Minimum voltage in voltage PI controller integral term (u<sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["umin"] = base.parse_element (/<cim:WindContQIEC.umin>([\s\S]*?)<\/cim:WindContQIEC.umin>/g, sub, context, true);
            /**
             * Voltage threshold for UVRT detection in q control (<i>u</i><sub>qdip</sub>).
             * It is type dependent parameter.
             */
            obj["uqdip"] = base.parse_element (/<cim:WindContQIEC.uqdip>([\s\S]*?)<\/cim:WindContQIEC.uqdip>/g, sub, context, true);
            /**
             * User defined bias in voltage reference (<i>u</i><sub>ref0</sub>), used when <i>M</i><sub>qG</sub> is set to voltage control.
             * It is case dependent parameter.
             */
            obj["uref0"] = base.parse_element (/<cim:WindContQIEC.uref0>([\s\S]*?)<\/cim:WindContQIEC.uref0>/g, sub, context, true);
            /**
             * Types of general wind turbine Q control modes (<i>M</i><sub>qG</sub>).
             * It is project dependent parameter.
             */
            obj["windQcontrolModesType"] = base.parse_element (/<cim:WindContQIEC.windQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windQcontrolModesType>/g, sub, context, true);
            /**
             * Types of UVRT Q control modes (<i>M</i><sub>qUVRT</sub>).
             * It is project dependent parameter.
             */
            obj["windUVRTQcontrolModesType"] = base.parse_element (/<cim:WindContQIEC.windUVRTQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windUVRTQcontrolModesType>/g, sub, context, true);
            /**
             * Inductive component of voltage drop impedance (<i>x</i><sub>droop</sub>).
             * It is project dependent parameter.
             */
            obj["xdroop"] = base.parse_element (/<cim:WindContQIEC.xdroop>([\s\S]*?)<\/cim:WindContQIEC.xdroop>/g, sub, context, true);
            /**
             * Wind turbine type 3 or 4 model with which this reactive control model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindContQIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContQIEC;
            if (null == bucket)
                context.parsed.WindContQIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified IEC type plant level model.
         * Reference: IEC 61400-27-1, Annex D.
         */
        function parse_WindPlantIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindPlantDynamics (context, sub);
            obj.cls = "WindPlantIEC";
            /**
             * Wind plant model with which this wind reactive control is associated.
             */
            obj["WindPlantReactiveControlIEC"] = base.parse_attribute (/<cim:WindPlantIEC.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind plant frequency and active power control model associated with this wind plant.
             */
            obj["WindPlantFreqPcontrolIEC"] = base.parse_attribute (/<cim:WindPlantIEC.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindPlantIEC;
            if (null == bucket)
                context.parsed.WindPlantIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 1B.
         * Reference: IEC Standard 61400-27-1, section 5.5.2.3.
         */
        function parse_WindGenTurbineType1bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType1bIEC";
            /**
             * Pitch control power model associated with this wind turbine type 1B model.
             */
            obj["WindPitchContPowerIEC"] = base.parse_attribute (/<cim:WindGenTurbineType1bIEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenTurbineType1bIEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType1bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The constant aerodynamic torque model assumes that the aerodynamic torque is constant.
         * Reference: IEC Standard 61400-27-1 Section 5.6.1.1.
         */
        function parse_WindAeroConstIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroConstIEC";
            /**
             * Wind turbine type 1A model with which this wind aerodynamic model is associated.
             */
            obj["WindGenTurbineType1aIEC"] = base.parse_attribute (/<cim:WindAeroConstIEC.WindGenTurbineType1aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindAeroConstIEC;
            if (null == bucket)
                context.parsed.WindAeroConstIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant including their control models.
         */
        function parse_WindTurbineType3or4Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindTurbineType3or4Dynamics";
            /**
             * Energy Source (current source) with which this wind Type 3 or 4 dynamics model is asoociated.
             */
            obj["EnergySource"] = base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The wind plant with which the wind turbines type 3 or 4 are associated.
             */
            obj["WindPlantDynamics"] = base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Remote input signal used by these wind turbine Type 3 or 4 models.
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType3or4Dynamics;
            if (null == bucket)
                context.parsed.WindTurbineType3or4Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * QP and QU limitation model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.10.
         */
        function parse_WindContQPQULimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQPQULimIEC";
            /**
             * Power measurement filter time constant for Q capacity (<i>T</i><sub>pfiltql</sub>).
             * It is type dependent parameter.
             */
            obj["tpfiltql"] = base.parse_element (/<cim:WindContQPQULimIEC.tpfiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tpfiltql>/g, sub, context, true);
            /**
             * Voltage measurement filter time constant for Q capacity (<i>T</i><sub>ufiltql</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltql"] = base.parse_element (/<cim:WindContQPQULimIEC.tufiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tufiltql>/g, sub, context, true);
            /**
             * Wind generator type 3 or 4 model with which this QP and QU limitation model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindContQPQULimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContQPQULimIEC;
            if (null == bucket)
                context.parsed.WindContQPQULimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reactive power/voltage controller mode.
         */
        function parse_WindPlantQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindPlantQcontrolModeKind";
            /**
             * Reactive power reference.
             */
            obj["reactivePower"] = base.parse_element (/<cim:WindPlantQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.reactivePower>/g, sub, context, true);
            /**
             * Power factor reference.
             */
            obj["powerFactor"] = base.parse_element (/<cim:WindPlantQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.powerFactor>/g, sub, context, true);
            /**
             * UQ static.
             */
            obj["uqStatic"] = base.parse_element (/<cim:WindPlantQcontrolModeKind.uqStatic>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.uqStatic>/g, sub, context, true);
            /**
             * Voltage control.
             */
            obj["voltageControl"] = base.parse_element (/<cim:WindPlantQcontrolModeKind.voltageControl>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.voltageControl>/g, sub, context, true);
            bucket = context.parsed.WindPlantQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindPlantQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 4A.
         * Reference: IEC Standard 61400-27-1, section 5.5.5.3.
         */
        function parse_WindTurbineType4aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType4IEC (context, sub);
            obj.cls = "WindTurbineType4aIEC";
            /**
             * Wind generator type 4 model associated with this wind turbine type 4A model.
             */
            obj["WindGenType4IEC"] = base.parse_attribute (/<cim:WindTurbineType4aIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind control P type 4A model associated with this wind turbine type 4A model.
             */
            obj["WindContPType4aIEC"] = base.parse_attribute (/<cim:WindTurbineType4aIEC.WindContPType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType4aIEC;
            if (null == bucket)
                context.parsed.WindTurbineType4aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Two mass model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.2.1.
         */
        function parse_WindMechIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindMechIEC";
            /**
             * Drive train damping (<i>c</i><i><sub>drt</sub></i><i>)</i>.
             * It is type dependent parameter.
             */
            obj["cdrt"] = base.parse_element (/<cim:WindMechIEC.cdrt>([\s\S]*?)<\/cim:WindMechIEC.cdrt>/g, sub, context, true);
            /**
             * Inertia constant of generator (<i>H</i><sub>gen</sub>).
             * It is type dependent parameter.
             */
            obj["hgen"] = base.parse_element (/<cim:WindMechIEC.hgen>([\s\S]*?)<\/cim:WindMechIEC.hgen>/g, sub, context, true);
            /**
             * Inertia constant of wind turbine rotor (<i>H</i><sub>WTR</sub>).
             * It is type dependent parameter.
             */
            obj["hwtr"] = base.parse_element (/<cim:WindMechIEC.hwtr>([\s\S]*?)<\/cim:WindMechIEC.hwtr>/g, sub, context, true);
            /**
             * Drive train stiffness (<i>k</i><i><sub>drt</sub></i>).
             * It is type dependent parameter.
             */
            obj["kdrt"] = base.parse_element (/<cim:WindMechIEC.kdrt>([\s\S]*?)<\/cim:WindMechIEC.kdrt>/g, sub, context, true);
            /**
             * Wind generator type 1 or 2 model with which this wind mechanical model is associated.
             */
            obj["WindTurbineType1or2IEC"] = base.parse_attribute (/<cim:WindMechIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbine Type 3 model with which this wind mechanical model is associated.
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindMechIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbine type 4B model with which this wind mechanical model is associated.
             */
            obj["WindTurbineType4bIEC"] = base.parse_attribute (/<cim:WindMechIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindMechIEC;
            if (null == bucket)
                context.parsed.WindMechIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function of the lookup table.
         */
        function parse_WindLookupTableFunctionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindLookupTableFunctionKind";
            /**
             * Power versus speed change (negative slip) lookup table (p<sub>rr</sub>(deltaomega)).
             * It is used for rotor resistance control model, IEC 61400-27-1, section 5.6.5.3.
             */
            obj["prr"] = base.parse_element (/<cim:WindLookupTableFunctionKind.prr>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.prr>/g, sub, context, true);
            /**
             * Power vs. speed lookup table (omega(p)).
             * It is used for P control model type 3, IEC 61400-27-1, section 5.6.5.4.
             */
            obj["omegap"] = base.parse_element (/<cim:WindLookupTableFunctionKind.omegap>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.omegap>/g, sub, context, true);
            /**
             * Lookup table for voltage dependency of active current limits (i<sub>pmax</sub>(u<sub>WT</sub>)).
             * It is used for current limitation model, IEC 61400-27-1, section 5.6.5.8.
             */
            obj["ipmax"] = base.parse_element (/<cim:WindLookupTableFunctionKind.ipmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.ipmax>/g, sub, context, true);
            /**
             * Lookup table for voltage dependency of reactive current limits (i<sub>qmax</sub>(u<sub>WT</sub>)).
             * It is used for current limitation model, IEC 61400-27-1, section 5.6.5.8.
             */
            obj["iqmax"] = base.parse_element (/<cim:WindLookupTableFunctionKind.iqmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.iqmax>/g, sub, context, true);
            /**
             * Power vs. frequency lookup table (p<sub>WPbias</sub>(f)).
             * It is used for wind power plant frequency and active power control model, IEC 61400-27-1, Annex D.
             */
            obj["pwp"] = base.parse_element (/<cim:WindLookupTableFunctionKind.pwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.pwp>/g, sub, context, true);
            /**
             * Crowbar duration versus voltage variation look-up table (T<sub>CW</sub>(du)).
             * It is case dependent parameter. It is used for type 3B generator set model, IEC 61400-27-1, section 5.6.3.3.
             */
            obj["tcwdu"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tcwdu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tcwdu>/g, sub, context, true);
            /**
             * Lookup table to determine the duration of the power reduction after a voltage dip, depending on the size of the voltage dip (T<sub>d</sub>(u<sub>WT</sub>)).
             * It is type dependent parameter. It is used for pitch control power model, IEC 61400-27-1, section 5.6.5.1.
             */
            obj["tduwt"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tduwt>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tduwt>/g, sub, context, true);
            /**
             * Lookup table for active power dependency of reactive power maximum limit (q<sub>maxp</sub>(p)).
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             */
            obj["qmaxp"] = base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxp>/g, sub, context, true);
            /**
             * Lookup table for active power dependency of reactive power minimum limit (q<sub>minp</sub>(p)).
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             */
            obj["qminp"] = base.parse_element (/<cim:WindLookupTableFunctionKind.qminp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminp>/g, sub, context, true);
            /**
             * Lookup table for voltage dependency of reactive power maximum limit (q<sub>maxu</sub>(p)).
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             */
            obj["qmaxu"] = base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxu>/g, sub, context, true);
            /**
             * Lookup table for voltage dependency of reactive power minimum limit (q<sub>minu</sub>(p)).
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             */
            obj["qminu"] = base.parse_element (/<cim:WindLookupTableFunctionKind.qminu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminu>/g, sub, context, true);
            /**
             * Disconnection time versus over voltage lookup table (T<sub>uover</sub>(u<sub>WT</sub>)).
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             */
            obj["tuover"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tuover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuover>/g, sub, context, true);
            /**
             * Disconnection time versus under voltage lookup table (T<sub>uunder</sub>(u<sub>WT</sub>)).
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             */
            obj["tuunder"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tuunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuunder>/g, sub, context, true);
            /**
             * Disconnection time versus over frequency lookup table (T<sub>fover</sub>(f<sub>WT</sub>)).
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             */
            obj["tfover"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tfover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfover>/g, sub, context, true);
            /**
             * Disconnection time versus under frequency lookup table (T<sub>funder</sub>(f<sub>WT</sub>)).
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             */
            obj["tfunder"] = base.parse_element (/<cim:WindLookupTableFunctionKind.tfunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfunder>/g, sub, context, true);
            /**
             * Look up table for the UQ static mode (q<sub>WP</sub>(u<sub>err</sub>)).
             * It is used for voltage and reactive power control model, IEC 61400-27-1, Annex D.
             */
            obj["qwp"] = base.parse_element (/<cim:WindLookupTableFunctionKind.qwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qwp>/g, sub, context, true);
            bucket = context.parsed.WindLookupTableFunctionKind;
            if (null == bucket)
                context.parsed.WindLookupTableFunctionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Two-dimensional aerodynamic model.
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.3.
         */
        function parse_WindAeroTwoDimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroTwoDimIEC";
            /**
             * Partial derivative of aerodynamic power with respect to changes in WTR speed (<i>dp</i><i><sub>omega</sub></i>).
             * It is type dependent parameter.
             */
            obj["dpomega"] = base.parse_element (/<cim:WindAeroTwoDimIEC.dpomega>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpomega>/g, sub, context, true);
            /**
             * Partial derivative of aerodynamic power with respect to changes in pitch angle (<i>dp</i><i><sub>theta</sub></i>).
             * It is type dependent parameter.
             */
            obj["dptheta"] = base.parse_element (/<cim:WindAeroTwoDimIEC.dptheta>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dptheta>/g, sub, context, true);
            /**
             * Partial derivative (<i>dp</i><sub>v1</sub>).
             * It is type dependent parameter.
             */
            obj["dpv1"] = base.parse_element (/<cim:WindAeroTwoDimIEC.dpv1>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpv1>/g, sub, context, true);
            /**
             * Rotor speed if the wind turbine is not derated (<i>omega</i><i><sub>0</sub></i>).
             * It is type dependent parameter.
             */
            obj["omegazero"] = base.parse_element (/<cim:WindAeroTwoDimIEC.omegazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.omegazero>/g, sub, context, true);
            /**
             * Available aerodynamic power (<i>p</i><sub>avail</sub>).
             * It is case dependent parameter.
             */
            obj["pavail"] = base.parse_element (/<cim:WindAeroTwoDimIEC.pavail>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.pavail>/g, sub, context, true);
            /**
             * Blade angle at twice rated wind speed (<i>theta</i><i><sub>v2</sub></i>).
             * It is type dependent parameter.
             */
            obj["thetav2"] = base.parse_element (/<cim:WindAeroTwoDimIEC.thetav2>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetav2>/g, sub, context, true);
            /**
             * Pitch angle if the wind turbine is not derated (<i>theta</i><i><sub>0</sub></i>).
             * It is case dependent parameter.
             */
            obj["thetazero"] = base.parse_element (/<cim:WindAeroTwoDimIEC.thetazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetazero>/g, sub, context, true);
            /**
             * Wind turbine type 3 model with which this wind aerodynamic model is associated.
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindAeroTwoDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindAeroTwoDimIEC;
            if (null == bucket)
                context.parsed.WindAeroTwoDimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Constant Q limitation model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.9.
         */
        function parse_WindContQLimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQLimIEC";
            /**
             * Maximum reactive power (<i>q</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["qmax"] = base.parse_element (/<cim:WindContQLimIEC.qmax>([\s\S]*?)<\/cim:WindContQLimIEC.qmax>/g, sub, context, true);
            /**
             * Minimum reactive power (<i>q</i><sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["qmin"] = base.parse_element (/<cim:WindContQLimIEC.qmin>([\s\S]*?)<\/cim:WindContQLimIEC.qmin>/g, sub, context, true);
            /**
             * Wind generator type 3 or 4 model with which this constant Q limitation model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindContQLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContQLimIEC;
            if (null == bucket)
                context.parsed.WindContQLimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 generator models of IEC type 3A and 3B.
         */
        function parse_WindGenType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindGenType3IEC";
            /**
             * Maximum active current ramp rate (di<sub>pmax</sub>).
             * It is project dependent parameter.
             */
            obj["dipmax"] = base.parse_element (/<cim:WindGenType3IEC.dipmax>([\s\S]*?)<\/cim:WindGenType3IEC.dipmax>/g, sub, context, true);
            /**
             * Maximum reactive current ramp rate (di<sub>qmax</sub>).
             * It is project dependent parameter.
             */
            obj["diqmax"] = base.parse_element (/<cim:WindGenType3IEC.diqmax>([\s\S]*?)<\/cim:WindGenType3IEC.diqmax>/g, sub, context, true);
            /**
             * Electromagnetic transient reactance (x<sub>S</sub>).
             * It is type dependent parameter.
             */
            obj["xs"] = base.parse_element (/<cim:WindGenType3IEC.xs>([\s\S]*?)<\/cim:WindGenType3IEC.xs>/g, sub, context, true);
            /**
             * Wind turbine type 3 model with which this wind generator type 3 is associated. 
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindGenType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenType3IEC;
            if (null == bucket)
                context.parsed.WindGenType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The grid protection model includes protection against over and under voltage, and against over and under frequency.
         * Reference: IEC Standard 614000-27-1 Section 5.6.6.
         */
        function parse_WindProtectionIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindProtectionIEC";
            /**
             * Maximum rate of change of frequency (<i>dF</i><i><sub>max</sub></i>).
             * It is type dependent parameter.
             */
            obj["dfimax"] = base.parse_element (/<cim:WindProtectionIEC.dfimax>([\s\S]*?)<\/cim:WindProtectionIEC.dfimax>/g, sub, context, true);
            /**
             * Wind turbine over frequency protection activation threshold (<i>f</i><i><sub>over</sub></i>).
             * It is project dependent parameter.
             */
            obj["fover"] = base.parse_element (/<cim:WindProtectionIEC.fover>([\s\S]*?)<\/cim:WindProtectionIEC.fover>/g, sub, context, true);
            /**
             * Wind turbine under frequency protection activation threshold (<i>f</i><i><sub>under</sub></i>).
             * It is project dependent parameter.
             */
            obj["funder"] = base.parse_element (/<cim:WindProtectionIEC.funder>([\s\S]*?)<\/cim:WindProtectionIEC.funder>/g, sub, context, true);
            /**
             * Zero crossing measurement mode (<i>Mzc</i>).
             * True = 1 if the WT protection system uses zero crossings to detect frequency � otherwise false = 0. It is type dependent parameter.
             */
            obj["mzc"] = base.to_boolean (base.parse_element (/<cim:WindProtectionIEC.mzc>([\s\S]*?)<\/cim:WindProtectionIEC.mzc>/g, sub, context, true));
            /**
             * Time interval of moving average window (<i>TfMA</i>).
             * It is type dependent parameter.
             */
            obj["tfma"] = base.parse_element (/<cim:WindProtectionIEC.tfma>([\s\S]*?)<\/cim:WindProtectionIEC.tfma>/g, sub, context, true);
            /**
             * Wind turbine over voltage protection activation threshold (<i>u</i><i><sub>over</sub></i>).
             * It is project dependent parameter.
             */
            obj["uover"] = base.parse_element (/<cim:WindProtectionIEC.uover>([\s\S]*?)<\/cim:WindProtectionIEC.uover>/g, sub, context, true);
            /**
             * Wind turbine under voltage protection activation threshold (<i>u</i><i><sub>under</sub></i>).
             * It is project dependent parameter.
             */
            obj["uunder"] = base.parse_element (/<cim:WindProtectionIEC.uunder>([\s\S]*?)<\/cim:WindProtectionIEC.uunder>/g, sub, context, true);
            /**
             * Wind generator type 1 or 2 model with which this wind turbine protection model is associated.
             */
            obj["WindTurbineType1or2IEC"] = base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind generator type 3 or 4 model with which this wind turbine protection model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindProtectionIEC;
            if (null == bucket)
                context.parsed.WindProtectionIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Rotor resistance control model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.3.
         */
        function parse_WindContRotorRIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContRotorRIEC";
            /**
             * Integral gain in rotor resistance PI controller (<i>K</i><sub>Irr</sub>).
             * It is type dependent parameter.
             */
            obj["kirr"] = base.parse_element (/<cim:WindContRotorRIEC.kirr>([\s\S]*?)<\/cim:WindContRotorRIEC.kirr>/g, sub, context, true);
            /**
             * Filter gain for generator speed measurement (K<sub>omegafilt</sub>).
             * It is type dependent parameter.
             */
            obj["komegafilt"] = base.to_float (base.parse_element (/<cim:WindContRotorRIEC.komegafilt>([\s\S]*?)<\/cim:WindContRotorRIEC.komegafilt>/g, sub, context, true));
            /**
             * Filter gain for power measurement (<i>K</i><sub>pfilt</sub>).
             * It is type dependent parameter.
             */
            obj["kpfilt"] = base.to_float (base.parse_element (/<cim:WindContRotorRIEC.kpfilt>([\s\S]*?)<\/cim:WindContRotorRIEC.kpfilt>/g, sub, context, true));
            /**
             * Proportional gain in rotor resistance PI controller (<i>K</i><sub>Prr</sub>).
             * It is type dependent parameter.
             */
            obj["kprr"] = base.parse_element (/<cim:WindContRotorRIEC.kprr>([\s\S]*?)<\/cim:WindContRotorRIEC.kprr>/g, sub, context, true);
            /**
             * Maximum rotor resistance (<i>r</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["rmax"] = base.parse_element (/<cim:WindContRotorRIEC.rmax>([\s\S]*?)<\/cim:WindContRotorRIEC.rmax>/g, sub, context, true);
            /**
             * Minimum rotor resistance (<i>r</i><sub>min</sub>).
             * It is type dependent parameter.
             */
            obj["rmin"] = base.parse_element (/<cim:WindContRotorRIEC.rmin>([\s\S]*?)<\/cim:WindContRotorRIEC.rmin>/g, sub, context, true);
            /**
             * Filter time constant for generator speed measurement (<i>T</i><sub>omegafiltrr</sub>).
             * It is type dependent parameter.
             */
            obj["tomegafiltrr"] = base.parse_element (/<cim:WindContRotorRIEC.tomegafiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tomegafiltrr>/g, sub, context, true);
            /**
             * Filter time constant for power measurement (<i>T</i><sub>pfiltrr</sub>).
             * It is type dependent parameter.
             */
            obj["tpfiltrr"] = base.parse_element (/<cim:WindContRotorRIEC.tpfiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tpfiltrr>/g, sub, context, true);
            /**
             * Wind turbine type 2 model with whitch this wind control rotor resistance model is associated.
             */
            obj["WindGenTurbineType2IEC"] = base.parse_attribute (/<cim:WindContRotorRIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContRotorRIEC;
            if (null == bucket)
                context.parsed.WindContRotorRIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 3A generator set model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.2.
         */
        function parse_WindGenType3aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindGenType3IEC (context, sub);
            obj.cls = "WindGenType3aIEC";
            /**
             * Current PI controller proportional gain (K<sub>Pc</sub>).
             * It is type dependent parameter.
             */
            obj["kpc"] = base.to_float (base.parse_element (/<cim:WindGenType3aIEC.kpc>([\s\S]*?)<\/cim:WindGenType3aIEC.kpc>/g, sub, context, true));
            /**
             * Current PI controller integration time constant (T<sub>Ic</sub>).
             * It is type dependent parameter.
             */
            obj["tic"] = base.parse_element (/<cim:WindGenType3aIEC.tic>([\s\S]*?)<\/cim:WindGenType3aIEC.tic>/g, sub, context, true);
            /**
             * Wind turbine type 4 model with which this wind generator type 3A model is associated.
             */
            obj["WindTurbineType4IEC"] = base.parse_attribute (/<cim:WindGenType3aIEC.WindTurbineType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenType3aIEC;
            if (null == bucket)
                context.parsed.WindGenType3aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 and 4 including their control models.
         */
        function parse_WindTurbineType3or4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4Dynamics (context, sub);
            obj.cls = "WindTurbineType3or4IEC";
            /**
             * Reference frame rotation model associated with this wind turbine type 3 or 4 model.
             */
            obj["WindRefFrameRotIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindRefFrameRotIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * QP and QU limitation model associated with this wind generator type 3 or 4 model.
             */
            obj["WindContQPQULimIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind control current limitation model associated with this wind turbine type 3 or 4 model.
             */
            obj["WindContCurrLimIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind control Q model associated with this wind turbine type 3 or 4 model.
             */
            obj["WIndContQIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WIndContQIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Constant Q limitation model associated with this wind generator type 3 or 4 model.
             */
            obj["WindContQLimIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Wind turbune protection model associated with this wind generator type 3 or 4 model.
             */
            obj["WindProtectionIEC"] = base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType3or4IEC;
            if (null == bucket)
                context.parsed.WindTurbineType3or4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 1A.
         * Reference: IEC Standard 61400-27-1, section 5.5.2.2.
         */
        function parse_WindGenTurbineType1aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType1aIEC";
            /**
             * Wind aerodynamic model associated with this wind turbine type 1A model.
             */
            obj["WindAeroConstIEC"] = base.parse_attribute (/<cim:WindGenTurbineType1aIEC.WindAeroConstIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenTurbineType1aIEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType1aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 4B.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.6.
         */
        function parse_WindContPType4bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType4bIEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>maxp4B</sub>).
             * It is project dependent parameter.
             */
            obj["dpmaxp4b"] = base.parse_element (/<cim:WindContPType4bIEC.dpmaxp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.dpmaxp4b>/g, sub, context, true);
            /**
             * Time constant in aerodynamic power response (<i>T</i><sub>paero</sub>).
             * It is type dependent parameter.
             */
            obj["tpaero"] = base.parse_element (/<cim:WindContPType4bIEC.tpaero>([\s\S]*?)<\/cim:WindContPType4bIEC.tpaero>/g, sub, context, true);
            /**
             * Time constant in power order lag (<i>T</i><sub>pordp4B</sub>).
             * It is type dependent parameter.
             */
            obj["tpordp4b"] = base.parse_element (/<cim:WindContPType4bIEC.tpordp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tpordp4b>/g, sub, context, true);
            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltp4B</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltp4b"] = base.parse_element (/<cim:WindContPType4bIEC.tufiltp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tufiltp4b>/g, sub, context, true);
            /**
             * Wind turbine type 4B model with which this wind control P type 4B model is associated.
             */
            obj["WindTurbineType4bIEC"] = base.parse_attribute (/<cim:WindContPType4bIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContPType4bIEC;
            if (null == bucket)
                context.parsed.WindContPType4bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reference frame rotation model.
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.5.
         */
        function parse_WindRefFrameRotIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindRefFrameRotIEC";
            /**
             * Time constant for PLL first order filter model (T<sub>PLL</sub>).
             * It is type dependent parameter.
             */
            obj["tpll"] = base.parse_element (/<cim:WindRefFrameRotIEC.tpll>([\s\S]*?)<\/cim:WindRefFrameRotIEC.tpll>/g, sub, context, true);
            /**
             * Voltage below which the angle of the voltage is filtered and possibly also frozen (u<sub>PLL1</sub>).
             * It is type dependent parameter.
             */
            obj["upll1"] = base.parse_element (/<cim:WindRefFrameRotIEC.upll1>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll1>/g, sub, context, true);
            /**
             * Voltage (u<sub>PLL2</sub>) below which the angle of the voltage is frozen if u<sub>PLL2 </sub>is smaller or equal to u<sub>PLL1</sub> .
             * It is type dependent parameter.
             */
            obj["upll2"] = base.parse_element (/<cim:WindRefFrameRotIEC.upll2>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll2>/g, sub, context, true);
            /**
             * Wind turbine type 3 or 4 model with which this reference frame rotation model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindRefFrameRotIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindRefFrameRotIEC;
            if (null == bucket)
                context.parsed.WindRefFrameRotIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class models a look up table for the purpose of wind standard models.
         */
        function parse_WindDynamicsLookupTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindDynamicsLookupTable";
            /**
             * Input value (x) for the lookup table function.
             */
            obj["input"] = base.to_float (base.parse_element (/<cim:WindDynamicsLookupTable.input>([\s\S]*?)<\/cim:WindDynamicsLookupTable.input>/g, sub, context, true));
            /**
             * Type of the lookup table function.
             */
            obj["lookupTableFunctionType"] = base.parse_element (/<cim:WindDynamicsLookupTable.lookupTableFunctionType>([\s\S]*?)<\/cim:WindDynamicsLookupTable.lookupTableFunctionType>/g, sub, context, true);
            /**
             * Output value (y) for the lookup table function.
             */
            obj["output"] = base.to_float (base.parse_element (/<cim:WindDynamicsLookupTable.output>([\s\S]*?)<\/cim:WindDynamicsLookupTable.output>/g, sub, context, true));
            /**
             * Sequence numbers of the pairs of the input (x) and the output (y) of the lookup table function.
             */
            obj["sequence"] = base.parse_element (/<cim:WindDynamicsLookupTable.sequence>([\s\S]*?)<\/cim:WindDynamicsLookupTable.sequence>/g, sub, context, true);
            /**
             * The pitch control power model with which this wind dynamics lookup table is associated.
             */
            obj["WindPitchContPowerIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The frequency and active power wind plant control model with which this wind dynamics lookup table is associated.
             */
            obj["WindPlantFreqPcontrolIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The QP and QU limitation model with which this wind dynamics lookup table is associated.
             */
            obj["WindContQPQULimIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The generator type 3B model with which this wind dynamics lookup table is associated.
             */
            obj["WindGenType3bIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindGenType3bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The P control type 3 model with which this wind dynamics lookup table is associated.
             */
            obj["WindContPType3IEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The voltage and reactive power wind plant control model with which this wind dynamics lookup table is associated.
             */
            obj["WindPlantReactiveControlIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The grid protection model with which this wind dynamics lookup table is associated.
             */
            obj["WindProtectionIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The current control limitation model with which this wind dynamics lookup table is associated.
             */
            obj["WindContCurrLimIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * The rotor resistance control model with which this wind dynamics lookup table is associated.
             */
            obj["WindContRotorRIEC"] = base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindDynamicsLookupTable;
            if (null == bucket)
                context.parsed.WindDynamicsLookupTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 1 and 2 and their control models.
         */
        function parse_WindTurbineType1or2Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindTurbineType1or2Dynamics";
            /**
             * Asynchronous machine model with which this wind generator type 1 or 2 model is associated.
             */
            obj["AsynchronousMachineDynamics"] = base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Remote input signal used by this wind generator Type 1 or Type 2 model.
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindTurbineType1or2Dynamics;
            if (null == bucket)
                context.parsed.WindTurbineType1or2Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Frequency and active power controller model.
         * Reference: IEC Standard 61400-27-1 Annex D.
         */
        function parse_WindPlantFreqPcontrolIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPlantFreqPcontrolIEC";
            /**
             * Maximum ramp rate of <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>dp</i><sub>refmax</sub>).
             * It is case dependent parameter.
             */
            obj["dprefmax"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmax>/g, sub, context, true);
            /**
             * Minimum (negative) ramp rate of <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>dp</i><sub>refmin</sub>).
             * It is project dependent parameter.
             */
            obj["dprefmin"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmin>/g, sub, context, true);
            /**
             * Maximum positive ramp rate for wind plant power reference (<i>dp</i><sub>WPrefmax</sub>).
             * It is project dependent parameter.
             */
            obj["dpwprefmax"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmax>/g, sub, context, true);
            /**
             * Maximum negative ramp rate for wind plant power reference (<i>dp</i><sub>WPrefmin</sub>).
             * It is project dependent parameter.
             */
            obj["dpwprefmin"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmin>/g, sub, context, true);
            /**
             * Plant P controller integral gain (<i>K</i><sub>IWPp</sub>).
             * It is project dependent parameter.
             */
            obj["kiwpp"] = base.to_float (base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwpp>/g, sub, context, true));
            /**
             * Maximum PI integrator term (<i>K</i><sub>IWPpmax</sub>).
             * It is project dependent parameter.
             */
            obj["kiwppmax"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmax>/g, sub, context, true);
            /**
             * Minimum PI integrator term (<i>K</i><sub>IWPpmin</sub>).
             * It is project dependent parameter.
             */
            obj["kiwppmin"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmin>/g, sub, context, true);
            /**
             * Plant P controller proportional gain (<i>K</i><sub>PWPp</sub>).
             * It is project dependent parameter.
             */
            obj["kpwpp"] = base.to_float (base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kpwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kpwpp>/g, sub, context, true));
            /**
             * Power reference gain (<i>K</i><sub>WPpref</sub>).
             * It is project dependent parameter.
             */
            obj["kwppref"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kwppref>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kwppref>/g, sub, context, true);
            /**
             * Maximum <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>p</i><sub>refmax</sub>).
             * It is project dependent parameter.
             */
            obj["prefmax"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmax>/g, sub, context, true);
            /**
             * Minimum <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>p</i><sub>refmin</sub>).
             * It is project dependent parameter.
             */
            obj["prefmin"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmin>/g, sub, context, true);
            /**
             * Lead time constant in reference value transfer function (<i>T</i><sub>pft</sub>).
             * It is project dependent parameter.
             */
            obj["tpft"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpft>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpft>/g, sub, context, true);
            /**
             * Lag time constant in reference value transfer function (<i>T</i><sub>pfv</sub>).
             * It is project dependent parameter.
             */
            obj["tpfv"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpfv>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpfv>/g, sub, context, true);
            /**
             * Filter time constant for frequency measurement (<i>T</i><sub>WPffiltp</sub>).
             * It is project dependent parameter.
             */
            obj["twpffiltp"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twpffiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twpffiltp>/g, sub, context, true);
            /**
             * Filter time constant for active power measurement (<i>T</i><sub>WPpfiltp</sub>).
             * It is project dependent parameter.
             */
            obj["twppfiltp"] = base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twppfiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twppfiltp>/g, sub, context, true);
            /**
             * Wind plant model with which this wind plant frequency and active power control is associated.
             */
            obj["WindPlantIEC"] = base.parse_attribute (/<cim:WindPlantFreqPcontrolIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindPlantFreqPcontrolIEC;
            if (null == bucket)
                context.parsed.WindPlantFreqPcontrolIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 4A.
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.5.
         */
        function parse_WindContPType4aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType4aIEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>maxp4A</sub>).
             * It is project dependent parameter.
             */
            obj["dpmaxp4a"] = base.parse_element (/<cim:WindContPType4aIEC.dpmaxp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.dpmaxp4a>/g, sub, context, true);
            /**
             * Time constant in power order lag (<i>T</i><sub>pordp4A</sub>).
             * It is type dependent parameter.
             */
            obj["tpordp4a"] = base.parse_element (/<cim:WindContPType4aIEC.tpordp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tpordp4a>/g, sub, context, true);
            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltp4A</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltp4a"] = base.parse_element (/<cim:WindContPType4aIEC.tufiltp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tufiltp4a>/g, sub, context, true);
            /**
             *  Wind turbine type 4A model with which this wind control P type 4A model is associated.
             */
            obj["WindTurbineType4aIEC"] = base.parse_attribute (/<cim:WindContPType4aIEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContPType4aIEC;
            if (null == bucket)
                context.parsed.WindContPType4aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * UVRT Q control modes <i>M</i><sub>qUVRT</sub>.
         */
        function parse_WindUVRTQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindUVRTQcontrolModeKind";
            /**
             * Voltage dependent reactive current injection (<i>M</i><i><sub>q</sub></i><sub>UVRT </sub>equals 0).
             */
            obj["mode0"] = base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode0>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode0>/g, sub, context, true);
            /**
             * Reactive current injection controlled as the pre-fault value plus an additional voltage dependent reactive current injection (<i>M</i><i><sub>q</sub></i><sub>UVRT</sub> equals 1).
             */
            obj["mode1"] = base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode1>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode1>/g, sub, context, true);
            /**
             * Reactive current injection controlled as the pre-fault value plus an additional voltage dependent reactive current injection during fault, and as the pre-fault value plus an additional constant reactive current injection post fault (<i>M</i><i><sub>q</sub></i><sub>UVRT </sub>equals 2).
             */
            obj["mode2"] = base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode2>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode2>/g, sub, context, true);
            bucket = context.parsed.WindUVRTQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindUVRTQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Current limitation model.
         * The current limitation model combines the physical limits and the control limits.
         */
        function parse_WindContCurrLimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContCurrLimIEC";
            /**
             * Maximum continuous current at the wind turbine terminals (<i>i</i><sub>max</sub>).
             * It is type dependent parameter.
             */
            obj["imax"] = base.parse_element (/<cim:WindContCurrLimIEC.imax>([\s\S]*?)<\/cim:WindContCurrLimIEC.imax>/g, sub, context, true);
            /**
             * Maximum current during voltage dip at the wind turbine terminals (<i>i</i><sub>maxdip</sub>).
             * It is project dependent parameter.
             */
            obj["imaxdip"] = base.parse_element (/<cim:WindContCurrLimIEC.imaxdip>([\s\S]*?)<\/cim:WindContCurrLimIEC.imaxdip>/g, sub, context, true);
            /**
             * Partial derivative of reactive current limit (<i>K</i><sub>pqu</sub>).
             * It is type dependent parameter.
             */
            obj["kpqu"] = base.parse_element (/<cim:WindContCurrLimIEC.kpqu>([\s\S]*?)<\/cim:WindContCurrLimIEC.kpqu>/g, sub, context, true);
            /**
             * Limitation of type 3 stator current  (<i>M</i><sub>DFSLim</sub>): 
            - false=0: total current limitation, 
            - true=1: stator current limitation).
             * It is type dependent parameter.
             */
            obj["mdfslim"] = base.to_boolean (base.parse_element (/<cim:WindContCurrLimIEC.mdfslim>([\s\S]*?)<\/cim:WindContCurrLimIEC.mdfslim>/g, sub, context, true));
            /**
             * Prioritisation of q control during UVRT (<i>M</i><sub>qpri</sub>):
            - true = 1: reactive power priority,
            - false = 0: active power priority.
             * It is project dependent parameter.
             */
            obj["mqpri"] = base.to_boolean (base.parse_element (/<cim:WindContCurrLimIEC.mqpri>([\s\S]*?)<\/cim:WindContCurrLimIEC.mqpri>/g, sub, context, true));
            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltcl</sub>).
             * It is type dependent parameter.
             */
            obj["tufiltcl"] = base.parse_element (/<cim:WindContCurrLimIEC.tufiltcl>([\s\S]*?)<\/cim:WindContCurrLimIEC.tufiltcl>/g, sub, context, true);
            /**
             * Wind turbine voltage in the operation point where zero reactive current can be delivered (<i>u</i><sub>pqumax</sub>).
             * It is type dependent parameter.
             */
            obj["upqumax"] = base.parse_element (/<cim:WindContCurrLimIEC.upqumax>([\s\S]*?)<\/cim:WindContCurrLimIEC.upqumax>/g, sub, context, true);
            /**
             * Wind turbine type 3 or 4 model with which this wind control current limitation model is associated.
             */
            obj["WindTurbineType3or4IEC"] = base.parse_attribute (/<cim:WindContCurrLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindContCurrLimIEC;
            if (null == bucket)
                context.parsed.WindContCurrLimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * One-dimensional aerodynamic model.
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.2.
         */
        function parse_WindAeroOneDimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroOneDimIEC";
            /**
             * Aerodynamic gain (<i>k</i><i><sub>a</sub></i>).
             * It is type dependent parameter.
             */
            obj["ka"] = base.to_float (base.parse_element (/<cim:WindAeroOneDimIEC.ka>([\s\S]*?)<\/cim:WindAeroOneDimIEC.ka>/g, sub, context, true));
            /**
             * Initial pitch angle (<i>theta</i><i><sub>omega0</sub></i>).
             * It is case dependent parameter.
             */
            obj["thetaomega"] = base.parse_element (/<cim:WindAeroOneDimIEC.thetaomega>([\s\S]*?)<\/cim:WindAeroOneDimIEC.thetaomega>/g, sub, context, true);
            /**
             * Wind turbine type 3 model with which this wind aerodynamic model is associated.
             */
            obj["WindTurbineType3IEC"] = base.parse_attribute (/<cim:WindAeroOneDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindAeroOneDimIEC;
            if (null == bucket)
                context.parsed.WindAeroOneDimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 2.
         * Reference: IEC Standard 61400-27-1, section 5.5.3.
         */
        function parse_WindGenTurbineType2IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType2IEC";
            /**
             * Wind control rotor resistance model associated with wind turbine type 2 model.
             */
            obj["WindContRotorRIEC"] = base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Pitch control power model associated with this wind turbine type 2 model.
             */
            obj["WindPitchContPowerIEC"] = base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindGenTurbineType2IEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType2IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant IEC and user defined wind plants including their control models.
         */
        function parse_WindPlantDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindPlantDynamics";
            /**
             * The remote signal with which this power plant is associated.
             */
            obj["RemoteInputSignal"] = base.parse_attribute (/<cim:WindPlantDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.WindPlantDynamics;
            if (null == bucket)
                context.parsed.WindPlantDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_WindTurbineType3or4Dynamics: parse_WindTurbineType3or4Dynamics,
                parse_WindContPitchAngleIEC: parse_WindContPitchAngleIEC,
                parse_WindGenType3aIEC: parse_WindGenType3aIEC,
                parse_WindContQLimIEC: parse_WindContQLimIEC,
                parse_WindAeroConstIEC: parse_WindAeroConstIEC,
                parse_WindPlantReactiveControlIEC: parse_WindPlantReactiveControlIEC,
                parse_WindPlantDynamics: parse_WindPlantDynamics,
                parse_WindGenType4IEC: parse_WindGenType4IEC,
                parse_WindTurbineType4aIEC: parse_WindTurbineType4aIEC,
                parse_WindTurbineType3or4IEC: parse_WindTurbineType3or4IEC,
                parse_WindGenTurbineType2IEC: parse_WindGenTurbineType2IEC,
                parse_WindGenTurbineType1aIEC: parse_WindGenTurbineType1aIEC,
                parse_WindRefFrameRotIEC: parse_WindRefFrameRotIEC,
                parse_WindGenTurbineType1bIEC: parse_WindGenTurbineType1bIEC,
                parse_WindProtectionIEC: parse_WindProtectionIEC,
                parse_WindTurbineType1or2Dynamics: parse_WindTurbineType1or2Dynamics,
                parse_WindContPType4bIEC: parse_WindContPType4bIEC,
                parse_WindTurbineType1or2IEC: parse_WindTurbineType1or2IEC,
                parse_WindPlantFreqPcontrolIEC: parse_WindPlantFreqPcontrolIEC,
                parse_WindContPType4aIEC: parse_WindContPType4aIEC,
                parse_WindPitchContPowerIEC: parse_WindPitchContPowerIEC,
                parse_WindAeroOneDimIEC: parse_WindAeroOneDimIEC,
                parse_WindAeroTwoDimIEC: parse_WindAeroTwoDimIEC,
                parse_WindTurbineType3IEC: parse_WindTurbineType3IEC,
                parse_WindContRotorRIEC: parse_WindContRotorRIEC,
                parse_WindTurbineType4IEC: parse_WindTurbineType4IEC,
                parse_WindPlantQcontrolModeKind: parse_WindPlantQcontrolModeKind,
                parse_WindMechIEC: parse_WindMechIEC,
                parse_WindTurbineType4bIEC: parse_WindTurbineType4bIEC,
                parse_WindContPType3IEC: parse_WindContPType3IEC,
                parse_WindContCurrLimIEC: parse_WindContCurrLimIEC,
                parse_WindDynamicsLookupTable: parse_WindDynamicsLookupTable,
                parse_WindGenType3bIEC: parse_WindGenType3bIEC,
                parse_WindPlantIEC: parse_WindPlantIEC,
                parse_WindGenType3IEC: parse_WindGenType3IEC,
                parse_WindContQIEC: parse_WindContQIEC,
                parse_WindLookupTableFunctionKind: parse_WindLookupTableFunctionKind,
                parse_WindUVRTQcontrolModeKind: parse_WindUVRTQcontrolModeKind,
                parse_WindContQPQULimIEC: parse_WindContQPQULimIEC,
                parse_WindQcontrolModeKind: parse_WindQcontrolModeKind
            }
        );
    }
);