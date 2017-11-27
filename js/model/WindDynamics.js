define
(
    ["model/base", "model/Core", "model/StandardModels"],
    /**
     * Wind turbines are generally divided into 4 types, which are currently significant in power systems.
     *
     * The 4 types have the following characteristics:
     *
     */
    function (base, Core, StandardModels)
    {

        /**
         * Pitch angle control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.2.
         *
         */
        class WindContPitchAngleIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContPitchAngleIEC;
                if (null == bucket)
                   cim_data.WindContPitchAngleIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContPitchAngleIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPitchAngleIEC";
                base.parse_element (/<cim:WindContPitchAngleIEC.dthetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamax>/g, obj, "dthetamax", base.to_float, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.dthetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.dthetamin>/g, obj, "dthetamin", base.to_float, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kic>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kic>/g, obj, "kic", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kiomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kiomega>/g, obj, "kiomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpc>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpc>/g, obj, "kpc", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpomega>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpomega>/g, obj, "kpomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.kpx>([\s\S]*?)<\/cim:WindContPitchAngleIEC.kpx>/g, obj, "kpx", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.thetamax>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamax>/g, obj, "thetamax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.thetamin>([\s\S]*?)<\/cim:WindContPitchAngleIEC.thetamin>/g, obj, "thetamin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPitchAngleIEC.ttheta>([\s\S]*?)<\/cim:WindContPitchAngleIEC.ttheta>/g, obj, "ttheta", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPitchAngleIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);

                var bucket = context.parsed.WindContPitchAngleIEC;
                if (null == bucket)
                   context.parsed.WindContPitchAngleIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContPitchAngleIEC", "dthetamax", base.from_float, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "dthetamin", base.from_float, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kic", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kiomega", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpc", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpomega", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "kpx", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "thetamax", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "thetamin", base.from_string, fields);
                base.export_element (obj, "WindContPitchAngleIEC", "ttheta", base.from_string, fields);
                base.export_attribute (obj, "WindContPitchAngleIEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Pitch control power model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.1.
         *
         */
        class WindPitchContPowerIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPitchContPowerIEC;
                if (null == bucket)
                   cim_data.WindPitchContPowerIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPitchContPowerIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPitchContPowerIEC";
                base.parse_element (/<cim:WindPitchContPowerIEC.dpmax>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.dpmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.dpmin>/g, obj, "dpmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.pmin>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pmin>/g, obj, "pmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.pset>([\s\S]*?)<\/cim:WindPitchContPowerIEC.pset>/g, obj, "pset", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.t1>([\s\S]*?)<\/cim:WindPitchContPowerIEC.t1>/g, obj, "t1", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.tr>([\s\S]*?)<\/cim:WindPitchContPowerIEC.tr>/g, obj, "tr", base.to_string, sub, context);
                base.parse_element (/<cim:WindPitchContPowerIEC.uuvrt>([\s\S]*?)<\/cim:WindPitchContPowerIEC.uuvrt>/g, obj, "uuvrt", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType1bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1bIEC", sub, context);
                base.parse_attribute (/<cim:WindPitchContPowerIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context);

                var bucket = context.parsed.WindPitchContPowerIEC;
                if (null == bucket)
                   context.parsed.WindPitchContPowerIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindPitchContPowerIEC", "dpmax", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "dpmin", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "pmin", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "pset", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "t1", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "tr", base.from_string, fields);
                base.export_element (obj, "WindPitchContPowerIEC", "uuvrt", base.from_string, fields);
                base.export_attribute (obj, "WindPitchContPowerIEC", "WindGenTurbineType1bIEC", fields);
                base.export_attribute (obj, "WindPitchContPowerIEC", "WindGenTurbineType2IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * IEC Type 4 generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.4.
         *
         */
        class WindGenType4IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenType4IEC;
                if (null == bucket)
                   cim_data.WindGenType4IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenType4IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType4IEC";
                base.parse_element (/<cim:WindGenType4IEC.dipmax>([\s\S]*?)<\/cim:WindGenType4IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.diqmax>([\s\S]*?)<\/cim:WindGenType4IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.diqmin>([\s\S]*?)<\/cim:WindGenType4IEC.diqmin>/g, obj, "diqmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType4IEC.tg>([\s\S]*?)<\/cim:WindGenType4IEC.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context);
                base.parse_attribute (/<cim:WindGenType4IEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);

                var bucket = context.parsed.WindGenType4IEC;
                if (null == bucket)
                   context.parsed.WindGenType4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindGenType4IEC", "dipmax", base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "diqmax", base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "diqmin", base.from_string, fields);
                base.export_element (obj, "WindGenType4IEC", "tg", base.from_string, fields);
                base.export_attribute (obj, "WindGenType4IEC", "WindTurbineType4aIEC", fields);
                base.export_attribute (obj, "WindGenType4IEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Simplified plant voltage and reactive power control model for use with type 3 and type 4 wind turbine models.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        class WindPlantReactiveControlIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPlantReactiveControlIEC;
                if (null == bucket)
                   cim_data.WindPlantReactiveControlIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPlantReactiveControlIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantReactiveControlIEC";
                base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmax>/g, obj, "dxrefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.dxrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.dxrefmin>/g, obj, "dxrefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpx>/g, obj, "kiwpx", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmax>/g, obj, "kiwpxmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kiwpxmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kiwpxmin>/g, obj, "kiwpxmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kpwpx>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kpwpx>/g, obj, "kpwpx", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqref>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqref>/g, obj, "kwpqref", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.kwpqu>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.kwpqu>/g, obj, "kwpqu", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.tuqfilt>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.tuqfilt>/g, obj, "tuqfilt", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twppfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twppfiltq>/g, obj, "twppfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twpqfiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpqfiltq>/g, obj, "twpqfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.twpufiltq>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.twpufiltq>/g, obj, "twpufiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.txft>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txft>/g, obj, "txft", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.txfv>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.txfv>/g, obj, "txfv", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.uwpqdip>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.uwpqdip>/g, obj, "uwpqdip", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.windPlantQcontrolModesType>/g, obj, "windPlantQcontrolModesType", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmax>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmax>/g, obj, "xrefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantReactiveControlIEC.xrefmin>([\s\S]*?)<\/cim:WindPlantReactiveControlIEC.xrefmin>/g, obj, "xrefmin", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindPlantReactiveControlIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context);

                var bucket = context.parsed.WindPlantReactiveControlIEC;
                if (null == bucket)
                   context.parsed.WindPlantReactiveControlIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindPlantReactiveControlIEC", "dxrefmax", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "dxrefmin", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpx", base.from_float, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpxmax", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kiwpxmin", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kpwpx", base.from_float, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kwpqref", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "kwpqu", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "tuqfilt", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twppfiltq", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twpqfiltq", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "twpufiltq", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "txft", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "txfv", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "uwpqdip", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "windPlantQcontrolModesType", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "xrefmax", base.from_string, fields);
                base.export_element (obj, "WindPlantReactiveControlIEC", "xrefmin", base.from_string, fields);
                base.export_attribute (obj, "WindPlantReactiveControlIEC", "WindPlantIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * P control model Type 3.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.4.
         *
         */
        class WindContPType3IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContPType3IEC;
                if (null == bucket)
                   cim_data.WindContPType3IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContPType3IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType3IEC";
                base.parse_element (/<cim:WindContPType3IEC.dpmax>([\s\S]*?)<\/cim:WindContPType3IEC.dpmax>/g, obj, "dpmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dprefmax>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dprefmin>([\s\S]*?)<\/cim:WindContPType3IEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dthetamax>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamax>/g, obj, "dthetamax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.dthetamaxuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.dthetamaxuvrt>/g, obj, "dthetamaxuvrt", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kdtd>([\s\S]*?)<\/cim:WindContPType3IEC.kdtd>/g, obj, "kdtd", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kip>([\s\S]*?)<\/cim:WindContPType3IEC.kip>/g, obj, "kip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.kpp>([\s\S]*?)<\/cim:WindContPType3IEC.kpp>/g, obj, "kpp", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.mpuvrt>([\s\S]*?)<\/cim:WindContPType3IEC.mpuvrt>/g, obj, "mpuvrt", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.omegaoffset>([\s\S]*?)<\/cim:WindContPType3IEC.omegaoffset>/g, obj, "omegaoffset", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.pdtdmax>([\s\S]*?)<\/cim:WindContPType3IEC.pdtdmax>/g, obj, "pdtdmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tdvs>([\s\S]*?)<\/cim:WindContPType3IEC.tdvs>/g, obj, "tdvs", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.thetaemin>([\s\S]*?)<\/cim:WindContPType3IEC.thetaemin>/g, obj, "thetaemin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.thetauscale>([\s\S]*?)<\/cim:WindContPType3IEC.thetauscale>/g, obj, "thetauscale", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tomegafiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tomegafiltp3>/g, obj, "tomegafiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tpfiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tpfiltp3>/g, obj, "tpfiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tpord>([\s\S]*?)<\/cim:WindContPType3IEC.tpord>/g, obj, "tpord", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.tufiltp3>([\s\S]*?)<\/cim:WindContPType3IEC.tufiltp3>/g, obj, "tufiltp3", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.twref>([\s\S]*?)<\/cim:WindContPType3IEC.twref>/g, obj, "twref", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.udvs>([\s\S]*?)<\/cim:WindContPType3IEC.udvs>/g, obj, "udvs", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.updip>([\s\S]*?)<\/cim:WindContPType3IEC.updip>/g, obj, "updip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.wdtd>([\s\S]*?)<\/cim:WindContPType3IEC.wdtd>/g, obj, "wdtd", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType3IEC.zeta>([\s\S]*?)<\/cim:WindContPType3IEC.zeta>/g, obj, "zeta", base.to_float, sub, context);
                base.parse_attribute (/<cim:WindContPType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);

                var bucket = context.parsed.WindContPType3IEC;
                if (null == bucket)
                   context.parsed.WindContPType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContPType3IEC", "dpmax", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dprefmax", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dprefmin", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dthetamax", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "dthetamaxuvrt", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kdtd", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kip", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "kpp", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "mpuvrt", base.from_boolean, fields);
                base.export_element (obj, "WindContPType3IEC", "omegaoffset", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "pdtdmax", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tdvs", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "thetaemin", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "thetauscale", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tomegafiltp3", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tpfiltp3", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tpord", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "tufiltp3", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "twref", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "udvs", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "updip", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "wdtd", base.from_string, fields);
                base.export_element (obj, "WindContPType3IEC", "zeta", base.from_float, fields);
                base.export_attribute (obj, "WindContPType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * General wind turbine Q control modes <i>M</i><sub>qG</sub>.
         *
         */
        class WindQcontrolModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindQcontrolModeKind;
                if (null == bucket)
                   cim_data.WindQcontrolModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindQcontrolModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindQcontrolModeKind";
                base.parse_element (/<cim:WindQcontrolModeKind.voltage>([\s\S]*?)<\/cim:WindQcontrolModeKind.voltage>/g, obj, "voltage", base.to_string, sub, context);
                base.parse_element (/<cim:WindQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:WindQcontrolModeKind.openLoopReactivePower>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLoopReactivePower>/g, obj, "openLoopReactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:WindQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:WindQcontrolModeKind.openLooppowerFactor>([\s\S]*?)<\/cim:WindQcontrolModeKind.openLooppowerFactor>/g, obj, "openLooppowerFactor", base.to_string, sub, context);

                var bucket = context.parsed.WindQcontrolModeKind;
                if (null == bucket)
                   context.parsed.WindQcontrolModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "WindQcontrolModeKind", "voltage", base.from_string, fields);
                base.export_element (obj, "WindQcontrolModeKind", "reactivePower", base.from_string, fields);
                base.export_element (obj, "WindQcontrolModeKind", "openLoopReactivePower", base.from_string, fields);
                base.export_element (obj, "WindQcontrolModeKind", "powerFactor", base.from_string, fields);
                base.export_element (obj, "WindQcontrolModeKind", "openLooppowerFactor", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Q control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.7.
         *
         */
        class WindContQIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContQIEC;
                if (null == bucket)
                   cim_data.WindContQIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContQIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQIEC";
                base.parse_element (/<cim:WindContQIEC.iqh1>([\s\S]*?)<\/cim:WindContQIEC.iqh1>/g, obj, "iqh1", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqmax>([\s\S]*?)<\/cim:WindContQIEC.iqmax>/g, obj, "iqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqmin>([\s\S]*?)<\/cim:WindContQIEC.iqmin>/g, obj, "iqmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.iqpost>([\s\S]*?)<\/cim:WindContQIEC.iqpost>/g, obj, "iqpost", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kiq>([\s\S]*?)<\/cim:WindContQIEC.kiq>/g, obj, "kiq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kiu>([\s\S]*?)<\/cim:WindContQIEC.kiu>/g, obj, "kiu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kpq>([\s\S]*?)<\/cim:WindContQIEC.kpq>/g, obj, "kpq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kpu>([\s\S]*?)<\/cim:WindContQIEC.kpu>/g, obj, "kpu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.kqv>([\s\S]*?)<\/cim:WindContQIEC.kqv>/g, obj, "kqv", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.rdroop>([\s\S]*?)<\/cim:WindContQIEC.rdroop>/g, obj, "rdroop", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tpfiltq>([\s\S]*?)<\/cim:WindContQIEC.tpfiltq>/g, obj, "tpfiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tpost>([\s\S]*?)<\/cim:WindContQIEC.tpost>/g, obj, "tpost", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tqord>([\s\S]*?)<\/cim:WindContQIEC.tqord>/g, obj, "tqord", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.tufiltq>([\s\S]*?)<\/cim:WindContQIEC.tufiltq>/g, obj, "tufiltq", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.udb1>([\s\S]*?)<\/cim:WindContQIEC.udb1>/g, obj, "udb1", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.udb2>([\s\S]*?)<\/cim:WindContQIEC.udb2>/g, obj, "udb2", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.umax>([\s\S]*?)<\/cim:WindContQIEC.umax>/g, obj, "umax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.umin>([\s\S]*?)<\/cim:WindContQIEC.umin>/g, obj, "umin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.uqdip>([\s\S]*?)<\/cim:WindContQIEC.uqdip>/g, obj, "uqdip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.uref0>([\s\S]*?)<\/cim:WindContQIEC.uref0>/g, obj, "uref0", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.windQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windQcontrolModesType>/g, obj, "windQcontrolModesType", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.windUVRTQcontrolModesType>([\s\S]*?)<\/cim:WindContQIEC.windUVRTQcontrolModesType>/g, obj, "windUVRTQcontrolModesType", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQIEC.xdroop>([\s\S]*?)<\/cim:WindContQIEC.xdroop>/g, obj, "xdroop", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindContQIEC;
                if (null == bucket)
                   context.parsed.WindContQIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContQIEC", "iqh1", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqmax", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqmin", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "iqpost", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kiq", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kiu", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kpq", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kpu", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "kqv", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "rdroop", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tpfiltq", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tpost", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tqord", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "tufiltq", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "udb1", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "udb2", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "umax", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "umin", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "uqdip", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "uref0", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "windQcontrolModesType", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "windUVRTQcontrolModesType", base.from_string, fields);
                base.export_element (obj, "WindContQIEC", "xdroop", base.from_string, fields);
                base.export_attribute (obj, "WindContQIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The constant aerodynamic torque model assumes that the aerodynamic torque is constant.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.1.1.
         *
         */
        class WindAeroConstIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindAeroConstIEC;
                if (null == bucket)
                   cim_data.WindAeroConstIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindAeroConstIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroConstIEC";
                base.parse_attribute (/<cim:WindAeroConstIEC.WindGenTurbineType1aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType1aIEC", sub, context);

                var bucket = context.parsed.WindAeroConstIEC;
                if (null == bucket)
                   context.parsed.WindAeroConstIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_attribute (obj, "WindAeroConstIEC", "WindGenTurbineType1aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant including their control models.
         *
         */
        class WindTurbineType3or4Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType3or4Dynamics;
                if (null == bucket)
                   cim_data.WindTurbineType3or4Dynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType3or4Dynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3or4Dynamics";
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.EnergySource\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "EnergySource", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.WindPlantDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantDynamics", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);

                var bucket = context.parsed.WindTurbineType3or4Dynamics;
                if (null == bucket)
                   context.parsed.WindTurbineType3or4Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "EnergySource", fields);
                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "WindPlantDynamics", fields);
                base.export_attribute (obj, "WindTurbineType3or4Dynamics", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * QP and QU limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.10.
         *
         */
        class WindContQPQULimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContQPQULimIEC;
                if (null == bucket)
                   cim_data.WindContQPQULimIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContQPQULimIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQPQULimIEC";
                base.parse_element (/<cim:WindContQPQULimIEC.tpfiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tpfiltql>/g, obj, "tpfiltql", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQPQULimIEC.tufiltql>([\s\S]*?)<\/cim:WindContQPQULimIEC.tufiltql>/g, obj, "tufiltql", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQPQULimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindContQPQULimIEC;
                if (null == bucket)
                   context.parsed.WindContQPQULimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContQPQULimIEC", "tpfiltql", base.from_string, fields);
                base.export_element (obj, "WindContQPQULimIEC", "tufiltql", base.from_string, fields);
                base.export_attribute (obj, "WindContQPQULimIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reactive power/voltage controller mode.
         *
         */
        class WindPlantQcontrolModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPlantQcontrolModeKind;
                if (null == bucket)
                   cim_data.WindPlantQcontrolModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPlantQcontrolModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantQcontrolModeKind";
                base.parse_element (/<cim:WindPlantQcontrolModeKind.reactivePower>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.reactivePower>/g, obj, "reactivePower", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantQcontrolModeKind.powerFactor>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.powerFactor>/g, obj, "powerFactor", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantQcontrolModeKind.uqStatic>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.uqStatic>/g, obj, "uqStatic", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantQcontrolModeKind.voltageControl>([\s\S]*?)<\/cim:WindPlantQcontrolModeKind.voltageControl>/g, obj, "voltageControl", base.to_string, sub, context);

                var bucket = context.parsed.WindPlantQcontrolModeKind;
                if (null == bucket)
                   context.parsed.WindPlantQcontrolModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "WindPlantQcontrolModeKind", "reactivePower", base.from_string, fields);
                base.export_element (obj, "WindPlantQcontrolModeKind", "powerFactor", base.from_string, fields);
                base.export_element (obj, "WindPlantQcontrolModeKind", "uqStatic", base.from_string, fields);
                base.export_element (obj, "WindPlantQcontrolModeKind", "voltageControl", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Two mass model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.2.1.
         *
         */
        class WindMechIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindMechIEC;
                if (null == bucket)
                   cim_data.WindMechIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindMechIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindMechIEC";
                base.parse_element (/<cim:WindMechIEC.cdrt>([\s\S]*?)<\/cim:WindMechIEC.cdrt>/g, obj, "cdrt", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.hgen>([\s\S]*?)<\/cim:WindMechIEC.hgen>/g, obj, "hgen", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.hwtr>([\s\S]*?)<\/cim:WindMechIEC.hwtr>/g, obj, "hwtr", base.to_string, sub, context);
                base.parse_element (/<cim:WindMechIEC.kdrt>([\s\S]*?)<\/cim:WindMechIEC.kdrt>/g, obj, "kdrt", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);
                base.parse_attribute (/<cim:WindMechIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);

                var bucket = context.parsed.WindMechIEC;
                if (null == bucket)
                   context.parsed.WindMechIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindMechIEC", "cdrt", base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "hgen", base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "hwtr", base.from_string, fields);
                base.export_element (obj, "WindMechIEC", "kdrt", base.from_string, fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType1or2IEC", fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType3IEC", fields);
                base.export_attribute (obj, "WindMechIEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Function of the lookup table.
         *
         */
        class WindLookupTableFunctionKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindLookupTableFunctionKind;
                if (null == bucket)
                   cim_data.WindLookupTableFunctionKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindLookupTableFunctionKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindLookupTableFunctionKind";
                base.parse_element (/<cim:WindLookupTableFunctionKind.prr>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.prr>/g, obj, "prr", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.omegap>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.omegap>/g, obj, "omegap", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.ipmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.ipmax>/g, obj, "ipmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.iqmax>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.iqmax>/g, obj, "iqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.pwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.pwp>/g, obj, "pwp", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tcwdu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tcwdu>/g, obj, "tcwdu", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tduwt>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tduwt>/g, obj, "tduwt", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxp>/g, obj, "qmaxp", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.qminp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminp>/g, obj, "qminp", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.qmaxu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qmaxu>/g, obj, "qmaxu", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.qminu>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qminu>/g, obj, "qminu", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tuover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuover>/g, obj, "tuover", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tuunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tuunder>/g, obj, "tuunder", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tfover>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfover>/g, obj, "tfover", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.tfunder>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.tfunder>/g, obj, "tfunder", base.to_string, sub, context);
                base.parse_element (/<cim:WindLookupTableFunctionKind.qwp>([\s\S]*?)<\/cim:WindLookupTableFunctionKind.qwp>/g, obj, "qwp", base.to_string, sub, context);

                var bucket = context.parsed.WindLookupTableFunctionKind;
                if (null == bucket)
                   context.parsed.WindLookupTableFunctionKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "WindLookupTableFunctionKind", "prr", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "omegap", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "ipmax", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "iqmax", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "pwp", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tcwdu", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tduwt", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "qmaxp", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "qminp", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "qmaxu", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "qminu", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tuover", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tuunder", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tfover", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "tfunder", base.from_string, fields);
                base.export_element (obj, "WindLookupTableFunctionKind", "qwp", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Two-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.3.
         *
         */
        class WindAeroTwoDimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindAeroTwoDimIEC;
                if (null == bucket)
                   cim_data.WindAeroTwoDimIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindAeroTwoDimIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroTwoDimIEC";
                base.parse_element (/<cim:WindAeroTwoDimIEC.dpomega>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpomega>/g, obj, "dpomega", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.dptheta>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dptheta>/g, obj, "dptheta", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.dpv1>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.dpv1>/g, obj, "dpv1", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.omegazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.omegazero>/g, obj, "omegazero", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.pavail>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.pavail>/g, obj, "pavail", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.thetav2>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetav2>/g, obj, "thetav2", base.to_string, sub, context);
                base.parse_element (/<cim:WindAeroTwoDimIEC.thetazero>([\s\S]*?)<\/cim:WindAeroTwoDimIEC.thetazero>/g, obj, "thetazero", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindAeroTwoDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);

                var bucket = context.parsed.WindAeroTwoDimIEC;
                if (null == bucket)
                   context.parsed.WindAeroTwoDimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindAeroTwoDimIEC", "dpomega", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "dptheta", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "dpv1", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "omegazero", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "pavail", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "thetav2", base.from_string, fields);
                base.export_element (obj, "WindAeroTwoDimIEC", "thetazero", base.from_string, fields);
                base.export_attribute (obj, "WindAeroTwoDimIEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Constant Q limitation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.9.
         *
         */
        class WindContQLimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContQLimIEC;
                if (null == bucket)
                   cim_data.WindContQLimIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContQLimIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContQLimIEC";
                base.parse_element (/<cim:WindContQLimIEC.qmax>([\s\S]*?)<\/cim:WindContQLimIEC.qmax>/g, obj, "qmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContQLimIEC.qmin>([\s\S]*?)<\/cim:WindContQLimIEC.qmin>/g, obj, "qmin", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContQLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindContQLimIEC;
                if (null == bucket)
                   context.parsed.WindContQLimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContQLimIEC", "qmax", base.from_string, fields);
                base.export_element (obj, "WindContQLimIEC", "qmin", base.from_string, fields);
                base.export_attribute (obj, "WindContQLimIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 generator models of IEC type 3A and 3B.
         *
         */
        class WindGenType3IEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenType3IEC;
                if (null == bucket)
                   cim_data.WindGenType3IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenType3IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3IEC";
                base.parse_element (/<cim:WindGenType3IEC.dipmax>([\s\S]*?)<\/cim:WindGenType3IEC.dipmax>/g, obj, "dipmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3IEC.diqmax>([\s\S]*?)<\/cim:WindGenType3IEC.diqmax>/g, obj, "diqmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3IEC.xs>([\s\S]*?)<\/cim:WindGenType3IEC.xs>/g, obj, "xs", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType3IEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);

                var bucket = context.parsed.WindGenType3IEC;
                if (null == bucket)
                   context.parsed.WindGenType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindGenType3IEC", "dipmax", base.from_string, fields);
                base.export_element (obj, "WindGenType3IEC", "diqmax", base.from_string, fields);
                base.export_element (obj, "WindGenType3IEC", "xs", base.from_string, fields);
                base.export_attribute (obj, "WindGenType3IEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The grid protection model includes protection against over and under voltage, and against over and under frequency.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.6.
         *
         */
        class WindProtectionIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindProtectionIEC;
                if (null == bucket)
                   cim_data.WindProtectionIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindProtectionIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindProtectionIEC";
                base.parse_element (/<cim:WindProtectionIEC.dfimax>([\s\S]*?)<\/cim:WindProtectionIEC.dfimax>/g, obj, "dfimax", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.fover>([\s\S]*?)<\/cim:WindProtectionIEC.fover>/g, obj, "fover", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.funder>([\s\S]*?)<\/cim:WindProtectionIEC.funder>/g, obj, "funder", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.mzc>([\s\S]*?)<\/cim:WindProtectionIEC.mzc>/g, obj, "mzc", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.tfma>([\s\S]*?)<\/cim:WindProtectionIEC.tfma>/g, obj, "tfma", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.uover>([\s\S]*?)<\/cim:WindProtectionIEC.uover>/g, obj, "uover", base.to_string, sub, context);
                base.parse_element (/<cim:WindProtectionIEC.uunder>([\s\S]*?)<\/cim:WindProtectionIEC.uunder>/g, obj, "uunder", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType1or2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType1or2IEC", sub, context);
                base.parse_attribute (/<cim:WindProtectionIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindProtectionIEC;
                if (null == bucket)
                   context.parsed.WindProtectionIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindProtectionIEC", "dfimax", base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "fover", base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "funder", base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "mzc", base.from_boolean, fields);
                base.export_element (obj, "WindProtectionIEC", "tfma", base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "uover", base.from_string, fields);
                base.export_element (obj, "WindProtectionIEC", "uunder", base.from_string, fields);
                base.export_attribute (obj, "WindProtectionIEC", "WindTurbineType1or2IEC", fields);
                base.export_attribute (obj, "WindProtectionIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Rotor resistance control model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.3.
         *
         */
        class WindContRotorRIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContRotorRIEC;
                if (null == bucket)
                   cim_data.WindContRotorRIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContRotorRIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContRotorRIEC";
                base.parse_element (/<cim:WindContRotorRIEC.kirr>([\s\S]*?)<\/cim:WindContRotorRIEC.kirr>/g, obj, "kirr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.komegafilt>([\s\S]*?)<\/cim:WindContRotorRIEC.komegafilt>/g, obj, "komegafilt", base.to_float, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.kpfilt>([\s\S]*?)<\/cim:WindContRotorRIEC.kpfilt>/g, obj, "kpfilt", base.to_float, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.kprr>([\s\S]*?)<\/cim:WindContRotorRIEC.kprr>/g, obj, "kprr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.rmax>([\s\S]*?)<\/cim:WindContRotorRIEC.rmax>/g, obj, "rmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.rmin>([\s\S]*?)<\/cim:WindContRotorRIEC.rmin>/g, obj, "rmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.tomegafiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tomegafiltrr>/g, obj, "tomegafiltrr", base.to_string, sub, context);
                base.parse_element (/<cim:WindContRotorRIEC.tpfiltrr>([\s\S]*?)<\/cim:WindContRotorRIEC.tpfiltrr>/g, obj, "tpfiltrr", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContRotorRIEC.WindGenTurbineType2IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenTurbineType2IEC", sub, context);

                var bucket = context.parsed.WindContRotorRIEC;
                if (null == bucket)
                   context.parsed.WindContRotorRIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContRotorRIEC", "kirr", base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "komegafilt", base.from_float, fields);
                base.export_element (obj, "WindContRotorRIEC", "kpfilt", base.from_float, fields);
                base.export_element (obj, "WindContRotorRIEC", "kprr", base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "rmax", base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "rmin", base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "tomegafiltrr", base.from_string, fields);
                base.export_element (obj, "WindContRotorRIEC", "tpfiltrr", base.from_string, fields);
                base.export_attribute (obj, "WindContRotorRIEC", "WindGenTurbineType2IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * P control model Type 4B.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.6.
         *
         */
        class WindContPType4bIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContPType4bIEC;
                if (null == bucket)
                   cim_data.WindContPType4bIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContPType4bIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType4bIEC";
                base.parse_element (/<cim:WindContPType4bIEC.dpmaxp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.dpmaxp4b>/g, obj, "dpmaxp4b", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tpaero>([\s\S]*?)<\/cim:WindContPType4bIEC.tpaero>/g, obj, "tpaero", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tpordp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tpordp4b>/g, obj, "tpordp4b", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4bIEC.tufiltp4b>([\s\S]*?)<\/cim:WindContPType4bIEC.tufiltp4b>/g, obj, "tufiltp4b", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPType4bIEC.WindTurbineType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4bIEC", sub, context);

                var bucket = context.parsed.WindContPType4bIEC;
                if (null == bucket)
                   context.parsed.WindContPType4bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContPType4bIEC", "dpmaxp4b", base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tpaero", base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tpordp4b", base.from_string, fields);
                base.export_element (obj, "WindContPType4bIEC", "tufiltp4b", base.from_string, fields);
                base.export_attribute (obj, "WindContPType4bIEC", "WindTurbineType4bIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Reference frame rotation model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.5.
         *
         */
        class WindRefFrameRotIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindRefFrameRotIEC;
                if (null == bucket)
                   cim_data.WindRefFrameRotIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindRefFrameRotIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindRefFrameRotIEC";
                base.parse_element (/<cim:WindRefFrameRotIEC.tpll>([\s\S]*?)<\/cim:WindRefFrameRotIEC.tpll>/g, obj, "tpll", base.to_string, sub, context);
                base.parse_element (/<cim:WindRefFrameRotIEC.upll1>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll1>/g, obj, "upll1", base.to_string, sub, context);
                base.parse_element (/<cim:WindRefFrameRotIEC.upll2>([\s\S]*?)<\/cim:WindRefFrameRotIEC.upll2>/g, obj, "upll2", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindRefFrameRotIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindRefFrameRotIEC;
                if (null == bucket)
                   context.parsed.WindRefFrameRotIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindRefFrameRotIEC", "tpll", base.from_string, fields);
                base.export_element (obj, "WindRefFrameRotIEC", "upll1", base.from_string, fields);
                base.export_element (obj, "WindRefFrameRotIEC", "upll2", base.from_string, fields);
                base.export_attribute (obj, "WindRefFrameRotIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * The class models a look up table for the purpose of wind standard models.
         *
         */
        class WindDynamicsLookupTable extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindDynamicsLookupTable;
                if (null == bucket)
                   cim_data.WindDynamicsLookupTable = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindDynamicsLookupTable[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindDynamicsLookupTable";
                base.parse_element (/<cim:WindDynamicsLookupTable.input>([\s\S]*?)<\/cim:WindDynamicsLookupTable.input>/g, obj, "input", base.to_float, sub, context);
                base.parse_element (/<cim:WindDynamicsLookupTable.lookupTableFunctionType>([\s\S]*?)<\/cim:WindDynamicsLookupTable.lookupTableFunctionType>/g, obj, "lookupTableFunctionType", base.to_string, sub, context);
                base.parse_element (/<cim:WindDynamicsLookupTable.output>([\s\S]*?)<\/cim:WindDynamicsLookupTable.output>/g, obj, "output", base.to_float, sub, context);
                base.parse_element (/<cim:WindDynamicsLookupTable.sequence>([\s\S]*?)<\/cim:WindDynamicsLookupTable.sequence>/g, obj, "sequence", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindGenType3bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3bIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context);
                base.parse_attribute (/<cim:WindDynamicsLookupTable.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context);

                var bucket = context.parsed.WindDynamicsLookupTable;
                if (null == bucket)
                   context.parsed.WindDynamicsLookupTable = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindDynamicsLookupTable", "input", base.from_float, fields);
                base.export_element (obj, "WindDynamicsLookupTable", "lookupTableFunctionType", base.from_string, fields);
                base.export_element (obj, "WindDynamicsLookupTable", "output", base.from_float, fields);
                base.export_element (obj, "WindDynamicsLookupTable", "sequence", base.from_string, fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPitchContPowerIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPlantFreqPcontrolIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContQPQULimIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindGenType3bIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContPType3IEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindPlantReactiveControlIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindProtectionIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContCurrLimIEC", fields);
                base.export_attribute (obj, "WindDynamicsLookupTable", "WindContRotorRIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 1 and 2 and their control models.
         *
         */
        class WindTurbineType1or2Dynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType1or2Dynamics;
                if (null == bucket)
                   cim_data.WindTurbineType1or2Dynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType1or2Dynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType1or2Dynamics";
                base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.AsynchronousMachineDynamics\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "AsynchronousMachineDynamics", sub, context);
                base.parse_attribute (/<cim:WindTurbineType1or2Dynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);

                var bucket = context.parsed.WindTurbineType1or2Dynamics;
                if (null == bucket)
                   context.parsed.WindTurbineType1or2Dynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType1or2Dynamics", "AsynchronousMachineDynamics", fields);
                base.export_attribute (obj, "WindTurbineType1or2Dynamics", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Frequency and active power controller model.
         *
         * Reference: IEC Standard 61400-27-1 Annex D.
         *
         */
        class WindPlantFreqPcontrolIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPlantFreqPcontrolIEC;
                if (null == bucket)
                   cim_data.WindPlantFreqPcontrolIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPlantFreqPcontrolIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantFreqPcontrolIEC";
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmax>/g, obj, "dprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dprefmin>/g, obj, "dprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmax>/g, obj, "dpwprefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.dpwprefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.dpwprefmin>/g, obj, "dpwprefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwpp>/g, obj, "kiwpp", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmax>/g, obj, "kiwppmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kiwppmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kiwppmin>/g, obj, "kiwppmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kpwpp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kpwpp>/g, obj, "kpwpp", base.to_float, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.kwppref>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.kwppref>/g, obj, "kwppref", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmax>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmax>/g, obj, "prefmax", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.prefmin>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.prefmin>/g, obj, "prefmin", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpft>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpft>/g, obj, "tpft", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.tpfv>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.tpfv>/g, obj, "tpfv", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twpffiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twpffiltp>/g, obj, "twpffiltp", base.to_string, sub, context);
                base.parse_element (/<cim:WindPlantFreqPcontrolIEC.twppfiltp>([\s\S]*?)<\/cim:WindPlantFreqPcontrolIEC.twppfiltp>/g, obj, "twppfiltp", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindPlantFreqPcontrolIEC.WindPlantIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantIEC", sub, context);

                var bucket = context.parsed.WindPlantFreqPcontrolIEC;
                if (null == bucket)
                   context.parsed.WindPlantFreqPcontrolIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dprefmax", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dprefmin", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dpwprefmax", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "dpwprefmin", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwpp", base.from_float, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwppmax", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kiwppmin", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kpwpp", base.from_float, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "kwppref", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "prefmax", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "prefmin", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "tpft", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "tpfv", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "twpffiltp", base.from_string, fields);
                base.export_element (obj, "WindPlantFreqPcontrolIEC", "twppfiltp", base.from_string, fields);
                base.export_attribute (obj, "WindPlantFreqPcontrolIEC", "WindPlantIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * P control model Type 4A.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.5.5.
         *
         */
        class WindContPType4aIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContPType4aIEC;
                if (null == bucket)
                   cim_data.WindContPType4aIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContPType4aIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContPType4aIEC";
                base.parse_element (/<cim:WindContPType4aIEC.dpmaxp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.dpmaxp4a>/g, obj, "dpmaxp4a", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4aIEC.tpordp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tpordp4a>/g, obj, "tpordp4a", base.to_string, sub, context);
                base.parse_element (/<cim:WindContPType4aIEC.tufiltp4a>([\s\S]*?)<\/cim:WindContPType4aIEC.tufiltp4a>/g, obj, "tufiltp4a", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContPType4aIEC.WindTurbineType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4aIEC", sub, context);

                var bucket = context.parsed.WindContPType4aIEC;
                if (null == bucket)
                   context.parsed.WindContPType4aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContPType4aIEC", "dpmaxp4a", base.from_string, fields);
                base.export_element (obj, "WindContPType4aIEC", "tpordp4a", base.from_string, fields);
                base.export_element (obj, "WindContPType4aIEC", "tufiltp4a", base.from_string, fields);
                base.export_attribute (obj, "WindContPType4aIEC", "WindTurbineType4aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * UVRT Q control modes <i>M</i><sub>qUVRT</sub>.
         *
         */
        class WindUVRTQcontrolModeKind extends base.Element
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindUVRTQcontrolModeKind;
                if (null == bucket)
                   cim_data.WindUVRTQcontrolModeKind = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindUVRTQcontrolModeKind[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = base.Element.prototype.parse.call (this, context, sub);
                obj.cls = "WindUVRTQcontrolModeKind";
                base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode0>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode0>/g, obj, "mode0", base.to_string, sub, context);
                base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode1>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode1>/g, obj, "mode1", base.to_string, sub, context);
                base.parse_element (/<cim:WindUVRTQcontrolModeKind.mode2>([\s\S]*?)<\/cim:WindUVRTQcontrolModeKind.mode2>/g, obj, "mode2", base.to_string, sub, context);

                var bucket = context.parsed.WindUVRTQcontrolModeKind;
                if (null == bucket)
                   context.parsed.WindUVRTQcontrolModeKind = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = [];

                base.export_element (obj, "WindUVRTQcontrolModeKind", "mode0", base.from_string, fields);
                base.export_element (obj, "WindUVRTQcontrolModeKind", "mode1", base.from_string, fields);
                base.export_element (obj, "WindUVRTQcontrolModeKind", "mode2", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Current limitation model.
         *
         * The current limitation model combines the physical limits and the control limits.
         *
         */
        class WindContCurrLimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindContCurrLimIEC;
                if (null == bucket)
                   cim_data.WindContCurrLimIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindContCurrLimIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindContCurrLimIEC";
                base.parse_element (/<cim:WindContCurrLimIEC.imax>([\s\S]*?)<\/cim:WindContCurrLimIEC.imax>/g, obj, "imax", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.imaxdip>([\s\S]*?)<\/cim:WindContCurrLimIEC.imaxdip>/g, obj, "imaxdip", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.kpqu>([\s\S]*?)<\/cim:WindContCurrLimIEC.kpqu>/g, obj, "kpqu", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.mdfslim>([\s\S]*?)<\/cim:WindContCurrLimIEC.mdfslim>/g, obj, "mdfslim", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.mqpri>([\s\S]*?)<\/cim:WindContCurrLimIEC.mqpri>/g, obj, "mqpri", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.tufiltcl>([\s\S]*?)<\/cim:WindContCurrLimIEC.tufiltcl>/g, obj, "tufiltcl", base.to_string, sub, context);
                base.parse_element (/<cim:WindContCurrLimIEC.upqumax>([\s\S]*?)<\/cim:WindContCurrLimIEC.upqumax>/g, obj, "upqumax", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindContCurrLimIEC.WindTurbineType3or4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3or4IEC", sub, context);

                var bucket = context.parsed.WindContCurrLimIEC;
                if (null == bucket)
                   context.parsed.WindContCurrLimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindContCurrLimIEC", "imax", base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "imaxdip", base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "kpqu", base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "mdfslim", base.from_boolean, fields);
                base.export_element (obj, "WindContCurrLimIEC", "mqpri", base.from_boolean, fields);
                base.export_element (obj, "WindContCurrLimIEC", "tufiltcl", base.from_string, fields);
                base.export_element (obj, "WindContCurrLimIEC", "upqumax", base.from_string, fields);
                base.export_attribute (obj, "WindContCurrLimIEC", "WindTurbineType3or4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * One-dimensional aerodynamic model.
         *
         * Reference: IEC Standard 614000-27-1 Section 5.6.1.2.
         *
         */
        class WindAeroOneDimIEC extends Core.IdentifiedObject
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindAeroOneDimIEC;
                if (null == bucket)
                   cim_data.WindAeroOneDimIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindAeroOneDimIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = Core.IdentifiedObject.prototype.parse.call (this, context, sub);
                obj.cls = "WindAeroOneDimIEC";
                base.parse_element (/<cim:WindAeroOneDimIEC.ka>([\s\S]*?)<\/cim:WindAeroOneDimIEC.ka>/g, obj, "ka", base.to_float, sub, context);
                base.parse_element (/<cim:WindAeroOneDimIEC.thetaomega>([\s\S]*?)<\/cim:WindAeroOneDimIEC.thetaomega>/g, obj, "thetaomega", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindAeroOneDimIEC.WindTurbineType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType3IEC", sub, context);

                var bucket = context.parsed.WindAeroOneDimIEC;
                if (null == bucket)
                   context.parsed.WindAeroOneDimIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["IdentifiedObject"](obj, exporters, false);

                base.export_element (obj, "WindAeroOneDimIEC", "ka", base.from_float, fields);
                base.export_element (obj, "WindAeroOneDimIEC", "thetaomega", base.from_string, fields);
                base.export_attribute (obj, "WindAeroOneDimIEC", "WindTurbineType3IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to wind turbines Type 3 and 4 and wind plant IEC and user defined wind plants including their control models.
         *
         */
        class WindPlantDynamics extends StandardModels.DynamicsFunctionBlock
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPlantDynamics;
                if (null == bucket)
                   cim_data.WindPlantDynamics = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPlantDynamics[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = StandardModels.DynamicsFunctionBlock.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantDynamics";
                base.parse_attribute (/<cim:WindPlantDynamics.RemoteInputSignal\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "RemoteInputSignal", sub, context);

                var bucket = context.parsed.WindPlantDynamics;
                if (null == bucket)
                   context.parsed.WindPlantDynamics = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["DynamicsFunctionBlock"](obj, exporters, false);

                base.export_attribute (obj, "WindPlantDynamics", "RemoteInputSignal", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 and 4 including their control models.
         *
         */
        class WindTurbineType3or4IEC extends WindTurbineType3or4Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType3or4IEC;
                if (null == bucket)
                   cim_data.WindTurbineType3or4IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType3or4IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3or4IEC";
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindRefFrameRotIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindRefFrameRotIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQPQULimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQPQULimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContCurrLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContCurrLimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WIndContQIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WIndContQIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindContQLimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContQLimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3or4IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);

                var bucket = context.parsed.WindTurbineType3or4IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType3or4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType3or4Dynamics"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindRefFrameRotIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContQPQULimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContCurrLimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WIndContQIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindContQLimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3or4IEC", "WindProtectionIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 4 including their control models.
         *
         */
        class WindTurbineType4IEC extends WindTurbineType3or4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType4IEC;
                if (null == bucket)
                   cim_data.WindTurbineType4IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType4IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4IEC";
                base.parse_attribute (/<cim:WindTurbineType4IEC.WindGenType3aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3aIEC", sub, context);

                var bucket = context.parsed.WindTurbineType4IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType3or4IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType4IEC", "WindGenType3aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 3 including their control models.
         *
         */
        class WindTurbineType3IEC extends WindTurbineType3or4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType3IEC;
                if (null == bucket)
                   cim_data.WindTurbineType3IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType3IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType3or4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType3IEC";
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindGenType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType3IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPitchAngleIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPitchAngleIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindContPType3IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType3IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroTwoDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroTwoDimIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType3IEC.WindAeroOneDimIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroOneDimIEC", sub, context);

                var bucket = context.parsed.WindTurbineType3IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType3IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType3or4IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType3IEC", "WindGenType3IEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindContPitchAngleIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindContPType3IEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindAeroTwoDimIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindMechIEC", fields);
                base.export_attribute (obj, "WindTurbineType3IEC", "WindAeroOneDimIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.3.
         *
         */
        class WindTurbineType4aIEC extends WindTurbineType4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType4aIEC;
                if (null == bucket)
                   cim_data.WindTurbineType4aIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType4aIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4aIEC";
                base.parse_attribute (/<cim:WindTurbineType4aIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4aIEC.WindContPType4aIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4aIEC", sub, context);

                var bucket = context.parsed.WindTurbineType4aIEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType4IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType4aIEC", "WindGenType4IEC", fields);
                base.export_attribute (obj, "WindTurbineType4aIEC", "WindContPType4aIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Wind turbine IEC Type 4A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.5.2.
         *
         */
        class WindTurbineType4bIEC extends WindTurbineType4IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType4bIEC;
                if (null == bucket)
                   cim_data.WindTurbineType4bIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType4bIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType4IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType4bIEC";
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindContPType4bIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContPType4bIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindGenType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindGenType4IEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType4bIEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);

                var bucket = context.parsed.WindTurbineType4bIEC;
                if (null == bucket)
                   context.parsed.WindTurbineType4bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType4IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType4bIEC", "WindContPType4bIEC", fields);
                base.export_attribute (obj, "WindTurbineType4bIEC", "WindGenType4IEC", fields);
                base.export_attribute (obj, "WindTurbineType4bIEC", "WindMechIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * IEC Type 3A generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.2.
         *
         */
        class WindGenType3aIEC extends WindGenType3IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenType3aIEC;
                if (null == bucket)
                   cim_data.WindGenType3aIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenType3aIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindGenType3IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3aIEC";
                base.parse_element (/<cim:WindGenType3aIEC.kpc>([\s\S]*?)<\/cim:WindGenType3aIEC.kpc>/g, obj, "kpc", base.to_float, sub, context);
                base.parse_element (/<cim:WindGenType3aIEC.tic>([\s\S]*?)<\/cim:WindGenType3aIEC.tic>/g, obj, "tic", base.to_string, sub, context);
                base.parse_attribute (/<cim:WindGenType3aIEC.WindTurbineType4IEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindTurbineType4IEC", sub, context);

                var bucket = context.parsed.WindGenType3aIEC;
                if (null == bucket)
                   context.parsed.WindGenType3aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindGenType3IEC"](obj, exporters, false);

                base.export_element (obj, "WindGenType3aIEC", "kpc", base.from_float, fields);
                base.export_element (obj, "WindGenType3aIEC", "tic", base.from_string, fields);
                base.export_attribute (obj, "WindGenType3aIEC", "WindTurbineType4IEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * IEC Type 3B generator set model.
         *
         * Reference: IEC Standard 61400-27-1 Section 5.6.3.3.
         *
         */
        class WindGenType3bIEC extends WindGenType3IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenType3bIEC;
                if (null == bucket)
                   cim_data.WindGenType3bIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenType3bIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindGenType3IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenType3bIEC";
                base.parse_element (/<cim:WindGenType3bIEC.mwtcwp>([\s\S]*?)<\/cim:WindGenType3bIEC.mwtcwp>/g, obj, "mwtcwp", base.to_boolean, sub, context);
                base.parse_element (/<cim:WindGenType3bIEC.tg>([\s\S]*?)<\/cim:WindGenType3bIEC.tg>/g, obj, "tg", base.to_string, sub, context);
                base.parse_element (/<cim:WindGenType3bIEC.two>([\s\S]*?)<\/cim:WindGenType3bIEC.two>/g, obj, "two", base.to_string, sub, context);

                var bucket = context.parsed.WindGenType3bIEC;
                if (null == bucket)
                   context.parsed.WindGenType3bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindGenType3IEC"](obj, exporters, false);

                base.export_element (obj, "WindGenType3bIEC", "mwtcwp", base.from_boolean, fields);
                base.export_element (obj, "WindGenType3bIEC", "tg", base.from_string, fields);
                base.export_element (obj, "WindGenType3bIEC", "two", base.from_string, fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Parent class supporting relationships to IEC wind turbines Type 1 and 2 including their control models.
         *
         * Generator model for wind turbine of IEC Type 1 or Type 2 is a standard asynchronous generator model.
         *
         */
        class WindTurbineType1or2IEC extends WindTurbineType1or2Dynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindTurbineType1or2IEC;
                if (null == bucket)
                   cim_data.WindTurbineType1or2IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindTurbineType1or2IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2Dynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindTurbineType1or2IEC";
                base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindProtectionIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindProtectionIEC", sub, context);
                base.parse_attribute (/<cim:WindTurbineType1or2IEC.WindMechIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindMechIEC", sub, context);

                var bucket = context.parsed.WindTurbineType1or2IEC;
                if (null == bucket)
                   context.parsed.WindTurbineType1or2IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType1or2Dynamics"](obj, exporters, false);

                base.export_attribute (obj, "WindTurbineType1or2IEC", "WindProtectionIEC", fields);
                base.export_attribute (obj, "WindTurbineType1or2IEC", "WindMechIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Wind turbine IEC Type 1B.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.3.
         *
         */
        class WindGenTurbineType1bIEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenTurbineType1bIEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType1bIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenTurbineType1bIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType1bIEC";
                base.parse_attribute (/<cim:WindGenTurbineType1bIEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);

                var bucket = context.parsed.WindGenTurbineType1bIEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType1bIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType1or2IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindGenTurbineType1bIEC", "WindPitchContPowerIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Wind turbine IEC Type 1A.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.2.2.
         *
         */
        class WindGenTurbineType1aIEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenTurbineType1aIEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType1aIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenTurbineType1aIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType1aIEC";
                base.parse_attribute (/<cim:WindGenTurbineType1aIEC.WindAeroConstIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindAeroConstIEC", sub, context);

                var bucket = context.parsed.WindGenTurbineType1aIEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType1aIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType1or2IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindGenTurbineType1aIEC", "WindAeroConstIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Wind turbine IEC Type 2.
         *
         * Reference: IEC Standard 61400-27-1, section 5.5.3.
         *
         */
        class WindGenTurbineType2IEC extends WindTurbineType1or2IEC
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindGenTurbineType2IEC;
                if (null == bucket)
                   cim_data.WindGenTurbineType2IEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindGenTurbineType2IEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindTurbineType1or2IEC.prototype.parse.call (this, context, sub);
                obj.cls = "WindGenTurbineType2IEC";
                base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindContRotorRIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindContRotorRIEC", sub, context);
                base.parse_attribute (/<cim:WindGenTurbineType2IEC.WindPitchContPowerIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPitchContPowerIEC", sub, context);

                var bucket = context.parsed.WindGenTurbineType2IEC;
                if (null == bucket)
                   context.parsed.WindGenTurbineType2IEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindTurbineType1or2IEC"](obj, exporters, false);

                base.export_attribute (obj, "WindGenTurbineType2IEC", "WindContRotorRIEC", fields);
                base.export_attribute (obj, "WindGenTurbineType2IEC", "WindPitchContPowerIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        /**
         * Simplified IEC type plant level model.
         *
         * Reference: IEC 61400-27-1, Annex D.
         *
         */
        class WindPlantIEC extends WindPlantDynamics
        {
            constructor (template, cim_data)
            {
                super (template, cim_data);
                this._id = template.id;
                var bucket = cim_data.WindPlantIEC;
                if (null == bucket)
                   cim_data.WindPlantIEC = bucket = {};
                bucket[this._id] = template;
            }

            remove (cim_data)
            {
               super.remove (cim_data);
               delete cim_data.WindPlantIEC[this._id];
            }

            parse (context, sub)
            {
                var obj;

                obj = WindPlantDynamics.prototype.parse.call (this, context, sub);
                obj.cls = "WindPlantIEC";
                base.parse_attribute (/<cim:WindPlantIEC.WindPlantReactiveControlIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantReactiveControlIEC", sub, context);
                base.parse_attribute (/<cim:WindPlantIEC.WindPlantFreqPcontrolIEC\s+rdf:resource\s*?=\s*?("|')([\s\S]*?)\1\s*?\/>/g, obj, "WindPlantFreqPcontrolIEC", sub, context);

                var bucket = context.parsed.WindPlantIEC;
                if (null == bucket)
                   context.parsed.WindPlantIEC = bucket = {};
                bucket[obj.id] = obj;

                return (obj);
            }

            export (obj, exporters, full)
            {
                var fields = exporters["WindPlantDynamics"](obj, exporters, false);

                base.export_attribute (obj, "WindPlantIEC", "WindPlantReactiveControlIEC", fields);
                base.export_attribute (obj, "WindPlantIEC", "WindPlantFreqPcontrolIEC", fields);
                if (full)
                    base.Element.prototype.export.call (this, obj, fields)

                return (fields);
            }
        }

        return (
            {
                WindTurbineType4IEC: WindTurbineType4IEC,
                WindGenTurbineType1bIEC: WindGenTurbineType1bIEC,
                WindTurbineType3or4Dynamics: WindTurbineType3or4Dynamics,
                WindTurbineType1or2IEC: WindTurbineType1or2IEC,
                WindGenTurbineType2IEC: WindGenTurbineType2IEC,
                WindPlantIEC: WindPlantIEC,
                WindAeroConstIEC: WindAeroConstIEC,
                WindTurbineType4aIEC: WindTurbineType4aIEC,
                WindContRotorRIEC: WindContRotorRIEC,
                WindGenTurbineType1aIEC: WindGenTurbineType1aIEC,
                WindContCurrLimIEC: WindContCurrLimIEC,
                WindGenType4IEC: WindGenType4IEC,
                WindTurbineType4bIEC: WindTurbineType4bIEC,
                WindTurbineType3IEC: WindTurbineType3IEC,
                WindContQLimIEC: WindContQLimIEC,
                WindContQIEC: WindContQIEC,
                WindContPType3IEC: WindContPType3IEC,
                WindGenType3aIEC: WindGenType3aIEC,
                WindPlantReactiveControlIEC: WindPlantReactiveControlIEC,
                WindPlantDynamics: WindPlantDynamics,
                WindMechIEC: WindMechIEC,
                WindGenType3bIEC: WindGenType3bIEC,
                WindQcontrolModeKind: WindQcontrolModeKind,
                WindContPType4bIEC: WindContPType4bIEC,
                WindTurbineType1or2Dynamics: WindTurbineType1or2Dynamics,
                WindContQPQULimIEC: WindContQPQULimIEC,
                WindContPitchAngleIEC: WindContPitchAngleIEC,
                WindRefFrameRotIEC: WindRefFrameRotIEC,
                WindContPType4aIEC: WindContPType4aIEC,
                WindAeroOneDimIEC: WindAeroOneDimIEC,
                WindLookupTableFunctionKind: WindLookupTableFunctionKind,
                WindPlantQcontrolModeKind: WindPlantQcontrolModeKind,
                WindPitchContPowerIEC: WindPitchContPowerIEC,
                WindProtectionIEC: WindProtectionIEC,
                WindDynamicsLookupTable: WindDynamicsLookupTable,
                WindTurbineType3or4IEC: WindTurbineType3or4IEC,
                WindUVRTQcontrolModeKind: WindUVRTQcontrolModeKind,
                WindAeroTwoDimIEC: WindAeroTwoDimIEC,
                WindPlantFreqPcontrolIEC: WindPlantFreqPcontrolIEC,
                WindGenType3IEC: WindGenType3IEC
            }
        );
    }
);