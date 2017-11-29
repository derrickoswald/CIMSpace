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
                this._id = template.id;
                var bucket = cim_data.RecloseSequence;
                if (null == bucket)
                   cim_data.RecloseSequence = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RecloseSequence[this._id];
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

                base.export_element (obj, "RecloseSequence", "recloseDelay", base.from_string, fields);
                base.export_element (obj, "RecloseSequence", "recloseStep", base.from_string, fields);
                base.export_attribute (obj, "RecloseSequence", "ProtectedSwitch", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#RecloseSequence_collapse" aria-expanded="true" aria-controls="RecloseSequence_collapse">RecloseSequence</a>
<div id="RecloseSequence_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#recloseDelay}}<div><b>recloseDelay</b>: {{recloseDelay}}</div>{{/recloseDelay}}
{{#recloseStep}}<div><b>recloseStep</b>: {{recloseStep}}</div>{{/recloseStep}}
{{#ProtectedSwitch}}<div><b>ProtectedSwitch</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ProtectedSwitch}}&quot;);})'>{{ProtectedSwitch}}</a></div>{{/ProtectedSwitch}}
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.ProtectionEquipment;
                if (null == bucket)
                   cim_data.ProtectionEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ProtectionEquipment[this._id];
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

                var bucket = context.parsed.ProtectionEquipment;
                if (null == bucket)
                   context.parsed.ProtectionEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "ProtectionEquipment", "highLimit", base.from_float, fields);
                base.export_element (obj, "ProtectionEquipment", "lowLimit", base.from_float, fields);
                base.export_element (obj, "ProtectionEquipment", "powerDirectionFlag", base.from_boolean, fields);
                base.export_element (obj, "ProtectionEquipment", "relayDelayTime", base.from_string, fields);
                base.export_element (obj, "ProtectionEquipment", "unitMultiplier", base.from_string, fields);
                base.export_element (obj, "ProtectionEquipment", "unitSymbol", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ProtectionEquipment_collapse" aria-expanded="true" aria-controls="ProtectionEquipment_collapse">ProtectionEquipment</a>
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
</div>
`
                );
           }        }

        /**
         * A device that checks current flow values in any direction or designated direction.
         *
         */
        class CurrentRelay extends ProtectionEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentRelay;
                if (null == bucket)
                   cim_data.CurrentRelay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentRelay[this._id];
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

                base.export_element (obj, "CurrentRelay", "currentLimit1", base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "currentLimit2", base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "currentLimit3", base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "inverseTimeFlag", base.from_boolean, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay1", base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay2", base.from_string, fields);
                base.export_element (obj, "CurrentRelay", "timeDelay3", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CurrentRelay_collapse" aria-expanded="true" aria-controls="CurrentRelay_collapse">CurrentRelay</a>
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
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.SynchrocheckRelay;
                if (null == bucket)
                   cim_data.SynchrocheckRelay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SynchrocheckRelay[this._id];
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

                base.export_element (obj, "SynchrocheckRelay", "maxAngleDiff", base.from_string, fields);
                base.export_element (obj, "SynchrocheckRelay", "maxFreqDiff", base.from_string, fields);
                base.export_element (obj, "SynchrocheckRelay", "maxVoltDiff", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#SynchrocheckRelay_collapse" aria-expanded="true" aria-controls="SynchrocheckRelay_collapse">SynchrocheckRelay</a>
<div id="SynchrocheckRelay_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ProtectionEquipment.prototype.template.call (this) +
`
{{#maxAngleDiff}}<div><b>maxAngleDiff</b>: {{maxAngleDiff}}</div>{{/maxAngleDiff}}
{{#maxFreqDiff}}<div><b>maxFreqDiff</b>: {{maxFreqDiff}}</div>{{/maxFreqDiff}}
{{#maxVoltDiff}}<div><b>maxVoltDiff</b>: {{maxVoltDiff}}</div>{{/maxVoltDiff}}
</div>
`
                );
           }        }

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