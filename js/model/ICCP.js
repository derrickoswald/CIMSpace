define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        var ICCPControlPointDeviceClass =
        {
            SBO: "SBO",
            NONSBO: "NONSBO"
        };
        Object.freeze (ICCPControlPointDeviceClass);

        var ICCPSetPointType =
        {
            REAL: "REAL",
            DISCRETE: "DISCRETE"
        };
        Object.freeze (ICCPSetPointType);

        var ICCPPScope =
        {
            VCC: "VCC",
            ICC: "ICC"
        };
        Object.freeze (ICCPPScope);

        var ICCPIndicationPointType =
        {
            REAL: "REAL",
            STATE: "STATE",
            DISCRETE: "DISCRETE"
        };
        Object.freeze (ICCPIndicationPointType);

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IPAccessPoint_collapse" aria-expanded="true" aria-controls="IPAccessPoint_collapse" style="margin-left: 10px;">IPAccessPoint</a></legend>
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
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IPAccessPoint_collapse" aria-expanded="true" aria-controls="IPAccessPoint_collapse" style="margin-left: 10px;">IPAccessPoint</a></legend>
                    <div id="IPAccessPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='address'>address: </label><div class='col-sm-8'><input id='address' class='form-control' type='text'{{#address}} value='{{address}}'{{/address}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='addressType'>addressType: </label><div class='col-sm-8'><input id='addressType' class='form-control' type='text'{{#addressType}} value='{{addressType}}'{{/addressType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='gateway'>gateway: </label><div class='col-sm-8'><input id='gateway' class='form-control' type='text'{{#gateway}} value='{{gateway}}'{{/gateway}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='subnet'>subnet: </label><div class='col-sm-8'><input id='subnet' class='form-control' type='text'{{#subnet}} value='{{subnet}}'{{/subnet}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IPAddressType_collapse" aria-expanded="true" aria-controls="IPAddressType_collapse" style="margin-left: 10px;">IPAddressType</a></legend>
                    <div id="IPAddressType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IPAddressType_collapse" aria-expanded="true" aria-controls="IPAddressType_collapse" style="margin-left: 10px;">IPAddressType</a></legend>
                    <div id="IPAddressType_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attribute (/<cim:ICCPInformationMessage.scope\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "scope", sub, context);

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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPInformationMessage_collapse" aria-expanded="true" aria-controls="ICCPInformationMessage_collapse" style="margin-left: 10px;">ICCPInformationMessage</a></legend>
                    <div id="ICCPInformationMessage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#localReference}}<div><b>localReference</b>: {{localReference}}</div>{{/localReference}}
                    {{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ICCPPScope = []; if (!obj.scope) obj.ICCPPScope.push ({ id: '', selected: true}); for (var property in ICCPPScope) obj.ICCPPScope.push ({ id: property, selected: obj.scope && obj.scope.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ICCPPScope;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPInformationMessage_collapse" aria-expanded="true" aria-controls="ICCPInformationMessage_collapse" style="margin-left: 10px;">ICCPInformationMessage</a></legend>
                    <div id="ICCPInformationMessage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='localReference'>localReference: </label><div class='col-sm-8'><input id='localReference' class='form-control' type='text'{{#localReference}} value='{{localReference}}'{{/localReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scope'>scope: </label><div class='col-sm-8'><select id='scope' class='form-control'>{{#ICCPPScope}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPPScope}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attribute (/<cim:ICCPPoint.scope\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "scope", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPPoint_collapse" aria-expanded="true" aria-controls="ICCPPoint_collapse" style="margin-left: 10px;">ICCPPoint</a></legend>
                    <div id="ICCPPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ICCPPScope = []; if (!obj.scope) obj.ICCPPScope.push ({ id: '', selected: true}); for (var property in ICCPPScope) obj.ICCPPScope.push ({ id: property, selected: obj.scope && obj.scope.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ICCPPScope;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPPoint_collapse" aria-expanded="true" aria-controls="ICCPPoint_collapse" style="margin-left: 10px;">ICCPPoint</a></legend>
                    <div id="ICCPPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='scope'>scope: </label><div class='col-sm-8'><select id='scope' class='form-control'>{{#ICCPPScope}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPPScope}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="TASE2BilateralTable_collapse" style="margin-left: 10px;">TASE2BilateralTable</a></legend>
                    <div id="TASE2BilateralTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#bilateralTableID}}<div><b>bilateralTableID</b>: {{bilateralTableID}}</div>{{/bilateralTableID}}
                    {{#calling}}<div><b>calling</b>: {{calling}}</div>{{/calling}}
                    {{#nameOfICC}}<div><b>nameOfICC</b>: {{nameOfICC}}</div>{{/nameOfICC}}
                    {{#tase2version}}<div><b>tase2version</b>: {{tase2version}}</div>{{/tase2version}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="TASE2BilateralTable_collapse" style="margin-left: 10px;">TASE2BilateralTable</a></legend>
                    <div id="TASE2BilateralTable_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='bilateralTableID'>bilateralTableID: </label><div class='col-sm-8'><input id='bilateralTableID' class='form-control' type='text'{{#bilateralTableID}} value='{{bilateralTableID}}'{{/bilateralTableID}}></div></div>
                    <div class='form-check row'><label class='form-check-label col-sm-4 col-form-label' for='calling'>calling: </label><div class='col-sm-8'><input id='calling' class='form-check-input' type='checkbox'{{#calling}} checked{{/calling}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='nameOfICC'>nameOfICC: </label><div class='col-sm-8'><input id='nameOfICC' class='form-control' type='text'{{#nameOfICC}} value='{{nameOfICC}}'{{/nameOfICC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='tase2version'>tase2version: </label><div class='col-sm-8'><input id='tase2version' class='form-control' type='text'{{#tase2version}} value='{{tase2version}}'{{/tase2version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ISOAPAddressing_collapse" aria-expanded="true" aria-controls="ISOAPAddressing_collapse" style="margin-left: 10px;">ISOAPAddressing</a></legend>
                    <div id="ISOAPAddressing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ISOAPAddressing_collapse" aria-expanded="true" aria-controls="ISOAPAddressing_collapse" style="margin-left: 10px;">ISOAPAddressing</a></legend>
                    <div id="ISOAPAddressing_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='value'>value: </label><div class='col-sm-8'><input id='value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='unit'>unit: </label><div class='col-sm-8'><input id='unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='multiplier'>multiplier: </label><div class='col-sm-8'><input id='multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TCPAcessPoint_collapse" aria-expanded="true" aria-controls="TCPAcessPoint_collapse" style="margin-left: 10px;">TCPAcessPoint</a></legend>
                    <div id="TCPAcessPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IPAccessPoint.prototype.template.call (this) +
                    `
                    {{#keepAliveTime}}<div><b>keepAliveTime</b>: {{keepAliveTime}}</div>{{/keepAliveTime}}
                    {{#port}}<div><b>port</b>: {{port}}</div>{{/port}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TCPAcessPoint_collapse" aria-expanded="true" aria-controls="TCPAcessPoint_collapse" style="margin-left: 10px;">TCPAcessPoint</a></legend>
                    <div id="TCPAcessPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + IPAccessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='keepAliveTime'>keepAliveTime: </label><div class='col-sm-8'><input id='keepAliveTime' class='form-control' type='text'{{#keepAliveTime}} value='{{keepAliveTime}}'{{/keepAliveTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='port'>port: </label><div class='col-sm-8'><input id='port' class='form-control' type='text'{{#port}} value='{{port}}'{{/port}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ISOUpperLayer_collapse" aria-expanded="true" aria-controls="ISOUpperLayer_collapse" style="margin-left: 10px;">ISOUpperLayer</a></legend>
                    <div id="ISOUpperLayer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TCPAcessPoint.prototype.template.call (this) +
                    `
                    {{#ap}}<div><b>ap</b>: {{ap}}</div>{{/ap}}
                    {{#osiPsel}}<div><b>osiPsel</b>: {{osiPsel}}</div>{{/osiPsel}}
                    {{#osiSsel}}<div><b>osiSsel</b>: {{osiSsel}}</div>{{/osiSsel}}
                    {{#osiTsel}}<div><b>osiTsel</b>: {{osiTsel}}</div>{{/osiTsel}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ISOUpperLayer_collapse" aria-expanded="true" aria-controls="ISOUpperLayer_collapse" style="margin-left: 10px;">ISOUpperLayer</a></legend>
                    <div id="ISOUpperLayer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + TCPAcessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='ap'>ap: </label><div class='col-sm-8'><input id='ap' class='form-control' type='text'{{#ap}} value='{{ap}}'{{/ap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='osiPsel'>osiPsel: </label><div class='col-sm-8'><input id='osiPsel' class='form-control' type='text'{{#osiPsel}} value='{{osiPsel}}'{{/osiPsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='osiSsel'>osiSsel: </label><div class='col-sm-8'><input id='osiSsel' class='form-control' type='text'{{#osiSsel}} value='{{osiSsel}}'{{/osiSsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='osiTsel'>osiTsel: </label><div class='col-sm-8'><input id='osiTsel' class='form-control' type='text'{{#osiTsel}} value='{{osiTsel}}'{{/osiTsel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attribute (/<cim:ICCPIndicationPoint.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPIndicationPoint_collapse" aria-expanded="true" aria-controls="ICCPIndicationPoint_collapse" style="margin-left: 10px;">ICCPIndicationPoint</a></legend>
                    <div id="ICCPIndicationPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ICCPIndicationPointType = []; if (!obj.type) obj.ICCPIndicationPointType.push ({ id: '', selected: true}); for (var property in ICCPIndicationPointType) obj.ICCPIndicationPointType.push ({ id: property, selected: obj.type && obj.type.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ICCPIndicationPointType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPIndicationPoint_collapse" aria-expanded="true" aria-controls="ICCPIndicationPoint_collapse" style="margin-left: 10px;">ICCPIndicationPoint</a></legend>
                    <div id="ICCPIndicationPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><select id='type' class='form-control'>{{#ICCPIndicationPointType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPIndicationPointType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attribute (/<cim:ICCPControlPoint.deviceClass\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "deviceClass", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPControlPoint_collapse" aria-expanded="true" aria-controls="ICCPControlPoint_collapse" style="margin-left: 10px;">ICCPControlPoint</a></legend>
                    <div id="ICCPControlPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.template.call (this) +
                    `
                    {{#deviceClass}}<div><b>deviceClass</b>: {{deviceClass}}</div>{{/deviceClass}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ICCPControlPointDeviceClass = []; if (!obj.deviceClass) obj.ICCPControlPointDeviceClass.push ({ id: '', selected: true}); for (var property in ICCPControlPointDeviceClass) obj.ICCPControlPointDeviceClass.push ({ id: property, selected: obj.deviceClass && obj.deviceClass.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ICCPControlPointDeviceClass;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPControlPoint_collapse" aria-expanded="true" aria-controls="ICCPControlPoint_collapse" style="margin-left: 10px;">ICCPControlPoint</a></legend>
                    <div id="ICCPControlPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='deviceClass'>deviceClass: </label><div class='col-sm-8'><select id='deviceClass' class='form-control'>{{#ICCPControlPointDeviceClass}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPControlPointDeviceClass}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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


            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPCommandPoint_collapse" aria-expanded="true" aria-controls="ICCPCommandPoint_collapse" style="margin-left: 10px;">ICCPCommandPoint</a></legend>
                    <div id="ICCPCommandPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.template.call (this) +
                    `
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
            }

            uncondition (obj)
            {
                super.uncondition (obj);
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPCommandPoint_collapse" aria-expanded="true" aria-controls="ICCPCommandPoint_collapse" style="margin-left: 10px;">ICCPCommandPoint</a></legend>
                    <div id="ICCPCommandPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
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
                base.parse_attribute (/<cim:ICCPSetPoint.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
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
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPSetPoint_collapse" aria-expanded="true" aria-controls="ICCPSetPoint_collapse" style="margin-left: 10px;">ICCPSetPoint</a></legend>
                    <div id="ICCPSetPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
                    {{#}}<div><b></b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{}}&quot;);})'>{{}}</a></div>{{/}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.ICCPSetPointType = []; if (!obj.type) obj.ICCPSetPointType.push ({ id: '', selected: true}); for (var property in ICCPSetPointType) obj.ICCPSetPointType.push ({ id: property, selected: obj.type && obj.type.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ICCPSetPointType;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ICCPSetPoint_collapse" aria-expanded="true" aria-controls="ICCPSetPoint_collapse" style="margin-left: 10px;">ICCPSetPoint</a></legend>
                    <div id="ICCPSetPoint_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='type'>type: </label><div class='col-sm-8'><select id='type' class='form-control'>{{#ICCPSetPointType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPSetPointType}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for=''>: </label><div class='col-sm-8'><input id='' class='form-control' type='text'{{#}} value='{{}}'{{/}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
           }
        }

        return (
            {
                IPAccessPoint: IPAccessPoint,
                ICCPInformationMessage: ICCPInformationMessage,
                ICCPControlPoint: ICCPControlPoint,
                ISOUpperLayer: ISOUpperLayer,
                TCPAcessPoint: TCPAcessPoint,
                IPAddressType: IPAddressType,
                ICCPSetPoint: ICCPSetPoint,
                TASE2BilateralTable: TASE2BilateralTable,
                ICCPPoint: ICCPPoint,
                ICCPCommandPoint: ICCPCommandPoint,
                ISOAPAddressing: ISOAPAddressing,
                ICCPIndicationPoint: ICCPIndicationPoint
            }
        );
    }
);