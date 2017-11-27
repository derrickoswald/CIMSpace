define
(
    ["model/base", "model/Core"],
    /**
     * The ControlArea package models area specifications which can be used for a variety of purposes.
     *
     * The package as a whole models potentially overlapping control area specifications for the purpose of actual generation control, load forecast area load capture, or powerflow based analysis.
     *
     */
    function (base, Core)
    {

        /**
         * A flow specification in terms of location and direction for a control area.
         *
         */
        class TieFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TieFlow;
                if (null == bucket)
                   cim_data.TieFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TieFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TieFlow";
                base.parse_element (/<cim:TieFlow.positiveFlowIn>([\s\S]*?)<\/cim:TieFlow.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:TieFlow.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:TieFlow.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);

                var bucket = context.parsed.TieFlow;
                if (null == bucket)
                   context.parsed.TieFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TieFlow", "positiveFlowIn", base.from_boolean, fields);
                base.export_attribute (obj, "TieFlow", "Terminal", fields);
                base.export_attribute (obj, "TieFlow", "ControlArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A control area generating unit.
         *
         * This class is needed so that alternate control area definitions may include the same generating unit.   Note only one instance within a control area should reference a specific generating unit.
         *
         */
        class ControlAreaGeneratingUnit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlAreaGeneratingUnit;
                if (null == bucket)
                   cim_data.ControlAreaGeneratingUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaGeneratingUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaGeneratingUnit";
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.ControlArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlArea", sub, context);
                base.parse_attribute (/<cim:ControlAreaGeneratingUnit.GeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "GeneratingUnit", sub, context);

                var bucket = context.parsed.ControlAreaGeneratingUnit;
                if (null == bucket)
                   context.parsed.ControlAreaGeneratingUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ControlAreaGeneratingUnit", "ControlArea", fields);
                base.export_attribute (obj, "ControlAreaGeneratingUnit", "GeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The type of control area.
         *
         */
        class ControlAreaTypeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlAreaTypeKind;
                if (null == bucket)
                   cim_data.ControlAreaTypeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaTypeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaTypeKind";
                base.parse_element (/<cim:ControlAreaTypeKind.AGC>([\s\S]*?)<\/cim:ControlAreaTypeKind.AGC>/g, obj, "AGC", base.to_string, sub, context);
                base.parse_element (/<cim:ControlAreaTypeKind.Forecast>([\s\S]*?)<\/cim:ControlAreaTypeKind.Forecast>/g, obj, "Forecast", base.to_string, sub, context);
                base.parse_element (/<cim:ControlAreaTypeKind.Interchange>([\s\S]*?)<\/cim:ControlAreaTypeKind.Interchange>/g, obj, "Interchange", base.to_string, sub, context);

                var bucket = context.parsed.ControlAreaTypeKind;
                if (null == bucket)
                   context.parsed.ControlAreaTypeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ControlAreaTypeKind", "AGC", base.from_string, fields);
                base.export_element (obj, "ControlAreaTypeKind", "Forecast", base.from_string, fields);
                base.export_element (obj, "ControlAreaTypeKind", "Interchange", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A prioritized measurement to be used for the tie flow as part of the control area specification.
         *
         */
        class AltTieMeas extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AltTieMeas;
                if (null == bucket)
                   cim_data.AltTieMeas = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AltTieMeas[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AltTieMeas";
                base.parse_element (/<cim:AltTieMeas.priority>([\s\S]*?)<\/cim:AltTieMeas.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:AltTieMeas.TieFlow\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TieFlow", sub, context);
                base.parse_attribute (/<cim:AltTieMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context);

                var bucket = context.parsed.AltTieMeas;
                if (null == bucket)
                   context.parsed.AltTieMeas = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AltTieMeas", "priority", base.from_string, fields);
                base.export_attribute (obj, "AltTieMeas", "TieFlow", fields);
                base.export_attribute (obj, "AltTieMeas", "AnalogValue", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A prioritized measurement to be used for the generating unit in the control area specificaiton.
         *
         */
        class AltGeneratingUnitMeas extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AltGeneratingUnitMeas;
                if (null == bucket)
                   cim_data.AltGeneratingUnitMeas = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AltGeneratingUnitMeas[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AltGeneratingUnitMeas";
                base.parse_element (/<cim:AltGeneratingUnitMeas.priority>([\s\S]*?)<\/cim:AltGeneratingUnitMeas.priority>/g, obj, "priority", base.to_string, sub, context);
                base.parse_attribute (/<cim:AltGeneratingUnitMeas.AnalogValue\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AnalogValue", sub, context);
                base.parse_attribute (/<cim:AltGeneratingUnitMeas.ControlAreaGeneratingUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlAreaGeneratingUnit", sub, context);

                var bucket = context.parsed.AltGeneratingUnitMeas;
                if (null == bucket)
                   context.parsed.AltGeneratingUnitMeas = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AltGeneratingUnitMeas", "priority", base.from_string, fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "AnalogValue", fields);
                base.export_attribute (obj, "AltGeneratingUnitMeas", "ControlAreaGeneratingUnit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A control area<b> </b>is a grouping of generating units and/or loads and a cutset of tie lines (as terminals) which may be used for a variety of purposes including automatic generation control, powerflow solution area interchange control specification, and input to load forecasting.
         *
         * Note that any number of overlapping control area specifications can be superimposed on the physical model.
         *
         */
        class ControlArea extends Core.PowerSystemResource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ControlArea;
                if (null == bucket)
                   cim_data.ControlArea = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlArea[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.PowerSystemResource.prototype.parse.call (this, context, sub);
                obj.cls = "ControlArea";
                base.parse_element (/<cim:ControlArea.netInterchange>([\s\S]*?)<\/cim:ControlArea.netInterchange>/g, obj, "netInterchange", base.to_string, sub, context);
                base.parse_element (/<cim:ControlArea.pTolerance>([\s\S]*?)<\/cim:ControlArea.pTolerance>/g, obj, "pTolerance", base.to_string, sub, context);
                base.parse_element (/<cim:ControlArea.type>([\s\S]*?)<\/cim:ControlArea.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ControlArea.EnergyArea\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergyArea", sub, context);

                var bucket = context.parsed.ControlArea;
                if (null == bucket)
                   context.parsed.ControlArea = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.PowerSystemResource.prototype.export.call (this, obj, false);

                base.export_element (obj, "ControlArea", "netInterchange", base.from_string, fields);
                base.export_element (obj, "ControlArea", "pTolerance", base.from_string, fields);
                base.export_element (obj, "ControlArea", "type", base.from_string, fields);
                base.export_attribute (obj, "ControlArea", "EnergyArea", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ControlAreaGeneratingUnit: ControlAreaGeneratingUnit,
                ControlArea: ControlArea,
                ControlAreaTypeKind: ControlAreaTypeKind,
                AltGeneratingUnitMeas: AltGeneratingUnitMeas,
                TieFlow: TieFlow,
                AltTieMeas: AltTieMeas
            }
        );
    }
);