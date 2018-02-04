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
                var bucket = cim_data.IPAccessPoint;
                if (null == bucket)
                   cim_data.IPAccessPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IPAccessPoint[obj.id];
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
                var bucket = context.parsed.IPAccessPoint;
                if (null == bucket)
                   context.parsed.IPAccessPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IPAccessPoint", "address", "address",  base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "addressType", "addressType",  base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "gateway", "gateway",  base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "subnet", "subnet",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IPAccessPoint_collapse" aria-expanded="true" aria-controls="IPAccessPoint_collapse" style="margin-left: 10px;">IPAccessPoint</a></legend>
                    <div id="IPAccessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#address}}<div><b>address</b>: {{address}}</div>{{/address}}
                    {{#addressType}}<div><b>addressType</b>: {{addressType}}</div>{{/addressType}}
                    {{#gateway}}<div><b>gateway</b>: {{gateway}}</div>{{/gateway}}
                    {{#subnet}}<div><b>subnet</b>: {{subnet}}</div>{{/subnet}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IPAccessPoint_collapse" aria-expanded="true" aria-controls="{{id}}_IPAccessPoint_collapse" style="margin-left: 10px;">IPAccessPoint</a></legend>
                    <div id="{{id}}_IPAccessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_address'>address: </label><div class='col-sm-8'><input id='{{id}}_address' class='form-control' type='text'{{#address}} value='{{address}}'{{/address}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_addressType'>addressType: </label><div class='col-sm-8'><input id='{{id}}_addressType' class='form-control' type='text'{{#addressType}} value='{{addressType}}'{{/addressType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gateway'>gateway: </label><div class='col-sm-8'><input id='{{id}}_gateway' class='form-control' type='text'{{#gateway}} value='{{gateway}}'{{/gateway}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subnet'>subnet: </label><div class='col-sm-8'><input id='{{id}}_subnet' class='form-control' type='text'{{#subnet}} value='{{subnet}}'{{/subnet}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IPAccessPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_address").value; if ("" != temp) obj.address = temp;
                temp = document.getElementById (id + "_addressType").value; if ("" != temp) obj.addressType = temp;
                temp = document.getElementById (id + "_gateway").value; if ("" != temp) obj.gateway = temp;
                temp = document.getElementById (id + "_subnet").value; if ("" != temp) obj.subnet = temp;

                return (obj);
            }
        }

        class IPAddressType extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.IPAddressType;
                if (null == bucket)
                   cim_data.IPAddressType = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IPAddressType[obj.id];
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

                base.export_element (obj, "IPAddressType", "value", "value",  base.from_string, fields);
                base.export_element (obj, "IPAddressType", "multiplier", "multiplier",  base.from_string, fields);
                base.export_element (obj, "IPAddressType", "unit", "unit",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IPAddressType_collapse" aria-expanded="true" aria-controls="IPAddressType_collapse" style="margin-left: 10px;">IPAddressType</a></legend>
                    <div id="IPAddressType_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IPAddressType_collapse" aria-expanded="true" aria-controls="{{id}}_IPAddressType_collapse" style="margin-left: 10px;">IPAddressType</a></legend>
                    <div id="{{id}}_IPAddressType_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><input id='{{id}}_multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><input id='{{id}}_unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IPAddressType" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) obj.multiplier = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) obj.unit = temp;

                return (obj);
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
                var bucket = cim_data.ICCPInformationMessage;
                if (null == bucket)
                   cim_data.ICCPInformationMessage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPInformationMessage[obj.id];
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

                base.export_element (obj, "ICCPInformationMessage", "localReference", "localReference",  base.from_string, fields);
                base.export_attribute (obj, "ICCPInformationMessage", "scope", "scope", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPInformationMessage_collapse" aria-expanded="true" aria-controls="ICCPInformationMessage_collapse" style="margin-left: 10px;">ICCPInformationMessage</a></legend>
                    <div id="ICCPInformationMessage_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPInformationMessage_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPInformationMessage_collapse" style="margin-left: 10px;">ICCPInformationMessage</a></legend>
                    <div id="{{id}}_ICCPInformationMessage_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_localReference'>localReference: </label><div class='col-sm-8'><input id='{{id}}_localReference' class='form-control' type='text'{{#localReference}} value='{{localReference}}'{{/localReference}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scope'>scope: </label><div class='col-sm-8'><select id='{{id}}_scope' class='form-control'>{{#ICCPPScope}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPPScope}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ICCPInformationMessage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_localReference").value; if ("" != temp) obj.localReference = temp;
                temp = document.getElementById (id + "_scope").value; if ("" != temp) { temp = ICCPPScope[temp]; if ("undefined" != typeof (temp)) obj.scope = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPPScope." + temp; }

                return (obj);
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
                var bucket = cim_data.ICCPPoint;
                if (null == bucket)
                   cim_data.ICCPPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPPoint";
                base.parse_attribute (/<cim:ICCPPoint.scope\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "scope", sub, context);
                var bucket = context.parsed.ICCPPoint;
                if (null == bucket)
                   context.parsed.ICCPPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPPoint", "scope", "scope", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPPoint_collapse" aria-expanded="true" aria-controls="ICCPPoint_collapse" style="margin-left: 10px;">ICCPPoint</a></legend>
                    <div id="ICCPPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPPoint_collapse" style="margin-left: 10px;">ICCPPoint</a></legend>
                    <div id="{{id}}_ICCPPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scope'>scope: </label><div class='col-sm-8'><select id='{{id}}_scope' class='form-control'>{{#ICCPPScope}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPPScope}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ICCPPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_scope").value; if ("" != temp) { temp = ICCPPScope[temp]; if ("undefined" != typeof (temp)) obj.scope = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPPScope." + temp; }

                return (obj);
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
                var bucket = cim_data.TASE2BilateralTable;
                if (null == bucket)
                   cim_data.TASE2BilateralTable = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TASE2BilateralTable[obj.id];
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

                base.export_element (obj, "TASE2BilateralTable", "bilateralTableID", "bilateralTableID",  base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "calling", "calling",  base.from_boolean, fields);
                base.export_element (obj, "TASE2BilateralTable", "nameOfICC", "nameOfICC",  base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "tase2version", "tase2version",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="TASE2BilateralTable_collapse" style="margin-left: 10px;">TASE2BilateralTable</a></legend>
                    <div id="TASE2BilateralTable_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="{{id}}_TASE2BilateralTable_collapse" style="margin-left: 10px;">TASE2BilateralTable</a></legend>
                    <div id="{{id}}_TASE2BilateralTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bilateralTableID'>bilateralTableID: </label><div class='col-sm-8'><input id='{{id}}_bilateralTableID' class='form-control' type='text'{{#bilateralTableID}} value='{{bilateralTableID}}'{{/bilateralTableID}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_calling'>calling: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_calling' class='form-check-input' type='checkbox'{{#calling}} checked{{/calling}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nameOfICC'>nameOfICC: </label><div class='col-sm-8'><input id='{{id}}_nameOfICC' class='form-control' type='text'{{#nameOfICC}} value='{{nameOfICC}}'{{/nameOfICC}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tase2version'>tase2version: </label><div class='col-sm-8'><input id='{{id}}_tase2version' class='form-control' type='text'{{#tase2version}} value='{{tase2version}}'{{/tase2version}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TASE2BilateralTable" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_bilateralTableID").value; if ("" != temp) obj.bilateralTableID = temp;
                temp = document.getElementById (id + "_calling").checked; if (temp) obj.calling = true;
                temp = document.getElementById (id + "_nameOfICC").value; if ("" != temp) obj.nameOfICC = temp;
                temp = document.getElementById (id + "_tase2version").value; if ("" != temp) obj.tase2version = temp;

                return (obj);
            }
        }

        class ISOAPAddressing extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ISOAPAddressing;
                if (null == bucket)
                   cim_data.ISOAPAddressing = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ISOAPAddressing[obj.id];
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

                base.export_element (obj, "ISOAPAddressing", "value", "value",  base.from_string, fields);
                base.export_element (obj, "ISOAPAddressing", "unit", "unit",  base.from_string, fields);
                base.export_element (obj, "ISOAPAddressing", "multiplier", "multiplier",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ISOAPAddressing_collapse" aria-expanded="true" aria-controls="ISOAPAddressing_collapse" style="margin-left: 10px;">ISOAPAddressing</a></legend>
                    <div id="ISOAPAddressing_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ISOAPAddressing_collapse" aria-expanded="true" aria-controls="{{id}}_ISOAPAddressing_collapse" style="margin-left: 10px;">ISOAPAddressing</a></legend>
                    <div id="{{id}}_ISOAPAddressing_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><input id='{{id}}_unit' class='form-control' type='text'{{#unit}} value='{{unit}}'{{/unit}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><input id='{{id}}_multiplier' class='form-control' type='text'{{#multiplier}} value='{{multiplier}}'{{/multiplier}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ISOAPAddressing" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) obj.unit = temp;
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) obj.multiplier = temp;

                return (obj);
            }
        }

        class TCPAcessPoint extends IPAccessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TCPAcessPoint;
                if (null == bucket)
                   cim_data.TCPAcessPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TCPAcessPoint[obj.id];
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

                base.export_element (obj, "TCPAcessPoint", "keepAliveTime", "keepAliveTime",  base.from_string, fields);
                base.export_element (obj, "TCPAcessPoint", "port", "port",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TCPAcessPoint_collapse" aria-expanded="true" aria-controls="TCPAcessPoint_collapse" style="margin-left: 10px;">TCPAcessPoint</a></legend>
                    <div id="TCPAcessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TCPAcessPoint_collapse" aria-expanded="true" aria-controls="{{id}}_TCPAcessPoint_collapse" style="margin-left: 10px;">TCPAcessPoint</a></legend>
                    <div id="{{id}}_TCPAcessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IPAccessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_keepAliveTime'>keepAliveTime: </label><div class='col-sm-8'><input id='{{id}}_keepAliveTime' class='form-control' type='text'{{#keepAliveTime}} value='{{keepAliveTime}}'{{/keepAliveTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_port'>port: </label><div class='col-sm-8'><input id='{{id}}_port' class='form-control' type='text'{{#port}} value='{{port}}'{{/port}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TCPAcessPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_keepAliveTime").value; if ("" != temp) obj.keepAliveTime = temp;
                temp = document.getElementById (id + "_port").value; if ("" != temp) obj.port = temp;

                return (obj);
            }
        }

        class ISOUpperLayer extends TCPAcessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ISOUpperLayer;
                if (null == bucket)
                   cim_data.ISOUpperLayer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ISOUpperLayer[obj.id];
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

                base.export_element (obj, "ISOUpperLayer", "ap", "ap",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiPsel", "osiPsel",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiSsel", "osiSsel",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiTsel", "osiTsel",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ISOUpperLayer_collapse" aria-expanded="true" aria-controls="ISOUpperLayer_collapse" style="margin-left: 10px;">ISOUpperLayer</a></legend>
                    <div id="ISOUpperLayer_collapse" class="collapse in show" style="margin-left: 10px;">
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ISOUpperLayer_collapse" aria-expanded="true" aria-controls="{{id}}_ISOUpperLayer_collapse" style="margin-left: 10px;">ISOUpperLayer</a></legend>
                    <div id="{{id}}_ISOUpperLayer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TCPAcessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ap'>ap: </label><div class='col-sm-8'><input id='{{id}}_ap' class='form-control' type='text'{{#ap}} value='{{ap}}'{{/ap}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiPsel'>osiPsel: </label><div class='col-sm-8'><input id='{{id}}_osiPsel' class='form-control' type='text'{{#osiPsel}} value='{{osiPsel}}'{{/osiPsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiSsel'>osiSsel: </label><div class='col-sm-8'><input id='{{id}}_osiSsel' class='form-control' type='text'{{#osiSsel}} value='{{osiSsel}}'{{/osiSsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiTsel'>osiTsel: </label><div class='col-sm-8'><input id='{{id}}_osiTsel' class='form-control' type='text'{{#osiTsel}} value='{{osiTsel}}'{{/osiTsel}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ISOUpperLayer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ap").value; if ("" != temp) obj.ap = temp;
                temp = document.getElementById (id + "_osiPsel").value; if ("" != temp) obj.osiPsel = temp;
                temp = document.getElementById (id + "_osiSsel").value; if ("" != temp) obj.osiSsel = temp;
                temp = document.getElementById (id + "_osiTsel").value; if ("" != temp) obj.osiTsel = temp;

                return (obj);
            }
        }

        class ICCPIndicationPoint extends ICCPPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ICCPIndicationPoint;
                if (null == bucket)
                   cim_data.ICCPIndicationPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPIndicationPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPIndicationPoint";
                base.parse_attribute (/<cim:ICCPIndicationPoint.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
                var bucket = context.parsed.ICCPIndicationPoint;
                if (null == bucket)
                   context.parsed.ICCPIndicationPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPPoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPIndicationPoint", "type", "type", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPIndicationPoint_collapse" aria-expanded="true" aria-controls="ICCPIndicationPoint_collapse" style="margin-left: 10px;">ICCPIndicationPoint</a></legend>
                    <div id="ICCPIndicationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPIndicationPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPIndicationPoint_collapse" style="margin-left: 10px;">ICCPIndicationPoint</a></legend>
                    <div id="{{id}}_ICCPIndicationPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><select id='{{id}}_type' class='form-control'>{{#ICCPIndicationPointType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPIndicationPointType}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ICCPIndicationPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) { temp = ICCPIndicationPointType[temp]; if ("undefined" != typeof (temp)) obj.type = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPIndicationPointType." + temp; }

                return (obj);
            }
        }

        class ICCPControlPoint extends ICCPPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ICCPControlPoint;
                if (null == bucket)
                   cim_data.ICCPControlPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPControlPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPControlPoint";
                base.parse_attribute (/<cim:ICCPControlPoint.deviceClass\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "deviceClass", sub, context);
                var bucket = context.parsed.ICCPControlPoint;
                if (null == bucket)
                   context.parsed.ICCPControlPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPPoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPControlPoint", "deviceClass", "deviceClass", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPControlPoint_collapse" aria-expanded="true" aria-controls="ICCPControlPoint_collapse" style="margin-left: 10px;">ICCPControlPoint</a></legend>
                    <div id="ICCPControlPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.template.call (this) +
                    `
                    {{#deviceClass}}<div><b>deviceClass</b>: {{deviceClass}}</div>{{/deviceClass}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPControlPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPControlPoint_collapse" style="margin-left: 10px;">ICCPControlPoint</a></legend>
                    <div id="{{id}}_ICCPControlPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_deviceClass'>deviceClass: </label><div class='col-sm-8'><select id='{{id}}_deviceClass' class='form-control'>{{#ICCPControlPointDeviceClass}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPControlPointDeviceClass}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ICCPControlPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_deviceClass").value; if ("" != temp) { temp = ICCPControlPointDeviceClass[temp]; if ("undefined" != typeof (temp)) obj.deviceClass = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPControlPointDeviceClass." + temp; }

                return (obj);
            }
        }

        class ICCPCommandPoint extends ICCPControlPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ICCPCommandPoint;
                if (null == bucket)
                   cim_data.ICCPCommandPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPCommandPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPControlPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPCommandPoint";
                var bucket = context.parsed.ICCPCommandPoint;
                if (null == bucket)
                   context.parsed.ICCPCommandPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPControlPoint.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPCommandPoint_collapse" aria-expanded="true" aria-controls="ICCPCommandPoint_collapse" style="margin-left: 10px;">ICCPCommandPoint</a></legend>
                    <div id="ICCPCommandPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.template.call (this) +
                    `
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPCommandPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPCommandPoint_collapse" style="margin-left: 10px;">ICCPCommandPoint</a></legend>
                    <div id="{{id}}_ICCPCommandPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "ICCPCommandPoint" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class ICCPSetPoint extends ICCPControlPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ICCPSetPoint;
                if (null == bucket)
                   cim_data.ICCPSetPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPSetPoint[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ICCPControlPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPSetPoint";
                base.parse_attribute (/<cim:ICCPSetPoint.type\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "type", sub, context);
                var bucket = context.parsed.ICCPSetPoint;
                if (null == bucket)
                   context.parsed.ICCPSetPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ICCPControlPoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPSetPoint", "type", "type", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPSetPoint_collapse" aria-expanded="true" aria-controls="ICCPSetPoint_collapse" style="margin-left: 10px;">ICCPSetPoint</a></legend>
                    <div id="ICCPSetPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.template.call (this) +
                    `
                    {{#type}}<div><b>type</b>: {{type}}</div>{{/type}}
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPSetPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPSetPoint_collapse" style="margin-left: 10px;">ICCPSetPoint</a></legend>
                    <div id="{{id}}_ICCPSetPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ICCPControlPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_type'>type: </label><div class='col-sm-8'><select id='{{id}}_type' class='form-control'>{{#ICCPSetPointType}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/ICCPSetPointType}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ICCPSetPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_type").value; if ("" != temp) { temp = ICCPSetPointType[temp]; if ("undefined" != typeof (temp)) obj.type = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPSetPointType." + temp; }

                return (obj);
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