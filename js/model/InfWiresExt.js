define
(
    ["model/base", "model/Core", "model/InfAssetInfo", "model/Wires"],
    function (base, Core, InfAssetInfo, Wires)
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
                let bucket = cim_data.SVC;
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
                let obj = Wires.ShuntCompensator.prototype.parse.call (this, context, sub);
                obj.cls = "SVC";
                base.parse_element (/<cim:SVC.capacitiveRating>([\s\S]*?)<\/cim:SVC.capacitiveRating>/g, obj, "capacitiveRating", base.to_string, sub, context);
                base.parse_element (/<cim:SVC.inductiveRating>([\s\S]*?)<\/cim:SVC.inductiveRating>/g, obj, "inductiveRating", base.to_string, sub, context);
                let bucket = context.parsed.SVC;
                if (null == bucket)
                   context.parsed.SVC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.ShuntCompensator.prototype.export.call (this, obj, false);

                base.export_element (obj, "SVC", "capacitiveRating", "capacitiveRating",  base.from_string, fields);
                base.export_element (obj, "SVC", "inductiveRating", "inductiveRating",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#SVC_collapse" aria-expanded="true" aria-controls="SVC_collapse" style="margin-left: 10px;">SVC</a></legend>
                    <div id="SVC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.template.call (this) +
                    `
                    {{#capacitiveRating}}<div><b>capacitiveRating</b>: {{capacitiveRating}}</div>{{/capacitiveRating}}
                    {{#inductiveRating}}<div><b>inductiveRating</b>: {{inductiveRating}}</div>{{/inductiveRating}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_SVC_collapse" aria-expanded="true" aria-controls="{{id}}_SVC_collapse" style="margin-left: 10px;">SVC</a></legend>
                    <div id="{{id}}_SVC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.ShuntCompensator.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_capacitiveRating'>capacitiveRating: </label><div class='col-sm-8'><input id='{{id}}_capacitiveRating' class='form-control' type='text'{{#capacitiveRating}} value='{{capacitiveRating}}'{{/capacitiveRating}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_inductiveRating'>inductiveRating: </label><div class='col-sm-8'><input id='{{id}}_inductiveRating' class='form-control' type='text'{{#inductiveRating}} value='{{inductiveRating}}'{{/inductiveRating}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "SVC" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_capacitiveRating").value; if ("" !== temp) obj["capacitiveRating"] = temp;
                temp = document.getElementById (id + "_inductiveRating").value; if ("" !== temp) obj["inductiveRating"] = temp;

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
                let bucket = cim_data.ShuntCompensatorControl;
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
                let obj = Wires.RegulatingControl.prototype.parse.call (this, context, sub);
                obj.cls = "ShuntCompensatorControl";
                base.parse_attribute (/<cim:ShuntCompensatorControl.controlKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "controlKind", sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.localControlKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "localControlKind", sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOnLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOnLevel>/g, obj, "localOnLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOffLevel>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOffLevel>/g, obj, "localOffLevel", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.maxSwitchOperationCount>([\s\S]*?)<\/cim:ShuntCompensatorControl.maxSwitchOperationCount>/g, obj, "maxSwitchOperationCount", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.switchOperationCycle>([\s\S]*?)<\/cim:ShuntCompensatorControl.switchOperationCycle>/g, obj, "switchOperationCycle", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.normalOpen>([\s\S]*?)<\/cim:ShuntCompensatorControl.normalOpen>/g, obj, "normalOpen", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.sensingPhaseCode\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "sensingPhaseCode", sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.vRegLineLine>([\s\S]*?)<\/cim:ShuntCompensatorControl.vRegLineLine>/g, obj, "vRegLineLine", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranch>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranch>/g, obj, "regBranch", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.regBranchKind\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "regBranchKind", sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.branchDirect>([\s\S]*?)<\/cim:ShuntCompensatorControl.branchDirect>/g, obj, "branchDirect", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.regBranchEnd>([\s\S]*?)<\/cim:ShuntCompensatorControl.regBranchEnd>/g, obj, "regBranchEnd", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.localOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.localOverride>/g, obj, "localOverride", base.to_boolean, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.lowVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.lowVoltageOverride>/g, obj, "lowVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.highVoltageOverride>([\s\S]*?)<\/cim:ShuntCompensatorControl.highVoltageOverride>/g, obj, "highVoltageOverride", base.to_string, sub, context);
                base.parse_element (/<cim:ShuntCompensatorControl.cellSize>([\s\S]*?)<\/cim:ShuntCompensatorControl.cellSize>/g, obj, "cellSize", base.to_string, sub, context);
                base.parse_attribute (/<cim:ShuntCompensatorControl.ShuntCompensatorInfo\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ShuntCompensatorInfo", sub, context);
                let bucket = context.parsed.ShuntCompensatorControl;
                if (null == bucket)
                   context.parsed.ShuntCompensatorControl = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Wires.RegulatingControl.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ShuntCompensatorControl", "controlKind", "controlKind", fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "localControlKind", "localControlKind", fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOnLevel", "localOnLevel",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOffLevel", "localOffLevel",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "maxSwitchOperationCount", "maxSwitchOperationCount",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "switchOperationCycle", "switchOperationCycle",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "normalOpen", "normalOpen",  base.from_boolean, fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "sensingPhaseCode", "sensingPhaseCode", fields);
                base.export_element (obj, "ShuntCompensatorControl", "vRegLineLine", "vRegLineLine",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranch", "regBranch",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "regBranchKind", "regBranchKind", fields);
                base.export_element (obj, "ShuntCompensatorControl", "branchDirect", "branchDirect",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "regBranchEnd", "regBranchEnd",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "localOverride", "localOverride",  base.from_boolean, fields);
                base.export_element (obj, "ShuntCompensatorControl", "lowVoltageOverride", "lowVoltageOverride",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "highVoltageOverride", "highVoltageOverride",  base.from_string, fields);
                base.export_element (obj, "ShuntCompensatorControl", "cellSize", "cellSize",  base.from_string, fields);
                base.export_attribute (obj, "ShuntCompensatorControl", "ShuntCompensatorInfo", "ShuntCompensatorInfo", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ShuntCompensatorControl_collapse" aria-expanded="true" aria-controls="ShuntCompensatorControl_collapse" style="margin-left: 10px;">ShuntCompensatorControl</a></legend>
                    <div id="ShuntCompensatorControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.RegulatingControl.prototype.template.call (this) +
                    `
                    {{#controlKind}}<div><b>controlKind</b>: {{controlKind}}</div>{{/controlKind}}
                    {{#localControlKind}}<div><b>localControlKind</b>: {{localControlKind}}</div>{{/localControlKind}}
                    {{#localOnLevel}}<div><b>localOnLevel</b>: {{localOnLevel}}</div>{{/localOnLevel}}
                    {{#localOffLevel}}<div><b>localOffLevel</b>: {{localOffLevel}}</div>{{/localOffLevel}}
                    {{#maxSwitchOperationCount}}<div><b>maxSwitchOperationCount</b>: {{maxSwitchOperationCount}}</div>{{/maxSwitchOperationCount}}
                    {{#switchOperationCycle}}<div><b>switchOperationCycle</b>: {{switchOperationCycle}}</div>{{/switchOperationCycle}}
                    {{#normalOpen}}<div><b>normalOpen</b>: {{normalOpen}}</div>{{/normalOpen}}
                    {{#sensingPhaseCode}}<div><b>sensingPhaseCode</b>: {{sensingPhaseCode}}</div>{{/sensingPhaseCode}}
                    {{#vRegLineLine}}<div><b>vRegLineLine</b>: {{vRegLineLine}}</div>{{/vRegLineLine}}
                    {{#regBranch}}<div><b>regBranch</b>: {{regBranch}}</div>{{/regBranch}}
                    {{#regBranchKind}}<div><b>regBranchKind</b>: {{regBranchKind}}</div>{{/regBranchKind}}
                    {{#branchDirect}}<div><b>branchDirect</b>: {{branchDirect}}</div>{{/branchDirect}}
                    {{#regBranchEnd}}<div><b>regBranchEnd</b>: {{regBranchEnd}}</div>{{/regBranchEnd}}
                    {{#localOverride}}<div><b>localOverride</b>: {{localOverride}}</div>{{/localOverride}}
                    {{#lowVoltageOverride}}<div><b>lowVoltageOverride</b>: {{lowVoltageOverride}}</div>{{/lowVoltageOverride}}
                    {{#highVoltageOverride}}<div><b>highVoltageOverride</b>: {{highVoltageOverride}}</div>{{/highVoltageOverride}}
                    {{#cellSize}}<div><b>cellSize</b>: {{cellSize}}</div>{{/cellSize}}
                    {{#ShuntCompensatorInfo}}<div><b>ShuntCompensatorInfo</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ShuntCompensatorInfo}}&quot;);}); return false;'>{{ShuntCompensatorInfo}}</a></div>{{/ShuntCompensatorInfo}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["controlKindShuntImpedanceControlKind"] = [{ id: '', selected: (!obj["controlKind"])}]; for (let property in InfAssetInfo.ShuntImpedanceControlKind) obj["controlKindShuntImpedanceControlKind"].push ({ id: property, selected: obj["controlKind"] && obj["controlKind"].endsWith ('.' + property)});
                obj["localControlKindShuntImpedanceLocalControlKind"] = [{ id: '', selected: (!obj["localControlKind"])}]; for (let property in InfAssetInfo.ShuntImpedanceLocalControlKind) obj["localControlKindShuntImpedanceLocalControlKind"].push ({ id: property, selected: obj["localControlKind"] && obj["localControlKind"].endsWith ('.' + property)});
                obj["sensingPhaseCodePhaseCode"] = [{ id: '', selected: (!obj["sensingPhaseCode"])}]; for (let property in Core.PhaseCode) obj["sensingPhaseCodePhaseCode"].push ({ id: property, selected: obj["sensingPhaseCode"] && obj["sensingPhaseCode"].endsWith ('.' + property)});
                obj["regBranchKindRegulationBranchKind"] = [{ id: '', selected: (!obj["regBranchKind"])}]; for (let property in InfAssetInfo.RegulationBranchKind) obj["regBranchKindRegulationBranchKind"].push ({ id: property, selected: obj["regBranchKind"] && obj["regBranchKind"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["controlKindShuntImpedanceControlKind"];
                delete obj["localControlKindShuntImpedanceLocalControlKind"];
                delete obj["sensingPhaseCodePhaseCode"];
                delete obj["regBranchKindRegulationBranchKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ShuntCompensatorControl_collapse" aria-expanded="true" aria-controls="{{id}}_ShuntCompensatorControl_collapse" style="margin-left: 10px;">ShuntCompensatorControl</a></legend>
                    <div id="{{id}}_ShuntCompensatorControl_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Wires.RegulatingControl.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_controlKind'>controlKind: </label><div class='col-sm-8'><select id='{{id}}_controlKind' class='form-control custom-select'>{{#controlKindShuntImpedanceControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/controlKindShuntImpedanceControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localControlKind'>localControlKind: </label><div class='col-sm-8'><select id='{{id}}_localControlKind' class='form-control custom-select'>{{#localControlKindShuntImpedanceLocalControlKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/localControlKindShuntImpedanceLocalControlKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localOnLevel'>localOnLevel: </label><div class='col-sm-8'><input id='{{id}}_localOnLevel' class='form-control' type='text'{{#localOnLevel}} value='{{localOnLevel}}'{{/localOnLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localOffLevel'>localOffLevel: </label><div class='col-sm-8'><input id='{{id}}_localOffLevel' class='form-control' type='text'{{#localOffLevel}} value='{{localOffLevel}}'{{/localOffLevel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_maxSwitchOperationCount'>maxSwitchOperationCount: </label><div class='col-sm-8'><input id='{{id}}_maxSwitchOperationCount' class='form-control' type='text'{{#maxSwitchOperationCount}} value='{{maxSwitchOperationCount}}'{{/maxSwitchOperationCount}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_switchOperationCycle'>switchOperationCycle: </label><div class='col-sm-8'><input id='{{id}}_switchOperationCycle' class='form-control' type='text'{{#switchOperationCycle}} value='{{switchOperationCycle}}'{{/switchOperationCycle}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_normalOpen'>normalOpen: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_normalOpen' class='form-check-input' type='checkbox'{{#normalOpen}} checked{{/normalOpen}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_sensingPhaseCode'>sensingPhaseCode: </label><div class='col-sm-8'><select id='{{id}}_sensingPhaseCode' class='form-control custom-select'>{{#sensingPhaseCodePhaseCode}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/sensingPhaseCodePhaseCode}}</select></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_vRegLineLine'>vRegLineLine: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_vRegLineLine' class='form-check-input' type='checkbox'{{#vRegLineLine}} checked{{/vRegLineLine}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranch'>regBranch: </label><div class='col-sm-8'><input id='{{id}}_regBranch' class='form-control' type='text'{{#regBranch}} value='{{regBranch}}'{{/regBranch}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranchKind'>regBranchKind: </label><div class='col-sm-8'><select id='{{id}}_regBranchKind' class='form-control custom-select'>{{#regBranchKindRegulationBranchKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/regBranchKindRegulationBranchKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_branchDirect'>branchDirect: </label><div class='col-sm-8'><input id='{{id}}_branchDirect' class='form-control' type='text'{{#branchDirect}} value='{{branchDirect}}'{{/branchDirect}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_regBranchEnd'>regBranchEnd: </label><div class='col-sm-8'><input id='{{id}}_regBranchEnd' class='form-control' type='text'{{#regBranchEnd}} value='{{regBranchEnd}}'{{/regBranchEnd}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_localOverride'>localOverride: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_localOverride' class='form-check-input' type='checkbox'{{#localOverride}} checked{{/localOverride}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_lowVoltageOverride'>lowVoltageOverride: </label><div class='col-sm-8'><input id='{{id}}_lowVoltageOverride' class='form-control' type='text'{{#lowVoltageOverride}} value='{{lowVoltageOverride}}'{{/lowVoltageOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_highVoltageOverride'>highVoltageOverride: </label><div class='col-sm-8'><input id='{{id}}_highVoltageOverride' class='form-control' type='text'{{#highVoltageOverride}} value='{{highVoltageOverride}}'{{/highVoltageOverride}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_cellSize'>cellSize: </label><div class='col-sm-8'><input id='{{id}}_cellSize' class='form-control' type='text'{{#cellSize}} value='{{cellSize}}'{{/cellSize}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ShuntCompensatorInfo'>ShuntCompensatorInfo: </label><div class='col-sm-8'><input id='{{id}}_ShuntCompensatorInfo' class='form-control' type='text'{{#ShuntCompensatorInfo}} value='{{ShuntCompensatorInfo}}'{{/ShuntCompensatorInfo}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ShuntCompensatorControl" };
                super.submit (id, obj);
                temp = InfAssetInfo.ShuntImpedanceControlKind[document.getElementById (id + "_controlKind").value]; if (temp) obj["controlKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ShuntImpedanceControlKind." + temp; else delete obj["controlKind"];
                temp = InfAssetInfo.ShuntImpedanceLocalControlKind[document.getElementById (id + "_localControlKind").value]; if (temp) obj["localControlKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ShuntImpedanceLocalControlKind." + temp; else delete obj["localControlKind"];
                temp = document.getElementById (id + "_localOnLevel").value; if ("" !== temp) obj["localOnLevel"] = temp;
                temp = document.getElementById (id + "_localOffLevel").value; if ("" !== temp) obj["localOffLevel"] = temp;
                temp = document.getElementById (id + "_maxSwitchOperationCount").value; if ("" !== temp) obj["maxSwitchOperationCount"] = temp;
                temp = document.getElementById (id + "_switchOperationCycle").value; if ("" !== temp) obj["switchOperationCycle"] = temp;
                temp = document.getElementById (id + "_normalOpen").checked; if (temp) obj["normalOpen"] = true;
                temp = Core.PhaseCode[document.getElementById (id + "_sensingPhaseCode").value]; if (temp) obj["sensingPhaseCode"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#PhaseCode." + temp; else delete obj["sensingPhaseCode"];
                temp = document.getElementById (id + "_vRegLineLine").checked; if (temp) obj["vRegLineLine"] = true;
                temp = document.getElementById (id + "_regBranch").value; if ("" !== temp) obj["regBranch"] = temp;
                temp = InfAssetInfo.RegulationBranchKind[document.getElementById (id + "_regBranchKind").value]; if (temp) obj["regBranchKind"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#RegulationBranchKind." + temp; else delete obj["regBranchKind"];
                temp = document.getElementById (id + "_branchDirect").value; if ("" !== temp) obj["branchDirect"] = temp;
                temp = document.getElementById (id + "_regBranchEnd").value; if ("" !== temp) obj["regBranchEnd"] = temp;
                temp = document.getElementById (id + "_localOverride").checked; if (temp) obj["localOverride"] = true;
                temp = document.getElementById (id + "_lowVoltageOverride").value; if ("" !== temp) obj["lowVoltageOverride"] = temp;
                temp = document.getElementById (id + "_highVoltageOverride").value; if ("" !== temp) obj["highVoltageOverride"] = temp;
                temp = document.getElementById (id + "_cellSize").value; if ("" !== temp) obj["cellSize"] = temp;
                temp = document.getElementById (id + "_ShuntCompensatorInfo").value; if ("" !== temp) obj["ShuntCompensatorInfo"] = temp;

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