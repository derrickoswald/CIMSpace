define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        function parse_TCPAcessPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_IPAccessPoint (context, sub);
            obj.cls = "TCPAcessPoint";
            base.parse_element (/<cim:TCPAcessPoint.keepAliveTime>([\s\S]*?)<\/cim:TCPAcessPoint.keepAliveTime>/g, obj, "keepAliveTime", base.to_string, sub, context);
            base.parse_element (/<cim:TCPAcessPoint.port>([\s\S]*?)<\/cim:TCPAcessPoint.port>/g, obj, "port", base.to_string, sub, context);
            bucket = context.parsed.TCPAcessPoint;
            if (null == bucket)
                context.parsed.TCPAcessPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TCPAcessPoint (obj, exporters, full)
        {
            var fields = exporters["IPAccessPoint"](obj, exporters, false);

            base.export_element (obj, "TCPAcessPoint", "keepAliveTime", base.from_string, fields);
            base.export_element (obj, "TCPAcessPoint", "port", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_IPAccessPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IPAccessPoint";
            base.parse_element (/<cim:IPAccessPoint.address>([\s\S]*?)<\/cim:IPAccessPoint.address>/g, obj, "address", base.to_string, sub, context);
            base.parse_element (/<cim:IPAccessPoint.addressType>([\s\S]*?)<\/cim:IPAccessPoint.addressType>/g, obj, "addressType", base.to_string, sub, context);
            base.parse_element (/<cim:IPAccessPoint.gateway>([\s\S]*?)<\/cim:IPAccessPoint.gateway>/g, obj, "gateway", base.to_string, sub, context);
            base.parse_element (/<cim:IPAccessPoint.subnet>([\s\S]*?)<\/cim:IPAccessPoint.subnet>/g, obj, "subnet", base.to_string, sub, context);
            base.parse_attribute (/<cim:IPAccessPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.IPAccessPoint;
            if (null == bucket)
                context.parsed.IPAccessPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IPAccessPoint (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "IPAccessPoint", "address", base.from_string, fields);
            base.export_element (obj, "IPAccessPoint", "addressType", base.from_string, fields);
            base.export_element (obj, "IPAccessPoint", "gateway", base.from_string, fields);
            base.export_element (obj, "IPAccessPoint", "subnet", base.from_string, fields);
            base.export_attribute (obj, "IPAccessPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPIndicationPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPPoint (context, sub);
            obj.cls = "ICCPIndicationPoint";
            base.parse_element (/<cim:ICCPIndicationPoint.type>([\s\S]*?)<\/cim:ICCPIndicationPoint.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:ICCPIndicationPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.ICCPIndicationPoint;
            if (null == bucket)
                context.parsed.ICCPIndicationPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPIndicationPoint (obj, exporters, full)
        {
            var fields = exporters["ICCPPoint"](obj, exporters, false);

            base.export_element (obj, "ICCPIndicationPoint", "type", base.from_string, fields);
            base.export_attribute (obj, "ICCPIndicationPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ISOUpperLayer (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_TCPAcessPoint (context, sub);
            obj.cls = "ISOUpperLayer";
            base.parse_element (/<cim:ISOUpperLayer.ap>([\s\S]*?)<\/cim:ISOUpperLayer.ap>/g, obj, "ap", base.to_string, sub, context);
            base.parse_element (/<cim:ISOUpperLayer.osiPsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiPsel>/g, obj, "osiPsel", base.to_string, sub, context);
            base.parse_element (/<cim:ISOUpperLayer.osiSsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiSsel>/g, obj, "osiSsel", base.to_string, sub, context);
            base.parse_element (/<cim:ISOUpperLayer.osiTsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiTsel>/g, obj, "osiTsel", base.to_string, sub, context);
            bucket = context.parsed.ISOUpperLayer;
            if (null == bucket)
                context.parsed.ISOUpperLayer = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ISOUpperLayer (obj, exporters, full)
        {
            var fields = exporters["TCPAcessPoint"](obj, exporters, false);

            base.export_element (obj, "ISOUpperLayer", "ap", base.from_string, fields);
            base.export_element (obj, "ISOUpperLayer", "osiPsel", base.from_string, fields);
            base.export_element (obj, "ISOUpperLayer", "osiSsel", base.from_string, fields);
            base.export_element (obj, "ISOUpperLayer", "osiTsel", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPControlPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPPoint (context, sub);
            obj.cls = "ICCPControlPoint";
            base.parse_element (/<cim:ICCPControlPoint.deviceClass>([\s\S]*?)<\/cim:ICCPControlPoint.deviceClass>/g, obj, "deviceClass", base.to_string, sub, context);
            base.parse_attribute (/<cim:ICCPControlPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.ICCPControlPoint;
            if (null == bucket)
                context.parsed.ICCPControlPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPControlPoint (obj, exporters, full)
        {
            var fields = exporters["ICCPPoint"](obj, exporters, false);

            base.export_element (obj, "ICCPControlPoint", "deviceClass", base.from_string, fields);
            base.export_attribute (obj, "ICCPControlPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_IPAddressType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "IPAddressType";
            base.parse_element (/<cim:IPAddressType.value>([\s\S]*?)<\/cim:IPAddressType.value>/g, obj, "value", base.to_string, sub, context);
            base.parse_element (/<cim:IPAddressType.multiplier>([\s\S]*?)<\/cim:IPAddressType.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            base.parse_element (/<cim:IPAddressType.unit>([\s\S]*?)<\/cim:IPAddressType.unit>/g, obj, "unit", base.to_string, sub, context);
            bucket = context.parsed.IPAddressType;
            if (null == bucket)
                context.parsed.IPAddressType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_IPAddressType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "IPAddressType", "value", base.from_string, fields);
            base.export_element (obj, "IPAddressType", "multiplier", base.from_string, fields);
            base.export_element (obj, "IPAddressType", "unit", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class represents the TASE.2 Information Message Object.
         *
         * The IdentifiedObject.name attribute must be non-null.  The value of the attribute shall be used as the TASE.2 Information Reference, as specified by 60870-6-503.
         *
         */
        function parse_ICCPInformationMessage (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ICCPInformationMessage";
            base.parse_element (/<cim:ICCPInformationMessage.localReference>([\s\S]*?)<\/cim:ICCPInformationMessage.localReference>/g, obj, "localReference", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPInformationMessage.scope>([\s\S]*?)<\/cim:ICCPInformationMessage.scope>/g, obj, "scope", base.to_string, sub, context);
            bucket = context.parsed.ICCPInformationMessage;
            if (null == bucket)
                context.parsed.ICCPInformationMessage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPInformationMessage (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ICCPInformationMessage", "localReference", base.from_string, fields);
            base.export_element (obj, "ICCPInformationMessage", "scope", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPControlPointDeviceClass (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ICCPControlPointDeviceClass";
            base.parse_element (/<cim:ICCPControlPointDeviceClass.SBO>([\s\S]*?)<\/cim:ICCPControlPointDeviceClass.SBO>/g, obj, "SBO", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPControlPointDeviceClass.NONSBO>([\s\S]*?)<\/cim:ICCPControlPointDeviceClass.NONSBO>/g, obj, "NONSBO", base.to_string, sub, context);
            bucket = context.parsed.ICCPControlPointDeviceClass;
            if (null == bucket)
                context.parsed.ICCPControlPointDeviceClass = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPControlPointDeviceClass (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ICCPControlPointDeviceClass", "SBO", base.from_string, fields);
            base.export_element (obj, "ICCPControlPointDeviceClass", "NONSBO", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPSetPointType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ICCPSetPointType";
            base.parse_element (/<cim:ICCPSetPointType.REAL>([\s\S]*?)<\/cim:ICCPSetPointType.REAL>/g, obj, "REAL", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPSetPointType.DISCRETE>([\s\S]*?)<\/cim:ICCPSetPointType.DISCRETE>/g, obj, "DISCRETE", base.to_string, sub, context);
            bucket = context.parsed.ICCPSetPointType;
            if (null == bucket)
                context.parsed.ICCPSetPointType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPSetPointType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ICCPSetPointType", "REAL", base.from_string, fields);
            base.export_element (obj, "ICCPSetPointType", "DISCRETE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * The IdentifiedObject.name attribute must have a value.
         *
         * The name attribute shall be used as the DataValue name used for the exchange.
         *
         */
        function parse_ICCPPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "ICCPPoint";
            base.parse_element (/<cim:ICCPPoint.scope>([\s\S]*?)<\/cim:ICCPPoint.scope>/g, obj, "scope", base.to_string, sub, context);
            base.parse_attribute (/<cim:ICCPPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.ICCPPoint;
            if (null == bucket)
                context.parsed.ICCPPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPPoint (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "ICCPPoint", "scope", base.from_string, fields);
            base.export_attribute (obj, "ICCPPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPPScope (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ICCPPScope";
            base.parse_element (/<cim:ICCPPScope.VCC>([\s\S]*?)<\/cim:ICCPPScope.VCC>/g, obj, "VCC", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPPScope.ICC>([\s\S]*?)<\/cim:ICCPPScope.ICC>/g, obj, "ICC", base.to_string, sub, context);
            bucket = context.parsed.ICCPPScope;
            if (null == bucket)
                context.parsed.ICCPPScope = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPPScope (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ICCPPScope", "VCC", base.from_string, fields);
            base.export_element (obj, "ICCPPScope", "ICC", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        /**
         * This class describe the sending (providing) side in a bilateral ICCP data exchange.
         *
         * Hence the ICCP bilateral (table) descriptions are created by exchanging ICCPProvider data between the parties.
         *
         */
        function parse_TASE2BilateralTable (context, sub)
        {
            var obj;
            var bucket;

            obj = Core.parse_IdentifiedObject (context, sub);
            obj.cls = "TASE2BilateralTable";
            base.parse_element (/<cim:TASE2BilateralTable.bilateralTableID>([\s\S]*?)<\/cim:TASE2BilateralTable.bilateralTableID>/g, obj, "bilateralTableID", base.to_string, sub, context);
            base.parse_element (/<cim:TASE2BilateralTable.calling>([\s\S]*?)<\/cim:TASE2BilateralTable.calling>/g, obj, "calling", base.to_boolean, sub, context);
            base.parse_element (/<cim:TASE2BilateralTable.nameOfICC>([\s\S]*?)<\/cim:TASE2BilateralTable.nameOfICC>/g, obj, "nameOfICC", base.to_string, sub, context);
            base.parse_element (/<cim:TASE2BilateralTable.tase2version>([\s\S]*?)<\/cim:TASE2BilateralTable.tase2version>/g, obj, "tase2version", base.to_string, sub, context);
            bucket = context.parsed.TASE2BilateralTable;
            if (null == bucket)
                context.parsed.TASE2BilateralTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_TASE2BilateralTable (obj, exporters, full)
        {
            var fields = exporters["IdentifiedObject"](obj, exporters, false);

            base.export_element (obj, "TASE2BilateralTable", "bilateralTableID", base.from_string, fields);
            base.export_element (obj, "TASE2BilateralTable", "calling", base.from_boolean, fields);
            base.export_element (obj, "TASE2BilateralTable", "nameOfICC", base.from_string, fields);
            base.export_element (obj, "TASE2BilateralTable", "tase2version", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPIndicationPointType (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ICCPIndicationPointType";
            base.parse_element (/<cim:ICCPIndicationPointType.REAL>([\s\S]*?)<\/cim:ICCPIndicationPointType.REAL>/g, obj, "REAL", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPIndicationPointType.STATE>([\s\S]*?)<\/cim:ICCPIndicationPointType.STATE>/g, obj, "STATE", base.to_string, sub, context);
            base.parse_element (/<cim:ICCPIndicationPointType.DISCRETE>([\s\S]*?)<\/cim:ICCPIndicationPointType.DISCRETE>/g, obj, "DISCRETE", base.to_string, sub, context);
            bucket = context.parsed.ICCPIndicationPointType;
            if (null == bucket)
                context.parsed.ICCPIndicationPointType = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPIndicationPointType (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ICCPIndicationPointType", "REAL", base.from_string, fields);
            base.export_element (obj, "ICCPIndicationPointType", "STATE", base.from_string, fields);
            base.export_element (obj, "ICCPIndicationPointType", "DISCRETE", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPCommandPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPControlPoint (context, sub);
            obj.cls = "ICCPCommandPoint";
            base.parse_attribute (/<cim:ICCPCommandPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.ICCPCommandPoint;
            if (null == bucket)
                context.parsed.ICCPCommandPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPCommandPoint (obj, exporters, full)
        {
            var fields = exporters["ICCPControlPoint"](obj, exporters, false);

            base.export_attribute (obj, "ICCPCommandPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ISOAPAddressing (context, sub)
        {
            var obj;
            var bucket;

            obj = base.parse_Element (context, sub);
            obj.cls = "ISOAPAddressing";
            base.parse_element (/<cim:ISOAPAddressing.value>([\s\S]*?)<\/cim:ISOAPAddressing.value>/g, obj, "value", base.to_string, sub, context);
            base.parse_element (/<cim:ISOAPAddressing.unit>([\s\S]*?)<\/cim:ISOAPAddressing.unit>/g, obj, "unit", base.to_string, sub, context);
            base.parse_element (/<cim:ISOAPAddressing.multiplier>([\s\S]*?)<\/cim:ISOAPAddressing.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
            bucket = context.parsed.ISOAPAddressing;
            if (null == bucket)
                context.parsed.ISOAPAddressing = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ISOAPAddressing (obj, exporters, full)
        {
            var fields = [];

            base.export_element (obj, "ISOAPAddressing", "value", base.from_string, fields);
            base.export_element (obj, "ISOAPAddressing", "unit", base.from_string, fields);
            base.export_element (obj, "ISOAPAddressing", "multiplier", base.from_string, fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        function parse_ICCPSetPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPControlPoint (context, sub);
            obj.cls = "ICCPSetPoint";
            base.parse_element (/<cim:ICCPSetPoint.type>([\s\S]*?)<\/cim:ICCPSetPoint.type>/g, obj, "type", base.to_string, sub, context);
            base.parse_attribute (/<cim:ICCPSetPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);
            bucket = context.parsed.ICCPSetPoint;
            if (null == bucket)
                context.parsed.ICCPSetPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function export_ICCPSetPoint (obj, exporters, full)
        {
            var fields = exporters["ICCPControlPoint"](obj, exporters, false);

            base.export_element (obj, "ICCPSetPoint", "type", base.from_string, fields);
            base.export_attribute (obj, "ICCPSetPoint", "", fields);
            if (full)
                base.export_Element (obj, fields)

            return (fields);
        }

        return (
            {
                export_ICCPInformationMessage: export_ICCPInformationMessage,
                parse_ICCPPoint: parse_ICCPPoint,
                export_IPAddressType: export_IPAddressType,
                parse_ICCPPScope: parse_ICCPPScope,
                export_ICCPPoint: export_ICCPPoint,
                export_IPAccessPoint: export_IPAccessPoint,
                parse_ISOAPAddressing: parse_ISOAPAddressing,
                export_TCPAcessPoint: export_TCPAcessPoint,
                export_ICCPControlPointDeviceClass: export_ICCPControlPointDeviceClass,
                parse_ICCPControlPointDeviceClass: parse_ICCPControlPointDeviceClass,
                parse_ICCPSetPoint: parse_ICCPSetPoint,
                export_TASE2BilateralTable: export_TASE2BilateralTable,
                export_ICCPPScope: export_ICCPPScope,
                export_ICCPIndicationPoint: export_ICCPIndicationPoint,
                parse_ICCPCommandPoint: parse_ICCPCommandPoint,
                parse_ICCPInformationMessage: parse_ICCPInformationMessage,
                parse_IPAccessPoint: parse_IPAccessPoint,
                export_ICCPCommandPoint: export_ICCPCommandPoint,
                parse_ICCPSetPointType: parse_ICCPSetPointType,
                parse_ICCPIndicationPointType: parse_ICCPIndicationPointType,
                export_ICCPSetPointType: export_ICCPSetPointType,
                export_ISOUpperLayer: export_ISOUpperLayer,
                parse_IPAddressType: parse_IPAddressType,
                parse_ICCPIndicationPoint: parse_ICCPIndicationPoint,
                export_ICCPControlPoint: export_ICCPControlPoint,
                parse_ICCPControlPoint: parse_ICCPControlPoint,
                export_ICCPIndicationPointType: export_ICCPIndicationPointType,
                parse_ISOUpperLayer: parse_ISOUpperLayer,
                parse_TASE2BilateralTable: parse_TASE2BilateralTable,
                parse_TCPAcessPoint: parse_TCPAcessPoint,
                export_ICCPSetPoint: export_ICCPSetPoint,
                export_ISOAPAddressing: export_ISOAPAddressing
            }
        );
    }
);