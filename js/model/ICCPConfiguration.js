define
(
    ["model/base", "model/Core", "model/Meas", "model/SCADA"],
    /**
     * This package models configuration of ICCP required for bilateral exchanges.
     *
     */
    function (base, Core, Meas, SCADA)
    {

        /**
         * Specifies the expected security mechanism, per IEC 62351-4, to be utilized.
         *
         */
        let ApplicationSecurityKind =
        {
            "nonSecure": "nonSecure",
            "secure": "secure",
            "endToEndSecure": "endToEndSecure"
        };
        Object.freeze (ApplicationSecurityKind);

        /**
         * Indicates if the addressing of the IPAccessPoint, gateway, and subnet are per IPv4 or IPv6.
         *
         */
        let IPAddressKind =
        {
            "iPv4": "iPv4",
            "iPv6": "iPv6"
        };
        Object.freeze (IPAddressKind);

        /**
         * Provides access privilege information regarding an ICCP point.
         *
         */
        let ICCPAccessPrivilegeKind =
        {
            "readOnly": "readOnly",
            "readWrite": "readWrite"
        };
        Object.freeze (ICCPAccessPrivilegeKind);

        /**
         * Indicates the type of quality information that is to be exchanged.
         *
         * For protection events the value shall be "none".
         *
         */
        let ICCPQualityKind =
        {
            "none": "none",
            "qualityOnly": "qualityOnly",
            "qualityAndTime": "qualityAndTime",
            "extended": "extended",
            "extendedwithQualityTime": "extendedwithQualityTime"
        };
        Object.freeze (ICCPQualityKind);

        /**
         * The kind of ICCP point that is to be conveyed.
         *
         */
        let ICCPPointKind =
        {
            "discrete": "discrete",
            "real": "real",
            "state": "state",
            "stateSupplemental": "stateSupplemental",
            "singleProtectionEvent": "singleProtectionEvent",
            "packedProtectionEvent": "packedProtectionEvent"
        };
        Object.freeze (ICCPPointKind);

        /**
         * Specifies the control centre scope.
         *
         */
        let ICCPScopeKind =
        {
            "vCC": "vCC",
            "iCC": "iCC"
        };
        Object.freeze (ICCPScopeKind);

        /**
         * BilateralExchangeActor describes an actor that provides ICCP data, consumes ICCP data or both.
         *
         * The ICCP data provider lists the data it makes available to an ICCP data consumer.  This data is described by ProvidedBilateralPoints. The relation between an ICCP data provider and a consumer is established by a BilateralExchangeAgreement.  It is up to the ICCP data consumer to select what ProvidedBilateralPoints to use.  The selection made is not described in this information model.
         *
         */
        class BilateralExchangeActor extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BilateralExchangeActor;
                if (null == bucket)
                   cim_data.BilateralExchangeActor = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BilateralExchangeActor[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BilateralExchangeActor";
                base.parse_attributes (/<cim:BilateralExchangeActor.ProvidedBilateralIOPoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProvidedBilateralIOPoint", sub, context);
                base.parse_attributes (/<cim:BilateralExchangeActor.ConsumerBilateralExchange\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ConsumerBilateralExchange", sub, context);
                base.parse_attributes (/<cim:BilateralExchangeActor.ProviderBilateralExchange\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ProviderBilateralExchange", sub, context);
                base.parse_attributes (/<cim:BilateralExchangeActor.CommunicationLink\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "CommunicationLink", sub, context);
                let bucket = context.parsed.BilateralExchangeActor;
                if (null == bucket)
                   context.parsed.BilateralExchangeActor = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "BilateralExchangeActor", "ProvidedBilateralIOPoint", "ProvidedBilateralIOPoint", fields);
                base.export_attributes (obj, "BilateralExchangeActor", "ConsumerBilateralExchange", "ConsumerBilateralExchange", fields);
                base.export_attributes (obj, "BilateralExchangeActor", "ProviderBilateralExchange", "ProviderBilateralExchange", fields);
                base.export_attributes (obj, "BilateralExchangeActor", "CommunicationLink", "CommunicationLink", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BilateralExchangeActor_collapse" aria-expanded="true" aria-controls="BilateralExchangeActor_collapse" style="margin-left: 10px;">BilateralExchangeActor</a></legend>
                    <div id="BilateralExchangeActor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#ProvidedBilateralIOPoint}}<div><b>ProvidedBilateralIOPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProvidedBilateralIOPoint}}
                    {{#ConsumerBilateralExchange}}<div><b>ConsumerBilateralExchange</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ConsumerBilateralExchange}}
                    {{#ProviderBilateralExchange}}<div><b>ProviderBilateralExchange</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProviderBilateralExchange}}
                    {{#CommunicationLink}}<div><b>CommunicationLink</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CommunicationLink}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ProvidedBilateralIOPoint"]) obj["ProvidedBilateralIOPoint_string"] = obj["ProvidedBilateralIOPoint"].join ();
                if (obj["ConsumerBilateralExchange"]) obj["ConsumerBilateralExchange_string"] = obj["ConsumerBilateralExchange"].join ();
                if (obj["ProviderBilateralExchange"]) obj["ProviderBilateralExchange_string"] = obj["ProviderBilateralExchange"].join ();
                if (obj["CommunicationLink"]) obj["CommunicationLink_string"] = obj["CommunicationLink"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ProvidedBilateralIOPoint_string"];
                delete obj["ConsumerBilateralExchange_string"];
                delete obj["ProviderBilateralExchange_string"];
                delete obj["CommunicationLink_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BilateralExchangeActor_collapse" aria-expanded="true" aria-controls="{{id}}_BilateralExchangeActor_collapse" style="margin-left: 10px;">BilateralExchangeActor</a></legend>
                    <div id="{{id}}_BilateralExchangeActor_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "BilateralExchangeActor" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProvidedBilateralIOPoint", "0..*", "1", "ProvidedBilateralPoint", "BilateralExchangeActor"],
                            ["ConsumerBilateralExchange", "0..*", "0..1", "BilateralExchangeAgreement", "Consumer"],
                            ["ProviderBilateralExchange", "0..*", "1", "BilateralExchangeAgreement", "Provider"],
                            ["CommunicationLink", "0..n", "0..1", "CommunicationLink", "BilateralExchangeActor"]
                        ]
                    )
                );
            }
        }

        /**
         * Used to convey information that will allow matching in order to determine which certificate to use.
         *
         * Actual certificates are exchanged externally to the CIM exchange.
         *
         */
        class PublicX509Certificate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.PublicX509Certificate;
                if (null == bucket)
                   cim_data.PublicX509Certificate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PublicX509Certificate[obj.id];
            }

            parse (context, sub)
            {
                let obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PublicX509Certificate";
                base.parse_element (/<cim:PublicX509Certificate.issuerName>([\s\S]*?)<\/cim:PublicX509Certificate.issuerName>/g, obj, "issuerName", base.to_string, sub, context);
                base.parse_element (/<cim:PublicX509Certificate.serialNumber>([\s\S]*?)<\/cim:PublicX509Certificate.serialNumber>/g, obj, "serialNumber", base.to_string, sub, context);
                base.parse_attribute (/<cim:PublicX509Certificate.ISOUpperLayer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ISOUpperLayer", sub, context);
                base.parse_attribute (/<cim:PublicX509Certificate.TCPAccessPoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TCPAccessPoint", sub, context);
                let bucket = context.parsed.PublicX509Certificate;
                if (null == bucket)
                   context.parsed.PublicX509Certificate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = [];

                base.export_element (obj, "PublicX509Certificate", "issuerName", "issuerName",  base.from_string, fields);
                base.export_element (obj, "PublicX509Certificate", "serialNumber", "serialNumber",  base.from_string, fields);
                base.export_attribute (obj, "PublicX509Certificate", "ISOUpperLayer", "ISOUpperLayer", fields);
                base.export_attribute (obj, "PublicX509Certificate", "TCPAccessPoint", "TCPAccessPoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#PublicX509Certificate_collapse" aria-expanded="true" aria-controls="PublicX509Certificate_collapse" style="margin-left: 10px;">PublicX509Certificate</a></legend>
                    <div id="PublicX509Certificate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#issuerName}}<div><b>issuerName</b>: {{issuerName}}</div>{{/issuerName}}
                    {{#serialNumber}}<div><b>serialNumber</b>: {{serialNumber}}</div>{{/serialNumber}}
                    {{#ISOUpperLayer}}<div><b>ISOUpperLayer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ISOUpperLayer}}&quot;);}); return false;'>{{ISOUpperLayer}}</a></div>{{/ISOUpperLayer}}
                    {{#TCPAccessPoint}}<div><b>TCPAccessPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TCPAccessPoint}}&quot;);}); return false;'>{{TCPAccessPoint}}</a></div>{{/TCPAccessPoint}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_PublicX509Certificate_collapse" aria-expanded="true" aria-controls="{{id}}_PublicX509Certificate_collapse" style="margin-left: 10px;">PublicX509Certificate</a></legend>
                    <div id="{{id}}_PublicX509Certificate_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_issuerName'>issuerName: </label><div class='col-sm-8'><input id='{{id}}_issuerName' class='form-control' type='text'{{#issuerName}} value='{{issuerName}}'{{/issuerName}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_serialNumber'>serialNumber: </label><div class='col-sm-8'><input id='{{id}}_serialNumber' class='form-control' type='text'{{#serialNumber}} value='{{serialNumber}}'{{/serialNumber}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ISOUpperLayer'>ISOUpperLayer: </label><div class='col-sm-8'><input id='{{id}}_ISOUpperLayer' class='form-control' type='text'{{#ISOUpperLayer}} value='{{ISOUpperLayer}}'{{/ISOUpperLayer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TCPAccessPoint'>TCPAccessPoint: </label><div class='col-sm-8'><input id='{{id}}_TCPAccessPoint' class='form-control' type='text'{{#TCPAccessPoint}} value='{{TCPAccessPoint}}'{{/TCPAccessPoint}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "PublicX509Certificate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_issuerName").value; if ("" !== temp) obj["issuerName"] = temp;
                temp = document.getElementById (id + "_serialNumber").value; if ("" !== temp) obj["serialNumber"] = temp;
                temp = document.getElementById (id + "_ISOUpperLayer").value; if ("" !== temp) obj["ISOUpperLayer"] = temp;
                temp = document.getElementById (id + "_TCPAccessPoint").value; if ("" !== temp) obj["TCPAccessPoint"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ISOUpperLayer", "0..1", "0..*", "ISOUpperLayer", "UpperLayerPublicX509Certificate"],
                            ["TCPAccessPoint", "0..1", "0..*", "TCPAccessPoint", "PublicX509Certificate"]
                        ]
                    )
                );
            }
        }

        /**
         * Internet Protocol Access Point � used to represent an addressing structure is based upon an Internet Protocol (IP) address.
         *
         */
        class IPAccessPoint extends SCADA.CommunicationLink
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IPAccessPoint;
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
                let obj = SCADA.CommunicationLink.prototype.parse.call (this, context, sub);
                obj.cls = "IPAccessPoint";
                base.parse_element (/<cim:IPAccessPoint.address>([\s\S]*?)<\/cim:IPAccessPoint.address>/g, obj, "address", base.to_string, sub, context);
                base.parse_attribute (/<cim:IPAccessPoint.addressType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "addressType", sub, context);
                base.parse_element (/<cim:IPAccessPoint.gateway>([\s\S]*?)<\/cim:IPAccessPoint.gateway>/g, obj, "gateway", base.to_string, sub, context);
                base.parse_element (/<cim:IPAccessPoint.subnet>([\s\S]*?)<\/cim:IPAccessPoint.subnet>/g, obj, "subnet", base.to_string, sub, context);
                let bucket = context.parsed.IPAccessPoint;
                if (null == bucket)
                   context.parsed.IPAccessPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = SCADA.CommunicationLink.prototype.export.call (this, obj, false);

                base.export_element (obj, "IPAccessPoint", "address", "address",  base.from_string, fields);
                base.export_attribute (obj, "IPAccessPoint", "addressType", "addressType", fields);
                base.export_element (obj, "IPAccessPoint", "gateway", "gateway",  base.from_string, fields);
                base.export_element (obj, "IPAccessPoint", "subnet", "subnet",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    + SCADA.CommunicationLink.prototype.template.call (this) +
                    `
                    {{#address}}<div><b>address</b>: {{address}}</div>{{/address}}
                    {{#addressType}}<div><b>addressType</b>: {{addressType}}</div>{{/addressType}}
                    {{#gateway}}<div><b>gateway</b>: {{gateway}}</div>{{/gateway}}
                    {{#subnet}}<div><b>subnet</b>: {{subnet}}</div>{{/subnet}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["addressTypeIPAddressKind"] = [{ id: '', selected: (!obj["addressType"])}]; for (let property in IPAddressKind) obj["addressTypeIPAddressKind"].push ({ id: property, selected: obj["addressType"] && obj["addressType"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["addressTypeIPAddressKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IPAccessPoint_collapse" aria-expanded="true" aria-controls="{{id}}_IPAccessPoint_collapse" style="margin-left: 10px;">IPAccessPoint</a></legend>
                    <div id="{{id}}_IPAccessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + SCADA.CommunicationLink.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_address'>address: </label><div class='col-sm-8'><input id='{{id}}_address' class='form-control' type='text'{{#address}} value='{{address}}'{{/address}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_addressType'>addressType: </label><div class='col-sm-8'><select id='{{id}}_addressType' class='form-control custom-select'>{{#addressTypeIPAddressKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/addressTypeIPAddressKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_gateway'>gateway: </label><div class='col-sm-8'><input id='{{id}}_gateway' class='form-control' type='text'{{#gateway}} value='{{gateway}}'{{/gateway}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_subnet'>subnet: </label><div class='col-sm-8'><input id='{{id}}_subnet' class='form-control' type='text'{{#subnet}} value='{{subnet}}'{{/subnet}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "IPAccessPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_address").value; if ("" !== temp) obj["address"] = temp;
                temp = IPAddressKind[document.getElementById (id + "_addressType").value]; if (temp) obj["addressType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#IPAddressKind." + temp; else delete obj["addressType"];
                temp = document.getElementById (id + "_gateway").value; if ("" !== temp) obj["gateway"] = temp;
                temp = document.getElementById (id + "_subnet").value; if ("" !== temp) obj["subnet"] = temp;

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
                let bucket = cim_data.ICCPInformationMessage;
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
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPInformationMessage";
                base.parse_element (/<cim:ICCPInformationMessage.localReference>([\s\S]*?)<\/cim:ICCPInformationMessage.localReference>/g, obj, "localReference", base.to_string, sub, context);
                base.parse_attribute (/<cim:ICCPInformationMessage.scope\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "scope", sub, context);
                base.parse_attributes (/<cim:ICCPInformationMessage.TASE2BilateralTable\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "TASE2BilateralTable", sub, context);
                let bucket = context.parsed.ICCPInformationMessage;
                if (null == bucket)
                   context.parsed.ICCPInformationMessage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPInformationMessage", "localReference", "localReference",  base.from_string, fields);
                base.export_attribute (obj, "ICCPInformationMessage", "scope", "scope", fields);
                base.export_attributes (obj, "ICCPInformationMessage", "TASE2BilateralTable", "TASE2BilateralTable", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    {{#TASE2BilateralTable}}<div><b>TASE2BilateralTable</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TASE2BilateralTable}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["scopeICCPScopeKind"] = [{ id: '', selected: (!obj["scope"])}]; for (let property in ICCPScopeKind) obj["scopeICCPScopeKind"].push ({ id: property, selected: obj["scope"] && obj["scope"].endsWith ('.' + property)});
                if (obj["TASE2BilateralTable"]) obj["TASE2BilateralTable_string"] = obj["TASE2BilateralTable"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["scopeICCPScopeKind"];
                delete obj["TASE2BilateralTable_string"];
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
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scope'>scope: </label><div class='col-sm-8'><select id='{{id}}_scope' class='form-control custom-select'>{{#scopeICCPScopeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/scopeICCPScopeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TASE2BilateralTable'>TASE2BilateralTable: </label><div class='col-sm-8'><input id='{{id}}_TASE2BilateralTable' class='form-control' type='text'{{#TASE2BilateralTable}} value='{{TASE2BilateralTable_string}}'{{/TASE2BilateralTable}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ICCPInformationMessage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_localReference").value; if ("" !== temp) obj["localReference"] = temp;
                temp = ICCPScopeKind[document.getElementById (id + "_scope").value]; if (temp) obj["scope"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPScopeKind." + temp; else delete obj["scope"];
                temp = document.getElementById (id + "_TASE2BilateralTable").value; if ("" !== temp) obj["TASE2BilateralTable"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["TASE2BilateralTable", "0..*", "0..*", "TASE2BilateralTable", "ICCPInformationMessage"]
                        ]
                    )
                );
            }
        }

        /**
         * Indicates the point source for an IO Point.
         *
         */
        class IOPointSource extends Meas.MeasurementValueSource
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.IOPointSource;
                if (null == bucket)
                   cim_data.IOPointSource = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IOPointSource[obj.id];
            }

            parse (context, sub)
            {
                let obj = Meas.MeasurementValueSource.prototype.parse.call (this, context, sub);
                obj.cls = "IOPointSource";
                base.parse_attributes (/<cim:IOPointSource.IOPoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IOPoint", sub, context);
                let bucket = context.parsed.IOPointSource;
                if (null == bucket)
                   context.parsed.IOPointSource = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Meas.MeasurementValueSource.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "IOPointSource", "IOPoint", "IOPoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IOPointSource_collapse" aria-expanded="true" aria-controls="IOPointSource_collapse" style="margin-left: 10px;">IOPointSource</a></legend>
                    <div id="IOPointSource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueSource.prototype.template.call (this) +
                    `
                    {{#IOPoint}}<div><b>IOPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/IOPoint}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["IOPoint"]) obj["IOPoint_string"] = obj["IOPoint"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["IOPoint_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IOPointSource_collapse" aria-expanded="true" aria-controls="{{id}}_IOPointSource_collapse" style="margin-left: 10px;">IOPointSource</a></legend>
                    <div id="{{id}}_IOPointSource_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Meas.MeasurementValueSource.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "IOPointSource" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["IOPoint", "0..*", "0..1", "IOPoint", "IOPointSource"]
                        ]
                    )
                );
            }
        }

        /**
         * Allows declaration of ICCP points to be provided through a Bilateral Table agreement.
         *
         */
        class ProvidedBilateralPoint extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ProvidedBilateralPoint;
                if (null == bucket)
                   cim_data.ProvidedBilateralPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ProvidedBilateralPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ProvidedBilateralPoint";
                base.parse_attribute (/<cim:ProvidedBilateralPoint.BilateralExchangeActor\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "BilateralExchangeActor", sub, context);
                base.parse_attribute (/<cim:ProvidedBilateralPoint.IOPoint\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "IOPoint", sub, context);
                let bucket = context.parsed.ProvidedBilateralPoint;
                if (null == bucket)
                   context.parsed.ProvidedBilateralPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ProvidedBilateralPoint", "BilateralExchangeActor", "BilateralExchangeActor", fields);
                base.export_attribute (obj, "ProvidedBilateralPoint", "IOPoint", "IOPoint", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ProvidedBilateralPoint_collapse" aria-expanded="true" aria-controls="ProvidedBilateralPoint_collapse" style="margin-left: 10px;">ProvidedBilateralPoint</a></legend>
                    <div id="ProvidedBilateralPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#BilateralExchangeActor}}<div><b>BilateralExchangeActor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{BilateralExchangeActor}}&quot;);}); return false;'>{{BilateralExchangeActor}}</a></div>{{/BilateralExchangeActor}}
                    {{#IOPoint}}<div><b>IOPoint</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{IOPoint}}&quot;);}); return false;'>{{IOPoint}}</a></div>{{/IOPoint}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ProvidedBilateralPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ProvidedBilateralPoint_collapse" style="margin-left: 10px;">ProvidedBilateralPoint</a></legend>
                    <div id="{{id}}_ProvidedBilateralPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_BilateralExchangeActor'>BilateralExchangeActor: </label><div class='col-sm-8'><input id='{{id}}_BilateralExchangeActor' class='form-control' type='text'{{#BilateralExchangeActor}} value='{{BilateralExchangeActor}}'{{/BilateralExchangeActor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_IOPoint'>IOPoint: </label><div class='col-sm-8'><input id='{{id}}_IOPoint' class='form-control' type='text'{{#IOPoint}} value='{{IOPoint}}'{{/IOPoint}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ProvidedBilateralPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_BilateralExchangeActor").value; if ("" !== temp) obj["BilateralExchangeActor"] = temp;
                temp = document.getElementById (id + "_IOPoint").value; if ("" !== temp) obj["IOPoint"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["BilateralExchangeActor", "1", "0..*", "BilateralExchangeActor", "ProvidedBilateralIOPoint"],
                            ["IOPoint", "0..1", "0..*", "IOPoint", "BilateralToIOPoint"]
                        ]
                    )
                );
            }
        }

        /**
         * This is the representation of the information exchange agreement between peers.
         *
         */
        class BilateralExchangeAgreement extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.BilateralExchangeAgreement;
                if (null == bucket)
                   cim_data.BilateralExchangeAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.BilateralExchangeAgreement[obj.id];
            }

            parse (context, sub)
            {
                let obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BilateralExchangeAgreement";
                base.parse_attribute (/<cim:BilateralExchangeAgreement.Consumer\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Consumer", sub, context);
                base.parse_attribute (/<cim:BilateralExchangeAgreement.Provider\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "Provider", sub, context);
                let bucket = context.parsed.BilateralExchangeAgreement;
                if (null == bucket)
                   context.parsed.BilateralExchangeAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "BilateralExchangeAgreement", "Consumer", "Consumer", fields);
                base.export_attribute (obj, "BilateralExchangeAgreement", "Provider", "Provider", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#BilateralExchangeAgreement_collapse" aria-expanded="true" aria-controls="BilateralExchangeAgreement_collapse" style="margin-left: 10px;">BilateralExchangeAgreement</a></legend>
                    <div id="BilateralExchangeAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#Consumer}}<div><b>Consumer</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Consumer}}&quot;);}); return false;'>{{Consumer}}</a></div>{{/Consumer}}
                    {{#Provider}}<div><b>Provider</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{Provider}}&quot;);}); return false;'>{{Provider}}</a></div>{{/Provider}}
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_BilateralExchangeAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_BilateralExchangeAgreement_collapse" style="margin-left: 10px;">BilateralExchangeAgreement</a></legend>
                    <div id="{{id}}_BilateralExchangeAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Consumer'>Consumer: </label><div class='col-sm-8'><input id='{{id}}_Consumer' class='form-control' type='text'{{#Consumer}} value='{{Consumer}}'{{/Consumer}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Provider'>Provider: </label><div class='col-sm-8'><input id='{{id}}_Provider' class='form-control' type='text'{{#Provider}} value='{{Provider}}'{{/Provider}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "BilateralExchangeAgreement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Consumer").value; if ("" !== temp) obj["Consumer"] = temp;
                temp = document.getElementById (id + "_Provider").value; if ("" !== temp) obj["Provider"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Consumer", "0..1", "0..*", "BilateralExchangeActor", "ConsumerBilateralExchange"],
                            ["Provider", "1", "0..*", "BilateralExchangeActor", "ProviderBilateralExchange"]
                        ]
                    )
                );
            }
        }

        /**
         * Indicates that the ICCP information is global in nature and normally is available to all authorized peers.
         *
         */
        class ICCPVCC extends BilateralExchangeActor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ICCPVCC;
                if (null == bucket)
                   cim_data.ICCPVCC = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPVCC[obj.id];
            }

            parse (context, sub)
            {
                let obj = BilateralExchangeActor.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPVCC";
                let bucket = context.parsed.ICCPVCC;
                if (null == bucket)
                   context.parsed.ICCPVCC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BilateralExchangeActor.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPVCC_collapse" aria-expanded="true" aria-controls="ICCPVCC_collapse" style="margin-left: 10px;">ICCPVCC</a></legend>
                    <div id="ICCPVCC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BilateralExchangeActor.prototype.template.call (this) +
                    `
                    </div>
                    </fieldset>

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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPVCC_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPVCC_collapse" style="margin-left: 10px;">ICCPVCC</a></legend>
                    <div id="{{id}}_ICCPVCC_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BilateralExchangeActor.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                obj = obj || { id: id, cls: "ICCPVCC" };
                super.submit (id, obj);

                return (obj);
            }
        }

        /**
         * This contains the information that a particular actor exposes for a particular agreed upon ICCP Bilateral Table.
         *
         */
        class ICCPVirtualControlCentre extends BilateralExchangeActor
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ICCPVirtualControlCentre;
                if (null == bucket)
                   cim_data.ICCPVirtualControlCentre = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPVirtualControlCentre[obj.id];
            }

            parse (context, sub)
            {
                let obj = BilateralExchangeActor.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPVirtualControlCentre";
                base.parse_element (/<cim:ICCPVirtualControlCentre.clientAndServer>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.clientAndServer>/g, obj, "clientAndServer", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.minimumUpdateInterval>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.minimumUpdateInterval>/g, obj, "minimumUpdateInterval", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.calling>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.calling>/g, obj, "calling", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.transportSecurityRequirement>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.transportSecurityRequirement>/g, obj, "transportSecurityRequirement", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:ICCPVirtualControlCentre.applicationSecurityRequirement\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "applicationSecurityRequirement", sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.nameOfLocalICC>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.nameOfLocalICC>/g, obj, "nameOfLocalICC", base.to_string, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForBlock1>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForBlock1>/g, obj, "supportForBlock1", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForBlock2>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForBlock2>/g, obj, "supportForBlock2", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForBlock3>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForBlock3>/g, obj, "supportForBlock3", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForBlock4>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForBlock4>/g, obj, "supportForBlock4", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForBlock5>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForBlock5>/g, obj, "supportForBlock5", base.to_boolean, sub, context);
                base.parse_element (/<cim:ICCPVirtualControlCentre.supportForDepriciatedBlock8>([\s\S]*?)<\/cim:ICCPVirtualControlCentre.supportForDepriciatedBlock8>/g, obj, "supportForDepriciatedBlock8", base.to_boolean, sub, context);
                let bucket = context.parsed.ICCPVirtualControlCentre;
                if (null == bucket)
                   context.parsed.ICCPVirtualControlCentre = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BilateralExchangeActor.prototype.export.call (this, obj, false);

                base.export_element (obj, "ICCPVirtualControlCentre", "clientAndServer", "clientAndServer",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "minimumUpdateInterval", "minimumUpdateInterval",  base.from_string, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "calling", "calling",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "transportSecurityRequirement", "transportSecurityRequirement",  base.from_boolean, fields);
                base.export_attribute (obj, "ICCPVirtualControlCentre", "applicationSecurityRequirement", "applicationSecurityRequirement", fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "nameOfLocalICC", "nameOfLocalICC",  base.from_string, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForBlock1", "supportForBlock1",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForBlock2", "supportForBlock2",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForBlock3", "supportForBlock3",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForBlock4", "supportForBlock4",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForBlock5", "supportForBlock5",  base.from_boolean, fields);
                base.export_element (obj, "ICCPVirtualControlCentre", "supportForDepriciatedBlock8", "supportForDepriciatedBlock8",  base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPVirtualControlCentre_collapse" aria-expanded="true" aria-controls="ICCPVirtualControlCentre_collapse" style="margin-left: 10px;">ICCPVirtualControlCentre</a></legend>
                    <div id="ICCPVirtualControlCentre_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BilateralExchangeActor.prototype.template.call (this) +
                    `
                    {{#clientAndServer}}<div><b>clientAndServer</b>: {{clientAndServer}}</div>{{/clientAndServer}}
                    {{#minimumUpdateInterval}}<div><b>minimumUpdateInterval</b>: {{minimumUpdateInterval}}</div>{{/minimumUpdateInterval}}
                    {{#calling}}<div><b>calling</b>: {{calling}}</div>{{/calling}}
                    {{#transportSecurityRequirement}}<div><b>transportSecurityRequirement</b>: {{transportSecurityRequirement}}</div>{{/transportSecurityRequirement}}
                    {{#applicationSecurityRequirement}}<div><b>applicationSecurityRequirement</b>: {{applicationSecurityRequirement}}</div>{{/applicationSecurityRequirement}}
                    {{#nameOfLocalICC}}<div><b>nameOfLocalICC</b>: {{nameOfLocalICC}}</div>{{/nameOfLocalICC}}
                    {{#supportForBlock1}}<div><b>supportForBlock1</b>: {{supportForBlock1}}</div>{{/supportForBlock1}}
                    {{#supportForBlock2}}<div><b>supportForBlock2</b>: {{supportForBlock2}}</div>{{/supportForBlock2}}
                    {{#supportForBlock3}}<div><b>supportForBlock3</b>: {{supportForBlock3}}</div>{{/supportForBlock3}}
                    {{#supportForBlock4}}<div><b>supportForBlock4</b>: {{supportForBlock4}}</div>{{/supportForBlock4}}
                    {{#supportForBlock5}}<div><b>supportForBlock5</b>: {{supportForBlock5}}</div>{{/supportForBlock5}}
                    {{#supportForDepriciatedBlock8}}<div><b>supportForDepriciatedBlock8</b>: {{supportForDepriciatedBlock8}}</div>{{/supportForDepriciatedBlock8}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["applicationSecurityRequirementApplicationSecurityKind"] = [{ id: '', selected: (!obj["applicationSecurityRequirement"])}]; for (let property in ApplicationSecurityKind) obj["applicationSecurityRequirementApplicationSecurityKind"].push ({ id: property, selected: obj["applicationSecurityRequirement"] && obj["applicationSecurityRequirement"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["applicationSecurityRequirementApplicationSecurityKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPVirtualControlCentre_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPVirtualControlCentre_collapse" style="margin-left: 10px;">ICCPVirtualControlCentre</a></legend>
                    <div id="{{id}}_ICCPVirtualControlCentre_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BilateralExchangeActor.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_clientAndServer'>clientAndServer: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_clientAndServer' class='form-check-input' type='checkbox'{{#clientAndServer}} checked{{/clientAndServer}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_minimumUpdateInterval'>minimumUpdateInterval: </label><div class='col-sm-8'><input id='{{id}}_minimumUpdateInterval' class='form-control' type='text'{{#minimumUpdateInterval}} value='{{minimumUpdateInterval}}'{{/minimumUpdateInterval}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_calling'>calling: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_calling' class='form-check-input' type='checkbox'{{#calling}} checked{{/calling}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_transportSecurityRequirement'>transportSecurityRequirement: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_transportSecurityRequirement' class='form-check-input' type='checkbox'{{#transportSecurityRequirement}} checked{{/transportSecurityRequirement}}></div></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_applicationSecurityRequirement'>applicationSecurityRequirement: </label><div class='col-sm-8'><select id='{{id}}_applicationSecurityRequirement' class='form-control custom-select'>{{#applicationSecurityRequirementApplicationSecurityKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/applicationSecurityRequirementApplicationSecurityKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_nameOfLocalICC'>nameOfLocalICC: </label><div class='col-sm-8'><input id='{{id}}_nameOfLocalICC' class='form-control' type='text'{{#nameOfLocalICC}} value='{{nameOfLocalICC}}'{{/nameOfLocalICC}}></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForBlock1'>supportForBlock1: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForBlock1' class='form-check-input' type='checkbox'{{#supportForBlock1}} checked{{/supportForBlock1}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForBlock2'>supportForBlock2: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForBlock2' class='form-check-input' type='checkbox'{{#supportForBlock2}} checked{{/supportForBlock2}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForBlock3'>supportForBlock3: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForBlock3' class='form-check-input' type='checkbox'{{#supportForBlock3}} checked{{/supportForBlock3}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForBlock4'>supportForBlock4: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForBlock4' class='form-check-input' type='checkbox'{{#supportForBlock4}} checked{{/supportForBlock4}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForBlock5'>supportForBlock5: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForBlock5' class='form-check-input' type='checkbox'{{#supportForBlock5}} checked{{/supportForBlock5}}></div></div></div>
                    <div class='form-group row'><div class='col-sm-4' for='{{id}}_supportForDepriciatedBlock8'>supportForDepriciatedBlock8: </div><div class='col-sm-8'><div class='form-check'><input id='{{id}}_supportForDepriciatedBlock8' class='form-check-input' type='checkbox'{{#supportForDepriciatedBlock8}} checked{{/supportForDepriciatedBlock8}}></div></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ICCPVirtualControlCentre" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_clientAndServer").checked; if (temp) obj["clientAndServer"] = true;
                temp = document.getElementById (id + "_minimumUpdateInterval").value; if ("" !== temp) obj["minimumUpdateInterval"] = temp;
                temp = document.getElementById (id + "_calling").checked; if (temp) obj["calling"] = true;
                temp = document.getElementById (id + "_transportSecurityRequirement").checked; if (temp) obj["transportSecurityRequirement"] = true;
                temp = ApplicationSecurityKind[document.getElementById (id + "_applicationSecurityRequirement").value]; if (temp) obj["applicationSecurityRequirement"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ApplicationSecurityKind." + temp; else delete obj["applicationSecurityRequirement"];
                temp = document.getElementById (id + "_nameOfLocalICC").value; if ("" !== temp) obj["nameOfLocalICC"] = temp;
                temp = document.getElementById (id + "_supportForBlock1").checked; if (temp) obj["supportForBlock1"] = true;
                temp = document.getElementById (id + "_supportForBlock2").checked; if (temp) obj["supportForBlock2"] = true;
                temp = document.getElementById (id + "_supportForBlock3").checked; if (temp) obj["supportForBlock3"] = true;
                temp = document.getElementById (id + "_supportForBlock4").checked; if (temp) obj["supportForBlock4"] = true;
                temp = document.getElementById (id + "_supportForBlock5").checked; if (temp) obj["supportForBlock5"] = true;
                temp = document.getElementById (id + "_supportForDepriciatedBlock8").checked; if (temp) obj["supportForDepriciatedBlock8"] = true;

                return (obj);
            }
        }

        /**
         * Allows addressing and behavioural information regarding the use of TCP by ICCP links.
         *
         */
        class TCPAccessPoint extends IPAccessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TCPAccessPoint;
                if (null == bucket)
                   cim_data.TCPAccessPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TCPAccessPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = IPAccessPoint.prototype.parse.call (this, context, sub);
                obj.cls = "TCPAccessPoint";
                base.parse_element (/<cim:TCPAccessPoint.keepAliveTime>([\s\S]*?)<\/cim:TCPAccessPoint.keepAliveTime>/g, obj, "keepAliveTime", base.to_string, sub, context);
                base.parse_element (/<cim:TCPAccessPoint.port>([\s\S]*?)<\/cim:TCPAccessPoint.port>/g, obj, "port", base.to_string, sub, context);
                base.parse_attributes (/<cim:TCPAccessPoint.PublicX509Certificate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "PublicX509Certificate", sub, context);
                let bucket = context.parsed.TCPAccessPoint;
                if (null == bucket)
                   context.parsed.TCPAccessPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = IPAccessPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "TCPAccessPoint", "keepAliveTime", "keepAliveTime",  base.from_string, fields);
                base.export_element (obj, "TCPAccessPoint", "port", "port",  base.from_string, fields);
                base.export_attributes (obj, "TCPAccessPoint", "PublicX509Certificate", "PublicX509Certificate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TCPAccessPoint_collapse" aria-expanded="true" aria-controls="TCPAccessPoint_collapse" style="margin-left: 10px;">TCPAccessPoint</a></legend>
                    <div id="TCPAccessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IPAccessPoint.prototype.template.call (this) +
                    `
                    {{#keepAliveTime}}<div><b>keepAliveTime</b>: {{keepAliveTime}}</div>{{/keepAliveTime}}
                    {{#port}}<div><b>port</b>: {{port}}</div>{{/port}}
                    {{#PublicX509Certificate}}<div><b>PublicX509Certificate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/PublicX509Certificate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["PublicX509Certificate"]) obj["PublicX509Certificate_string"] = obj["PublicX509Certificate"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["PublicX509Certificate_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TCPAccessPoint_collapse" aria-expanded="true" aria-controls="{{id}}_TCPAccessPoint_collapse" style="margin-left: 10px;">TCPAccessPoint</a></legend>
                    <div id="{{id}}_TCPAccessPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + IPAccessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_keepAliveTime'>keepAliveTime: </label><div class='col-sm-8'><input id='{{id}}_keepAliveTime' class='form-control' type='text'{{#keepAliveTime}} value='{{keepAliveTime}}'{{/keepAliveTime}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_port'>port: </label><div class='col-sm-8'><input id='{{id}}_port' class='form-control' type='text'{{#port}} value='{{port}}'{{/port}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TCPAccessPoint" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_keepAliveTime").value; if ("" !== temp) obj["keepAliveTime"] = temp;
                temp = document.getElementById (id + "_port").value; if ("" !== temp) obj["port"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["PublicX509Certificate", "0..*", "0..1", "PublicX509Certificate", "TCPAccessPoint"]
                        ]
                    )
                );
            }
        }

        /**
         * Is a set of configure addressing information that is required since ICCP utilizes addressing other than a TCP port.
         *
         */
        class ISOUpperLayer extends TCPAccessPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ISOUpperLayer;
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
                let obj = TCPAccessPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ISOUpperLayer";
                base.parse_element (/<cim:ISOUpperLayer.osiPsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiPsel>/g, obj, "osiPsel", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.osiSsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiSsel>/g, obj, "osiSsel", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.apTitle>([\s\S]*?)<\/cim:ISOUpperLayer.apTitle>/g, obj, "apTitle", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.osiTsel>([\s\S]*?)<\/cim:ISOUpperLayer.osiTsel>/g, obj, "osiTsel", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.apInvoke>([\s\S]*?)<\/cim:ISOUpperLayer.apInvoke>/g, obj, "apInvoke", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.aeInvoke>([\s\S]*?)<\/cim:ISOUpperLayer.aeInvoke>/g, obj, "aeInvoke", base.to_string, sub, context);
                base.parse_element (/<cim:ISOUpperLayer.aeQual>([\s\S]*?)<\/cim:ISOUpperLayer.aeQual>/g, obj, "aeQual", base.to_string, sub, context);
                base.parse_attributes (/<cim:ISOUpperLayer.UpperLayerPublicX509Certificate\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "UpperLayerPublicX509Certificate", sub, context);
                let bucket = context.parsed.ISOUpperLayer;
                if (null == bucket)
                   context.parsed.ISOUpperLayer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = TCPAccessPoint.prototype.export.call (this, obj, false);

                base.export_element (obj, "ISOUpperLayer", "osiPsel", "osiPsel",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiSsel", "osiSsel",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "apTitle", "apTitle",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "osiTsel", "osiTsel",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "apInvoke", "apInvoke",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "aeInvoke", "aeInvoke",  base.from_string, fields);
                base.export_element (obj, "ISOUpperLayer", "aeQual", "aeQual",  base.from_string, fields);
                base.export_attributes (obj, "ISOUpperLayer", "UpperLayerPublicX509Certificate", "UpperLayerPublicX509Certificate", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    + TCPAccessPoint.prototype.template.call (this) +
                    `
                    {{#osiPsel}}<div><b>osiPsel</b>: {{osiPsel}}</div>{{/osiPsel}}
                    {{#osiSsel}}<div><b>osiSsel</b>: {{osiSsel}}</div>{{/osiSsel}}
                    {{#apTitle}}<div><b>apTitle</b>: {{apTitle}}</div>{{/apTitle}}
                    {{#osiTsel}}<div><b>osiTsel</b>: {{osiTsel}}</div>{{/osiTsel}}
                    {{#apInvoke}}<div><b>apInvoke</b>: {{apInvoke}}</div>{{/apInvoke}}
                    {{#aeInvoke}}<div><b>aeInvoke</b>: {{aeInvoke}}</div>{{/aeInvoke}}
                    {{#aeQual}}<div><b>aeQual</b>: {{aeQual}}</div>{{/aeQual}}
                    {{#UpperLayerPublicX509Certificate}}<div><b>UpperLayerPublicX509Certificate</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/UpperLayerPublicX509Certificate}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["UpperLayerPublicX509Certificate"]) obj["UpperLayerPublicX509Certificate_string"] = obj["UpperLayerPublicX509Certificate"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["UpperLayerPublicX509Certificate_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ISOUpperLayer_collapse" aria-expanded="true" aria-controls="{{id}}_ISOUpperLayer_collapse" style="margin-left: 10px;">ISOUpperLayer</a></legend>
                    <div id="{{id}}_ISOUpperLayer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + TCPAccessPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiPsel'>osiPsel: </label><div class='col-sm-8'><input id='{{id}}_osiPsel' class='form-control' type='text'{{#osiPsel}} value='{{osiPsel}}'{{/osiPsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiSsel'>osiSsel: </label><div class='col-sm-8'><input id='{{id}}_osiSsel' class='form-control' type='text'{{#osiSsel}} value='{{osiSsel}}'{{/osiSsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_apTitle'>apTitle: </label><div class='col-sm-8'><input id='{{id}}_apTitle' class='form-control' type='text'{{#apTitle}} value='{{apTitle}}'{{/apTitle}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_osiTsel'>osiTsel: </label><div class='col-sm-8'><input id='{{id}}_osiTsel' class='form-control' type='text'{{#osiTsel}} value='{{osiTsel}}'{{/osiTsel}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_apInvoke'>apInvoke: </label><div class='col-sm-8'><input id='{{id}}_apInvoke' class='form-control' type='text'{{#apInvoke}} value='{{apInvoke}}'{{/apInvoke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aeInvoke'>aeInvoke: </label><div class='col-sm-8'><input id='{{id}}_aeInvoke' class='form-control' type='text'{{#aeInvoke}} value='{{aeInvoke}}'{{/aeInvoke}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_aeQual'>aeQual: </label><div class='col-sm-8'><input id='{{id}}_aeQual' class='form-control' type='text'{{#aeQual}} value='{{aeQual}}'{{/aeQual}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ISOUpperLayer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_osiPsel").value; if ("" !== temp) obj["osiPsel"] = temp;
                temp = document.getElementById (id + "_osiSsel").value; if ("" !== temp) obj["osiSsel"] = temp;
                temp = document.getElementById (id + "_apTitle").value; if ("" !== temp) obj["apTitle"] = temp;
                temp = document.getElementById (id + "_osiTsel").value; if ("" !== temp) obj["osiTsel"] = temp;
                temp = document.getElementById (id + "_apInvoke").value; if ("" !== temp) obj["apInvoke"] = temp;
                temp = document.getElementById (id + "_aeInvoke").value; if ("" !== temp) obj["aeInvoke"] = temp;
                temp = document.getElementById (id + "_aeQual").value; if ("" !== temp) obj["aeQual"] = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["UpperLayerPublicX509Certificate", "0..*", "0..1", "PublicX509Certificate", "ISOUpperLayer"]
                        ]
                    )
                );
            }
        }

        /**
         * The IdentifiedObject.name attribute must have a value.
         *
         * The name attribute shall be used as the DataValue name used for the exchange.
         *
         */
        class ICCPProvidedPoint extends ProvidedBilateralPoint
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.ICCPProvidedPoint;
                if (null == bucket)
                   cim_data.ICCPProvidedPoint = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ICCPProvidedPoint[obj.id];
            }

            parse (context, sub)
            {
                let obj = ProvidedBilateralPoint.prototype.parse.call (this, context, sub);
                obj.cls = "ICCPProvidedPoint";
                base.parse_attribute (/<cim:ICCPProvidedPoint.scope\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "scope", sub, context);
                base.parse_attribute (/<cim:ICCPProvidedPoint.pointType\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "pointType", sub, context);
                base.parse_attribute (/<cim:ICCPProvidedPoint.pointQuality\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "pointQuality", sub, context);
                base.parse_attribute (/<cim:ICCPProvidedPoint.accessPriviledge\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "accessPriviledge", sub, context);
                let bucket = context.parsed.ICCPProvidedPoint;
                if (null == bucket)
                   context.parsed.ICCPProvidedPoint = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = ProvidedBilateralPoint.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ICCPProvidedPoint", "scope", "scope", fields);
                base.export_attribute (obj, "ICCPProvidedPoint", "pointType", "pointType", fields);
                base.export_attribute (obj, "ICCPProvidedPoint", "pointQuality", "pointQuality", fields);
                base.export_attribute (obj, "ICCPProvidedPoint", "accessPriviledge", "accessPriviledge", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ICCPProvidedPoint_collapse" aria-expanded="true" aria-controls="ICCPProvidedPoint_collapse" style="margin-left: 10px;">ICCPProvidedPoint</a></legend>
                    <div id="ICCPProvidedPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProvidedBilateralPoint.prototype.template.call (this) +
                    `
                    {{#scope}}<div><b>scope</b>: {{scope}}</div>{{/scope}}
                    {{#pointType}}<div><b>pointType</b>: {{pointType}}</div>{{/pointType}}
                    {{#pointQuality}}<div><b>pointQuality</b>: {{pointQuality}}</div>{{/pointQuality}}
                    {{#accessPriviledge}}<div><b>accessPriviledge</b>: {{accessPriviledge}}</div>{{/accessPriviledge}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj["scopeICCPScopeKind"] = [{ id: '', selected: (!obj["scope"])}]; for (let property in ICCPScopeKind) obj["scopeICCPScopeKind"].push ({ id: property, selected: obj["scope"] && obj["scope"].endsWith ('.' + property)});
                obj["pointTypeICCPPointKind"] = [{ id: '', selected: (!obj["pointType"])}]; for (let property in ICCPPointKind) obj["pointTypeICCPPointKind"].push ({ id: property, selected: obj["pointType"] && obj["pointType"].endsWith ('.' + property)});
                obj["pointQualityICCPQualityKind"] = [{ id: '', selected: (!obj["pointQuality"])}]; for (let property in ICCPQualityKind) obj["pointQualityICCPQualityKind"].push ({ id: property, selected: obj["pointQuality"] && obj["pointQuality"].endsWith ('.' + property)});
                obj["accessPriviledgeICCPAccessPrivilegeKind"] = [{ id: '', selected: (!obj["accessPriviledge"])}]; for (let property in ICCPAccessPrivilegeKind) obj["accessPriviledgeICCPAccessPrivilegeKind"].push ({ id: property, selected: obj["accessPriviledge"] && obj["accessPriviledge"].endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["scopeICCPScopeKind"];
                delete obj["pointTypeICCPPointKind"];
                delete obj["pointQualityICCPQualityKind"];
                delete obj["accessPriviledgeICCPAccessPrivilegeKind"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ICCPProvidedPoint_collapse" aria-expanded="true" aria-controls="{{id}}_ICCPProvidedPoint_collapse" style="margin-left: 10px;">ICCPProvidedPoint</a></legend>
                    <div id="{{id}}_ICCPProvidedPoint_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + ProvidedBilateralPoint.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_scope'>scope: </label><div class='col-sm-8'><select id='{{id}}_scope' class='form-control custom-select'>{{#scopeICCPScopeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/scopeICCPScopeKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pointType'>pointType: </label><div class='col-sm-8'><select id='{{id}}_pointType' class='form-control custom-select'>{{#pointTypeICCPPointKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/pointTypeICCPPointKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_pointQuality'>pointQuality: </label><div class='col-sm-8'><select id='{{id}}_pointQuality' class='form-control custom-select'>{{#pointQualityICCPQualityKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/pointQualityICCPQualityKind}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_accessPriviledge'>accessPriviledge: </label><div class='col-sm-8'><select id='{{id}}_accessPriviledge' class='form-control custom-select'>{{#accessPriviledgeICCPAccessPrivilegeKind}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/accessPriviledgeICCPAccessPrivilegeKind}}</select></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "ICCPProvidedPoint" };
                super.submit (id, obj);
                temp = ICCPScopeKind[document.getElementById (id + "_scope").value]; if (temp) obj["scope"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPScopeKind." + temp; else delete obj["scope"];
                temp = ICCPPointKind[document.getElementById (id + "_pointType").value]; if (temp) obj["pointType"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPPointKind." + temp; else delete obj["pointType"];
                temp = ICCPQualityKind[document.getElementById (id + "_pointQuality").value]; if (temp) obj["pointQuality"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPQualityKind." + temp; else delete obj["pointQuality"];
                temp = ICCPAccessPrivilegeKind[document.getElementById (id + "_accessPriviledge").value]; if (temp) obj["accessPriviledge"] = "http://iec.ch/TC57/2013/CIM-schema-cim16#ICCPAccessPrivilegeKind." + temp; else delete obj["accessPriviledge"];

                return (obj);
            }
        }

        /**
         * This class describe the sending (providing) side in a bilateral ICCP data exchange.
         *
         * Hence the ICCP bilateral (table) descriptions are created by exchanging ICCP Provider data between the parties.
         *
         */
        class TASE2BilateralTable extends BilateralExchangeAgreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                let bucket = cim_data.TASE2BilateralTable;
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
                let obj = BilateralExchangeAgreement.prototype.parse.call (this, context, sub);
                obj.cls = "TASE2BilateralTable";
                base.parse_element (/<cim:TASE2BilateralTable.tase2version>([\s\S]*?)<\/cim:TASE2BilateralTable.tase2version>/g, obj, "tase2version", base.to_string, sub, context);
                base.parse_element (/<cim:TASE2BilateralTable.bilateralTableID>([\s\S]*?)<\/cim:TASE2BilateralTable.bilateralTableID>/g, obj, "bilateralTableID", base.to_string, sub, context);
                base.parse_element (/<cim:TASE2BilateralTable.bilateralTableVersion>([\s\S]*?)<\/cim:TASE2BilateralTable.bilateralTableVersion>/g, obj, "bilateralTableVersion", base.to_string, sub, context);
                base.parse_attributes (/<cim:TASE2BilateralTable.ICCPInformationMessage\s+rdf:resource\s*?=\s*?(["'])([\s\S]*?)\1\s*?\/>/g, obj, "ICCPInformationMessage", sub, context);
                let bucket = context.parsed.TASE2BilateralTable;
                if (null == bucket)
                   context.parsed.TASE2BilateralTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                let fields = BilateralExchangeAgreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "TASE2BilateralTable", "tase2version", "tase2version",  base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "bilateralTableID", "bilateralTableID",  base.from_string, fields);
                base.export_element (obj, "TASE2BilateralTable", "bilateralTableVersion", "bilateralTableVersion",  base.from_string, fields);
                base.export_attributes (obj, "TASE2BilateralTable", "ICCPInformationMessage", "ICCPInformationMessage", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields);

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
                    + BilateralExchangeAgreement.prototype.template.call (this) +
                    `
                    {{#tase2version}}<div><b>tase2version</b>: {{tase2version}}</div>{{/tase2version}}
                    {{#bilateralTableID}}<div><b>bilateralTableID</b>: {{bilateralTableID}}</div>{{/bilateralTableID}}
                    {{#bilateralTableVersion}}<div><b>bilateralTableVersion</b>: {{bilateralTableVersion}}</div>{{/bilateralTableVersion}}
                    {{#ICCPInformationMessage}}<div><b>ICCPInformationMessage</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ICCPInformationMessage}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj["ICCPInformationMessage"]) obj["ICCPInformationMessage_string"] = obj["ICCPInformationMessage"].join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj["ICCPInformationMessage_string"];
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TASE2BilateralTable_collapse" aria-expanded="true" aria-controls="{{id}}_TASE2BilateralTable_collapse" style="margin-left: 10px;">TASE2BilateralTable</a></legend>
                    <div id="{{id}}_TASE2BilateralTable_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + BilateralExchangeAgreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_tase2version'>tase2version: </label><div class='col-sm-8'><input id='{{id}}_tase2version' class='form-control' type='text'{{#tase2version}} value='{{tase2version}}'{{/tase2version}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bilateralTableID'>bilateralTableID: </label><div class='col-sm-8'><input id='{{id}}_bilateralTableID' class='form-control' type='text'{{#bilateralTableID}} value='{{bilateralTableID}}'{{/bilateralTableID}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_bilateralTableVersion'>bilateralTableVersion: </label><div class='col-sm-8'><input id='{{id}}_bilateralTableVersion' class='form-control' type='text'{{#bilateralTableVersion}} value='{{bilateralTableVersion}}'{{/bilateralTableVersion}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ICCPInformationMessage'>ICCPInformationMessage: </label><div class='col-sm-8'><input id='{{id}}_ICCPInformationMessage' class='form-control' type='text'{{#ICCPInformationMessage}} value='{{ICCPInformationMessage_string}}'{{/ICCPInformationMessage}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                let temp;

                obj = obj || { id: id, cls: "TASE2BilateralTable" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_tase2version").value; if ("" !== temp) obj["tase2version"] = temp;
                temp = document.getElementById (id + "_bilateralTableID").value; if ("" !== temp) obj["bilateralTableID"] = temp;
                temp = document.getElementById (id + "_bilateralTableVersion").value; if ("" !== temp) obj["bilateralTableVersion"] = temp;
                temp = document.getElementById (id + "_ICCPInformationMessage").value; if ("" !== temp) obj["ICCPInformationMessage"] = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ICCPInformationMessage", "0..*", "0..*", "ICCPInformationMessage", "TASE2BilateralTable"]
                        ]
                    )
                );
            }
        }

        return (
            {
                IPAccessPoint: IPAccessPoint,
                BilateralExchangeActor: BilateralExchangeActor,
                BilateralExchangeAgreement: BilateralExchangeAgreement,
                IPAddressKind: IPAddressKind,
                ISOUpperLayer: ISOUpperLayer,
                PublicX509Certificate: PublicX509Certificate,
                ICCPVCC: ICCPVCC,
                IOPointSource: IOPointSource,
                ICCPVirtualControlCentre: ICCPVirtualControlCentre,
                ApplicationSecurityKind: ApplicationSecurityKind,
                ICCPQualityKind: ICCPQualityKind,
                ICCPInformationMessage: ICCPInformationMessage,
                ICCPProvidedPoint: ICCPProvidedPoint,
                ICCPAccessPrivilegeKind: ICCPAccessPrivilegeKind,
                TASE2BilateralTable: TASE2BilateralTable,
                TCPAccessPoint: TCPAccessPoint,
                ICCPScopeKind: ICCPScopeKind,
                ProvidedBilateralPoint: ProvidedBilateralPoint,
                ICCPPointKind: ICCPPointKind
            }
        );
    }
);