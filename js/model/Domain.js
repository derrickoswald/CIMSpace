define
(
    ["model/base"],
    /**
     * The domain package define primitive datatypes that are used by classes in other packages.
     *
     * Stereotypes are used to describe the datatypes. The following stereotypes are defined:
     *
     */
    function (base)
    {

        /**
         * Capacitance per unit of length.
         *
         */
        class CapacitancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CapacitancePerLength;
                if (null == bucket)
                   cim_data.CapacitancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CapacitancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CapacitancePerLength";
                base.parse_element (/<cim:CapacitancePerLength.value>([\s\S]*?)<\/cim:CapacitancePerLength.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:CapacitancePerLength.unit>([\s\S]*?)<\/cim:CapacitancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:CapacitancePerLength.multiplier>([\s\S]*?)<\/cim:CapacitancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CapacitancePerLength.denominatorUnit>([\s\S]*?)<\/cim:CapacitancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:CapacitancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:CapacitancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);

                var bucket = context.parsed.CapacitancePerLength;
                if (null == bucket)
                   context.parsed.CapacitancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CapacitancePerLength", "value", base.from_float, fields);
                base.export_element (obj, "CapacitancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "CapacitancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "CapacitancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "CapacitancePerLength", "denominatorMultiplier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Cost per unit volume.
         *
         */
        class CostPerVolume extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CostPerVolume;
                if (null == bucket)
                   cim_data.CostPerVolume = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CostPerVolume[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostPerVolume";
                base.parse_element (/<cim:CostPerVolume.value>([\s\S]*?)<\/cim:CostPerVolume.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:CostPerVolume.denominatorMultiplier>([\s\S]*?)<\/cim:CostPerVolume.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerVolume.denominatorUnit>([\s\S]*?)<\/cim:CostPerVolume.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerVolume.multiplier>([\s\S]*?)<\/cim:CostPerVolume.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerVolume.unit>([\s\S]*?)<\/cim:CostPerVolume.unit>/g, obj, "unit", base.to_string, sub, context);

                var bucket = context.parsed.CostPerVolume;
                if (null == bucket)
                   context.parsed.CostPerVolume = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CostPerVolume", "value", base.from_float, fields);
                base.export_element (obj, "CostPerVolume", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "CostPerVolume", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "CostPerVolume", "multiplier", base.from_string, fields);
                base.export_element (obj, "CostPerVolume", "unit", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A floating point number.
         *
         * The range is unspecified and not limited.
         *
         */
        class Float extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Float;
                if (null == bucket)
                   cim_data.Float = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Float[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Float";

                var bucket = context.parsed.Float;
                if (null == bucket)
                   context.parsed.Float = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The unit multipliers defined for the CIM.
         *
         */
        class UnitMultiplier extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnitMultiplier;
                if (null == bucket)
                   cim_data.UnitMultiplier = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnitMultiplier[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UnitMultiplier";
                base.parse_element (/<cim:UnitMultiplier.p>([\s\S]*?)<\/cim:UnitMultiplier.p>/g, obj, "p", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.n>([\s\S]*?)<\/cim:UnitMultiplier.n>/g, obj, "n", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.micro>([\s\S]*?)<\/cim:UnitMultiplier.micro>/g, obj, "micro", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.m>([\s\S]*?)<\/cim:UnitMultiplier.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.c>([\s\S]*?)<\/cim:UnitMultiplier.c>/g, obj, "c", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.d>([\s\S]*?)<\/cim:UnitMultiplier.d>/g, obj, "d", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.k>([\s\S]*?)<\/cim:UnitMultiplier.k>/g, obj, "k", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.M>([\s\S]*?)<\/cim:UnitMultiplier.M>/g, obj, "M", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.G>([\s\S]*?)<\/cim:UnitMultiplier.G>/g, obj, "G", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.T>([\s\S]*?)<\/cim:UnitMultiplier.T>/g, obj, "T", base.to_string, sub, context);
                base.parse_element (/<cim:UnitMultiplier.none>([\s\S]*?)<\/cim:UnitMultiplier.none>/g, obj, "none", base.to_string, sub, context);

                var bucket = context.parsed.UnitMultiplier;
                if (null == bucket)
                   context.parsed.UnitMultiplier = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "UnitMultiplier", "p", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "n", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "micro", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "m", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "c", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "d", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "k", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "M", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "G", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "T", base.from_string, fields);
                base.export_element (obj, "UnitMultiplier", "none", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Product of RMS value of the voltage and the RMS value of the quadrature component of the current.
         *
         */
        class ReactivePower extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReactivePower;
                if (null == bucket)
                   cim_data.ReactivePower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReactivePower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReactivePower";
                base.parse_element (/<cim:ReactivePower.multiplier>([\s\S]*?)<\/cim:ReactivePower.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ReactivePower.unit>([\s\S]*?)<\/cim:ReactivePower.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ReactivePower.value>([\s\S]*?)<\/cim:ReactivePower.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ReactivePower;
                if (null == bucket)
                   context.parsed.ReactivePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ReactivePower", "multiplier", base.from_string, fields);
                base.export_element (obj, "ReactivePower", "unit", base.from_string, fields);
                base.export_element (obj, "ReactivePower", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Interval between two times specified as mont and date.
         *
         */
        class MonthDayInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MonthDayInterval;
                if (null == bucket)
                   cim_data.MonthDayInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MonthDayInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MonthDayInterval";
                base.parse_element (/<cim:MonthDayInterval.end>([\s\S]*?)<\/cim:MonthDayInterval.end>/g, obj, "end", base.to_string, sub, context);
                base.parse_element (/<cim:MonthDayInterval.start>([\s\S]*?)<\/cim:MonthDayInterval.start>/g, obj, "start", base.to_string, sub, context);

                var bucket = context.parsed.MonthDayInterval;
                if (null == bucket)
                   context.parsed.MonthDayInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "MonthDayInterval", "end", base.from_string, fields);
                base.export_element (obj, "MonthDayInterval", "start", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reactance (imaginary part of impedance), at rated frequency.
         *
         */
        class Reactance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Reactance;
                if (null == bucket)
                   cim_data.Reactance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Reactance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Reactance";
                base.parse_element (/<cim:Reactance.multiplier>([\s\S]*?)<\/cim:Reactance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Reactance.unit>([\s\S]*?)<\/cim:Reactance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Reactance.value>([\s\S]*?)<\/cim:Reactance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Reactance;
                if (null == bucket)
                   context.parsed.Reactance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Reactance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Reactance", "unit", base.from_string, fields);
                base.export_element (obj, "Reactance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Resistance (real part of impedance) per unit of length.
         *
         */
        class ResistancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ResistancePerLength;
                if (null == bucket)
                   cim_data.ResistancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ResistancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResistancePerLength";
                base.parse_element (/<cim:ResistancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:ResistancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ResistancePerLength.denominatorUnit>([\s\S]*?)<\/cim:ResistancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ResistancePerLength.multiplier>([\s\S]*?)<\/cim:ResistancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ResistancePerLength.unit>([\s\S]*?)<\/cim:ResistancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ResistancePerLength.value>([\s\S]*?)<\/cim:ResistancePerLength.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ResistancePerLength;
                if (null == bucket)
                   context.parsed.ResistancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ResistancePerLength", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "ResistancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "ResistancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "ResistancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "ResistancePerLength", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Phase angle in radians.
         *
         */
        class AngleRadians extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AngleRadians;
                if (null == bucket)
                   cim_data.AngleRadians = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AngleRadians[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AngleRadians";
                base.parse_element (/<cim:AngleRadians.multiplier>([\s\S]*?)<\/cim:AngleRadians.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:AngleRadians.unit>([\s\S]*?)<\/cim:AngleRadians.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:AngleRadians.value>([\s\S]*?)<\/cim:AngleRadians.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.AngleRadians;
                if (null == bucket)
                   context.parsed.AngleRadians = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AngleRadians", "multiplier", base.from_string, fields);
                base.export_element (obj, "AngleRadians", "unit", base.from_string, fields);
                base.export_element (obj, "AngleRadians", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Electrical voltage, can be both AC and DC.
         *
         */
        class Voltage extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Voltage;
                if (null == bucket)
                   cim_data.Voltage = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Voltage[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Voltage";
                base.parse_element (/<cim:Voltage.multiplier>([\s\S]*?)<\/cim:Voltage.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Voltage.unit>([\s\S]*?)<\/cim:Voltage.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Voltage.value>([\s\S]*?)<\/cim:Voltage.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Voltage;
                if (null == bucket)
                   context.parsed.Voltage = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Voltage", "multiplier", base.from_string, fields);
                base.export_element (obj, "Voltage", "unit", base.from_string, fields);
                base.export_element (obj, "Voltage", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Rate of change of active power per time.
         *
         */
        class ActivePowerChangeRate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePowerChangeRate;
                if (null == bucket)
                   cim_data.ActivePowerChangeRate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePowerChangeRate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerChangeRate";
                base.parse_element (/<cim:ActivePowerChangeRate.denominatorMultiplier>([\s\S]*?)<\/cim:ActivePowerChangeRate.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerChangeRate.denominatorUnit>([\s\S]*?)<\/cim:ActivePowerChangeRate.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerChangeRate.multiplier>([\s\S]*?)<\/cim:ActivePowerChangeRate.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerChangeRate.unit>([\s\S]*?)<\/cim:ActivePowerChangeRate.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerChangeRate.value>([\s\S]*?)<\/cim:ActivePowerChangeRate.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ActivePowerChangeRate;
                if (null == bucket)
                   context.parsed.ActivePowerChangeRate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ActivePowerChangeRate", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "ActivePowerChangeRate", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "ActivePowerChangeRate", "multiplier", base.from_string, fields);
                base.export_element (obj, "ActivePowerChangeRate", "unit", base.from_string, fields);
                base.export_element (obj, "ActivePowerChangeRate", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class ActivePowerPerCurrentFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePowerPerCurrentFlow;
                if (null == bucket)
                   cim_data.ActivePowerPerCurrentFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePowerPerCurrentFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerPerCurrentFlow";
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.multiplier>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.unit>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.value>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.demoninatorUnit>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.demoninatorUnit>/g, obj, "demoninatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.denominatorMultiplier>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);

                var bucket = context.parsed.ActivePowerPerCurrentFlow;
                if (null == bucket)
                   context.parsed.ActivePowerPerCurrentFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ActivePowerPerCurrentFlow", "multiplier", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerCurrentFlow", "unit", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerCurrentFlow", "value", base.from_float, fields);
                base.export_element (obj, "ActivePowerPerCurrentFlow", "demoninatorUnit", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerCurrentFlow", "denominatorMultiplier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Cost, in units of currency, per elapsed time.
         *
         */
        class CostRate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CostRate;
                if (null == bucket)
                   cim_data.CostRate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CostRate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostRate";
                base.parse_element (/<cim:CostRate.denominatorMultiplier>([\s\S]*?)<\/cim:CostRate.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostRate.denominatorUnit>([\s\S]*?)<\/cim:CostRate.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:CostRate.multiplier>([\s\S]*?)<\/cim:CostRate.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostRate.unit>([\s\S]*?)<\/cim:CostRate.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:CostRate.value>([\s\S]*?)<\/cim:CostRate.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.CostRate;
                if (null == bucket)
                   context.parsed.CostRate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CostRate", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "CostRate", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "CostRate", "multiplier", base.from_string, fields);
                base.export_element (obj, "CostRate", "unit", base.from_string, fields);
                base.export_element (obj, "CostRate", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reservoir water level referred to a given datum such as mean sea level.
         *
         */
        class WaterLevel extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WaterLevel;
                if (null == bucket)
                   cim_data.WaterLevel = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WaterLevel[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WaterLevel";
                base.parse_element (/<cim:WaterLevel.multiplier>([\s\S]*?)<\/cim:WaterLevel.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:WaterLevel.unit>([\s\S]*?)<\/cim:WaterLevel.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:WaterLevel.value>([\s\S]*?)<\/cim:WaterLevel.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.WaterLevel;
                if (null == bucket)
                   context.parsed.WaterLevel = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "WaterLevel", "multiplier", base.from_string, fields);
                base.export_element (obj, "WaterLevel", "unit", base.from_string, fields);
                base.export_element (obj, "WaterLevel", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * An integer number.
         *
         * The range is unspecified and not limited.
         *
         */
        class Integer extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Integer;
                if (null == bucket)
                   cim_data.Integer = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Integer[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Integer";

                var bucket = context.parsed.Integer;
                if (null == bucket)
                   context.parsed.Integer = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Ratio of current to voltage.
         *
         */
        class Admittance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Admittance;
                if (null == bucket)
                   cim_data.Admittance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Admittance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Admittance";
                base.parse_element (/<cim:Admittance.multiplier>([\s\S]*?)<\/cim:Admittance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Admittance.unit>([\s\S]*?)<\/cim:Admittance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Admittance.value>([\s\S]*?)<\/cim:Admittance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Admittance;
                if (null == bucket)
                   context.parsed.Admittance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Admittance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Admittance", "unit", base.from_string, fields);
                base.export_element (obj, "Admittance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Cost, in units of currency, per quantity of electrical energy generated.
         *
         */
        class CostPerEnergyUnit extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CostPerEnergyUnit;
                if (null == bucket)
                   cim_data.CostPerEnergyUnit = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CostPerEnergyUnit[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostPerEnergyUnit";
                base.parse_element (/<cim:CostPerEnergyUnit.denominatorMultiplier>([\s\S]*?)<\/cim:CostPerEnergyUnit.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerEnergyUnit.denominatorUnit>([\s\S]*?)<\/cim:CostPerEnergyUnit.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerEnergyUnit.multiplier>([\s\S]*?)<\/cim:CostPerEnergyUnit.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerEnergyUnit.unit>([\s\S]*?)<\/cim:CostPerEnergyUnit.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:CostPerEnergyUnit.value>([\s\S]*?)<\/cim:CostPerEnergyUnit.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.CostPerEnergyUnit;
                if (null == bucket)
                   context.parsed.CostPerEnergyUnit = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CostPerEnergyUnit", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "CostPerEnergyUnit", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "CostPerEnergyUnit", "multiplier", base.from_string, fields);
                base.export_element (obj, "CostPerEnergyUnit", "unit", base.from_string, fields);
                base.export_element (obj, "CostPerEnergyUnit", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reactance (imaginary part of impedance) per unit of length, at rated frequency.
         *
         */
        class ReactancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ReactancePerLength;
                if (null == bucket)
                   cim_data.ReactancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ReactancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReactancePerLength";
                base.parse_element (/<cim:ReactancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:ReactancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ReactancePerLength.denominatorUnit>([\s\S]*?)<\/cim:ReactancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ReactancePerLength.multiplier>([\s\S]*?)<\/cim:ReactancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ReactancePerLength.unit>([\s\S]*?)<\/cim:ReactancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ReactancePerLength.value>([\s\S]*?)<\/cim:ReactancePerLength.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ReactancePerLength;
                if (null == bucket)
                   context.parsed.ReactancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ReactancePerLength", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "ReactancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "ReactancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "ReactancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "ReactancePerLength", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Duration as "PnYnMnDTnHnMnS" which conforms to ISO 8601, where nY expresses a number of years, nM a number of months, nD a number of days.
         *
         * The letter T separates the date expression from the time expression and, after it, nH identifies a number of hours, nM a number of minutes and nS a number of seconds. The number of seconds could be expressed as a decimal number, but all other numbers are integers.
         *
         */
        class Duration extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Duration;
                if (null == bucket)
                   cim_data.Duration = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Duration[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Duration";

                var bucket = context.parsed.Duration;
                if (null == bucket)
                   context.parsed.Duration = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Time as "hh:mm:ss.sss", which conforms with ISO 8601.
         *
         * UTC time zone is specified as "hh:mm:ss.sssZ". A local timezone relative UTC is specified as "hh:mm:ss.sss�hh:mm". The second component (shown here as "ss.sss") could have any number of digits in its fractional part to allow any kind of precision beyond seconds.
         *
         */
        class Time extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Time;
                if (null == bucket)
                   cim_data.Time = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Time[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Time";

                var bucket = context.parsed.Time;
                if (null == bucket)
                   context.parsed.Time = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Per-unit active power variation with frequency referenced on the system apparent power base.
         *
         * Typical values are in range 1.0 - 2.0.
         *
         */
        class Damping extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Damping;
                if (null == bucket)
                   cim_data.Damping = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Damping[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Damping";
                base.parse_element (/<cim:Damping.denominatorMultiplier>([\s\S]*?)<\/cim:Damping.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Damping.denominatorUnit>([\s\S]*?)<\/cim:Damping.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:Damping.multiplier>([\s\S]*?)<\/cim:Damping.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Damping.unit>([\s\S]*?)<\/cim:Damping.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Damping.value>([\s\S]*?)<\/cim:Damping.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Damping;
                if (null == bucket)
                   context.parsed.Damping = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Damping", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "Damping", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "Damping", "multiplier", base.from_string, fields);
                base.export_element (obj, "Damping", "unit", base.from_string, fields);
                base.export_element (obj, "Damping", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Per Unit - a positive or negative value referred to a defined base.
         *
         * Values typically range from -10 to +10.
         *
         */
        class PU extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PU;
                if (null == bucket)
                   cim_data.PU = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PU[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PU";
                base.parse_element (/<cim:PU.multiplier>([\s\S]*?)<\/cim:PU.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:PU.unit>([\s\S]*?)<\/cim:PU.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:PU.value>([\s\S]*?)<\/cim:PU.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PU;
                if (null == bucket)
                   context.parsed.PU = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PU", "multiplier", base.from_string, fields);
                base.export_element (obj, "PU", "unit", base.from_string, fields);
                base.export_element (obj, "PU", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Monetary currencies.
         *
         * Apologies for this list not being exhaustive.
         *
         */
        class Currency extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Currency;
                if (null == bucket)
                   cim_data.Currency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Currency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Currency";
                base.parse_element (/<cim:Currency.USD>([\s\S]*?)<\/cim:Currency.USD>/g, obj, "USD", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.EUR>([\s\S]*?)<\/cim:Currency.EUR>/g, obj, "EUR", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.AUD>([\s\S]*?)<\/cim:Currency.AUD>/g, obj, "AUD", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.CAD>([\s\S]*?)<\/cim:Currency.CAD>/g, obj, "CAD", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.CHF>([\s\S]*?)<\/cim:Currency.CHF>/g, obj, "CHF", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.CNY>([\s\S]*?)<\/cim:Currency.CNY>/g, obj, "CNY", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.DKK>([\s\S]*?)<\/cim:Currency.DKK>/g, obj, "DKK", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.GBP>([\s\S]*?)<\/cim:Currency.GBP>/g, obj, "GBP", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.JPY>([\s\S]*?)<\/cim:Currency.JPY>/g, obj, "JPY", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.NOK>([\s\S]*?)<\/cim:Currency.NOK>/g, obj, "NOK", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.RUR>([\s\S]*?)<\/cim:Currency.RUR>/g, obj, "RUR", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.SEK>([\s\S]*?)<\/cim:Currency.SEK>/g, obj, "SEK", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.INR>([\s\S]*?)<\/cim:Currency.INR>/g, obj, "INR", base.to_string, sub, context);
                base.parse_element (/<cim:Currency.other>([\s\S]*?)<\/cim:Currency.other>/g, obj, "other", base.to_string, sub, context);

                var bucket = context.parsed.Currency;
                if (null == bucket)
                   context.parsed.Currency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Currency", "USD", base.from_string, fields);
                base.export_element (obj, "Currency", "EUR", base.from_string, fields);
                base.export_element (obj, "Currency", "AUD", base.from_string, fields);
                base.export_element (obj, "Currency", "CAD", base.from_string, fields);
                base.export_element (obj, "Currency", "CHF", base.from_string, fields);
                base.export_element (obj, "Currency", "CNY", base.from_string, fields);
                base.export_element (obj, "Currency", "DKK", base.from_string, fields);
                base.export_element (obj, "Currency", "GBP", base.from_string, fields);
                base.export_element (obj, "Currency", "JPY", base.from_string, fields);
                base.export_element (obj, "Currency", "NOK", base.from_string, fields);
                base.export_element (obj, "Currency", "RUR", base.from_string, fields);
                base.export_element (obj, "Currency", "SEK", base.from_string, fields);
                base.export_element (obj, "Currency", "INR", base.from_string, fields);
                base.export_element (obj, "Currency", "other", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Product of RMS value of the voltage and the RMS value of the in-phase component of the current.
         *
         */
        class ActivePower extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePower;
                if (null == bucket)
                   cim_data.ActivePower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePower";
                base.parse_element (/<cim:ActivePower.multiplier>([\s\S]*?)<\/cim:ActivePower.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePower.unit>([\s\S]*?)<\/cim:ActivePower.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePower.value>([\s\S]*?)<\/cim:ActivePower.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ActivePower;
                if (null == bucket)
                   context.parsed.ActivePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ActivePower", "multiplier", base.from_string, fields);
                base.export_element (obj, "ActivePower", "unit", base.from_string, fields);
                base.export_element (obj, "ActivePower", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Capacitive part of reactance (imaginary part of impedance), at rated frequency.
         *
         */
        class Capacitance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Capacitance;
                if (null == bucket)
                   cim_data.Capacitance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Capacitance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Capacitance";
                base.parse_element (/<cim:Capacitance.multiplier>([\s\S]*?)<\/cim:Capacitance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Capacitance.unit>([\s\S]*?)<\/cim:Capacitance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Capacitance.value>([\s\S]*?)<\/cim:Capacitance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Capacitance;
                if (null == bucket)
                   context.parsed.Capacitance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Capacitance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Capacitance", "unit", base.from_string, fields);
                base.export_element (obj, "Capacitance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Factor by which voltage must be multiplied to give corresponding power lost from a circuit.
         *
         * Real part of admittance.
         *
         */
        class Conductance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Conductance;
                if (null == bucket)
                   cim_data.Conductance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Conductance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Conductance";
                base.parse_element (/<cim:Conductance.multiplier>([\s\S]*?)<\/cim:Conductance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Conductance.unit>([\s\S]*?)<\/cim:Conductance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Conductance.value>([\s\S]*?)<\/cim:Conductance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Conductance;
                if (null == bucket)
                   context.parsed.Conductance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Conductance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Conductance", "unit", base.from_string, fields);
                base.export_element (obj, "Conductance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Inductance per unit of length.
         *
         */
        class InductancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.InductancePerLength;
                if (null == bucket)
                   cim_data.InductancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.InductancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InductancePerLength";
                base.parse_element (/<cim:InductancePerLength.value>([\s\S]*?)<\/cim:InductancePerLength.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:InductancePerLength.unit>([\s\S]*?)<\/cim:InductancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:InductancePerLength.multiplier>([\s\S]*?)<\/cim:InductancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:InductancePerLength.denominatorUnit>([\s\S]*?)<\/cim:InductancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:InductancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:InductancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);

                var bucket = context.parsed.InductancePerLength;
                if (null == bucket)
                   context.parsed.InductancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InductancePerLength", "value", base.from_float, fields);
                base.export_element (obj, "InductancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "InductancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "InductancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "InductancePerLength", "denominatorMultiplier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Volume per time.
         *
         */
        class VolumeFlowRate extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VolumeFlowRate;
                if (null == bucket)
                   cim_data.VolumeFlowRate = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VolumeFlowRate[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VolumeFlowRate";
                base.parse_element (/<cim:VolumeFlowRate.denominatorMultiplier>([\s\S]*?)<\/cim:VolumeFlowRate.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:VolumeFlowRate.denominatorUnit>([\s\S]*?)<\/cim:VolumeFlowRate.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:VolumeFlowRate.multiplier>([\s\S]*?)<\/cim:VolumeFlowRate.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:VolumeFlowRate.unit>([\s\S]*?)<\/cim:VolumeFlowRate.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:VolumeFlowRate.value>([\s\S]*?)<\/cim:VolumeFlowRate.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.VolumeFlowRate;
                if (null == bucket)
                   context.parsed.VolumeFlowRate = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "VolumeFlowRate", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "VolumeFlowRate", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "VolumeFlowRate", "multiplier", base.from_string, fields);
                base.export_element (obj, "VolumeFlowRate", "unit", base.from_string, fields);
                base.export_element (obj, "VolumeFlowRate", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Date and time as "yyyy-mm-ddThh:mm:ss.sss", which conforms with ISO 8601.
         *
         * UTC time zone is specified as "yyyy-mm-ddThh:mm:ss.sssZ". A local timezone relative UTC is specified as "yyyy-mm-ddThh:mm:ss.sss-hh:mm". The second component (shown here as "ss.sss") could have any number of digits in its fractional part to allow any kind of precision beyond seconds.
         *
         */
        class DateTime extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DateTime;
                if (null == bucket)
                   cim_data.DateTime = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DateTime[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DateTime";

                var bucket = context.parsed.DateTime;
                if (null == bucket)
                   context.parsed.DateTime = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * MonthDay format as "--mm-dd", which conforms with XSD data type gMonthDay.
         *
         */
        class MonthDay extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.MonthDay;
                if (null == bucket)
                   cim_data.MonthDay = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.MonthDay[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "MonthDay";

                var bucket = context.parsed.MonthDay;
                if (null == bucket)
                   context.parsed.MonthDay = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Electrical current with sign convention: positive flow is out of the conducting equipment into the connectivity node.
         *
         * Can be both AC and DC.
         *
         */
        class CurrentFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.CurrentFlow;
                if (null == bucket)
                   cim_data.CurrentFlow = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.CurrentFlow[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentFlow";
                base.parse_element (/<cim:CurrentFlow.multiplier>([\s\S]*?)<\/cim:CurrentFlow.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentFlow.unit>([\s\S]*?)<\/cim:CurrentFlow.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:CurrentFlow.value>([\s\S]*?)<\/cim:CurrentFlow.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.CurrentFlow;
                if (null == bucket)
                   context.parsed.CurrentFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CurrentFlow", "multiplier", base.from_string, fields);
                base.export_element (obj, "CurrentFlow", "unit", base.from_string, fields);
                base.export_element (obj, "CurrentFlow", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Active power in kilowatts.
         *
         */
        class KiloActivePower extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.KiloActivePower;
                if (null == bucket)
                   cim_data.KiloActivePower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.KiloActivePower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "KiloActivePower";
                base.parse_element (/<cim:KiloActivePower.multiplier>([\s\S]*?)<\/cim:KiloActivePower.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:KiloActivePower.unit>([\s\S]*?)<\/cim:KiloActivePower.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:KiloActivePower.value>([\s\S]*?)<\/cim:KiloActivePower.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.KiloActivePower;
                if (null == bucket)
                   context.parsed.KiloActivePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "KiloActivePower", "multiplier", base.from_string, fields);
                base.export_element (obj, "KiloActivePower", "unit", base.from_string, fields);
                base.export_element (obj, "KiloActivePower", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Ratio of voltage to current.
         *
         */
        class Impedance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Impedance;
                if (null == bucket)
                   cim_data.Impedance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Impedance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Impedance";
                base.parse_element (/<cim:Impedance.multiplier>([\s\S]*?)<\/cim:Impedance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Impedance.unit>([\s\S]*?)<\/cim:Impedance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Impedance.value>([\s\S]*?)<\/cim:Impedance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Impedance;
                if (null == bucket)
                   context.parsed.Impedance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Impedance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Impedance", "unit", base.from_string, fields);
                base.export_element (obj, "Impedance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Percentage on a defined base.
         *
         * For example, specify as 100 to indicate at the defined base.
         *
         */
        class PerCent extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.PerCent;
                if (null == bucket)
                   cim_data.PerCent = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.PerCent[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PerCent";
                base.parse_element (/<cim:PerCent.multiplier>([\s\S]*?)<\/cim:PerCent.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:PerCent.unit>([\s\S]*?)<\/cim:PerCent.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:PerCent.value>([\s\S]*?)<\/cim:PerCent.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.PerCent;
                if (null == bucket)
                   context.parsed.PerCent = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "PerCent", "multiplier", base.from_string, fields);
                base.export_element (obj, "PerCent", "unit", base.from_string, fields);
                base.export_element (obj, "PerCent", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Time, in seconds.
         *
         */
        class Seconds extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Seconds;
                if (null == bucket)
                   cim_data.Seconds = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Seconds[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Seconds";
                base.parse_element (/<cim:Seconds.multiplier>([\s\S]*?)<\/cim:Seconds.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Seconds.unit>([\s\S]*?)<\/cim:Seconds.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Seconds.value>([\s\S]*?)<\/cim:Seconds.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Seconds;
                if (null == bucket)
                   context.parsed.Seconds = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Seconds", "multiplier", base.from_string, fields);
                base.export_element (obj, "Seconds", "unit", base.from_string, fields);
                base.export_element (obj, "Seconds", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Active power variation with frequency.
         *
         */
        class ActivePowerPerFrequency extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ActivePowerPerFrequency;
                if (null == bucket)
                   cim_data.ActivePowerPerFrequency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ActivePowerPerFrequency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerPerFrequency";
                base.parse_element (/<cim:ActivePowerPerFrequency.denominatorMultiplier>([\s\S]*?)<\/cim:ActivePowerPerFrequency.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerFrequency.denominatorUnit>([\s\S]*?)<\/cim:ActivePowerPerFrequency.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerFrequency.multiplier>([\s\S]*?)<\/cim:ActivePowerPerFrequency.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerFrequency.unit>([\s\S]*?)<\/cim:ActivePowerPerFrequency.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ActivePowerPerFrequency.value>([\s\S]*?)<\/cim:ActivePowerPerFrequency.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ActivePowerPerFrequency;
                if (null == bucket)
                   context.parsed.ActivePowerPerFrequency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ActivePowerPerFrequency", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerFrequency", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerFrequency", "multiplier", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerFrequency", "unit", base.from_string, fields);
                base.export_element (obj, "ActivePowerPerFrequency", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Amount of money.
         *
         */
        class Money extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Money;
                if (null == bucket)
                   cim_data.Money = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Money[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Money";
                base.parse_element (/<cim:Money.multiplier>([\s\S]*?)<\/cim:Money.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Money.unit>([\s\S]*?)<\/cim:Money.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Money.value>([\s\S]*?)<\/cim:Money.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.Money;
                if (null == bucket)
                   context.parsed.Money = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Money", "multiplier", base.from_string, fields);
                base.export_element (obj, "Money", "unit", base.from_string, fields);
                base.export_element (obj, "Money", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Interval between two date and time points.
         *
         */
        class DateTimeInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DateTimeInterval;
                if (null == bucket)
                   cim_data.DateTimeInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DateTimeInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DateTimeInterval";
                base.parse_element (/<cim:DateTimeInterval.end>([\s\S]*?)<\/cim:DateTimeInterval.end>/g, obj, "end", base.to_datetime, sub, context);
                base.parse_element (/<cim:DateTimeInterval.start>([\s\S]*?)<\/cim:DateTimeInterval.start>/g, obj, "start", base.to_datetime, sub, context);

                var bucket = context.parsed.DateTimeInterval;
                if (null == bucket)
                   context.parsed.DateTimeInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DateTimeInterval", "end", base.from_datetime, fields);
                base.export_element (obj, "DateTimeInterval", "start", base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Product of the RMS value of the voltage and the RMS value of the current.
         *
         */
        class ApparentPower extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ApparentPower;
                if (null == bucket)
                   cim_data.ApparentPower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ApparentPower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ApparentPower";
                base.parse_element (/<cim:ApparentPower.multiplier>([\s\S]*?)<\/cim:ApparentPower.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ApparentPower.unit>([\s\S]*?)<\/cim:ApparentPower.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ApparentPower.value>([\s\S]*?)<\/cim:ApparentPower.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ApparentPower;
                if (null == bucket)
                   context.parsed.ApparentPower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ApparentPower", "multiplier", base.from_string, fields);
                base.export_element (obj, "ApparentPower", "unit", base.from_string, fields);
                base.export_element (obj, "ApparentPower", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Volume.
         *
         */
        class Volume extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Volume;
                if (null == bucket)
                   cim_data.Volume = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Volume[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Volume";
                base.parse_element (/<cim:Volume.multiplier>([\s\S]*?)<\/cim:Volume.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Volume.unit>([\s\S]*?)<\/cim:Volume.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Volume.value>([\s\S]*?)<\/cim:Volume.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Volume;
                if (null == bucket)
                   context.parsed.Volume = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Volume", "multiplier", base.from_string, fields);
                base.export_element (obj, "Volume", "unit", base.from_string, fields);
                base.export_element (obj, "Volume", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Measurement of angle in degrees.
         *
         */
        class AngleDegrees extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.AngleDegrees;
                if (null == bucket)
                   cim_data.AngleDegrees = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.AngleDegrees[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AngleDegrees";
                base.parse_element (/<cim:AngleDegrees.multiplier>([\s\S]*?)<\/cim:AngleDegrees.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:AngleDegrees.unit>([\s\S]*?)<\/cim:AngleDegrees.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:AngleDegrees.value>([\s\S]*?)<\/cim:AngleDegrees.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.AngleDegrees;
                if (null == bucket)
                   context.parsed.AngleDegrees = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "AngleDegrees", "multiplier", base.from_string, fields);
                base.export_element (obj, "AngleDegrees", "unit", base.from_string, fields);
                base.export_element (obj, "AngleDegrees", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Date as "yyyy-mm-dd", which conforms with ISO 8601.
         *
         * UTC time zone is specified as "yyyy-mm-ddZ". A local timezone relative UTC is specified as "yyyy-mm-dd(+/-)hh:mm".
         *
         */
        class Date extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Date;
                if (null == bucket)
                   cim_data.Date = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Date[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Date";

                var bucket = context.parsed.Date;
                if (null == bucket)
                   context.parsed.Date = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        class DecimalQuantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DecimalQuantity;
                if (null == bucket)
                   cim_data.DecimalQuantity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DecimalQuantity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DecimalQuantity";
                base.parse_element (/<cim:DecimalQuantity.value>([\s\S]*?)<\/cim:DecimalQuantity.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_element (/<cim:DecimalQuantity.unit>([\s\S]*?)<\/cim:DecimalQuantity.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:DecimalQuantity.multiplier>([\s\S]*?)<\/cim:DecimalQuantity.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:DecimalQuantity.currency>([\s\S]*?)<\/cim:DecimalQuantity.currency>/g, obj, "currency", base.to_string, sub, context);

                var bucket = context.parsed.DecimalQuantity;
                if (null == bucket)
                   context.parsed.DecimalQuantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DecimalQuantity", "value", base.from_string, fields);
                base.export_element (obj, "DecimalQuantity", "unit", base.from_string, fields);
                base.export_element (obj, "DecimalQuantity", "multiplier", base.from_string, fields);
                base.export_element (obj, "DecimalQuantity", "currency", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Real electrical energy.
         *
         */
        class RealEnergy extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RealEnergy;
                if (null == bucket)
                   cim_data.RealEnergy = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RealEnergy[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RealEnergy";
                base.parse_element (/<cim:RealEnergy.multiplier>([\s\S]*?)<\/cim:RealEnergy.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:RealEnergy.unit>([\s\S]*?)<\/cim:RealEnergy.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:RealEnergy.value>([\s\S]*?)<\/cim:RealEnergy.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.RealEnergy;
                if (null == bucket)
                   context.parsed.RealEnergy = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RealEnergy", "multiplier", base.from_string, fields);
                base.export_element (obj, "RealEnergy", "unit", base.from_string, fields);
                base.export_element (obj, "RealEnergy", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Decimal is the base-10 notational system for representing real numbers.
         *
         */
        class Decimal extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Decimal;
                if (null == bucket)
                   cim_data.Decimal = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Decimal[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Decimal";

                var bucket = context.parsed.Decimal;
                if (null == bucket)
                   context.parsed.Decimal = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Unit of length.
         *
         * Never negative.
         *
         */
        class Length extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Length;
                if (null == bucket)
                   cim_data.Length = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Length[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Length";
                base.parse_element (/<cim:Length.multiplier>([\s\S]*?)<\/cim:Length.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Length.unit>([\s\S]*?)<\/cim:Length.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Length.value>([\s\S]*?)<\/cim:Length.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Length;
                if (null == bucket)
                   context.parsed.Length = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Length", "multiplier", base.from_string, fields);
                base.export_element (obj, "Length", "unit", base.from_string, fields);
                base.export_element (obj, "Length", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Value of temperature in degrees Celsius.
         *
         */
        class Temperature extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Temperature;
                if (null == bucket)
                   cim_data.Temperature = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Temperature[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Temperature";
                base.parse_element (/<cim:Temperature.multiplier>([\s\S]*?)<\/cim:Temperature.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Temperature.unit>([\s\S]*?)<\/cim:Temperature.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Temperature.value>([\s\S]*?)<\/cim:Temperature.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Temperature;
                if (null == bucket)
                   context.parsed.Temperature = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Temperature", "multiplier", base.from_string, fields);
                base.export_element (obj, "Temperature", "unit", base.from_string, fields);
                base.export_element (obj, "Temperature", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Quantity with float value and associated unit information.
         *
         */
        class FloatQuantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.FloatQuantity;
                if (null == bucket)
                   cim_data.FloatQuantity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.FloatQuantity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FloatQuantity";
                base.parse_element (/<cim:FloatQuantity.multiplier>([\s\S]*?)<\/cim:FloatQuantity.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:FloatQuantity.unit>([\s\S]*?)<\/cim:FloatQuantity.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:FloatQuantity.value>([\s\S]*?)<\/cim:FloatQuantity.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.FloatQuantity;
                if (null == bucket)
                   context.parsed.FloatQuantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "FloatQuantity", "multiplier", base.from_string, fields);
                base.export_element (obj, "FloatQuantity", "unit", base.from_string, fields);
                base.export_element (obj, "FloatQuantity", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Imaginary part of admittance.
         *
         */
        class Susceptance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Susceptance;
                if (null == bucket)
                   cim_data.Susceptance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Susceptance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Susceptance";
                base.parse_element (/<cim:Susceptance.multiplier>([\s\S]*?)<\/cim:Susceptance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Susceptance.unit>([\s\S]*?)<\/cim:Susceptance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Susceptance.value>([\s\S]*?)<\/cim:Susceptance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Susceptance;
                if (null == bucket)
                   context.parsed.Susceptance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Susceptance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Susceptance", "unit", base.from_string, fields);
                base.export_element (obj, "Susceptance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Cycles per second.
         *
         */
        class Frequency extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Frequency;
                if (null == bucket)
                   cim_data.Frequency = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Frequency[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Frequency";
                base.parse_element (/<cim:Frequency.multiplier>([\s\S]*?)<\/cim:Frequency.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Frequency.unit>([\s\S]*?)<\/cim:Frequency.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Frequency.value>([\s\S]*?)<\/cim:Frequency.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Frequency;
                if (null == bucket)
                   context.parsed.Frequency = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Frequency", "multiplier", base.from_string, fields);
                base.export_element (obj, "Frequency", "unit", base.from_string, fields);
                base.export_element (obj, "Frequency", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Area.
         *
         */
        class Area extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Area;
                if (null == bucket)
                   cim_data.Area = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Area[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Area";
                base.parse_element (/<cim:Area.value>([\s\S]*?)<\/cim:Area.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_element (/<cim:Area.unit>([\s\S]*?)<\/cim:Area.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Area.multiplier>([\s\S]*?)<\/cim:Area.multiplier>/g, obj, "multiplier", base.to_string, sub, context);

                var bucket = context.parsed.Area;
                if (null == bucket)
                   context.parsed.Area = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Area", "value", base.from_float, fields);
                base.export_element (obj, "Area", "unit", base.from_string, fields);
                base.export_element (obj, "Area", "multiplier", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Time in minutes.
         *
         */
        class Minutes extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Minutes;
                if (null == bucket)
                   cim_data.Minutes = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Minutes[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Minutes";
                base.parse_element (/<cim:Minutes.multiplier>([\s\S]*?)<\/cim:Minutes.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Minutes.unit>([\s\S]*?)<\/cim:Minutes.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Minutes.value>([\s\S]*?)<\/cim:Minutes.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Minutes;
                if (null == bucket)
                   context.parsed.Minutes = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Minutes", "multiplier", base.from_string, fields);
                base.export_element (obj, "Minutes", "unit", base.from_string, fields);
                base.export_element (obj, "Minutes", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Interval between two dates.
         *
         */
        class DateInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.DateInterval;
                if (null == bucket)
                   cim_data.DateInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.DateInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DateInterval";
                base.parse_element (/<cim:DateInterval.end>([\s\S]*?)<\/cim:DateInterval.end>/g, obj, "end", base.to_string, sub, context);
                base.parse_element (/<cim:DateInterval.start>([\s\S]*?)<\/cim:DateInterval.start>/g, obj, "start", base.to_string, sub, context);

                var bucket = context.parsed.DateInterval;
                if (null == bucket)
                   context.parsed.DateInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DateInterval", "end", base.from_string, fields);
                base.export_element (obj, "DateInterval", "start", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Voltage variation with reactive power.
         *
         */
        class VoltagePerReactivePower extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.VoltagePerReactivePower;
                if (null == bucket)
                   cim_data.VoltagePerReactivePower = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.VoltagePerReactivePower[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VoltagePerReactivePower";
                base.parse_element (/<cim:VoltagePerReactivePower.denominatorMultiplier>([\s\S]*?)<\/cim:VoltagePerReactivePower.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:VoltagePerReactivePower.denominatorUnit>([\s\S]*?)<\/cim:VoltagePerReactivePower.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:VoltagePerReactivePower.multiplier>([\s\S]*?)<\/cim:VoltagePerReactivePower.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:VoltagePerReactivePower.unit>([\s\S]*?)<\/cim:VoltagePerReactivePower.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:VoltagePerReactivePower.value>([\s\S]*?)<\/cim:VoltagePerReactivePower.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.VoltagePerReactivePower;
                if (null == bucket)
                   context.parsed.VoltagePerReactivePower = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "VoltagePerReactivePower", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "VoltagePerReactivePower", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "VoltagePerReactivePower", "multiplier", base.from_string, fields);
                base.export_element (obj, "VoltagePerReactivePower", "unit", base.from_string, fields);
                base.export_element (obj, "VoltagePerReactivePower", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Time specified in hours.
         *
         */
        class Hours extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Hours;
                if (null == bucket)
                   cim_data.Hours = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Hours[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Hours";
                base.parse_element (/<cim:Hours.multiplier>([\s\S]*?)<\/cim:Hours.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Hours.unit>([\s\S]*?)<\/cim:Hours.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Hours.value>([\s\S]*?)<\/cim:Hours.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Hours;
                if (null == bucket)
                   context.parsed.Hours = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Hours", "multiplier", base.from_string, fields);
                base.export_element (obj, "Hours", "unit", base.from_string, fields);
                base.export_element (obj, "Hours", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Distance per unit of time.
         *
         */
        class Speed extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Speed;
                if (null == bucket)
                   cim_data.Speed = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Speed[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Speed";
                base.parse_element (/<cim:Speed.denominatorMultiplier>([\s\S]*?)<\/cim:Speed.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Speed.denominatorUnit>([\s\S]*?)<\/cim:Speed.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:Speed.multiplier>([\s\S]*?)<\/cim:Speed.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Speed.unit>([\s\S]*?)<\/cim:Speed.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Speed.value>([\s\S]*?)<\/cim:Speed.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Speed;
                if (null == bucket)
                   context.parsed.Speed = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Speed", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "Speed", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "Speed", "multiplier", base.from_string, fields);
                base.export_element (obj, "Speed", "unit", base.from_string, fields);
                base.export_element (obj, "Speed", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Unit of displacement relative a reference position, hence can be negative.
         *
         */
        class Displacement extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Displacement;
                if (null == bucket)
                   cim_data.Displacement = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Displacement[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Displacement";
                base.parse_element (/<cim:Displacement.multiplier>([\s\S]*?)<\/cim:Displacement.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Displacement.unit>([\s\S]*?)<\/cim:Displacement.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Displacement.value>([\s\S]*?)<\/cim:Displacement.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Displacement;
                if (null == bucket)
                   context.parsed.Displacement = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Displacement", "multiplier", base.from_string, fields);
                base.export_element (obj, "Displacement", "unit", base.from_string, fields);
                base.export_element (obj, "Displacement", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A string consisting of a sequence of characters.
         *
         * The character encoding is UTF-8. The string length is unspecified and unlimited.
         *
         */
        class String extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.String;
                if (null == bucket)
                   cim_data.String = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.String[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "String";

                var bucket = context.parsed.String;
                if (null == bucket)
                   context.parsed.String = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The units defined for usage in the CIM.
         *
         */
        class UnitSymbol extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.UnitSymbol;
                if (null == bucket)
                   cim_data.UnitSymbol = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.UnitSymbol[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "UnitSymbol";
                base.parse_element (/<cim:UnitSymbol.VA>([\s\S]*?)<\/cim:UnitSymbol.VA>/g, obj, "VA", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.W>([\s\S]*?)<\/cim:UnitSymbol.W>/g, obj, "W", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.VAr>([\s\S]*?)<\/cim:UnitSymbol.VAr>/g, obj, "VAr", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.VAh>([\s\S]*?)<\/cim:UnitSymbol.VAh>/g, obj, "VAh", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.Wh>([\s\S]*?)<\/cim:UnitSymbol.Wh>/g, obj, "Wh", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.VArh>([\s\S]*?)<\/cim:UnitSymbol.VArh>/g, obj, "VArh", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.V>([\s\S]*?)<\/cim:UnitSymbol.V>/g, obj, "V", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.ohm>([\s\S]*?)<\/cim:UnitSymbol.ohm>/g, obj, "ohm", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.A>([\s\S]*?)<\/cim:UnitSymbol.A>/g, obj, "A", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.F>([\s\S]*?)<\/cim:UnitSymbol.F>/g, obj, "F", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.H>([\s\S]*?)<\/cim:UnitSymbol.H>/g, obj, "H", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.degC>([\s\S]*?)<\/cim:UnitSymbol.degC>/g, obj, "degC", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.s>([\s\S]*?)<\/cim:UnitSymbol.s>/g, obj, "s", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.min>([\s\S]*?)<\/cim:UnitSymbol.min>/g, obj, "min", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.h>([\s\S]*?)<\/cim:UnitSymbol.h>/g, obj, "h", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.deg>([\s\S]*?)<\/cim:UnitSymbol.deg>/g, obj, "deg", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.rad>([\s\S]*?)<\/cim:UnitSymbol.rad>/g, obj, "rad", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.J>([\s\S]*?)<\/cim:UnitSymbol.J>/g, obj, "J", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.N>([\s\S]*?)<\/cim:UnitSymbol.N>/g, obj, "N", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.S>([\s\S]*?)<\/cim:UnitSymbol.S>/g, obj, "S", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.none>([\s\S]*?)<\/cim:UnitSymbol.none>/g, obj, "none", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.Hz>([\s\S]*?)<\/cim:UnitSymbol.Hz>/g, obj, "Hz", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.g>([\s\S]*?)<\/cim:UnitSymbol.g>/g, obj, "g", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.Pa>([\s\S]*?)<\/cim:UnitSymbol.Pa>/g, obj, "Pa", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.m>([\s\S]*?)<\/cim:UnitSymbol.m>/g, obj, "m", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.m2>([\s\S]*?)<\/cim:UnitSymbol.m2>/g, obj, "m2", base.to_string, sub, context);
                base.parse_element (/<cim:UnitSymbol.m3>([\s\S]*?)<\/cim:UnitSymbol.m3>/g, obj, "m3", base.to_string, sub, context);

                var bucket = context.parsed.UnitSymbol;
                if (null == bucket)
                   context.parsed.UnitSymbol = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "UnitSymbol", "VA", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "W", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "VAr", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "VAh", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "Wh", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "VArh", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "V", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "ohm", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "A", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "F", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "H", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "degC", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "s", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "min", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "h", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "deg", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "rad", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "J", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "N", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "S", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "none", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "Hz", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "g", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "Pa", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "m", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "m2", base.from_string, fields);
                base.export_element (obj, "UnitSymbol", "m3", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Number of revolutions per second.
         *
         */
        class RotationSpeed extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.RotationSpeed;
                if (null == bucket)
                   cim_data.RotationSpeed = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.RotationSpeed[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RotationSpeed";
                base.parse_element (/<cim:RotationSpeed.denominatorMultiplier>([\s\S]*?)<\/cim:RotationSpeed.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:RotationSpeed.denominatorUnit>([\s\S]*?)<\/cim:RotationSpeed.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:RotationSpeed.multiplier>([\s\S]*?)<\/cim:RotationSpeed.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:RotationSpeed.unit>([\s\S]*?)<\/cim:RotationSpeed.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:RotationSpeed.value>([\s\S]*?)<\/cim:RotationSpeed.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.RotationSpeed;
                if (null == bucket)
                   context.parsed.RotationSpeed = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "RotationSpeed", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "RotationSpeed", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "RotationSpeed", "multiplier", base.from_string, fields);
                base.export_element (obj, "RotationSpeed", "unit", base.from_string, fields);
                base.export_element (obj, "RotationSpeed", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Resistance (real part of impedance).
         *
         */
        class Resistance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Resistance;
                if (null == bucket)
                   cim_data.Resistance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Resistance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Resistance";
                base.parse_element (/<cim:Resistance.multiplier>([\s\S]*?)<\/cim:Resistance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Resistance.unit>([\s\S]*?)<\/cim:Resistance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Resistance.value>([\s\S]*?)<\/cim:Resistance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Resistance;
                if (null == bucket)
                   context.parsed.Resistance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Resistance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Resistance", "unit", base.from_string, fields);
                base.export_element (obj, "Resistance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The weight of an object.
         *
         */
        class Weight extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Weight;
                if (null == bucket)
                   cim_data.Weight = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Weight[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Weight";
                base.parse_element (/<cim:Weight.multiplier>([\s\S]*?)<\/cim:Weight.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Weight.unit>([\s\S]*?)<\/cim:Weight.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Weight.value>([\s\S]*?)<\/cim:Weight.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Weight;
                if (null == bucket)
                   context.parsed.Weight = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Weight", "multiplier", base.from_string, fields);
                base.export_element (obj, "Weight", "unit", base.from_string, fields);
                base.export_element (obj, "Weight", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Pressure in Pascal.
         *
         */
        class Pressure extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Pressure;
                if (null == bucket)
                   cim_data.Pressure = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Pressure[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Pressure";
                base.parse_element (/<cim:Pressure.multiplier>([\s\S]*?)<\/cim:Pressure.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Pressure.unit>([\s\S]*?)<\/cim:Pressure.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Pressure.value>([\s\S]*?)<\/cim:Pressure.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Pressure;
                if (null == bucket)
                   context.parsed.Pressure = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Pressure", "multiplier", base.from_string, fields);
                base.export_element (obj, "Pressure", "unit", base.from_string, fields);
                base.export_element (obj, "Pressure", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Real part of admittance per unit of length.
         *
         */
        class ConductancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConductancePerLength;
                if (null == bucket)
                   cim_data.ConductancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConductancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConductancePerLength";
                base.parse_element (/<cim:ConductancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:ConductancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ConductancePerLength.denominatorUnit>([\s\S]*?)<\/cim:ConductancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:ConductancePerLength.multiplier>([\s\S]*?)<\/cim:ConductancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:ConductancePerLength.unit>([\s\S]*?)<\/cim:ConductancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:ConductancePerLength.value>([\s\S]*?)<\/cim:ConductancePerLength.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.ConductancePerLength;
                if (null == bucket)
                   context.parsed.ConductancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "ConductancePerLength", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "ConductancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "ConductancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "ConductancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "ConductancePerLength", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * A type with the value space "true" and "false".
         *
         */
        class Boolean extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Boolean;
                if (null == bucket)
                   cim_data.Boolean = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Boolean[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Boolean";

                var bucket = context.parsed.Boolean;
                if (null == bucket)
                   context.parsed.Boolean = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Imaginary part of admittance per unit of length.
         *
         */
        class SusceptancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.SusceptancePerLength;
                if (null == bucket)
                   cim_data.SusceptancePerLength = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.SusceptancePerLength[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SusceptancePerLength";
                base.parse_element (/<cim:SusceptancePerLength.denominatorMultiplier>([\s\S]*?)<\/cim:SusceptancePerLength.denominatorMultiplier>/g, obj, "denominatorMultiplier", base.to_string, sub, context);
                base.parse_element (/<cim:SusceptancePerLength.denominatorUnit>([\s\S]*?)<\/cim:SusceptancePerLength.denominatorUnit>/g, obj, "denominatorUnit", base.to_string, sub, context);
                base.parse_element (/<cim:SusceptancePerLength.multiplier>([\s\S]*?)<\/cim:SusceptancePerLength.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:SusceptancePerLength.unit>([\s\S]*?)<\/cim:SusceptancePerLength.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:SusceptancePerLength.value>([\s\S]*?)<\/cim:SusceptancePerLength.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.SusceptancePerLength;
                if (null == bucket)
                   context.parsed.SusceptancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "SusceptancePerLength", "denominatorMultiplier", base.from_string, fields);
                base.export_element (obj, "SusceptancePerLength", "denominatorUnit", base.from_string, fields);
                base.export_element (obj, "SusceptancePerLength", "multiplier", base.from_string, fields);
                base.export_element (obj, "SusceptancePerLength", "unit", base.from_string, fields);
                base.export_element (obj, "SusceptancePerLength", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Quantity with string value (when it is not important whether it is an integral or a floating point number) and associated unit information.
         *
         */
        class StringQuantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StringQuantity;
                if (null == bucket)
                   cim_data.StringQuantity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StringQuantity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StringQuantity";
                base.parse_element (/<cim:StringQuantity.multiplier>([\s\S]*?)<\/cim:StringQuantity.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:StringQuantity.unit>([\s\S]*?)<\/cim:StringQuantity.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:StringQuantity.value>([\s\S]*?)<\/cim:StringQuantity.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.StringQuantity;
                if (null == bucket)
                   context.parsed.StringQuantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "StringQuantity", "multiplier", base.from_string, fields);
                base.export_element (obj, "StringQuantity", "unit", base.from_string, fields);
                base.export_element (obj, "StringQuantity", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Quantity with integer value and associated unit information.
         *
         */
        class IntegerQuantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.IntegerQuantity;
                if (null == bucket)
                   cim_data.IntegerQuantity = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.IntegerQuantity[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IntegerQuantity";
                base.parse_element (/<cim:IntegerQuantity.multiplier>([\s\S]*?)<\/cim:IntegerQuantity.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:IntegerQuantity.unit>([\s\S]*?)<\/cim:IntegerQuantity.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:IntegerQuantity.value>([\s\S]*?)<\/cim:IntegerQuantity.value>/g, obj, "value", base.to_string, sub, context);

                var bucket = context.parsed.IntegerQuantity;
                if (null == bucket)
                   context.parsed.IntegerQuantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "IntegerQuantity", "multiplier", base.from_string, fields);
                base.export_element (obj, "IntegerQuantity", "unit", base.from_string, fields);
                base.export_element (obj, "IntegerQuantity", "value", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Interval between two times.
         *
         */
        class TimeInterval extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.TimeInterval;
                if (null == bucket)
                   cim_data.TimeInterval = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.TimeInterval[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "TimeInterval";
                base.parse_element (/<cim:TimeInterval.end>([\s\S]*?)<\/cim:TimeInterval.end>/g, obj, "end", base.to_string, sub, context);
                base.parse_element (/<cim:TimeInterval.start>([\s\S]*?)<\/cim:TimeInterval.start>/g, obj, "start", base.to_string, sub, context);

                var bucket = context.parsed.TimeInterval;
                if (null == bucket)
                   context.parsed.TimeInterval = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "TimeInterval", "end", base.from_string, fields);
                base.export_element (obj, "TimeInterval", "start", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Inductive part of reactance (imaginary part of impedance), at rated frequency.
         *
         */
        class Inductance extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.Inductance;
                if (null == bucket)
                   cim_data.Inductance = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.Inductance[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Inductance";
                base.parse_element (/<cim:Inductance.multiplier>([\s\S]*?)<\/cim:Inductance.multiplier>/g, obj, "multiplier", base.to_string, sub, context);
                base.parse_element (/<cim:Inductance.unit>([\s\S]*?)<\/cim:Inductance.unit>/g, obj, "unit", base.to_string, sub, context);
                base.parse_element (/<cim:Inductance.value>([\s\S]*?)<\/cim:Inductance.value>/g, obj, "value", base.to_float, sub, context);

                var bucket = context.parsed.Inductance;
                if (null == bucket)
                   context.parsed.Inductance = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Inductance", "multiplier", base.from_string, fields);
                base.export_element (obj, "Inductance", "unit", base.from_string, fields);
                base.export_element (obj, "Inductance", "value", base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                Minutes: Minutes,
                ReactancePerLength: ReactancePerLength,
                UnitMultiplier: UnitMultiplier,
                ResistancePerLength: ResistancePerLength,
                CostRate: CostRate,
                String: String,
                MonthDayInterval: MonthDayInterval,
                Temperature: Temperature,
                Capacitance: Capacitance,
                AngleRadians: AngleRadians,
                PerCent: PerCent,
                Resistance: Resistance,
                Area: Area,
                Duration: Duration,
                IntegerQuantity: IntegerQuantity,
                Reactance: Reactance,
                Seconds: Seconds,
                Susceptance: Susceptance,
                AngleDegrees: AngleDegrees,
                Displacement: Displacement,
                MonthDay: MonthDay,
                Currency: Currency,
                Integer: Integer,
                SusceptancePerLength: SusceptancePerLength,
                ReactivePower: ReactivePower,
                Admittance: Admittance,
                WaterLevel: WaterLevel,
                DecimalQuantity: DecimalQuantity,
                Money: Money,
                Weight: Weight,
                RealEnergy: RealEnergy,
                KiloActivePower: KiloActivePower,
                FloatQuantity: FloatQuantity,
                Pressure: Pressure,
                Volume: Volume,
                Decimal: Decimal,
                DateTimeInterval: DateTimeInterval,
                ActivePower: ActivePower,
                ActivePowerPerFrequency: ActivePowerPerFrequency,
                CurrentFlow: CurrentFlow,
                UnitSymbol: UnitSymbol,
                DateTime: DateTime,
                PU: PU,
                Voltage: Voltage,
                DateInterval: DateInterval,
                CostPerVolume: CostPerVolume,
                ActivePowerChangeRate: ActivePowerChangeRate,
                StringQuantity: StringQuantity,
                Boolean: Boolean,
                ActivePowerPerCurrentFlow: ActivePowerPerCurrentFlow,
                VoltagePerReactivePower: VoltagePerReactivePower,
                CostPerEnergyUnit: CostPerEnergyUnit,
                Impedance: Impedance,
                Hours: Hours,
                TimeInterval: TimeInterval,
                InductancePerLength: InductancePerLength,
                Inductance: Inductance,
                Length: Length,
                ApparentPower: ApparentPower,
                Conductance: Conductance,
                Speed: Speed,
                Damping: Damping,
                VolumeFlowRate: VolumeFlowRate,
                Time: Time,
                Date: Date,
                CapacitancePerLength: CapacitancePerLength,
                RotationSpeed: RotationSpeed,
                Frequency: Frequency,
                ConductancePerLength: ConductancePerLength,
                Float: Float
            }
        );
    }
);