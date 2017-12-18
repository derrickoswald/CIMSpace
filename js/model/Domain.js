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
         * The unit multipliers defined for the CIM.
         *
         */
        var UnitMultiplier =
        {
            p: "p",
            n: "n",
            micro: "micro",
            m: "m",
            c: "c",
            d: "d",
            k: "k",
            M: "M",
            G: "G",
            T: "T",
            none: "none"
        };
        Object.freeze (UnitMultiplier);

        /**
         * Monetary currencies.
         *
         * Apologies for this list not being exhaustive.
         *
         */
        var Currency =
        {
            USD: "USD",
            EUR: "EUR",
            AUD: "AUD",
            CAD: "CAD",
            CHF: "CHF",
            CNY: "CNY",
            DKK: "DKK",
            GBP: "GBP",
            JPY: "JPY",
            NOK: "NOK",
            RUR: "RUR",
            SEK: "SEK",
            INR: "INR",
            other: "other"
        };
        Object.freeze (Currency);

        /**
         * The units defined for usage in the CIM.
         *
         */
        var UnitSymbol =
        {
            VA: "VA",
            W: "W",
            VAr: "VAr",
            VAh: "VAh",
            Wh: "Wh",
            VArh: "VArh",
            V: "V",
            ohm: "ohm",
            A: "A",
            F: "F",
            H: "H",
            degC: "degC",
            s: "s",
            min: "min",
            h: "h",
            deg: "deg",
            rad: "rad",
            J: "J",
            N: "N",
            S: "S",
            none: "none",
            Hz: "Hz",
            g: "g",
            Pa: "Pa",
            m: "m",
            m2: "m2",
            m3: "m3"
        };
        Object.freeze (UnitSymbol);

        /**
         * Capacitance per unit of length.
         *
         */
        class CapacitancePerLength extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.CapacitancePerLength;
                if (null == bucket)
                   cim_data.CapacitancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CapacitancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CapacitancePerLength";
                base.parse_element (/<cim:CapacitancePerLength.value>([\s\S]*?)<\/cim:CapacitancePerLength.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:CapacitancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_attribute (/<cim:CapacitancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:CapacitancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:CapacitancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                var bucket = context.parsed.CapacitancePerLength;
                if (null == bucket)
                   context.parsed.CapacitancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CapacitancePerLength", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "CapacitancePerLength", "unit", "unit", fields);
                base.export_attribute (obj, "CapacitancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "CapacitancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "CapacitancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CapacitancePerLength_collapse" aria-expanded="true" aria-controls="CapacitancePerLength_collapse" style="margin-left: 10px;">CapacitancePerLength</a></legend>
                    <div id="CapacitancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CapacitancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_CapacitancePerLength_collapse" style="margin-left: 10px;">CapacitancePerLength</a></legend>
                    <div id="{{id}}_CapacitancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CapacitancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }

                return (obj);
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
                var bucket = cim_data.CostPerVolume;
                if (null == bucket)
                   cim_data.CostPerVolume = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CostPerVolume[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostPerVolume";
                base.parse_element (/<cim:CostPerVolume.value>([\s\S]*?)<\/cim:CostPerVolume.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:CostPerVolume.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:CostPerVolume.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:CostPerVolume.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:CostPerVolume.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                var bucket = context.parsed.CostPerVolume;
                if (null == bucket)
                   context.parsed.CostPerVolume = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "CostPerVolume", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "CostPerVolume", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "CostPerVolume", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "CostPerVolume", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "CostPerVolume", "unit", "unit", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostPerVolume_collapse" aria-expanded="true" aria-controls="CostPerVolume_collapse" style="margin-left: 10px;">CostPerVolume</a></legend>
                    <div id="CostPerVolume_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
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
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.Currency = []; if (!obj.unit) obj.Currency.push ({ id: '', selected: true}); for (var property in Currency) obj.Currency.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.Currency;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CostPerVolume_collapse" aria-expanded="true" aria-controls="{{id}}_CostPerVolume_collapse" style="margin-left: 10px;">CostPerVolume</a></legend>
                    <div id="{{id}}_CostPerVolume_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#Currency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Currency}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CostPerVolume" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = Currency[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; }

                return (obj);
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
                var bucket = cim_data.Float;
                if (null == bucket)
                   cim_data.Float = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Float[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Float_collapse" aria-expanded="true" aria-controls="Float_collapse" style="margin-left: 10px;">Float</a></legend>
                    <div id="Float_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Float_collapse" aria-expanded="true" aria-controls="{{id}}_Float_collapse" style="margin-left: 10px;">Float</a></legend>
                    <div id="{{id}}_Float_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Float" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.ReactivePower;
                if (null == bucket)
                   cim_data.ReactivePower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReactivePower[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReactivePower";
                base.parse_attribute (/<cim:ReactivePower.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ReactivePower.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ReactivePower", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ReactivePower", "unit", "unit", fields);
                base.export_element (obj, "ReactivePower", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReactivePower_collapse" aria-expanded="true" aria-controls="ReactivePower_collapse" style="margin-left: 10px;">ReactivePower</a></legend>
                    <div id="ReactivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReactivePower_collapse" aria-expanded="true" aria-controls="{{id}}_ReactivePower_collapse" style="margin-left: 10px;">ReactivePower</a></legend>
                    <div id="{{id}}_ReactivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReactivePower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.MonthDayInterval;
                if (null == bucket)
                   cim_data.MonthDayInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MonthDayInterval[obj.id];
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

                base.export_element (obj, "MonthDayInterval", "end", "end",  base.from_string, fields);
                base.export_element (obj, "MonthDayInterval", "start", "start",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MonthDayInterval_collapse" aria-expanded="true" aria-controls="MonthDayInterval_collapse" style="margin-left: 10px;">MonthDayInterval</a></legend>
                    <div id="MonthDayInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
                    {{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MonthDayInterval_collapse" aria-expanded="true" aria-controls="{{id}}_MonthDayInterval_collapse" style="margin-left: 10px;">MonthDayInterval</a></legend>
                    <div id="{{id}}_MonthDayInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "MonthDayInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById (id + "_start").value; if ("" != temp) obj.start = temp;

                return (obj);
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
                var bucket = cim_data.Reactance;
                if (null == bucket)
                   cim_data.Reactance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Reactance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Reactance";
                base.parse_attribute (/<cim:Reactance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Reactance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Reactance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Reactance", "unit", "unit", fields);
                base.export_element (obj, "Reactance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Reactance_collapse" aria-expanded="true" aria-controls="Reactance_collapse" style="margin-left: 10px;">Reactance</a></legend>
                    <div id="Reactance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Reactance_collapse" aria-expanded="true" aria-controls="{{id}}_Reactance_collapse" style="margin-left: 10px;">Reactance</a></legend>
                    <div id="{{id}}_Reactance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Reactance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ResistancePerLength;
                if (null == bucket)
                   cim_data.ResistancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ResistancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ResistancePerLength";
                base.parse_attribute (/<cim:ResistancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:ResistancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:ResistancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ResistancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ResistancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "ResistancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "ResistancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ResistancePerLength", "unit", "unit", fields);
                base.export_element (obj, "ResistancePerLength", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ResistancePerLength_collapse" aria-expanded="true" aria-controls="ResistancePerLength_collapse" style="margin-left: 10px;">ResistancePerLength</a></legend>
                    <div id="ResistancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ResistancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_ResistancePerLength_collapse" style="margin-left: 10px;">ResistancePerLength</a></legend>
                    <div id="{{id}}_ResistancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ResistancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.AngleRadians;
                if (null == bucket)
                   cim_data.AngleRadians = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AngleRadians[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AngleRadians";
                base.parse_attribute (/<cim:AngleRadians.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:AngleRadians.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "AngleRadians", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "AngleRadians", "unit", "unit", fields);
                base.export_element (obj, "AngleRadians", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AngleRadians_collapse" aria-expanded="true" aria-controls="AngleRadians_collapse" style="margin-left: 10px;">AngleRadians</a></legend>
                    <div id="AngleRadians_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AngleRadians_collapse" aria-expanded="true" aria-controls="{{id}}_AngleRadians_collapse" style="margin-left: 10px;">AngleRadians</a></legend>
                    <div id="{{id}}_AngleRadians_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AngleRadians" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Voltage;
                if (null == bucket)
                   cim_data.Voltage = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Voltage[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Voltage";
                base.parse_attribute (/<cim:Voltage.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Voltage.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Voltage", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Voltage", "unit", "unit", fields);
                base.export_element (obj, "Voltage", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Voltage_collapse" aria-expanded="true" aria-controls="Voltage_collapse" style="margin-left: 10px;">Voltage</a></legend>
                    <div id="Voltage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Voltage_collapse" aria-expanded="true" aria-controls="{{id}}_Voltage_collapse" style="margin-left: 10px;">Voltage</a></legend>
                    <div id="{{id}}_Voltage_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Voltage" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ActivePowerChangeRate;
                if (null == bucket)
                   cim_data.ActivePowerChangeRate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivePowerChangeRate[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerChangeRate";
                base.parse_attribute (/<cim:ActivePowerChangeRate.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:ActivePowerChangeRate.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:ActivePowerChangeRate.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ActivePowerChangeRate.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ActivePowerChangeRate", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "ActivePowerChangeRate", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "ActivePowerChangeRate", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ActivePowerChangeRate", "unit", "unit", fields);
                base.export_element (obj, "ActivePowerChangeRate", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePowerChangeRate_collapse" aria-expanded="true" aria-controls="ActivePowerChangeRate_collapse" style="margin-left: 10px;">ActivePowerChangeRate</a></legend>
                    <div id="ActivePowerChangeRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ActivePowerChangeRate_collapse" aria-expanded="true" aria-controls="{{id}}_ActivePowerChangeRate_collapse" style="margin-left: 10px;">ActivePowerChangeRate</a></legend>
                    <div id="{{id}}_ActivePowerChangeRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivePowerChangeRate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        class ActivePowerPerCurrentFlow extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.ActivePowerPerCurrentFlow;
                if (null == bucket)
                   cim_data.ActivePowerPerCurrentFlow = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivePowerPerCurrentFlow[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerPerCurrentFlow";
                base.parse_attribute (/<cim:ActivePowerPerCurrentFlow.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ActivePowerPerCurrentFlow.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_element (/<cim:ActivePowerPerCurrentFlow.value>([\s\S]*?)<\/cim:ActivePowerPerCurrentFlow.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:ActivePowerPerCurrentFlow.demoninatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "demoninatorUnit", sub, context);
                base.parse_attribute (/<cim:ActivePowerPerCurrentFlow.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                var bucket = context.parsed.ActivePowerPerCurrentFlow;
                if (null == bucket)
                   context.parsed.ActivePowerPerCurrentFlow = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_attribute (obj, "ActivePowerPerCurrentFlow", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ActivePowerPerCurrentFlow", "unit", "unit", fields);
                base.export_element (obj, "ActivePowerPerCurrentFlow", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "ActivePowerPerCurrentFlow", "demoninatorUnit", "demoninatorUnit", fields);
                base.export_attribute (obj, "ActivePowerPerCurrentFlow", "denominatorMultiplier", "denominatorMultiplier", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePowerPerCurrentFlow_collapse" aria-expanded="true" aria-controls="ActivePowerPerCurrentFlow_collapse" style="margin-left: 10px;">ActivePowerPerCurrentFlow</a></legend>
                    <div id="ActivePowerPerCurrentFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#demoninatorUnit}}<div><b>demoninatorUnit</b>: {{demoninatorUnit}}</div>{{/demoninatorUnit}}
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.demoninatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.demoninatorUnit && obj.demoninatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ActivePowerPerCurrentFlow_collapse" aria-expanded="true" aria-controls="{{id}}_ActivePowerPerCurrentFlow_collapse" style="margin-left: 10px;">ActivePowerPerCurrentFlow</a></legend>
                    <div id="{{id}}_ActivePowerPerCurrentFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_demoninatorUnit'>demoninatorUnit: </label><div class='col-sm-8'><select id='{{id}}_demoninatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivePowerPerCurrentFlow" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_demoninatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.demoninatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }

                return (obj);
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
                var bucket = cim_data.CostRate;
                if (null == bucket)
                   cim_data.CostRate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CostRate[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostRate";
                base.parse_attribute (/<cim:CostRate.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:CostRate.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:CostRate.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:CostRate.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "CostRate", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "CostRate", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "CostRate", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "CostRate", "unit", "unit", fields);
                base.export_element (obj, "CostRate", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostRate_collapse" aria-expanded="true" aria-controls="CostRate_collapse" style="margin-left: 10px;">CostRate</a></legend>
                    <div id="CostRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.Currency = []; if (!obj.unit) obj.Currency.push ({ id: '', selected: true}); for (var property in Currency) obj.Currency.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.Currency;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CostRate_collapse" aria-expanded="true" aria-controls="{{id}}_CostRate_collapse" style="margin-left: 10px;">CostRate</a></legend>
                    <div id="{{id}}_CostRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#Currency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Currency}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CostRate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = Currency[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.WaterLevel;
                if (null == bucket)
                   cim_data.WaterLevel = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.WaterLevel[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WaterLevel";
                base.parse_attribute (/<cim:WaterLevel.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:WaterLevel.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "WaterLevel", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "WaterLevel", "unit", "unit", fields);
                base.export_element (obj, "WaterLevel", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#WaterLevel_collapse" aria-expanded="true" aria-controls="WaterLevel_collapse" style="margin-left: 10px;">WaterLevel</a></legend>
                    <div id="WaterLevel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_WaterLevel_collapse" aria-expanded="true" aria-controls="{{id}}_WaterLevel_collapse" style="margin-left: 10px;">WaterLevel</a></legend>
                    <div id="{{id}}_WaterLevel_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "WaterLevel" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Integer;
                if (null == bucket)
                   cim_data.Integer = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Integer[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Integer_collapse" aria-expanded="true" aria-controls="Integer_collapse" style="margin-left: 10px;">Integer</a></legend>
                    <div id="Integer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Integer_collapse" aria-expanded="true" aria-controls="{{id}}_Integer_collapse" style="margin-left: 10px;">Integer</a></legend>
                    <div id="{{id}}_Integer_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Integer" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.Admittance;
                if (null == bucket)
                   cim_data.Admittance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Admittance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Admittance";
                base.parse_attribute (/<cim:Admittance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Admittance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Admittance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Admittance", "unit", "unit", fields);
                base.export_element (obj, "Admittance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Admittance_collapse" aria-expanded="true" aria-controls="Admittance_collapse" style="margin-left: 10px;">Admittance</a></legend>
                    <div id="Admittance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Admittance_collapse" aria-expanded="true" aria-controls="{{id}}_Admittance_collapse" style="margin-left: 10px;">Admittance</a></legend>
                    <div id="{{id}}_Admittance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Admittance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.CostPerEnergyUnit;
                if (null == bucket)
                   cim_data.CostPerEnergyUnit = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CostPerEnergyUnit[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CostPerEnergyUnit";
                base.parse_attribute (/<cim:CostPerEnergyUnit.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:CostPerEnergyUnit.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:CostPerEnergyUnit.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:CostPerEnergyUnit.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "CostPerEnergyUnit", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "CostPerEnergyUnit", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "CostPerEnergyUnit", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "CostPerEnergyUnit", "unit", "unit", fields);
                base.export_element (obj, "CostPerEnergyUnit", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CostPerEnergyUnit_collapse" aria-expanded="true" aria-controls="CostPerEnergyUnit_collapse" style="margin-left: 10px;">CostPerEnergyUnit</a></legend>
                    <div id="CostPerEnergyUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.Currency = []; if (!obj.unit) obj.Currency.push ({ id: '', selected: true}); for (var property in Currency) obj.Currency.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.Currency;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CostPerEnergyUnit_collapse" aria-expanded="true" aria-controls="{{id}}_CostPerEnergyUnit_collapse" style="margin-left: 10px;">CostPerEnergyUnit</a></legend>
                    <div id="{{id}}_CostPerEnergyUnit_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#Currency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Currency}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CostPerEnergyUnit" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = Currency[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ReactancePerLength;
                if (null == bucket)
                   cim_data.ReactancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ReactancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ReactancePerLength";
                base.parse_attribute (/<cim:ReactancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:ReactancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:ReactancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ReactancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ReactancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "ReactancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "ReactancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ReactancePerLength", "unit", "unit", fields);
                base.export_element (obj, "ReactancePerLength", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ReactancePerLength_collapse" aria-expanded="true" aria-controls="ReactancePerLength_collapse" style="margin-left: 10px;">ReactancePerLength</a></legend>
                    <div id="ReactancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ReactancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_ReactancePerLength_collapse" style="margin-left: 10px;">ReactancePerLength</a></legend>
                    <div id="{{id}}_ReactancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ReactancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Duration;
                if (null == bucket)
                   cim_data.Duration = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Duration[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Duration_collapse" aria-expanded="true" aria-controls="Duration_collapse" style="margin-left: 10px;">Duration</a></legend>
                    <div id="Duration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Duration_collapse" aria-expanded="true" aria-controls="{{id}}_Duration_collapse" style="margin-left: 10px;">Duration</a></legend>
                    <div id="{{id}}_Duration_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Duration" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.Time;
                if (null == bucket)
                   cim_data.Time = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Time[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Time_collapse" aria-expanded="true" aria-controls="Time_collapse" style="margin-left: 10px;">Time</a></legend>
                    <div id="Time_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Time_collapse" aria-expanded="true" aria-controls="{{id}}_Time_collapse" style="margin-left: 10px;">Time</a></legend>
                    <div id="{{id}}_Time_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Time" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.Damping;
                if (null == bucket)
                   cim_data.Damping = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Damping[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Damping";
                base.parse_attribute (/<cim:Damping.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:Damping.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:Damping.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Damping.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Damping", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "Damping", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "Damping", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Damping", "unit", "unit", fields);
                base.export_element (obj, "Damping", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Damping_collapse" aria-expanded="true" aria-controls="Damping_collapse" style="margin-left: 10px;">Damping</a></legend>
                    <div id="Damping_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Damping_collapse" aria-expanded="true" aria-controls="{{id}}_Damping_collapse" style="margin-left: 10px;">Damping</a></legend>
                    <div id="{{id}}_Damping_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Damping" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.PU;
                if (null == bucket)
                   cim_data.PU = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PU[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PU";
                base.parse_attribute (/<cim:PU.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:PU.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "PU", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "PU", "unit", "unit", fields);
                base.export_element (obj, "PU", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PU_collapse" aria-expanded="true" aria-controls="PU_collapse" style="margin-left: 10px;">PU</a></legend>
                    <div id="PU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PU_collapse" aria-expanded="true" aria-controls="{{id}}_PU_collapse" style="margin-left: 10px;">PU</a></legend>
                    <div id="{{id}}_PU_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PU" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ActivePower;
                if (null == bucket)
                   cim_data.ActivePower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivePower[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePower";
                base.parse_attribute (/<cim:ActivePower.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ActivePower.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ActivePower", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ActivePower", "unit", "unit", fields);
                base.export_element (obj, "ActivePower", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePower_collapse" aria-expanded="true" aria-controls="ActivePower_collapse" style="margin-left: 10px;">ActivePower</a></legend>
                    <div id="ActivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ActivePower_collapse" aria-expanded="true" aria-controls="{{id}}_ActivePower_collapse" style="margin-left: 10px;">ActivePower</a></legend>
                    <div id="{{id}}_ActivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivePower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Capacitance;
                if (null == bucket)
                   cim_data.Capacitance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Capacitance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Capacitance";
                base.parse_attribute (/<cim:Capacitance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Capacitance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Capacitance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Capacitance", "unit", "unit", fields);
                base.export_element (obj, "Capacitance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Capacitance_collapse" aria-expanded="true" aria-controls="Capacitance_collapse" style="margin-left: 10px;">Capacitance</a></legend>
                    <div id="Capacitance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Capacitance_collapse" aria-expanded="true" aria-controls="{{id}}_Capacitance_collapse" style="margin-left: 10px;">Capacitance</a></legend>
                    <div id="{{id}}_Capacitance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Capacitance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Conductance;
                if (null == bucket)
                   cim_data.Conductance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Conductance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Conductance";
                base.parse_attribute (/<cim:Conductance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Conductance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Conductance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Conductance", "unit", "unit", fields);
                base.export_element (obj, "Conductance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Conductance_collapse" aria-expanded="true" aria-controls="Conductance_collapse" style="margin-left: 10px;">Conductance</a></legend>
                    <div id="Conductance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Conductance_collapse" aria-expanded="true" aria-controls="{{id}}_Conductance_collapse" style="margin-left: 10px;">Conductance</a></legend>
                    <div id="{{id}}_Conductance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Conductance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.InductancePerLength;
                if (null == bucket)
                   cim_data.InductancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.InductancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "InductancePerLength";
                base.parse_element (/<cim:InductancePerLength.value>([\s\S]*?)<\/cim:InductancePerLength.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:InductancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_attribute (/<cim:InductancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:InductancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:InductancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                var bucket = context.parsed.InductancePerLength;
                if (null == bucket)
                   context.parsed.InductancePerLength = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "InductancePerLength", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "InductancePerLength", "unit", "unit", fields);
                base.export_attribute (obj, "InductancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "InductancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "InductancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#InductancePerLength_collapse" aria-expanded="true" aria-controls="InductancePerLength_collapse" style="margin-left: 10px;">InductancePerLength</a></legend>
                    <div id="InductancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_InductancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_InductancePerLength_collapse" style="margin-left: 10px;">InductancePerLength</a></legend>
                    <div id="{{id}}_InductancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "InductancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }

                return (obj);
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
                var bucket = cim_data.VolumeFlowRate;
                if (null == bucket)
                   cim_data.VolumeFlowRate = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VolumeFlowRate[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VolumeFlowRate";
                base.parse_attribute (/<cim:VolumeFlowRate.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:VolumeFlowRate.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:VolumeFlowRate.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:VolumeFlowRate.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "VolumeFlowRate", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "VolumeFlowRate", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "VolumeFlowRate", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "VolumeFlowRate", "unit", "unit", fields);
                base.export_element (obj, "VolumeFlowRate", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VolumeFlowRate_collapse" aria-expanded="true" aria-controls="VolumeFlowRate_collapse" style="margin-left: 10px;">VolumeFlowRate</a></legend>
                    <div id="VolumeFlowRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VolumeFlowRate_collapse" aria-expanded="true" aria-controls="{{id}}_VolumeFlowRate_collapse" style="margin-left: 10px;">VolumeFlowRate</a></legend>
                    <div id="{{id}}_VolumeFlowRate_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VolumeFlowRate" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.DateTime;
                if (null == bucket)
                   cim_data.DateTime = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DateTime[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DateTime_collapse" aria-expanded="true" aria-controls="DateTime_collapse" style="margin-left: 10px;">DateTime</a></legend>
                    <div id="DateTime_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DateTime_collapse" aria-expanded="true" aria-controls="{{id}}_DateTime_collapse" style="margin-left: 10px;">DateTime</a></legend>
                    <div id="{{id}}_DateTime_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "DateTime" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.MonthDay;
                if (null == bucket)
                   cim_data.MonthDay = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.MonthDay[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#MonthDay_collapse" aria-expanded="true" aria-controls="MonthDay_collapse" style="margin-left: 10px;">MonthDay</a></legend>
                    <div id="MonthDay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_MonthDay_collapse" aria-expanded="true" aria-controls="{{id}}_MonthDay_collapse" style="margin-left: 10px;">MonthDay</a></legend>
                    <div id="{{id}}_MonthDay_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "MonthDay" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.CurrentFlow;
                if (null == bucket)
                   cim_data.CurrentFlow = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.CurrentFlow[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "CurrentFlow";
                base.parse_attribute (/<cim:CurrentFlow.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:CurrentFlow.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "CurrentFlow", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "CurrentFlow", "unit", "unit", fields);
                base.export_element (obj, "CurrentFlow", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#CurrentFlow_collapse" aria-expanded="true" aria-controls="CurrentFlow_collapse" style="margin-left: 10px;">CurrentFlow</a></legend>
                    <div id="CurrentFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_CurrentFlow_collapse" aria-expanded="true" aria-controls="{{id}}_CurrentFlow_collapse" style="margin-left: 10px;">CurrentFlow</a></legend>
                    <div id="{{id}}_CurrentFlow_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "CurrentFlow" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.KiloActivePower;
                if (null == bucket)
                   cim_data.KiloActivePower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.KiloActivePower[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "KiloActivePower";
                base.parse_attribute (/<cim:KiloActivePower.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:KiloActivePower.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "KiloActivePower", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "KiloActivePower", "unit", "unit", fields);
                base.export_element (obj, "KiloActivePower", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#KiloActivePower_collapse" aria-expanded="true" aria-controls="KiloActivePower_collapse" style="margin-left: 10px;">KiloActivePower</a></legend>
                    <div id="KiloActivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_KiloActivePower_collapse" aria-expanded="true" aria-controls="{{id}}_KiloActivePower_collapse" style="margin-left: 10px;">KiloActivePower</a></legend>
                    <div id="{{id}}_KiloActivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "KiloActivePower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Impedance;
                if (null == bucket)
                   cim_data.Impedance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Impedance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Impedance";
                base.parse_attribute (/<cim:Impedance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Impedance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Impedance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Impedance", "unit", "unit", fields);
                base.export_element (obj, "Impedance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Impedance_collapse" aria-expanded="true" aria-controls="Impedance_collapse" style="margin-left: 10px;">Impedance</a></legend>
                    <div id="Impedance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Impedance_collapse" aria-expanded="true" aria-controls="{{id}}_Impedance_collapse" style="margin-left: 10px;">Impedance</a></legend>
                    <div id="{{id}}_Impedance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Impedance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.PerCent;
                if (null == bucket)
                   cim_data.PerCent = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.PerCent[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "PerCent";
                base.parse_attribute (/<cim:PerCent.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:PerCent.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "PerCent", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "PerCent", "unit", "unit", fields);
                base.export_element (obj, "PerCent", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#PerCent_collapse" aria-expanded="true" aria-controls="PerCent_collapse" style="margin-left: 10px;">PerCent</a></legend>
                    <div id="PerCent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_PerCent_collapse" aria-expanded="true" aria-controls="{{id}}_PerCent_collapse" style="margin-left: 10px;">PerCent</a></legend>
                    <div id="{{id}}_PerCent_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "PerCent" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Seconds;
                if (null == bucket)
                   cim_data.Seconds = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Seconds[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Seconds";
                base.parse_attribute (/<cim:Seconds.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Seconds.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Seconds", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Seconds", "unit", "unit", fields);
                base.export_element (obj, "Seconds", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Seconds_collapse" aria-expanded="true" aria-controls="Seconds_collapse" style="margin-left: 10px;">Seconds</a></legend>
                    <div id="Seconds_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Seconds_collapse" aria-expanded="true" aria-controls="{{id}}_Seconds_collapse" style="margin-left: 10px;">Seconds</a></legend>
                    <div id="{{id}}_Seconds_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Seconds" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ActivePowerPerFrequency;
                if (null == bucket)
                   cim_data.ActivePowerPerFrequency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ActivePowerPerFrequency[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ActivePowerPerFrequency";
                base.parse_attribute (/<cim:ActivePowerPerFrequency.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:ActivePowerPerFrequency.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:ActivePowerPerFrequency.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ActivePowerPerFrequency.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ActivePowerPerFrequency", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "ActivePowerPerFrequency", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "ActivePowerPerFrequency", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ActivePowerPerFrequency", "unit", "unit", fields);
                base.export_element (obj, "ActivePowerPerFrequency", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ActivePowerPerFrequency_collapse" aria-expanded="true" aria-controls="ActivePowerPerFrequency_collapse" style="margin-left: 10px;">ActivePowerPerFrequency</a></legend>
                    <div id="ActivePowerPerFrequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ActivePowerPerFrequency_collapse" aria-expanded="true" aria-controls="{{id}}_ActivePowerPerFrequency_collapse" style="margin-left: 10px;">ActivePowerPerFrequency</a></legend>
                    <div id="{{id}}_ActivePowerPerFrequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ActivePowerPerFrequency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Money;
                if (null == bucket)
                   cim_data.Money = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Money[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Money";
                base.parse_attribute (/<cim:Money.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Money.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Money", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Money", "unit", "unit", fields);
                base.export_element (obj, "Money", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Money_collapse" aria-expanded="true" aria-controls="Money_collapse" style="margin-left: 10px;">Money</a></legend>
                    <div id="Money_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.Currency = []; if (!obj.unit) obj.Currency.push ({ id: '', selected: true}); for (var property in Currency) obj.Currency.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.Currency;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Money_collapse" aria-expanded="true" aria-controls="{{id}}_Money_collapse" style="margin-left: 10px;">Money</a></legend>
                    <div id="{{id}}_Money_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#Currency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Currency}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Money" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = Currency[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.DateTimeInterval;
                if (null == bucket)
                   cim_data.DateTimeInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DateTimeInterval[obj.id];
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

                base.export_element (obj, "DateTimeInterval", "end", "end",  base.from_datetime, fields);
                base.export_element (obj, "DateTimeInterval", "start", "start",  base.from_datetime, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DateTimeInterval_collapse" aria-expanded="true" aria-controls="DateTimeInterval_collapse" style="margin-left: 10px;">DateTimeInterval</a></legend>
                    <div id="DateTimeInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
                    {{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DateTimeInterval_collapse" aria-expanded="true" aria-controls="{{id}}_DateTimeInterval_collapse" style="margin-left: 10px;">DateTimeInterval</a></legend>
                    <div id="{{id}}_DateTimeInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DateTimeInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById (id + "_start").value; if ("" != temp) obj.start = temp;

                return (obj);
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
                var bucket = cim_data.ApparentPower;
                if (null == bucket)
                   cim_data.ApparentPower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ApparentPower[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ApparentPower";
                base.parse_attribute (/<cim:ApparentPower.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ApparentPower.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ApparentPower", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ApparentPower", "unit", "unit", fields);
                base.export_element (obj, "ApparentPower", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ApparentPower_collapse" aria-expanded="true" aria-controls="ApparentPower_collapse" style="margin-left: 10px;">ApparentPower</a></legend>
                    <div id="ApparentPower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ApparentPower_collapse" aria-expanded="true" aria-controls="{{id}}_ApparentPower_collapse" style="margin-left: 10px;">ApparentPower</a></legend>
                    <div id="{{id}}_ApparentPower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ApparentPower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Volume;
                if (null == bucket)
                   cim_data.Volume = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Volume[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Volume";
                base.parse_attribute (/<cim:Volume.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Volume.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Volume", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Volume", "unit", "unit", fields);
                base.export_element (obj, "Volume", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Volume_collapse" aria-expanded="true" aria-controls="Volume_collapse" style="margin-left: 10px;">Volume</a></legend>
                    <div id="Volume_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Volume_collapse" aria-expanded="true" aria-controls="{{id}}_Volume_collapse" style="margin-left: 10px;">Volume</a></legend>
                    <div id="{{id}}_Volume_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Volume" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.AngleDegrees;
                if (null == bucket)
                   cim_data.AngleDegrees = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.AngleDegrees[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "AngleDegrees";
                base.parse_attribute (/<cim:AngleDegrees.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:AngleDegrees.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "AngleDegrees", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "AngleDegrees", "unit", "unit", fields);
                base.export_element (obj, "AngleDegrees", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#AngleDegrees_collapse" aria-expanded="true" aria-controls="AngleDegrees_collapse" style="margin-left: 10px;">AngleDegrees</a></legend>
                    <div id="AngleDegrees_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_AngleDegrees_collapse" aria-expanded="true" aria-controls="{{id}}_AngleDegrees_collapse" style="margin-left: 10px;">AngleDegrees</a></legend>
                    <div id="{{id}}_AngleDegrees_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "AngleDegrees" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Date;
                if (null == bucket)
                   cim_data.Date = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Date[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Date_collapse" aria-expanded="true" aria-controls="Date_collapse" style="margin-left: 10px;">Date</a></legend>
                    <div id="Date_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Date_collapse" aria-expanded="true" aria-controls="{{id}}_Date_collapse" style="margin-left: 10px;">Date</a></legend>
                    <div id="{{id}}_Date_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Date" };
                super.submit (id, obj);

                return (obj);
            }
        }

        class DecimalQuantity extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                var bucket = cim_data.DecimalQuantity;
                if (null == bucket)
                   cim_data.DecimalQuantity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DecimalQuantity[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "DecimalQuantity";
                base.parse_element (/<cim:DecimalQuantity.value>([\s\S]*?)<\/cim:DecimalQuantity.value>/g, obj, "value", base.to_string, sub, context);
                base.parse_attribute (/<cim:DecimalQuantity.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_attribute (/<cim:DecimalQuantity.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:DecimalQuantity.currency\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "currency", sub, context);
                var bucket = context.parsed.DecimalQuantity;
                if (null == bucket)
                   context.parsed.DecimalQuantity = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "DecimalQuantity", "value", "value",  base.from_string, fields);
                base.export_attribute (obj, "DecimalQuantity", "unit", "unit", fields);
                base.export_attribute (obj, "DecimalQuantity", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "DecimalQuantity", "currency", "currency", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DecimalQuantity_collapse" aria-expanded="true" aria-controls="DecimalQuantity_collapse" style="margin-left: 10px;">DecimalQuantity</a></legend>
                    <div id="DecimalQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#currency}}<div><b>currency</b>: {{currency}}</div>{{/currency}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.Currency = []; if (!obj.currency) obj.Currency.push ({ id: '', selected: true}); for (var property in Currency) obj.Currency.push ({ id: property, selected: obj.currency && obj.currency.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.Currency;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DecimalQuantity_collapse" aria-expanded="true" aria-controls="{{id}}_DecimalQuantity_collapse" style="margin-left: 10px;">DecimalQuantity</a></legend>
                    <div id="{{id}}_DecimalQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_currency'>currency: </label><div class='col-sm-8'><select id='{{id}}_currency' class='form-control'>{{#Currency}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/Currency}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DecimalQuantity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_currency").value; if ("" != temp) { temp = Currency[temp]; if ("undefined" != typeof (temp)) obj.currency = "http://iec.ch/TC57/2013/CIM-schema-cim16#Currency." + temp; }

                return (obj);
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
                var bucket = cim_data.RealEnergy;
                if (null == bucket)
                   cim_data.RealEnergy = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RealEnergy[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RealEnergy";
                base.parse_attribute (/<cim:RealEnergy.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:RealEnergy.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "RealEnergy", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "RealEnergy", "unit", "unit", fields);
                base.export_element (obj, "RealEnergy", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RealEnergy_collapse" aria-expanded="true" aria-controls="RealEnergy_collapse" style="margin-left: 10px;">RealEnergy</a></legend>
                    <div id="RealEnergy_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RealEnergy_collapse" aria-expanded="true" aria-controls="{{id}}_RealEnergy_collapse" style="margin-left: 10px;">RealEnergy</a></legend>
                    <div id="{{id}}_RealEnergy_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RealEnergy" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Decimal;
                if (null == bucket)
                   cim_data.Decimal = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Decimal[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Decimal_collapse" aria-expanded="true" aria-controls="Decimal_collapse" style="margin-left: 10px;">Decimal</a></legend>
                    <div id="Decimal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Decimal_collapse" aria-expanded="true" aria-controls="{{id}}_Decimal_collapse" style="margin-left: 10px;">Decimal</a></legend>
                    <div id="{{id}}_Decimal_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Decimal" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.Length;
                if (null == bucket)
                   cim_data.Length = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Length[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Length";
                base.parse_attribute (/<cim:Length.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Length.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Length", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Length", "unit", "unit", fields);
                base.export_element (obj, "Length", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Length_collapse" aria-expanded="true" aria-controls="Length_collapse" style="margin-left: 10px;">Length</a></legend>
                    <div id="Length_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Length_collapse" aria-expanded="true" aria-controls="{{id}}_Length_collapse" style="margin-left: 10px;">Length</a></legend>
                    <div id="{{id}}_Length_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Length" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Temperature;
                if (null == bucket)
                   cim_data.Temperature = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Temperature[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Temperature";
                base.parse_attribute (/<cim:Temperature.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Temperature.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Temperature", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Temperature", "unit", "unit", fields);
                base.export_element (obj, "Temperature", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Temperature_collapse" aria-expanded="true" aria-controls="Temperature_collapse" style="margin-left: 10px;">Temperature</a></legend>
                    <div id="Temperature_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Temperature_collapse" aria-expanded="true" aria-controls="{{id}}_Temperature_collapse" style="margin-left: 10px;">Temperature</a></legend>
                    <div id="{{id}}_Temperature_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Temperature" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.FloatQuantity;
                if (null == bucket)
                   cim_data.FloatQuantity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.FloatQuantity[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "FloatQuantity";
                base.parse_attribute (/<cim:FloatQuantity.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:FloatQuantity.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "FloatQuantity", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "FloatQuantity", "unit", "unit", fields);
                base.export_element (obj, "FloatQuantity", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#FloatQuantity_collapse" aria-expanded="true" aria-controls="FloatQuantity_collapse" style="margin-left: 10px;">FloatQuantity</a></legend>
                    <div id="FloatQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_FloatQuantity_collapse" aria-expanded="true" aria-controls="{{id}}_FloatQuantity_collapse" style="margin-left: 10px;">FloatQuantity</a></legend>
                    <div id="{{id}}_FloatQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "FloatQuantity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Susceptance;
                if (null == bucket)
                   cim_data.Susceptance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Susceptance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Susceptance";
                base.parse_attribute (/<cim:Susceptance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Susceptance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Susceptance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Susceptance", "unit", "unit", fields);
                base.export_element (obj, "Susceptance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Susceptance_collapse" aria-expanded="true" aria-controls="Susceptance_collapse" style="margin-left: 10px;">Susceptance</a></legend>
                    <div id="Susceptance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Susceptance_collapse" aria-expanded="true" aria-controls="{{id}}_Susceptance_collapse" style="margin-left: 10px;">Susceptance</a></legend>
                    <div id="{{id}}_Susceptance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Susceptance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Frequency;
                if (null == bucket)
                   cim_data.Frequency = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Frequency[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Frequency";
                base.parse_attribute (/<cim:Frequency.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Frequency.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Frequency", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Frequency", "unit", "unit", fields);
                base.export_element (obj, "Frequency", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Frequency_collapse" aria-expanded="true" aria-controls="Frequency_collapse" style="margin-left: 10px;">Frequency</a></legend>
                    <div id="Frequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Frequency_collapse" aria-expanded="true" aria-controls="{{id}}_Frequency_collapse" style="margin-left: 10px;">Frequency</a></legend>
                    <div id="{{id}}_Frequency_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Frequency" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Area;
                if (null == bucket)
                   cim_data.Area = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Area[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Area";
                base.parse_element (/<cim:Area.value>([\s\S]*?)<\/cim:Area.value>/g, obj, "value", base.to_float, sub, context);
                base.parse_attribute (/<cim:Area.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
                base.parse_attribute (/<cim:Area.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                var bucket = context.parsed.Area;
                if (null == bucket)
                   context.parsed.Area = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, full)
            {
                var fields = [];

                base.export_element (obj, "Area", "value", "value",  base.from_float, fields);
                base.export_attribute (obj, "Area", "unit", "unit", fields);
                base.export_attribute (obj, "Area", "multiplier", "multiplier", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Area_collapse" aria-expanded="true" aria-controls="Area_collapse" style="margin-left: 10px;">Area</a></legend>
                    <div id="Area_collapse" class="collapse in" style="margin-left: 10px;">
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
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Area_collapse" aria-expanded="true" aria-controls="{{id}}_Area_collapse" style="margin-left: 10px;">Area</a></legend>
                    <div id="{{id}}_Area_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Area" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }

                return (obj);
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
                var bucket = cim_data.Minutes;
                if (null == bucket)
                   cim_data.Minutes = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Minutes[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Minutes";
                base.parse_attribute (/<cim:Minutes.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Minutes.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Minutes", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Minutes", "unit", "unit", fields);
                base.export_element (obj, "Minutes", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Minutes_collapse" aria-expanded="true" aria-controls="Minutes_collapse" style="margin-left: 10px;">Minutes</a></legend>
                    <div id="Minutes_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Minutes_collapse" aria-expanded="true" aria-controls="{{id}}_Minutes_collapse" style="margin-left: 10px;">Minutes</a></legend>
                    <div id="{{id}}_Minutes_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Minutes" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.DateInterval;
                if (null == bucket)
                   cim_data.DateInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.DateInterval[obj.id];
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

                base.export_element (obj, "DateInterval", "end", "end",  base.from_string, fields);
                base.export_element (obj, "DateInterval", "start", "start",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#DateInterval_collapse" aria-expanded="true" aria-controls="DateInterval_collapse" style="margin-left: 10px;">DateInterval</a></legend>
                    <div id="DateInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
                    {{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_DateInterval_collapse" aria-expanded="true" aria-controls="{{id}}_DateInterval_collapse" style="margin-left: 10px;">DateInterval</a></legend>
                    <div id="{{id}}_DateInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "DateInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById (id + "_start").value; if ("" != temp) obj.start = temp;

                return (obj);
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
                var bucket = cim_data.VoltagePerReactivePower;
                if (null == bucket)
                   cim_data.VoltagePerReactivePower = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.VoltagePerReactivePower[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "VoltagePerReactivePower";
                base.parse_attribute (/<cim:VoltagePerReactivePower.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:VoltagePerReactivePower.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:VoltagePerReactivePower.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:VoltagePerReactivePower.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "VoltagePerReactivePower", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "VoltagePerReactivePower", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "VoltagePerReactivePower", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "VoltagePerReactivePower", "unit", "unit", fields);
                base.export_element (obj, "VoltagePerReactivePower", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#VoltagePerReactivePower_collapse" aria-expanded="true" aria-controls="VoltagePerReactivePower_collapse" style="margin-left: 10px;">VoltagePerReactivePower</a></legend>
                    <div id="VoltagePerReactivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_VoltagePerReactivePower_collapse" aria-expanded="true" aria-controls="{{id}}_VoltagePerReactivePower_collapse" style="margin-left: 10px;">VoltagePerReactivePower</a></legend>
                    <div id="{{id}}_VoltagePerReactivePower_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "VoltagePerReactivePower" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Hours;
                if (null == bucket)
                   cim_data.Hours = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Hours[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Hours";
                base.parse_attribute (/<cim:Hours.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Hours.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Hours", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Hours", "unit", "unit", fields);
                base.export_element (obj, "Hours", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Hours_collapse" aria-expanded="true" aria-controls="Hours_collapse" style="margin-left: 10px;">Hours</a></legend>
                    <div id="Hours_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Hours_collapse" aria-expanded="true" aria-controls="{{id}}_Hours_collapse" style="margin-left: 10px;">Hours</a></legend>
                    <div id="{{id}}_Hours_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Hours" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Speed;
                if (null == bucket)
                   cim_data.Speed = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Speed[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Speed";
                base.parse_attribute (/<cim:Speed.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:Speed.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:Speed.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Speed.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Speed", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "Speed", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "Speed", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Speed", "unit", "unit", fields);
                base.export_element (obj, "Speed", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Speed_collapse" aria-expanded="true" aria-controls="Speed_collapse" style="margin-left: 10px;">Speed</a></legend>
                    <div id="Speed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Speed_collapse" aria-expanded="true" aria-controls="{{id}}_Speed_collapse" style="margin-left: 10px;">Speed</a></legend>
                    <div id="{{id}}_Speed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Speed" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Displacement;
                if (null == bucket)
                   cim_data.Displacement = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Displacement[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Displacement";
                base.parse_attribute (/<cim:Displacement.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Displacement.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Displacement", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Displacement", "unit", "unit", fields);
                base.export_element (obj, "Displacement", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Displacement_collapse" aria-expanded="true" aria-controls="Displacement_collapse" style="margin-left: 10px;">Displacement</a></legend>
                    <div id="Displacement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Displacement_collapse" aria-expanded="true" aria-controls="{{id}}_Displacement_collapse" style="margin-left: 10px;">Displacement</a></legend>
                    <div id="{{id}}_Displacement_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Displacement" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.String;
                if (null == bucket)
                   cim_data.String = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.String[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#String_collapse" aria-expanded="true" aria-controls="String_collapse" style="margin-left: 10px;">String</a></legend>
                    <div id="String_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_String_collapse" aria-expanded="true" aria-controls="{{id}}_String_collapse" style="margin-left: 10px;">String</a></legend>
                    <div id="{{id}}_String_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "String" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.RotationSpeed;
                if (null == bucket)
                   cim_data.RotationSpeed = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.RotationSpeed[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "RotationSpeed";
                base.parse_attribute (/<cim:RotationSpeed.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:RotationSpeed.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:RotationSpeed.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:RotationSpeed.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "RotationSpeed", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "RotationSpeed", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "RotationSpeed", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "RotationSpeed", "unit", "unit", fields);
                base.export_element (obj, "RotationSpeed", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#RotationSpeed_collapse" aria-expanded="true" aria-controls="RotationSpeed_collapse" style="margin-left: 10px;">RotationSpeed</a></legend>
                    <div id="RotationSpeed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_RotationSpeed_collapse" aria-expanded="true" aria-controls="{{id}}_RotationSpeed_collapse" style="margin-left: 10px;">RotationSpeed</a></legend>
                    <div id="{{id}}_RotationSpeed_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "RotationSpeed" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Resistance;
                if (null == bucket)
                   cim_data.Resistance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Resistance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Resistance";
                base.parse_attribute (/<cim:Resistance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Resistance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Resistance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Resistance", "unit", "unit", fields);
                base.export_element (obj, "Resistance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Resistance_collapse" aria-expanded="true" aria-controls="Resistance_collapse" style="margin-left: 10px;">Resistance</a></legend>
                    <div id="Resistance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Resistance_collapse" aria-expanded="true" aria-controls="{{id}}_Resistance_collapse" style="margin-left: 10px;">Resistance</a></legend>
                    <div id="{{id}}_Resistance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Resistance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Weight;
                if (null == bucket)
                   cim_data.Weight = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Weight[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Weight";
                base.parse_attribute (/<cim:Weight.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Weight.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Weight", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Weight", "unit", "unit", fields);
                base.export_element (obj, "Weight", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Weight_collapse" aria-expanded="true" aria-controls="Weight_collapse" style="margin-left: 10px;">Weight</a></legend>
                    <div id="Weight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Weight_collapse" aria-expanded="true" aria-controls="{{id}}_Weight_collapse" style="margin-left: 10px;">Weight</a></legend>
                    <div id="{{id}}_Weight_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Weight" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Pressure;
                if (null == bucket)
                   cim_data.Pressure = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Pressure[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Pressure";
                base.parse_attribute (/<cim:Pressure.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Pressure.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Pressure", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Pressure", "unit", "unit", fields);
                base.export_element (obj, "Pressure", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Pressure_collapse" aria-expanded="true" aria-controls="Pressure_collapse" style="margin-left: 10px;">Pressure</a></legend>
                    <div id="Pressure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Pressure_collapse" aria-expanded="true" aria-controls="{{id}}_Pressure_collapse" style="margin-left: 10px;">Pressure</a></legend>
                    <div id="{{id}}_Pressure_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Pressure" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.ConductancePerLength;
                if (null == bucket)
                   cim_data.ConductancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.ConductancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "ConductancePerLength";
                base.parse_attribute (/<cim:ConductancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:ConductancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:ConductancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:ConductancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "ConductancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "ConductancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "ConductancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "ConductancePerLength", "unit", "unit", fields);
                base.export_element (obj, "ConductancePerLength", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#ConductancePerLength_collapse" aria-expanded="true" aria-controls="ConductancePerLength_collapse" style="margin-left: 10px;">ConductancePerLength</a></legend>
                    <div id="ConductancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_ConductancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_ConductancePerLength_collapse" style="margin-left: 10px;">ConductancePerLength</a></legend>
                    <div id="{{id}}_ConductancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "ConductancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.Boolean;
                if (null == bucket)
                   cim_data.Boolean = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Boolean[obj.id];
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

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Boolean_collapse" aria-expanded="true" aria-controls="Boolean_collapse" style="margin-left: 10px;">Boolean</a></legend>
                    <div id="Boolean_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Boolean_collapse" aria-expanded="true" aria-controls="{{id}}_Boolean_collapse" style="margin-left: 10px;">Boolean</a></legend>
                    <div id="{{id}}_Boolean_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var obj = obj || { id: id, cls: "Boolean" };
                super.submit (id, obj);

                return (obj);
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
                var bucket = cim_data.SusceptancePerLength;
                if (null == bucket)
                   cim_data.SusceptancePerLength = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.SusceptancePerLength[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "SusceptancePerLength";
                base.parse_attribute (/<cim:SusceptancePerLength.denominatorMultiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorMultiplier", sub, context);
                base.parse_attribute (/<cim:SusceptancePerLength.denominatorUnit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "denominatorUnit", sub, context);
                base.parse_attribute (/<cim:SusceptancePerLength.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:SusceptancePerLength.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "SusceptancePerLength", "denominatorMultiplier", "denominatorMultiplier", fields);
                base.export_attribute (obj, "SusceptancePerLength", "denominatorUnit", "denominatorUnit", fields);
                base.export_attribute (obj, "SusceptancePerLength", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "SusceptancePerLength", "unit", "unit", fields);
                base.export_element (obj, "SusceptancePerLength", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#SusceptancePerLength_collapse" aria-expanded="true" aria-controls="SusceptancePerLength_collapse" style="margin-left: 10px;">SusceptancePerLength</a></legend>
                    <div id="SusceptancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#denominatorMultiplier}}<div><b>denominatorMultiplier</b>: {{denominatorMultiplier}}</div>{{/denominatorMultiplier}}
                    {{#denominatorUnit}}<div><b>denominatorUnit</b>: {{denominatorUnit}}</div>{{/denominatorUnit}}
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.denominatorMultiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.denominatorMultiplier && obj.denominatorMultiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.denominatorUnit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.denominatorUnit && obj.denominatorUnit.endsWith ('.' + property)});
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_SusceptancePerLength_collapse" aria-expanded="true" aria-controls="{{id}}_SusceptancePerLength_collapse" style="margin-left: 10px;">SusceptancePerLength</a></legend>
                    <div id="{{id}}_SusceptancePerLength_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorMultiplier'>denominatorMultiplier: </label><div class='col-sm-8'><select id='{{id}}_denominatorMultiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_denominatorUnit'>denominatorUnit: </label><div class='col-sm-8'><select id='{{id}}_denominatorUnit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "SusceptancePerLength" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_denominatorMultiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.denominatorMultiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_denominatorUnit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.denominatorUnit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.StringQuantity;
                if (null == bucket)
                   cim_data.StringQuantity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.StringQuantity[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "StringQuantity";
                base.parse_attribute (/<cim:StringQuantity.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:StringQuantity.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "StringQuantity", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "StringQuantity", "unit", "unit", fields);
                base.export_element (obj, "StringQuantity", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#StringQuantity_collapse" aria-expanded="true" aria-controls="StringQuantity_collapse" style="margin-left: 10px;">StringQuantity</a></legend>
                    <div id="StringQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_StringQuantity_collapse" aria-expanded="true" aria-controls="{{id}}_StringQuantity_collapse" style="margin-left: 10px;">StringQuantity</a></legend>
                    <div id="{{id}}_StringQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "StringQuantity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.IntegerQuantity;
                if (null == bucket)
                   cim_data.IntegerQuantity = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.IntegerQuantity[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "IntegerQuantity";
                base.parse_attribute (/<cim:IntegerQuantity.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:IntegerQuantity.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "IntegerQuantity", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "IntegerQuantity", "unit", "unit", fields);
                base.export_element (obj, "IntegerQuantity", "value", "value",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#IntegerQuantity_collapse" aria-expanded="true" aria-controls="IntegerQuantity_collapse" style="margin-left: 10px;">IntegerQuantity</a></legend>
                    <div id="IntegerQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_IntegerQuantity_collapse" aria-expanded="true" aria-controls="{{id}}_IntegerQuantity_collapse" style="margin-left: 10px;">IntegerQuantity</a></legend>
                    <div id="{{id}}_IntegerQuantity_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "IntegerQuantity" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
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
                var bucket = cim_data.TimeInterval;
                if (null == bucket)
                   cim_data.TimeInterval = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.TimeInterval[obj.id];
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

                base.export_element (obj, "TimeInterval", "end", "end",  base.from_string, fields);
                base.export_element (obj, "TimeInterval", "start", "start",  base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#TimeInterval_collapse" aria-expanded="true" aria-controls="TimeInterval_collapse" style="margin-left: 10px;">TimeInterval</a></legend>
                    <div id="TimeInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#end}}<div><b>end</b>: {{end}}</div>{{/end}}
                    {{#start}}<div><b>start</b>: {{start}}</div>{{/start}}
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
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_TimeInterval_collapse" aria-expanded="true" aria-controls="{{id}}_TimeInterval_collapse" style="margin-left: 10px;">TimeInterval</a></legend>
                    <div id="{{id}}_TimeInterval_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_end'>end: </label><div class='col-sm-8'><input id='{{id}}_end' class='form-control' type='text'{{#end}} value='{{end}}'{{/end}}></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_start'>start: </label><div class='col-sm-8'><input id='{{id}}_start' class='form-control' type='text'{{#start}} value='{{start}}'{{/start}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "TimeInterval" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_end").value; if ("" != temp) obj.end = temp;
                temp = document.getElementById (id + "_start").value; if ("" != temp) obj.start = temp;

                return (obj);
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
                var bucket = cim_data.Inductance;
                if (null == bucket)
                   cim_data.Inductance = bucket = {};
                bucket[template.id] = template;
            }

            remove (obj, cim_data)
            {
               super.remove (obj, cim_data);
               delete cim_data.Inductance[obj.id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "Inductance";
                base.parse_attribute (/<cim:Inductance.multiplier\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "multiplier", sub, context);
                base.parse_attribute (/<cim:Inductance.unit\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "unit", sub, context);
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

                base.export_attribute (obj, "Inductance", "multiplier", "multiplier", fields);
                base.export_attribute (obj, "Inductance", "unit", "unit", fields);
                base.export_element (obj, "Inductance", "value", "value",  base.from_float, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }

            template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#Inductance_collapse" aria-expanded="true" aria-controls="Inductance_collapse" style="margin-left: 10px;">Inductance</a></legend>
                    <div id="Inductance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.template.call (this) +
                    `
                    {{#multiplier}}<div><b>multiplier</b>: {{multiplier}}</div>{{/multiplier}}
                    {{#unit}}<div><b>unit</b>: {{unit}}</div>{{/unit}}
                    {{#value}}<div><b>value</b>: {{value}}</div>{{/value}}
                    </div>
                    <fieldset>

                    `
                );
            }

            condition (obj)
            {
                super.condition (obj);
                obj.UnitMultiplier = []; if (!obj.multiplier) obj.UnitMultiplier.push ({ id: '', selected: true}); for (var property in UnitMultiplier) obj.UnitMultiplier.push ({ id: property, selected: obj.multiplier && obj.multiplier.endsWith ('.' + property)});
                obj.UnitSymbol = []; if (!obj.unit) obj.UnitSymbol.push ({ id: '', selected: true}); for (var property in UnitSymbol) obj.UnitSymbol.push ({ id: property, selected: obj.unit && obj.unit.endsWith ('.' + property)});
            }

            uncondition (obj)
            {
                super.uncondition (obj);
                delete obj.UnitMultiplier;
                delete obj.UnitSymbol;
            }

            edit_template ()
            {
                return (
                    `
                    <fieldset>
                    <legend class='col-form-legend'><a data-toggle="collapse" href="#{{id}}_Inductance_collapse" aria-expanded="true" aria-controls="{{id}}_Inductance_collapse" style="margin-left: 10px;">Inductance</a></legend>
                    <div id="{{id}}_Inductance_collapse" class="collapse in" style="margin-left: 10px;">
                    `
                    + base.Element.prototype.edit_template.call (this) +
                    `
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_multiplier'>multiplier: </label><div class='col-sm-8'><select id='{{id}}_multiplier' class='form-control'>{{#UnitMultiplier}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitMultiplier}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_unit'>unit: </label><div class='col-sm-8'><select id='{{id}}_unit' class='form-control'>{{#UnitSymbol}}<option value='{{id}}'{{#selected}} selected{{/selected}}>{{id}}</option>{{/UnitSymbol}}</select></div></div>
                    <div class='form-group row'><label class='col-sm-4 col-form-label' for='{{id}}_value'>value: </label><div class='col-sm-8'><input id='{{id}}_value' class='form-control' type='text'{{#value}} value='{{value}}'{{/value}}></div></div>
                    </div>
                    <fieldset>
                    `
                );
            }

            submit (id, obj)
            {
                var temp;

                var obj = obj || { id: id, cls: "Inductance" };
                super.submit (id, obj);
                temp = document.getElementById (id + "_multiplier").value; if ("" != temp) { temp = UnitMultiplier[temp]; if ("undefined" != typeof (temp)) obj.multiplier = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitMultiplier." + temp; }
                temp = document.getElementById (id + "_unit").value; if ("" != temp) { temp = UnitSymbol[temp]; if ("undefined" != typeof (temp)) obj.unit = "http://iec.ch/TC57/2013/CIM-schema-cim16#UnitSymbol." + temp; }
                temp = document.getElementById (id + "_value").value; if ("" != temp) obj.value = temp;

                return (obj);
            }
        }

        return (
            {
                Minutes: Minutes,
                ReactancePerLength: ReactancePerLength,
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