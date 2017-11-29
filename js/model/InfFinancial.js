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
                this._id = template.id;
                var bucket = cim_data.ControlAreaOperator;
                if (null == bucket)
                   cim_data.ControlAreaOperator = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ControlAreaOperator[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "ControlAreaOperator";
                base.parse_attribute (/<cim:ControlAreaOperator.ControlledBy\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ControlledBy", sub, context);

                var bucket = context.parsed.ControlAreaOperator;
                if (null == bucket)
                   context.parsed.ControlAreaOperator = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ControlAreaOperator", "ControlledBy", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#ControlAreaOperator_collapse" aria-expanded="true" aria-controls="ControlAreaOperator_collapse">ControlAreaOperator</a>
<div id="ControlAreaOperator_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
{{#ControlledBy}}<div><b>ControlledBy</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{ControlledBy}}&quot;);})'>{{ControlledBy}}</a></div>{{/ControlledBy}}
</div>
`
                );
           }        }

        /**
         * Contracts for services offered commercially.
         *
         */
        class OpenAccessProduct extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OpenAccessProduct;
                if (null == bucket)
                   cim_data.OpenAccessProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OpenAccessProduct[this._id];
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
<a data-toggle="collapse" href="#OpenAccessProduct_collapse" aria-expanded="true" aria-controls="OpenAccessProduct_collapse">OpenAccessProduct</a>
<div id="OpenAccessProduct_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        class TransmissionProduct extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TransmissionProduct;
                if (null == bucket)
                   cim_data.TransmissionProduct = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionProduct[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionProduct";
                base.parse_element (/<cim:TransmissionProduct.transmissionProductType>([\s\S]*?)<\/cim:TransmissionProduct.transmissionProductType>/g, obj, "transmissionProductType", base.to_string, sub, context);
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

                base.export_element (obj, "TransmissionProduct", "transmissionProductType", base.from_string, fields);
                base.export_attribute (obj, "TransmissionProduct", "TransmissionProvider", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransmissionProduct_collapse" aria-expanded="true" aria-controls="TransmissionProduct_collapse">TransmissionProduct</a>
<div id="TransmissionProduct_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Core.IdentifiedObject.prototype.template.call (this) +
`
{{#transmissionProductType}}<div><b>transmissionProductType</b>: {{transmissionProductType}}</div>{{/transmissionProductType}}
{{#TransmissionProvider}}<div><b>TransmissionProvider</b>: <a href='#' onclick='require([&quot;cimmap&quot;], function(cimmap) {cimmap.select (&quot;{{TransmissionProvider}}&quot;);})'>{{TransmissionProvider}}</a></div>{{/TransmissionProvider}}
</div>
`
                );
           }        }

        /**
         * A type of agreement that provides the default method by which interchange schedules are to be integrated to obtain hourly MWh schedules for accounting.
         *
         */
        class IntSchedAgreement extends Common.Agreement
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IntSchedAgreement;
                if (null == bucket)
                   cim_data.IntSchedAgreement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntSchedAgreement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Agreement.prototype.parse.call (this, context, sub);
                obj.cls = "IntSchedAgreement";
                base.parse_element (/<cim:IntSchedAgreement.defaultIntegrationMethod>([\s\S]*?)<\/cim:IntSchedAgreement.defaultIntegrationMethod>/g, obj, "defaultIntegrationMethod", base.to_string, sub, context);

                var bucket = context.parsed.IntSchedAgreement;
                if (null == bucket)
                   context.parsed.IntSchedAgreement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Agreement.prototype.export.call (this, obj, false);

                base.export_element (obj, "IntSchedAgreement", "defaultIntegrationMethod", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#IntSchedAgreement_collapse" aria-expanded="true" aria-controls="IntSchedAgreement_collapse">IntSchedAgreement</a>
<div id="IntSchedAgreement_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Agreement.prototype.template.call (this) +
`
{{#defaultIntegrationMethod}}<div><b>defaultIntegrationMethod</b>: {{defaultIntegrationMethod}}</div>{{/defaultIntegrationMethod}}
</div>
`
                );
           }        }

        /**
         * The energy buyer in the energy marketplace.
         *
         */
        class CustomerConsumer extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CustomerConsumer;
                if (null == bucket)
                   cim_data.CustomerConsumer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CustomerConsumer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "CustomerConsumer";

                var bucket = context.parsed.CustomerConsumer;
                if (null == bucket)
                   context.parsed.CustomerConsumer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#CustomerConsumer_collapse" aria-expanded="true" aria-controls="CustomerConsumer_collapse">CustomerConsumer</a>
<div id="CustomerConsumer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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
                this._id = template.id;
                var bucket = cim_data.TransmissionProvider;
                if (null == bucket)
                   cim_data.TransmissionProvider = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TransmissionProvider[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "TransmissionProvider";

                var bucket = context.parsed.TransmissionProvider;
                if (null == bucket)
                   context.parsed.TransmissionProvider = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#TransmissionProvider_collapse" aria-expanded="true" aria-controls="TransmissionProvider_collapse">TransmissionProvider</a>
<div id="TransmissionProvider_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * Matches buyers and sellers, and secures transmission (and other ancillary services) needed to complete the energy transaction.
         *
         */
        class Marketer extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Marketer;
                if (null == bucket)
                   cim_data.Marketer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Marketer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "Marketer";

                var bucket = context.parsed.Marketer;
                if (null == bucket)
                   context.parsed.Marketer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#Marketer_collapse" aria-expanded="true" aria-controls="Marketer_collapse">Marketer</a>
<div id="Marketer_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
</div>
`
                );
           }        }

        /**
         * The energy seller in the energy marketplace.
         *
         */
        class GenerationProvider extends Common.Organisation
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.GenerationProvider;
                if (null == bucket)
                   cim_data.GenerationProvider = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.GenerationProvider[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Common.Organisation.prototype.parse.call (this, context, sub);
                obj.cls = "GenerationProvider";

                var bucket = context.parsed.GenerationProvider;
                if (null == bucket)
                   context.parsed.GenerationProvider = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Common.Organisation.prototype.export.call (this, obj, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }


            template ()
            {
                return (
`
<a data-toggle="collapse" href="#GenerationProvider_collapse" aria-expanded="true" aria-controls="GenerationProvider_collapse">GenerationProvider</a>
<div id="GenerationProvider_collapse" class="collapse in" style="margin-left: 10px;">
`
      + Common.Organisation.prototype.template.call (this) +
`
</div>
`
                );
           }        }

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