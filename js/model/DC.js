define
(
    ["model/base", "model/Core", "model/Wires"],
    /**
     * This package contains model for direct current equipment and controls.
     *
     */
    function (base, Core, Wires)
    {

        /**
         * DC nodes are points where terminals of DC conducting equipment are connected together with zero impedance.
         *
         */
        class DCNode extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCNode;
                if (null == bucket)
                   cim_data.DCNode = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCNode[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCNode";
                base.parse_attribute (/<cim:DCNode.DCTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNode", sub, context);
                base.parse_attribute (/<cim:DCNode.DCEquipmentContainer\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCEquipmentContainer", sub, context);

                var bucket = context.parsed.DCNode;
                if (null == bucket)
                   context.parsed.DCNode = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCNode", "DCTopologicalNode", fields);
                base.export_attribute (obj, "DCNode", "DCEquipmentContainer", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An electrically connected subset of the network.
         *
         * DC topological islands can change as the current network state changes: e.g. due to
         *
         */
        class DCTopologicalIsland extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCTopologicalIsland;
                if (null == bucket)
                   cim_data.DCTopologicalIsland = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCTopologicalIsland[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "DCTopologicalIsland";

                var bucket = context.parsed.DCTopologicalIsland;
                if (null == bucket)
                   context.parsed.DCTopologicalIsland = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Active power control modes for HVDC line operating as Current Source Converter.
         *
         */
        class CsPpccControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CsPpccControlKind;
                if (null == bucket)
                   cim_data.CsPpccControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CsPpccControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CsPpccControlKind";
                base.parse_element (/<cim:CsPpccControlKind.activePower>([\s\S]*?)<\/cim:CsPpccControlKind.activePower>/g, obj, "activePower", base.to_string, sub, context);
                base.parse_element (/<cim:CsPpccControlKind.dcVoltage>([\s\S]*?)<\/cim:CsPpccControlKind.dcVoltage>/g, obj, "dcVoltage", base.to_string, sub, context);
                base.parse_element (/<cim:CsPpccControlKind.dcCurrent>([\s\S]*?)<\/cim:CsPpccControlKind.dcCurrent>/g, obj, "dcCurrent", base.to_string, sub, context);

                var bucket = context.parsed.CsPpccControlKind;
                if (null == bucket)
                   context.parsed.CsPpccControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CsPpccControlKind", "activePower", base.from_string, fields);
                base.export_element (obj, "CsPpccControlKind", "dcVoltage", base.from_string, fields);
                base.export_element (obj, "CsPpccControlKind", "dcCurrent", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The operating mode of an HVDC bipole.
         *
         */
        class DCConverterOperatingModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCConverterOperatingModeKind;
                if (null == bucket)
                   cim_data.DCConverterOperatingModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCConverterOperatingModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DCConverterOperatingModeKind";
                base.parse_element (/<cim:DCConverterOperatingModeKind.bipolar>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.bipolar>/g, obj, "bipolar", base.to_string, sub, context);
                base.parse_element (/<cim:DCConverterOperatingModeKind.monopolarMetallicReturn>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.monopolarMetallicReturn>/g, obj, "monopolarMetallicReturn", base.to_string, sub, context);
                base.parse_element (/<cim:DCConverterOperatingModeKind.monopolarGroundReturn>([\s\S]*?)<\/cim:DCConverterOperatingModeKind.monopolarGroundReturn>/g, obj, "monopolarGroundReturn", base.to_string, sub, context);

                var bucket = context.parsed.DCConverterOperatingModeKind;
                if (null == bucket)
                   context.parsed.DCConverterOperatingModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DCConverterOperatingModeKind", "bipolar", base.from_string, fields);
                base.export_element (obj, "DCConverterOperatingModeKind", "monopolarMetallicReturn", base.from_string, fields);
                base.export_element (obj, "DCConverterOperatingModeKind", "monopolarGroundReturn", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class VsQpccControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VsQpccControlKind;
                if (null == bucket)
                   cim_data.VsQpccControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VsQpccControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VsQpccControlKind";
                base.parse_element (/<cim:VsQpccControlKind.reactivePcc>([\s\S]*?)<\/cim:VsQpccControlKind.reactivePcc>/g, obj, "reactivePcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsQpccControlKind.voltagePcc>([\s\S]*?)<\/cim:VsQpccControlKind.voltagePcc>/g, obj, "voltagePcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsQpccControlKind.powerFactorPcc>([\s\S]*?)<\/cim:VsQpccControlKind.powerFactorPcc>/g, obj, "powerFactorPcc", base.to_string, sub, context);

                var bucket = context.parsed.VsQpccControlKind;
                if (null == bucket)
                   context.parsed.VsQpccControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "VsQpccControlKind", "reactivePcc", base.from_string, fields);
                base.export_element (obj, "VsQpccControlKind", "voltagePcc", base.from_string, fields);
                base.export_element (obj, "VsQpccControlKind", "powerFactorPcc", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An electrical connection point at a piece of DC conducting equipment.
         *
         * DC terminals are connected at one physical DC node that may have multiple DC terminals connected. A DC node is similar to an AC connectivity node. The model enforces that DC connections are distinct from AC connections.
         *
         */
        class DCBaseTerminal extends Core.ACDCTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCBaseTerminal;
                if (null == bucket)
                   cim_data.DCBaseTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCBaseTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ACDCTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "DCBaseTerminal";
                base.parse_attribute (/<cim:DCBaseTerminal.DCNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCNode", sub, context);
                base.parse_attribute (/<cim:DCBaseTerminal.DCTopologicalNode\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCTopologicalNode", sub, context);

                var bucket = context.parsed.DCBaseTerminal;
                if (null == bucket)
                   context.parsed.DCBaseTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ACDCTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCBaseTerminal", "DCNode", fields);
                base.export_attribute (obj, "DCBaseTerminal", "DCTopologicalNode", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A unit with valves for three phases, together with unit control equipment, essential protective and switching devices, DC storage capacitors, phase reactors and auxiliaries, if any, used for conversion.
         *
         */
        class ACDCConverter extends Core.ConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ACDCConverter;
                if (null == bucket)
                   cim_data.ACDCConverter = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ACDCConverter[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.ConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCConverter";
                base.parse_element (/<cim:ACDCConverter.baseS>([\s\S]*?)<\/cim:ACDCConverter.baseS>/g, obj, "baseS", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.switchingLoss>([\s\S]*?)<\/cim:ACDCConverter.switchingLoss>/g, obj, "switchingLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.targetPpcc>([\s\S]*?)<\/cim:ACDCConverter.targetPpcc>/g, obj, "targetPpcc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.targetUdc>([\s\S]*?)<\/cim:ACDCConverter.targetUdc>/g, obj, "targetUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.idc>([\s\S]*?)<\/cim:ACDCConverter.idc>/g, obj, "idc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.idleLoss>([\s\S]*?)<\/cim:ACDCConverter.idleLoss>/g, obj, "idleLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.maxUdc>([\s\S]*?)<\/cim:ACDCConverter.maxUdc>/g, obj, "maxUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.minUdc>([\s\S]*?)<\/cim:ACDCConverter.minUdc>/g, obj, "minUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.poleLossP>([\s\S]*?)<\/cim:ACDCConverter.poleLossP>/g, obj, "poleLossP", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.ratedUdc>([\s\S]*?)<\/cim:ACDCConverter.ratedUdc>/g, obj, "ratedUdc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.resistiveLoss>([\s\S]*?)<\/cim:ACDCConverter.resistiveLoss>/g, obj, "resistiveLoss", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.uc>([\s\S]*?)<\/cim:ACDCConverter.uc>/g, obj, "uc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.udc>([\s\S]*?)<\/cim:ACDCConverter.udc>/g, obj, "udc", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.valveU0>([\s\S]*?)<\/cim:ACDCConverter.valveU0>/g, obj, "valveU0", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.numberOfValves>([\s\S]*?)<\/cim:ACDCConverter.numberOfValves>/g, obj, "numberOfValves", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.p>([\s\S]*?)<\/cim:ACDCConverter.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:ACDCConverter.q>([\s\S]*?)<\/cim:ACDCConverter.q>/g, obj, "q", base.to_string, sub, context);
                base.parse_attribute (/<cim:ACDCConverter.PccTerminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PccTerminal", sub, context);

                var bucket = context.parsed.ACDCConverter;
                if (null == bucket)
                   context.parsed.ACDCConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.ConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACDCConverter", "baseS", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "switchingLoss", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "targetPpcc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "targetUdc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "idc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "idleLoss", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "maxUdc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "minUdc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "poleLossP", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "ratedUdc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "resistiveLoss", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "uc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "udc", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "valveU0", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "numberOfValves", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "p", base.from_string, fields);
                base.export_element (obj, "ACDCConverter", "q", base.from_string, fields);
                base.export_attribute (obj, "ACDCConverter", "PccTerminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class PerLengthDCLineParameter extends Wires.PerLengthLineParameter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PerLengthDCLineParameter;
                if (null == bucket)
                   cim_data.PerLengthDCLineParameter = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PerLengthDCLineParameter[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.PerLengthLineParameter.prototype.parse.call (this, context, sub);
                obj.cls = "PerLengthDCLineParameter";
                base.parse_element (/<cim:PerLengthDCLineParameter.capacitance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthDCLineParameter.inductance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.inductance>/g, obj, "inductance", base.to_string, sub, context);
                base.parse_element (/<cim:PerLengthDCLineParameter.resistance>([\s\S]*?)<\/cim:PerLengthDCLineParameter.resistance>/g, obj, "resistance", base.to_string, sub, context);

                var bucket = context.parsed.PerLengthDCLineParameter;
                if (null == bucket)
                   context.parsed.PerLengthDCLineParameter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Wires.PerLengthLineParameter.prototype.export.call (this, obj, false);

                base.export_element (obj, "PerLengthDCLineParameter", "capacitance", base.from_string, fields);
                base.export_element (obj, "PerLengthDCLineParameter", "inductance", base.from_string, fields);
                base.export_element (obj, "PerLengthDCLineParameter", "resistance", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Types applicable to the control of real power and/or DC voltage by voltage source converter.
         *
         */
        class VsPpccControlKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VsPpccControlKind;
                if (null == bucket)
                   cim_data.VsPpccControlKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VsPpccControlKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VsPpccControlKind";
                base.parse_element (/<cim:VsPpccControlKind.pPcc>([\s\S]*?)<\/cim:VsPpccControlKind.pPcc>/g, obj, "pPcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsPpccControlKind.udc>([\s\S]*?)<\/cim:VsPpccControlKind.udc>/g, obj, "udc", base.to_string, sub, context);
                base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroop>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroop>/g, obj, "pPccAndUdcDroop", base.to_string, sub, context);
                base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroopWithCompensation>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroopWithCompensation>/g, obj, "pPccAndUdcDroopWithCompensation", base.to_string, sub, context);
                base.parse_element (/<cim:VsPpccControlKind.pPccAndUdcDroopPilot>([\s\S]*?)<\/cim:VsPpccControlKind.pPccAndUdcDroopPilot>/g, obj, "pPccAndUdcDroopPilot", base.to_string, sub, context);

                var bucket = context.parsed.VsPpccControlKind;
                if (null == bucket)
                   context.parsed.VsPpccControlKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "VsPpccControlKind", "pPcc", base.from_string, fields);
                base.export_element (obj, "VsPpccControlKind", "udc", base.from_string, fields);
                base.export_element (obj, "VsPpccControlKind", "pPccAndUdcDroop", base.from_string, fields);
                base.export_element (obj, "VsPpccControlKind", "pPccAndUdcDroopWithCompensation", base.from_string, fields);
                base.export_element (obj, "VsPpccControlKind", "pPccAndUdcDroopPilot", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A modeling construct to provide a root class for containment of DC as well as AC equipment.
         *
         * The class differ from the EquipmentContaner for AC in that it may also contain DCNodes. Hence it can contain both AC and DC equipment.
         *
         */
        class DCEquipmentContainer extends Core.EquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCEquipmentContainer;
                if (null == bucket)
                   cim_data.DCEquipmentContainer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCEquipmentContainer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.EquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCEquipmentContainer";

                var bucket = context.parsed.DCEquipmentContainer;
                if (null == bucket)
                   context.parsed.DCEquipmentContainer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.EquipmentContainer.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The P-Q capability curve for a voltage source converter, with P on x-axis and Qmin and Qmax on y1-axis and y2-axis.
         *
         */
        class VsCapabilityCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VsCapabilityCurve;
                if (null == bucket)
                   cim_data.VsCapabilityCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VsCapabilityCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "VsCapabilityCurve";

                var bucket = context.parsed.VsCapabilityCurve;
                if (null == bucket)
                   context.parsed.VsCapabilityCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Operating mode for HVDC line operating as Current Source Converter.
         *
         */
        class CsOperatingModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CsOperatingModeKind;
                if (null == bucket)
                   cim_data.CsOperatingModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CsOperatingModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CsOperatingModeKind";
                base.parse_element (/<cim:CsOperatingModeKind.inverter>([\s\S]*?)<\/cim:CsOperatingModeKind.inverter>/g, obj, "inverter", base.to_string, sub, context);
                base.parse_element (/<cim:CsOperatingModeKind.rectifier>([\s\S]*?)<\/cim:CsOperatingModeKind.rectifier>/g, obj, "rectifier", base.to_string, sub, context);

                var bucket = context.parsed.CsOperatingModeKind;
                if (null == bucket)
                   context.parsed.CsOperatingModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CsOperatingModeKind", "inverter", base.from_string, fields);
                base.export_element (obj, "CsOperatingModeKind", "rectifier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Polarity for DC circuits.
         *
         */
        class DCPolarityKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCPolarityKind;
                if (null == bucket)
                   cim_data.DCPolarityKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCPolarityKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DCPolarityKind";
                base.parse_element (/<cim:DCPolarityKind.positive>([\s\S]*?)<\/cim:DCPolarityKind.positive>/g, obj, "positive", base.to_string, sub, context);
                base.parse_element (/<cim:DCPolarityKind.middle>([\s\S]*?)<\/cim:DCPolarityKind.middle>/g, obj, "middle", base.to_string, sub, context);
                base.parse_element (/<cim:DCPolarityKind.negative>([\s\S]*?)<\/cim:DCPolarityKind.negative>/g, obj, "negative", base.to_string, sub, context);

                var bucket = context.parsed.DCPolarityKind;
                if (null == bucket)
                   context.parsed.DCPolarityKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DCPolarityKind", "positive", base.from_string, fields);
                base.export_element (obj, "DCPolarityKind", "middle", base.from_string, fields);
                base.export_element (obj, "DCPolarityKind", "negative", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The parts of the DC power system that are designed to carry current or that are conductively connected through DC terminals.
         *
         */
        class DCConductingEquipment extends Core.Equipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCConductingEquipment;
                if (null == bucket)
                   cim_data.DCConductingEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCConductingEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Equipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCConductingEquipment";

                var bucket = context.parsed.DCConductingEquipment;
                if (null == bucket)
                   context.parsed.DCConductingEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Equipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A DC electrical connection point at the AC/DC converter.
         *
         * The AC/DC converter is electrically connected also to the AC side. The AC connection is inherited from the AC conducting equipment in the same way as any other AC equipment. The AC/DC converter DC terminal is separate from generic DC terminal to restrict the connection with the AC side to AC/DC converter and so that no other DC conducting equipment can be connected to the AC side.
         *
         */
        class ACDCConverterDCTerminal extends DCBaseTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ACDCConverterDCTerminal;
                if (null == bucket)
                   cim_data.ACDCConverterDCTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ACDCConverterDCTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCBaseTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "ACDCConverterDCTerminal";
                base.parse_element (/<cim:ACDCConverterDCTerminal.polarity>([\s\S]*?)<\/cim:ACDCConverterDCTerminal.polarity>/g, obj, "polarity", base.to_string, sub, context);
                base.parse_attribute (/<cim:ACDCConverterDCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);

                var bucket = context.parsed.ACDCConverterDCTerminal;
                if (null == bucket)
                   context.parsed.ACDCConverterDCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCBaseTerminal.prototype.export.call (this, obj, false);

                base.export_element (obj, "ACDCConverterDCTerminal", "polarity", base.from_string, fields);
                base.export_attribute (obj, "ACDCConverterDCTerminal", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An electrical connection point to generic DC conducting equipment.
         *
         */
        class DCTerminal extends DCBaseTerminal
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCTerminal;
                if (null == bucket)
                   cim_data.DCTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCBaseTerminal.prototype.parse.call (this, context, sub);
                obj.cls = "DCTerminal";
                base.parse_attribute (/<cim:DCTerminal.DCConductingEquipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "DCConductingEquipment", sub, context);

                var bucket = context.parsed.DCTerminal;
                if (null == bucket)
                   context.parsed.DCTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCBaseTerminal.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCTerminal", "DCConductingEquipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * DC side of the current source converter (CSC).
         *
         */
        class CsConverter extends ACDCConverter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CsConverter;
                if (null == bucket)
                   cim_data.CsConverter = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CsConverter[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ACDCConverter.prototype.parse.call (this, context, sub);
                obj.cls = "CsConverter";
                base.parse_element (/<cim:CsConverter.maxIdc>([\s\S]*?)<\/cim:CsConverter.maxIdc>/g, obj, "maxIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.ratedIdc>([\s\S]*?)<\/cim:CsConverter.ratedIdc>/g, obj, "ratedIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.pPccControl>([\s\S]*?)<\/cim:CsConverter.pPccControl>/g, obj, "pPccControl", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.alpha>([\s\S]*?)<\/cim:CsConverter.alpha>/g, obj, "alpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.gamma>([\s\S]*?)<\/cim:CsConverter.gamma>/g, obj, "gamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.maxAlpha>([\s\S]*?)<\/cim:CsConverter.maxAlpha>/g, obj, "maxAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.maxGamma>([\s\S]*?)<\/cim:CsConverter.maxGamma>/g, obj, "maxGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minAlpha>([\s\S]*?)<\/cim:CsConverter.minAlpha>/g, obj, "minAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minGamma>([\s\S]*?)<\/cim:CsConverter.minGamma>/g, obj, "minGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetAlpha>([\s\S]*?)<\/cim:CsConverter.targetAlpha>/g, obj, "targetAlpha", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetGamma>([\s\S]*?)<\/cim:CsConverter.targetGamma>/g, obj, "targetGamma", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.targetIdc>([\s\S]*?)<\/cim:CsConverter.targetIdc>/g, obj, "targetIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.minIdc>([\s\S]*?)<\/cim:CsConverter.minIdc>/g, obj, "minIdc", base.to_string, sub, context);
                base.parse_element (/<cim:CsConverter.operatingMode>([\s\S]*?)<\/cim:CsConverter.operatingMode>/g, obj, "operatingMode", base.to_string, sub, context);

                var bucket = context.parsed.CsConverter;
                if (null == bucket)
                   context.parsed.CsConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ACDCConverter.prototype.export.call (this, obj, false);

                base.export_element (obj, "CsConverter", "maxIdc", base.from_string, fields);
                base.export_element (obj, "CsConverter", "ratedIdc", base.from_string, fields);
                base.export_element (obj, "CsConverter", "pPccControl", base.from_string, fields);
                base.export_element (obj, "CsConverter", "alpha", base.from_string, fields);
                base.export_element (obj, "CsConverter", "gamma", base.from_string, fields);
                base.export_element (obj, "CsConverter", "maxAlpha", base.from_string, fields);
                base.export_element (obj, "CsConverter", "maxGamma", base.from_string, fields);
                base.export_element (obj, "CsConverter", "minAlpha", base.from_string, fields);
                base.export_element (obj, "CsConverter", "minGamma", base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetAlpha", base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetGamma", base.from_string, fields);
                base.export_element (obj, "CsConverter", "targetIdc", base.from_string, fields);
                base.export_element (obj, "CsConverter", "minIdc", base.from_string, fields);
                base.export_element (obj, "CsConverter", "operatingMode", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * DC side of the voltage source converter (VSC).
         *
         */
        class VsConverter extends ACDCConverter
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VsConverter;
                if (null == bucket)
                   cim_data.VsConverter = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VsConverter[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ACDCConverter.prototype.parse.call (this, context, sub);
                obj.cls = "VsConverter";
                base.parse_element (/<cim:VsConverter.pPccControl>([\s\S]*?)<\/cim:VsConverter.pPccControl>/g, obj, "pPccControl", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.qShare>([\s\S]*?)<\/cim:VsConverter.qShare>/g, obj, "qShare", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.targetQpcc>([\s\S]*?)<\/cim:VsConverter.targetQpcc>/g, obj, "targetQpcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.targetUpcc>([\s\S]*?)<\/cim:VsConverter.targetUpcc>/g, obj, "targetUpcc", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.droopCompensation>([\s\S]*?)<\/cim:VsConverter.droopCompensation>/g, obj, "droopCompensation", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.droop>([\s\S]*?)<\/cim:VsConverter.droop>/g, obj, "droop", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.delta>([\s\S]*?)<\/cim:VsConverter.delta>/g, obj, "delta", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.uf>([\s\S]*?)<\/cim:VsConverter.uf>/g, obj, "uf", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.maxValveCurrent>([\s\S]*?)<\/cim:VsConverter.maxValveCurrent>/g, obj, "maxValveCurrent", base.to_string, sub, context);
                base.parse_element (/<cim:VsConverter.maxModulationIndex>([\s\S]*?)<\/cim:VsConverter.maxModulationIndex>/g, obj, "maxModulationIndex", base.to_float, sub, context);
                base.parse_element (/<cim:VsConverter.qPccControl>([\s\S]*?)<\/cim:VsConverter.qPccControl>/g, obj, "qPccControl", base.to_string, sub, context);
                base.parse_attribute (/<cim:VsConverter.CapabilityCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CapabilityCurve", sub, context);

                var bucket = context.parsed.VsConverter;
                if (null == bucket)
                   context.parsed.VsConverter = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ACDCConverter.prototype.export.call (this, obj, false);

                base.export_element (obj, "VsConverter", "pPccControl", base.from_string, fields);
                base.export_element (obj, "VsConverter", "qShare", base.from_string, fields);
                base.export_element (obj, "VsConverter", "targetQpcc", base.from_string, fields);
                base.export_element (obj, "VsConverter", "targetUpcc", base.from_string, fields);
                base.export_element (obj, "VsConverter", "droopCompensation", base.from_string, fields);
                base.export_element (obj, "VsConverter", "droop", base.from_string, fields);
                base.export_element (obj, "VsConverter", "delta", base.from_string, fields);
                base.export_element (obj, "VsConverter", "uf", base.from_string, fields);
                base.export_element (obj, "VsConverter", "maxValveCurrent", base.from_string, fields);
                base.export_element (obj, "VsConverter", "maxModulationIndex", base.from_float, fields);
                base.export_element (obj, "VsConverter", "qPccControl", base.from_string, fields);
                base.export_attribute (obj, "VsConverter", "CapabilityCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Overhead lines and/or cables connecting two or more HVDC substations.
         *
         */
        class DCLine extends DCEquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCLine;
                if (null == bucket)
                   cim_data.DCLine = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCLine[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCEquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCLine";
                base.parse_attribute (/<cim:DCLine.Region\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Region", sub, context);

                var bucket = context.parsed.DCLine;
                if (null == bucket)
                   context.parsed.DCLine = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCEquipmentContainer.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "DCLine", "Region", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Indivisible operative unit comprising all equipment between the point of common coupling on the AC side and the point of common coupling � DC side, essentially one or more converters, together with one or more converter transformers, converter control equipment, essential protective and switching devices and auxiliaries, if any, used for conversion.
         *
         */
        class DCConverterUnit extends DCEquipmentContainer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCConverterUnit;
                if (null == bucket)
                   cim_data.DCConverterUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCConverterUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCEquipmentContainer.prototype.parse.call (this, context, sub);
                obj.cls = "DCConverterUnit";
                base.parse_element (/<cim:DCConverterUnit.operationMode>([\s\S]*?)<\/cim:DCConverterUnit.operationMode>/g, obj, "operationMode", base.to_string, sub, context);
                base.parse_attribute (/<cim:DCConverterUnit.Substation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Substation", sub, context);

                var bucket = context.parsed.DCConverterUnit;
                if (null == bucket)
                   context.parsed.DCConverterUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCEquipmentContainer.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCConverterUnit", "operationMode", base.from_string, fields);
                base.export_attribute (obj, "DCConverterUnit", "Substation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A switch within the DC system.
         *
         */
        class DCSwitch extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCSwitch;
                if (null == bucket)
                   cim_data.DCSwitch = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCSwitch[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCSwitch";

                var bucket = context.parsed.DCSwitch;
                if (null == bucket)
                   context.parsed.DCSwitch = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A disconnector within a DC system.
         *
         */
        class DCDisconnector extends DCSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCDisconnector;
                if (null == bucket)
                   cim_data.DCDisconnector = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCDisconnector[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "DCDisconnector";

                var bucket = context.parsed.DCDisconnector;
                if (null == bucket)
                   context.parsed.DCDisconnector = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A series device within the DC system, typically a reactor used for filtering or smoothing.
         *
         * Needed for transient and short circuit studies.
         *
         */
        class DCSeriesDevice extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCSeriesDevice;
                if (null == bucket)
                   cim_data.DCSeriesDevice = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCSeriesDevice[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCSeriesDevice";
                base.parse_element (/<cim:DCSeriesDevice.resistance>([\s\S]*?)<\/cim:DCSeriesDevice.resistance>/g, obj, "resistance", base.to_string, sub, context);
                base.parse_element (/<cim:DCSeriesDevice.inductance>([\s\S]*?)<\/cim:DCSeriesDevice.inductance>/g, obj, "inductance", base.to_string, sub, context);
                base.parse_element (/<cim:DCSeriesDevice.ratedUdc>([\s\S]*?)<\/cim:DCSeriesDevice.ratedUdc>/g, obj, "ratedUdc", base.to_string, sub, context);

                var bucket = context.parsed.DCSeriesDevice;
                if (null == bucket)
                   context.parsed.DCSeriesDevice = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCSeriesDevice", "resistance", base.from_string, fields);
                base.export_element (obj, "DCSeriesDevice", "inductance", base.from_string, fields);
                base.export_element (obj, "DCSeriesDevice", "ratedUdc", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A busbar within a DC system.
         *
         */
        class DCBusbar extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCBusbar;
                if (null == bucket)
                   cim_data.DCBusbar = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCBusbar[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCBusbar";

                var bucket = context.parsed.DCBusbar;
                if (null == bucket)
                   context.parsed.DCBusbar = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A shunt device within the DC system, typically used for filtering.
         *
         * Needed for transient and short circuit studies.
         *
         */
        class DCShunt extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCShunt;
                if (null == bucket)
                   cim_data.DCShunt = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCShunt[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCShunt";
                base.parse_element (/<cim:DCShunt.capacitance>([\s\S]*?)<\/cim:DCShunt.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:DCShunt.ratedUdc>([\s\S]*?)<\/cim:DCShunt.ratedUdc>/g, obj, "ratedUdc", base.to_string, sub, context);
                base.parse_element (/<cim:DCShunt.resistance>([\s\S]*?)<\/cim:DCShunt.resistance>/g, obj, "resistance", base.to_string, sub, context);

                var bucket = context.parsed.DCShunt;
                if (null == bucket)
                   context.parsed.DCShunt = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCShunt", "capacitance", base.from_string, fields);
                base.export_element (obj, "DCShunt", "ratedUdc", base.from_string, fields);
                base.export_element (obj, "DCShunt", "resistance", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A wire or combination of wires not insulated from one another, with consistent electrical characteristics, used to carry direct current between points in the DC region of the power system.
         *
         */
        class DCLineSegment extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCLineSegment;
                if (null == bucket)
                   cim_data.DCLineSegment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCLineSegment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCLineSegment";
                base.parse_element (/<cim:DCLineSegment.resistance>([\s\S]*?)<\/cim:DCLineSegment.resistance>/g, obj, "resistance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.capacitance>([\s\S]*?)<\/cim:DCLineSegment.capacitance>/g, obj, "capacitance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.inductance>([\s\S]*?)<\/cim:DCLineSegment.inductance>/g, obj, "inductance", base.to_string, sub, context);
                base.parse_element (/<cim:DCLineSegment.length>([\s\S]*?)<\/cim:DCLineSegment.length>/g, obj, "length", base.to_string, sub, context);
                base.parse_attribute (/<cim:DCLineSegment.PerLengthParameter\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "PerLengthParameter", sub, context);

                var bucket = context.parsed.DCLineSegment;
                if (null == bucket)
                   context.parsed.DCLineSegment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCLineSegment", "resistance", base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "capacitance", base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "inductance", base.from_string, fields);
                base.export_element (obj, "DCLineSegment", "length", base.from_string, fields);
                base.export_attribute (obj, "DCLineSegment", "PerLengthParameter", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A ground within a DC system.
         *
         */
        class DCGround extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCGround;
                if (null == bucket)
                   cim_data.DCGround = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCGround[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCGround";
                base.parse_element (/<cim:DCGround.r>([\s\S]*?)<\/cim:DCGround.r>/g, obj, "r", base.to_string, sub, context);
                base.parse_element (/<cim:DCGround.inductance>([\s\S]*?)<\/cim:DCGround.inductance>/g, obj, "inductance", base.to_string, sub, context);

                var bucket = context.parsed.DCGround;
                if (null == bucket)
                   context.parsed.DCGround = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                base.export_element (obj, "DCGround", "r", base.from_string, fields);
                base.export_element (obj, "DCGround", "inductance", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A breaker within a DC system.
         *
         */
        class DCBreaker extends DCSwitch
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCBreaker;
                if (null == bucket)
                   cim_data.DCBreaker = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCBreaker[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCSwitch.prototype.parse.call (this, context, sub);
                obj.cls = "DCBreaker";

                var bucket = context.parsed.DCBreaker;
                if (null == bucket)
                   context.parsed.DCBreaker = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCSwitch.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Low resistance equipment used in the internal DC circuit to balance voltages.
         *
         * It has typically positive and negative pole terminals and a ground.
         *
         */
        class DCChopper extends DCConductingEquipment
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DCChopper;
                if (null == bucket)
                   cim_data.DCChopper = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DCChopper[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = DCConductingEquipment.prototype.parse.call (this, context, sub);
                obj.cls = "DCChopper";

                var bucket = context.parsed.DCChopper;
                if (null == bucket)
                   context.parsed.DCChopper = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = DCConductingEquipment.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                DCShunt: DCShunt,
                DCEquipmentContainer: DCEquipmentContainer,
                VsQpccControlKind: VsQpccControlKind,
                DCGround: DCGround,
                CsPpccControlKind: CsPpccControlKind,
                DCChopper: DCChopper,
                DCConductingEquipment: DCConductingEquipment,
                DCConverterOperatingModeKind: DCConverterOperatingModeKind,
                DCBreaker: DCBreaker,
                PerLengthDCLineParameter: PerLengthDCLineParameter,
                DCBaseTerminal: DCBaseTerminal,
                DCSwitch: DCSwitch,
                DCSeriesDevice: DCSeriesDevice,
                VsPpccControlKind: VsPpccControlKind,
                CsOperatingModeKind: CsOperatingModeKind,
                DCTopologicalIsland: DCTopologicalIsland,
                DCPolarityKind: DCPolarityKind,
                DCDisconnector: DCDisconnector,
                VsConverter: VsConverter,
                ACDCConverter: ACDCConverter,
                CsConverter: CsConverter,
                DCLineSegment: DCLineSegment,
                VsCapabilityCurve: VsCapabilityCurve,
                DCConverterUnit: DCConverterUnit,
                DCTerminal: DCTerminal,
                DCBusbar: DCBusbar,
                DCLine: DCLine,
                ACDCConverterDCTerminal: ACDCConverterDCTerminal,
                DCNode: DCNode
            }
        );
    }
);