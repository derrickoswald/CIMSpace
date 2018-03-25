define
(
    ["model/base", "model/Common", "model/Core"],
    /**
     * This package is responsible for Settlement and Billing.
     *
     * These classes represent the legal entities who participate in formal or informal agreements.
     *
     */
    function (base, Common, Core)
    {

        /**
         * Operates the Control Area.
         *
         * Approves and implements energy transactions. Verifies both Inter-Control Area and Intra-Control Area transactions for the power system  before granting approval (and implementing) the transactions.
         *
         */
        class ControlAreaOperator extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ControlAreaOperator;
                if (null == bucket)
                   cim_data.ControlAreaOperator = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ControlAreaOperator[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaOperator";
                base.parse_attribute (/<cim:ControlAreaOperator.ControlledBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlledBy", sub, context);
                base.parse_attributes (/<cim:ControlAreaOperator.CAChildOf\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CAChildOf", sub, context);
                var bucket = context.parsed.ControlAreaOperator;
                if (null == bucket)
                   context.parsed.ControlAreaOperator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ControlAreaOperator", "ControlledBy", "ControlledBy", fields);
                base.export_attributes (obj, "ControlAreaOperator", "CAChildOf", "CAChildOf", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#ControlAreaOperator_collapse" aria-expanded="true" aria-controls="ControlAreaOperator_collapse" style="margin-left: 10px;">ControlAreaOperator</a></legend>
                    <div id="ControlAreaOperator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#ControlledBy}}<div><b>ControlledBy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlledBy}}&quot;);}); return false;'>{{ControlledBy}}</a></div>{{/ControlledBy}}
                    {{#CAChildOf}}<div><b>CAChildOf</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CAChildOf}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CAChildOf) obj.CAChildOf_string = obj.CAChildOf.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CAChildOf_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_ControlAreaOperator_collapse" aria-expanded="true" aria-controls="{{id}}_ControlAreaOperator_collapse" style="margin-left: 10px;">ControlAreaOperator</a></legend>
                    <div id="{{id}}_ControlAreaOperator_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_ControlledBy'>ControlledBy: </label><div class='col-sm-8'><input id='{{id}}_ControlledBy' class='form-control' type='text'{{#ControlledBy}} value='{{ControlledBy}}'{{/ControlledBy}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_CAChildOf'>CAChildOf: </label><div class='col-sm-8'><input id='{{id}}_CAChildOf' class='form-control' type='text'{{#CAChildOf}} value='{{CAChildOf_string}}'{{/CAChildOf}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ControlAreaOperator" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_ControlledBy").value; if ("" != temp) obj.ControlledBy = temp;
                temp = document.getElementById (id + "_CAChildOf").value; if ("" != temp) obj.CAChildOf = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ControlledBy", "1", "1", "HostControlArea", "Controls"],
                            ["CAChildOf", "0..*", "0..*", "TieLine", "ParentOfA"]
                        ]
                    )
                );
            }
        }

        /**
         * Contracts for services offered commercially.
         *
         */
        class OpenAccessProduct extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.OpenAccessProduct;
                if (null == bucket)
                   cim_data.OpenAccessProduct = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.OpenAccessProduct[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "OpenAccessProduct";
                var bucket = context.parsed.OpenAccessProduct;
                if (null == bucket)
                   context.parsed.OpenAccessProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#OpenAccessProduct_collapse" aria-expanded="true" aria-controls="OpenAccessProduct_collapse" style="margin-left: 10px;">OpenAccessProduct</a></legend>
                    <div id="OpenAccessProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_OpenAccessProduct_collapse" aria-expanded="true" aria-controls="{{id}}_OpenAccessProduct_collapse" style="margin-left: 10px;">OpenAccessProduct</a></legend>
                    <div id="{{id}}_OpenAccessProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "OpenAccessProduct" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class TransmissionProduct extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransmissionProduct;
                if (null == bucket)
                   cim_data.TransmissionProduct = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionProduct[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionProduct";
                base.parse_element (/<cim:TransmissionProduct.transmissionProductType>([\s\S]*?)<\/cim:TransmissionProduct.transmissionProductType>/g, obj, "transmissionProductType", base.to_string, sub, context);
                base.parse_attributes (/<cim:TransmissionProduct.LocationFor\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LocationFor", sub, context);
                base.parse_attribute (/<cim:TransmissionProduct.TransmissionProvider\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionProvider", sub, context);
                var bucket = context.parsed.TransmissionProduct;
                if (null == bucket)
                   context.parsed.TransmissionProduct = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "TransmissionProduct", "transmissionProductType", "transmissionProductType",  base.from_string, fields);
                base.export_attributes (obj, "TransmissionProduct", "LocationFor", "LocationFor", fields);
                base.export_attribute (obj, "TransmissionProduct", "TransmissionProvider", "TransmissionProvider", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionProduct_collapse" aria-expanded="true" aria-controls="TransmissionProduct_collapse" style="margin-left: 10px;">TransmissionProduct</a></legend>
                    <div id="TransmissionProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.template.call (this) +
                    `
                    {{#transmissionProductType}}<div><b>transmissionProductType</b>: {{transmissionProductType}}</div>{{/transmissionProductType}}
                    {{#LocationFor}}<div><b>LocationFor</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/LocationFor}}
                    {{#TransmissionProvider}}<div><b>TransmissionProvider</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionProvider}}&quot;);}); return false;'>{{TransmissionProvider}}</a></div>{{/TransmissionProvider}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.LocationFor) obj.LocationFor_string = obj.LocationFor.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.LocationFor_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionProduct_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionProduct_collapse" style="margin-left: 10px;">TransmissionProduct</a></legend>
                    <div id="{{id}}_TransmissionProduct_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Core.IdentifiedObject.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_transmissionProductType'>transmissionProductType: </label><div class='col-sm-8'><input id='{{id}}_transmissionProductType' class='form-control' type='text'{{#transmissionProductType}} value='{{transmissionProductType}}'{{/transmissionProductType}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_LocationFor'>LocationFor: </label><div class='col-sm-8'><input id='{{id}}_LocationFor' class='form-control' type='text'{{#LocationFor}} value='{{LocationFor_string}}'{{/LocationFor}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_TransmissionProvider'>TransmissionProvider: </label><div class='col-sm-8'><input id='{{id}}_TransmissionProvider' class='form-control' type='text'{{#TransmissionProvider}} value='{{TransmissionProvider}}'{{/TransmissionProvider}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TransmissionProduct" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_transmissionProductType").value; if ("" != temp) obj.transmissionProductType = temp;
                temp = document.getElementById (id + "_LocationFor").value; if ("" != temp) obj.LocationFor = temp.split (",");
                temp = document.getElementById (id + "_TransmissionProvider").value; if ("" != temp) obj.TransmissionProvider = temp;

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["LocationFor", "0..*", "0..*", "TransmissionPath", "LocatedOn"],
                            ["TransmissionProvider", "1", "1..*", "TransmissionProvider", "TransmissionProducts"]
                        ]
                    )
                );
            }
        }

        /**
         * A type of agreement that provides the default method by which interchange schedules are to be integrated to obtain hourly MWh schedules for accounting.
         *
         */
        class IntSchedAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.IntSchedAgreement;
                if (null == bucket)
                   cim_data.IntSchedAgreement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IntSchedAgreement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "IntSchedAgreement";
                base.parse_element (/<cim:IntSchedAgreement.defaultIntegrationMethod>([\s\S]*?)<\/cim:IntSchedAgreement.defaultIntegrationMethod>/g, obj, "defaultIntegrationMethod", base.to_string, sub, context);
                base.parse_attributes (/<cim:IntSchedAgreement.MktOrganisation\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MktOrganisation", sub, context);
                var bucket = context.parsed.IntSchedAgreement;
                if (null == bucket)
                   context.parsed.IntSchedAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "IntSchedAgreement", "defaultIntegrationMethod", "defaultIntegrationMethod",  base.from_string, fields);
                base.export_attributes (obj, "IntSchedAgreement", "MktOrganisation", "MktOrganisation", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#IntSchedAgreement_collapse" aria-expanded="true" aria-controls="IntSchedAgreement_collapse" style="margin-left: 10px;">IntSchedAgreement</a></legend>
                    <div id="IntSchedAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.template.call (this) +
                    `
                    {{#defaultIntegrationMethod}}<div><b>defaultIntegrationMethod</b>: {{defaultIntegrationMethod}}</div>{{/defaultIntegrationMethod}}
                    {{#MktOrganisation}}<div><b>MktOrganisation</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/MktOrganisation}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.MktOrganisation) obj.MktOrganisation_string = obj.MktOrganisation.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.MktOrganisation_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_IntSchedAgreement_collapse" aria-expanded="true" aria-controls="{{id}}_IntSchedAgreement_collapse" style="margin-left: 10px;">IntSchedAgreement</a></legend>
                    <div id="{{id}}_IntSchedAgreement_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Agreement.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_defaultIntegrationMethod'>defaultIntegrationMethod: </label><div class='col-sm-8'><input id='{{id}}_defaultIntegrationMethod' class='form-control' type='text'{{#defaultIntegrationMethod}} value='{{defaultIntegrationMethod}}'{{/defaultIntegrationMethod}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_MktOrganisation'>MktOrganisation: </label><div class='col-sm-8'><input id='{{id}}_MktOrganisation' class='form-control' type='text'{{#MktOrganisation}} value='{{MktOrganisation_string}}'{{/MktOrganisation}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IntSchedAgreement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_defaultIntegrationMethod").value; if ("" != temp) obj.defaultIntegrationMethod = temp;
                temp = document.getElementById (id + "_MktOrganisation").value; if ("" != temp) obj.MktOrganisation = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["MktOrganisation", "0..*", "0..*", "MktOrganisation", "IntSchedAgreement"]
                        ]
                    )
                );
            }
        }

        /**
         * The energy buyer in the energy marketplace.
         *
         */
        class CustomerConsumer extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CustomerConsumer;
                if (null == bucket)
                   cim_data.CustomerConsumer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CustomerConsumer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerConsumer";
                base.parse_attributes (/<cim:CustomerConsumer.CustChildOf\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "CustChildOf", sub, context);
                var bucket = context.parsed.CustomerConsumer;
                if (null == bucket)
                   context.parsed.CustomerConsumer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "CustomerConsumer", "CustChildOf", "CustChildOf", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#CustomerConsumer_collapse" aria-expanded="true" aria-controls="CustomerConsumer_collapse" style="margin-left: 10px;">CustomerConsumer</a></legend>
                    <div id="CustomerConsumer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#CustChildOf}}<div><b>CustChildOf</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/CustChildOf}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.CustChildOf) obj.CustChildOf_string = obj.CustChildOf.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.CustChildOf_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_CustomerConsumer_collapse" aria-expanded="true" aria-controls="{{id}}_CustomerConsumer_collapse" style="margin-left: 10px;">CustomerConsumer</a></legend>
                    <div id="{{id}}_CustomerConsumer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "CustomerConsumer" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["CustChildOf", "0..*", "0..1", "TieLine", "ParentOfB"]
                        ]
                    )
                );
            }
        }

        /**
         * Provider of  the transmission capacity (interconnecting wires between Generation and Consumption) required  to fulfill and Energy Transaction's energy exchange.
         *
         * Posts information for transmission paths and AvailableTransmissionCapacities  on a reservation node.  Buys and sells its products and services on the same reservation node.
         *
         */
        class TransmissionProvider extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.TransmissionProvider;
                if (null == bucket)
                   cim_data.TransmissionProvider = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TransmissionProvider[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionProvider";
                base.parse_attributes (/<cim:TransmissionProvider.For\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "For", sub, context);
                base.parse_attributes (/<cim:TransmissionProvider.TransmissionProducts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TransmissionProducts", sub, context);
                var bucket = context.parsed.TransmissionProvider;
                if (null == bucket)
                   context.parsed.TransmissionProvider = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "TransmissionProvider", "For", "For", fields);
                base.export_attributes (obj, "TransmissionProvider", "TransmissionProducts", "TransmissionProducts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#TransmissionProvider_collapse" aria-expanded="true" aria-controls="TransmissionProvider_collapse" style="margin-left: 10px;">TransmissionProvider</a></legend>
                    <div id="TransmissionProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#For}}<div><b>For</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/For}}
                    {{#TransmissionProducts}}<div><b>TransmissionProducts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/TransmissionProducts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.For) obj.For_string = obj.For.join ();
                if (obj.TransmissionProducts) obj.TransmissionProducts_string = obj.TransmissionProducts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.For_string;
                delete obj.TransmissionProducts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_TransmissionProvider_collapse" aria-expanded="true" aria-controls="{{id}}_TransmissionProvider_collapse" style="margin-left: 10px;">TransmissionProvider</a></legend>
                    <div id="{{id}}_TransmissionProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "TransmissionProvider" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["For", "0..*", "0..1", "LossProfile", "HasLoss_"],
                            ["TransmissionProducts", "1..*", "1", "TransmissionProduct", "TransmissionProvider"]
                        ]
                    )
                );
            }
        }

        /**
         * Matches buyers and sellers, and secures transmission (and other ancillary services) needed to complete the energy transaction.
         *
         */
        class Marketer extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.Marketer;
                if (null == bucket)
                   cim_data.Marketer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Marketer[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "Marketer";
                base.parse_attributes (/<cim:Marketer.Resells_EnergyProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Resells_EnergyProduct", sub, context);
                base.parse_attributes (/<cim:Marketer.HoldsTitleTo_EnergyProducts\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "HoldsTitleTo_EnergyProducts", sub, context);
                var bucket = context.parsed.Marketer;
                if (null == bucket)
                   context.parsed.Marketer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "Marketer", "Resells_EnergyProduct", "Resells_EnergyProduct", fields);
                base.export_attributes (obj, "Marketer", "HoldsTitleTo_EnergyProducts", "HoldsTitleTo_EnergyProducts", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#Marketer_collapse" aria-expanded="true" aria-controls="Marketer_collapse" style="margin-left: 10px;">Marketer</a></legend>
                    <div id="Marketer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#Resells_EnergyProduct}}<div><b>Resells_EnergyProduct</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/Resells_EnergyProduct}}
                    {{#HoldsTitleTo_EnergyProducts}}<div><b>HoldsTitleTo_EnergyProducts</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/HoldsTitleTo_EnergyProducts}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.Resells_EnergyProduct) obj.Resells_EnergyProduct_string = obj.Resells_EnergyProduct.join ();
                if (obj.HoldsTitleTo_EnergyProducts) obj.HoldsTitleTo_EnergyProducts_string = obj.HoldsTitleTo_EnergyProducts.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.Resells_EnergyProduct_string;
                delete obj.HoldsTitleTo_EnergyProducts_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_Marketer_collapse" aria-expanded="true" aria-controls="{{id}}_Marketer_collapse" style="margin-left: 10px;">Marketer</a></legend>
                    <div id="{{id}}_Marketer_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_Resells_EnergyProduct'>Resells_EnergyProduct: </label><div class='col-sm-8'><input id='{{id}}_Resells_EnergyProduct' class='form-control' type='text'{{#Resells_EnergyProduct}} value='{{Resells_EnergyProduct_string}}'{{/Resells_EnergyProduct}}></div></div>
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Marketer" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_Resells_EnergyProduct").value; if ("" != temp) obj.Resells_EnergyProduct = temp.split (",");

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["Resells_EnergyProduct", "0..*", "0..*", "EnergyProduct", "ResoldBy_Marketer"],
                            ["HoldsTitleTo_EnergyProducts", "0..*", "0..1", "EnergyProduct", "TitleHeldBy_Marketer"]
                        ]
                    )
                );
            }
        }

        /**
         * The energy seller in the energy marketplace.
         *
         */
        class GenerationProvider extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.GenerationProvider;
                if (null == bucket)
                   cim_data.GenerationProvider = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.GenerationProvider[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "GenerationProvider";
                base.parse_attributes (/<cim:GenerationProvider.ProvidedBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ProvidedBy", sub, context);
                var bucket = context.parsed.GenerationProvider;
                if (null == bucket)
                   context.parsed.GenerationProvider = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attributes (obj, "GenerationProvider", "ProvidedBy", "ProvidedBy", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#GenerationProvider_collapse" aria-expanded="true" aria-controls="GenerationProvider_collapse" style="margin-left: 10px;">GenerationProvider</a></legend>
                    <div id="GenerationProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.template.call (this) +
                    `
                    {{#ProvidedBy}}<div><b>ProvidedBy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{.}}&quot;);}); return false;'>{{.}}</a></div>{{/ProvidedBy}}
                    </div>
                    </fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                if (obj.ProvidedBy) obj.ProvidedBy_string = obj.ProvidedBy.join ();
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.ProvidedBy_string;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a class="collapse-link" data-toggle="collapse" href="#{{id}}_GenerationProvider_collapse" aria-expanded="true" aria-controls="{{id}}_GenerationProvider_collapse" style="margin-left: 10px;">GenerationProvider</a></legend>
                    <div id="{{id}}_GenerationProvider_collapse" class="collapse in show" style="margin-left: 10px;">
                    `
                    + Common.Organisation.prototype.edit_template.call (this) +
                    `
                    </div>
                    </fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "GenerationProvider" };
                super.submit (id, obj);

                return (obj);
            }

            relations ()
            {
                return (
                    super.relations ().concat (
                        [
                            ["ProvidedBy", "1..*", "1", "EnergyProduct", "GenerationProvider"]
                        ]
                    )
                );
            }
        }

        return (
            {
                GenerationProvider: GenerationProvider,
                OpenAccessProduct: OpenAccessProduct,
                TransmissionProvider: TransmissionProvider,
                IntSchedAgreement: IntSchedAgreement,
                ControlAreaOperator: ControlAreaOperator,
                CustomerConsumer: CustomerConsumer,
                Marketer: Marketer,
                TransmissionProduct: TransmissionProduct
            }
        );
    }
);