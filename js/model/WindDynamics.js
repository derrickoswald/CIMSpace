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
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.2.
         *
         */
        function parse_WindTurbineType4bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType4IEC (context, sub);
            obj.cls = "WindTurbineType4bIEC";
            /**
             * Wind control P type 4B model associated with this wind turbine type 4B model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4bIEC.WindContPType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4bIEC", sub, context, true);

            /**
             * Wind generator type 4 model associated with this wind turbine type 4B model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4bIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context, true);

            /**
             * Wind mechanical model associated with this wind turbine Type 4B model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4bIEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType4bIEC;
            if (null == bucket)
                context.parsed.WindTurbineType4bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 1 and 2 including their control models.
         *
         * Generator model for wind turbine of IEC Type 1 or Type 2 is a standard asynchronous generator model.
         *
         */
        function parse_WindTurbineType1or2IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2Dynamics (context, sub);
            obj.cls = "WindTurbineType1or2IEC";
            /**
             * Wind turbune protection model associated with this wind generator type 1 or 2 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context, true);

            /**
             * Wind mechanical model associated with this wind generator type 1 or 2 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType1or2IEC;
            if (null == bucket)
                context.parsed.WindTurbineType1or2IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pitch angle control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.2.
         *
         */
        function parse_WindContPitchAngleIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPitchAngleIEC";
            /**
             * Maximum pitch positive ramp rate (d<i>theta</i><sub>max</sub>).
             *
             * It is type dependent parameter. Unit = degrees/sec.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.dthetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamax>/g, obj, "dthetamax", base.to_float, sub, context);

            /**
             * Maximum pitch negative ramp rate (d<i>theta</i><sub>min</sub>).
             *
             * It is type dependent parameter. Unit = degrees/sec.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.dthetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamin>/g, obj, "dthetamin", base.to_float, sub, context);

            /**
             * Power PI controller integration gain (<i>K</i><sub>Ic</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.kic>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kic>/g, obj, "kic", base.to_string, sub, context);

            /**
             * Speed PI controller integration gain (<i>K</i><sub>Iomega</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.kiomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kiomega>/g, obj, "kiomega", base.to_string, sub, context);

            /**
             * Power PI controller proportional gain (<i>K</i><sub>Pc</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.kpc>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpc>/g, obj, "kpc", base.to_string, sub, context);

            /**
             * Speed PI controller proportional gain (<i>K</i><sub>Pomega</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.kpomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpomega>/g, obj, "kpomega", base.to_string, sub, context);

            /**
             * Pitch cross coupling gain (K<sub>PX</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.kpx>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpx>/g, obj, "kpx", base.to_string, sub, context);

            /**
             * Maximum pitch angle (<i>theta</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.thetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamax>/g, obj, "thetamax", base.to_string, sub, context);

            /**
             * Minimum pitch angle (<i>theta</i><sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.thetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamin>/g, obj, "thetamin", base.to_string, sub, context);

            /**
             * Pitch time constant (t<i>theta</i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPitchAngleIEC.ttheta>([\s\S]*?)<\/cim:WindContPitchAngleIEC.ttheta>/g, obj, "ttheta", base.to_string, sub, context);

            /**
             * Wind turbine type 3 model with which this pitch control model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContPitchAngleIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            bucket = context.parsed.WindContPitchAngleIEC;
            if (null == bucket)
                context.parsed.WindContPitchAngleIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Pitch control power model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.1.
         *
         */
        function parse_WindPitchContPowerIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPitchContPowerIEC";
            /**
             * Rate limit for increasing power (d<i>p</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.dpmax>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);

            /**
             * Rate limit for decreasing power (d<i>p</i><sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.dpmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmin>/g, obj, "dpmin", base.to_string, sub, context);

            /**
             * Minimum power setting (<i>p</i><sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.pmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pmin>/g, obj, "pmin", base.to_string, sub, context);

            /**
             * If <i>p</i><sub>init </sub>&lt; <i>p</i><sub>set </sub>then power will ne ramped down to <i>p</i><sub>min</sub>.
             *
             * It is (<i>p</i><sub>set</sub>) in the IEC 61400-27-1. It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.pset>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pset>/g, obj, "pset", base.to_string, sub, context);

            /**
             * Lag time constant (<i>T</i><sub>1</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.t1>([\s\S]*?)<\/cim:WindPitchContPowerIEC.t1>/g, obj, "t1", base.to_string, sub, context);

            /**
             * Voltage measurement time constant (<i>T</i><sub>r</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.tr>([\s\S]*?)<\/cim:WindPitchContPowerIEC.tr>/g, obj, "tr", base.to_string, sub, context);

            /**
             * Dip detection threshold (u<sub>UVRT</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPitchContPowerIEC.uuvrt>([\s\S]*?)<\/cim:WindPitchContPowerIEC.uuvrt>/g, obj, "uuvrt", base.to_string, sub, context);

            /**
             * Wind turbine type 1B model with which this Pitch control power model is associated.
             *
             */
            base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType1bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1bIEC", sub, context, true);

            /**
             * Wind turbine type 2 model with which this Pitch control power model is associated.
             *
             */
            base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context, true);

            bucket = context.parsed.WindPitchContPowerIEC;
            if (null == bucket)
                context.parsed.WindPitchContPowerIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 4 generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.4.
         *
         */
        function parse_WindGenType4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindGenType4IEC";
            /**
             * Maximum active current ramp rate (di<sub>pmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType4IEC.dipmax>([\s\S]*?)<\/cim:WindGenType4IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);

            /**
             * Maximum reactive current ramp rate (di<sub>qmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType4IEC.diqmax>([\s\S]*?)<\/cim:WindGenType4IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);

            /**
             * Minimum reactive current ramp rate (d<i>i</i><sub>qmin</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType4IEC.diqmin>([\s\S]*?)<\/cim:WindGenType4IEC.diqmin>/g, obj, "diqmin", base.to_string, sub, context);

            /**
             * Time constant (T<sub>g</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType4IEC.tg>([\s\S]*?)<\/cim:WindGenType4IEC.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Wind turbine type 4A model with which this wind generator type 4 model is associated.
             *
             */
            base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context, true);

            /**
             * Wind turbine type 4B model with which this wind generator type 4 model is associated.
             *
             */
            base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context, true);

            bucket = context.parsed.WindGenType4IEC;
            if (null == bucket)
                context.parsed.WindGenType4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 4 including their control models.
         *
         */
        function parse_WindTurbineType4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4IEC (context, sub);
            obj.cls = "WindTurbineType4IEC";
            /**
             * Wind generator type 3A model associated with this wind turbine type 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4IEC.WindGenType3aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3aIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType4IEC;
            if (null == bucket)
                context.parsed.WindTurbineType4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified plant voltage and reactive power control model for use with type 3 and type 4 wind turbine models.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        function parse_WindPlantReactiveControlIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPlantReactiveControlIEC";
            /**
             * Maximum positive ramp rate for wind turbine reactive power/voltage reference (<i>dx</i><sub>refmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmax>/g, obj, "dxrefmax", base.to_string, sub, context);

            /**
             * Maximum negative ramp rate for wind turbine reactive power/voltage reference (<i>dx</i><sub>refmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmin>/g, obj, "dxrefmin", base.to_string, sub, context);

            /**
             * Plant Q controller integral gain (<i>K</i><sub>IWPx</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpx>/g, obj, "kiwpx", base.to_float, sub, context);

            /**
             * Maximum reactive Power/voltage reference from integration (<i>K</i><sub>IWPxmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmax>/g, obj, "kiwpxmax", base.to_string, sub, context);

            /**
             * Minimum reactive Power/voltage reference from integration (<i>K</i><sub>IWPxmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmin>/g, obj, "kiwpxmin", base.to_string, sub, context);

            /**
             * Plant Q controller proportional gain (<i>K</i><sub>PWPx</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kpwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kpwpx>/g, obj, "kpwpx", base.to_float, sub, context);

            /**
             * Reactive power reference gain (<i>K</i><sub>WPqref</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqref>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqref>/g, obj, "kwpqref", base.to_string, sub, context);

            /**
             * Plant voltage control droop (<i>K</i><sub>WPqu</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqu>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqu>/g, obj, "kwpqu", base.to_string, sub, context);

            /**
             * Filter time constant for voltage dependent reactive power (<i>T</i><sub>uqfilt</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.tuqfilt>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.tuqfilt>/g, obj, "tuqfilt", base.to_string, sub, context);

            /**
             * Filter time constant for active power measurement (<i>T</i><sub>WPpfiltq</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.twppfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twppfiltq>/g, obj, "twppfiltq", base.to_string, sub, context);

            /**
             * Filter time constant for reactive power measurement (<i>T</i><sub>WPqfiltq</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.twpqfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpqfiltq>/g, obj, "twpqfiltq", base.to_string, sub, context);

            /**
             * Filter time constant for voltage measurement (<i>T</i><sub>WPufiltq</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.twpufiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpufiltq>/g, obj, "twpufiltq", base.to_string, sub, context);

            /**
             * Lead time constant in reference value transfer function (<i>T</i><sub>xft</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.txft>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txft>/g, obj, "txft", base.to_string, sub, context);

            /**
             * Lag time constant in reference value transfer function (<i>T</i><sub>xfv</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.txfv>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txfv>/g, obj, "txfv", base.to_string, sub, context);

            /**
             * Voltage threshold for UVRT detection in q control (<i>u</i><sub>WPqdip</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.uwpqdip>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.uwpqdip>/g, obj, "uwpqdip", base.to_string, sub, context);

            /**
             * Reactive power/voltage controller mode (<i>M</i><sub>WPqmode</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>/g, obj, "windPlantQcontrolModesType", base.to_string, sub, context);

            /**
             * Maximum <i>x</i><sub>WTref</sub> (<i>q</i><sub>WTref</sub> or delta <i>u</i><sub>WTref</sub>) request from the plant controller (<i>x</i><sub>refmax</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmax>/g, obj, "xrefmax", base.to_string, sub, context);

            /**
             * Minimum <i>x</i><sub>WTref</sub> (<i>q</i><sub>WTref</sub> or delta<i>u</i><sub>WTref</sub>) request from the plant controller (<i>x</i><sub>refmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmin>/g, obj, "xrefmin", base.to_string, sub, context);

            /**
             * Wind plant reactive control model associated with this wind plant.
             *
             */
            base.parse_attribute (/<cim:WindPlantReactiveControlIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context, true);

            bucket = context.parsed.WindPlantReactiveControlIEC;
            if (null == bucket)
                context.parsed.WindPlantReactiveControlIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 3.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.4.
         *
         */
        function parse_WindContPType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType3IEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.dpmax>([\s\S]*?)<\/cim:WindContPType3IEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);

            /**
             * Maximum ramp rate of wind turbine reference power (d<i>p</i><sub>refmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.dprefmax>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);

            /**
             * Minimum ramp rate of wind turbine reference power (d<i>p</i><sub>refmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.dprefmin>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);

            /**
             * Ramp limitation of torque, required in some grid codes (d<i>t</i><sub>max</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.dthetamax>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamax>/g, obj, "dthetamax", base.to_string, sub, context);

            /**
             * Limitation of torque rise rate during UVRT (d<i>theta</i><sub>maxUVRT</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.dthetamaxuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamaxuvrt>/g, obj, "dthetamaxuvrt", base.to_string, sub, context);

            /**
             * Gain for active drive train damping (<i>K</i><sub>DTD</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.kdtd>([\s\S]*?)<\/cim:WindContPType3IEC.kdtd>/g, obj, "kdtd", base.to_string, sub, context);

            /**
             * PI controller integration parameter (<i>K</i><sub>Ip</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.kip>([\s\S]*?)<\/cim:WindContPType3IEC.kip>/g, obj, "kip", base.to_string, sub, context);

            /**
             * PI controller proportional gain (<i>K</i><sub>Pp</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.kpp>([\s\S]*?)<\/cim:WindContPType3IEC.kpp>/g, obj, "kpp", base.to_string, sub, context);

            /**
             * Enable UVRT power control mode (M<sub>pUVRT).</sub>
             * true = 1: voltage control
             * false = 0: reactive power control.
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.mpuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.mpuvrt>/g, obj, "mpuvrt", base.to_boolean, sub, context);

            /**
             * Offset to reference value that limits controller action during rotor speed changes (omega<sub>offset</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.omegaoffset>([\s\S]*?)<\/cim:WindContPType3IEC.omegaoffset>/g, obj, "omegaoffset", base.to_string, sub, context);

            /**
             * Maximum active drive train damping power (<i>p</i><sub>DTDmax</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.pdtdmax>([\s\S]*?)<\/cim:WindContPType3IEC.pdtdmax>/g, obj, "pdtdmax", base.to_string, sub, context);

            /**
             * Time<sub> </sub>delay after deep voltage sags (T<sub>DVS</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.tdvs>([\s\S]*?)<\/cim:WindContPType3IEC.tdvs>/g, obj, "tdvs", base.to_string, sub, context);

            /**
             * Minimum electrical generator torque (<i>t</i><sub>emin</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.thetaemin>([\s\S]*?)<\/cim:WindContPType3IEC.thetaemin>/g, obj, "thetaemin", base.to_string, sub, context);

            /**
             * Voltage scaling factor of reset-torque (<i>t</i><sub>uscale</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.thetauscale>([\s\S]*?)<\/cim:WindContPType3IEC.thetauscale>/g, obj, "thetauscale", base.to_string, sub, context);

            /**
             * Filter time constant for generator speed measurement (<i>T</i><sub>omegafiltp3</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.tomegafiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tomegafiltp3>/g, obj, "tomegafiltp3", base.to_string, sub, context);

            /**
             * Filter time constant for power measurement (<i>T</i><sub>pfiltp3</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.tpfiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tpfiltp3>/g, obj, "tpfiltp3", base.to_string, sub, context);

            /**
             * Time constant in power order lag (<i>T</i><sub>pord</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.tpord>([\s\S]*?)<\/cim:WindContPType3IEC.tpord>/g, obj, "tpord", base.to_string, sub, context);

            /**
             * Filter time constant for voltage measurement (<i>T</i><sub>ufiltp3</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.tufiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tufiltp3>/g, obj, "tufiltp3", base.to_string, sub, context);

            /**
             * Time constant in speed reference filter (<i>T</i><sub>omega,ref</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.twref>([\s\S]*?)<\/cim:WindContPType3IEC.twref>/g, obj, "twref", base.to_string, sub, context);

            /**
             * Voltage limit for hold UVRT status after deep voltage sags (<i>u</i><i><sub>DVS</sub></i>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.udvs>([\s\S]*?)<\/cim:WindContPType3IEC.udvs>/g, obj, "udvs", base.to_string, sub, context);

            /**
             * Voltage dip threshold for P-control (<i>u</i><sub>Pdip</sub>).
             *
             * Part of turbine control, often different (e.g 0.8) from converter thresholds. It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.updip>([\s\S]*?)<\/cim:WindContPType3IEC.updip>/g, obj, "updip", base.to_string, sub, context);

            /**
             * Active drive train damping frequency (omega<sub>DTD</sub>).
             *
             * It can be calculated from two mass model parameters. It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.wdtd>([\s\S]*?)<\/cim:WindContPType3IEC.wdtd>/g, obj, "wdtd", base.to_string, sub, context);

            /**
             * Coefficient for active drive train damping (zeta).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType3IEC.zeta>([\s\S]*?)<\/cim:WindContPType3IEC.zeta>/g, obj, "zeta", base.to_float, sub, context);

            /**
             * Wind turbine type 3 model with which this Wind control P type 3 model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContPType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            bucket = context.parsed.WindContPType3IEC;
            if (null == bucket)
                context.parsed.WindContPType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 3B generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.3.
         *
         */
        function parse_WindGenType3bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindGenType3IEC (context, sub);
            obj.cls = "WindGenType3bIEC";
            /**
             * Crowbar control mode (<i>M</i><sub>WTcwp</sub>).
             * <ul>
             * <li>true = 1 in the model</li>
             * <li>false = 0 in the model.</li>
             * </ul>
             *
             * The parameter is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3bIEC.mwtcwp>([\s\S]*?)<\/cim:WindGenType3bIEC.mwtcwp>/g, obj, "mwtcwp", base.to_boolean, sub, context);

            /**
             * Current generation Time constant (<i>T</i><sub>g</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3bIEC.tg>([\s\S]*?)<\/cim:WindGenType3bIEC.tg>/g, obj, "tg", base.to_string, sub, context);

            /**
             * Time constant for crowbar washout filter (<i>T</i><sub>wo</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3bIEC.two>([\s\S]*?)<\/cim:WindGenType3bIEC.two>/g, obj, "two", base.to_string, sub, context);

            bucket = context.parsed.WindGenType3bIEC;
            if (null == bucket)
                context.parsed.WindGenType3bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 including their control models.
         *
         */
        function parse_WindTurbineType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4IEC (context, sub);
            obj.cls = "WindTurbineType3IEC";
            /**
             * Wind generator Type 3 model associated with this wind turbine type 3 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindGenType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3IEC", sub, context, true);

            /**
             * Wind control pitch angle model associated with this wind turbine type 3.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPitchAngleIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPitchAngleIEC", sub, context, true);

            /**
             * Wind control P type 3 model associated with this wind turbine type 3 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context, true);

            /**
             * Wind aerodynamic model associated with this wind turbine type 3 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroTwoDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroTwoDimIEC", sub, context, true);

            /**
             * Wind mechanical model associated with this wind turbine Type 3 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context, true);

            /**
             * Wind aerodynamic model associated with this wind generator type 3 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroOneDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroOneDimIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType3IEC;
            if (null == bucket)
                context.parsed.WindTurbineType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General wind turbine Q control modes <i>M</i><sub>qG</sub>.
         *
         */
        function parse_WindQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindQcontrolModeKind";
            /**
             * Voltage control (<i>M</i><i><sub>q</sub></i><sub>G</sub> equals 0).
             *
             */
            base.parse_element (/<cim:WindQcontrolModeKind.voltage>([\s\S]*?)<\/cim:WindQcontrolModeKind.voltage>/g, obj, "voltage", base.to_string, sub, context);

            /**
             * Reactive power control (<i>M</i><i><sub>q</sub></i><sub>G</sub> equals 1).
             *
             */
            base.parse_element (/<cim:WindQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

            /**
             * Open loop reactive power control (only used with closed loop at plant level) (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 2).
             *
             */
            base.parse_element (/<cim:WindQcontrolModeKind.openLoopReactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLoopReactivePower>/g, obj, "openLoopReactivePower", base.to_string, sub, context);

            /**
             * Power factor control (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 3).
             *
             */
            base.parse_element (/<cim:WindQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);

            /**
             * Open loop power factor control (<i>M</i><i><sub>q</sub></i><sub>G </sub>equals 4).
             *
             */
            base.parse_element (/<cim:WindQcontrolModeKind.openLooppowerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLooppowerFactor>/g, obj, "openLooppowerFactor", base.to_string, sub, context);

            bucket = context.parsed.WindQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Q control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.7.
         *
         */
        function parse_WindContQIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQIEC";
            /**
             * Maximum reactive current injection during dip (i<sub>qh1</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.iqh1>([\s\S]*?)<\/cim:WindContQIEC.iqh1>/g, obj, "iqh1", base.to_string, sub, context);

            /**
             * Maximum reactive current injection (i<sub>qmax</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.iqmax>([\s\S]*?)<\/cim:WindContQIEC.iqmax>/g, obj, "iqmax", base.to_string, sub, context);

            /**
             * Minimum reactive current injection (i<sub>qmin</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.iqmin>([\s\S]*?)<\/cim:WindContQIEC.iqmin>/g, obj, "iqmin", base.to_string, sub, context);

            /**
             * Post fault reactive current injection (<i>i</i><sub>qpost</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.iqpost>([\s\S]*?)<\/cim:WindContQIEC.iqpost>/g, obj, "iqpost", base.to_string, sub, context);

            /**
             * Reactive power PI controller integration gain (<i>K</i><sub>I,q</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.kiq>([\s\S]*?)<\/cim:WindContQIEC.kiq>/g, obj, "kiq", base.to_string, sub, context);

            /**
             * Voltage PI controller integration gain (<i>K</i><sub>I,u</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.kiu>([\s\S]*?)<\/cim:WindContQIEC.kiu>/g, obj, "kiu", base.to_string, sub, context);

            /**
             * Reactive power PI controller proportional gain (<i>K</i><sub>P,q</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.kpq>([\s\S]*?)<\/cim:WindContQIEC.kpq>/g, obj, "kpq", base.to_string, sub, context);

            /**
             * Voltage PI controller proportional gain (<i>K</i><sub>P,u</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.kpu>([\s\S]*?)<\/cim:WindContQIEC.kpu>/g, obj, "kpu", base.to_string, sub, context);

            /**
             * Voltage scaling factor for UVRT current (<i>K</i><sub>qv</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.kqv>([\s\S]*?)<\/cim:WindContQIEC.kqv>/g, obj, "kqv", base.to_string, sub, context);

            /**
             * Resistive component of voltage drop impedance (<i>r</i><sub>droop</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.rdroop>([\s\S]*?)<\/cim:WindContQIEC.rdroop>/g, obj, "rdroop", base.to_string, sub, context);

            /**
             * Power measurement filter time constant (<i>T</i><sub>pfiltq</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.tpfiltq>([\s\S]*?)<\/cim:WindContQIEC.tpfiltq>/g, obj, "tpfiltq", base.to_string, sub, context);

            /**
             * Length of time period where post fault reactive power is injected (<i>T</i><sub>post</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.tpost>([\s\S]*?)<\/cim:WindContQIEC.tpost>/g, obj, "tpost", base.to_string, sub, context);

            /**
             * Time constant in reactive power order lag (<i>T</i><sub>qord</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.tqord>([\s\S]*?)<\/cim:WindContQIEC.tqord>/g, obj, "tqord", base.to_string, sub, context);

            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltq</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.tufiltq>([\s\S]*?)<\/cim:WindContQIEC.tufiltq>/g, obj, "tufiltq", base.to_string, sub, context);

            /**
             * Voltage dead band lower limit (<i>u</i><sub>db1</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.udb1>([\s\S]*?)<\/cim:WindContQIEC.udb1>/g, obj, "udb1", base.to_string, sub, context);

            /**
             * Voltage dead band upper limit (<i>u</i><sub>db2</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.udb2>([\s\S]*?)<\/cim:WindContQIEC.udb2>/g, obj, "udb2", base.to_string, sub, context);

            /**
             * Maximum voltage in voltage PI controller integral term (u<sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.umax>([\s\S]*?)<\/cim:WindContQIEC.umax>/g, obj, "umax", base.to_string, sub, context);

            /**
             * Minimum voltage in voltage PI controller integral term (u<sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.umin>([\s\S]*?)<\/cim:WindContQIEC.umin>/g, obj, "umin", base.to_string, sub, context);

            /**
             * Voltage threshold for UVRT detection in q control (<i>u</i><sub>qdip</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.uqdip>([\s\S]*?)<\/cim:WindContQIEC.uqdip>/g, obj, "uqdip", base.to_string, sub, context);

            /**
             * User defined bias in voltage reference (<i>u</i><sub>ref0</sub>), used when <i>M</i><sub>qG</sub> is set to voltage control.
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.uref0>([\s\S]*?)<\/cim:WindContQIEC.uref0>/g, obj, "uref0", base.to_string, sub, context);

            /**
             * Types of general wind turbine Q control modes (<i>M</i><sub>qG</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.windQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windQcontrolModesType>/g, obj, "windQcontrolModesType", base.to_string, sub, context);

            /**
             * Types of UVRT Q control modes (<i>M</i><sub>qUVRT</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.windUVRTQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windUVRTQcontrolModesType>/g, obj, "windUVRTQcontrolModesType", base.to_string, sub, context);

            /**
             * Inductive component of voltage drop impedance (<i>x</i><sub>droop</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQIEC.xdroop>([\s\S]*?)<\/cim:WindContQIEC.xdroop>/g, obj, "xdroop", base.to_string, sub, context);

            /**
             * Wind turbine type 3 or 4 model with which this reactive control model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContQIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindContQIEC;
            if (null == bucket)
                context.parsed.WindContQIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified IEC type plant level model.
         *
         * Reference: IEC 61400-27-1, Annex D.
         *
         */
        function parse_WindPlantIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindPlantDynamics (context, sub);
            obj.cls = "WindPlantIEC";
            /**
             * Wind plant model with which this wind reactive control is associated.
             *
             */
            base.parse_attribute (/<cim:WindPlantIEC.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context, true);

            /**
             * Wind plant frequency and active power control model associated with this wind plant.
             *
             */
            base.parse_attribute (/<cim:WindPlantIEC.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context, true);

            bucket = context.parsed.WindPlantIEC;
            if (null == bucket)
                context.parsed.WindPlantIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 1B.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.3.
         *
         */
        function parse_WindGenTurbineType1bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType1bIEC";
            /**
             * Pitch control power model associated with this wind turbine type 1B model.
             *
             */
            base.parse_attribute (/<cim:WindGenTurbineType1bIEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context, true);

            bucket = context.parsed.WindGenTurbineType1bIEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType1bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The constant aerodynamic torque model assumes that the aerodynamic torque is constant.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.1.1.
         *
         */
        function parse_WindAeroConstIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroConstIEC";
            /**
             * Wind turbine type 1A model with which this wind aerodynamic model is associated.
             *
             */
            base.parse_attribute (/<cim:WindAeroConstIEC.WindGenTurbineType1aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1aIEC", sub, context, true);

            bucket = context.parsed.WindAeroConstIEC;
            if (null == bucket)
                context.parsed.WindAeroConstIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant including their control models.
         *
         */
        function parse_WindTurbineType3or4Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindTurbineType3or4Dynamics";
            /**
             * Energy Source (current source) with which this wind Type 3 or 4 dynamics model is asoociated.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context, true);

            /**
             * The wind plant with which the wind turbines type 3 or 4 are associated.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context, true);

            /**
             * Remote input signal used by these wind turbine Type 3 or 4 models.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

            bucket = context.parsed.WindTurbineType3or4Dynamics;
            if (null == bucket)
                context.parsed.WindTurbineType3or4Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * QP and QU limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.10.
         *
         */
        function parse_WindContQPQULimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQPQULimIEC";
            /**
             * Power measurement filter time constant for Q capacity (<i>T</i><sub>pfiltql</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQPQULimIEC.tpfiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tpfiltql>/g, obj, "tpfiltql", base.to_string, sub, context);

            /**
             * Voltage measurement filter time constant for Q capacity (<i>T</i><sub>ufiltql</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQPQULimIEC.tufiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tufiltql>/g, obj, "tufiltql", base.to_string, sub, context);

            /**
             * Wind generator type 3 or 4 model with which this QP and QU limitation model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContQPQULimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindContQPQULimIEC;
            if (null == bucket)
                context.parsed.WindContQPQULimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reactive power/voltage controller mode.
         *
         */
        function parse_WindPlantQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindPlantQcontrolModeKind";
            /**
             * Reactive power reference.
             *
             */
            base.parse_element (/<cim:WindPlantQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);

            /**
             * Power factor reference.
             *
             */
            base.parse_element (/<cim:WindPlantQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);

            /**
             * UQ static.
             *
             */
            base.parse_element (/<cim:WindPlantQcontrolModeKind.uqStatic>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.uqStatic>/g, obj, "uqStatic", base.to_string, sub, context);

            /**
             * Voltage control.
             *
             */
            base.parse_element (/<cim:WindPlantQcontrolModeKind.voltageControl>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.voltageControl>/g, obj, "voltageControl", base.to_string, sub, context);

            bucket = context.parsed.WindPlantQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindPlantQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.3.
         *
         */
        function parse_WindTurbineType4aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType4IEC (context, sub);
            obj.cls = "WindTurbineType4aIEC";
            /**
             * Wind generator type 4 model associated with this wind turbine type 4A model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4aIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context, true);

            /**
             * Wind control P type 4A model associated with this wind turbine type 4A model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType4aIEC.WindContPType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4aIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType4aIEC;
            if (null == bucket)
                context.parsed.WindTurbineType4aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Two mass model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.2.1.
         *
         */
        function parse_WindMechIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindMechIEC";
            /**
             * Drive train damping (<i>c</i><i><sub>drt</sub></i><i>)</i>.
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindMechIEC.cdrt>([\s\S]*?)<\/cim:WindMechIEC.cdrt>/g, obj, "cdrt", base.to_string, sub, context);

            /**
             * Inertia constant of generator (<i>H</i><sub>gen</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindMechIEC.hgen>([\s\S]*?)<\/cim:WindMechIEC.hgen>/g, obj, "hgen", base.to_string, sub, context);

            /**
             * Inertia constant of wind turbine rotor (<i>H</i><sub>WTR</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindMechIEC.hwtr>([\s\S]*?)<\/cim:WindMechIEC.hwtr>/g, obj, "hwtr", base.to_string, sub, context);

            /**
             * Drive train stiffness (<i>k</i><i><sub>drt</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindMechIEC.kdrt>([\s\S]*?)<\/cim:WindMechIEC.kdrt>/g, obj, "kdrt", base.to_string, sub, context);

            /**
             * Wind generator type 1 or 2 model with which this wind mechanical model is associated.
             *
             */
            base.parse_attribute (/<cim:WindMechIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context, true);

            /**
             * Wind turbine Type 3 model with which this wind mechanical model is associated.
             *
             */
            base.parse_attribute (/<cim:WindMechIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            /**
             * Wind turbine type 4B model with which this wind mechanical model is associated.
             *
             */
            base.parse_attribute (/<cim:WindMechIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context, true);

            bucket = context.parsed.WindMechIEC;
            if (null == bucket)
                context.parsed.WindMechIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Function of the lookup table.
         *
         */
        function parse_WindLookupTableFunctionKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindLookupTableFunctionKind";
            /**
             * Power versus speed change (negative slip) lookup table (p<sub>rr</sub>(deltaomega)).
             *
             * It is used for rotor resistance control model, IEC 61400-27-1, section 5.6.5.3.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.prr>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.prr>/g, obj, "prr", base.to_string, sub, context);

            /**
             * Power vs. speed lookup table (omega(p)).
             *
             * It is used for P control model type 3, IEC 61400-27-1, section 5.6.5.4.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.omegap>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.omegap>/g, obj, "omegap", base.to_string, sub, context);

            /**
             * Lookup table for voltage dependency of active current limits (i<sub>pmax</sub>(u<sub>WT</sub>)).
             *
             * It is used for current limitation model, IEC 61400-27-1, section 5.6.5.8.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.ipmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.ipmax>/g, obj, "ipmax", base.to_string, sub, context);

            /**
             * Lookup table for voltage dependency of reactive current limits (i<sub>qmax</sub>(u<sub>WT</sub>)).
             *
             * It is used for current limitation model, IEC 61400-27-1, section 5.6.5.8.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.iqmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.iqmax>/g, obj, "iqmax", base.to_string, sub, context);

            /**
             * Power vs. frequency lookup table (p<sub>WPbias</sub>(f)).
             *
             * It is used for wind power plant frequency and active power control model, IEC 61400-27-1, Annex D.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.pwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.pwp>/g, obj, "pwp", base.to_string, sub, context);

            /**
             * Crowbar duration versus voltage variation look-up table (T<sub>CW</sub>(du)).
             *
             * It is case dependent parameter. It is used for type 3B generator set model, IEC 61400-27-1, section 5.6.3.3.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tcwdu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tcwdu>/g, obj, "tcwdu", base.to_string, sub, context);

            /**
             * Lookup table to determine the duration of the power reduction after a voltage dip, depending on the size of the voltage dip (T<sub>d</sub>(u<sub>WT</sub>)).
             *
             * It is type dependent parameter. It is used for pitch control power model, IEC 61400-27-1, section 5.6.5.1.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tduwt>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tduwt>/g, obj, "tduwt", base.to_string, sub, context);

            /**
             * Lookup table for active power dependency of reactive power maximum limit (q<sub>maxp</sub>(p)).
             *
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxp>/g, obj, "qmaxp", base.to_string, sub, context);

            /**
             * Lookup table for active power dependency of reactive power minimum limit (q<sub>minp</sub>(p)).
             *
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.qminp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminp>/g, obj, "qminp", base.to_string, sub, context);

            /**
             * Lookup table for voltage dependency of reactive power maximum limit (q<sub>maxu</sub>(p)).
             *
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxu>/g, obj, "qmaxu", base.to_string, sub, context);

            /**
             * Lookup table for voltage dependency of reactive power minimum limit (q<sub>minu</sub>(p)).
             *
             * It is used for QP and QU limitation model, IEC 61400-27-1, section 5.6.5.10.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.qminu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminu>/g, obj, "qminu", base.to_string, sub, context);

            /**
             * Disconnection time versus over voltage lookup table (T<sub>uover</sub>(u<sub>WT</sub>)).
             *
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tuover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuover>/g, obj, "tuover", base.to_string, sub, context);

            /**
             * Disconnection time versus under voltage lookup table (T<sub>uunder</sub>(u<sub>WT</sub>)).
             *
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tuunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuunder>/g, obj, "tuunder", base.to_string, sub, context);

            /**
             * Disconnection time versus over frequency lookup table (T<sub>fover</sub>(f<sub>WT</sub>)).
             *
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tfover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfover>/g, obj, "tfover", base.to_string, sub, context);

            /**
             * Disconnection time versus under frequency lookup table (T<sub>funder</sub>(f<sub>WT</sub>)).
             *
             * It is used for grid protection model, IEC 61400-27-1, section 5.6.6.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.tfunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfunder>/g, obj, "tfunder", base.to_string, sub, context);

            /**
             * Look up table for the UQ static mode (q<sub>WP</sub>(u<sub>err</sub>)).
             *
             * It is used for voltage and reactive power control model, IEC 61400-27-1, Annex D.
             *
             */
            base.parse_element (/<cim:WindLookupTableFunctionKind.qwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qwp>/g, obj, "qwp", base.to_string, sub, context);

            bucket = context.parsed.WindLookupTableFunctionKind;
            if (null == bucket)
                context.parsed.WindLookupTableFunctionKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Two-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.3.
         *
         */
        function parse_WindAeroTwoDimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroTwoDimIEC";
            /**
             * Partial derivative of aerodynamic power with respect to changes in WTR speed (<i>dp</i><i><sub>omega</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.dpomega>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpomega>/g, obj, "dpomega", base.to_string, sub, context);

            /**
             * Partial derivative of aerodynamic power with respect to changes in pitch angle (<i>dp</i><i><sub>theta</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.dptheta>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dptheta>/g, obj, "dptheta", base.to_string, sub, context);

            /**
             * Partial derivative (<i>dp</i><sub>v1</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.dpv1>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpv1>/g, obj, "dpv1", base.to_string, sub, context);

            /**
             * Rotor speed if the wind turbine is not derated (<i>omega</i><i><sub>0</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.omegazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.omegazero>/g, obj, "omegazero", base.to_string, sub, context);

            /**
             * Available aerodynamic power (<i>p</i><sub>avail</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.pavail>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.pavail>/g, obj, "pavail", base.to_string, sub, context);

            /**
             * Blade angle at twice rated wind speed (<i>theta</i><i><sub>v2</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.thetav2>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetav2>/g, obj, "thetav2", base.to_string, sub, context);

            /**
             * Pitch angle if the wind turbine is not derated (<i>theta</i><i><sub>0</sub></i>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroTwoDimIEC.thetazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetazero>/g, obj, "thetazero", base.to_string, sub, context);

            /**
             * Wind turbine type 3 model with which this wind aerodynamic model is associated.
             *
             */
            base.parse_attribute (/<cim:WindAeroTwoDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            bucket = context.parsed.WindAeroTwoDimIEC;
            if (null == bucket)
                context.parsed.WindAeroTwoDimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Constant Q limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.9.
         *
         */
        function parse_WindContQLimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContQLimIEC";
            /**
             * Maximum reactive power (<i>q</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQLimIEC.qmax>([\s\S]*?)<\/cim:WindContQLimIEC.qmax>/g, obj, "qmax", base.to_string, sub, context);

            /**
             * Minimum reactive power (<i>q</i><sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContQLimIEC.qmin>([\s\S]*?)<\/cim:WindContQLimIEC.qmin>/g, obj, "qmin", base.to_string, sub, context);

            /**
             * Wind generator type 3 or 4 model with which this constant Q limitation model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContQLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindContQLimIEC;
            if (null == bucket)
                context.parsed.WindContQLimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 generator models of IEC type 3A and 3B.
         *
         */
        function parse_WindGenType3IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindGenType3IEC";
            /**
             * Maximum active current ramp rate (di<sub>pmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3IEC.dipmax>([\s\S]*?)<\/cim:WindGenType3IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);

            /**
             * Maximum reactive current ramp rate (di<sub>qmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3IEC.diqmax>([\s\S]*?)<\/cim:WindGenType3IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);

            /**
             * Electromagnetic transient reactance (x<sub>S</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3IEC.xs>([\s\S]*?)<\/cim:WindGenType3IEC.xs>/g, obj, "xs", base.to_string, sub, context);

            /**
             * Wind turbine type 3 model with which this wind generator type 3 is associated.
             *
             */
            base.parse_attribute (/<cim:WindGenType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            bucket = context.parsed.WindGenType3IEC;
            if (null == bucket)
                context.parsed.WindGenType3IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The grid protection model includes protection against over and under voltage, and against over and under frequency.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.6.
         *
         */
        function parse_WindProtectionIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindProtectionIEC";
            /**
             * Maximum rate of change of frequency (<i>dF</i><i><sub>max</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.dfimax>([\s\S]*?)<\/cim:WindProtectionIEC.dfimax>/g, obj, "dfimax", base.to_string, sub, context);

            /**
             * Wind turbine over frequency protection activation threshold (<i>f</i><i><sub>over</sub></i>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.fover>([\s\S]*?)<\/cim:WindProtectionIEC.fover>/g, obj, "fover", base.to_string, sub, context);

            /**
             * Wind turbine under frequency protection activation threshold (<i>f</i><i><sub>under</sub></i>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.funder>([\s\S]*?)<\/cim:WindProtectionIEC.funder>/g, obj, "funder", base.to_string, sub, context);

            /**
             * Zero crossing measurement mode (<i>Mzc</i>).
             *
             * True = 1 if the WT protection system uses zero crossings to detect frequency � otherwise false = 0. It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.mzc>([\s\S]*?)<\/cim:WindProtectionIEC.mzc>/g, obj, "mzc", base.to_boolean, sub, context);

            /**
             * Time interval of moving average window (<i>TfMA</i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.tfma>([\s\S]*?)<\/cim:WindProtectionIEC.tfma>/g, obj, "tfma", base.to_string, sub, context);

            /**
             * Wind turbine over voltage protection activation threshold (<i>u</i><i><sub>over</sub></i>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.uover>([\s\S]*?)<\/cim:WindProtectionIEC.uover>/g, obj, "uover", base.to_string, sub, context);

            /**
             * Wind turbine under voltage protection activation threshold (<i>u</i><i><sub>under</sub></i>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindProtectionIEC.uunder>([\s\S]*?)<\/cim:WindProtectionIEC.uunder>/g, obj, "uunder", base.to_string, sub, context);

            /**
             * Wind generator type 1 or 2 model with which this wind turbine protection model is associated.
             *
             */
            base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context, true);

            /**
             * Wind generator type 3 or 4 model with which this wind turbine protection model is associated.
             *
             */
            base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindProtectionIEC;
            if (null == bucket)
                context.parsed.WindProtectionIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Rotor resistance control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.3.
         *
         */
        function parse_WindContRotorRIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContRotorRIEC";
            /**
             * Integral gain in rotor resistance PI controller (<i>K</i><sub>Irr</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.kirr>([\s\S]*?)<\/cim:WindContRotorRIEC.kirr>/g, obj, "kirr", base.to_string, sub, context);

            /**
             * Filter gain for generator speed measurement (K<sub>omegafilt</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.komegafilt>([\s\S]*?)<\/cim:WindContRotorRIEC.komegafilt>/g, obj, "komegafilt", base.to_float, sub, context);

            /**
             * Filter gain for power measurement (<i>K</i><sub>pfilt</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.kpfilt>([\s\S]*?)<\/cim:WindContRotorRIEC.kpfilt>/g, obj, "kpfilt", base.to_float, sub, context);

            /**
             * Proportional gain in rotor resistance PI controller (<i>K</i><sub>Prr</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.kprr>([\s\S]*?)<\/cim:WindContRotorRIEC.kprr>/g, obj, "kprr", base.to_string, sub, context);

            /**
             * Maximum rotor resistance (<i>r</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.rmax>([\s\S]*?)<\/cim:WindContRotorRIEC.rmax>/g, obj, "rmax", base.to_string, sub, context);

            /**
             * Minimum rotor resistance (<i>r</i><sub>min</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.rmin>([\s\S]*?)<\/cim:WindContRotorRIEC.rmin>/g, obj, "rmin", base.to_string, sub, context);

            /**
             * Filter time constant for generator speed measurement (<i>T</i><sub>omegafiltrr</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.tomegafiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tomegafiltrr>/g, obj, "tomegafiltrr", base.to_string, sub, context);

            /**
             * Filter time constant for power measurement (<i>T</i><sub>pfiltrr</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContRotorRIEC.tpfiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tpfiltrr>/g, obj, "tpfiltrr", base.to_string, sub, context);

            /**
             * Wind turbine type 2 model with whitch this wind control rotor resistance model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContRotorRIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context, true);

            bucket = context.parsed.WindContRotorRIEC;
            if (null == bucket)
                context.parsed.WindContRotorRIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IEC Type 3A generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.2.
         *
         */
        function parse_WindGenType3aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindGenType3IEC (context, sub);
            obj.cls = "WindGenType3aIEC";
            /**
             * Current PI controller proportional gain (K<sub>Pc</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3aIEC.kpc>([\s\S]*?)<\/cim:WindGenType3aIEC.kpc>/g, obj, "kpc", base.to_float, sub, context);

            /**
             * Current PI controller integration time constant (T<sub>Ic</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindGenType3aIEC.tic>([\s\S]*?)<\/cim:WindGenType3aIEC.tic>/g, obj, "tic", base.to_string, sub, context);

            /**
             * Wind turbine type 4 model with which this wind generator type 3A model is associated.
             *
             */
            base.parse_attribute (/<cim:WindGenType3aIEC.WindTurbineType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4IEC", sub, context, true);

            bucket = context.parsed.WindGenType3aIEC;
            if (null == bucket)
                context.parsed.WindGenType3aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 and 4 including their control models.
         *
         */
        function parse_WindTurbineType3or4IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType3or4Dynamics (context, sub);
            obj.cls = "WindTurbineType3or4IEC";
            /**
             * Reference frame rotation model associated with this wind turbine type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindRefFrameRotIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindRefFrameRotIEC", sub, context, true);

            /**
             * QP and QU limitation model associated with this wind generator type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context, true);

            /**
             * Wind control current limitation model associated with this wind turbine type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context, true);

            /**
             * Wind control Q model associated with this wind turbine type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WIndContQIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WIndContQIEC", sub, context, true);

            /**
             * Constant Q limitation model associated with this wind generator type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQLimIEC", sub, context, true);

            /**
             * Wind turbune protection model associated with this wind generator type 3 or 4 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context, true);

            bucket = context.parsed.WindTurbineType3or4IEC;
            if (null == bucket)
                context.parsed.WindTurbineType3or4IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 1A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.2.
         *
         */
        function parse_WindGenTurbineType1aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType1aIEC";
            /**
             * Wind aerodynamic model associated with this wind turbine type 1A model.
             *
             */
            base.parse_attribute (/<cim:WindGenTurbineType1aIEC.WindAeroConstIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroConstIEC", sub, context, true);

            bucket = context.parsed.WindGenTurbineType1aIEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType1aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 4B.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.6.
         *
         */
        function parse_WindContPType4bIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType4bIEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>maxp4B</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4bIEC.dpmaxp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.dpmaxp4b>/g, obj, "dpmaxp4b", base.to_string, sub, context);

            /**
             * Time constant in aerodynamic power response (<i>T</i><sub>paero</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4bIEC.tpaero>([\s\S]*?)<\/cim:WindContPType4bIEC.tpaero>/g, obj, "tpaero", base.to_string, sub, context);

            /**
             * Time constant in power order lag (<i>T</i><sub>pordp4B</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4bIEC.tpordp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tpordp4b>/g, obj, "tpordp4b", base.to_string, sub, context);

            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltp4B</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4bIEC.tufiltp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tufiltp4b>/g, obj, "tufiltp4b", base.to_string, sub, context);

            /**
             * Wind turbine type 4B model with which this wind control P type 4B model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContPType4bIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context, true);

            bucket = context.parsed.WindContPType4bIEC;
            if (null == bucket)
                context.parsed.WindContPType4bIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Reference frame rotation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.5.
         *
         */
        function parse_WindRefFrameRotIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindRefFrameRotIEC";
            /**
             * Time constant for PLL first order filter model (T<sub>PLL</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindRefFrameRotIEC.tpll>([\s\S]*?)<\/cim:WindRefFrameRotIEC.tpll>/g, obj, "tpll", base.to_string, sub, context);

            /**
             * Voltage below which the angle of the voltage is filtered and possibly also frozen (u<sub>PLL1</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindRefFrameRotIEC.upll1>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll1>/g, obj, "upll1", base.to_string, sub, context);

            /**
             * Voltage (u<sub>PLL2</sub>) below which the angle of the voltage is frozen if u<sub>PLL2 </sub>is smaller or equal to u<sub>PLL1</sub> .
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindRefFrameRotIEC.upll2>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll2>/g, obj, "upll2", base.to_string, sub, context);

            /**
             * Wind turbine type 3 or 4 model with which this reference frame rotation model is associated.
             *
             */
            base.parse_attribute (/<cim:WindRefFrameRotIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindRefFrameRotIEC;
            if (null == bucket)
                context.parsed.WindRefFrameRotIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class models a look up table for the purpose of wind standard models.
         *
         */
        function parse_WindDynamicsLookupTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindDynamicsLookupTable";
            /**
             * Input value (x) for the lookup table function.
             *
             */
            base.parse_element (/<cim:WindDynamicsLookupTable.input>([\s\S]*?)<\/cim:WindDynamicsLookupTable.input>/g, obj, "input", base.to_float, sub, context);

            /**
             * Type of the lookup table function.
             *
             */
            base.parse_element (/<cim:WindDynamicsLookupTable.lookupTableFunctionType>([\s\S]*?)<\/cim:WindDynamicsLookupTable.lookupTableFunctionType>/g, obj, "lookupTableFunctionType", base.to_string, sub, context);

            /**
             * Output value (y) for the lookup table function.
             *
             */
            base.parse_element (/<cim:WindDynamicsLookupTable.output>([\s\S]*?)<\/cim:WindDynamicsLookupTable.output>/g, obj, "output", base.to_float, sub, context);

            /**
             * Sequence numbers of the pairs of the input (x) and the output (y) of the lookup table function.
             *
             */
            base.parse_element (/<cim:WindDynamicsLookupTable.sequence>([\s\S]*?)<\/cim:WindDynamicsLookupTable.sequence>/g, obj, "sequence", base.to_string, sub, context);

            /**
             * The pitch control power model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context, true);

            /**
             * The frequency and active power wind plant control model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context, true);

            /**
             * The QP and QU limitation model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context, true);

            /**
             * The generator type 3B model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindGenType3bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3bIEC", sub, context, true);

            /**
             * The P control type 3 model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context, true);

            /**
             * The voltage and reactive power wind plant control model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context, true);

            /**
             * The grid protection model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context, true);

            /**
             * The current control limitation model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context, true);

            /**
             * The rotor resistance control model with which this wind dynamics lookup table is associated.
             *
             */
            base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context, true);

            bucket = context.parsed.WindDynamicsLookupTable;
            if (null == bucket)
                context.parsed.WindDynamicsLookupTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 1 and 2 and their control models.
         *
         */
        function parse_WindTurbineType1or2Dynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindTurbineType1or2Dynamics";
            /**
             * Asynchronous machine model with which this wind generator type 1 or 2 model is associated.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context, true);

            /**
             * Remote input signal used by this wind generator Type 1 or Type 2 model.
             *
             */
            base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

            bucket = context.parsed.WindTurbineType1or2Dynamics;
            if (null == bucket)
                context.parsed.WindTurbineType1or2Dynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Frequency and active power controller model.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        function parse_WindPlantFreqPcontrolIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindPlantFreqPcontrolIEC";
            /**
             * Maximum ramp rate of <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>dp</i><sub>refmax</sub>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);

            /**
             * Minimum (negative) ramp rate of <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>dp</i><sub>refmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);

            /**
             * Maximum positive ramp rate for wind plant power reference (<i>dp</i><sub>WPrefmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmax>/g, obj, "dpwprefmax", base.to_string, sub, context);

            /**
             * Maximum negative ramp rate for wind plant power reference (<i>dp</i><sub>WPrefmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmin>/g, obj, "dpwprefmin", base.to_string, sub, context);

            /**
             * Plant P controller integral gain (<i>K</i><sub>IWPp</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwpp>/g, obj, "kiwpp", base.to_float, sub, context);

            /**
             * Maximum PI integrator term (<i>K</i><sub>IWPpmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmax>/g, obj, "kiwppmax", base.to_string, sub, context);

            /**
             * Minimum PI integrator term (<i>K</i><sub>IWPpmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmin>/g, obj, "kiwppmin", base.to_string, sub, context);

            /**
             * Plant P controller proportional gain (<i>K</i><sub>PWPp</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kpwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kpwpp>/g, obj, "kpwpp", base.to_float, sub, context);

            /**
             * Power reference gain (<i>K</i><sub>WPpref</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kwppref>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kwppref>/g, obj, "kwppref", base.to_string, sub, context);

            /**
             * Maximum <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>p</i><sub>refmax</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmax>/g, obj, "prefmax", base.to_string, sub, context);

            /**
             * Minimum <i>p</i><sub>WTref</sub> request from the plant controller to the wind turbines (<i>p</i><sub>refmin</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmin>/g, obj, "prefmin", base.to_string, sub, context);

            /**
             * Lead time constant in reference value transfer function (<i>T</i><sub>pft</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpft>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpft>/g, obj, "tpft", base.to_string, sub, context);

            /**
             * Lag time constant in reference value transfer function (<i>T</i><sub>pfv</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpfv>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpfv>/g, obj, "tpfv", base.to_string, sub, context);

            /**
             * Filter time constant for frequency measurement (<i>T</i><sub>WPffiltp</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twpffiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twpffiltp>/g, obj, "twpffiltp", base.to_string, sub, context);

            /**
             * Filter time constant for active power measurement (<i>T</i><sub>WPpfiltp</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twppfiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twppfiltp>/g, obj, "twppfiltp", base.to_string, sub, context);

            /**
             * Wind plant model with which this wind plant frequency and active power control is associated.
             *
             */
            base.parse_attribute (/<cim:WindPlantFreqPcontrolIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context, true);

            bucket = context.parsed.WindPlantFreqPcontrolIEC;
            if (null == bucket)
                context.parsed.WindPlantFreqPcontrolIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * P control model Type 4A.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.5.
         *
         */
        function parse_WindContPType4aIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContPType4aIEC";
            /**
             * Maximum wind turbine power ramp rate (<i>dp</i><sub>maxp4A</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4aIEC.dpmaxp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.dpmaxp4a>/g, obj, "dpmaxp4a", base.to_string, sub, context);

            /**
             * Time constant in power order lag (<i>T</i><sub>pordp4A</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4aIEC.tpordp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tpordp4a>/g, obj, "tpordp4a", base.to_string, sub, context);

            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltp4A</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContPType4aIEC.tufiltp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tufiltp4a>/g, obj, "tufiltp4a", base.to_string, sub, context);

            /**
             * Wind turbine type 4A model with which this wind control P type 4A model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContPType4aIEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context, true);

            bucket = context.parsed.WindContPType4aIEC;
            if (null == bucket)
                context.parsed.WindContPType4aIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * UVRT Q control modes <i>M</i><sub>qUVRT</sub>.
         *
         */
        function parse_WindUVRTQcontrolModeKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "WindUVRTQcontrolModeKind";
            /**
             * Voltage dependent reactive current injection (<i>M</i><i><sub>q</sub></i><sub>UVRT </sub>equals 0).
             *
             */
            base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode0>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode0>/g, obj, "mode0", base.to_string, sub, context);

            /**
             * Reactive current injection controlled as the pre-fault value plus an additional voltage dependent reactive current injection (<i>M</i><i><sub>q</sub></i><sub>UVRT</sub> equals 1).
             *
             */
            base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode1>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode1>/g, obj, "mode1", base.to_string, sub, context);

            /**
             * Reactive current injection controlled as the pre-fault value plus an additional voltage dependent reactive current injection during fault, and as the pre-fault value plus an additional constant reactive current injection post fault (<i>M</i><i><sub>q</sub></i><sub>UVRT </sub>equals 2).
             *
             */
            base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode2>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode2>/g, obj, "mode2", base.to_string, sub, context);

            bucket = context.parsed.WindUVRTQcontrolModeKind;
            if (null == bucket)
                context.parsed.WindUVRTQcontrolModeKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Current limitation model.
         *
         * The current limitation model combines the physical limits and the control limits.
         *
         */
        function parse_WindContCurrLimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindContCurrLimIEC";
            /**
             * Maximum continuous current at the wind turbine terminals (<i>i</i><sub>max</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.imax>([\s\S]*?)<\/cim:WindContCurrLimIEC.imax>/g, obj, "imax", base.to_string, sub, context);

            /**
             * Maximum current during voltage dip at the wind turbine terminals (<i>i</i><sub>maxdip</sub>).
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.imaxdip>([\s\S]*?)<\/cim:WindContCurrLimIEC.imaxdip>/g, obj, "imaxdip", base.to_string, sub, context);

            /**
             * Partial derivative of reactive current limit (<i>K</i><sub>pqu</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.kpqu>([\s\S]*?)<\/cim:WindContCurrLimIEC.kpqu>/g, obj, "kpqu", base.to_string, sub, context);

            /**
             * Limitation of type 3 stator current  (<i>M</i><sub>DFSLim</sub>):
             * - false=0: total current limitation,
             * - true=1: stator current limitation).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.mdfslim>([\s\S]*?)<\/cim:WindContCurrLimIEC.mdfslim>/g, obj, "mdfslim", base.to_boolean, sub, context);

            /**
             * Prioritisation of q control during UVRT (<i>M</i><sub>qpri</sub>):
             * - true = 1: reactive power priority,
             * - false = 0: active power priority.
             *
             * It is project dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.mqpri>([\s\S]*?)<\/cim:WindContCurrLimIEC.mqpri>/g, obj, "mqpri", base.to_boolean, sub, context);

            /**
             * Voltage measurement filter time constant (<i>T</i><sub>ufiltcl</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.tufiltcl>([\s\S]*?)<\/cim:WindContCurrLimIEC.tufiltcl>/g, obj, "tufiltcl", base.to_string, sub, context);

            /**
             * Wind turbine voltage in the operation point where zero reactive current can be delivered (<i>u</i><sub>pqumax</sub>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindContCurrLimIEC.upqumax>([\s\S]*?)<\/cim:WindContCurrLimIEC.upqumax>/g, obj, "upqumax", base.to_string, sub, context);

            /**
             * Wind turbine type 3 or 4 model with which this wind control current limitation model is associated.
             *
             */
            base.parse_attribute (/<cim:WindContCurrLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context, true);

            bucket = context.parsed.WindContCurrLimIEC;
            if (null == bucket)
                context.parsed.WindContCurrLimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * One-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.2.
         *
         */
        function parse_WindAeroOneDimIEC (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "WindAeroOneDimIEC";
            /**
             * Aerodynamic gain (<i>k</i><i><sub>a</sub></i>).
             *
             * It is type dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroOneDimIEC.ka>([\s\S]*?)<\/cim:WindAeroOneDimIEC.ka>/g, obj, "ka", base.to_float, sub, context);

            /**
             * Initial pitch angle (<i>theta</i><i><sub>omega0</sub></i>).
             *
             * It is case dependent parameter.
             *
             */
            base.parse_element (/<cim:WindAeroOneDimIEC.thetaomega>([\s\S]*?)<\/cim:WindAeroOneDimIEC.thetaomega>/g, obj, "thetaomega", base.to_string, sub, context);

            /**
             * Wind turbine type 3 model with which this wind aerodynamic model is associated.
             *
             */
            base.parse_attribute (/<cim:WindAeroOneDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context, true);

            bucket = context.parsed.WindAeroOneDimIEC;
            if (null == bucket)
                context.parsed.WindAeroOneDimIEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Wind turbine IEC Type 2.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.3.
         *
         */
        function parse_WindGenTurbineType2IEC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_WindTurbineType1or2IEC (context, sub);
            obj.cls = "WindGenTurbineType2IEC";
            /**
             * Wind control rotor resistance model associated with wind turbine type 2 model.
             *
             */
            base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context, true);

            /**
             * Pitch control power model associated with this wind turbine type 2 model.
             *
             */
            base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context, true);

            bucket = context.parsed.WindGenTurbineType2IEC;
            if (null == bucket)
                context.parsed.WindGenTurbineType2IEC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant IEC and user defined wind plants including their control models.
         *
         */
        function parse_WindPlantDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "WindPlantDynamics";
            /**
             * The remote signal with which this power plant is associated.
             *
             */
            base.parse_attribute (/<cim:WindPlantDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context, true);

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