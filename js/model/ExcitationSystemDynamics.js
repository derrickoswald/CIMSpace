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
        var ExcIEEEST1AUELselectorKind =
        {
            ignoreUELsignal: "ignoreUELsignal",
            inputHVgateVoltageOutput: "inputHVgateVoltageOutput",
            inputHVgateErrorSignal: "inputHVgateErrorSignal",
            inputAddedToErrorSignal: "inputAddedToErrorSignal"
        };
        Object.freeze (ExcIEEEST1AUELselectorKind);

        /**
         * Type of connection for the OEL input used for static excitation systems type 7B.
         *
         */
        var ExcST7BOELselectorKind =
        {
            noOELinput: "noOELinput",
            addVref: "addVref",
            inputLVgate: "inputLVgate",
            outputLVgate: "outputLVgate"
        };
        Object.freeze (ExcST7BOELselectorKind);

        /**
         * Type of connection for the OEL input used for static excitation systems type 6B.
         *
         */
        var ExcST6BOELselectorKind =
        {
            noOELinput: "noOELinput",
            beforeUEL: "beforeUEL",
            afterUEL: "afterUEL"
        };
        Object.freeze (ExcST6BOELselectorKind);

        /**
         * Type of connection for the UEL input used for static excitation systems type 7B.
         *
         */
        var ExcST7BUELselectorKind =
        {
            noUELinput: "noUELinput",
            addVref: "addVref",
            inputHVgate: "inputHVgate",
            outputHVgate: "outputHVgate"
        };
        Object.freeze (ExcST7BUELselectorKind);

        /**
         * Type of rate feedback signals.
         *
         */
        var ExcREXSFeedbackSignalKind =
        {
            fieldVoltage: "fieldVoltage",
            fieldCurrent: "fieldCurrent",
            outputVoltage: "outputVoltage"
        };
        Object.freeze (ExcREXSFeedbackSignalKind);

        /**
         * Excitation system function block whose behavior is described by reference to a standard model <font color="#0f0f0f">or by definition of a user-defined model.</font>
         *
         */
        class ExcitationSystemDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcitationSystemDynamics;
                if (null == bucket)
                   cim_data.ExcitationSystemDynamics = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcitationSystemDynamics[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "ExcitationSystemDynamics";
                base.parse_attribute (/<cim:ExcitationSystemDynamics.PowerSystemStabilizerDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PowerSystemStabilizerDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.UnderexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "UnderexcitationLimiterDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.DiscontinuousExcitationControlDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DiscontinuousExcitationControlDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType1Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType1Dynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.SynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.VoltageCompensatorDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "VoltageCompensatorDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.OverexcitationLimiterDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OverexcitationLimiterDynamics", sub, context);
                base.parse_attribute (/<cim:ExcitationSystemDynamics.PFVArControllerType2Dynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PFVArControllerType2Dynamics", sub, context);
                var bucket = context.parsed.ExcitationSystemDynamics;
                if (null == bucket)
                   context.parsed.ExcitationSystemDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = StandardModels.DynamicsFunctionBlock.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ExcitationSystemDynamics", "PowerSystemStabilizerDynamics", "PowerSystemStabilizerDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "UnderexcitationLimiterDynamics", "UnderexcitationLimiterDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "DiscontinuousExcitationControlDynamics", "DiscontinuousExcitationControlDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "PFVArControllerType1Dynamics", "PFVArControllerType1Dynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "SynchronousMachineDynamics", "SynchronousMachineDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "VoltageCompensatorDynamics", "VoltageCompensatorDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "OverexcitationLimiterDynamics", "OverexcitationLimiterDynamics", fields);
                base.export_attribute (obj, "ExcitationSystemDynamics", "PFVArControllerType2Dynamics", "PFVArControllerType2Dynamics", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcitationSystemDynamics_collapse" aria-expanded="true" aria-controls="ExcitationSystemDynamics_collapse" style="margin-left: 10px;">ExcitationSystemDynamics</a></legend>
                    <div id="ExcitationSystemDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.template.call (this) +
                    `
                    {{#PowerSystemStabilizerDynamics}}<div><b>PowerSystemStabilizerDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PowerSystemStabilizerDynamics}}&quot;);}); return false;'>{{PowerSystemStabilizerDynamics}}</a></div>{{/PowerSystemStabilizerDynamics}}
                    {{#UnderexcitationLimiterDynamics}}<div><b>UnderexcitationLimiterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{UnderexcitationLimiterDynamics}}&quot;);}); return false;'>{{UnderexcitationLimiterDynamics}}</a></div>{{/UnderexcitationLimiterDynamics}}
                    {{#DiscontinuousExcitationControlDynamics}}<div><b>DiscontinuousExcitationControlDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{DiscontinuousExcitationControlDynamics}}&quot;);}); return false;'>{{DiscontinuousExcitationControlDynamics}}</a></div>{{/DiscontinuousExcitationControlDynamics}}
                    {{#PFVArControllerType1Dynamics}}<div><b>PFVArControllerType1Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType1Dynamics}}&quot;);}); return false;'>{{PFVArControllerType1Dynamics}}</a></div>{{/PFVArControllerType1Dynamics}}
                    {{#SynchronousMachineDynamics}}<div><b>SynchronousMachineDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{SynchronousMachineDynamics}}&quot;);}); return false;'>{{SynchronousMachineDynamics}}</a></div>{{/SynchronousMachineDynamics}}
                    {{#VoltageCompensatorDynamics}}<div><b>VoltageCompensatorDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{VoltageCompensatorDynamics}}&quot;);}); return false;'>{{VoltageCompensatorDynamics}}</a></div>{{/VoltageCompensatorDynamics}}
                    {{#OverexcitationLimiterDynamics}}<div><b>OverexcitationLimiterDynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{OverexcitationLimiterDynamics}}&quot;);}); return false;'>{{OverexcitationLimiterDynamics}}</a></div>{{/OverexcitationLimiterDynamics}}
                    {{#PFVArControllerType2Dynamics}}<div><b>PFVArControllerType2Dynamics</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{PFVArControllerType2Dynamics}}&quot;);}); return false;'>{{PFVArControllerType2Dynamics}}</a></div>{{/PFVArControllerType2Dynamics}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcitationSystemDynamics_collapse" aria-expanded="true" aria-controls="{{id}}_ExcitationSystemDynamics_collapse" style="margin-left: 10px;">ExcitationSystemDynamics</a></legend>
                    <div id="{{id}}_ExcitationSystemDynamics_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + StandardModels.DynamicsFunctionBlock.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PowerSystemStabilizerDynamics'>PowerSystemStabilizerDynamics: </label><div class='col-sm-8'><input id='{{id}}_PowerSystemStabilizerDynamics' class='form-control' type='text'{{#PowerSystemStabilizerDynamics}} value='{{PowerSystemStabilizerDynamics}}'{{/PowerSystemStabilizerDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_UnderexcitationLimiterDynamics'>UnderexcitationLimiterDynamics: </label><div class='col-sm-8'><input id='{{id}}_UnderexcitationLimiterDynamics' class='form-control' type='text'{{#UnderexcitationLimiterDynamics}} value='{{UnderexcitationLimiterDynamics}}'{{/UnderexcitationLimiterDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_DiscontinuousExcitationControlDynamics'>DiscontinuousExcitationControlDynamics: </label><div class='col-sm-8'><input id='{{id}}_DiscontinuousExcitationControlDynamics' class='form-control' type='text'{{#DiscontinuousExcitationControlDynamics}} value='{{DiscontinuousExcitationControlDynamics}}'{{/DiscontinuousExcitationControlDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PFVArControllerType1Dynamics'>PFVArControllerType1Dynamics: </label><div class='col-sm-8'><input id='{{id}}_PFVArControllerType1Dynamics' class='form-control' type='text'{{#PFVArControllerType1Dynamics}} value='{{PFVArControllerType1Dynamics}}'{{/PFVArControllerType1Dynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_SynchronousMachineDynamics'>SynchronousMachineDynamics: </label><div class='col-sm-8'><input id='{{id}}_SynchronousMachineDynamics' class='form-control' type='text'{{#SynchronousMachineDynamics}} value='{{SynchronousMachineDynamics}}'{{/SynchronousMachineDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_VoltageCompensatorDynamics'>VoltageCompensatorDynamics: </label><div class='col-sm-8'><input id='{{id}}_VoltageCompensatorDynamics' class='form-control' type='text'{{#VoltageCompensatorDynamics}} value='{{VoltageCompensatorDynamics}}'{{/VoltageCompensatorDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_OverexcitationLimiterDynamics'>OverexcitationLimiterDynamics: </label><div class='col-sm-8'><input id='{{id}}_OverexcitationLimiterDynamics' class='form-control' type='text'{{#OverexcitationLimiterDynamics}} value='{{OverexcitationLimiterDynamics}}'{{/OverexcitationLimiterDynamics}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_PFVArControllerType2Dynamics'>PFVArControllerType2Dynamics: </label><div class='col-sm-8'><input id='{{id}}_PFVArControllerType2Dynamics' class='form-control' type='text'{{#PFVArControllerType2Dynamics}} value='{{PFVArControllerType2Dynamics}}'{{/PFVArControllerType2Dynamics}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcitationSystemDynamics" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_PowerSystemStabilizerDynamics").value; if ("" != temp) obj.PowerSystemStabilizerDynamics = temp;
                temp = document.getElementById (id + "_UnderexcitationLimiterDynamics").value; if ("" != temp) obj.UnderexcitationLimiterDynamics = temp;
                temp = document.getElementById (id + "_DiscontinuousExcitationControlDynamics").value; if ("" != temp) obj.DiscontinuousExcitationControlDynamics = temp;
                temp = document.getElementById (id + "_PFVArControllerType1Dynamics").value; if ("" != temp) obj.PFVArControllerType1Dynamics = temp;
                temp = document.getElementById (id + "_SynchronousMachineDynamics").value; if ("" != temp) obj.SynchronousMachineDynamics = temp;
                temp = document.getElementById (id + "_VoltageCompensatorDynamics").value; if ("" != temp) obj.VoltageCompensatorDynamics = temp;
                temp = document.getElementById (id + "_OverexcitationLimiterDynamics").value; if ("" != temp) obj.OverexcitationLimiterDynamics = temp;
                temp = document.getElementById (id + "_PFVArControllerType2Dynamics").value; if ("" != temp) obj.PFVArControllerType2Dynamics = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PowerSystemStabilizerDynamics", "0..1", "1", "PowerSystemStabilizerDynamics", "ExcitationSystemDynamics"],
                            ["UnderexcitationLimiterDynamics", "0..1", "1", "UnderexcitationLimiterDynamics", "ExcitationSystemDynamics"],
                            ["DiscontinuousExcitationControlDynamics", "0..1", "1", "DiscontinuousExcitationControlDynamics", "ExcitationSystemDynamics"],
                            ["PFVArControllerType1Dynamics", "0..1", "1", "PFVArControllerType1Dynamics", "ExcitationSystemDynamics"],
                            ["SynchronousMachineDynamics", "1", "0..1", "SynchronousMachineDynamics", "ExcitationSystemDynamics"],
                            ["VoltageCompensatorDynamics", "0..1", "1", "VoltageCompensatorDynamics", "ExcitationSystemDynamics"],
                            ["OverexcitationLimiterDynamics", "0..1", "1", "OverexcitationLimiterDynamics", "ExcitationSystemDynamics"],
                            ["PFVArControllerType2Dynamics", "0..1", "1", "PFVArControllerType2Dynamics", "ExcitationSystemDynamics"]
                        ]
                    )
                );
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC1A model.
         *
         * This model represents field-controlled dc commutator exciters with continuously acting voltage regulators (especially the direct-acting rheostatic, rotating amplifier, and magnetic amplifier types).  Because this model has been widely implemented by the industry, it is sometimes used to represent other types of systems when detailed data for them are not available or when a simplified model is required.
         *
         */
        class ExcIEEEDC1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEDC1A;
                if (null == bucket)
                   cim_data.ExcIEEEDC1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEDC1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEDC1A;
                if (null == bucket)
                   context.parsed.ExcIEEEDC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEDC1A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC1A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "uelin", "uelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEDC1A_collapse" aria-expanded="true" aria-controls="ExcIEEEDC1A_collapse" style="margin-left: 10px;">ExcIEEEDC1A</a></legend>
                    <div id="ExcIEEEDC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEDC1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEDC1A_collapse" style="margin-left: 10px;">ExcIEEEDC1A</a></legend>
                    <div id="{{id}}_ExcIEEEDC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uelin'>uelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uelin' class='form-check-input' type='checkbox'{{#uelin}} checked{{/uelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEDC1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").checked; if (temp) obj.uelin = true;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Simple excitation system model representing generic characteristics of many excitation systems; intended for use where negative field current may be a problem.
         *
         */
        class ExcSCRX extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcSCRX;
                if (null == bucket)
                   cim_data.ExcSCRX = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcSCRX[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcSCRX";
                base.parse_element (/<cim:ExcSCRX.cswitch>([\s\S]*?)<\/cim:ExcSCRX.cswitch>/g, obj, "cswitch", base.to_boolean, sub, context);
                base.parse_element (/<cim:ExcSCRX.emax>([\s\S]*?)<\/cim:ExcSCRX.emax>/g, obj, "emax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcSCRX.emin>([\s\S]*?)<\/cim:ExcSCRX.emin>/g, obj, "emin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcSCRX.k>([\s\S]*?)<\/cim:ExcSCRX.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:ExcSCRX.rcrfd>([\s\S]*?)<\/cim:ExcSCRX.rcrfd>/g, obj, "rcrfd", base.to_float, sub, context);
                base.parse_element (/<cim:ExcSCRX.tatb>([\s\S]*?)<\/cim:ExcSCRX.tatb>/g, obj, "tatb", base.to_float, sub, context);
                base.parse_element (/<cim:ExcSCRX.tb>([\s\S]*?)<\/cim:ExcSCRX.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:ExcSCRX.te>([\s\S]*?)<\/cim:ExcSCRX.te>/g, obj, "te", base.to_string, sub, context);
                var bucket = context.parsed.ExcSCRX;
                if (null == bucket)
                   context.parsed.ExcSCRX = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcSCRX", "cswitch", "cswitch",  base.from_boolean, fields);
                base.export_element (obj, "ExcSCRX", "emax", "emax",  base.from_string, fields);
                base.export_element (obj, "ExcSCRX", "emin", "emin",  base.from_string, fields);
                base.export_element (obj, "ExcSCRX", "k", "k",  base.from_string, fields);
                base.export_element (obj, "ExcSCRX", "rcrfd", "rcrfd",  base.from_float, fields);
                base.export_element (obj, "ExcSCRX", "tatb", "tatb",  base.from_float, fields);
                base.export_element (obj, "ExcSCRX", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcSCRX", "te", "te",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcSCRX_collapse" aria-expanded="true" aria-controls="ExcSCRX_collapse" style="margin-left: 10px;">ExcSCRX</a></legend>
                    <div id="ExcSCRX_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#cswitch}}<div><b>cswitch</b>: {{cswitch}}</div>{{/cswitch}}
                    {{#emax}}<div><b>emax</b>: {{emax}}</div>{{/emax}}
                    {{#emin}}<div><b>emin</b>: {{emin}}</div>{{/emin}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#rcrfd}}<div><b>rcrfd</b>: {{rcrfd}}</div>{{/rcrfd}}
                    {{#tatb}}<div><b>tatb</b>: {{tatb}}</div>{{/tatb}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcSCRX_collapse" aria-expanded="true" aria-controls="{{id}}_ExcSCRX_collapse" style="margin-left: 10px;">ExcSCRX</a></legend>
                    <div id="{{id}}_ExcSCRX_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_cswitch'>cswitch: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_cswitch' class='form-check-input' type='checkbox'{{#cswitch}} checked{{/cswitch}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emax'>emax: </label><div class='col-sm-8'><input id='{{id}}_emax' class='form-control' type='text'{{#emax}} value='{{emax}}'{{/emax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emin'>emin: </label><div class='col-sm-8'><input id='{{id}}_emin' class='form-control' type='text'{{#emin}} value='{{emin}}'{{/emin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rcrfd'>rcrfd: </label><div class='col-sm-8'><input id='{{id}}_rcrfd' class='form-control' type='text'{{#rcrfd}} value='{{rcrfd}}'{{/rcrfd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tatb'>tatb: </label><div class='col-sm-8'><input id='{{id}}_tatb' class='form-control' type='text'{{#tatb}} value='{{tatb}}'{{/tatb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcSCRX" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_cswitch").checked; if (temp) obj.cswitch = true;
                temp = document.getElementById (id + "_emax").value; if ("" != temp) obj.emax = temp;
                temp = document.getElementById (id + "_emin").value; if ("" != temp) obj.emin = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_rcrfd").value; if ("" != temp) obj.rcrfd = temp;
                temp = document.getElementById (id + "_tatb").value; if ("" != temp) obj.tatb = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC4B model.
         *
         * These excitation systems utilize a field-controlled dc commutator exciter with a continuously acting voltage regulator having supplies obtained from the generator or auxiliary bus.
         *
         */
        class ExcIEEEDC4B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEDC4B;
                if (null == bucket)
                   cim_data.ExcIEEEDC4B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEDC4B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEDC4B;
                if (null == bucket)
                   context.parsed.ExcIEEEDC4B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEDC4B", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "oelin", "oelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC4B", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC4B", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC4B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "td", "td",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "uelin", "uelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC4B", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC4B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEDC4B_collapse" aria-expanded="true" aria-controls="ExcIEEEDC4B_collapse" style="margin-left: 10px;">ExcIEEEDC4B</a></legend>
                    <div id="ExcIEEEDC4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#oelin}}<div><b>oelin</b>: {{oelin}}</div>{{/oelin}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#td}}<div><b>td</b>: {{td}}</div>{{/td}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEDC4B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEDC4B_collapse" style="margin-left: 10px;">ExcIEEEDC4B</a></legend>
                    <div id="{{id}}_ExcIEEEDC4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_oelin'>oelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_oelin' class='form-check-input' type='checkbox'{{#oelin}} checked{{/oelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_td'>td: </label><div class='col-sm-8'><input id='{{id}}_td' class='form-control' type='text'{{#td}} value='{{td}}'{{/td}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uelin'>uelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uelin' class='form-check-input' type='checkbox'{{#uelin}} checked{{/uelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEDC4B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_oelin").checked; if (temp) obj.oelin = true;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_td").value; if ("" != temp) obj.td = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").checked; if (temp) obj.uelin = true;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC3A model.
         *
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC3A. These excitation systems include an alternator main exciter with non-controlled rectifiers. The exciter employs self-excitation, and the voltage regulator power is derived from the exciter output voltage.  Therefore, this system has an additional nonlinearity, simulated by the use of a multiplier
         *
         */
        class ExcIEEEAC3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC3A;
                if (null == bucket)
                   cim_data.ExcIEEEAC3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC3A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC3A", "efdn", "efdn",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "kn", "kn",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "kr", "kr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC3A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC3A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC3A", "vfemax", "vfemax",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC3A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC3A_collapse" style="margin-left: 10px;">ExcIEEEAC3A</a></legend>
                    <div id="ExcIEEEAC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdn}}<div><b>efdn</b>: {{efdn}}</div>{{/efdn}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kn}}<div><b>kn</b>: {{kn}}</div>{{/kn}}
                    {{#kr}}<div><b>kr</b>: {{kr}}</div>{{/kr}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC3A_collapse" style="margin-left: 10px;">ExcIEEEAC3A</a></legend>
                    <div id="{{id}}_ExcIEEEAC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdn'>efdn: </label><div class='col-sm-8'><input id='{{id}}_efdn' class='form-control' type='text'{{#efdn}} value='{{efdn}}'{{/efdn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kn'>kn: </label><div class='col-sm-8'><input id='{{id}}_kn' class='form-control' type='text'{{#kn}} value='{{kn}}'{{/kn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kr'>kr: </label><div class='col-sm-8'><input id='{{id}}_kr' class='form-control' type='text'{{#kr}} value='{{kr}}'{{/kr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdn").value; if ("" != temp) obj.efdn = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kn").value; if ("" != temp) obj.kn = temp;
                temp = document.getElementById (id + "_kr").value; if ("" != temp) obj.kr = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;

                return (obj);
            }
        }

        /**
         * Manual excitation control with field circuit resistance.
         *
         * This model can be used as a very simple representation of manual voltage control.
         *
         */
        class ExcAVR5 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR5;
                if (null == bucket)
                   cim_data.ExcAVR5 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR5[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcAVR5";
                base.parse_element (/<cim:ExcAVR5.ka>([\s\S]*?)<\/cim:ExcAVR5.ka>/g, obj, "ka", base.to_string, sub, context);
                base.parse_element (/<cim:ExcAVR5.rex>([\s\S]*?)<\/cim:ExcAVR5.rex>/g, obj, "rex", base.to_string, sub, context);
                base.parse_element (/<cim:ExcAVR5.ta>([\s\S]*?)<\/cim:ExcAVR5.ta>/g, obj, "ta", base.to_string, sub, context);
                var bucket = context.parsed.ExcAVR5;
                if (null == bucket)
                   context.parsed.ExcAVR5 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR5", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAVR5", "rex", "rex",  base.from_string, fields);
                base.export_element (obj, "ExcAVR5", "ta", "ta",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR5_collapse" aria-expanded="true" aria-controls="ExcAVR5_collapse" style="margin-left: 10px;">ExcAVR5</a></legend>
                    <div id="ExcAVR5_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#rex}}<div><b>rex</b>: {{rex}}</div>{{/rex}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR5_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR5_collapse" style="margin-left: 10px;">ExcAVR5</a></legend>
                    <div id="{{id}}_ExcAVR5_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_rex'>rex: </label><div class='col-sm-8'><input id='{{id}}_rex' class='form-control' type='text'{{#rex}} value='{{rex}}'{{/rex}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR5" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_rex").value; if ("" != temp) obj.rex = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE ST2A static excitation system - another lead-lag block added to match  the model defined by WECC.
         *
         */
        class ExcST2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST2A;
                if (null == bucket)
                   cim_data.ExcST2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcST2A;
                if (null == bucket)
                   context.parsed.ExcST2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST2A", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "uelin", "uelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcST2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST2A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST2A_collapse" aria-expanded="true" aria-controls="ExcST2A_collapse" style="margin-left: 10px;">ExcST2A</a></legend>
                    <div id="ExcST2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST2A_collapse" style="margin-left: 10px;">ExcST2A</a></legend>
                    <div id="{{id}}_ExcST2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uelin'>uelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uelin' class='form-check-input' type='checkbox'{{#uelin}} checked{{/uelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").checked; if (temp) obj.uelin = true;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Detailed Excitation System Model - ELIN (VATECH).
         *
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  Power system stabilizer models used in conjunction with this excitation system model: PssELIN2, PssIEEE2B, Pss2B.
         *
         */
        class ExcELIN2 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcELIN2;
                if (null == bucket)
                   cim_data.ExcELIN2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcELIN2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcELIN2;
                if (null == bucket)
                   context.parsed.ExcELIN2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcELIN2", "efdbas", "efdbas",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "iefmax", "iefmax",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "iefmax2", "iefmax2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "iefmin", "iefmin",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "k1ec", "k1ec",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "k4", "k4",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "kd1", "kd1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ke2", "ke2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ketb", "ketb",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "pid1max", "pid1max",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "seve1", "seve1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "seve2", "seve2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "tb1", "tb1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "te2", "te2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ti1", "ti1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ti3", "ti3",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ti4", "ti4",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "tr4", "tr4",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "upmax", "upmax",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "upmin", "upmin",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN2", "xp", "xp",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcELIN2_collapse" aria-expanded="true" aria-controls="ExcELIN2_collapse" style="margin-left: 10px;">ExcELIN2</a></legend>
                    <div id="ExcELIN2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdbas}}<div><b>efdbas</b>: {{efdbas}}</div>{{/efdbas}}
                    {{#iefmax}}<div><b>iefmax</b>: {{iefmax}}</div>{{/iefmax}}
                    {{#iefmax2}}<div><b>iefmax2</b>: {{iefmax2}}</div>{{/iefmax2}}
                    {{#iefmin}}<div><b>iefmin</b>: {{iefmin}}</div>{{/iefmin}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k1ec}}<div><b>k1ec</b>: {{k1ec}}</div>{{/k1ec}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k4}}<div><b>k4</b>: {{k4}}</div>{{/k4}}
                    {{#kd1}}<div><b>kd1</b>: {{kd1}}</div>{{/kd1}}
                    {{#ke2}}<div><b>ke2</b>: {{ke2}}</div>{{/ke2}}
                    {{#ketb}}<div><b>ketb</b>: {{ketb}}</div>{{/ketb}}
                    {{#pid1max}}<div><b>pid1max</b>: {{pid1max}}</div>{{/pid1max}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#tb1}}<div><b>tb1</b>: {{tb1}}</div>{{/tb1}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#te2}}<div><b>te2</b>: {{te2}}</div>{{/te2}}
                    {{#ti1}}<div><b>ti1</b>: {{ti1}}</div>{{/ti1}}
                    {{#ti3}}<div><b>ti3</b>: {{ti3}}</div>{{/ti3}}
                    {{#ti4}}<div><b>ti4</b>: {{ti4}}</div>{{/ti4}}
                    {{#tr4}}<div><b>tr4</b>: {{tr4}}</div>{{/tr4}}
                    {{#upmax}}<div><b>upmax</b>: {{upmax}}</div>{{/upmax}}
                    {{#upmin}}<div><b>upmin</b>: {{upmin}}</div>{{/upmin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#xp}}<div><b>xp</b>: {{xp}}</div>{{/xp}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcELIN2_collapse" aria-expanded="true" aria-controls="{{id}}_ExcELIN2_collapse" style="margin-left: 10px;">ExcELIN2</a></legend>
                    <div id="{{id}}_ExcELIN2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdbas'>efdbas: </label><div class='col-sm-8'><input id='{{id}}_efdbas' class='form-control' type='text'{{#efdbas}} value='{{efdbas}}'{{/efdbas}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iefmax'>iefmax: </label><div class='col-sm-8'><input id='{{id}}_iefmax' class='form-control' type='text'{{#iefmax}} value='{{iefmax}}'{{/iefmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iefmax2'>iefmax2: </label><div class='col-sm-8'><input id='{{id}}_iefmax2' class='form-control' type='text'{{#iefmax2}} value='{{iefmax2}}'{{/iefmax2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_iefmin'>iefmin: </label><div class='col-sm-8'><input id='{{id}}_iefmin' class='form-control' type='text'{{#iefmin}} value='{{iefmin}}'{{/iefmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1ec'>k1ec: </label><div class='col-sm-8'><input id='{{id}}_k1ec' class='form-control' type='text'{{#k1ec}} value='{{k1ec}}'{{/k1ec}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k4'>k4: </label><div class='col-sm-8'><input id='{{id}}_k4' class='form-control' type='text'{{#k4}} value='{{k4}}'{{/k4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd1'>kd1: </label><div class='col-sm-8'><input id='{{id}}_kd1' class='form-control' type='text'{{#kd1}} value='{{kd1}}'{{/kd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke2'>ke2: </label><div class='col-sm-8'><input id='{{id}}_ke2' class='form-control' type='text'{{#ke2}} value='{{ke2}}'{{/ke2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ketb'>ketb: </label><div class='col-sm-8'><input id='{{id}}_ketb' class='form-control' type='text'{{#ketb}} value='{{ketb}}'{{/ketb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pid1max'>pid1max: </label><div class='col-sm-8'><input id='{{id}}_pid1max' class='form-control' type='text'{{#pid1max}} value='{{pid1max}}'{{/pid1max}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb1'>tb1: </label><div class='col-sm-8'><input id='{{id}}_tb1' class='form-control' type='text'{{#tb1}} value='{{tb1}}'{{/tb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te2'>te2: </label><div class='col-sm-8'><input id='{{id}}_te2' class='form-control' type='text'{{#te2}} value='{{te2}}'{{/te2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti1'>ti1: </label><div class='col-sm-8'><input id='{{id}}_ti1' class='form-control' type='text'{{#ti1}} value='{{ti1}}'{{/ti1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti3'>ti3: </label><div class='col-sm-8'><input id='{{id}}_ti3' class='form-control' type='text'{{#ti3}} value='{{ti3}}'{{/ti3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti4'>ti4: </label><div class='col-sm-8'><input id='{{id}}_ti4' class='form-control' type='text'{{#ti4}} value='{{ti4}}'{{/ti4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr4'>tr4: </label><div class='col-sm-8'><input id='{{id}}_tr4' class='form-control' type='text'{{#tr4}} value='{{tr4}}'{{/tr4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upmax'>upmax: </label><div class='col-sm-8'><input id='{{id}}_upmax' class='form-control' type='text'{{#upmax}} value='{{upmax}}'{{/upmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_upmin'>upmin: </label><div class='col-sm-8'><input id='{{id}}_upmin' class='form-control' type='text'{{#upmin}} value='{{upmin}}'{{/upmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xp'>xp: </label><div class='col-sm-8'><input id='{{id}}_xp' class='form-control' type='text'{{#xp}} value='{{xp}}'{{/xp}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcELIN2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdbas").value; if ("" != temp) obj.efdbas = temp;
                temp = document.getElementById (id + "_iefmax").value; if ("" != temp) obj.iefmax = temp;
                temp = document.getElementById (id + "_iefmax2").value; if ("" != temp) obj.iefmax2 = temp;
                temp = document.getElementById (id + "_iefmin").value; if ("" != temp) obj.iefmin = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k1ec").value; if ("" != temp) obj.k1ec = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k4").value; if ("" != temp) obj.k4 = temp;
                temp = document.getElementById (id + "_kd1").value; if ("" != temp) obj.kd1 = temp;
                temp = document.getElementById (id + "_ke2").value; if ("" != temp) obj.ke2 = temp;
                temp = document.getElementById (id + "_ketb").value; if ("" != temp) obj.ketb = temp;
                temp = document.getElementById (id + "_pid1max").value; if ("" != temp) obj.pid1max = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_tb1").value; if ("" != temp) obj.tb1 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_te2").value; if ("" != temp) obj.te2 = temp;
                temp = document.getElementById (id + "_ti1").value; if ("" != temp) obj.ti1 = temp;
                temp = document.getElementById (id + "_ti3").value; if ("" != temp) obj.ti3 = temp;
                temp = document.getElementById (id + "_ti4").value; if ("" != temp) obj.ti4 = temp;
                temp = document.getElementById (id + "_tr4").value; if ("" != temp) obj.tr4 = temp;
                temp = document.getElementById (id + "_upmax").value; if ("" != temp) obj.upmax = temp;
                temp = document.getElementById (id + "_upmin").value; if ("" != temp) obj.upmin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_xp").value; if ("" != temp) obj.xp = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC3A model.
         *
         * This model represents represent older systems, in particular those dc commutator exciters with non-continuously acting regulators that were commonly used before the development of the continuously acting varieties.  These systems respond at basically two different rates, depending upon the magnitude of voltage error. For small errors, adjustment is made periodically with a signal to a motor-operated rheostat. Larger errors cause resistors to be quickly shorted or inserted and a strong forcing signal applied to the exciter. Continuous motion of the motor-operated rheostat occurs for these larger error signals, even though it is bypassed by contactor action.
         *
         */
        class ExcIEEEDC3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEDC3A;
                if (null == bucket)
                   cim_data.ExcIEEEDC3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEDC3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEDC3A;
                if (null == bucket)
                   context.parsed.ExcIEEEDC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEDC3A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC3A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "kv", "kv",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC3A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC3A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "trh", "trh",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC3A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEDC3A_collapse" aria-expanded="true" aria-controls="ExcIEEEDC3A_collapse" style="margin-left: 10px;">ExcIEEEDC3A</a></legend>
                    <div id="ExcIEEEDC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kv}}<div><b>kv</b>: {{kv}}</div>{{/kv}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEDC3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEDC3A_collapse" style="margin-left: 10px;">ExcIEEEDC3A</a></legend>
                    <div id="{{id}}_ExcIEEEDC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kv'>kv: </label><div class='col-sm-8'><input id='{{id}}_kv' class='form-control' type='text'{{#kv}} value='{{kv}}'{{/kv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trh'>trh: </label><div class='col-sm-8'><input id='{{id}}_trh' class='form-control' type='text'{{#trh}} value='{{trh}}'{{/trh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEDC3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kv").value; if ("" != temp) obj.kv = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_trh").value; if ("" != temp) obj.trh = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC2A model.
         *
         * The model represents a high initial response field-controlled alternator-rectifier excitation system. The alternator main exciter is used with non-controlled rectifiers. The Type AC2A model is similar to that of Type AC1A except for the inclusion of exciter time constant compensation and exciter field current limiting elements.
         *
         */
        class ExcIEEEAC2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC2A;
                if (null == bucket)
                   cim_data.ExcIEEEAC2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC2A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "kb", "kb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC2A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC2A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC2A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC2A_collapse" style="margin-left: 10px;">ExcIEEEAC2A</a></legend>
                    <div id="ExcIEEEAC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kb}}<div><b>kb</b>: {{kb}}</div>{{/kb}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC2A_collapse" style="margin-left: 10px;">ExcIEEEAC2A</a></legend>
                    <div id="{{id}}_ExcIEEEAC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kb'>kb: </label><div class='col-sm-8'><input id='{{id}}_kb' class='form-control' type='text'{{#kb}} value='{{kb}}'{{/kb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kb").value; if ("" != temp) obj.kb = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC1A alternator-supplied rectifier excitation system with different rate feedback source.
         *
         */
        class ExcAC1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC1A;
                if (null == bucket)
                   cim_data.ExcAC1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC1A;
                if (null == bucket)
                   context.parsed.ExcAC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC1A", "hvlvgates", "hvlvgates",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "kf1", "kf1",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "kf2", "kf2",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcAC1A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcAC1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC1A_collapse" aria-expanded="true" aria-controls="ExcAC1A_collapse" style="margin-left: 10px;">ExcAC1A</a></legend>
                    <div id="ExcAC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#hvlvgates}}<div><b>hvlvgates</b>: {{hvlvgates}}</div>{{/hvlvgates}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kf1}}<div><b>kf1</b>: {{kf1}}</div>{{/kf1}}
                    {{#kf2}}<div><b>kf2</b>: {{kf2}}</div>{{/kf2}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC1A_collapse" style="margin-left: 10px;">ExcAC1A</a></legend>
                    <div id="{{id}}_ExcAC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_hvlvgates'>hvlvgates: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_hvlvgates' class='form-check-input' type='checkbox'{{#hvlvgates}} checked{{/hvlvgates}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf1'>kf1: </label><div class='col-sm-8'><input id='{{id}}_kf1' class='form-control' type='text'{{#kf1}} value='{{kf1}}'{{/kf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf2'>kf2: </label><div class='col-sm-8'><input id='{{id}}_kf2' class='form-control' type='text'{{#kf2}} value='{{kf2}}'{{/kf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_hvlvgates").checked; if (temp) obj.hvlvgates = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kf1").value; if ("" != temp) obj.kf1 = temp;
                temp = document.getElementById (id + "_kf2").value; if ("" != temp) obj.kf2 = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Simplified Excitation System Model.
         *
         */
        class ExcSEXS extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcSEXS;
                if (null == bucket)
                   cim_data.ExcSEXS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcSEXS[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcSEXS;
                if (null == bucket)
                   context.parsed.ExcSEXS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcSEXS", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "emax", "emax",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "emin", "emin",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "k", "k",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "tatb", "tatb",  base.from_float, fields);
                base.export_element (obj, "ExcSEXS", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcSEXS", "te", "te",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcSEXS_collapse" aria-expanded="true" aria-controls="ExcSEXS_collapse" style="margin-left: 10px;">ExcSEXS</a></legend>
                    <div id="ExcSEXS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#emax}}<div><b>emax</b>: {{emax}}</div>{{/emax}}
                    {{#emin}}<div><b>emin</b>: {{emin}}</div>{{/emin}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#tatb}}<div><b>tatb</b>: {{tatb}}</div>{{/tatb}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcSEXS_collapse" aria-expanded="true" aria-controls="{{id}}_ExcSEXS_collapse" style="margin-left: 10px;">ExcSEXS</a></legend>
                    <div id="{{id}}_ExcSEXS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emax'>emax: </label><div class='col-sm-8'><input id='{{id}}_emax' class='form-control' type='text'{{#emax}} value='{{emax}}'{{/emax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emin'>emin: </label><div class='col-sm-8'><input id='{{id}}_emin' class='form-control' type='text'{{#emin}} value='{{emin}}'{{/emin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tatb'>tatb: </label><div class='col-sm-8'><input id='{{id}}_tatb' class='form-control' type='text'{{#tatb}} value='{{tatb}}'{{/tatb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcSEXS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_emax").value; if ("" != temp) obj.emax = temp;
                temp = document.getElementById (id + "_emin").value; if ("" != temp) obj.emin = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_tatb").value; if ("" != temp) obj.tatb = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;

                return (obj);
            }
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 2 Model.
         *
         * It represents alternator and rotating diodes and electromechanic voltage regulators.
         *
         */
        class ExcAVR2 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR2;
                if (null == bucket)
                   cim_data.ExcAVR2 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR2[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAVR2;
                if (null == bucket)
                   context.parsed.ExcAVR2 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR2", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "e2", "e2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "ka", "ka",  base.from_float, fields);
                base.export_element (obj, "ExcAVR2", "kf", "kf",  base.from_float, fields);
                base.export_element (obj, "ExcAVR2", "se1", "se1",  base.from_float, fields);
                base.export_element (obj, "ExcAVR2", "se2", "se2",  base.from_float, fields);
                base.export_element (obj, "ExcAVR2", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "vrmn", "vrmn",  base.from_string, fields);
                base.export_element (obj, "ExcAVR2", "vrmx", "vrmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR2_collapse" aria-expanded="true" aria-controls="ExcAVR2_collapse" style="margin-left: 10px;">ExcAVR2</a></legend>
                    <div id="ExcAVR2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#se1}}<div><b>se1</b>: {{se1}}</div>{{/se1}}
                    {{#se2}}<div><b>se2</b>: {{se2}}</div>{{/se2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#vrmn}}<div><b>vrmn</b>: {{vrmn}}</div>{{/vrmn}}
                    {{#vrmx}}<div><b>vrmx</b>: {{vrmx}}</div>{{/vrmx}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR2_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR2_collapse" style="margin-left: 10px;">ExcAVR2</a></legend>
                    <div id="{{id}}_ExcAVR2_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se1'>se1: </label><div class='col-sm-8'><input id='{{id}}_se1' class='form-control' type='text'{{#se1}} value='{{se1}}'{{/se1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se2'>se2: </label><div class='col-sm-8'><input id='{{id}}_se2' class='form-control' type='text'{{#se2}} value='{{se2}}'{{/se2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmn'>vrmn: </label><div class='col-sm-8'><input id='{{id}}_vrmn' class='form-control' type='text'{{#vrmn}} value='{{vrmn}}'{{/vrmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmx'>vrmx: </label><div class='col-sm-8'><input id='{{id}}_vrmx' class='form-control' type='text'{{#vrmx}} value='{{vrmx}}'{{/vrmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR2" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_se1").value; if ("" != temp) obj.se1 = temp;
                temp = document.getElementById (id + "_se2").value; if ("" != temp) obj.se2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_vrmn").value; if ("" != temp) obj.vrmn = temp;
                temp = document.getElementById (id + "_vrmx").value; if ("" != temp) obj.vrmx = temp;

                return (obj);
            }
        }

        /**
         * This is modified IEEE DC3A direct current commutator exciters with speed input, and death band.
         *
         * DC old type 4.
         *
         */
        class ExcDC3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcDC3A;
                if (null == bucket)
                   cim_data.ExcDC3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcDC3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcDC3A;
                if (null == bucket)
                   context.parsed.ExcDC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcDC3A", "edfmax", "edfmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "efdlim", "efdlim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC3A", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC3A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "kr", "kr",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "kv", "kv",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcDC3A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcDC3A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "trh", "trh",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcDC3A_collapse" aria-expanded="true" aria-controls="ExcDC3A_collapse" style="margin-left: 10px;">ExcDC3A</a></legend>
                    <div id="ExcDC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#edfmax}}<div><b>edfmax</b>: {{edfmax}}</div>{{/edfmax}}
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#efdlim}}<div><b>efdlim</b>: {{efdlim}}</div>{{/efdlim}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kr}}<div><b>kr</b>: {{kr}}</div>{{/kr}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#kv}}<div><b>kv</b>: {{kv}}</div>{{/kv}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#trh}}<div><b>trh</b>: {{trh}}</div>{{/trh}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcDC3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcDC3A_collapse" style="margin-left: 10px;">ExcDC3A</a></legend>
                    <div id="{{id}}_ExcDC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_edfmax'>edfmax: </label><div class='col-sm-8'><input id='{{id}}_edfmax' class='form-control' type='text'{{#edfmax}} value='{{edfmax}}'{{/edfmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_efdlim'>efdlim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_efdlim' class='form-check-input' type='checkbox'{{#efdlim}} checked{{/efdlim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kr'>kr: </label><div class='col-sm-8'><input id='{{id}}_kr' class='form-control' type='text'{{#kr}} value='{{kr}}'{{/kr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kv'>kv: </label><div class='col-sm-8'><input id='{{id}}_kv' class='form-control' type='text'{{#kv}} value='{{kv}}'{{/kv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_trh'>trh: </label><div class='col-sm-8'><input id='{{id}}_trh' class='form-control' type='text'{{#trh}} value='{{trh}}'{{/trh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcDC3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_edfmax").value; if ("" != temp) obj.edfmax = temp;
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_efdlim").checked; if (temp) obj.efdlim = true;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kr").value; if ("" != temp) obj.kr = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_kv").value; if ("" != temp) obj.kv = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_trh").value; if ("" != temp) obj.trh = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE ST6B static excitation system with PID controller and optional inner feedbacks loop.
         *
         */
        class ExcST6B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST6B;
                if (null == bucket)
                   cim_data.ExcST6B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST6B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                base.parse_attribute (/<cim:ExcST6B.oelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "oelin", sub, context);
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
                var bucket = context.parsed.ExcST6B;
                if (null == bucket)
                   context.parsed.ExcST6B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST6B", "ilr", "ilr",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "k1", "k1",  base.from_boolean, fields);
                base.export_element (obj, "ExcST6B", "kcl", "kcl",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "kff", "kff",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "kia", "kia",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "klr", "klr",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "km", "km",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "kpa", "kpa",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "kvd", "kvd",  base.from_string, fields);
                base.export_attribute (obj, "ExcST6B", "oelin", "oelin", fields);
                base.export_element (obj, "ExcST6B", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "ts", "ts",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "tvd", "tvd",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vilim", "vilim",  base.from_boolean, fields);
                base.export_element (obj, "ExcST6B", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vmult", "vmult",  base.from_boolean, fields);
                base.export_element (obj, "ExcST6B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcST6B", "xc", "xc",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST6B_collapse" aria-expanded="true" aria-controls="ExcST6B_collapse" style="margin-left: 10px;">ExcST6B</a></legend>
                    <div id="ExcST6B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ilr}}<div><b>ilr</b>: {{ilr}}</div>{{/ilr}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#kcl}}<div><b>kcl</b>: {{kcl}}</div>{{/kcl}}
                    {{#kff}}<div><b>kff</b>: {{kff}}</div>{{/kff}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#kia}}<div><b>kia</b>: {{kia}}</div>{{/kia}}
                    {{#klr}}<div><b>klr</b>: {{klr}}</div>{{/klr}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#kpa}}<div><b>kpa</b>: {{kpa}}</div>{{/kpa}}
                    {{#kvd}}<div><b>kvd</b>: {{kvd}}</div>{{/kvd}}
                    {{#oelin}}<div><b>oelin</b>: {{oelin}}</div>{{/oelin}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
                    {{#tvd}}<div><b>tvd</b>: {{tvd}}</div>{{/tvd}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#vilim}}<div><b>vilim</b>: {{vilim}}</div>{{/vilim}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vmult}}<div><b>vmult</b>: {{vmult}}</div>{{/vmult}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xc}}<div><b>xc</b>: {{xc}}</div>{{/xc}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcST6BOELselectorKind = []; if (!obj.oelin) obj.ExcST6BOELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST6BOELselectorKind) obj.ExcST6BOELselectorKind.push ({ id: property, selected: obj.oelin && obj.oelin.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcST6BOELselectorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST6B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST6B_collapse" style="margin-left: 10px;">ExcST6B</a></legend>
                    <div id="{{id}}_ExcST6B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ilr'>ilr: </label><div class='col-sm-8'><input id='{{id}}_ilr' class='form-control' type='text'{{#ilr}} value='{{ilr}}'{{/ilr}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_k1'>k1: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_k1' class='form-check-input' type='checkbox'{{#k1}} checked{{/k1}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kcl'>kcl: </label><div class='col-sm-8'><input id='{{id}}_kcl' class='form-control' type='text'{{#kcl}} value='{{kcl}}'{{/kcl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kff'>kff: </label><div class='col-sm-8'><input id='{{id}}_kff' class='form-control' type='text'{{#kff}} value='{{kff}}'{{/kff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kia'>kia: </label><div class='col-sm-8'><input id='{{id}}_kia' class='form-control' type='text'{{#kia}} value='{{kia}}'{{/kia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klr'>klr: </label><div class='col-sm-8'><input id='{{id}}_klr' class='form-control' type='text'{{#klr}} value='{{klr}}'{{/klr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_km'>km: </label><div class='col-sm-8'><input id='{{id}}_km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpa'>kpa: </label><div class='col-sm-8'><input id='{{id}}_kpa' class='form-control' type='text'{{#kpa}} value='{{kpa}}'{{/kpa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kvd'>kvd: </label><div class='col-sm-8'><input id='{{id}}_kvd' class='form-control' type='text'{{#kvd}} value='{{kvd}}'{{/kvd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oelin'>oelin: </label><div class='col-sm-8'><select id='{{id}}_oelin' class='form-control custom-select'>{{#ExcST6BOELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST6BOELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts'>ts: </label><div class='col-sm-8'><input id='{{id}}_ts' class='form-control' type='text'{{#ts}} value='{{ts}}'{{/ts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tvd'>tvd: </label><div class='col-sm-8'><input id='{{id}}_tvd' class='form-control' type='text'{{#tvd}} value='{{tvd}}'{{/tvd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vilim'>vilim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vilim' class='form-check-input' type='checkbox'{{#vilim}} checked{{/vilim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vmult'>vmult: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vmult' class='form-check-input' type='checkbox'{{#vmult}} checked{{/vmult}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xc'>xc: </label><div class='col-sm-8'><input id='{{id}}_xc' class='form-control' type='text'{{#xc}} value='{{xc}}'{{/xc}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST6B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ilr").value; if ("" != temp) obj.ilr = temp;
                temp = document.getElementById (id + "_k1").checked; if (temp) obj.k1 = true;
                temp = document.getElementById (id + "_kcl").value; if ("" != temp) obj.kcl = temp;
                temp = document.getElementById (id + "_kff").value; if ("" != temp) obj.kff = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_kia").value; if ("" != temp) obj.kia = temp;
                temp = document.getElementById (id + "_klr").value; if ("" != temp) obj.klr = temp;
                temp = document.getElementById (id + "_km").value; if ("" != temp) obj.km = temp;
                temp = document.getElementById (id + "_kpa").value; if ("" != temp) obj.kpa = temp;
                temp = document.getElementById (id + "_kvd").value; if ("" != temp) obj.kvd = temp;
                temp = document.getElementById (id + "_oelin").value; if ("" != temp) { temp = ExcST6BOELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.oelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST6BOELselectorKind." + temp; }
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_ts").value; if ("" != temp) obj.ts = temp;
                temp = document.getElementById (id + "_tvd").value; if ("" != temp) obj.tvd = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_vilim").checked; if (temp) obj.vilim = true;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vmult").checked; if (temp) obj.vmult = true;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xc").value; if ("" != temp) obj.xc = temp;

                return (obj);
            }
        }

        /**
         * Proportional/Integral Regulator Excitation System Model.
         *
         * This model can be used to represent excitation systems with a proportional-integral (PI) voltage regulator controller.
         *
         */
        class ExcPIC extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcPIC;
                if (null == bucket)
                   cim_data.ExcPIC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcPIC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcPIC;
                if (null == bucket)
                   context.parsed.ExcPIC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcPIC", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "e2", "e2",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "se1", "se1",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "se2", "se2",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ta1", "ta1",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ta2", "ta2",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ta3", "ta3",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "ta4", "ta4",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "vr1", "vr1",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "vr2", "vr2",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcPIC", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcPIC_collapse" aria-expanded="true" aria-controls="ExcPIC_collapse" style="margin-left: 10px;">ExcPIC</a></legend>
                    <div id="ExcPIC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#se1}}<div><b>se1</b>: {{se1}}</div>{{/se1}}
                    {{#se2}}<div><b>se2</b>: {{se2}}</div>{{/se2}}
                    {{#ta1}}<div><b>ta1</b>: {{ta1}}</div>{{/ta1}}
                    {{#ta2}}<div><b>ta2</b>: {{ta2}}</div>{{/ta2}}
                    {{#ta3}}<div><b>ta3</b>: {{ta3}}</div>{{/ta3}}
                    {{#ta4}}<div><b>ta4</b>: {{ta4}}</div>{{/ta4}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#vr1}}<div><b>vr1</b>: {{vr1}}</div>{{/vr1}}
                    {{#vr2}}<div><b>vr2</b>: {{vr2}}</div>{{/vr2}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcPIC_collapse" aria-expanded="true" aria-controls="{{id}}_ExcPIC_collapse" style="margin-left: 10px;">ExcPIC</a></legend>
                    <div id="{{id}}_ExcPIC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se1'>se1: </label><div class='col-sm-8'><input id='{{id}}_se1' class='form-control' type='text'{{#se1}} value='{{se1}}'{{/se1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se2'>se2: </label><div class='col-sm-8'><input id='{{id}}_se2' class='form-control' type='text'{{#se2}} value='{{se2}}'{{/se2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta1'>ta1: </label><div class='col-sm-8'><input id='{{id}}_ta1' class='form-control' type='text'{{#ta1}} value='{{ta1}}'{{/ta1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta2'>ta2: </label><div class='col-sm-8'><input id='{{id}}_ta2' class='form-control' type='text'{{#ta2}} value='{{ta2}}'{{/ta2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta3'>ta3: </label><div class='col-sm-8'><input id='{{id}}_ta3' class='form-control' type='text'{{#ta3}} value='{{ta3}}'{{/ta3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta4'>ta4: </label><div class='col-sm-8'><input id='{{id}}_ta4' class='form-control' type='text'{{#ta4}} value='{{ta4}}'{{/ta4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vr1'>vr1: </label><div class='col-sm-8'><input id='{{id}}_vr1' class='form-control' type='text'{{#vr1}} value='{{vr1}}'{{/vr1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vr2'>vr2: </label><div class='col-sm-8'><input id='{{id}}_vr2' class='form-control' type='text'{{#vr2}} value='{{vr2}}'{{/vr2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcPIC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_se1").value; if ("" != temp) obj.se1 = temp;
                temp = document.getElementById (id + "_se2").value; if ("" != temp) obj.se2 = temp;
                temp = document.getElementById (id + "_ta1").value; if ("" != temp) obj.ta1 = temp;
                temp = document.getElementById (id + "_ta2").value; if ("" != temp) obj.ta2 = temp;
                temp = document.getElementById (id + "_ta3").value; if ("" != temp) obj.ta3 = temp;
                temp = document.getElementById (id + "_ta4").value; if ("" != temp) obj.ta4 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_vr1").value; if ("" != temp) obj.vr1 = temp;
                temp = document.getElementById (id + "_vr2").value; if ("" != temp) obj.vr2 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Czech Proportion/Integral Exciter.
         *
         */
        class ExcCZ extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcCZ;
                if (null == bucket)
                   cim_data.ExcCZ = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcCZ[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcCZ;
                if (null == bucket)
                   context.parsed.ExcCZ = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcCZ", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcCZ", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcCZ_collapse" aria-expanded="true" aria-controls="ExcCZ_collapse" style="margin-left: 10px;">ExcCZ</a></legend>
                    <div id="ExcCZ_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcCZ_collapse" aria-expanded="true" aria-controls="{{id}}_ExcCZ_collapse" style="margin-left: 10px;">ExcCZ</a></legend>
                    <div id="{{id}}_ExcCZ_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcCZ" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC8B alternator-supplied rectifier excitation system with speed input and input limiter.
         *
         */
        class ExcAC8B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC8B;
                if (null == bucket)
                   cim_data.ExcAC8B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC8B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC8B;
                if (null == bucket)
                   context.parsed.ExcAC8B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC8B", "inlim", "inlim",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC8B", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "kdr", "kdr",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "kir", "kir",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "kpr", "kpr",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "pidlim", "pidlim",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC8B", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcAC8B", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcAC8B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "tdr", "tdr",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "telim", "telim",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC8B", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vpidmax", "vpidmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vpidmin", "vpidmin",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcAC8B", "vtmult", "vtmult",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC8B_collapse" aria-expanded="true" aria-controls="ExcAC8B_collapse" style="margin-left: 10px;">ExcAC8B</a></legend>
                    <div id="ExcAC8B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#inlim}}<div><b>inlim</b>: {{inlim}}</div>{{/inlim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kdr}}<div><b>kdr</b>: {{kdr}}</div>{{/kdr}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kir}}<div><b>kir</b>: {{kir}}</div>{{/kir}}
                    {{#kpr}}<div><b>kpr</b>: {{kpr}}</div>{{/kpr}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#pidlim}}<div><b>pidlim</b>: {{pidlim}}</div>{{/pidlim}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tdr}}<div><b>tdr</b>: {{tdr}}</div>{{/tdr}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#telim}}<div><b>telim</b>: {{telim}}</div>{{/telim}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vpidmax}}<div><b>vpidmax</b>: {{vpidmax}}</div>{{/vpidmax}}
                    {{#vpidmin}}<div><b>vpidmin</b>: {{vpidmin}}</div>{{/vpidmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#vtmult}}<div><b>vtmult</b>: {{vtmult}}</div>{{/vtmult}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC8B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC8B_collapse" style="margin-left: 10px;">ExcAC8B</a></legend>
                    <div id="{{id}}_ExcAC8B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_inlim'>inlim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_inlim' class='form-check-input' type='checkbox'{{#inlim}} checked{{/inlim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdr'>kdr: </label><div class='col-sm-8'><input id='{{id}}_kdr' class='form-control' type='text'{{#kdr}} value='{{kdr}}'{{/kdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kir'>kir: </label><div class='col-sm-8'><input id='{{id}}_kir' class='form-control' type='text'{{#kir}} value='{{kir}}'{{/kir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpr'>kpr: </label><div class='col-sm-8'><input id='{{id}}_kpr' class='form-control' type='text'{{#kpr}} value='{{kpr}}'{{/kpr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_pidlim'>pidlim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_pidlim' class='form-check-input' type='checkbox'{{#pidlim}} checked{{/pidlim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdr'>tdr: </label><div class='col-sm-8'><input id='{{id}}_tdr' class='form-control' type='text'{{#tdr}} value='{{tdr}}'{{/tdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_telim'>telim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_telim' class='form-check-input' type='checkbox'{{#telim}} checked{{/telim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vpidmax'>vpidmax: </label><div class='col-sm-8'><input id='{{id}}_vpidmax' class='form-control' type='text'{{#vpidmax}} value='{{vpidmax}}'{{/vpidmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vpidmin'>vpidmin: </label><div class='col-sm-8'><input id='{{id}}_vpidmin' class='form-control' type='text'{{#vpidmin}} value='{{vpidmin}}'{{/vpidmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vtmult'>vtmult: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vtmult' class='form-check-input' type='checkbox'{{#vtmult}} checked{{/vtmult}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC8B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_inlim").checked; if (temp) obj.inlim = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kdr").value; if ("" != temp) obj.kdr = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kir").value; if ("" != temp) obj.kir = temp;
                temp = document.getElementById (id + "_kpr").value; if ("" != temp) obj.kpr = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_pidlim").checked; if (temp) obj.pidlim = true;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tdr").value; if ("" != temp) obj.tdr = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_telim").checked; if (temp) obj.telim = true;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vpidmax").value; if ("" != temp) obj.vpidmax = temp;
                temp = document.getElementById (id + "_vpidmin").value; if ("" != temp) obj.vpidmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_vtmult").checked; if (temp) obj.vtmult = true;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC5A model.
         *
         * The model represents a simplified model for brushless excitation systems. The regulator is supplied from a source, such as a permanent magnet generator, which is not affected by system disturbances.  Unlike other ac models, this model uses loaded rather than open circuit exciter saturation data in the same way as it is used for the dc models.  Because the model has been widely implemented by the industry, it is sometimes used to represent other types of systems when either detailed data for them are not available or simplified models are required.
         *
         */
        class ExcIEEEAC5A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC5A;
                if (null == bucket)
                   cim_data.ExcIEEEAC5A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC5A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC5A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC5A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC5A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC5A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC5A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "tf3", "tf3",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC5A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC5A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC5A_collapse" style="margin-left: 10px;">ExcIEEEAC5A</a></legend>
                    <div id="ExcIEEEAC5A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#tf3}}<div><b>tf3</b>: {{tf3}}</div>{{/tf3}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC5A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC5A_collapse" style="margin-left: 10px;">ExcIEEEAC5A</a></legend>
                    <div id="{{id}}_ExcIEEEAC5A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf3'>tf3: </label><div class='col-sm-8'><input id='{{id}}_tf3' class='form-control' type='text'{{#tf3}} value='{{tf3}}'{{/tf3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC5A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_tf3").value; if ("" != temp) obj.tf3 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST2A model.
         *
         * Some static systems utilize both current and voltage sources (generator terminal quantities) to comprise the power source.  The regulator controls the exciter output through controlled saturation of the power transformer components.  These compound-source rectifier excitation systems are designated Type ST2A and are represented by ExcIEEEST2A.
         *
         */
        class ExcIEEEST2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST2A;
                if (null == bucket)
                   cim_data.ExcIEEEST2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEST2A;
                if (null == bucket)
                   context.parsed.ExcIEEEST2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST2A", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "uelin", "uelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEST2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST2A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST2A_collapse" aria-expanded="true" aria-controls="ExcIEEEST2A_collapse" style="margin-left: 10px;">ExcIEEEST2A</a></legend>
                    <div id="ExcIEEEST2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST2A_collapse" style="margin-left: 10px;">ExcIEEEST2A</a></legend>
                    <div id="{{id}}_ExcIEEEST2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uelin'>uelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uelin' class='form-check-input' type='checkbox'{{#uelin}} checked{{/uelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").checked; if (temp) obj.uelin = true;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST5B model.
         *
         * The Type ST5B excitation system is a variation of the Type ST1A model, with alternative overexcitation and underexcitation inputs and additional limits.
         *
         */
        class ExcIEEEST5B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST5B;
                if (null == bucket)
                   cim_data.ExcIEEEST5B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST5B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEST5B;
                if (null == bucket)
                   context.parsed.ExcIEEEST5B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST5B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "kr", "kr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tb1", "tb1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tb2", "tb2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tc1", "tc1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tc2", "tc2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tob1", "tob1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tob2", "tob2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "toc1", "toc1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "toc2", "toc2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tub1", "tub1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tub2", "tub2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tuc1", "tuc1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "tuc2", "tuc2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST5B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST5B_collapse" aria-expanded="true" aria-controls="ExcIEEEST5B_collapse" style="margin-left: 10px;">ExcIEEEST5B</a></legend>
                    <div id="ExcIEEEST5B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kr}}<div><b>kr</b>: {{kr}}</div>{{/kr}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#tb1}}<div><b>tb1</b>: {{tb1}}</div>{{/tb1}}
                    {{#tb2}}<div><b>tb2</b>: {{tb2}}</div>{{/tb2}}
                    {{#tc1}}<div><b>tc1</b>: {{tc1}}</div>{{/tc1}}
                    {{#tc2}}<div><b>tc2</b>: {{tc2}}</div>{{/tc2}}
                    {{#tob1}}<div><b>tob1</b>: {{tob1}}</div>{{/tob1}}
                    {{#tob2}}<div><b>tob2</b>: {{tob2}}</div>{{/tob2}}
                    {{#toc1}}<div><b>toc1</b>: {{toc1}}</div>{{/toc1}}
                    {{#toc2}}<div><b>toc2</b>: {{toc2}}</div>{{/toc2}}
                    {{#tub1}}<div><b>tub1</b>: {{tub1}}</div>{{/tub1}}
                    {{#tub2}}<div><b>tub2</b>: {{tub2}}</div>{{/tub2}}
                    {{#tuc1}}<div><b>tuc1</b>: {{tuc1}}</div>{{/tuc1}}
                    {{#tuc2}}<div><b>tuc2</b>: {{tuc2}}</div>{{/tuc2}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST5B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST5B_collapse" style="margin-left: 10px;">ExcIEEEST5B</a></legend>
                    <div id="{{id}}_ExcIEEEST5B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kr'>kr: </label><div class='col-sm-8'><input id='{{id}}_kr' class='form-control' type='text'{{#kr}} value='{{kr}}'{{/kr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb1'>tb1: </label><div class='col-sm-8'><input id='{{id}}_tb1' class='form-control' type='text'{{#tb1}} value='{{tb1}}'{{/tb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb2'>tb2: </label><div class='col-sm-8'><input id='{{id}}_tb2' class='form-control' type='text'{{#tb2}} value='{{tb2}}'{{/tb2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc1'>tc1: </label><div class='col-sm-8'><input id='{{id}}_tc1' class='form-control' type='text'{{#tc1}} value='{{tc1}}'{{/tc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc2'>tc2: </label><div class='col-sm-8'><input id='{{id}}_tc2' class='form-control' type='text'{{#tc2}} value='{{tc2}}'{{/tc2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tob1'>tob1: </label><div class='col-sm-8'><input id='{{id}}_tob1' class='form-control' type='text'{{#tob1}} value='{{tob1}}'{{/tob1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tob2'>tob2: </label><div class='col-sm-8'><input id='{{id}}_tob2' class='form-control' type='text'{{#tob2}} value='{{tob2}}'{{/tob2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_toc1'>toc1: </label><div class='col-sm-8'><input id='{{id}}_toc1' class='form-control' type='text'{{#toc1}} value='{{toc1}}'{{/toc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_toc2'>toc2: </label><div class='col-sm-8'><input id='{{id}}_toc2' class='form-control' type='text'{{#toc2}} value='{{toc2}}'{{/toc2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tub1'>tub1: </label><div class='col-sm-8'><input id='{{id}}_tub1' class='form-control' type='text'{{#tub1}} value='{{tub1}}'{{/tub1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tub2'>tub2: </label><div class='col-sm-8'><input id='{{id}}_tub2' class='form-control' type='text'{{#tub2}} value='{{tub2}}'{{/tub2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tuc1'>tuc1: </label><div class='col-sm-8'><input id='{{id}}_tuc1' class='form-control' type='text'{{#tuc1}} value='{{tuc1}}'{{/tuc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tuc2'>tuc2: </label><div class='col-sm-8'><input id='{{id}}_tuc2' class='form-control' type='text'{{#tuc2}} value='{{tuc2}}'{{/tuc2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST5B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kr").value; if ("" != temp) obj.kr = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_tb1").value; if ("" != temp) obj.tb1 = temp;
                temp = document.getElementById (id + "_tb2").value; if ("" != temp) obj.tb2 = temp;
                temp = document.getElementById (id + "_tc1").value; if ("" != temp) obj.tc1 = temp;
                temp = document.getElementById (id + "_tc2").value; if ("" != temp) obj.tc2 = temp;
                temp = document.getElementById (id + "_tob1").value; if ("" != temp) obj.tob1 = temp;
                temp = document.getElementById (id + "_tob2").value; if ("" != temp) obj.tob2 = temp;
                temp = document.getElementById (id + "_toc1").value; if ("" != temp) obj.toc1 = temp;
                temp = document.getElementById (id + "_toc2").value; if ("" != temp) obj.toc2 = temp;
                temp = document.getElementById (id + "_tub1").value; if ("" != temp) obj.tub1 = temp;
                temp = document.getElementById (id + "_tub2").value; if ("" != temp) obj.tub2 = temp;
                temp = document.getElementById (id + "_tuc1").value; if ("" != temp) obj.tuc1 = temp;
                temp = document.getElementById (id + "_tuc2").value; if ("" != temp) obj.tuc2 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC4A alternator-supplied rectifier excitation system with different minimum controller output.
         *
         */
        class ExcAC4A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC4A;
                if (null == bucket)
                   cim_data.ExcAC4A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC4A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC4A;
                if (null == bucket)
                   context.parsed.ExcAC4A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC4A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC4A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC4A_collapse" aria-expanded="true" aria-controls="ExcAC4A_collapse" style="margin-left: 10px;">ExcAC4A</a></legend>
                    <div id="ExcAC4A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC4A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC4A_collapse" style="margin-left: 10px;">ExcAC4A</a></legend>
                    <div id="{{id}}_ExcAC4A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC4A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC8B model.
         *
         * This model represents a PID voltage regulator with either a brushless exciter or dc exciter. The AVR in this model consists of PID control, with separate constants for the proportional (<b>K</b><b><sub>PR</sub></b>), integral (<b>K</b><b><sub>IR</sub></b>), and derivative (<b>K</b><b><sub>DR</sub></b>) gains. The representation of the brushless exciter (<b>T</b><b><sub>E</sub></b>, <b>K</b><b><sub>E</sub></b>, <b>S</b><b><sub>E</sub></b>, <b>K</b><b><sub>C</sub></b>, <b>K</b><b><sub>D</sub></b>) is similar to the model Type AC2A. The Type AC8B model can be used to represent static voltage regulators applied to brushless excitation systems. Digitally based voltage regulators feeding dc rotating main exciters can be represented with the AC Type AC8B model with the parameters <b>K</b><b><sub>C</sub></b> and <b>K</b><b><sub>D</sub></b> set to 0.  For thyristor power stages fed from the generator terminals, the limits <b>V</b><b><sub>RMAX</sub></b> and <b>V</b><b><sub>RMIN</sub></b> should be a function of terminal voltage: <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMAX</sub></b><sub> </sub>and <b>V</b><b><sub>T</sub></b> * <b>V</b><b><sub>RMIN</sub></b>.
         *
         */
        class ExcIEEEAC8B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC8B;
                if (null == bucket)
                   cim_data.ExcIEEEAC8B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC8B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC8B;
                if (null == bucket)
                   context.parsed.ExcIEEEAC8B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC8B", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "kdr", "kdr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "kir", "kir",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "kpr", "kpr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC8B", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC8B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "tdr", "tdr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC8B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC8B_collapse" aria-expanded="true" aria-controls="ExcIEEEAC8B_collapse" style="margin-left: 10px;">ExcIEEEAC8B</a></legend>
                    <div id="ExcIEEEAC8B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kdr}}<div><b>kdr</b>: {{kdr}}</div>{{/kdr}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kir}}<div><b>kir</b>: {{kir}}</div>{{/kir}}
                    {{#kpr}}<div><b>kpr</b>: {{kpr}}</div>{{/kpr}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tdr}}<div><b>tdr</b>: {{tdr}}</div>{{/tdr}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC8B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC8B_collapse" style="margin-left: 10px;">ExcIEEEAC8B</a></legend>
                    <div id="{{id}}_ExcIEEEAC8B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdr'>kdr: </label><div class='col-sm-8'><input id='{{id}}_kdr' class='form-control' type='text'{{#kdr}} value='{{kdr}}'{{/kdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kir'>kir: </label><div class='col-sm-8'><input id='{{id}}_kir' class='form-control' type='text'{{#kir}} value='{{kir}}'{{/kir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpr'>kpr: </label><div class='col-sm-8'><input id='{{id}}_kpr' class='form-control' type='text'{{#kpr}} value='{{kpr}}'{{/kpr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdr'>tdr: </label><div class='col-sm-8'><input id='{{id}}_tdr' class='form-control' type='text'{{#tdr}} value='{{tdr}}'{{/tdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC8B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kdr").value; if ("" != temp) obj.kdr = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kir").value; if ("" != temp) obj.kir = temp;
                temp = document.getElementById (id + "_kpr").value; if ("" != temp) obj.kpr = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tdr").value; if ("" != temp) obj.tdr = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Slovakian Excitation System Model.
         *
         * UEL and secondary voltage control are included in this model. When this model is used, there cannot be a separate underexcitation limiter or VAr controller model.
         *
         */
        class ExcSK extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcSK;
                if (null == bucket)
                   cim_data.ExcSK = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcSK[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcSK;
                if (null == bucket)
                   context.parsed.ExcSK = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcSK", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "emax", "emax",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "emin", "emin",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "k", "k",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "k2", "k2",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kce", "kce",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kgob", "kgob",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kqi", "kqi",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kqob", "kqob",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "kqp", "kqp",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "nq", "nq",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "qconoff", "qconoff",  base.from_boolean, fields);
                base.export_element (obj, "ExcSK", "qz", "qz",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "remote", "remote",  base.from_boolean, fields);
                base.export_element (obj, "ExcSK", "sbase", "sbase",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "ti", "ti",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "tr", "tr",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "uimax", "uimax",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "uimin", "uimin",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "urmax", "urmax",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "urmin", "urmin",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "vtmax", "vtmax",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "vtmin", "vtmin",  base.from_string, fields);
                base.export_element (obj, "ExcSK", "yp", "yp",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcSK_collapse" aria-expanded="true" aria-controls="ExcSK_collapse" style="margin-left: 10px;">ExcSK</a></legend>
                    <div id="ExcSK_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#emax}}<div><b>emax</b>: {{emax}}</div>{{/emax}}
                    {{#emin}}<div><b>emin</b>: {{emin}}</div>{{/emin}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kce}}<div><b>kce</b>: {{kce}}</div>{{/kce}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kgob}}<div><b>kgob</b>: {{kgob}}</div>{{/kgob}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#kqi}}<div><b>kqi</b>: {{kqi}}</div>{{/kqi}}
                    {{#kqob}}<div><b>kqob</b>: {{kqob}}</div>{{/kqob}}
                    {{#kqp}}<div><b>kqp</b>: {{kqp}}</div>{{/kqp}}
                    {{#nq}}<div><b>nq</b>: {{nq}}</div>{{/nq}}
                    {{#qconoff}}<div><b>qconoff</b>: {{qconoff}}</div>{{/qconoff}}
                    {{#qz}}<div><b>qz</b>: {{qz}}</div>{{/qz}}
                    {{#remote}}<div><b>remote</b>: {{remote}}</div>{{/remote}}
                    {{#sbase}}<div><b>sbase</b>: {{sbase}}</div>{{/sbase}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#ti}}<div><b>ti</b>: {{ti}}</div>{{/ti}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    {{#uimax}}<div><b>uimax</b>: {{uimax}}</div>{{/uimax}}
                    {{#uimin}}<div><b>uimin</b>: {{uimin}}</div>{{/uimin}}
                    {{#urmax}}<div><b>urmax</b>: {{urmax}}</div>{{/urmax}}
                    {{#urmin}}<div><b>urmin</b>: {{urmin}}</div>{{/urmin}}
                    {{#vtmax}}<div><b>vtmax</b>: {{vtmax}}</div>{{/vtmax}}
                    {{#vtmin}}<div><b>vtmin</b>: {{vtmin}}</div>{{/vtmin}}
                    {{#yp}}<div><b>yp</b>: {{yp}}</div>{{/yp}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcSK_collapse" aria-expanded="true" aria-controls="{{id}}_ExcSK_collapse" style="margin-left: 10px;">ExcSK</a></legend>
                    <div id="{{id}}_ExcSK_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emax'>emax: </label><div class='col-sm-8'><input id='{{id}}_emax' class='form-control' type='text'{{#emax}} value='{{emax}}'{{/emax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emin'>emin: </label><div class='col-sm-8'><input id='{{id}}_emin' class='form-control' type='text'{{#emin}} value='{{emin}}'{{/emin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kce'>kce: </label><div class='col-sm-8'><input id='{{id}}_kce' class='form-control' type='text'{{#kce}} value='{{kce}}'{{/kce}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kgob'>kgob: </label><div class='col-sm-8'><input id='{{id}}_kgob' class='form-control' type='text'{{#kgob}} value='{{kgob}}'{{/kgob}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kqi'>kqi: </label><div class='col-sm-8'><input id='{{id}}_kqi' class='form-control' type='text'{{#kqi}} value='{{kqi}}'{{/kqi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kqob'>kqob: </label><div class='col-sm-8'><input id='{{id}}_kqob' class='form-control' type='text'{{#kqob}} value='{{kqob}}'{{/kqob}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kqp'>kqp: </label><div class='col-sm-8'><input id='{{id}}_kqp' class='form-control' type='text'{{#kqp}} value='{{kqp}}'{{/kqp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nq'>nq: </label><div class='col-sm-8'><input id='{{id}}_nq' class='form-control' type='text'{{#nq}} value='{{nq}}'{{/nq}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_qconoff'>qconoff: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_qconoff' class='form-check-input' type='checkbox'{{#qconoff}} checked{{/qconoff}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_qz'>qz: </label><div class='col-sm-8'><input id='{{id}}_qz' class='form-control' type='text'{{#qz}} value='{{qz}}'{{/qz}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_remote'>remote: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_remote' class='form-check-input' type='checkbox'{{#remote}} checked{{/remote}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sbase'>sbase: </label><div class='col-sm-8'><input id='{{id}}_sbase' class='form-control' type='text'{{#sbase}} value='{{sbase}}'{{/sbase}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti'>ti: </label><div class='col-sm-8'><input id='{{id}}_ti' class='form-control' type='text'{{#ti}} value='{{ti}}'{{/ti}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uimax'>uimax: </label><div class='col-sm-8'><input id='{{id}}_uimax' class='form-control' type='text'{{#uimax}} value='{{uimax}}'{{/uimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uimin'>uimin: </label><div class='col-sm-8'><input id='{{id}}_uimin' class='form-control' type='text'{{#uimin}} value='{{uimin}}'{{/uimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_urmax'>urmax: </label><div class='col-sm-8'><input id='{{id}}_urmax' class='form-control' type='text'{{#urmax}} value='{{urmax}}'{{/urmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_urmin'>urmin: </label><div class='col-sm-8'><input id='{{id}}_urmin' class='form-control' type='text'{{#urmin}} value='{{urmin}}'{{/urmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtmax'>vtmax: </label><div class='col-sm-8'><input id='{{id}}_vtmax' class='form-control' type='text'{{#vtmax}} value='{{vtmax}}'{{/vtmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vtmin'>vtmin: </label><div class='col-sm-8'><input id='{{id}}_vtmin' class='form-control' type='text'{{#vtmin}} value='{{vtmin}}'{{/vtmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_yp'>yp: </label><div class='col-sm-8'><input id='{{id}}_yp' class='form-control' type='text'{{#yp}} value='{{yp}}'{{/yp}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcSK" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_emax").value; if ("" != temp) obj.emax = temp;
                temp = document.getElementById (id + "_emin").value; if ("" != temp) obj.emin = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kce").value; if ("" != temp) obj.kce = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kgob").value; if ("" != temp) obj.kgob = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_kqi").value; if ("" != temp) obj.kqi = temp;
                temp = document.getElementById (id + "_kqob").value; if ("" != temp) obj.kqob = temp;
                temp = document.getElementById (id + "_kqp").value; if ("" != temp) obj.kqp = temp;
                temp = document.getElementById (id + "_nq").value; if ("" != temp) obj.nq = temp;
                temp = document.getElementById (id + "_qconoff").checked; if (temp) obj.qconoff = true;
                temp = document.getElementById (id + "_qz").value; if ("" != temp) obj.qz = temp;
                temp = document.getElementById (id + "_remote").checked; if (temp) obj.remote = true;
                temp = document.getElementById (id + "_sbase").value; if ("" != temp) obj.sbase = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_ti").value; if ("" != temp) obj.ti = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;
                temp = document.getElementById (id + "_uimax").value; if ("" != temp) obj.uimax = temp;
                temp = document.getElementById (id + "_uimin").value; if ("" != temp) obj.uimin = temp;
                temp = document.getElementById (id + "_urmax").value; if ("" != temp) obj.urmax = temp;
                temp = document.getElementById (id + "_urmin").value; if ("" != temp) obj.urmin = temp;
                temp = document.getElementById (id + "_vtmax").value; if ("" != temp) obj.vtmax = temp;
                temp = document.getElementById (id + "_vtmin").value; if ("" != temp) obj.vtmin = temp;
                temp = document.getElementById (id + "_yp").value; if ("" != temp) obj.yp = temp;

                return (obj);
            }
        }

        /**
         * General Purpose Rotating Excitation System Model.
         *
         * This model can be used to represent a wide range of excitation systems whose DC power source is an AC or DC generator. It encompasses IEEE type AC1, AC2, DC1, and DC2 excitation system models.
         *
         */
        class ExcREXS extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcREXS;
                if (null == bucket)
                   cim_data.ExcREXS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcREXS[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcREXS";
                base.parse_element (/<cim:ExcREXS.e1>([\s\S]*?)<\/cim:ExcREXS.e1>/g, obj, "e1", base.to_string, sub, context);
                base.parse_element (/<cim:ExcREXS.e2>([\s\S]*?)<\/cim:ExcREXS.e2>/g, obj, "e2", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcREXS.fbf\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "fbf", sub, context);
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
                var bucket = context.parsed.ExcREXS;
                if (null == bucket)
                   context.parsed.ExcREXS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcREXS", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "e2", "e2",  base.from_string, fields);
                base.export_attribute (obj, "ExcREXS", "fbf", "fbf", fields);
                base.export_element (obj, "ExcREXS", "flimf", "flimf",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kefd", "kefd",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kii", "kii",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kip", "kip",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kvi", "kvi",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kvp", "kvp",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "kvphz", "kvphz",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "nvphz", "nvphz",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "se1", "se1",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "se2", "se2",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tb1", "tb1",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tb2", "tb2",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tc1", "tc1",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tc2", "tc2",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "tp", "tp",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vcmax", "vcmax",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vfmax", "vfmax",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vfmin", "vfmin",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcREXS", "xc", "xc",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcREXS_collapse" aria-expanded="true" aria-controls="ExcREXS_collapse" style="margin-left: 10px;">ExcREXS</a></legend>
                    <div id="ExcREXS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#fbf}}<div><b>fbf</b>: {{fbf}}</div>{{/fbf}}
                    {{#flimf}}<div><b>flimf</b>: {{flimf}}</div>{{/flimf}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kefd}}<div><b>kefd</b>: {{kefd}}</div>{{/kefd}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#kii}}<div><b>kii</b>: {{kii}}</div>{{/kii}}
                    {{#kip}}<div><b>kip</b>: {{kip}}</div>{{/kip}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#kvi}}<div><b>kvi</b>: {{kvi}}</div>{{/kvi}}
                    {{#kvp}}<div><b>kvp</b>: {{kvp}}</div>{{/kvp}}
                    {{#kvphz}}<div><b>kvphz</b>: {{kvphz}}</div>{{/kvphz}}
                    {{#nvphz}}<div><b>nvphz</b>: {{nvphz}}</div>{{/nvphz}}
                    {{#se1}}<div><b>se1</b>: {{se1}}</div>{{/se1}}
                    {{#se2}}<div><b>se2</b>: {{se2}}</div>{{/se2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb1}}<div><b>tb1</b>: {{tb1}}</div>{{/tb1}}
                    {{#tb2}}<div><b>tb2</b>: {{tb2}}</div>{{/tb2}}
                    {{#tc1}}<div><b>tc1</b>: {{tc1}}</div>{{/tc1}}
                    {{#tc2}}<div><b>tc2</b>: {{tc2}}</div>{{/tc2}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#tp}}<div><b>tp</b>: {{tp}}</div>{{/tp}}
                    {{#vcmax}}<div><b>vcmax</b>: {{vcmax}}</div>{{/vcmax}}
                    {{#vfmax}}<div><b>vfmax</b>: {{vfmax}}</div>{{/vfmax}}
                    {{#vfmin}}<div><b>vfmin</b>: {{vfmin}}</div>{{/vfmin}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xc}}<div><b>xc</b>: {{xc}}</div>{{/xc}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcREXSFeedbackSignalKind = []; if (!obj.fbf) obj.ExcREXSFeedbackSignalKind.push ({ id: '', selected: true}); for (var property in ExcREXSFeedbackSignalKind) obj.ExcREXSFeedbackSignalKind.push ({ id: property, selected: obj.fbf && obj.fbf.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcREXSFeedbackSignalKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcREXS_collapse" aria-expanded="true" aria-controls="{{id}}_ExcREXS_collapse" style="margin-left: 10px;">ExcREXS</a></legend>
                    <div id="{{id}}_ExcREXS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_fbf'>fbf: </label><div class='col-sm-8'><select id='{{id}}_fbf' class='form-control custom-select'>{{#ExcREXSFeedbackSignalKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcREXSFeedbackSignalKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_flimf'>flimf: </label><div class='col-sm-8'><input id='{{id}}_flimf' class='form-control' type='text'{{#flimf}} value='{{flimf}}'{{/flimf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kefd'>kefd: </label><div class='col-sm-8'><input id='{{id}}_kefd' class='form-control' type='text'{{#kefd}} value='{{kefd}}'{{/kefd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kii'>kii: </label><div class='col-sm-8'><input id='{{id}}_kii' class='form-control' type='text'{{#kii}} value='{{kii}}'{{/kii}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kip'>kip: </label><div class='col-sm-8'><input id='{{id}}_kip' class='form-control' type='text'{{#kip}} value='{{kip}}'{{/kip}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kvi'>kvi: </label><div class='col-sm-8'><input id='{{id}}_kvi' class='form-control' type='text'{{#kvi}} value='{{kvi}}'{{/kvi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kvp'>kvp: </label><div class='col-sm-8'><input id='{{id}}_kvp' class='form-control' type='text'{{#kvp}} value='{{kvp}}'{{/kvp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kvphz'>kvphz: </label><div class='col-sm-8'><input id='{{id}}_kvphz' class='form-control' type='text'{{#kvphz}} value='{{kvphz}}'{{/kvphz}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nvphz'>nvphz: </label><div class='col-sm-8'><input id='{{id}}_nvphz' class='form-control' type='text'{{#nvphz}} value='{{nvphz}}'{{/nvphz}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se1'>se1: </label><div class='col-sm-8'><input id='{{id}}_se1' class='form-control' type='text'{{#se1}} value='{{se1}}'{{/se1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se2'>se2: </label><div class='col-sm-8'><input id='{{id}}_se2' class='form-control' type='text'{{#se2}} value='{{se2}}'{{/se2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb1'>tb1: </label><div class='col-sm-8'><input id='{{id}}_tb1' class='form-control' type='text'{{#tb1}} value='{{tb1}}'{{/tb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb2'>tb2: </label><div class='col-sm-8'><input id='{{id}}_tb2' class='form-control' type='text'{{#tb2}} value='{{tb2}}'{{/tb2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc1'>tc1: </label><div class='col-sm-8'><input id='{{id}}_tc1' class='form-control' type='text'{{#tc1}} value='{{tc1}}'{{/tc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc2'>tc2: </label><div class='col-sm-8'><input id='{{id}}_tc2' class='form-control' type='text'{{#tc2}} value='{{tc2}}'{{/tc2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tp'>tp: </label><div class='col-sm-8'><input id='{{id}}_tp' class='form-control' type='text'{{#tp}} value='{{tp}}'{{/tp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vcmax'>vcmax: </label><div class='col-sm-8'><input id='{{id}}_vcmax' class='form-control' type='text'{{#vcmax}} value='{{vcmax}}'{{/vcmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfmax'>vfmax: </label><div class='col-sm-8'><input id='{{id}}_vfmax' class='form-control' type='text'{{#vfmax}} value='{{vfmax}}'{{/vfmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfmin'>vfmin: </label><div class='col-sm-8'><input id='{{id}}_vfmin' class='form-control' type='text'{{#vfmin}} value='{{vfmin}}'{{/vfmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xc'>xc: </label><div class='col-sm-8'><input id='{{id}}_xc' class='form-control' type='text'{{#xc}} value='{{xc}}'{{/xc}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcREXS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_fbf").value; if ("" != temp) { temp = ExcREXSFeedbackSignalKind[temp]; if ("undefined" != typeof (temp)) obj.fbf = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcREXSFeedbackSignalKind." + temp; }
                temp = document.getElementById (id + "_flimf").value; if ("" != temp) obj.flimf = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kefd").value; if ("" != temp) obj.kefd = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_kii").value; if ("" != temp) obj.kii = temp;
                temp = document.getElementById (id + "_kip").value; if ("" != temp) obj.kip = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_kvi").value; if ("" != temp) obj.kvi = temp;
                temp = document.getElementById (id + "_kvp").value; if ("" != temp) obj.kvp = temp;
                temp = document.getElementById (id + "_kvphz").value; if ("" != temp) obj.kvphz = temp;
                temp = document.getElementById (id + "_nvphz").value; if ("" != temp) obj.nvphz = temp;
                temp = document.getElementById (id + "_se1").value; if ("" != temp) obj.se1 = temp;
                temp = document.getElementById (id + "_se2").value; if ("" != temp) obj.se2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb1").value; if ("" != temp) obj.tb1 = temp;
                temp = document.getElementById (id + "_tb2").value; if ("" != temp) obj.tb2 = temp;
                temp = document.getElementById (id + "_tc1").value; if ("" != temp) obj.tc1 = temp;
                temp = document.getElementById (id + "_tc2").value; if ("" != temp) obj.tc2 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_tp").value; if ("" != temp) obj.tp = temp;
                temp = document.getElementById (id + "_vcmax").value; if ("" != temp) obj.vcmax = temp;
                temp = document.getElementById (id + "_vfmax").value; if ("" != temp) obj.vfmax = temp;
                temp = document.getElementById (id + "_vfmin").value; if ("" != temp) obj.vfmin = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xc").value; if ("" != temp) obj.xc = temp;

                return (obj);
            }
        }

        /**
         * Italian excitation system.
         *
         * It represents static field voltage or excitation current feedback excitation system.
         *
         */
        class ExcANS extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcANS;
                if (null == bucket)
                   cim_data.ExcANS = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcANS[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcANS;
                if (null == bucket)
                   context.parsed.ExcANS = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcANS", "blint", "blint",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "ifmn", "ifmn",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "ifmx", "ifmx",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "k2", "k2",  base.from_float, fields);
                base.export_element (obj, "ExcANS", "k3", "k3",  base.from_float, fields);
                base.export_element (obj, "ExcANS", "kce", "kce",  base.from_float, fields);
                base.export_element (obj, "ExcANS", "krvecc", "krvecc",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "kvfif", "kvfif",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "vrmn", "vrmn",  base.from_string, fields);
                base.export_element (obj, "ExcANS", "vrmx", "vrmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcANS_collapse" aria-expanded="true" aria-controls="ExcANS_collapse" style="margin-left: 10px;">ExcANS</a></legend>
                    <div id="ExcANS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#blint}}<div><b>blint</b>: {{blint}}</div>{{/blint}}
                    {{#ifmn}}<div><b>ifmn</b>: {{ifmn}}</div>{{/ifmn}}
                    {{#ifmx}}<div><b>ifmx</b>: {{ifmx}}</div>{{/ifmx}}
                    {{#k2}}<div><b>k2</b>: {{k2}}</div>{{/k2}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#kce}}<div><b>kce</b>: {{kce}}</div>{{/kce}}
                    {{#krvecc}}<div><b>krvecc</b>: {{krvecc}}</div>{{/krvecc}}
                    {{#kvfif}}<div><b>kvfif</b>: {{kvfif}}</div>{{/kvfif}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#vrmn}}<div><b>vrmn</b>: {{vrmn}}</div>{{/vrmn}}
                    {{#vrmx}}<div><b>vrmx</b>: {{vrmx}}</div>{{/vrmx}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcANS_collapse" aria-expanded="true" aria-controls="{{id}}_ExcANS_collapse" style="margin-left: 10px;">ExcANS</a></legend>
                    <div id="{{id}}_ExcANS_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_blint'>blint: </label><div class='col-sm-8'><input id='{{id}}_blint' class='form-control' type='text'{{#blint}} value='{{blint}}'{{/blint}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ifmn'>ifmn: </label><div class='col-sm-8'><input id='{{id}}_ifmn' class='form-control' type='text'{{#ifmn}} value='{{ifmn}}'{{/ifmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ifmx'>ifmx: </label><div class='col-sm-8'><input id='{{id}}_ifmx' class='form-control' type='text'{{#ifmx}} value='{{ifmx}}'{{/ifmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k2'>k2: </label><div class='col-sm-8'><input id='{{id}}_k2' class='form-control' type='text'{{#k2}} value='{{k2}}'{{/k2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kce'>kce: </label><div class='col-sm-8'><input id='{{id}}_kce' class='form-control' type='text'{{#kce}} value='{{kce}}'{{/kce}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_krvecc'>krvecc: </label><div class='col-sm-8'><input id='{{id}}_krvecc' class='form-control' type='text'{{#krvecc}} value='{{krvecc}}'{{/krvecc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kvfif'>kvfif: </label><div class='col-sm-8'><input id='{{id}}_kvfif' class='form-control' type='text'{{#kvfif}} value='{{kvfif}}'{{/kvfif}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmn'>vrmn: </label><div class='col-sm-8'><input id='{{id}}_vrmn' class='form-control' type='text'{{#vrmn}} value='{{vrmn}}'{{/vrmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmx'>vrmx: </label><div class='col-sm-8'><input id='{{id}}_vrmx' class='form-control' type='text'{{#vrmx}} value='{{vrmx}}'{{/vrmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcANS" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_blint").value; if ("" != temp) obj.blint = temp;
                temp = document.getElementById (id + "_ifmn").value; if ("" != temp) obj.ifmn = temp;
                temp = document.getElementById (id + "_ifmx").value; if ("" != temp) obj.ifmx = temp;
                temp = document.getElementById (id + "_k2").value; if ("" != temp) obj.k2 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_kce").value; if ("" != temp) obj.kce = temp;
                temp = document.getElementById (id + "_krvecc").value; if ("" != temp) obj.krvecc = temp;
                temp = document.getElementById (id + "_kvfif").value; if ("" != temp) obj.kvfif = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_vrmn").value; if ("" != temp) obj.vrmn = temp;
                temp = document.getElementById (id + "_vrmx").value; if ("" != temp) obj.vrmx = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC7B model.
         *
         * The model represents excitation systems which consist of an ac alternator with either stationary or rotating rectifiers to produce the dc field requirements. It is an upgrade to earlier ac excitation systems, which replace only the controls but retain the ac alternator and diode rectifier bridge.
         *
         */
        class ExcIEEEAC7B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC7B;
                if (null == bucket)
                   cim_data.ExcIEEEAC7B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC7B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC7B;
                if (null == bucket)
                   context.parsed.ExcIEEEAC7B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC7B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kdr", "kdr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kf1", "kf1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kf2", "kf2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kf3", "kf3",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kia", "kia",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kir", "kir",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kl", "kl",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kpa", "kpa",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "kpr", "kpr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC7B", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC7B", "tdr", "tdr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC7B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC7B_collapse" aria-expanded="true" aria-controls="ExcIEEEAC7B_collapse" style="margin-left: 10px;">ExcIEEEAC7B</a></legend>
                    <div id="ExcIEEEAC7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#kdr}}<div><b>kdr</b>: {{kdr}}</div>{{/kdr}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf1}}<div><b>kf1</b>: {{kf1}}</div>{{/kf1}}
                    {{#kf2}}<div><b>kf2</b>: {{kf2}}</div>{{/kf2}}
                    {{#kf3}}<div><b>kf3</b>: {{kf3}}</div>{{/kf3}}
                    {{#kia}}<div><b>kia</b>: {{kia}}</div>{{/kia}}
                    {{#kir}}<div><b>kir</b>: {{kir}}</div>{{/kir}}
                    {{#kl}}<div><b>kl</b>: {{kl}}</div>{{/kl}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#kpa}}<div><b>kpa</b>: {{kpa}}</div>{{/kpa}}
                    {{#kpr}}<div><b>kpr</b>: {{kpr}}</div>{{/kpr}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#tdr}}<div><b>tdr</b>: {{tdr}}</div>{{/tdr}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC7B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC7B_collapse" style="margin-left: 10px;">ExcIEEEAC7B</a></legend>
                    <div id="{{id}}_ExcIEEEAC7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kdr'>kdr: </label><div class='col-sm-8'><input id='{{id}}_kdr' class='form-control' type='text'{{#kdr}} value='{{kdr}}'{{/kdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf1'>kf1: </label><div class='col-sm-8'><input id='{{id}}_kf1' class='form-control' type='text'{{#kf1}} value='{{kf1}}'{{/kf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf2'>kf2: </label><div class='col-sm-8'><input id='{{id}}_kf2' class='form-control' type='text'{{#kf2}} value='{{kf2}}'{{/kf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf3'>kf3: </label><div class='col-sm-8'><input id='{{id}}_kf3' class='form-control' type='text'{{#kf3}} value='{{kf3}}'{{/kf3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kia'>kia: </label><div class='col-sm-8'><input id='{{id}}_kia' class='form-control' type='text'{{#kia}} value='{{kia}}'{{/kia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kir'>kir: </label><div class='col-sm-8'><input id='{{id}}_kir' class='form-control' type='text'{{#kir}} value='{{kir}}'{{/kir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl'>kl: </label><div class='col-sm-8'><input id='{{id}}_kl' class='form-control' type='text'{{#kl}} value='{{kl}}'{{/kl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpa'>kpa: </label><div class='col-sm-8'><input id='{{id}}_kpa' class='form-control' type='text'{{#kpa}} value='{{kpa}}'{{/kpa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpr'>kpr: </label><div class='col-sm-8'><input id='{{id}}_kpr' class='form-control' type='text'{{#kpr}} value='{{kpr}}'{{/kpr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tdr'>tdr: </label><div class='col-sm-8'><input id='{{id}}_tdr' class='form-control' type='text'{{#tdr}} value='{{tdr}}'{{/tdr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC7B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_kdr").value; if ("" != temp) obj.kdr = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf1").value; if ("" != temp) obj.kf1 = temp;
                temp = document.getElementById (id + "_kf2").value; if ("" != temp) obj.kf2 = temp;
                temp = document.getElementById (id + "_kf3").value; if ("" != temp) obj.kf3 = temp;
                temp = document.getElementById (id + "_kia").value; if ("" != temp) obj.kia = temp;
                temp = document.getElementById (id + "_kir").value; if ("" != temp) obj.kir = temp;
                temp = document.getElementById (id + "_kl").value; if ("" != temp) obj.kl = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_kpa").value; if ("" != temp) obj.kpa = temp;
                temp = document.getElementById (id + "_kpr").value; if ("" != temp) obj.kpr = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_tdr").value; if ("" != temp) obj.tdr = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST4B model.
         *
         * This model is a variation of the Type ST3A model, with a proportional plus integral (PI) regulator block replacing the lag-lead regulator characteristic that is in the ST3A model. Both potential and compound source rectifier excitation systems are modeled.  The PI regulator blocks have non-windup limits that are represented. The voltage regulator of this model is typically implemented digitally.
         *
         */
        class ExcIEEEST4B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST4B;
                if (null == bucket)
                   cim_data.ExcIEEEST4B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST4B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEST4B;
                if (null == bucket)
                   context.parsed.ExcIEEEST4B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST4B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kim", "kim",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kir", "kir",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kpm", "kpm",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "kpr", "kpr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "thetap", "thetap",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "vbmax", "vbmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "vmmax", "vmmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "vmmin", "vmmin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST4B", "xl", "xl",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST4B_collapse" aria-expanded="true" aria-controls="ExcIEEEST4B_collapse" style="margin-left: 10px;">ExcIEEEST4B</a></legend>
                    <div id="ExcIEEEST4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kim}}<div><b>kim</b>: {{kim}}</div>{{/kim}}
                    {{#kir}}<div><b>kir</b>: {{kir}}</div>{{/kir}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#kpm}}<div><b>kpm</b>: {{kpm}}</div>{{/kpm}}
                    {{#kpr}}<div><b>kpr</b>: {{kpr}}</div>{{/kpr}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#thetap}}<div><b>thetap</b>: {{thetap}}</div>{{/thetap}}
                    {{#vbmax}}<div><b>vbmax</b>: {{vbmax}}</div>{{/vbmax}}
                    {{#vmmax}}<div><b>vmmax</b>: {{vmmax}}</div>{{/vmmax}}
                    {{#vmmin}}<div><b>vmmin</b>: {{vmmin}}</div>{{/vmmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xl}}<div><b>xl</b>: {{xl}}</div>{{/xl}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST4B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST4B_collapse" style="margin-left: 10px;">ExcIEEEST4B</a></legend>
                    <div id="{{id}}_ExcIEEEST4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kim'>kim: </label><div class='col-sm-8'><input id='{{id}}_kim' class='form-control' type='text'{{#kim}} value='{{kim}}'{{/kim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kir'>kir: </label><div class='col-sm-8'><input id='{{id}}_kir' class='form-control' type='text'{{#kir}} value='{{kir}}'{{/kir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpm'>kpm: </label><div class='col-sm-8'><input id='{{id}}_kpm' class='form-control' type='text'{{#kpm}} value='{{kpm}}'{{/kpm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpr'>kpr: </label><div class='col-sm-8'><input id='{{id}}_kpr' class='form-control' type='text'{{#kpr}} value='{{kpr}}'{{/kpr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetap'>thetap: </label><div class='col-sm-8'><input id='{{id}}_thetap' class='form-control' type='text'{{#thetap}} value='{{thetap}}'{{/thetap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vbmax'>vbmax: </label><div class='col-sm-8'><input id='{{id}}_vbmax' class='form-control' type='text'{{#vbmax}} value='{{vbmax}}'{{/vbmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmax'>vmmax: </label><div class='col-sm-8'><input id='{{id}}_vmmax' class='form-control' type='text'{{#vmmax}} value='{{vmmax}}'{{/vmmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmin'>vmmin: </label><div class='col-sm-8'><input id='{{id}}_vmmin' class='form-control' type='text'{{#vmmin}} value='{{vmmin}}'{{/vmmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xl'>xl: </label><div class='col-sm-8'><input id='{{id}}_xl' class='form-control' type='text'{{#xl}} value='{{xl}}'{{/xl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST4B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kim").value; if ("" != temp) obj.kim = temp;
                temp = document.getElementById (id + "_kir").value; if ("" != temp) obj.kir = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_kpm").value; if ("" != temp) obj.kpm = temp;
                temp = document.getElementById (id + "_kpr").value; if ("" != temp) obj.kpr = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_thetap").value; if ("" != temp) obj.thetap = temp;
                temp = document.getElementById (id + "_vbmax").value; if ("" != temp) obj.vbmax = temp;
                temp = document.getElementById (id + "_vmmax").value; if ("" != temp) obj.vmmax = temp;
                temp = document.getElementById (id + "_vmmin").value; if ("" != temp) obj.vmmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xl").value; if ("" != temp) obj.xl = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE ST7B static excitation system without stator current limiter (SCL) and current compensator (DROOP) inputs.
         *
         */
        class ExcST7B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST7B;
                if (null == bucket)
                   cim_data.ExcST7B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST7B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcST7B";
                base.parse_element (/<cim:ExcST7B.kh>([\s\S]*?)<\/cim:ExcST7B.kh>/g, obj, "kh", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.kia>([\s\S]*?)<\/cim:ExcST7B.kia>/g, obj, "kia", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.kl>([\s\S]*?)<\/cim:ExcST7B.kl>/g, obj, "kl", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.kpa>([\s\S]*?)<\/cim:ExcST7B.kpa>/g, obj, "kpa", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcST7B.oelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "oelin", sub, context);
                base.parse_element (/<cim:ExcST7B.tb>([\s\S]*?)<\/cim:ExcST7B.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.tc>([\s\S]*?)<\/cim:ExcST7B.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.tf>([\s\S]*?)<\/cim:ExcST7B.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.tg>([\s\S]*?)<\/cim:ExcST7B.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.tia>([\s\S]*?)<\/cim:ExcST7B.tia>/g, obj, "tia", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.ts>([\s\S]*?)<\/cim:ExcST7B.ts>/g, obj, "ts", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcST7B.uelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "uelin", sub, context);
                base.parse_element (/<cim:ExcST7B.vmax>([\s\S]*?)<\/cim:ExcST7B.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.vmin>([\s\S]*?)<\/cim:ExcST7B.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.vrmax>([\s\S]*?)<\/cim:ExcST7B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcST7B.vrmin>([\s\S]*?)<\/cim:ExcST7B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                var bucket = context.parsed.ExcST7B;
                if (null == bucket)
                   context.parsed.ExcST7B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST7B", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "kia", "kia",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "kl", "kl",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "kpa", "kpa",  base.from_string, fields);
                base.export_attribute (obj, "ExcST7B", "oelin", "oelin", fields);
                base.export_element (obj, "ExcST7B", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "tia", "tia",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "ts", "ts",  base.from_string, fields);
                base.export_attribute (obj, "ExcST7B", "uelin", "uelin", fields);
                base.export_element (obj, "ExcST7B", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "vmin", "vmin",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST7B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST7B_collapse" aria-expanded="true" aria-controls="ExcST7B_collapse" style="margin-left: 10px;">ExcST7B</a></legend>
                    <div id="ExcST7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#kia}}<div><b>kia</b>: {{kia}}</div>{{/kia}}
                    {{#kl}}<div><b>kl</b>: {{kl}}</div>{{/kl}}
                    {{#kpa}}<div><b>kpa</b>: {{kpa}}</div>{{/kpa}}
                    {{#oelin}}<div><b>oelin</b>: {{oelin}}</div>{{/oelin}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tia}}<div><b>tia</b>: {{tia}}</div>{{/tia}}
                    {{#ts}}<div><b>ts</b>: {{ts}}</div>{{/ts}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcST7BOELselectorKind = []; if (!obj.oelin) obj.ExcST7BOELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST7BOELselectorKind) obj.ExcST7BOELselectorKind.push ({ id: property, selected: obj.oelin && obj.oelin.endsWith ('.' + property)});
                obj.ExcST7BUELselectorKind = []; if (!obj.uelin) obj.ExcST7BUELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST7BUELselectorKind) obj.ExcST7BUELselectorKind.push ({ id: property, selected: obj.uelin && obj.uelin.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcST7BOELselectorKind;
                delete obj.ExcST7BUELselectorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST7B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST7B_collapse" style="margin-left: 10px;">ExcST7B</a></legend>
                    <div id="{{id}}_ExcST7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kia'>kia: </label><div class='col-sm-8'><input id='{{id}}_kia' class='form-control' type='text'{{#kia}} value='{{kia}}'{{/kia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl'>kl: </label><div class='col-sm-8'><input id='{{id}}_kl' class='form-control' type='text'{{#kl}} value='{{kl}}'{{/kl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpa'>kpa: </label><div class='col-sm-8'><input id='{{id}}_kpa' class='form-control' type='text'{{#kpa}} value='{{kpa}}'{{/kpa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oelin'>oelin: </label><div class='col-sm-8'><select id='{{id}}_oelin' class='form-control custom-select'>{{#ExcST7BOELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST7BOELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tia'>tia: </label><div class='col-sm-8'><input id='{{id}}_tia' class='form-control' type='text'{{#tia}} value='{{tia}}'{{/tia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts'>ts: </label><div class='col-sm-8'><input id='{{id}}_ts' class='form-control' type='text'{{#ts}} value='{{ts}}'{{/ts}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uelin'>uelin: </label><div class='col-sm-8'><select id='{{id}}_uelin' class='form-control custom-select'>{{#ExcST7BUELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST7BUELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST7B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_kia").value; if ("" != temp) obj.kia = temp;
                temp = document.getElementById (id + "_kl").value; if ("" != temp) obj.kl = temp;
                temp = document.getElementById (id + "_kpa").value; if ("" != temp) obj.kpa = temp;
                temp = document.getElementById (id + "_oelin").value; if ("" != temp) { temp = ExcST7BOELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.oelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST7BOELselectorKind." + temp; }
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tia").value; if ("" != temp) obj.tia = temp;
                temp = document.getElementById (id + "_ts").value; if ("" != temp) obj.ts = temp;
                temp = document.getElementById (id + "_uelin").value; if ("" != temp) { temp = ExcST7BUELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.uelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST7BUELselectorKind." + temp; }
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE DC1A direct current commutator exciter with speed input and without underexcitation limiters (UEL) inputs.
         *
         */
        class ExcDC1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcDC1A;
                if (null == bucket)
                   cim_data.ExcDC1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcDC1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcDC1A;
                if (null == bucket)
                   context.parsed.ExcDC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcDC1A", "edfmax", "edfmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcDC1A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcDC1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcDC1A_collapse" aria-expanded="true" aria-controls="ExcDC1A_collapse" style="margin-left: 10px;">ExcDC1A</a></legend>
                    <div id="ExcDC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#edfmax}}<div><b>edfmax</b>: {{edfmax}}</div>{{/edfmax}}
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcDC1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcDC1A_collapse" style="margin-left: 10px;">ExcDC1A</a></legend>
                    <div id="{{id}}_ExcDC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_edfmax'>edfmax: </label><div class='col-sm-8'><input id='{{id}}_edfmax' class='form-control' type='text'{{#edfmax}} value='{{edfmax}}'{{/edfmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcDC1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_edfmax").value; if ("" != temp) obj.edfmax = temp;
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE ST3A static excitation system with added speed multiplier.
         *
         */
        class ExcST3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST3A;
                if (null == bucket)
                   cim_data.ExcST3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcST3A;
                if (null == bucket)
                   context.parsed.ExcST3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST3A", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "kj", "kj",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "km", "km",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "thetap", "thetap",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "tm", "tm",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vbmax", "vbmax",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vgmax", "vgmax",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcST3A", "xl", "xl",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST3A_collapse" aria-expanded="true" aria-controls="ExcST3A_collapse" style="margin-left: 10px;">ExcST3A</a></legend>
                    <div id="ExcST3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kj}}<div><b>kj</b>: {{kj}}</div>{{/kj}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#thetap}}<div><b>thetap</b>: {{thetap}}</div>{{/thetap}}
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
                    {{#vbmax}}<div><b>vbmax</b>: {{vbmax}}</div>{{/vbmax}}
                    {{#vgmax}}<div><b>vgmax</b>: {{vgmax}}</div>{{/vgmax}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xl}}<div><b>xl</b>: {{xl}}</div>{{/xl}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST3A_collapse" style="margin-left: 10px;">ExcST3A</a></legend>
                    <div id="{{id}}_ExcST3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kj'>kj: </label><div class='col-sm-8'><input id='{{id}}_kj' class='form-control' type='text'{{#kj}} value='{{kj}}'{{/kj}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_km'>km: </label><div class='col-sm-8'><input id='{{id}}_km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetap'>thetap: </label><div class='col-sm-8'><input id='{{id}}_thetap' class='form-control' type='text'{{#thetap}} value='{{thetap}}'{{/thetap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tm'>tm: </label><div class='col-sm-8'><input id='{{id}}_tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vbmax'>vbmax: </label><div class='col-sm-8'><input id='{{id}}_vbmax' class='form-control' type='text'{{#vbmax}} value='{{vbmax}}'{{/vbmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vgmax'>vgmax: </label><div class='col-sm-8'><input id='{{id}}_vgmax' class='form-control' type='text'{{#vgmax}} value='{{vgmax}}'{{/vgmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xl'>xl: </label><div class='col-sm-8'><input id='{{id}}_xl' class='form-control' type='text'{{#xl}} value='{{xl}}'{{/xl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kj").value; if ("" != temp) obj.kj = temp;
                temp = document.getElementById (id + "_km").value; if ("" != temp) obj.km = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_ks1").value; if ("" != temp) obj.ks1 = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_thetap").value; if ("" != temp) obj.thetap = temp;
                temp = document.getElementById (id + "_tm").value; if ("" != temp) obj.tm = temp;
                temp = document.getElementById (id + "_vbmax").value; if ("" != temp) obj.vbmax = temp;
                temp = document.getElementById (id + "_vgmax").value; if ("" != temp) obj.vgmax = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xl").value; if ("" != temp) obj.xl = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC1A model.
         *
         * The model represents the field-controlled alternator-rectifier excitation systems designated Type AC1A. These excitation systems consist of an alternator main exciter with non-controlled rectifiers.
         *
         */
        class ExcIEEEAC1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC1A;
                if (null == bucket)
                   cim_data.ExcIEEEAC1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC1A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC1A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC1A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC1A_collapse" style="margin-left: 10px;">ExcIEEEAC1A</a></legend>
                    <div id="ExcIEEEAC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC1A_collapse" style="margin-left: 10px;">ExcIEEEAC1A</a></legend>
                    <div id="{{id}}_ExcIEEEAC1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC5A alternator-supplied rectifier excitation system with different minimum controller output.
         *
         */
        class ExcAC5A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC5A;
                if (null == bucket)
                   cim_data.ExcAC5A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC5A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC5A;
                if (null == bucket)
                   context.parsed.ExcAC5A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC5A", "a", "a",  base.from_float, fields);
                base.export_element (obj, "ExcAC5A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcAC5A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcAC5A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "tf2", "tf2",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "tf3", "tf3",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC5A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC5A_collapse" aria-expanded="true" aria-controls="ExcAC5A_collapse" style="margin-left: 10px;">ExcAC5A</a></legend>
                    <div id="ExcAC5A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#a}}<div><b>a</b>: {{a}}</div>{{/a}}
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#tf2}}<div><b>tf2</b>: {{tf2}}</div>{{/tf2}}
                    {{#tf3}}<div><b>tf3</b>: {{tf3}}</div>{{/tf3}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC5A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC5A_collapse" style="margin-left: 10px;">ExcAC5A</a></legend>
                    <div id="{{id}}_ExcAC5A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a'>a: </label><div class='col-sm-8'><input id='{{id}}_a' class='form-control' type='text'{{#a}} value='{{a}}'{{/a}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf2'>tf2: </label><div class='col-sm-8'><input id='{{id}}_tf2' class='form-control' type='text'{{#tf2}} value='{{tf2}}'{{/tf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf3'>tf3: </label><div class='col-sm-8'><input id='{{id}}_tf3' class='form-control' type='text'{{#tf3}} value='{{tf3}}'{{/tf3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC5A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a").value; if ("" != temp) obj.a = temp;
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_tf2").value; if ("" != temp) obj.tf2 = temp;
                temp = document.getElementById (id + "_tf3").value; if ("" != temp) obj.tf3 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Hungarian Excitation System Model, with built-in voltage transducer.
         *
         */
        class ExcHU extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcHU;
                if (null == bucket)
                   cim_data.ExcHU = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcHU[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcHU;
                if (null == bucket)
                   context.parsed.ExcHU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcHU", "ae", "ae",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "ai", "ai",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "atr", "atr",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "emax", "emax",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "emin", "emin",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "imax", "imax",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "imin", "imin",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "ke", "ke",  base.from_float, fields);
                base.export_element (obj, "ExcHU", "ki", "ki",  base.from_float, fields);
                base.export_element (obj, "ExcHU", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "ti", "ti",  base.from_string, fields);
                base.export_element (obj, "ExcHU", "tr", "tr",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcHU_collapse" aria-expanded="true" aria-controls="ExcHU_collapse" style="margin-left: 10px;">ExcHU</a></legend>
                    <div id="ExcHU_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ae}}<div><b>ae</b>: {{ae}}</div>{{/ae}}
                    {{#ai}}<div><b>ai</b>: {{ai}}</div>{{/ai}}
                    {{#atr}}<div><b>atr</b>: {{atr}}</div>{{/atr}}
                    {{#emax}}<div><b>emax</b>: {{emax}}</div>{{/emax}}
                    {{#emin}}<div><b>emin</b>: {{emin}}</div>{{/emin}}
                    {{#imax}}<div><b>imax</b>: {{imax}}</div>{{/imax}}
                    {{#imin}}<div><b>imin</b>: {{imin}}</div>{{/imin}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#ti}}<div><b>ti</b>: {{ti}}</div>{{/ti}}
                    {{#tr}}<div><b>tr</b>: {{tr}}</div>{{/tr}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcHU_collapse" aria-expanded="true" aria-controls="{{id}}_ExcHU_collapse" style="margin-left: 10px;">ExcHU</a></legend>
                    <div id="{{id}}_ExcHU_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ae'>ae: </label><div class='col-sm-8'><input id='{{id}}_ae' class='form-control' type='text'{{#ae}} value='{{ae}}'{{/ae}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ai'>ai: </label><div class='col-sm-8'><input id='{{id}}_ai' class='form-control' type='text'{{#ai}} value='{{ai}}'{{/ai}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_atr'>atr: </label><div class='col-sm-8'><input id='{{id}}_atr' class='form-control' type='text'{{#atr}} value='{{atr}}'{{/atr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emax'>emax: </label><div class='col-sm-8'><input id='{{id}}_emax' class='form-control' type='text'{{#emax}} value='{{emax}}'{{/emax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_emin'>emin: </label><div class='col-sm-8'><input id='{{id}}_emin' class='form-control' type='text'{{#emin}} value='{{emin}}'{{/emin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_imax'>imax: </label><div class='col-sm-8'><input id='{{id}}_imax' class='form-control' type='text'{{#imax}} value='{{imax}}'{{/imax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_imin'>imin: </label><div class='col-sm-8'><input id='{{id}}_imin' class='form-control' type='text'{{#imin}} value='{{imin}}'{{/imin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ti'>ti: </label><div class='col-sm-8'><input id='{{id}}_ti' class='form-control' type='text'{{#ti}} value='{{ti}}'{{/ti}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tr'>tr: </label><div class='col-sm-8'><input id='{{id}}_tr' class='form-control' type='text'{{#tr}} value='{{tr}}'{{/tr}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcHU" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ae").value; if ("" != temp) obj.ae = temp;
                temp = document.getElementById (id + "_ai").value; if ("" != temp) obj.ai = temp;
                temp = document.getElementById (id + "_atr").value; if ("" != temp) obj.atr = temp;
                temp = document.getElementById (id + "_emax").value; if ("" != temp) obj.emax = temp;
                temp = document.getElementById (id + "_emin").value; if ("" != temp) obj.emin = temp;
                temp = document.getElementById (id + "_imax").value; if ("" != temp) obj.imax = temp;
                temp = document.getElementById (id + "_imin").value; if ("" != temp) obj.imin = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_ti").value; if ("" != temp) obj.ti = temp;
                temp = document.getElementById (id + "_tr").value; if ("" != temp) obj.tr = temp;

                return (obj);
            }
        }

        /**
         * IVO excitation system.
         *
         */
        class ExcAVR7 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR7;
                if (null == bucket)
                   cim_data.ExcAVR7 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR7[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAVR7;
                if (null == bucket)
                   context.parsed.ExcAVR7 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR7", "a1", "a1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "a2", "a2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "a3", "a3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "a4", "a4",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "a5", "a5",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "a6", "a6",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "k1", "k1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "k3", "k3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "k5", "k5",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmax1", "vmax1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmax3", "vmax3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmax5", "vmax5",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmin1", "vmin1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmin3", "vmin3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR7", "vmin5", "vmin5",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR7_collapse" aria-expanded="true" aria-controls="ExcAVR7_collapse" style="margin-left: 10px;">ExcAVR7</a></legend>
                    <div id="ExcAVR7_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#a1}}<div><b>a1</b>: {{a1}}</div>{{/a1}}
                    {{#a2}}<div><b>a2</b>: {{a2}}</div>{{/a2}}
                    {{#a3}}<div><b>a3</b>: {{a3}}</div>{{/a3}}
                    {{#a4}}<div><b>a4</b>: {{a4}}</div>{{/a4}}
                    {{#a5}}<div><b>a5</b>: {{a5}}</div>{{/a5}}
                    {{#a6}}<div><b>a6</b>: {{a6}}</div>{{/a6}}
                    {{#k1}}<div><b>k1</b>: {{k1}}</div>{{/k1}}
                    {{#k3}}<div><b>k3</b>: {{k3}}</div>{{/k3}}
                    {{#k5}}<div><b>k5</b>: {{k5}}</div>{{/k5}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#vmax1}}<div><b>vmax1</b>: {{vmax1}}</div>{{/vmax1}}
                    {{#vmax3}}<div><b>vmax3</b>: {{vmax3}}</div>{{/vmax3}}
                    {{#vmax5}}<div><b>vmax5</b>: {{vmax5}}</div>{{/vmax5}}
                    {{#vmin1}}<div><b>vmin1</b>: {{vmin1}}</div>{{/vmin1}}
                    {{#vmin3}}<div><b>vmin3</b>: {{vmin3}}</div>{{/vmin3}}
                    {{#vmin5}}<div><b>vmin5</b>: {{vmin5}}</div>{{/vmin5}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR7_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR7_collapse" style="margin-left: 10px;">ExcAVR7</a></legend>
                    <div id="{{id}}_ExcAVR7_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a1'>a1: </label><div class='col-sm-8'><input id='{{id}}_a1' class='form-control' type='text'{{#a1}} value='{{a1}}'{{/a1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a2'>a2: </label><div class='col-sm-8'><input id='{{id}}_a2' class='form-control' type='text'{{#a2}} value='{{a2}}'{{/a2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a3'>a3: </label><div class='col-sm-8'><input id='{{id}}_a3' class='form-control' type='text'{{#a3}} value='{{a3}}'{{/a3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a4'>a4: </label><div class='col-sm-8'><input id='{{id}}_a4' class='form-control' type='text'{{#a4}} value='{{a4}}'{{/a4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a5'>a5: </label><div class='col-sm-8'><input id='{{id}}_a5' class='form-control' type='text'{{#a5}} value='{{a5}}'{{/a5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_a6'>a6: </label><div class='col-sm-8'><input id='{{id}}_a6' class='form-control' type='text'{{#a6}} value='{{a6}}'{{/a6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k1'>k1: </label><div class='col-sm-8'><input id='{{id}}_k1' class='form-control' type='text'{{#k1}} value='{{k1}}'{{/k1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k3'>k3: </label><div class='col-sm-8'><input id='{{id}}_k3' class='form-control' type='text'{{#k3}} value='{{k3}}'{{/k3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k5'>k5: </label><div class='col-sm-8'><input id='{{id}}_k5' class='form-control' type='text'{{#k5}} value='{{k5}}'{{/k5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax1'>vmax1: </label><div class='col-sm-8'><input id='{{id}}_vmax1' class='form-control' type='text'{{#vmax1}} value='{{vmax1}}'{{/vmax1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax3'>vmax3: </label><div class='col-sm-8'><input id='{{id}}_vmax3' class='form-control' type='text'{{#vmax3}} value='{{vmax3}}'{{/vmax3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax5'>vmax5: </label><div class='col-sm-8'><input id='{{id}}_vmax5' class='form-control' type='text'{{#vmax5}} value='{{vmax5}}'{{/vmax5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin1'>vmin1: </label><div class='col-sm-8'><input id='{{id}}_vmin1' class='form-control' type='text'{{#vmin1}} value='{{vmin1}}'{{/vmin1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin3'>vmin3: </label><div class='col-sm-8'><input id='{{id}}_vmin3' class='form-control' type='text'{{#vmin3}} value='{{vmin3}}'{{/vmin3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin5'>vmin5: </label><div class='col-sm-8'><input id='{{id}}_vmin5' class='form-control' type='text'{{#vmin5}} value='{{vmin5}}'{{/vmin5}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR7" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_a1").value; if ("" != temp) obj.a1 = temp;
                temp = document.getElementById (id + "_a2").value; if ("" != temp) obj.a2 = temp;
                temp = document.getElementById (id + "_a3").value; if ("" != temp) obj.a3 = temp;
                temp = document.getElementById (id + "_a4").value; if ("" != temp) obj.a4 = temp;
                temp = document.getElementById (id + "_a5").value; if ("" != temp) obj.a5 = temp;
                temp = document.getElementById (id + "_a6").value; if ("" != temp) obj.a6 = temp;
                temp = document.getElementById (id + "_k1").value; if ("" != temp) obj.k1 = temp;
                temp = document.getElementById (id + "_k3").value; if ("" != temp) obj.k3 = temp;
                temp = document.getElementById (id + "_k5").value; if ("" != temp) obj.k5 = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_vmax1").value; if ("" != temp) obj.vmax1 = temp;
                temp = document.getElementById (id + "_vmax3").value; if ("" != temp) obj.vmax3 = temp;
                temp = document.getElementById (id + "_vmax5").value; if ("" != temp) obj.vmax5 = temp;
                temp = document.getElementById (id + "_vmin1").value; if ("" != temp) obj.vmin1 = temp;
                temp = document.getElementById (id + "_vmin3").value; if ("" != temp) obj.vmin3 = temp;
                temp = document.getElementById (id + "_vmin5").value; if ("" != temp) obj.vmin5 = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST7B model.
         *
         * This model is representative of static potential-source excitation systems. In this system, the AVR consists of a PI voltage regulator. A phase lead-lag filter in series allows introduction of a derivative function, typically used with brushless excitation systems. In that case, the regulator is of the PID type. In addition, the terminal voltage channel includes a phase lead-lag filter.  The AVR includes the appropriate inputs on its reference for overexcitation limiter (OEL1), underexcitation limiter (UEL), stator current limiter (SCL), and current compensator (DROOP). All these limitations, when they work at voltage reference level, keep the PSS (VS signal from Type PSS1A, PSS2A, or PSS2B) in operation. However, the UEL limitation can also be transferred to the high value (HV) gate acting on the output signal. In addition, the output signal passes through a low value (LV) gate for a ceiling overexcitation limiter (OEL2).
         *
         */
        class ExcIEEEST7B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST7B;
                if (null == bucket)
                   cim_data.ExcIEEEST7B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST7B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcIEEEST7B";
                base.parse_element (/<cim:ExcIEEEST7B.kh>([\s\S]*?)<\/cim:ExcIEEEST7B.kh>/g, obj, "kh", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.kia>([\s\S]*?)<\/cim:ExcIEEEST7B.kia>/g, obj, "kia", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.kl>([\s\S]*?)<\/cim:ExcIEEEST7B.kl>/g, obj, "kl", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.kpa>([\s\S]*?)<\/cim:ExcIEEEST7B.kpa>/g, obj, "kpa", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcIEEEST7B.oelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "oelin", sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.tb>([\s\S]*?)<\/cim:ExcIEEEST7B.tb>/g, obj, "tb", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.tc>([\s\S]*?)<\/cim:ExcIEEEST7B.tc>/g, obj, "tc", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.tf>([\s\S]*?)<\/cim:ExcIEEEST7B.tf>/g, obj, "tf", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.tg>([\s\S]*?)<\/cim:ExcIEEEST7B.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.tia>([\s\S]*?)<\/cim:ExcIEEEST7B.tia>/g, obj, "tia", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcIEEEST7B.uelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "uelin", sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.vmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vmax>/g, obj, "vmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.vmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vmin>/g, obj, "vmin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST7B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST7B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                var bucket = context.parsed.ExcIEEEST7B;
                if (null == bucket)
                   context.parsed.ExcIEEEST7B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST7B", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "kia", "kia",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "kl", "kl",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "kpa", "kpa",  base.from_string, fields);
                base.export_attribute (obj, "ExcIEEEST7B", "oelin", "oelin", fields);
                base.export_element (obj, "ExcIEEEST7B", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "tia", "tia",  base.from_string, fields);
                base.export_attribute (obj, "ExcIEEEST7B", "uelin", "uelin", fields);
                base.export_element (obj, "ExcIEEEST7B", "vmax", "vmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "vmin", "vmin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST7B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST7B_collapse" aria-expanded="true" aria-controls="ExcIEEEST7B_collapse" style="margin-left: 10px;">ExcIEEEST7B</a></legend>
                    <div id="ExcIEEEST7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#kia}}<div><b>kia</b>: {{kia}}</div>{{/kia}}
                    {{#kl}}<div><b>kl</b>: {{kl}}</div>{{/kl}}
                    {{#kpa}}<div><b>kpa</b>: {{kpa}}</div>{{/kpa}}
                    {{#oelin}}<div><b>oelin</b>: {{oelin}}</div>{{/oelin}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#tia}}<div><b>tia</b>: {{tia}}</div>{{/tia}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vmax}}<div><b>vmax</b>: {{vmax}}</div>{{/vmax}}
                    {{#vmin}}<div><b>vmin</b>: {{vmin}}</div>{{/vmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcST7BOELselectorKind = []; if (!obj.oelin) obj.ExcST7BOELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST7BOELselectorKind) obj.ExcST7BOELselectorKind.push ({ id: property, selected: obj.oelin && obj.oelin.endsWith ('.' + property)});
                obj.ExcST7BUELselectorKind = []; if (!obj.uelin) obj.ExcST7BUELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST7BUELselectorKind) obj.ExcST7BUELselectorKind.push ({ id: property, selected: obj.uelin && obj.uelin.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcST7BOELselectorKind;
                delete obj.ExcST7BUELselectorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST7B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST7B_collapse" style="margin-left: 10px;">ExcIEEEST7B</a></legend>
                    <div id="{{id}}_ExcIEEEST7B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kia'>kia: </label><div class='col-sm-8'><input id='{{id}}_kia' class='form-control' type='text'{{#kia}} value='{{kia}}'{{/kia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl'>kl: </label><div class='col-sm-8'><input id='{{id}}_kl' class='form-control' type='text'{{#kl}} value='{{kl}}'{{/kl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpa'>kpa: </label><div class='col-sm-8'><input id='{{id}}_kpa' class='form-control' type='text'{{#kpa}} value='{{kpa}}'{{/kpa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oelin'>oelin: </label><div class='col-sm-8'><select id='{{id}}_oelin' class='form-control custom-select'>{{#ExcST7BOELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST7BOELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tia'>tia: </label><div class='col-sm-8'><input id='{{id}}_tia' class='form-control' type='text'{{#tia}} value='{{tia}}'{{/tia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uelin'>uelin: </label><div class='col-sm-8'><select id='{{id}}_uelin' class='form-control custom-select'>{{#ExcST7BUELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST7BUELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmax'>vmax: </label><div class='col-sm-8'><input id='{{id}}_vmax' class='form-control' type='text'{{#vmax}} value='{{vmax}}'{{/vmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmin'>vmin: </label><div class='col-sm-8'><input id='{{id}}_vmin' class='form-control' type='text'{{#vmin}} value='{{vmin}}'{{/vmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST7B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_kia").value; if ("" != temp) obj.kia = temp;
                temp = document.getElementById (id + "_kl").value; if ("" != temp) obj.kl = temp;
                temp = document.getElementById (id + "_kpa").value; if ("" != temp) obj.kpa = temp;
                temp = document.getElementById (id + "_oelin").value; if ("" != temp) { temp = ExcST7BOELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.oelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST7BOELselectorKind." + temp; }
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_tia").value; if ("" != temp) obj.tia = temp;
                temp = document.getElementById (id + "_uelin").value; if ("" != temp) { temp = ExcST7BUELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.uelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST7BUELselectorKind." + temp; }
                temp = document.getElementById (id + "_vmax").value; if ("" != temp) obj.vmax = temp;
                temp = document.getElementById (id + "_vmin").value; if ("" != temp) obj.vmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type DC2A model.
         *
         * This model represents represent field-controlled dc commutator exciters with continuously acting voltage regulators having supplies obtained from the generator or auxiliary bus.  It differs from the Type DC1A model only in the voltage regulator output limits, which are now proportional to terminal voltage <b>V</b><b><sub>T</sub></b>.
         *
         */
        class ExcIEEEDC2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEDC2A;
                if (null == bucket)
                   cim_data.ExcIEEEDC2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEDC2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEDC2A;
                if (null == bucket)
                   context.parsed.ExcIEEEDC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEDC2A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "exclim", "exclim",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC2A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEDC2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "uelin", "uelin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEDC2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEDC2A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEDC2A_collapse" aria-expanded="true" aria-controls="ExcIEEEDC2A_collapse" style="margin-left: 10px;">ExcIEEEDC2A</a></legend>
                    <div id="ExcIEEEDC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEDC2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEDC2A_collapse" style="margin-left: 10px;">ExcIEEEDC2A</a></legend>
                    <div id="{{id}}_ExcIEEEDC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_exclim'>exclim: </label><div class='col-sm-8'><input id='{{id}}_exclim' class='form-control' type='text'{{#exclim}} value='{{exclim}}'{{/exclim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uelin'>uelin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uelin' class='form-check-input' type='checkbox'{{#uelin}} checked{{/uelin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEDC2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_exclim").value; if ("" != temp) obj.exclim = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").checked; if (temp) obj.uelin = true;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Italian excitation system.
         *
         * It represents exciter dynamo and electric regulator.
         *
         */
        class ExcAVR3 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR3;
                if (null == bucket)
                   cim_data.ExcAVR3 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR3[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAVR3;
                if (null == bucket)
                   context.parsed.ExcAVR3 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR3", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "e2", "e2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "ka", "ka",  base.from_float, fields);
                base.export_element (obj, "ExcAVR3", "se1", "se1",  base.from_float, fields);
                base.export_element (obj, "ExcAVR3", "se2", "se2",  base.from_float, fields);
                base.export_element (obj, "ExcAVR3", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "vrmn", "vrmn",  base.from_string, fields);
                base.export_element (obj, "ExcAVR3", "vrmx", "vrmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR3_collapse" aria-expanded="true" aria-controls="ExcAVR3_collapse" style="margin-left: 10px;">ExcAVR3</a></legend>
                    <div id="ExcAVR3_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#se1}}<div><b>se1</b>: {{se1}}</div>{{/se1}}
                    {{#se2}}<div><b>se2</b>: {{se2}}</div>{{/se2}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#vrmn}}<div><b>vrmn</b>: {{vrmn}}</div>{{/vrmn}}
                    {{#vrmx}}<div><b>vrmx</b>: {{vrmx}}</div>{{/vrmx}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR3_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR3_collapse" style="margin-left: 10px;">ExcAVR3</a></legend>
                    <div id="{{id}}_ExcAVR3_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se1'>se1: </label><div class='col-sm-8'><input id='{{id}}_se1' class='form-control' type='text'{{#se1}} value='{{se1}}'{{/se1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se2'>se2: </label><div class='col-sm-8'><input id='{{id}}_se2' class='form-control' type='text'{{#se2}} value='{{se2}}'{{/se2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmn'>vrmn: </label><div class='col-sm-8'><input id='{{id}}_vrmn' class='form-control' type='text'{{#vrmn}} value='{{vrmn}}'{{/vrmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmx'>vrmx: </label><div class='col-sm-8'><input id='{{id}}_vrmx' class='form-control' type='text'{{#vrmx}} value='{{vrmx}}'{{/vrmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR3" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_se1").value; if ("" != temp) obj.se1 = temp;
                temp = document.getElementById (id + "_se2").value; if ("" != temp) obj.se2 = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_vrmn").value; if ("" != temp) obj.vrmn = temp;
                temp = document.getElementById (id + "_vrmx").value; if ("" != temp) obj.vrmx = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC4A model.
         *
         * The model represents type AC4A alternator-supplied controlled-rectifier excitation system which is quite different from the other type ac systems. This high initial response excitation system utilizes a full thyristor bridge in the exciter output circuit.  The voltage regulator controls the firing of the thyristor bridges. The exciter alternator uses an independent voltage regulator to control its output voltage to a constant value. These effects are not modeled; however, transient loading effects on the exciter alternator are included.
         *
         */
        class ExcIEEEAC4A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC4A;
                if (null == bucket)
                   cim_data.ExcIEEEAC4A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC4A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC4A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC4A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC4A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC4A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC4A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC4A_collapse" style="margin-left: 10px;">ExcIEEEAC4A</a></legend>
                    <div id="ExcIEEEAC4A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC4A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC4A_collapse" style="margin-left: 10px;">ExcIEEEAC4A</a></legend>
                    <div id="{{id}}_ExcIEEEAC4A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC4A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC2A alternator-supplied rectifier excitation system with different field current limit.
         *
         */
        class ExcAC2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC2A;
                if (null == bucket)
                   cim_data.ExcAC2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC2A;
                if (null == bucket)
                   context.parsed.ExcAC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC2A", "hvgate", "hvgate",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kb", "kb",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kb1", "kb1",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kl", "kl",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "kl1", "kl1",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "lvgate", "lvgate",  base.from_boolean, fields);
                base.export_element (obj, "ExcAC2A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcAC2A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcAC2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vlr", "vlr",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC2A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC2A_collapse" aria-expanded="true" aria-controls="ExcAC2A_collapse" style="margin-left: 10px;">ExcAC2A</a></legend>
                    <div id="ExcAC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#hvgate}}<div><b>hvgate</b>: {{hvgate}}</div>{{/hvgate}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kb}}<div><b>kb</b>: {{kb}}</div>{{/kb}}
                    {{#kb1}}<div><b>kb1</b>: {{kb1}}</div>{{/kb1}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#kl}}<div><b>kl</b>: {{kl}}</div>{{/kl}}
                    {{#kl1}}<div><b>kl1</b>: {{kl1}}</div>{{/kl1}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#lvgate}}<div><b>lvgate</b>: {{lvgate}}</div>{{/lvgate}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vlr}}<div><b>vlr</b>: {{vlr}}</div>{{/vlr}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC2A_collapse" style="margin-left: 10px;">ExcAC2A</a></legend>
                    <div id="{{id}}_ExcAC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_hvgate'>hvgate: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_hvgate' class='form-check-input' type='checkbox'{{#hvgate}} checked{{/hvgate}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kb'>kb: </label><div class='col-sm-8'><input id='{{id}}_kb' class='form-control' type='text'{{#kb}} value='{{kb}}'{{/kb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kb1'>kb1: </label><div class='col-sm-8'><input id='{{id}}_kb1' class='form-control' type='text'{{#kb1}} value='{{kb1}}'{{/kb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl'>kl: </label><div class='col-sm-8'><input id='{{id}}_kl' class='form-control' type='text'{{#kl}} value='{{kl}}'{{/kl}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kl1'>kl1: </label><div class='col-sm-8'><input id='{{id}}_kl1' class='form-control' type='text'{{#kl1}} value='{{kl1}}'{{/kl1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_lvgate'>lvgate: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_lvgate' class='form-check-input' type='checkbox'{{#lvgate}} checked{{/lvgate}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vlr'>vlr: </label><div class='col-sm-8'><input id='{{id}}_vlr' class='form-control' type='text'{{#vlr}} value='{{vlr}}'{{/vlr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_hvgate").checked; if (temp) obj.hvgate = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kb").value; if ("" != temp) obj.kb = temp;
                temp = document.getElementById (id + "_kb1").value; if ("" != temp) obj.kb1 = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_kl").value; if ("" != temp) obj.kl = temp;
                temp = document.getElementById (id + "_kl1").value; if ("" != temp) obj.kl1 = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_lvgate").checked; if (temp) obj.lvgate = true;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vlr").value; if ("" != temp) obj.vlr = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * This is modified old IEEE type 3 excitation system.
         *
         */
        class ExcDC3A1 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcDC3A1;
                if (null == bucket)
                   cim_data.ExcDC3A1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcDC3A1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcDC3A1;
                if (null == bucket)
                   context.parsed.ExcDC3A1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcDC3A1", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC3A1", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "vb1max", "vb1max",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "vblim", "vblim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC3A1", "vbmax", "vbmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC3A1", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcDC3A1_collapse" aria-expanded="true" aria-controls="ExcDC3A1_collapse" style="margin-left: 10px;">ExcDC3A1</a></legend>
                    <div id="ExcDC3A1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vb1max}}<div><b>vb1max</b>: {{vb1max}}</div>{{/vb1max}}
                    {{#vblim}}<div><b>vblim</b>: {{vblim}}</div>{{/vblim}}
                    {{#vbmax}}<div><b>vbmax</b>: {{vbmax}}</div>{{/vbmax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcDC3A1_collapse" aria-expanded="true" aria-controls="{{id}}_ExcDC3A1_collapse" style="margin-left: 10px;">ExcDC3A1</a></legend>
                    <div id="{{id}}_ExcDC3A1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vb1max'>vb1max: </label><div class='col-sm-8'><input id='{{id}}_vb1max' class='form-control' type='text'{{#vb1max}} value='{{vb1max}}'{{/vb1max}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vblim'>vblim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vblim' class='form-check-input' type='checkbox'{{#vblim}} checked{{/vblim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vbmax'>vbmax: </label><div class='col-sm-8'><input id='{{id}}_vbmax' class='form-control' type='text'{{#vbmax}} value='{{vbmax}}'{{/vbmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcDC3A1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vb1max").value; if ("" != temp) obj.vb1max = temp;
                temp = document.getElementById (id + "_vblim").checked; if (temp) obj.vblim = true;
                temp = document.getElementById (id + "_vbmax").value; if ("" != temp) obj.vbmax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST1A model.
         *
         * This model represents systems in which excitation power is supplied through a transformer from the generator terminals (or the unit�s auxiliary bus) and is regulated by a controlled rectifier.  The maximum exciter voltage available from such systems is directly related to the generator terminal voltage.
         *
         */
        class ExcIEEEST1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST1A;
                if (null == bucket)
                   cim_data.ExcIEEEST1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                base.parse_attribute (/<cim:ExcIEEEST1A.uelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "uelin", sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vamax>([\s\S]*?)<\/cim:ExcIEEEST1A.vamax>/g, obj, "vamax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vamin>([\s\S]*?)<\/cim:ExcIEEEST1A.vamin>/g, obj, "vamin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vimax>([\s\S]*?)<\/cim:ExcIEEEST1A.vimax>/g, obj, "vimax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vimin>([\s\S]*?)<\/cim:ExcIEEEST1A.vimin>/g, obj, "vimin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vrmax>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST1A.vrmin>([\s\S]*?)<\/cim:ExcIEEEST1A.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                var bucket = context.parsed.ExcIEEEST1A;
                if (null == bucket)
                   context.parsed.ExcIEEEST1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST1A", "ilr", "ilr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "klr", "klr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "pssin", "pssin",  base.from_boolean, fields);
                base.export_element (obj, "ExcIEEEST1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "tb1", "tb1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "tc1", "tc1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "tf", "tf",  base.from_string, fields);
                base.export_attribute (obj, "ExcIEEEST1A", "uelin", "uelin", fields);
                base.export_element (obj, "ExcIEEEST1A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST1A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST1A_collapse" aria-expanded="true" aria-controls="ExcIEEEST1A_collapse" style="margin-left: 10px;">ExcIEEEST1A</a></legend>
                    <div id="ExcIEEEST1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ilr}}<div><b>ilr</b>: {{ilr}}</div>{{/ilr}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#klr}}<div><b>klr</b>: {{klr}}</div>{{/klr}}
                    {{#pssin}}<div><b>pssin</b>: {{pssin}}</div>{{/pssin}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tb1}}<div><b>tb1</b>: {{tb1}}</div>{{/tb1}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tc1}}<div><b>tc1</b>: {{tc1}}</div>{{/tc1}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#uelin}}<div><b>uelin</b>: {{uelin}}</div>{{/uelin}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcIEEEST1AUELselectorKind = []; if (!obj.uelin) obj.ExcIEEEST1AUELselectorKind.push ({ id: '', selected: true}); for (var property in ExcIEEEST1AUELselectorKind) obj.ExcIEEEST1AUELselectorKind.push ({ id: property, selected: obj.uelin && obj.uelin.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcIEEEST1AUELselectorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST1A_collapse" style="margin-left: 10px;">ExcIEEEST1A</a></legend>
                    <div id="{{id}}_ExcIEEEST1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ilr'>ilr: </label><div class='col-sm-8'><input id='{{id}}_ilr' class='form-control' type='text'{{#ilr}} value='{{ilr}}'{{/ilr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klr'>klr: </label><div class='col-sm-8'><input id='{{id}}_klr' class='form-control' type='text'{{#klr}} value='{{klr}}'{{/klr}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_pssin'>pssin: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_pssin' class='form-check-input' type='checkbox'{{#pssin}} checked{{/pssin}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb1'>tb1: </label><div class='col-sm-8'><input id='{{id}}_tb1' class='form-control' type='text'{{#tb1}} value='{{tb1}}'{{/tb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc1'>tc1: </label><div class='col-sm-8'><input id='{{id}}_tc1' class='form-control' type='text'{{#tc1}} value='{{tc1}}'{{/tc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_uelin'>uelin: </label><div class='col-sm-8'><select id='{{id}}_uelin' class='form-control custom-select'>{{#ExcIEEEST1AUELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcIEEEST1AUELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ilr").value; if ("" != temp) obj.ilr = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_klr").value; if ("" != temp) obj.klr = temp;
                temp = document.getElementById (id + "_pssin").checked; if (temp) obj.pssin = true;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tb1").value; if ("" != temp) obj.tb1 = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tc1").value; if ("" != temp) obj.tc1 = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_uelin").value; if ("" != temp) { temp = ExcIEEEST1AUELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.uelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcIEEEST1AUELselectorKind." + temp; }
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Transformer fed static excitation system (static with ABB regulator).
         *
         * This model represents a static excitation system in which a gated thyristor bridge fed by a transformer at the main generator terminals feeds the main generator directly.
         *
         */
        class ExcBBC extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcBBC;
                if (null == bucket)
                   cim_data.ExcBBC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcBBC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcBBC;
                if (null == bucket)
                   context.parsed.ExcBBC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcBBC", "efdmax", "efdmax",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "efdmin", "efdmin",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "k", "k",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "switch", "switch",  base.from_boolean, fields);
                base.export_element (obj, "ExcBBC", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcBBC", "xe", "xe",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcBBC_collapse" aria-expanded="true" aria-controls="ExcBBC_collapse" style="margin-left: 10px;">ExcBBC</a></legend>
                    <div id="ExcBBC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdmax}}<div><b>efdmax</b>: {{efdmax}}</div>{{/efdmax}}
                    {{#efdmin}}<div><b>efdmin</b>: {{efdmin}}</div>{{/efdmin}}
                    {{#k}}<div><b>k</b>: {{k}}</div>{{/k}}
                    {{#switch}}<div><b>switch</b>: {{switch}}</div>{{/switch}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xe}}<div><b>xe</b>: {{xe}}</div>{{/xe}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcBBC_collapse" aria-expanded="true" aria-controls="{{id}}_ExcBBC_collapse" style="margin-left: 10px;">ExcBBC</a></legend>
                    <div id="{{id}}_ExcBBC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmax'>efdmax: </label><div class='col-sm-8'><input id='{{id}}_efdmax' class='form-control' type='text'{{#efdmax}} value='{{efdmax}}'{{/efdmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdmin'>efdmin: </label><div class='col-sm-8'><input id='{{id}}_efdmin' class='form-control' type='text'{{#efdmin}} value='{{efdmin}}'{{/efdmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_k'>k: </label><div class='col-sm-8'><input id='{{id}}_k' class='form-control' type='text'{{#k}} value='{{k}}'{{/k}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_switch'>switch: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_switch' class='form-check-input' type='checkbox'{{#switch}} checked{{/switch}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xe'>xe: </label><div class='col-sm-8'><input id='{{id}}_xe' class='form-control' type='text'{{#xe}} value='{{xe}}'{{/xe}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcBBC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdmax").value; if ("" != temp) obj.efdmax = temp;
                temp = document.getElementById (id + "_efdmin").value; if ("" != temp) obj.efdmin = temp;
                temp = document.getElementById (id + "_k").value; if ("" != temp) obj.k = temp;
                temp = document.getElementById (id + "_switch").checked; if (temp) obj.switch = true;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xe").value; if ("" != temp) obj.xe = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE ST4B static excitation system with maximum inner loop feedback gain <b>Vgmax</b>.
         *
         */
        class ExcST4B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST4B;
                if (null == bucket)
                   cim_data.ExcST4B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST4B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcST4B;
                if (null == bucket)
                   context.parsed.ExcST4B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST4B", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kim", "kim",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kir", "kir",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kpm", "kpm",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "kpr", "kpr",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "lvgate", "lvgate",  base.from_boolean, fields);
                base.export_element (obj, "ExcST4B", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "thetap", "thetap",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "uel", "uel",  base.from_boolean, fields);
                base.export_element (obj, "ExcST4B", "vbmax", "vbmax",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "vgmax", "vgmax",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "vmmax", "vmmax",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "vmmin", "vmmin",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcST4B", "xl", "xl",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST4B_collapse" aria-expanded="true" aria-controls="ExcST4B_collapse" style="margin-left: 10px;">ExcST4B</a></legend>
                    <div id="ExcST4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#kim}}<div><b>kim</b>: {{kim}}</div>{{/kim}}
                    {{#kir}}<div><b>kir</b>: {{kir}}</div>{{/kir}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#kpm}}<div><b>kpm</b>: {{kpm}}</div>{{/kpm}}
                    {{#kpr}}<div><b>kpr</b>: {{kpr}}</div>{{/kpr}}
                    {{#lvgate}}<div><b>lvgate</b>: {{lvgate}}</div>{{/lvgate}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#thetap}}<div><b>thetap</b>: {{thetap}}</div>{{/thetap}}
                    {{#uel}}<div><b>uel</b>: {{uel}}</div>{{/uel}}
                    {{#vbmax}}<div><b>vbmax</b>: {{vbmax}}</div>{{/vbmax}}
                    {{#vgmax}}<div><b>vgmax</b>: {{vgmax}}</div>{{/vgmax}}
                    {{#vmmax}}<div><b>vmmax</b>: {{vmmax}}</div>{{/vmmax}}
                    {{#vmmin}}<div><b>vmmin</b>: {{vmmin}}</div>{{/vmmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xl}}<div><b>xl</b>: {{xl}}</div>{{/xl}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST4B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST4B_collapse" style="margin-left: 10px;">ExcST4B</a></legend>
                    <div id="{{id}}_ExcST4B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kim'>kim: </label><div class='col-sm-8'><input id='{{id}}_kim' class='form-control' type='text'{{#kim}} value='{{kim}}'{{/kim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kir'>kir: </label><div class='col-sm-8'><input id='{{id}}_kir' class='form-control' type='text'{{#kir}} value='{{kir}}'{{/kir}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpm'>kpm: </label><div class='col-sm-8'><input id='{{id}}_kpm' class='form-control' type='text'{{#kpm}} value='{{kpm}}'{{/kpm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpr'>kpr: </label><div class='col-sm-8'><input id='{{id}}_kpr' class='form-control' type='text'{{#kpr}} value='{{kpr}}'{{/kpr}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_lvgate'>lvgate: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_lvgate' class='form-check-input' type='checkbox'{{#lvgate}} checked{{/lvgate}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetap'>thetap: </label><div class='col-sm-8'><input id='{{id}}_thetap' class='form-control' type='text'{{#thetap}} value='{{thetap}}'{{/thetap}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_uel'>uel: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_uel' class='form-check-input' type='checkbox'{{#uel}} checked{{/uel}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vbmax'>vbmax: </label><div class='col-sm-8'><input id='{{id}}_vbmax' class='form-control' type='text'{{#vbmax}} value='{{vbmax}}'{{/vbmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vgmax'>vgmax: </label><div class='col-sm-8'><input id='{{id}}_vgmax' class='form-control' type='text'{{#vgmax}} value='{{vgmax}}'{{/vgmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmax'>vmmax: </label><div class='col-sm-8'><input id='{{id}}_vmmax' class='form-control' type='text'{{#vmmax}} value='{{vmmax}}'{{/vmmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmin'>vmmin: </label><div class='col-sm-8'><input id='{{id}}_vmmin' class='form-control' type='text'{{#vmmin}} value='{{vmmin}}'{{/vmmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xl'>xl: </label><div class='col-sm-8'><input id='{{id}}_xl' class='form-control' type='text'{{#xl}} value='{{xl}}'{{/xl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST4B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_kim").value; if ("" != temp) obj.kim = temp;
                temp = document.getElementById (id + "_kir").value; if ("" != temp) obj.kir = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_kpm").value; if ("" != temp) obj.kpm = temp;
                temp = document.getElementById (id + "_kpr").value; if ("" != temp) obj.kpr = temp;
                temp = document.getElementById (id + "_lvgate").checked; if (temp) obj.lvgate = true;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_thetap").value; if ("" != temp) obj.thetap = temp;
                temp = document.getElementById (id + "_uel").checked; if (temp) obj.uel = true;
                temp = document.getElementById (id + "_vbmax").value; if ("" != temp) obj.vbmax = temp;
                temp = document.getElementById (id + "_vgmax").value; if ("" != temp) obj.vgmax = temp;
                temp = document.getElementById (id + "_vmmax").value; if ("" != temp) obj.vmmax = temp;
                temp = document.getElementById (id + "_vmmin").value; if ("" != temp) obj.vmmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xl").value; if ("" != temp) obj.xl = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC6A alternator-supplied rectifier excitation system with speed input.
         *
         */
        class ExcAC6A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC6A;
                if (null == bucket)
                   cim_data.ExcAC6A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC6A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC6A;
                if (null == bucket)
                   context.parsed.ExcAC6A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC6A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcAC6A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcAC6A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "th", "th",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "tj", "tj",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "tk", "tk",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vfelim", "vfelim",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vhmax", "vhmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcAC6A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC6A_collapse" aria-expanded="true" aria-controls="ExcAC6A_collapse" style="margin-left: 10px;">ExcAC6A</a></legend>
                    <div id="ExcAC6A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#th}}<div><b>th</b>: {{th}}</div>{{/th}}
                    {{#tj}}<div><b>tj</b>: {{tj}}</div>{{/tj}}
                    {{#tk}}<div><b>tk</b>: {{tk}}</div>{{/tk}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vfelim}}<div><b>vfelim</b>: {{vfelim}}</div>{{/vfelim}}
                    {{#vhmax}}<div><b>vhmax</b>: {{vhmax}}</div>{{/vhmax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC6A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC6A_collapse" style="margin-left: 10px;">ExcAC6A</a></legend>
                    <div id="{{id}}_ExcAC6A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th'>th: </label><div class='col-sm-8'><input id='{{id}}_th' class='form-control' type='text'{{#th}} value='{{th}}'{{/th}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tj'>tj: </label><div class='col-sm-8'><input id='{{id}}_tj' class='form-control' type='text'{{#tj}} value='{{tj}}'{{/tj}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tk'>tk: </label><div class='col-sm-8'><input id='{{id}}_tk' class='form-control' type='text'{{#tk}} value='{{tk}}'{{/tk}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfelim'>vfelim: </label><div class='col-sm-8'><input id='{{id}}_vfelim' class='form-control' type='text'{{#vfelim}} value='{{vfelim}}'{{/vfelim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vhmax'>vhmax: </label><div class='col-sm-8'><input id='{{id}}_vhmax' class='form-control' type='text'{{#vhmax}} value='{{vhmax}}'{{/vhmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC6A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_th").value; if ("" != temp) obj.th = temp;
                temp = document.getElementById (id + "_tj").value; if ("" != temp) obj.tj = temp;
                temp = document.getElementById (id + "_tk").value; if ("" != temp) obj.tk = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vfelim").value; if ("" != temp) obj.vfelim = temp;
                temp = document.getElementById (id + "_vhmax").value; if ("" != temp) obj.vhmax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE Type ST1 Excitation System with semi-continuous and acting terminal voltage limiter.
         *
         */
        class ExcOEX3T extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcOEX3T;
                if (null == bucket)
                   cim_data.ExcOEX3T = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcOEX3T[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcOEX3T;
                if (null == bucket)
                   context.parsed.ExcOEX3T = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcOEX3T", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "e2", "e2",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "see1", "see1",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "see2", "see2",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t5", "t5",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "t6", "t6",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcOEX3T", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcOEX3T_collapse" aria-expanded="true" aria-controls="ExcOEX3T_collapse" style="margin-left: 10px;">ExcOEX3T</a></legend>
                    <div id="ExcOEX3T_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#see1}}<div><b>see1</b>: {{see1}}</div>{{/see1}}
                    {{#see2}}<div><b>see2</b>: {{see2}}</div>{{/see2}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#t5}}<div><b>t5</b>: {{t5}}</div>{{/t5}}
                    {{#t6}}<div><b>t6</b>: {{t6}}</div>{{/t6}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcOEX3T_collapse" aria-expanded="true" aria-controls="{{id}}_ExcOEX3T_collapse" style="margin-left: 10px;">ExcOEX3T</a></legend>
                    <div id="{{id}}_ExcOEX3T_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_see1'>see1: </label><div class='col-sm-8'><input id='{{id}}_see1' class='form-control' type='text'{{#see1}} value='{{see1}}'{{/see1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_see2'>see2: </label><div class='col-sm-8'><input id='{{id}}_see2' class='form-control' type='text'{{#see2}} value='{{see2}}'{{/see2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t5'>t5: </label><div class='col-sm-8'><input id='{{id}}_t5' class='form-control' type='text'{{#t5}} value='{{t5}}'{{/t5}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t6'>t6: </label><div class='col-sm-8'><input id='{{id}}_t6' class='form-control' type='text'{{#t6}} value='{{t6}}'{{/t6}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcOEX3T" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_see1").value; if ("" != temp) obj.see1 = temp;
                temp = document.getElementById (id + "_see2").value; if ("" != temp) obj.see2 = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_t5").value; if ("" != temp) obj.t5 = temp;
                temp = document.getElementById (id + "_t6").value; if ("" != temp) obj.t6 = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE AC3A alternator-supplied rectifier excitation system with different field current limit.
         *
         */
        class ExcAC3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAC3A;
                if (null == bucket)
                   cim_data.ExcAC3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAC3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAC3A;
                if (null == bucket)
                   context.parsed.ExcAC3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAC3A", "efdn", "efdn",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kf1", "kf1",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kf2", "kf2",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "klv", "klv",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kn", "kn",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "kr", "kr",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcAC3A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcAC3A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "vemin", "vemin",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "vfemax", "vfemax",  base.from_string, fields);
                base.export_element (obj, "ExcAC3A", "vlv", "vlv",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAC3A_collapse" aria-expanded="true" aria-controls="ExcAC3A_collapse" style="margin-left: 10px;">ExcAC3A</a></legend>
                    <div id="ExcAC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efdn}}<div><b>efdn</b>: {{efdn}}</div>{{/efdn}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#kf1}}<div><b>kf1</b>: {{kf1}}</div>{{/kf1}}
                    {{#kf2}}<div><b>kf2</b>: {{kf2}}</div>{{/kf2}}
                    {{#klv}}<div><b>klv</b>: {{klv}}</div>{{/klv}}
                    {{#kn}}<div><b>kn</b>: {{kn}}</div>{{/kn}}
                    {{#kr}}<div><b>kr</b>: {{kr}}</div>{{/kr}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vemin}}<div><b>vemin</b>: {{vemin}}</div>{{/vemin}}
                    {{#vfemax}}<div><b>vfemax</b>: {{vfemax}}</div>{{/vfemax}}
                    {{#vlv}}<div><b>vlv</b>: {{vlv}}</div>{{/vlv}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAC3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAC3A_collapse" style="margin-left: 10px;">ExcAC3A</a></legend>
                    <div id="{{id}}_ExcAC3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efdn'>efdn: </label><div class='col-sm-8'><input id='{{id}}_efdn' class='form-control' type='text'{{#efdn}} value='{{efdn}}'{{/efdn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf1'>kf1: </label><div class='col-sm-8'><input id='{{id}}_kf1' class='form-control' type='text'{{#kf1}} value='{{kf1}}'{{/kf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf2'>kf2: </label><div class='col-sm-8'><input id='{{id}}_kf2' class='form-control' type='text'{{#kf2}} value='{{kf2}}'{{/kf2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klv'>klv: </label><div class='col-sm-8'><input id='{{id}}_klv' class='form-control' type='text'{{#klv}} value='{{klv}}'{{/klv}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kn'>kn: </label><div class='col-sm-8'><input id='{{id}}_kn' class='form-control' type='text'{{#kn}} value='{{kn}}'{{/kn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kr'>kr: </label><div class='col-sm-8'><input id='{{id}}_kr' class='form-control' type='text'{{#kr}} value='{{kr}}'{{/kr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vemin'>vemin: </label><div class='col-sm-8'><input id='{{id}}_vemin' class='form-control' type='text'{{#vemin}} value='{{vemin}}'{{/vemin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfemax'>vfemax: </label><div class='col-sm-8'><input id='{{id}}_vfemax' class='form-control' type='text'{{#vfemax}} value='{{vfemax}}'{{/vfemax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vlv'>vlv: </label><div class='col-sm-8'><input id='{{id}}_vlv' class='form-control' type='text'{{#vlv}} value='{{vlv}}'{{/vlv}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAC3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efdn").value; if ("" != temp) obj.efdn = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_kf1").value; if ("" != temp) obj.kf1 = temp;
                temp = document.getElementById (id + "_kf2").value; if ("" != temp) obj.kf2 = temp;
                temp = document.getElementById (id + "_klv").value; if ("" != temp) obj.klv = temp;
                temp = document.getElementById (id + "_kn").value; if ("" != temp) obj.kn = temp;
                temp = document.getElementById (id + "_kr").value; if ("" != temp) obj.kr = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vemin").value; if ("" != temp) obj.vemin = temp;
                temp = document.getElementById (id + "_vfemax").value; if ("" != temp) obj.vfemax = temp;
                temp = document.getElementById (id + "_vlv").value; if ("" != temp) obj.vlv = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type AC6A model.
         *
         * The model represents field-controlled alternator-rectifier excitation systems with system-supplied electronic voltage regulators.  The maximum output of the regulator, <b><i>V</i></b><b><i><sub>R</sub></i></b>, is a function of terminal voltage, <b><i>V</i></b><b><i><sub>T</sub></i></b>. The field current limiter included in the original model AC6A remains in the 2005 update.
         *
         */
        class ExcIEEEAC6A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEAC6A;
                if (null == bucket)
                   cim_data.ExcIEEEAC6A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEAC6A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEAC6A;
                if (null == bucket)
                   context.parsed.ExcIEEEAC6A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEAC6A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "kd", "kd",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "kh", "kh",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "seve1", "seve1",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC6A", "seve2", "seve2",  base.from_float, fields);
                base.export_element (obj, "ExcIEEEAC6A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "th", "th",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "tj", "tj",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "tk", "tk",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "ve1", "ve1",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "ve2", "ve2",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vfelim", "vfelim",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vhmax", "vhmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEAC6A", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEAC6A_collapse" aria-expanded="true" aria-controls="ExcIEEEAC6A_collapse" style="margin-left: 10px;">ExcIEEEAC6A</a></legend>
                    <div id="ExcIEEEAC6A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kd}}<div><b>kd</b>: {{kd}}</div>{{/kd}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kh}}<div><b>kh</b>: {{kh}}</div>{{/kh}}
                    {{#seve1}}<div><b>seve1</b>: {{seve1}}</div>{{/seve1}}
                    {{#seve2}}<div><b>seve2</b>: {{seve2}}</div>{{/seve2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#th}}<div><b>th</b>: {{th}}</div>{{/th}}
                    {{#tj}}<div><b>tj</b>: {{tj}}</div>{{/tj}}
                    {{#tk}}<div><b>tk</b>: {{tk}}</div>{{/tk}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#ve1}}<div><b>ve1</b>: {{ve1}}</div>{{/ve1}}
                    {{#ve2}}<div><b>ve2</b>: {{ve2}}</div>{{/ve2}}
                    {{#vfelim}}<div><b>vfelim</b>: {{vfelim}}</div>{{/vfelim}}
                    {{#vhmax}}<div><b>vhmax</b>: {{vhmax}}</div>{{/vhmax}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEAC6A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEAC6A_collapse" style="margin-left: 10px;">ExcIEEEAC6A</a></legend>
                    <div id="{{id}}_ExcIEEEAC6A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kd'>kd: </label><div class='col-sm-8'><input id='{{id}}_kd' class='form-control' type='text'{{#kd}} value='{{kd}}'{{/kd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kh'>kh: </label><div class='col-sm-8'><input id='{{id}}_kh' class='form-control' type='text'{{#kh}} value='{{kh}}'{{/kh}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve1'>seve1: </label><div class='col-sm-8'><input id='{{id}}_seve1' class='form-control' type='text'{{#seve1}} value='{{seve1}}'{{/seve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seve2'>seve2: </label><div class='col-sm-8'><input id='{{id}}_seve2' class='form-control' type='text'{{#seve2}} value='{{seve2}}'{{/seve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_th'>th: </label><div class='col-sm-8'><input id='{{id}}_th' class='form-control' type='text'{{#th}} value='{{th}}'{{/th}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tj'>tj: </label><div class='col-sm-8'><input id='{{id}}_tj' class='form-control' type='text'{{#tj}} value='{{tj}}'{{/tj}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tk'>tk: </label><div class='col-sm-8'><input id='{{id}}_tk' class='form-control' type='text'{{#tk}} value='{{tk}}'{{/tk}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve1'>ve1: </label><div class='col-sm-8'><input id='{{id}}_ve1' class='form-control' type='text'{{#ve1}} value='{{ve1}}'{{/ve1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ve2'>ve2: </label><div class='col-sm-8'><input id='{{id}}_ve2' class='form-control' type='text'{{#ve2}} value='{{ve2}}'{{/ve2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfelim'>vfelim: </label><div class='col-sm-8'><input id='{{id}}_vfelim' class='form-control' type='text'{{#vfelim}} value='{{vfelim}}'{{/vfelim}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vhmax'>vhmax: </label><div class='col-sm-8'><input id='{{id}}_vhmax' class='form-control' type='text'{{#vhmax}} value='{{vhmax}}'{{/vhmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEAC6A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kd").value; if ("" != temp) obj.kd = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kh").value; if ("" != temp) obj.kh = temp;
                temp = document.getElementById (id + "_seve1").value; if ("" != temp) obj.seve1 = temp;
                temp = document.getElementById (id + "_seve2").value; if ("" != temp) obj.seve2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_th").value; if ("" != temp) obj.th = temp;
                temp = document.getElementById (id + "_tj").value; if ("" != temp) obj.tj = temp;
                temp = document.getElementById (id + "_tk").value; if ("" != temp) obj.tk = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_ve1").value; if ("" != temp) obj.ve1 = temp;
                temp = document.getElementById (id + "_ve2").value; if ("" != temp) obj.ve2 = temp;
                temp = document.getElementById (id + "_vfelim").value; if ("" != temp) obj.vfelim = temp;
                temp = document.getElementById (id + "_vhmax").value; if ("" != temp) obj.vhmax = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        /**
         * Modification of an old IEEE ST1A static excitation system without overexcitation limiter (OEL) and underexcitation limiter (UEL).
         *
         */
        class ExcST1A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcST1A;
                if (null == bucket)
                   cim_data.ExcST1A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcST1A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcST1A;
                if (null == bucket)
                   context.parsed.ExcST1A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcST1A", "ilr", "ilr",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "klr", "klr",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "tb1", "tb1",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "tc1", "tc1",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcST1A", "xe", "xe",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcST1A_collapse" aria-expanded="true" aria-controls="ExcST1A_collapse" style="margin-left: 10px;">ExcST1A</a></legend>
                    <div id="ExcST1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ilr}}<div><b>ilr</b>: {{ilr}}</div>{{/ilr}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#klr}}<div><b>klr</b>: {{klr}}</div>{{/klr}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tb1}}<div><b>tb1</b>: {{tb1}}</div>{{/tb1}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#tc1}}<div><b>tc1</b>: {{tc1}}</div>{{/tc1}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xe}}<div><b>xe</b>: {{xe}}</div>{{/xe}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcST1A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcST1A_collapse" style="margin-left: 10px;">ExcST1A</a></legend>
                    <div id="{{id}}_ExcST1A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ilr'>ilr: </label><div class='col-sm-8'><input id='{{id}}_ilr' class='form-control' type='text'{{#ilr}} value='{{ilr}}'{{/ilr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klr'>klr: </label><div class='col-sm-8'><input id='{{id}}_klr' class='form-control' type='text'{{#klr}} value='{{klr}}'{{/klr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb1'>tb1: </label><div class='col-sm-8'><input id='{{id}}_tb1' class='form-control' type='text'{{#tb1}} value='{{tb1}}'{{/tb1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc1'>tc1: </label><div class='col-sm-8'><input id='{{id}}_tc1' class='form-control' type='text'{{#tc1}} value='{{tc1}}'{{/tc1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xe'>xe: </label><div class='col-sm-8'><input id='{{id}}_xe' class='form-control' type='text'{{#xe}} value='{{xe}}'{{/xe}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcST1A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ilr").value; if ("" != temp) obj.ilr = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_klr").value; if ("" != temp) obj.klr = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tb1").value; if ("" != temp) obj.tb1 = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_tc1").value; if ("" != temp) obj.tc1 = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xe").value; if ("" != temp) obj.xe = temp;

                return (obj);
            }
        }

        /**
         * Static PI transformer fed excitation system: ELIN (VATECH) - simplified model.
         *
         * This model represents an all-static excitation system. A PI voltage controller establishes a desired field current set point for a proportional current controller. The integrator of the PI controller has a follow-up input to match its signal to the present field current.  A power system stabilizer with power input is included in the model.
         *
         */
        class ExcELIN1 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcELIN1;
                if (null == bucket)
                   cim_data.ExcELIN1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcELIN1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcELIN1;
                if (null == bucket)
                   context.parsed.ExcELIN1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcELIN1", "dpnf", "dpnf",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "efmax", "efmax",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "efmin", "efmin",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "ks1", "ks1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "ks2", "ks2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "smax", "smax",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "tfi", "tfi",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "tnu", "tnu",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "ts1", "ts1",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "ts2", "ts2",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "tsw", "tsw",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "vpi", "vpi",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "vpnf", "vpnf",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "vpu", "vpu",  base.from_string, fields);
                base.export_element (obj, "ExcELIN1", "xe", "xe",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcELIN1_collapse" aria-expanded="true" aria-controls="ExcELIN1_collapse" style="margin-left: 10px;">ExcELIN1</a></legend>
                    <div id="ExcELIN1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#dpnf}}<div><b>dpnf</b>: {{dpnf}}</div>{{/dpnf}}
                    {{#efmax}}<div><b>efmax</b>: {{efmax}}</div>{{/efmax}}
                    {{#efmin}}<div><b>efmin</b>: {{efmin}}</div>{{/efmin}}
                    {{#ks1}}<div><b>ks1</b>: {{ks1}}</div>{{/ks1}}
                    {{#ks2}}<div><b>ks2</b>: {{ks2}}</div>{{/ks2}}
                    {{#smax}}<div><b>smax</b>: {{smax}}</div>{{/smax}}
                    {{#tfi}}<div><b>tfi</b>: {{tfi}}</div>{{/tfi}}
                    {{#tnu}}<div><b>tnu</b>: {{tnu}}</div>{{/tnu}}
                    {{#ts1}}<div><b>ts1</b>: {{ts1}}</div>{{/ts1}}
                    {{#ts2}}<div><b>ts2</b>: {{ts2}}</div>{{/ts2}}
                    {{#tsw}}<div><b>tsw</b>: {{tsw}}</div>{{/tsw}}
                    {{#vpi}}<div><b>vpi</b>: {{vpi}}</div>{{/vpi}}
                    {{#vpnf}}<div><b>vpnf</b>: {{vpnf}}</div>{{/vpnf}}
                    {{#vpu}}<div><b>vpu</b>: {{vpu}}</div>{{/vpu}}
                    {{#xe}}<div><b>xe</b>: {{xe}}</div>{{/xe}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcELIN1_collapse" aria-expanded="true" aria-controls="{{id}}_ExcELIN1_collapse" style="margin-left: 10px;">ExcELIN1</a></legend>
                    <div id="{{id}}_ExcELIN1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_dpnf'>dpnf: </label><div class='col-sm-8'><input id='{{id}}_dpnf' class='form-control' type='text'{{#dpnf}} value='{{dpnf}}'{{/dpnf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efmax'>efmax: </label><div class='col-sm-8'><input id='{{id}}_efmax' class='form-control' type='text'{{#efmax}} value='{{efmax}}'{{/efmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efmin'>efmin: </label><div class='col-sm-8'><input id='{{id}}_efmin' class='form-control' type='text'{{#efmin}} value='{{efmin}}'{{/efmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks1'>ks1: </label><div class='col-sm-8'><input id='{{id}}_ks1' class='form-control' type='text'{{#ks1}} value='{{ks1}}'{{/ks1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks2'>ks2: </label><div class='col-sm-8'><input id='{{id}}_ks2' class='form-control' type='text'{{#ks2}} value='{{ks2}}'{{/ks2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_smax'>smax: </label><div class='col-sm-8'><input id='{{id}}_smax' class='form-control' type='text'{{#smax}} value='{{smax}}'{{/smax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tfi'>tfi: </label><div class='col-sm-8'><input id='{{id}}_tfi' class='form-control' type='text'{{#tfi}} value='{{tfi}}'{{/tfi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tnu'>tnu: </label><div class='col-sm-8'><input id='{{id}}_tnu' class='form-control' type='text'{{#tnu}} value='{{tnu}}'{{/tnu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts1'>ts1: </label><div class='col-sm-8'><input id='{{id}}_ts1' class='form-control' type='text'{{#ts1}} value='{{ts1}}'{{/ts1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ts2'>ts2: </label><div class='col-sm-8'><input id='{{id}}_ts2' class='form-control' type='text'{{#ts2}} value='{{ts2}}'{{/ts2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tsw'>tsw: </label><div class='col-sm-8'><input id='{{id}}_tsw' class='form-control' type='text'{{#tsw}} value='{{tsw}}'{{/tsw}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vpi'>vpi: </label><div class='col-sm-8'><input id='{{id}}_vpi' class='form-control' type='text'{{#vpi}} value='{{vpi}}'{{/vpi}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vpnf'>vpnf: </label><div class='col-sm-8'><input id='{{id}}_vpnf' class='form-control' type='text'{{#vpnf}} value='{{vpnf}}'{{/vpnf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vpu'>vpu: </label><div class='col-sm-8'><input id='{{id}}_vpu' class='form-control' type='text'{{#vpu}} value='{{vpu}}'{{/vpu}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xe'>xe: </label><div class='col-sm-8'><input id='{{id}}_xe' class='form-control' type='text'{{#xe}} value='{{xe}}'{{/xe}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcELIN1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_dpnf").value; if ("" != temp) obj.dpnf = temp;
                temp = document.getElementById (id + "_efmax").value; if ("" != temp) obj.efmax = temp;
                temp = document.getElementById (id + "_efmin").value; if ("" != temp) obj.efmin = temp;
                temp = document.getElementById (id + "_ks1").value; if ("" != temp) obj.ks1 = temp;
                temp = document.getElementById (id + "_ks2").value; if ("" != temp) obj.ks2 = temp;
                temp = document.getElementById (id + "_smax").value; if ("" != temp) obj.smax = temp;
                temp = document.getElementById (id + "_tfi").value; if ("" != temp) obj.tfi = temp;
                temp = document.getElementById (id + "_tnu").value; if ("" != temp) obj.tnu = temp;
                temp = document.getElementById (id + "_ts1").value; if ("" != temp) obj.ts1 = temp;
                temp = document.getElementById (id + "_ts2").value; if ("" != temp) obj.ts2 = temp;
                temp = document.getElementById (id + "_tsw").value; if ("" != temp) obj.tsw = temp;
                temp = document.getElementById (id + "_vpi").value; if ("" != temp) obj.vpi = temp;
                temp = document.getElementById (id + "_vpnf").value; if ("" != temp) obj.vpnf = temp;
                temp = document.getElementById (id + "_vpu").value; if ("" != temp) obj.vpu = temp;
                temp = document.getElementById (id + "_xe").value; if ("" != temp) obj.xe = temp;

                return (obj);
            }
        }

        /**
         * Italian excitation system.
         *
         * It represents static exciter and electric voltage regulator.
         *
         */
        class ExcAVR4 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR4;
                if (null == bucket)
                   cim_data.ExcAVR4 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR4[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAVR4;
                if (null == bucket)
                   context.parsed.ExcAVR4 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR4", "imul", "imul",  base.from_boolean, fields);
                base.export_element (obj, "ExcAVR4", "ka", "ka",  base.from_float, fields);
                base.export_element (obj, "ExcAVR4", "ke", "ke",  base.from_float, fields);
                base.export_element (obj, "ExcAVR4", "kif", "kif",  base.from_float, fields);
                base.export_element (obj, "ExcAVR4", "t1", "t1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "t1if", "t1if",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "t2", "t2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "t3", "t3",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "t4", "t4",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "tif", "tif",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "vfmn", "vfmn",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "vfmx", "vfmx",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "vrmn", "vrmn",  base.from_string, fields);
                base.export_element (obj, "ExcAVR4", "vrmx", "vrmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR4_collapse" aria-expanded="true" aria-controls="ExcAVR4_collapse" style="margin-left: 10px;">ExcAVR4</a></legend>
                    <div id="ExcAVR4_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#imul}}<div><b>imul</b>: {{imul}}</div>{{/imul}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kif}}<div><b>kif</b>: {{kif}}</div>{{/kif}}
                    {{#t1}}<div><b>t1</b>: {{t1}}</div>{{/t1}}
                    {{#t1if}}<div><b>t1if</b>: {{t1if}}</div>{{/t1if}}
                    {{#t2}}<div><b>t2</b>: {{t2}}</div>{{/t2}}
                    {{#t3}}<div><b>t3</b>: {{t3}}</div>{{/t3}}
                    {{#t4}}<div><b>t4</b>: {{t4}}</div>{{/t4}}
                    {{#tif}}<div><b>tif</b>: {{tif}}</div>{{/tif}}
                    {{#vfmn}}<div><b>vfmn</b>: {{vfmn}}</div>{{/vfmn}}
                    {{#vfmx}}<div><b>vfmx</b>: {{vfmx}}</div>{{/vfmx}}
                    {{#vrmn}}<div><b>vrmn</b>: {{vrmn}}</div>{{/vrmn}}
                    {{#vrmx}}<div><b>vrmx</b>: {{vrmx}}</div>{{/vrmx}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR4_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR4_collapse" style="margin-left: 10px;">ExcAVR4</a></legend>
                    <div id="{{id}}_ExcAVR4_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_imul'>imul: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_imul' class='form-check-input' type='checkbox'{{#imul}} checked{{/imul}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kif'>kif: </label><div class='col-sm-8'><input id='{{id}}_kif' class='form-control' type='text'{{#kif}} value='{{kif}}'{{/kif}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1'>t1: </label><div class='col-sm-8'><input id='{{id}}_t1' class='form-control' type='text'{{#t1}} value='{{t1}}'{{/t1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t1if'>t1if: </label><div class='col-sm-8'><input id='{{id}}_t1if' class='form-control' type='text'{{#t1if}} value='{{t1if}}'{{/t1if}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t2'>t2: </label><div class='col-sm-8'><input id='{{id}}_t2' class='form-control' type='text'{{#t2}} value='{{t2}}'{{/t2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t3'>t3: </label><div class='col-sm-8'><input id='{{id}}_t3' class='form-control' type='text'{{#t3}} value='{{t3}}'{{/t3}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_t4'>t4: </label><div class='col-sm-8'><input id='{{id}}_t4' class='form-control' type='text'{{#t4}} value='{{t4}}'{{/t4}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tif'>tif: </label><div class='col-sm-8'><input id='{{id}}_tif' class='form-control' type='text'{{#tif}} value='{{tif}}'{{/tif}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfmn'>vfmn: </label><div class='col-sm-8'><input id='{{id}}_vfmn' class='form-control' type='text'{{#vfmn}} value='{{vfmn}}'{{/vfmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vfmx'>vfmx: </label><div class='col-sm-8'><input id='{{id}}_vfmx' class='form-control' type='text'{{#vfmx}} value='{{vfmx}}'{{/vfmx}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmn'>vrmn: </label><div class='col-sm-8'><input id='{{id}}_vrmn' class='form-control' type='text'{{#vrmn}} value='{{vrmn}}'{{/vrmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmx'>vrmx: </label><div class='col-sm-8'><input id='{{id}}_vrmx' class='form-control' type='text'{{#vrmx}} value='{{vrmx}}'{{/vrmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR4" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_imul").checked; if (temp) obj.imul = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kif").value; if ("" != temp) obj.kif = temp;
                temp = document.getElementById (id + "_t1").value; if ("" != temp) obj.t1 = temp;
                temp = document.getElementById (id + "_t1if").value; if ("" != temp) obj.t1if = temp;
                temp = document.getElementById (id + "_t2").value; if ("" != temp) obj.t2 = temp;
                temp = document.getElementById (id + "_t3").value; if ("" != temp) obj.t3 = temp;
                temp = document.getElementById (id + "_t4").value; if ("" != temp) obj.t4 = temp;
                temp = document.getElementById (id + "_tif").value; if ("" != temp) obj.tif = temp;
                temp = document.getElementById (id + "_vfmn").value; if ("" != temp) obj.vfmn = temp;
                temp = document.getElementById (id + "_vfmx").value; if ("" != temp) obj.vfmx = temp;
                temp = document.getElementById (id + "_vrmn").value; if ("" != temp) obj.vrmn = temp;
                temp = document.getElementById (id + "_vrmx").value; if ("" != temp) obj.vrmx = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST3A model.
         *
         * Some static systems utilize a field voltage control loop to linearize the exciter control characteristic. This also makes the output independent of supply source variations until supply limitations are reached.  These systems utilize a variety of controlled-rectifier designs: full thyristor complements or hybrid bridges
         *
         */
        class ExcIEEEST3A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST3A;
                if (null == bucket)
                   cim_data.ExcIEEEST3A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST3A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcIEEEST3A;
                if (null == bucket)
                   context.parsed.ExcIEEEST3A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST3A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "kc", "kc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "ki", "ki",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "km", "km",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "kp", "kp",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "thetap", "thetap",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "tm", "tm",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vbmax", "vbmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vgmax", "vgmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vimax", "vimax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vimin", "vimin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vmmax", "vmmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vmmin", "vmmin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST3A", "xl", "xl",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST3A_collapse" aria-expanded="true" aria-controls="ExcIEEEST3A_collapse" style="margin-left: 10px;">ExcIEEEST3A</a></legend>
                    <div id="ExcIEEEST3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kc}}<div><b>kc</b>: {{kc}}</div>{{/kc}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#ki}}<div><b>ki</b>: {{ki}}</div>{{/ki}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#kp}}<div><b>kp</b>: {{kp}}</div>{{/kp}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#thetap}}<div><b>thetap</b>: {{thetap}}</div>{{/thetap}}
                    {{#tm}}<div><b>tm</b>: {{tm}}</div>{{/tm}}
                    {{#vbmax}}<div><b>vbmax</b>: {{vbmax}}</div>{{/vbmax}}
                    {{#vgmax}}<div><b>vgmax</b>: {{vgmax}}</div>{{/vgmax}}
                    {{#vimax}}<div><b>vimax</b>: {{vimax}}</div>{{/vimax}}
                    {{#vimin}}<div><b>vimin</b>: {{vimin}}</div>{{/vimin}}
                    {{#vmmax}}<div><b>vmmax</b>: {{vmmax}}</div>{{/vmmax}}
                    {{#vmmin}}<div><b>vmmin</b>: {{vmmin}}</div>{{/vmmin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#xl}}<div><b>xl</b>: {{xl}}</div>{{/xl}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST3A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST3A_collapse" style="margin-left: 10px;">ExcIEEEST3A</a></legend>
                    <div id="{{id}}_ExcIEEEST3A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kc'>kc: </label><div class='col-sm-8'><input id='{{id}}_kc' class='form-control' type='text'{{#kc}} value='{{kc}}'{{/kc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ki'>ki: </label><div class='col-sm-8'><input id='{{id}}_ki' class='form-control' type='text'{{#ki}} value='{{ki}}'{{/ki}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_km'>km: </label><div class='col-sm-8'><input id='{{id}}_km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kp'>kp: </label><div class='col-sm-8'><input id='{{id}}_kp' class='form-control' type='text'{{#kp}} value='{{kp}}'{{/kp}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_thetap'>thetap: </label><div class='col-sm-8'><input id='{{id}}_thetap' class='form-control' type='text'{{#thetap}} value='{{thetap}}'{{/thetap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tm'>tm: </label><div class='col-sm-8'><input id='{{id}}_tm' class='form-control' type='text'{{#tm}} value='{{tm}}'{{/tm}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vbmax'>vbmax: </label><div class='col-sm-8'><input id='{{id}}_vbmax' class='form-control' type='text'{{#vbmax}} value='{{vbmax}}'{{/vbmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vgmax'>vgmax: </label><div class='col-sm-8'><input id='{{id}}_vgmax' class='form-control' type='text'{{#vgmax}} value='{{vgmax}}'{{/vgmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimax'>vimax: </label><div class='col-sm-8'><input id='{{id}}_vimax' class='form-control' type='text'{{#vimax}} value='{{vimax}}'{{/vimax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vimin'>vimin: </label><div class='col-sm-8'><input id='{{id}}_vimin' class='form-control' type='text'{{#vimin}} value='{{vimin}}'{{/vimin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmax'>vmmax: </label><div class='col-sm-8'><input id='{{id}}_vmmax' class='form-control' type='text'{{#vmmax}} value='{{vmmax}}'{{/vmmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vmmin'>vmmin: </label><div class='col-sm-8'><input id='{{id}}_vmmin' class='form-control' type='text'{{#vmmin}} value='{{vmmin}}'{{/vmmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_xl'>xl: </label><div class='col-sm-8'><input id='{{id}}_xl' class='form-control' type='text'{{#xl}} value='{{xl}}'{{/xl}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST3A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kc").value; if ("" != temp) obj.kc = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_ki").value; if ("" != temp) obj.ki = temp;
                temp = document.getElementById (id + "_km").value; if ("" != temp) obj.km = temp;
                temp = document.getElementById (id + "_kp").value; if ("" != temp) obj.kp = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_thetap").value; if ("" != temp) obj.thetap = temp;
                temp = document.getElementById (id + "_tm").value; if ("" != temp) obj.tm = temp;
                temp = document.getElementById (id + "_vbmax").value; if ("" != temp) obj.vbmax = temp;
                temp = document.getElementById (id + "_vgmax").value; if ("" != temp) obj.vgmax = temp;
                temp = document.getElementById (id + "_vimax").value; if ("" != temp) obj.vimax = temp;
                temp = document.getElementById (id + "_vimin").value; if ("" != temp) obj.vimin = temp;
                temp = document.getElementById (id + "_vmmax").value; if ("" != temp) obj.vmmax = temp;
                temp = document.getElementById (id + "_vmmin").value; if ("" != temp) obj.vmmin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_xl").value; if ("" != temp) obj.xl = temp;

                return (obj);
            }
        }

        /**
         * Modified IEEE DC2A direct current commutator exciters with speed input, one more leg block in feedback loop and without underexcitation limiters (UEL) inputs.
         *
         * DC type 2 excitation system model with added speed multiplier, added lead-lag, and voltage-dependent limits.
         *
         */
        class ExcDC2A extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcDC2A;
                if (null == bucket)
                   cim_data.ExcDC2A = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcDC2A[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcDC2A;
                if (null == bucket)
                   context.parsed.ExcDC2A = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcDC2A", "efd1", "efd1",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "efd2", "efd2",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "exclim", "exclim",  base.from_boolean, fields);
                base.export_element (obj, "ExcDC2A", "ka", "ka",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "ke", "ke",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "kf", "kf",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "ks", "ks",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "seefd1", "seefd1",  base.from_float, fields);
                base.export_element (obj, "ExcDC2A", "seefd2", "seefd2",  base.from_float, fields);
                base.export_element (obj, "ExcDC2A", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "tc", "tc",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "tf1", "tf1",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "vrmin", "vrmin",  base.from_string, fields);
                base.export_element (obj, "ExcDC2A", "vtlim", "vtlim",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcDC2A_collapse" aria-expanded="true" aria-controls="ExcDC2A_collapse" style="margin-left: 10px;">ExcDC2A</a></legend>
                    <div id="ExcDC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#efd1}}<div><b>efd1</b>: {{efd1}}</div>{{/efd1}}
                    {{#efd2}}<div><b>efd2</b>: {{efd2}}</div>{{/efd2}}
                    {{#exclim}}<div><b>exclim</b>: {{exclim}}</div>{{/exclim}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#ke}}<div><b>ke</b>: {{ke}}</div>{{/ke}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#ks}}<div><b>ks</b>: {{ks}}</div>{{/ks}}
                    {{#seefd1}}<div><b>seefd1</b>: {{seefd1}}</div>{{/seefd1}}
                    {{#seefd2}}<div><b>seefd2</b>: {{seefd2}}</div>{{/seefd2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#tc}}<div><b>tc</b>: {{tc}}</div>{{/tc}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#tf1}}<div><b>tf1</b>: {{tf1}}</div>{{/tf1}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    {{#vtlim}}<div><b>vtlim</b>: {{vtlim}}</div>{{/vtlim}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcDC2A_collapse" aria-expanded="true" aria-controls="{{id}}_ExcDC2A_collapse" style="margin-left: 10px;">ExcDC2A</a></legend>
                    <div id="{{id}}_ExcDC2A_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd1'>efd1: </label><div class='col-sm-8'><input id='{{id}}_efd1' class='form-control' type='text'{{#efd1}} value='{{efd1}}'{{/efd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_efd2'>efd2: </label><div class='col-sm-8'><input id='{{id}}_efd2' class='form-control' type='text'{{#efd2}} value='{{efd2}}'{{/efd2}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_exclim'>exclim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_exclim' class='form-check-input' type='checkbox'{{#exclim}} checked{{/exclim}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ke'>ke: </label><div class='col-sm-8'><input id='{{id}}_ke' class='form-control' type='text'{{#ke}} value='{{ke}}'{{/ke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ks'>ks: </label><div class='col-sm-8'><input id='{{id}}_ks' class='form-control' type='text'{{#ks}} value='{{ks}}'{{/ks}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd1'>seefd1: </label><div class='col-sm-8'><input id='{{id}}_seefd1' class='form-control' type='text'{{#seefd1}} value='{{seefd1}}'{{/seefd1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_seefd2'>seefd2: </label><div class='col-sm-8'><input id='{{id}}_seefd2' class='form-control' type='text'{{#seefd2}} value='{{seefd2}}'{{/seefd2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tc'>tc: </label><div class='col-sm-8'><input id='{{id}}_tc' class='form-control' type='text'{{#tc}} value='{{tc}}'{{/tc}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf1'>tf1: </label><div class='col-sm-8'><input id='{{id}}_tf1' class='form-control' type='text'{{#tf1}} value='{{tf1}}'{{/tf1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vtlim'>vtlim: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vtlim' class='form-check-input' type='checkbox'{{#vtlim}} checked{{/vtlim}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcDC2A" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_efd1").value; if ("" != temp) obj.efd1 = temp;
                temp = document.getElementById (id + "_efd2").value; if ("" != temp) obj.efd2 = temp;
                temp = document.getElementById (id + "_exclim").checked; if (temp) obj.exclim = true;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_ke").value; if ("" != temp) obj.ke = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_ks").value; if ("" != temp) obj.ks = temp;
                temp = document.getElementById (id + "_seefd1").value; if ("" != temp) obj.seefd1 = temp;
                temp = document.getElementById (id + "_seefd2").value; if ("" != temp) obj.seefd2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_tc").value; if ("" != temp) obj.tc = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_tf1").value; if ("" != temp) obj.tf1 = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;
                temp = document.getElementById (id + "_vtlim").checked; if (temp) obj.vtlim = true;

                return (obj);
            }
        }

        /**
         * Italian excitation system corresponding to IEEE (1968) Type 1 Model.
         *
         * It represents exciter dynamo and electromechanical regulator.
         *
         */
        class ExcAVR1 extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcAVR1;
                if (null == bucket)
                   cim_data.ExcAVR1 = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcAVR1[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
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
                var bucket = context.parsed.ExcAVR1;
                if (null == bucket)
                   context.parsed.ExcAVR1 = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcAVR1", "e1", "e1",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "e2", "e2",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "ka", "ka",  base.from_float, fields);
                base.export_element (obj, "ExcAVR1", "kf", "kf",  base.from_float, fields);
                base.export_element (obj, "ExcAVR1", "se1", "se1",  base.from_float, fields);
                base.export_element (obj, "ExcAVR1", "se2", "se2",  base.from_float, fields);
                base.export_element (obj, "ExcAVR1", "ta", "ta",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "tb", "tb",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "te", "te",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "tf", "tf",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "vrmn", "vrmn",  base.from_string, fields);
                base.export_element (obj, "ExcAVR1", "vrmx", "vrmx",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcAVR1_collapse" aria-expanded="true" aria-controls="ExcAVR1_collapse" style="margin-left: 10px;">ExcAVR1</a></legend>
                    <div id="ExcAVR1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#e1}}<div><b>e1</b>: {{e1}}</div>{{/e1}}
                    {{#e2}}<div><b>e2</b>: {{e2}}</div>{{/e2}}
                    {{#ka}}<div><b>ka</b>: {{ka}}</div>{{/ka}}
                    {{#kf}}<div><b>kf</b>: {{kf}}</div>{{/kf}}
                    {{#se1}}<div><b>se1</b>: {{se1}}</div>{{/se1}}
                    {{#se2}}<div><b>se2</b>: {{se2}}</div>{{/se2}}
                    {{#ta}}<div><b>ta</b>: {{ta}}</div>{{/ta}}
                    {{#tb}}<div><b>tb</b>: {{tb}}</div>{{/tb}}
                    {{#te}}<div><b>te</b>: {{te}}</div>{{/te}}
                    {{#tf}}<div><b>tf</b>: {{tf}}</div>{{/tf}}
                    {{#vrmn}}<div><b>vrmn</b>: {{vrmn}}</div>{{/vrmn}}
                    {{#vrmx}}<div><b>vrmx</b>: {{vrmx}}</div>{{/vrmx}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcAVR1_collapse" aria-expanded="true" aria-controls="{{id}}_ExcAVR1_collapse" style="margin-left: 10px;">ExcAVR1</a></legend>
                    <div id="{{id}}_ExcAVR1_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e1'>e1: </label><div class='col-sm-8'><input id='{{id}}_e1' class='form-control' type='text'{{#e1}} value='{{e1}}'{{/e1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_e2'>e2: </label><div class='col-sm-8'><input id='{{id}}_e2' class='form-control' type='text'{{#e2}} value='{{e2}}'{{/e2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ka'>ka: </label><div class='col-sm-8'><input id='{{id}}_ka' class='form-control' type='text'{{#ka}} value='{{ka}}'{{/ka}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kf'>kf: </label><div class='col-sm-8'><input id='{{id}}_kf' class='form-control' type='text'{{#kf}} value='{{kf}}'{{/kf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se1'>se1: </label><div class='col-sm-8'><input id='{{id}}_se1' class='form-control' type='text'{{#se1}} value='{{se1}}'{{/se1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_se2'>se2: </label><div class='col-sm-8'><input id='{{id}}_se2' class='form-control' type='text'{{#se2}} value='{{se2}}'{{/se2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ta'>ta: </label><div class='col-sm-8'><input id='{{id}}_ta' class='form-control' type='text'{{#ta}} value='{{ta}}'{{/ta}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tb'>tb: </label><div class='col-sm-8'><input id='{{id}}_tb' class='form-control' type='text'{{#tb}} value='{{tb}}'{{/tb}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_te'>te: </label><div class='col-sm-8'><input id='{{id}}_te' class='form-control' type='text'{{#te}} value='{{te}}'{{/te}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tf'>tf: </label><div class='col-sm-8'><input id='{{id}}_tf' class='form-control' type='text'{{#tf}} value='{{tf}}'{{/tf}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmn'>vrmn: </label><div class='col-sm-8'><input id='{{id}}_vrmn' class='form-control' type='text'{{#vrmn}} value='{{vrmn}}'{{/vrmn}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmx'>vrmx: </label><div class='col-sm-8'><input id='{{id}}_vrmx' class='form-control' type='text'{{#vrmx}} value='{{vrmx}}'{{/vrmx}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcAVR1" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_e1").value; if ("" != temp) obj.e1 = temp;
                temp = document.getElementById (id + "_e2").value; if ("" != temp) obj.e2 = temp;
                temp = document.getElementById (id + "_ka").value; if ("" != temp) obj.ka = temp;
                temp = document.getElementById (id + "_kf").value; if ("" != temp) obj.kf = temp;
                temp = document.getElementById (id + "_se1").value; if ("" != temp) obj.se1 = temp;
                temp = document.getElementById (id + "_se2").value; if ("" != temp) obj.se2 = temp;
                temp = document.getElementById (id + "_ta").value; if ("" != temp) obj.ta = temp;
                temp = document.getElementById (id + "_tb").value; if ("" != temp) obj.tb = temp;
                temp = document.getElementById (id + "_te").value; if ("" != temp) obj.te = temp;
                temp = document.getElementById (id + "_tf").value; if ("" != temp) obj.tf = temp;
                temp = document.getElementById (id + "_vrmn").value; if ("" != temp) obj.vrmn = temp;
                temp = document.getElementById (id + "_vrmx").value; if ("" != temp) obj.vrmx = temp;

                return (obj);
            }
        }

        /**
         * The class represents IEEE Std 421.5-2005 type ST6B model.
         *
         * This model consists of a PI voltage regulator with an inner loop field voltage regulator and pre-control. The field voltage regulator implements a proportional control. The pre-control and the delay in the feedback circuit increase the dynamic response.
         *
         */
        class ExcIEEEST6B extends ExcitationSystemDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ExcIEEEST6B;
                if (null == bucket)
                   cim_data.ExcIEEEST6B = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ExcIEEEST6B[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ExcitationSystemDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "ExcIEEEST6B";
                base.parse_element (/<cim:ExcIEEEST6B.ilr>([\s\S]*?)<\/cim:ExcIEEEST6B.ilr>/g, obj, "ilr", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.kci>([\s\S]*?)<\/cim:ExcIEEEST6B.kci>/g, obj, "kci", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.kff>([\s\S]*?)<\/cim:ExcIEEEST6B.kff>/g, obj, "kff", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.kg>([\s\S]*?)<\/cim:ExcIEEEST6B.kg>/g, obj, "kg", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.kia>([\s\S]*?)<\/cim:ExcIEEEST6B.kia>/g, obj, "kia", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.klr>([\s\S]*?)<\/cim:ExcIEEEST6B.klr>/g, obj, "klr", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.km>([\s\S]*?)<\/cim:ExcIEEEST6B.km>/g, obj, "km", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.kpa>([\s\S]*?)<\/cim:ExcIEEEST6B.kpa>/g, obj, "kpa", base.to_string, sub, context);
                base.parse_attribute (/<cim:ExcIEEEST6B.oelin\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "oelin", sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.tg>([\s\S]*?)<\/cim:ExcIEEEST6B.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.vamax>([\s\S]*?)<\/cim:ExcIEEEST6B.vamax>/g, obj, "vamax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.vamin>([\s\S]*?)<\/cim:ExcIEEEST6B.vamin>/g, obj, "vamin", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.vrmax>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmax>/g, obj, "vrmax", base.to_string, sub, context);
                base.parse_element (/<cim:ExcIEEEST6B.vrmin>([\s\S]*?)<\/cim:ExcIEEEST6B.vrmin>/g, obj, "vrmin", base.to_string, sub, context);
                var bucket = context.parsed.ExcIEEEST6B;
                if (null == bucket)
                   context.parsed.ExcIEEEST6B = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ExcitationSystemDynamics.prototype.export.call (this, obj, false);

                base.export_element (obj, "ExcIEEEST6B", "ilr", "ilr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "kci", "kci",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "kff", "kff",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "kg", "kg",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "kia", "kia",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "klr", "klr",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "km", "km",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "kpa", "kpa",  base.from_string, fields);
                base.export_attribute (obj, "ExcIEEEST6B", "oelin", "oelin", fields);
                base.export_element (obj, "ExcIEEEST6B", "tg", "tg",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "vamax", "vamax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "vamin", "vamin",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "vrmax", "vrmax",  base.from_string, fields);
                base.export_element (obj, "ExcIEEEST6B", "vrmin", "vrmin",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ExcIEEEST6B_collapse" aria-expanded="true" aria-controls="ExcIEEEST6B_collapse" style="margin-left: 10px;">ExcIEEEST6B</a></legend>
                    <div id="ExcIEEEST6B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.template.call (this) +
                    `
                    {{#ilr}}<div><b>ilr</b>: {{ilr}}</div>{{/ilr}}
                    {{#kci}}<div><b>kci</b>: {{kci}}</div>{{/kci}}
                    {{#kff}}<div><b>kff</b>: {{kff}}</div>{{/kff}}
                    {{#kg}}<div><b>kg</b>: {{kg}}</div>{{/kg}}
                    {{#kia}}<div><b>kia</b>: {{kia}}</div>{{/kia}}
                    {{#klr}}<div><b>klr</b>: {{klr}}</div>{{/klr}}
                    {{#km}}<div><b>km</b>: {{km}}</div>{{/km}}
                    {{#kpa}}<div><b>kpa</b>: {{kpa}}</div>{{/kpa}}
                    {{#oelin}}<div><b>oelin</b>: {{oelin}}</div>{{/oelin}}
                    {{#tg}}<div><b>tg</b>: {{tg}}</div>{{/tg}}
                    {{#vamax}}<div><b>vamax</b>: {{vamax}}</div>{{/vamax}}
                    {{#vamin}}<div><b>vamin</b>: {{vamin}}</div>{{/vamin}}
                    {{#vrmax}}<div><b>vrmax</b>: {{vrmax}}</div>{{/vrmax}}
                    {{#vrmin}}<div><b>vrmin</b>: {{vrmin}}</div>{{/vrmin}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ExcST6BOELselectorKind = []; if (!obj.oelin) obj.ExcST6BOELselectorKind.push ({ id: '', selected: true}); for (var property in ExcST6BOELselectorKind) obj.ExcST6BOELselectorKind.push ({ id: property, selected: obj.oelin && obj.oelin.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ExcST6BOELselectorKind;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ExcIEEEST6B_collapse" aria-expanded="true" aria-controls="{{id}}_ExcIEEEST6B_collapse" style="margin-left: 10px;">ExcIEEEST6B</a></legend>
                    <div id="{{id}}_ExcIEEEST6B_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ExcitationSystemDynamics.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ilr'>ilr: </label><div class='col-sm-8'><input id='{{id}}_ilr' class='form-control' type='text'{{#ilr}} value='{{ilr}}'{{/ilr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kci'>kci: </label><div class='col-sm-8'><input id='{{id}}_kci' class='form-control' type='text'{{#kci}} value='{{kci}}'{{/kci}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kff'>kff: </label><div class='col-sm-8'><input id='{{id}}_kff' class='form-control' type='text'{{#kff}} value='{{kff}}'{{/kff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kg'>kg: </label><div class='col-sm-8'><input id='{{id}}_kg' class='form-control' type='text'{{#kg}} value='{{kg}}'{{/kg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kia'>kia: </label><div class='col-sm-8'><input id='{{id}}_kia' class='form-control' type='text'{{#kia}} value='{{kia}}'{{/kia}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_klr'>klr: </label><div class='col-sm-8'><input id='{{id}}_klr' class='form-control' type='text'{{#klr}} value='{{klr}}'{{/klr}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_km'>km: </label><div class='col-sm-8'><input id='{{id}}_km' class='form-control' type='text'{{#km}} value='{{km}}'{{/km}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_kpa'>kpa: </label><div class='col-sm-8'><input id='{{id}}_kpa' class='form-control' type='text'{{#kpa}} value='{{kpa}}'{{/kpa}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_oelin'>oelin: </label><div class='col-sm-8'><select id='{{id}}_oelin' class='form-control custom-select'>{{#ExcST6BOELselectorKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ExcST6BOELselectorKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tg'>tg: </label><div class='col-sm-8'><input id='{{id}}_tg' class='form-control' type='text'{{#tg}} value='{{tg}}'{{/tg}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamax'>vamax: </label><div class='col-sm-8'><input id='{{id}}_vamax' class='form-control' type='text'{{#vamax}} value='{{vamax}}'{{/vamax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vamin'>vamin: </label><div class='col-sm-8'><input id='{{id}}_vamin' class='form-control' type='text'{{#vamin}} value='{{vamin}}'{{/vamin}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmax'>vrmax: </label><div class='col-sm-8'><input id='{{id}}_vrmax' class='form-control' type='text'{{#vrmax}} value='{{vrmax}}'{{/vrmax}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_vrmin'>vrmin: </label><div class='col-sm-8'><input id='{{id}}_vrmin' class='form-control' type='text'{{#vrmin}} value='{{vrmin}}'{{/vrmin}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ExcIEEEST6B" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ilr").value; if ("" != temp) obj.ilr = temp;
                temp = document.getElementById (id + "_kci").value; if ("" != temp) obj.kci = temp;
                temp = document.getElementById (id + "_kff").value; if ("" != temp) obj.kff = temp;
                temp = document.getElementById (id + "_kg").value; if ("" != temp) obj.kg = temp;
                temp = document.getElementById (id + "_kia").value; if ("" != temp) obj.kia = temp;
                temp = document.getElementById (id + "_klr").value; if ("" != temp) obj.klr = temp;
                temp = document.getElementById (id + "_km").value; if ("" != temp) obj.km = temp;
                temp = document.getElementById (id + "_kpa").value; if ("" != temp) obj.kpa = temp;
                temp = document.getElementById (id + "_oelin").value; if ("" != temp) { temp = ExcST6BOELselectorKind[temp]; if ("undefined" != typeof (temp)) obj.oelin = "http://iec.ch/TC57/2013/CIM-schema-cim16#ExcST6BOELselectorKind." + temp; }
                temp = document.getElementById (id + "_tg").value; if ("" != temp) obj.tg = temp;
                temp = document.getElementById (id + "_vamax").value; if ("" != temp) obj.vamax = temp;
                temp = document.getElementById (id + "_vamin").value; if ("" != temp) obj.vamin = temp;
                temp = document.getElementById (id + "_vrmax").value; if ("" != temp) obj.vrmax = temp;
                temp = document.getElementById (id + "_vrmin").value; if ("" != temp) obj.vrmin = temp;

                return (obj);
            }
        }

        return (
            {
                ExcAVR3: ExcAVR3,
                ExcAVR7: ExcAVR7,
                ExcAVR1: ExcAVR1,
                ExcST4B: ExcST4B,
                ExcIEEEDC1A: ExcIEEEDC1A,
                ExcIEEEAC4A: ExcIEEEAC4A,
                ExcPIC: ExcPIC,
                ExcST2A: ExcST2A,
                ExcAC4A: ExcAC4A,
                ExcIEEEST4B: ExcIEEEST4B,
                ExcIEEEST2A: ExcIEEEST2A,
                ExcIEEEST7B: ExcIEEEST7B,
                ExcAVR4: ExcAVR4,
                ExcST7B: ExcST7B,
                ExcIEEEAC7B: ExcIEEEAC7B,
                ExcIEEEAC5A: ExcIEEEAC5A,
                ExcIEEEAC2A: ExcIEEEAC2A,
                ExcAVR2: ExcAVR2,
                ExcBBC: ExcBBC,
                ExcST1A: ExcST1A,
                ExcIEEEDC2A: ExcIEEEDC2A,
                ExcIEEEDC4B: ExcIEEEDC4B,
                ExcAC3A: ExcAC3A,
                ExcCZ: ExcCZ,
                ExcSCRX: ExcSCRX,
                ExcDC2A: ExcDC2A,
                ExcST6B: ExcST6B,
                ExcIEEEST5B: ExcIEEEST5B,
                ExcIEEEST3A: ExcIEEEST3A,
                ExcAC2A: ExcAC2A,
                ExcIEEEAC8B: ExcIEEEAC8B,
                ExcIEEEAC3A: ExcIEEEAC3A,
                ExcIEEEAC6A: ExcIEEEAC6A,
                ExcELIN2: ExcELIN2,
                ExcIEEEDC3A: ExcIEEEDC3A,
                ExcAC6A: ExcAC6A,
                ExcDC1A: ExcDC1A,
                ExcOEX3T: ExcOEX3T,
                ExcitationSystemDynamics: ExcitationSystemDynamics,
                ExcAC1A: ExcAC1A,
                ExcDC3A: ExcDC3A,
                ExcHU: ExcHU,
                ExcELIN1: ExcELIN1,
                ExcREXS: ExcREXS,
                ExcST3A: ExcST3A,
                ExcSK: ExcSK,
                ExcDC3A1: ExcDC3A1,
                ExcIEEEST6B: ExcIEEEST6B,
                ExcIEEEST1A: ExcIEEEST1A,
                ExcAC5A: ExcAC5A,
                ExcAC8B: ExcAC8B,
                ExcIEEEAC1A: ExcIEEEAC1A,
                ExcANS: ExcANS,
                ExcAVR5: ExcAVR5,
                ExcSEXS: ExcSEXS
            }
        );
    }
);