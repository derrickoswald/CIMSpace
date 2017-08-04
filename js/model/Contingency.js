define
(
    ["model/base", "model/Core"],
    /**
     * Contingencies to be studied.
     */
    function (base, Core)
    {

        /**
         * An event threatening system reliability, consisting of one or more contingency elements.
         */
        function parse_Contingency (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "Contingency";
            /**
             * Set true if must study this contingency.
             */
            obj["mustStudy"] = base.to_boolean (base.parse_element (/<cim:Contingency.mustStudy>([\s\S]*?)<\/cim:Contingency.mustStudy>/g, sub, context, true));
            bucket = context.parsed.Contingency;
            if (null == bucket)
                context.parsed.Contingency = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * An element of a system event to be studied by contingency analysis, representing a change in status of a single piece of equipment.
         */
        function parse_ContingencyElement (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ContingencyElement";
            /**
             * A contingency element belongs to one contingency.
             */
            obj["Contingency"] = base.parse_attribute (/<cim:ContingencyElement.Contingency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ContingencyElement;
            if (null == bucket)
                context.parsed.ContingencyElement = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * A equipment to which the in service status is to change such as a power transformer or AC line segment.
         */
        function parse_ContingencyEquipment (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ContingencyElement (context, sub);
            obj.cls = "ContingencyEquipment";
            /**
             * The status for the associated equipment when in the contingency state.
             * This status is independent of the case to which the contingency is originally applied, but defines the equipment status when the contingency is applied.
             */
            obj["contingentStatus"] = base.parse_element (/<cim:ContingencyEquipment.contingentStatus>([\s\S]*?)<\/cim:ContingencyEquipment.contingentStatus>/g, sub, context, true);
            /**
             * The single piece of equipment to which to apply the contingency.
             */
            obj["Equipment"] = base.parse_attribute (/<cim:ContingencyEquipment.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, sub, context, true);
            bucket = context.parsed.ContingencyEquipment;
            if (null == bucket)
                context.parsed.ContingencyEquipment = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        /**
         * Indicates the state which the contingency equipment is to be in when the contingency is applied.
         */
        function parse_ContingencyEquipmentStatusKind (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ContingencyEquipmentStatusKind";
            /**
             * The equipment is in service.
             */
            obj["inService"] = base.parse_element (/<cim:ContingencyEquipmentStatusKind.inService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.inService>/g, sub, context, true);
            /**
             * The equipment is to be taken out of service.
             */
            obj["outOfService"] = base.parse_element (/<cim:ContingencyEquipmentStatusKind.outOfService>([\s\S]*?)<\/cim:ContingencyEquipmentStatusKind.outOfService>/g, sub, context, true);
            bucket = context.parsed.ContingencyEquipmentStatusKind;
            if (null == bucket)
                context.parsed.ContingencyEquipmentStatusKind = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_ContingencyElement: parse_ContingencyElement,
                parse_Contingency: parse_Contingency,
                parse_ContingencyEquipmentStatusKind: parse_ContingencyEquipmentStatusKind,
                parse_ContingencyEquipment: parse_ContingencyEquipment
            }
        );
    }
);