define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        class IPAccessPoint extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IPAccessPoint;
                if (null == bucket)
                   cim_data.IPAccessPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IPAccessPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IPAccessPoint";
                base.parse_element (/<cim:IPAccessPoint.address>([\s\S]*?)<\/cim:IPAccessPoint.address>/g, obj, "address", base.to_string, sub, context);
                base.parse_element (/<cim:IPAccessPoint.addressType>([\s\S]*?)<\/cim:IPAccessPoint.addressType>/g, obj, "addressType", base.to_string, sub, context);
                base.parse_element (/<cim:IPAccessPoint.gateway>([\s\S]*?)<\/cim:IPAccessPoint.gateway>/g, obj, "gateway", base.to_string, sub, context);
                base.parse_element (/<cim:IPAccessPoint.subnet>([\s\S]*?)<\/cim:IPAccessPoint.subnet>/g, obj, "subnet", base.to_string, sub, context);
                base.parse_attribute (/<cim:IPAccessPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.IPAccessPoint;
                if (null == bucket)
                   context.parsed.IPAccessPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IPAccessPoint", "address", base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "addressType", base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "gateway", base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "subnet", base.from_string, fields);
                base.export_attribute (obj, "IPAccessPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class IPAddressType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IPAddressType;
                if (null == bucket)
                   cim_data.IPAddressType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IPAddressType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IPAddressType";
                base.parse_element (/<cim:IPAddressType.value>([\s\S]*?)<\/cim:IPAddressType.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_element (/<cim:IPAddressType.multiplier>([\s\S]*?)<\/cim:IPAddressType.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:IPAddressType.unit>([\s\S]*?)<\/cim:IPAddressType.unit>/g, obj, "unit", base.to_string, sub, context);

                var bucket = context.parsed.IPAddressType;
                if (null == bucket)
                   context.parsed.IPAddressType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IPAddressType", "value", base.from_string, fields);
                base.export_element (obj, "IPAddressType", "multiplier", base.from_string, fields);
                base.export_element (obj, "IPAddressType", "unit", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class represents the TASE.2 Information Message Object.
         *
         * The IdentifiedObject.name attribute must be non-null.  The value of the attribute shall be used as the TASE.2 Information Reference, as specified by 60870-6-503.
         *
         */
        class ICCPInformationMessage extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPInformationMessage;
                if (null == bucket)
                   cim_data.ICCPInformationMessage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPInformationMessage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPInformationMessage";
                base.parse_element (/<cim:ICCPInformationMessage.localReference>([\s\S]*?)<\/cim:ICCPInformationMessage.localReference>/g, obj, "localReference", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPInformationMessage.scope>([\s\S]*?)<\/cim:ICCPInformationMessage.scope>/g, obj, "scope", base.to_string, sub, context);

                var bucket = context.parsed.ICCPInformationMessage;
                if (null == bucket)
                   context.parsed.ICCPInformationMessage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPInformationMessage", "localReference", base.from_string, fields);
                base.export_element (obj, "ICCPInformationMessage", "scope", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPControlPointDeviceClass extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPControlPointDeviceClass;
                if (null == bucket)
                   cim_data.ICCPControlPointDeviceClass = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPControlPointDeviceClass[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPControlPointDeviceClass";
                base.parse_element (/<cim:ICCPControlPointDeviceClass.SBO>([\s\S]*?)<\/cim:ICCPControlPointDeviceClass.SBO>/g, obj, "SBO", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPControlPointDeviceClass.NONSBO>([\s\S]*?)<\/cim:ICCPControlPointDeviceClass.NONSBO>/g, obj, "NONSBO", base.to_string, sub, context);

                var bucket = context.parsed.ICCPControlPointDeviceClass;
                if (null == bucket)
                   context.parsed.ICCPControlPointDeviceClass = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ICCPControlPointDeviceClass", "SBO", base.from_string, fields);
                base.export_element (obj, "ICCPControlPointDeviceClass", "NONSBO", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPSetPointType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPSetPointType;
                if (null == bucket)
                   cim_data.ICCPSetPointType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPSetPointType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPSetPointType";
                base.parse_element (/<cim:ICCPSetPointType.REAL>([\s\S]*?)<\/cim:ICCPSetPointType.REAL>/g, obj, "REAL", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPSetPointType.DISCRETE>([\s\S]*?)<\/cim:ICCPSetPointType.DISCRETE>/g, obj, "DISCRETE", base.to_string, sub, context);

                var bucket = context.parsed.ICCPSetPointType;
                if (null == bucket)
                   context.parsed.ICCPSetPointType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ICCPSetPointType", "REAL", base.from_string, fields);
                base.export_element (obj, "ICCPSetPointType", "DISCRETE", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The IdentifiedObject.name attribute must have a value.
         *
         * The name attribute shall be used as the DataValue name used for the exchange.
         *
         */
        class ICCPPoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPPoint;
                if (null == bucket)
                   cim_data.ICCPPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPPoint";
                base.parse_element (/<cim:ICCPPoint.scope>([\s\S]*?)<\/cim:ICCPPoint.scope>/g, obj, "scope", base.to_string, sub, context);
                base.parse_attribute (/<cim:ICCPPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.ICCPPoint;
                if (null == bucket)
                   context.parsed.ICCPPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPPoint", "scope", base.from_string, fields);
                base.export_attribute (obj, "ICCPPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPPScope extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPPScope;
                if (null == bucket)
                   cim_data.ICCPPScope = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPPScope[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPPScope";
                base.parse_element (/<cim:ICCPPScope.VCC>([\s\S]*?)<\/cim:ICCPPScope.VCC>/g, obj, "VCC", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPPScope.ICC>([\s\S]*?)<\/cim:ICCPPScope.ICC>/g, obj, "ICC", base.to_string, sub, context);

                var bucket = context.parsed.ICCPPScope;
                if (null == bucket)
                   context.parsed.ICCPPScope = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ICCPPScope", "VCC", base.from_string, fields);
                base.export_element (obj, "ICCPPScope", "ICC", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * This class describe the sending (providing) side in a bilateral ICCP data exchange.
         *
         * Hence the ICCP bilateral (table) descriptions are created by exchanging ICCPProvider data between the parties.
         *
         */
        class TASE2BilateralTable extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TASE2BilateralTable;
                if (null == bucket)
                   cim_data.TASE2BilateralTable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TASE2BilateralTable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TASE2BilateralTable";
                base.parse_element (/<cim:TASE2BilateralTable.bilateralTableID>([\s\S]*?)<\/cim:TASE2BilateralTable.bilateralTableID>/g, obj, "bilateralTableID", base.to_string, sub, context);
                base.parse_element (/<cim:TASE2BilateralTable.calling>([\s\S]*?)<\/cim:TASE2BilateralTable.calling>/g, obj, "calling", base.to_boolean, sub, context);
                base.parse_element (/<cim:TASE2BilateralTable.nameOfICC>([\s\S]*?)<\/cim:TASE2BilateralTable.nameOfICC>/g, obj, "nameOfICC", base.to_string, sub, context);
                base.parse_element (/<cim:TASE2BilateralTable.tase2version>([\s\S]*?)<\/cim:TASE2BilateralTable.tase2version>/g, obj, "tase2version", base.to_string, sub, context);

                var bucket = context.parsed.TASE2BilateralTable;
                if (null == bucket)
                   context.parsed.TASE2BilateralTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TASE2BilateralTable", "bilateralTableID", base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "calling", base.from_boolean, fields);
                base.export_element (obj, "TASE2BilateralTable", "nameOfICC", base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "tase2version", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPIndicationPointType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPIndicationPointType;
                if (null == bucket)
                   cim_data.ICCPIndicationPointType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPIndicationPointType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPIndicationPointType";
                base.parse_element (/<cim:ICCPIndicationPointType.REAL>([\s\S]*?)<\/cim:ICCPIndicationPointType.REAL>/g, obj, "REAL", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPIndicationPointType.STATE>([\s\S]*?)<\/cim:ICCPIndicationPointType.STATE>/g, obj, "STATE", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPIndicationPointType.DISCRETE>([\s\S]*?)<\/cim:ICCPIndicationPointType.DISCRETE>/g, obj, "DISCRETE", base.to_string, sub, context);

                var bucket = context.parsed.ICCPIndicationPointType;
                if (null == bucket)
                   context.parsed.ICCPIndicationPointType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ICCPIndicationPointType", "REAL", base.from_string, fields);
                base.export_element (obj, "ICCPIndicationPointType", "STATE", base.from_string, fields);
                base.export_element (obj, "ICCPIndicationPointType", "DISCRETE", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ISOAPAddressing extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ISOAPAddressing;
                if (null == bucket)
                   cim_data.ISOAPAddressing = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ISOAPAddressing[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ISOAPAddressing";
                base.parse_element (/<cim:ISOAPAddressing.value>([\s\S]*?)<\/cim:ISOAPAddressing.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_element (/<cim:ISOAPAddressing.unit>([\s\S]*?)<\/cim:ISOAPAddressing.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ISOAPAddressing.multiplier>([\s\S]*?)<\/cim:ISOAPAddressing.multiplier>/g, obj, "multiplier", base.to_string, sub, context);

                var bucket = context.parsed.ISOAPAddressing;
                if (null == bucket)
                   context.parsed.ISOAPAddressing = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ISOAPAddressing", "value", base.from_string, fields);
                base.export_element (obj, "ISOAPAddressing", "unit", base.from_string, fields);
                base.export_element (obj, "ISOAPAddressing", "multiplier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class TCPAcessPoint extends IPAccessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TCPAcessPoint;
                if (null == bucket)
                   cim_data.TCPAcessPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TCPAcessPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = IPAccessPoint.prototype.parse.call (this, context, sub);
                obj.cls = "TCPAcessPoint";
                base.parse_element (/<cim:TCPAcessPoint.keepAliveTime>([\s\S]*?)<\/cim:TCPAcessPoint.keepAliveTime>/g, obj, "keepAliveTime", base.to_string, sub, context);
                base.parse_element (/<cim:TCPAcessPoint.port>([\s\S]*?)<\/cim:TCPAcessPoint.port>/g, obj, "port", base.to_string, sub, context);

                var bucket = context.parsed.TCPAcessPoint;
                if (null == bucket)
                   context.parsed.TCPAcessPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = IPAccessPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "TCPAcessPoint", "keepAliveTime", base.from_string, fields);
                base.export_element (obj, "TCPAcessPoint", "port", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ISOUpperLayer extends TCPAcessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ISOUpperLayer;
                if (null == bucket)
                   cim_data.ISOUpperLayer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ISOUpperLayer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = TCPAcessPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ISOUpperLayer";
                base.parse_element (/<cim:ISOUpperLayer.ap>([\s\S]*?)<\/cim:ISOUpperLayer.ap>/g, obj, "ap", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.osiPsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiPsel>/g, obj, "osiPsel", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.osiSsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiSsel>/g, obj, "osiSsel", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.osiTsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiTsel>/g, obj, "osiTsel", base.to_string, sub, context);

                var bucket = context.parsed.ISOUpperLayer;
                if (null == bucket)
                   context.parsed.ISOUpperLayer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = TCPAcessPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "ISOUpperLayer", "ap", base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiPsel", base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiSsel", base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiTsel", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPIndicationPoint extends ICCPPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPIndicationPoint;
                if (null == bucket)
                   cim_data.ICCPIndicationPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPIndicationPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPIndicationPoint";
                base.parse_element (/<cim:ICCPIndicationPoint.type>([\s\S]*?)<\/cim:ICCPIndicationPoint.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ICCPIndicationPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.ICCPIndicationPoint;
                if (null == bucket)
                   context.parsed.ICCPIndicationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPIndicationPoint", "type", base.from_string, fields);
                base.export_attribute (obj, "ICCPIndicationPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPControlPoint extends ICCPPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPControlPoint;
                if (null == bucket)
                   cim_data.ICCPControlPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPControlPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPControlPoint";
                base.parse_element (/<cim:ICCPControlPoint.deviceClass>([\s\S]*?)<\/cim:ICCPControlPoint.deviceClass>/g, obj, "deviceClass", base.to_string, sub, context);
                base.parse_attribute (/<cim:ICCPControlPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.ICCPControlPoint;
                if (null == bucket)
                   context.parsed.ICCPControlPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPControlPoint", "deviceClass", base.from_string, fields);
                base.export_attribute (obj, "ICCPControlPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPCommandPoint extends ICCPControlPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPCommandPoint;
                if (null == bucket)
                   cim_data.ICCPCommandPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPCommandPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPControlPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPCommandPoint";
                base.parse_attribute (/<cim:ICCPCommandPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.ICCPCommandPoint;
                if (null == bucket)
                   context.parsed.ICCPCommandPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPControlPoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPCommandPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ICCPSetPoint extends ICCPControlPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ICCPSetPoint;
                if (null == bucket)
                   cim_data.ICCPSetPoint = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ICCPSetPoint[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPControlPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPSetPoint";
                base.parse_element (/<cim:ICCPSetPoint.type>([\s\S]*?)<\/cim:ICCPSetPoint.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_attribute (/<cim:ICCPSetPoint.\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "", sub, context);

                var bucket = context.parsed.ICCPSetPoint;
                if (null == bucket)
                   context.parsed.ICCPSetPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPControlPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPSetPoint", "type", base.from_string, fields);
                base.export_attribute (obj, "ICCPSetPoint", "", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                IPAccessPoint: IPAccessPoint,
                ICCPPScope: ICCPPScope,
                TCPAcessPoint: TCPAcessPoint,
                ISOUpperLayer: ISOUpperLayer,
                ICCPIndicationPoint: ICCPIndicationPoint,
                ICCPSetPointType: ICCPSetPointType,
                ICCPInformationMessage: ICCPInformationMessage,
                ICCPControlPoint: ICCPControlPoint,
                IPAddressType: IPAddressType,
                ICCPIndicationPointType: ICCPIndicationPointType,
                ICCPSetPoint: ICCPSetPoint,
                TASE2BilateralTable: TASE2BilateralTable,
                ICCPPoint: ICCPPoint,
                ICCPCommandPoint: ICCPCommandPoint,
                ISOAPAddressing: ISOAPAddressing,
                ICCPControlPointDeviceClass: ICCPControlPointDeviceClass
            }
        );
    }
);