define
(
    ["model/base", "model/Core"],
    /**
     * This package models a specification of limits associated with equipment and other operational entities.
     *
     */
    function (base, Core)
    {

        /**
         * A set of limits associated with equipment.
         *
         * Sets of limits might apply to a specific temperature, or season for example. A set of limits may contain different severities of limit levels that would apply to the same equipment. The set may contain limits of different types such as apparent power and current limits or high and low voltage limits  that are logically applied together as a set.
         *
         */
        class OperationalLimitSet extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimitSet;
                if (null == bucket)
                   cim_data.OperationalLimitSet = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimitSet[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitSet";
                base.parse_attribute (/<cim:OperationalLimitSet.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);
                base.parse_attribute (/<cim:OperationalLimitSet.Equipment\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Equipment", sub, context);

                var bucket = context.parsed.OperationalLimitSet;
                if (null == bucket)
                   context.parsed.OperationalLimitSet = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "OperationalLimitSet", "Terminal", fields);
                base.export_attribute (obj, "OperationalLimitSet", "Equipment", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A value associated with a specific kind of limit.
         *
         * The sub class value attribute shall be positive.
         *
         */
        class OperationalLimit extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimit;
                if (null == bucket)
                   cim_data.OperationalLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimit";
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitSet\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitSet", sub, context);
                base.parse_attribute (/<cim:OperationalLimit.OperationalLimitType\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "OperationalLimitType", sub, context);

                var bucket = context.parsed.OperationalLimit;
                if (null == bucket)
                   context.parsed.OperationalLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "OperationalLimit", "OperationalLimitSet", fields);
                base.export_attribute (obj, "OperationalLimit", "OperationalLimitType", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A specific directed terminal flow for a branch group.
         *
         */
        class BranchGroupTerminal extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchGroupTerminal;
                if (null == bucket)
                   cim_data.BranchGroupTerminal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchGroupTerminal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "BranchGroupTerminal";
                base.parse_element (/<cim:BranchGroupTerminal.positiveFlowIn>([\s\S]*?)<\/cim:BranchGroupTerminal.positiveFlowIn>/g, obj, "positiveFlowIn", base.to_boolean, sub, context);
                base.parse_attribute (/<cim:BranchGroupTerminal.BranchGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "BranchGroup", sub, context);
                base.parse_attribute (/<cim:BranchGroupTerminal.Terminal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "Terminal", sub, context);

                var bucket = context.parsed.BranchGroupTerminal;
                if (null == bucket)
                   context.parsed.BranchGroupTerminal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "BranchGroupTerminal", "positiveFlowIn", base.from_boolean, fields);
                base.export_attribute (obj, "BranchGroupTerminal", "BranchGroup", fields);
                base.export_attribute (obj, "BranchGroupTerminal", "Terminal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A group of branch terminals whose directed flow summation is to be monitored.
         *
         * A branch group need not form a cutset of the network.
         *
         */
        class BranchGroup extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.BranchGroup;
                if (null == bucket)
                   cim_data.BranchGroup = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.BranchGroup[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "BranchGroup";
                base.parse_element (/<cim:BranchGroup.maximumActivePower>([\s\S]*?)<\/cim:BranchGroup.maximumActivePower>/g, obj, "maximumActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.maximumReactivePower>([\s\S]*?)<\/cim:BranchGroup.maximumReactivePower>/g, obj, "maximumReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.minimumActivePower>([\s\S]*?)<\/cim:BranchGroup.minimumActivePower>/g, obj, "minimumActivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.minimumReactivePower>([\s\S]*?)<\/cim:BranchGroup.minimumReactivePower>/g, obj, "minimumReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:BranchGroup.monitorActivePower>([\s\S]*?)<\/cim:BranchGroup.monitorActivePower>/g, obj, "monitorActivePower", base.to_boolean, sub, context);
                base.parse_element (/<cim:BranchGroup.monitorReactivePower>([\s\S]*?)<\/cim:BranchGroup.monitorReactivePower>/g, obj, "monitorReactivePower", base.to_boolean, sub, context);

                var bucket = context.parsed.BranchGroup;
                if (null == bucket)
                   context.parsed.BranchGroup = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "BranchGroup", "maximumActivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "maximumReactivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumActivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "minimumReactivePower", base.from_string, fields);
                base.export_element (obj, "BranchGroup", "monitorActivePower", base.from_boolean, fields);
                base.export_element (obj, "BranchGroup", "monitorReactivePower", base.from_boolean, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The operational meaning of a category of limits.
         *
         */
        class OperationalLimitType extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimitType;
                if (null == bucket)
                   cim_data.OperationalLimitType = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimitType[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitType";
                base.parse_element (/<cim:OperationalLimitType.acceptableDuration>([\s\S]*?)<\/cim:OperationalLimitType.acceptableDuration>/g, obj, "acceptableDuration", base.to_string, sub, context);
                base.parse_element (/<cim:OperationalLimitType.direction>([\s\S]*?)<\/cim:OperationalLimitType.direction>/g, obj, "direction", base.to_string, sub, context);
                base.parse_attribute (/<cim:OperationalLimitType.TargetOperationalLimitmTypeScaling\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "TargetOperationalLimitmTypeScaling", sub, context);

                var bucket = context.parsed.OperationalLimitType;
                if (null == bucket)
                   context.parsed.OperationalLimitType = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "OperationalLimitType", "acceptableDuration", base.from_string, fields);
                base.export_element (obj, "OperationalLimitType", "direction", base.from_string, fields);
                base.export_attribute (obj, "OperationalLimitType", "TargetOperationalLimitmTypeScaling", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The direction attribute describes the side of  a limit that is a violation.
         *
         */
        class OperationalLimitDirectionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.OperationalLimitDirectionKind;
                if (null == bucket)
                   cim_data.OperationalLimitDirectionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.OperationalLimitDirectionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "OperationalLimitDirectionKind";
                base.parse_element (/<cim:OperationalLimitDirectionKind.high>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.high>/g, obj, "high", base.to_string, sub, context);
                base.parse_element (/<cim:OperationalLimitDirectionKind.low>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.low>/g, obj, "low", base.to_string, sub, context);
                base.parse_element (/<cim:OperationalLimitDirectionKind.absoluteValue>([\s\S]*?)<\/cim:OperationalLimitDirectionKind.absoluteValue>/g, obj, "absoluteValue", base.to_string, sub, context);

                var bucket = context.parsed.OperationalLimitDirectionKind;
                if (null == bucket)
                   context.parsed.OperationalLimitDirectionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "OperationalLimitDirectionKind", "high", base.from_string, fields);
                base.export_element (obj, "OperationalLimitDirectionKind", "low", base.from_string, fields);
                base.export_element (obj, "OperationalLimitDirectionKind", "absoluteValue", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Operational limit on current.
         *
         */
        class CurrentLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentLimit;
                if (null == bucket)
                   cim_data.CurrentLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentLimit";
                base.parse_element (/<cim:CurrentLimit.value>([\s\S]*?)<\/cim:CurrentLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.CurrentLimit;
                if (null == bucket)
                   context.parsed.CurrentLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["OperationalLimit"](obj, exporters, false);

                base.export_element (obj, "CurrentLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Apparent power limit.
         *
         */
        class ApparentPowerLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ApparentPowerLimit;
                if (null == bucket)
                   cim_data.ApparentPowerLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ApparentPowerLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "ApparentPowerLimit";
                base.parse_element (/<cim:ApparentPowerLimit.value>([\s\S]*?)<\/cim:ApparentPowerLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ApparentPowerLimit;
                if (null == bucket)
                   context.parsed.ApparentPowerLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["OperationalLimit"](obj, exporters, false);

                base.export_element (obj, "ApparentPowerLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Operational limit applied to voltage.
         *
         */
        class VoltageLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VoltageLimit;
                if (null == bucket)
                   cim_data.VoltageLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VoltageLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "VoltageLimit";
                base.parse_element (/<cim:VoltageLimit.value>([\s\S]*?)<\/cim:VoltageLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.VoltageLimit;
                if (null == bucket)
                   context.parsed.VoltageLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["OperationalLimit"](obj, exporters, false);

                base.export_element (obj, "VoltageLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Limit on active power flow.
         *
         */
        class ActivePowerLimit extends OperationalLimit
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePowerLimit;
                if (null == bucket)
                   cim_data.ActivePowerLimit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePowerLimit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = OperationalLimit.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerLimit";
                base.parse_element (/<cim:ActivePowerLimit.value>([\s\S]*?)<\/cim:ActivePowerLimit.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.ActivePowerLimit;
                if (null == bucket)
                   context.parsed.ActivePowerLimit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["OperationalLimit"](obj, exporters, false);

                base.export_element (obj, "ActivePowerLimit", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                OperationalLimit: OperationalLimit,
                BranchGroup: BranchGroup,
                OperationalLimitType: OperationalLimitType,
                ActivePowerLimit: ActivePowerLimit,
                OperationalLimitDirectionKind: OperationalLimitDirectionKind,
                OperationalLimitSet: OperationalLimitSet,
                BranchGroupTerminal: BranchGroupTerminal,
                ApparentPowerLimit: ApparentPowerLimit,
                CurrentLimit: CurrentLimit,
                VoltageLimit: VoltageLimit
            }
        );
    }
);