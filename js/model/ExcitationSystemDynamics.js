define
(
    ["model/base", "model/StandardModels"],
    /**
     * The excitation system model provides the field voltage (Efd) for a synchronous machine model.
     * It is linked to a specific generator (synchronous machine). The data parameters are different for each excitation system model; the same parameter name may have different meaning in different models.
     */
    function (base, StandardModels)
    {

        /**
         * Type of connection for the UEL input used in ExcIEEEST1A.
         */
        function parse_ExcIEEEST1AUELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcIEEEST1AUELselectorKind";
            /**
             * Ignore UEL signal.
             */
            obj["ignoreUELsignal"] = base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.ignoreUELsignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.ignoreUELsignal>/g, sub, context, true);
            /**
             * UEL input HV gate with voltage regulator output.
             */
            obj["inputHVgateVoltageOutput"] = base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputHVgateVoltageOutput>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputHVgateVoltageOutput>/g, sub, context, true);
            /**
             * UEL input HV gate with error signal.
             */
            obj["inputHVgateErrorSignal"] = base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputHVgateErrorSignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputHVgateErrorSignal>/g, sub, context, true);
            /**
             * UEL input added to error signal.
             */
            obj["inputAddedToErrorSignal"] = base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputAddedToErrorSignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputAddedToErrorSignal>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST1AUELselectorKind;
            if (null == bucket)
                context.parsed.ExcIEEEST1AUELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Transformer fed static excitation system (static with ABB regulator).
         * This model represents a static excitation system in which a gated thyristor bridge fed by a transformer at the main generator terminals feeds the main generator directly.
         */
        function parse_ExcBBC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcBBC";
            /**
             * Maximum open circuit exciter voltage (Efdmax).
             * Typical Value = 5.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcBBC.efdmax>([\s\S]*?)<\/cim:ExcBBC.efdmax>/g, sub, context, true);
            /**
             * Minimum open circuit exciter voltage (Efdmin).
             * Typical Value = -5.
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcBBC.efdmin>([\s\S]*?)<\/cim:ExcBBC.efdmin>/g, sub, context, true);
            /**
             * Steady state gain (K).
             * Typical Value = 300.
             */
            obj["k"] = base.parse_element (/<cim:ExcBBC.k>([\s\S]*?)<\/cim:ExcBBC.k>/g, sub, context, true);
            /**
             * Supplementary signal routing selector (switch).
            true = Vs connected to 3rd summing point
            false =  Vs connected to 1st summing point (see diagram).
             * Typical Value = true.
             */
            obj["switch"] = base.to_boolean (base.parse_element (/<cim:ExcBBC.switch>([\s\S]*?)<\/cim:ExcBBC.switch>/g, sub, context, true));
            /**
             * Controller time constant (T1).
             * Typical Value = 6.
             */
            obj["t1"] = base.parse_element (/<cim:ExcBBC.t1>([\s\S]*?)<\/cim:ExcBBC.t1>/g, sub, context, true);
            /**
             * Controller time constant (T2).
             * Typical Value = 1.
             */
            obj["t2"] = base.parse_element (/<cim:ExcBBC.t2>([\s\S]*?)<\/cim:ExcBBC.t2>/g, sub, context, true);
            /**
             * Lead/lag time constant (T3).
             * Typical Value = 0.05.
             */
            obj["t3"] = base.parse_element (/<cim:ExcBBC.t3>([\s\S]*?)<\/cim:ExcBBC.t3>/g, sub, context, true);
            /**
             * Lead/lag time constant (T4).
             * Typical Value = 0.01.
             */
            obj["t4"] = base.parse_element (/<cim:ExcBBC.t4>([\s\S]*?)<\/cim:ExcBBC.t4>/g, sub, context, true);
            /**
             * Maximum control element output (Vrmax).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcBBC.vrmax>([\s\S]*?)<\/cim:ExcBBC.vrmax>/g, sub, context, true);
            /**
             * Minimum control element output (Vrmin).
             * Typical Value = -5.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcBBC.vrmin>([\s\S]*?)<\/cim:ExcBBC.vrmin>/g, sub, context, true);
            /**
             * Effective excitation transformer reactance (Xe).
             * Typical Value = 0.05.
             */
            obj["xe"] = base.parse_element (/<cim:ExcBBC.xe>([\s\S]*?)<\/cim:ExcBBC.xe>/g, sub, context, true);
            bucket = context.parsed.ExcBBC;
            if (null == bucket)
                context.parsed.ExcBBC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE ST4B static excitation system with maximum inner loop feedback gain <b>Vgmax</b>.
         */
        function parse_ExcST4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST4B";
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.113.
             */
            obj["kc"] = base.parse_element (/<cim:ExcST4B.kc>([\s\S]*?)<\/cim:ExcST4B.kc>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (Kg).
             * Typical Value = 0.
             */
            obj["kg"] = base.parse_element (/<cim:ExcST4B.kg>([\s\S]*?)<\/cim:ExcST4B.kg>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Ki).
             * Typical Value = 0.
             */
            obj["ki"] = base.parse_element (/<cim:ExcST4B.ki>([\s\S]*?)<\/cim:ExcST4B.ki>/g, sub, context, true);
            /**
             * Voltage regulator integral gain output (Kim).
             * Typical Value = 0.
             */
            obj["kim"] = base.parse_element (/<cim:ExcST4B.kim>([\s\S]*?)<\/cim:ExcST4B.kim>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (Kir).
             * Typical Value = 10.75.
             */
            obj["kir"] = base.parse_element (/<cim:ExcST4B.kir>([\s\S]*?)<\/cim:ExcST4B.kir>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Kp).
             * Typical Value = 9.3.
             */
            obj["kp"] = base.parse_element (/<cim:ExcST4B.kp>([\s\S]*?)<\/cim:ExcST4B.kp>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain output (Kpm).
             * Typical Value = 1.
             */
            obj["kpm"] = base.parse_element (/<cim:ExcST4B.kpm>([\s\S]*?)<\/cim:ExcST4B.kpm>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (Kpr).
             * Typical Value = 10.75.
             */
            obj["kpr"] = base.parse_element (/<cim:ExcST4B.kpr>([\s\S]*?)<\/cim:ExcST4B.kpr>/g, sub, context, true);
            /**
             * Selector (LVgate).
            true = LVgate is part of the block diagram
            false = LVgate is not part of the block diagram.
             * Typical Value = false.
             */
            obj["lvgate"] = base.to_boolean (base.parse_element (/<cim:ExcST4B.lvgate>([\s\S]*?)<\/cim:ExcST4B.lvgate>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcST4B.ta>([\s\S]*?)<\/cim:ExcST4B.ta>/g, sub, context, true);
            /**
             * Potential circuit phase angle (thetap).
             * Typical Value = 0.
             */
            obj["thetap"] = base.parse_element (/<cim:ExcST4B.thetap>([\s\S]*?)<\/cim:ExcST4B.thetap>/g, sub, context, true);
            /**
             * Selector (Uel).
            true = UEL is part of block diagram
            false = UEL is not part of block diagram.
             * Typical Value = false.
             */
            obj["uel"] = base.to_boolean (base.parse_element (/<cim:ExcST4B.uel>([\s\S]*?)<\/cim:ExcST4B.uel>/g, sub, context, true));
            /**
             * Maximum excitation voltage (Vbmax).
             * Typical Value = 11.63.
             */
            obj["vbmax"] = base.parse_element (/<cim:ExcST4B.vbmax>([\s\S]*?)<\/cim:ExcST4B.vbmax>/g, sub, context, true);
            /**
             * Maximum inner loop feedback voltage (Vgmax).
             * Typical Value = 5.8.
             */
            obj["vgmax"] = base.parse_element (/<cim:ExcST4B.vgmax>([\s\S]*?)<\/cim:ExcST4B.vgmax>/g, sub, context, true);
            /**
             * Maximum inner loop output (Vmmax).
             * Typical Value = 99.
             */
            obj["vmmax"] = base.parse_element (/<cim:ExcST4B.vmmax>([\s\S]*?)<\/cim:ExcST4B.vmmax>/g, sub, context, true);
            /**
             * Minimum inner loop output (Vmmin).
             * Typical Value = -99.
             */
            obj["vmmin"] = base.parse_element (/<cim:ExcST4B.vmmin>([\s\S]*?)<\/cim:ExcST4B.vmmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST4B.vrmax>([\s\S]*?)<\/cim:ExcST4B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -0.87.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST4B.vrmin>([\s\S]*?)<\/cim:ExcST4B.vrmin>/g, sub, context, true);
            /**
             * Reactance associated with potential source (Xl).
             * Typical Value = 0.124.
             */
            obj["xl"] = base.parse_element (/<cim:ExcST4B.xl>([\s\S]*?)<\/cim:ExcST4B.xl>/g, sub, context, true);
            bucket = context.parsed.ExcST4B;
            if (null == bucket)
                context.parsed.ExcST4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC6A alternator-supplied rectifier excitation system with speed input.
         */
        function parse_ExcAC6A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC6A";
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 536.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC6A.ka>([\s\S]*?)<\/cim:ExcAC6A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.173.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC6A.kc>([\s\S]*?)<\/cim:ExcAC6A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (Kd).
             * Typical Value = 1.91.
             */
            obj["kd"] = base.parse_element (/<cim:ExcAC6A.kd>([\s\S]*?)<\/cim:ExcAC6A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.6.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC6A.ke>([\s\S]*?)<\/cim:ExcAC6A.ke>/g, sub, context, true);
            /**
             * Exciter field current limiter gain (Kh).
             * Typical Value = 92.
             */
            obj["kh"] = base.parse_element (/<cim:ExcAC6A.kh>([\s\S]*?)<\/cim:ExcAC6A.kh>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC6A.ks>([\s\S]*?)<\/cim:ExcAC6A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve1, back of commutating reactance (Se[Ve1]).
             * Typical Value = 0.214.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcAC6A.seve1>([\s\S]*?)<\/cim:ExcAC6A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve2, back of commutating reactance (Se[Ve2]).
             * Typical Value = 0.044.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcAC6A.seve2>([\s\S]*?)<\/cim:ExcAC6A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.086.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC6A.ta>([\s\S]*?)<\/cim:ExcAC6A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 9.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC6A.tb>([\s\S]*?)<\/cim:ExcAC6A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 3.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC6A.tc>([\s\S]*?)<\/cim:ExcAC6A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC6A.te>([\s\S]*?)<\/cim:ExcAC6A.te>/g, sub, context, true);
            /**
             * Exciter field current limiter time constant (Th).
             * Typical Value = 0.08.
             */
            obj["th"] = base.parse_element (/<cim:ExcAC6A.th>([\s\S]*?)<\/cim:ExcAC6A.th>/g, sub, context, true);
            /**
             * Exciter field current limiter time constant (Tj).
             * Typical Value = 0.02.
             */
            obj["tj"] = base.parse_element (/<cim:ExcAC6A.tj>([\s\S]*?)<\/cim:ExcAC6A.tj>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tk).
             * Typical Value = 0.18.
             */
            obj["tk"] = base.parse_element (/<cim:ExcAC6A.tk>([\s\S]*?)<\/cim:ExcAC6A.tk>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vamax).
             * Typical Value = 75.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcAC6A.vamax>([\s\S]*?)<\/cim:ExcAC6A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vamin).
             * Typical Value = -75.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcAC6A.vamin>([\s\S]*?)<\/cim:ExcAC6A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>1</sub>).
             * Typical Value = 7.4.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcAC6A.ve1>([\s\S]*?)<\/cim:ExcAC6A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve2).
             * Typical Value = 5.55.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcAC6A.ve2>([\s\S]*?)<\/cim:ExcAC6A.ve2>/g, sub, context, true);
            /**
             * Exciter field current limit reference (Vfelim).
             * Typical Value = 19.
             */
            obj["vfelim"] = base.parse_element (/<cim:ExcAC6A.vfelim>([\s\S]*?)<\/cim:ExcAC6A.vfelim>/g, sub, context, true);
            /**
             * Maximum field current limiter signal reference (Vhmax).
             * Typical Value = 75.
             */
            obj["vhmax"] = base.parse_element (/<cim:ExcAC6A.vhmax>([\s\S]*?)<\/cim:ExcAC6A.vhmax>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 44.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC6A.vrmax>([\s\S]*?)<\/cim:ExcAC6A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -36.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC6A.vrmin>([\s\S]*?)<\/cim:ExcAC6A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcAC6A;
            if (null == bucket)
                context.parsed.ExcAC6A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE Type ST1 Excitation System with semi-continuous and acting terminal voltage limiter.
         */
        function parse_ExcOEX3T (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcOEX3T";
            /**
             * Saturation parameter (E<sub>1</sub>).
             */
            obj["e1"] = base.parse_element (/<cim:ExcOEX3T.e1>([\s\S]*?)<\/cim:ExcOEX3T.e1>/g, sub, context, true);
            /**
             * Saturation parameter (E<sub>2</sub>).
             */
            obj["e2"] = base.parse_element (/<cim:ExcOEX3T.e2>([\s\S]*?)<\/cim:ExcOEX3T.e2>/g, sub, context, true);
            /**
             * Gain (K<sub>A</sub>).
             */
            obj["ka"] = base.parse_element (/<cim:ExcOEX3T.ka>([\s\S]*?)<\/cim:ExcOEX3T.ka>/g, sub, context, true);
            /**
             * Gain (K<sub>C</sub>).
             */
            obj["kc"] = base.parse_element (/<cim:ExcOEX3T.kc>([\s\S]*?)<\/cim:ExcOEX3T.kc>/g, sub, context, true);
            /**
             * Gain (K<sub>D</sub>).
             */
            obj["kd"] = base.parse_element (/<cim:ExcOEX3T.kd>([\s\S]*?)<\/cim:ExcOEX3T.kd>/g, sub, context, true);
            /**
             * Gain (K<sub>E</sub>).
             */
            obj["ke"] = base.parse_element (/<cim:ExcOEX3T.ke>([\s\S]*?)<\/cim:ExcOEX3T.ke>/g, sub, context, true);
            /**
             * Gain (K<sub>F</sub>).
             */
            obj["kf"] = base.parse_element (/<cim:ExcOEX3T.kf>([\s\S]*?)<\/cim:ExcOEX3T.kf>/g, sub, context, true);
            /**
             * Saturation parameter (S<sub>E</sub>(E<sub>1</sub>)).
             */
            obj["see1"] = base.parse_element (/<cim:ExcOEX3T.see1>([\s\S]*?)<\/cim:ExcOEX3T.see1>/g, sub, context, true);
            /**
             * Saturation parameter (S<sub>E</sub>(E<sub>2</sub>)).
             */
            obj["see2"] = base.parse_element (/<cim:ExcOEX3T.see2>([\s\S]*?)<\/cim:ExcOEX3T.see2>/g, sub, context, true);
            /**
             * Time constant (T<sub>1</sub>).
             */
            obj["t1"] = base.parse_element (/<cim:ExcOEX3T.t1>([\s\S]*?)<\/cim:ExcOEX3T.t1>/g, sub, context, true);
            /**
             * Time constant (T<sub>2</sub>).
             */
            obj["t2"] = base.parse_element (/<cim:ExcOEX3T.t2>([\s\S]*?)<\/cim:ExcOEX3T.t2>/g, sub, context, true);
            /**
             * Time constant (T<sub>3</sub>).
             */
            obj["t3"] = base.parse_element (/<cim:ExcOEX3T.t3>([\s\S]*?)<\/cim:ExcOEX3T.t3>/g, sub, context, true);
            /**
             * Time constant (T<sub>4</sub>).
             */
            obj["t4"] = base.parse_element (/<cim:ExcOEX3T.t4>([\s\S]*?)<\/cim:ExcOEX3T.t4>/g, sub, context, true);
            /**
             * Time constant (T<sub>5</sub>).
             */
            obj["t5"] = base.parse_element (/<cim:ExcOEX3T.t5>([\s\S]*?)<\/cim:ExcOEX3T.t5>/g, sub, context, true);
            /**
             * Time constant (T<sub>6</sub>).
             */
            obj["t6"] = base.parse_element (/<cim:ExcOEX3T.t6>([\s\S]*?)<\/cim:ExcOEX3T.t6>/g, sub, context, true);
            /**
             * Time constant (T<sub>E</sub>).
             */
            obj["te"] = base.parse_element (/<cim:ExcOEX3T.te>([\s\S]*?)<\/cim:ExcOEX3T.te>/g, sub, context, true);
            /**
             * Time constant (T<sub>F</sub>).
             */
            obj["tf"] = base.parse_element (/<cim:ExcOEX3T.tf>([\s\S]*?)<\/cim:ExcOEX3T.tf>/g, sub, context, true);
            /**
             * Limiter (V<sub>RMAX</sub>).
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcOEX3T.vrmax>([\s\S]*?)<\/cim:ExcOEX3T.vrmax>/g, sub, context, true);
            /**
             * Limiter (V<sub>RMIN</sub>).
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcOEX3T.vrmin>([\s\S]*?)<\/cim:ExcOEX3T.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcOEX3T;
            if (null == bucket)
                context.parsed.ExcOEX3T = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of connection for the OEL input used for static excitation systems type 7B.
         */
        function parse_ExcST7BOELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST7BOELselectorKind";
            /**
             * No OEL input is used.
             */
            obj["noOELinput"] = base.parse_element (/<cim:ExcST7BOELselectorKind.noOELinput>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.noOELinput>/g, sub, context, true);
            /**
             * The signal is added to Vref.
             */
            obj["addVref"] = base.parse_element (/<cim:ExcST7BOELselectorKind.addVref>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.addVref>/g, sub, context, true);
            /**
             * The signal is connected in the input of the LV gate.
             */
            obj["inputLVgate"] = base.parse_element (/<cim:ExcST7BOELselectorKind.inputLVgate>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.inputLVgate>/g, sub, context, true);
            /**
             * The signal is connected in the output of the LV gate.
             */
            obj["outputLVgate"] = base.parse_element (/<cim:ExcST7BOELselectorKind.outputLVgate>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.outputLVgate>/g, sub, context, true);
            bucket = context.parsed.ExcST7BOELselectorKind;
            if (null == bucket)
                context.parsed.ExcST7BOELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC3A alternator-supplied rectifier excitation system with different field current limit.
         */
        function parse_ExcAC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC3A";
            /**
             * Value of <i>EFD </i>at which feedback gain changes (Efdn).
             * Typical Value = 2.36.
             */
            obj["efdn"] = base.parse_element (/<cim:ExcAC3A.efdn>([\s\S]*?)<\/cim:ExcAC3A.efdn>/g, sub, context, true);
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 45.62.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC3A.ka>([\s\S]*?)<\/cim:ExcAC3A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.104.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC3A.kc>([\s\S]*?)<\/cim:ExcAC3A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (Kd).
             * Typical Value = 0.499.
             */
            obj["kd"] = base.parse_element (/<cim:ExcAC3A.kd>([\s\S]*?)<\/cim:ExcAC3A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC3A.ke>([\s\S]*?)<\/cim:ExcAC3A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.143.
             */
            obj["kf"] = base.parse_element (/<cim:ExcAC3A.kf>([\s\S]*?)<\/cim:ExcAC3A.kf>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model (Kf1).
             * Typical Value = 1.
             */
            obj["kf1"] = base.parse_element (/<cim:ExcAC3A.kf1>([\s\S]*?)<\/cim:ExcAC3A.kf1>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model (Kf2).
             * Typical Value = 0.
             */
            obj["kf2"] = base.parse_element (/<cim:ExcAC3A.kf2>([\s\S]*?)<\/cim:ExcAC3A.kf2>/g, sub, context, true);
            /**
             * Gain used in the minimum field voltage limiter loop (Klv).
             * Typical Value = 0.194.
             */
            obj["klv"] = base.parse_element (/<cim:ExcAC3A.klv>([\s\S]*?)<\/cim:ExcAC3A.klv>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (Kn).
             * Typical Value =0.05.
             */
            obj["kn"] = base.parse_element (/<cim:ExcAC3A.kn>([\s\S]*?)<\/cim:ExcAC3A.kn>/g, sub, context, true);
            /**
             * Constant associated with regulator and alternator field power supply (Kr).
             * Typical Value =3.77.
             */
            obj["kr"] = base.parse_element (/<cim:ExcAC3A.kr>([\s\S]*?)<\/cim:ExcAC3A.kr>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC3A.ks>([\s\S]*?)<\/cim:ExcAC3A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>1</sub>, back of commutating reactance (Se[Ve<sub>1</sub>]).
             * Typical Value = 1.143.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcAC3A.seve1>([\s\S]*?)<\/cim:ExcAC3A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>2</sub>, back of commutating reactance (Se[Ve<sub>2</sub>]).
             * Typical Value = 0.1.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcAC3A.seve2>([\s\S]*?)<\/cim:ExcAC3A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.013.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC3A.ta>([\s\S]*?)<\/cim:ExcAC3A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC3A.tb>([\s\S]*?)<\/cim:ExcAC3A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>c</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC3A.tc>([\s\S]*?)<\/cim:ExcAC3A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.17.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC3A.te>([\s\S]*?)<\/cim:ExcAC3A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcAC3A.tf>([\s\S]*?)<\/cim:ExcAC3A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>amax</sub>).
             * Typical Value = 1.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcAC3A.vamax>([\s\S]*?)<\/cim:ExcAC3A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>amin</sub>).
             * Typical Value = -0.95.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcAC3A.vamin>([\s\S]*?)<\/cim:ExcAC3A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve1) equals Vemax (Ve1).
             * Typical Value = 6.24.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcAC3A.ve1>([\s\S]*?)<\/cim:ExcAC3A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>2</sub>).
             * Typical Value = 4.68.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcAC3A.ve2>([\s\S]*?)<\/cim:ExcAC3A.ve2>/g, sub, context, true);
            /**
             * Minimum exciter voltage output (Vemin).
             * Typical Value = 0.1.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcAC3A.vemin>([\s\S]*?)<\/cim:ExcAC3A.vemin>/g, sub, context, true);
            /**
             * Exciter field current limit reference (Vfemax).
             * Typical Value = 16.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcAC3A.vfemax>([\s\S]*?)<\/cim:ExcAC3A.vfemax>/g, sub, context, true);
            /**
             * Field voltage used in the minimum field voltage limiter loop (Vlv).
             * Typical Value = 0.79.
             */
            obj["vlv"] = base.parse_element (/<cim:ExcAC3A.vlv>([\s\S]*?)<\/cim:ExcAC3A.vlv>/g, sub, context, true);
            bucket = context.parsed.ExcAC3A;
            if (null == bucket)
                context.parsed.ExcAC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC6A model.
         * The model represents field-controlled alternator-rectifier excitation systems with system-supplied electronic voltage regulators.  The maximum output of the regulator, <b><i>V</i></b><b><i><sub>R</sub></i></b>, is a function of terminal voltage, <b><i>V</i></b><b><i><sub>T</sub></i></b>. The field current limiter included in the original model AC6A remains in the 2005 update.
         */
        function parse_ExcIEEEAC6A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC6A";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 536.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC6A.ka>([\s\S]*?)<\/cim:ExcIEEEAC6A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.173.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC6A.kc>([\s\S]*?)<\/cim:ExcIEEEAC6A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 1.91.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC6A.kd>([\s\S]*?)<\/cim:ExcIEEEAC6A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.6.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC6A.ke>([\s\S]*?)<\/cim:ExcIEEEAC6A.ke>/g, sub, context, true);
            /**
             * Exciter field current limiter gain (K<sub>H</sub>).
             * Typical Value = 92.
             */
            obj["kh"] = base.parse_element (/<cim:ExcIEEEAC6A.kh>([\s\S]*?)<\/cim:ExcIEEEAC6A.kh>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 0.214.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC6A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC6A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 0.044.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC6A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC6A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.086.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC6A.ta>([\s\S]*?)<\/cim:ExcIEEEAC6A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 9.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEAC6A.tb>([\s\S]*?)<\/cim:ExcIEEEAC6A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 3.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEAC6A.tc>([\s\S]*?)<\/cim:ExcIEEEAC6A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC6A.te>([\s\S]*?)<\/cim:ExcIEEEAC6A.te>/g, sub, context, true);
            /**
             * Exciter field current limiter time constant (T<sub>H</sub>).
             * Typical Value = 0.08.
             */
            obj["th"] = base.parse_element (/<cim:ExcIEEEAC6A.th>([\s\S]*?)<\/cim:ExcIEEEAC6A.th>/g, sub, context, true);
            /**
             * Exciter field current limiter time constant (T<sub>J</sub>).
             * Typical Value = 0.02.
             */
            obj["tj"] = base.parse_element (/<cim:ExcIEEEAC6A.tj>([\s\S]*?)<\/cim:ExcIEEEAC6A.tj>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>K</sub>).
             * Typical Value = 0.18.
             */
            obj["tk"] = base.parse_element (/<cim:ExcIEEEAC6A.tk>([\s\S]*?)<\/cim:ExcIEEEAC6A.tk>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 75.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEAC6A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -75.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEAC6A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC6A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>) equals V<sub>EMAX </sub>(V<sub>E1</sub>).
             * Typical Value = 7.4.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC6A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC6A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 5.55.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC6A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC6A.ve2>/g, sub, context, true);
            /**
             * Exciter field current limit reference (V<sub>FELIM</sub>).
             * Typical Value = 19.
             */
            obj["vfelim"] = base.parse_element (/<cim:ExcIEEEAC6A.vfelim>([\s\S]*?)<\/cim:ExcIEEEAC6A.vfelim>/g, sub, context, true);
            /**
             * Maximum field current limiter signal reference (V<sub>HMAX</sub>).
             * Typical Value = 75.
             */
            obj["vhmax"] = base.parse_element (/<cim:ExcIEEEAC6A.vhmax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vhmax>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 44.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC6A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -36.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC6A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC6A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC6A;
            if (null == bucket)
                context.parsed.ExcIEEEAC6A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modification of an old IEEE ST1A static excitation system without overexcitation limiter (OEL) and underexcitation limiter (UEL).
         */
        function parse_ExcST1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST1A";
            /**
             * Exciter output current limit reference (Ilr).
             * Typical Value = 0.
             */
            obj["ilr"] = base.parse_element (/<cim:ExcST1A.ilr>([\s\S]*?)<\/cim:ExcST1A.ilr>/g, sub, context, true);
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 190.
             */
            obj["ka"] = base.parse_element (/<cim:ExcST1A.ka>([\s\S]*?)<\/cim:ExcST1A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.05.
             */
            obj["kc"] = base.parse_element (/<cim:ExcST1A.kc>([\s\S]*?)<\/cim:ExcST1A.kc>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.
             */
            obj["kf"] = base.parse_element (/<cim:ExcST1A.kf>([\s\S]*?)<\/cim:ExcST1A.kf>/g, sub, context, true);
            /**
             * Exciter output current limiter gain (Klr).
             * Typical Value = 0.
             */
            obj["klr"] = base.parse_element (/<cim:ExcST1A.klr>([\s\S]*?)<\/cim:ExcST1A.klr>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcST1A.ta>([\s\S]*?)<\/cim:ExcST1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcST1A.tb>([\s\S]*?)<\/cim:ExcST1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb<sub>1</sub>).
             * Typical Value = 0.
             */
            obj["tb1"] = base.parse_element (/<cim:ExcST1A.tb1>([\s\S]*?)<\/cim:ExcST1A.tb1>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcST1A.tc>([\s\S]*?)<\/cim:ExcST1A.tc>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc<sub>1</sub>).
             * Typical Value = 0.
             */
            obj["tc1"] = base.parse_element (/<cim:ExcST1A.tc1>([\s\S]*?)<\/cim:ExcST1A.tc1>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcST1A.tf>([\s\S]*?)<\/cim:ExcST1A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vamax).
             * Typical Value = 999.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcST1A.vamax>([\s\S]*?)<\/cim:ExcST1A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vamin).
             * Typical Value = -999.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcST1A.vamin>([\s\S]*?)<\/cim:ExcST1A.vamin>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (Vimax).
             * Typical Value = 999.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcST1A.vimax>([\s\S]*?)<\/cim:ExcST1A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (Vimin).
             * Typical Value = -999.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcST1A.vimin>([\s\S]*?)<\/cim:ExcST1A.vimin>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (Vrmax).
             * Typical Value = 7.8.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST1A.vrmax>([\s\S]*?)<\/cim:ExcST1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (Vrmin).
             * Typical Value = -6.7.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST1A.vrmin>([\s\S]*?)<\/cim:ExcST1A.vrmin>/g, sub, context, true);
            /**
             * Excitation xfmr effective reactance (Xe).
             * Typical Value = 0.04.
             */
            obj["xe"] = base.parse_element (/<cim:ExcST1A.xe>([\s\S]*?)<\/cim:ExcST1A.xe>/g, sub, context, true);
            bucket = context.parsed.ExcST1A;
            if (null == bucket)
                context.parsed.ExcST1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Static PI transformer fed excitation system: ELIN (VATECH) - simplified model.
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  A power system stabilizer with power input is included in the model.
         */
        function parse_ExcELIN1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcELIN1";
            /**
             * Controller follow up dead band (Dpnf).
             * Typical Value = 0.
             */
            obj["dpnf"] = base.parse_element (/<cim:ExcELIN1.dpnf>([\s\S]*?)<\/cim:ExcELIN1.dpnf>/g, sub, context, true);
            /**
             * Maximum open circuit excitation voltage (Efmax).
             * Typical Value = 5.
             */
            obj["efmax"] = base.parse_element (/<cim:ExcELIN1.efmax>([\s\S]*?)<\/cim:ExcELIN1.efmax>/g, sub, context, true);
            /**
             * Minimum open circuit excitation voltage (Efmin).
             * Typical Value = -5.
             */
            obj["efmin"] = base.parse_element (/<cim:ExcELIN1.efmin>([\s\S]*?)<\/cim:ExcELIN1.efmin>/g, sub, context, true);
            /**
             * Stabilizer Gain 1 (Ks1).
             * Typical Value = 0.
             */
            obj["ks1"] = base.parse_element (/<cim:ExcELIN1.ks1>([\s\S]*?)<\/cim:ExcELIN1.ks1>/g, sub, context, true);
            /**
             * Stabilizer Gain 2 (Ks2).
             * Typical Value = 0.
             */
            obj["ks2"] = base.parse_element (/<cim:ExcELIN1.ks2>([\s\S]*?)<\/cim:ExcELIN1.ks2>/g, sub, context, true);
            /**
             * Stabilizer Limit Output (smax).
             * Typical Value = 0.1.
             */
            obj["smax"] = base.parse_element (/<cim:ExcELIN1.smax>([\s\S]*?)<\/cim:ExcELIN1.smax>/g, sub, context, true);
            /**
             * Current transducer time constant (Tfi).
             * Typical Value = 0.
             */
            obj["tfi"] = base.parse_element (/<cim:ExcELIN1.tfi>([\s\S]*?)<\/cim:ExcELIN1.tfi>/g, sub, context, true);
            /**
             * Controller reset time constant (Tnu).
             * Typical Value = 2.
             */
            obj["tnu"] = base.parse_element (/<cim:ExcELIN1.tnu>([\s\S]*?)<\/cim:ExcELIN1.tnu>/g, sub, context, true);
            /**
             * Stabilizer Phase Lag Time Constant (Ts1).
             * Typical Value = 1.
             */
            obj["ts1"] = base.parse_element (/<cim:ExcELIN1.ts1>([\s\S]*?)<\/cim:ExcELIN1.ts1>/g, sub, context, true);
            /**
             * Stabilizer Filter Time Constant (Ts2).
             * Typical Value = 1.
             */
            obj["ts2"] = base.parse_element (/<cim:ExcELIN1.ts2>([\s\S]*?)<\/cim:ExcELIN1.ts2>/g, sub, context, true);
            /**
             * Stabilizer parameters (Tsw).
             * Typical Value = 3.
             */
            obj["tsw"] = base.parse_element (/<cim:ExcELIN1.tsw>([\s\S]*?)<\/cim:ExcELIN1.tsw>/g, sub, context, true);
            /**
             * Current controller gain (Vpi).
             * Typical Value = 12.45.
             */
            obj["vpi"] = base.parse_element (/<cim:ExcELIN1.vpi>([\s\S]*?)<\/cim:ExcELIN1.vpi>/g, sub, context, true);
            /**
             * Controller follow up gain (Vpnf).
             * Typical Value = 2.
             */
            obj["vpnf"] = base.parse_element (/<cim:ExcELIN1.vpnf>([\s\S]*?)<\/cim:ExcELIN1.vpnf>/g, sub, context, true);
            /**
             * Voltage controller proportional gain (Vpu).
             * Typical Value = 34.5.
             */
            obj["vpu"] = base.parse_element (/<cim:ExcELIN1.vpu>([\s\S]*?)<\/cim:ExcELIN1.vpu>/g, sub, context, true);
            /**
             * Excitation transformer effective reactance (Xe) (&gt;=0).
             * Xe represents the regulation of the transformer/rectifier unit.  Typical Value = 0.06.
             */
            obj["xe"] = base.parse_element (/<cim:ExcELIN1.xe>([\s\S]*?)<\/cim:ExcELIN1.xe>/g, sub, context, true);
            bucket = context.parsed.ExcELIN1;
            if (null == bucket)
                context.parsed.ExcELIN1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian excitation system.
         * It represents static exciter and electric voltage regulator.
         */
        function parse_ExcAVR4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR4";
            /**
             * AVR output voltage dependency selector (Imul).
            true = selector is connected
            false = selector is not connected.
             * Typical Value = true.
             */
            obj["imul"] = base.to_boolean (base.parse_element (/<cim:ExcAVR4.imul>([\s\S]*?)<\/cim:ExcAVR4.imul>/g, sub, context, true));
            /**
             * AVR gain (K<sub>A</sub>).
             * Typical Value = 300.
             */
            obj["ka"] = base.to_float (base.parse_element (/<cim:ExcAVR4.ka>([\s\S]*?)<\/cim:ExcAVR4.ka>/g, sub, context, true));
            /**
             * Exciter gain (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.to_float (base.parse_element (/<cim:ExcAVR4.ke>([\s\S]*?)<\/cim:ExcAVR4.ke>/g, sub, context, true));
            /**
             * Exciter internal reactance (K<sub>IF</sub>).
             * Typical Value = 0.
             */
            obj["kif"] = base.to_float (base.parse_element (/<cim:ExcAVR4.kif>([\s\S]*?)<\/cim:ExcAVR4.kif>/g, sub, context, true));
            /**
             * AVR time constant (T<sub>1</sub>).
             * Typical Value = 4.8.
             */
            obj["t1"] = base.parse_element (/<cim:ExcAVR4.t1>([\s\S]*?)<\/cim:ExcAVR4.t1>/g, sub, context, true);
            /**
             * Exciter current feedback time constant (T<sub>1IF</sub>).
             * Typical Value = 60.
             */
            obj["t1if"] = base.parse_element (/<cim:ExcAVR4.t1if>([\s\S]*?)<\/cim:ExcAVR4.t1if>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>2</sub>).
             * Typical Value = 1.5.
             */
            obj["t2"] = base.parse_element (/<cim:ExcAVR4.t2>([\s\S]*?)<\/cim:ExcAVR4.t2>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>3</sub>).
             * Typical Value = 0.
             */
            obj["t3"] = base.parse_element (/<cim:ExcAVR4.t3>([\s\S]*?)<\/cim:ExcAVR4.t3>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>4</sub>).
             * Typical Value = 0.
             */
            obj["t4"] = base.parse_element (/<cim:ExcAVR4.t4>([\s\S]*?)<\/cim:ExcAVR4.t4>/g, sub, context, true);
            /**
             * Exciter current feedback time constant (T<sub>IF</sub>).
             * Typical Value = 0.
             */
            obj["tif"] = base.parse_element (/<cim:ExcAVR4.tif>([\s\S]*?)<\/cim:ExcAVR4.tif>/g, sub, context, true);
            /**
             * Minimum exciter output (V<sub>FMN</sub>).
             * Typical Value = 0.
             */
            obj["vfmn"] = base.parse_element (/<cim:ExcAVR4.vfmn>([\s\S]*?)<\/cim:ExcAVR4.vfmn>/g, sub, context, true);
            /**
             * Maximum exciter output (V<sub>FMX</sub>).
             * Typical Value = 5.
             */
            obj["vfmx"] = base.parse_element (/<cim:ExcAVR4.vfmx>([\s\S]*?)<\/cim:ExcAVR4.vfmx>/g, sub, context, true);
            /**
             * Minimum AVR output (V<sub>RMN</sub>).
             * Typical Value = 0.
             */
            obj["vrmn"] = base.parse_element (/<cim:ExcAVR4.vrmn>([\s\S]*?)<\/cim:ExcAVR4.vrmn>/g, sub, context, true);
            /**
             * Maximum AVR output (V<sub>RMX</sub>).
             * Typical Value = 5.
             */
            obj["vrmx"] = base.parse_element (/<cim:ExcAVR4.vrmx>([\s\S]*?)<\/cim:ExcAVR4.vrmx>/g, sub, context, true);
            bucket = context.parsed.ExcAVR4;
            if (null == bucket)
                context.parsed.ExcAVR4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST3A model.
         * Some static systems utilize a field voltage control loop to linearize the exciter control characteristic. This also makes the output independent of supply source variations until supply limitations are reached.  These systems utilize a variety of controlled-rectifier designs: full thyristor complements or hybrid bridges
         */
        function parse_ExcIEEEST3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST3A";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * This is parameter K in the IEEE Std. Typical Value = 200.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEST3A.ka>([\s\S]*?)<\/cim:ExcIEEEST3A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.2.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEST3A.kc>([\s\S]*?)<\/cim:ExcIEEEST3A.kc>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (K<sub>G</sub>).
             * Typical Value = 1.
             */
            obj["kg"] = base.parse_element (/<cim:ExcIEEEST3A.kg>([\s\S]*?)<\/cim:ExcIEEEST3A.kg>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>I</sub>).
             * Typical Value = 0.
             */
            obj["ki"] = base.parse_element (/<cim:ExcIEEEST3A.ki>([\s\S]*?)<\/cim:ExcIEEEST3A.ki>/g, sub, context, true);
            /**
             * Forward gain constant of the inner loop field regulator (K<sub>M</sub>).
             * Typical Value = 7.93.
             */
            obj["km"] = base.parse_element (/<cim:ExcIEEEST3A.km>([\s\S]*?)<\/cim:ExcIEEEST3A.km>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>P</sub>).
             * Typical Value = 6.15.
             */
            obj["kp"] = base.parse_element (/<cim:ExcIEEEST3A.kp>([\s\S]*?)<\/cim:ExcIEEEST3A.kp>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEST3A.ta>([\s\S]*?)<\/cim:ExcIEEEST3A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEST3A.tb>([\s\S]*?)<\/cim:ExcIEEEST3A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEST3A.tc>([\s\S]*?)<\/cim:ExcIEEEST3A.tc>/g, sub, context, true);
            /**
             * Potential circuit phase angle (thetap).
             * Typical Value = 0.
             */
            obj["thetap"] = base.parse_element (/<cim:ExcIEEEST3A.thetap>([\s\S]*?)<\/cim:ExcIEEEST3A.thetap>/g, sub, context, true);
            /**
             * Forward time constant of inner loop field regulator (T<sub>M</sub>).
             * Typical Value = 0.4.
             */
            obj["tm"] = base.parse_element (/<cim:ExcIEEEST3A.tm>([\s\S]*?)<\/cim:ExcIEEEST3A.tm>/g, sub, context, true);
            /**
             * Maximum excitation voltage (V<sub>BMax</sub>).
             * Typical Value = 6.9.
             */
            obj["vbmax"] = base.parse_element (/<cim:ExcIEEEST3A.vbmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vbmax>/g, sub, context, true);
            /**
             * Maximum inner loop feedback voltage (V<sub>GMax</sub>).
             * Typical Value = 5.8.
             */
            obj["vgmax"] = base.parse_element (/<cim:ExcIEEEST3A.vgmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vgmax>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (V<sub>IMAX</sub>).
             * Typical Value = 0.2.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcIEEEST3A.vimax>([\s\S]*?)<\/cim:ExcIEEEST3A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (V<sub>IMIN</sub>).
             * Typical Value = -0.2.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcIEEEST3A.vimin>([\s\S]*?)<\/cim:ExcIEEEST3A.vimin>/g, sub, context, true);
            /**
             * Maximum inner loop output (V<sub>MMax</sub>).
             * Typical Value = 1.
             */
            obj["vmmax"] = base.parse_element (/<cim:ExcIEEEST3A.vmmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vmmax>/g, sub, context, true);
            /**
             * Minimum inner loop output (V<sub>MMin</sub>).
             * Typical Value = 0.
             */
            obj["vmmin"] = base.parse_element (/<cim:ExcIEEEST3A.vmmin>([\s\S]*?)<\/cim:ExcIEEEST3A.vmmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 10.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST3A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -10.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST3A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST3A.vrmin>/g, sub, context, true);
            /**
             * Reactance associated with potential source (X<sub>L</sub>).
             * Typical Value = 0.081.
             */
            obj["xl"] = base.parse_element (/<cim:ExcIEEEST3A.xl>([\s\S]*?)<\/cim:ExcIEEEST3A.xl>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST3A;
            if (null == bucket)
                context.parsed.ExcIEEEST3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE DC2A direct current commutator exciters with speed input, one more leg block in feedback loop and without underexcitation limiters (UEL) inputs.
         * DC type 2 excitation system model with added speed multiplier, added lead-lag, and voltage-dependent limits.
         */
        function parse_ExcDC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC2A";
            /**
             * Exciter voltage at which exciter saturation is defined (Efd1).
             * Typical Value = 3.05.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcDC2A.efd1>([\s\S]*?)<\/cim:ExcDC2A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd2).
             * Typical Value = 2.29.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcDC2A.efd2>([\s\S]*?)<\/cim:ExcDC2A.efd2>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcDC2A.exclim>([\s\S]*?)<\/cim:ExcDC2A.exclim>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 300.
             */
            obj["ka"] = base.parse_element (/<cim:ExcDC2A.ka>([\s\S]*?)<\/cim:ExcDC2A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * If Ke is entered as zero, the model calculates an effective value of Ke such that the initial condition value of Vr is zero. The zero value of Ke is not changed.  If Ke is entered as non-zero, its value is used directly, without change.  Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcDC2A.ke>([\s\S]*?)<\/cim:ExcDC2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (Kf).
             * Typical Value = 0.1.
             */
            obj["kf"] = base.parse_element (/<cim:ExcDC2A.kf>([\s\S]*?)<\/cim:ExcDC2A.kf>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcDC2A.ks>([\s\S]*?)<\/cim:ExcDC2A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd1 (Se[Eefd1]).
             * Typical Value = 0.279.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcDC2A.seefd1>([\s\S]*?)<\/cim:ExcDC2A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd2 (Se[Efd2]).
             * Typical Value = 0.117.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcDC2A.seefd2>([\s\S]*?)<\/cim:ExcDC2A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.01.
             */
            obj["ta"] = base.parse_element (/<cim:ExcDC2A.ta>([\s\S]*?)<\/cim:ExcDC2A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcDC2A.tb>([\s\S]*?)<\/cim:ExcDC2A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcDC2A.tc>([\s\S]*?)<\/cim:ExcDC2A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.33.
             */
            obj["te"] = base.parse_element (/<cim:ExcDC2A.te>([\s\S]*?)<\/cim:ExcDC2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 0.675.
             */
            obj["tf"] = base.parse_element (/<cim:ExcDC2A.tf>([\s\S]*?)<\/cim:ExcDC2A.tf>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf1).
             * Typical Value = 0.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcDC2A.tf1>([\s\S]*?)<\/cim:ExcDC2A.tf1>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 4.95.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcDC2A.vrmax>([\s\S]*?)<\/cim:ExcDC2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -4.9.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcDC2A.vrmin>([\s\S]*?)<\/cim:ExcDC2A.vrmin>/g, sub, context, true);
            /**
             * (Vtlim).
            true = limiter at the block [Ka/(1+sTa)] is dependent on Vt 
            false = limiter at the block is not dependent on Vt.
             * Typical Value = true.
             */
            obj["vtlim"] = base.to_boolean (base.parse_element (/<cim:ExcDC2A.vtlim>([\s\S]*?)<\/cim:ExcDC2A.vtlim>/g, sub, context, true));
            bucket = context.parsed.ExcDC2A;
            if (null == bucket)
                context.parsed.ExcDC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 1 Model.
         * It represents exciter dynamo and electromechanical regulator.
         */
        function parse_ExcAVR1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR1";
            /**
             * Field voltage value 1  (E1).
             * Typical Value = 4.18.
             */
            obj["e1"] = base.parse_element (/<cim:ExcAVR1.e1>([\s\S]*?)<\/cim:ExcAVR1.e1>/g, sub, context, true);
            /**
             * Field voltage value 2 (E2).
             * Typical Value = 3.14.
             */
            obj["e2"] = base.parse_element (/<cim:ExcAVR1.e2>([\s\S]*?)<\/cim:ExcAVR1.e2>/g, sub, context, true);
            /**
             * AVR gain (K<sub>A</sub>).
             * Typical Value = 500.
             */
            obj["ka"] = base.to_float (base.parse_element (/<cim:ExcAVR1.ka>([\s\S]*?)<\/cim:ExcAVR1.ka>/g, sub, context, true));
            /**
             * Rate feedback gain (K<sub>F</sub>).
             * Typical Value = 0.12.
             */
            obj["kf"] = base.to_float (base.parse_element (/<cim:ExcAVR1.kf>([\s\S]*?)<\/cim:ExcAVR1.kf>/g, sub, context, true));
            /**
             * Saturation factor at E1 (S(E1)).
             * Typical Value = 0.1.
             */
            obj["se1"] = base.to_float (base.parse_element (/<cim:ExcAVR1.se1>([\s\S]*?)<\/cim:ExcAVR1.se1>/g, sub, context, true));
            /**
             * Saturation factor at E2 (S(E2)).
             * Typical Value = 0.03.
             */
            obj["se2"] = base.to_float (base.parse_element (/<cim:ExcAVR1.se2>([\s\S]*?)<\/cim:ExcAVR1.se2>/g, sub, context, true));
            /**
             * AVR time constant (T<sub>A</sub>).
             * Typical Value = 0.2.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAVR1.ta>([\s\S]*?)<\/cim:ExcAVR1.ta>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAVR1.tb>([\s\S]*?)<\/cim:ExcAVR1.tb>/g, sub, context, true);
            /**
             * Exciter time constant (T<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["te"] = base.parse_element (/<cim:ExcAVR1.te>([\s\S]*?)<\/cim:ExcAVR1.te>/g, sub, context, true);
            /**
             * Rate feedback time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcAVR1.tf>([\s\S]*?)<\/cim:ExcAVR1.tf>/g, sub, context, true);
            /**
             * Minimum AVR output (V<sub>RMN</sub>).
             * Typical Value = -6.
             */
            obj["vrmn"] = base.parse_element (/<cim:ExcAVR1.vrmn>([\s\S]*?)<\/cim:ExcAVR1.vrmn>/g, sub, context, true);
            /**
             * Maximum AVR output (V<sub>RMX</sub>).
             * Typical Value = 7.
             */
            obj["vrmx"] = base.parse_element (/<cim:ExcAVR1.vrmx>([\s\S]*?)<\/cim:ExcAVR1.vrmx>/g, sub, context, true);
            bucket = context.parsed.ExcAVR1;
            if (null == bucket)
                context.parsed.ExcAVR1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST6B model.
         * This model consists of a PI voltage regulator with an inner loop field voltage regulator and pre-control. The field voltage regulator implements a proportional control. The pre-control and the delay in the feedback circuit increase the dynamic response.
         */
        function parse_ExcIEEEST6B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST6B";
            /**
             * Exciter output current limit reference (I<sub>LR</sub>).
             * Typical Value = 4.164.
             */
            obj["ilr"] = base.parse_element (/<cim:ExcIEEEST6B.ilr>([\s\S]*?)<\/cim:ExcIEEEST6B.ilr>/g, sub, context, true);
            /**
             * Exciter output current limit adjustment (K<sub>CI</sub>).
             * Typical Value = 1.0577.
             */
            obj["kci"] = base.parse_element (/<cim:ExcIEEEST6B.kci>([\s\S]*?)<\/cim:ExcIEEEST6B.kci>/g, sub, context, true);
            /**
             * Pre-control gain constant of the inner loop field regulator (K<sub>FF</sub>).
             * Typical Value = 1.
             */
            obj["kff"] = base.parse_element (/<cim:ExcIEEEST6B.kff>([\s\S]*?)<\/cim:ExcIEEEST6B.kff>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (K<sub>G</sub>).
             * Typical Value = 1.
             */
            obj["kg"] = base.parse_element (/<cim:ExcIEEEST6B.kg>([\s\S]*?)<\/cim:ExcIEEEST6B.kg>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IA</sub>).
             * Typical Value = 45.094.
             */
            obj["kia"] = base.parse_element (/<cim:ExcIEEEST6B.kia>([\s\S]*?)<\/cim:ExcIEEEST6B.kia>/g, sub, context, true);
            /**
             * Exciter output current limiter gain (K<sub>LR</sub>).
             * Typical Value = 17.33.
             */
            obj["klr"] = base.parse_element (/<cim:ExcIEEEST6B.klr>([\s\S]*?)<\/cim:ExcIEEEST6B.klr>/g, sub, context, true);
            /**
             * Forward gain constant of the inner loop field regulator (K<sub>M</sub>).
             * Typical Value = 1.
             */
            obj["km"] = base.parse_element (/<cim:ExcIEEEST6B.km>([\s\S]*?)<\/cim:ExcIEEEST6B.km>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PA</sub>).
             * Typical Value = 18.038.
             */
            obj["kpa"] = base.parse_element (/<cim:ExcIEEEST6B.kpa>([\s\S]*?)<\/cim:ExcIEEEST6B.kpa>/g, sub, context, true);
            /**
             * OEL input selector (OELin).
             * Typical Value = noOELinput.
             */
            obj["oelin"] = base.parse_element (/<cim:ExcIEEEST6B.oelin>([\s\S]*?)<\/cim:ExcIEEEST6B.oelin>/g, sub, context, true);
            /**
             * Feedback time constant of inner loop field voltage regulator (T<sub>G</sub>).
             * Typical Value = 0.02.
             */
            obj["tg"] = base.parse_element (/<cim:ExcIEEEST6B.tg>([\s\S]*?)<\/cim:ExcIEEEST6B.tg>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 4.81.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEST6B.vamax>([\s\S]*?)<\/cim:ExcIEEEST6B.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -3.85.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEST6B.vamin>([\s\S]*?)<\/cim:ExcIEEEST6B.vamin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 4.81.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST6B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -3.85.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST6B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST6B;
            if (null == bucket)
                context.parsed.ExcIEEEST6B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Excitation system function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         */
        function parse_ExcitationSystemDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "ExcitationSystemDynamics";
            /**
             * Power system stabilizer model associated with this excitation system model.
             */
            obj["PowerSystemStabilizerDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Undrexcitation limiter model associated with this excitation system model.
             */
            obj["UnderexcitationLimiterDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Discontinuous excitation control model associated with this excitation system model.
             */
            obj["DiscontinuousExcitationControlDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Power Factor or VAr controller Type I model associated with this excitation system model.
             */
            obj["PFVArControllerType1Dynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Synchronous machine model with which this excitation system model is associated.
             */
            obj["SynchronousMachineDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Voltage compensator model associated with this excitation system model.
             */
            obj["VoltageCompensatorDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Overexcitation limiter model associated with this excitation system model.
             */
            obj["OverexcitationLimiterDynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.OverexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            /**
             * Power Factor or VAr controller Type II model associated with this excitation system model.
             */
            obj["PFVArControllerType2Dynamics"] = base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ExcitationSystemDynamics;
            if (null == bucket)
                context.parsed.ExcitationSystemDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC1A model.
         * This model represents field-controlled dc commutator exciters with continuously acting voltage regulators (especially the direct-acting rheostatic, rotating amplifier, and magnetic amplifier types).  Because this model has been widely implemented by the industry, it is sometimes used to represent other types of systems when detailed data for them are not available or when a simplified model is required.
         */
        function parse_ExcIEEEDC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC1A";
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD1</sub>).
             * Typical Value = 3.1.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcIEEEDC1A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC1A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD2</sub>).
             * Typical Value = 2.3.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcIEEEDC1A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC1A.efd2>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC1A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC1A.exclim>/g, sub, context, true));
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 46.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEDC1A.ka>([\s\S]*?)<\/cim:ExcIEEEDC1A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 0.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEDC1A.ke>([\s\S]*?)<\/cim:ExcIEEEDC1A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F</sub>).
             * Typical Value = 0.1.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEDC1A.kf>([\s\S]*?)<\/cim:ExcIEEEDC1A.kf>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD1</sub> (S<sub>E</sub>[E<sub>FD1</sub>]).
             * Typical Value = 0.33.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC1A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC1A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD2</sub> (S<sub>E</sub>[E<sub>FD2</sub>]).
             * Typical Value = 0.1.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC1A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC1A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.06.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEDC1A.ta>([\s\S]*?)<\/cim:ExcIEEEDC1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEDC1A.tb>([\s\S]*?)<\/cim:ExcIEEEDC1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEDC1A.tc>([\s\S]*?)<\/cim:ExcIEEEDC1A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.46.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEDC1A.te>([\s\S]*?)<\/cim:ExcIEEEDC1A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEDC1A.tf>([\s\S]*?)<\/cim:ExcIEEEDC1A.tf>/g, sub, context, true);
            /**
             * UEL input (uelin).
            true = input is connected to the HV gate
            false = input connects to the error signal.
             * Typical Value = true.
             */
            obj["uelin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC1A.uelin>([\s\S]*?)<\/cim:ExcIEEEDC1A.uelin>/g, sub, context, true));
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEDC1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -0.9.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEDC1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC1A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEDC1A;
            if (null == bucket)
                context.parsed.ExcIEEEDC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simple excitation system model representing generic characteristics of many excitation systems; intended for use where negative field current may be a problem.
         */
        function parse_ExcSCRX (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSCRX";
            /**
             * Power source switch (Cswitch).
            true = fixed voltage of 1.0 PU
             * false = generator terminal voltage.
             */
            obj["cswitch"] = base.to_boolean (base.parse_element (/<cim:ExcSCRX.cswitch>([\s\S]*?)<\/cim:ExcSCRX.cswitch>/g, sub, context, true));
            /**
             * Maximum field voltage output (Emax).
             * Typical Value = 5.
             */
            obj["emax"] = base.parse_element (/<cim:ExcSCRX.emax>([\s\S]*?)<\/cim:ExcSCRX.emax>/g, sub, context, true);
            /**
             * Minimum field voltage output (Emin).
             * Typical Value = 0.
             */
            obj["emin"] = base.parse_element (/<cim:ExcSCRX.emin>([\s\S]*?)<\/cim:ExcSCRX.emin>/g, sub, context, true);
            /**
             * Gain (K) (&gt;0).
             * Typical Value = 200.
             */
            obj["k"] = base.parse_element (/<cim:ExcSCRX.k>([\s\S]*?)<\/cim:ExcSCRX.k>/g, sub, context, true);
            /**
             * Rc/Rfd - ratio of field discharge resistance to field winding resistance (RcRfd).
             * Typical Value = 0.
             */
            obj["rcrfd"] = base.to_float (base.parse_element (/<cim:ExcSCRX.rcrfd>([\s\S]*?)<\/cim:ExcSCRX.rcrfd>/g, sub, context, true));
            /**
             * Ta/Tb - gain reduction ratio of lag-lead element (TaTb).
             * The parameter Ta is not defined explicitly.  Typical Value = 0.1.
             */
            obj["tatb"] = base.to_float (base.parse_element (/<cim:ExcSCRX.tatb>([\s\S]*?)<\/cim:ExcSCRX.tatb>/g, sub, context, true));
            /**
             * Denominator time constant of lag-lead block (Tb).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcSCRX.tb>([\s\S]*?)<\/cim:ExcSCRX.tb>/g, sub, context, true);
            /**
             * Time constant of gain block (Te) (&gt;0).
             * Typical Value = 0.02.
             */
            obj["te"] = base.parse_element (/<cim:ExcSCRX.te>([\s\S]*?)<\/cim:ExcSCRX.te>/g, sub, context, true);
            bucket = context.parsed.ExcSCRX;
            if (null == bucket)
                context.parsed.ExcSCRX = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC4B model.
         * These excitation systems utilize a field-controlled dc commutator exciter with a continuously acting voltage regulator having supplies obtained from the generator or auxiliary bus.
         */
        function parse_ExcIEEEDC4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC4B";
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD1</sub>).
             * Typical Value = 1.75.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcIEEEDC4B.efd1>([\s\S]*?)<\/cim:ExcIEEEDC4B.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD2</sub>).
             * Typical Value = 2.33.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcIEEEDC4B.efd2>([\s\S]*?)<\/cim:ExcIEEEDC4B.efd2>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 1.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEDC4B.ka>([\s\S]*?)<\/cim:ExcIEEEDC4B.ka>/g, sub, context, true);
            /**
             * Regulator derivative gain (K<sub>D</sub>).
             * Typical Value = 20.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEDC4B.kd>([\s\S]*?)<\/cim:ExcIEEEDC4B.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEDC4B.ke>([\s\S]*?)<\/cim:ExcIEEEDC4B.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F</sub>).
             * Typical Value = 0.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEDC4B.kf>([\s\S]*?)<\/cim:ExcIEEEDC4B.kf>/g, sub, context, true);
            /**
             * Regulator integral gain (K<sub>I</sub>).
             * Typical Value = 20.
             */
            obj["ki"] = base.parse_element (/<cim:ExcIEEEDC4B.ki>([\s\S]*?)<\/cim:ExcIEEEDC4B.ki>/g, sub, context, true);
            /**
             * Regulator proportional gain (K<sub>P</sub>).
             * Typical Value = 20.
             */
            obj["kp"] = base.parse_element (/<cim:ExcIEEEDC4B.kp>([\s\S]*?)<\/cim:ExcIEEEDC4B.kp>/g, sub, context, true);
            /**
             * OEL input (OELin).
            true = LV gate
            false = subtract from error signal.
             * Typical Value = true.
             */
            obj["oelin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC4B.oelin>([\s\S]*?)<\/cim:ExcIEEEDC4B.oelin>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD1</sub> (S<sub>E</sub>[E<sub>FD1</sub>]).
             * Typical Value = 0.08.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC4B.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC4B.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD2</sub> (S<sub>E</sub>[E<sub>FD2</sub>]).
             * Typical Value = 0.27.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC4B.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC4B.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.2.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEDC4B.ta>([\s\S]*?)<\/cim:ExcIEEEDC4B.ta>/g, sub, context, true);
            /**
             * Regulator derivative filter time constant(T<sub>D</sub>).
             * Typical Value = 0.01.
             */
            obj["td"] = base.parse_element (/<cim:ExcIEEEDC4B.td>([\s\S]*?)<\/cim:ExcIEEEDC4B.td>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.8.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEDC4B.te>([\s\S]*?)<\/cim:ExcIEEEDC4B.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEDC4B.tf>([\s\S]*?)<\/cim:ExcIEEEDC4B.tf>/g, sub, context, true);
            /**
             * UEL input (UELin).
            true = HV gate
            false = add to error signal.
             * Typical Value = true.
             */
            obj["uelin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC4B.uelin>([\s\S]*?)<\/cim:ExcIEEEDC4B.uelin>/g, sub, context, true));
            /**
             * Minimum exciter voltage output(V<sub>EMIN</sub>).
             * Typical Value = 0.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcIEEEDC4B.vemin>([\s\S]*?)<\/cim:ExcIEEEDC4B.vemin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 2.7.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEDC4B.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC4B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -0.9.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEDC4B.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC4B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEDC4B;
            if (null == bucket)
                context.parsed.ExcIEEEDC4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC3A model.
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC3A. These excitation systems include an alternator main exciter with non-controlled rectifiers. The exciter employs self-excitation, and the voltage regulator power is derived from the exciter output voltage.  Therefore, this system has an additional nonlinearity, simulated by the use of a multiplier
         */
        function parse_ExcIEEEAC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC3A";
            /**
             * Value of <i>EFD </i>at which feedback gain changes (E<sub>FDN</sub>).
             * Typical Value = 2.36.
             */
            obj["efdn"] = base.parse_element (/<cim:ExcIEEEAC3A.efdn>([\s\S]*?)<\/cim:ExcIEEEAC3A.efdn>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 45.62.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC3A.ka>([\s\S]*?)<\/cim:ExcIEEEAC3A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.104.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC3A.kc>([\s\S]*?)<\/cim:ExcIEEEAC3A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 0.499.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC3A.kd>([\s\S]*?)<\/cim:ExcIEEEAC3A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC3A.ke>([\s\S]*?)<\/cim:ExcIEEEAC3A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.143.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEAC3A.kf>([\s\S]*?)<\/cim:ExcIEEEAC3A.kf>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>N</sub>).
             * Typical Value = 0.05.
             */
            obj["kn"] = base.parse_element (/<cim:ExcIEEEAC3A.kn>([\s\S]*?)<\/cim:ExcIEEEAC3A.kn>/g, sub, context, true);
            /**
             * Constant associated with regulator and alternator field power supply (K<sub>R</sub>).
             * Typical Value = 3.77.
             */
            obj["kr"] = base.parse_element (/<cim:ExcIEEEAC3A.kr>([\s\S]*?)<\/cim:ExcIEEEAC3A.kr>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 1.143.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC3A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC3A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 0.1.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC3A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC3A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.013.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC3A.ta>([\s\S]*?)<\/cim:ExcIEEEAC3A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEAC3A.tb>([\s\S]*?)<\/cim:ExcIEEEAC3A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEAC3A.tc>([\s\S]*?)<\/cim:ExcIEEEAC3A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 1.17.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC3A.te>([\s\S]*?)<\/cim:ExcIEEEAC3A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEAC3A.tf>([\s\S]*?)<\/cim:ExcIEEEAC3A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 1.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEAC3A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC3A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -0.95.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEAC3A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC3A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>) equals V<sub>EMAX </sub>(V<sub>E1</sub>).
             * Typical Value = 6.24.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC3A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC3A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 4.68.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC3A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC3A.ve2>/g, sub, context, true);
            /**
             * Minimum exciter voltage output (V<sub>EMIN</sub>).
             * Typical Value = 0.1.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcIEEEAC3A.vemin>([\s\S]*?)<\/cim:ExcIEEEAC3A.vemin>/g, sub, context, true);
            /**
             * Exciter field current limit reference (V<sub>FEMAX</sub>).
             * Typical Value = 16.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcIEEEAC3A.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC3A.vfemax>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC3A;
            if (null == bucket)
                context.parsed.ExcIEEEAC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Manual excitation control with field circuit resistance.
         * This model can be used as a very simple representation of manual voltage control.
         */
        function parse_ExcAVR5 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR5";
            /**
             * Gain (Ka).
             */
            obj["ka"] = base.parse_element (/<cim:ExcAVR5.ka>([\s\S]*?)<\/cim:ExcAVR5.ka>/g, sub, context, true);
            /**
             * Effective Output Resistance (Rex).
             * Rex represents the effective output resistance seen by the excitation system.
             */
            obj["rex"] = base.parse_element (/<cim:ExcAVR5.rex>([\s\S]*?)<\/cim:ExcAVR5.rex>/g, sub, context, true);
            /**
             * Time constant (Ta).
             */
            obj["ta"] = base.parse_element (/<cim:ExcAVR5.ta>([\s\S]*?)<\/cim:ExcAVR5.ta>/g, sub, context, true);
            bucket = context.parsed.ExcAVR5;
            if (null == bucket)
                context.parsed.ExcAVR5 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE ST2A static excitation system - another lead-lag block added to match  the model defined by WECC.
         */
        function parse_ExcST2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST2A";
            /**
             * Maximum field voltage (Efdmax).
             * Typical Value = 99.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcST2A.efdmax>([\s\S]*?)<\/cim:ExcST2A.efdmax>/g, sub, context, true);
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 120.
             */
            obj["ka"] = base.parse_element (/<cim:ExcST2A.ka>([\s\S]*?)<\/cim:ExcST2A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 1.82.
             */
            obj["kc"] = base.parse_element (/<cim:ExcST2A.kc>([\s\S]*?)<\/cim:ExcST2A.kc>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcST2A.ke>([\s\S]*?)<\/cim:ExcST2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.05.
             */
            obj["kf"] = base.parse_element (/<cim:ExcST2A.kf>([\s\S]*?)<\/cim:ExcST2A.kf>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Ki).
             * Typical Value = 8.
             */
            obj["ki"] = base.parse_element (/<cim:ExcST2A.ki>([\s\S]*?)<\/cim:ExcST2A.ki>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Kp).
             * Typical Value = 4.88.
             */
            obj["kp"] = base.parse_element (/<cim:ExcST2A.kp>([\s\S]*?)<\/cim:ExcST2A.kp>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.15.
             */
            obj["ta"] = base.parse_element (/<cim:ExcST2A.ta>([\s\S]*?)<\/cim:ExcST2A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcST2A.tb>([\s\S]*?)<\/cim:ExcST2A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcST2A.tc>([\s\S]*?)<\/cim:ExcST2A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 0.5.
             */
            obj["te"] = base.parse_element (/<cim:ExcST2A.te>([\s\S]*?)<\/cim:ExcST2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 0.7.
             */
            obj["tf"] = base.parse_element (/<cim:ExcST2A.tf>([\s\S]*?)<\/cim:ExcST2A.tf>/g, sub, context, true);
            /**
             * UEL input (UELin).
            true = HV gate
            false = add to error signal.
             * Typical Value = false.
             */
            obj["uelin"] = base.to_boolean (base.parse_element (/<cim:ExcST2A.uelin>([\s\S]*?)<\/cim:ExcST2A.uelin>/g, sub, context, true));
            /**
             * Maximum voltage regulator outputs (Vrmax).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST2A.vrmax>([\s\S]*?)<\/cim:ExcST2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (Vrmin).
             * Typical Value = -1.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST2A.vrmin>([\s\S]*?)<\/cim:ExcST2A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcST2A;
            if (null == bucket)
                context.parsed.ExcST2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Detailed Excitation System Model - ELIN (VATECH).
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  Power system stabilizer models used in conjunction with this excitation system model: PssELIN2, PssIEEE2B, Pss2B.
         */
        function parse_ExcELIN2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcELIN2";
            /**
             * Gain (Efdbas).
             * Typical Value = 0.1.
             */
            obj["efdbas"] = base.parse_element (/<cim:ExcELIN2.efdbas>([\s\S]*?)<\/cim:ExcELIN2.efdbas>/g, sub, context, true);
            /**
             * Limiter (Iefmax).
             * Typical Value = 1.
             */
            obj["iefmax"] = base.parse_element (/<cim:ExcELIN2.iefmax>([\s\S]*?)<\/cim:ExcELIN2.iefmax>/g, sub, context, true);
            /**
             * Minimum open circuit excitation voltage (Iefmax2).
             * Typical Value = -5.
             */
            obj["iefmax2"] = base.parse_element (/<cim:ExcELIN2.iefmax2>([\s\S]*?)<\/cim:ExcELIN2.iefmax2>/g, sub, context, true);
            /**
             * Limiter (Iefmin).
             * Typical Value = 1.
             */
            obj["iefmin"] = base.parse_element (/<cim:ExcELIN2.iefmin>([\s\S]*?)<\/cim:ExcELIN2.iefmin>/g, sub, context, true);
            /**
             * Voltage regulator input gain (K1).
             * Typical Value = 0.
             */
            obj["k1"] = base.parse_element (/<cim:ExcELIN2.k1>([\s\S]*?)<\/cim:ExcELIN2.k1>/g, sub, context, true);
            /**
             * Voltage regulator input limit (K1ec).
             * Typical Value = 2.
             */
            obj["k1ec"] = base.parse_element (/<cim:ExcELIN2.k1ec>([\s\S]*?)<\/cim:ExcELIN2.k1ec>/g, sub, context, true);
            /**
             * Gain (K2).
             * Typical Value = 5.
             */
            obj["k2"] = base.parse_element (/<cim:ExcELIN2.k2>([\s\S]*?)<\/cim:ExcELIN2.k2>/g, sub, context, true);
            /**
             * Gain (K3).
             * Typical Value = 0.1.
             */
            obj["k3"] = base.parse_element (/<cim:ExcELIN2.k3>([\s\S]*?)<\/cim:ExcELIN2.k3>/g, sub, context, true);
            /**
             * Gain (K4).
             * Typical Value = 0.
             */
            obj["k4"] = base.parse_element (/<cim:ExcELIN2.k4>([\s\S]*?)<\/cim:ExcELIN2.k4>/g, sub, context, true);
            /**
             * Voltage controller derivative gain (Kd1).
             * Typical Value = 34.5.
             */
            obj["kd1"] = base.parse_element (/<cim:ExcELIN2.kd1>([\s\S]*?)<\/cim:ExcELIN2.kd1>/g, sub, context, true);
            /**
             * Gain (Ke2).
             * Typical Value = 0.1.
             */
            obj["ke2"] = base.parse_element (/<cim:ExcELIN2.ke2>([\s\S]*?)<\/cim:ExcELIN2.ke2>/g, sub, context, true);
            /**
             * Gain (Ketb).
             * Typical Value = 0.06.
             */
            obj["ketb"] = base.parse_element (/<cim:ExcELIN2.ketb>([\s\S]*?)<\/cim:ExcELIN2.ketb>/g, sub, context, true);
            /**
             * Controller follow up gain (PID1max).
             * Typical Value = 2.
             */
            obj["pid1max"] = base.parse_element (/<cim:ExcELIN2.pid1max>([\s\S]*?)<\/cim:ExcELIN2.pid1max>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve1, back of commutating reactance (Se[Ve1]).
             * Typical Value = 0.
             */
            obj["seve1"] = base.parse_element (/<cim:ExcELIN2.seve1>([\s\S]*?)<\/cim:ExcELIN2.seve1>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve2, back of commutating reactance (Se[Ve2]).
             * Typical Value = 1.
             */
            obj["seve2"] = base.parse_element (/<cim:ExcELIN2.seve2>([\s\S]*?)<\/cim:ExcELIN2.seve2>/g, sub, context, true);
            /**
             * Voltage controller derivative washout time constant (Tb1).
             * Typical Value = 12.45.
             */
            obj["tb1"] = base.parse_element (/<cim:ExcELIN2.tb1>([\s\S]*?)<\/cim:ExcELIN2.tb1>/g, sub, context, true);
            /**
             * Time constant (Te).
             * Typical Value = 0.
             */
            obj["te"] = base.parse_element (/<cim:ExcELIN2.te>([\s\S]*?)<\/cim:ExcELIN2.te>/g, sub, context, true);
            /**
             * Time Constant (Te2).
             * Typical Value = 1.
             */
            obj["te2"] = base.parse_element (/<cim:ExcELIN2.te2>([\s\S]*?)<\/cim:ExcELIN2.te2>/g, sub, context, true);
            /**
             * Controller follow up dead band (Ti1).
             * Typical Value = 0.
             */
            obj["ti1"] = base.parse_element (/<cim:ExcELIN2.ti1>([\s\S]*?)<\/cim:ExcELIN2.ti1>/g, sub, context, true);
            /**
             * Time constant (Ti3).
             * Typical Value = 3.
             */
            obj["ti3"] = base.parse_element (/<cim:ExcELIN2.ti3>([\s\S]*?)<\/cim:ExcELIN2.ti3>/g, sub, context, true);
            /**
             * Time constant (Ti4).
             * Typical Value = 0.
             */
            obj["ti4"] = base.parse_element (/<cim:ExcELIN2.ti4>([\s\S]*?)<\/cim:ExcELIN2.ti4>/g, sub, context, true);
            /**
             * Time constant (Tr4).
             * Typical Value = 1.
             */
            obj["tr4"] = base.parse_element (/<cim:ExcELIN2.tr4>([\s\S]*?)<\/cim:ExcELIN2.tr4>/g, sub, context, true);
            /**
             * Limiter (Upmax).
             * Typical Value = 3.
             */
            obj["upmax"] = base.parse_element (/<cim:ExcELIN2.upmax>([\s\S]*?)<\/cim:ExcELIN2.upmax>/g, sub, context, true);
            /**
             * Limiter (Upmin).
             * Typical Value = 0.
             */
            obj["upmin"] = base.parse_element (/<cim:ExcELIN2.upmin>([\s\S]*?)<\/cim:ExcELIN2.upmin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve1).
             * Typical Value = 3.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcELIN2.ve1>([\s\S]*?)<\/cim:ExcELIN2.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve2).
             * Typical Value = 0.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcELIN2.ve2>([\s\S]*?)<\/cim:ExcELIN2.ve2>/g, sub, context, true);
            /**
             * Excitation transformer effective reactance (Xp).
             * Typical Value = 1.
             */
            obj["xp"] = base.parse_element (/<cim:ExcELIN2.xp>([\s\S]*?)<\/cim:ExcELIN2.xp>/g, sub, context, true);
            bucket = context.parsed.ExcELIN2;
            if (null == bucket)
                context.parsed.ExcELIN2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC3A model.
         * This model represents represent older systems, in particular those dc commutator exciters with non-continuously acting regulators that were commonly used before the development of the continuously acting varieties.  These systems respond at basically two different rates, depending upon the magnitude of voltage error. For small errors, adjustment is made periodically with a signal to a motor-operated rheostat. Larger errors cause resistors to be quickly shorted or inserted and a strong forcing signal applied to the exciter. Continuous motion of the motor-operated rheostat occurs for these larger error signals, even though it is bypassed by contactor action.
         */
        function parse_ExcIEEEDC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC3A";
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD1</sub>).
             * Typical Value = 3.375.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcIEEEDC3A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC3A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD2</sub>).
             * Typical Value = 3.15.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcIEEEDC3A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC3A.efd2>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC3A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC3A.exclim>/g, sub, context, true));
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 0.05.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEDC3A.ke>([\s\S]*?)<\/cim:ExcIEEEDC3A.ke>/g, sub, context, true);
            /**
             * Fast raise/lower contact setting (K<sub>V</sub>).
             * Typical Value = 0.05.
             */
            obj["kv"] = base.parse_element (/<cim:ExcIEEEDC3A.kv>([\s\S]*?)<\/cim:ExcIEEEDC3A.kv>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD1</sub> (S<sub>E</sub>[E<sub>FD1</sub>]).
             * Typical Value = 0.267.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC3A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC3A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD2</sub> (S<sub>E</sub>[E<sub>FD2</sub>]).
             * Typical Value = 0.068.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC3A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC3A.seefd2>/g, sub, context, true));
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.5.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEDC3A.te>([\s\S]*?)<\/cim:ExcIEEEDC3A.te>/g, sub, context, true);
            /**
             * Rheostat travel time (T<sub>RH</sub>).
             * Typical Value = 20.
             */
            obj["trh"] = base.parse_element (/<cim:ExcIEEEDC3A.trh>([\s\S]*?)<\/cim:ExcIEEEDC3A.trh>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEDC3A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC3A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEDC3A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC3A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEDC3A;
            if (null == bucket)
                context.parsed.ExcIEEEDC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC2A model.
         * The model represents a high initial response field-controlled alternator-rectifier excitation system. The alternator main exciter is used with non-controlled rectifiers. The Type AC2A model is similar to that of Type AC1A except for the inclusion of exciter time constant compensation and exciter field current limiting elements.
         */
        function parse_ExcIEEEAC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC2A";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC2A.ka>([\s\S]*?)<\/cim:ExcIEEEAC2A.ka>/g, sub, context, true);
            /**
             * Second stage regulator gain (K<sub>B</sub>).
             * Typical Value = 25.
             */
            obj["kb"] = base.parse_element (/<cim:ExcIEEEAC2A.kb>([\s\S]*?)<\/cim:ExcIEEEAC2A.kb>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.28.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC2A.kc>([\s\S]*?)<\/cim:ExcIEEEAC2A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 0.35.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC2A.kd>([\s\S]*?)<\/cim:ExcIEEEAC2A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC2A.ke>([\s\S]*?)<\/cim:ExcIEEEAC2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEAC2A.kf>([\s\S]*?)<\/cim:ExcIEEEAC2A.kf>/g, sub, context, true);
            /**
             * Exciter field current feedback gain (K<sub>H</sub>).
             * Typical Value = 1.
             */
            obj["kh"] = base.parse_element (/<cim:ExcIEEEAC2A.kh>([\s\S]*?)<\/cim:ExcIEEEAC2A.kh>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 0.037.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC2A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC2A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 0.012.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC2A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC2A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC2A.ta>([\s\S]*?)<\/cim:ExcIEEEAC2A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEAC2A.tb>([\s\S]*?)<\/cim:ExcIEEEAC2A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEAC2A.tc>([\s\S]*?)<\/cim:ExcIEEEAC2A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.6.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC2A.te>([\s\S]*?)<\/cim:ExcIEEEAC2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEAC2A.tf>([\s\S]*?)<\/cim:ExcIEEEAC2A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 8.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEAC2A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -8.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEAC2A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC2A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>).
             * Typical Value = 4.4.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC2A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC2A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 3.3.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC2A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC2A.ve2>/g, sub, context, true);
            /**
             * Exciter field current limit reference (V<sub>FEMAX</sub>).
             * Typical Value = 4.4.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcIEEEAC2A.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vfemax>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (V<sub>RMAX</sub>).
             * Typical Value = 105.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (V<sub>RMIN</sub>).
             * Typical Value = -95.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC2A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC2A;
            if (null == bucket)
                context.parsed.ExcIEEEAC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC1A alternator-supplied rectifier excitation system with different rate feedback source.
         */
        function parse_ExcAC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC1A";
            /**
             * Indicates if both HV gate and LV gate are active (HVLVgates).
            true = gates are used
            false = gates are not used.
             * Typical Value = true.
             */
            obj["hvlvgates"] = base.to_boolean (base.parse_element (/<cim:ExcAC1A.hvlvgates>([\s\S]*?)<\/cim:ExcAC1A.hvlvgates>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC1A.ka>([\s\S]*?)<\/cim:ExcAC1A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.2.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC1A.kc>([\s\S]*?)<\/cim:ExcAC1A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (Kd).
             * Typical Value = 0.38.
             */
            obj["kd"] = base.parse_element (/<cim:ExcAC1A.kd>([\s\S]*?)<\/cim:ExcAC1A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC1A.ke>([\s\S]*?)<\/cim:ExcAC1A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcAC1A.kf>([\s\S]*?)<\/cim:ExcAC1A.kf>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model (Kf1).
             * Typical Value = 0.
             */
            obj["kf1"] = base.parse_element (/<cim:ExcAC1A.kf1>([\s\S]*?)<\/cim:ExcAC1A.kf1>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model (Kf2).
             * Typical Value = 1.
             */
            obj["kf2"] = base.parse_element (/<cim:ExcAC1A.kf2>([\s\S]*?)<\/cim:ExcAC1A.kf2>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC1A.ks>([\s\S]*?)<\/cim:ExcAC1A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve1, back of commutating reactance (Se[Ve1]).
             * Typical Value = 0.1.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcAC1A.seve1>([\s\S]*?)<\/cim:ExcAC1A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve2, back of commutating reactance (Se[Ve2]).
             * Typical Value = 0.03.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcAC1A.seve2>([\s\S]*?)<\/cim:ExcAC1A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC1A.ta>([\s\S]*?)<\/cim:ExcAC1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC1A.tb>([\s\S]*?)<\/cim:ExcAC1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>c</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC1A.tc>([\s\S]*?)<\/cim:ExcAC1A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 0.8.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC1A.te>([\s\S]*?)<\/cim:ExcAC1A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcAC1A.tf>([\s\S]*?)<\/cim:ExcAC1A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>amax</sub>).
             * Typical Value = 14.5.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcAC1A.vamax>([\s\S]*?)<\/cim:ExcAC1A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>amin</sub>).
             * Typical Value = -14.5.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcAC1A.vamin>([\s\S]*?)<\/cim:ExcAC1A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve1).
             * Typical Value = 4.18.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcAC1A.ve1>([\s\S]*?)<\/cim:ExcAC1A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve2).
             * Typical Value = 3.14.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcAC1A.ve2>([\s\S]*?)<\/cim:ExcAC1A.ve2>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (Vrmax).
             * Typical Value = 6.03.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC1A.vrmax>([\s\S]*?)<\/cim:ExcAC1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (Rrmin).
             * Typical Value = -5.43.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC1A.vrmin>([\s\S]*?)<\/cim:ExcAC1A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcAC1A;
            if (null == bucket)
                context.parsed.ExcAC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of connection for the OEL input used for static excitation systems type 6B.
         */
        function parse_ExcST6BOELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST6BOELselectorKind";
            /**
             * No OEL input is used.
             */
            obj["noOELinput"] = base.parse_element (/<cim:ExcST6BOELselectorKind.noOELinput>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.noOELinput>/g, sub, context, true);
            /**
             * The connection is before UEL.
             */
            obj["beforeUEL"] = base.parse_element (/<cim:ExcST6BOELselectorKind.beforeUEL>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.beforeUEL>/g, sub, context, true);
            /**
             * The connection is after UEL.
             */
            obj["afterUEL"] = base.parse_element (/<cim:ExcST6BOELselectorKind.afterUEL>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.afterUEL>/g, sub, context, true);
            bucket = context.parsed.ExcST6BOELselectorKind;
            if (null == bucket)
                context.parsed.ExcST6BOELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Simplified Excitation System Model.
         */
        function parse_ExcSEXS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSEXS";
            /**
             * Field voltage clipping maximum limit (Efdmax).
             * Typical Value = 5.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcSEXS.efdmax>([\s\S]*?)<\/cim:ExcSEXS.efdmax>/g, sub, context, true);
            /**
             * Field voltage clipping minimum limit (Efdmin).
             * Typical Value = -5.
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcSEXS.efdmin>([\s\S]*?)<\/cim:ExcSEXS.efdmin>/g, sub, context, true);
            /**
             * Maximum field voltage output (Emax).
             * Typical Value = 5.
             */
            obj["emax"] = base.parse_element (/<cim:ExcSEXS.emax>([\s\S]*?)<\/cim:ExcSEXS.emax>/g, sub, context, true);
            /**
             * Minimum field voltage output (Emin).
             * Typical Value = -5.
             */
            obj["emin"] = base.parse_element (/<cim:ExcSEXS.emin>([\s\S]*?)<\/cim:ExcSEXS.emin>/g, sub, context, true);
            /**
             * Gain (K) (&gt;0).
             * Typical Value = 100.
             */
            obj["k"] = base.parse_element (/<cim:ExcSEXS.k>([\s\S]*?)<\/cim:ExcSEXS.k>/g, sub, context, true);
            /**
             * PI controller gain (Kc).
             * Typical Value = 0.08.
             */
            obj["kc"] = base.parse_element (/<cim:ExcSEXS.kc>([\s\S]*?)<\/cim:ExcSEXS.kc>/g, sub, context, true);
            /**
             * Ta/Tb - gain reduction ratio of lag-lead element (TaTb).
             * Typical Value = 0.1.
             */
            obj["tatb"] = base.to_float (base.parse_element (/<cim:ExcSEXS.tatb>([\s\S]*?)<\/cim:ExcSEXS.tatb>/g, sub, context, true));
            /**
             * Denominator time constant of lag-lead block (Tb).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcSEXS.tb>([\s\S]*?)<\/cim:ExcSEXS.tb>/g, sub, context, true);
            /**
             * PI controller phase lead time constant (Tc).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcSEXS.tc>([\s\S]*?)<\/cim:ExcSEXS.tc>/g, sub, context, true);
            /**
             * Time constant of gain block (Te).
             * Typical Value = 0.05.
             */
            obj["te"] = base.parse_element (/<cim:ExcSEXS.te>([\s\S]*?)<\/cim:ExcSEXS.te>/g, sub, context, true);
            bucket = context.parsed.ExcSEXS;
            if (null == bucket)
                context.parsed.ExcSEXS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 2 Model.
         * It represents alternator and rotating diodes and electromechanic voltage regulators.
         */
        function parse_ExcAVR2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR2";
            /**
             * Field voltage value 1 (E1).
             * Typical Value = 4.18.
             */
            obj["e1"] = base.parse_element (/<cim:ExcAVR2.e1>([\s\S]*?)<\/cim:ExcAVR2.e1>/g, sub, context, true);
            /**
             * Field voltage value 2 (E2).
             * Typical Value = 3.14.
             */
            obj["e2"] = base.parse_element (/<cim:ExcAVR2.e2>([\s\S]*?)<\/cim:ExcAVR2.e2>/g, sub, context, true);
            /**
             * AVR gain (K<sub>A</sub>).
             * Typical Value = 500.
             */
            obj["ka"] = base.to_float (base.parse_element (/<cim:ExcAVR2.ka>([\s\S]*?)<\/cim:ExcAVR2.ka>/g, sub, context, true));
            /**
             * Rate feedback gain (K<sub>F</sub>).
             * Typical Value = 0.12.
             */
            obj["kf"] = base.to_float (base.parse_element (/<cim:ExcAVR2.kf>([\s\S]*?)<\/cim:ExcAVR2.kf>/g, sub, context, true));
            /**
             * Saturation factor at E1 (S(E1)).
             * Typical Value = 0.1.
             */
            obj["se1"] = base.to_float (base.parse_element (/<cim:ExcAVR2.se1>([\s\S]*?)<\/cim:ExcAVR2.se1>/g, sub, context, true));
            /**
             * Saturation factor at E2 (S(E2)).
             * Typical Value = 0.03.
             */
            obj["se2"] = base.to_float (base.parse_element (/<cim:ExcAVR2.se2>([\s\S]*?)<\/cim:ExcAVR2.se2>/g, sub, context, true));
            /**
             * AVR time constant (T<sub>A</sub>).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAVR2.ta>([\s\S]*?)<\/cim:ExcAVR2.ta>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAVR2.tb>([\s\S]*?)<\/cim:ExcAVR2.tb>/g, sub, context, true);
            /**
             * Exciter time constant (T<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["te"] = base.parse_element (/<cim:ExcAVR2.te>([\s\S]*?)<\/cim:ExcAVR2.te>/g, sub, context, true);
            /**
             * Rate feedback time constant (T<sub>F1</sub>).
             * Typical Value = 1.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcAVR2.tf1>([\s\S]*?)<\/cim:ExcAVR2.tf1>/g, sub, context, true);
            /**
             * Rate feedback time constant (T<sub>F2</sub>).
             * Typical Value = 1.
             */
            obj["tf2"] = base.parse_element (/<cim:ExcAVR2.tf2>([\s\S]*?)<\/cim:ExcAVR2.tf2>/g, sub, context, true);
            /**
             * Minimum AVR output (V<sub>RMN</sub>).
             * Typical Value = -6.
             */
            obj["vrmn"] = base.parse_element (/<cim:ExcAVR2.vrmn>([\s\S]*?)<\/cim:ExcAVR2.vrmn>/g, sub, context, true);
            /**
             * Maximum AVR output (V<sub>RMX</sub>).
             * Typical Value = 7.
             */
            obj["vrmx"] = base.parse_element (/<cim:ExcAVR2.vrmx>([\s\S]*?)<\/cim:ExcAVR2.vrmx>/g, sub, context, true);
            bucket = context.parsed.ExcAVR2;
            if (null == bucket)
                context.parsed.ExcAVR2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is modified IEEE DC3A direct current commutator exciters with speed input, and death band.
         * DC old type 4.
         */
        function parse_ExcDC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC3A";
            /**
             * Maximum voltage exciter output limiter (Efdmax).
             * Typical Value = 99.
             */
            obj["edfmax"] = base.parse_element (/<cim:ExcDC3A.edfmax>([\s\S]*?)<\/cim:ExcDC3A.edfmax>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd1).
             * Typical Value = 2.6.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcDC3A.efd1>([\s\S]*?)<\/cim:ExcDC3A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd2).
             * Typical Value = 3.45.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcDC3A.efd2>([\s\S]*?)<\/cim:ExcDC3A.efd2>/g, sub, context, true);
            /**
             * (Efdlim).
            true = exciter output limiter is active
            false = exciter output limiter not active.
             * Typical Value = true.
             */
            obj["efdlim"] = base.to_boolean (base.parse_element (/<cim:ExcDC3A.efdlim>([\s\S]*?)<\/cim:ExcDC3A.efdlim>/g, sub, context, true));
            /**
             * Minimum voltage exciter output limiter (Efdmin).
             * Typical Value = -99.
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcDC3A.efdmin>([\s\S]*?)<\/cim:ExcDC3A.efdmin>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcDC3A.exclim>([\s\S]*?)<\/cim:ExcDC3A.exclim>/g, sub, context, true));
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcDC3A.ke>([\s\S]*?)<\/cim:ExcDC3A.ke>/g, sub, context, true);
            /**
             * Death band (Kr).
             * If Kr is not zero, the voltage regulator input changes at a constant rate if Verr &gt; Kr or Verr &lt; -Kr as per the IEEE (1968) Type 4 model. If Kr is zero, the error signal drives the voltage regulator continuously as per the IEEE (1980) DC3 and IEEE (1992, 2005) DC3A models.  Typical Value = 0.
             */
            obj["kr"] = base.parse_element (/<cim:ExcDC3A.kr>([\s\S]*?)<\/cim:ExcDC3A.kr>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcDC3A.ks>([\s\S]*?)<\/cim:ExcDC3A.ks>/g, sub, context, true);
            /**
             * Fast raise/lower contact setting (Kv).
             * Typical Value = 0.05.
             */
            obj["kv"] = base.parse_element (/<cim:ExcDC3A.kv>([\s\S]*?)<\/cim:ExcDC3A.kv>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd1 (Se[Eefd1]).
             * Typical Value = 0.1.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcDC3A.seefd1>([\s\S]*?)<\/cim:ExcDC3A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd2 (Se[Efd2]).
             * Typical Value = 0.35.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcDC3A.seefd2>([\s\S]*?)<\/cim:ExcDC3A.seefd2>/g, sub, context, true));
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.83.
             */
            obj["te"] = base.parse_element (/<cim:ExcDC3A.te>([\s\S]*?)<\/cim:ExcDC3A.te>/g, sub, context, true);
            /**
             * Rheostat travel time (Trh).
             * Typical Value = 20.
             */
            obj["trh"] = base.parse_element (/<cim:ExcDC3A.trh>([\s\S]*?)<\/cim:ExcDC3A.trh>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcDC3A.vrmax>([\s\S]*?)<\/cim:ExcDC3A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcDC3A.vrmin>([\s\S]*?)<\/cim:ExcDC3A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcDC3A;
            if (null == bucket)
                context.parsed.ExcDC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE ST6B static excitation system with PID controller and optional inner feedbacks loop.
         */
        function parse_ExcST6B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST6B";
            /**
             * Exciter output current limit reference (Ilr).
             * Typical Value = 4.164.
             */
            obj["ilr"] = base.parse_element (/<cim:ExcST6B.ilr>([\s\S]*?)<\/cim:ExcST6B.ilr>/g, sub, context, true);
            /**
             * Selector (K1).
            true = feedback is from Ifd
            false = feedback is not from Ifd.
             * Typical Value = true.
             */
            obj["k1"] = base.to_boolean (base.parse_element (/<cim:ExcST6B.k1>([\s\S]*?)<\/cim:ExcST6B.k1>/g, sub, context, true));
            /**
             * Exciter output current limit adjustment (Kcl).
             * Typical Value = 1.0577.
             */
            obj["kcl"] = base.parse_element (/<cim:ExcST6B.kcl>([\s\S]*?)<\/cim:ExcST6B.kcl>/g, sub, context, true);
            /**
             * Pre-control gain constant of the inner loop field regulator (Kff).
             * Typical Value = 1.
             */
            obj["kff"] = base.parse_element (/<cim:ExcST6B.kff>([\s\S]*?)<\/cim:ExcST6B.kff>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (Kg).
             * Typical Value = 1.
             */
            obj["kg"] = base.parse_element (/<cim:ExcST6B.kg>([\s\S]*?)<\/cim:ExcST6B.kg>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (Kia).
             * Typical Value = 45.094.
             */
            obj["kia"] = base.parse_element (/<cim:ExcST6B.kia>([\s\S]*?)<\/cim:ExcST6B.kia>/g, sub, context, true);
            /**
             * Exciter output current limit adjustment (Kcl).
             * Typical Value = 17.33.
             */
            obj["klr"] = base.parse_element (/<cim:ExcST6B.klr>([\s\S]*?)<\/cim:ExcST6B.klr>/g, sub, context, true);
            /**
             * Forward gain constant of the inner loop field regulator (Km).
             * Typical Value = 1.
             */
            obj["km"] = base.parse_element (/<cim:ExcST6B.km>([\s\S]*?)<\/cim:ExcST6B.km>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (Kpa).
             * Typical Value = 18.038.
             */
            obj["kpa"] = base.parse_element (/<cim:ExcST6B.kpa>([\s\S]*?)<\/cim:ExcST6B.kpa>/g, sub, context, true);
            /**
             * Voltage regulator derivative gain (Kvd).
             * Typical Value = 0.
             */
            obj["kvd"] = base.parse_element (/<cim:ExcST6B.kvd>([\s\S]*?)<\/cim:ExcST6B.kvd>/g, sub, context, true);
            /**
             * OEL input selector (OELin).
             * Typical Value = noOELinput.
             */
            obj["oelin"] = base.parse_element (/<cim:ExcST6B.oelin>([\s\S]*?)<\/cim:ExcST6B.oelin>/g, sub, context, true);
            /**
             * Feedback time constant of inner loop field voltage regulator (Tg).
             * Typical Value = 0.02.
             */
            obj["tg"] = base.parse_element (/<cim:ExcST6B.tg>([\s\S]*?)<\/cim:ExcST6B.tg>/g, sub, context, true);
            /**
             * Rectifier firing time constant (Ts).
             * Typical Value = 0.
             */
            obj["ts"] = base.parse_element (/<cim:ExcST6B.ts>([\s\S]*?)<\/cim:ExcST6B.ts>/g, sub, context, true);
            /**
             * Voltage regulator derivative gain (Tvd).
             * Typical Value = 0.
             */
            obj["tvd"] = base.parse_element (/<cim:ExcST6B.tvd>([\s\S]*?)<\/cim:ExcST6B.tvd>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vamax).
             * Typical Value = 4.81.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcST6B.vamax>([\s\S]*?)<\/cim:ExcST6B.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vamin).
             * Typical Value = -3.85.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcST6B.vamin>([\s\S]*?)<\/cim:ExcST6B.vamin>/g, sub, context, true);
            /**
             * Selector (Vilim).
            true = Vimin-Vimax limiter is active
            false = Vimin-Vimax limiter is not active.
             * Typical Value = true.
             */
            obj["vilim"] = base.to_boolean (base.parse_element (/<cim:ExcST6B.vilim>([\s\S]*?)<\/cim:ExcST6B.vilim>/g, sub, context, true));
            /**
             * Maximum voltage regulator input limit (Vimax).
             * Typical Value = 10.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcST6B.vimax>([\s\S]*?)<\/cim:ExcST6B.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (Vimin).
             * Typical Value = -10.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcST6B.vimin>([\s\S]*?)<\/cim:ExcST6B.vimin>/g, sub, context, true);
            /**
             * Selector (Vmult).
            true = multiply regulator output by terminal voltage
            false = do not multiply regulator output by terminal voltage.
             * Typical Value = true.
             */
            obj["vmult"] = base.to_boolean (base.parse_element (/<cim:ExcST6B.vmult>([\s\S]*?)<\/cim:ExcST6B.vmult>/g, sub, context, true));
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 4.81.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST6B.vrmax>([\s\S]*?)<\/cim:ExcST6B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -3.85.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST6B.vrmin>([\s\S]*?)<\/cim:ExcST6B.vrmin>/g, sub, context, true);
            /**
             * Excitation source reactance (Xc).
             * Typical Value = 0.05.
             */
            obj["xc"] = base.parse_element (/<cim:ExcST6B.xc>([\s\S]*?)<\/cim:ExcST6B.xc>/g, sub, context, true);
            bucket = context.parsed.ExcST6B;
            if (null == bucket)
                context.parsed.ExcST6B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Proportional/Integral Regulator Excitation System Model.
         * This model can be used to represent excitation systems with a proportional-integral (PI) voltage regulator controller.
         */
        function parse_ExcPIC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcPIC";
            /**
             * Field voltage value 1 (E1).
             * Typical Value = 0.
             */
            obj["e1"] = base.parse_element (/<cim:ExcPIC.e1>([\s\S]*?)<\/cim:ExcPIC.e1>/g, sub, context, true);
            /**
             * Field voltage value 2 (E2).
             * Typical Value = 0.
             */
            obj["e2"] = base.parse_element (/<cim:ExcPIC.e2>([\s\S]*?)<\/cim:ExcPIC.e2>/g, sub, context, true);
            /**
             * Exciter maximum limit (Efdmax).
             * Typical Value = 8.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcPIC.efdmax>([\s\S]*?)<\/cim:ExcPIC.efdmax>/g, sub, context, true);
            /**
             * Exciter minimum limit (Efdmin).
             * Typical Value = -0.87.
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcPIC.efdmin>([\s\S]*?)<\/cim:ExcPIC.efdmin>/g, sub, context, true);
            /**
             * PI controller gain (Ka).
             * Typical Value = 3.15.
             */
            obj["ka"] = base.parse_element (/<cim:ExcPIC.ka>([\s\S]*?)<\/cim:ExcPIC.ka>/g, sub, context, true);
            /**
             * Exciter regulation factor (Kc).
             * Typical Value = 0.08.
             */
            obj["kc"] = base.parse_element (/<cim:ExcPIC.kc>([\s\S]*?)<\/cim:ExcPIC.kc>/g, sub, context, true);
            /**
             * Exciter constant (Ke).
             * Typical Value = 0.
             */
            obj["ke"] = base.parse_element (/<cim:ExcPIC.ke>([\s\S]*?)<\/cim:ExcPIC.ke>/g, sub, context, true);
            /**
             * Rate feedback gain (Kf).
             * Typical Value = 0.
             */
            obj["kf"] = base.parse_element (/<cim:ExcPIC.kf>([\s\S]*?)<\/cim:ExcPIC.kf>/g, sub, context, true);
            /**
             * Current source gain (Ki).
             * Typical Value = 0.
             */
            obj["ki"] = base.parse_element (/<cim:ExcPIC.ki>([\s\S]*?)<\/cim:ExcPIC.ki>/g, sub, context, true);
            /**
             * Potential source gain (Kp).
             * Typical Value = 6.5.
             */
            obj["kp"] = base.parse_element (/<cim:ExcPIC.kp>([\s\S]*?)<\/cim:ExcPIC.kp>/g, sub, context, true);
            /**
             * Saturation factor at E1 (Se1).
             * Typical Value = 0.
             */
            obj["se1"] = base.parse_element (/<cim:ExcPIC.se1>([\s\S]*?)<\/cim:ExcPIC.se1>/g, sub, context, true);
            /**
             * Saturation factor at E2 (Se2).
             * Typical Value = 0.
             */
            obj["se2"] = base.parse_element (/<cim:ExcPIC.se2>([\s\S]*?)<\/cim:ExcPIC.se2>/g, sub, context, true);
            /**
             * PI controller time constant (Ta1).
             * Typical Value = 1.
             */
            obj["ta1"] = base.parse_element (/<cim:ExcPIC.ta1>([\s\S]*?)<\/cim:ExcPIC.ta1>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Ta2).
             * Typical Value = 0.01.
             */
            obj["ta2"] = base.parse_element (/<cim:ExcPIC.ta2>([\s\S]*?)<\/cim:ExcPIC.ta2>/g, sub, context, true);
            /**
             * Lead time constant (Ta3).
             * Typical Value = 0.
             */
            obj["ta3"] = base.parse_element (/<cim:ExcPIC.ta3>([\s\S]*?)<\/cim:ExcPIC.ta3>/g, sub, context, true);
            /**
             * Lag time constant (Ta4).
             * Typical Value = 0.
             */
            obj["ta4"] = base.parse_element (/<cim:ExcPIC.ta4>([\s\S]*?)<\/cim:ExcPIC.ta4>/g, sub, context, true);
            /**
             * Exciter time constant (Te).
             * Typical Value = 0.
             */
            obj["te"] = base.parse_element (/<cim:ExcPIC.te>([\s\S]*?)<\/cim:ExcPIC.te>/g, sub, context, true);
            /**
             * Rate feedback time constant (Tf1).
             * Typical Value = 0.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcPIC.tf1>([\s\S]*?)<\/cim:ExcPIC.tf1>/g, sub, context, true);
            /**
             * Rate feedback lag time constant (Tf2).
             * Typical Value = 0.
             */
            obj["tf2"] = base.parse_element (/<cim:ExcPIC.tf2>([\s\S]*?)<\/cim:ExcPIC.tf2>/g, sub, context, true);
            /**
             * PI maximum limit (Vr1).
             * Typical Value = 1.
             */
            obj["vr1"] = base.parse_element (/<cim:ExcPIC.vr1>([\s\S]*?)<\/cim:ExcPIC.vr1>/g, sub, context, true);
            /**
             * PI minimum limit (Vr2).
             * Typical Value = -0.87.
             */
            obj["vr2"] = base.parse_element (/<cim:ExcPIC.vr2>([\s\S]*?)<\/cim:ExcPIC.vr2>/g, sub, context, true);
            /**
             * Voltage regulator maximum limit (Vrmax).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcPIC.vrmax>([\s\S]*?)<\/cim:ExcPIC.vrmax>/g, sub, context, true);
            /**
             * Voltage regulator minimum limit (Vrmin).
             * Typical Value = -0.87.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcPIC.vrmin>([\s\S]*?)<\/cim:ExcPIC.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcPIC;
            if (null == bucket)
                context.parsed.ExcPIC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Czech Proportion/Integral Exciter.
         */
        function parse_ExcCZ (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcCZ";
            /**
             * Exciter output maximum limit (Efdmax).
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcCZ.efdmax>([\s\S]*?)<\/cim:ExcCZ.efdmax>/g, sub, context, true);
            /**
             * Exciter output minimum limit (Efdmin).
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcCZ.efdmin>([\s\S]*?)<\/cim:ExcCZ.efdmin>/g, sub, context, true);
            /**
             * Regulator gain (Ka).
             */
            obj["ka"] = base.parse_element (/<cim:ExcCZ.ka>([\s\S]*?)<\/cim:ExcCZ.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             */
            obj["ke"] = base.parse_element (/<cim:ExcCZ.ke>([\s\S]*?)<\/cim:ExcCZ.ke>/g, sub, context, true);
            /**
             * Regulator proportional gain (Kp).
             */
            obj["kp"] = base.parse_element (/<cim:ExcCZ.kp>([\s\S]*?)<\/cim:ExcCZ.kp>/g, sub, context, true);
            /**
             * Regulator time constant (Ta).
             */
            obj["ta"] = base.parse_element (/<cim:ExcCZ.ta>([\s\S]*?)<\/cim:ExcCZ.ta>/g, sub, context, true);
            /**
             * Regulator integral time constant (Tc).
             */
            obj["tc"] = base.parse_element (/<cim:ExcCZ.tc>([\s\S]*?)<\/cim:ExcCZ.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             */
            obj["te"] = base.parse_element (/<cim:ExcCZ.te>([\s\S]*?)<\/cim:ExcCZ.te>/g, sub, context, true);
            /**
             * Voltage regulator maximum limit (Vrmax).
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcCZ.vrmax>([\s\S]*?)<\/cim:ExcCZ.vrmax>/g, sub, context, true);
            /**
             * Voltage regulator minimum limit (Vrmin).
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcCZ.vrmin>([\s\S]*?)<\/cim:ExcCZ.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcCZ;
            if (null == bucket)
                context.parsed.ExcCZ = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC8B alternator-supplied rectifier excitation system with speed input and input limiter.
         */
        function parse_ExcAC8B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC8B";
            /**
             * Input limiter indicator.
            true = input limiter Vimax and Vimin is considered
            false = input limiter Vimax and Vimin is not considered.
             * Typical Value = true.
             */
            obj["inlim"] = base.to_boolean (base.parse_element (/<cim:ExcAC8B.inlim>([\s\S]*?)<\/cim:ExcAC8B.inlim>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 1.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC8B.ka>([\s\S]*?)<\/cim:ExcAC8B.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.55.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC8B.kc>([\s\S]*?)<\/cim:ExcAC8B.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (Kd).
             * Typical Value = 1.1.
             */
            obj["kd"] = base.parse_element (/<cim:ExcAC8B.kd>([\s\S]*?)<\/cim:ExcAC8B.kd>/g, sub, context, true);
            /**
             * Voltage regulator derivative gain (Kdr).
             * Typical Value = 10.
             */
            obj["kdr"] = base.parse_element (/<cim:ExcAC8B.kdr>([\s\S]*?)<\/cim:ExcAC8B.kdr>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC8B.ke>([\s\S]*?)<\/cim:ExcAC8B.ke>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (Kir).
             * Typical Value = 5.
             */
            obj["kir"] = base.parse_element (/<cim:ExcAC8B.kir>([\s\S]*?)<\/cim:ExcAC8B.kir>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (Kpr).
             * Typical Value = 80.
             */
            obj["kpr"] = base.parse_element (/<cim:ExcAC8B.kpr>([\s\S]*?)<\/cim:ExcAC8B.kpr>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC8B.ks>([\s\S]*?)<\/cim:ExcAC8B.ks>/g, sub, context, true);
            /**
             * PID limiter indicator.
            true = input limiter Vpidmax and Vpidmin is considered
            false = input limiter Vpidmax and Vpidmin is not considered.
             * Typical Value = true.
             */
            obj["pidlim"] = base.to_boolean (base.parse_element (/<cim:ExcAC8B.pidlim>([\s\S]*?)<\/cim:ExcAC8B.pidlim>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>1</sub>, back of commutating reactance (Se[Ve1]).
             * Typical Value = 0.3.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcAC8B.seve1>([\s\S]*?)<\/cim:ExcAC8B.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>2</sub>, back of commutating reactance (Se[Ve2]).
             * Typical Value = 3.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcAC8B.seve2>([\s\S]*?)<\/cim:ExcAC8B.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC8B.ta>([\s\S]*?)<\/cim:ExcAC8B.ta>/g, sub, context, true);
            /**
             * Lag time constant (Tdr).
             * Typical Value = 0.1.
             */
            obj["tdr"] = base.parse_element (/<cim:ExcAC8B.tdr>([\s\S]*?)<\/cim:ExcAC8B.tdr>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.2.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC8B.te>([\s\S]*?)<\/cim:ExcAC8B.te>/g, sub, context, true);
            /**
             * Selector for the limiter on the block [1/sTe].
             * See diagram for meaning of true and false.
             */
            obj["telim"] = base.to_boolean (base.parse_element (/<cim:ExcAC8B.telim>([\s\S]*?)<\/cim:ExcAC8B.telim>/g, sub, context, true));
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>1</sub>) equals V<sub>EMAX</sub> (Ve1).
             * Typical Value = 6.5.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcAC8B.ve1>([\s\S]*?)<\/cim:ExcAC8B.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>2</sub>).
             * Typical Value = 9.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcAC8B.ve2>([\s\S]*?)<\/cim:ExcAC8B.ve2>/g, sub, context, true);
            /**
             * Minimum exciter voltage output (Vemin).
             * Typical Value = 0.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcAC8B.vemin>([\s\S]*?)<\/cim:ExcAC8B.vemin>/g, sub, context, true);
            /**
             * Exciter field current limit reference (Vfemax).
             * Typical Value = 6.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcAC8B.vfemax>([\s\S]*?)<\/cim:ExcAC8B.vfemax>/g, sub, context, true);
            /**
             * Input signal maximum (Vimax).
             * Typical Value = 35.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcAC8B.vimax>([\s\S]*?)<\/cim:ExcAC8B.vimax>/g, sub, context, true);
            /**
             * Input signal minimum (Vimin).
             * Typical Value = -10.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcAC8B.vimin>([\s\S]*?)<\/cim:ExcAC8B.vimin>/g, sub, context, true);
            /**
             * PID maximum controller output (Vpidmax).
             * Typical Value = 35.
             */
            obj["vpidmax"] = base.parse_element (/<cim:ExcAC8B.vpidmax>([\s\S]*?)<\/cim:ExcAC8B.vpidmax>/g, sub, context, true);
            /**
             * PID minimum controller output (Vpidmin).
             * Typical Value = -10.
             */
            obj["vpidmin"] = base.parse_element (/<cim:ExcAC8B.vpidmin>([\s\S]*?)<\/cim:ExcAC8B.vpidmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 35.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC8B.vrmax>([\s\S]*?)<\/cim:ExcAC8B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC8B.vrmin>([\s\S]*?)<\/cim:ExcAC8B.vrmin>/g, sub, context, true);
            /**
             * Multiply by generator's terminal voltage indicator.
            true =the limits Vrmax and Vrmin are multiplied by the generator�s terminal voltage to represent a thyristor power stage fed from the generator terminals
            false = limits are not multiplied by generator's terminal voltage.
             * Typical Value = false.
             */
            obj["vtmult"] = base.to_boolean (base.parse_element (/<cim:ExcAC8B.vtmult>([\s\S]*?)<\/cim:ExcAC8B.vtmult>/g, sub, context, true));
            bucket = context.parsed.ExcAC8B;
            if (null == bucket)
                context.parsed.ExcAC8B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC5A model.
         * The model represents a simplified model for brushless excitation systems. The regulator is supplied from a source, such as a permanent magnet generator, which is not affected by system disturbances.  Unlike other ac models, this model uses loaded rather than open circuit exciter saturation data in the same way as it is used for the dc models.  Because the model has been widely implemented by the industry, it is sometimes used to represent other types of systems when either detailed data for them are not available or simplified models are required.
         */
        function parse_ExcIEEEAC5A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC5A";
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD1</sub>).
             * Typical Value = 5.6.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcIEEEAC5A.efd1>([\s\S]*?)<\/cim:ExcIEEEAC5A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD2</sub>).
             * Typical Value = 4.2.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcIEEEAC5A.efd2>([\s\S]*?)<\/cim:ExcIEEEAC5A.efd2>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC5A.ka>([\s\S]*?)<\/cim:ExcIEEEAC5A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC5A.ke>([\s\S]*?)<\/cim:ExcIEEEAC5A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEAC5A.kf>([\s\S]*?)<\/cim:ExcIEEEAC5A.kf>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD1</sub> (S<sub>E</sub>[E<sub>FD1</sub>]).
             * Typical Value = 0.86.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC5A.seefd1>([\s\S]*?)<\/cim:ExcIEEEAC5A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD2</sub> (S<sub>E</sub>[E<sub>FD2</sub>]).
             * Typical Value = 0.5.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC5A.seefd2>([\s\S]*?)<\/cim:ExcIEEEAC5A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC5A.ta>([\s\S]*?)<\/cim:ExcIEEEAC5A.ta>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.8.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC5A.te>([\s\S]*?)<\/cim:ExcIEEEAC5A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F1</sub>).
             * Typical Value = 1.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcIEEEAC5A.tf1>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf1>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F2</sub>).
             * Typical Value = 1.
             */
            obj["tf2"] = base.parse_element (/<cim:ExcIEEEAC5A.tf2>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf2>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F3</sub>).
             * Typical Value = 1.
             */
            obj["tf3"] = base.parse_element (/<cim:ExcIEEEAC5A.tf3>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf3>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 7.3.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC5A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC5A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -7.3.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC5A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC5A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC5A;
            if (null == bucket)
                context.parsed.ExcIEEEAC5A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST2A model.
         * Some static systems utilize both current and voltage sources (generator terminal quantities) to comprise the power source.  The regulator controls the exciter output through controlled saturation of the power transformer components.  These compound-source rectifier excitation systems are designated Type ST2A and are represented by ExcIEEEST2A.
         */
        function parse_ExcIEEEST2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST2A";
            /**
             * Maximum field voltage (E<sub>FDMax</sub>).
             * Typical Value = 99.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcIEEEST2A.efdmax>([\s\S]*?)<\/cim:ExcIEEEST2A.efdmax>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 120.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEST2A.ka>([\s\S]*?)<\/cim:ExcIEEEST2A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 1.82.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEST2A.kc>([\s\S]*?)<\/cim:ExcIEEEST2A.kc>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEST2A.ke>([\s\S]*?)<\/cim:ExcIEEEST2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.05.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEST2A.kf>([\s\S]*?)<\/cim:ExcIEEEST2A.kf>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>I</sub>).
             * Typical Value = 8.
             */
            obj["ki"] = base.parse_element (/<cim:ExcIEEEST2A.ki>([\s\S]*?)<\/cim:ExcIEEEST2A.ki>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>P</sub>).
             * Typical Value = 4.88.
             */
            obj["kp"] = base.parse_element (/<cim:ExcIEEEST2A.kp>([\s\S]*?)<\/cim:ExcIEEEST2A.kp>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.15.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEST2A.ta>([\s\S]*?)<\/cim:ExcIEEEST2A.ta>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.5.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEST2A.te>([\s\S]*?)<\/cim:ExcIEEEST2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEST2A.tf>([\s\S]*?)<\/cim:ExcIEEEST2A.tf>/g, sub, context, true);
            /**
             * UEL input (UELin).
            true = HV gate
            false = add to error signal.
             * Typical Value = true.
             */
            obj["uelin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEST2A.uelin>([\s\S]*?)<\/cim:ExcIEEEST2A.uelin>/g, sub, context, true));
            /**
             * Maximum voltage regulator outputs (V<sub>RMAX</sub>).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (V<sub>RMIN</sub>).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST2A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST2A;
            if (null == bucket)
                context.parsed.ExcIEEEST2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST5B model.
         * The Type ST5B excitation system is a variation of the Type ST1A model, with alternative overexcitation and underexcitation inputs and additional limits.
         */
        function parse_ExcIEEEST5B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST5B";
            /**
             * Rectifier regulation factor (K<sub>C</sub>).
             * Typical Value = 0.004.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEST5B.kc>([\s\S]*?)<\/cim:ExcIEEEST5B.kc>/g, sub, context, true);
            /**
             * Regulator gain (K<sub>R</sub>).
             * Typical Value = 200.
             */
            obj["kr"] = base.parse_element (/<cim:ExcIEEEST5B.kr>([\s\S]*?)<\/cim:ExcIEEEST5B.kr>/g, sub, context, true);
            /**
             * Firing circuit time constant (T1).
             * Typical Value = 0.004.
             */
            obj["t1"] = base.parse_element (/<cim:ExcIEEEST5B.t1>([\s\S]*?)<\/cim:ExcIEEEST5B.t1>/g, sub, context, true);
            /**
             * Regulator lag time constant (T<sub>B1</sub>).
             * Typical Value = 6.
             */
            obj["tb1"] = base.parse_element (/<cim:ExcIEEEST5B.tb1>([\s\S]*?)<\/cim:ExcIEEEST5B.tb1>/g, sub, context, true);
            /**
             * Regulator lag time constant (T<sub>B2</sub>).
             * Typical Value = 0.01.
             */
            obj["tb2"] = base.parse_element (/<cim:ExcIEEEST5B.tb2>([\s\S]*?)<\/cim:ExcIEEEST5B.tb2>/g, sub, context, true);
            /**
             * Regulator lead time constant (T<sub>C1</sub>).
             * Typical Value = 0.8.
             */
            obj["tc1"] = base.parse_element (/<cim:ExcIEEEST5B.tc1>([\s\S]*?)<\/cim:ExcIEEEST5B.tc1>/g, sub, context, true);
            /**
             * Regulator lead time constant (T<sub>C2</sub>).
             * Typical Value = 0.08.
             */
            obj["tc2"] = base.parse_element (/<cim:ExcIEEEST5B.tc2>([\s\S]*?)<\/cim:ExcIEEEST5B.tc2>/g, sub, context, true);
            /**
             * OEL lag time constant (T<sub>OB1</sub>).
             * Typical Value = 2.
             */
            obj["tob1"] = base.parse_element (/<cim:ExcIEEEST5B.tob1>([\s\S]*?)<\/cim:ExcIEEEST5B.tob1>/g, sub, context, true);
            /**
             * OEL lag time constant (T<sub>OB2</sub>).
             * Typical Value = 0.08.
             */
            obj["tob2"] = base.parse_element (/<cim:ExcIEEEST5B.tob2>([\s\S]*?)<\/cim:ExcIEEEST5B.tob2>/g, sub, context, true);
            /**
             * OEL lead time constant (T<sub>OC1</sub>).
             * Typical Value = 0.1.
             */
            obj["toc1"] = base.parse_element (/<cim:ExcIEEEST5B.toc1>([\s\S]*?)<\/cim:ExcIEEEST5B.toc1>/g, sub, context, true);
            /**
             * OEL lead time constant (T<sub>OC2</sub>).
             * Typical Value = 0.08.
             */
            obj["toc2"] = base.parse_element (/<cim:ExcIEEEST5B.toc2>([\s\S]*?)<\/cim:ExcIEEEST5B.toc2>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>UB1</sub>).
             * Typical Value = 10.
             */
            obj["tub1"] = base.parse_element (/<cim:ExcIEEEST5B.tub1>([\s\S]*?)<\/cim:ExcIEEEST5B.tub1>/g, sub, context, true);
            /**
             * UEL lag time constant (T<sub>UB2</sub>).
             * Typical Value = 0.05.
             */
            obj["tub2"] = base.parse_element (/<cim:ExcIEEEST5B.tub2>([\s\S]*?)<\/cim:ExcIEEEST5B.tub2>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>UC1</sub>).
             * Typical Value = 2.
             */
            obj["tuc1"] = base.parse_element (/<cim:ExcIEEEST5B.tuc1>([\s\S]*?)<\/cim:ExcIEEEST5B.tuc1>/g, sub, context, true);
            /**
             * UEL lead time constant (T<sub>UC2</sub>).
             * Typical Value = 0.1.
             */
            obj["tuc2"] = base.parse_element (/<cim:ExcIEEEST5B.tuc2>([\s\S]*?)<\/cim:ExcIEEEST5B.tuc2>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST5B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST5B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -4.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST5B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST5B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST5B;
            if (null == bucket)
                context.parsed.ExcIEEEST5B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC4A alternator-supplied rectifier excitation system with different minimum controller output.
         */
        function parse_ExcAC4A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC4A";
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 200.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC4A.ka>([\s\S]*?)<\/cim:ExcAC4A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC4A.kc>([\s\S]*?)<\/cim:ExcAC4A.kc>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.015.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC4A.ta>([\s\S]*?)<\/cim:ExcAC4A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC4A.tb>([\s\S]*?)<\/cim:ExcAC4A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC4A.tc>([\s\S]*?)<\/cim:ExcAC4A.tc>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (Vimax).
             * Typical Value = 10.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcAC4A.vimax>([\s\S]*?)<\/cim:ExcAC4A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (Vimin).
             * Typical Value = -10.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcAC4A.vimin>([\s\S]*?)<\/cim:ExcAC4A.vimin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 5.64.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC4A.vrmax>([\s\S]*?)<\/cim:ExcAC4A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -4.53.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC4A.vrmin>([\s\S]*?)<\/cim:ExcAC4A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcAC4A;
            if (null == bucket)
                context.parsed.ExcAC4A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC8B model.
         * This model represents a PID voltage regulator with either a brushless exciter or dc exciter. The AVR in this model consists of PID control, with separate constants for the proportional (<b>K</b><b><sub>PR</sub></b>), integral (<b>K</b><b><sub>IR</sub></b>), and derivative (<b>K</b><b><sub>DR</sub></b>) gains. The representation of the brushless exciter (<b>T</b><b><sub>E</sub></b>, <b>K</b><b><sub>E</sub></b>, <b>S</b><b><sub>E</sub></b>, <b>K</b><b><sub>C</sub></b>, <b>K</b><b><sub>D</sub></b>) is similar to the model Type AC2A. The Type AC8B model can be used to represent static voltage regulators applied to brushless excitation systems. Digitally based voltage regulators feeding dc rotating main exciters can be represented with the AC Type AC8B model with the parameters <b>K</b><b><sub>C</sub></b> and <b>K</b><b><sub>D</sub></b> set to 0.  For thyristor power stages fed from the generator terminals, the limits <b>V</b><b><sub>RMAX</sub></b> and <b>V</b><b><sub>RMIN</sub></b> should be a function of terminal voltage: <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMAX</sub></b><sub> </sub>and <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMIN</sub></b>.
         */
        function parse_ExcIEEEAC8B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC8B";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 1.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC8B.ka>([\s\S]*?)<\/cim:ExcIEEEAC8B.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.55.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC8B.kc>([\s\S]*?)<\/cim:ExcIEEEAC8B.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 1.1.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC8B.kd>([\s\S]*?)<\/cim:ExcIEEEAC8B.kd>/g, sub, context, true);
            /**
             * Voltage regulator derivative gain (K<sub>DR</sub>).
             * Typical Value = 10.
             */
            obj["kdr"] = base.parse_element (/<cim:ExcIEEEAC8B.kdr>([\s\S]*?)<\/cim:ExcIEEEAC8B.kdr>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC8B.ke>([\s\S]*?)<\/cim:ExcIEEEAC8B.ke>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IR</sub>).
             * Typical Value = 5.
             */
            obj["kir"] = base.parse_element (/<cim:ExcIEEEAC8B.kir>([\s\S]*?)<\/cim:ExcIEEEAC8B.kir>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PR</sub>).
             * Typical Value = 80.
             */
            obj["kpr"] = base.parse_element (/<cim:ExcIEEEAC8B.kpr>([\s\S]*?)<\/cim:ExcIEEEAC8B.kpr>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 0.3.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC8B.seve1>([\s\S]*?)<\/cim:ExcIEEEAC8B.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 3.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC8B.seve2>([\s\S]*?)<\/cim:ExcIEEEAC8B.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC8B.ta>([\s\S]*?)<\/cim:ExcIEEEAC8B.ta>/g, sub, context, true);
            /**
             * Lag time constant (T<sub>DR</sub>).
             * Typical Value = 0.1.
             */
            obj["tdr"] = base.parse_element (/<cim:ExcIEEEAC8B.tdr>([\s\S]*?)<\/cim:ExcIEEEAC8B.tdr>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 1.2.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC8B.te>([\s\S]*?)<\/cim:ExcIEEEAC8B.te>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>) equals V<sub>EMAX</sub> (V<sub>E1</sub>).
             * Typical Value = 6.5.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC8B.ve1>([\s\S]*?)<\/cim:ExcIEEEAC8B.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 9.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC8B.ve2>([\s\S]*?)<\/cim:ExcIEEEAC8B.ve2>/g, sub, context, true);
            /**
             * Minimum exciter voltage output (V<sub>EMIN</sub>).
             * Typical Value = 0.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcIEEEAC8B.vemin>([\s\S]*?)<\/cim:ExcIEEEAC8B.vemin>/g, sub, context, true);
            /**
             * Exciter field current limit reference (V<sub>FEMAX</sub>).
             * Typical Value = 6.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcIEEEAC8B.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC8B.vfemax>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 35.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC8B.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC8B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC8B.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC8B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC8B;
            if (null == bucket)
                context.parsed.ExcIEEEAC8B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of connection for the UEL input used for static excitation systems type 7B.
         */
        function parse_ExcST7BUELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST7BUELselectorKind";
            /**
             * No UEL input is used.
             */
            obj["noUELinput"] = base.parse_element (/<cim:ExcST7BUELselectorKind.noUELinput>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.noUELinput>/g, sub, context, true);
            /**
             * The signal is added to Vref.
             */
            obj["addVref"] = base.parse_element (/<cim:ExcST7BUELselectorKind.addVref>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.addVref>/g, sub, context, true);
            /**
             * The signal is connected in the input of the HV gate.
             */
            obj["inputHVgate"] = base.parse_element (/<cim:ExcST7BUELselectorKind.inputHVgate>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.inputHVgate>/g, sub, context, true);
            /**
             * The signal is connected in the output of the HV gate.
             */
            obj["outputHVgate"] = base.parse_element (/<cim:ExcST7BUELselectorKind.outputHVgate>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.outputHVgate>/g, sub, context, true);
            bucket = context.parsed.ExcST7BUELselectorKind;
            if (null == bucket)
                context.parsed.ExcST7BUELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Slovakian Excitation System Model.
         * UEL and secondary voltage control are included in this model. When this model is used, there cannot be a separate underexcitation limiter or VAr controller model.
         */
        function parse_ExcSK (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSK";
            /**
             * Field voltage clipping limit (Efdmax).
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcSK.efdmax>([\s\S]*?)<\/cim:ExcSK.efdmax>/g, sub, context, true);
            /**
             * Field voltage clipping limit (Efdmin).
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcSK.efdmin>([\s\S]*?)<\/cim:ExcSK.efdmin>/g, sub, context, true);
            /**
             * Maximum field voltage output (Emax).
             * Typical Value = 20.
             */
            obj["emax"] = base.parse_element (/<cim:ExcSK.emax>([\s\S]*?)<\/cim:ExcSK.emax>/g, sub, context, true);
            /**
             * Minimum field voltage output (Emin).
             * Typical Value = -20.
             */
            obj["emin"] = base.parse_element (/<cim:ExcSK.emin>([\s\S]*?)<\/cim:ExcSK.emin>/g, sub, context, true);
            /**
             * Gain (K).
             * Typical Value = 1.
             */
            obj["k"] = base.parse_element (/<cim:ExcSK.k>([\s\S]*?)<\/cim:ExcSK.k>/g, sub, context, true);
            /**
             * Parameter of underexcitation limit (K1).
             * Typical Value = 0.1364.
             */
            obj["k1"] = base.parse_element (/<cim:ExcSK.k1>([\s\S]*?)<\/cim:ExcSK.k1>/g, sub, context, true);
            /**
             * Parameter of underexcitation limit (K2).
             * Typical Value = -0.3861.
             */
            obj["k2"] = base.parse_element (/<cim:ExcSK.k2>([\s\S]*?)<\/cim:ExcSK.k2>/g, sub, context, true);
            /**
             * PI controller gain (Kc).
             * Typical Value = 70.
             */
            obj["kc"] = base.parse_element (/<cim:ExcSK.kc>([\s\S]*?)<\/cim:ExcSK.kc>/g, sub, context, true);
            /**
             * Rectifier regulation factor (Kce).
             * Typical Value = 0.
             */
            obj["kce"] = base.parse_element (/<cim:ExcSK.kce>([\s\S]*?)<\/cim:ExcSK.kce>/g, sub, context, true);
            /**
             * Exciter internal reactance (Kd).
             * Typical Value = 0.
             */
            obj["kd"] = base.parse_element (/<cim:ExcSK.kd>([\s\S]*?)<\/cim:ExcSK.kd>/g, sub, context, true);
            /**
             * P controller gain (Kgob).
             * Typical Value = 10.
             */
            obj["kgob"] = base.parse_element (/<cim:ExcSK.kgob>([\s\S]*?)<\/cim:ExcSK.kgob>/g, sub, context, true);
            /**
             * PI controller gain (Kp).
             * Typical Value = 1.
             */
            obj["kp"] = base.parse_element (/<cim:ExcSK.kp>([\s\S]*?)<\/cim:ExcSK.kp>/g, sub, context, true);
            /**
             * PI controller gain of integral component (Kqi).
             * Typical Value = 0.
             */
            obj["kqi"] = base.parse_element (/<cim:ExcSK.kqi>([\s\S]*?)<\/cim:ExcSK.kqi>/g, sub, context, true);
            /**
             * Rate of rise of the reactive power (Kqob).
             */
            obj["kqob"] = base.parse_element (/<cim:ExcSK.kqob>([\s\S]*?)<\/cim:ExcSK.kqob>/g, sub, context, true);
            /**
             * PI controller gain (Kqp).
             * Typical Value = 0.
             */
            obj["kqp"] = base.parse_element (/<cim:ExcSK.kqp>([\s\S]*?)<\/cim:ExcSK.kqp>/g, sub, context, true);
            /**
             * Dead band of reactive power (nq).
             * Determines the range of sensitivity.  Typical Value = 0.001.
             */
            obj["nq"] = base.parse_element (/<cim:ExcSK.nq>([\s\S]*?)<\/cim:ExcSK.nq>/g, sub, context, true);
            /**
             * Secondary voltage control state (Qc_on_off).
            true = secondary voltage control is ON
            false = secondary voltage control is OFF.
             * Typical Value = false.
             */
            obj["qconoff"] = base.to_boolean (base.parse_element (/<cim:ExcSK.qconoff>([\s\S]*?)<\/cim:ExcSK.qconoff>/g, sub, context, true));
            /**
             * Desired value (setpoint) of reactive power, manual setting (Qz).
             */
            obj["qz"] = base.parse_element (/<cim:ExcSK.qz>([\s\S]*?)<\/cim:ExcSK.qz>/g, sub, context, true);
            /**
             * Selector to apply automatic calculation in secondary controller model.
            true = automatic calculation is activated
            false = manual set is active; the use of desired value of reactive power (Qz) is required.
             * Typical Value = true.
             */
            obj["remote"] = base.to_boolean (base.parse_element (/<cim:ExcSK.remote>([\s\S]*?)<\/cim:ExcSK.remote>/g, sub, context, true));
            /**
             * Apparent power of the unit (Sbase).
             * Unit = MVA.  Typical Value = 259.
             */
            obj["sbase"] = base.parse_element (/<cim:ExcSK.sbase>([\s\S]*?)<\/cim:ExcSK.sbase>/g, sub, context, true);
            /**
             * PI controller phase lead time constant (Tc).
             * Typical Value = 8.
             */
            obj["tc"] = base.parse_element (/<cim:ExcSK.tc>([\s\S]*?)<\/cim:ExcSK.tc>/g, sub, context, true);
            /**
             * Time constant of gain block (Te).
             * Typical Value = 0.1.
             */
            obj["te"] = base.parse_element (/<cim:ExcSK.te>([\s\S]*?)<\/cim:ExcSK.te>/g, sub, context, true);
            /**
             * PI controller phase lead time constant (Ti).
             * Typical Value = 2.
             */
            obj["ti"] = base.parse_element (/<cim:ExcSK.ti>([\s\S]*?)<\/cim:ExcSK.ti>/g, sub, context, true);
            /**
             * Time constant (Tp).
             * Typical Value = 0.1.
             */
            obj["tp"] = base.parse_element (/<cim:ExcSK.tp>([\s\S]*?)<\/cim:ExcSK.tp>/g, sub, context, true);
            /**
             * Voltage transducer time constant (Tr).
             * Typical Value = 0.01.
             */
            obj["tr"] = base.parse_element (/<cim:ExcSK.tr>([\s\S]*?)<\/cim:ExcSK.tr>/g, sub, context, true);
            /**
             * Maximum error (Uimax).
             * Typical Value = 10.
             */
            obj["uimax"] = base.parse_element (/<cim:ExcSK.uimax>([\s\S]*?)<\/cim:ExcSK.uimax>/g, sub, context, true);
            /**
             * Minimum error (UImin).
             * Typical Value = -10.
             */
            obj["uimin"] = base.parse_element (/<cim:ExcSK.uimin>([\s\S]*?)<\/cim:ExcSK.uimin>/g, sub, context, true);
            /**
             * Maximum controller output (URmax).
             * Typical Value = 10.
             */
            obj["urmax"] = base.parse_element (/<cim:ExcSK.urmax>([\s\S]*?)<\/cim:ExcSK.urmax>/g, sub, context, true);
            /**
             * Minimum controller output (URmin).
             * Typical Value = -10.
             */
            obj["urmin"] = base.parse_element (/<cim:ExcSK.urmin>([\s\S]*?)<\/cim:ExcSK.urmin>/g, sub, context, true);
            /**
             * Maximum terminal voltage input (Vtmax).
             * Determines the range of voltage dead band.  Typical Value = 1.05.
             */
            obj["vtmax"] = base.parse_element (/<cim:ExcSK.vtmax>([\s\S]*?)<\/cim:ExcSK.vtmax>/g, sub, context, true);
            /**
             * Minimum terminal voltage input (Vtmin).
             * Determines the range of voltage dead band.  Typical Value = 0.95.
             */
            obj["vtmin"] = base.parse_element (/<cim:ExcSK.vtmin>([\s\S]*?)<\/cim:ExcSK.vtmin>/g, sub, context, true);
            /**
             * Maximum output (Yp).
             * Minimum output = 0.  Typical Value = 1.
             */
            obj["yp"] = base.parse_element (/<cim:ExcSK.yp>([\s\S]*?)<\/cim:ExcSK.yp>/g, sub, context, true);
            bucket = context.parsed.ExcSK;
            if (null == bucket)
                context.parsed.ExcSK = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * General Purpose Rotating Excitation System Model.
         * This model can be used to represent a wide range of excitation systems whose DC power source is an AC or DC generator. It encompasses IEEE type AC1, AC2, DC1, and DC2 excitation system models.
         */
        function parse_ExcREXS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcREXS";
            /**
             * Field voltage value 1 (E1).
             * Typical Value = 3.
             */
            obj["e1"] = base.parse_element (/<cim:ExcREXS.e1>([\s\S]*?)<\/cim:ExcREXS.e1>/g, sub, context, true);
            /**
             * Field voltage value 2 (E2).
             * Typical Value = 4.
             */
            obj["e2"] = base.parse_element (/<cim:ExcREXS.e2>([\s\S]*?)<\/cim:ExcREXS.e2>/g, sub, context, true);
            /**
             * Rate feedback signal flag (Fbf).
             * Typical Value = fieldCurrent.
             */
            obj["fbf"] = base.parse_element (/<cim:ExcREXS.fbf>([\s\S]*?)<\/cim:ExcREXS.fbf>/g, sub, context, true);
            /**
             * Limit type flag (Flimf).
             * Typical Value = 0.
             */
            obj["flimf"] = base.parse_element (/<cim:ExcREXS.flimf>([\s\S]*?)<\/cim:ExcREXS.flimf>/g, sub, context, true);
            /**
             * Rectifier regulation factor (Kc).
             * Typical Value = 0.05.
             */
            obj["kc"] = base.parse_element (/<cim:ExcREXS.kc>([\s\S]*?)<\/cim:ExcREXS.kc>/g, sub, context, true);
            /**
             * Exciter regulation factor (Kd).
             * Typical Value = 2.
             */
            obj["kd"] = base.parse_element (/<cim:ExcREXS.kd>([\s\S]*?)<\/cim:ExcREXS.kd>/g, sub, context, true);
            /**
             * Exciter field proportional constant (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcREXS.ke>([\s\S]*?)<\/cim:ExcREXS.ke>/g, sub, context, true);
            /**
             * Field voltage feedback gain (Kefd).
             * Typical Value = 0.
             */
            obj["kefd"] = base.parse_element (/<cim:ExcREXS.kefd>([\s\S]*?)<\/cim:ExcREXS.kefd>/g, sub, context, true);
            /**
             * Rate feedback gain (Kf).
             * Typical Value = 0.05.
             */
            obj["kf"] = base.parse_element (/<cim:ExcREXS.kf>([\s\S]*?)<\/cim:ExcREXS.kf>/g, sub, context, true);
            /**
             * Field voltage controller feedback gain (Kh).
             * Typical Value = 0.
             */
            obj["kh"] = base.parse_element (/<cim:ExcREXS.kh>([\s\S]*?)<\/cim:ExcREXS.kh>/g, sub, context, true);
            /**
             * Field Current Regulator Integral Gain (Kii).
             * Typical Value = 0.
             */
            obj["kii"] = base.parse_element (/<cim:ExcREXS.kii>([\s\S]*?)<\/cim:ExcREXS.kii>/g, sub, context, true);
            /**
             * Field Current Regulator Proportional Gain (Kip).
             * Typical Value = 1.
             */
            obj["kip"] = base.parse_element (/<cim:ExcREXS.kip>([\s\S]*?)<\/cim:ExcREXS.kip>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcREXS.ks>([\s\S]*?)<\/cim:ExcREXS.ks>/g, sub, context, true);
            /**
             * Voltage Regulator Integral Gain (Kvi).
             * Typical Value = 0.
             */
            obj["kvi"] = base.parse_element (/<cim:ExcREXS.kvi>([\s\S]*?)<\/cim:ExcREXS.kvi>/g, sub, context, true);
            /**
             * Voltage Regulator Proportional Gain (Kvp).
             * Typical Value = 2800.
             */
            obj["kvp"] = base.parse_element (/<cim:ExcREXS.kvp>([\s\S]*?)<\/cim:ExcREXS.kvp>/g, sub, context, true);
            /**
             * V/Hz limiter gain (Kvphz).
             * Typical Value = 0.
             */
            obj["kvphz"] = base.parse_element (/<cim:ExcREXS.kvphz>([\s\S]*?)<\/cim:ExcREXS.kvphz>/g, sub, context, true);
            /**
             * Pickup speed of V/Hz limiter (Nvphz).
             * Typical Value = 0.
             */
            obj["nvphz"] = base.parse_element (/<cim:ExcREXS.nvphz>([\s\S]*?)<\/cim:ExcREXS.nvphz>/g, sub, context, true);
            /**
             * Saturation factor at E1 (Se1).
             * Typical Value = 0.0001.
             */
            obj["se1"] = base.parse_element (/<cim:ExcREXS.se1>([\s\S]*?)<\/cim:ExcREXS.se1>/g, sub, context, true);
            /**
             * Saturation factor at E2 (Se2).
             * Typical Value = 0.001.
             */
            obj["se2"] = base.parse_element (/<cim:ExcREXS.se2>([\s\S]*?)<\/cim:ExcREXS.se2>/g, sub, context, true);
            /**
             * Voltage Regulator time constant (Ta).
             * Typical Value = 0.01.
             */
            obj["ta"] = base.parse_element (/<cim:ExcREXS.ta>([\s\S]*?)<\/cim:ExcREXS.ta>/g, sub, context, true);
            /**
             * Lag time constant (Tb1).
             * Typical Value = 0.
             */
            obj["tb1"] = base.parse_element (/<cim:ExcREXS.tb1>([\s\S]*?)<\/cim:ExcREXS.tb1>/g, sub, context, true);
            /**
             * Lag time constant (Tb2).
             * Typical Value = 0.
             */
            obj["tb2"] = base.parse_element (/<cim:ExcREXS.tb2>([\s\S]*?)<\/cim:ExcREXS.tb2>/g, sub, context, true);
            /**
             * Lead time constant (Tc1).
             * Typical Value = 0.
             */
            obj["tc1"] = base.parse_element (/<cim:ExcREXS.tc1>([\s\S]*?)<\/cim:ExcREXS.tc1>/g, sub, context, true);
            /**
             * Lead time constant (Tc2).
             * Typical Value = 0.
             */
            obj["tc2"] = base.parse_element (/<cim:ExcREXS.tc2>([\s\S]*?)<\/cim:ExcREXS.tc2>/g, sub, context, true);
            /**
             * Exciter field time constant (Te).
             * Typical Value = 1.2.
             */
            obj["te"] = base.parse_element (/<cim:ExcREXS.te>([\s\S]*?)<\/cim:ExcREXS.te>/g, sub, context, true);
            /**
             * Rate feedback time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcREXS.tf>([\s\S]*?)<\/cim:ExcREXS.tf>/g, sub, context, true);
            /**
             * Feedback lead time constant (Tf1).
             * Typical Value = 0.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcREXS.tf1>([\s\S]*?)<\/cim:ExcREXS.tf1>/g, sub, context, true);
            /**
             * Feedback lag time constant (Tf2).
             * Typical Value = 0.
             */
            obj["tf2"] = base.parse_element (/<cim:ExcREXS.tf2>([\s\S]*?)<\/cim:ExcREXS.tf2>/g, sub, context, true);
            /**
             * Field current Bridge time constant (Tp).
             * Typical Value = 0.
             */
            obj["tp"] = base.parse_element (/<cim:ExcREXS.tp>([\s\S]*?)<\/cim:ExcREXS.tp>/g, sub, context, true);
            /**
             * Maximum compounding voltage (Vcmax).
             * Typical Value = 0.
             */
            obj["vcmax"] = base.parse_element (/<cim:ExcREXS.vcmax>([\s\S]*?)<\/cim:ExcREXS.vcmax>/g, sub, context, true);
            /**
             * Maximum Exciter Field Current (Vfmax).
             * Typical Value = 47.
             */
            obj["vfmax"] = base.parse_element (/<cim:ExcREXS.vfmax>([\s\S]*?)<\/cim:ExcREXS.vfmax>/g, sub, context, true);
            /**
             * Minimum Exciter Field Current (Vfmin).
             * Typical Value = -20.
             */
            obj["vfmin"] = base.parse_element (/<cim:ExcREXS.vfmin>([\s\S]*?)<\/cim:ExcREXS.vfmin>/g, sub, context, true);
            /**
             * Voltage Regulator Input Limit (Vimax).
             * Typical Value = 0.1.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcREXS.vimax>([\s\S]*?)<\/cim:ExcREXS.vimax>/g, sub, context, true);
            /**
             * Maximum controller output (Vrmax).
             * Typical Value = 47.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcREXS.vrmax>([\s\S]*?)<\/cim:ExcREXS.vrmax>/g, sub, context, true);
            /**
             * Minimum controller output (Vrmin).
             * Typical Value = -20.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcREXS.vrmin>([\s\S]*?)<\/cim:ExcREXS.vrmin>/g, sub, context, true);
            /**
             * Exciter compounding reactance (Xc).
             * Typical Value = 0.
             */
            obj["xc"] = base.parse_element (/<cim:ExcREXS.xc>([\s\S]*?)<\/cim:ExcREXS.xc>/g, sub, context, true);
            bucket = context.parsed.ExcREXS;
            if (null == bucket)
                context.parsed.ExcREXS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian excitation system.
         * It represents static field voltage or excitation current feedback excitation system.
         */
        function parse_ExcANS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcANS";
            /**
             * Governor Control Flag (BLINT). 
            0 = lead-lag regulator
            1 = proportional integral regulator.
             * Typical Value = 0.
             */
            obj["blint"] = base.parse_element (/<cim:ExcANS.blint>([\s\S]*?)<\/cim:ExcANS.blint>/g, sub, context, true);
            /**
             * Minimum exciter current (I<sub>FMN</sub>).
             * Typical Value = -5.2.
             */
            obj["ifmn"] = base.parse_element (/<cim:ExcANS.ifmn>([\s\S]*?)<\/cim:ExcANS.ifmn>/g, sub, context, true);
            /**
             * Maximum exciter current (I<sub>FMX</sub>).
             * Typical Value = 6.5.
             */
            obj["ifmx"] = base.parse_element (/<cim:ExcANS.ifmx>([\s\S]*?)<\/cim:ExcANS.ifmx>/g, sub, context, true);
            /**
             * Exciter gain (K<sub>2</sub>).
             * Typical Value = 20.
             */
            obj["k2"] = base.to_float (base.parse_element (/<cim:ExcANS.k2>([\s\S]*?)<\/cim:ExcANS.k2>/g, sub, context, true));
            /**
             * AVR gain (K<sub>3</sub>).
             * Typical Value = 1000.
             */
            obj["k3"] = base.to_float (base.parse_element (/<cim:ExcANS.k3>([\s\S]*?)<\/cim:ExcANS.k3>/g, sub, context, true));
            /**
             * Ceiling factor (K<sub>CE</sub>).
             * Typical Value = 1.
             */
            obj["kce"] = base.to_float (base.parse_element (/<cim:ExcANS.kce>([\s\S]*?)<\/cim:ExcANS.kce>/g, sub, context, true));
            /**
             * Feedback enabling (K<sub>RVECC</sub>). 
            0 = Open loop control
            1 = Closed loop control.
             * Typical Value = 1.
             */
            obj["krvecc"] = base.parse_element (/<cim:ExcANS.krvecc>([\s\S]*?)<\/cim:ExcANS.krvecc>/g, sub, context, true);
            /**
             * Rate feedback signal flag (K<sub>VFIF</sub>). 
            0 = output voltage of the exciter
            1 = exciter field current.
             * Typical Value = 0.
             */
            obj["kvfif"] = base.parse_element (/<cim:ExcANS.kvfif>([\s\S]*?)<\/cim:ExcANS.kvfif>/g, sub, context, true);
            /**
             * Time constant (T<sub>1</sub>).
             * Typical Value = 20.
             */
            obj["t1"] = base.parse_element (/<cim:ExcANS.t1>([\s\S]*?)<\/cim:ExcANS.t1>/g, sub, context, true);
            /**
             * Time constant (T<sub>2</sub>).
             * Typical Value = 0.05.
             */
            obj["t2"] = base.parse_element (/<cim:ExcANS.t2>([\s\S]*?)<\/cim:ExcANS.t2>/g, sub, context, true);
            /**
             * Time constant (T<sub>3</sub>).
             * Typical Value = 1.6.
             */
            obj["t3"] = base.parse_element (/<cim:ExcANS.t3>([\s\S]*?)<\/cim:ExcANS.t3>/g, sub, context, true);
            /**
             * Exciter time constant (T<sub>B</sub>).
             * Typical Value = 0.04.
             */
            obj["tb"] = base.parse_element (/<cim:ExcANS.tb>([\s\S]*?)<\/cim:ExcANS.tb>/g, sub, context, true);
            /**
             * Minimum AVR output (V<sub>RMN</sub>).
             * Typical Value = -5.2.
             */
            obj["vrmn"] = base.parse_element (/<cim:ExcANS.vrmn>([\s\S]*?)<\/cim:ExcANS.vrmn>/g, sub, context, true);
            /**
             * Maximum AVR output (V<sub>RMX</sub>).
             * Typical Value = 6.5.
             */
            obj["vrmx"] = base.parse_element (/<cim:ExcANS.vrmx>([\s\S]*?)<\/cim:ExcANS.vrmx>/g, sub, context, true);
            bucket = context.parsed.ExcANS;
            if (null == bucket)
                context.parsed.ExcANS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC7B model.
         * The model represents excitation systems which consist of an ac alternator with either stationary or rotating rectifiers to produce the dc field requirements. It is an upgrade to earlier ac excitation systems, which replace only the controls but retain the ac alternator and diode rectifier bridge.
         */
        function parse_ExcIEEEAC7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC7B";
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.18.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC7B.kc>([\s\S]*?)<\/cim:ExcIEEEAC7B.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 0.02.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC7B.kd>([\s\S]*?)<\/cim:ExcIEEEAC7B.kd>/g, sub, context, true);
            /**
             * Voltage regulator derivative gain (K<sub>DR</sub>).
             * Typical Value = 0.
             */
            obj["kdr"] = base.parse_element (/<cim:ExcIEEEAC7B.kdr>([\s\S]*?)<\/cim:ExcIEEEAC7B.kdr>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC7B.ke>([\s\S]*?)<\/cim:ExcIEEEAC7B.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F1</sub>).
             * Typical Value = 0.212.
             */
            obj["kf1"] = base.parse_element (/<cim:ExcIEEEAC7B.kf1>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf1>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F2</sub>).
             * Typical Value = 0.
             */
            obj["kf2"] = base.parse_element (/<cim:ExcIEEEAC7B.kf2>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf2>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F3</sub>).
             * Typical Value = 0.
             */
            obj["kf3"] = base.parse_element (/<cim:ExcIEEEAC7B.kf3>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf3>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IA</sub>).
             * Typical Value = 59.69.
             */
            obj["kia"] = base.parse_element (/<cim:ExcIEEEAC7B.kia>([\s\S]*?)<\/cim:ExcIEEEAC7B.kia>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IR</sub>).
             * Typical Value = 4.24.
             */
            obj["kir"] = base.parse_element (/<cim:ExcIEEEAC7B.kir>([\s\S]*?)<\/cim:ExcIEEEAC7B.kir>/g, sub, context, true);
            /**
             * Exciter field voltage lower limit parameter (K<sub>L</sub>).
             * Typical Value = 10.
             */
            obj["kl"] = base.parse_element (/<cim:ExcIEEEAC7B.kl>([\s\S]*?)<\/cim:ExcIEEEAC7B.kl>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>P</sub>).
             * Typical Value = 4.96.
             */
            obj["kp"] = base.parse_element (/<cim:ExcIEEEAC7B.kp>([\s\S]*?)<\/cim:ExcIEEEAC7B.kp>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PA</sub>).
             * Typical Value = 65.36.
             */
            obj["kpa"] = base.parse_element (/<cim:ExcIEEEAC7B.kpa>([\s\S]*?)<\/cim:ExcIEEEAC7B.kpa>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PR</sub>).
             * Typical Value = 4.24.
             */
            obj["kpr"] = base.parse_element (/<cim:ExcIEEEAC7B.kpr>([\s\S]*?)<\/cim:ExcIEEEAC7B.kpr>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 0.44.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC7B.seve1>([\s\S]*?)<\/cim:ExcIEEEAC7B.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 0.075.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC7B.seve2>([\s\S]*?)<\/cim:ExcIEEEAC7B.seve2>/g, sub, context, true));
            /**
             * Lag time constant (T<sub>DR</sub>).
             * Typical Value = 0.
             */
            obj["tdr"] = base.parse_element (/<cim:ExcIEEEAC7B.tdr>([\s\S]*?)<\/cim:ExcIEEEAC7B.tdr>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 1.1.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC7B.te>([\s\S]*?)<\/cim:ExcIEEEAC7B.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEAC7B.tf>([\s\S]*?)<\/cim:ExcIEEEAC7B.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 1.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEAC7B.vamax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -0.95.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEAC7B.vamin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>) equals V<sub>EMAX</sub> (V<sub>E1</sub>).
             * Typical Value = 6.3.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC7B.ve1>([\s\S]*?)<\/cim:ExcIEEEAC7B.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 3.02.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC7B.ve2>([\s\S]*?)<\/cim:ExcIEEEAC7B.ve2>/g, sub, context, true);
            /**
             * Minimum exciter voltage output (V<sub>EMIN</sub>).
             * Typical Value = 0.
             */
            obj["vemin"] = base.parse_element (/<cim:ExcIEEEAC7B.vemin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vemin>/g, sub, context, true);
            /**
             * Exciter field current limit reference (V<sub>FEMAX</sub>).
             * Typical Value = 6.9.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcIEEEAC7B.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vfemax>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 5.79.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC7B.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -5.79.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC7B.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC7B;
            if (null == bucket)
                context.parsed.ExcIEEEAC7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST4B model.
         * This model is a variation of the Type ST3A model, with a proportional plus integral (PI) regulator block replacing the lag-lead regulator characteristic that is in the ST3A model. Both potential and compound source rectifier excitation systems are modeled.  The PI regulator blocks have non-windup limits that are represented. The voltage regulator of this model is typically implemented digitally.
         */
        function parse_ExcIEEEST4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST4B";
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.113.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEST4B.kc>([\s\S]*?)<\/cim:ExcIEEEST4B.kc>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (K<sub>G</sub>).
             * Typical Value = 0.
             */
            obj["kg"] = base.parse_element (/<cim:ExcIEEEST4B.kg>([\s\S]*?)<\/cim:ExcIEEEST4B.kg>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>I</sub>).
             * Typical Value = 0.
             */
            obj["ki"] = base.parse_element (/<cim:ExcIEEEST4B.ki>([\s\S]*?)<\/cim:ExcIEEEST4B.ki>/g, sub, context, true);
            /**
             * Voltage regulator integral gain output (K<sub>IM</sub>).
             * Typical Value = 0.
             */
            obj["kim"] = base.parse_element (/<cim:ExcIEEEST4B.kim>([\s\S]*?)<\/cim:ExcIEEEST4B.kim>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IR</sub>).
             * Typical Value = 10.75.
             */
            obj["kir"] = base.parse_element (/<cim:ExcIEEEST4B.kir>([\s\S]*?)<\/cim:ExcIEEEST4B.kir>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (K<sub>P</sub>).
             * Typical Value = 9.3.
             */
            obj["kp"] = base.parse_element (/<cim:ExcIEEEST4B.kp>([\s\S]*?)<\/cim:ExcIEEEST4B.kp>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain output (K<sub>PM</sub>).
             * Typical Value = 1.
             */
            obj["kpm"] = base.parse_element (/<cim:ExcIEEEST4B.kpm>([\s\S]*?)<\/cim:ExcIEEEST4B.kpm>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PR</sub>).
             * Typical Value = 10.75.
             */
            obj["kpr"] = base.parse_element (/<cim:ExcIEEEST4B.kpr>([\s\S]*?)<\/cim:ExcIEEEST4B.kpr>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEST4B.ta>([\s\S]*?)<\/cim:ExcIEEEST4B.ta>/g, sub, context, true);
            /**
             * Potential circuit phase angle (thetap).
             * Typical Value = 0.
             */
            obj["thetap"] = base.parse_element (/<cim:ExcIEEEST4B.thetap>([\s\S]*?)<\/cim:ExcIEEEST4B.thetap>/g, sub, context, true);
            /**
             * Maximum excitation voltage (V<sub>BMax</sub>).
             * Typical Value = 11.63.
             */
            obj["vbmax"] = base.parse_element (/<cim:ExcIEEEST4B.vbmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vbmax>/g, sub, context, true);
            /**
             * Maximum inner loop output (V<sub>MMax</sub>).
             * Typical Value = 99.
             */
            obj["vmmax"] = base.parse_element (/<cim:ExcIEEEST4B.vmmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vmmax>/g, sub, context, true);
            /**
             * Minimum inner loop output (V<sub>MMin</sub>).
             * Typical Value = -99.
             */
            obj["vmmin"] = base.parse_element (/<cim:ExcIEEEST4B.vmmin>([\s\S]*?)<\/cim:ExcIEEEST4B.vmmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST4B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -0.87.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST4B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST4B.vrmin>/g, sub, context, true);
            /**
             * Reactance associated with potential source (X<sub>L</sub>).
             * Typical Value = 0.124.
             */
            obj["xl"] = base.parse_element (/<cim:ExcIEEEST4B.xl>([\s\S]*?)<\/cim:ExcIEEEST4B.xl>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST4B;
            if (null == bucket)
                context.parsed.ExcIEEEST4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE ST7B static excitation system without stator current limiter (SCL) and current compensator (DROOP) inputs.
         */
        function parse_ExcST7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST7B";
            /**
             * High-value gate feedback gain (Kh).
             * Typical Value = 1.
             */
            obj["kh"] = base.parse_element (/<cim:ExcST7B.kh>([\s\S]*?)<\/cim:ExcST7B.kh>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (Kia).
             * Typical Value = 1.
             */
            obj["kia"] = base.parse_element (/<cim:ExcST7B.kia>([\s\S]*?)<\/cim:ExcST7B.kia>/g, sub, context, true);
            /**
             * Low-value gate feedback gain (Kl).
             * Typical Value = 1.
             */
            obj["kl"] = base.parse_element (/<cim:ExcST7B.kl>([\s\S]*?)<\/cim:ExcST7B.kl>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (Kpa).
             * Typical Value = 40.
             */
            obj["kpa"] = base.parse_element (/<cim:ExcST7B.kpa>([\s\S]*?)<\/cim:ExcST7B.kpa>/g, sub, context, true);
            /**
             * OEL input selector (OELin).
             * Typical Value = noOELinput.
             */
            obj["oelin"] = base.parse_element (/<cim:ExcST7B.oelin>([\s\S]*?)<\/cim:ExcST7B.oelin>/g, sub, context, true);
            /**
             * Regulator lag time constant (Tb).
             * Typical Value = 1.
             */
            obj["tb"] = base.parse_element (/<cim:ExcST7B.tb>([\s\S]*?)<\/cim:ExcST7B.tb>/g, sub, context, true);
            /**
             * Regulator lead time constant (Tc).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcST7B.tc>([\s\S]*?)<\/cim:ExcST7B.tc>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcST7B.tf>([\s\S]*?)<\/cim:ExcST7B.tf>/g, sub, context, true);
            /**
             * Feedback time constant of inner loop field voltage regulator (Tg).
             * Typical Value = 1.
             */
            obj["tg"] = base.parse_element (/<cim:ExcST7B.tg>([\s\S]*?)<\/cim:ExcST7B.tg>/g, sub, context, true);
            /**
             * Feedback time constant (Tia).
             * Typical Value = 3.
             */
            obj["tia"] = base.parse_element (/<cim:ExcST7B.tia>([\s\S]*?)<\/cim:ExcST7B.tia>/g, sub, context, true);
            /**
             * Rectifier firing time constant (Ts).
             * Typical Value = 0.
             */
            obj["ts"] = base.parse_element (/<cim:ExcST7B.ts>([\s\S]*?)<\/cim:ExcST7B.ts>/g, sub, context, true);
            /**
             * UEL input selector (UELin).
             * Typical Value = noUELinput.
             */
            obj["uelin"] = base.parse_element (/<cim:ExcST7B.uelin>([\s\S]*?)<\/cim:ExcST7B.uelin>/g, sub, context, true);
            /**
             * Maximum voltage reference signal (Vmax).
             * Typical Value = 1.1.
             */
            obj["vmax"] = base.parse_element (/<cim:ExcST7B.vmax>([\s\S]*?)<\/cim:ExcST7B.vmax>/g, sub, context, true);
            /**
             * Minimum voltage reference signal (Vmin).
             * Typical Value = 0.9.
             */
            obj["vmin"] = base.parse_element (/<cim:ExcST7B.vmin>([\s\S]*?)<\/cim:ExcST7B.vmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST7B.vrmax>([\s\S]*?)<\/cim:ExcST7B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -4.5.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST7B.vrmin>([\s\S]*?)<\/cim:ExcST7B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcST7B;
            if (null == bucket)
                context.parsed.ExcST7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE DC1A direct current commutator exciter with speed input and without underexcitation limiters (UEL) inputs.
         */
        function parse_ExcDC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC1A";
            /**
             * Maximum voltage exciter output limiter (Efdmax).
             * Typical Value = 99.
             */
            obj["edfmax"] = base.parse_element (/<cim:ExcDC1A.edfmax>([\s\S]*?)<\/cim:ExcDC1A.edfmax>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd1).
             * Typical Value = 3.1.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcDC1A.efd1>([\s\S]*?)<\/cim:ExcDC1A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd2).
             * Typical Value = 2.3.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcDC1A.efd2>([\s\S]*?)<\/cim:ExcDC1A.efd2>/g, sub, context, true);
            /**
             * Minimum voltage exciter output limiter (Efdmin).
             * Typical Value = -99.
             */
            obj["efdmin"] = base.parse_element (/<cim:ExcDC1A.efdmin>([\s\S]*?)<\/cim:ExcDC1A.efdmin>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcDC1A.exclim>([\s\S]*?)<\/cim:ExcDC1A.exclim>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 46.
             */
            obj["ka"] = base.parse_element (/<cim:ExcDC1A.ka>([\s\S]*?)<\/cim:ExcDC1A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 0.
             */
            obj["ke"] = base.parse_element (/<cim:ExcDC1A.ke>([\s\S]*?)<\/cim:ExcDC1A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (Kf).
             * Typical Value = 0.1.
             */
            obj["kf"] = base.parse_element (/<cim:ExcDC1A.kf>([\s\S]*?)<\/cim:ExcDC1A.kf>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcDC1A.ks>([\s\S]*?)<\/cim:ExcDC1A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd1 (Se[Eefd1]).
             * Typical Value = 0.33.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcDC1A.seefd1>([\s\S]*?)<\/cim:ExcDC1A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd1 (Se[Eefd1]).
             * Typical Value = 0.33.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcDC1A.seefd2>([\s\S]*?)<\/cim:ExcDC1A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.06.
             */
            obj["ta"] = base.parse_element (/<cim:ExcDC1A.ta>([\s\S]*?)<\/cim:ExcDC1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcDC1A.tb>([\s\S]*?)<\/cim:ExcDC1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcDC1A.tc>([\s\S]*?)<\/cim:ExcDC1A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 0.46.
             */
            obj["te"] = base.parse_element (/<cim:ExcDC1A.te>([\s\S]*?)<\/cim:ExcDC1A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcDC1A.tf>([\s\S]*?)<\/cim:ExcDC1A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcDC1A.vrmax>([\s\S]*?)<\/cim:ExcDC1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = -0.9.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcDC1A.vrmin>([\s\S]*?)<\/cim:ExcDC1A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcDC1A;
            if (null == bucket)
                context.parsed.ExcDC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Type of rate feedback signals.
         */
        function parse_ExcREXSFeedbackSignalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcREXSFeedbackSignalKind";
            /**
             * The voltage regulator output voltage is used.
             * It is the same as exciter field voltage.
             */
            obj["fieldVoltage"] = base.parse_element (/<cim:ExcREXSFeedbackSignalKind.fieldVoltage>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.fieldVoltage>/g, sub, context, true);
            /**
             * The exciter field current is used.
             */
            obj["fieldCurrent"] = base.parse_element (/<cim:ExcREXSFeedbackSignalKind.fieldCurrent>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.fieldCurrent>/g, sub, context, true);
            /**
             * The output voltage of the exciter is used.
             */
            obj["outputVoltage"] = base.parse_element (/<cim:ExcREXSFeedbackSignalKind.outputVoltage>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.outputVoltage>/g, sub, context, true);
            bucket = context.parsed.ExcREXSFeedbackSignalKind;
            if (null == bucket)
                context.parsed.ExcREXSFeedbackSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE ST3A static excitation system with added speed multiplier.
         */
        function parse_ExcST3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST3A";
            /**
             * Maximum AVR output (Efdmax).
             * Typical Value = 6.9.
             */
            obj["efdmax"] = base.parse_element (/<cim:ExcST3A.efdmax>([\s\S]*?)<\/cim:ExcST3A.efdmax>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 1.1.
             */
            obj["kc"] = base.parse_element (/<cim:ExcST3A.kc>([\s\S]*?)<\/cim:ExcST3A.kc>/g, sub, context, true);
            /**
             * Feedback gain constant of the inner loop field regulator (Kg).
             * Typical Value = 1.
             */
            obj["kg"] = base.parse_element (/<cim:ExcST3A.kg>([\s\S]*?)<\/cim:ExcST3A.kg>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Ki).
             * Typical Value = 4.83.
             */
            obj["ki"] = base.parse_element (/<cim:ExcST3A.ki>([\s\S]*?)<\/cim:ExcST3A.ki>/g, sub, context, true);
            /**
             * AVR gain (Kj).
             * Typical Value = 200.
             */
            obj["kj"] = base.parse_element (/<cim:ExcST3A.kj>([\s\S]*?)<\/cim:ExcST3A.kj>/g, sub, context, true);
            /**
             * Forward gain constant of the inner loop field regulator (Km).
             * Typical Value = 7.04.
             */
            obj["km"] = base.parse_element (/<cim:ExcST3A.km>([\s\S]*?)<\/cim:ExcST3A.km>/g, sub, context, true);
            /**
             * Potential source gain (Kp) (&gt;0).
             * Typical Value = 4.37.
             */
            obj["kp"] = base.parse_element (/<cim:ExcST3A.kp>([\s\S]*?)<\/cim:ExcST3A.kp>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcST3A.ks>([\s\S]*?)<\/cim:ExcST3A.ks>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks1).
             * Typical Value = 0.
             */
            obj["ks1"] = base.parse_element (/<cim:ExcST3A.ks1>([\s\S]*?)<\/cim:ExcST3A.ks1>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 6.67.
             */
            obj["tb"] = base.parse_element (/<cim:ExcST3A.tb>([\s\S]*?)<\/cim:ExcST3A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcST3A.tc>([\s\S]*?)<\/cim:ExcST3A.tc>/g, sub, context, true);
            /**
             * Potential circuit phase angle (thetap).
             * Typical Value = 20.
             */
            obj["thetap"] = base.parse_element (/<cim:ExcST3A.thetap>([\s\S]*?)<\/cim:ExcST3A.thetap>/g, sub, context, true);
            /**
             * Forward time constant of inner loop field regulator (Tm).
             * Typical Value = 1.
             */
            obj["tm"] = base.parse_element (/<cim:ExcST3A.tm>([\s\S]*?)<\/cim:ExcST3A.tm>/g, sub, context, true);
            /**
             * Maximum excitation voltage (Vbmax).
             * Typical Value = 8.63.
             */
            obj["vbmax"] = base.parse_element (/<cim:ExcST3A.vbmax>([\s\S]*?)<\/cim:ExcST3A.vbmax>/g, sub, context, true);
            /**
             * Maximum inner loop feedback voltage (Vgmax).
             * Typical Value = 6.53.
             */
            obj["vgmax"] = base.parse_element (/<cim:ExcST3A.vgmax>([\s\S]*?)<\/cim:ExcST3A.vgmax>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (Vimax).
             * Typical Value = 0.2.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcST3A.vimax>([\s\S]*?)<\/cim:ExcST3A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (Vimin).
             * Typical Value = -0.2.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcST3A.vimin>([\s\S]*?)<\/cim:ExcST3A.vimin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 1.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcST3A.vrmax>([\s\S]*?)<\/cim:ExcST3A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcST3A.vrmin>([\s\S]*?)<\/cim:ExcST3A.vrmin>/g, sub, context, true);
            /**
             * Reactance associated with potential source (Xl).
             * Typical Value = 0.09.
             */
            obj["xl"] = base.parse_element (/<cim:ExcST3A.xl>([\s\S]*?)<\/cim:ExcST3A.xl>/g, sub, context, true);
            bucket = context.parsed.ExcST3A;
            if (null == bucket)
                context.parsed.ExcST3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC1A model.
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC1A. These excitation systems consist of an alternator main exciter with non-controlled rectifiers.
         */
        function parse_ExcIEEEAC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC1A";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC1A.ka>([\s\S]*?)<\/cim:ExcIEEEAC1A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.2.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC1A.kc>([\s\S]*?)<\/cim:ExcIEEEAC1A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (K<sub>D</sub>).
             * Typical Value = 0.38.
             */
            obj["kd"] = base.parse_element (/<cim:ExcIEEEAC1A.kd>([\s\S]*?)<\/cim:ExcIEEEAC1A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEAC1A.ke>([\s\S]*?)<\/cim:ExcIEEEAC1A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEAC1A.kf>([\s\S]*?)<\/cim:ExcIEEEAC1A.kf>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E1</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E1</sub>]).
             * Typical Value = 0.1.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC1A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC1A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, V<sub>E2</sub>, back of commutating reactance (S<sub>E</sub>[V<sub>E2</sub>]).
             * Typical Value = 0.03.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcIEEEAC1A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC1A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC1A.ta>([\s\S]*?)<\/cim:ExcIEEEAC1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEAC1A.tb>([\s\S]*?)<\/cim:ExcIEEEAC1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEAC1A.tc>([\s\S]*?)<\/cim:ExcIEEEAC1A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 0.8.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEAC1A.te>([\s\S]*?)<\/cim:ExcIEEEAC1A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEAC1A.tf>([\s\S]*?)<\/cim:ExcIEEEAC1A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 14.5.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEAC1A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC1A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -14.5.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEAC1A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC1A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E1</sub>).
             * Typical Value = 4.18.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcIEEEAC1A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC1A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (V<sub>E2</sub>).
             * Typical Value = 3.14.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcIEEEAC1A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC1A.ve2>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (V<sub>RMAX</sub>).
             * Typical Value = 6.03.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (V<sub>RMIN</sub>).
             * Typical Value = -5.43.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC1A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC1A;
            if (null == bucket)
                context.parsed.ExcIEEEAC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC5A alternator-supplied rectifier excitation system with different minimum controller output.
         */
        function parse_ExcAC5A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC5A";
            /**
             * Coefficient to allow different usage of the model (a).
             * Typical Value = 1.
             */
            obj["a"] = base.to_float (base.parse_element (/<cim:ExcAC5A.a>([\s\S]*?)<\/cim:ExcAC5A.a>/g, sub, context, true));
            /**
             * Exciter voltage at which exciter saturation is defined (Efd1).
             * Typical Value = 5.6.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcAC5A.efd1>([\s\S]*?)<\/cim:ExcAC5A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (Efd2).
             * Typical Value = 4.2.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcAC5A.efd2>([\s\S]*?)<\/cim:ExcAC5A.efd2>/g, sub, context, true);
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC5A.ka>([\s\S]*?)<\/cim:ExcAC5A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC5A.ke>([\s\S]*?)<\/cim:ExcAC5A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcAC5A.kf>([\s\S]*?)<\/cim:ExcAC5A.kf>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC5A.ks>([\s\S]*?)<\/cim:ExcAC5A.ks>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd1 (S<sub>E</sub>[Efd1]).
             * Typical Value = 0.86.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcAC5A.seefd1>([\s\S]*?)<\/cim:ExcAC5A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Efd2 (S<sub>E</sub>[Efd2]).
             * Typical Value = 0.5.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcAC5A.seefd2>([\s\S]*?)<\/cim:ExcAC5A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC5A.ta>([\s\S]*?)<\/cim:ExcAC5A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC5A.tb>([\s\S]*?)<\/cim:ExcAC5A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tc).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC5A.tc>([\s\S]*?)<\/cim:ExcAC5A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 0.8.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC5A.te>([\s\S]*?)<\/cim:ExcAC5A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf1).
             * Typical Value  = 1.
             */
            obj["tf1"] = base.parse_element (/<cim:ExcAC5A.tf1>([\s\S]*?)<\/cim:ExcAC5A.tf1>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf2).
             * Typical Value = 0.8.
             */
            obj["tf2"] = base.parse_element (/<cim:ExcAC5A.tf2>([\s\S]*?)<\/cim:ExcAC5A.tf2>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf3).
             * Typical Value = 0.
             */
            obj["tf3"] = base.parse_element (/<cim:ExcAC5A.tf3>([\s\S]*?)<\/cim:ExcAC5A.tf3>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 7.3.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC5A.vrmax>([\s\S]*?)<\/cim:ExcAC5A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value =-7.3.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC5A.vrmin>([\s\S]*?)<\/cim:ExcAC5A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcAC5A;
            if (null == bucket)
                context.parsed.ExcAC5A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Hungarian Excitation System Model, with built-in voltage transducer.
         */
        function parse_ExcHU (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcHU";
            /**
             * Major loop PI tag gain factor (Ae).
             * Typical Value = 3.
             */
            obj["ae"] = base.parse_element (/<cim:ExcHU.ae>([\s\S]*?)<\/cim:ExcHU.ae>/g, sub, context, true);
            /**
             * Minor loop PI tag gain factor (Ai).
             * Typical Value = 22.
             */
            obj["ai"] = base.parse_element (/<cim:ExcHU.ai>([\s\S]*?)<\/cim:ExcHU.ai>/g, sub, context, true);
            /**
             * AVR constant (Atr).
             * Typical Value = 2.19.
             */
            obj["atr"] = base.parse_element (/<cim:ExcHU.atr>([\s\S]*?)<\/cim:ExcHU.atr>/g, sub, context, true);
            /**
             * Field voltage control signal upper limit on AVR base (Emax).
             * Typical Value = 0.996.
             */
            obj["emax"] = base.parse_element (/<cim:ExcHU.emax>([\s\S]*?)<\/cim:ExcHU.emax>/g, sub, context, true);
            /**
             * Field voltage control signal lower limit on AVR base (Emin).
             * Typical Value = -0.866.
             */
            obj["emin"] = base.parse_element (/<cim:ExcHU.emin>([\s\S]*?)<\/cim:ExcHU.emin>/g, sub, context, true);
            /**
             * Major loop PI tag output signal upper limit (Imax).
             * Typical Value = 2.19.
             */
            obj["imax"] = base.parse_element (/<cim:ExcHU.imax>([\s\S]*?)<\/cim:ExcHU.imax>/g, sub, context, true);
            /**
             * Major loop PI tag output signal lower limit (Imin).
             * Typical Value = 0.1.
             */
            obj["imin"] = base.parse_element (/<cim:ExcHU.imin>([\s\S]*?)<\/cim:ExcHU.imin>/g, sub, context, true);
            /**
             * Voltage base conversion constant (Ke).
             * Typical Value = 4.666.
             */
            obj["ke"] = base.to_float (base.parse_element (/<cim:ExcHU.ke>([\s\S]*?)<\/cim:ExcHU.ke>/g, sub, context, true));
            /**
             * Current base conversion constant (Ki).
             * Typical Value = 0.21428.
             */
            obj["ki"] = base.to_float (base.parse_element (/<cim:ExcHU.ki>([\s\S]*?)<\/cim:ExcHU.ki>/g, sub, context, true));
            /**
             * Major loop PI tag integration time constant (Te).
             * Typical Value = 0.154.
             */
            obj["te"] = base.parse_element (/<cim:ExcHU.te>([\s\S]*?)<\/cim:ExcHU.te>/g, sub, context, true);
            /**
             * Minor loop PI control tag integration time constant (Ti).
             * Typical Value = 0.01333.
             */
            obj["ti"] = base.parse_element (/<cim:ExcHU.ti>([\s\S]*?)<\/cim:ExcHU.ti>/g, sub, context, true);
            /**
             * Filter time constant (Tr).
             * If a voltage compensator is used in conjunction with this excitation system model, Tr should be set to 0.  Typical Value = 0.01.
             */
            obj["tr"] = base.parse_element (/<cim:ExcHU.tr>([\s\S]*?)<\/cim:ExcHU.tr>/g, sub, context, true);
            bucket = context.parsed.ExcHU;
            if (null == bucket)
                context.parsed.ExcHU = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * IVO excitation system.
         */
        function parse_ExcAVR7 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR7";
            /**
             * Lead coefficient (A1).
             * Typical Value = 0.5.
             */
            obj["a1"] = base.parse_element (/<cim:ExcAVR7.a1>([\s\S]*?)<\/cim:ExcAVR7.a1>/g, sub, context, true);
            /**
             * Lag coefficient (A2).
             * Typical Value = 0.5.
             */
            obj["a2"] = base.parse_element (/<cim:ExcAVR7.a2>([\s\S]*?)<\/cim:ExcAVR7.a2>/g, sub, context, true);
            /**
             * Lead coefficient (A3).
             * Typical Value = 0.5.
             */
            obj["a3"] = base.parse_element (/<cim:ExcAVR7.a3>([\s\S]*?)<\/cim:ExcAVR7.a3>/g, sub, context, true);
            /**
             * Lag coefficient (A4).
             * Typical Value = 0.5.
             */
            obj["a4"] = base.parse_element (/<cim:ExcAVR7.a4>([\s\S]*?)<\/cim:ExcAVR7.a4>/g, sub, context, true);
            /**
             * Lead coefficient (A5).
             * Typical Value = 0.5.
             */
            obj["a5"] = base.parse_element (/<cim:ExcAVR7.a5>([\s\S]*?)<\/cim:ExcAVR7.a5>/g, sub, context, true);
            /**
             * Lag coefficient (A6).
             * Typical Value = 0.5.
             */
            obj["a6"] = base.parse_element (/<cim:ExcAVR7.a6>([\s\S]*?)<\/cim:ExcAVR7.a6>/g, sub, context, true);
            /**
             * Gain (K1).
             * Typical Value = 1.
             */
            obj["k1"] = base.parse_element (/<cim:ExcAVR7.k1>([\s\S]*?)<\/cim:ExcAVR7.k1>/g, sub, context, true);
            /**
             * Gain (K3).
             * Typical Value = 3.
             */
            obj["k3"] = base.parse_element (/<cim:ExcAVR7.k3>([\s\S]*?)<\/cim:ExcAVR7.k3>/g, sub, context, true);
            /**
             * Gain (K5).
             * Typical Value = 1.
             */
            obj["k5"] = base.parse_element (/<cim:ExcAVR7.k5>([\s\S]*?)<\/cim:ExcAVR7.k5>/g, sub, context, true);
            /**
             * Lead time constant (T1).
             * Typical Value = 0.05.
             */
            obj["t1"] = base.parse_element (/<cim:ExcAVR7.t1>([\s\S]*?)<\/cim:ExcAVR7.t1>/g, sub, context, true);
            /**
             * Lag time constant (T2).
             * Typical Value = 0.1.
             */
            obj["t2"] = base.parse_element (/<cim:ExcAVR7.t2>([\s\S]*?)<\/cim:ExcAVR7.t2>/g, sub, context, true);
            /**
             * Lead time constant (T3).
             * Typical Value = 0.1.
             */
            obj["t3"] = base.parse_element (/<cim:ExcAVR7.t3>([\s\S]*?)<\/cim:ExcAVR7.t3>/g, sub, context, true);
            /**
             * Lag time constant (T4).
             * Typical Value = 0.1.
             */
            obj["t4"] = base.parse_element (/<cim:ExcAVR7.t4>([\s\S]*?)<\/cim:ExcAVR7.t4>/g, sub, context, true);
            /**
             * Lead time constant (T5).
             * Typical Value = 0.1.
             */
            obj["t5"] = base.parse_element (/<cim:ExcAVR7.t5>([\s\S]*?)<\/cim:ExcAVR7.t5>/g, sub, context, true);
            /**
             * Lag time constant (T6).
             * Typical Value = 0.1.
             */
            obj["t6"] = base.parse_element (/<cim:ExcAVR7.t6>([\s\S]*?)<\/cim:ExcAVR7.t6>/g, sub, context, true);
            /**
             * Lead-lag max. limit (Vmax1).
             * Typical Value = 5.
             */
            obj["vmax1"] = base.parse_element (/<cim:ExcAVR7.vmax1>([\s\S]*?)<\/cim:ExcAVR7.vmax1>/g, sub, context, true);
            /**
             * Lead-lag max. limit (Vmax3).
             * Typical Value = 5.
             */
            obj["vmax3"] = base.parse_element (/<cim:ExcAVR7.vmax3>([\s\S]*?)<\/cim:ExcAVR7.vmax3>/g, sub, context, true);
            /**
             * Lead-lag max. limit (Vmax5).
             * Typical Value = 5.
             */
            obj["vmax5"] = base.parse_element (/<cim:ExcAVR7.vmax5>([\s\S]*?)<\/cim:ExcAVR7.vmax5>/g, sub, context, true);
            /**
             * Lead-lag min. limit (Vmin1).
             * Typical Value = -5.
             */
            obj["vmin1"] = base.parse_element (/<cim:ExcAVR7.vmin1>([\s\S]*?)<\/cim:ExcAVR7.vmin1>/g, sub, context, true);
            /**
             * Lead-lag min. limit (Vmin3).
             * Typical Value = -5.
             */
            obj["vmin3"] = base.parse_element (/<cim:ExcAVR7.vmin3>([\s\S]*?)<\/cim:ExcAVR7.vmin3>/g, sub, context, true);
            /**
             * Lead-lag min. limit (Vmin5).
             * Typical Value = -2.
             */
            obj["vmin5"] = base.parse_element (/<cim:ExcAVR7.vmin5>([\s\S]*?)<\/cim:ExcAVR7.vmin5>/g, sub, context, true);
            bucket = context.parsed.ExcAVR7;
            if (null == bucket)
                context.parsed.ExcAVR7 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST7B model.
         * This model is representative of static potential-source excitation systems. In this system, the AVR consists of a PI voltage regulator. A phase lead-lag filter in series allows introduction of a derivative function, typically used with brushless excitation systems. In that case, the regulator is of the PID type. In addition, the terminal voltage channel includes a phase lead-lag filter.  The AVR includes the appropriate inputs on its reference for overexcitation limiter (OEL1), underexcitation limiter (UEL), stator current limiter (SCL), and current compensator (DROOP). All these limitations, when they work at voltage reference level, keep the PSS (VS signal from Type PSS1A, PSS2A, or PSS2B) in operation. However, the UEL limitation can also be transferred to the high value (HV) gate acting on the output signal. In addition, the output signal passes through a low value (LV) gate for a ceiling overexcitation limiter (OEL2).
         */
        function parse_ExcIEEEST7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST7B";
            /**
             * High-value gate feedback gain (K<sub>H</sub>).
             * Typical Value 1.
             */
            obj["kh"] = base.parse_element (/<cim:ExcIEEEST7B.kh>([\s\S]*?)<\/cim:ExcIEEEST7B.kh>/g, sub, context, true);
            /**
             * Voltage regulator integral gain (K<sub>IA</sub>).
             * Typical Value = 1.
             */
            obj["kia"] = base.parse_element (/<cim:ExcIEEEST7B.kia>([\s\S]*?)<\/cim:ExcIEEEST7B.kia>/g, sub, context, true);
            /**
             * Low-value gate feedback gain (K<sub>L</sub>).
             * Typical Value 1.
             */
            obj["kl"] = base.parse_element (/<cim:ExcIEEEST7B.kl>([\s\S]*?)<\/cim:ExcIEEEST7B.kl>/g, sub, context, true);
            /**
             * Voltage regulator proportional gain (K<sub>PA</sub>).
             * Typical Value = 40.
             */
            obj["kpa"] = base.parse_element (/<cim:ExcIEEEST7B.kpa>([\s\S]*?)<\/cim:ExcIEEEST7B.kpa>/g, sub, context, true);
            /**
             * OEL input selector (OELin).
             * Typical Value = noOELinput.
             */
            obj["oelin"] = base.parse_element (/<cim:ExcIEEEST7B.oelin>([\s\S]*?)<\/cim:ExcIEEEST7B.oelin>/g, sub, context, true);
            /**
             * Regulator lag time constant (T<sub>B</sub>).
             * Typical Value 1.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEST7B.tb>([\s\S]*?)<\/cim:ExcIEEEST7B.tb>/g, sub, context, true);
            /**
             * Regulator lead time constant (T<sub>C</sub>).
             * Typical Value 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEST7B.tc>([\s\S]*?)<\/cim:ExcIEEEST7B.tc>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEST7B.tf>([\s\S]*?)<\/cim:ExcIEEEST7B.tf>/g, sub, context, true);
            /**
             * Feedback time constant of inner loop field voltage regulator (T<sub>G</sub>).
             * Typical Value 1.
             */
            obj["tg"] = base.parse_element (/<cim:ExcIEEEST7B.tg>([\s\S]*?)<\/cim:ExcIEEEST7B.tg>/g, sub, context, true);
            /**
             * Feedback time constant (T<sub>IA</sub>).
             * Typical Value = 3.
             */
            obj["tia"] = base.parse_element (/<cim:ExcIEEEST7B.tia>([\s\S]*?)<\/cim:ExcIEEEST7B.tia>/g, sub, context, true);
            /**
             * UEL input selector (UELin).
             * Typical Value = noUELinput.
             */
            obj["uelin"] = base.parse_element (/<cim:ExcIEEEST7B.uelin>([\s\S]*?)<\/cim:ExcIEEEST7B.uelin>/g, sub, context, true);
            /**
             * Maximum voltage reference signal (V<sub>MAX</sub>).
             * Typical Value = 1.1.
             */
            obj["vmax"] = base.parse_element (/<cim:ExcIEEEST7B.vmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vmax>/g, sub, context, true);
            /**
             * Minimum voltage reference signal (V<sub>MIN</sub>).
             * Typical Value = 0.9.
             */
            obj["vmin"] = base.parse_element (/<cim:ExcIEEEST7B.vmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vmin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST7B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -4.5.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST7B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST7B;
            if (null == bucket)
                context.parsed.ExcIEEEST7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC2A model.
         * This model represents represent field-controlled dc commutator exciters with continuously acting voltage regulators having supplies obtained from the generator or auxiliary bus.  It differs from the Type DC1A model only in the voltage regulator output limits, which are now proportional to terminal voltage <b>V</b><b><sub>T</sub></b>.
         */
        function parse_ExcIEEEDC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC2A";
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD1</sub>).
             * Typical Value = 3.05.
             */
            obj["efd1"] = base.parse_element (/<cim:ExcIEEEDC2A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC2A.efd1>/g, sub, context, true);
            /**
             * Exciter voltage at which exciter saturation is defined (E<sub>FD2</sub>).
             * Typical Value = 2.29.
             */
            obj["efd2"] = base.parse_element (/<cim:ExcIEEEDC2A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC2A.efd2>/g, sub, context, true);
            /**
             * (exclim).
             * IEEE standard is ambiguous about lower limit on exciter output. Typical Value = - 999  which means that there is no limit applied.
             */
            obj["exclim"] = base.parse_element (/<cim:ExcIEEEDC2A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC2A.exclim>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 300.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEDC2A.ka>([\s\S]*?)<\/cim:ExcIEEEDC2A.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (K<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcIEEEDC2A.ke>([\s\S]*?)<\/cim:ExcIEEEDC2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (K<sub>F</sub>).
             * Typical Value = 0.1.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEDC2A.kf>([\s\S]*?)<\/cim:ExcIEEEDC2A.kf>/g, sub, context, true);
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD1</sub> (S<sub>E</sub>[E<sub>FD1</sub>]).
             * Typical Value = 0.279.
             */
            obj["seefd1"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC2A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC2A.seefd1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, E<sub>FD2</sub> (S<sub>E</sub>[E<sub>FD2</sub>]).
             * Typical Value = 0.117.
             */
            obj["seefd2"] = base.to_float (base.parse_element (/<cim:ExcIEEEDC2A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC2A.seefd2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.01.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEDC2A.ta>([\s\S]*?)<\/cim:ExcIEEEDC2A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEDC2A.tb>([\s\S]*?)<\/cim:ExcIEEEDC2A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEDC2A.tc>([\s\S]*?)<\/cim:ExcIEEEDC2A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (T<sub>E</sub>).
             * Typical Value = 1.33.
             */
            obj["te"] = base.parse_element (/<cim:ExcIEEEDC2A.te>([\s\S]*?)<\/cim:ExcIEEEDC2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 0.675.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEDC2A.tf>([\s\S]*?)<\/cim:ExcIEEEDC2A.tf>/g, sub, context, true);
            /**
             * UEL input (uelin).
            true = input is connected to the HV gate
            false = input connects to the error signal.
             * Typical Value = true.
             */
            obj["uelin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEDC2A.uelin>([\s\S]*?)<\/cim:ExcIEEEDC2A.uelin>/g, sub, context, true));
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 4.95.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEDC2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -4.9.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEDC2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC2A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEDC2A;
            if (null == bucket)
                context.parsed.ExcIEEEDC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Italian excitation system.
         * It represents exciter dynamo and electric regulator.
         */
        function parse_ExcAVR3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR3";
            /**
             * Field voltage value 1 (E1).
             * Typical Value = 4.18.
             */
            obj["e1"] = base.parse_element (/<cim:ExcAVR3.e1>([\s\S]*?)<\/cim:ExcAVR3.e1>/g, sub, context, true);
            /**
             * Field voltage value 2 (E2).
             * Typical Value = 3.14.
             */
            obj["e2"] = base.parse_element (/<cim:ExcAVR3.e2>([\s\S]*?)<\/cim:ExcAVR3.e2>/g, sub, context, true);
            /**
             * AVR gain (K<sub>A</sub>).
             * Typical Value = 100.
             */
            obj["ka"] = base.to_float (base.parse_element (/<cim:ExcAVR3.ka>([\s\S]*?)<\/cim:ExcAVR3.ka>/g, sub, context, true));
            /**
             * Saturation factor at E1 (S(E1)).
             * Typical Value = 0.1.
             */
            obj["se1"] = base.to_float (base.parse_element (/<cim:ExcAVR3.se1>([\s\S]*?)<\/cim:ExcAVR3.se1>/g, sub, context, true));
            /**
             * Saturation factor at E2 (S(E2)).
             * Typical Value = 0.03.
             */
            obj["se2"] = base.to_float (base.parse_element (/<cim:ExcAVR3.se2>([\s\S]*?)<\/cim:ExcAVR3.se2>/g, sub, context, true));
            /**
             * AVR time constant (T<sub>1</sub>).
             * Typical Value = 20.
             */
            obj["t1"] = base.parse_element (/<cim:ExcAVR3.t1>([\s\S]*?)<\/cim:ExcAVR3.t1>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>2</sub>).
             * Typical Value = 1.6.
             */
            obj["t2"] = base.parse_element (/<cim:ExcAVR3.t2>([\s\S]*?)<\/cim:ExcAVR3.t2>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>3</sub>).
             * Typical Value = 0.66.
             */
            obj["t3"] = base.parse_element (/<cim:ExcAVR3.t3>([\s\S]*?)<\/cim:ExcAVR3.t3>/g, sub, context, true);
            /**
             * AVR time constant (T<sub>4</sub>).
             * Typical Value = 0.07.
             */
            obj["t4"] = base.parse_element (/<cim:ExcAVR3.t4>([\s\S]*?)<\/cim:ExcAVR3.t4>/g, sub, context, true);
            /**
             * Exciter time constant (T<sub>E</sub>).
             * Typical Value = 1.
             */
            obj["te"] = base.parse_element (/<cim:ExcAVR3.te>([\s\S]*?)<\/cim:ExcAVR3.te>/g, sub, context, true);
            /**
             * Minimum AVR output (V<sub>RMN</sub>).
             * Typical Value = -7.5.
             */
            obj["vrmn"] = base.parse_element (/<cim:ExcAVR3.vrmn>([\s\S]*?)<\/cim:ExcAVR3.vrmn>/g, sub, context, true);
            /**
             * Maximum AVR output (V<sub>RMX</sub>).
             * Typical Value = 7.5.
             */
            obj["vrmx"] = base.parse_element (/<cim:ExcAVR3.vrmx>([\s\S]*?)<\/cim:ExcAVR3.vrmx>/g, sub, context, true);
            bucket = context.parsed.ExcAVR3;
            if (null == bucket)
                context.parsed.ExcAVR3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC4A model.
         * The model represents type AC4A alternator-supplied controlled-rectifier excitation system which is quite different from the other type ac systems. This high initial response excitation system utilizes a full thyristor bridge in the exciter output circuit.  The voltage regulator controls the firing of the thyristor bridges. The exciter alternator uses an independent voltage regulator to control its output voltage to a constant value. These effects are not modeled; however, transient loading effects on the exciter alternator are included.
         */
        function parse_ExcIEEEAC4A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC4A";
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 200.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEAC4A.ka>([\s\S]*?)<\/cim:ExcIEEEAC4A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEAC4A.kc>([\s\S]*?)<\/cim:ExcIEEEAC4A.kc>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.015.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEAC4A.ta>([\s\S]*?)<\/cim:ExcIEEEAC4A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEAC4A.tb>([\s\S]*?)<\/cim:ExcIEEEAC4A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEAC4A.tc>([\s\S]*?)<\/cim:ExcIEEEAC4A.tc>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (V<sub>IMAX</sub>).
             * Typical Value = 10.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcIEEEAC4A.vimax>([\s\S]*?)<\/cim:ExcIEEEAC4A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (V<sub>IMIN</sub>).
             * Typical Value = -10.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcIEEEAC4A.vimin>([\s\S]*?)<\/cim:ExcIEEEAC4A.vimin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>RMAX</sub>).
             * Typical Value = 5.64.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEAC4A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC4A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>RMIN</sub>).
             * Typical Value = -4.53.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEAC4A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC4A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEAC4A;
            if (null == bucket)
                context.parsed.ExcIEEEAC4A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Modified IEEE AC2A alternator-supplied rectifier excitation system with different field current limit.
         */
        function parse_ExcAC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC2A";
            /**
             * Indicates if HV gate is active (HVgate).
            true = gate is used
            false = gate is not used.
             * Typical Value = true.
             */
            obj["hvgate"] = base.to_boolean (base.parse_element (/<cim:ExcAC2A.hvgate>([\s\S]*?)<\/cim:ExcAC2A.hvgate>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 400.
             */
            obj["ka"] = base.parse_element (/<cim:ExcAC2A.ka>([\s\S]*?)<\/cim:ExcAC2A.ka>/g, sub, context, true);
            /**
             * Second stage regulator gain (Kb) (&gt;0).
             * Exciter field current controller gain.  Typical Value = 25.
             */
            obj["kb"] = base.parse_element (/<cim:ExcAC2A.kb>([\s\S]*?)<\/cim:ExcAC2A.kb>/g, sub, context, true);
            /**
             * Second stage regulator gain (Kb1).
             * It is exciter field current controller gain used as alternative to Kb to represent a variant of the ExcAC2A model.  Typical Value = 25.
             */
            obj["kb1"] = base.parse_element (/<cim:ExcAC2A.kb1>([\s\S]*?)<\/cim:ExcAC2A.kb1>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (Kc).
             * Typical Value = 0.28.
             */
            obj["kc"] = base.parse_element (/<cim:ExcAC2A.kc>([\s\S]*?)<\/cim:ExcAC2A.kc>/g, sub, context, true);
            /**
             * Demagnetizing factor, a function of exciter alternator reactances (Kd).
             * Typical Value = 0.35.
             */
            obj["kd"] = base.parse_element (/<cim:ExcAC2A.kd>([\s\S]*?)<\/cim:ExcAC2A.kd>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcAC2A.ke>([\s\S]*?)<\/cim:ExcAC2A.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (Kf).
             * Typical Value = 0.03.
             */
            obj["kf"] = base.parse_element (/<cim:ExcAC2A.kf>([\s\S]*?)<\/cim:ExcAC2A.kf>/g, sub, context, true);
            /**
             * Exciter field current feedback gain (Kh).
             * Typical Value = 1.
             */
            obj["kh"] = base.parse_element (/<cim:ExcAC2A.kh>([\s\S]*?)<\/cim:ExcAC2A.kh>/g, sub, context, true);
            /**
             * Exciter field current limiter gain (Kl).
             * Typical Value = 10.
             */
            obj["kl"] = base.parse_element (/<cim:ExcAC2A.kl>([\s\S]*?)<\/cim:ExcAC2A.kl>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model (Kl1).
             * Typical Value = 1.
             */
            obj["kl1"] = base.parse_element (/<cim:ExcAC2A.kl1>([\s\S]*?)<\/cim:ExcAC2A.kl1>/g, sub, context, true);
            /**
             * Coefficient to allow different usage of the model-speed coefficient (Ks).
             * Typical Value = 0.
             */
            obj["ks"] = base.parse_element (/<cim:ExcAC2A.ks>([\s\S]*?)<\/cim:ExcAC2A.ks>/g, sub, context, true);
            /**
             * Indicates if LV gate is active (LVgate).
            true = gate is used
            false = gate is not used.
             * Typical Value = true.
             */
            obj["lvgate"] = base.to_boolean (base.parse_element (/<cim:ExcAC2A.lvgate>([\s\S]*?)<\/cim:ExcAC2A.lvgate>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>1</sub>, back of commutating reactance (Se[Ve<sub>1</sub>]).
             * Typical Value = 0.037.
             */
            obj["seve1"] = base.to_float (base.parse_element (/<cim:ExcAC2A.seve1>([\s\S]*?)<\/cim:ExcAC2A.seve1>/g, sub, context, true));
            /**
             * Exciter saturation function value at the corresponding exciter voltage, Ve<sub>2</sub>, back of commutating reactance (Se[Ve<sub>2</sub>]).
             * Typical Value = 0.012.
             */
            obj["seve2"] = base.to_float (base.parse_element (/<cim:ExcAC2A.seve2>([\s\S]*?)<\/cim:ExcAC2A.seve2>/g, sub, context, true));
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.02.
             */
            obj["ta"] = base.parse_element (/<cim:ExcAC2A.ta>([\s\S]*?)<\/cim:ExcAC2A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Tb).
             * Typical Value = 0.
             */
            obj["tb"] = base.parse_element (/<cim:ExcAC2A.tb>([\s\S]*?)<\/cim:ExcAC2A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>c</sub>).
             * Typical Value = 0.
             */
            obj["tc"] = base.parse_element (/<cim:ExcAC2A.tc>([\s\S]*?)<\/cim:ExcAC2A.tc>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 0.6.
             */
            obj["te"] = base.parse_element (/<cim:ExcAC2A.te>([\s\S]*?)<\/cim:ExcAC2A.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcAC2A.tf>([\s\S]*?)<\/cim:ExcAC2A.tf>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>amax</sub>).
             * Typical Value = 8.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcAC2A.vamax>([\s\S]*?)<\/cim:ExcAC2A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>amin</sub>).
             * Typical Value = -8.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcAC2A.vamin>([\s\S]*?)<\/cim:ExcAC2A.vamin>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>1</sub>).
             * Typical Value = 4.4.
             */
            obj["ve1"] = base.parse_element (/<cim:ExcAC2A.ve1>([\s\S]*?)<\/cim:ExcAC2A.ve1>/g, sub, context, true);
            /**
             * Exciter alternator output voltages back of commutating reactance at which saturation is defined (Ve<sub>2</sub>).
             * Typical Value = 3.3.
             */
            obj["ve2"] = base.parse_element (/<cim:ExcAC2A.ve2>([\s\S]*?)<\/cim:ExcAC2A.ve2>/g, sub, context, true);
            /**
             * Exciter field current limit reference (Vfemax).
             * Typical Value = 4.4.
             */
            obj["vfemax"] = base.parse_element (/<cim:ExcAC2A.vfemax>([\s\S]*?)<\/cim:ExcAC2A.vfemax>/g, sub, context, true);
            /**
             * Maximum exciter field current (Vlr).
             * Typical Value = 4.4.
             */
            obj["vlr"] = base.parse_element (/<cim:ExcAC2A.vlr>([\s\S]*?)<\/cim:ExcAC2A.vlr>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (Vrmax).
             * Typical Value = 105.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcAC2A.vrmax>([\s\S]*?)<\/cim:ExcAC2A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (Vrmin).
             * Typical Value = -95.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcAC2A.vrmin>([\s\S]*?)<\/cim:ExcAC2A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcAC2A;
            if (null == bucket)
                context.parsed.ExcAC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * This is modified old IEEE type 3 excitation system.
         */
        function parse_ExcDC3A1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC3A1";
            /**
             * (exclim).
            true = lower limit of zero is applied to integrator output
            false = lower limit of zero not applied to integrator output.
             * Typical Value = true.
             */
            obj["exclim"] = base.to_boolean (base.parse_element (/<cim:ExcDC3A1.exclim>([\s\S]*?)<\/cim:ExcDC3A1.exclim>/g, sub, context, true));
            /**
             * Voltage regulator gain (Ka).
             * Typical Value = 300.
             */
            obj["ka"] = base.parse_element (/<cim:ExcDC3A1.ka>([\s\S]*?)<\/cim:ExcDC3A1.ka>/g, sub, context, true);
            /**
             * Exciter constant related to self-excited field (Ke).
             * Typical Value = 1.
             */
            obj["ke"] = base.parse_element (/<cim:ExcDC3A1.ke>([\s\S]*?)<\/cim:ExcDC3A1.ke>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gain (Kf).
             * Typical Value = 0.1.
             */
            obj["kf"] = base.parse_element (/<cim:ExcDC3A1.kf>([\s\S]*?)<\/cim:ExcDC3A1.kf>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Ki).
             * Typical Value = 4.83.
             */
            obj["ki"] = base.parse_element (/<cim:ExcDC3A1.ki>([\s\S]*?)<\/cim:ExcDC3A1.ki>/g, sub, context, true);
            /**
             * Potential circuit gain coefficient (Kp).
             * Typical Value = 4.37.
             */
            obj["kp"] = base.parse_element (/<cim:ExcDC3A1.kp>([\s\S]*?)<\/cim:ExcDC3A1.kp>/g, sub, context, true);
            /**
             * Voltage regulator time constant (Ta).
             * Typical Value = 0.01.
             */
            obj["ta"] = base.parse_element (/<cim:ExcDC3A1.ta>([\s\S]*?)<\/cim:ExcDC3A1.ta>/g, sub, context, true);
            /**
             * Exciter time constant, integration rate associated with exciter control (Te).
             * Typical Value = 1.83.
             */
            obj["te"] = base.parse_element (/<cim:ExcDC3A1.te>([\s\S]*?)<\/cim:ExcDC3A1.te>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (Tf).
             * Typical Value = 0.675.
             */
            obj["tf"] = base.parse_element (/<cim:ExcDC3A1.tf>([\s\S]*?)<\/cim:ExcDC3A1.tf>/g, sub, context, true);
            /**
             * Available exciter voltage limiter (Vb1max).
             * Typical Value = 11.63.
             */
            obj["vb1max"] = base.parse_element (/<cim:ExcDC3A1.vb1max>([\s\S]*?)<\/cim:ExcDC3A1.vb1max>/g, sub, context, true);
            /**
             * Vb limiter indicator.
            true = exciter Vbmax limiter is active
            false = Vb1max is active.
             * Typical Value = true.
             */
            obj["vblim"] = base.to_boolean (base.parse_element (/<cim:ExcDC3A1.vblim>([\s\S]*?)<\/cim:ExcDC3A1.vblim>/g, sub, context, true));
            /**
             * Available exciter voltage limiter (Vbmax).
             * Typical Value = 11.63.
             */
            obj["vbmax"] = base.parse_element (/<cim:ExcDC3A1.vbmax>([\s\S]*?)<\/cim:ExcDC3A1.vbmax>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (Vrmax).
             * Typical Value = 5.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcDC3A1.vrmax>([\s\S]*?)<\/cim:ExcDC3A1.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (Vrmin).
             * Typical Value = 0.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcDC3A1.vrmin>([\s\S]*?)<\/cim:ExcDC3A1.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcDC3A1;
            if (null == bucket)
                context.parsed.ExcDC3A1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST1A model.
         * This model represents systems in which excitation power is supplied through a transformer from the generator terminals (or the unit�s auxiliary bus) and is regulated by a controlled rectifier.  The maximum exciter voltage available from such systems is directly related to the generator terminal voltage.
         */
        function parse_ExcIEEEST1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST1A";
            /**
             * Exciter output current limit reference (I<sub>LR</sub>).
             * Typical Value = 0.
             */
            obj["ilr"] = base.parse_element (/<cim:ExcIEEEST1A.ilr>([\s\S]*?)<\/cim:ExcIEEEST1A.ilr>/g, sub, context, true);
            /**
             * Voltage regulator gain (K<sub>A</sub>).
             * Typical Value = 190.
             */
            obj["ka"] = base.parse_element (/<cim:ExcIEEEST1A.ka>([\s\S]*?)<\/cim:ExcIEEEST1A.ka>/g, sub, context, true);
            /**
             * Rectifier loading factor proportional to commutating reactance (K<sub>C</sub>).
             * Typical Value = 0.08.
             */
            obj["kc"] = base.parse_element (/<cim:ExcIEEEST1A.kc>([\s\S]*?)<\/cim:ExcIEEEST1A.kc>/g, sub, context, true);
            /**
             * Excitation control system stabilizer gains (K<sub>F</sub>).
             * Typical Value = 0.
             */
            obj["kf"] = base.parse_element (/<cim:ExcIEEEST1A.kf>([\s\S]*?)<\/cim:ExcIEEEST1A.kf>/g, sub, context, true);
            /**
             * Exciter output current limiter gain (K<sub>LR</sub>).
             * Typical Value = 0.
             */
            obj["klr"] = base.parse_element (/<cim:ExcIEEEST1A.klr>([\s\S]*?)<\/cim:ExcIEEEST1A.klr>/g, sub, context, true);
            /**
             * Selector of the Power System Stabilizer (PSS) input (PSSin).
            true = PSS input (Vs) added to error signal
            false = PSS input (Vs) added to voltage regulator output.
             * Typical Value = true.
             */
            obj["pssin"] = base.to_boolean (base.parse_element (/<cim:ExcIEEEST1A.pssin>([\s\S]*?)<\/cim:ExcIEEEST1A.pssin>/g, sub, context, true));
            /**
             * Voltage regulator time constant (T<sub>A</sub>).
             * Typical Value = 0.
             */
            obj["ta"] = base.parse_element (/<cim:ExcIEEEST1A.ta>([\s\S]*?)<\/cim:ExcIEEEST1A.ta>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B</sub>).
             * Typical Value = 10.
             */
            obj["tb"] = base.parse_element (/<cim:ExcIEEEST1A.tb>([\s\S]*?)<\/cim:ExcIEEEST1A.tb>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>B1</sub>).
             * Typical Value = 0.
             */
            obj["tb1"] = base.parse_element (/<cim:ExcIEEEST1A.tb1>([\s\S]*?)<\/cim:ExcIEEEST1A.tb1>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C</sub>).
             * Typical Value = 1.
             */
            obj["tc"] = base.parse_element (/<cim:ExcIEEEST1A.tc>([\s\S]*?)<\/cim:ExcIEEEST1A.tc>/g, sub, context, true);
            /**
             * Voltage regulator time constant (T<sub>C1</sub>).
             * Typical Value = 0.
             */
            obj["tc1"] = base.parse_element (/<cim:ExcIEEEST1A.tc1>([\s\S]*?)<\/cim:ExcIEEEST1A.tc1>/g, sub, context, true);
            /**
             * Excitation control system stabilizer time constant (T<sub>F</sub>).
             * Typical Value = 1.
             */
            obj["tf"] = base.parse_element (/<cim:ExcIEEEST1A.tf>([\s\S]*?)<\/cim:ExcIEEEST1A.tf>/g, sub, context, true);
            /**
             * Selector of the connection of the UEL input (UELin).
             * Typical Value = ignoreUELsignal.
             */
            obj["uelin"] = base.parse_element (/<cim:ExcIEEEST1A.uelin>([\s\S]*?)<\/cim:ExcIEEEST1A.uelin>/g, sub, context, true);
            /**
             * Maximum voltage regulator output (V<sub>AMAX</sub>).
             * Typical Value = 14.5.
             */
            obj["vamax"] = base.parse_element (/<cim:ExcIEEEST1A.vamax>([\s\S]*?)<\/cim:ExcIEEEST1A.vamax>/g, sub, context, true);
            /**
             * Minimum voltage regulator output (V<sub>AMIN</sub>).
             * Typical Value = -14.5.
             */
            obj["vamin"] = base.parse_element (/<cim:ExcIEEEST1A.vamin>([\s\S]*?)<\/cim:ExcIEEEST1A.vamin>/g, sub, context, true);
            /**
             * Maximum voltage regulator input limit (V<sub>IMAX</sub>).
             * Typical Value = 999.
             */
            obj["vimax"] = base.parse_element (/<cim:ExcIEEEST1A.vimax>([\s\S]*?)<\/cim:ExcIEEEST1A.vimax>/g, sub, context, true);
            /**
             * Minimum voltage regulator input limit (V<sub>IMIN</sub>).
             * Typical Value = -999.
             */
            obj["vimin"] = base.parse_element (/<cim:ExcIEEEST1A.vimin>([\s\S]*?)<\/cim:ExcIEEEST1A.vimin>/g, sub, context, true);
            /**
             * Maximum voltage regulator outputs (V<sub>RMAX</sub>).
             * Typical Value = 7.8.
             */
            obj["vrmax"] = base.parse_element (/<cim:ExcIEEEST1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmax>/g, sub, context, true);
            /**
             * Minimum voltage regulator outputs (V<sub>RMIN</sub>).
             * Typical Value = -6.7.
             */
            obj["vrmin"] = base.parse_element (/<cim:ExcIEEEST1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmin>/g, sub, context, true);
            bucket = context.parsed.ExcIEEEST1A;
            if (null == bucket)
                context.parsed.ExcIEEEST1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ExcIEEEST2A: parse_ExcIEEEST2A,
                parse_ExcIEEEDC3A: parse_ExcIEEEDC3A,
                parse_ExcIEEEAC3A: parse_ExcIEEEAC3A,
                parse_ExcANS: parse_ExcANS,
                parse_ExcSK: parse_ExcSK,
                parse_ExcAVR5: parse_ExcAVR5,
                parse_ExcAC3A: parse_ExcAC3A,
                parse_ExcST7BOELselectorKind: parse_ExcST7BOELselectorKind,
                parse_ExcDC1A: parse_ExcDC1A,
                parse_ExcAVR2: parse_ExcAVR2,
                parse_ExcBBC: parse_ExcBBC,
                parse_ExcAVR7: parse_ExcAVR7,
                parse_ExcST1A: parse_ExcST1A,
                parse_ExcIEEEAC5A: parse_ExcIEEEAC5A,
                parse_ExcAVR3: parse_ExcAVR3,
                parse_ExcOEX3T: parse_ExcOEX3T,
                parse_ExcIEEEST5B: parse_ExcIEEEST5B,
                parse_ExcAC4A: parse_ExcAC4A,
                parse_ExcAVR4: parse_ExcAVR4,
                parse_ExcAC8B: parse_ExcAC8B,
                parse_ExcIEEEST1A: parse_ExcIEEEST1A,
                parse_ExcIEEEDC2A: parse_ExcIEEEDC2A,
                parse_ExcIEEEAC2A: parse_ExcIEEEAC2A,
                parse_ExcAVR1: parse_ExcAVR1,
                parse_ExcST2A: parse_ExcST2A,
                parse_ExcST6B: parse_ExcST6B,
                parse_ExcREXS: parse_ExcREXS,
                parse_ExcST7BUELselectorKind: parse_ExcST7BUELselectorKind,
                parse_ExcREXSFeedbackSignalKind: parse_ExcREXSFeedbackSignalKind,
                parse_ExcELIN2: parse_ExcELIN2,
                parse_ExcSEXS: parse_ExcSEXS,
                parse_ExcDC2A: parse_ExcDC2A,
                parse_ExcitationSystemDynamics: parse_ExcitationSystemDynamics,
                parse_ExcPIC: parse_ExcPIC,
                parse_ExcIEEEDC1A: parse_ExcIEEEDC1A,
                parse_ExcELIN1: parse_ExcELIN1,
                parse_ExcIEEEAC1A: parse_ExcIEEEAC1A,
                parse_ExcAC5A: parse_ExcAC5A,
                parse_ExcDC3A: parse_ExcDC3A,
                parse_ExcAC1A: parse_ExcAC1A,
                parse_ExcIEEEST7B: parse_ExcIEEEST7B,
                parse_ExcIEEEAC8B: parse_ExcIEEEAC8B,
                parse_ExcIEEEST3A: parse_ExcIEEEST3A,
                parse_ExcST3A: parse_ExcST3A,
                parse_ExcST7B: parse_ExcST7B,
                parse_ExcIEEEAC4A: parse_ExcIEEEAC4A,
                parse_ExcCZ: parse_ExcCZ,
                parse_ExcIEEEST4B: parse_ExcIEEEST4B,
                parse_ExcDC3A1: parse_ExcDC3A1,
                parse_ExcAC6A: parse_ExcAC6A,
                parse_ExcIEEEST1AUELselectorKind: parse_ExcIEEEST1AUELselectorKind,
                parse_ExcAC2A: parse_ExcAC2A,
                parse_ExcST6BOELselectorKind: parse_ExcST6BOELselectorKind,
                parse_ExcIEEEDC4B: parse_ExcIEEEDC4B,
                parse_ExcST4B: parse_ExcST4B,
                parse_ExcIEEEAC6A: parse_ExcIEEEAC6A,
                parse_ExcIEEEST6B: parse_ExcIEEEST6B,
                parse_ExcHU: parse_ExcHU,
                parse_ExcSCRX: parse_ExcSCRX,
                parse_ExcIEEEAC7B: parse_ExcIEEEAC7B
            }
        );
    }
);