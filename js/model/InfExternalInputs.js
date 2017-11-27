define
(
    ["model/base", "model/Core"],
    function (base, Core)
    {

        /**
         * Ancillary service requirements for a market.
         *
         */
        class ResourceGroupReq extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceGroupReq;
                if (null == bucket)
                   cim_data.ResourceGroupReq = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceGroupReq[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroupReq";
                base.parse_attribute (/<cim:ResourceGroupReq.ResourceGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ResourceGroup", sub, context);

                var bucket = context.parsed.ResourceGroupReq;
                if (null == bucket)
                   context.parsed.ResourceGroupReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ResourceGroupReq", "ResourceGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A curve relating  reserve requirement versus time, showing the values of a specific reserve requirement for each unit of the period covered.
         *
         * The  curve can be based on "absolute" time or on "normalized' time.
         *
         */
        class ReserveReqCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReserveReqCurve;
                if (null == bucket)
                   cim_data.ReserveReqCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReserveReqCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReqCurve";
                base.parse_attribute (/<cim:ReserveReqCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);

                var bucket = context.parsed.ReserveReqCurve;
                if (null == bucket)
                   context.parsed.ReserveReqCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReqCurve", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A logical grouping of resources that are used to model location of types of requirements for ancillary services such as spinning reserve zones, regulation zones, etc.
         *
         */
        class ResourceGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResourceGroup;
                if (null == bucket)
                   cim_data.ResourceGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResourceGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "ResourceGroup";
                base.parse_element (/<cim:ResourceGroup.type>([\s\S]*?)<\/cim:ResourceGroup.type>/g, obj, "type", base.to_string, sub, context);
                base.parse_element (/<cim:ResourceGroup.status>([\s\S]*?)<\/cim:ResourceGroup.status>/g, obj, "status", base.to_string, sub, context);

                var bucket = context.parsed.ResourceGroup;
                if (null == bucket)
                   context.parsed.ResourceGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.IdentifiedObject.prototype.export.call (this, obj, false);

                base.export_element (obj, "ResourceGroup", "type", base.from_string, fields);
                base.export_element (obj, "ResourceGroup", "status", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Optionally, this curve expresses elasticity of the associated requirement.
         *
         * For example, used to reduce requirements when clearing price exceeds reasonable values when the supply quantity becomes scarce. For example, a single point value of \$1000/MW for a spinning reserve will cause a reduction in the required spinning reserve.
         *
         */
        class SensitivityPriceCurve extends Core.Curve
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SensitivityPriceCurve;
                if (null == bucket)
                   cim_data.SensitivityPriceCurve = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SensitivityPriceCurve[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.Curve.prototype.parse.call (this, context, sub);
                obj.cls = "SensitivityPriceCurve";
                base.parse_attribute (/<cim:SensitivityPriceCurve.ReserveReq\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReq", sub, context);

                var bucket = context.parsed.SensitivityPriceCurve;
                if (null == bucket)
                   context.parsed.SensitivityPriceCurve = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = Core.Curve.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "SensitivityPriceCurve", "ReserveReq", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Requirements for minimum amount of reserve and/or regulation to be supplied by a set of qualified resources.
         *
         */
        class ReserveReq extends ResourceGroupReq
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReserveReq;
                if (null == bucket)
                   cim_data.ReserveReq = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReserveReq[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = ResourceGroupReq.prototype.parse.call (this, context, sub);
                obj.cls = "ReserveReq";
                base.parse_attribute (/<cim:ReserveReq.MarketProduct\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "MarketProduct", sub, context);
                base.parse_attribute (/<cim:ReserveReq.SensitivityPriceCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "SensitivityPriceCurve", sub, context);
                base.parse_attribute (/<cim:ReserveReq.ReserveReqCurve\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "ReserveReqCurve", sub, context);

                var bucket = context.parsed.ReserveReq;
                if (null == bucket)
                   context.parsed.ReserveReq = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = ResourceGroupReq.prototype.export.call (this, obj, false);

                base.export_attribute (obj, "ReserveReq", "MarketProduct", fields);
                base.export_attribute (obj, "ReserveReq", "SensitivityPriceCurve", fields);
                base.export_attribute (obj, "ReserveReq", "ReserveReqCurve", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                ReserveReq: ReserveReq,
                ResourceGroup: ResourceGroup,
                ReserveReqCurve: ReserveReqCurve,
                ResourceGroupReq: ResourceGroupReq,
                SensitivityPriceCurve: SensitivityPriceCurve
            }
        );
    }
);