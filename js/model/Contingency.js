define
(
    ["model/base", "model/Core"],
    /**
     * Contingencies to be studied.
     *
     */
    function (base, Core)
    {

        /**
         * An event threatening system reliability, consisting of one or more contingency elements.
         *
         */
        class Contingency extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Contingency;
                if (null == bucket)
                   cim_data.Contingency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Contingency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "Contingency";
                base.parse_element (/<cim:Contingency.mustStudy>([\s\S]*?)<\/cim:Contingency.mustStudy>/g, obj, "mustStudy", base.to_boolean, sub, context);

                var bucket = context.parsed.Contingency;
                if (null == bucket)
                   context.parsed.Contingency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "Contingency", "mustStudy", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An element of a system event to be studied by contingency analysis, representing a change in status of a single piece of equipment.
         *
         */
        class ContingencyElement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContingencyElement;
                if (null == bucket)
                   cim_data.ContingencyElement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyElement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyElement";
                base.parse_attribute (/<cim:ContingencyElement.Contingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Contingency", sub, context);

                var bucket = context.parsed.ContingencyElement;
                if (null == bucket)
                   context.parsed.ContingencyElement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "ContingencyElement", "Contingency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Indicates the state which the contingency equipment is to be in when the contingency is applied.
         *
         */
        class ContingencyEquipmentStatusKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContingencyEquipmentStatusKind;
                if (null == bucket)
                   cim_data.ContingencyEquipmentStatusKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyEquipmentStatusKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyEquipmentStatusKind";
                base.parse_element (/<cim:ContingencyEquipmentStatusKind.inService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.inService>/g, obj, "inService", base.to_string, sub, context);
                base.parse_element (/<cim:ContingencyEquipmentStatusKind.outOfService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.outOfService>/g, obj, "outOfService", base.to_string, sub, context);

                var bucket = context.parsed.ContingencyEquipmentStatusKind;
                if (null == bucket)
                   context.parsed.ContingencyEquipmentStatusKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "ContingencyEquipmentStatusKind", "inService", base.from_string, fields);
                base.export_element (obj, "ContingencyEquipmentStatusKind", "outOfService", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A equipment to which the in service status is to change such as a power transformer or AC line segment.
         *
         */
        class ContingencyEquipment extends ContingencyElement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ContingencyEquipment;
                if (null == bucket)
                   cim_data.ContingencyEquipment = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ContingencyEquipment[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ContingencyElement.prototype.parse.call (this, context, sub);
                obj.cls = "ContingencyEquipment";
                base.parse_element (/<cim:ContingencyEquipment.contingentStatus>([\s\S]*?)<\/cim:ContingencyEquipment.contingentStatus>/g, obj, "contingentStatus", base.to_string, sub, context);
                base.parse_attribute (/<cim:ContingencyEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);

                var bucket = context.parsed.ContingencyEquipment;
                if (null == bucket)
                   context.parsed.ContingencyEquipment = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["ContingencyElement"](obj, exporters, false);

                base.export_element (obj, "ContingencyEquipment", "contingentStatus", base.from_string, fields);
                base.export_attribute (obj, "ContingencyEquipment", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                Contingency: Contingency,
                ContingencyEquipment: ContingencyEquipment,
                ContingencyEquipmentStatusKind: ContingencyEquipmentStatusKind,
                ContingencyElement: ContingencyElement
            }
        );
    }
);