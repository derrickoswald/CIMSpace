define
(
    ["model/base", "model/StandardModels"],
    /**
     * The excitation system model provides the field voltage (Efd) for a synchronous machine model.
     *
     * It is linked to a specific generator (synchronous machine). The data parameters are different for each excitation system model; the same parameter name may have different meaning in different models.
     *
     */
    function (base, StandardModels)
    {

        /**
         * Type of connection for the UEL input used in ExcIEEEST1A.
         *
         */
        function parse_ExcIEEEST1AUELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcIEEEST1AUELselectorKind";
            base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.ignoreUELsignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.ignoreUELsignal>/g, obj, "ignoreUELsignal", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputHVgateVoltageOutput>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputHVgateVoltageOutput>/g, obj, "inputHVgateVoltageOutput", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputHVgateErrorSignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputHVgateErrorSignal>/g, obj, "inputHVgateErrorSignal", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1AUELselectorKind.inputAddedToErrorSignal>([\s\S]*?)<\/cim:ExcIEEEST1AUELselectorKind.inputAddedToErrorSignal>/g, obj, "inputAddedToErrorSignal", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST1AUELselectorKind;
            if (null == bucket)
                context.parsed.ExcIEEEST1AUELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST1AUELselectorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExcIEEEST1AUELselectorKind", "ignoreUELsignal", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1AUELselectorKind", "inputHVgateVoltageOutput", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1AUELselectorKind", "inputHVgateErrorSignal", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1AUELselectorKind", "inputAddedToErrorSignal", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Transformer fed static excitation system (static with ABB regulator).
         *
         * This model represents a static excitation system in which a gated thyristor bridge fed by a transformer at the main generator terminals feeds the main generator directly.
         *
         */
        function parse_ExcBBC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcBBC";
            base.parse_element (/<cim:ExcBBC.efdmax>([\s\S]*?)<\/cim:ExcBBC.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.efdmin>([\s\S]*?)<\/cim:ExcBBC.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.k>([\s\S]*?)<\/cim:ExcBBC.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.switch>([\s\S]*?)<\/cim:ExcBBC.switch>/g, obj, "switch", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcBBC.t1>([\s\S]*?)<\/cim:ExcBBC.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.t2>([\s\S]*?)<\/cim:ExcBBC.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.t3>([\s\S]*?)<\/cim:ExcBBC.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.t4>([\s\S]*?)<\/cim:ExcBBC.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.vrmax>([\s\S]*?)<\/cim:ExcBBC.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.vrmin>([\s\S]*?)<\/cim:ExcBBC.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcBBC.xe>([\s\S]*?)<\/cim:ExcBBC.xe>/g, obj, "xe", base.to_string, sub, context);
            bucket = context.parsed.ExcBBC;
            if (null == bucket)
                context.parsed.ExcBBC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcBBC (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcBBC", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "k", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "switch", base.from_boolean, fields);
            base.export_element (obj, "ExcBBC", "t1", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "t2", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "t3", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "t4", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcBBC", "xe", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE ST4B static excitation system with maximum inner loop feedback gain <b>Vgmax</b>.
         *
         */
        function parse_ExcST4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST4B";
            base.parse_element (/<cim:ExcST4B.kc>([\s\S]*?)<\/cim:ExcST4B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kg>([\s\S]*?)<\/cim:ExcST4B.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.ki>([\s\S]*?)<\/cim:ExcST4B.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kim>([\s\S]*?)<\/cim:ExcST4B.kim>/g, obj, "kim", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kir>([\s\S]*?)<\/cim:ExcST4B.kir>/g, obj, "kir", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kp>([\s\S]*?)<\/cim:ExcST4B.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kpm>([\s\S]*?)<\/cim:ExcST4B.kpm>/g, obj, "kpm", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.kpr>([\s\S]*?)<\/cim:ExcST4B.kpr>/g, obj, "kpr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.lvgate>([\s\S]*?)<\/cim:ExcST4B.lvgate>/g, obj, "lvgate", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST4B.ta>([\s\S]*?)<\/cim:ExcST4B.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.thetap>([\s\S]*?)<\/cim:ExcST4B.thetap>/g, obj, "thetap", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.uel>([\s\S]*?)<\/cim:ExcST4B.uel>/g, obj, "uel", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST4B.vbmax>([\s\S]*?)<\/cim:ExcST4B.vbmax>/g, obj, "vbmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.vgmax>([\s\S]*?)<\/cim:ExcST4B.vgmax>/g, obj, "vgmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.vmmax>([\s\S]*?)<\/cim:ExcST4B.vmmax>/g, obj, "vmmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.vmmin>([\s\S]*?)<\/cim:ExcST4B.vmmin>/g, obj, "vmmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.vrmax>([\s\S]*?)<\/cim:ExcST4B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.vrmin>([\s\S]*?)<\/cim:ExcST4B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST4B.xl>([\s\S]*?)<\/cim:ExcST4B.xl>/g, obj, "xl", base.to_string, sub, context);
            bucket = context.parsed.ExcST4B;
            if (null == bucket)
                context.parsed.ExcST4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST4B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST4B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kg", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "ki", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kim", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kir", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kp", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kpm", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "kpr", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "lvgate", base.from_boolean, fields);
            base.export_element (obj, "ExcST4B", "ta", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "thetap", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "uel", base.from_boolean, fields);
            base.export_element (obj, "ExcST4B", "vbmax", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "vgmax", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "vmmax", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "vmmin", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcST4B", "xl", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC6A alternator-supplied rectifier excitation system with speed input.
         *
         */
        function parse_ExcAC6A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC6A";
            base.parse_element (/<cim:ExcAC6A.ka>([\s\S]*?)<\/cim:ExcAC6A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.kc>([\s\S]*?)<\/cim:ExcAC6A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.kd>([\s\S]*?)<\/cim:ExcAC6A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.ke>([\s\S]*?)<\/cim:ExcAC6A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.kh>([\s\S]*?)<\/cim:ExcAC6A.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.ks>([\s\S]*?)<\/cim:ExcAC6A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.seve1>([\s\S]*?)<\/cim:ExcAC6A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC6A.seve2>([\s\S]*?)<\/cim:ExcAC6A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC6A.ta>([\s\S]*?)<\/cim:ExcAC6A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.tb>([\s\S]*?)<\/cim:ExcAC6A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.tc>([\s\S]*?)<\/cim:ExcAC6A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.te>([\s\S]*?)<\/cim:ExcAC6A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.th>([\s\S]*?)<\/cim:ExcAC6A.th>/g, obj, "th", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.tj>([\s\S]*?)<\/cim:ExcAC6A.tj>/g, obj, "tj", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.tk>([\s\S]*?)<\/cim:ExcAC6A.tk>/g, obj, "tk", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vamax>([\s\S]*?)<\/cim:ExcAC6A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vamin>([\s\S]*?)<\/cim:ExcAC6A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.ve1>([\s\S]*?)<\/cim:ExcAC6A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.ve2>([\s\S]*?)<\/cim:ExcAC6A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vfelim>([\s\S]*?)<\/cim:ExcAC6A.vfelim>/g, obj, "vfelim", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vhmax>([\s\S]*?)<\/cim:ExcAC6A.vhmax>/g, obj, "vhmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vrmax>([\s\S]*?)<\/cim:ExcAC6A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC6A.vrmin>([\s\S]*?)<\/cim:ExcAC6A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcAC6A;
            if (null == bucket)
                context.parsed.ExcAC6A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC6A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC6A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "kh", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcAC6A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcAC6A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "th", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "tj", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "tk", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vfelim", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vhmax", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC6A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE Type ST1 Excitation System with semi-continuous and acting terminal voltage limiter.
         *
         */
        function parse_ExcOEX3T (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcOEX3T";
            base.parse_element (/<cim:ExcOEX3T.e1>([\s\S]*?)<\/cim:ExcOEX3T.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.e2>([\s\S]*?)<\/cim:ExcOEX3T.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.ka>([\s\S]*?)<\/cim:ExcOEX3T.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.kc>([\s\S]*?)<\/cim:ExcOEX3T.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.kd>([\s\S]*?)<\/cim:ExcOEX3T.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.ke>([\s\S]*?)<\/cim:ExcOEX3T.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.kf>([\s\S]*?)<\/cim:ExcOEX3T.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.see1>([\s\S]*?)<\/cim:ExcOEX3T.see1>/g, obj, "see1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.see2>([\s\S]*?)<\/cim:ExcOEX3T.see2>/g, obj, "see2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t1>([\s\S]*?)<\/cim:ExcOEX3T.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t2>([\s\S]*?)<\/cim:ExcOEX3T.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t3>([\s\S]*?)<\/cim:ExcOEX3T.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t4>([\s\S]*?)<\/cim:ExcOEX3T.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t5>([\s\S]*?)<\/cim:ExcOEX3T.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.t6>([\s\S]*?)<\/cim:ExcOEX3T.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.te>([\s\S]*?)<\/cim:ExcOEX3T.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.tf>([\s\S]*?)<\/cim:ExcOEX3T.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.vrmax>([\s\S]*?)<\/cim:ExcOEX3T.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcOEX3T.vrmin>([\s\S]*?)<\/cim:ExcOEX3T.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcOEX3T;
            if (null == bucket)
                context.parsed.ExcOEX3T = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcOEX3T (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcOEX3T", "e1", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "e2", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "ka", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "kc", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "kd", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "ke", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "kf", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "see1", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "see2", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t1", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t2", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t3", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t4", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t5", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "t6", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "te", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "tf", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcOEX3T", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of connection for the OEL input used for static excitation systems type 7B.
         *
         */
        function parse_ExcST7BOELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST7BOELselectorKind";
            base.parse_element (/<cim:ExcST7BOELselectorKind.noOELinput>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.noOELinput>/g, obj, "noOELinput", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BOELselectorKind.addVref>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.addVref>/g, obj, "addVref", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BOELselectorKind.inputLVgate>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.inputLVgate>/g, obj, "inputLVgate", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BOELselectorKind.outputLVgate>([\s\S]*?)<\/cim:ExcST7BOELselectorKind.outputLVgate>/g, obj, "outputLVgate", base.to_string, sub, context);
            bucket = context.parsed.ExcST7BOELselectorKind;
            if (null == bucket)
                context.parsed.ExcST7BOELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST7BOELselectorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExcST7BOELselectorKind", "noOELinput", base.from_string, fields);
            base.export_element (obj, "ExcST7BOELselectorKind", "addVref", base.from_string, fields);
            base.export_element (obj, "ExcST7BOELselectorKind", "inputLVgate", base.from_string, fields);
            base.export_element (obj, "ExcST7BOELselectorKind", "outputLVgate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC3A alternator-supplied rectifier excitation system with different field current limit.
         *
         */
        function parse_ExcAC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC3A";
            base.parse_element (/<cim:ExcAC3A.efdn>([\s\S]*?)<\/cim:ExcAC3A.efdn>/g, obj, "efdn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.ka>([\s\S]*?)<\/cim:ExcAC3A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kc>([\s\S]*?)<\/cim:ExcAC3A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kd>([\s\S]*?)<\/cim:ExcAC3A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.ke>([\s\S]*?)<\/cim:ExcAC3A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kf>([\s\S]*?)<\/cim:ExcAC3A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kf1>([\s\S]*?)<\/cim:ExcAC3A.kf1>/g, obj, "kf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kf2>([\s\S]*?)<\/cim:ExcAC3A.kf2>/g, obj, "kf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.klv>([\s\S]*?)<\/cim:ExcAC3A.klv>/g, obj, "klv", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kn>([\s\S]*?)<\/cim:ExcAC3A.kn>/g, obj, "kn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.kr>([\s\S]*?)<\/cim:ExcAC3A.kr>/g, obj, "kr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.ks>([\s\S]*?)<\/cim:ExcAC3A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.seve1>([\s\S]*?)<\/cim:ExcAC3A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC3A.seve2>([\s\S]*?)<\/cim:ExcAC3A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC3A.ta>([\s\S]*?)<\/cim:ExcAC3A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.tb>([\s\S]*?)<\/cim:ExcAC3A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.tc>([\s\S]*?)<\/cim:ExcAC3A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.te>([\s\S]*?)<\/cim:ExcAC3A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.tf>([\s\S]*?)<\/cim:ExcAC3A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.vamax>([\s\S]*?)<\/cim:ExcAC3A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.vamin>([\s\S]*?)<\/cim:ExcAC3A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.ve1>([\s\S]*?)<\/cim:ExcAC3A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.ve2>([\s\S]*?)<\/cim:ExcAC3A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.vemin>([\s\S]*?)<\/cim:ExcAC3A.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.vfemax>([\s\S]*?)<\/cim:ExcAC3A.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC3A.vlv>([\s\S]*?)<\/cim:ExcAC3A.vlv>/g, obj, "vlv", base.to_string, sub, context);
            bucket = context.parsed.ExcAC3A;
            if (null == bucket)
                context.parsed.ExcAC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC3A", "efdn", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kf1", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kf2", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "klv", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kn", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "kr", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcAC3A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcAC3A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcAC3A", "vlv", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC6A model.
         *
         * The model represents field-controlled alternator-rectifier excitation systems with system-supplied electronic voltage regulators.  The maximum output of the regulator, <b><i>V</i></b><b><i><sub>R</sub></i></b>, is a function of terminal voltage, <b><i>V</i></b><b><i><sub>T</sub></i></b>. The field current limiter included in the original model AC6A remains in the 2005 update.
         *
         */
        function parse_ExcIEEEAC6A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC6A";
            base.parse_element (/<cim:ExcIEEEAC6A.ka>([\s\S]*?)<\/cim:ExcIEEEAC6A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.kc>([\s\S]*?)<\/cim:ExcIEEEAC6A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.kd>([\s\S]*?)<\/cim:ExcIEEEAC6A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.ke>([\s\S]*?)<\/cim:ExcIEEEAC6A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.kh>([\s\S]*?)<\/cim:ExcIEEEAC6A.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC6A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC6A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.ta>([\s\S]*?)<\/cim:ExcIEEEAC6A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.tb>([\s\S]*?)<\/cim:ExcIEEEAC6A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.tc>([\s\S]*?)<\/cim:ExcIEEEAC6A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.te>([\s\S]*?)<\/cim:ExcIEEEAC6A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.th>([\s\S]*?)<\/cim:ExcIEEEAC6A.th>/g, obj, "th", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.tj>([\s\S]*?)<\/cim:ExcIEEEAC6A.tj>/g, obj, "tj", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.tk>([\s\S]*?)<\/cim:ExcIEEEAC6A.tk>/g, obj, "tk", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC6A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC6A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC6A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vfelim>([\s\S]*?)<\/cim:ExcIEEEAC6A.vfelim>/g, obj, "vfelim", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vhmax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vhmax>/g, obj, "vhmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC6A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC6A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC6A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC6A;
            if (null == bucket)
                context.parsed.ExcIEEEAC6A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC6A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC6A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "kh", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC6A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC6A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "th", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "tj", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "tk", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vfelim", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vhmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC6A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modification of an old IEEE ST1A static excitation system without overexcitation limiter (OEL) and underexcitation limiter (UEL).
         *
         */
        function parse_ExcST1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST1A";
            base.parse_element (/<cim:ExcST1A.ilr>([\s\S]*?)<\/cim:ExcST1A.ilr>/g, obj, "ilr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.ka>([\s\S]*?)<\/cim:ExcST1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.kc>([\s\S]*?)<\/cim:ExcST1A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.kf>([\s\S]*?)<\/cim:ExcST1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.klr>([\s\S]*?)<\/cim:ExcST1A.klr>/g, obj, "klr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.ta>([\s\S]*?)<\/cim:ExcST1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.tb>([\s\S]*?)<\/cim:ExcST1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.tb1>([\s\S]*?)<\/cim:ExcST1A.tb1>/g, obj, "tb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.tc>([\s\S]*?)<\/cim:ExcST1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.tc1>([\s\S]*?)<\/cim:ExcST1A.tc1>/g, obj, "tc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.tf>([\s\S]*?)<\/cim:ExcST1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vamax>([\s\S]*?)<\/cim:ExcST1A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vamin>([\s\S]*?)<\/cim:ExcST1A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vimax>([\s\S]*?)<\/cim:ExcST1A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vimin>([\s\S]*?)<\/cim:ExcST1A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vrmax>([\s\S]*?)<\/cim:ExcST1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.vrmin>([\s\S]*?)<\/cim:ExcST1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST1A.xe>([\s\S]*?)<\/cim:ExcST1A.xe>/g, obj, "xe", base.to_string, sub, context);
            bucket = context.parsed.ExcST1A;
            if (null == bucket)
                context.parsed.ExcST1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST1A", "ilr", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "klr", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "tb1", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "tc1", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcST1A", "xe", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Static PI transformer fed excitation system: ELIN (VATECH) - simplified model.
         *
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  A power system stabilizer with power input is included in the model.
         *
         */
        function parse_ExcELIN1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcELIN1";
            base.parse_element (/<cim:ExcELIN1.dpnf>([\s\S]*?)<\/cim:ExcELIN1.dpnf>/g, obj, "dpnf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.efmax>([\s\S]*?)<\/cim:ExcELIN1.efmax>/g, obj, "efmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.efmin>([\s\S]*?)<\/cim:ExcELIN1.efmin>/g, obj, "efmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.ks1>([\s\S]*?)<\/cim:ExcELIN1.ks1>/g, obj, "ks1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.ks2>([\s\S]*?)<\/cim:ExcELIN1.ks2>/g, obj, "ks2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.smax>([\s\S]*?)<\/cim:ExcELIN1.smax>/g, obj, "smax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.tfi>([\s\S]*?)<\/cim:ExcELIN1.tfi>/g, obj, "tfi", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.tnu>([\s\S]*?)<\/cim:ExcELIN1.tnu>/g, obj, "tnu", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.ts1>([\s\S]*?)<\/cim:ExcELIN1.ts1>/g, obj, "ts1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.ts2>([\s\S]*?)<\/cim:ExcELIN1.ts2>/g, obj, "ts2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.tsw>([\s\S]*?)<\/cim:ExcELIN1.tsw>/g, obj, "tsw", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.vpi>([\s\S]*?)<\/cim:ExcELIN1.vpi>/g, obj, "vpi", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.vpnf>([\s\S]*?)<\/cim:ExcELIN1.vpnf>/g, obj, "vpnf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.vpu>([\s\S]*?)<\/cim:ExcELIN1.vpu>/g, obj, "vpu", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN1.xe>([\s\S]*?)<\/cim:ExcELIN1.xe>/g, obj, "xe", base.to_string, sub, context);
            bucket = context.parsed.ExcELIN1;
            if (null == bucket)
                context.parsed.ExcELIN1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcELIN1 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcELIN1", "dpnf", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "efmax", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "efmin", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "ks1", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "ks2", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "smax", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "tfi", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "tnu", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "ts1", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "ts2", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "tsw", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "vpi", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "vpnf", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "vpu", base.from_string, fields);
            base.export_element (obj, "ExcELIN1", "xe", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Italian excitation system.
         *
         * It represents static exciter and electric voltage regulator.
         *
         */
        function parse_ExcAVR4 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR4";
            base.parse_element (/<cim:ExcAVR4.imul>([\s\S]*?)<\/cim:ExcAVR4.imul>/g, obj, "imul", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAVR4.ka>([\s\S]*?)<\/cim:ExcAVR4.ka>/g, obj, "ka", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR4.ke>([\s\S]*?)<\/cim:ExcAVR4.ke>/g, obj, "ke", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR4.kif>([\s\S]*?)<\/cim:ExcAVR4.kif>/g, obj, "kif", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR4.t1>([\s\S]*?)<\/cim:ExcAVR4.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.t1if>([\s\S]*?)<\/cim:ExcAVR4.t1if>/g, obj, "t1if", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.t2>([\s\S]*?)<\/cim:ExcAVR4.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.t3>([\s\S]*?)<\/cim:ExcAVR4.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.t4>([\s\S]*?)<\/cim:ExcAVR4.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.tif>([\s\S]*?)<\/cim:ExcAVR4.tif>/g, obj, "tif", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.vfmn>([\s\S]*?)<\/cim:ExcAVR4.vfmn>/g, obj, "vfmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.vfmx>([\s\S]*?)<\/cim:ExcAVR4.vfmx>/g, obj, "vfmx", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.vrmn>([\s\S]*?)<\/cim:ExcAVR4.vrmn>/g, obj, "vrmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR4.vrmx>([\s\S]*?)<\/cim:ExcAVR4.vrmx>/g, obj, "vrmx", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR4;
            if (null == bucket)
                context.parsed.ExcAVR4 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR4 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR4", "imul", base.from_boolean, fields);
            base.export_element (obj, "ExcAVR4", "ka", base.from_float, fields);
            base.export_element (obj, "ExcAVR4", "ke", base.from_float, fields);
            base.export_element (obj, "ExcAVR4", "kif", base.from_float, fields);
            base.export_element (obj, "ExcAVR4", "t1", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "t1if", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "t2", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "t3", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "t4", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "tif", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "vfmn", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "vfmx", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "vrmn", base.from_string, fields);
            base.export_element (obj, "ExcAVR4", "vrmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST3A model.
         *
         * Some static systems utilize a field voltage control loop to linearize the exciter control characteristic. This also makes the output independent of supply source variations until supply limitations are reached.  These systems utilize a variety of controlled-rectifier designs: full thyristor complements or hybrid bridges
         *
         */
        function parse_ExcIEEEST3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST3A";
            base.parse_element (/<cim:ExcIEEEST3A.ka>([\s\S]*?)<\/cim:ExcIEEEST3A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.kc>([\s\S]*?)<\/cim:ExcIEEEST3A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.kg>([\s\S]*?)<\/cim:ExcIEEEST3A.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.ki>([\s\S]*?)<\/cim:ExcIEEEST3A.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.km>([\s\S]*?)<\/cim:ExcIEEEST3A.km>/g, obj, "km", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.kp>([\s\S]*?)<\/cim:ExcIEEEST3A.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.ta>([\s\S]*?)<\/cim:ExcIEEEST3A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.tb>([\s\S]*?)<\/cim:ExcIEEEST3A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.tc>([\s\S]*?)<\/cim:ExcIEEEST3A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.thetap>([\s\S]*?)<\/cim:ExcIEEEST3A.thetap>/g, obj, "thetap", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.tm>([\s\S]*?)<\/cim:ExcIEEEST3A.tm>/g, obj, "tm", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vbmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vbmax>/g, obj, "vbmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vgmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vgmax>/g, obj, "vgmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vimax>([\s\S]*?)<\/cim:ExcIEEEST3A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vimin>([\s\S]*?)<\/cim:ExcIEEEST3A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vmmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vmmax>/g, obj, "vmmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vmmin>([\s\S]*?)<\/cim:ExcIEEEST3A.vmmin>/g, obj, "vmmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST3A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST3A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST3A.xl>([\s\S]*?)<\/cim:ExcIEEEST3A.xl>/g, obj, "xl", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST3A;
            if (null == bucket)
                context.parsed.ExcIEEEST3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST3A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "kg", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "ki", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "km", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "kp", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "thetap", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "tm", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vbmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vgmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vmmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vmmin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST3A", "xl", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE DC2A direct current commutator exciters with speed input, one more leg block in feedback loop and without underexcitation limiters (UEL) inputs.
         *
         * DC type 2 excitation system model with added speed multiplier, added lead-lag, and voltage-dependent limits.
         *
         */
        function parse_ExcDC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC2A";
            base.parse_element (/<cim:ExcDC2A.efd1>([\s\S]*?)<\/cim:ExcDC2A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.efd2>([\s\S]*?)<\/cim:ExcDC2A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.exclim>([\s\S]*?)<\/cim:ExcDC2A.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC2A.ka>([\s\S]*?)<\/cim:ExcDC2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.ke>([\s\S]*?)<\/cim:ExcDC2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.kf>([\s\S]*?)<\/cim:ExcDC2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.ks>([\s\S]*?)<\/cim:ExcDC2A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.seefd1>([\s\S]*?)<\/cim:ExcDC2A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC2A.seefd2>([\s\S]*?)<\/cim:ExcDC2A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC2A.ta>([\s\S]*?)<\/cim:ExcDC2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.tb>([\s\S]*?)<\/cim:ExcDC2A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.tc>([\s\S]*?)<\/cim:ExcDC2A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.te>([\s\S]*?)<\/cim:ExcDC2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.tf>([\s\S]*?)<\/cim:ExcDC2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.tf1>([\s\S]*?)<\/cim:ExcDC2A.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.vrmax>([\s\S]*?)<\/cim:ExcDC2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.vrmin>([\s\S]*?)<\/cim:ExcDC2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC2A.vtlim>([\s\S]*?)<\/cim:ExcDC2A.vtlim>/g, obj, "vtlim", base.to_boolean, sub, context);
            bucket = context.parsed.ExcDC2A;
            if (null == bucket)
                context.parsed.ExcDC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcDC2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcDC2A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcDC2A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcDC2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcDC2A", "vtlim", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 1 Model.
         *
         * It represents exciter dynamo and electromechanical regulator.
         *
         */
        function parse_ExcAVR1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR1";
            base.parse_element (/<cim:ExcAVR1.e1>([\s\S]*?)<\/cim:ExcAVR1.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.e2>([\s\S]*?)<\/cim:ExcAVR1.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.ka>([\s\S]*?)<\/cim:ExcAVR1.ka>/g, obj, "ka", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR1.kf>([\s\S]*?)<\/cim:ExcAVR1.kf>/g, obj, "kf", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR1.se1>([\s\S]*?)<\/cim:ExcAVR1.se1>/g, obj, "se1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR1.se2>([\s\S]*?)<\/cim:ExcAVR1.se2>/g, obj, "se2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR1.ta>([\s\S]*?)<\/cim:ExcAVR1.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.tb>([\s\S]*?)<\/cim:ExcAVR1.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.te>([\s\S]*?)<\/cim:ExcAVR1.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.tf>([\s\S]*?)<\/cim:ExcAVR1.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.vrmn>([\s\S]*?)<\/cim:ExcAVR1.vrmn>/g, obj, "vrmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR1.vrmx>([\s\S]*?)<\/cim:ExcAVR1.vrmx>/g, obj, "vrmx", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR1;
            if (null == bucket)
                context.parsed.ExcAVR1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR1 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR1", "e1", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "e2", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "ka", base.from_float, fields);
            base.export_element (obj, "ExcAVR1", "kf", base.from_float, fields);
            base.export_element (obj, "ExcAVR1", "se1", base.from_float, fields);
            base.export_element (obj, "ExcAVR1", "se2", base.from_float, fields);
            base.export_element (obj, "ExcAVR1", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "te", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "tf", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "vrmn", base.from_string, fields);
            base.export_element (obj, "ExcAVR1", "vrmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST6B model.
         *
         * This model consists of a PI voltage regulator with an inner loop field voltage regulator and pre-control. The field voltage regulator implements a proportional control. The pre-control and the delay in the feedback circuit increase the dynamic response.
         *
         */
        function parse_ExcIEEEST6B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST6B";
            base.parse_element (/<cim:ExcIEEEST6B.ilr>([\s\S]*?)<\/cim:ExcIEEEST6B.ilr>/g, obj, "ilr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.kci>([\s\S]*?)<\/cim:ExcIEEEST6B.kci>/g, obj, "kci", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.kff>([\s\S]*?)<\/cim:ExcIEEEST6B.kff>/g, obj, "kff", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.kg>([\s\S]*?)<\/cim:ExcIEEEST6B.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.kia>([\s\S]*?)<\/cim:ExcIEEEST6B.kia>/g, obj, "kia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.klr>([\s\S]*?)<\/cim:ExcIEEEST6B.klr>/g, obj, "klr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.km>([\s\S]*?)<\/cim:ExcIEEEST6B.km>/g, obj, "km", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.kpa>([\s\S]*?)<\/cim:ExcIEEEST6B.kpa>/g, obj, "kpa", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.oelin>([\s\S]*?)<\/cim:ExcIEEEST6B.oelin>/g, obj, "oelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.tg>([\s\S]*?)<\/cim:ExcIEEEST6B.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.vamax>([\s\S]*?)<\/cim:ExcIEEEST6B.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.vamin>([\s\S]*?)<\/cim:ExcIEEEST6B.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST6B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST6B;
            if (null == bucket)
                context.parsed.ExcIEEEST6B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST6B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST6B", "ilr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "kci", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "kff", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "kg", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "kia", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "klr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "km", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "kpa", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "oelin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "tg", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST6B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Excitation system function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        function parse_ExcitationSystemDynamics (context, sub)
        {
            var obj;
            var bucket;

            obj = StandardModels.parse_DynamicsFunctionBlock (context, sub);
            obj.cls = "ExcitationSystemDynamics";
            base.parse_attribute (/<cim:ExcitationSystemDynamics.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.OverexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverexcitationLimiterDynamics", sub, context);
            base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType2Dynamics", sub, context);
            bucket = context.parsed.ExcitationSystemDynamics;
            if (null == bucket)
                context.parsed.ExcitationSystemDynamics = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcitationSystemDynamics (obj, exporters, full)
        {
            var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

            base.export_attribute (obj, "ExcitationSystemDynamics", "PowerSystemStabilizerDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "UnderexcitationLimiterDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "DiscontinuousExcitationControlDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "PFVArControllerType1Dynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "SynchronousMachineDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "VoltageCompensatorDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "OverexcitationLimiterDynamics", fields);
            base.export_attribute (obj, "ExcitationSystemDynamics", "PFVArControllerType2Dynamics", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC1A model.
         *
         * This model represents field-controlled dc commutator exciters with continuously acting voltage regulators (especially the direct-acting rheostatic, rotating amplifier, and magnetic amplifier types).  Because this model has been widely implemented by the industry, it is sometimes used to represent other types of systems when detailed data for them are not available or when a simplified model is required.
         *
         */
        function parse_ExcIEEEDC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC1A";
            base.parse_element (/<cim:ExcIEEEDC1A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC1A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC1A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC1A.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.ka>([\s\S]*?)<\/cim:ExcIEEEDC1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.ke>([\s\S]*?)<\/cim:ExcIEEEDC1A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.kf>([\s\S]*?)<\/cim:ExcIEEEDC1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC1A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC1A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.ta>([\s\S]*?)<\/cim:ExcIEEEDC1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.tb>([\s\S]*?)<\/cim:ExcIEEEDC1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.tc>([\s\S]*?)<\/cim:ExcIEEEDC1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.te>([\s\S]*?)<\/cim:ExcIEEEDC1A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.tf>([\s\S]*?)<\/cim:ExcIEEEDC1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.uelin>([\s\S]*?)<\/cim:ExcIEEEDC1A.uelin>/g, obj, "uelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEDC1A;
            if (null == bucket)
                context.parsed.ExcIEEEDC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEDC1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEDC1A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC1A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "uelin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC1A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Simple excitation system model representing generic characteristics of many excitation systems; intended for use where negative field current may be a problem.
         *
         */
        function parse_ExcSCRX (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSCRX";
            base.parse_element (/<cim:ExcSCRX.cswitch>([\s\S]*?)<\/cim:ExcSCRX.cswitch>/g, obj, "cswitch", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcSCRX.emax>([\s\S]*?)<\/cim:ExcSCRX.emax>/g, obj, "emax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSCRX.emin>([\s\S]*?)<\/cim:ExcSCRX.emin>/g, obj, "emin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSCRX.k>([\s\S]*?)<\/cim:ExcSCRX.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSCRX.rcrfd>([\s\S]*?)<\/cim:ExcSCRX.rcrfd>/g, obj, "rcrfd", base.to_float, sub, context);
            base.parse_element (/<cim:ExcSCRX.tatb>([\s\S]*?)<\/cim:ExcSCRX.tatb>/g, obj, "tatb", base.to_float, sub, context);
            base.parse_element (/<cim:ExcSCRX.tb>([\s\S]*?)<\/cim:ExcSCRX.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSCRX.te>([\s\S]*?)<\/cim:ExcSCRX.te>/g, obj, "te", base.to_string, sub, context);
            bucket = context.parsed.ExcSCRX;
            if (null == bucket)
                context.parsed.ExcSCRX = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcSCRX (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcSCRX", "cswitch", base.from_boolean, fields);
            base.export_element (obj, "ExcSCRX", "emax", base.from_string, fields);
            base.export_element (obj, "ExcSCRX", "emin", base.from_string, fields);
            base.export_element (obj, "ExcSCRX", "k", base.from_string, fields);
            base.export_element (obj, "ExcSCRX", "rcrfd", base.from_float, fields);
            base.export_element (obj, "ExcSCRX", "tatb", base.from_float, fields);
            base.export_element (obj, "ExcSCRX", "tb", base.from_string, fields);
            base.export_element (obj, "ExcSCRX", "te", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC4B model.
         *
         * These excitation systems utilize a field-controlled dc commutator exciter with a continuously acting voltage regulator having supplies obtained from the generator or auxiliary bus.
         *
         */
        function parse_ExcIEEEDC4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC4B";
            base.parse_element (/<cim:ExcIEEEDC4B.efd1>([\s\S]*?)<\/cim:ExcIEEEDC4B.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.efd2>([\s\S]*?)<\/cim:ExcIEEEDC4B.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.ka>([\s\S]*?)<\/cim:ExcIEEEDC4B.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.kd>([\s\S]*?)<\/cim:ExcIEEEDC4B.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.ke>([\s\S]*?)<\/cim:ExcIEEEDC4B.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.kf>([\s\S]*?)<\/cim:ExcIEEEDC4B.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.ki>([\s\S]*?)<\/cim:ExcIEEEDC4B.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.kp>([\s\S]*?)<\/cim:ExcIEEEDC4B.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.oelin>([\s\S]*?)<\/cim:ExcIEEEDC4B.oelin>/g, obj, "oelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC4B.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC4B.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.ta>([\s\S]*?)<\/cim:ExcIEEEDC4B.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.td>([\s\S]*?)<\/cim:ExcIEEEDC4B.td>/g, obj, "td", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.te>([\s\S]*?)<\/cim:ExcIEEEDC4B.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.tf>([\s\S]*?)<\/cim:ExcIEEEDC4B.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.uelin>([\s\S]*?)<\/cim:ExcIEEEDC4B.uelin>/g, obj, "uelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.vemin>([\s\S]*?)<\/cim:ExcIEEEDC4B.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC4B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC4B.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC4B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEDC4B;
            if (null == bucket)
                context.parsed.ExcIEEEDC4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEDC4B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEDC4B", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "ki", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "kp", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "oelin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC4B", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC4B", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC4B", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "td", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "uelin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC4B", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC4B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC3A model.
         *
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC3A. These excitation systems include an alternator main exciter with non-controlled rectifiers. The exciter employs self-excitation, and the voltage regulator power is derived from the exciter output voltage.  Therefore, this system has an additional nonlinearity, simulated by the use of a multiplier
         *
         */
        function parse_ExcIEEEAC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC3A";
            base.parse_element (/<cim:ExcIEEEAC3A.efdn>([\s\S]*?)<\/cim:ExcIEEEAC3A.efdn>/g, obj, "efdn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.ka>([\s\S]*?)<\/cim:ExcIEEEAC3A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.kc>([\s\S]*?)<\/cim:ExcIEEEAC3A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.kd>([\s\S]*?)<\/cim:ExcIEEEAC3A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.ke>([\s\S]*?)<\/cim:ExcIEEEAC3A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.kf>([\s\S]*?)<\/cim:ExcIEEEAC3A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.kn>([\s\S]*?)<\/cim:ExcIEEEAC3A.kn>/g, obj, "kn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.kr>([\s\S]*?)<\/cim:ExcIEEEAC3A.kr>/g, obj, "kr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC3A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC3A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.ta>([\s\S]*?)<\/cim:ExcIEEEAC3A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.tb>([\s\S]*?)<\/cim:ExcIEEEAC3A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.tc>([\s\S]*?)<\/cim:ExcIEEEAC3A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.te>([\s\S]*?)<\/cim:ExcIEEEAC3A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.tf>([\s\S]*?)<\/cim:ExcIEEEAC3A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC3A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC3A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC3A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC3A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.vemin>([\s\S]*?)<\/cim:ExcIEEEAC3A.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC3A.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC3A.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC3A;
            if (null == bucket)
                context.parsed.ExcIEEEAC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC3A", "efdn", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "kn", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "kr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC3A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC3A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC3A", "vfemax", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Manual excitation control with field circuit resistance.
         *
         * This model can be used as a very simple representation of manual voltage control.
         *
         */
        function parse_ExcAVR5 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR5";
            base.parse_element (/<cim:ExcAVR5.ka>([\s\S]*?)<\/cim:ExcAVR5.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR5.rex>([\s\S]*?)<\/cim:ExcAVR5.rex>/g, obj, "rex", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR5.ta>([\s\S]*?)<\/cim:ExcAVR5.ta>/g, obj, "ta", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR5;
            if (null == bucket)
                context.parsed.ExcAVR5 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR5 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR5", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAVR5", "rex", base.from_string, fields);
            base.export_element (obj, "ExcAVR5", "ta", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE ST2A static excitation system - another lead-lag block added to match  the model defined by WECC.
         *
         */
        function parse_ExcST2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST2A";
            base.parse_element (/<cim:ExcST2A.efdmax>([\s\S]*?)<\/cim:ExcST2A.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.ka>([\s\S]*?)<\/cim:ExcST2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.kc>([\s\S]*?)<\/cim:ExcST2A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.ke>([\s\S]*?)<\/cim:ExcST2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.kf>([\s\S]*?)<\/cim:ExcST2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.ki>([\s\S]*?)<\/cim:ExcST2A.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.kp>([\s\S]*?)<\/cim:ExcST2A.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.ta>([\s\S]*?)<\/cim:ExcST2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.tb>([\s\S]*?)<\/cim:ExcST2A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.tc>([\s\S]*?)<\/cim:ExcST2A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.te>([\s\S]*?)<\/cim:ExcST2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.tf>([\s\S]*?)<\/cim:ExcST2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.uelin>([\s\S]*?)<\/cim:ExcST2A.uelin>/g, obj, "uelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST2A.vrmax>([\s\S]*?)<\/cim:ExcST2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST2A.vrmin>([\s\S]*?)<\/cim:ExcST2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcST2A;
            if (null == bucket)
                context.parsed.ExcST2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST2A", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "ki", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "kp", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "uelin", base.from_boolean, fields);
            base.export_element (obj, "ExcST2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST2A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Detailed Excitation System Model - ELIN (VATECH).
         *
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  Power system stabilizer models used in conjunction with this excitation system model: PssELIN2, PssIEEE2B, Pss2B.
         *
         */
        function parse_ExcELIN2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcELIN2";
            base.parse_element (/<cim:ExcELIN2.efdbas>([\s\S]*?)<\/cim:ExcELIN2.efdbas>/g, obj, "efdbas", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.iefmax>([\s\S]*?)<\/cim:ExcELIN2.iefmax>/g, obj, "iefmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.iefmax2>([\s\S]*?)<\/cim:ExcELIN2.iefmax2>/g, obj, "iefmax2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.iefmin>([\s\S]*?)<\/cim:ExcELIN2.iefmin>/g, obj, "iefmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.k1>([\s\S]*?)<\/cim:ExcELIN2.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.k1ec>([\s\S]*?)<\/cim:ExcELIN2.k1ec>/g, obj, "k1ec", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.k2>([\s\S]*?)<\/cim:ExcELIN2.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.k3>([\s\S]*?)<\/cim:ExcELIN2.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.k4>([\s\S]*?)<\/cim:ExcELIN2.k4>/g, obj, "k4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.kd1>([\s\S]*?)<\/cim:ExcELIN2.kd1>/g, obj, "kd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ke2>([\s\S]*?)<\/cim:ExcELIN2.ke2>/g, obj, "ke2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ketb>([\s\S]*?)<\/cim:ExcELIN2.ketb>/g, obj, "ketb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.pid1max>([\s\S]*?)<\/cim:ExcELIN2.pid1max>/g, obj, "pid1max", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.seve1>([\s\S]*?)<\/cim:ExcELIN2.seve1>/g, obj, "seve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.seve2>([\s\S]*?)<\/cim:ExcELIN2.seve2>/g, obj, "seve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.tb1>([\s\S]*?)<\/cim:ExcELIN2.tb1>/g, obj, "tb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.te>([\s\S]*?)<\/cim:ExcELIN2.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.te2>([\s\S]*?)<\/cim:ExcELIN2.te2>/g, obj, "te2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ti1>([\s\S]*?)<\/cim:ExcELIN2.ti1>/g, obj, "ti1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ti3>([\s\S]*?)<\/cim:ExcELIN2.ti3>/g, obj, "ti3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ti4>([\s\S]*?)<\/cim:ExcELIN2.ti4>/g, obj, "ti4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.tr4>([\s\S]*?)<\/cim:ExcELIN2.tr4>/g, obj, "tr4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.upmax>([\s\S]*?)<\/cim:ExcELIN2.upmax>/g, obj, "upmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.upmin>([\s\S]*?)<\/cim:ExcELIN2.upmin>/g, obj, "upmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ve1>([\s\S]*?)<\/cim:ExcELIN2.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.ve2>([\s\S]*?)<\/cim:ExcELIN2.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcELIN2.xp>([\s\S]*?)<\/cim:ExcELIN2.xp>/g, obj, "xp", base.to_string, sub, context);
            bucket = context.parsed.ExcELIN2;
            if (null == bucket)
                context.parsed.ExcELIN2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcELIN2 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcELIN2", "efdbas", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "iefmax", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "iefmax2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "iefmin", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "k1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "k1ec", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "k2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "k3", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "k4", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "kd1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ke2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ketb", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "pid1max", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "seve1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "seve2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "tb1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "te", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "te2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ti1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ti3", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ti4", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "tr4", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "upmax", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "upmin", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcELIN2", "xp", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC3A model.
         *
         * This model represents represent older systems, in particular those dc commutator exciters with non-continuously acting regulators that were commonly used before the development of the continuously acting varieties.  These systems respond at basically two different rates, depending upon the magnitude of voltage error. For small errors, adjustment is made periodically with a signal to a motor-operated rheostat. Larger errors cause resistors to be quickly shorted or inserted and a strong forcing signal applied to the exciter. Continuous motion of the motor-operated rheostat occurs for these larger error signals, even though it is bypassed by contactor action.
         *
         */
        function parse_ExcIEEEDC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC3A";
            base.parse_element (/<cim:ExcIEEEDC3A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC3A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC3A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC3A.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.ke>([\s\S]*?)<\/cim:ExcIEEEDC3A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.kv>([\s\S]*?)<\/cim:ExcIEEEDC3A.kv>/g, obj, "kv", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC3A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC3A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.te>([\s\S]*?)<\/cim:ExcIEEEDC3A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.trh>([\s\S]*?)<\/cim:ExcIEEEDC3A.trh>/g, obj, "trh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC3A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC3A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC3A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEDC3A;
            if (null == bucket)
                context.parsed.ExcIEEEDC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEDC3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEDC3A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC3A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "kv", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC3A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC3A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "trh", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC3A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC2A model.
         *
         * The model represents a high initial response field-controlled alternator-rectifier excitation system. The alternator main exciter is used with non-controlled rectifiers. The Type AC2A model is similar to that of Type AC1A except for the inclusion of exciter time constant compensation and exciter field current limiting elements.
         *
         */
        function parse_ExcIEEEAC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC2A";
            base.parse_element (/<cim:ExcIEEEAC2A.ka>([\s\S]*?)<\/cim:ExcIEEEAC2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.kb>([\s\S]*?)<\/cim:ExcIEEEAC2A.kb>/g, obj, "kb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.kc>([\s\S]*?)<\/cim:ExcIEEEAC2A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.kd>([\s\S]*?)<\/cim:ExcIEEEAC2A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.ke>([\s\S]*?)<\/cim:ExcIEEEAC2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.kf>([\s\S]*?)<\/cim:ExcIEEEAC2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.kh>([\s\S]*?)<\/cim:ExcIEEEAC2A.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC2A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC2A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.ta>([\s\S]*?)<\/cim:ExcIEEEAC2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.tb>([\s\S]*?)<\/cim:ExcIEEEAC2A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.tc>([\s\S]*?)<\/cim:ExcIEEEAC2A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.te>([\s\S]*?)<\/cim:ExcIEEEAC2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.tf>([\s\S]*?)<\/cim:ExcIEEEAC2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC2A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC2A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC2A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC2A;
            if (null == bucket)
                context.parsed.ExcIEEEAC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "kb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "kh", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC2A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC2A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC1A alternator-supplied rectifier excitation system with different rate feedback source.
         *
         */
        function parse_ExcAC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC1A";
            base.parse_element (/<cim:ExcAC1A.hvlvgates>([\s\S]*?)<\/cim:ExcAC1A.hvlvgates>/g, obj, "hvlvgates", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC1A.ka>([\s\S]*?)<\/cim:ExcAC1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.kc>([\s\S]*?)<\/cim:ExcAC1A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.kd>([\s\S]*?)<\/cim:ExcAC1A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.ke>([\s\S]*?)<\/cim:ExcAC1A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.kf>([\s\S]*?)<\/cim:ExcAC1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.kf1>([\s\S]*?)<\/cim:ExcAC1A.kf1>/g, obj, "kf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.kf2>([\s\S]*?)<\/cim:ExcAC1A.kf2>/g, obj, "kf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.ks>([\s\S]*?)<\/cim:ExcAC1A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.seve1>([\s\S]*?)<\/cim:ExcAC1A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC1A.seve2>([\s\S]*?)<\/cim:ExcAC1A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC1A.ta>([\s\S]*?)<\/cim:ExcAC1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.tb>([\s\S]*?)<\/cim:ExcAC1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.tc>([\s\S]*?)<\/cim:ExcAC1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.te>([\s\S]*?)<\/cim:ExcAC1A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.tf>([\s\S]*?)<\/cim:ExcAC1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.vamax>([\s\S]*?)<\/cim:ExcAC1A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.vamin>([\s\S]*?)<\/cim:ExcAC1A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.ve1>([\s\S]*?)<\/cim:ExcAC1A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.ve2>([\s\S]*?)<\/cim:ExcAC1A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.vrmax>([\s\S]*?)<\/cim:ExcAC1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC1A.vrmin>([\s\S]*?)<\/cim:ExcAC1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcAC1A;
            if (null == bucket)
                context.parsed.ExcAC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC1A", "hvlvgates", base.from_boolean, fields);
            base.export_element (obj, "ExcAC1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "kf1", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "kf2", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcAC1A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcAC1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC1A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of connection for the OEL input used for static excitation systems type 6B.
         *
         */
        function parse_ExcST6BOELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST6BOELselectorKind";
            base.parse_element (/<cim:ExcST6BOELselectorKind.noOELinput>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.noOELinput>/g, obj, "noOELinput", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6BOELselectorKind.beforeUEL>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.beforeUEL>/g, obj, "beforeUEL", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6BOELselectorKind.afterUEL>([\s\S]*?)<\/cim:ExcST6BOELselectorKind.afterUEL>/g, obj, "afterUEL", base.to_string, sub, context);
            bucket = context.parsed.ExcST6BOELselectorKind;
            if (null == bucket)
                context.parsed.ExcST6BOELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST6BOELselectorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExcST6BOELselectorKind", "noOELinput", base.from_string, fields);
            base.export_element (obj, "ExcST6BOELselectorKind", "beforeUEL", base.from_string, fields);
            base.export_element (obj, "ExcST6BOELselectorKind", "afterUEL", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Simplified Excitation System Model.
         *
         */
        function parse_ExcSEXS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSEXS";
            base.parse_element (/<cim:ExcSEXS.efdmax>([\s\S]*?)<\/cim:ExcSEXS.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.efdmin>([\s\S]*?)<\/cim:ExcSEXS.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.emax>([\s\S]*?)<\/cim:ExcSEXS.emax>/g, obj, "emax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.emin>([\s\S]*?)<\/cim:ExcSEXS.emin>/g, obj, "emin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.k>([\s\S]*?)<\/cim:ExcSEXS.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.kc>([\s\S]*?)<\/cim:ExcSEXS.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.tatb>([\s\S]*?)<\/cim:ExcSEXS.tatb>/g, obj, "tatb", base.to_float, sub, context);
            base.parse_element (/<cim:ExcSEXS.tb>([\s\S]*?)<\/cim:ExcSEXS.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.tc>([\s\S]*?)<\/cim:ExcSEXS.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSEXS.te>([\s\S]*?)<\/cim:ExcSEXS.te>/g, obj, "te", base.to_string, sub, context);
            bucket = context.parsed.ExcSEXS;
            if (null == bucket)
                context.parsed.ExcSEXS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcSEXS (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcSEXS", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "emax", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "emin", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "k", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "kc", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "tatb", base.from_float, fields);
            base.export_element (obj, "ExcSEXS", "tb", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "tc", base.from_string, fields);
            base.export_element (obj, "ExcSEXS", "te", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 2 Model.
         *
         * It represents alternator and rotating diodes and electromechanic voltage regulators.
         *
         */
        function parse_ExcAVR2 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR2";
            base.parse_element (/<cim:ExcAVR2.e1>([\s\S]*?)<\/cim:ExcAVR2.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.e2>([\s\S]*?)<\/cim:ExcAVR2.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.ka>([\s\S]*?)<\/cim:ExcAVR2.ka>/g, obj, "ka", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR2.kf>([\s\S]*?)<\/cim:ExcAVR2.kf>/g, obj, "kf", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR2.se1>([\s\S]*?)<\/cim:ExcAVR2.se1>/g, obj, "se1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR2.se2>([\s\S]*?)<\/cim:ExcAVR2.se2>/g, obj, "se2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR2.ta>([\s\S]*?)<\/cim:ExcAVR2.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.tb>([\s\S]*?)<\/cim:ExcAVR2.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.te>([\s\S]*?)<\/cim:ExcAVR2.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.tf1>([\s\S]*?)<\/cim:ExcAVR2.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.tf2>([\s\S]*?)<\/cim:ExcAVR2.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.vrmn>([\s\S]*?)<\/cim:ExcAVR2.vrmn>/g, obj, "vrmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR2.vrmx>([\s\S]*?)<\/cim:ExcAVR2.vrmx>/g, obj, "vrmx", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR2;
            if (null == bucket)
                context.parsed.ExcAVR2 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR2 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR2", "e1", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "e2", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "ka", base.from_float, fields);
            base.export_element (obj, "ExcAVR2", "kf", base.from_float, fields);
            base.export_element (obj, "ExcAVR2", "se1", base.from_float, fields);
            base.export_element (obj, "ExcAVR2", "se2", base.from_float, fields);
            base.export_element (obj, "ExcAVR2", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "te", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "tf2", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "vrmn", base.from_string, fields);
            base.export_element (obj, "ExcAVR2", "vrmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is modified IEEE DC3A direct current commutator exciters with speed input, and death band.
         *
         * DC old type 4.
         *
         */
        function parse_ExcDC3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC3A";
            base.parse_element (/<cim:ExcDC3A.edfmax>([\s\S]*?)<\/cim:ExcDC3A.edfmax>/g, obj, "edfmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.efd1>([\s\S]*?)<\/cim:ExcDC3A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.efd2>([\s\S]*?)<\/cim:ExcDC3A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.efdlim>([\s\S]*?)<\/cim:ExcDC3A.efdlim>/g, obj, "efdlim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC3A.efdmin>([\s\S]*?)<\/cim:ExcDC3A.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.exclim>([\s\S]*?)<\/cim:ExcDC3A.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC3A.ke>([\s\S]*?)<\/cim:ExcDC3A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.kr>([\s\S]*?)<\/cim:ExcDC3A.kr>/g, obj, "kr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.ks>([\s\S]*?)<\/cim:ExcDC3A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.kv>([\s\S]*?)<\/cim:ExcDC3A.kv>/g, obj, "kv", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.seefd1>([\s\S]*?)<\/cim:ExcDC3A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC3A.seefd2>([\s\S]*?)<\/cim:ExcDC3A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC3A.te>([\s\S]*?)<\/cim:ExcDC3A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.trh>([\s\S]*?)<\/cim:ExcDC3A.trh>/g, obj, "trh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.vrmax>([\s\S]*?)<\/cim:ExcDC3A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A.vrmin>([\s\S]*?)<\/cim:ExcDC3A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcDC3A;
            if (null == bucket)
                context.parsed.ExcDC3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcDC3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcDC3A", "edfmax", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "efdlim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC3A", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC3A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "kr", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "kv", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcDC3A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcDC3A", "te", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "trh", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcDC3A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE ST6B static excitation system with PID controller and optional inner feedbacks loop.
         *
         */
        function parse_ExcST6B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST6B";
            base.parse_element (/<cim:ExcST6B.ilr>([\s\S]*?)<\/cim:ExcST6B.ilr>/g, obj, "ilr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.k1>([\s\S]*?)<\/cim:ExcST6B.k1>/g, obj, "k1", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST6B.kcl>([\s\S]*?)<\/cim:ExcST6B.kcl>/g, obj, "kcl", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.kff>([\s\S]*?)<\/cim:ExcST6B.kff>/g, obj, "kff", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.kg>([\s\S]*?)<\/cim:ExcST6B.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.kia>([\s\S]*?)<\/cim:ExcST6B.kia>/g, obj, "kia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.klr>([\s\S]*?)<\/cim:ExcST6B.klr>/g, obj, "klr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.km>([\s\S]*?)<\/cim:ExcST6B.km>/g, obj, "km", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.kpa>([\s\S]*?)<\/cim:ExcST6B.kpa>/g, obj, "kpa", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.kvd>([\s\S]*?)<\/cim:ExcST6B.kvd>/g, obj, "kvd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.oelin>([\s\S]*?)<\/cim:ExcST6B.oelin>/g, obj, "oelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.tg>([\s\S]*?)<\/cim:ExcST6B.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.ts>([\s\S]*?)<\/cim:ExcST6B.ts>/g, obj, "ts", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.tvd>([\s\S]*?)<\/cim:ExcST6B.tvd>/g, obj, "tvd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vamax>([\s\S]*?)<\/cim:ExcST6B.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vamin>([\s\S]*?)<\/cim:ExcST6B.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vilim>([\s\S]*?)<\/cim:ExcST6B.vilim>/g, obj, "vilim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST6B.vimax>([\s\S]*?)<\/cim:ExcST6B.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vimin>([\s\S]*?)<\/cim:ExcST6B.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vmult>([\s\S]*?)<\/cim:ExcST6B.vmult>/g, obj, "vmult", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcST6B.vrmax>([\s\S]*?)<\/cim:ExcST6B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.vrmin>([\s\S]*?)<\/cim:ExcST6B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST6B.xc>([\s\S]*?)<\/cim:ExcST6B.xc>/g, obj, "xc", base.to_string, sub, context);
            bucket = context.parsed.ExcST6B;
            if (null == bucket)
                context.parsed.ExcST6B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST6B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST6B", "ilr", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "k1", base.from_boolean, fields);
            base.export_element (obj, "ExcST6B", "kcl", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "kff", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "kg", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "kia", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "klr", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "km", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "kpa", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "kvd", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "oelin", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "tg", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "ts", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "tvd", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vilim", base.from_boolean, fields);
            base.export_element (obj, "ExcST6B", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vmult", base.from_boolean, fields);
            base.export_element (obj, "ExcST6B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcST6B", "xc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Proportional/Integral Regulator Excitation System Model.
         *
         * This model can be used to represent excitation systems with a proportional-integral (PI) voltage regulator controller.
         *
         */
        function parse_ExcPIC (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcPIC";
            base.parse_element (/<cim:ExcPIC.e1>([\s\S]*?)<\/cim:ExcPIC.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.e2>([\s\S]*?)<\/cim:ExcPIC.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.efdmax>([\s\S]*?)<\/cim:ExcPIC.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.efdmin>([\s\S]*?)<\/cim:ExcPIC.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ka>([\s\S]*?)<\/cim:ExcPIC.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.kc>([\s\S]*?)<\/cim:ExcPIC.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ke>([\s\S]*?)<\/cim:ExcPIC.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.kf>([\s\S]*?)<\/cim:ExcPIC.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ki>([\s\S]*?)<\/cim:ExcPIC.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.kp>([\s\S]*?)<\/cim:ExcPIC.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.se1>([\s\S]*?)<\/cim:ExcPIC.se1>/g, obj, "se1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.se2>([\s\S]*?)<\/cim:ExcPIC.se2>/g, obj, "se2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ta1>([\s\S]*?)<\/cim:ExcPIC.ta1>/g, obj, "ta1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ta2>([\s\S]*?)<\/cim:ExcPIC.ta2>/g, obj, "ta2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ta3>([\s\S]*?)<\/cim:ExcPIC.ta3>/g, obj, "ta3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.ta4>([\s\S]*?)<\/cim:ExcPIC.ta4>/g, obj, "ta4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.te>([\s\S]*?)<\/cim:ExcPIC.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.tf1>([\s\S]*?)<\/cim:ExcPIC.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.tf2>([\s\S]*?)<\/cim:ExcPIC.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.vr1>([\s\S]*?)<\/cim:ExcPIC.vr1>/g, obj, "vr1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.vr2>([\s\S]*?)<\/cim:ExcPIC.vr2>/g, obj, "vr2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.vrmax>([\s\S]*?)<\/cim:ExcPIC.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcPIC.vrmin>([\s\S]*?)<\/cim:ExcPIC.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcPIC;
            if (null == bucket)
                context.parsed.ExcPIC = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcPIC (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcPIC", "e1", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "e2", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ka", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "kc", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ke", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "kf", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ki", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "kp", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "se1", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "se2", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ta1", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ta2", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ta3", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "ta4", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "te", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "tf2", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "vr1", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "vr2", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcPIC", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Czech Proportion/Integral Exciter.
         *
         */
        function parse_ExcCZ (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcCZ";
            base.parse_element (/<cim:ExcCZ.efdmax>([\s\S]*?)<\/cim:ExcCZ.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.efdmin>([\s\S]*?)<\/cim:ExcCZ.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.ka>([\s\S]*?)<\/cim:ExcCZ.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.ke>([\s\S]*?)<\/cim:ExcCZ.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.kp>([\s\S]*?)<\/cim:ExcCZ.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.ta>([\s\S]*?)<\/cim:ExcCZ.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.tc>([\s\S]*?)<\/cim:ExcCZ.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.te>([\s\S]*?)<\/cim:ExcCZ.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.vrmax>([\s\S]*?)<\/cim:ExcCZ.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcCZ.vrmin>([\s\S]*?)<\/cim:ExcCZ.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcCZ;
            if (null == bucket)
                context.parsed.ExcCZ = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcCZ (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcCZ", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "ka", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "ke", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "kp", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "ta", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "tc", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "te", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcCZ", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC8B alternator-supplied rectifier excitation system with speed input and input limiter.
         *
         */
        function parse_ExcAC8B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC8B";
            base.parse_element (/<cim:ExcAC8B.inlim>([\s\S]*?)<\/cim:ExcAC8B.inlim>/g, obj, "inlim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC8B.ka>([\s\S]*?)<\/cim:ExcAC8B.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.kc>([\s\S]*?)<\/cim:ExcAC8B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.kd>([\s\S]*?)<\/cim:ExcAC8B.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.kdr>([\s\S]*?)<\/cim:ExcAC8B.kdr>/g, obj, "kdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.ke>([\s\S]*?)<\/cim:ExcAC8B.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.kir>([\s\S]*?)<\/cim:ExcAC8B.kir>/g, obj, "kir", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.kpr>([\s\S]*?)<\/cim:ExcAC8B.kpr>/g, obj, "kpr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.ks>([\s\S]*?)<\/cim:ExcAC8B.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.pidlim>([\s\S]*?)<\/cim:ExcAC8B.pidlim>/g, obj, "pidlim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC8B.seve1>([\s\S]*?)<\/cim:ExcAC8B.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC8B.seve2>([\s\S]*?)<\/cim:ExcAC8B.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC8B.ta>([\s\S]*?)<\/cim:ExcAC8B.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.tdr>([\s\S]*?)<\/cim:ExcAC8B.tdr>/g, obj, "tdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.te>([\s\S]*?)<\/cim:ExcAC8B.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.telim>([\s\S]*?)<\/cim:ExcAC8B.telim>/g, obj, "telim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC8B.ve1>([\s\S]*?)<\/cim:ExcAC8B.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.ve2>([\s\S]*?)<\/cim:ExcAC8B.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vemin>([\s\S]*?)<\/cim:ExcAC8B.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vfemax>([\s\S]*?)<\/cim:ExcAC8B.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vimax>([\s\S]*?)<\/cim:ExcAC8B.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vimin>([\s\S]*?)<\/cim:ExcAC8B.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vpidmax>([\s\S]*?)<\/cim:ExcAC8B.vpidmax>/g, obj, "vpidmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vpidmin>([\s\S]*?)<\/cim:ExcAC8B.vpidmin>/g, obj, "vpidmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vrmax>([\s\S]*?)<\/cim:ExcAC8B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vrmin>([\s\S]*?)<\/cim:ExcAC8B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC8B.vtmult>([\s\S]*?)<\/cim:ExcAC8B.vtmult>/g, obj, "vtmult", base.to_boolean, sub, context);
            bucket = context.parsed.ExcAC8B;
            if (null == bucket)
                context.parsed.ExcAC8B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC8B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC8B", "inlim", base.from_boolean, fields);
            base.export_element (obj, "ExcAC8B", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "kd", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "kdr", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "kir", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "kpr", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "pidlim", base.from_boolean, fields);
            base.export_element (obj, "ExcAC8B", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcAC8B", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcAC8B", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "tdr", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "telim", base.from_boolean, fields);
            base.export_element (obj, "ExcAC8B", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vpidmax", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vpidmin", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcAC8B", "vtmult", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC5A model.
         *
         * The model represents a simplified model for brushless excitation systems. The regulator is supplied from a source, such as a permanent magnet generator, which is not affected by system disturbances.  Unlike other ac models, this model uses loaded rather than open circuit exciter saturation data in the same way as it is used for the dc models.  Because the model has been widely implemented by the industry, it is sometimes used to represent other types of systems when either detailed data for them are not available or simplified models are required.
         *
         */
        function parse_ExcIEEEAC5A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC5A";
            base.parse_element (/<cim:ExcIEEEAC5A.efd1>([\s\S]*?)<\/cim:ExcIEEEAC5A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.efd2>([\s\S]*?)<\/cim:ExcIEEEAC5A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.ka>([\s\S]*?)<\/cim:ExcIEEEAC5A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.ke>([\s\S]*?)<\/cim:ExcIEEEAC5A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.kf>([\s\S]*?)<\/cim:ExcIEEEAC5A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.seefd1>([\s\S]*?)<\/cim:ExcIEEEAC5A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.seefd2>([\s\S]*?)<\/cim:ExcIEEEAC5A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.ta>([\s\S]*?)<\/cim:ExcIEEEAC5A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.te>([\s\S]*?)<\/cim:ExcIEEEAC5A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.tf1>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.tf2>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.tf3>([\s\S]*?)<\/cim:ExcIEEEAC5A.tf3>/g, obj, "tf3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC5A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC5A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC5A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC5A;
            if (null == bucket)
                context.parsed.ExcIEEEAC5A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC5A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC5A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC5A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC5A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "tf2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "tf3", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC5A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST2A model.
         *
         * Some static systems utilize both current and voltage sources (generator terminal quantities) to comprise the power source.  The regulator controls the exciter output through controlled saturation of the power transformer components.  These compound-source rectifier excitation systems are designated Type ST2A and are represented by ExcIEEEST2A.
         *
         */
        function parse_ExcIEEEST2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST2A";
            base.parse_element (/<cim:ExcIEEEST2A.efdmax>([\s\S]*?)<\/cim:ExcIEEEST2A.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.ka>([\s\S]*?)<\/cim:ExcIEEEST2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.kc>([\s\S]*?)<\/cim:ExcIEEEST2A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.ke>([\s\S]*?)<\/cim:ExcIEEEST2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.kf>([\s\S]*?)<\/cim:ExcIEEEST2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.ki>([\s\S]*?)<\/cim:ExcIEEEST2A.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.kp>([\s\S]*?)<\/cim:ExcIEEEST2A.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.ta>([\s\S]*?)<\/cim:ExcIEEEST2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.te>([\s\S]*?)<\/cim:ExcIEEEST2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.tf>([\s\S]*?)<\/cim:ExcIEEEST2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.uelin>([\s\S]*?)<\/cim:ExcIEEEST2A.uelin>/g, obj, "uelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST2A;
            if (null == bucket)
                context.parsed.ExcIEEEST2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST2A", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "ki", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "kp", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "uelin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEST2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST2A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST5B model.
         *
         * The Type ST5B excitation system is a variation of the Type ST1A model, with alternative overexcitation and underexcitation inputs and additional limits.
         *
         */
        function parse_ExcIEEEST5B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST5B";
            base.parse_element (/<cim:ExcIEEEST5B.kc>([\s\S]*?)<\/cim:ExcIEEEST5B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.kr>([\s\S]*?)<\/cim:ExcIEEEST5B.kr>/g, obj, "kr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.t1>([\s\S]*?)<\/cim:ExcIEEEST5B.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tb1>([\s\S]*?)<\/cim:ExcIEEEST5B.tb1>/g, obj, "tb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tb2>([\s\S]*?)<\/cim:ExcIEEEST5B.tb2>/g, obj, "tb2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tc1>([\s\S]*?)<\/cim:ExcIEEEST5B.tc1>/g, obj, "tc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tc2>([\s\S]*?)<\/cim:ExcIEEEST5B.tc2>/g, obj, "tc2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tob1>([\s\S]*?)<\/cim:ExcIEEEST5B.tob1>/g, obj, "tob1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tob2>([\s\S]*?)<\/cim:ExcIEEEST5B.tob2>/g, obj, "tob2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.toc1>([\s\S]*?)<\/cim:ExcIEEEST5B.toc1>/g, obj, "toc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.toc2>([\s\S]*?)<\/cim:ExcIEEEST5B.toc2>/g, obj, "toc2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tub1>([\s\S]*?)<\/cim:ExcIEEEST5B.tub1>/g, obj, "tub1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tub2>([\s\S]*?)<\/cim:ExcIEEEST5B.tub2>/g, obj, "tub2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tuc1>([\s\S]*?)<\/cim:ExcIEEEST5B.tuc1>/g, obj, "tuc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.tuc2>([\s\S]*?)<\/cim:ExcIEEEST5B.tuc2>/g, obj, "tuc2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST5B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST5B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST5B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST5B;
            if (null == bucket)
                context.parsed.ExcIEEEST5B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST5B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST5B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "kr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "t1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tb1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tb2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tc1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tc2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tob1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tob2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "toc1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "toc2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tub1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tub2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tuc1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "tuc2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST5B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC4A alternator-supplied rectifier excitation system with different minimum controller output.
         *
         */
        function parse_ExcAC4A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC4A";
            base.parse_element (/<cim:ExcAC4A.ka>([\s\S]*?)<\/cim:ExcAC4A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.kc>([\s\S]*?)<\/cim:ExcAC4A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.ta>([\s\S]*?)<\/cim:ExcAC4A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.tb>([\s\S]*?)<\/cim:ExcAC4A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.tc>([\s\S]*?)<\/cim:ExcAC4A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.vimax>([\s\S]*?)<\/cim:ExcAC4A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.vimin>([\s\S]*?)<\/cim:ExcAC4A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.vrmax>([\s\S]*?)<\/cim:ExcAC4A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC4A.vrmin>([\s\S]*?)<\/cim:ExcAC4A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcAC4A;
            if (null == bucket)
                context.parsed.ExcAC4A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC4A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC4A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC4A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC8B model.
         *
         * This model represents a PID voltage regulator with either a brushless exciter or dc exciter. The AVR in this model consists of PID control, with separate constants for the proportional (<b>K</b><b><sub>PR</sub></b>), integral (<b>K</b><b><sub>IR</sub></b>), and derivative (<b>K</b><b><sub>DR</sub></b>) gains. The representation of the brushless exciter (<b>T</b><b><sub>E</sub></b>, <b>K</b><b><sub>E</sub></b>, <b>S</b><b><sub>E</sub></b>, <b>K</b><b><sub>C</sub></b>, <b>K</b><b><sub>D</sub></b>) is similar to the model Type AC2A. The Type AC8B model can be used to represent static voltage regulators applied to brushless excitation systems. Digitally based voltage regulators feeding dc rotating main exciters can be represented with the AC Type AC8B model with the parameters <b>K</b><b><sub>C</sub></b> and <b>K</b><b><sub>D</sub></b> set to 0.  For thyristor power stages fed from the generator terminals, the limits <b>V</b><b><sub>RMAX</sub></b> and <b>V</b><b><sub>RMIN</sub></b> should be a function of terminal voltage: <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMAX</sub></b><sub> </sub>and <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMIN</sub></b>.
         *
         */
        function parse_ExcIEEEAC8B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC8B";
            base.parse_element (/<cim:ExcIEEEAC8B.ka>([\s\S]*?)<\/cim:ExcIEEEAC8B.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.kc>([\s\S]*?)<\/cim:ExcIEEEAC8B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.kd>([\s\S]*?)<\/cim:ExcIEEEAC8B.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.kdr>([\s\S]*?)<\/cim:ExcIEEEAC8B.kdr>/g, obj, "kdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.ke>([\s\S]*?)<\/cim:ExcIEEEAC8B.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.kir>([\s\S]*?)<\/cim:ExcIEEEAC8B.kir>/g, obj, "kir", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.kpr>([\s\S]*?)<\/cim:ExcIEEEAC8B.kpr>/g, obj, "kpr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.seve1>([\s\S]*?)<\/cim:ExcIEEEAC8B.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.seve2>([\s\S]*?)<\/cim:ExcIEEEAC8B.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.ta>([\s\S]*?)<\/cim:ExcIEEEAC8B.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.tdr>([\s\S]*?)<\/cim:ExcIEEEAC8B.tdr>/g, obj, "tdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.te>([\s\S]*?)<\/cim:ExcIEEEAC8B.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.ve1>([\s\S]*?)<\/cim:ExcIEEEAC8B.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.ve2>([\s\S]*?)<\/cim:ExcIEEEAC8B.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.vemin>([\s\S]*?)<\/cim:ExcIEEEAC8B.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC8B.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC8B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC8B.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC8B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC8B;
            if (null == bucket)
                context.parsed.ExcIEEEAC8B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC8B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC8B", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "kdr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "kir", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "kpr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC8B", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC8B", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "tdr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC8B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of connection for the UEL input used for static excitation systems type 7B.
         *
         */
        function parse_ExcST7BUELselectorKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcST7BUELselectorKind";
            base.parse_element (/<cim:ExcST7BUELselectorKind.noUELinput>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.noUELinput>/g, obj, "noUELinput", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BUELselectorKind.addVref>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.addVref>/g, obj, "addVref", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BUELselectorKind.inputHVgate>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.inputHVgate>/g, obj, "inputHVgate", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7BUELselectorKind.outputHVgate>([\s\S]*?)<\/cim:ExcST7BUELselectorKind.outputHVgate>/g, obj, "outputHVgate", base.to_string, sub, context);
            bucket = context.parsed.ExcST7BUELselectorKind;
            if (null == bucket)
                context.parsed.ExcST7BUELselectorKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST7BUELselectorKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExcST7BUELselectorKind", "noUELinput", base.from_string, fields);
            base.export_element (obj, "ExcST7BUELselectorKind", "addVref", base.from_string, fields);
            base.export_element (obj, "ExcST7BUELselectorKind", "inputHVgate", base.from_string, fields);
            base.export_element (obj, "ExcST7BUELselectorKind", "outputHVgate", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Slovakian Excitation System Model.
         *
         * UEL and secondary voltage control are included in this model. When this model is used, there cannot be a separate underexcitation limiter or VAr controller model.
         *
         */
        function parse_ExcSK (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcSK";
            base.parse_element (/<cim:ExcSK.efdmax>([\s\S]*?)<\/cim:ExcSK.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.efdmin>([\s\S]*?)<\/cim:ExcSK.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.emax>([\s\S]*?)<\/cim:ExcSK.emax>/g, obj, "emax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.emin>([\s\S]*?)<\/cim:ExcSK.emin>/g, obj, "emin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.k>([\s\S]*?)<\/cim:ExcSK.k>/g, obj, "k", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.k1>([\s\S]*?)<\/cim:ExcSK.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.k2>([\s\S]*?)<\/cim:ExcSK.k2>/g, obj, "k2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kc>([\s\S]*?)<\/cim:ExcSK.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kce>([\s\S]*?)<\/cim:ExcSK.kce>/g, obj, "kce", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kd>([\s\S]*?)<\/cim:ExcSK.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kgob>([\s\S]*?)<\/cim:ExcSK.kgob>/g, obj, "kgob", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kp>([\s\S]*?)<\/cim:ExcSK.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kqi>([\s\S]*?)<\/cim:ExcSK.kqi>/g, obj, "kqi", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kqob>([\s\S]*?)<\/cim:ExcSK.kqob>/g, obj, "kqob", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.kqp>([\s\S]*?)<\/cim:ExcSK.kqp>/g, obj, "kqp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.nq>([\s\S]*?)<\/cim:ExcSK.nq>/g, obj, "nq", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.qconoff>([\s\S]*?)<\/cim:ExcSK.qconoff>/g, obj, "qconoff", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcSK.qz>([\s\S]*?)<\/cim:ExcSK.qz>/g, obj, "qz", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.remote>([\s\S]*?)<\/cim:ExcSK.remote>/g, obj, "remote", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcSK.sbase>([\s\S]*?)<\/cim:ExcSK.sbase>/g, obj, "sbase", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.tc>([\s\S]*?)<\/cim:ExcSK.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.te>([\s\S]*?)<\/cim:ExcSK.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.ti>([\s\S]*?)<\/cim:ExcSK.ti>/g, obj, "ti", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.tp>([\s\S]*?)<\/cim:ExcSK.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.tr>([\s\S]*?)<\/cim:ExcSK.tr>/g, obj, "tr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.uimax>([\s\S]*?)<\/cim:ExcSK.uimax>/g, obj, "uimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.uimin>([\s\S]*?)<\/cim:ExcSK.uimin>/g, obj, "uimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.urmax>([\s\S]*?)<\/cim:ExcSK.urmax>/g, obj, "urmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.urmin>([\s\S]*?)<\/cim:ExcSK.urmin>/g, obj, "urmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.vtmax>([\s\S]*?)<\/cim:ExcSK.vtmax>/g, obj, "vtmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.vtmin>([\s\S]*?)<\/cim:ExcSK.vtmin>/g, obj, "vtmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcSK.yp>([\s\S]*?)<\/cim:ExcSK.yp>/g, obj, "yp", base.to_string, sub, context);
            bucket = context.parsed.ExcSK;
            if (null == bucket)
                context.parsed.ExcSK = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcSK (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcSK", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcSK", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcSK", "emax", base.from_string, fields);
            base.export_element (obj, "ExcSK", "emin", base.from_string, fields);
            base.export_element (obj, "ExcSK", "k", base.from_string, fields);
            base.export_element (obj, "ExcSK", "k1", base.from_string, fields);
            base.export_element (obj, "ExcSK", "k2", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kc", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kce", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kd", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kgob", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kp", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kqi", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kqob", base.from_string, fields);
            base.export_element (obj, "ExcSK", "kqp", base.from_string, fields);
            base.export_element (obj, "ExcSK", "nq", base.from_string, fields);
            base.export_element (obj, "ExcSK", "qconoff", base.from_boolean, fields);
            base.export_element (obj, "ExcSK", "qz", base.from_string, fields);
            base.export_element (obj, "ExcSK", "remote", base.from_boolean, fields);
            base.export_element (obj, "ExcSK", "sbase", base.from_string, fields);
            base.export_element (obj, "ExcSK", "tc", base.from_string, fields);
            base.export_element (obj, "ExcSK", "te", base.from_string, fields);
            base.export_element (obj, "ExcSK", "ti", base.from_string, fields);
            base.export_element (obj, "ExcSK", "tp", base.from_string, fields);
            base.export_element (obj, "ExcSK", "tr", base.from_string, fields);
            base.export_element (obj, "ExcSK", "uimax", base.from_string, fields);
            base.export_element (obj, "ExcSK", "uimin", base.from_string, fields);
            base.export_element (obj, "ExcSK", "urmax", base.from_string, fields);
            base.export_element (obj, "ExcSK", "urmin", base.from_string, fields);
            base.export_element (obj, "ExcSK", "vtmax", base.from_string, fields);
            base.export_element (obj, "ExcSK", "vtmin", base.from_string, fields);
            base.export_element (obj, "ExcSK", "yp", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * General Purpose Rotating Excitation System Model.
         *
         * This model can be used to represent a wide range of excitation systems whose DC power source is an AC or DC generator. It encompasses IEEE type AC1, AC2, DC1, and DC2 excitation system models.
         *
         */
        function parse_ExcREXS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcREXS";
            base.parse_element (/<cim:ExcREXS.e1>([\s\S]*?)<\/cim:ExcREXS.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.e2>([\s\S]*?)<\/cim:ExcREXS.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.fbf>([\s\S]*?)<\/cim:ExcREXS.fbf>/g, obj, "fbf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.flimf>([\s\S]*?)<\/cim:ExcREXS.flimf>/g, obj, "flimf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kc>([\s\S]*?)<\/cim:ExcREXS.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kd>([\s\S]*?)<\/cim:ExcREXS.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.ke>([\s\S]*?)<\/cim:ExcREXS.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kefd>([\s\S]*?)<\/cim:ExcREXS.kefd>/g, obj, "kefd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kf>([\s\S]*?)<\/cim:ExcREXS.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kh>([\s\S]*?)<\/cim:ExcREXS.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kii>([\s\S]*?)<\/cim:ExcREXS.kii>/g, obj, "kii", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kip>([\s\S]*?)<\/cim:ExcREXS.kip>/g, obj, "kip", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.ks>([\s\S]*?)<\/cim:ExcREXS.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kvi>([\s\S]*?)<\/cim:ExcREXS.kvi>/g, obj, "kvi", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kvp>([\s\S]*?)<\/cim:ExcREXS.kvp>/g, obj, "kvp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.kvphz>([\s\S]*?)<\/cim:ExcREXS.kvphz>/g, obj, "kvphz", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.nvphz>([\s\S]*?)<\/cim:ExcREXS.nvphz>/g, obj, "nvphz", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.se1>([\s\S]*?)<\/cim:ExcREXS.se1>/g, obj, "se1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.se2>([\s\S]*?)<\/cim:ExcREXS.se2>/g, obj, "se2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.ta>([\s\S]*?)<\/cim:ExcREXS.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tb1>([\s\S]*?)<\/cim:ExcREXS.tb1>/g, obj, "tb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tb2>([\s\S]*?)<\/cim:ExcREXS.tb2>/g, obj, "tb2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tc1>([\s\S]*?)<\/cim:ExcREXS.tc1>/g, obj, "tc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tc2>([\s\S]*?)<\/cim:ExcREXS.tc2>/g, obj, "tc2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.te>([\s\S]*?)<\/cim:ExcREXS.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tf>([\s\S]*?)<\/cim:ExcREXS.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tf1>([\s\S]*?)<\/cim:ExcREXS.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tf2>([\s\S]*?)<\/cim:ExcREXS.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.tp>([\s\S]*?)<\/cim:ExcREXS.tp>/g, obj, "tp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vcmax>([\s\S]*?)<\/cim:ExcREXS.vcmax>/g, obj, "vcmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vfmax>([\s\S]*?)<\/cim:ExcREXS.vfmax>/g, obj, "vfmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vfmin>([\s\S]*?)<\/cim:ExcREXS.vfmin>/g, obj, "vfmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vimax>([\s\S]*?)<\/cim:ExcREXS.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vrmax>([\s\S]*?)<\/cim:ExcREXS.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.vrmin>([\s\S]*?)<\/cim:ExcREXS.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXS.xc>([\s\S]*?)<\/cim:ExcREXS.xc>/g, obj, "xc", base.to_string, sub, context);
            bucket = context.parsed.ExcREXS;
            if (null == bucket)
                context.parsed.ExcREXS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcREXS (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcREXS", "e1", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "e2", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "fbf", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "flimf", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kc", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kd", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "ke", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kefd", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kf", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kh", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kii", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kip", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "ks", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kvi", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kvp", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "kvphz", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "nvphz", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "se1", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "se2", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "ta", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tb1", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tb2", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tc1", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tc2", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "te", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tf", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tf2", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "tp", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vcmax", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vfmax", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vfmin", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcREXS", "xc", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Italian excitation system.
         *
         * It represents static field voltage or excitation current feedback excitation system.
         *
         */
        function parse_ExcANS (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcANS";
            base.parse_element (/<cim:ExcANS.blint>([\s\S]*?)<\/cim:ExcANS.blint>/g, obj, "blint", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.ifmn>([\s\S]*?)<\/cim:ExcANS.ifmn>/g, obj, "ifmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.ifmx>([\s\S]*?)<\/cim:ExcANS.ifmx>/g, obj, "ifmx", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.k2>([\s\S]*?)<\/cim:ExcANS.k2>/g, obj, "k2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcANS.k3>([\s\S]*?)<\/cim:ExcANS.k3>/g, obj, "k3", base.to_float, sub, context);
            base.parse_element (/<cim:ExcANS.kce>([\s\S]*?)<\/cim:ExcANS.kce>/g, obj, "kce", base.to_float, sub, context);
            base.parse_element (/<cim:ExcANS.krvecc>([\s\S]*?)<\/cim:ExcANS.krvecc>/g, obj, "krvecc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.kvfif>([\s\S]*?)<\/cim:ExcANS.kvfif>/g, obj, "kvfif", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.t1>([\s\S]*?)<\/cim:ExcANS.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.t2>([\s\S]*?)<\/cim:ExcANS.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.t3>([\s\S]*?)<\/cim:ExcANS.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.tb>([\s\S]*?)<\/cim:ExcANS.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.vrmn>([\s\S]*?)<\/cim:ExcANS.vrmn>/g, obj, "vrmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcANS.vrmx>([\s\S]*?)<\/cim:ExcANS.vrmx>/g, obj, "vrmx", base.to_string, sub, context);
            bucket = context.parsed.ExcANS;
            if (null == bucket)
                context.parsed.ExcANS = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcANS (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcANS", "blint", base.from_string, fields);
            base.export_element (obj, "ExcANS", "ifmn", base.from_string, fields);
            base.export_element (obj, "ExcANS", "ifmx", base.from_string, fields);
            base.export_element (obj, "ExcANS", "k2", base.from_float, fields);
            base.export_element (obj, "ExcANS", "k3", base.from_float, fields);
            base.export_element (obj, "ExcANS", "kce", base.from_float, fields);
            base.export_element (obj, "ExcANS", "krvecc", base.from_string, fields);
            base.export_element (obj, "ExcANS", "kvfif", base.from_string, fields);
            base.export_element (obj, "ExcANS", "t1", base.from_string, fields);
            base.export_element (obj, "ExcANS", "t2", base.from_string, fields);
            base.export_element (obj, "ExcANS", "t3", base.from_string, fields);
            base.export_element (obj, "ExcANS", "tb", base.from_string, fields);
            base.export_element (obj, "ExcANS", "vrmn", base.from_string, fields);
            base.export_element (obj, "ExcANS", "vrmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC7B model.
         *
         * The model represents excitation systems which consist of an ac alternator with either stationary or rotating rectifiers to produce the dc field requirements. It is an upgrade to earlier ac excitation systems, which replace only the controls but retain the ac alternator and diode rectifier bridge.
         *
         */
        function parse_ExcIEEEAC7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC7B";
            base.parse_element (/<cim:ExcIEEEAC7B.kc>([\s\S]*?)<\/cim:ExcIEEEAC7B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kd>([\s\S]*?)<\/cim:ExcIEEEAC7B.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kdr>([\s\S]*?)<\/cim:ExcIEEEAC7B.kdr>/g, obj, "kdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.ke>([\s\S]*?)<\/cim:ExcIEEEAC7B.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kf1>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf1>/g, obj, "kf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kf2>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf2>/g, obj, "kf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kf3>([\s\S]*?)<\/cim:ExcIEEEAC7B.kf3>/g, obj, "kf3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kia>([\s\S]*?)<\/cim:ExcIEEEAC7B.kia>/g, obj, "kia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kir>([\s\S]*?)<\/cim:ExcIEEEAC7B.kir>/g, obj, "kir", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kl>([\s\S]*?)<\/cim:ExcIEEEAC7B.kl>/g, obj, "kl", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kp>([\s\S]*?)<\/cim:ExcIEEEAC7B.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kpa>([\s\S]*?)<\/cim:ExcIEEEAC7B.kpa>/g, obj, "kpa", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.kpr>([\s\S]*?)<\/cim:ExcIEEEAC7B.kpr>/g, obj, "kpr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.seve1>([\s\S]*?)<\/cim:ExcIEEEAC7B.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.seve2>([\s\S]*?)<\/cim:ExcIEEEAC7B.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.tdr>([\s\S]*?)<\/cim:ExcIEEEAC7B.tdr>/g, obj, "tdr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.te>([\s\S]*?)<\/cim:ExcIEEEAC7B.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.tf>([\s\S]*?)<\/cim:ExcIEEEAC7B.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vamax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vamin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.ve1>([\s\S]*?)<\/cim:ExcIEEEAC7B.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.ve2>([\s\S]*?)<\/cim:ExcIEEEAC7B.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vemin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vemin>/g, obj, "vemin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vfemax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC7B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC7B.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC7B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC7B;
            if (null == bucket)
                context.parsed.ExcIEEEAC7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC7B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC7B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kdr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kf1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kf2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kf3", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kia", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kir", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kl", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kp", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kpa", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "kpr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC7B", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC7B", "tdr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vemin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC7B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST4B model.
         *
         * This model is a variation of the Type ST3A model, with a proportional plus integral (PI) regulator block replacing the lag-lead regulator characteristic that is in the ST3A model. Both potential and compound source rectifier excitation systems are modeled.  The PI regulator blocks have non-windup limits that are represented. The voltage regulator of this model is typically implemented digitally.
         *
         */
        function parse_ExcIEEEST4B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST4B";
            base.parse_element (/<cim:ExcIEEEST4B.kc>([\s\S]*?)<\/cim:ExcIEEEST4B.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kg>([\s\S]*?)<\/cim:ExcIEEEST4B.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.ki>([\s\S]*?)<\/cim:ExcIEEEST4B.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kim>([\s\S]*?)<\/cim:ExcIEEEST4B.kim>/g, obj, "kim", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kir>([\s\S]*?)<\/cim:ExcIEEEST4B.kir>/g, obj, "kir", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kp>([\s\S]*?)<\/cim:ExcIEEEST4B.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kpm>([\s\S]*?)<\/cim:ExcIEEEST4B.kpm>/g, obj, "kpm", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.kpr>([\s\S]*?)<\/cim:ExcIEEEST4B.kpr>/g, obj, "kpr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.ta>([\s\S]*?)<\/cim:ExcIEEEST4B.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.thetap>([\s\S]*?)<\/cim:ExcIEEEST4B.thetap>/g, obj, "thetap", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.vbmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vbmax>/g, obj, "vbmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.vmmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vmmax>/g, obj, "vmmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.vmmin>([\s\S]*?)<\/cim:ExcIEEEST4B.vmmin>/g, obj, "vmmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST4B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST4B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST4B.xl>([\s\S]*?)<\/cim:ExcIEEEST4B.xl>/g, obj, "xl", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST4B;
            if (null == bucket)
                context.parsed.ExcIEEEST4B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST4B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST4B", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kg", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "ki", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kim", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kir", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kp", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kpm", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "kpr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "thetap", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "vbmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "vmmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "vmmin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST4B", "xl", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE ST7B static excitation system without stator current limiter (SCL) and current compensator (DROOP) inputs.
         *
         */
        function parse_ExcST7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST7B";
            base.parse_element (/<cim:ExcST7B.kh>([\s\S]*?)<\/cim:ExcST7B.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.kia>([\s\S]*?)<\/cim:ExcST7B.kia>/g, obj, "kia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.kl>([\s\S]*?)<\/cim:ExcST7B.kl>/g, obj, "kl", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.kpa>([\s\S]*?)<\/cim:ExcST7B.kpa>/g, obj, "kpa", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.oelin>([\s\S]*?)<\/cim:ExcST7B.oelin>/g, obj, "oelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.tb>([\s\S]*?)<\/cim:ExcST7B.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.tc>([\s\S]*?)<\/cim:ExcST7B.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.tf>([\s\S]*?)<\/cim:ExcST7B.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.tg>([\s\S]*?)<\/cim:ExcST7B.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.tia>([\s\S]*?)<\/cim:ExcST7B.tia>/g, obj, "tia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.ts>([\s\S]*?)<\/cim:ExcST7B.ts>/g, obj, "ts", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.uelin>([\s\S]*?)<\/cim:ExcST7B.uelin>/g, obj, "uelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.vmax>([\s\S]*?)<\/cim:ExcST7B.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.vmin>([\s\S]*?)<\/cim:ExcST7B.vmin>/g, obj, "vmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.vrmax>([\s\S]*?)<\/cim:ExcST7B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST7B.vrmin>([\s\S]*?)<\/cim:ExcST7B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcST7B;
            if (null == bucket)
                context.parsed.ExcST7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST7B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST7B", "kh", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "kia", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "kl", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "kpa", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "oelin", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "tb", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "tc", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "tf", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "tg", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "tia", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "ts", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "uelin", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "vmax", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "vmin", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST7B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE DC1A direct current commutator exciter with speed input and without underexcitation limiters (UEL) inputs.
         *
         */
        function parse_ExcDC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC1A";
            base.parse_element (/<cim:ExcDC1A.edfmax>([\s\S]*?)<\/cim:ExcDC1A.edfmax>/g, obj, "edfmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.efd1>([\s\S]*?)<\/cim:ExcDC1A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.efd2>([\s\S]*?)<\/cim:ExcDC1A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.efdmin>([\s\S]*?)<\/cim:ExcDC1A.efdmin>/g, obj, "efdmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.exclim>([\s\S]*?)<\/cim:ExcDC1A.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC1A.ka>([\s\S]*?)<\/cim:ExcDC1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.ke>([\s\S]*?)<\/cim:ExcDC1A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.kf>([\s\S]*?)<\/cim:ExcDC1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.ks>([\s\S]*?)<\/cim:ExcDC1A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.seefd1>([\s\S]*?)<\/cim:ExcDC1A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC1A.seefd2>([\s\S]*?)<\/cim:ExcDC1A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcDC1A.ta>([\s\S]*?)<\/cim:ExcDC1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.tb>([\s\S]*?)<\/cim:ExcDC1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.tc>([\s\S]*?)<\/cim:ExcDC1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.te>([\s\S]*?)<\/cim:ExcDC1A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.tf>([\s\S]*?)<\/cim:ExcDC1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.vrmax>([\s\S]*?)<\/cim:ExcDC1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC1A.vrmin>([\s\S]*?)<\/cim:ExcDC1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcDC1A;
            if (null == bucket)
                context.parsed.ExcDC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcDC1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcDC1A", "edfmax", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "efdmin", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcDC1A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcDC1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "te", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcDC1A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Type of rate feedback signals.
         *
         */
        function parse_ExcREXSFeedbackSignalKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ExcREXSFeedbackSignalKind";
            base.parse_element (/<cim:ExcREXSFeedbackSignalKind.fieldVoltage>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.fieldVoltage>/g, obj, "fieldVoltage", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXSFeedbackSignalKind.fieldCurrent>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.fieldCurrent>/g, obj, "fieldCurrent", base.to_string, sub, context);
            base.parse_element (/<cim:ExcREXSFeedbackSignalKind.outputVoltage>([\s\S]*?)<\/cim:ExcREXSFeedbackSignalKind.outputVoltage>/g, obj, "outputVoltage", base.to_string, sub, context);
            bucket = context.parsed.ExcREXSFeedbackSignalKind;
            if (null == bucket)
                context.parsed.ExcREXSFeedbackSignalKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcREXSFeedbackSignalKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ExcREXSFeedbackSignalKind", "fieldVoltage", base.from_string, fields);
            base.export_element (obj, "ExcREXSFeedbackSignalKind", "fieldCurrent", base.from_string, fields);
            base.export_element (obj, "ExcREXSFeedbackSignalKind", "outputVoltage", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE ST3A static excitation system with added speed multiplier.
         *
         */
        function parse_ExcST3A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcST3A";
            base.parse_element (/<cim:ExcST3A.efdmax>([\s\S]*?)<\/cim:ExcST3A.efdmax>/g, obj, "efdmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.kc>([\s\S]*?)<\/cim:ExcST3A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.kg>([\s\S]*?)<\/cim:ExcST3A.kg>/g, obj, "kg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.ki>([\s\S]*?)<\/cim:ExcST3A.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.kj>([\s\S]*?)<\/cim:ExcST3A.kj>/g, obj, "kj", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.km>([\s\S]*?)<\/cim:ExcST3A.km>/g, obj, "km", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.kp>([\s\S]*?)<\/cim:ExcST3A.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.ks>([\s\S]*?)<\/cim:ExcST3A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.ks1>([\s\S]*?)<\/cim:ExcST3A.ks1>/g, obj, "ks1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.tb>([\s\S]*?)<\/cim:ExcST3A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.tc>([\s\S]*?)<\/cim:ExcST3A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.thetap>([\s\S]*?)<\/cim:ExcST3A.thetap>/g, obj, "thetap", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.tm>([\s\S]*?)<\/cim:ExcST3A.tm>/g, obj, "tm", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vbmax>([\s\S]*?)<\/cim:ExcST3A.vbmax>/g, obj, "vbmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vgmax>([\s\S]*?)<\/cim:ExcST3A.vgmax>/g, obj, "vgmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vimax>([\s\S]*?)<\/cim:ExcST3A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vimin>([\s\S]*?)<\/cim:ExcST3A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vrmax>([\s\S]*?)<\/cim:ExcST3A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.vrmin>([\s\S]*?)<\/cim:ExcST3A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcST3A.xl>([\s\S]*?)<\/cim:ExcST3A.xl>/g, obj, "xl", base.to_string, sub, context);
            bucket = context.parsed.ExcST3A;
            if (null == bucket)
                context.parsed.ExcST3A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcST3A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcST3A", "efdmax", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "kg", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "ki", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "kj", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "km", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "kp", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "ks1", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "thetap", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "tm", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vbmax", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vgmax", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "vrmin", base.from_string, fields);
            base.export_element (obj, "ExcST3A", "xl", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC1A model.
         *
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC1A. These excitation systems consist of an alternator main exciter with non-controlled rectifiers.
         *
         */
        function parse_ExcIEEEAC1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC1A";
            base.parse_element (/<cim:ExcIEEEAC1A.ka>([\s\S]*?)<\/cim:ExcIEEEAC1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.kc>([\s\S]*?)<\/cim:ExcIEEEAC1A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.kd>([\s\S]*?)<\/cim:ExcIEEEAC1A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.ke>([\s\S]*?)<\/cim:ExcIEEEAC1A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.kf>([\s\S]*?)<\/cim:ExcIEEEAC1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.seve1>([\s\S]*?)<\/cim:ExcIEEEAC1A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.seve2>([\s\S]*?)<\/cim:ExcIEEEAC1A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.ta>([\s\S]*?)<\/cim:ExcIEEEAC1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.tb>([\s\S]*?)<\/cim:ExcIEEEAC1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.tc>([\s\S]*?)<\/cim:ExcIEEEAC1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.te>([\s\S]*?)<\/cim:ExcIEEEAC1A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.tf>([\s\S]*?)<\/cim:ExcIEEEAC1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.vamax>([\s\S]*?)<\/cim:ExcIEEEAC1A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.vamin>([\s\S]*?)<\/cim:ExcIEEEAC1A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.ve1>([\s\S]*?)<\/cim:ExcIEEEAC1A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.ve2>([\s\S]*?)<\/cim:ExcIEEEAC1A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC1A;
            if (null == bucket)
                context.parsed.ExcIEEEAC1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC1A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEAC1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC1A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC5A alternator-supplied rectifier excitation system with different minimum controller output.
         *
         */
        function parse_ExcAC5A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC5A";
            base.parse_element (/<cim:ExcAC5A.a>([\s\S]*?)<\/cim:ExcAC5A.a>/g, obj, "a", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC5A.efd1>([\s\S]*?)<\/cim:ExcAC5A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.efd2>([\s\S]*?)<\/cim:ExcAC5A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.ka>([\s\S]*?)<\/cim:ExcAC5A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.ke>([\s\S]*?)<\/cim:ExcAC5A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.kf>([\s\S]*?)<\/cim:ExcAC5A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.ks>([\s\S]*?)<\/cim:ExcAC5A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.seefd1>([\s\S]*?)<\/cim:ExcAC5A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC5A.seefd2>([\s\S]*?)<\/cim:ExcAC5A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC5A.ta>([\s\S]*?)<\/cim:ExcAC5A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.tb>([\s\S]*?)<\/cim:ExcAC5A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.tc>([\s\S]*?)<\/cim:ExcAC5A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.te>([\s\S]*?)<\/cim:ExcAC5A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.tf1>([\s\S]*?)<\/cim:ExcAC5A.tf1>/g, obj, "tf1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.tf2>([\s\S]*?)<\/cim:ExcAC5A.tf2>/g, obj, "tf2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.tf3>([\s\S]*?)<\/cim:ExcAC5A.tf3>/g, obj, "tf3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.vrmax>([\s\S]*?)<\/cim:ExcAC5A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC5A.vrmin>([\s\S]*?)<\/cim:ExcAC5A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcAC5A;
            if (null == bucket)
                context.parsed.ExcAC5A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC5A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC5A", "a", base.from_float, fields);
            base.export_element (obj, "ExcAC5A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcAC5A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcAC5A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "tf1", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "tf2", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "tf3", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC5A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Hungarian Excitation System Model, with built-in voltage transducer.
         *
         */
        function parse_ExcHU (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcHU";
            base.parse_element (/<cim:ExcHU.ae>([\s\S]*?)<\/cim:ExcHU.ae>/g, obj, "ae", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.ai>([\s\S]*?)<\/cim:ExcHU.ai>/g, obj, "ai", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.atr>([\s\S]*?)<\/cim:ExcHU.atr>/g, obj, "atr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.emax>([\s\S]*?)<\/cim:ExcHU.emax>/g, obj, "emax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.emin>([\s\S]*?)<\/cim:ExcHU.emin>/g, obj, "emin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.imax>([\s\S]*?)<\/cim:ExcHU.imax>/g, obj, "imax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.imin>([\s\S]*?)<\/cim:ExcHU.imin>/g, obj, "imin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.ke>([\s\S]*?)<\/cim:ExcHU.ke>/g, obj, "ke", base.to_float, sub, context);
            base.parse_element (/<cim:ExcHU.ki>([\s\S]*?)<\/cim:ExcHU.ki>/g, obj, "ki", base.to_float, sub, context);
            base.parse_element (/<cim:ExcHU.te>([\s\S]*?)<\/cim:ExcHU.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.ti>([\s\S]*?)<\/cim:ExcHU.ti>/g, obj, "ti", base.to_string, sub, context);
            base.parse_element (/<cim:ExcHU.tr>([\s\S]*?)<\/cim:ExcHU.tr>/g, obj, "tr", base.to_string, sub, context);
            bucket = context.parsed.ExcHU;
            if (null == bucket)
                context.parsed.ExcHU = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcHU (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcHU", "ae", base.from_string, fields);
            base.export_element (obj, "ExcHU", "ai", base.from_string, fields);
            base.export_element (obj, "ExcHU", "atr", base.from_string, fields);
            base.export_element (obj, "ExcHU", "emax", base.from_string, fields);
            base.export_element (obj, "ExcHU", "emin", base.from_string, fields);
            base.export_element (obj, "ExcHU", "imax", base.from_string, fields);
            base.export_element (obj, "ExcHU", "imin", base.from_string, fields);
            base.export_element (obj, "ExcHU", "ke", base.from_float, fields);
            base.export_element (obj, "ExcHU", "ki", base.from_float, fields);
            base.export_element (obj, "ExcHU", "te", base.from_string, fields);
            base.export_element (obj, "ExcHU", "ti", base.from_string, fields);
            base.export_element (obj, "ExcHU", "tr", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * IVO excitation system.
         *
         */
        function parse_ExcAVR7 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR7";
            base.parse_element (/<cim:ExcAVR7.a1>([\s\S]*?)<\/cim:ExcAVR7.a1>/g, obj, "a1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.a2>([\s\S]*?)<\/cim:ExcAVR7.a2>/g, obj, "a2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.a3>([\s\S]*?)<\/cim:ExcAVR7.a3>/g, obj, "a3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.a4>([\s\S]*?)<\/cim:ExcAVR7.a4>/g, obj, "a4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.a5>([\s\S]*?)<\/cim:ExcAVR7.a5>/g, obj, "a5", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.a6>([\s\S]*?)<\/cim:ExcAVR7.a6>/g, obj, "a6", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.k1>([\s\S]*?)<\/cim:ExcAVR7.k1>/g, obj, "k1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.k3>([\s\S]*?)<\/cim:ExcAVR7.k3>/g, obj, "k3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.k5>([\s\S]*?)<\/cim:ExcAVR7.k5>/g, obj, "k5", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t1>([\s\S]*?)<\/cim:ExcAVR7.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t2>([\s\S]*?)<\/cim:ExcAVR7.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t3>([\s\S]*?)<\/cim:ExcAVR7.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t4>([\s\S]*?)<\/cim:ExcAVR7.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t5>([\s\S]*?)<\/cim:ExcAVR7.t5>/g, obj, "t5", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.t6>([\s\S]*?)<\/cim:ExcAVR7.t6>/g, obj, "t6", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmax1>([\s\S]*?)<\/cim:ExcAVR7.vmax1>/g, obj, "vmax1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmax3>([\s\S]*?)<\/cim:ExcAVR7.vmax3>/g, obj, "vmax3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmax5>([\s\S]*?)<\/cim:ExcAVR7.vmax5>/g, obj, "vmax5", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmin1>([\s\S]*?)<\/cim:ExcAVR7.vmin1>/g, obj, "vmin1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmin3>([\s\S]*?)<\/cim:ExcAVR7.vmin3>/g, obj, "vmin3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR7.vmin5>([\s\S]*?)<\/cim:ExcAVR7.vmin5>/g, obj, "vmin5", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR7;
            if (null == bucket)
                context.parsed.ExcAVR7 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR7 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR7", "a1", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "a2", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "a3", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "a4", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "a5", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "a6", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "k1", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "k3", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "k5", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t1", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t2", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t3", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t4", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t5", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "t6", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmax1", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmax3", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmax5", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmin1", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmin3", base.from_string, fields);
            base.export_element (obj, "ExcAVR7", "vmin5", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST7B model.
         *
         * This model is representative of static potential-source excitation systems. In this system, the AVR consists of a PI voltage regulator. A phase lead-lag filter in series allows introduction of a derivative function, typically used with brushless excitation systems. In that case, the regulator is of the PID type. In addition, the terminal voltage channel includes a phase lead-lag filter.  The AVR includes the appropriate inputs on its reference for overexcitation limiter (OEL1), underexcitation limiter (UEL), stator current limiter (SCL), and current compensator (DROOP). All these limitations, when they work at voltage reference level, keep the PSS (VS signal from Type PSS1A, PSS2A, or PSS2B) in operation. However, the UEL limitation can also be transferred to the high value (HV) gate acting on the output signal. In addition, the output signal passes through a low value (LV) gate for a ceiling overexcitation limiter (OEL2).
         *
         */
        function parse_ExcIEEEST7B (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST7B";
            base.parse_element (/<cim:ExcIEEEST7B.kh>([\s\S]*?)<\/cim:ExcIEEEST7B.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.kia>([\s\S]*?)<\/cim:ExcIEEEST7B.kia>/g, obj, "kia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.kl>([\s\S]*?)<\/cim:ExcIEEEST7B.kl>/g, obj, "kl", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.kpa>([\s\S]*?)<\/cim:ExcIEEEST7B.kpa>/g, obj, "kpa", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.oelin>([\s\S]*?)<\/cim:ExcIEEEST7B.oelin>/g, obj, "oelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.tb>([\s\S]*?)<\/cim:ExcIEEEST7B.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.tc>([\s\S]*?)<\/cim:ExcIEEEST7B.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.tf>([\s\S]*?)<\/cim:ExcIEEEST7B.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.tg>([\s\S]*?)<\/cim:ExcIEEEST7B.tg>/g, obj, "tg", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.tia>([\s\S]*?)<\/cim:ExcIEEEST7B.tia>/g, obj, "tia", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.uelin>([\s\S]*?)<\/cim:ExcIEEEST7B.uelin>/g, obj, "uelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.vmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vmax>/g, obj, "vmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.vmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vmin>/g, obj, "vmin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST7B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST7B;
            if (null == bucket)
                context.parsed.ExcIEEEST7B = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST7B (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST7B", "kh", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "kia", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "kl", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "kpa", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "oelin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "tg", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "tia", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "uelin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "vmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "vmin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST7B", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC2A model.
         *
         * This model represents represent field-controlled dc commutator exciters with continuously acting voltage regulators having supplies obtained from the generator or auxiliary bus.  It differs from the Type DC1A model only in the voltage regulator output limits, which are now proportional to terminal voltage <b>V</b><b><sub>T</sub></b>.
         *
         */
        function parse_ExcIEEEDC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEDC2A";
            base.parse_element (/<cim:ExcIEEEDC2A.efd1>([\s\S]*?)<\/cim:ExcIEEEDC2A.efd1>/g, obj, "efd1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.efd2>([\s\S]*?)<\/cim:ExcIEEEDC2A.efd2>/g, obj, "efd2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.exclim>([\s\S]*?)<\/cim:ExcIEEEDC2A.exclim>/g, obj, "exclim", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.ka>([\s\S]*?)<\/cim:ExcIEEEDC2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.ke>([\s\S]*?)<\/cim:ExcIEEEDC2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.kf>([\s\S]*?)<\/cim:ExcIEEEDC2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.seefd1>([\s\S]*?)<\/cim:ExcIEEEDC2A.seefd1>/g, obj, "seefd1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.seefd2>([\s\S]*?)<\/cim:ExcIEEEDC2A.seefd2>/g, obj, "seefd2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.ta>([\s\S]*?)<\/cim:ExcIEEEDC2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.tb>([\s\S]*?)<\/cim:ExcIEEEDC2A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.tc>([\s\S]*?)<\/cim:ExcIEEEDC2A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.te>([\s\S]*?)<\/cim:ExcIEEEDC2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.tf>([\s\S]*?)<\/cim:ExcIEEEDC2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.uelin>([\s\S]*?)<\/cim:ExcIEEEDC2A.uelin>/g, obj, "uelin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.vrmax>([\s\S]*?)<\/cim:ExcIEEEDC2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEDC2A.vrmin>([\s\S]*?)<\/cim:ExcIEEEDC2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEDC2A;
            if (null == bucket)
                context.parsed.ExcIEEEDC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEDC2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEDC2A", "efd1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "efd2", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "exclim", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "seefd1", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC2A", "seefd2", base.from_float, fields);
            base.export_element (obj, "ExcIEEEDC2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "uelin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEDC2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEDC2A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Italian excitation system.
         *
         * It represents exciter dynamo and electric regulator.
         *
         */
        function parse_ExcAVR3 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAVR3";
            base.parse_element (/<cim:ExcAVR3.e1>([\s\S]*?)<\/cim:ExcAVR3.e1>/g, obj, "e1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.e2>([\s\S]*?)<\/cim:ExcAVR3.e2>/g, obj, "e2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.ka>([\s\S]*?)<\/cim:ExcAVR3.ka>/g, obj, "ka", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR3.se1>([\s\S]*?)<\/cim:ExcAVR3.se1>/g, obj, "se1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR3.se2>([\s\S]*?)<\/cim:ExcAVR3.se2>/g, obj, "se2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAVR3.t1>([\s\S]*?)<\/cim:ExcAVR3.t1>/g, obj, "t1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.t2>([\s\S]*?)<\/cim:ExcAVR3.t2>/g, obj, "t2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.t3>([\s\S]*?)<\/cim:ExcAVR3.t3>/g, obj, "t3", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.t4>([\s\S]*?)<\/cim:ExcAVR3.t4>/g, obj, "t4", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.te>([\s\S]*?)<\/cim:ExcAVR3.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.vrmn>([\s\S]*?)<\/cim:ExcAVR3.vrmn>/g, obj, "vrmn", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAVR3.vrmx>([\s\S]*?)<\/cim:ExcAVR3.vrmx>/g, obj, "vrmx", base.to_string, sub, context);
            bucket = context.parsed.ExcAVR3;
            if (null == bucket)
                context.parsed.ExcAVR3 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAVR3 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAVR3", "e1", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "e2", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "ka", base.from_float, fields);
            base.export_element (obj, "ExcAVR3", "se1", base.from_float, fields);
            base.export_element (obj, "ExcAVR3", "se2", base.from_float, fields);
            base.export_element (obj, "ExcAVR3", "t1", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "t2", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "t3", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "t4", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "te", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "vrmn", base.from_string, fields);
            base.export_element (obj, "ExcAVR3", "vrmx", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC4A model.
         *
         * The model represents type AC4A alternator-supplied controlled-rectifier excitation system which is quite different from the other type ac systems. This high initial response excitation system utilizes a full thyristor bridge in the exciter output circuit.  The voltage regulator controls the firing of the thyristor bridges. The exciter alternator uses an independent voltage regulator to control its output voltage to a constant value. These effects are not modeled; however, transient loading effects on the exciter alternator are included.
         *
         */
        function parse_ExcIEEEAC4A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEAC4A";
            base.parse_element (/<cim:ExcIEEEAC4A.ka>([\s\S]*?)<\/cim:ExcIEEEAC4A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.kc>([\s\S]*?)<\/cim:ExcIEEEAC4A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.ta>([\s\S]*?)<\/cim:ExcIEEEAC4A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.tb>([\s\S]*?)<\/cim:ExcIEEEAC4A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.tc>([\s\S]*?)<\/cim:ExcIEEEAC4A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.vimax>([\s\S]*?)<\/cim:ExcIEEEAC4A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.vimin>([\s\S]*?)<\/cim:ExcIEEEAC4A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.vrmax>([\s\S]*?)<\/cim:ExcIEEEAC4A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEAC4A.vrmin>([\s\S]*?)<\/cim:ExcIEEEAC4A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEAC4A;
            if (null == bucket)
                context.parsed.ExcIEEEAC4A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEAC4A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEAC4A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEAC4A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Modified IEEE AC2A alternator-supplied rectifier excitation system with different field current limit.
         *
         */
        function parse_ExcAC2A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcAC2A";
            base.parse_element (/<cim:ExcAC2A.hvgate>([\s\S]*?)<\/cim:ExcAC2A.hvgate>/g, obj, "hvgate", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC2A.ka>([\s\S]*?)<\/cim:ExcAC2A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kb>([\s\S]*?)<\/cim:ExcAC2A.kb>/g, obj, "kb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kb1>([\s\S]*?)<\/cim:ExcAC2A.kb1>/g, obj, "kb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kc>([\s\S]*?)<\/cim:ExcAC2A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kd>([\s\S]*?)<\/cim:ExcAC2A.kd>/g, obj, "kd", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.ke>([\s\S]*?)<\/cim:ExcAC2A.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kf>([\s\S]*?)<\/cim:ExcAC2A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kh>([\s\S]*?)<\/cim:ExcAC2A.kh>/g, obj, "kh", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kl>([\s\S]*?)<\/cim:ExcAC2A.kl>/g, obj, "kl", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.kl1>([\s\S]*?)<\/cim:ExcAC2A.kl1>/g, obj, "kl1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.ks>([\s\S]*?)<\/cim:ExcAC2A.ks>/g, obj, "ks", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.lvgate>([\s\S]*?)<\/cim:ExcAC2A.lvgate>/g, obj, "lvgate", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcAC2A.seve1>([\s\S]*?)<\/cim:ExcAC2A.seve1>/g, obj, "seve1", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC2A.seve2>([\s\S]*?)<\/cim:ExcAC2A.seve2>/g, obj, "seve2", base.to_float, sub, context);
            base.parse_element (/<cim:ExcAC2A.ta>([\s\S]*?)<\/cim:ExcAC2A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.tb>([\s\S]*?)<\/cim:ExcAC2A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.tc>([\s\S]*?)<\/cim:ExcAC2A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.te>([\s\S]*?)<\/cim:ExcAC2A.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.tf>([\s\S]*?)<\/cim:ExcAC2A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vamax>([\s\S]*?)<\/cim:ExcAC2A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vamin>([\s\S]*?)<\/cim:ExcAC2A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.ve1>([\s\S]*?)<\/cim:ExcAC2A.ve1>/g, obj, "ve1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.ve2>([\s\S]*?)<\/cim:ExcAC2A.ve2>/g, obj, "ve2", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vfemax>([\s\S]*?)<\/cim:ExcAC2A.vfemax>/g, obj, "vfemax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vlr>([\s\S]*?)<\/cim:ExcAC2A.vlr>/g, obj, "vlr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vrmax>([\s\S]*?)<\/cim:ExcAC2A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcAC2A.vrmin>([\s\S]*?)<\/cim:ExcAC2A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcAC2A;
            if (null == bucket)
                context.parsed.ExcAC2A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcAC2A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcAC2A", "hvgate", base.from_boolean, fields);
            base.export_element (obj, "ExcAC2A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kb", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kb1", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kd", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "ke", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kh", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kl", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "kl1", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "ks", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "lvgate", base.from_boolean, fields);
            base.export_element (obj, "ExcAC2A", "seve1", base.from_float, fields);
            base.export_element (obj, "ExcAC2A", "seve2", base.from_float, fields);
            base.export_element (obj, "ExcAC2A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "te", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "ve1", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "ve2", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vfemax", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vlr", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcAC2A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This is modified old IEEE type 3 excitation system.
         *
         */
        function parse_ExcDC3A1 (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcDC3A1";
            base.parse_element (/<cim:ExcDC3A1.exclim>([\s\S]*?)<\/cim:ExcDC3A1.exclim>/g, obj, "exclim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC3A1.ka>([\s\S]*?)<\/cim:ExcDC3A1.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.ke>([\s\S]*?)<\/cim:ExcDC3A1.ke>/g, obj, "ke", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.kf>([\s\S]*?)<\/cim:ExcDC3A1.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.ki>([\s\S]*?)<\/cim:ExcDC3A1.ki>/g, obj, "ki", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.kp>([\s\S]*?)<\/cim:ExcDC3A1.kp>/g, obj, "kp", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.ta>([\s\S]*?)<\/cim:ExcDC3A1.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.te>([\s\S]*?)<\/cim:ExcDC3A1.te>/g, obj, "te", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.tf>([\s\S]*?)<\/cim:ExcDC3A1.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.vb1max>([\s\S]*?)<\/cim:ExcDC3A1.vb1max>/g, obj, "vb1max", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.vblim>([\s\S]*?)<\/cim:ExcDC3A1.vblim>/g, obj, "vblim", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcDC3A1.vbmax>([\s\S]*?)<\/cim:ExcDC3A1.vbmax>/g, obj, "vbmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.vrmax>([\s\S]*?)<\/cim:ExcDC3A1.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcDC3A1.vrmin>([\s\S]*?)<\/cim:ExcDC3A1.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcDC3A1;
            if (null == bucket)
                context.parsed.ExcDC3A1 = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcDC3A1 (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcDC3A1", "exclim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC3A1", "ka", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "ke", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "kf", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "ki", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "kp", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "ta", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "te", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "tf", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "vb1max", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "vblim", base.from_boolean, fields);
            base.export_element (obj, "ExcDC3A1", "vbmax", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcDC3A1", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST1A model.
         *
         * This model represents systems in which excitation power is supplied through a transformer from the generator terminals (or the unit�s auxiliary bus) and is regulated by a controlled rectifier.  The maximum exciter voltage available from such systems is directly related to the generator terminal voltage.
         *
         */
        function parse_ExcIEEEST1A (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ExcitationSystemDynamics (context, sub);
            obj.cls = "ExcIEEEST1A";
            base.parse_element (/<cim:ExcIEEEST1A.ilr>([\s\S]*?)<\/cim:ExcIEEEST1A.ilr>/g, obj, "ilr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.ka>([\s\S]*?)<\/cim:ExcIEEEST1A.ka>/g, obj, "ka", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.kc>([\s\S]*?)<\/cim:ExcIEEEST1A.kc>/g, obj, "kc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.kf>([\s\S]*?)<\/cim:ExcIEEEST1A.kf>/g, obj, "kf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.klr>([\s\S]*?)<\/cim:ExcIEEEST1A.klr>/g, obj, "klr", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.pssin>([\s\S]*?)<\/cim:ExcIEEEST1A.pssin>/g, obj, "pssin", base.to_boolean, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.ta>([\s\S]*?)<\/cim:ExcIEEEST1A.ta>/g, obj, "ta", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.tb>([\s\S]*?)<\/cim:ExcIEEEST1A.tb>/g, obj, "tb", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.tb1>([\s\S]*?)<\/cim:ExcIEEEST1A.tb1>/g, obj, "tb1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.tc>([\s\S]*?)<\/cim:ExcIEEEST1A.tc>/g, obj, "tc", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.tc1>([\s\S]*?)<\/cim:ExcIEEEST1A.tc1>/g, obj, "tc1", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.tf>([\s\S]*?)<\/cim:ExcIEEEST1A.tf>/g, obj, "tf", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.uelin>([\s\S]*?)<\/cim:ExcIEEEST1A.uelin>/g, obj, "uelin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vamax>([\s\S]*?)<\/cim:ExcIEEEST1A.vamax>/g, obj, "vamax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vamin>([\s\S]*?)<\/cim:ExcIEEEST1A.vamin>/g, obj, "vamin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vimax>([\s\S]*?)<\/cim:ExcIEEEST1A.vimax>/g, obj, "vimax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vimin>([\s\S]*?)<\/cim:ExcIEEEST1A.vimin>/g, obj, "vimin", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
            base.parse_element (/<cim:ExcIEEEST1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
            bucket = context.parsed.ExcIEEEST1A;
            if (null == bucket)
                context.parsed.ExcIEEEST1A = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ExcIEEEST1A (obj, exporters, full)
        {
            var fields = exporters["ExcitationSystemDynamics"](obj, exporters, false);

            base.export_element (obj, "ExcIEEEST1A", "ilr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "ka", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "kc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "kf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "klr", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "pssin", base.from_boolean, fields);
            base.export_element (obj, "ExcIEEEST1A", "ta", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "tb", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "tb1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "tc", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "tc1", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "tf", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "uelin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vamax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vamin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vimax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vimin", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vrmax", base.from_string, fields);
            base.export_element (obj, "ExcIEEEST1A", "vrmin", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                parse_ExcIEEEST2A: parse_ExcIEEEST2A,
                parse_ExcIEEEDC3A: parse_ExcIEEEDC3A,
                export_ExcAC1A: export_ExcAC1A,
                parse_ExcIEEEAC3A: parse_ExcIEEEAC3A,
                export_ExcIEEEAC7B: export_ExcIEEEAC7B,
                parse_ExcANS: parse_ExcANS,
                export_ExcitationSystemDynamics: export_ExcitationSystemDynamics,
                parse_ExcSK: parse_ExcSK,
                parse_ExcAVR5: parse_ExcAVR5,
                parse_ExcST7BOELselectorKind: parse_ExcST7BOELselectorKind,
                export_ExcAC5A: export_ExcAC5A,
                export_ExcAC2A: export_ExcAC2A,
                parse_ExcAVR7: parse_ExcAVR7,
                export_ExcST3A: export_ExcST3A,
                export_ExcIEEEST1A: export_ExcIEEEST1A,
                parse_ExcIEEEAC5A: parse_ExcIEEEAC5A,
                parse_ExcAVR3: parse_ExcAVR3,
                export_ExcST4B: export_ExcST4B,
                export_ExcDC3A1: export_ExcDC3A1,
                export_ExcIEEEDC3A: export_ExcIEEEDC3A,
                parse_ExcAC8B: parse_ExcAC8B,
                parse_ExcIEEEST1A: parse_ExcIEEEST1A,
                parse_ExcIEEEDC2A: parse_ExcIEEEDC2A,
                parse_ExcIEEEAC2A: parse_ExcIEEEAC2A,
                export_ExcANS: export_ExcANS,
                parse_ExcST6B: parse_ExcST6B,
                export_ExcAC6A: export_ExcAC6A,
                export_ExcIEEEAC6A: export_ExcIEEEAC6A,
                export_ExcSCRX: export_ExcSCRX,
                export_ExcDC1A: export_ExcDC1A,
                export_ExcSEXS: export_ExcSEXS,
                export_ExcIEEEST6B: export_ExcIEEEST6B,
                parse_ExcELIN2: parse_ExcELIN2,
                export_ExcST6BOELselectorKind: export_ExcST6BOELselectorKind,
                parse_ExcDC2A: parse_ExcDC2A,
                parse_ExcitationSystemDynamics: parse_ExcitationSystemDynamics,
                export_ExcIEEEST1AUELselectorKind: export_ExcIEEEST1AUELselectorKind,
                export_ExcIEEEST4B: export_ExcIEEEST4B,
                export_ExcIEEEDC1A: export_ExcIEEEDC1A,
                parse_ExcPIC: parse_ExcPIC,
                parse_ExcAC5A: parse_ExcAC5A,
                export_ExcREXS: export_ExcREXS,
                export_ExcST1A: export_ExcST1A,
                export_ExcST7BOELselectorKind: export_ExcST7BOELselectorKind,
                parse_ExcDC3A: parse_ExcDC3A,
                parse_ExcAC1A: parse_ExcAC1A,
                export_ExcIEEEST2A: export_ExcIEEEST2A,
                export_ExcAVR5: export_ExcAVR5,
                parse_ExcIEEEST3A: parse_ExcIEEEST3A,
                parse_ExcST7B: parse_ExcST7B,
                parse_ExcIEEEAC4A: parse_ExcIEEEAC4A,
                parse_ExcCZ: parse_ExcCZ,
                export_ExcELIN1: export_ExcELIN1,
                export_ExcAC4A: export_ExcAC4A,
                parse_ExcAC2A: parse_ExcAC2A,
                parse_ExcST6BOELselectorKind: parse_ExcST6BOELselectorKind,
                export_ExcIEEEDC2A: export_ExcIEEEDC2A,
                export_ExcAVR4: export_ExcAVR4,
                export_ExcCZ: export_ExcCZ,
                parse_ExcIEEEDC4B: parse_ExcIEEEDC4B,
                export_ExcIEEEST7B: export_ExcIEEEST7B,
                export_ExcIEEEDC4B: export_ExcIEEEDC4B,
                export_ExcIEEEAC5A: export_ExcIEEEAC5A,
                parse_ExcHU: parse_ExcHU,
                export_ExcDC3A: export_ExcDC3A,
                export_ExcIEEEST5B: export_ExcIEEEST5B,
                export_ExcAVR3: export_ExcAVR3,
                export_ExcIEEEAC3A: export_ExcIEEEAC3A,
                parse_ExcAC3A: parse_ExcAC3A,
                export_ExcAVR2: export_ExcAVR2,
                parse_ExcDC1A: parse_ExcDC1A,
                parse_ExcAVR2: parse_ExcAVR2,
                parse_ExcBBC: parse_ExcBBC,
                export_ExcST7B: export_ExcST7B,
                parse_ExcST1A: parse_ExcST1A,
                parse_ExcOEX3T: parse_ExcOEX3T,
                parse_ExcIEEEST5B: parse_ExcIEEEST5B,
                parse_ExcAC4A: parse_ExcAC4A,
                parse_ExcAVR4: parse_ExcAVR4,
                export_ExcIEEEAC8B: export_ExcIEEEAC8B,
                export_ExcAVR1: export_ExcAVR1,
                parse_ExcAVR1: parse_ExcAVR1,
                parse_ExcST2A: parse_ExcST2A,
                export_ExcIEEEAC1A: export_ExcIEEEAC1A,
                parse_ExcREXS: parse_ExcREXS,
                export_ExcHU: export_ExcHU,
                parse_ExcST7BUELselectorKind: parse_ExcST7BUELselectorKind,
                parse_ExcREXSFeedbackSignalKind: parse_ExcREXSFeedbackSignalKind,
                export_ExcOEX3T: export_ExcOEX3T,
                parse_ExcSEXS: parse_ExcSEXS,
                export_ExcIEEEAC4A: export_ExcIEEEAC4A,
                export_ExcAVR7: export_ExcAVR7,
                export_ExcBBC: export_ExcBBC,
                export_ExcPIC: export_ExcPIC,
                export_ExcDC2A: export_ExcDC2A,
                export_ExcAC3A: export_ExcAC3A,
                parse_ExcIEEEDC1A: parse_ExcIEEEDC1A,
                parse_ExcELIN1: parse_ExcELIN1,
                parse_ExcIEEEAC1A: parse_ExcIEEEAC1A,
                export_ExcELIN2: export_ExcELIN2,
                export_ExcREXSFeedbackSignalKind: export_ExcREXSFeedbackSignalKind,
                parse_ExcIEEEST7B: parse_ExcIEEEST7B,
                parse_ExcIEEEAC8B: parse_ExcIEEEAC8B,
                parse_ExcST3A: parse_ExcST3A,
                parse_ExcIEEEST4B: parse_ExcIEEEST4B,
                parse_ExcDC3A1: parse_ExcDC3A1,
                parse_ExcAC6A: parse_ExcAC6A,
                export_ExcAC8B: export_ExcAC8B,
                parse_ExcIEEEST1AUELselectorKind: parse_ExcIEEEST1AUELselectorKind,
                export_ExcIEEEAC2A: export_ExcIEEEAC2A,
                export_ExcST6B: export_ExcST6B,
                export_ExcST2A: export_ExcST2A,
                export_ExcSK: export_ExcSK,
                parse_ExcST4B: parse_ExcST4B,
                export_ExcIEEEST3A: export_ExcIEEEST3A,
                export_ExcST7BUELselectorKind: export_ExcST7BUELselectorKind,
                parse_ExcIEEEAC6A: parse_ExcIEEEAC6A,
                parse_ExcIEEEST6B: parse_ExcIEEEST6B,
                parse_ExcSCRX: parse_ExcSCRX,
                parse_ExcIEEEAC7B: parse_ExcIEEEAC7B
            }
        );
    }
);