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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IPAccessPoint_collapse" aria-expanded="true" aria-controls="IPAccessPoint_collapse">IPAccessPoint</a>
<div id="IPAccessPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#address}}<div><b>address</b>: {{address}}</div>{{/address}}
{{#addressType}}<div><b>addressType</b>: {{addressType}}</div>{{/addressType}}
{{#gateway}}<div><b>gateway</b>: {{gateway}}</div>{{/gateway}}
{{#subnet}}<div><b>subnet</b>: {{subnet}}</div>{{/subnet}}
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IPAddressType_collapse" aria-expanded="true" aria-controls="IPAddressType_collapse">IPAddressType</a>
<div id="IPAddressType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
{{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPInformationMessage_collapse" aria-expanded="true" aria-controls="ICCPInformationMessage_collapse">ICCPInformationMessage</a>
<div id="ICCPInformationMessage_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#localReference}}<div><b>localReference</b>: {{localReference}}</div>{{/localReference}}
{{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPControlPointDeviceClass_collapse" aria-expanded="true" aria-controls="ICCPControlPointDeviceClass_collapse">ICCPControlPointDeviceClass</a>
<div id="ICCPControlPointDeviceClass_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#SBO}}<div><b>SBO</b>: {{SBO}}</div>{{/SBO}}
{{#NONSBO}}<div><b>NONSBO</b>: {{NONSBO}}</div>{{/NONSBO}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPSetPointType_collapse" aria-expanded="true" aria-controls="ICCPSetPointType_collapse">ICCPSetPointType</a>
<div id="ICCPSetPointType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#REAL}}<div><b>REAL</b>: {{REAL}}</div>{{/REAL}}
{{#DISCRETE}}<div><b>DISCRETE</b>: {{DISCRETE}}</div>{{/DISCRETE}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPPoint_collapse" aria-expanded="true" aria-controls="ICCPPoint_collapse">ICCPPoint</a>
<div id="ICCPPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPPScope_collapse" aria-expanded="true" aria-controls="ICCPPScope_collapse">ICCPPScope</a>
<div id="ICCPPScope_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#VCC}}<div><b>VCC</b>: {{VCC}}</div>{{/VCC}}
{{#ICC}}<div><b>ICC</b>: {{ICC}}</div>{{/ICC}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="TASE2BilateralTable_collapse">TASE2BilateralTable</a>
<div id="TASE2BilateralTable_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#bilateralTableID}}<div><b>bilateralTableID</b>: {{bilateralTableID}}</div>{{/bilateralTableID}}
{{#calling}}<div><b>calling</b>: {{calling}}</div>{{/calling}}
{{#nameOfICC}}<div><b>nameOfICC</b>: {{nameOfICC}}</div>{{/nameOfICC}}
{{#tase2version}}<div><b>tase2version</b>: {{tase2version}}</div>{{/tase2version}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPIndicationPointType_collapse" aria-expanded="true" aria-controls="ICCPIndicationPointType_collapse">ICCPIndicationPointType</a>
<div id="ICCPIndicationPointType_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#REAL}}<div><b>REAL</b>: {{REAL}}</div>{{/REAL}}
{{#STATE}}<div><b>STATE</b>: {{STATE}}</div>{{/STATE}}
{{#DISCRETE}}<div><b>DISCRETE</b>: {{DISCRETE}}</div>{{/DISCRETE}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ISOAPAddressing_collapse" aria-expanded="true" aria-controls="ISOAPAddressing_collapse">ISOAPAddressing</a>
<div id="ISOAPAddressing_collapse" class="collapse in" style="margin-left: 10px;">
`
      + base.Element.prototype.template.call (this) +
`
{{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
{{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
{{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TCPAcessPoint_collapse" aria-expanded="true" aria-controls="TCPAcessPoint_collapse">TCPAcessPoint</a>
<div id="TCPAcessPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + IPAccessPoint.prototype.template.call (this) +
`
{{#keepAliveTime}}<div><b>keepAliveTime</b>: {{keepAliveTime}}</div>{{/keepAliveTime}}
{{#port}}<div><b>port</b>: {{port}}</div>{{/port}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ISOUpperLayer_collapse" aria-expanded="true" aria-controls="ISOUpperLayer_collapse">ISOUpperLayer</a>
<div id="ISOUpperLayer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + TCPAcessPoint.prototype.template.call (this) +
`
{{#ap}}<div><b>ap</b>: {{ap}}</div>{{/ap}}
{{#osiPsel}}<div><b>osiPsel</b>: {{osiPsel}}</div>{{/osiPsel}}
{{#osiSsel}}<div><b>osiSsel</b>: {{osiSsel}}</div>{{/osiSsel}}
{{#osiTsel}}<div><b>osiTsel</b>: {{osiTsel}}</div>{{/osiTsel}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPIndicationPoint_collapse" aria-expanded="true" aria-controls="ICCPIndicationPoint_collapse">ICCPIndicationPoint</a>
<div id="ICCPIndicationPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ICCPPoint.prototype.template.call (this) +
`
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPControlPoint_collapse" aria-expanded="true" aria-controls="ICCPControlPoint_collapse">ICCPControlPoint</a>
<div id="ICCPControlPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ICCPPoint.prototype.template.call (this) +
`
{{#deviceClass}}<div><b>deviceClass</b>: {{deviceClass}}</div>{{/deviceClass}}
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPCommandPoint_collapse" aria-expanded="true" aria-controls="ICCPCommandPoint_collapse">ICCPCommandPoint</a>
<div id="ICCPCommandPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ICCPControlPoint.prototype.template.call (this) +
`
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ICCPSetPoint_collapse" aria-expanded="true" aria-controls="ICCPSetPoint_collapse">ICCPSetPoint</a>
<div id="ICCPSetPoint_collapse" class="collapse in" style="margin-left: 10px;">
`
      + ICCPControlPoint.prototype.template.call (this) +
`
{{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
{{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
</div>
`
                );
           }        }

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