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

            base.parse_attribute (/<cim:IPAccessPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.IPAccessPoint;
            if (null == bucket)
                context.parsed.IPAccessPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        function parse_ICCPIndicationPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPPoint (context, sub);
            obj.cls = "ICCPIndicationPoint";
            base.parse_element (/<cim:ICCPIndicationPoint.type>([\s\S]*?)<\/cim:ICCPIndicationPoint.type>/g, obj, "type", base.to_string, sub, context);

            base.parse_attribute (/<cim:ICCPIndicationPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.ICCPIndicationPoint;
            if (null == bucket)
                context.parsed.ICCPIndicationPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        function parse_ICCPControlPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPPoint (context, sub);
            obj.cls = "ICCPControlPoint";
            base.parse_element (/<cim:ICCPControlPoint.deviceClass>([\s\S]*?)<\/cim:ICCPControlPoint.deviceClass>/g, obj, "deviceClass", base.to_string, sub, context);

            base.parse_attribute (/<cim:ICCPControlPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.ICCPControlPoint;
            if (null == bucket)
                context.parsed.ICCPControlPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * The Local Reference attribute specifies a value agreed upon between sender and receiver of the Information Message.
             *
             * It further identifies the Information Message.
             *
             */
            base.parse_element (/<cim:ICCPInformationMessage.localReference>([\s\S]*?)<\/cim:ICCPInformationMessage.localReference>/g, obj, "localReference", base.to_string, sub, context);

            base.parse_element (/<cim:ICCPInformationMessage.scope>([\s\S]*?)<\/cim:ICCPInformationMessage.scope>/g, obj, "scope", base.to_string, sub, context);

            bucket = context.parsed.ICCPInformationMessage;
            if (null == bucket)
                context.parsed.ICCPInformationMessage = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

            base.parse_attribute (/<cim:ICCPPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.ICCPPoint;
            if (null == bucket)
                context.parsed.ICCPPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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
            /**
             * Specifies the version of the Bilateral Table configuration that is being exchanged.
             *
             */
            base.parse_element (/<cim:TASE2BilateralTable.bilateralTableID>([\s\S]*?)<\/cim:TASE2BilateralTable.bilateralTableID>/g, obj, "bilateralTableID", base.to_string, sub, context);

            /**
             * Used to indicate if the Provider is responsible for initiating the TASE.2 connection.
             *
             * If the value is TRUE, the provider is responsible for establishing the association.  If the value is FALSE, the peer provider of the Bilateral Table will need to establish the association.
             *
             */
            base.parse_element (/<cim:TASE2BilateralTable.calling>([\s\S]*?)<\/cim:TASE2BilateralTable.calling>/g, obj, "calling", base.to_boolean, sub, context);

            /**
             * Specifies the ICC scope name that the remote can use to access the information in the Bilateral Table if the information is not VCC scoped.
             *
             * This value may not be null.
             *
             */
            base.parse_element (/<cim:TASE2BilateralTable.nameOfICC>([\s\S]*?)<\/cim:TASE2BilateralTable.nameOfICC>/g, obj, "nameOfICC", base.to_string, sub, context);

            /**
             * Specifies the version of the TASE.2 that is needed to access the Bilateral Table information via TASE.2
             *
             */
            base.parse_element (/<cim:TASE2BilateralTable.tase2version>([\s\S]*?)<\/cim:TASE2BilateralTable.tase2version>/g, obj, "tase2version", base.to_string, sub, context);

            bucket = context.parsed.TASE2BilateralTable;
            if (null == bucket)
                context.parsed.TASE2BilateralTable = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        function parse_ICCPCommandPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPControlPoint (context, sub);
            obj.cls = "ICCPCommandPoint";
            base.parse_attribute (/<cim:ICCPCommandPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.ICCPCommandPoint;
            if (null == bucket)
                context.parsed.ICCPCommandPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
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

        function parse_ICCPSetPoint (context, sub)
        {
            var obj;
            var bucket;

            obj = parse_ICCPControlPoint (context, sub);
            obj.cls = "ICCPSetPoint";
            base.parse_element (/<cim:ICCPSetPoint.type>([\s\S]*?)<\/cim:ICCPSetPoint.type>/g, obj, "type", base.to_string, sub, context);

            base.parse_attribute (/<cim:ICCPSetPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context, true);

            bucket = context.parsed.ICCPSetPoint;
            if (null == bucket)
                context.parsed.ICCPSetPoint = bucket = {};
            bucket[obj.id] = obj;

            return (obj);
        }

        return (
            {
                parse_IPAccessPoint: parse_IPAccessPoint,
                parse_ICCPSetPointType: parse_ICCPSetPointType,
                parse_ICCPIndicationPointType: parse_ICCPIndicationPointType,
                parse_ICCPPoint: parse_ICCPPoint,
                parse_ICCPPScope: parse_ICCPPScope,
                parse_IPAddressType: parse_IPAddressType,
                parse_ISOAPAddressing: parse_ISOAPAddressing,
                parse_ICCPControlPointDeviceClass: parse_ICCPControlPointDeviceClass,
                parse_ICCPIndicationPoint: parse_ICCPIndicationPoint,
                parse_ICCPSetPoint: parse_ICCPSetPoint,
                parse_ICCPControlPoint: parse_ICCPControlPoint,
                parse_ISOUpperLayer: parse_ISOUpperLayer,
                parse_TASE2BilateralTable: parse_TASE2BilateralTable,
                parse_TCPAcessPoint: parse_TCPAcessPoint,
                parse_ICCPCommandPoint: parse_ICCPCommandPoint,
                parse_ICCPInformationMessage: parse_ICCPInformationMessage
            }
        );
    }
);