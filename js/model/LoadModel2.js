define
(
    ["model/base", "model/Wires"],
    /**
     * This package is responsible for modeling the energy consumers and the system load as curves and associated curve data.
     *
     * Special circumstances that may affect the load, such as seasons and daytypes, are also included here.
     *
     */
    function (base, Wires)
    {

        /**
         * NonConformLoad represent loads that do not follow a daily load change pattern and changes are not correlated with the daily load change pattern.
         *
         */
        class NonConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.NonConformLoad;
                if (null == bucket)
                   cim_data.NonConformLoad = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.NonConformLoad[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "NonConformLoad";
                base.parse_attribute (/<cim:NonConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);

                var bucket = context.parsed.NonConformLoad;
                if (null == bucket)
                   context.parsed.NonConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyConsumer"](obj, exporters, false);

                base.export_attribute (obj, "NonConformLoad", "LoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * ConformLoad represent loads that follow a daily load change pattern where the pattern can be used to scale the load with a system load.
         *
         */
        class ConformLoad extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.ConformLoad;
                if (null == bucket)
                   cim_data.ConformLoad = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.ConformLoad[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "ConformLoad";
                base.parse_attribute (/<cim:ConformLoad.LoadGroup\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "LoadGroup", sub, context);

                var bucket = context.parsed.ConformLoad;
                if (null == bucket)
                   context.parsed.ConformLoad = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyConsumer"](obj, exporters, false);

                base.export_attribute (obj, "ConformLoad", "LoadGroup", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Station supply with load derived from the station output.
         *
         */
        class StationSupply extends Wires.EnergyConsumer
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.StationSupply;
                if (null == bucket)
                   cim_data.StationSupply = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.StationSupply[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Wires.EnergyConsumer.prototype.parse.call (this, context, sub);
                obj.cls = "StationSupply";

                var bucket = context.parsed.StationSupply;
                if (null == bucket)
                   context.parsed.StationSupply = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["EnergyConsumer"](obj, exporters, false);

                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                NonConformLoad: NonConformLoad,
                StationSupply: StationSupply,
                ConformLoad: ConformLoad
            }
        );
    }
);