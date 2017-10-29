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
        function parse_Contingency (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Contingency";
            base.parse_element (/<cim:Contingency.mustStudy>([\s\S]*?)<\/cim:Contingency.mustStudy>/g, obj, "mustStudy", base.to_boolean, sub, context);
            bucket = context.parsed.Contingency;
            if (null == bucket)
                context.parsed.Contingency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_Contingency (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "Contingency", "mustStudy", base.from_boolean, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * An element of a system event to be studied by contingency analysis, representing a change in status of a single piece of equipment.
         *
         */
        function parse_ContingencyElement (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ContingencyElement";
            base.parse_attribute (/<cim:ContingencyElement.Contingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Contingency", sub, context);
            bucket = context.parsed.ContingencyElement;
            if (null == bucket)
                context.parsed.ContingencyElement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ContingencyElement (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_attribute (obj, "ContingencyElement", "Contingency", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * A equipment to which the in service status is to change such as a power transformer or AC line segment.
         *
         */
        function parse_ContingencyEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ContingencyElement (context, sub);
            obj.cls = "ContingencyEquipment";
            base.parse_element (/<cim:ContingencyEquipment.contingentStatus>([\s\S]*?)<\/cim:ContingencyEquipment.contingentStatus>/g, obj, "contingentStatus", base.to_string, sub, context);
            base.parse_attribute (/<cim:ContingencyEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);
            bucket = context.parsed.ContingencyEquipment;
            if (null == bucket)
                context.parsed.ContingencyEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ContingencyEquipment (obj, exporters, full)
        {
            var fields = exporters["ContingencyElement"](obj, exporters, false);

            base.export_element (obj, "ContingencyEquipment", "contingentStatus", base.from_string, fields);
            base.export_attribute (obj, "ContingencyEquipment", "Equipment", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * Indicates the state which the contingency equipment is to be in when the contingency is applied.
         *
         */
        function parse_ContingencyEquipmentStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ContingencyEquipmentStatusKind";
            base.parse_element (/<cim:ContingencyEquipmentStatusKind.inService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.inService>/g, obj, "inService", base.to_string, sub, context);
            base.parse_element (/<cim:ContingencyEquipmentStatusKind.outOfService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.outOfService>/g, obj, "outOfService", base.to_string, sub, context);
            bucket = context.parsed.ContingencyEquipmentStatusKind;
            if (null == bucket)
                context.parsed.ContingencyEquipmentStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ContingencyEquipmentStatusKind (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ContingencyEquipmentStatusKind", "inService", base.from_string, fields);
            base.export_element (obj, "ContingencyEquipmentStatusKind", "outOfService", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_ContingencyElement: export_ContingencyElement,
                parse_ContingencyElement: parse_ContingencyElement,
                export_Contingency: export_Contingency,
                parse_Contingency: parse_Contingency,
                parse_ContingencyEquipmentStatusKind: parse_ContingencyEquipmentStatusKind,
                export_ContingencyEquipment: export_ContingencyEquipment,
                parse_ContingencyEquipment: parse_ContingencyEquipment,
                export_ContingencyEquipmentStatusKind: export_ContingencyEquipmentStatusKind
            }
        );
    }
);