define
(
    ["model/base", "model/Core"],
    /**
     * An extension to the Core and Wires packages that models information for protection equipment such as relays.
     *
     * These entities are used within training simulators and distribution network fault location applications.
     *
     */
    function (base, Core)
    {

        /**
         * A reclose sequence (open and close) is defined for each possible reclosure of a breaker.
         *
         */
        class RecloseSequence extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.RecloseSequence;
                if (null == bucket)
                   cim_data.RecloseSequence = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RecloseSequence[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "RecloseSequence";
                base.parse_element (/<cim:RecloseSequence.recloseDelay>([\s\S]*?)<\/cim:RecloseSequence.recloseDelay>/g, obj, "recloseDelay", base.to_string, sub, context);
                base.parse_element (/<cim:RecloseSequence.recloseStep>([\s\S]*?)<\/cim:RecloseSequence.recloseStep>/g, obj, "recloseStep", base.to_string, sub, context);
                base.parse_attribute (/<cim:RecloseSequence.ProtectedSwitch\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectedSwitch", sub, context);
                var bucket = context.parsed.RecloseSequence;
                if (null == bucket)
                   context.parsed.RecloseSequence = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "RecloseSequence", "recloseDelay", "recloseDelay",  base.from_string, fields);
                base.export_element (obj, "RecloseSequence", "recloseStep", "recloseStep",  base.from_string, fields);
                base.export_attribute (obj, "RecloseSequence", "ProtectedSwitch", "ProtectedSwitch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RecloseSequence_collapse" aria-expanded="true" aria-controls="RecloseSequence_collapse" style="margin-left: 10px;">RecloseSequence</a></legend>
                    <div id="RecloseSequence_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#recloseDelay}}<div><b>recloseDelay</b>: {{recloseDelay}}</div>{{/recloseDelay}}
                    {{#recloseStep}}<div><b>recloseStep</b>: {{recloseStep}}</div>{{/recloseStep}}
                    {{#ProtectedSwitch}}<div><b>ProtectedSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProtectedSwitch}}&quot;);})'>{{ProtectedSwitch}}</a></div>{{/ProtectedSwitch}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RecloseSequence_collapse" aria-expanded="true" aria-controls="RecloseSequence_collapse" style="margin-left: 10px;">RecloseSequence</a></legend>
                    <div id="RecloseSequence_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='recloseDelay'>recloseDelay: </label><div class='col-sm-8'><input id='recloseDelay' class='form-control' type='text'{{#recloseDelay}} value='{{recloseDelay}}'{{/recloseDelay}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='recloseStep'>recloseStep: </label><div class='col-sm-8'><input id='recloseStep' class='form-control' type='text'{{#recloseStep}} value='{{recloseStep}}'{{/recloseStep}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProtectedSwitch'>ProtectedSwitch: </label><div class='col-sm-8'><input id='ProtectedSwitch' class='form-control' type='text'{{#ProtectedSwitch}} value='{{ProtectedSwitch}}'{{/ProtectedSwitch}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "RecloseSequence" };
                super.submit (obj);
                temp = document.getElementById ("recloseDelay").value; if ("" != temp) obj.recloseDelay = temp;
                temp = document.getElementById ("recloseStep").value; if ("" != temp) obj.recloseStep = temp;
                temp = document.getElementById ("ProtectedSwitch").value; if ("" != temp) obj.ProtectedSwitch = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProtectedSwitch", "ProtectedSwitch", "1", "0..*"]
                    ]
                );
            }
        }

        /**
         * An electrical device designed to respond to input conditions in a prescribed manner and after specified conditions are met to cause contact operation or similar abrupt change in associated electric control circuits, or simply to display the detected condition.
         *
         * Protection equipment are associated with conducting equipment and usually operate circuit breakers.
         *
         */
        class ProtectionEquipment extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ProtectionEquipment;
                if (null == bucket)
                   cim_data.ProtectionEquipment = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProtectionEquipment[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "ProtectionEquipment";
                base.parse_element (/<cim:ProtectionEquipment.highLimit>([\s\S]*?)<\/cim:ProtectionEquipment.highLimit>/g, obj, "highLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ProtectionEquipment.lowLimit>([\s\S]*?)<\/cim:ProtectionEquipment.lowLimit>/g, obj, "lowLimit", base.to_float, sub, context);
                base.parse_element (/<cim:ProtectionEquipment.powerDirectionFlag>([\s\S]*?)<\/cim:ProtectionEquipment.powerDirectionFlag>/g, obj, "powerDirectionFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:ProtectionEquipment.relayDelayTime>([\s\S]*?)<\/cim:ProtectionEquipment.relayDelayTime>/g, obj, "relayDelayTime", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectionEquipment.unitMultiplier>([\s\S]*?)<\/cim:ProtectionEquipment.unitMultiplier>/g, obj, "unitMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ProtectionEquipment.unitSymbol>([\s\S]*?)<\/cim:ProtectionEquipment.unitSymbol>/g, obj, "unitSymbol", base.to_string, sub, context);
                base.parse_attributes (/<cim:ProtectionEquipment.ProtectiveAction\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectiveAction", sub, context);
                base.parse_attributes (/<cim:ProtectionEquipment.ConductingEquipments\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ConductingEquipments", sub, context);
                base.parse_attributes (/<cim:ProtectionEquipment.ProtectedSwitches\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProtectedSwitches", sub, context);
                var bucket = context.parsed.ProtectionEquipment;
                if (null == bucket)
                   context.parsed.ProtectionEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectionEquipment", "highLimit", "highLimit",  base.from_float, fields);
                base.export_element (obj, "ProtectionEquipment", "lowLimit", "lowLimit",  base.from_float, fields);
                base.export_element (obj, "ProtectionEquipment", "powerDirectionFlag", "powerDirectionFlag",  base.from_boolean, fields);
                base.export_element (obj, "ProtectionEquipment", "relayDelayTime", "relayDelayTime",  base.from_string, fields);
                base.export_element (obj, "ProtectionEquipment", "unitMultiplier", "unitMultiplier",  base.from_string, fields);
                base.export_element (obj, "ProtectionEquipment", "unitSymbol", "unitSymbol",  base.from_string, fields);
                base.export_attributes (obj, "ProtectionEquipment", "ProtectiveAction", "ProtectiveAction", fields);
                base.export_attributes (obj, "ProtectionEquipment", "ConductingEquipments", "ConductingEquipments", fields);
                base.export_attributes (obj, "ProtectionEquipment", "ProtectedSwitches", "ProtectedSwitches", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectionEquipment_collapse" aria-expanded="true" aria-controls="ProtectionEquipment_collapse" style="margin-left: 10px;">ProtectionEquipment</a></legend>
                    <div id="ProtectionEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.template.call (this) +
                    `
                    {{#highLimit}}<div><b>highLimit</b>: {{highLimit}}</div>{{/highLimit}}
                    {{#lowLimit}}<div><b>lowLimit</b>: {{lowLimit}}</div>{{/lowLimit}}
                    {{#powerDirectionFlag}}<div><b>powerDirectionFlag</b>: {{powerDirectionFlag}}</div>{{/powerDirectionFlag}}
                    {{#relayDelayTime}}<div><b>relayDelayTime</b>: {{relayDelayTime}}</div>{{/relayDelayTime}}
                    {{#unitMultiplier}}<div><b>unitMultiplier</b>: {{unitMultiplier}}</div>{{/unitMultiplier}}
                    {{#unitSymbol}}<div><b>unitSymbol</b>: {{unitSymbol}}</div>{{/unitSymbol}}
                    {{#ProtectiveAction}}<div><b>ProtectiveAction</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProtectiveAction}}
                    {{#ConductingEquipments}}<div><b>ConductingEquipments</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ConductingEquipments}}
                    {{#ProtectedSwitches}}<div><b>ProtectedSwitches</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);})'>{{.}}</a></div>{{/ProtectedSwitches}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProtectiveAction) obj.ProtectiveAction_string = obj.ProtectiveAction.join ();
                if (obj.ConductingEquipments) obj.ConductingEquipments_string = obj.ConductingEquipments.join ();
                if (obj.ProtectedSwitches) obj.ProtectedSwitches_string = obj.ProtectedSwitches.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProtectiveAction_string;
                delete obj.ConductingEquipments_string;
                delete obj.ProtectedSwitches_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ProtectionEquipment_collapse" aria-expanded="true" aria-controls="ProtectionEquipment_collapse" style="margin-left: 10px;">ProtectionEquipment</a></legend>
                    <div id="ProtectionEquipment_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.Equipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='highLimit'>highLimit: </label><div class='col-sm-8'><input id='highLimit' class='form-control' type='text'{{#highLimit}} value='{{highLimit}}'{{/highLimit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='lowLimit'>lowLimit: </label><div class='col-sm-8'><input id='lowLimit' class='form-control' type='text'{{#lowLimit}} value='{{lowLimit}}'{{/lowLimit}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='powerDirectionFlag'>powerDirectionFlag: </label><div class='col-sm-8'><input id='powerDirectionFlag' class='form-check-input' type='checkbox'{{#powerDirectionFlag}} checked{{/powerDirectionFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='relayDelayTime'>relayDelayTime: </label><div class='col-sm-8'><input id='relayDelayTime' class='form-control' type='text'{{#relayDelayTime}} value='{{relayDelayTime}}'{{/relayDelayTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitMultiplier'>unitMultiplier: </label><div class='col-sm-8'><input id='unitMultiplier' class='form-control' type='text'{{#unitMultiplier}} value='{{unitMultiplier}}'{{/unitMultiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unitSymbol'>unitSymbol: </label><div class='col-sm-8'><input id='unitSymbol' class='form-control' type='text'{{#unitSymbol}} value='{{unitSymbol}}'{{/unitSymbol}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ConductingEquipments'>ConductingEquipments: </label><div class='col-sm-8'><input id='ConductingEquipments' class='form-control' type='text'{{#ConductingEquipments}} value='{{ConductingEquipments}}_string'{{/ConductingEquipments}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ProtectedSwitches'>ProtectedSwitches: </label><div class='col-sm-8'><input id='ProtectedSwitches' class='form-control' type='text'{{#ProtectedSwitches}} value='{{ProtectedSwitches}}_string'{{/ProtectedSwitches}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "ProtectionEquipment" };
                super.submit (obj);
                temp = document.getElementById ("highLimit").value; if ("" != temp) obj.highLimit = temp;
                temp = document.getElementById ("lowLimit").value; if ("" != temp) obj.lowLimit = temp;
                temp = document.getElementById ("powerDirectionFlag").checked; if (temp) obj.powerDirectionFlag = true;
                temp = document.getElementById ("relayDelayTime").value; if ("" != temp) obj.relayDelayTime = temp;
                temp = document.getElementById ("unitMultiplier").value; if ("" != temp) obj.unitMultiplier = temp;
                temp = document.getElementById ("unitSymbol").value; if ("" != temp) obj.unitSymbol = temp;
                temp = document.getElementById ("ConductingEquipments").value; if ("" != temp) obj.ConductingEquipments = temp.split (",");
                temp = document.getElementById ("ProtectedSwitches").value; if ("" != temp) obj.ProtectedSwitches = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    [
                        ["ProtectiveAction", "ProtectiveAction", "0..*", "0..1"],
                        ["ConductingEquipments", "ConductingEquipment", "0..*", "0..*"],
                        ["ProtectedSwitches", "ProtectedSwitch", "0..*", "0..*"]
                    ]
                );
            }
        }

        /**
         * A device that checks current flow values in any direction or designated direction.
         *
         */
        class CurrentRelay extends ProtectionEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CurrentRelay;
                if (null == bucket)
                   cim_data.CurrentRelay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentRelay[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectionEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentRelay";
                base.parse_element (/<cim:CurrentRelay.currentLimit1>([\s\S]*?)<\/cim:CurrentRelay.currentLimit1>/g, obj, "currentLimit1", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentRelay.currentLimit2>([\s\S]*?)<\/cim:CurrentRelay.currentLimit2>/g, obj, "currentLimit2", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentRelay.currentLimit3>([\s\S]*?)<\/cim:CurrentRelay.currentLimit3>/g, obj, "currentLimit3", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentRelay.inverseTimeFlag>([\s\S]*?)<\/cim:CurrentRelay.inverseTimeFlag>/g, obj, "inverseTimeFlag", base.to_boolean, sub, context);
                base.parse_element (/<cim:CurrentRelay.timeDelay1>([\s\S]*?)<\/cim:CurrentRelay.timeDelay1>/g, obj, "timeDelay1", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentRelay.timeDelay2>([\s\S]*?)<\/cim:CurrentRelay.timeDelay2>/g, obj, "timeDelay2", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentRelay.timeDelay3>([\s\S]*?)<\/cim:CurrentRelay.timeDelay3>/g, obj, "timeDelay3", base.to_string, sub, context);
                var bucket = context.parsed.CurrentRelay;
                if (null == bucket)
                   context.parsed.CurrentRelay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectionEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "CurrentRelay", "currentLimit1", "currentLimit1",  base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "currentLimit2", "currentLimit2",  base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "currentLimit3", "currentLimit3",  base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "inverseTimeFlag", "inverseTimeFlag",  base.from_boolean, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay1", "timeDelay1",  base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay2", "timeDelay2",  base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay3", "timeDelay3",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentRelay_collapse" aria-expanded="true" aria-controls="CurrentRelay_collapse" style="margin-left: 10px;">CurrentRelay</a></legend>
                    <div id="CurrentRelay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectionEquipment.prototype.template.call (this) +
                    `
                    {{#currentLimit1}}<div><b>currentLimit1</b>: {{currentLimit1}}</div>{{/currentLimit1}}
                    {{#currentLimit2}}<div><b>currentLimit2</b>: {{currentLimit2}}</div>{{/currentLimit2}}
                    {{#currentLimit3}}<div><b>currentLimit3</b>: {{currentLimit3}}</div>{{/currentLimit3}}
                    {{#inverseTimeFlag}}<div><b>inverseTimeFlag</b>: {{inverseTimeFlag}}</div>{{/inverseTimeFlag}}
                    {{#timeDelay1}}<div><b>timeDelay1</b>: {{timeDelay1}}</div>{{/timeDelay1}}
                    {{#timeDelay2}}<div><b>timeDelay2</b>: {{timeDelay2}}</div>{{/timeDelay2}}
                    {{#timeDelay3}}<div><b>timeDelay3</b>: {{timeDelay3}}</div>{{/timeDelay3}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentRelay_collapse" aria-expanded="true" aria-controls="CurrentRelay_collapse" style="margin-left: 10px;">CurrentRelay</a></legend>
                    <div id="CurrentRelay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectionEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentLimit1'>currentLimit1: </label><div class='col-sm-8'><input id='currentLimit1' class='form-control' type='text'{{#currentLimit1}} value='{{currentLimit1}}'{{/currentLimit1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentLimit2'>currentLimit2: </label><div class='col-sm-8'><input id='currentLimit2' class='form-control' type='text'{{#currentLimit2}} value='{{currentLimit2}}'{{/currentLimit2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='currentLimit3'>currentLimit3: </label><div class='col-sm-8'><input id='currentLimit3' class='form-control' type='text'{{#currentLimit3}} value='{{currentLimit3}}'{{/currentLimit3}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='inverseTimeFlag'>inverseTimeFlag: </label><div class='col-sm-8'><input id='inverseTimeFlag' class='form-check-input' type='checkbox'{{#inverseTimeFlag}} checked{{/inverseTimeFlag}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeDelay1'>timeDelay1: </label><div class='col-sm-8'><input id='timeDelay1' class='form-control' type='text'{{#timeDelay1}} value='{{timeDelay1}}'{{/timeDelay1}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeDelay2'>timeDelay2: </label><div class='col-sm-8'><input id='timeDelay2' class='form-control' type='text'{{#timeDelay2}} value='{{timeDelay2}}'{{/timeDelay2}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='timeDelay3'>timeDelay3: </label><div class='col-sm-8'><input id='timeDelay3' class='form-control' type='text'{{#timeDelay3}} value='{{timeDelay3}}'{{/timeDelay3}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "CurrentRelay" };
                super.submit (obj);
                temp = document.getElementById ("currentLimit1").value; if ("" != temp) obj.currentLimit1 = temp;
                temp = document.getElementById ("currentLimit2").value; if ("" != temp) obj.currentLimit2 = temp;
                temp = document.getElementById ("currentLimit3").value; if ("" != temp) obj.currentLimit3 = temp;
                temp = document.getElementById ("inverseTimeFlag").checked; if (temp) obj.inverseTimeFlag = true;
                temp = document.getElementById ("timeDelay1").value; if ("" != temp) obj.timeDelay1 = temp;
                temp = document.getElementById ("timeDelay2").value; if ("" != temp) obj.timeDelay2 = temp;
                temp = document.getElementById ("timeDelay3").value; if ("" != temp) obj.timeDelay3 = temp;

                return (obj);
            }
        }

        /**
         * A device that operates when two AC circuits are within the desired limits of frequency, phase angle, and voltage, to permit or to cause the paralleling of these two circuits.
         *
         * Used to prevent the paralleling of non-synchronous topological islands.
         *
         */
        class SynchrocheckRelay extends ProtectionEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.SynchrocheckRelay;
                if (null == bucket)
                   cim_data.SynchrocheckRelay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SynchrocheckRelay[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ProtectionEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "SynchrocheckRelay";
                base.parse_element (/<cim:SynchrocheckRelay.maxAngleDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxAngleDiff>/g, obj, "maxAngleDiff", base.to_string, sub, context);
                base.parse_element (/<cim:SynchrocheckRelay.maxFreqDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxFreqDiff>/g, obj, "maxFreqDiff", base.to_string, sub, context);
                base.parse_element (/<cim:SynchrocheckRelay.maxVoltDiff>([\s\S]*?)<\/cim:SynchrocheckRelay.maxVoltDiff>/g, obj, "maxVoltDiff", base.to_string, sub, context);
                var bucket = context.parsed.SynchrocheckRelay;
                if (null == bucket)
                   context.parsed.SynchrocheckRelay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ProtectionEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "SynchrocheckRelay", "maxAngleDiff", "maxAngleDiff",  base.from_string, fields);
                base.export_element (obj, "SynchrocheckRelay", "maxFreqDiff", "maxFreqDiff",  base.from_string, fields);
                base.export_element (obj, "SynchrocheckRelay", "maxVoltDiff", "maxVoltDiff",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchrocheckRelay_collapse" aria-expanded="true" aria-controls="SynchrocheckRelay_collapse" style="margin-left: 10px;">SynchrocheckRelay</a></legend>
                    <div id="SynchrocheckRelay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectionEquipment.prototype.template.call (this) +
                    `
                    {{#maxAngleDiff}}<div><b>maxAngleDiff</b>: {{maxAngleDiff}}</div>{{/maxAngleDiff}}
                    {{#maxFreqDiff}}<div><b>maxFreqDiff</b>: {{maxFreqDiff}}</div>{{/maxFreqDiff}}
                    {{#maxVoltDiff}}<div><b>maxVoltDiff</b>: {{maxVoltDiff}}</div>{{/maxVoltDiff}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SynchrocheckRelay_collapse" aria-expanded="true" aria-controls="SynchrocheckRelay_collapse" style="margin-left: 10px;">SynchrocheckRelay</a></legend>
                    <div id="SynchrocheckRelay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ProtectionEquipment.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxAngleDiff'>maxAngleDiff: </label><div class='col-sm-8'><input id='maxAngleDiff' class='form-control' type='text'{{#maxAngleDiff}} value='{{maxAngleDiff}}'{{/maxAngleDiff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxFreqDiff'>maxFreqDiff: </label><div class='col-sm-8'><input id='maxFreqDiff' class='form-control' type='text'{{#maxFreqDiff}} value='{{maxFreqDiff}}'{{/maxFreqDiff}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='maxVoltDiff'>maxVoltDiff: </label><div class='col-sm-8'><input id='maxVoltDiff' class='form-control' type='text'{{#maxVoltDiff}} value='{{maxVoltDiff}}'{{/maxVoltDiff}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (obj)
            {
                var temp;

                var obj = obj || { cls: "SynchrocheckRelay" };
                super.submit (obj);
                temp = document.getElementById ("maxAngleDiff").value; if ("" != temp) obj.maxAngleDiff = temp;
                temp = document.getElementById ("maxFreqDiff").value; if ("" != temp) obj.maxFreqDiff = temp;
                temp = document.getElementById ("maxVoltDiff").value; if ("" != temp) obj.maxVoltDiff = temp;

                return (obj);
            }
        }

        return (
            {
                SynchrocheckRelay: SynchrocheckRelay,
                CurrentRelay: CurrentRelay,
                RecloseSequence: RecloseSequence,
                ProtectionEquipment: ProtectionEquipment
            }
        );
    }
);