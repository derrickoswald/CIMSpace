define
(
    ["model/base", "model/Core"],
    /**
     * The package describe faults that may happen to conducting equipment, e.g. tree falling on a power line.
     *
     */
    function (base, Core)
    {

        /**
         * The type of fault connection among phases.
         *
         */
        class PhaseConnectedFaultKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PhaseConnectedFaultKind;
                if (null == bucket)
                   cim_data.PhaseConnectedFaultKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PhaseConnectedFaultKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PhaseConnectedFaultKind";
                base.parse_element (/<cim:PhaseConnectedFaultKind.lineToGround>([\s\S]*?)<\/cim:PhaseConnectedFaultKind.lineToGround>/g, obj, "lineToGround", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseConnectedFaultKind.lineToLine>([\s\S]*?)<\/cim:PhaseConnectedFaultKind.lineToLine>/g, obj, "lineToLine", base.to_string, sub, context);
                base.parse_element (/<cim:PhaseConnectedFaultKind.lineToLineToGround>([\s\S]*?)<\/cim:PhaseConnectedFaultKind.lineToLineToGround>/g, obj, "lineToLineToGround", base.to_string, sub, context);

                var bucket = context.parsed.PhaseConnectedFaultKind;
                if (null == bucket)
                   context.parsed.PhaseConnectedFaultKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "PhaseConnectedFaultKind", "lineToGround", base.from_string, fields);
                base.export_element (obj, "PhaseConnectedFaultKind", "lineToLine", base.from_string, fields);
                base.export_element (obj, "PhaseConnectedFaultKind", "lineToLineToGround", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Type of cause of the fault.
         *
         */
        class FaultCauseType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultCauseType;
                if (null == bucket)
                   cim_data.FaultCauseType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultCauseType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "FaultCauseType";

                var bucket = context.parsed.FaultCauseType;
                if (null == bucket)
                   context.parsed.FaultCauseType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Impedance description for the fault.
         *
         */
        class FaultImpedance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FaultImpedance;
                if (null == bucket)
                   cim_data.FaultImpedance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FaultImpedance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FaultImpedance";
                base.parse_element (/<cim:FaultImpedance.rGround>([\s\S]*?)<\/cim:FaultImpedance.rGround>/g, obj, "rGround", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.rLineToLine>([\s\S]*?)<\/cim:FaultImpedance.rLineToLine>/g, obj, "rLineToLine", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.xGround>([\s\S]*?)<\/cim:FaultImpedance.xGround>/g, obj, "xGround", base.to_string, sub, context);
                base.parse_element (/<cim:FaultImpedance.xLineToLine>([\s\S]*?)<\/cim:FaultImpedance.xLineToLine>/g, obj, "xLineToLine", base.to_string, sub, context);

                var bucket = context.parsed.FaultImpedance;
                if (null == bucket)
                   context.parsed.FaultImpedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "FaultImpedance", "rGround", base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "rLineToLine", base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "xGround", base.from_string, fields);
                base.export_element (obj, "FaultImpedance", "xLineToLine", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Abnormal condition causing current flow through conducting equipment, such as caused by equipment failure or short circuits from objects not typically modeled (for example, a tree falling on a line).
         *
         */
        class Fault extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Fault;
                if (null == bucket)
                   cim_data.Fault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Fault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Fault";
                base.parse_element (/<cim:Fault.kind>([\s\S]*?)<\/cim:Fault.kind>/g, obj, "kind", base.to_string, sub, context);
                base.parse_element (/<cim:Fault.phases>([\s\S]*?)<\/cim:Fault.phases>/g, obj, "phases", base.to_string, sub, context);
                base.parse_element (/<cim:Fault.impedance>([\s\S]*?)<\/cim:Fault.impedance>/g, obj, "impedance", base.to_string, sub, context);
                base.parse_attribute (/<cim:Fault.FaultyEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "FaultyEquipment", sub, context);
                base.parse_attribute (/<cim:Fault.Outage\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Outage", sub, context);

                var bucket = context.parsed.Fault;
                if (null == bucket)
                   context.parsed.Fault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Fault", "kind", base.from_string, fields);
                base.export_element (obj, "Fault", "phases", base.from_string, fields);
                base.export_element (obj, "Fault", "impedance", base.from_string, fields);
                base.export_attribute (obj, "Fault", "FaultyEquipment", fields);
                base.export_attribute (obj, "Fault", "Outage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A fault that occurs on an AC line segment at some point along the length.
         *
         */
        class LineFault extends Fault
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.LineFault;
                if (null == bucket)
                   cim_data.LineFault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.LineFault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Fault.prototype.parse.call (this, context, sub);
                obj.cls = "LineFault";
                base.parse_element (/<cim:LineFault.lengthFromTerminal1>([\s\S]*?)<\/cim:LineFault.lengthFromTerminal1>/g, obj, "lengthFromTerminal1", base.to_string, sub, context);
                base.parse_attribute (/<cim:LineFault.ACLineSegment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ACLineSegment", sub, context);

                var bucket = context.parsed.LineFault;
                if (null == bucket)
                   context.parsed.LineFault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Fault"](obj, exporters, false);

                base.export_element (obj, "LineFault", "lengthFromTerminal1", base.from_string, fields);
                base.export_attribute (obj, "LineFault", "ACLineSegment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A fault applied at the terminal, external to the equipment.
         *
         * This class is not used to specify faults internal to the equipment.
         *
         */
        class EquipmentFault extends Fault
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.EquipmentFault;
                if (null == bucket)
                   cim_data.EquipmentFault = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.EquipmentFault[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Fault.prototype.parse.call (this, context, sub);
                obj.cls = "EquipmentFault";
                base.parse_attribute (/<cim:EquipmentFault.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);

                var bucket = context.parsed.EquipmentFault;
                if (null == bucket)
                   context.parsed.EquipmentFault = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["Fault"](obj, exporters, false);

                base.export_attribute (obj, "EquipmentFault", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                LineFault: LineFault,
                FaultCauseType: FaultCauseType,
                Fault: Fault,
                PhaseConnectedFaultKind: PhaseConnectedFaultKind,
                FaultImpedance: FaultImpedance,
                EquipmentFault: EquipmentFault
            }
        );
    }
);