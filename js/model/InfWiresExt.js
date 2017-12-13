define
(
    ["model/base", "model/Wires"],
    function (base, Wires)
    {

        /**
         * SVC asset allows the capacitive and inductive ratings for each phase to be specified individually if required.
         *
         */
        class SVC extends Wires.ShuntCompensator
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SVC;
                if (null == bucket)
                   cim_data.SVC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SVC[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "SVC";
                base.parse_element (/<cim:SVC.capacitiveRating>([\s\S]*?)<\/cim:SVC.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);
                base.parse_element (/<cim:SVC.inductiveRating>([\s\S]*?)<\/cim:SVC.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);
                var bucket = context.parsed.SVC;
                if (null == bucket)
                   context.parsed.SVC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_element (obj, "SVC", "capacitiveRating", "capacitiveRating",  base.from_string, fields);
                base.export_element (obj, "SVC", "inductiveRating", "inductiveRating",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SVC_collapse" aria-expanded="true" aria-controls="SVC_collapse" style="margin-left: 10px;">SVC</a></legend>
                    <div id="SVC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.template.call (this) +
                    `
                    {{#capacitiveRating}}<div><b>capacitiveRating</b>: {{capacitiveRating}}</div>{{/capacitiveRating}}
                    {{#inductiveRating}}<div><b>inductiveRating</b>: {{inductiveRating}}</div>{{/inductiveRating}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SVC_collapse" aria-expanded="true" aria-controls="{{id}}_SVC_collapse" style="margin-left: 10px;">SVC</a></legend>
                    <div id="{{id}}_SVC_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitiveRating'>capacitiveRating: </label><div class='col-sm-8'><input id='{{id}}_capacitiveRating' class='form-control' type='text'{{#capacitiveRating}} value='{{capacitiveRating}}'{{/capacitiveRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductiveRating'>inductiveRating: </label><div class='col-sm-8'><input id='{{id}}_inductiveRating' class='form-control' type='text'{{#inductiveRating}} value='{{inductiveRating}}'{{/inductiveRating}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SVC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacitiveRating").value; if ("" != temp) obj.capacitiveRating = temp;
                temp = document.getElementById (id + "_inductiveRating").value; if ("" != temp) obj.inductiveRating = temp;

                return (obj);
            }
        }

        /**
         * Distribution capacitor bank control settings.
         *
         */
        class ShuntCompensatorControl extends Wires.RegulatingControl
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ShuntCompensatorControl;
                if (null == bucket)
                   cim_data.ShuntCompensatorControl = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ShuntCompensatorControl[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.RegulatingControl.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorControl";
                base.parse_element (/<cim:ShuntCompensatorControl.branchDirect>([\s\S]*?)<\/cim:ShuntCompensatorControl.branchDirect>/g, obj, "branchDirect", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.cellSize>([\s\S]*?)<\/cim:ShuntCompensatorControl.cellSize>/g, obj, "cellSize", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.controlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.controlKind>/g, obj, "controlKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.highVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.highVoltageOverride>/g, obj, "highVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localControlKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.localControlKind>/g, obj, "localControlKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOffLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOffLevel>/g, obj, "localOffLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOnLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOnLevel>/g, obj, "localOnLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOverride>/g, obj, "localOverride", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.lowVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.lowVoltageOverride>/g, obj, "lowVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.maxSwitchOperationCount>([\s\S]*?)<\/cim:ShuntCompensatorControl.maxSwitchOperationCount>/g, obj, "maxSwitchOperationCount", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.normalOpen>([\s\S]*?)<\/cim:ShuntCompensatorControl.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranch>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranch>/g, obj, "regBranch", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranchEnd>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchEnd>/g, obj, "regBranchEnd", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranchKind>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchKind>/g, obj, "regBranchKind", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.sensingPhaseCode>([\s\S]*?)<\/cim:ShuntCompensatorControl.sensingPhaseCode>/g, obj, "sensingPhaseCode", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.switchOperationCycle>([\s\S]*?)<\/cim:ShuntCompensatorControl.switchOperationCycle>/g, obj, "switchOperationCycle", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.vRegLineLine>([\s\S]*?)<\/cim:ShuntCompensatorControl.vRegLineLine>/g, obj, "vRegLineLine", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.ShuntCompensatorInfo\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorInfo", sub, context);
                var bucket = context.parsed.ShuntCompensatorControl;
                if (null == bucket)
                   context.parsed.ShuntCompensatorControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.RegulatingControl.prototype.export.call (this, obj, false);

                base.export_element (obj, "ShuntCompensatorControl", "branchDirect", "branchDirect",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "cellSize", "cellSize",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "controlKind", "controlKind",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "highVoltageOverride", "highVoltageOverride",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localControlKind", "localControlKind",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOffLevel", "localOffLevel",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOnLevel", "localOnLevel",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOverride", "localOverride",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "lowVoltageOverride", "lowVoltageOverride",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "maxSwitchOperationCount", "maxSwitchOperationCount",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "normalOpen", "normalOpen",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranch", "regBranch",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranchEnd", "regBranchEnd",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranchKind", "regBranchKind",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "sensingPhaseCode", "sensingPhaseCode",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "switchOperationCycle", "switchOperationCycle",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "vRegLineLine", "vRegLineLine",  base.from_boolean, fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "ShuntCompensatorInfo", "ShuntCompensatorInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ShuntCompensatorControl_collapse" aria-expanded="true" aria-controls="ShuntCompensatorControl_collapse" style="margin-left: 10px;">ShuntCompensatorControl</a></legend>
                    <div id="ShuntCompensatorControl_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.RegulatingControl.prototype.template.call (this) +
                    `
                    {{#branchDirect}}<div><b>branchDirect</b>: {{branchDirect}}</div>{{/branchDirect}}
                    {{#cellSize}}<div><b>cellSize</b>: {{cellSize}}</div>{{/cellSize}}
                    {{#controlKind}}<div><b>controlKind</b>: {{controlKind}}</div>{{/controlKind}}
                    {{#highVoltageOverride}}<div><b>highVoltageOverride</b>: {{highVoltageOverride}}</div>{{/highVoltageOverride}}
                    {{#localControlKind}}<div><b>localControlKind</b>: {{localControlKind}}</div>{{/localControlKind}}
                    {{#localOffLevel}}<div><b>localOffLevel</b>: {{localOffLevel}}</div>{{/localOffLevel}}
                    {{#localOnLevel}}<div><b>localOnLevel</b>: {{localOnLevel}}</div>{{/localOnLevel}}
                    {{#localOverride}}<div><b>localOverride</b>: {{localOverride}}</div>{{/localOverride}}
                    {{#lowVoltageOverride}}<div><b>lowVoltageOverride</b>: {{lowVoltageOverride}}</div>{{/lowVoltageOverride}}
                    {{#maxSwitchOperationCount}}<div><b>maxSwitchOperationCount</b>: {{maxSwitchOperationCount}}</div>{{/maxSwitchOperationCount}}
                    {{#normalOpen}}<div><b>normalOpen</b>: {{normalOpen}}</div>{{/normalOpen}}
                    {{#regBranch}}<div><b>regBranch</b>: {{regBranch}}</div>{{/regBranch}}
                    {{#regBranchEnd}}<div><b>regBranchEnd</b>: {{regBranchEnd}}</div>{{/regBranchEnd}}
                    {{#regBranchKind}}<div><b>regBranchKind</b>: {{regBranchKind}}</div>{{/regBranchKind}}
                    {{#sensingPhaseCode}}<div><b>sensingPhaseCode</b>: {{sensingPhaseCode}}</div>{{/sensingPhaseCode}}
                    {{#switchOperationCycle}}<div><b>switchOperationCycle</b>: {{switchOperationCycle}}</div>{{/switchOperationCycle}}
                    {{#vRegLineLine}}<div><b>vRegLineLine</b>: {{vRegLineLine}}</div>{{/vRegLineLine}}
                    {{#ShuntCompensatorInfo}}<div><b>ShuntCompensatorInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ShuntCompensatorInfo}}&quot;);})'>{{ShuntCompensatorInfo}}</a></div>{{/ShuntCompensatorInfo}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ShuntCompensatorControl_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensatorControl_collapse" style="margin-left: 10px;">ShuntCompensatorControl</a></legend>
                    <div id="{{id}}_ShuntCompensatorControl_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Wires.RegulatingControl.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_branchDirect'>branchDirect: </label><div class='col-sm-8'><input id='{{id}}_branchDirect' class='form-control' type='text'{{#branchDirect}} value='{{branchDirect}}'{{/branchDirect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cellSize'>cellSize: </label><div class='col-sm-8'><input id='{{id}}_cellSize' class='form-control' type='text'{{#cellSize}} value='{{cellSize}}'{{/cellSize}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlKind'>controlKind: </label><div class='col-sm-8'><input id='{{id}}_controlKind' class='form-control' type='text'{{#controlKind}} value='{{controlKind}}'{{/controlKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highVoltageOverride'>highVoltageOverride: </label><div class='col-sm-8'><input id='{{id}}_highVoltageOverride' class='form-control' type='text'{{#highVoltageOverride}} value='{{highVoltageOverride}}'{{/highVoltageOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localControlKind'>localControlKind: </label><div class='col-sm-8'><input id='{{id}}_localControlKind' class='form-control' type='text'{{#localControlKind}} value='{{localControlKind}}'{{/localControlKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localOffLevel'>localOffLevel: </label><div class='col-sm-8'><input id='{{id}}_localOffLevel' class='form-control' type='text'{{#localOffLevel}} value='{{localOffLevel}}'{{/localOffLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localOnLevel'>localOnLevel: </label><div class='col-sm-8'><input id='{{id}}_localOnLevel' class='form-control' type='text'{{#localOnLevel}} value='{{localOnLevel}}'{{/localOnLevel}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_localOverride'>localOverride: </label><div class='col-sm-8'><input id='{{id}}_localOverride' class='form-check-input' type='checkbox'{{#localOverride}} checked{{/localOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowVoltageOverride'>lowVoltageOverride: </label><div class='col-sm-8'><input id='{{id}}_lowVoltageOverride' class='form-control' type='text'{{#lowVoltageOverride}} value='{{lowVoltageOverride}}'{{/lowVoltageOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxSwitchOperationCount'>maxSwitchOperationCount: </label><div class='col-sm-8'><input id='{{id}}_maxSwitchOperationCount' class='form-control' type='text'{{#maxSwitchOperationCount}} value='{{maxSwitchOperationCount}}'{{/maxSwitchOperationCount}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_normalOpen'>normalOpen: </label><div class='col-sm-8'><input id='{{id}}_normalOpen' class='form-check-input' type='checkbox'{{#normalOpen}} checked{{/normalOpen}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranch'>regBranch: </label><div class='col-sm-8'><input id='{{id}}_regBranch' class='form-control' type='text'{{#regBranch}} value='{{regBranch}}'{{/regBranch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranchEnd'>regBranchEnd: </label><div class='col-sm-8'><input id='{{id}}_regBranchEnd' class='form-control' type='text'{{#regBranchEnd}} value='{{regBranchEnd}}'{{/regBranchEnd}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranchKind'>regBranchKind: </label><div class='col-sm-8'><input id='{{id}}_regBranchKind' class='form-control' type='text'{{#regBranchKind}} value='{{regBranchKind}}'{{/regBranchKind}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sensingPhaseCode'>sensingPhaseCode: </label><div class='col-sm-8'><input id='{{id}}_sensingPhaseCode' class='form-control' type='text'{{#sensingPhaseCode}} value='{{sensingPhaseCode}}'{{/sensingPhaseCode}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOperationCycle'>switchOperationCycle: </label><div class='col-sm-8'><input id='{{id}}_switchOperationCycle' class='form-control' type='text'{{#switchOperationCycle}} value='{{switchOperationCycle}}'{{/switchOperationCycle}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='{{id}}_vRegLineLine'>vRegLineLine: </label><div class='col-sm-8'><input id='{{id}}_vRegLineLine' class='form-check-input' type='checkbox'{{#vRegLineLine}} checked{{/vRegLineLine}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShuntCompensatorInfo'>ShuntCompensatorInfo: </label><div class='col-sm-8'><input id='{{id}}_ShuntCompensatorInfo' class='form-control' type='text'{{#ShuntCompensatorInfo}} value='{{ShuntCompensatorInfo}}'{{/ShuntCompensatorInfo}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ShuntCompensatorControl" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_branchDirect").value; if ("" != temp) obj.branchDirect = temp;
                temp = document.getElementById (id + "_cellSize").value; if ("" != temp) obj.cellSize = temp;
                temp = document.getElementById (id + "_controlKind").value; if ("" != temp) obj.controlKind = temp;
                temp = document.getElementById (id + "_highVoltageOverride").value; if ("" != temp) obj.highVoltageOverride = temp;
                temp = document.getElementById (id + "_localControlKind").value; if ("" != temp) obj.localControlKind = temp;
                temp = document.getElementById (id + "_localOffLevel").value; if ("" != temp) obj.localOffLevel = temp;
                temp = document.getElementById (id + "_localOnLevel").value; if ("" != temp) obj.localOnLevel = temp;
                temp = document.getElementById (id + "_localOverride").checked; if (temp) obj.localOverride = true;
                temp = document.getElementById (id + "_lowVoltageOverride").value; if ("" != temp) obj.lowVoltageOverride = temp;
                temp = document.getElementById (id + "_maxSwitchOperationCount").value; if ("" != temp) obj.maxSwitchOperationCount = temp;
                temp = document.getElementById (id + "_normalOpen").checked; if (temp) obj.normalOpen = true;
                temp = document.getElementById (id + "_regBranch").value; if ("" != temp) obj.regBranch = temp;
                temp = document.getElementById (id + "_regBranchEnd").value; if ("" != temp) obj.regBranchEnd = temp;
                temp = document.getElementById (id + "_regBranchKind").value; if ("" != temp) obj.regBranchKind = temp;
                temp = document.getElementById (id + "_sensingPhaseCode").value; if ("" != temp) obj.sensingPhaseCode = temp;
                temp = document.getElementById (id + "_switchOperationCycle").value; if ("" != temp) obj.switchOperationCycle = temp;
                temp = document.getElementById (id + "_vRegLineLine").checked; if (temp) obj.vRegLineLine = true;
                temp = document.getElementById (id + "_ShuntCompensatorInfo").value; if ("" != temp) obj.ShuntCompensatorInfo = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ShuntCompensatorInfo", "0..1", "0..1", "ShuntCompensatorInfo", "ShuntCompensatorControl"]
                        ]
                    )
                );
            }
        }

        return (
            {
                SVC: SVC,
                ShuntCompensatorControl: ShuntCompensatorControl
            }
        );
    }
);